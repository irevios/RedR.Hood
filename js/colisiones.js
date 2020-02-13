"use strict";
let colores = {
    "terreno": [0, 0, 0], // Colisión terreno
    "vacio": [255, 0, 0], // Si caes -> game over
    "arma": [0, 179, 255], // Si tocas un arma, la recoges
    "llave": [255, 238, 0], // Si tocas una llave, la recoges
    "puerta": [21, 255, 0], // Si tocas una puerta se abre si tienes la llave
}

function colision(x, y, puntos, tipo) {
    var c = document.getElementById("canvas").getContext('2d');
    let si = false;
    puntos.forEach(p => {
        let dataPixel = c.getImageData(p[0] - 5 + x, p[1] - 5 + y, 1, 1).data;
        // dataPixel.forEach(color => {
        //     if (color != 255) { si = true }
        // });
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