// ローカルストレージからデータを取得、JSONから配列へ変換
let country_data = [['Country', 'Units']];
let sales_data_json, sales_data_raw;

window.addEventListener('load', function (e) {
    sales_data_json = localStorage.getItem('canycom_sales');
    sales_data_raw = JSON.parse(sales_data_json);

});
//ローカルストレージからデータを取得、JSONから配列へ変換ここまで

// 各操作ボタンのイベントハンドラと関数呼び出し
let cmx1810 = document.getElementById("cmx1810");
let imgbox = document.getElementById("prod_img");
cmx1810.addEventListener("click", function (event) {
    country_data = [['Country', 'Units']];
    extract(1);
    production_volume("cmx1810");
    imgbox.innerHTML = "<div class='sideshow'><img src='img/cmx2404.png'><P>CMX1810 sales distribution</P></div>"
});
let cmx2408 = document.getElementById("cmx2408");
cmx2408.addEventListener("click", function (event) {
    country_data = [['Country', 'Units']];
    extract(2);
    production_volume("cmx2408");
    imgbox.innerHTML = "<div class='sideshow'><img src='img/cmx2506.png'><P>CMX2408 sales distribution</P></div>"
});
let s120 = document.getElementById("s120");
s120.addEventListener("click", function (event) {
    country_data = [['Country', 'Units']];
    extract(4);
    production_volume("s120");
    imgbox.innerHTML = "<div class='sideshow'><img src='img/s120.png'><P>S120 sales distribution</P></div>"
});
let s300 = document.getElementById("s300");
s300.addEventListener("click", function (event) {
    country_data = [['Country', 'Units']];
    extract(3);
    production_volume("s300");
    imgbox.innerHTML = "<div class='sideshow'><img src='img/s300.png'><P>S300 sales distribution</P></div>"
});
let sc75 = document.getElementById("sc75");
sc75.addEventListener("click", function (event) {
    country_data = [['Country', 'Units']];
    extract(5);
    production_volume("sc75");
    imgbox.innerHTML = "<div class='sideshow'><img src='img/sc75.png'><P>SC75 sales distribution</P></div>"
});
// 各操作ボタンのイベントハンドラと関数呼び出しここまで

// 配列データの抽出
function extract(selector) {
    for (let i = 1; i < sales_data_raw.length - 1; i++) {
        country_data.push([sales_data_raw[i][0], Number(sales_data_raw[i][selector])]);

    }
}
// 配列データの抽出ここまで

function production_volume(model) {
    // 国別データ
    //country_data = [];

    console.log(country_data);
    // 以下Google Chart
    google.charts.load('current', {
        'packages': ['geochart'],
    });

    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(
            country_data
        );

        var options = {
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    }
    // Google Chartここまで
}
// quantハンドラここまで