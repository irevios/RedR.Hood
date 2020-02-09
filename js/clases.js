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
    }
    colisionaPorAbajo(px) {
        if (negro(personaje.izquierda, personaje.arriba + px, this.puntos)) {
            this.velocidadY = 0;
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
        this.velocidadY = -10;
        this.actualizaCoordenadas();
    }
    moverAbajo() {
        this.velocidadY = 0;
        this.actualizaCoordenadas();
    }
    moverDerecha() {
        this.puntos = this.puntosDer;
        this.animacionDerecha();
        this.velocidadX = 10;
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        this.actualizaCoordenadas();
    }
    moverIzquierda() {
        this.puntos = this.puntosIzq;
        this.velocidadX = -10;
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        this.actualizaCoordenadas();
    }
    salta() {
        if (this.colisionaPorAbajo(10)) {
            this.velocidadY = -30;
        }
        this.actualizaCoordenadas();
    }
    actualizaCoordenadas() {
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;
    }
    gravedad() {
        if (!this.colisionaPorAbajo(this.velocidadY + this.gravity)) {
            this.gravity = 3;
            this.velocidadY += this.gravity;
            this.capa.animate({ top: this.arriba += this.velocidadY, left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        }
        if (this.colisionaPorAbajo(this.velocidadY + this.gravity)) {
            this.velocidadY = 0;
        }
        this.actualizaCoordenadas();

    }
    animacionDerecha(){
        //this.capa.addClass("andaDerecha");
    }
}