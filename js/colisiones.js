"use strict";
let colores = {
    "terreno": [0, 0, 0], // Colisión terreno // rgb(0, 0, 0)
    "vacio": [255, 0, 0], // Si caes -> game over // rgb(255, 0, 0)
    "arma": [0, 0, 255], // Si tocas un arma, la recoges // rgb(0, 0, 255)
    "llave": [255, 255, 0], // Si tocas una llave, la recoges // rgb(255, 255, 0)
    "puertaCerrada": [10, 130, 80], // Si tocas una puerta cerrada se abre si tienes la llave // rgb(10,130,80)
    "troncoBloqueando": [0, 127, 127], // Si tocas una puerta cerrada se abre si tienes la llave // rgb(0, 127, 127)
    "puerta": [0, 255, 0], // Si tocas una puerta abierta cambia de mapa // rgb(0, 255, 0)
    "zonaEnemigos": [210, 0, 210], // Los enemigos pueden aparecer por esta zona // rgb(210,0,210)
    "enemigo": [126, 123, 1], // Si tocas un enemigo pierde vida // rgb(126, 123, 1)
    "objetos": [0, 210, 255], // Si tocas un arma, la recoges // rgb(0, 210, 155)
    "blanco": [255, 255, 255] // Espacio en blanco // rgb(255,255,255)
}

function colision(x, y, puntos, tipo) {
    let colisiona = false;
    puntos.forEach(p => {
        let dataPixel = ctx.getImageData(p[0] + x, p[1] + y, 1, 1).data;
        for (var i = 0; i <= dataPixel.length; i += 4) {
            if (tipo != "enemigo") {
                if (colores[tipo][0] == dataPixel[i] &&
                    colores[tipo][1] == dataPixel[i + 1] &&
                    colores[tipo][2] == dataPixel[i + 2]) {
                    colisiona = true;
                }
            } else {
                if (colores[tipo][0] == dataPixel[i] &&
                    colores[tipo][1] == dataPixel[i + 1]) {
                    colisiona = dataPixel[i + 2];
                }
            }
        }
    });
    return colisiona;
}

function buscaColor(tipo) {
    let esColorPedido = [];
    let dataPixel = ctx.getImageData(0, 0, 1920, 1080).data;
    for (var i = 0; i <= dataPixel.length; i += 4) {
        if (colores["zonaEnemigos"][0] == dataPixel[i] &&
            colores["zonaEnemigos"][1] == dataPixel[i + 1] &&
            colores["zonaEnemigos"][2] == dataPixel[i + 2]) {
            let x = (i / 4) % 1920;
            let y = Math.floor((i / 4) / 1920);
            esColorPedido.push({ "x": x, "y": y });
        }
    }
    return esColorPedido;
}