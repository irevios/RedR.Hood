"use strict";
let personaje;

$(document).ready(function() {
    cargaCanvas();
    personaje = new Caperucita($('#personaje'));
    controlaTeclas();
    setInterval(() => { personaje.gravedad() }, 50);
});

function cargaCanvas() {

    let canvas = document.getElementById("canvas");
    let interiorCanvas = canvas.getContext("2d");

    dibujaFondo(interiorCanvas, "nivel1-0");
}