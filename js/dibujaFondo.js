"use strict";
function dibujaFondo(interiorCanvas) {

    // capa1/Rectngulo
    interiorCanvas.save();
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1921.5, 1080.5);
    interiorCanvas.lineTo(0.5, 1080.5);
    interiorCanvas.lineTo(0.5, 0.5);
    interiorCanvas.lineTo(1921.5, 0.5);
    interiorCanvas.lineTo(1921.5, 1080.5);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(255, 255, 255)";
    interiorCanvas.fill();
    interiorCanvas.stroke();

    // capa1/Trazado compuesto
    interiorCanvas.beginPath();

    // capa1/Trazado compuesto/Trazado
    interiorCanvas.moveTo(0.5, 0.5);
    interiorCanvas.lineTo(0.5, 1080.5);
    interiorCanvas.lineTo(1921.5, 1080.5);
    interiorCanvas.lineTo(1921.5, 0.5);
    interiorCanvas.lineTo(0.5, 0.5);
    interiorCanvas.closePath();

    // capa1/Trazado compuesto/Trazado
    interiorCanvas.moveTo(1900.5, 679.5);
    interiorCanvas.lineTo(1788.5, 846.5);
    interiorCanvas.lineTo(1736.5, 812.5);
    interiorCanvas.lineTo(1691.5, 821.5);
    interiorCanvas.lineTo(1658.5, 873.5);
    interiorCanvas.lineTo(1598.5, 844.5);
    interiorCanvas.lineTo(1539.5, 856.5);
    interiorCanvas.lineTo(1539.5, 879.5);
    interiorCanvas.lineTo(1450.5, 890.5);
    interiorCanvas.lineTo(1422.5, 896.5);
    interiorCanvas.bezierCurveTo(1422.5, 896.5, 1327.5, 894.5, 1323.5, 892.5);
    interiorCanvas.bezierCurveTo(1319.5, 890.5, 1252.5, 874.5, 1252.5, 874.5);
    interiorCanvas.lineTo(1113.5, 820.5);
    interiorCanvas.lineTo(1037.5, 834.5);
    interiorCanvas.lineTo(1009.5, 868.5);
    interiorCanvas.lineTo(979.5, 835.5);
    interiorCanvas.lineTo(900.5, 838.5);
    interiorCanvas.lineTo(894.5, 844.5);
    interiorCanvas.lineTo(824.5, 864.5);
    interiorCanvas.lineTo(749.5, 781.5);
    interiorCanvas.lineTo(607.5, 810.5);
    interiorCanvas.lineTo(598.5, 848.5);
    interiorCanvas.lineTo(558.5, 868.5);
    interiorCanvas.lineTo(546.5, 836.5);
    interiorCanvas.lineTo(493.5, 846.5);
    interiorCanvas.lineTo(493.5, 870.5);
    interiorCanvas.lineTo(423.5, 870.5);
    interiorCanvas.lineTo(358.5, 799.5);
    interiorCanvas.lineTo(237.5, 777.5);
    interiorCanvas.lineTo(181.5, 804.5);
    interiorCanvas.lineTo(132.5, 847.5);
    interiorCanvas.lineTo(46.5, 836.5);
    interiorCanvas.lineTo(11.5, 808.5);
    interiorCanvas.lineTo(7.5, 92.5);
    interiorCanvas.lineTo(18.5, 42.5);
    interiorCanvas.lineTo(13.5, 11.5);
    interiorCanvas.lineTo(139.5, 44.5);
    interiorCanvas.bezierCurveTo(139.5, 44.5, 442.5, 61.5, 463.5, 60.5);
    interiorCanvas.bezierCurveTo(484.5, 59.5, 505.5, 109.5, 505.5, 109.5);
    interiorCanvas.lineTo(581.5, 149.5);
    interiorCanvas.lineTo(852.5, 27.5);
    interiorCanvas.bezierCurveTo(852.5, 27.5, 1045.5, 29.5, 1057.5, 29.5);
    interiorCanvas.bezierCurveTo(1069.5, 29.5, 1162.5, 83.5, 1162.5, 88.5);
    interiorCanvas.bezierCurveTo(1162.5, 93.5, 1087.5, 221.5, 1087.5, 221.5);
    interiorCanvas.bezierCurveTo(1087.5, 221.5, 1159.5, 340.5, 1165.5, 340.5);
    interiorCanvas.bezierCurveTo(1171.5, 340.5, 1250.5, 347.5, 1250.5, 347.5);
    interiorCanvas.lineTo(1297.5, 405.5);
    interiorCanvas.lineTo(1370.5, 413.5);
    interiorCanvas.lineTo(1452.5, 256.5);
    interiorCanvas.lineTo(1471.5, 242.5);
    interiorCanvas.lineTo(1440.5, 383.5);
    interiorCanvas.lineTo(1453.5, 422.5);
    interiorCanvas.lineTo(1691.5, 366.5);
    interiorCanvas.lineTo(1781.5, 230.5);
    interiorCanvas.lineTo(1772.5, 100.5);
    interiorCanvas.lineTo(1894.5, 12.5);
    interiorCanvas.lineTo(1900.5, 236.5);
    interiorCanvas.lineTo(1900.5, 679.5);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(0, 0, 0)";
    interiorCanvas.fill();
    interiorCanvas.stroke();
    interiorCanvas.restore();

}