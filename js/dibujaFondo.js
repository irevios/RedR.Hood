function dibujaMovimiento(enemigos) {
    ctx.restore();
    nivel.dibujaFondo();
    enemigos.forEach((e) => {
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
    // fondo
    ctx.beginPath();
    ctx.moveTo(0.5, 0.0);
    ctx.lineTo(1920.5, 0.0);
    ctx.lineTo(1920.5, 1080.0);
    ctx.lineTo(0.5, 1080.0);
    ctx.lineTo(0.5, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // zona enemiga
    ctx.beginPath();
    ctx.moveTo(1275.9, 784.1);
    ctx.lineTo(1276.1, 835.1);
    ctx.bezierCurveTo(1518.5, 844.9, 1693.5, 873.7, 1859.3, 900.6);
    ctx.lineTo(1859.1, 822.3);
    ctx.bezierCurveTo(1665.4, 791.3, 1472.0, 784.5, 1275.9, 784.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(210, 0, 210)";
    ctx.fill();

    // puerta
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

    // terreno
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
    // fondo
    ctx.beginPath();
    ctx.moveTo(0.5, 0.0);
    ctx.lineTo(1920.5, 0.0);
    ctx.lineTo(1920.5, 1080.0);
    ctx.lineTo(0.5, 1080.0);
    ctx.lineTo(0.5, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // vacio
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

    // puerta
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
    // zona enemiga
    ctx.beginPath();
    ctx.moveTo(1472.6, 815.5);
    ctx.bezierCurveTo(1304.2, 814.7, 1058.0, 897.8, 1092.3, 953.2);
    ctx.bezierCurveTo(1098.4, 950.0, 1106.8, 947.2, 1118.2, 944.9);
    ctx.bezierCurveTo(1265.7, 914.5, 1451.6, 913.9, 1620.6, 909.4);
    ctx.bezierCurveTo(1632.6, 841.3, 1564.1, 816.0, 1472.6, 815.5);
    ctx.closePath();
    ctx.moveTo(0.0, 833.0);
    ctx.lineTo(0.0, 910.3);
    ctx.bezierCurveTo(132.9, 931.3, 264.4, 949.3, 425.3, 953.1);
    ctx.bezierCurveTo(427.6, 953.1, 430.2, 953.0, 433.0, 953.0);
    ctx.bezierCurveTo(385.8, 805.5, 158.4, 852.7, 0.0, 833.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(210, 0, 210)";
    ctx.fill();

    // llave
    ctx.beginPath();
    ctx.moveTo(533.2, 872.1);
    ctx.bezierCurveTo(554.1, 872.1, 571.0, 889.0, 571.0, 909.9);
    ctx.bezierCurveTo(571.0, 930.7, 554.1, 947.6, 533.2, 947.6);
    ctx.bezierCurveTo(512.4, 947.6, 495.5, 930.7, 495.5, 909.9);
    ctx.bezierCurveTo(495.5, 889.0, 512.4, 872.1, 533.2, 872.1);
    ctx.closePath();
    ctx.fillStyle = llave ? "rgb(255,255,255)" : "rgb(255, 255, 0)";
    ctx.fill();

    // terreno
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
    ctx.moveTo(297.1, 900.0);
    ctx.lineTo(297.1, 1080.0);
    ctx.lineTo(1920.0, 1080.0);
    ctx.lineTo(1920.0, 900.0);
    ctx.lineTo(297.1, 900.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fill();

    // Zona enemiga
    ctx.beginPath();
    ctx.moveTo(362.2, 0.0);
ctx.moveTo(501.3, 313.9);
      ctx.lineTo(581.3, 348.2);
      ctx.bezierCurveTo(581.3, 348.2, 574.3, 445.7, 605.7, 445.7);
      ctx.bezierCurveTo(637.1, 445.7, 808.6, 582.9, 808.6, 602.9);
      ctx.bezierCurveTo(808.6, 622.9, 934.3, 622.9, 954.3, 631.4);
      ctx.bezierCurveTo(1145.8, 790.2, 1146.8, 706.9, 1368.6, 585.7);
      ctx.bezierCurveTo(1585.0, 528.4, 1901.5, 920.1, 1843.7, 309.9);
      ctx.bezierCurveTo(1527.2, 63.6, 396.1, -79.9, 501.3, 313.9);
    ctx.closePath();
    ctx.fillStyle = "rgb(210,0,210)";
    ctx.fill();

    // Ballesta
    ctx.beginPath();
    ctx.moveTo(724.7, 541.1);
    ctx.bezierCurveTo(762.5, 541.1, 793.2, 571.8, 793.2, 609.6);
    ctx.bezierCurveTo(793.2, 647.5, 762.5, 678.1, 724.7, 678.1);
    ctx.bezierCurveTo(686.8, 678.1, 656.2, 647.5, 656.2, 609.6);
    ctx.bezierCurveTo(656.2, 571.8, 686.8, 541.1, 724.7, 541.1);
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
    ctx.moveTo(1765.5, 460.2);
    ctx.bezierCurveTo(1749.7, 458.5, 1752.3, 447.1, 1749.1, 569.0);
    ctx.bezierCurveTo(1749.1, 570.9, 1747.1, 572.1, 1745.3, 572.1);
    ctx.bezierCurveTo(1702.0, 571.8, 1627.8, 557.8, 1591.1, 540.0);
    ctx.bezierCurveTo(1587.7, 538.3, 1584.5, 577.9, 1586.3, 581.3);
    ctx.lineTo(1585.8, 639.9);
    ctx.bezierCurveTo(1585.8, 639.9, 1589.8, 644.0, 1589.4, 644.3);
    ctx.bezierCurveTo(1488.4, 722.9, 1580.6, 662.8, 1623.6, 690.3);
    ctx.bezierCurveTo(1636.4, 698.5, 1749.9, 605.6, 1750.2, 605.5);
    ctx.lineTo(1772.8, 572.3);
    ctx.bezierCurveTo(1774.7, 571.9, 1776.1, 570.1, 1775.9, 568.1);
    ctx.lineTo(1781.2, 462.1);
    ctx.bezierCurveTo(1781.0, 460.5, 1779.9, 459.2, 1778.4, 458.8);
    ctx.lineTo(1770.7, 456.3);
    ctx.bezierCurveTo(1768.0, 455.4, 1768.2, 460.5, 1765.5, 460.2);
    ctx.closePath();
    ctx.moveTo(1597.4, 630.6);
    ctx.bezierCurveTo(1582.5, 630.9, 1567.4, 634.7, 1557.5, 639.0);
    ctx.bezierCurveTo(1482.9, 665.0, 1336.4, 738.9, 1271.6, 793.6);
    ctx.lineTo(1289.7, 829.8);
    ctx.bezierCurveTo(1337.8, 827.0, 1350.2, 797.4, 1382.9, 802.9);
    ctx.bezierCurveTo(1415.5, 808.3, 1468.3, 848.9, 1500.2, 880.8);
    ctx.lineTo(1481.1, 1080.0);
    ctx.lineTo(1624.5, 1080.0);
    ctx.bezierCurveTo(1585.9, 993.7, 1635.3, 754.5, 1645.7, 686.4);
    ctx.bezierCurveTo(1652.1, 643.7, 1627.0, 631.1, 1600.4, 630.6);
    ctx.bezierCurveTo(1599.4, 630.6, 1598.4, 630.6, 1597.4, 630.6);
    ctx.lineTo(1597.4, 630.6);
    ctx.closePath();
    ctx.moveTo(748.8, 647.4);
    ctx.bezierCurveTo(709.2, 647.2, 648.9, 672.9, 609.6, 692.1);
    ctx.lineTo(733.2, 795.3);
    ctx.lineTo(745.1, 886.8);
    ctx.lineTo(767.5, 1080.0);
    ctx.lineTo(857.7, 1080.0);
    ctx.bezierCurveTo(853.9, 1036.2, 855.8, 1023.4, 855.8, 1023.4);
    ctx.lineTo(866.4, 771.2);
    ctx.bezierCurveTo(895.0, 765.2, 949.3, 734.1, 976.7, 715.4);
    ctx.bezierCurveTo(877.8, 659.1, 790.8, 647.5, 748.8, 647.4);
    ctx.closePath();
    ctx.moveTo(1120.3, 842.0);
    ctx.bezierCurveTo(1095.3, 841.9, 1068.7, 847.7, 1042.6, 866.0);
    ctx.lineTo(1012.5, 882.1);
    ctx.lineTo(1023.7, 918.3);
    ctx.lineTo(1023.7, 964.0);
    ctx.lineTo(1054.2, 1045.9);
    ctx.lineTo(1056.0, 1080.0);
    ctx.lineTo(1144.8, 1080.0);
    ctx.bezierCurveTo(1146.4, 1041.1, 1159.9, 987.2, 1161.5, 949.4);
    ctx.bezierCurveTo(1163.0, 915.0, 1178.4, 890.7, 1178.4, 890.7);
    ctx.bezierCurveTo(1189.7, 883.3, 1198.4, 883.9, 1218.9, 862.3);
    ctx.bezierCurveTo(1194.7, 856.9, 1159.3, 842.1, 1120.3, 842.0);
    ctx.lineTo(1120.3, 842.0);
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
    ctx.moveTo(1467.0, 452.6);
    ctx.bezierCurveTo(1422.7, 446.9, 1404.5, 440.8, 1341.5, 434.5);
    ctx.bezierCurveTo(1339.0, 434.2, 1338.5, 430.7, 1340.9, 429.8);
    ctx.lineTo(1340.9, 429.8);
    ctx.bezierCurveTo(1341.2, 429.7, 1341.5, 429.7, 1341.8, 429.7);
    ctx.bezierCurveTo(1402.1, 429.8, 1480.9, 448.1, 1494.2, 444.4);
    ctx.bezierCurveTo(1497.1, 443.6, 1500.0, 443.0, 1502.9, 443.0);
    ctx.lineTo(1508.4, 442.9);
    ctx.bezierCurveTo(1510.7, 442.9, 1511.7, 445.7, 1510.0, 447.2);
    ctx.bezierCurveTo(1502.2, 454.0, 1490.3, 456.2, 1479.9, 454.8);
    ctx.bezierCurveTo(1475.1, 454.1, 1470.7, 453.1, 1467.0, 452.6);
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