"use strict";
// Modo Debug
let modoDebug = false;
modoDebug ? $("#fondo,#overfondo").addClass("modoDebug") : "";

// Canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Inicio
let personaje;
let nivel;
let anguloLanzamiento = 0;
let puntuacion = 0;

// Hacer que el juego siempre tenga el tamaño correcto según la pantalla
$(window).resize((e) => rescala());
$(window).on('load', () => {
    setTimeout(function() {
        $(".cargando").css("opacity", "0");
        setTimeout(function() {
            $(".cargando").hide();
        }, 1000);
    }, 1000);
});

let intervaloGravedad, intervaloEnemigos, intervaloMovAleatorio, intervaloTocar, intervaloTiempo;

$(document).ready(function() {
    // Inicialización
    rescala();
    generarMapas();
    nivel = mapas.N0;
    $("#dialog").dialog({
        appendTo: "body",
        autoOpen: false,
        modal: true,
        width: 700
    });
    try {
        localStorage.getItem('nivel');
    } catch (e) {
        $(".alerta").show();
        $(".continuar").hide();
    }
    personaje = new Caperucita($('#caperucita'));
    for (var i = 0; i < personaje.vida; i++) {
        $("<i class='fa fa-heart' aria-hidden='true'></i>").insertBefore("#puntuacion");
    };

});

$("#partida .nueva").click(nuevaPartida);
$("#partida .continuar").click(continuar);

function nuevaPartida() {
    partida(0);
    personaje.izquierda = nivel.posInicialX;
    personaje.arriba = nivel.posInicialY;
    setTimeout(() => $("#transicion").fadeOut(), 600);
}

function continuar() {
    let d = JSON.parse(localStorage.getItem('datos'));
    puntuacion = d.puntuacion;
    ganaPuntos(0);
    personaje.arriba = d.posicion.y;
    personaje.izquierda = d.posicion.x;
    personaje.vida = d.vida;
    for (let i = personaje.vida + 1; i <= 4; i++) {
        $("#vida i:nth-child(" + i + "):not(.fa-trophy)").addClass("perdida");
    }
    personaje.armaEquipada = d.aEquipada;
    personaje.armas = d.armas;
    personaje.inventario = d.objetos;
    personaje.capa.css({ "top": personaje.arriba, "left": personaje.izquierda });
    if (d.nivel != undefined) {
        nivel.armaCogida = d.nArma;
        nivel.llaveCogida = d.nLlave;
        nivel.puertaAbierta = d.nPuerta;
        nivel.tiempo = d.tiempo;
        $("#tiempo span").text(d.tiempo);
        partida(d.nivel);
    }
    setTimeout(() => $("#transicion").fadeOut(), 600);
}

function partida(n) {
    $("#panel, #vida, #caperucita").show();
    $("#inicio").hide("fade");
    // Mapa
    nivel = mapas["N" + n];
    nivel.cambiarFondo();
    nivel.generaEnemigos();
    actualizaPanel();

    // Intervalos
    gravity();
    enemigos();
    reloj();
    enemigosMovAleatorio();
    compruebaTocar();
    personaje.capa.show();
    // Controles
    controlaMouse();
    controlaTeclas();
}

function actualizaPanel() {
    $("#nivel span").text(nivel.num + 1);
    $("#tiempo span").text(nivel.tiempo);
}

function gravity() {
    clearTimeout(intervaloGravedad);
    personaje.gravedad();
    intervaloGravedad = setTimeout(gravity, 50);
}

function enemigos() {
    clearTimeout(intervaloEnemigos);
    dibujaMovimiento(nivel.enemigos);
    intervaloEnemigos = setTimeout(enemigos, 200);
}

function enemigosMovAleatorio() {
    clearTimeout(intervaloMovAleatorio);
    nivel.enemigos.forEach(e => {
        if (e.tipo == "lobo" || e.tipo == "loboFeroz") {
            e.seguirPersonaje();
        } else {
            e.moverAleatorio();
        }
    });
    intervaloMovAleatorio = setTimeout(enemigosMovAleatorio, 200);
}

function compruebaTocar() {
    clearTimeout(intervaloTocar);
    compruebaNivel();
    intervaloTocar = setTimeout(compruebaTocar, 200);
}

function rescala() {
    let escala = Math.min($(window).width() / $("#juego").outerWidth(), $(window).height() / $("#juego").outerHeight());
    $("#juego").css("transform", "scale(" + escala + ")");
}

var cambioMapa;

