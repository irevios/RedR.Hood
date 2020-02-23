"use strict";
// Clase padre para todos los personajes que se mueven
class Dinamico {
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
    colisionaPorAbajo(px) {
        return colision(this.izquierda, this.arriba + px, this.contorno, "terreno") ||
            colision(this.izquierda, this.arriba + px, this.contorno, "puertaCerrada") ||
            colision(this.izquierda, this.arriba + px, this.contorno, "troncoBloqueando");
    }
    colisionaPorArriba(px) {
        return colision(this.izquierda, this.arriba - px, this.contorno, "terreno") ||
            colision(this.izquierda, this.arriba - px, this.contorno, "puertaCerrada") ||
            colision(this.izquierda, this.arriba - px, this.contorno, "troncoBloqueando");
    }
    colisionaPorDerecha(px) {
        return colision(this.izquierda + px, this.arriba, this.contorno, "terreno") ||
            colision(this.izquierda + px, this.arriba, this.contorno, "puertaCerrada") ||
            colision(this.izquierda + px, this.arriba, this.contorno, "troncoBloqueando");
    }
    colisionaPorIzquierda(px) {
        return colision(this.izquierda - px, this.arriba, this.contorno, "terreno") ||
            colision(this.izquierda - px, this.arriba, this.contorno, "puertaCerrada") ||
            colision(this.izquierda - px, this.arriba, this.contorno, "troncoBloqueando");
    }
    colisionaPorIzquierdaPuedeArriba(pxA, pxB) { // Pendientes descendentes
        return colision(this.izquierda - pxA, this.arriba - pxB, this.contorno, "terreno") ||
            colision(this.izquierda - pxA, this.arriba - pxB, this.contorno, "puertaCerrada") ||
            colision(this.izquierda - pxA, this.arriba - pxB, this.contorno, "troncoBloqueando");
    }
    colisionaPorDerechaPuedeArriba(pxA, pxB) { // Pendientes ascendentes
        return colision(this.izquierda + pxA, this.arriba - pxB, this.contorno, "terreno") ||
            colision(this.izquierda + pxA, this.arriba - pxB, this.contorno, "puertaCerrada") ||
            colision(this.izquierda + pxA, this.arriba - pxB, this.contorno, "troncoBloqueando");
    }
    // Tocar diferentes objetos o partes del mapa
    tocar(color, x, y) { return colision(this.izquierda + 10 + (x != undefined ? (this.direccion == "right" ? x : x * (-1)) : 0), this.arriba - 10 + (y != undefined ? (this.direccion == "right" ? y : y * (-1)) : 0), this.contorno, color); }
}

