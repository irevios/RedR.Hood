"use strict";

function dibujaMovimiento(enemigos) {
    ctx.restore();
    nivel.dibujaFondo();
    enemigos.forEach((e) => {
        if (typeof e != "EnemigoVolador") {
            e.gravedad();
        }
        ctx.beginPath();
        e.contorno.forEach((p, i) => {
            i == 0 ? ctx.moveTo(p[0] + e.izquierda, p[1] + e.arriba) : ctx.lineTo(p[0] + e.izquierda, p[1] + e.arriba);
        });
        ctx.closePath();
        ctx.fillStyle = "rgb(" + e.color + ")";
        ctx.fill();
    })
    ctx.save();
}

function dibujaNivel0(arma, llave, puerta) {
    // Fondo
    ctx.beginPath();
    ctx.moveTo(0.5, 0.0);
    ctx.lineTo(1920.5, 0.0);
    ctx.lineTo(1920.5, 1080.0);
    ctx.lineTo(0.5, 1080.0);
    ctx.lineTo(0.5, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // Zona enemiga
    ctx.beginPath();
    ctx.moveTo(1275.9, 784.1);
    ctx.lineTo(1276.1, 835.1);
    ctx.bezierCurveTo(1518.5, 849.9, 1556.4, 858.7, 1725.7, 877.7);
    ctx.lineTo(1725.5, 799.5);
    ctx.bezierCurveTo(1531.8, 768.4, 1472.0, 784.5, 1275.9, 784.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(210, 0, 210)";
    ctx.fill();

    // Puerta
    if (puerta) {
        ctx.beginPath();
        ctx.moveTo(1920.0, 483.6);
        ctx.lineTo(1858.0, 485.8);
        ctx.lineTo(1858.9, 775.4);
        ctx.lineTo(1859.3, 908.0);
        ctx.lineTo(1920.0, 910.2);
        ctx.lineTo(1920.0, 483.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.moveTo(1920.0, 483.6);
        ctx.lineTo(1848.4, 485.8);
        ctx.lineTo(1849.5, 775.4);
        ctx.lineTo(1850.0, 908.0);
        ctx.lineTo(1920.0, 910.2);
        ctx.lineTo(1920.0, 483.6);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 127, 127)";
        ctx.fill();
    }

    // Terreno
    ctx.beginPath();
    ctx.moveTo(0.0, 236.3);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(1920.0, 1080.0);
    ctx.lineTo(1920.0, 910.3);
    ctx.bezierCurveTo(1703.4, 876.0, 1483.2, 833.7, 1126.2, 831.7);
    ctx.bezierCurveTo(1069.3, 831.4, 1017.4, 837.2, 966.5, 844.1);
    ctx.bezierCurveTo(894.1, 857.5, 827.2, 862.4, 761.0, 853.9);
    ctx.bezierCurveTo(553.1, 825.2, 427.6, 702.0, 193.7, 664.2);
    ctx.lineTo(238.9, 648.3);
    ctx.lineTo(191.1, 628.6);
    ctx.lineTo(236.3, 605.4);
    ctx.lineTo(187.3, 577.5);
    ctx.lineTo(186.1, 560.8);
    ctx.lineTo(234.6, 566.5);
    ctx.lineTo(184.1, 533.7);
    ctx.lineTo(229.4, 529.0);
    ctx.lineTo(181.9, 503.2);
    ctx.lineTo(163.6, 253.3);
    ctx.lineTo(0.0, 236.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();

    // Hacha
    ctx.beginPath();
    ctx.moveTo(1104.4, 682.5);
    ctx.bezierCurveTo(1133.0, 682.5, 1156.1, 705.6, 1156.1, 734.2);
    ctx.bezierCurveTo(1156.1, 762.8, 1133.0, 785.9, 1104.4, 785.9);
    ctx.bezierCurveTo(1075.8, 785.9, 1052.7, 762.8, 1052.7, 734.2);
    ctx.bezierCurveTo(1052.7, 705.6, 1075.8, 682.5, 1104.4, 682.5);
    ctx.closePath();
    ctx.fillStyle = arma ? "rgb(255,255,255)" : "rgb(0, 0, 255)";
    ctx.fill();
}

function dibujaNivel1(arma, llave, puerta) {
    // Fondo
    ctx.beginPath();
    ctx.moveTo(0.5, 0.0);
    ctx.lineTo(1920.5, 0.0);
    ctx.lineTo(1920.5, 1080.0);
    ctx.lineTo(0.5, 1080.0);
    ctx.lineTo(0.5, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // Vacio
    ctx.beginPath();
    ctx.moveTo(681.0, 987.0);
    ctx.lineTo(1094.1, 987.0);
    ctx.bezierCurveTo(1094.8, 987.0, 1095.4, 987.6, 1095.4, 988.3);
    ctx.lineTo(1095.4, 1078.7);
    ctx.bezierCurveTo(1095.4, 1079.4, 1094.8, 1080.0, 1094.1, 1080.0);
    ctx.lineTo(681.0, 1080.0);
    ctx.bezierCurveTo(680.3, 1080.0, 679.7, 1079.4, 679.7, 1078.7);
    ctx.lineTo(679.7, 988.3);
    ctx.bezierCurveTo(679.7, 987.6, 680.3, 987.0, 681.0, 987.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fill();

    // Puerta
    if (puerta) {
        ctx.beginPath();
        ctx.moveTo(1773.6, 498.8);
        ctx.lineTo(1798.0, 914.3);
        ctx.lineTo(1682.8, 912.0);
        ctx.lineTo(1680.2, 501.1);
        ctx.lineTo(1803.6, 498.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(0, 255, 0)";
        ctx.fill();
    } else {
        ctx.beginPath();
        ctx.moveTo(1773.6, 498.8);
        ctx.lineTo(1768.0, 914.3);
        ctx.lineTo(1652.8, 912.0);
        ctx.lineTo(1650.2, 501.1);
        ctx.lineTo(1773.6, 498.8);
        ctx.closePath();
        ctx.fillStyle = "rgb(10,130,80)";
        ctx.fill();
    }
    // Zona enemiga
    ctx.beginPath();
    ctx.moveTo(1472.6, 815.5);
    ctx.bezierCurveTo(1304.2, 814.7, 1058.0, 897.8, 1092.3, 953.2);
    ctx.bezierCurveTo(1098.4, 950.0, 1106.8, 947.2, 1118.2, 944.9);
    ctx.bezierCurveTo(1265.7, 914.5, 1451.6, 913.9, 1620.6, 909.4);
    ctx.bezierCurveTo(1632.6, 841.3, 1564.1, 816.0, 1472.6, 815.5);
    ctx.closePath();
    
    ctx.fillStyle = "rgb(210, 0, 210)";
    ctx.fill();

    // Llave
    ctx.beginPath();
    ctx.moveTo(533.2, 872.1);
    ctx.bezierCurveTo(554.1, 872.1, 571.0, 889.0, 571.0, 909.9);
    ctx.bezierCurveTo(571.0, 930.7, 554.1, 947.6, 533.2, 947.6);
    ctx.bezierCurveTo(512.4, 947.6, 495.5, 930.7, 495.5, 909.9);
    ctx.bezierCurveTo(495.5, 889.0, 512.4, 872.1, 533.2, 872.1);
    ctx.closePath();
    ctx.fillStyle = llave ? "rgb(255,255,255)" : "rgb(255, 255, 0)";
    ctx.fill();

    // Terreno
    ctx.beginPath();
    ctx.moveTo(1765.9, 485.6);
    ctx.bezierCurveTo(1765.6, 485.6, 1765.4, 485.8, 1765.4, 486.1);
    ctx.lineTo(1765.4, 846.1);
    ctx.bezierCurveTo(1765.4, 891.2, 1756.1, 904.4, 1711.2, 906.4);
    ctx.bezierCurveTo(1520.8, 914.7, 1292.6, 909.0, 1118.2, 944.9);
    ctx.bezierCurveTo(1063.7, 956.1, 1077.6, 976.4, 1078.6, 1012.6);
    ctx.lineTo(1083.5, 1080.0);
    ctx.lineTo(1920.0, 1080.0);
    ctx.lineTo(1920.0, 485.6);
    ctx.lineTo(1765.9, 485.6);
    ctx.closePath();
    ctx.moveTo(425.3, 953.1);
    ctx.bezierCurveTo(264.4, 949.3, 132.9, 931.3, 0.0, 910.3);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(726.6, 1080.0);
    ctx.lineTo(725.3, 962.2);
    ctx.bezierCurveTo(686.9, 938.4, 483.6, 953.4, 425.3, 953.1);
    ctx.closePath();
    ctx.moveTo(934.2, 934.1);
    ctx.bezierCurveTo(904.6, 933.1, 896.0, 959.4, 873.7, 967.5);
    ctx.bezierCurveTo(853.3, 974.8, 826.5, 976.0, 819.6, 986.2);
    ctx.lineTo(894.0, 1080.0);
    ctx.lineTo(996.9, 1080.0);
    ctx.lineTo(990.1, 961.2);
    ctx.bezierCurveTo(989.7, 954.4, 987.2, 953.8, 983.1, 951.5);
    ctx.bezierCurveTo(962.5, 939.5, 948.2, 934.0, 934.2, 934.1);
    ctx.lineTo(934.2, 934.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();
}

function dibujaNivel2(arma, llave, puerta) {
    ctx.beginPath();
    ctx.moveTo(0.0, 0.0);
    ctx.lineTo(1920.0, 0.0);
    ctx.lineTo(1920.0, 1080.0);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(0.0, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // Vacío
    ctx.beginPath();
    ctx.moveTo(315.1, 720.0);
    ctx.lineTo(297.1, 1080.0);
    ctx.lineTo(1920.0, 1080.0);
    ctx.lineTo(1920.0, 928.9);
    ctx.lineTo(1913.4, 709.1);
    ctx.lineTo(1311.7, 883.8);
    ctx.bezierCurveTo(1111.6, 907.7, 901.1, 925.5, 654.1, 881.2);
    ctx.bezierCurveTo(545.6, 861.7, 440.0, 768.2, 315.1, 720.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fill();

    // Zona enemiga
    ctx.beginPath();
    ctx.moveTo(508.0, 24.0);
    ctx.lineTo(508.0, 363.4);
    ctx.bezierCurveTo(523.9, 369.5, 529.0, 386.3, 528.9, 422.7);
    ctx.bezierCurveTo(525.7, 449.5, 517.8, 483.5, 508.0, 519.4);
    ctx.lineTo(508.0, 519.6);
    ctx.lineTo(1411.9, 519.6);
    ctx.lineTo(1412.1, 461.5);
    ctx.lineTo(1429.9, 461.5);
    ctx.lineTo(1431.6, 502.5);
    ctx.lineTo(1432.5, 519.6);
    ctx.lineTo(1694.3, 519.6);
    ctx.lineTo(1694.3, 24.0);
    ctx.lineTo(508.0, 24.0);
    ctx.closePath();
    ctx.moveTo(1330.7, 135.0);
    ctx.bezierCurveTo(1370.1, 198.9, 1375.9, 261.2, 1390.0, 329.3);
    ctx.lineTo(1388.6, 411.4);
    ctx.lineTo(1325.7, 415.0);
    ctx.lineTo(1240.7, 407.1);
    ctx.lineTo(1156.4, 412.1);
    ctx.lineTo(1133.6, 396.4);
    ctx.lineTo(1138.6, 342.1);
    ctx.bezierCurveTo(1199.5, 257.3, 1242.6, 171.8, 1330.7, 135.0);
    ctx.closePath();
    ctx.moveTo(1424.1, 324.6);
    ctx.lineTo(1428.3, 424.8);
    ctx.lineTo(1412.3, 424.8);
    ctx.lineTo(1412.7, 326.6);
    ctx.lineTo(1424.1, 324.6);
    ctx.closePath();
    ctx.moveTo(1341.3, 429.7);
    ctx.bezierCurveTo(1406.5, 429.8, 1458.0, 452.6, 1514.6, 447.0);
    ctx.lineTo(1511.2, 453.0);
    ctx.bezierCurveTo(1451.2, 466.0, 1407.7, 445.5, 1331.4, 433.5);
    ctx.lineTo(1341.3, 429.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(210,0,210)";
    ctx.fill();

    // Ballesta
    ctx.beginPath();
    ctx.moveTo(721.8, 532.7);
    ctx.bezierCurveTo(764.4, 532.7, 798.8, 567.1, 798.8, 609.6);
    ctx.bezierCurveTo(798.8, 652.2, 764.4, 686.6, 721.8, 686.6);
    ctx.bezierCurveTo(679.3, 686.6, 644.8, 652.2, 644.8, 609.6);
    ctx.bezierCurveTo(644.8, 567.1, 679.3, 532.7, 721.8, 532.7);
    ctx.closePath();
    ctx.fillStyle = arma ? "rgb(255,255,255)" : "rgb(0, 0, 255)";
    ctx.fill();

    // Terreno
    ctx.beginPath();
    ctx.moveTo(1.0, 202.2);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(456.1, 1080.0);
    ctx.lineTo(442.1, 881.4);
    ctx.lineTo(453.9, 697.1);
    ctx.bezierCurveTo(475.8, 624.6, 520.2, 496.2, 528.9, 422.7);
    ctx.bezierCurveTo(529.1, 370.1, 518.4, 358.6, 480.0, 360.6);
    ctx.bezierCurveTo(432.3, 363.4, 318.3, 414.5, 256.8, 375.3);
    ctx.bezierCurveTo(184.2, 328.8, 116.4, 243.3, 1.0, 202.2);
    ctx.closePath();
    ctx.moveTo(1747.3, 282.3);
    ctx.lineTo(1739.5, 304.5);
    ctx.lineTo(1747.4, 310.1);
    ctx.lineTo(1747.4, 315.6);
    ctx.lineTo(1739.5, 336.0);
    ctx.lineTo(1747.5, 347.2);
    ctx.lineTo(1747.6, 355.5);
    ctx.lineTo(1739.5, 364.5);
    ctx.lineTo(1747.6, 363.5);
    ctx.lineTo(1747.6, 368.9);
    ctx.lineTo(1739.5, 389.5);
    ctx.lineTo(1747.7, 395.5);
    ctx.lineTo(1747.8, 400.9);
    ctx.lineTo(1739.5, 409.0);
    ctx.lineTo(1747.8, 414.9);
    ctx.lineTo(1747.8, 422.0);
    ctx.lineTo(1739.5, 425.5);
    ctx.lineTo(1747.9, 436.3);
    ctx.lineTo(1747.9, 442.3);
    ctx.lineTo(1739.5, 445.5);
    ctx.lineTo(1748.0, 454.3);
    ctx.lineTo(1748.0, 459.0);
    ctx.lineTo(1739.5, 470.5);
    ctx.lineTo(1748.1, 479.9);
    ctx.lineTo(1748.1, 491.2);
    ctx.lineTo(1739.5, 494.5);
    ctx.lineTo(1748.2, 503.9);
    ctx.lineTo(1748.2, 509.6);
    ctx.lineTo(1739.5, 509.5);
    ctx.lineTo(1748.3, 522.0);
    ctx.lineTo(1748.3, 526.7);
    ctx.lineTo(1739.5, 527.5);
    ctx.lineTo(1748.3, 543.2);
    ctx.lineTo(1748.4, 547.9);
    ctx.lineTo(1739.5, 546.0);
    ctx.bezierCurveTo(1739.0, 548.0, 1748.5, 572.1, 1748.5, 572.1);
    ctx.bezierCurveTo(1703.8, 571.9, 1659.3, 567.9, 1621.0, 549.4);
    ctx.bezierCurveTo(1615.9, 547.0, 1610.1, 550.7, 1610.1, 556.3);
    ctx.lineTo(1610.1, 556.3);
    ctx.bezierCurveTo(1610.1, 558.7, 1611.2, 560.9, 1613.2, 562.4);
    ctx.bezierCurveTo(1626.5, 572.3, 1645.8, 585.0, 1667.9, 595.3);
    ctx.bezierCurveTo(1685.8, 603.7, 1707.8, 611.7, 1728.7, 614.2);
    ctx.bezierCurveTo(1757.7, 617.7, 1785.3, 600.5, 1795.5, 573.1);
    ctx.lineTo(1795.5, 573.1);
    ctx.lineTo(1782.0, 288.8);
    ctx.lineTo(1747.3, 282.3);
    ctx.closePath();
    ctx.moveTo(1601.6, 630.8);
    ctx.bezierCurveTo(1583.0, 630.7, 1565.6, 639.0, 1545.6, 645.5);
    ctx.bezierCurveTo(1447.7, 677.6, 1348.1, 736.4, 1266.0, 784.4);
    ctx.lineTo(1289.7, 829.8);
    ctx.bezierCurveTo(1337.8, 827.0, 1350.2, 797.4, 1382.9, 802.9);
    ctx.bezierCurveTo(1415.5, 808.3, 1468.3, 848.9, 1500.2, 880.8);
    ctx.lineTo(1481.1, 1080.0);
    ctx.lineTo(1624.5, 1080.0);
    ctx.bezierCurveTo(1585.9, 993.7, 1635.3, 754.5, 1645.7, 686.4);
    ctx.bezierCurveTo(1649.7, 659.7, 1641.4, 644.8, 1628.1, 637.2);
    ctx.bezierCurveTo(1618.8, 632.7, 1610.1, 630.9, 1601.6, 630.8);
    ctx.closePath();
    ctx.moveTo(790.4, 659.0);
    ctx.bezierCurveTo(726.7, 659.2, 663.6, 667.6, 606.6, 683.1);
    ctx.lineTo(733.2, 795.3);
    ctx.lineTo(745.1, 886.8);
    ctx.lineTo(767.5, 1080.0);
    ctx.lineTo(857.7, 1080.0);
    ctx.bezierCurveTo(853.9, 1036.2, 855.8, 1023.4, 855.8, 1023.4);
    ctx.lineTo(866.4, 771.2);
    ctx.bezierCurveTo(895.0, 765.2, 950.0, 701.9, 977.4, 683.2);
    ctx.bezierCurveTo(918.2, 666.5, 854.0, 658.7, 790.4, 659.0);
    ctx.lineTo(790.4, 659.0);
    ctx.closePath();
    ctx.moveTo(1124.1, 850.5);
    ctx.bezierCurveTo(1085.1, 850.5, 1048.0, 857.1, 1012.5, 871.5);
    ctx.lineTo(1023.7, 918.3);
    ctx.lineTo(1023.7, 964.0);
    ctx.lineTo(1054.2, 1045.9);
    ctx.lineTo(1056.0, 1080.0);
    ctx.lineTo(1144.8, 1080.0);
    ctx.bezierCurveTo(1146.4, 1041.1, 1159.9, 987.2, 1161.5, 949.4);
    ctx.bezierCurveTo(1163.0, 915.0, 1178.4, 890.7, 1178.4, 890.7);
    ctx.bezierCurveTo(1189.7, 883.3, 1198.4, 883.9, 1218.9, 862.3);
    ctx.bezierCurveTo(1185.9, 854.6, 1154.4, 850.6, 1124.1, 850.5);
    ctx.lineTo(1124.1, 850.5);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();

    // Cuerda que baja la rama (llave)
    ctx.beginPath();
    ctx.moveTo(1412.7, 326.6);
    ctx.lineTo(1411.4, 644.9);
    ctx.lineTo(1439.6, 663.2);
    ctx.lineTo(1431.6, 502.5);
    ctx.lineTo(1424.1, 324.6);
    ctx.lineTo(1412.7, 326.6);
    ctx.closePath();
    ctx.fillStyle = llave ? "rgb(255,255,255)" : "rgb(255, 255, 0)";
    ctx.fill();

    // Rama que baja
    ctx.beginPath();
    ctx.moveTo(1515.5, 457.4);
    ctx.bezierCurveTo(1525.2, 518.7, 1310.9, 488.3, 1331.5, 433.5);
    ctx.lineTo(1341.3, 429.7);
    ctx.bezierCurveTo(1406.5, 429.8, 1458.0, 452.6, 1514.6, 447.0);
    ctx.lineTo(1514.6, 447.2);
    ctx.bezierCurveTo(1514.6, 450.6, 1514.9, 454.0, 1515.5, 457.4);
    ctx.closePath();
    ctx.fillStyle = llave ? "rgb(0, 0, 0)" : "rgb(255,255,255)";
    ctx.fill();

    // Puerta
    ctx.beginPath();
    ctx.moveTo(1133.6, 396.4);
    ctx.lineTo(1138.6, 342.1);
    ctx.bezierCurveTo(1199.5, 257.3, 1242.6, 171.8, 1330.7, 135.0);
    ctx.bezierCurveTo(1370.1, 198.9, 1375.9, 261.2, 1390.0, 329.3);
    ctx.lineTo(1388.6, 411.4);
    ctx.lineTo(1325.7, 415.0);
    ctx.lineTo(1240.7, 407.1);
    ctx.lineTo(1156.4, 412.1);
    ctx.lineTo(1133.6, 396.4);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fill();
}

function dibujaNivel3(arma, llave, puerta, objeto) {
    ctx.beginPath();
    ctx.moveTo(0.0, 0.0);
    ctx.lineTo(1920.0, 0.0);
    ctx.lineTo(1920.0, 1080.0);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(0.0, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // Manzana
    ctx.beginPath();
    ctx.moveTo(109.7, 589.8);
    ctx.bezierCurveTo(146.8, 589.8, 176.8, 618.4, 176.8, 653.7);
    ctx.bezierCurveTo(176.8, 688.9, 146.8, 717.5, 109.7, 717.5);
    ctx.bezierCurveTo(72.6, 717.5, 42.5, 688.9, 42.5, 653.7);
    ctx.bezierCurveTo(42.5, 618.4, 72.6, 589.8, 109.7, 589.8);
    ctx.closePath();
    ctx.fillStyle = objeto ? "rgb(255, 255, 255)" : "rgb(0, 210, 155)";
    ctx.fill();

    // Pulsera
    ctx.beginPath();
    ctx.moveTo(341.4, 652.6);
    ctx.bezierCurveTo(374.7, 652.6, 401.7, 678.3, 401.7, 710.1);
    ctx.bezierCurveTo(401.7, 741.8, 374.7, 767.6, 341.4, 767.6);
    ctx.bezierCurveTo(308.2, 767.6, 281.2, 741.8, 281.2, 710.1);
    ctx.bezierCurveTo(281.2, 678.3, 308.2, 652.6, 341.4, 652.6);
    ctx.closePath();
    ctx.fillStyle = arma ? "rgb(255,255,255)" : "rgb(0, 0, 255)";
    ctx.fill();

    // Terreno
    ctx.beginPath();
    ctx.moveTo(3.4, 0.0);
    ctx.bezierCurveTo(1.5, 0.0, 0.0, 1.5, 0.0, 3.4);
    ctx.lineTo(0.0, 161.1);
    ctx.lineTo(411.4, 302.5);
    ctx.lineTo(562.8, 531.0);
    ctx.lineTo(854.3, 551.0);
    ctx.bezierCurveTo(1127.0, 131.6, 1315.0, 86.9, 1820.0, 73.9);
    ctx.bezierCurveTo(1927.2, 93.1, 1943.7, 456.3, 1872.0, 745.9);
    ctx.lineTo(0.0, 742.0);
    ctx.lineTo(0.0, 1076.6);
    ctx.bezierCurveTo(0.0, 1078.5, 1.5, 1080.0, 3.4, 1080.0);
    ctx.lineTo(1916.6, 1080.0);
    ctx.bezierCurveTo(1918.5, 1080.0, 1920.0, 1078.5, 1920.0, 1076.6);
    ctx.lineTo(1920.0, 3.4);
    ctx.bezierCurveTo(1920.0, 1.5, 1918.5, 0.0, 1916.6, 0.0);
    ctx.lineTo(3.4, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();
}