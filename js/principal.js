"use strict";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let personaje;
let nivel;
let modoDebug = false;
let anguloLanzamiento = 0;
let intervaloGravedad, intervaloEnemigos, intervaloMovAleatorio, intervaloTocar, intervaloTiempo;
modoDebug ? $("#fondo,#overfondo").addClass("modoDebug") : "";
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

$(document).ready(function() {
    // Inicialización
    rescala();

    generarMapas();
    nivel = mapas.N0;
    nivel.cambiarFondo();
    nivel.generaEnemigos();
    actualizaPanel();
    personaje = new Caperucita($('#caperucita'));

    // Inicia el juego
    personaje.izquierda = nivel.posInicialX;
    personaje.arriba = nivel.posInicialY;
    for (var i = 0; i < personaje.vida; i++) {
        $("<i class='fa fa-heart' aria-hidden='true'></i>").appendTo("#vida");
    };


    // Intervalos
    gravity();
    enemigos();
    enemigosMovAleatorio();
    compruebaTocar();
    reloj();

    // Controles
    controlaMouse();
    controlaTeclas();
});

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
        personaje.capa.css("opacity", "0");
        personaje.izquierda = nivel.posInicialX;
        personaje.arriba = nivel.posInicialY;
        personaje.capa.css("opacity", "1");
        nivel.cambiarFondo();
        nivel.generaEnemigos();
        actualizaPanel();
    }
    if (personaje.tocar("puertaCerrada", 100) && teclas.usarObjeto.on) {
        if (personaje.objetoElegido == nivel.llave) {
            nivel.abrirPuerta();
        }
    }
    if (personaje.tocar("arma") && teclas.cogerObjeto.on) {
        personaje.armas[nivel.arma] = true;
        personaje.armaEquipada = nivel.arma;
        nivel.cogerArma();
        nivel.cambiarFondo();
        if (nivel.arma == "ballesta" || nivel.arma == "pulsera") {
            muestraGuia();
        }
    }
    if (personaje.tocar("llave") && teclas.cogerObjeto.on) {
        personaje.inventario[nivel.llave] = true;
        personaje.objetoElegido = nivel.llave;
        nivel.cogerLLave();
        nivel.cambiarFondo();
    }
    if (personaje.tocar("vacio")) {
        if (personaje.vida >= 1) {
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
    anguloLanzamiento = atanCalculado;
    $(".guia").css("transform", "rotate(" + anguloLanzamiento + "deg)");
}

function reloj() {
    let t = $("#tiempo span").text().split(":");
    let cuenta = parseInt(t[0]) * 60 + parseInt(t[1]);
    if (cuenta <= 0) {
        clearInterval(intervaloTiempo);
        return;
    }
    cuenta--;
    let seg = parseInt(cuenta % 60);
    let min = parseInt(cuenta / 60 % 60);
    $("#tiempo span").text((min < 10 ? ("0" + min) : min) + ":" + (seg < 10 ? ("0" + seg) : seg));
    intervaloTiempo = setTimeout(reloj, 1000);
}