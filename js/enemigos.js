class Rana extends Personaje {
    constructor(punto) {
        super($("<div class='rana personaje enemigo' style='left: " + punto.x + "px; top: " + (punto.y - 40) + "px'></div>").appendTo("#juego"));

        //Colisión
        this.contornoDer = pRanaDer;
        this.contornoIzq = pRanaIzq;
        this.contorno = this.contornoDer;

    }
    // Movimiento
    gravedad() {
        super.gravedad();
        this.g = 2;
    }
    moverDerecha() {
        if (!this.colisionaPorDerecha(4)) {
            this.contorno = this.contornoDer;
            this.velocidadX = 7;
            this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(180deg)");
        } else {
            this.contorno = this.contornoIzq;
            this.velocidadX = -7;
            this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 20 }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(0deg)");
        }
    }
    moverIzquierda() {
        if (!this.colisionaPorIzquierda(4)) {
            this.contorno = this.contornoIzq;
            this.velocidadX = -7;
            this.capa.animate({ left: this.izquierda += this.velocidadX, top: this.arriba -= 20 }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(0deg)");
        } else {
            this.contorno = this.contornoDer;
            this.velocidadX = 7;
            this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(180deg)");
        }
    }
    moverAleatorio() {
        let num = Math.round(Math.random());
        let veces = Math.round(Math.random() * 5);
        for (let i = 0; i < veces; i++) {
            num == 0 ? this.moverDerecha() : this.moverIzquierda();
        }
    }
}