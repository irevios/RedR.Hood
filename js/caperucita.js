"use strict";
// Clase padre para todos los personajes que se mueven
class Personaje {
    constructor(capa) {
        this.capa = capa;
        this.altura = this.capa.outerHeight(true);
        this.anchura = this.capa.outerWidth(true);
        this.izquierda = this.capa.offset().left;
        this.arriba = this.capa.offset().top - this.altura / 2;
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;
        this.velocidadX = 1;
        this.velocidadY = 0;
        this.g = 3;
        this.rectificaciones = 0;
    }
    // Gravedad
    gravedad() {
        let enSuelo = this.colisionaPorAbajo(this.velocidadY + this.g);

        if (!enSuelo) {
            this.g = 3;
            this.velocidadY += this.g;
            this.capa.animate({ top: this.arriba += this.velocidadY, left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
        }
        if (enSuelo && this.velocidadY > 0) {
            this.velocidadY = 0;
        }
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
}

class Caperucita extends Personaje {
    constructor(capa) {
        // Inicialización posición
        super(capa);

        // Colisión
        this.contornoDer = pCaperucitaDer;
        this.contornoIzq = pCaperucitaIzq;
        this.contorno = this.contornoDer;

        // Dirección
        this.direccion = "right";
        this.mirar = "right";
        this.img = "idle_" + this.direccion;

        // Inventario
        this.armaEquipada = "";
        this.armas = {
            "hacha": false,
            "ballesta": false,
            "pulsera": false
        }
        this.objetoElegido = "";
        this.inventario = {
            "llaveN1": false,
            "llaveN3": false,
            "huesos": 0,
            "manzanas": 0
        }
        this.vida = 4;
    }
    // Físicas
    gravedad() {
        this.compruebaImg();
        super.gravedad();
        if (this.img == "jump_" + this.direccion && this.colisionaPorAbajo(this.velocidadY + this.g)) {
            this.velocidadY = 10;
        }
        this.moverArriba();
    }

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
        this.estatica("idle_" + this.direccion);
    }
    agachate() {
        if (!teclas.derecha.on && !teclas.izquierda.on) {
            this.estatica("down_" + this.direccion);
        }
    }
    salta() {
        if (this.colisionaPorAbajo(10)) {
            this.velocidadY = -30;
            this.estatica("jump_" + this.direccion);
        }
    }

    // Ataques
    hacha() {
        if (this.armaEquipada == "hacha") {
            this.animacion("axe_" + this.direccion);
        }
    }
    ballesta() {
        if (this.armaEquipada == "ballesta") {
            this.estatica("arr_" + this.direccion);
        }
    }
    pulsera() {
        if (this.armaEquipada == "pulsera") {
            this.estatica("fire_" + this.direccion);
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
        let aterrizando = this.img == ("jump_" + this.direccion);
        if ((aterrizando || nadaPulsado) && enSuelo && !teclas.ataque.on && !teclas.saltar.on) {
            this.estatica("idle_" + this.direccion);
        }
    }

    // Vida del personaje
    pierdeVida() {
        $("#vida i:nth-child(" + this.vida + ")").effect("shake", { direction: "up", distance: 10, times: 2 }).addClass("perdida");
        this.vida -= 1;
    }
    retrocede() {
        if (this.direccion == "right") {
            teclas.derecha.on = false;
            this.velocidadX = -80;
        } else {
            teclas.izquierda.on = false;
            this.velocidadX = 80;
        }
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
}