class Caperucita extends Dinamico {
    constructor(capa) {
        // Inicialización posición
        super(capa);

        // Colisión
        this.contorno = pCaperucita;

        // Dirección
        this.direccion = "right";
        this.mirar = "right";
        this.img = "idle_" + this.direccion;

        // Inventario
        this.armaEquipada = "ballesta";
        this.armas = {
            "hacha": false,
            "ballesta": true,
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
        this.proyectiles = [];

        this.flechaDelay;
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
        this.velocidadX = 7;
        this.animacion(teclasMovimiento.agacharse.on ? "down_right" : "run_right");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
    moverIzquierda() {
        this.mirar = "left";
        this.direccion = "left";
        this.velocidadX = -7;
        this.animacion(teclasMovimiento.agacharse.on ? "down_left" : "run_left");
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
    moverArriba() { // Evita problemas con las inclinaciones
        if ((this.colisionaPorIzquierda(5) || this.colisionaPorDerecha(5)) && this.rectificaciones < 7) {
            this.capa.animate({ top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
            this.rectificaciones++;
        }

    }
    mirarArriba() {
        this.mirar = "up";
        this.estatica("idle_" + this.direccion);
    }
    agachate() {
        if (!teclasMovimiento.derecha.on && !teclasMovimiento.izquierda.on) {
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
        this.animacion("axe_" + this.direccion);
        if (this.tocar("enemigo", 80) != false) {
            nivel.eliminaEnemigo(this.tocar("enemigo", 80));
        }
    }
    ballesta() {
            clearTimeout(this.flechaDelay);
        if (this.proyectiles.length >= 1) {
            this.flechaDelay = setTimeout(()=>this.creaFlecha(), 100);
        } else {
            this.creaFlecha();

        }
    }
    creaFlecha() {
        this.estatica("arr_" + this.direccion);
        let flecha = new Proyectil(pRana, "flecha", { x: (this.izquierda + (this.anchura / 2) + (this.direccion == "right" ? 50 : -50)), y: this.arriba + 20 });
        this.proyectiles.push(flecha);
    }
    pulsera() {
        this.estatica("fire_" + this.direccion);
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
        let nadaPulsado = !teclasMovimiento.derecha.on && !teclasMovimiento.agacharse.on && !teclasMovimiento.izquierda.on;
        let aterrizando = this.img == ("jump_" + this.direccion);
        if ((aterrizando || nadaPulsado) && enSuelo && !teclasMovimiento.ataque.on && !teclasMovimiento.saltar.on) {
            this.estatica("idle_" + this.direccion);
        }
    }

    // Vida del personaje
    pierdeVida() {
        if (personaje.vida > 1) {
            $("#vida i:nth-child(" + this.vida + "):not(.fa-trophy)").effect("shake", { direction: "up", distance: 10, times: 2 }).addClass("perdida");
            this.vida -= 1;
            $("#daño").css({
                "top": this.arriba,
                "left": this.izquierda + this.anchura - 50
            }).show().switchClass("blanco", "rojo", 1000, "easeOutBounce", function() { $(this).hide().switchClass("rojo", "blanco") });
        } else {
            gameover();
        }
    }
    retrocede() {
        if (this.direccion == "right") {
            teclasMovimiento.derecha.on = false;
            this.capa.animate({ left: this.izquierda -= 100 }, { duration: 10, queue: false }, "linear");
            if (this.colisionaPorDerecha(80)) {
                this.capa.animate({ left: this.izquierda += 100 }, { duration: 10, queue: false }, "linear");
            }
        } else {
            teclasMovimiento.izquierda.on = false;
            this.capa.animate({ left: this.izquierda += 100 }, { duration: 10, queue: false }, "linear");
            if (this.colisionaPorIzquierda(80)) {
                this.capa.animate({ left: this.izquierda -= 100 }, { duration: 10, queue: false }, "linear");
            }
        }
        this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
    }
}

class Proyectil extends Dinamico {
    constructor(contorno, tipo, punto) {
        super($("<div class='" + tipo + " dinamico' style='left: " + punto.x + "px; top: " + punto.y + "px'></div>").appendTo("#juego"));
        this.izquierda = punto.x;
        this.arriba = punto.y;
        this.contorno = contorno;
        this.angulo = anguloLanzamiento;
        this.capa.css("transform", "rotate(" + this.angulo + "deg)");
        this.lanzamiento = this.mover();
    }
    mover() {
        clearTimeout(this.lanzamiento);
        $(this.capa).animate({
            left: this.izquierda = Math.round(Math.cos(this.angulo * Math.PI / 180) * 50 + this.izquierda),
            top: this.arriba = Math.round(Math.sin(this.angulo * Math.PI / 180) * 50 + this.arriba)
        }, { duration: 10, queue: false }, "linear");

        if (this.colisionaPorArriba(10) || this.colisionaPorAbajo(10) || this.colisionaPorIzquierda(10) || this.colisionaPorDerecha(10) || this.tocar("enemigo")) {
            if (this.tocar("enemigo") != false) {
                nivel.eliminaEnemigo(this.tocar("enemigo"));
            }
            this.capa.remove();
            personaje.proyectiles = personaje.proyectiles.filter(p => p != this);
        } else {
            this.lanzamiento = setTimeout(() => this.mover(), 50);
        }

    }
}