function compruebaNivel() {
    if (personaje.tocar("puerta") && cambioMapa == null) {
        $("#transicion").fadeIn(function() {
            nivel.eliminaEnemigos();
            nivel = mapas["N" + (nivel.num + 1)];
            personaje.capa.hide();
            personaje.izquierda = nivel.posInicialX;
            personaje.arriba = nivel.posInicialY;
            personaje.capa.show();
            nivel.cambiarFondo();
            nivel.generaEnemigos();
            ganaPuntos(125);
            actualizaPanel();
        });
        cambioMapa = setTimeout(() => $("#transicion").fadeOut(), 600);
    }
    if (personaje.tocar("vacio")) {
        personaje.pierdeVida();
    }
    if (personaje.tocar("enemigo")) {
        personaje.pierdeVida();
        personaje.retrocede();
    }
    try {
        localStorage.setItem("datos", JSON.stringify({
            "nivel": nivel.num,
            "nArma": nivel.armaCogida,
            "nLlave": nivel.llaveCogida,
            "nPuerta": nivel.puertaAbierta,
            "tiempo": $("#tiempo span").text(),
            "puntuacion": puntuacion,
            "posicion": { "x": personaje.izquierda, "y": personaje.arriba },
            "vida": personaje.vida,
            "aEquipada": personaje.armaEquipada,
            "armas": personaje.armas,
            "objetos": personaje.inventario
        }));
    } catch (e) {}
}

function muestraGuia() {
    if ($(".guia") != undefined) {
        $("<div class='guia'></div>").appendTo("#caperucita");
    }
    $("body").mousemove((e) => {
        moverGuia(e.pageX, e.pageY);
    });
}

function moverGuia(x, y) {
    let tx = x - personaje.izquierda;
    let ty = y - personaje.arriba;
    let atan = Math.atan2(ty, tx);
    let atanGrados = atan * (180 / Math.PI);
    let atanCalculado = atanGrados > 0.0 ? atanGrados : (360.0 + atanGrados);
    anguloLanzamiento = parseInt(atanCalculado);
    personaje.direccion = anguloLanzamiento >= 90 && anguloLanzamiento < 270 ? "left" : "right"

    $(".guia").css("transform", "rotate(" + anguloLanzamiento + "deg)");
}

function reloj() {
    let t = $("#tiempo span").text().split(":");
    let cuenta = parseInt(t[0]) * 60 + parseInt(t[1]);
    if (cuenta <= 0) {
        clearInterval(intervaloTiempo);
        nivel.eliminaEnemigos();
        personaje.capa.hide();
        personaje.izquierda = nivel.posInicialX;
        personaje.arriba = nivel.posInicialY;
        personaje.capa.show();
        nivel.cambiarFondo();
        nivel.generaEnemigos();
        actualizaPanel();
        personaje.pierdeVida();
        if (personaje.vida > 0) {
            intervaloTiempo = setTimeout(reloj, 1000);
        }
        return;
    }
    cuenta = parseInt(t[0]) * 60 + parseInt(t[1]);
    cuenta--;
    let seg = parseInt(cuenta % 60);
    let min = parseInt(cuenta / 60 % 60);
    $("#tiempo span").text((min < 10 ? ("0" + min) : min) + ":" + (seg < 10 ? ("0" + seg) : seg));
    intervaloTiempo = setTimeout(reloj, 1000);
}

function ganaPuntos(plus) {
    puntuacion += plus;
    $("#puntuacion span").text(("0000000000" + puntuacion).slice(-10));
}

function gameover() {
    $("#gameover").show();
    $("#juego,#interfaz").hide();
}

$(".ajustes").click(function() {
    $("<i class='fa fa-close' aria-hidden='true'></i>").insertBefore(".ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle>button");
    $(".ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle>button").remove();
    $(".fa-close").click(function() { $("#dialog").dialog("close") });
    $("#volumen").slider({
        value: 50,
        orientation: "horizontal",
        range: "min",
        animate: true,
        slide: function(event, ui) {
            $(".valorVolumen").text(ui.value);
        }
    });
    $("#dialog").dialog("open");
});


$(".derecha").focus(function() {
    $(".derecha").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".derecha span").text(tecla.nom);
        teclasMovimiento.derecha.key = tecla.key;
    });
});
$(".izquierda").focus(function() {
    $(".izquierda").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".izquierda span").text(tecla.nom);
        teclasMovimiento.izquierda.key = tecla.key;
    });
});
$(".saltar").focus(function() {
    $(".saltar").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".saltar span").text(tecla.nom);
        teclasMovimiento.saltar.key = tecla.key;
    });
});
$(".agacharse").focus(function() {
    $(".agacharse").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".agacharse span").text(tecla.nom);
        teclasMovimiento.agacharse.key = tecla.key;
    });
});
$(".ataque").focus(function() {
    $(".ataque").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".ataque span").text(tecla.nom);
        teclasMovimiento.ataque.key = tecla.key;
    });
});
$(".usarObjeto").focus(function() {
    $(".usarObjeto").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".usarObjeto span").text(tecla.nom);
        teclasAccion.usarObjeto.key = tecla.key;
    });
});
$(".cogerObjeto").focus(function() {
    $(".cogerObjeto").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".cogerObjeto span").text(tecla.nom);
        teclasAccion.cogerObjeto.key = tecla.key;
    });
});
$(".arma1").focus(function() {
    $(".arma1").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".arma1 span").text(tecla.nom);
        teclasAccion.arma1.key = tecla.key;
    });
});

$(".arma2").focus(function() {
    $(".arma2").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".arma2 span").text(tecla.nom);
        teclasAccion.arma2.key = tecla.key;
    });
});
$(".arma3").focus(function() {
    $(".arma3").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".arma3 span").text(tecla.nom);
        teclasAccion.arma3.key = tecla.key;
    });
});