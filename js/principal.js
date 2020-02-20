"use strict";
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let personaje;
let nivel;
let modoDebug = false;


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

    // Inicia el juego
    personaje = new Caperucita($('#caperucita'));
    personaje.izquierda = nivel.posInicialX;
    personaje.arriba = nivel.posInicialY;
    for (var i = 0; i < personaje.vida; i++) {
        $("<i class='fa fa-heart' aria-hidden='true'></i>").appendTo("#vida");
    };

    controlaTeclas();

    setInterval(() => {
        personaje.gravedad();
        nivel.enemigos.forEach(e => e.gravedad());
        dibujaMovimiento(nivel.enemigos);
    }, 50);
    setInterval(() => {
        compruebaNivel();
    }, 200);
    setInterval(()=>{
         nivel.enemigos.forEach(e => e.moverAleatorio());
     },1000);
});

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