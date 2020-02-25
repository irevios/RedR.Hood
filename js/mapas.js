"use strict";
class Mapa {
    constructor(nivel, x, y, dañoVacio, llave, arma, puerta, objeto, dibujo, enemigosGenerar, tiempo) {
        this.num = nivel;
        this.armaCogida = false;
        this.llaveCogida = false;
        this.puertaAbierta = puerta;
        this.objetoCogido = false;
        this.fondo = "'img/fondo/nivel" + this.num +
            (this.armaCogida ? "-N-" : "-A-") +
            (this.llaveCogida ? "N- " : "L-") +
            (this.puertaAbierta ? "N" : "P") +
            (objeto ? (this.objetoCogido ? "-N" : "-O") : "") + ".png'";
        this.overfondo = "'img/fondo/sobre" + this.num + ".png'";
        this.llave = llave ? llave : "";
        this.arma = arma ? arma : "";
        this.objeto = objeto ? objeto : false;
        this.dañoVacio = dañoVacio;
        this.enemigosGenerar = enemigosGenerar;
        this.enemigos = [];
        this.dibujo = dibujo;
        this.tiempo = tiempo;
        this.posInicialX = x;
        this.posInicialY = y;
    }
    cambiarFondo() {
        false,
        this.dibujaFondo();
        this.fondo = "'img/fondo/nivel" + this.num +
        (this.armaCogida ? "-N-" : "-A-") +
        (this.llaveCogida ? "N-" : "L-") +
        (this.puertaAbierta ? "N" : "P") +
        (this.objeto ? (this.objetoCogido ? "-N" : "-O") : "") + ".png'";
        $("#fondo").css("background-image", "url(" + this.fondo + ")");
        $("#overfondo").css("background-image", "url(" + this.overfondo + ")");
        this.enemigos.forEach(en => { en.capa.css("display", "block") });
    }
    dibujaFondo() {
        this.dibujo(this.armaCogida, this.llaveCogida, this.puertaAbierta, this.objeto);
    }
    cogerLLave() {
        this.llaveCogida = true;
        this.cambiarFondo();
    }
    cogerArma() {
        this.armaCogida = true;
        this.cambiarFondo();
    }
    cogerObjeto() {
        this.objetoCogido = true;
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
            this.enemigos.push(new EnemigoTerrestre(puntosPosibles[punto], "rana", pRana, i, 7));
        }
        // for (let i = 0; i < this.enemigosGenerar.ganso; i++) {
        //     let punto = Math.round(Math.random() * puntosPosibles.length);
        //     this.enemigos.push(new EnemigoTerrestre(puntosPosibles[punto], "ganso", pGansoDer, pGansoIzq));
        // }
        for (let i = 0; i < this.enemigosGenerar.murcielago; i++) {
            let punto = Math.round(Math.random() * puntosPosibles.length);
            this.enemigos.push(new EnemigoVolador(puntosPosibles[punto], "murcielago", pMurcielago, i));
        }
        if (this.enemigosGenerar.lobo) {
            this.enemigos.push(new EnemigoTerrestre({ x: 1200, y: 655 }, "lobo", pLobo, 150, 5));
        }
        if (this.enemigosGenerar.loboFeroz) {
            this.enemigos.push(new EnemigoTerrestre({ x: 1496, y: 605 }, "loboFeroz", pLoboFeroz, 230, 0));
        }
    }
    eliminaEnemigo(enemigoColor) {
        let tocado = this.enemigos.filter(e => e.color == "126, 123, " + enemigoColor)[0];
        if (tocado != undefined) {
            let efecto = false;
            tocado.capa.switchClass("bien", "daño", 300, "swing", function() {
                efecto = true;
            });
            setTimeout(() => {
                tocado.capa.remove();
                this.enemigos = this.enemigos.filter(e => e != tocado);
            }, 300);
            ganaPuntos(25);
        }
    }
    eliminaEnemigos() {
        this.enemigos.forEach(e => { e.capa.remove() });
        this.enemigos = [];
    }

}

let mapas = { N0: null, N1: null, N2: null, N3: null }

function generarMapas() {
    mapas.N0 = new Mapa(0, 213, 500, 0, false, "hacha", false, false, dibujaNivel0, { "rana": 1, "ganso": 0, "murcielago": 0, "lobo": false, "loboFeroz": false }, "00:50");
    mapas.N1 = new Mapa(1, 39, 766, 2, "llave1", false, false, false, dibujaNivel1, { "rana": 1, "ganso": 2, "murcielago": 0, "lobo": false, "loboFeroz": false }, "01:30");
    mapas.N2 = new Mapa(2, 5, 65, 3, "llave2", "ballesta", true, false, dibujaNivel2, { "rana": 0, "ganso": 0, "murcielago": 4, "lobo": false, "loboFeroz": false }, "02:00");
    mapas.N3 = new Mapa(3, 5, 65, 3, false, "pulsera", false, "manzana", dibujaNivel3, { "rana": 0, "ganso": 0, "murcielago": 0, "lobo": true, "loboFeroz": true }, "01:00");
}