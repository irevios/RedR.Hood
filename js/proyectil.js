"use strict";
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