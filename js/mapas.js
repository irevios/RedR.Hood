"use strict";
class Mapa {
    constructor(nivel, x, y, dañoVacio, llave, arma, puerta, dibujo, enemigosGenerar) {
        this.num = nivel;
        this.armaCogida = false;
        this.llaveCogida = false;
        this.puertaAbierta = puerta;
        this.fondo = "'img/fondo/nivel" + this.num +
            (this.armaCogida ? "-N-" : "-A-") +
            (this.llaveCogida ? "N-	" : "L-") +
            (this.puertaAbierta ? "N" : "P") + ".png'";
        this.overfondo = "'img/fondo/sobre" + this.num + ".png'";
        this.llave = llave ? llave : "";
        this.arma = arma ? arma : "";
        this.dañoVacio = dañoVacio;
        this.enemigosGenerar = enemigosGenerar;
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
        this.enemigos.forEach(en => { en.capa.css("display", "block") });
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
    generaEnemigos() {
        let puntosPosibles = buscaColor("enemigos");
        for (let i = 0; i < this.enemigosGenerar.rana; i++) {
            let punto = Math.round(Math.random() * puntosPosibles.length);
            this.enemigos.push(new Rana(puntosPosibles[punto]));
        }
        // for (let i; i < this.enemigosGenerar.ganso; i++) {
        //     this.enemigos.push(new Ganso(i));
        // }
        // for (let i; i < this.enemigosGenerar.murcielago; i++) {
        //     this.enemigos.push(new Murcielago(i));
        // }
        // for (let i; i < this.enemigosGenerar.lobo; i++) {
        //     this.enemigos.push(new Lobo(i));
        // }
        // if (this.enemigosGenerar.loboFeroz) {
        //     this.enemigos.push(new LoboFeroz(i));
        // }
    }

}

let mapas = { N0: null, N1: null, N2: null, N3: null, N4: null }

function generarMapas() {
    mapas.N0 = new Mapa(0, 213, 500, 0, false, "hacha", true, dibujaNivel0, { "rana": 1, "ganso": 0, "murcielago": 0, "lobo": 0, "loboFeroz": false });
    mapas.N1 = new Mapa(1, 39, 766, 2, "llave1", false, false, dibujaNivel1, { "rana": 1, "ganso": 2, "murcielago": 0, "lobo": 0, "loboFeroz": false });
    //mapas.N1.generaEnemigos({ "rana": 1, "ganso": 2, "murcielago": 0, "lobo": 0, "loboFeroz": false });
    mapas.N2 = new Mapa(2, 5, 65, 3, "llave2", "ballesta", true, dibujaNivel2, { "rana": 0, "ganso": 0, "murcielago": 6, "lobo": 0, "loboFeroz": false });
    //mapas.N2.generaEnemigos({ "rana": 0, "ganso": 0, "murcielago": 6, "lobo": 0, "loboFeroz": false });
    // mapas.N3 = new Mapa(3, 3, llave3, "pulsera", false,dibujaNivel3);
    // mapas.N4 = new Mapa(4, 0, false, false, false,dibujaNivel4);
}