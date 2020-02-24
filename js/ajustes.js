"use strict";
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
            $("audio").attr("volume", ui.value / 100);
            if (ui.value == 0) {
                $("audio")[0].pause();
                $("#playMusic i:not('.fa-music')").switchClass("fa-pause", "fa-play");
            }
        }
    });
    $(".derecha span").text(teclasMovimiento.derecha.nom);
    $(".izquierda span").text(teclasMovimiento.izquierda.nom);
    $(".saltar span").text(teclasMovimiento.saltar.nom);
    $(".agacharse span").text(teclasMovimiento.agacharse.nom);
    $(".ataque span").text(teclasMovimiento.ataque.nom);
    $(".usarObjeto span").text(teclasAccion.usarObjeto.nom);
    $(".cogerObjeto span").text(teclasAccion.cogerObjeto.nom);
    $(".arma1 span").text(teclasAccion.arma1.nom);
    $(".arma2 span").text(teclasAccion.arma2.nom);
    $(".arma3 span").text(teclasAccion.arma3.nom);
    $("#dialog").dialog("open");
});

$("#playMusic").click(function() {
    if ($("#playMusic i:not('.fa-music')").hasClass("fa-pause")) {
        $("#playMusic i:not('.fa-music')").switchClass("fa-pause", "fa-play");
        $("audio")[0].pause();
        $("audio").attr("volume", 50 / 100);
    } else {
        $("#playMusic i:not('.fa-music')").switchClass("fa-play", "fa-pause");
        $("audio")[0].play();
    }
})

$(".derecha").focus(function() {
    $(".derecha").keydown(function(e) {
        console.log(e.key);
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".derecha span").text(tecla.nom);
        teclasMovimiento.derecha.key = tecla.key;
        teclasMovimiento.derecha.nom = tecla.nom;
    });
});
$(".izquierda").focus(function() {
    $(".izquierda").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".izquierda span").text(tecla.nom);
        teclasMovimiento.izquierda.key = tecla.key;
        teclasMovimiento.izquierda.nom = tecla.nom;
    });
});
$(".saltar").focus(function() {
    $(".saltar").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".saltar span").text(tecla.nom);
        teclasMovimiento.saltar.key = tecla.key;
        teclasMovimiento.saltar.nom = tecla.nom;
    });
});
$(".agacharse").focus(function() {
    $(".agacharse").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".agacharse span").text(tecla.nom);
        teclasMovimiento.agacharse.key = tecla.key;
        teclasMovimiento.agacharse.nom = tecla.nom;
    });
});
$(".ataque").focus(function() {
    $(".ataque").keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".ataque span").text(tecla.nom);
        teclasMovimiento.ataque.key = tecla.key;
        teclasMovimiento.ataque.nom = tecla.nom;
    });
});
$(".usarObjeto").focus(function() {
    $(".usarObjeto").keypress(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".usarObjeto span").text(tecla.nom);
        teclasAccion.usarObjeto.key = tecla.key;
        teclasAccion.usarObjeto.nom = tecla.nom;
    });
});
$(".cogerObjeto").focus(function() {
    $(".cogerObjeto").keypress(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".cogerObjeto span").text(tecla.nom);
        teclasAccion.cogerObjeto.key = tecla.key;
        teclasAccion.cogerObjeto.nom = tecla.nom;
    });
});
$(".arma1").focus(function() {
    $(".arma1").keypress(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".arma1 span").text(tecla.nom);
        teclasAccion.arma1.key = tecla.key;
        teclasAccion.arma1.nom = tecla.nom;
    });
});

$(".arma2").focus(function() {
    $(".arma2").keypress(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".arma2 span").text(tecla.nom);
        teclasAccion.arma2.key = tecla.key;
    });
});
$(".arma3").focus(function() {
    $(".arma3").keypress(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $(".arma3 span").text(tecla.nom);
        teclasAccion.arma3.key = tecla.key;
    });
});