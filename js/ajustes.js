"use strict";
    $("#volumen").slider({
    value: 50,
    orientation: "horizontal",
    range: "min",
    animate: true,
    slide: function(event, ui) {
        $(".valorVolumen").text(ui.value);
        $("audio")[0].volume = ui.value / 100;
        if (ui.value == 0) {
            $("audio")[0].pause();
            $("#playMusic i:not('.fa-music')").switchClass("fa-pause", "fa-play");
        }
        if (ui.value > 0) {
            $("audio")[0].play();
            $("#playMusic i:not('.fa-music')").switchClass("fa-play", "fa-pause");
        }
    }
});
$(".ajustes").click(function() {
    $("<i class='fa fa-close' aria-hidden='true'></i>").insertBefore(".ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle>button");
    $(".ui-dialog-titlebar.ui-corner-all.ui-widget-header.ui-helper-clearfix.ui-draggable-handle>button").remove();
    $(".fa-close").click(function() { $("#dialog").dialog("close") });
    $(".derecha span").text(teclasMovimiento.derecha.nom);
    $(".izquierda span").text(teclasMovimiento.izquierda.nom);
    $(".saltar span").text(teclasMovimiento.saltar.nom);
    $(".agacharse span").text(teclasMovimiento.agacharse.nom);
    $(".ataque span").text(teclasMovimiento.ataque.nom);
    $(".usarObjeto span").text(teclasMovimiento.usarObjeto.nom);
    $(".cogerObjeto span").text(teclasMovimiento.cogerObjeto.nom);
    $(".hacha span").text(teclasMovimiento.hacha.nom);
    $(".ballesta span").text(teclasMovimiento.ballesta.nom);
    $(".pulsera span").text(teclasMovimiento.pulsera.nom);
    $("#dialog").dialog("open");
});

$("#playMusic").click(function() {
    if ($("#playMusic i:not('.fa-music')").hasClass("fa-pause")) {
        $("#playMusic i:not('.fa-music')").switchClass("fa-pause", "fa-play");
        $("audio")[0].pause();
    } else {
        $("#playMusic i:not('.fa-music')").switchClass("fa-play", "fa-pause");
        $("audio")[0].play();
    }
})

$("#teclas>div>div").focus(function() {

    $(this).keydown(function(e) {
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $("." + $(this).attr('class') + " span").text(tecla.nom);
        teclasMovimiento[$(this).attr('class')].key = tecla.key;
        teclasMovimiento[$(this).attr('class')].nom = tecla.nom;
    });
});