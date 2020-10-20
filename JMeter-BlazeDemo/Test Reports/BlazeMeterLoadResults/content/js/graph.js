/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 244.0, "minX": 0.0, "maxY": 12043.0, "series": [{"data": [[0.0, 244.0], [0.1, 249.0], [0.2, 252.0], [0.3, 254.0], [0.4, 254.0], [0.5, 255.0], [0.6, 256.0], [0.7, 257.0], [0.8, 258.0], [0.9, 259.0], [1.0, 260.0], [1.1, 260.0], [1.2, 261.0], [1.3, 261.0], [1.4, 262.0], [1.5, 262.0], [1.6, 262.0], [1.7, 263.0], [1.8, 263.0], [1.9, 264.0], [2.0, 264.0], [2.1, 265.0], [2.2, 265.0], [2.3, 265.0], [2.4, 266.0], [2.5, 266.0], [2.6, 267.0], [2.7, 267.0], [2.8, 267.0], [2.9, 268.0], [3.0, 268.0], [3.1, 269.0], [3.2, 269.0], [3.3, 269.0], [3.4, 269.0], [3.5, 270.0], [3.6, 270.0], [3.7, 271.0], [3.8, 271.0], [3.9, 271.0], [4.0, 271.0], [4.1, 272.0], [4.2, 272.0], [4.3, 272.0], [4.4, 273.0], [4.5, 273.0], [4.6, 273.0], [4.7, 273.0], [4.8, 274.0], [4.9, 274.0], [5.0, 274.0], [5.1, 274.0], [5.2, 275.0], [5.3, 275.0], [5.4, 276.0], [5.5, 276.0], [5.6, 276.0], [5.7, 276.0], [5.8, 276.0], [5.9, 277.0], [6.0, 277.0], [6.1, 277.0], [6.2, 277.0], [6.3, 277.0], [6.4, 278.0], [6.5, 278.0], [6.6, 278.0], [6.7, 278.0], [6.8, 279.0], [6.9, 279.0], [7.0, 279.0], [7.1, 279.0], [7.2, 280.0], [7.3, 280.0], [7.4, 280.0], [7.5, 281.0], [7.6, 281.0], [7.7, 281.0], [7.8, 281.0], [7.9, 282.0], [8.0, 282.0], [8.1, 282.0], [8.2, 282.0], [8.3, 283.0], [8.4, 283.0], [8.5, 283.0], [8.6, 283.0], [8.7, 284.0], [8.8, 284.0], [8.9, 284.0], [9.0, 284.0], [9.1, 285.0], [9.2, 285.0], [9.3, 285.0], [9.4, 286.0], [9.5, 286.0], [9.6, 286.0], [9.7, 286.0], [9.8, 287.0], [9.9, 287.0], [10.0, 287.0], [10.1, 287.0], [10.2, 287.0], [10.3, 288.0], [10.4, 288.0], [10.5, 288.0], [10.6, 288.0], [10.7, 289.0], [10.8, 289.0], [10.9, 289.0], [11.0, 289.0], [11.1, 289.0], [11.2, 290.0], [11.3, 290.0], [11.4, 290.0], [11.5, 290.0], [11.6, 291.0], [11.7, 291.0], [11.8, 291.0], [11.9, 291.0], [12.0, 292.0], [12.1, 292.0], [12.2, 293.0], [12.3, 293.0], [12.4, 293.0], [12.5, 293.0], [12.6, 294.0], [12.7, 294.0], [12.8, 294.0], [12.9, 294.0], [13.0, 295.0], [13.1, 295.0], [13.2, 295.0], [13.3, 295.0], [13.4, 296.0], [13.5, 296.0], [13.6, 296.0], [13.7, 296.0], [13.8, 297.0], [13.9, 297.0], [14.0, 297.0], [14.1, 297.0], [14.2, 297.0], [14.3, 297.0], [14.4, 298.0], [14.5, 298.0], [14.6, 298.0], [14.7, 298.0], [14.8, 299.0], [14.9, 299.0], [15.0, 299.0], [15.1, 299.0], [15.2, 299.0], [15.3, 299.0], [15.4, 300.0], [15.5, 300.0], [15.6, 300.0], [15.7, 300.0], [15.8, 301.0], [15.9, 301.0], [16.0, 301.0], [16.1, 301.0], [16.2, 302.0], [16.3, 302.0], [16.4, 302.0], [16.5, 302.0], [16.6, 302.0], [16.7, 303.0], [16.8, 303.0], [16.9, 303.0], [17.0, 303.0], [17.1, 303.0], [17.2, 303.0], [17.3, 304.0], [17.4, 304.0], [17.5, 304.0], [17.6, 304.0], [17.7, 305.0], [17.8, 305.0], [17.9, 305.0], [18.0, 305.0], [18.1, 305.0], [18.2, 305.0], [18.3, 306.0], [18.4, 306.0], [18.5, 306.0], [18.6, 306.0], [18.7, 307.0], [18.8, 307.0], [18.9, 307.0], [19.0, 307.0], [19.1, 308.0], [19.2, 308.0], [19.3, 308.0], [19.4, 308.0], [19.5, 309.0], [19.6, 309.0], [19.7, 309.0], [19.8, 309.0], [19.9, 310.0], [20.0, 310.0], [20.1, 310.0], [20.2, 310.0], [20.3, 311.0], [20.4, 311.0], [20.5, 311.0], [20.6, 312.0], [20.7, 312.0], [20.8, 312.0], [20.9, 312.0], [21.0, 313.0], [21.1, 313.0], [21.2, 313.0], [21.3, 313.0], [21.4, 313.0], [21.5, 314.0], [21.6, 314.0], [21.7, 314.0], [21.8, 315.0], [21.9, 315.0], [22.0, 315.0], [22.1, 315.0], [22.2, 315.0], [22.3, 316.0], [22.4, 316.0], [22.5, 316.0], [22.6, 317.0], [22.7, 317.0], [22.8, 317.0], [22.9, 318.0], [23.0, 318.0], [23.1, 318.0], [23.2, 318.0], [23.3, 319.0], [23.4, 319.0], [23.5, 319.0], [23.6, 320.0], [23.7, 320.0], [23.8, 320.0], [23.9, 320.0], [24.0, 321.0], [24.1, 321.0], [24.2, 322.0], [24.3, 322.0], [24.4, 323.0], [24.5, 323.0], [24.6, 323.0], [24.7, 323.0], [24.8, 323.0], [24.9, 324.0], [25.0, 324.0], [25.1, 324.0], [25.2, 325.0], [25.3, 325.0], [25.4, 325.0], [25.5, 326.0], [25.6, 326.0], [25.7, 326.0], [25.8, 327.0], [25.9, 327.0], [26.0, 327.0], [26.1, 327.0], [26.2, 328.0], [26.3, 328.0], [26.4, 329.0], [26.5, 329.0], [26.6, 329.0], [26.7, 329.0], [26.8, 330.0], [26.9, 330.0], [27.0, 331.0], [27.1, 331.0], [27.2, 331.0], [27.3, 332.0], [27.4, 332.0], [27.5, 332.0], [27.6, 333.0], [27.7, 333.0], [27.8, 333.0], [27.9, 333.0], [28.0, 334.0], [28.1, 334.0], [28.2, 335.0], [28.3, 335.0], [28.4, 335.0], [28.5, 335.0], [28.6, 336.0], [28.7, 336.0], [28.8, 337.0], [28.9, 337.0], [29.0, 338.0], [29.1, 338.0], [29.2, 338.0], [29.3, 339.0], [29.4, 339.0], [29.5, 339.0], [29.6, 339.0], [29.7, 340.0], [29.8, 341.0], [29.9, 341.0], [30.0, 342.0], [30.1, 342.0], [30.2, 342.0], [30.3, 342.0], [30.4, 343.0], [30.5, 343.0], [30.6, 343.0], [30.7, 344.0], [30.8, 344.0], [30.9, 345.0], [31.0, 345.0], [31.1, 345.0], [31.2, 346.0], [31.3, 346.0], [31.4, 347.0], [31.5, 347.0], [31.6, 347.0], [31.7, 348.0], [31.8, 348.0], [31.9, 349.0], [32.0, 349.0], [32.1, 350.0], [32.2, 350.0], [32.3, 351.0], [32.4, 351.0], [32.5, 351.0], [32.6, 352.0], [32.7, 352.0], [32.8, 353.0], [32.9, 353.0], [33.0, 354.0], [33.1, 354.0], [33.2, 355.0], [33.3, 355.0], [33.4, 355.0], [33.5, 356.0], [33.6, 356.0], [33.7, 357.0], [33.8, 357.0], [33.9, 357.0], [34.0, 358.0], [34.1, 358.0], [34.2, 358.0], [34.3, 359.0], [34.4, 360.0], [34.5, 360.0], [34.6, 360.0], [34.7, 361.0], [34.8, 361.0], [34.9, 361.0], [35.0, 362.0], [35.1, 362.0], [35.2, 363.0], [35.3, 363.0], [35.4, 363.0], [35.5, 364.0], [35.6, 365.0], [35.7, 365.0], [35.8, 366.0], [35.9, 366.0], [36.0, 367.0], [36.1, 367.0], [36.2, 368.0], [36.3, 368.0], [36.4, 369.0], [36.5, 370.0], [36.6, 370.0], [36.7, 371.0], [36.8, 371.0], [36.9, 372.0], [37.0, 372.0], [37.1, 373.0], [37.2, 373.0], [37.3, 374.0], [37.4, 374.0], [37.5, 375.0], [37.6, 375.0], [37.7, 376.0], [37.8, 376.0], [37.9, 377.0], [38.0, 377.0], [38.1, 378.0], [38.2, 379.0], [38.3, 379.0], [38.4, 380.0], [38.5, 380.0], [38.6, 381.0], [38.7, 381.0], [38.8, 382.0], [38.9, 383.0], [39.0, 383.0], [39.1, 384.0], [39.2, 384.0], [39.3, 385.0], [39.4, 385.0], [39.5, 386.0], [39.6, 386.0], [39.7, 387.0], [39.8, 387.0], [39.9, 388.0], [40.0, 388.0], [40.1, 389.0], [40.2, 389.0], [40.3, 390.0], [40.4, 390.0], [40.5, 390.0], [40.6, 391.0], [40.7, 391.0], [40.8, 391.0], [40.9, 392.0], [41.0, 393.0], [41.1, 393.0], [41.2, 394.0], [41.3, 395.0], [41.4, 395.0], [41.5, 396.0], [41.6, 396.0], [41.7, 397.0], [41.8, 398.0], [41.9, 398.0], [42.0, 399.0], [42.1, 399.0], [42.2, 400.0], [42.3, 401.0], [42.4, 401.0], [42.5, 402.0], [42.6, 403.0], [42.7, 403.0], [42.8, 404.0], [42.9, 404.0], [43.0, 405.0], [43.1, 406.0], [43.2, 406.0], [43.3, 406.0], [43.4, 407.0], [43.5, 408.0], [43.6, 408.0], [43.7, 409.0], [43.8, 409.0], [43.9, 410.0], [44.0, 411.0], [44.1, 412.0], [44.2, 413.0], [44.3, 414.0], [44.4, 414.0], [44.5, 415.0], [44.6, 416.0], [44.7, 417.0], [44.8, 417.0], [44.9, 418.0], [45.0, 419.0], [45.1, 421.0], [45.2, 421.0], [45.3, 422.0], [45.4, 423.0], [45.5, 423.0], [45.6, 424.0], [45.7, 425.0], [45.8, 426.0], [45.9, 426.0], [46.0, 428.0], [46.1, 429.0], [46.2, 429.0], [46.3, 429.0], [46.4, 430.0], [46.5, 431.0], [46.6, 431.0], [46.7, 433.0], [46.8, 434.0], [46.9, 435.0], [47.0, 436.0], [47.1, 436.0], [47.2, 438.0], [47.3, 439.0], [47.4, 439.0], [47.5, 440.0], [47.6, 441.0], [47.7, 442.0], [47.8, 444.0], [47.9, 444.0], [48.0, 445.0], [48.1, 446.0], [48.2, 448.0], [48.3, 449.0], [48.4, 449.0], [48.5, 451.0], [48.6, 452.0], [48.7, 453.0], [48.8, 455.0], [48.9, 456.0], [49.0, 456.0], [49.1, 457.0], [49.2, 458.0], [49.3, 459.0], [49.4, 461.0], [49.5, 462.0], [49.6, 463.0], [49.7, 464.0], [49.8, 466.0], [49.9, 468.0], [50.0, 469.0], [50.1, 469.0], [50.2, 471.0], [50.3, 472.0], [50.4, 473.0], [50.5, 474.0], [50.6, 475.0], [50.7, 476.0], [50.8, 478.0], [50.9, 479.0], [51.0, 480.0], [51.1, 481.0], [51.2, 482.0], [51.3, 484.0], [51.4, 485.0], [51.5, 486.0], [51.6, 487.0], [51.7, 488.0], [51.8, 490.0], [51.9, 491.0], [52.0, 492.0], [52.1, 493.0], [52.2, 494.0], [52.3, 496.0], [52.4, 498.0], [52.5, 499.0], [52.6, 499.0], [52.7, 501.0], [52.8, 503.0], [52.9, 504.0], [53.0, 505.0], [53.1, 506.0], [53.2, 508.0], [53.3, 509.0], [53.4, 510.0], [53.5, 511.0], [53.6, 512.0], [53.7, 514.0], [53.8, 515.0], [53.9, 517.0], [54.0, 518.0], [54.1, 520.0], [54.2, 521.0], [54.3, 523.0], [54.4, 525.0], [54.5, 527.0], [54.6, 528.0], [54.7, 530.0], [54.8, 532.0], [54.9, 533.0], [55.0, 535.0], [55.1, 536.0], [55.2, 538.0], [55.3, 540.0], [55.4, 542.0], [55.5, 544.0], [55.6, 546.0], [55.7, 547.0], [55.8, 548.0], [55.9, 549.0], [56.0, 551.0], [56.1, 552.0], [56.2, 553.0], [56.3, 555.0], [56.4, 555.0], [56.5, 557.0], [56.6, 558.0], [56.7, 561.0], [56.8, 562.0], [56.9, 564.0], [57.0, 565.0], [57.1, 566.0], [57.2, 568.0], [57.3, 570.0], [57.4, 571.0], [57.5, 573.0], [57.6, 575.0], [57.7, 577.0], [57.8, 579.0], [57.9, 580.0], [58.0, 581.0], [58.1, 583.0], [58.2, 585.0], [58.3, 588.0], [58.4, 589.0], [58.5, 593.0], [58.6, 594.0], [58.7, 596.0], [58.8, 597.0], [58.9, 598.0], [59.0, 601.0], [59.1, 603.0], [59.2, 604.0], [59.3, 606.0], [59.4, 608.0], [59.5, 610.0], [59.6, 612.0], [59.7, 612.0], [59.8, 614.0], [59.9, 617.0], [60.0, 618.0], [60.1, 619.0], [60.2, 621.0], [60.3, 623.0], [60.4, 624.0], [60.5, 626.0], [60.6, 627.0], [60.7, 630.0], [60.8, 631.0], [60.9, 634.0], [61.0, 636.0], [61.1, 641.0], [61.2, 644.0], [61.3, 646.0], [61.4, 648.0], [61.5, 650.0], [61.6, 652.0], [61.7, 654.0], [61.8, 656.0], [61.9, 659.0], [62.0, 661.0], [62.1, 664.0], [62.2, 667.0], [62.3, 670.0], [62.4, 673.0], [62.5, 676.0], [62.6, 678.0], [62.7, 681.0], [62.8, 684.0], [62.9, 686.0], [63.0, 689.0], [63.1, 692.0], [63.2, 695.0], [63.3, 696.0], [63.4, 699.0], [63.5, 702.0], [63.6, 708.0], [63.7, 710.0], [63.8, 714.0], [63.9, 717.0], [64.0, 721.0], [64.1, 724.0], [64.2, 728.0], [64.3, 730.0], [64.4, 735.0], [64.5, 738.0], [64.6, 742.0], [64.7, 746.0], [64.8, 751.0], [64.9, 758.0], [65.0, 760.0], [65.1, 764.0], [65.2, 768.0], [65.3, 773.0], [65.4, 776.0], [65.5, 779.0], [65.6, 783.0], [65.7, 790.0], [65.8, 794.0], [65.9, 799.0], [66.0, 802.0], [66.1, 806.0], [66.2, 809.0], [66.3, 811.0], [66.4, 814.0], [66.5, 819.0], [66.6, 826.0], [66.7, 828.0], [66.8, 832.0], [66.9, 835.0], [67.0, 839.0], [67.1, 843.0], [67.2, 848.0], [67.3, 852.0], [67.4, 857.0], [67.5, 860.0], [67.6, 866.0], [67.7, 870.0], [67.8, 874.0], [67.9, 878.0], [68.0, 882.0], [68.1, 888.0], [68.2, 892.0], [68.3, 896.0], [68.4, 902.0], [68.5, 910.0], [68.6, 912.0], [68.7, 917.0], [68.8, 922.0], [68.9, 927.0], [69.0, 932.0], [69.1, 942.0], [69.2, 945.0], [69.3, 949.0], [69.4, 952.0], [69.5, 960.0], [69.6, 964.0], [69.7, 970.0], [69.8, 975.0], [69.9, 979.0], [70.0, 984.0], [70.1, 987.0], [70.2, 993.0], [70.3, 1001.0], [70.4, 1009.0], [70.5, 1013.0], [70.6, 1020.0], [70.7, 1022.0], [70.8, 1025.0], [70.9, 1031.0], [71.0, 1035.0], [71.1, 1042.0], [71.2, 1048.0], [71.3, 1055.0], [71.4, 1059.0], [71.5, 1063.0], [71.6, 1067.0], [71.7, 1070.0], [71.8, 1076.0], [71.9, 1080.0], [72.0, 1084.0], [72.1, 1099.0], [72.2, 1107.0], [72.3, 1111.0], [72.4, 1114.0], [72.5, 1119.0], [72.6, 1122.0], [72.7, 1131.0], [72.8, 1137.0], [72.9, 1139.0], [73.0, 1144.0], [73.1, 1149.0], [73.2, 1156.0], [73.3, 1161.0], [73.4, 1166.0], [73.5, 1172.0], [73.6, 1181.0], [73.7, 1189.0], [73.8, 1194.0], [73.9, 1199.0], [74.0, 1203.0], [74.1, 1207.0], [74.2, 1215.0], [74.3, 1219.0], [74.4, 1227.0], [74.5, 1235.0], [74.6, 1244.0], [74.7, 1252.0], [74.8, 1263.0], [74.9, 1268.0], [75.0, 1275.0], [75.1, 1285.0], [75.2, 1290.0], [75.3, 1303.0], [75.4, 1313.0], [75.5, 1322.0], [75.6, 1331.0], [75.7, 1336.0], [75.8, 1343.0], [75.9, 1348.0], [76.0, 1355.0], [76.1, 1364.0], [76.2, 1371.0], [76.3, 1380.0], [76.4, 1386.0], [76.5, 1393.0], [76.6, 1402.0], [76.7, 1407.0], [76.8, 1418.0], [76.9, 1426.0], [77.0, 1435.0], [77.1, 1437.0], [77.2, 1446.0], [77.3, 1452.0], [77.4, 1464.0], [77.5, 1472.0], [77.6, 1476.0], [77.7, 1487.0], [77.8, 1494.0], [77.9, 1502.0], [78.0, 1509.0], [78.1, 1516.0], [78.2, 1526.0], [78.3, 1538.0], [78.4, 1551.0], [78.5, 1561.0], [78.6, 1571.0], [78.7, 1582.0], [78.8, 1596.0], [78.9, 1607.0], [79.0, 1614.0], [79.1, 1623.0], [79.2, 1631.0], [79.3, 1641.0], [79.4, 1651.0], [79.5, 1658.0], [79.6, 1667.0], [79.7, 1674.0], [79.8, 1696.0], [79.9, 1713.0], [80.0, 1718.0], [80.1, 1729.0], [80.2, 1736.0], [80.3, 1748.0], [80.4, 1758.0], [80.5, 1768.0], [80.6, 1780.0], [80.7, 1791.0], [80.8, 1804.0], [80.9, 1818.0], [81.0, 1829.0], [81.1, 1844.0], [81.2, 1849.0], [81.3, 1858.0], [81.4, 1866.0], [81.5, 1881.0], [81.6, 1892.0], [81.7, 1903.0], [81.8, 1916.0], [81.9, 1924.0], [82.0, 1933.0], [82.1, 1946.0], [82.2, 1958.0], [82.3, 1971.0], [82.4, 1986.0], [82.5, 1998.0], [82.6, 2003.0], [82.7, 2010.0], [82.8, 2026.0], [82.9, 2033.0], [83.0, 2040.0], [83.1, 2050.0], [83.2, 2069.0], [83.3, 2085.0], [83.4, 2097.0], [83.5, 2110.0], [83.6, 2119.0], [83.7, 2129.0], [83.8, 2138.0], [83.9, 2152.0], [84.0, 2159.0], [84.1, 2168.0], [84.2, 2176.0], [84.3, 2186.0], [84.4, 2193.0], [84.5, 2206.0], [84.6, 2212.0], [84.7, 2226.0], [84.8, 2237.0], [84.9, 2252.0], [85.0, 2261.0], [85.1, 2274.0], [85.2, 2294.0], [85.3, 2311.0], [85.4, 2320.0], [85.5, 2335.0], [85.6, 2356.0], [85.7, 2364.0], [85.8, 2372.0], [85.9, 2384.0], [86.0, 2393.0], [86.1, 2423.0], [86.2, 2438.0], [86.3, 2447.0], [86.4, 2460.0], [86.5, 2476.0], [86.6, 2502.0], [86.7, 2513.0], [86.8, 2536.0], [86.9, 2544.0], [87.0, 2561.0], [87.1, 2580.0], [87.2, 2594.0], [87.3, 2618.0], [87.4, 2645.0], [87.5, 2663.0], [87.6, 2691.0], [87.7, 2711.0], [87.8, 2729.0], [87.9, 2743.0], [88.0, 2766.0], [88.1, 2786.0], [88.2, 2805.0], [88.3, 2827.0], [88.4, 2844.0], [88.5, 2858.0], [88.6, 2890.0], [88.7, 2908.0], [88.8, 2925.0], [88.9, 2960.0], [89.0, 2986.0], [89.1, 2997.0], [89.2, 3009.0], [89.3, 3029.0], [89.4, 3049.0], [89.5, 3074.0], [89.6, 3090.0], [89.7, 3111.0], [89.8, 3137.0], [89.9, 3166.0], [90.0, 3189.0], [90.1, 3210.0], [90.2, 3235.0], [90.3, 3253.0], [90.4, 3277.0], [90.5, 3298.0], [90.6, 3326.0], [90.7, 3343.0], [90.8, 3366.0], [90.9, 3394.0], [91.0, 3450.0], [91.1, 3473.0], [91.2, 3499.0], [91.3, 3527.0], [91.4, 3559.0], [91.5, 3579.0], [91.6, 3607.0], [91.7, 3621.0], [91.8, 3650.0], [91.9, 3677.0], [92.0, 3715.0], [92.1, 3747.0], [92.2, 3787.0], [92.3, 3811.0], [92.4, 3830.0], [92.5, 3869.0], [92.6, 3899.0], [92.7, 3930.0], [92.8, 3942.0], [92.9, 3990.0], [93.0, 4038.0], [93.1, 4086.0], [93.2, 4128.0], [93.3, 4171.0], [93.4, 4221.0], [93.5, 4274.0], [93.6, 4368.0], [93.7, 4419.0], [93.8, 4456.0], [93.9, 4495.0], [94.0, 4523.0], [94.1, 4540.0], [94.2, 4556.0], [94.3, 4594.0], [94.4, 4645.0], [94.5, 4671.0], [94.6, 4700.0], [94.7, 4740.0], [94.8, 4788.0], [94.9, 4829.0], [95.0, 4861.0], [95.1, 4909.0], [95.2, 4959.0], [95.3, 5003.0], [95.4, 5055.0], [95.5, 5116.0], [95.6, 5154.0], [95.7, 5176.0], [95.8, 5207.0], [95.9, 5236.0], [96.0, 5272.0], [96.1, 5317.0], [96.2, 5378.0], [96.3, 5446.0], [96.4, 5494.0], [96.5, 5527.0], [96.6, 5576.0], [96.7, 5641.0], [96.8, 5672.0], [96.9, 5704.0], [97.0, 5775.0], [97.1, 5829.0], [97.2, 5896.0], [97.3, 5982.0], [97.4, 6060.0], [97.5, 6119.0], [97.6, 6165.0], [97.7, 6233.0], [97.8, 6312.0], [97.9, 6456.0], [98.0, 6531.0], [98.1, 6633.0], [98.2, 6702.0], [98.3, 6837.0], [98.4, 6960.0], [98.5, 7093.0], [98.6, 7260.0], [98.7, 7372.0], [98.8, 7456.0], [98.9, 7519.0], [99.0, 7606.0], [99.1, 7742.0], [99.2, 8007.0], [99.3, 8212.0], [99.4, 8415.0], [99.5, 8825.0], [99.6, 9376.0], [99.7, 9560.0], [99.8, 10048.0], [99.9, 11412.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2378.0, "series": [{"data": [[200.0, 1355.0], [300.0, 2378.0], [400.0, 924.0], [500.0, 563.0], [600.0, 394.0], [700.0, 223.0], [800.0, 216.0], [900.0, 165.0], [1000.0, 167.0], [1100.0, 159.0], [1200.0, 120.0], [1300.0, 116.0], [1400.0, 113.0], [1500.0, 86.0], [1600.0, 89.0], [1700.0, 79.0], [1800.0, 79.0], [1900.0, 81.0], [2000.0, 78.0], [2100.0, 93.0], [2200.0, 68.0], [2300.0, 68.0], [2400.0, 52.0], [2500.0, 56.0], [2600.0, 36.0], [2700.0, 47.0], [2800.0, 42.0], [2900.0, 42.0], [3000.0, 49.0], [3100.0, 35.0], [3300.0, 36.0], [3200.0, 39.0], [3400.0, 26.0], [3500.0, 33.0], [3600.0, 35.0], [3700.0, 23.0], [3800.0, 33.0], [3900.0, 27.0], [4000.0, 22.0], [4100.0, 21.0], [4300.0, 14.0], [4200.0, 12.0], [4400.0, 19.0], [4500.0, 36.0], [4600.0, 25.0], [4700.0, 24.0], [4800.0, 19.0], [4900.0, 19.0], [5100.0, 28.0], [5000.0, 16.0], [5300.0, 17.0], [5200.0, 25.0], [5500.0, 19.0], [5600.0, 23.0], [5400.0, 14.0], [5700.0, 14.0], [5800.0, 14.0], [5900.0, 10.0], [6100.0, 18.0], [6000.0, 10.0], [6200.0, 13.0], [6300.0, 6.0], [6500.0, 8.0], [6600.0, 11.0], [6400.0, 11.0], [6800.0, 10.0], [6900.0, 8.0], [6700.0, 5.0], [7100.0, 6.0], [7000.0, 5.0], [7400.0, 14.0], [7300.0, 7.0], [7200.0, 5.0], [7600.0, 8.0], [7500.0, 11.0], [7900.0, 5.0], [7800.0, 2.0], [7700.0, 3.0], [8000.0, 6.0], [8100.0, 3.0], [8200.0, 6.0], [8500.0, 2.0], [8400.0, 2.0], [8600.0, 2.0], [8300.0, 2.0], [8700.0, 2.0], [9200.0, 3.0], [9000.0, 3.0], [8800.0, 2.0], [9100.0, 2.0], [9600.0, 2.0], [9400.0, 5.0], [9500.0, 5.0], [9700.0, 1.0], [9300.0, 1.0], [10100.0, 2.0], [9900.0, 3.0], [9800.0, 1.0], [10000.0, 1.0], [10400.0, 2.0], [10300.0, 1.0], [10700.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [11400.0, 1.0], [11600.0, 1.0], [11500.0, 1.0], [11700.0, 1.0], [11900.0, 2.0], [12000.0, 2.0], [11800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3744.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5109.0, "series": [{"data": [[0.0, 3744.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5109.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 125.46591970121378, "minX": 1.60319994E12, "maxY": 144.31117021276577, "series": [{"data": [[1.6032E12, 125.46591970121378], [1.60319994E12, 144.31117021276577]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group - LoadTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 257.0, "minX": 1.0, "maxY": 3280.25, "series": [{"data": [[2.0, 291.0], [3.0, 289.0], [4.0, 272.5], [5.0, 297.0], [6.0, 303.0], [7.0, 294.0], [8.0, 276.0], [9.0, 273.0], [10.0, 279.8181818181818], [11.0, 265.0], [12.0, 277.25], [13.0, 338.5], [14.0, 266.0], [15.0, 281.0], [16.0, 279.0], [17.0, 274.75], [18.0, 287.25], [19.0, 303.0], [20.0, 293.0], [21.0, 382.5], [22.0, 670.0], [23.0, 287.0], [24.0, 279.2307692307692], [25.0, 323.5833333333333], [26.0, 312.14285714285717], [27.0, 293.5], [28.0, 276.25], [29.0, 284.5], [30.0, 583.6], [31.0, 714.5555555555555], [32.0, 522.5454545454546], [33.0, 537.4166666666666], [35.0, 631.375], [34.0, 291.75], [36.0, 481.921052631579], [37.0, 286.3333333333333], [39.0, 1303.0], [38.0, 305.77777777777777], [40.0, 589.5714285714286], [41.0, 681.5714285714286], [43.0, 624.2], [42.0, 259.0], [45.0, 434.7368421052631], [44.0, 257.0], [47.0, 281.69230769230774], [46.0, 326.875], [49.0, 582.25], [48.0, 484.87499999999994], [51.0, 954.25], [50.0, 531.5714285714286], [53.0, 383.95454545454544], [52.0, 1383.0], [54.0, 790.4], [55.0, 610.3571428571429], [57.0, 295.0], [56.0, 857.107142857143], [58.0, 784.0], [59.0, 1010.9285714285713], [60.0, 733.5833333333333], [61.0, 295.42857142857144], [62.0, 576.0], [63.0, 467.875], [64.0, 465.75], [65.0, 389.4375000000001], [66.0, 661.9999999999999], [67.0, 461.00000000000006], [68.0, 471.25], [69.0, 648.3749999999999], [70.0, 542.4000000000001], [71.0, 523.1111111111111], [72.0, 589.1333333333332], [74.0, 778.8333333333333], [75.0, 547.2068965517242], [73.0, 690.0], [76.0, 1904.0], [77.0, 1491.75], [78.0, 466.49999999999994], [79.0, 542.75], [80.0, 851.8333333333333], [81.0, 474.264705882353], [82.0, 462.8], [83.0, 1346.4285714285713], [84.0, 707.0], [85.0, 803.0], [86.0, 537.5641025641027], [87.0, 507.08], [88.0, 1314.571428571429], [89.0, 1025.125], [90.0, 1528.0], [91.0, 3280.25], [92.0, 797.85], [93.0, 2143.625], [94.0, 692.3076923076924], [95.0, 551.3913043478261], [96.0, 1027.5], [97.0, 645.3600000000001], [98.0, 812.3333333333333], [99.0, 1216.5], [100.0, 751.7777777777777], [103.0, 800.1666666666666], [102.0, 2047.8], [101.0, 418.8], [104.0, 736.6875], [105.0, 1149.923076923077], [107.0, 523.8124999999999], [108.0, 1222.875], [109.0, 770.4444444444446], [110.0, 530.8387096774194], [111.0, 1044.8], [112.0, 391.63636363636357], [113.0, 1356.863636363636], [114.0, 703.375], [115.0, 568.8000000000002], [116.0, 933.8301886792455], [117.0, 917.3333333333333], [118.0, 1862.25], [119.0, 512.0], [120.0, 526.1666666666666], [121.0, 434.1], [122.0, 788.0249999999997], [123.0, 850.8095238095237], [124.0, 888.9999999999999], [125.0, 648.0], [126.0, 1302.833333333333], [127.0, 1656.6666666666665], [128.0, 416.42857142857144], [129.0, 900.5238095238096], [130.0, 1499.888888888889], [131.0, 987.3333333333334], [132.0, 1196.0588235294117], [133.0, 973.909090909091], [134.0, 1134.7272727272727], [135.0, 816.8636363636363], [137.0, 687.2142857142857], [138.0, 777.7058823529411], [140.0, 1434.7187500000002], [141.0, 680.7333333333332], [142.0, 711.6562499999999], [143.0, 471.6666666666667], [139.0, 2243.0], [145.0, 971.4615384615383], [146.0, 1187.2105263157898], [147.0, 850.5263157894736], [150.0, 1306.4104960460058], [149.0, 492.42857142857144], [148.0, 1221.6315789473686], [144.0, 930.3333333333334], [1.0, 282.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[137.4717045069463, 1189.6176437365853]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6158.25, "minX": 1.60319994E12, "maxY": 303434.0, "series": [{"data": [[1.6032E12, 172860.73333333334], [1.60319994E12, 303434.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6032E12, 6158.25], [1.60319994E12, 10810.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1174.9498910675381, "minX": 1.60319994E12, "maxY": 1197.9735815602821, "series": [{"data": [[1.6032E12, 1174.9498910675381], [1.60319994E12, 1197.9735815602821]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1174.1612200435711, "minX": 1.60319994E12, "maxY": 1197.443971631203, "series": [{"data": [[1.6032E12, 1174.1612200435711], [1.60319994E12, 1197.443971631203]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 71.22429078014204, "minX": 1.60319994E12, "maxY": 487.8695922813563, "series": [{"data": [[1.6032E12, 487.8695922813563], [1.60319994E12, 71.22429078014204]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 244.0, "minX": 1.60319994E12, "maxY": 400.0, "series": [{"data": [[1.6032E12, 400.0], [1.60319994E12, 400.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6032E12, 254.0], [1.60319994E12, 254.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6032E12, 254.41450012922286], [1.60319994E12, 254.67090022802353]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6032E12, 254.0], [1.60319994E12, 254.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6032E12, 247.0], [1.60319994E12, 244.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6032E12, 309.0], [1.60319994E12, 315.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 271.5, "minX": 2.0, "maxY": 4661.0, "series": [{"data": [[2.0, 286.5], [19.0, 304.0], [43.0, 276.0], [47.0, 272.0], [53.0, 361.0], [54.0, 322.5], [65.0, 357.0], [64.0, 326.0], [70.0, 348.0], [72.0, 271.5], [82.0, 331.0], [89.0, 323.0], [91.0, 298.5], [90.0, 287.5], [98.0, 316.0], [99.0, 335.5], [101.0, 312.0], [100.0, 313.0], [106.0, 305.0], [108.0, 319.0], [111.0, 321.0], [113.0, 335.5], [118.0, 297.0], [117.0, 297.5], [120.0, 332.0], [121.0, 308.5], [122.0, 323.0], [125.0, 344.0], [126.0, 303.0], [124.0, 290.0], [135.0, 325.0], [133.0, 314.0], [131.0, 317.0], [130.0, 341.0], [129.0, 329.0], [137.0, 301.0], [141.0, 302.5], [151.0, 326.0], [148.0, 306.5], [150.0, 325.5], [152.0, 309.0], [158.0, 333.0], [166.0, 321.0], [171.0, 328.5], [173.0, 335.5], [183.0, 315.0], [178.0, 333.5], [186.0, 347.0], [185.0, 304.5], [184.0, 314.0], [195.0, 323.0], [196.0, 330.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 2537.5], [19.0, 1009.0], [29.0, 2324.0], [32.0, 3114.0], [40.0, 613.5], [45.0, 4661.0], [47.0, 1525.5], [53.0, 549.0], [54.0, 883.0], [55.0, 1080.0], [56.0, 1241.0], [61.0, 1215.0], [65.0, 561.0], [64.0, 2211.0], [70.0, 4306.0], [72.0, 842.0], [82.0, 968.0], [89.0, 592.0], [91.0, 2501.5], [90.0, 1206.5], [98.0, 2109.0], [99.0, 2060.0], [101.0, 626.5], [100.0, 1219.0], [106.0, 1583.0], [108.0, 1918.0], [111.0, 1509.5], [113.0, 2712.0], [118.0, 1331.0], [117.0, 788.0], [120.0, 1062.0], [121.0, 1000.5], [122.0, 846.0], [125.0, 1154.0], [126.0, 1006.0], [124.0, 1024.0], [135.0, 1536.0], [133.0, 793.5], [131.0, 1103.5], [130.0, 543.0], [129.0, 1191.0], [137.0, 1261.0], [141.0, 854.0], [151.0, 898.0], [148.0, 719.5], [150.0, 884.5], [152.0, 656.0], [158.0, 654.0], [166.0, 785.5], [171.0, 687.5], [173.0, 1200.0], [183.0, 1115.0], [178.0, 909.5], [186.0, 1061.5], [185.0, 631.0], [184.0, 525.0], [195.0, 715.5], [196.0, 664.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 196.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 271.0, "minX": 2.0, "maxY": 4661.0, "series": [{"data": [[2.0, 285.5], [19.0, 303.0], [43.0, 276.0], [47.0, 271.0], [53.0, 360.0], [54.0, 322.0], [65.0, 356.0], [64.0, 326.0], [70.0, 347.0], [72.0, 271.0], [82.0, 331.0], [89.0, 321.0], [91.0, 297.5], [90.0, 286.5], [98.0, 315.0], [99.0, 335.5], [101.0, 312.0], [100.0, 313.0], [106.0, 304.5], [108.0, 319.0], [111.0, 321.0], [113.0, 334.0], [118.0, 296.0], [117.0, 296.5], [120.0, 331.5], [121.0, 308.5], [122.0, 323.0], [125.0, 343.0], [126.0, 303.0], [124.0, 289.5], [135.0, 324.5], [133.0, 314.0], [131.0, 316.0], [130.0, 340.0], [129.0, 329.0], [137.0, 301.0], [141.0, 302.0], [151.0, 326.0], [148.0, 305.5], [150.0, 325.5], [152.0, 307.5], [158.0, 333.0], [166.0, 320.0], [171.0, 328.0], [173.0, 335.5], [183.0, 315.0], [178.0, 331.5], [186.0, 347.0], [185.0, 304.0], [184.0, 313.5], [195.0, 323.0], [196.0, 330.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[14.0, 2537.5], [19.0, 1008.5], [29.0, 2324.0], [32.0, 3112.5], [40.0, 613.5], [45.0, 4661.0], [47.0, 1525.0], [53.0, 549.0], [54.0, 883.0], [55.0, 1080.0], [56.0, 1241.0], [61.0, 1215.0], [65.0, 558.5], [64.0, 2211.0], [70.0, 4304.0], [72.0, 842.0], [82.0, 968.0], [89.0, 591.5], [91.0, 2501.0], [90.0, 1206.5], [98.0, 2109.0], [99.0, 2058.0], [101.0, 626.0], [100.0, 1219.0], [106.0, 1583.0], [108.0, 1917.0], [111.0, 1509.5], [113.0, 2711.0], [118.0, 1331.0], [117.0, 788.0], [120.0, 1061.5], [121.0, 999.0], [122.0, 846.0], [125.0, 1154.0], [126.0, 1005.0], [124.0, 1023.0], [135.0, 1536.0], [133.0, 793.5], [131.0, 1103.0], [130.0, 543.0], [129.0, 1190.5], [137.0, 1261.0], [141.0, 854.0], [151.0, 892.5], [148.0, 719.5], [150.0, 856.0], [152.0, 655.5], [158.0, 654.0], [166.0, 785.5], [171.0, 687.5], [173.0, 1200.0], [183.0, 1115.0], [178.0, 909.5], [186.0, 1061.5], [185.0, 630.0], [184.0, 525.0], [195.0, 715.5], [196.0, 664.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 196.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 51.05, "minX": 1.60319994E12, "maxY": 96.5, "series": [{"data": [[1.6032E12, 51.05], [1.60319994E12, 96.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 53.55, "minX": 1.60319994E12, "maxY": 94.0, "series": [{"data": [[1.6032E12, 53.55], [1.60319994E12, 94.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6032E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 22.566666666666666, "minX": 1.60319994E12, "maxY": 54.166666666666664, "series": [{"data": [[1.6032E12, 30.983333333333334], [1.60319994E12, 54.166666666666664]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.6032E12, 22.566666666666666], [1.60319994E12, 39.833333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 22.566666666666666, "minX": 1.60319994E12, "maxY": 54.166666666666664, "series": [{"data": [[1.6032E12, 22.566666666666666], [1.60319994E12, 39.833333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6032E12, 30.983333333333334], [1.60319994E12, 54.166666666666664]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6032E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

