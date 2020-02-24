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
