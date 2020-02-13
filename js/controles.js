var teclas = {
    "saltar": { on: false, key: 87, t: 0 },
    "agacharse": { on: false, key: 83, t: 0 },
    "derecha": { on: false, key: 68, t: 0 },
    "izquierda": { on: false, key: 65, t: 0 },
    "ataque": { on: false, key: 32, t: 0 },
    "usarObjeto": { on: false, key: 69, t: 0 },
    "arma1": { on: false, key: 49, t: 0 },
    "arma2": { on: false, key: 50, t: 0 },
    "arma3": { on: false, key: 51, t: 0 }
};

function controlaTeclas() {
    let tiempo;
    $(document).keydown(function(e) {
        Object.entries(teclas).forEach(([a, b]) => {
            if (e.keyCode == teclas[a].key) {
                if (!teclas[a].on) { teclas[a].t = new Date().getTime(); };
                teclas[a].on = true;
            }
        });
        mueve();
    });
    $(document).keyup(function(e) {
        Object.entries(teclas).forEach(([a, b]) => {
            if (e.keyCode == teclas[a].key && teclas[a].on) {
                teclas[a].on = false;
                teclas[a].t = new Date(new Date().getTime() - new Date(tiempo).getTime()).getMilliseconds();
            }
        });
    });
}

function mueve() {
    if (!teclas.derecha.on && !teclas.izquierda.on) {
        personaje.velocidadX = 0;
    }
    if (teclas.izquierda.on) {
        if (teclas.izquierda.t < 100 && teclas.izquierda.t != 0) {
            personaje.estatica("idle_left_0");
            personaje.direccion = "left";
        } else {
            if (!personaje.colisionaPorIzquierda(10) && personaje.colisionaPorAbajo(10)) {
                personaje.moverIzquierda();
            } else if (!personaje.colisionaPorIzquierdaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
                personaje.moverArriba();
                personaje.moverIzquierda();
            } else if (personaje.colisionaPorIzquierdaPuedeArriba(10, 10) && personaje.colisionaPorAbajo(10)) {
                personaje.velocidadX = -10;
            }
        }
    }
    if (teclas.derecha.on) {
        if (teclas.derecha.t < 100 && teclas.derecha.t != 0) {
            personaje.estatica("idle_right_0");
            personaje.direccion = "right";
        } else {
            if (!personaje.colisionaPorDerecha(10) && personaje.colisionaPorAbajo(10)) {
                personaje.moverDerecha();
            } else if (!personaje.colisionaPorDerechaPuedeArriba(10, 5) && personaje.colisionaPorAbajo(10)) {
                personaje.moverArriba();
                personaje.moverDerecha();
            } else if (personaje.colisionaPorDerechaPuedeArriba(10, 5) && personaje.colisionaPorAbajo(10)) {
                personaje.velocidadX = 10;
            }
        }
    }
    if (teclas.saltar.on) {
        personaje.salta();
        personaje.mirarArriba();
        teclas.saltar.on = false;
    }
    if (teclas.agacharse.on) {
        if (personaje.colisionaPorAbajo(5)) {
            personaje.agachate();
        }
    }

    if (teclas.ataque.on) {
        personaje.pulsera();
    }
}