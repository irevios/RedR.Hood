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
        this.contorno = this.contornonoDer;
    }
}