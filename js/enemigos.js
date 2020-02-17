class Rana extends Personaje {
    constructor(punto) {
        super($("<div class='rana'></div>").appendTo("#juego"))
        this.capa.css({ "left": punto.x - this.anchura, "top": punto.y - this.altura });
        this.izquierda = punto.x + this.anchura;
        this.arriba = punto.y + this.altura;
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;

        //Colisión
        this.contornoDer = pRanaDer;
        this.contornoIzq = pRanaIzq;
        this.contorno = this.contornoDer;
    }
    // Movimiento
    gravedad() {
        super.gravedad();
        this.moverArriba();
        this.moverAleatorio();
    }
    moverDerecha() {
        if (!this.colisionaPorDerecha(10)) {
            this.contorno = this.contornoDer;
            this.velocidadX = 7;
            this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(180deg)");
        }
    }
    moverIzquierda() {
        if (!this.colisionaPorIzquierda(10)) {
            this.contorno = this.contornoIzq;
            this.velocidadX = -7;
            this.capa.animate({ left: this.izquierda += this.velocidadX }, { duration: 10, queue: false }, "linear");
            this.capa.css("transform", "rotateY(0deg)");
        }
    }
    moverArriba() { // Evita problemas con las inclinaciones
        if ((this.colisionaPorIzquierda(5) || this.colisionaPorDerecha(5)) && this.rectificaciones < 7) {
            this.capa.animate({ top: this.arriba -= 5 }, { duration: 10, queue: false }, "linear");
            this.rectificaciones++;
        }

    }
    moverAleatorio() {
        let num = Math.round(Math.random());

        num == 0 ? this.moverDerecha() : this.moverIzquierda();
    }
}