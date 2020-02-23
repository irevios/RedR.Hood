"use strict";
// Modo Debug
let modoDebug = false;
modoDebug ? $("#fondo,#overfondo").addClass("modoDebug") : "";

// Canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Inicio
let personaje;
let nivel;
let anguloLanzamiento = 0;
let puntuacion = 0;

// Hacer que el juego siempre tenga el tamaño correcto según la pantalla
$(window).resize((e) => rescala());
$(window).on('load', () => {
    setTimeout(function() {
        $(".cargando").css("opacity", "0");
        setTimeout(function() {
            $(".cargando").hide();
        }, 1000);
    }, 1000);
});

let intervaloGravedad, intervaloEnemigos, intervaloMovAleatorio, intervaloTocar, intervaloTiempo;

$(document).ready(function() {
    // Inicialización
    rescala();
    generarMapas();
    $("#mensaje").dialog({ appendTo: "body", autoOpen: false });
    //$("#mensaje").dialog("open");
    try {
        localStorage.getItem('nivel');
    } catch (e) {
        $(".alerta").show();
        $(".continuar").hide();
    }
    personaje = new Caperucita($('#caperucita'));
    for (var i = 0; i < personaje.vida; i++) {
        $("<i class='fa fa-heart' aria-hidden='true'></i>").insertBefore("#puntuacion");
    };

});

$("#partida .nueva").click(nuevaPartida);
$("#partida .continuar").click(continuar);

function nuevaPartida() {
    partida(mapas.N0);
    try {
        localStorage.setItem("datos", JSON.stringify({ 'nivel': 0, "inventario": personaje.inventario, "armas": personaje.armas, "armaEquipada": personaje.armaEquipada, "puntuacion": puntuacion }));
    } catch (e) {
        $(".alerta").show();
        $(".continuar").hide();
    }
}

function continuar() {
    let d = JSON.parse(localStorage.getItem('datos'));
    puntuacion = d.puntuacion;
    ganaPuntos(0);
    personaje.inventario = d.inventario;
    personaje.armaEquipada = d.armaEquipada;
    personaje.armas = d.armas;
    if (d.nivel != undefined) {
        partida(mapas["N" + d.nivel]);
    }
}

function partida(n) {
    $("#panel, #vida, #caperucita").show();
    $("#inicio").hide("fade");
    // Mapa
    nivel = n;
    nivel.cambiarFondo();
    actualizaPanel();
    personaje.izquierda = nivel.posInicialX;
    personaje.arriba = nivel.posInicialY;
    // Intervalos
    nivel.generaEnemigos();
    gravity();
    enemigos();
    reloj();
    enemigosMovAleatorio();
    compruebaTocar();
    personaje.capa.show();
    // Controles
    controlaMouse();
    controlaTeclas();
}

function actualizaPanel() {
    $("#nivel span").text(nivel.num + 1);
    $("#tiempo span").text(nivel.tiempo);
}

function gravity() {
    clearTimeout(intervaloGravedad);
    personaje.gravedad();
    intervaloGravedad = setTimeout(gravity, 50);
}

function enemigos() {
    clearTimeout(intervaloEnemigos);
    dibujaMovimiento(nivel.enemigos);
    intervaloEnemigos = setTimeout(enemigos, 200);
}

function enemigosMovAleatorio() {
    clearTimeout(intervaloMovAleatorio);
    nivel.enemigos.forEach(e => e.moverAleatorio());
    intervaloMovAleatorio = setTimeout(enemigosMovAleatorio, 200);
}

function compruebaTocar() {
    clearTimeout(intervaloTocar);
    compruebaNivel();
    intervaloTocar = setTimeout(compruebaTocar, 200);
}

function rescala() {
    let escala = Math.min($(window).width() / $("#juego").outerWidth(), $(window).height() / $("#juego").outerHeight());
    $("#juego").css("transform", "scale(" + escala + ")");
}

