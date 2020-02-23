"use strict";
class EnemigoTerrestre extends Dinamico {
    constructor(punto, tipo, cont, num, velocidad) {
        super($("<div class='" + tipo + " dinamico enemigo bien' style='left: " + punto.x + "px; top: " + (punto.y - 40) + "px'></div>").appendTo("#juego"));
        this.v = velocidad
        this.tipo = tipo;
        //Colisión
        this.contorno = cont;
        this.color = "126, 123, " + (parseInt(num) + 1 * 5);
    }
    // Movimiento
    gravedad() {
        super.gravedad();
    }
    moverDerecha() {
        if (this.colisionaPorAbajo(5)) {
            if (!this.colisionaPorDerecha(5)) {
                this.velocidadX = this.v;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(180deg)");
            } else {
                this.velocidadX = -this.v;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(0deg)");
            }
        }
    }
    moverIzquierda() {
        if (this.colisionaPorAbajo(5)) {
            if (!this.colisionaPorIzquierda(5)) {
                this.velocidadX = -this.v;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(0deg)");
            } else {
                this.velocidadX = this.v;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(180deg)");
            }
        }
    }
    moverAleatorio() {
        let num = Math.round(Math.random());
        let veces = Math.round(Math.random() * 10);
        for (let i = 0; i < veces; i++) {
            num == 0 ? this.moverDerecha() : this.moverIzquierda();
        }
    }
    seguirPersonaje() {
        if (personaje.izquierda < this.izquierda) {
            this.moverIzquierda();
        } else {
            this.moverDerecha();
        }
    }
}

class EnemigoVolador extends Dinamico {
    constructor(punto, tipo, cont, num) {
        super($("<div class='" + tipo + " dinamico enemigo bien' style='left: " + punto.x + "px; top: " + /*(*/ punto.y /*- 40)*/ + "px'></div>").appendTo("#juego"));
        this.tipo = tipo;
        //Colisión
        this.contorno = cont;
        this.color = "126, 123, " + (parseInt(num) + 1 * 5);
    }
    gravedad() {}
    moverDerecha(n) {
        for (let i = 0; i < n; i++) {
            this.direccion = "right";
            if (this.tocar("zonaEnemigos", 25, 0)) {
                this.capa.animate({ left: this.izquierda += 10 }, { duration: 100, queue: false }, "linear");
                this.capa.css("transform", "rotateY(180deg)");
            }
        }
    }
    moverIzquierda(n) {
        for (let i = 0; i < n; i++) {
            this.direccion = "left";
            if (this.tocar("zonaEnemigos", -5, 0)) {
                this.capa.animate({ left: this.izquierda -= 10 }, { duration: 100, queue: false }, "linear");
                this.capa.css("transform", "rotateY(0deg)");
            }
        }
    }
    moverArriba(n) {
        for (let i = 0; i < n; i++) {
            this.direccion = "right";
            if (this.tocar("zonaEnemigos", 10, 20)) {
                this.capa.animate({ top: this.arriba += 10 }, { duration: 100, queue: false }, "linear");
            }
        }
    }
    moverAbajo(n) {
        for (let i = 0; i < n; i++) {
            this.direccion = "left";
            if (this.tocar("zonaEnemigos", 10, -20)) {
                this.capa.animate({ top: this.arriba -= 10 }, { duration: 100, queue: false }, "linear");
            }
        }
    }
    moverAleatorio() {
        let num = Math.round(Math.random() * 3);
        let veces = Math.round(Math.random() * 10);
        switch (num) {
            case 0:
                this.moverDerecha(veces);
                break;
            case 1:
                this.moverIzquierda(veces);
                break;
            case 2:
                this.moverAbajo(veces);
                break;
            case 3:
                this.moverArriba(veces);
                break;
        }

    }
}