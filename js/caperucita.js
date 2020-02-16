"use strict";
class Caperucita {
    constructor(capa) {
        // Inicialización posición
        this.capa = capa;
        this.altura = capa.outerHeight(true);
        this.anchura = capa.outerWidth(true);
        this.izquierda = capa.offset().left;
        this.arriba = capa.offset().top - capa.outerHeight(true) / 2;
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;

        // Física
        this.velocidadX = 1;
        this.velocidadY = 0;
        this.gravity = 3;
        this.rectificaciones = 0;

        // Colisión
        this.contornoDer = pCaperucitaDer;
        this.contornoIzq = pCaperucitaIzq;
        this.contorno = this.contornoDer;

        // Dirección
        this.direccion = "right";
        this.mirar = "right";
        this.img = "idle_" + this.direccion + "_0";

        // Inventario
        this.armaEquipada = null;
        this.armas = {
            "hacha": false,
            "ballesta": false,
            "pulsera": false
        }
        this.objetoElegido = null;
        this.inventario = {
            "llaveN1": false,
            "llaveN2": false,
            "llaveN3": false,
            "llaveN4": false,
            "huesos": 0,
            "pocion": 0
        }
    }
    // Físicas
    gravedad() {
        this.compruebaImg();
        let enSuelo = this.colisionaPorAbajo(this.velocidadY + this.gravity);
        if (!enSuelo) {
            if (this.colisionaPorArriba(10)) {
                this.arriba += 15;
            }
            this.gravity = 3;
            this.velocidadY += this.gravity;
            this.capa.animate({ top: this.arriba += this.velocidadY, left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        }
        if (enSuelo && this.velocidadY > 0) {
            this.velocidadY = 0;
        }
        this.moverArriba();
    }
    // Colisiones
    colisionaPorAbajo(px) { return colision(this.izquierda, this.arriba + px, this.contorno, "terreno") || colision(this.izquierda, this.arriba + px, this.contorno, "puertaCerrada"); }
    colisionaPorArriba(px) { return colision(this.izquierda, this.arriba - px, this.contorno, "terreno") || colision(this.izquierda, this.arriba - px, this.contorno, "puertaCerrada"); }
    colisionaPorDerecha(px) { return colision(this.izquierda + px, this.arriba, this.contorno, "terreno") || colision(this.izquierda + px, this.arriba, this.contorno, "puertaCerrada"); }
    colisionaPorIzquierda(px) { return colision(this.izquierda - px, this.arriba, this.contorno, "terreno") || colision(this.izquierda - px, this.arriba, this.contorno, "puertaCerrada"); }
    colisionaPorIzquierdaPuedeArriba(pxA, pxB) { return colision(this.izquierda - pxA, this.arriba - pxB, this.contorno, "terreno") || colision(this.izquierda - pxA, this.arriba - pxB, this.contorno, "puertaCerrada"); } // Pendientes descendentes
    colisionaPorDerechaPuedeArriba(pxA, pxB) { return colision(this.izquierda + pxA, this.arriba - pxB, this.contorno, "terreno") || colision(this.izquierda + pxA, this.arriba - pxB, this.contorno, "puertaCerrada"); } // Pendientes ascendentes
    // Tocar diferentes objetos o partes del mapa
    tocar(color) { return colision(this.izquierda + 10, this.arriba - 10, this.contorno, color); }

    // Movimiento
    moverDerecha() {
        this.mirar = "right";
        this.direccion = "right";
        this.contorno = this.contornoDer;
        this.velocidadX = 7;
        this.animacion(teclas.agacharse.on ? "down_right" : "run_right");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
    moverIzquierda() {
        this.mirar = "left";
        this.direccion = "left";
        this.contorno = this.contornoIzq;
        this.velocidadX = -7;
        this.animacion(teclas.agacharse.on ? "down_left" : "run_left");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
    moverArriba() { // Evita problemas con las inclinaciones
        if ((this.colisionaPorIzquierda(5) || this.colisionaPorDerecha(5)) && this.rectificaciones < 7) {
            //this.velocidadY = -5;
            this.capa.animate({ top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
            this.rectificaciones++;
        }

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
            this.velocidadY = -30;
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

    // Objetos
    recolecta() {
        if (colision(this.izquierda, this.arriba, this.contorno, "arma")) {

        }
        if (colision(this.izquierda, this.arriba, this.contorno, "llave")) {

        }
        if (colision(this.izquierda, this.arriba, this.contorno, "objeto")) {

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
        let enSuelo = this.colisionaPorAbajo(10);
        let nadaPulsado = !teclas.derecha.on && !teclas.agacharse.on && !teclas.izquierda.on;
        let aterrizando = this.img == ("jump_" + this.direccion + "_0");
        if ((aterrizando || nadaPulsado) && enSuelo && !teclas.ataque.on && !teclas.saltar.on) {
            this.estatica("idle_" + this.direccion + "_0");
        }
    }

}