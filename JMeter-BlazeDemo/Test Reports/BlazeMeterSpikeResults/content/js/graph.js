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
        data: {"result": {"minY": 267.0, "minX": 0.0, "maxY": 6737.0, "series": [{"data": [[0.0, 267.0], [0.1, 267.0], [0.2, 267.0], [0.3, 267.0], [0.4, 267.0], [0.5, 267.0], [0.6, 267.0], [0.7, 267.0], [0.8, 267.0], [0.9, 268.0], [1.0, 268.0], [1.1, 268.0], [1.2, 268.0], [1.3, 269.0], [1.4, 269.0], [1.5, 269.0], [1.6, 269.0], [1.7, 269.0], [1.8, 278.0], [1.9, 278.0], [2.0, 278.0], [2.1, 278.0], [2.2, 279.0], [2.3, 279.0], [2.4, 279.0], [2.5, 279.0], [2.6, 279.0], [2.7, 279.0], [2.8, 279.0], [2.9, 279.0], [3.0, 279.0], [3.1, 280.0], [3.2, 280.0], [3.3, 280.0], [3.4, 280.0], [3.5, 280.0], [3.6, 280.0], [3.7, 280.0], [3.8, 280.0], [3.9, 283.0], [4.0, 283.0], [4.1, 283.0], [4.2, 283.0], [4.3, 283.0], [4.4, 287.0], [4.5, 287.0], [4.6, 287.0], [4.7, 287.0], [4.8, 288.0], [4.9, 288.0], [5.0, 288.0], [5.1, 288.0], [5.2, 291.0], [5.3, 291.0], [5.4, 291.0], [5.5, 291.0], [5.6, 291.0], [5.7, 292.0], [5.8, 292.0], [5.9, 292.0], [6.0, 292.0], [6.1, 300.0], [6.2, 300.0], [6.3, 300.0], [6.4, 300.0], [6.5, 303.0], [6.6, 303.0], [6.7, 303.0], [6.8, 303.0], [6.9, 303.0], [7.0, 305.0], [7.1, 305.0], [7.2, 305.0], [7.3, 305.0], [7.4, 312.0], [7.5, 312.0], [7.6, 312.0], [7.7, 312.0], [7.8, 313.0], [7.9, 313.0], [8.0, 313.0], [8.1, 313.0], [8.2, 313.0], [8.3, 314.0], [8.4, 314.0], [8.5, 314.0], [8.6, 314.0], [8.7, 320.0], [8.8, 320.0], [8.9, 320.0], [9.0, 320.0], [9.1, 322.0], [9.2, 322.0], [9.3, 322.0], [9.4, 322.0], [9.5, 322.0], [9.6, 323.0], [9.7, 323.0], [9.8, 323.0], [9.9, 323.0], [10.0, 339.0], [10.1, 339.0], [10.2, 339.0], [10.3, 339.0], [10.4, 342.0], [10.5, 342.0], [10.6, 342.0], [10.7, 342.0], [10.8, 342.0], [10.9, 353.0], [11.0, 353.0], [11.1, 353.0], [11.2, 353.0], [11.3, 368.0], [11.4, 368.0], [11.5, 368.0], [11.6, 368.0], [11.7, 376.0], [11.8, 376.0], [11.9, 376.0], [12.0, 376.0], [12.1, 376.0], [12.2, 385.0], [12.3, 385.0], [12.4, 385.0], [12.5, 385.0], [12.6, 394.0], [12.7, 394.0], [12.8, 394.0], [12.9, 394.0], [13.0, 401.0], [13.1, 401.0], [13.2, 401.0], [13.3, 401.0], [13.4, 401.0], [13.5, 404.0], [13.6, 404.0], [13.7, 404.0], [13.8, 404.0], [13.9, 405.0], [14.0, 405.0], [14.1, 405.0], [14.2, 405.0], [14.3, 405.0], [14.4, 405.0], [14.5, 405.0], [14.6, 405.0], [14.7, 405.0], [14.8, 411.0], [14.9, 411.0], [15.0, 411.0], [15.1, 411.0], [15.2, 412.0], [15.3, 412.0], [15.4, 412.0], [15.5, 412.0], [15.6, 412.0], [15.7, 412.0], [15.8, 412.0], [15.9, 412.0], [16.0, 412.0], [16.1, 413.0], [16.2, 413.0], [16.3, 413.0], [16.4, 413.0], [16.5, 422.0], [16.6, 422.0], [16.7, 422.0], [16.8, 422.0], [16.9, 425.0], [17.0, 425.0], [17.1, 425.0], [17.2, 425.0], [17.3, 425.0], [17.4, 429.0], [17.5, 429.0], [17.6, 429.0], [17.7, 429.0], [17.8, 433.0], [17.9, 433.0], [18.0, 433.0], [18.1, 433.0], [18.2, 458.0], [18.3, 458.0], [18.4, 458.0], [18.5, 458.0], [18.6, 458.0], [18.7, 463.0], [18.8, 463.0], [18.9, 463.0], [19.0, 463.0], [19.1, 494.0], [19.2, 494.0], [19.3, 494.0], [19.4, 494.0], [19.5, 494.0], [19.6, 494.0], [19.7, 494.0], [19.8, 494.0], [19.9, 494.0], [20.0, 531.0], [20.1, 531.0], [20.2, 531.0], [20.3, 531.0], [20.4, 532.0], [20.5, 532.0], [20.6, 532.0], [20.7, 532.0], [20.8, 538.0], [20.9, 538.0], [21.0, 538.0], [21.1, 538.0], [21.2, 538.0], [21.3, 570.0], [21.4, 570.0], [21.5, 570.0], [21.6, 570.0], [21.7, 585.0], [21.8, 585.0], [21.9, 585.0], [22.0, 585.0], [22.1, 610.0], [22.2, 610.0], [22.3, 610.0], [22.4, 610.0], [22.5, 610.0], [22.6, 613.0], [22.7, 613.0], [22.8, 613.0], [22.9, 613.0], [23.0, 694.0], [23.1, 694.0], [23.2, 694.0], [23.3, 694.0], [23.4, 696.0], [23.5, 696.0], [23.6, 696.0], [23.7, 696.0], [23.8, 696.0], [23.9, 726.0], [24.0, 726.0], [24.1, 726.0], [24.2, 726.0], [24.3, 760.0], [24.4, 760.0], [24.5, 760.0], [24.6, 760.0], [24.7, 799.0], [24.8, 799.0], [24.9, 799.0], [25.0, 799.0], [25.1, 799.0], [25.2, 891.0], [25.3, 891.0], [25.4, 891.0], [25.5, 891.0], [25.6, 932.0], [25.7, 932.0], [25.8, 932.0], [25.9, 932.0], [26.0, 987.0], [26.1, 987.0], [26.2, 987.0], [26.3, 987.0], [26.4, 987.0], [26.5, 991.0], [26.6, 991.0], [26.7, 991.0], [26.8, 991.0], [26.9, 993.0], [27.0, 993.0], [27.1, 993.0], [27.2, 993.0], [27.3, 996.0], [27.4, 996.0], [27.5, 996.0], [27.6, 996.0], [27.7, 996.0], [27.8, 1002.0], [27.9, 1002.0], [28.0, 1002.0], [28.1, 1002.0], [28.2, 1006.0], [28.3, 1006.0], [28.4, 1006.0], [28.5, 1006.0], [28.6, 1012.0], [28.7, 1012.0], [28.8, 1012.0], [28.9, 1012.0], [29.0, 1012.0], [29.1, 1034.0], [29.2, 1034.0], [29.3, 1034.0], [29.4, 1034.0], [29.5, 1055.0], [29.6, 1055.0], [29.7, 1055.0], [29.8, 1055.0], [29.9, 1067.0], [30.0, 1067.0], [30.1, 1067.0], [30.2, 1067.0], [30.3, 1067.0], [30.4, 1077.0], [30.5, 1077.0], [30.6, 1077.0], [30.7, 1077.0], [30.8, 1087.0], [30.9, 1087.0], [31.0, 1087.0], [31.1, 1087.0], [31.2, 1091.0], [31.3, 1091.0], [31.4, 1091.0], [31.5, 1091.0], [31.6, 1091.0], [31.7, 1100.0], [31.8, 1100.0], [31.9, 1100.0], [32.0, 1100.0], [32.1, 1106.0], [32.2, 1106.0], [32.3, 1106.0], [32.4, 1106.0], [32.5, 1107.0], [32.6, 1107.0], [32.7, 1107.0], [32.8, 1107.0], [32.9, 1107.0], [33.0, 1121.0], [33.1, 1121.0], [33.2, 1121.0], [33.3, 1121.0], [33.4, 1122.0], [33.5, 1122.0], [33.6, 1122.0], [33.7, 1122.0], [33.8, 1127.0], [33.9, 1127.0], [34.0, 1127.0], [34.1, 1127.0], [34.2, 1130.0], [34.3, 1130.0], [34.4, 1130.0], [34.5, 1130.0], [34.6, 1130.0], [34.7, 1138.0], [34.8, 1138.0], [34.9, 1138.0], [35.0, 1138.0], [35.1, 1173.0], [35.2, 1173.0], [35.3, 1173.0], [35.4, 1173.0], [35.5, 1192.0], [35.6, 1192.0], [35.7, 1192.0], [35.8, 1192.0], [35.9, 1192.0], [36.0, 1210.0], [36.1, 1210.0], [36.2, 1210.0], [36.3, 1210.0], [36.4, 1224.0], [36.5, 1224.0], [36.6, 1224.0], [36.7, 1224.0], [36.8, 1227.0], [36.9, 1227.0], [37.0, 1227.0], [37.1, 1227.0], [37.2, 1227.0], [37.3, 1228.0], [37.4, 1228.0], [37.5, 1228.0], [37.6, 1228.0], [37.7, 1266.0], [37.8, 1266.0], [37.9, 1266.0], [38.0, 1266.0], [38.1, 1267.0], [38.2, 1267.0], [38.3, 1267.0], [38.4, 1267.0], [38.5, 1267.0], [38.6, 1278.0], [38.7, 1278.0], [38.8, 1278.0], [38.9, 1278.0], [39.0, 1313.0], [39.1, 1313.0], [39.2, 1313.0], [39.3, 1313.0], [39.4, 1313.0], [39.5, 1313.0], [39.6, 1313.0], [39.7, 1313.0], [39.8, 1313.0], [39.9, 1347.0], [40.0, 1347.0], [40.1, 1347.0], [40.2, 1347.0], [40.3, 1389.0], [40.4, 1389.0], [40.5, 1389.0], [40.6, 1389.0], [40.7, 1401.0], [40.8, 1401.0], [40.9, 1401.0], [41.0, 1401.0], [41.1, 1401.0], [41.2, 1407.0], [41.3, 1407.0], [41.4, 1407.0], [41.5, 1407.0], [41.6, 1424.0], [41.7, 1424.0], [41.8, 1424.0], [41.9, 1424.0], [42.0, 1445.0], [42.1, 1445.0], [42.2, 1445.0], [42.3, 1445.0], [42.4, 1445.0], [42.5, 1456.0], [42.6, 1456.0], [42.7, 1456.0], [42.8, 1456.0], [42.9, 1462.0], [43.0, 1462.0], [43.1, 1462.0], [43.2, 1462.0], [43.3, 1468.0], [43.4, 1468.0], [43.5, 1468.0], [43.6, 1468.0], [43.7, 1468.0], [43.8, 1543.0], [43.9, 1543.0], [44.0, 1543.0], [44.1, 1543.0], [44.2, 1599.0], [44.3, 1599.0], [44.4, 1599.0], [44.5, 1599.0], [44.6, 1610.0], [44.7, 1610.0], [44.8, 1610.0], [44.9, 1610.0], [45.0, 1610.0], [45.1, 1611.0], [45.2, 1611.0], [45.3, 1611.0], [45.4, 1611.0], [45.5, 1620.0], [45.6, 1620.0], [45.7, 1620.0], [45.8, 1620.0], [45.9, 1626.0], [46.0, 1626.0], [46.1, 1626.0], [46.2, 1626.0], [46.3, 1626.0], [46.4, 1628.0], [46.5, 1628.0], [46.6, 1628.0], [46.7, 1628.0], [46.8, 1655.0], [46.9, 1655.0], [47.0, 1655.0], [47.1, 1655.0], [47.2, 1660.0], [47.3, 1660.0], [47.4, 1660.0], [47.5, 1660.0], [47.6, 1660.0], [47.7, 1674.0], [47.8, 1674.0], [47.9, 1674.0], [48.0, 1674.0], [48.1, 1689.0], [48.2, 1689.0], [48.3, 1689.0], [48.4, 1689.0], [48.5, 1703.0], [48.6, 1703.0], [48.7, 1703.0], [48.8, 1703.0], [48.9, 1703.0], [49.0, 1708.0], [49.1, 1708.0], [49.2, 1708.0], [49.3, 1708.0], [49.4, 1718.0], [49.5, 1718.0], [49.6, 1718.0], [49.7, 1718.0], [49.8, 1721.0], [49.9, 1721.0], [50.0, 1721.0], [50.1, 1721.0], [50.2, 1721.0], [50.3, 1730.0], [50.4, 1730.0], [50.5, 1730.0], [50.6, 1730.0], [50.7, 1731.0], [50.8, 1731.0], [50.9, 1731.0], [51.0, 1731.0], [51.1, 1746.0], [51.2, 1746.0], [51.3, 1746.0], [51.4, 1746.0], [51.5, 1746.0], [51.6, 1759.0], [51.7, 1759.0], [51.8, 1759.0], [51.9, 1759.0], [52.0, 1763.0], [52.1, 1763.0], [52.2, 1763.0], [52.3, 1763.0], [52.4, 1768.0], [52.5, 1768.0], [52.6, 1768.0], [52.7, 1768.0], [52.8, 1768.0], [52.9, 1794.0], [53.0, 1794.0], [53.1, 1794.0], [53.2, 1794.0], [53.3, 1804.0], [53.4, 1804.0], [53.5, 1804.0], [53.6, 1804.0], [53.7, 1813.0], [53.8, 1813.0], [53.9, 1813.0], [54.0, 1813.0], [54.1, 1813.0], [54.2, 1957.0], [54.3, 1957.0], [54.4, 1957.0], [54.5, 1957.0], [54.6, 1986.0], [54.7, 1986.0], [54.8, 1986.0], [54.9, 1986.0], [55.0, 2840.0], [55.1, 2840.0], [55.2, 2840.0], [55.3, 2840.0], [55.4, 2840.0], [55.5, 2851.0], [55.6, 2851.0], [55.7, 2851.0], [55.8, 2851.0], [55.9, 2920.0], [56.0, 2920.0], [56.1, 2920.0], [56.2, 2920.0], [56.3, 2925.0], [56.4, 2925.0], [56.5, 2925.0], [56.6, 2925.0], [56.7, 2925.0], [56.8, 2987.0], [56.9, 2987.0], [57.0, 2987.0], [57.1, 2987.0], [57.2, 3148.0], [57.3, 3148.0], [57.4, 3148.0], [57.5, 3148.0], [57.6, 3563.0], [57.7, 3563.0], [57.8, 3563.0], [57.9, 3563.0], [58.0, 3563.0], [58.1, 3598.0], [58.2, 3598.0], [58.3, 3598.0], [58.4, 3598.0], [58.5, 3724.0], [58.6, 3724.0], [58.7, 3724.0], [58.8, 3724.0], [58.9, 3796.0], [59.0, 3796.0], [59.1, 3796.0], [59.2, 3796.0], [59.3, 3796.0], [59.4, 3843.0], [59.5, 3843.0], [59.6, 3843.0], [59.7, 3843.0], [59.8, 3887.0], [59.9, 3887.0], [60.0, 3887.0], [60.1, 3887.0], [60.2, 3917.0], [60.3, 3917.0], [60.4, 3917.0], [60.5, 3917.0], [60.6, 3917.0], [60.7, 3936.0], [60.8, 3936.0], [60.9, 3936.0], [61.0, 3936.0], [61.1, 3983.0], [61.2, 3983.0], [61.3, 3983.0], [61.4, 3983.0], [61.5, 4023.0], [61.6, 4023.0], [61.7, 4023.0], [61.8, 4023.0], [61.9, 4023.0], [62.0, 4024.0], [62.1, 4024.0], [62.2, 4024.0], [62.3, 4024.0], [62.4, 4025.0], [62.5, 4025.0], [62.6, 4025.0], [62.7, 4025.0], [62.8, 4027.0], [62.9, 4027.0], [63.0, 4027.0], [63.1, 4027.0], [63.2, 4027.0], [63.3, 4035.0], [63.4, 4035.0], [63.5, 4035.0], [63.6, 4035.0], [63.7, 4044.0], [63.8, 4044.0], [63.9, 4044.0], [64.0, 4044.0], [64.1, 4045.0], [64.2, 4045.0], [64.3, 4045.0], [64.4, 4045.0], [64.5, 4045.0], [64.6, 4063.0], [64.7, 4063.0], [64.8, 4063.0], [64.9, 4063.0], [65.0, 4063.0], [65.1, 4063.0], [65.2, 4063.0], [65.3, 4063.0], [65.4, 4064.0], [65.5, 4064.0], [65.6, 4064.0], [65.7, 4064.0], [65.8, 4064.0], [65.9, 4067.0], [66.0, 4067.0], [66.1, 4067.0], [66.2, 4067.0], [66.3, 4084.0], [66.4, 4084.0], [66.5, 4084.0], [66.6, 4084.0], [66.7, 4089.0], [66.8, 4089.0], [66.9, 4089.0], [67.0, 4089.0], [67.1, 4093.0], [67.2, 4093.0], [67.3, 4093.0], [67.4, 4093.0], [67.5, 4093.0], [67.6, 4132.0], [67.7, 4132.0], [67.8, 4132.0], [67.9, 4132.0], [68.0, 4133.0], [68.1, 4133.0], [68.2, 4133.0], [68.3, 4133.0], [68.4, 4138.0], [68.5, 4138.0], [68.6, 4138.0], [68.7, 4138.0], [68.8, 4138.0], [68.9, 4155.0], [69.0, 4155.0], [69.1, 4155.0], [69.2, 4155.0], [69.3, 4156.0], [69.4, 4156.0], [69.5, 4156.0], [69.6, 4156.0], [69.7, 4163.0], [69.8, 4163.0], [69.9, 4163.0], [70.0, 4163.0], [70.1, 4163.0], [70.2, 4166.0], [70.3, 4166.0], [70.4, 4166.0], [70.5, 4166.0], [70.6, 4169.0], [70.7, 4169.0], [70.8, 4169.0], [70.9, 4169.0], [71.0, 4172.0], [71.1, 4172.0], [71.2, 4172.0], [71.3, 4172.0], [71.4, 4172.0], [71.5, 4173.0], [71.6, 4173.0], [71.7, 4173.0], [71.8, 4173.0], [71.9, 4184.0], [72.0, 4184.0], [72.1, 4184.0], [72.2, 4184.0], [72.3, 4194.0], [72.4, 4194.0], [72.5, 4194.0], [72.6, 4194.0], [72.7, 4194.0], [72.8, 4201.0], [72.9, 4201.0], [73.0, 4201.0], [73.1, 4201.0], [73.2, 4217.0], [73.3, 4217.0], [73.4, 4217.0], [73.5, 4217.0], [73.6, 4231.0], [73.7, 4231.0], [73.8, 4231.0], [73.9, 4231.0], [74.0, 4231.0], [74.1, 4238.0], [74.2, 4238.0], [74.3, 4238.0], [74.4, 4238.0], [74.5, 4259.0], [74.6, 4259.0], [74.7, 4259.0], [74.8, 4259.0], [74.9, 4266.0], [75.0, 4266.0], [75.1, 4266.0], [75.2, 4266.0], [75.3, 4266.0], [75.4, 4269.0], [75.5, 4269.0], [75.6, 4269.0], [75.7, 4269.0], [75.8, 4269.0], [75.9, 4269.0], [76.0, 4269.0], [76.1, 4269.0], [76.2, 4285.0], [76.3, 4285.0], [76.4, 4285.0], [76.5, 4285.0], [76.6, 4285.0], [76.7, 4288.0], [76.8, 4288.0], [76.9, 4288.0], [77.0, 4288.0], [77.1, 4309.0], [77.2, 4309.0], [77.3, 4309.0], [77.4, 4309.0], [77.5, 4314.0], [77.6, 4314.0], [77.7, 4314.0], [77.8, 4314.0], [77.9, 4314.0], [78.0, 4315.0], [78.1, 4315.0], [78.2, 4315.0], [78.3, 4315.0], [78.4, 4316.0], [78.5, 4316.0], [78.6, 4316.0], [78.7, 4316.0], [78.8, 4359.0], [78.9, 4359.0], [79.0, 4359.0], [79.1, 4359.0], [79.2, 4359.0], [79.3, 4380.0], [79.4, 4380.0], [79.5, 4380.0], [79.6, 4380.0], [79.7, 4390.0], [79.8, 4390.0], [79.9, 4390.0], [80.0, 4390.0], [80.1, 4406.0], [80.2, 4406.0], [80.3, 4406.0], [80.4, 4406.0], [80.5, 4406.0], [80.6, 4407.0], [80.7, 4407.0], [80.8, 4407.0], [80.9, 4407.0], [81.0, 4423.0], [81.1, 4423.0], [81.2, 4423.0], [81.3, 4423.0], [81.4, 4424.0], [81.5, 4424.0], [81.6, 4424.0], [81.7, 4424.0], [81.8, 4424.0], [81.9, 4425.0], [82.0, 4425.0], [82.1, 4425.0], [82.2, 4425.0], [82.3, 4425.0], [82.4, 4425.0], [82.5, 4425.0], [82.6, 4425.0], [82.7, 4426.0], [82.8, 4426.0], [82.9, 4426.0], [83.0, 4426.0], [83.1, 4426.0], [83.2, 4429.0], [83.3, 4429.0], [83.4, 4429.0], [83.5, 4429.0], [83.6, 4433.0], [83.7, 4433.0], [83.8, 4433.0], [83.9, 4433.0], [84.0, 4445.0], [84.1, 4445.0], [84.2, 4445.0], [84.3, 4445.0], [84.4, 4445.0], [84.5, 4482.0], [84.6, 4482.0], [84.7, 4482.0], [84.8, 4482.0], [84.9, 4495.0], [85.0, 4495.0], [85.1, 4495.0], [85.2, 4495.0], [85.3, 4496.0], [85.4, 4496.0], [85.5, 4496.0], [85.6, 4496.0], [85.7, 4496.0], [85.8, 4530.0], [85.9, 4530.0], [86.0, 4530.0], [86.1, 4530.0], [86.2, 4560.0], [86.3, 4560.0], [86.4, 4560.0], [86.5, 4560.0], [86.6, 4562.0], [86.7, 4562.0], [86.8, 4562.0], [86.9, 4562.0], [87.0, 4562.0], [87.1, 4582.0], [87.2, 4582.0], [87.3, 4582.0], [87.4, 4582.0], [87.5, 4592.0], [87.6, 4592.0], [87.7, 4592.0], [87.8, 4592.0], [87.9, 4598.0], [88.0, 4598.0], [88.1, 4598.0], [88.2, 4598.0], [88.3, 4598.0], [88.4, 4599.0], [88.5, 4599.0], [88.6, 4599.0], [88.7, 4599.0], [88.8, 4618.0], [88.9, 4618.0], [89.0, 4618.0], [89.1, 4618.0], [89.2, 4627.0], [89.3, 4627.0], [89.4, 4627.0], [89.5, 4627.0], [89.6, 4627.0], [89.7, 4633.0], [89.8, 4633.0], [89.9, 4633.0], [90.0, 4633.0], [90.1, 4635.0], [90.2, 4635.0], [90.3, 4635.0], [90.4, 4635.0], [90.5, 4642.0], [90.6, 4642.0], [90.7, 4642.0], [90.8, 4642.0], [90.9, 4642.0], [91.0, 4646.0], [91.1, 4646.0], [91.2, 4646.0], [91.3, 4646.0], [91.4, 4649.0], [91.5, 4649.0], [91.6, 4649.0], [91.7, 4649.0], [91.8, 4656.0], [91.9, 4656.0], [92.0, 4656.0], [92.1, 4656.0], [92.2, 4656.0], [92.3, 4663.0], [92.4, 4663.0], [92.5, 4663.0], [92.6, 4663.0], [92.7, 4665.0], [92.8, 4665.0], [92.9, 4665.0], [93.0, 4665.0], [93.1, 4673.0], [93.2, 4673.0], [93.3, 4673.0], [93.4, 4673.0], [93.5, 4673.0], [93.6, 4675.0], [93.7, 4675.0], [93.8, 4675.0], [93.9, 4675.0], [94.0, 4676.0], [94.1, 4676.0], [94.2, 4676.0], [94.3, 4676.0], [94.4, 4680.0], [94.5, 4680.0], [94.6, 4680.0], [94.7, 4680.0], [94.8, 4680.0], [94.9, 4680.0], [95.0, 4680.0], [95.1, 4680.0], [95.2, 4680.0], [95.3, 4694.0], [95.4, 4694.0], [95.5, 4694.0], [95.6, 4694.0], [95.7, 4701.0], [95.8, 4701.0], [95.9, 4701.0], [96.0, 4701.0], [96.1, 4701.0], [96.2, 5079.0], [96.3, 5079.0], [96.4, 5079.0], [96.5, 5079.0], [96.6, 5261.0], [96.7, 5261.0], [96.8, 5261.0], [96.9, 5261.0], [97.0, 5335.0], [97.1, 5335.0], [97.2, 5335.0], [97.3, 5335.0], [97.4, 5335.0], [97.5, 5396.0], [97.6, 5396.0], [97.7, 5396.0], [97.8, 5396.0], [97.9, 5727.0], [98.0, 5727.0], [98.1, 5727.0], [98.2, 5727.0], [98.3, 5928.0], [98.4, 5928.0], [98.5, 5928.0], [98.6, 5928.0], [98.7, 5928.0], [98.8, 6335.0], [98.9, 6335.0], [99.0, 6335.0], [99.1, 6335.0], [99.2, 6387.0], [99.3, 6387.0], [99.4, 6387.0], [99.5, 6387.0], [99.6, 6737.0], [99.7, 6737.0], [99.8, 6737.0], [99.9, 6737.0], [100.0, 6737.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 16.0, "series": [{"data": [[600.0, 4.0], [700.0, 3.0], [800.0, 1.0], [900.0, 5.0], [1000.0, 9.0], [1100.0, 10.0], [1200.0, 7.0], [1300.0, 4.0], [1400.0, 7.0], [1500.0, 2.0], [1600.0, 9.0], [1700.0, 11.0], [1800.0, 2.0], [1900.0, 2.0], [2800.0, 2.0], [2900.0, 3.0], [3100.0, 1.0], [200.0, 14.0], [3500.0, 2.0], [3700.0, 2.0], [3800.0, 2.0], [3900.0, 3.0], [4000.0, 14.0], [4100.0, 12.0], [4300.0, 7.0], [4200.0, 10.0], [4400.0, 13.0], [4500.0, 7.0], [4600.0, 16.0], [300.0, 16.0], [4700.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5200.0, 1.0], [5700.0, 1.0], [5900.0, 1.0], [6300.0, 2.0], [400.0, 16.0], [6700.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 30.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 201.0, "series": [{"data": [[0.0, 30.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 201.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 112.25541125541136, "minX": 1.60320024E12, "maxY": 112.25541125541136, "series": [{"data": [[1.60320024E12, 112.25541125541136]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group - SpikeTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320024E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 267.0, "minX": 1.0, "maxY": 6737.0, "series": [{"data": [[2.0, 2925.0], [3.0, 3148.0], [4.0, 6737.0], [5.0, 3563.0], [6.0, 2851.0], [7.0, 2920.0], [8.0, 6387.0], [9.0, 6335.0], [10.0, 5928.0], [11.0, 1986.0], [12.0, 1746.0], [13.0, 1611.0], [14.0, 1424.0], [15.0, 2987.0], [16.0, 1708.0], [17.0, 1599.0], [18.0, 5727.0], [19.0, 1610.0], [20.0, 1957.0], [21.0, 1267.0], [22.0, 1768.0], [23.0, 5396.0], [24.0, 5261.0], [25.0, 5335.0], [26.0, 1763.0], [27.0, 4701.0], [28.0, 5079.0], [29.0, 1655.0], [30.0, 1224.0], [31.0, 1006.0], [33.0, 1674.0], [32.0, 312.0], [35.0, 339.0], [34.0, 1731.0], [37.0, 320.0], [36.0, 267.0], [39.0, 433.0], [38.0, 280.0], [41.0, 1210.0], [43.0, 2481.0], [45.0, 4166.0], [44.0, 4315.0], [47.0, 4314.0], [49.0, 4678.333333333333], [53.0, 4419.5], [52.0, 4424.0], [54.0, 4669.0], [56.0, 4101.0], [58.0, 4173.0], [60.0, 3199.0], [63.0, 279.0], [67.0, 4381.0], [66.0, 4063.0], [65.0, 3887.0], [64.0, 4649.0], [70.0, 2328.0], [75.0, 4238.0], [74.0, 4642.0], [72.0, 4402.0], [78.0, 4178.0], [77.0, 4476.5], [82.0, 279.0], [81.0, 4564.666666666667], [80.0, 4627.0], [87.0, 4259.0], [86.0, 269.0], [84.0, 4425.0], [91.0, 4261.0], [89.0, 1278.0], [88.0, 342.0], [95.0, 4595.5], [93.0, 2505.0], [99.0, 4482.0], [97.0, 4063.0], [103.0, 4445.0], [102.0, 4230.0], [100.0, 4086.5], [107.0, 4064.0], [106.0, 3059.3333333333335], [105.0, 353.0], [111.0, 4427.0], [109.0, 4560.0], [115.0, 4231.333333333333], [114.0, 3983.0], [112.0, 4433.0], [117.0, 322.0], [123.0, 3100.0], [122.0, 2852.0], [120.0, 313.0], [127.0, 1088.0], [126.0, 1762.5], [125.0, 4380.0], [124.0, 1813.0], [134.0, 1599.0], [133.0, 1730.0], [132.0, 2979.0], [129.0, 4496.0], [128.0, 1703.0], [142.0, 1121.0], [141.0, 1389.0], [140.0, 2265.6666666666665], [137.0, 1759.0], [136.0, 955.5], [150.0, 756.5], [148.0, 1336.0], [146.0, 987.0], [145.0, 1269.5], [144.0, 1462.0], [159.0, 1166.5], [157.0, 610.0], [156.0, 1134.0], [154.0, 463.0], [152.0, 1696.3333333333335], [167.0, 895.5], [164.0, 787.0], [174.0, 4169.0], [173.0, 411.0], [172.0, 376.0], [171.0, 292.0], [170.0, 965.3333333333334], [169.0, 2960.3333333333335], [168.0, 585.0], [183.0, 1005.875], [180.0, 374.3333333333333], [178.0, 4133.0], [176.0, 898.5], [191.0, 4089.0], [190.0, 267.0], [189.0, 1228.0], [188.0, 405.0], [187.0, 4156.0], [186.0, 385.0], [185.0, 420.5], [184.0, 2593.5], [199.0, 2217.5], [198.0, 1526.0], [196.0, 3598.0], [195.0, 1952.3333333333335], [194.0, 2748.3333333333335], [193.0, 2261.0], [192.0, 760.0], [200.0, 1123.8333333333333], [1.0, 2840.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[112.2510822510822, 2475.0303030303044]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 442.75, "minX": 1.60320024E12, "maxY": 12427.8, "series": [{"data": [[1.60320024E12, 12427.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60320024E12, 442.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320024E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2475.0303030303044, "minX": 1.60320024E12, "maxY": 2475.0303030303044, "series": [{"data": [[1.60320024E12, 2475.0303030303044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320024E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2462.891774891776, "minX": 1.60320024E12, "maxY": 2462.891774891776, "series": [{"data": [[1.60320024E12, 2462.891774891776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320024E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 904.5800865800862, "minX": 1.60320024E12, "maxY": 904.5800865800862, "series": [{"data": [[1.60320024E12, 904.5800865800862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320024E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 267.0, "minX": 1.60320024E12, "maxY": 394.0, "series": [{"data": [[1.60320024E12, 394.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60320024E12, 267.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60320024E12, 267.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60320024E12, 267.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60320024E12, 267.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60320024E12, 301.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320024E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 301.5, "minX": 3.0, "maxY": 4745.5, "series": [{"data": [[200.0, 301.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 4745.5], [20.0, 1754.5], [3.0, 2925.0], [200.0, 3760.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 299.0, "minX": 3.0, "maxY": 4745.0, "series": [{"data": [[200.0, 299.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 4745.0], [20.0, 1753.5], [3.0, 2924.0], [200.0, 3760.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.85, "minX": 1.60320024E12, "maxY": 3.85, "series": [{"data": [[1.60320024E12, 3.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.85, "minX": 1.60320024E12, "maxY": 3.85, "series": [{"data": [[1.60320024E12, 3.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320024E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60320024E12, "maxY": 3.35, "series": [{"data": [[1.60320024E12, 3.35]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.60320024E12, 0.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320024E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5, "minX": 1.60320024E12, "maxY": 3.35, "series": [{"data": [[1.60320024E12, 0.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60320024E12, 3.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320024E12, "title": "Total Transactions Per Second"}},
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

