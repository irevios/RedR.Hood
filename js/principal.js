"use strict";
let personaje;
let pressedUp = false;
let pressedRight = false;
let pressedDown = false;
let pressedLeft = false;
let spacePressed = false;
let qPressed = false;
let ePressed = false;

$(document).ready(function() {
    cargaCanvas();
    personaje = new Personaje($('#personaje'));
    controlaTeclas();
    setInterval(() => personaje.gravedad(), 50);
});

function cargaCanvas() {

    let canvas = document.getElementById("canvas");
    let interiorCanvas = canvas.getContext("2d");

    dibujaFondo(interiorCanvas,"nivel1-0");
}

function controlaTeclas() {
    $(document).keydown(function(e) {
        switch (e.keyCode) {
            case 87:
                pressedUp = true;
                break;

            case 68:
                pressedRight = true;
                break;

            case 83:
                pressedDown = true;
                break;

            case 65:
                pressedLeft = true;
                break;

            case 32:
                spacePressed = true;
                break;
            case 81:
                qPressed = true;
                break;
            case 69:
                ePressed = true;
                break;
        }

        mueve();
    });
    $(document).keyup(function(e) {
        switch (e.keyCode) {
            case 87:
                pressedUp = false;
                break;

            case 68:
                pressedRight = false;
                break;

            case 83:
                pressedDown = false;
                break;

            case 65:
                pressedLeft = false;
                break;

            case 32:
                spacePressed = false;
                break;
            case 81:
                qPressed = false;
                break;
            case 69:
                ePressed = false;
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
            personaje.moverIzquierda();
        } else if (personaje.colisionaPorIzquierdaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.velocidadX = -10;
        }
    }
    if (pressedUp) {
        if (!personaje.colisionaPorArriba(10)) {
            personaje.moverArriba();
        }
    }
    if (pressedRight) {
        if (!personaje.colisionaPorDerecha(10) && personaje.colisionaPorAbajo(10)) {
            personaje.moverDerecha();
        } else if (!personaje.colisionaPorDerechaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.moverArriba();
            personaje.moverDerecha();
        } else if (personaje.colisionaPorDerechaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
            personaje.velocidadX = 10;
        }
    }
    if (!pressedRight && !pressedLeft) {
        personaje.velocidadX = 0;
    }
    if (pressedDown) {
        if (personaje.colisionaPorAbajo(5)) {
            personaje.agachate();
        }
    }
    if (spacePressed) {
        personaje.salta();
        //spacePressed = false;
    }
    if (ePressed) {
        personaje.pulsera();
    }
    if (qPressed) {
        personaje.bayesta();
    }

}