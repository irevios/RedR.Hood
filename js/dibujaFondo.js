"use strict";
function dibujaFondo(interiorCanvas) {

     // capa1/Grupo
      interiorCanvas.save();

      // capa1/Grupo/Trazado
      interiorCanvas.save();
      interiorCanvas.beginPath();
      interiorCanvas.moveTo(1.2, 0.4);
      interiorCanvas.lineTo(1919.6, 0.4);
      interiorCanvas.bezierCurveTo(1920.0, 0.4, 1920.4, 0.8, 1920.4, 1.2);
      interiorCanvas.lineTo(1920.4, 1079.6);
      interiorCanvas.bezierCurveTo(1920.4, 1080.0, 1920.0, 1080.4, 1919.6, 1080.4);
      interiorCanvas.lineTo(1.2, 1080.4);
      interiorCanvas.bezierCurveTo(0.8, 1080.4, 0.4, 1080.0, 0.4, 1079.6);
      interiorCanvas.lineTo(0.4, 1.2);
      interiorCanvas.bezierCurveTo(0.4, 0.8, 0.8, 0.4, 1.2, 0.4);
      interiorCanvas.lineTo(1.2, 0.4);
      interiorCanvas.closePath();
      interiorCanvas.fillStyle = "rgb(255, 255, 255)";
      interiorCanvas.fill();

      // capa1/Grupo/Trazado compuesto
      interiorCanvas.beginPath();

      // capa1/Grupo/Trazado compuesto/Trazado
      interiorCanvas.moveTo(758.0, 0.4);
      interiorCanvas.lineTo(774.1, 204.6);
      interiorCanvas.lineTo(849.2, 163.2);
      interiorCanvas.lineTo(851.7, 15.7);
      interiorCanvas.lineTo(882.4, 0.4);
      interiorCanvas.lineTo(758.0, 0.4);
      interiorCanvas.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      interiorCanvas.moveTo(1203.8, 0.4);
      interiorCanvas.lineTo(1278.7, 15.7);
      interiorCanvas.lineTo(1327.8, 403.8);
      interiorCanvas.lineTo(1374.4, 582.4);
      interiorCanvas.lineTo(1472.7, 522.8);
      interiorCanvas.bezierCurveTo(1472.7, 522.8, 1754.7, 486.6, 1770.2, 484.0);
      interiorCanvas.bezierCurveTo(1775.1, 483.2, 1838.6, 478.5, 1920.4, 472.6);
      interiorCanvas.lineTo(1920.4, 1.2);
      interiorCanvas.bezierCurveTo(1920.4, 0.8, 1920.0, 0.4, 1919.6, 0.4);
      interiorCanvas.lineTo(1203.8, 0.4);
      interiorCanvas.closePath();

      // capa1/Grupo/Trazado compuesto/Trazado
      interiorCanvas.moveTo(0.4, 779.4);
      interiorCanvas.lineTo(0.4, 886.8);
      interiorCanvas.bezierCurveTo(2.9, 1080.9, -0.1, 1080.9, 67.8, 1080.4);
      interiorCanvas.lineTo(1919.6, 1080.4);
      interiorCanvas.bezierCurveTo(1920.0, 1080.4, 1920.4, 1080.0, 1920.4, 1079.6);
      interiorCanvas.lineTo(1920.4, 839.6);
      interiorCanvas.bezierCurveTo(1801.7, 866.0, 1659.8, 893.4, 1563.2, 898.0);
      interiorCanvas.bezierCurveTo(1374.7, 905.5, 1204.9, 823.6, 1007.0, 792.0);
      interiorCanvas.bezierCurveTo(910.0, 785.6, 814.0, 816.1, 717.2, 825.6);
      interiorCanvas.bezierCurveTo(488.6, 848.8, 239.5, 872.8, 0.4, 779.4);
      interiorCanvas.closePath();
      interiorCanvas.fillStyle = "rgb(0, 0, 0)";
      interiorCanvas.fill();
      interiorCanvas.lineWidth = 0.7;
      interiorCanvas.lineJoin = "miter";
      interiorCanvas.miterLimit = 4.0;
      interiorCanvas.stroke();
      interiorCanvas.restore();
      interiorCanvas.restore();
    

}