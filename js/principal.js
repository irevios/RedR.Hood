"use strict";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let personaje;
let nivel;

$(document).ready(function() {
    // Hacer que el juego siempre tenga el tamaño correcto según la pantalla
    $("body").resizable({ resize: rescala });
    let tamañoInicial = { tamaño: { width: $("body").width(), height: $("body").height() } }
    rescala(null, tamañoInicial);

    // Inicialización
    generarMapas();
    nivel = mapas.N0;
    nivel.cambiarFondo();
    nivel.generaEnemigos();

    // Inicia el juego
    personaje = new Caperucita($('#personaje'));
    personaje.izquierda = nivel.posInicialX;
    personaje.arriba = nivel.posInicialY;

    controlaTeclas();

    setInterval(gravedad, 50);
    setInterval(compruebaNivel,100);
});

function rescala(e, body) {
    let escala = Math.min(body.tamaño.width / $("#juego").outerWidth(), body.tamaño.height / $("#juego").outerHeight());
    $("#juego").css("transform", "scale(" + escala + ")");
}

function gravedad() {
    personaje.gravedad();
   // nivel.enemigos.forEach(e => e.gravedad());
}

function compruebaNivel() {
    if (personaje.tocar("puerta")) {
        nivel = mapas["N" + (nivel.num + 1)];
        personaje.capa.css("opacity", "0");
        personaje.izquierda = nivel.posInicialX;
        personaje.arriba = nivel.posInicialY;
        personaje.capa.css("opacity", "1");
        nivel.cambiarFondo();
        nivel.generaEnemigos();
    }
    if (personaje.tocar("puertaCerrada") && teclas.usarObjeto.on) {
        if (personaje.objetoElegido == nivel.llave) {
            nivel.abrirPuerta();
        }
    }
    if (personaje.tocar("arma") && teclas.cogerObjeto.on) {
        personaje.armas[nivel.arma] = true;
        personaje.armaEquipada = nivel.arma;
        nivel.cogerArma();
        nivel.cambiarFondo();
    }
    if (personaje.tocar("llave") && teclas.cogerObjeto.on) {
        personaje.inventario[nivel.llave] = true;
        personaje.objetoElegido = nivel.llave;
        nivel.cogerLLave();
        nivel.cambiarFondo();
    }
    if (personaje.tocar("vacio")) {
        console.log("memuerosos");
    }
}