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
        data: {"result": {"minY": 280.0, "minX": 0.0, "maxY": 8372.0, "series": [{"data": [[0.0, 280.0], [0.1, 280.0], [0.2, 280.0], [0.3, 283.0], [0.4, 283.0], [0.5, 285.0], [0.6, 285.0], [0.7, 285.0], [0.8, 288.0], [0.9, 288.0], [1.0, 288.0], [1.1, 288.0], [1.2, 288.0], [1.3, 288.0], [1.4, 288.0], [1.5, 290.0], [1.6, 290.0], [1.7, 290.0], [1.8, 293.0], [1.9, 293.0], [2.0, 293.0], [2.1, 293.0], [2.2, 293.0], [2.3, 294.0], [2.4, 294.0], [2.5, 298.0], [2.6, 298.0], [2.7, 298.0], [2.8, 298.0], [2.9, 298.0], [3.0, 299.0], [3.1, 299.0], [3.2, 299.0], [3.3, 300.0], [3.4, 300.0], [3.5, 303.0], [3.6, 303.0], [3.7, 303.0], [3.8, 303.0], [3.9, 303.0], [4.0, 304.0], [4.1, 304.0], [4.2, 304.0], [4.3, 306.0], [4.4, 306.0], [4.5, 306.0], [4.6, 306.0], [4.7, 306.0], [4.8, 307.0], [4.9, 307.0], [5.0, 307.0], [5.1, 307.0], [5.2, 307.0], [5.3, 308.0], [5.4, 308.0], [5.5, 308.0], [5.6, 308.0], [5.7, 308.0], [5.8, 309.0], [5.9, 309.0], [6.0, 311.0], [6.1, 311.0], [6.2, 311.0], [6.3, 312.0], [6.4, 312.0], [6.5, 312.0], [6.6, 312.0], [6.7, 312.0], [6.8, 313.0], [6.9, 313.0], [7.0, 313.0], [7.1, 313.0], [7.2, 313.0], [7.3, 314.0], [7.4, 314.0], [7.5, 314.0], [7.6, 314.0], [7.7, 314.0], [7.8, 314.0], [7.9, 314.0], [8.0, 315.0], [8.1, 315.0], [8.2, 315.0], [8.3, 317.0], [8.4, 317.0], [8.5, 317.0], [8.6, 317.0], [8.7, 317.0], [8.8, 318.0], [8.9, 318.0], [9.0, 318.0], [9.1, 318.0], [9.2, 318.0], [9.3, 319.0], [9.4, 319.0], [9.5, 320.0], [9.6, 320.0], [9.7, 320.0], [9.8, 321.0], [9.9, 321.0], [10.0, 322.0], [10.1, 322.0], [10.2, 322.0], [10.3, 323.0], [10.4, 323.0], [10.5, 324.0], [10.6, 324.0], [10.7, 324.0], [10.8, 326.0], [10.9, 326.0], [11.0, 326.0], [11.1, 326.0], [11.2, 326.0], [11.3, 326.0], [11.4, 326.0], [11.5, 331.0], [11.6, 331.0], [11.7, 331.0], [11.8, 331.0], [11.9, 331.0], [12.0, 332.0], [12.1, 332.0], [12.2, 332.0], [12.3, 332.0], [12.4, 332.0], [12.5, 333.0], [12.6, 333.0], [12.7, 333.0], [12.8, 333.0], [12.9, 333.0], [13.0, 334.0], [13.1, 334.0], [13.2, 334.0], [13.3, 334.0], [13.4, 334.0], [13.5, 335.0], [13.6, 335.0], [13.7, 335.0], [13.8, 337.0], [13.9, 337.0], [14.0, 339.0], [14.1, 339.0], [14.2, 339.0], [14.3, 342.0], [14.4, 342.0], [14.5, 342.0], [14.6, 342.0], [14.7, 342.0], [14.8, 342.0], [14.9, 342.0], [15.0, 344.0], [15.1, 344.0], [15.2, 344.0], [15.3, 348.0], [15.4, 348.0], [15.5, 349.0], [15.6, 349.0], [15.7, 349.0], [15.8, 350.0], [15.9, 350.0], [16.0, 350.0], [16.1, 350.0], [16.2, 350.0], [16.3, 350.0], [16.4, 350.0], [16.5, 352.0], [16.6, 352.0], [16.7, 352.0], [16.8, 352.0], [16.9, 352.0], [17.0, 357.0], [17.1, 357.0], [17.2, 357.0], [17.3, 361.0], [17.4, 361.0], [17.5, 363.0], [17.6, 363.0], [17.7, 363.0], [17.8, 366.0], [17.9, 366.0], [18.0, 367.0], [18.1, 367.0], [18.2, 367.0], [18.3, 367.0], [18.4, 367.0], [18.5, 367.0], [18.6, 367.0], [18.7, 367.0], [18.8, 370.0], [18.9, 370.0], [19.0, 372.0], [19.1, 372.0], [19.2, 372.0], [19.3, 372.0], [19.4, 372.0], [19.5, 373.0], [19.6, 373.0], [19.7, 373.0], [19.8, 373.0], [19.9, 373.0], [20.0, 374.0], [20.1, 374.0], [20.2, 376.0], [20.3, 376.0], [20.4, 376.0], [20.5, 376.0], [20.6, 376.0], [20.7, 377.0], [20.8, 377.0], [20.9, 377.0], [21.0, 380.0], [21.1, 380.0], [21.2, 381.0], [21.3, 381.0], [21.4, 381.0], [21.5, 384.0], [21.6, 384.0], [21.7, 388.0], [21.8, 388.0], [21.9, 388.0], [22.0, 390.0], [22.1, 390.0], [22.2, 391.0], [22.3, 391.0], [22.4, 391.0], [22.5, 391.0], [22.6, 391.0], [22.7, 398.0], [22.8, 398.0], [22.9, 398.0], [23.0, 400.0], [23.1, 400.0], [23.2, 408.0], [23.3, 408.0], [23.4, 408.0], [23.5, 409.0], [23.6, 409.0], [23.7, 419.0], [23.8, 419.0], [23.9, 419.0], [24.0, 420.0], [24.1, 420.0], [24.2, 422.0], [24.3, 422.0], [24.4, 422.0], [24.5, 422.0], [24.6, 422.0], [24.7, 423.0], [24.8, 423.0], [24.9, 423.0], [25.0, 424.0], [25.1, 424.0], [25.2, 424.0], [25.3, 424.0], [25.4, 424.0], [25.5, 425.0], [25.6, 425.0], [25.7, 429.0], [25.8, 429.0], [25.9, 429.0], [26.0, 431.0], [26.1, 431.0], [26.2, 432.0], [26.3, 432.0], [26.4, 432.0], [26.5, 435.0], [26.6, 435.0], [26.7, 437.0], [26.8, 437.0], [26.9, 437.0], [27.0, 437.0], [27.1, 437.0], [27.2, 438.0], [27.3, 438.0], [27.4, 438.0], [27.5, 443.0], [27.6, 443.0], [27.7, 445.0], [27.8, 445.0], [27.9, 445.0], [28.0, 450.0], [28.1, 450.0], [28.2, 456.0], [28.3, 456.0], [28.4, 456.0], [28.5, 457.0], [28.6, 457.0], [28.7, 460.0], [28.8, 460.0], [28.9, 460.0], [29.0, 460.0], [29.1, 460.0], [29.2, 461.0], [29.3, 461.0], [29.4, 461.0], [29.5, 471.0], [29.6, 471.0], [29.7, 472.0], [29.8, 472.0], [29.9, 472.0], [30.0, 473.0], [30.1, 473.0], [30.2, 474.0], [30.3, 474.0], [30.4, 474.0], [30.5, 476.0], [30.6, 476.0], [30.7, 477.0], [30.8, 477.0], [30.9, 477.0], [31.0, 479.0], [31.1, 479.0], [31.2, 481.0], [31.3, 481.0], [31.4, 481.0], [31.5, 482.0], [31.6, 482.0], [31.7, 485.0], [31.8, 485.0], [31.9, 485.0], [32.0, 485.0], [32.1, 485.0], [32.2, 485.0], [32.3, 485.0], [32.4, 485.0], [32.5, 491.0], [32.6, 491.0], [32.7, 492.0], [32.8, 492.0], [32.9, 492.0], [33.0, 493.0], [33.1, 493.0], [33.2, 495.0], [33.3, 495.0], [33.4, 495.0], [33.5, 499.0], [33.6, 499.0], [33.7, 503.0], [33.8, 503.0], [33.9, 503.0], [34.0, 505.0], [34.1, 505.0], [34.2, 505.0], [34.3, 505.0], [34.4, 505.0], [34.5, 506.0], [34.6, 506.0], [34.7, 509.0], [34.8, 509.0], [34.9, 509.0], [35.0, 517.0], [35.1, 517.0], [35.2, 521.0], [35.3, 521.0], [35.4, 521.0], [35.5, 524.0], [35.6, 524.0], [35.7, 528.0], [35.8, 528.0], [35.9, 528.0], [36.0, 541.0], [36.1, 541.0], [36.2, 549.0], [36.3, 549.0], [36.4, 549.0], [36.5, 549.0], [36.6, 549.0], [36.7, 553.0], [36.8, 553.0], [36.9, 553.0], [37.0, 557.0], [37.1, 557.0], [37.2, 567.0], [37.3, 567.0], [37.4, 567.0], [37.5, 578.0], [37.6, 578.0], [37.7, 579.0], [37.8, 579.0], [37.9, 579.0], [38.0, 608.0], [38.1, 608.0], [38.2, 613.0], [38.3, 613.0], [38.4, 613.0], [38.5, 627.0], [38.6, 627.0], [38.7, 639.0], [38.8, 639.0], [38.9, 639.0], [39.0, 640.0], [39.1, 640.0], [39.2, 642.0], [39.3, 642.0], [39.4, 642.0], [39.5, 649.0], [39.6, 649.0], [39.7, 650.0], [39.8, 650.0], [39.9, 650.0], [40.0, 659.0], [40.1, 659.0], [40.2, 664.0], [40.3, 664.0], [40.4, 665.0], [40.5, 665.0], [40.6, 665.0], [40.7, 683.0], [40.8, 683.0], [40.9, 692.0], [41.0, 692.0], [41.1, 692.0], [41.2, 693.0], [41.3, 693.0], [41.4, 696.0], [41.5, 696.0], [41.6, 696.0], [41.7, 725.0], [41.8, 725.0], [41.9, 733.0], [42.0, 733.0], [42.1, 733.0], [42.2, 733.0], [42.3, 733.0], [42.4, 739.0], [42.5, 739.0], [42.6, 739.0], [42.7, 774.0], [42.8, 774.0], [42.9, 790.0], [43.0, 790.0], [43.1, 790.0], [43.2, 796.0], [43.3, 796.0], [43.4, 797.0], [43.5, 797.0], [43.6, 797.0], [43.7, 812.0], [43.8, 812.0], [43.9, 820.0], [44.0, 820.0], [44.1, 820.0], [44.2, 830.0], [44.3, 830.0], [44.4, 844.0], [44.5, 844.0], [44.6, 844.0], [44.7, 847.0], [44.8, 847.0], [44.9, 870.0], [45.0, 870.0], [45.1, 870.0], [45.2, 874.0], [45.3, 874.0], [45.4, 875.0], [45.5, 875.0], [45.6, 875.0], [45.7, 906.0], [45.8, 906.0], [45.9, 906.0], [46.0, 906.0], [46.1, 906.0], [46.2, 914.0], [46.3, 914.0], [46.4, 917.0], [46.5, 917.0], [46.6, 917.0], [46.7, 933.0], [46.8, 933.0], [46.9, 942.0], [47.0, 942.0], [47.1, 942.0], [47.2, 979.0], [47.3, 979.0], [47.4, 980.0], [47.5, 980.0], [47.6, 980.0], [47.7, 990.0], [47.8, 990.0], [47.9, 998.0], [48.0, 998.0], [48.1, 998.0], [48.2, 1023.0], [48.3, 1023.0], [48.4, 1027.0], [48.5, 1027.0], [48.6, 1027.0], [48.7, 1040.0], [48.8, 1040.0], [48.9, 1044.0], [49.0, 1044.0], [49.1, 1044.0], [49.2, 1052.0], [49.3, 1052.0], [49.4, 1067.0], [49.5, 1067.0], [49.6, 1067.0], [49.7, 1088.0], [49.8, 1088.0], [49.9, 1094.0], [50.0, 1094.0], [50.1, 1094.0], [50.2, 1104.0], [50.3, 1104.0], [50.4, 1117.0], [50.5, 1117.0], [50.6, 1117.0], [50.7, 1151.0], [50.8, 1151.0], [50.9, 1161.0], [51.0, 1161.0], [51.1, 1161.0], [51.2, 1186.0], [51.3, 1186.0], [51.4, 1224.0], [51.5, 1224.0], [51.6, 1224.0], [51.7, 1232.0], [51.8, 1232.0], [51.9, 1276.0], [52.0, 1276.0], [52.1, 1276.0], [52.2, 1288.0], [52.3, 1288.0], [52.4, 1289.0], [52.5, 1289.0], [52.6, 1289.0], [52.7, 1290.0], [52.8, 1290.0], [52.9, 1296.0], [53.0, 1296.0], [53.1, 1296.0], [53.2, 1304.0], [53.3, 1304.0], [53.4, 1306.0], [53.5, 1306.0], [53.6, 1306.0], [53.7, 1312.0], [53.8, 1312.0], [53.9, 1320.0], [54.0, 1320.0], [54.1, 1320.0], [54.2, 1321.0], [54.3, 1321.0], [54.4, 1325.0], [54.5, 1325.0], [54.6, 1325.0], [54.7, 1343.0], [54.8, 1343.0], [54.9, 1370.0], [55.0, 1370.0], [55.1, 1370.0], [55.2, 1415.0], [55.3, 1415.0], [55.4, 1423.0], [55.5, 1423.0], [55.6, 1423.0], [55.7, 1425.0], [55.8, 1425.0], [55.9, 1426.0], [56.0, 1426.0], [56.1, 1426.0], [56.2, 1437.0], [56.3, 1437.0], [56.4, 1447.0], [56.5, 1447.0], [56.6, 1447.0], [56.7, 1455.0], [56.8, 1455.0], [56.9, 1456.0], [57.0, 1456.0], [57.1, 1456.0], [57.2, 1465.0], [57.3, 1465.0], [57.4, 1484.0], [57.5, 1484.0], [57.6, 1484.0], [57.7, 1492.0], [57.8, 1492.0], [57.9, 1508.0], [58.0, 1508.0], [58.1, 1508.0], [58.2, 1526.0], [58.3, 1526.0], [58.4, 1529.0], [58.5, 1529.0], [58.6, 1529.0], [58.7, 1558.0], [58.8, 1558.0], [58.9, 1572.0], [59.0, 1572.0], [59.1, 1572.0], [59.2, 1591.0], [59.3, 1591.0], [59.4, 1613.0], [59.5, 1613.0], [59.6, 1613.0], [59.7, 1619.0], [59.8, 1619.0], [59.9, 1628.0], [60.0, 1628.0], [60.1, 1632.0], [60.2, 1632.0], [60.3, 1632.0], [60.4, 1638.0], [60.5, 1638.0], [60.6, 1641.0], [60.7, 1641.0], [60.8, 1641.0], [60.9, 1645.0], [61.0, 1645.0], [61.1, 1649.0], [61.2, 1649.0], [61.3, 1649.0], [61.4, 1681.0], [61.5, 1681.0], [61.6, 1683.0], [61.7, 1683.0], [61.8, 1683.0], [61.9, 1703.0], [62.0, 1703.0], [62.1, 1738.0], [62.2, 1738.0], [62.3, 1738.0], [62.4, 1744.0], [62.5, 1744.0], [62.6, 1771.0], [62.7, 1771.0], [62.8, 1771.0], [62.9, 1785.0], [63.0, 1785.0], [63.1, 1791.0], [63.2, 1791.0], [63.3, 1791.0], [63.4, 1795.0], [63.5, 1795.0], [63.6, 1836.0], [63.7, 1836.0], [63.8, 1836.0], [63.9, 1840.0], [64.0, 1840.0], [64.1, 1856.0], [64.2, 1856.0], [64.3, 1856.0], [64.4, 1862.0], [64.5, 1862.0], [64.6, 1913.0], [64.7, 1913.0], [64.8, 1913.0], [64.9, 1928.0], [65.0, 1928.0], [65.1, 1935.0], [65.2, 1935.0], [65.3, 1935.0], [65.4, 1949.0], [65.5, 1949.0], [65.6, 1952.0], [65.7, 1952.0], [65.8, 1952.0], [65.9, 1965.0], [66.0, 1965.0], [66.1, 2002.0], [66.2, 2002.0], [66.3, 2002.0], [66.4, 2007.0], [66.5, 2007.0], [66.6, 2017.0], [66.7, 2017.0], [66.8, 2017.0], [66.9, 2023.0], [67.0, 2023.0], [67.1, 2024.0], [67.2, 2024.0], [67.3, 2024.0], [67.4, 2028.0], [67.5, 2028.0], [67.6, 2036.0], [67.7, 2036.0], [67.8, 2036.0], [67.9, 2046.0], [68.0, 2046.0], [68.1, 2048.0], [68.2, 2048.0], [68.3, 2048.0], [68.4, 2059.0], [68.5, 2059.0], [68.6, 2088.0], [68.7, 2088.0], [68.8, 2088.0], [68.9, 2094.0], [69.0, 2094.0], [69.1, 2163.0], [69.2, 2163.0], [69.3, 2163.0], [69.4, 2242.0], [69.5, 2242.0], [69.6, 2270.0], [69.7, 2270.0], [69.8, 2270.0], [69.9, 2272.0], [70.0, 2272.0], [70.1, 2277.0], [70.2, 2277.0], [70.3, 2277.0], [70.4, 2322.0], [70.5, 2322.0], [70.6, 2323.0], [70.7, 2323.0], [70.8, 2323.0], [70.9, 2338.0], [71.0, 2338.0], [71.1, 2341.0], [71.2, 2341.0], [71.3, 2341.0], [71.4, 2365.0], [71.5, 2365.0], [71.6, 2393.0], [71.7, 2393.0], [71.8, 2393.0], [71.9, 2400.0], [72.0, 2400.0], [72.1, 2445.0], [72.2, 2445.0], [72.3, 2445.0], [72.4, 2491.0], [72.5, 2491.0], [72.6, 2496.0], [72.7, 2496.0], [72.8, 2496.0], [72.9, 2498.0], [73.0, 2498.0], [73.1, 2503.0], [73.2, 2503.0], [73.3, 2503.0], [73.4, 2507.0], [73.5, 2507.0], [73.6, 2533.0], [73.7, 2533.0], [73.8, 2533.0], [73.9, 2560.0], [74.0, 2560.0], [74.1, 2564.0], [74.2, 2564.0], [74.3, 2564.0], [74.4, 2571.0], [74.5, 2571.0], [74.6, 2603.0], [74.7, 2603.0], [74.8, 2603.0], [74.9, 2605.0], [75.0, 2605.0], [75.1, 2607.0], [75.2, 2607.0], [75.3, 2607.0], [75.4, 2607.0], [75.5, 2607.0], [75.6, 2628.0], [75.7, 2628.0], [75.8, 2628.0], [75.9, 2648.0], [76.0, 2648.0], [76.1, 2648.0], [76.2, 2648.0], [76.3, 2648.0], [76.4, 2689.0], [76.5, 2689.0], [76.6, 2695.0], [76.7, 2695.0], [76.8, 2695.0], [76.9, 2712.0], [77.0, 2712.0], [77.1, 2712.0], [77.2, 2712.0], [77.3, 2712.0], [77.4, 2724.0], [77.5, 2724.0], [77.6, 2736.0], [77.7, 2736.0], [77.8, 2736.0], [77.9, 2769.0], [78.0, 2769.0], [78.1, 2801.0], [78.2, 2801.0], [78.3, 2801.0], [78.4, 2802.0], [78.5, 2802.0], [78.6, 2816.0], [78.7, 2816.0], [78.8, 2816.0], [78.9, 2823.0], [79.0, 2823.0], [79.1, 2837.0], [79.2, 2837.0], [79.3, 2837.0], [79.4, 2839.0], [79.5, 2839.0], [79.6, 2849.0], [79.7, 2849.0], [79.8, 2849.0], [79.9, 2854.0], [80.0, 2854.0], [80.1, 2871.0], [80.2, 2871.0], [80.3, 2944.0], [80.4, 2944.0], [80.5, 2944.0], [80.6, 2959.0], [80.7, 2959.0], [80.8, 2966.0], [80.9, 2966.0], [81.0, 2966.0], [81.1, 2973.0], [81.2, 2973.0], [81.3, 2977.0], [81.4, 2977.0], [81.5, 2977.0], [81.6, 3007.0], [81.7, 3007.0], [81.8, 3095.0], [81.9, 3095.0], [82.0, 3095.0], [82.1, 3136.0], [82.2, 3136.0], [82.3, 3148.0], [82.4, 3148.0], [82.5, 3148.0], [82.6, 3212.0], [82.7, 3212.0], [82.8, 3222.0], [82.9, 3222.0], [83.0, 3222.0], [83.1, 3225.0], [83.2, 3225.0], [83.3, 3236.0], [83.4, 3236.0], [83.5, 3236.0], [83.6, 3242.0], [83.7, 3242.0], [83.8, 3440.0], [83.9, 3440.0], [84.0, 3440.0], [84.1, 3595.0], [84.2, 3595.0], [84.3, 3677.0], [84.4, 3677.0], [84.5, 3677.0], [84.6, 3683.0], [84.7, 3683.0], [84.8, 3734.0], [84.9, 3734.0], [85.0, 3734.0], [85.1, 3738.0], [85.2, 3738.0], [85.3, 3784.0], [85.4, 3784.0], [85.5, 3784.0], [85.6, 3813.0], [85.7, 3813.0], [85.8, 3832.0], [85.9, 3832.0], [86.0, 3832.0], [86.1, 3900.0], [86.2, 3900.0], [86.3, 3902.0], [86.4, 3902.0], [86.5, 3902.0], [86.6, 3949.0], [86.7, 3949.0], [86.8, 3976.0], [86.9, 3976.0], [87.0, 3976.0], [87.1, 4406.0], [87.2, 4406.0], [87.3, 4406.0], [87.4, 4406.0], [87.5, 4406.0], [87.6, 4410.0], [87.7, 4410.0], [87.8, 4477.0], [87.9, 4477.0], [88.0, 4477.0], [88.1, 4489.0], [88.2, 4489.0], [88.3, 4518.0], [88.4, 4518.0], [88.5, 4518.0], [88.6, 4534.0], [88.7, 4534.0], [88.8, 4542.0], [88.9, 4542.0], [89.0, 4542.0], [89.1, 4569.0], [89.2, 4569.0], [89.3, 4589.0], [89.4, 4589.0], [89.5, 4589.0], [89.6, 4591.0], [89.7, 4591.0], [89.8, 4605.0], [89.9, 4605.0], [90.0, 4605.0], [90.1, 4774.0], [90.2, 4774.0], [90.3, 4794.0], [90.4, 4794.0], [90.5, 4794.0], [90.6, 4821.0], [90.7, 4821.0], [90.8, 4831.0], [90.9, 4831.0], [91.0, 4831.0], [91.1, 4870.0], [91.2, 4870.0], [91.3, 4923.0], [91.4, 4923.0], [91.5, 4923.0], [91.6, 4996.0], [91.7, 4996.0], [91.8, 5010.0], [91.9, 5010.0], [92.0, 5010.0], [92.1, 5066.0], [92.2, 5066.0], [92.3, 5149.0], [92.4, 5149.0], [92.5, 5149.0], [92.6, 5209.0], [92.7, 5209.0], [92.8, 5612.0], [92.9, 5612.0], [93.0, 5612.0], [93.1, 5623.0], [93.2, 5623.0], [93.3, 5723.0], [93.4, 5723.0], [93.5, 5723.0], [93.6, 5750.0], [93.7, 5750.0], [93.8, 5842.0], [93.9, 5842.0], [94.0, 5842.0], [94.1, 5927.0], [94.2, 5927.0], [94.3, 5966.0], [94.4, 5966.0], [94.5, 5966.0], [94.6, 6224.0], [94.7, 6224.0], [94.8, 6309.0], [94.9, 6309.0], [95.0, 6309.0], [95.1, 6342.0], [95.2, 6342.0], [95.3, 6399.0], [95.4, 6399.0], [95.5, 6399.0], [95.6, 6520.0], [95.7, 6520.0], [95.8, 6548.0], [95.9, 6548.0], [96.0, 6548.0], [96.1, 6580.0], [96.2, 6580.0], [96.3, 6626.0], [96.4, 6626.0], [96.5, 6626.0], [96.6, 6637.0], [96.7, 6637.0], [96.8, 6687.0], [96.9, 6687.0], [97.0, 6687.0], [97.1, 6705.0], [97.2, 6705.0], [97.3, 6709.0], [97.4, 6709.0], [97.5, 6709.0], [97.6, 6715.0], [97.7, 6715.0], [97.8, 6723.0], [97.9, 6723.0], [98.0, 6723.0], [98.1, 6752.0], [98.2, 6752.0], [98.3, 6777.0], [98.4, 6777.0], [98.5, 6777.0], [98.6, 6802.0], [98.7, 6802.0], [98.8, 6907.0], [98.9, 6907.0], [99.0, 6907.0], [99.1, 6984.0], [99.2, 6984.0], [99.3, 7331.0], [99.4, 7331.0], [99.5, 7331.0], [99.6, 7447.0], [99.7, 7447.0], [99.8, 8372.0], [99.9, 8372.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 79.0, "series": [{"data": [[600.0, 15.0], [700.0, 8.0], [800.0, 8.0], [900.0, 10.0], [1000.0, 8.0], [1100.0, 5.0], [1200.0, 7.0], [1300.0, 8.0], [1400.0, 11.0], [1500.0, 6.0], [1600.0, 10.0], [1700.0, 7.0], [1800.0, 4.0], [1900.0, 6.0], [2000.0, 12.0], [2100.0, 1.0], [2300.0, 6.0], [2200.0, 4.0], [2400.0, 5.0], [2500.0, 6.0], [2600.0, 9.0], [2700.0, 5.0], [2800.0, 9.0], [2900.0, 5.0], [3000.0, 2.0], [3100.0, 2.0], [3200.0, 5.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 2.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 4.0], [4400.0, 5.0], [4500.0, 6.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 3.0], [5000.0, 2.0], [5100.0, 1.0], [4900.0, 2.0], [5200.0, 1.0], [5600.0, 2.0], [5700.0, 2.0], [5800.0, 1.0], [5900.0, 2.0], [6300.0, 3.0], [6200.0, 1.0], [6500.0, 3.0], [6600.0, 3.0], [6700.0, 6.0], [6800.0, 1.0], [6900.0, 2.0], [7300.0, 1.0], [7400.0, 1.0], [8300.0, 1.0], [200.0, 13.0], [300.0, 79.0], [400.0, 43.0], [500.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 93.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 308.0, "series": [{"data": [[0.0, 93.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 308.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.75, "minX": 1.60320006E12, "maxY": 78.74055415617127, "series": [{"data": [[1.60320006E12, 78.74055415617127], [1.60320012E12, 2.75]], "isOverall": false, "label": "BlazeMeterStressTest", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320012E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 294.0, "minX": 1.0, "maxY": 8372.0, "series": [{"data": [[3.0, 6835.5], [4.0, 7331.0], [6.0, 6797.0], [7.0, 6342.0], [8.0, 8372.0], [9.0, 6984.0], [10.0, 6580.0], [12.0, 6680.0], [13.0, 6715.0], [15.0, 6626.5], [16.0, 6626.0], [17.0, 6777.0], [18.0, 6520.0], [19.0, 6802.0], [20.0, 6752.0], [21.0, 6709.0], [22.0, 5927.0], [23.0, 6399.0], [24.0, 5966.0], [25.0, 5842.0], [26.0, 5750.0], [27.0, 5623.0], [28.0, 5612.0], [29.0, 3734.0], [30.0, 3813.0], [33.0, 3839.3333333333335], [35.0, 4164.5], [37.0, 4542.0], [36.0, 4518.0], [39.0, 4569.0], [38.0, 4489.0], [41.0, 3677.0], [40.0, 4477.0], [42.0, 4410.0], [45.0, 3683.0], [44.0, 4807.5], [47.0, 4794.0], [46.0, 3595.0], [49.0, 4821.0], [48.0, 4870.0], [51.0, 4923.0], [50.0, 3440.0], [53.0, 4920.5], [54.0, 4996.0], [56.0, 1121.9423076923078], [57.0, 4920.0], [59.0, 1771.3333333333335], [58.0, 3976.0], [61.0, 779.9999999999998], [60.0, 3236.0], [62.0, 1801.5], [63.0, 3148.0], [66.0, 1195.6666666666665], [67.0, 2837.0], [65.0, 4589.0], [64.0, 2849.0], [70.0, 3908.5], [71.0, 2607.0], [69.0, 2628.0], [68.0, 2648.0], [75.0, 1049.5], [74.0, 3949.0], [73.0, 2507.0], [72.0, 4534.0], [79.0, 751.6999999999999], [78.0, 2277.0], [77.0, 2242.0], [76.0, 3403.0], [81.0, 1205.5], [83.0, 2605.0], [82.0, 2028.0], [80.0, 1591.0], [87.0, 3095.0], [86.0, 2648.0], [85.0, 1952.0], [84.0, 2498.0], [89.0, 740.8571428571429], [90.0, 1407.2], [91.0, 3056.5], [88.0, 2973.0], [92.0, 1142.5384615384614], [93.0, 1646.0], [95.0, 1833.3333333333333], [96.0, 1164.8333333333335], [99.0, 1027.5], [98.0, 1957.3333333333333], [97.0, 1856.0], [100.0, 890.5], [103.0, 1102.25], [101.0, 1645.0], [106.0, 1279.0], [107.0, 2323.0], [105.0, 2272.0], [104.0, 1744.0], [111.0, 1529.0], [110.0, 2724.0], [109.0, 2802.0], [108.0, 2322.0], [115.0, 2218.0], [113.0, 3615.5], [116.0, 841.5], [119.0, 1224.0], [118.0, 1289.0], [117.0, 2839.0], [120.0, 1855.5], [123.0, 541.0], [122.0, 2341.0], [121.0, 2712.0], [127.0, 317.0], [126.0, 650.0], [125.0, 557.0], [124.0, 528.0], [135.0, 2046.0], [134.0, 352.0], [133.0, 314.0], [132.0, 942.0], [131.0, 659.0], [130.0, 306.0], [129.0, 380.0], [128.0, 326.0], [143.0, 2854.0], [142.0, 303.0], [141.0, 308.0], [140.0, 906.0], [139.0, 2365.0], [138.0, 294.0], [137.0, 587.0], [145.0, 1066.6666666666667], [144.0, 305.5], [148.0, 570.0], [147.0, 498.0], [146.0, 605.6666666666666], [151.0, 357.5], [150.0, 859.5], [153.0, 874.5], [152.0, 582.0], [156.0, 823.5], [157.0, 812.6], [155.0, 317.0], [154.0, 1300.5], [158.0, 809.0], [159.0, 473.25], [160.0, 333.0], [1.0, 6309.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[77.98254364089775, 1817.2219451371584]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 160.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7.666666666666667, "minX": 1.60320006E12, "maxY": 21358.666666666668, "series": [{"data": [[1.60320006E12, 21358.666666666668], [1.60320012E12, 215.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60320006E12, 760.9166666666666], [1.60320012E12, 7.666666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320012E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1766.7380352644848, "minX": 1.60320006E12, "maxY": 6827.75, "series": [{"data": [[1.60320006E12, 1766.7380352644848], [1.60320012E12, 6827.75]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320012E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1766.0050377833752, "minX": 1.60320006E12, "maxY": 6827.0, "series": [{"data": [[1.60320006E12, 1766.0050377833752], [1.60320012E12, 6827.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320012E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 263.26448362720413, "minX": 1.60320006E12, "maxY": 288.25, "series": [{"data": [[1.60320006E12, 263.26448362720413], [1.60320012E12, 288.25]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320012E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 280.0, "minX": 1.60320006E12, "maxY": 400.0, "series": [{"data": [[1.60320006E12, 400.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60320006E12, 280.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60320006E12, 280.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60320006E12, 280.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60320006E12, 280.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60320006E12, 331.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320006E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 315.5, "minX": 4.0, "maxY": 6709.0, "series": [{"data": [[70.0, 350.0], [46.0, 315.5], [51.0, 317.5], [56.0, 322.0], [63.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 3823.5], [33.0, 4477.0], [70.0, 820.0], [35.0, 2277.0], [17.0, 6709.0], [46.0, 961.0], [51.0, 1343.0], [56.0, 1300.0], [7.0, 5842.0], [15.0, 2849.0], [63.0, 1040.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 314.5, "minX": 4.0, "maxY": 6708.0, "series": [{"data": [[70.0, 350.0], [46.0, 314.5], [51.0, 317.0], [56.0, 321.0], [63.0, 343.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 3820.0], [33.0, 4477.0], [70.0, 819.0], [35.0, 2276.0], [17.0, 6708.0], [46.0, 960.5], [51.0, 1343.0], [56.0, 1298.5], [7.0, 5842.0], [15.0, 2849.0], [63.0, 1040.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 70.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.683333333333334, "minX": 1.60320006E12, "maxY": 6.683333333333334, "series": [{"data": [[1.60320006E12, 6.683333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320006E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60320006E12, "maxY": 6.616666666666666, "series": [{"data": [[1.60320006E12, 6.616666666666666], [1.60320012E12, 0.06666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60320012E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60320006E12, "maxY": 5.066666666666666, "series": [{"data": [[1.60320006E12, 5.066666666666666], [1.60320012E12, 0.06666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.60320006E12, 1.55]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320012E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.60320006E12, "maxY": 5.066666666666666, "series": [{"data": [[1.60320006E12, 1.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60320006E12, 5.066666666666666], [1.60320012E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60320012E12, "title": "Total Transactions Per Second"}},
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

