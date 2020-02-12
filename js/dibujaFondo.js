"use strict";

function dibujaFondo(interiorCanvas, nivel) {
    switch (nivel) {
        case "nivel1-0":
        dibujaNivel1_0(interiorCanvas);
        break;
    }
}

function dibujaNivel1_0(interiorCanvas) {
      interiorCanvas.save();
      interiorCanvas.beginPath();
      interiorCanvas.moveTo(0.5, 0.0);
      interiorCanvas.lineTo(1920.5, 0.0);
      interiorCanvas.lineTo(1920.5, 1080.0);
      interiorCanvas.lineTo(0.5, 1080.0);
      interiorCanvas.lineTo(0.5, 0.0);
      interiorCanvas.closePath();
      interiorCanvas.fillStyle = "rgb(255, 255, 255)";
      interiorCanvas.fill();

      interiorCanvas.beginPath();
      interiorCanvas.moveTo(0.5, 236.3);
      interiorCanvas.lineTo(0.5, 1080.0);
      interiorCanvas.lineTo(1920.5, 1080.0);
      interiorCanvas.lineTo(1920.5, 955.8);
      interiorCanvas.bezierCurveTo(1719.9, 956.2, 1540.3, 947.8, 1387.3, 890.1);
      interiorCanvas.bezierCurveTo(1356.0, 876.1, 1326.3, 865.8, 1295.6, 858.0);
      interiorCanvas.bezierCurveTo(1270.5, 851.6, 1244.4, 845.9, 1216.6, 841.4);
      interiorCanvas.bezierCurveTo(1139.1, 824.3, 1065.5, 832.0, 990.1, 838.3);
      interiorCanvas.bezierCurveTo(946.2, 841.8, 903.8, 843.0, 860.0, 841.9);
      interiorCanvas.bezierCurveTo(608.9, 835.5, 388.2, 840.9, 205.2, 647.6);
      interiorCanvas.lineTo(205.3, 647.5);
      interiorCanvas.lineTo(199.8, 263.3);
      interiorCanvas.lineTo(165.1, 257.6);
      interiorCanvas.lineTo(0.5, 236.3);
      interiorCanvas.closePath();
      interiorCanvas.fillStyle = "rgb(0, 0, 0)";
      interiorCanvas.fill();
      interiorCanvas.lineWidth = 1.0;
      interiorCanvas.lineJoin = "miter";
      interiorCanvas.miterLimit = 15.1;
      interiorCanvas.stroke();
      interiorCanvas.restore();
      interiorCanvas.restore();
      interiorCanvas.restore();
}