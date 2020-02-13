"use strict";
class Caperucita {
    constructor(capa) {
        // Inicialización posición
        this.capa = capa;
        this.altura = capa.outerHeight(true);
        this.anchura = capa.outerWidth(true);
        this.izquierda = capa.offset().left;
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;
        this.arriba = capa.offset().top - capa.outerHeight(true) / 2;

        // Física
        this.velocidadX = 1;
        this.velocidadY = 0;
        this.gravity = 3;

        // Colisión
        this.contornoDer = pCaperucitaDer;
        this.contornoIzq = pCaperucitaIzq;
        this.contorno = this.contornoDer;

        // Dirección
        this.direccion = "right";
        this.mirar = "right";
        this.img = "idle_" + this.direccion + "_0";

        // Inventario
        this.armas = {
            "hacha": false,
            "ballesta": false,
            "pulsera": false
        }
        this.inventario = {
            "llaveN1": false,
            "llaveN2": false,
            "llaveN3": false,
            "huesos": 0,
            "pocion": 0
        }
    }
    // Físicas
    gravedad() {
        this.compruebaImg();
        let enSuelo = this.colisionaPorAbajo(this.velocidadY + this.gravity);
        if (!enSuelo) {
            this.gravity = 3;
            this.velocidadY += this.gravity;
            this.capa.animate({ top: this.arriba += this.velocidadY, left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        }
        if (enSuelo && this.velocidadY > 0) {
            this.velocidadY = 0;
        }
    }
    // Colisiones
    colisionaPorAbajo(px) { return colision(this.izquierda, this.arriba + px, this.contorno, "terreno"); }
    colisionaPorArriba(px) { return colision(this.izquierda, this.arriba - px, this.contorno, "terreno"); }
    colisionaPorDerecha(px) { return colision(this.izquierda - px, this.arriba, this.contorno, "terreno"); }
    colisionaPorIzquierda(px) { return colision(this.izquierda - px, this.arriba, this.contorno, "terreno"); }
    // Moverse por pendientes descendentes \__
    colisionaPorIzquierdaPuedeArriba(pxA, pxB) { return colision(this.izquierda - pxA, this.arriba - pxB, this.contorno, "terreno"); }
    // Moverse por pendientes ascendentes __/
    colisionaPorDerechaPuedeArriba(pxA, pxB) { return colision(this.izquierda + pxA, this.arriba - pxB, this.contorno, "terreno"); }

    // Movimiento
    moverDerecha() {
        this.mirar = "right";
        this.direccion = "right";
        this.contorno = this.contornoDer;
        this.velocidadX = 10;
        this.animacion(teclas.agacharse.on ? "down_right" : "run_right");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
    moverIzquierda() {
        this.mirar = "left";
        this.direccion = "left";
        this.contorno = this.contornoIzq;
        this.velocidadX = -10;
        this.animacion(teclas.agacharse.on ? "down_left" : "run_left");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
    moverArriba() { // Evita problemas con las inclinaciones
        this.velocidadY = -10;
    }
    mirarArriba() {
        this.mirar = "up";
        this.estatica("idle_" + this.direccion + "_0");
    }
    agachate() {
        if (!teclas.derecha.on && !teclas.izquierda.on) {
            this.estatica("down_" + this.direccion + "_0");
        }
    }
    salta() {
        if (this.colisionaPorAbajo(10)) {
            this.velocidadY = -25;
            this.estatica("jump_" + this.direccion + "_0");
        }
    }

    // Ataques
    hacha() {

    }
    ballesta() {
        if (!teclas.derecha.on && !teclas.izquierda.on) {
            this.estatica("arr_" + this.direccion + "_0");
        }
    }
    pulsera() {
        if (!teclas.derecha.on && !teclas.izquierda.on) {
            this.estatica("fire_" + this.direccion + "_0");
        }
    }

    // Cambiar imagenes del personaje
    animacion(img) {
        this.capa.css("background-image", "url('img/caperucita/" + img + ".gif')");
        this.img = img;
    }
    estatica(img) {
        this.capa.css("background-image", "url('img/caperucita/" + img + ".png')");
        this.img = img;
    }
    compruebaImg() {
        if ((!teclas.derecha.on && !teclas.agacharse.on && !teclas.izquierda.on && !teclas.saltar.on && !teclas.ataque.on && this.colisionaPorAbajo(10) ||
                !teclas.saltar.on && this.img == ("jump_" + this.direccion + "_0")) &&
            this.colisionaPorAbajo(10) && !teclas.ataque.on) {
            this.estatica("idle_" + this.direccion + "_0");
        }
    }

}