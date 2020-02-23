"use strict";
class Mapa {
    constructor(nivel, x, y, dañoVacio, llave, arma, puerta, dibujo, enemigosGenerar, tiempo) {
        this.num = nivel;
        this.armaCogida = false;
        this.llaveCogida = false;
        this.puertaAbierta = puerta;
        this.fondo = "'img/fondo/nivel" + this.num +
            (this.armaCogida ? "-N-" : "-A-") +
            (this.llaveCogida ? "N- " : "L-") +
            (this.puertaAbierta ? "N" : "P") + ".png'";
        this.overfondo = "'img/fondo/sobre" + this.num + ".png'";
        this.llave = llave ? llave : "";
        this.arma = arma ? arma : "";
        this.dañoVacio = dañoVacio;
        this.enemigosGenerar = enemigosGenerar;
        this.enemigos = [];
        this.dibujo = dibujo;
        this.tiempo = tiempo;
        this.posInicialX = x;
        this.posInicialY = y;
    }
    cambiarFondo() {
        this.dibujaFondo();
        this.fondo = "'img/fondo/nivel" + this.num +
            (this.armaCogida ? "-N-" : "-A-") +
            (this.llaveCogida ? "N-" : "L-") +
            (this.puertaAbierta ? "N" : "P") + ".png'";
        $("#fondo").css("background-image", "url(" + this.fondo + ")");
        $("#overfondo").css("background-image", "url(" + this.overfondo + ")");
        this.enemigos.forEach(en => { en.capa.css("display", "block") });
    }
    dibujaFondo() {
        this.dibujo(this.armaCogida, this.llaveCogida, this.puertaAbierta);
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
            this.enemigos.push(new EnemigoTerrestre(puntosPosibles[punto], "rana", pRana, i));
        }
        // for (let i = 0; i < this.enemigosGenerar.ganso; i++) {
        //     let punto = Math.round(Math.random() * puntosPosibles.length);
        //     this.enemigos.push(new EnemigoTerrestre(puntosPosibles[punto], "ganso", pGansoDer, pGansoIzq));
        // }
        for (let i = 0; i < this.enemigosGenerar.murcielago; i++) {
            let punto = Math.round(Math.random() * puntosPosibles.length);
            this.enemigos.push(new EnemigoVolador(puntosPosibles[punto], "murcielago", pMurcielago, i));
        }
        // for (let i = 0; i < this.enemigosGenerar.lobo; i++) {
        //      let punto = Math.round(Math.random() * puntosPosibles.length);
        //      this.enemigos.push(new EnemigoTerrestre(puntosPosibles[punto], "lobo", pLoboDer, pLoboIzq));
        //  }
        // if (this.enemigosGenerar.loboFeroz) {
        //     this.enemigos.push(new LoboFeroz(i));
        // }
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

let mapas = { N0: null, N1: null, N2: null, N3: null, N4: null }

function generarMapas() {
    mapas.N0 = new Mapa(0, 213, 500, 0, false, "hacha", true, dibujaNivel0, { "rana": 1, "ganso": 0, "murcielago": 0, "lobo": 0, "loboFeroz": false }, "05:20");
    mapas.N1 = new Mapa(1, 39, 766, 2, "llave1", false, false, dibujaNivel1, { "rana": 1, "ganso": 2, "murcielago": 0, "lobo": 0, "loboFeroz": false }, "01:30");
    mapas.N2 = new Mapa(2, 5, 65, 3, "llave2", "ballesta", true, dibujaNivel2, { "rana": 0, "ganso": 0, "murcielago": 4, "lobo": 0, "loboFeroz": false }, "02:00");
    // mapas.N3 = new Mapa(3, 3, llave3, "pulsera", false,dibujaNivel3);
    // mapas.N4 = new Mapa(4, 0, false, false, false,dibujaNivel4);
}