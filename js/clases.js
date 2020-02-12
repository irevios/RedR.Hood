"use strict";
class Personaje {
    constructor(capa) {
        this.capa = capa;
        this.izquierda = capa.offset().left;
        this.arriba = capa.offset().top - capa.outerHeight(true) / 2;
        this.altura = capa.outerHeight(true);
        this.anchura = capa.outerWidth(true);
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;
        this.velocidadX = 1;
        this.velocidadY = 0;
        this.gravity = 3;
        this.puntosDer = pCaperucitaDer;
        this.puntosIzq = pCaperucitaIzq;
        this.puntos = this.puntosDer;
        this.direccion = "right";
        this.img = "idle_" + this.direccion + "_0";
    }
    colisionaPorAbajo(px) {
        if (negro(personaje.izquierda, personaje.arriba + px, this.puntos)) {
            return true;
        }
        return false;
    }
    colisionaPorArriba(px) {
        if (negro(personaje.izquierda, personaje.arriba - px, this.puntos)) {
            return true;
        }
        return false;
    }
    colisionaPorDerecha(px) {
        if (negro(personaje.izquierda - px, personaje.arriba, this.puntos)) {
            return true;
        }
        return false;
    }
    colisionaPorIzquierda(px) {
        if (negro(personaje.izquierda - px, personaje.arriba, this.puntos)) {
            return true;
        }
        return false;
    }
    colisionaPorIzquierdaPuedeArriba(pxA, pxB) { // Moverse por pendientes descendentes \__
        return negro(personaje.izquierda - pxA, personaje.arriba - pxB, this.puntos);
    }
    colisionaPorDerechaPuedeArriba(pxA, pxB) { // Moverse por pendientes ascendentes __/
        return negro(personaje.izquierda + pxA, personaje.arriba - pxB, this.puntos);
    }
    moverArriba() {
        this.actualizaCoordenadas();
    }
    agachate() {
        if (!pressedRight && !pressedLeft) {
            this.estatica("down_" + this.direccion + "_0");
        }
    }
    moverDerecha() {
        this.puntos = this.puntosDer;
        this.velocidadX = 10;
        this.animacion(pressedDown ? "down_right" : "run_right");
        this.direccion = "right";
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        this.actualizaCoordenadas();
    }
    moverIzquierda() {
        this.puntos = this.puntosIzq;
        this.velocidadX = -10;
        this.direccion = "left";
        this.animacion(pressedDown ? "down_left" : "run_left");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        this.actualizaCoordenadas();
    }
    salta() {
        if (this.colisionaPorAbajo(10)) {
            this.velocidadY = -25;
            this.estatica("jump_" + this.direccion + "_0");
        }
        this.actualizaCoordenadas();
    }
    bayesta() {
        if (!pressedRight && !pressedLeft)
            this.estatica("arr_" + this.direccion + "_0");
    }
    pulsera() {
        if (!pressedRight && !pressedLeft)
            this.estatica("fire_" + this.direccion + "_0");
    }
    actualizaCoordenadas() {
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;
    }
    gravedad() {
        console.log(this.velocidadY);
        this.compruebaImg();
        if (!this.colisionaPorAbajo(this.velocidadY + this.gravity)) {
            this.gravity = 3;
            this.velocidadY += this.gravity;
            this.capa.animate({ top: this.arriba += this.velocidadY, left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        }
        if (this.colisionaPorAbajo(this.velocidadY + this.gravity) && this.velocidadY > 0) {
            console.log("here1");
            this.velocidadY = 0;
        }
        this.actualizaCoordenadas();


    }
    animacion(img) {
        this.capa.css("background-image", "url('img/caperucita/" + img + ".gif')");
        this.img = img;
    }
    estatica(img) {
        this.capa.css("background-image", "url('img/caperucita/" + img + ".png')");
        this.img = img;
    }
    compruebaImg() {
        if ((!pressedUp && !pressedRight && !pressedDown && !pressedLeft && !spacePressed && !qPressed && !ePressed && this.colisionaPorAbajo(10) 
            || !spacePressed && this.img == ("jump_" + this.direccion + "_0")) && this.colisionaPorAbajo(10) && !qPressed && !ePressed) {
            this.estatica("idle_" + this.direccion + "_0");
        }
    }
}