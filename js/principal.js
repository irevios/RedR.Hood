"use strict";
let personaje;
let pressedUp = false;
let pressedRight = false;
let pressedDown = false;
let pressedLeft = false;
let spacePressed = false;
$(document).ready(function() {
    cargaCanvas();
    personaje = new Personaje($('#personaje'));
    controlaTeclas();
    setInterval(() => personaje.gravedad(), 50);
});

function cargaCanvas() {

    let canvas = document.getElementById("canvas");
    let interiorCanvas = canvas.getContext("2d");

    dibujaFondo(interiorCanvas);
}

function controlaTeclas() {
    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 38:
                pressedUp = true;
                break;

            case 39:
                pressedRight = true;
                break;

            case 40:
                pressedDown = true;
                break;

            case 37:
                pressedLeft = true;
                break;

            case 32:
                spacePressed = true;
                break;
        }

        mueve();
    });
    $(document).keyup(function(e) {
        switch (e.keyCode) {
            case 38:
                pressedUp = false;
                break;

            case 39:
                pressedRight = false;
                break;

            case 40:
                pressedDown = false;
                break;

            case 37:
                pressedLeft = false;
                break;

            case 32:
                spacePressed = false;
                break;
        }

    });
}

function mueve() {
    if (pressedLeft) {
        if (!personaje.colisionaPorIzquierda(10) && personaje.colisionaPorAbajo(10)) {
            personaje.moverIzquierda();
        } else if (!personaje.colisionaPorIzquierdaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.moverArriba();
            console.log("inclinadoIzquierda");
            personaje.moverIzquierda();
        } else if (personaje.colisionaPorIzquierdaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.velocidadX = -10;
        }
    }
    if (pressedUp) {
        if (!personaje.colisionaPorArriba(10)) {
            personaje.moverArriba();
            personaje.gravity = 0;
        }
    }
    if (pressedRight) {
        if (!personaje.colisionaPorDerecha(10) && personaje.colisionaPorAbajo(10)) {
            personaje.moverDerecha();
        } else if (!personaje.colisionaPorDerechaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.moverArriba();
            console.log("inclinadoIzquierda");
            personaje.moverDerecha();
        } else if (personaje.colisionaPorDerechaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.velocidadX = 10;
        }
    }
    if (!pressedRight && !pressedLeft) {
        personaje.velocidadX = 0;
    }
    if (pressedDown) {
        if (!personaje.colisionaPorAbajo(5)) {

            personaje.moverAbajo();

        }
    }
    if (spacePressed) {
        personaje.salta();
        spacePressed = false;
    }
}