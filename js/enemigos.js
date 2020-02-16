class Rana {
    constructor(capa, x, y) {
        this.capa = capa;
        this.altura = x;
        this.anchura = y;
        this.izquierda = capa.offset().left;
        this.derecha = this.izquierda + this.anchura;
        this.abajo = this.arriba + this.altura;
        this.arriba = capa.offset().top - capa.outerHeight(true) / 2;
    }
}