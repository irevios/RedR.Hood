"use strict";
let colores = {
    "terreno": [0, 0, 0], // Colisión terreno // rgb(0, 0, 0)
    "vacio": [255, 0, 0], // Si caes -> game over // rgb(255, 0, 0)
    "arma": [0, 0, 255], // Si tocas un arma, la recoges // rgb(0, 0, 255)
    "llave": [255, 255, 0], // Si tocas una llave, la recoges // rgb(255, 255, 0)
    "puerta": [21, 255, 0], // Si tocas una puerta se abre si tienes la llave // rgb(21, 255, 0)
    "enemigos": [210, 0, 210], // Los enemigos pueden aparecer por esta zona // rgb(210,0,210)
    "objetos": [0, 210, 255] // Si tocas un arma, la recoges // rgb(0, 210, 155)
}

function colision(x, y, puntos, tipo) {
    var c = document.getElementById("canvas").getContext('2d');
    let si = false;
    puntos.forEach(p => {
        let dataPixel = c.getImageData(p[0] - 5 + x, p[1] - 5 + y, 1, 1).data;
     //console.log(dataPixel);
        for (var i = 0; i <= dataPixel.length; i += 4) {
            if (colores[tipo][0] == dataPixel[i] &&
                colores[tipo][1] == dataPixel[i + 1] &&
                colores[tipo][2] == dataPixel[i + 2]) {
                si = true;
            }
        }
    })
    return si;
}

