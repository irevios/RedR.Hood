"use strict";

function dibujaFondo(interiorCanvas, nivel) {
    switch (nivel) {
        case "nivel1-0":
            dibujaNivel1_0(interiorCanvas);
            break;
        case "nivel1-1":
            dibujaNivel1_1(interiorCanvas, false);
            break;
    }
}

function dibujaNivel1_0(interiorCanvas) {
    // fondo
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

    // puerta
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1876.1, 249.8);
    interiorCanvas.lineTo(1920.5, 249.8);
    interiorCanvas.lineTo(1920.5, 910.3);
    interiorCanvas.lineTo(1876.1, 910.3);
    interiorCanvas.lineTo(1876.1, 249.8);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(20, 255, 0)";
    interiorCanvas.fill();

    // zona enemiga
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1276.4, 784.1);
    interiorCanvas.lineTo(1277.3, 1017.4);
    interiorCanvas.lineTo(1920.4, 1017.4);
    interiorCanvas.lineTo(1920.4, 832.9);
    interiorCanvas.bezierCurveTo(1706.3, 792.8, 1493.0, 784.5, 1276.4, 784.1);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(209, 0, 209)";
    interiorCanvas.fill();

    // terreno
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(0.5, 236.3);
    interiorCanvas.lineTo(0.5, 1080.0);
    interiorCanvas.lineTo(1920.5, 1080.0);
    interiorCanvas.lineTo(1920.5, 910.3);
    interiorCanvas.bezierCurveTo(1703.9, 876.0, 1483.7, 833.7, 1126.7, 831.7);
    interiorCanvas.bezierCurveTo(1069.8, 831.4, 1017.9, 837.2, 967.0, 844.1);
    interiorCanvas.bezierCurveTo(894.6, 857.5, 827.7, 862.4, 761.5, 853.9);
    interiorCanvas.bezierCurveTo(553.6, 825.2, 428.1, 702.0, 194.2, 664.2);
    interiorCanvas.lineTo(220.1, 233.3);
    interiorCanvas.lineTo(0.5, 200.3);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(0, 0, 0)";
    interiorCanvas.fill();
    interiorCanvas.lineJoin = "miter";
    interiorCanvas.miterLimit = 4.0;
    interiorCanvas.stroke();

    // arma
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1104.9, 682.5);
    interiorCanvas.bezierCurveTo(1133.5, 682.5, 1156.6, 705.6, 1156.6, 734.2);
    interiorCanvas.bezierCurveTo(1156.6, 762.8, 1133.5, 785.9, 1104.9, 785.9);
    interiorCanvas.bezierCurveTo(1076.3, 785.9, 1053.2, 762.8, 1053.2, 734.2);
    interiorCanvas.bezierCurveTo(1053.2, 705.6, 1076.3, 682.5, 1104.9, 682.5);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(0, 0, 255)";
    interiorCanvas.fill();
    interiorCanvas.restore();
}

