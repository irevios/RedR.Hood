class EnemigoTerrestre extends Personaje {
    constructor(punto, tipo, cont, num) {
        super($("<div class='" + tipo + " personaje enemigo' style='left: " + punto.x + "px; top: " + (punto.y - 40) + "px'></div>").appendTo("#juego"));

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
                this.velocidadX = 7;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(180deg)");
            } else {
                this.velocidadX = -7;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(0deg)");
            }
        }
    }
    moverIzquierda() {
        if (this.colisionaPorAbajo(5)) {
            if (!this.colisionaPorIzquierda(5)) {
                this.velocidadX = -7;
                this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
                this.capa.css("transform", "rotateY(0deg)");
            } else {
                this.velocidadX = 7;
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
}

class EnemigoVolador extends Personaje {
    constructor(punto, tipo, cont) {
        super($("<div class='" + tipo + " personaje enemigo' style='left: " + punto.x + "px; top: " + (punto.y - 40) + "px'></div>").appendTo("#juego"));
        this.tipo = tipo;
        //Colisión
        this.contorno = cont;
    }
    gravedad() {}
    moverDerecha() {
        if (!this.colisionaPorDerecha(5)) {
            this.capa.animate({ left: this.izquierda += 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(180deg)");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + "Right.gif)");
        } else {
            this.capa.animate({ left: this.izquierda -= 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(0deg)");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + "Left.gif)");
        }
    }
    moverIzquierda() {
        if (!this.colisionaPorIzquierda(4)) {
            this.capa.animate({ left: this.izquierda -= 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(0deg)");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + "Left.gif)");
        } else {
            this.capa.animate({ left: this.izquierda += 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(180deg)");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + "Right.gif)");
        }
    }
    moverArriba() {
        if (!this.colisionaPorArriba(5)) {
            this.capa.animate({ top: this.arriba += 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + ".gif)");
        } else {
            this.capa.animate({ left: this.arriba -= 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + ".gif)");
        }
    }
    moverAbajo() {
        if (!this.colisionaPorAbajo(5)) {
            this.capa.animate({ top: this.arriba -= 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + ".gif)");
        } else {
            this.capa.animate({ left: this.arriba += 10 }, { duration: 10, queue: false }, "linear");
            this.capa.css("background-image", "url(../img/enemigos/" + tipo + ".gif)");
        }
    }
    moverAleatorio() {
        let num = Math.round(Math.random() * 3);
        let veces = Math.round(Math.random() * 5);
        for (let i = 0; i < veces; i++) {
            switch (num) {
                case 0:
                    this.moverDerecha();
                    break;
                case 1:
                    this.moverIzquierda();
                    break;
                case 2:
                    this.moverAbajo();
                    break;
                case 3:
                    this.moverArriba();
                    break;
            }
        }
    }
}