function compruebaNivel() {
    if (personaje.tocar("puerta")) {
        nivel.eliminaEnemigos();
        nivel = mapas["N" + (nivel.num + 1)];
        personaje.capa.hide();
        personaje.izquierda = nivel.posInicialX;
        personaje.arriba = nivel.posInicialY;
        personaje.capa.show();
        nivel.cambiarFondo();
        nivel.generaEnemigos();
        ganaPuntos(125);
        actualizaPanel();
        try {
            localStorage.setItem("datos", JSON.stringify({ 'nivel': nivel.num, "inventario": personaje.inventario, "armas": personaje.armas, "armaEquipada": personaje.armaEquipada, "puntuacion": puntuacion }));
        } catch (e) {}
    }
    if (personaje.tocar("puertaCerrada", 100) && teclas.usarObjeto.on) {
        if (personaje.objetoElegido == nivel.llave) {
            nivel.abrirPuerta();
        }
    }
    if (personaje.tocar("arma") && teclas.cogerObjeto.on) {
        ganaPuntos(20);
        personaje.armas[nivel.arma] = true;
        personaje.armaEquipada = nivel.arma;
        nivel.cogerArma();
        nivel.cambiarFondo();
        if (nivel.arma == "ballesta" || nivel.arma == "pulsera") {
            muestraGuia();
        }
    }
    if (personaje.tocar("llave") && teclas.cogerObjeto.on) {
        ganaPuntos(20);
        personaje.inventario[nivel.llave] = true;
        personaje.objetoElegido = nivel.llave;
        nivel.cogerLLave();
        nivel.cambiarFondo();
    }
    if (personaje.tocar("vacio")) {
        if (personaje.vida != false) {
            personaje.pierdeVida();
        } else {
            //gameover();
        }
    }
    if (personaje.tocar("enemigo")) {
        personaje.pierdeVida();
        personaje.retrocede();
    }
}

function muestraGuia() {
    if ($(".guia") != undefined) {
        $("<div class='guia'></div>").appendTo("#caperucita");
    }
    $("body").mousemove((e) => {
        moverGuia(e.pageX, e.pageY);
    });
}

function moverGuia(x, y) {
    let tx = x - personaje.izquierda;
    let ty = y - personaje.arriba;
    let atan = Math.atan2(ty, tx);
    let atanGrados = atan * (180 / Math.PI);
    let atanCalculado = atanGrados > 0.0 ? atanGrados : (360.0 + atanGrados);
    anguloLanzamiento = parseInt(atanCalculado);
    personaje.direccion = anguloLanzamiento >= 90 && anguloLanzamiento < 270 ? "left" : "right"

    $(".guia").css("transform", "rotate(" + anguloLanzamiento + "deg)");
}

function reloj() {
    let t = $("#tiempo span").text().split(":");
    let cuenta = parseInt(t[0]) * 60 + parseInt(t[1]);
    if (cuenta <= 0) {
        clearInterval(intervaloTiempo);
        nivel.eliminaEnemigos();
        personaje.capa.hide();
        personaje.izquierda = nivel.posInicialX;
        personaje.arriba = nivel.posInicialY;
        personaje.capa.show();
        nivel.cambiarFondo();
        nivel.generaEnemigos();
        actualizaPanel();
        personaje.pierdeVida();
        if (personaje.vida > 0) {
            intervaloTiempo = setTimeout(reloj, 1000);
        }
        return;
    }
    cuenta = parseInt(t[0]) * 60 + parseInt(t[1]);
    cuenta--;
    let seg = parseInt(cuenta % 60);
    let min = parseInt(cuenta / 60 % 60);
    $("#tiempo span").text((min < 10 ? ("0" + min) : min) + ":" + (seg < 10 ? ("0" + seg) : seg));
    intervaloTiempo = setTimeout(reloj, 1000);
}

function ganaPuntos(plus) {
    puntuacion += plus;
    $("#puntuacion span").text(("0000000000" + puntuacion).slice(-10));
}