function dibujaNivel1_1(interiorCanvas, puerta) {
    // fondo
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

    // vacio
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(728.5, 987.0);
    interiorCanvas.lineTo(1094.6, 987.0);
    interiorCanvas.bezierCurveTo(1095.3, 987.0, 1095.9, 987.6, 1095.9, 988.3);
    interiorCanvas.lineTo(1095.9, 1078.7);
    interiorCanvas.bezierCurveTo(1095.9, 1079.4, 1095.3, 1080.0, 1094.6, 1080.0);
    interiorCanvas.lineTo(728.5, 1080.0);
    interiorCanvas.bezierCurveTo(727.7, 1080.0, 727.1, 1079.4, 727.1, 1078.7);
    interiorCanvas.lineTo(727.1, 988.3);
    interiorCanvas.bezierCurveTo(727.1, 987.6, 727.7, 987.0, 728.5, 987.0);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(255, 0, 0)";
    interiorCanvas.fill();

    // puerta
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1773.6, 498.8);
    interiorCanvas.lineTo(1768.0, 914.3);
    interiorCanvas.lineTo(1652.8, 912.0);
    interiorCanvas.lineTo(1650.2, 501.1);
    interiorCanvas.lineTo(1773.6, 498.8);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = puerta ? "rgb(0, 255, 0)" : "rgb(0,0,0)";
    interiorCanvas.fill();

    // llave
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(533.7, 890.6);
    interiorCanvas.bezierCurveTo(544.3, 890.6, 552.9, 899.2, 552.9, 909.9);
    interiorCanvas.bezierCurveTo(552.9, 920.5, 544.3, 929.1, 533.7, 929.1);
    interiorCanvas.bezierCurveTo(523.1, 929.1, 514.5, 920.5, 514.5, 909.9);
    interiorCanvas.bezierCurveTo(514.5, 899.2, 523.1, 890.6, 533.7, 890.6);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(255, 255, 0)";
    interiorCanvas.fill();

    // zona enemiga
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1557.7, 794.2);
    interiorCanvas.lineTo(1198.1, 846.0);
    interiorCanvas.lineTo(1096.8, 906.2);
    interiorCanvas.lineTo(1089.4, 944.3);
    interiorCanvas.lineTo(1138.6, 980.5);
    interiorCanvas.lineTo(1609.5, 944.3);
    interiorCanvas.lineTo(1557.7, 794.2);
    interiorCanvas.closePath();
    interiorCanvas.moveTo(0.5, 833.0);
    interiorCanvas.lineTo(0.5, 1017.3);
    interiorCanvas.lineTo(442.3, 1017.3);
    interiorCanvas.lineTo(423.5, 885.6);
    interiorCanvas.lineTo(0.5, 833.0);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(209, 0, 209)";
    interiorCanvas.fill();

    // terreno
    interiorCanvas.beginPath();
    interiorCanvas.moveTo(1765.9, 485.6);
    interiorCanvas.bezierCurveTo(1765.6, 485.6, 1765.4, 485.8, 1765.4, 486.1);
    interiorCanvas.lineTo(1765.4, 846.1);
    interiorCanvas.bezierCurveTo(1765.4, 891.2, 1756.1, 904.4, 1711.2, 906.4);
    interiorCanvas.bezierCurveTo(1520.8, 914.7, 1291.1, 902.0, 1118.2, 944.9);
    interiorCanvas.bezierCurveTo(1100.6, 949.2, 1099.7, 935.7, 1099.6, 925.5);
    interiorCanvas.lineTo(1099.3, 903.9);
    interiorCanvas.bezierCurveTo(1099.0, 895.7, 1100.7, 884.3, 1093.6, 884.7);
    interiorCanvas.lineTo(1079.6, 884.7);
    interiorCanvas.bezierCurveTo(1074.4, 884.7, 1075.2, 889.1, 1075.9, 898.6);
    interiorCanvas.bezierCurveTo(1078.1, 930.0, 1075.3, 995.7, 1078.6, 1012.6);
    interiorCanvas.lineTo(1083.5, 1080.0);
    interiorCanvas.lineTo(1920.0, 1080.0);
    interiorCanvas.lineTo(1920.0, 485.6);
    interiorCanvas.lineTo(1765.9, 485.6);
    interiorCanvas.closePath();
    interiorCanvas.moveTo(701.6, 896.8);
    interiorCanvas.bezierCurveTo(700.6, 976.7, 513.8, 953.4, 425.3, 953.1);
    interiorCanvas.bezierCurveTo(264.4, 949.3, 132.9, 931.3, 0.0, 910.3);
    interiorCanvas.lineTo(0.0, 1080.0);
    interiorCanvas.lineTo(0.0, 1080.0);
    interiorCanvas.lineTo(726.6, 1080.0);
    interiorCanvas.lineTo(725.3, 962.2);
    interiorCanvas.lineTo(725.3, 896.1);
    interiorCanvas.bezierCurveTo(725.3, 895.5, 725.0, 895.4, 724.8, 895.4);
    interiorCanvas.lineTo(703.1, 895.4);
    interiorCanvas.bezierCurveTo(702.0, 895.5, 701.6, 895.5, 701.6, 896.8);
    interiorCanvas.closePath();
    interiorCanvas.moveTo(934.2, 934.1);
    interiorCanvas.bezierCurveTo(904.6, 933.1, 896.0, 959.4, 873.7, 967.5);
    interiorCanvas.bezierCurveTo(853.3, 974.8, 826.5, 976.0, 819.6, 986.2);
    interiorCanvas.lineTo(894.0, 1080.0);
    interiorCanvas.lineTo(996.9, 1080.0);
    interiorCanvas.lineTo(990.1, 961.2);
    interiorCanvas.bezierCurveTo(989.7, 954.4, 987.2, 953.8, 983.1, 951.5);
    interiorCanvas.bezierCurveTo(962.5, 939.5, 948.2, 934.0, 934.2, 934.1);
    interiorCanvas.lineTo(934.2, 934.1);
    interiorCanvas.closePath();
    interiorCanvas.fillStyle = "rgb(0, 0, 0)";
    interiorCanvas.fill();
    interiorCanvas.restore();
}