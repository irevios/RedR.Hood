function dibujaNivel0(arma, llave, puerta) {
    // fondo
    ctx.save();
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
    ctx.lineTo(1276.8, 1017.4);
    ctx.lineTo(1919.9, 1017.4);
    ctx.lineTo(1919.9, 832.9);
    ctx.bezierCurveTo(1705.8, 792.8, 1492.5, 784.5, 1275.9, 784.1);
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
    ctx.restore();
}

function dibujaNivel1(arma, llave, puerta) {
    // fondo
    ctx.save();
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
    ctx.beginPath();
    ctx.moveTo(1773.6, 498.8);
    ctx.lineTo(1768.0, 914.3);
    ctx.lineTo(1652.8, 912.0);
    ctx.lineTo(1650.2, 501.1);
    ctx.lineTo(1773.6, 498.8);
    ctx.closePath();
    ctx.fillStyle = puerta ? "rgb(0, 255, 0)" : "rgb(10,130,80)";
    ctx.fill();

    // zona enemiga
    ctx.beginPath();
    ctx.moveTo(1098.9, 960.7);
    ctx.lineTo(1138.1, 980.5);
    ctx.lineTo(1609.0, 944.3);
    ctx.bezierCurveTo(1727.4, 692.3, 996.4, 872.8, 1098.9, 960.7);
    ctx.closePath();
    ctx.moveTo(0.0, 833.0);
    ctx.lineTo(0.0, 1017.3);
    ctx.lineTo(441.8, 1017.3);
    ctx.bezierCurveTo(443.2, 792.8, 178.1, 855.1, 0.0, 833.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(210, 0, 210)";
    ctx.fill();

    // llave
    ctx.beginPath();
    ctx.moveTo(533.2, 890.6);
    ctx.bezierCurveTo(543.8, 890.6, 552.4, 899.2, 552.4, 909.9);
    ctx.bezierCurveTo(552.4, 920.5, 543.8, 929.1, 533.2, 929.1);
    ctx.bezierCurveTo(522.6, 929.1, 514.0, 920.5, 514.0, 909.9);
    ctx.bezierCurveTo(514.0, 899.2, 522.6, 890.6, 533.2, 890.6);
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
    ctx.restore();
}

function dibujaNivel2(arma, llave, puerta) {
    ctx.save();
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
    ctx.lineTo(240.0, 117.1);
    ctx.lineTo(351.4, 414.3);
    ctx.lineTo(431.4, 448.6);
    ctx.bezierCurveTo(431.4, 448.6, 574.3, 445.7, 605.7, 445.7);
    ctx.bezierCurveTo(637.1, 445.7, 808.6, 582.9, 808.6, 602.9);
    ctx.bezierCurveTo(808.6, 622.9, 934.3, 622.9, 954.3, 631.4);
    ctx.bezierCurveTo(974.3, 640.0, 1054.3, 740.0, 1100.0, 748.6);
    ctx.bezierCurveTo(1145.7, 757.1, 1154.3, 702.9, 1154.3, 702.9);
    ctx.lineTo(1368.6, 585.7);
    ctx.bezierCurveTo(1585.0, 528.4, 1953.5, 928.1, 1895.7, 317.9);
    ctx.bezierCurveTo(1931.5, 149.7, 1904.3, 53.8, 1840.4, 0.0);
    ctx.lineTo(362.2, 0.0);
    ctx.closePath();
    ctx.fillStyle = "rgb(210,0,210)";
    ctx.fill();

    // Ballesta
    ctx.beginPath();
    ctx.moveTo(735.2, 533.1);
    ctx.bezierCurveTo(773.0, 533.1, 803.7, 563.7, 803.7, 601.6);
    ctx.bezierCurveTo(803.7, 639.4, 773.0, 670.1, 735.2, 670.1);
    ctx.bezierCurveTo(697.3, 670.1, 666.7, 639.4, 666.7, 601.6);
    ctx.bezierCurveTo(666.7, 563.7, 697.3, 533.1, 735.2, 533.1);
    ctx.closePath();
    ctx.fillStyle = arma ? "rgb(255,255,255)" : "rgb(0, 0, 255)";
    ctx.fill();

    // Terreno
    ctx.beginPath();
    ctx.moveTo(0.0, 372.5);
    ctx.lineTo(0.0, 1080.0);
    ctx.lineTo(456.1, 1080.0);
    ctx.lineTo(462.3, 602.5);
    ctx.bezierCurveTo(462.5, 578.1, 485.7, 555.9, 491.5, 512.2);
    ctx.bezierCurveTo(466.3, 527.7, 398.3, 488.6, 376.1, 482.9);
    ctx.bezierCurveTo(208.7, 440.0, 118.4, 463.3, 0.0, 372.5);
    ctx.lineTo(0.0, 372.5);
    ctx.closePath();
    ctx.moveTo(1639.3, 500.0);
    ctx.lineTo(1640.7, 519.3);
    ctx.bezierCurveTo(1688.9, 532.7, 1726.2, 538.7, 1777.9, 537.9);
    ctx.lineTo(1772.9, 528.6);
    ctx.bezierCurveTo(1722.5, 528.6, 1679.5, 534.0, 1639.3, 500.0);
    ctx.lineTo(1639.3, 500.0);
    ctx.closePath();
    ctx.moveTo(1576.7, 649.4);
    ctx.lineTo(1576.7, 649.4);
    ctx.bezierCurveTo(1563.6, 649.7, 1548.7, 653.8, 1529.0, 662.6);
    ctx.bezierCurveTo(1452.3, 687.0, 1348.6, 732.0, 1294.2, 794.9);
    ctx.bezierCurveTo(1288.7, 844.5, 1322.8, 804.4, 1344.7, 791.9);
    ctx.lineTo(1423.5, 804.0);
    ctx.lineTo(1500.2, 880.8);
    ctx.lineTo(1481.1, 1080.0);
    ctx.lineTo(1624.5, 1080.0);
    ctx.lineTo(1649.7, 684.8);
    ctx.bezierCurveTo(1620.1, 662.9, 1602.2, 650.0, 1579.3, 649.4);
    ctx.bezierCurveTo(1578.4, 649.4, 1577.6, 649.4, 1576.7, 649.4);
    ctx.lineTo(1576.7, 649.4);
    ctx.closePath();
    ctx.moveTo(750.2, 670.2);
    ctx.bezierCurveTo(710.7, 670.1, 624.9, 684.1, 582.0, 699.0);
    ctx.lineTo(707.5, 758.1);
    ctx.lineTo(760.8, 876.8);
    ctx.lineTo(767.5, 1080.0);
    ctx.lineTo(826.3, 1080.0);
    ctx.bezierCurveTo(822.5, 1036.2, 819.4, 1002.0, 819.4, 1002.0);
    ctx.lineTo(815.6, 753.3);
    ctx.bezierCurveTo(844.7, 757.9, 872.5, 746.6, 898.2, 707.1);
    ctx.bezierCurveTo(855.7, 677.9, 792.3, 670.4, 750.2, 670.2);
    ctx.lineTo(750.2, 670.2);
    ctx.closePath();
    ctx.moveTo(1125.8, 843.3);
    ctx.bezierCurveTo(1092.8, 843.7, 1066.4, 857.5, 1025.5, 880.8);
    ctx.lineTo(1027.5, 882.8);
    ctx.lineTo(1072.5, 1080.0);
    ctx.lineTo(1144.8, 1080.0);
    ctx.bezierCurveTo(1147.8, 1005.9, 1152.7, 894.9, 1152.7, 894.9);
    ctx.lineTo(1154.7, 886.6);
    ctx.bezierCurveTo(1160.1, 886.8, 1164.3, 886.9, 1166.9, 886.9);
    ctx.bezierCurveTo(1187.1, 886.9, 1193.1, 856.6, 1193.1, 856.6);
    ctx.bezierCurveTo(1167.4, 847.7, 1147.1, 843.5, 1129.0, 843.3);
    ctx.bezierCurveTo(1128.0, 843.3, 1126.9, 843.3, 1125.8, 843.3);
    ctx.lineTo(1125.8, 843.3);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();

    // Cuerda que baja la rama (llave)
    ctx.beginPath();
    ctx.moveTo(1436.4, 336.4);
    ctx.lineTo(1433.1, 571.7);
    ctx.lineTo(1457.3, 571.7);
    ctx.lineTo(1452.9, 475.7);
    ctx.lineTo(1441.4, 334.3);
    ctx.lineTo(1436.4, 336.4);
    ctx.closePath();
    ctx.fillStyle = llave ? "rgb(255,255,255)" : "rgb(255, 255, 0)";
    ctx.fill();

    // Rama que baja
    ctx.beginPath();
    ctx.moveTo(1548.2, 426.3);
    ctx.bezierCurveTo(1480.4, 455.4, 1423.1, 448.6, 1392.5, 445.7);
    ctx.lineTo(1327.7, 440.8);
    ctx.lineTo(1344.2, 437.9);
    ctx.bezierCurveTo(1417.3, 450.3, 1488.0, 454.7, 1547.7, 425.0);
    ctx.lineTo(1548.2, 426.3);
    ctx.closePath();
    ctx.fillStyle = llave ? "rgb(0, 0, 0)" : "rgb(255,255,255)";
    ctx.fill();
    // Puerta
    ctx.beginPath();
    ctx.moveTo(1140.0, 417.1);
    ctx.lineTo(1138.6, 342.1);
    ctx.bezierCurveTo(1199.5, 257.3, 1242.6, 171.8, 1330.7, 135.0);
    ctx.bezierCurveTo(1370.1, 198.9, 1375.9, 261.2, 1390.0, 329.3);
    ctx.lineTo(1395.0, 432.1);
    ctx.lineTo(1332.1, 435.7);
    ctx.lineTo(1247.1, 427.9);
    ctx.lineTo(1162.9, 432.9);
    ctx.lineTo(1140.0, 417.1);
    ctx.closePath();
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fill();
    ctx.restore();
}