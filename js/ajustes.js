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
            if (ui.value > 0) {
                $("audio")[0].play();
                $("#playMusic i:not('.fa-music')").switchClass("fa-play", "fa-pause");
            }
        }
    });
    $(".derecha span").text(teclasMovimiento.derecha.nom);
    $(".izquierda span").text(teclasMovimiento.izquierda.nom);
    $(".saltar span").text(teclasMovimiento.saltar.nom);
    $(".agacharse span").text(teclasMovimiento.agacharse.nom);
    $(".ataque span").text(teclasMovimiento.ataque.nom);
    $(".usarObjeto span").text(teclasMovimiento.usarObjeto.nom);
    $(".cogerObjeto span").text(teclasMovimiento.cogerObjeto.nom);
    $(".arma1 span").text(teclasMovimiento.arma1.nom);
    $(".arma2 span").text(teclasMovimiento.arma2.nom);
    $(".arma3 span").text(teclasMovimiento.arma3.nom);
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

$("#teclas>div>div").focus(function() {

    $(this).keydown(function(e) {
        console.log(e.key);
        let tecla = { "key": e.which, "nom": (e.which == 32 ? "Space" : e.key) }
        $("." + $(this).attr('class') + " span").text(tecla.nom);
        teclasMovimiento[$(this).attr('class')].key = tecla.key;
        teclasMovimiento[$(this).attr('class')].nom = tecla.nom;
    });
});