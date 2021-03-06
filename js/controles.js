"use strict";
var teclasMovimiento = {
    "saltar": { on: false, key: 87, t: 0, nom: "w" },
    "agacharse": { on: false, key: 83, t: 0, nom: "s" },
    "derecha": { on: false, key: 68, t: 0, nom: "d" },
    "izquierda": { on: false, key: 65, t: 0, nom: "a" },
    "ataque": { on: false, key: 32, t: 0, nom: "Space" },
    "cogerObjeto": { on: false, key: 81, t: 0, nom: "q" },
    "usarObjeto": { on: false, key: 69, t: 0, nom: "e" },
    "hacha": { on: false, key: 49, t: 0, nom: "1" },
    "ballesta": { on: false, key: 50, t: 0, nom: "2" },
    "pulsera": { on: false, key: 51, t: 0, nom: "3" },
    "modoDebug": { on: false, key: 192, t: 0, nom: "?" }
};
//var teclasMovimiento = {}

function controlaTeclas() {
    let tiempo;
    $(document).keydown((e) => {
        Object.entries(teclasMovimiento).forEach(([a, b]) => {
            if (e.which == teclasMovimiento[a].key) {
                if (!teclasMovimiento[a].on) { teclasMovimiento[a].t = new Date().getTime(); };
                teclasMovimiento[a].on = true;
            }
        });
        mueve();
    });
    $(document).keyup((e) => {
        Object.entries(teclasMovimiento).forEach(([a, b]) => {
            if (e.which == teclasMovimiento[a].key && teclasMovimiento[a].on) {
                teclasMovimiento[a].on = false;
                teclasMovimiento[a].t = new Date(new Date().getTime() - new Date(tiempo).getTime()).getMilliseconds();
            }
        });
    });
}

function mueve() {
    if (teclasMovimiento.ataque.on) {
        teclasMovimiento.izquierda.on = false;
        teclasMovimiento.derecha.on = false;
        teclasMovimiento.saltar.on = false;
        teclasMovimiento.agacharse.on = false;
        if (personaje.armaEquipada == "hacha") {
            personaje.hacha();
        }
        if (personaje.armaEquipada == "ballesta") {
            personaje.ballesta();
        }
        if (personaje.armaEquipada == "pulsera") {
            personaje.pulsera();
        }
    }
    if (teclasMovimiento.izquierda.on) {
        if (teclasMovimiento.izquierda.t < 100 && teclasMovimiento.izquierda.t != 0) {
            personaje.estatica("idle_left");
            personaje.direccion = "left";
        } else {
            if (!personaje.colisionaPorIzquierda(15) && personaje.colisionaPorAbajo(15)) {
                personaje.moverIzquierda();
                personaje.rectificaciones = 0;
            } else if (!personaje.colisionaPorIzquierdaPuedeArriba(10, 15) && personaje.colisionaPorAbajo(15)) {
                personaje.moverArriba();
                personaje.moverIzquierda();
            } else if (personaje.colisionaPorIzquierdaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(15)) {
                personaje.velocidadX = -20;
            }
        }
    }
    if (teclasMovimiento.derecha.on) {
        if (teclasMovimiento.derecha.t < 100 && teclasMovimiento.derecha.t != 0) {
            personaje.estatica("idle_right");
            personaje.direccion = "right";
        } else {
            if (!personaje.colisionaPorDerecha(15) && personaje.colisionaPorAbajo(15)) {
                personaje.moverDerecha();
                personaje.rectificaciones = 0;
            } else if (!personaje.colisionaPorDerechaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(15)) {
                personaje.moverArriba();
                personaje.moverDerecha();
            } else if (personaje.colisionaPorDerechaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(15)) {
                personaje.velocidadX = 20;
            }
        }
    }
    if (teclasMovimiento.saltar.on) {
        if (!personaje.colisionaPorArriba(30)) {
            personaje.salta();
        }
    }
    if (teclasMovimiento.agacharse.on) {
        if (personaje.colisionaPorAbajo(5)) {
            personaje.agachate();
        }
    }
    if (teclasMovimiento.ataque.on && personaje.tocar("troncoBloqueando", 50)) {
        if (personaje.armaEquipada == "hacha") {
            nivel.abrirPuerta();
        }
    }
    if (teclasMovimiento.usarObjeto.on && personaje.tocar("puertaCerrada", 100)) {
        if (personaje.objetoElegido == nivel.llave) {
            nivel.abrirPuerta();
        }
    }
    if (teclasMovimiento.cogerObjeto.on && personaje.tocar("arma")) {
        ganaPuntos(20);
        personaje.armas[nivel.arma] = true;
        personaje.armaEquipada = nivel.arma;
        nivel.cogerArma();

        if (nivel.arma == "ballesta" || nivel.arma == "pulsera") {
            $(".guia").show();
        }
    }
    if (teclasMovimiento.cogerObjeto.on && personaje.tocar("llave")) {
        ganaPuntos(20);
        personaje.inventario[nivel.llave] = true;
        personaje.objetoElegido = nivel.llave;
        nivel.cogerLLave();
    }
    if (teclasMovimiento.cogerObjeto.on && personaje.tocar("objetos")) {
        ganaPuntos(20);
        personaje.inventario[nivel.manzana] = true;
        personaje.recuperaVida();
        nivel.cogerObjeto();
    }
    if (teclasMovimiento.hacha.on) {
        if (personaje.armas.hacha) {
            personaje.armaEquipada = "hacha";
            $(".guia").hide();
        }
    }
    if (teclasMovimiento.ballesta.on) {
        if (personaje.armas.ballesta) {
            personaje.armaEquipada = "ballesta";
            $(".guia").show();
        }
    }
    if (teclasMovimiento.pulsera.on) {
        if (personaje.armas.pulsera) {
            personaje.armaEquipada = "pulsera";
            $(".guia").show();
        }
    }
    if (teclasMovimiento.modoDebug.on) {
        personaje.armas = {
            "hacha": true,
            "ballesta": true,
            "pulsera": true
        }
    }

}

function controlaMouse() {
    $("#juego").click(function(){
        if(personaje.armaEquipada == "ballesta"||personaje.armaEquipada == "pulsera"){
            teclasMovimiento.ataque.on = true;
            mueve();
            teclasMovimiento.ataque.on = false;
        }
    })
}