"use strict";

function negro(x, y, puntos) {
    var c = document.getElementById("canvas").getContext('2d');
    let si = false;
    puntos.forEach(p => {
        let dataPixel = c.getImageData(p[0] - 2 + x, p[1] - 2 + y, 1, 1).data;
        dataPixel.forEach(color => {
            if (color != 255) { si = true }
        });
    })
    return si;
}