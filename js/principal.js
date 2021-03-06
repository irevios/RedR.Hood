"use strict";
// Modo Debug
let modoDebug = false;
let nivelInicio = 0;
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
$("#juego").resizable({
    minHeight: 150,
    minWidth: 200,
    aspectRatio: 16 / 9,
    containment: "body",
    stop: rescala()
});
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
    nivel = mapas.N0;
    $("#dialog").dialog({
        appendTo: "body",
        autoOpen: false,
        modal: true,
        width: 700
    });
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
    partida(nivelInicio);
    personaje.izquierda = nivel.posInicialX;
    personaje.arriba = nivel.posInicialY;
    setTimeout(() => $("#transicion").fadeOut(), 600);
}

function continuar() {
    let d = JSON.parse(localStorage.getItem('datos'));
    puntuacion = d.puntuacion;
    ganaPuntos(0);
    personaje.arriba = d.posicion.y;
    personaje.izquierda = d.posicion.x;
    personaje.vida = d.vida;
    for (let i = personaje.vida + 1; i <= 4; i++) {
        $("#vida i:nth-child(" + i + "):not(.fa-trophy)").addClass("perdida");
    }
    personaje.armaEquipada = d.aEquipada;
    personaje.armas = d.armas;
    personaje.inventario = d.objetos;
    personaje.capa.css({ "top": personaje.arriba, "left": personaje.izquierda });
    if (d.nivel != undefined) {
        nivel.armaCogida = d.nArma;
        nivel.llaveCogida = d.nLlave;
        nivel.puertaAbierta = d.nPuerta;
        nivel.tiempo = d.tiempo;
        $("#tiempo span").text(d.tiempo);
        partida(d.nivel);
    }
    setTimeout(() => $("#transicion").fadeOut(), 600);
}

function partida(n) {
    $("#panel, #vida, #caperucita").show();
    $("#inicio").hide("fade");
    // Mapa
    nivel = mapas["N" + n];
    nivel.cambiarFondo();
    nivel.generaEnemigos();
    actualizaPanel();

    // Intervalos
    gravity();
    enemigos();
    reloj();
    enemigosMovAleatorio();
    compruebaTocar();
    personaje.capa.show();
    // Controles
    controlaMouse();
    controlaTeclas();
    muestraGuia();
    $(".guia").hide();
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
    intervaloEnemigos = setTimeout(enemigos, 100);
}

function enemigosMovAleatorio() {
    clearTimeout(intervaloMovAleatorio);
    nivel.enemigos.forEach(e => {
        if (e.tipo == "lobo" || e.tipo == "loboFeroz") {
            e.seguirPersonaje();
        } else {
            e.moverAleatorio();
        }
    });
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

var cambioMapa = 0;

function compruebaNivel() {
    if (personaje.tocar("puerta") && cambioMapa == 0) {
        $("#transicion").fadeIn(function() {
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
            cambioMapa++;
        });
        cambioMapa = setTimeout(() => {
            $("#transicion").fadeOut();
            cambioMapa = 0;
        }, 1200);
    }
    if (personaje.tocar("vacio")) {
        personaje.pierdeVida();
    }
    if (personaje.tocar("enemigo")) {
        personaje.pierdeVida();
        personaje.retrocede();
    }
    try {
        localStorage.setItem("datos", JSON.stringify({
            "nivel": nivel.num,
            "nArma": nivel.armaCogida,
            "nLlave": nivel.llaveCogida,
            "nPuerta": nivel.puertaAbierta,
            "tiempo": $("#tiempo span").text(),
            "puntuacion": puntuacion,
            "posicion": { "x": personaje.izquierda, "y": personaje.arriba },
            "vida": personaje.vida,
            "aEquipada": personaje.armaEquipada,
            "armas": personaje.armas,
            "objetos": personaje.inventario
        }));
    } catch (e) {}
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

function gameover() {
    $("#transicion").fadeIn(function() {
        $("#gameover").show("fade");
        $("#juego,#interfaz").hide();
        clearInterval(intervaloTiempo);
        $("#tiempo span").text("00:00");
    });
}

function escenaFin() {
    $("#transicion").fadeIn(function() {
        $("#escenaFin").show("fade");
        $("#juego,#interfaz").hide();
        clearInterval(intervaloTiempo);
        $("#tiempo span").text("00:00");
    });
}