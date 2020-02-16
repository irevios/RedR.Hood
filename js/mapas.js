"use strict";
class Mapa {
    constructor(nivel, overfondo, x, y, dañoVacio, llave, arma, puerta, dibujo) {
        this.num = nivel;
        this.armaCogida = false;
        this.llaveCogida = false;
        this.puertaAbierta = puerta;
        this.fondo = "'img/fondo/nivel" + this.num +
            (this.armaCogida ? "-N-" : "-A-") +
            (this.llaveCogida ? "N-	" : "L-") +
            (this.puertaAbierta ? "N" : "P") + ".png'";
        this.overfondo = overfondo ? "'img/fondo/sobre" + this.num + ".png'" : "";
        this.llave = llave ? llave : "";
        this.arma = arma ? arma : "";
        this.dañoVacio = dañoVacio;
        this.enemigos = [];
        this.dibujo = dibujo;
        this.posInicialX = x;
        this.posInicialY = y;
    }
    cambiarFondo() {
        this.dibujo(this.armaCogida, this.llaveCogida, this.puertaAbierta);
        this.fondo = "'img/fondo/nivel" + this.num +
            (this.armaCogida ? "-N-" : "-A-") +
            (this.llaveCogida ? "N-	" : "L-") +
            (this.puertaAbierta ? "N" : "P") + ".png'";
        $("#fondo").css("background-image", "url(" + this.fondo + ")");
        $("#overfondo").css("background-image", "url(" + this.overfondo + ")");
    }
    cogerLLave() {
        this.llaveCogida = true;
        this.cambiarFondo();
    }
    cogerArma() {
        this.armaCogida = true;
        this.cambiarFondo();
    }
    abrirPuerta() {
        this.puertaAbierta = true;
        this.cambiarFondo();
    }

}

let mapas = { N0: null, N1: null, N2: null, N3: null, N4: null }

function generarMapas() {
    mapas.N0 = new Mapa(0, true, 213, 500, 0, false, "hacha", true, dibujaNivel0);
    mapas.N1 = new Mapa(1, true, 39, 766, 2, "llave1", false, false, dibujaNivel1);
    mapas.N2 = new Mapa(2, false, 5, 281, 3, "llave2", "ballesta", true, dibujaNivel2);
    // mapas.N3 = new Mapa(3, 3, llave3, "pulsera", false,dibujaNivel3);
    // mapas.N4 = new Mapa(4, 0, false, false, false,dibujaNivel4);
}