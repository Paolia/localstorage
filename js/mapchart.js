let quant = document.getElementById("quant");
quant.addEventListener("click", function (event) {
    production_volume("world");
});
let quant_euro = document.getElementById("quant_euro");
quant_euro.addEventListener("click", function (event) {
    production_volume("euro");
});

function production_volume(region) {
    let opt;
    if (region == "euro") {
        opt = {
            region: '150', // Europe
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    } else if (region == "world") {
        opt = {
            //region: '150', // Europe
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    } else {
        opt = {
            region: '029', // Caribbean
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    }

    // 国別データ
let country_data = [
    ["Area", "Export Quantity (t)"],
    ["Algeria", 125.25],
    ["Angola", 5327.49],
    ["Antigua and Barbuda", 34.13],
    ["Argentina", 300289.54],
    ["Armenia", 4768.04],
    ["Australia", 749219.67],
    ["Austria", 64266.41],
    ["Azerbaijan", 4153.92],
    ["Bahamas", 0],
    ["Bahrain", 133.8],
    ["Bangladesh", 0],
    ["Barbados", 49.24],
    ["Belarus", 4992.41],
    ["Belgium", 51366.31],
    ["Belize", 2.22],
    ["Benin", 15.29],
    ["Bhutan", 14.13],
    ["Bolivia", 28.38],
    ["Bosnia and Herzegovina", 3564.19],
    ["Botswana", 18.15],
    ["Brazil", 3955.69],
    ["Bulgaria", 24985.42],
    ["Burkina Faso", 67.96],
    ["Burundi", 22.28],
    ["Cambodia", 12.9],
    ["Cameroon", 176.42],
    ["Canada", 140062.13],
    ["Chile", 868064.85],
    ["China", 15511.43],
    ["Colombia", 80.9],
    ["Congo", 146.1],
    ["Costa Rica", 0.19],
    ["Cote d'Ivoire", 79.12],
    ["Croatia", 5261.58],
    ["Cuba", 123.3],
    ["Cyprus", 671.74],
    ["Czech Republic", 9037.21],
    ["Democratic Republic of the Congo", 3.76],
    ["Denmark", 31442.36],
    ["Djibouti", 0.06],
    ["Dominica", 0.32],
    ["Dominican Republic", 7168.21],
    ["Ecuador", 0.05],
    ["Egypt", 3.15],
    ["El Salvador", 1.29],
    ["Equatorial Guinea", 285.19],
    ["Eritrea", 0.01],
    ["Estonia", 5518.5],
    ["Eswatini", 314.35],
    ["Ethiopia", 82.56],
    ["Faroe Islands", 1.02],
    ["Fiji", 63.42],
    ["Finland", 10263.94],
    ["France", 1488620.18],
    ["French Polynesia", 4.37],
    ["Gabon", 0],
    ["Georgia", 70085.99],
    ["Germany", 383294.34],
    ["Ghana", 23.02],
    ["Greece", 28219.1],
    ["Guatemala", 484.69],
    ["Guinea", 0.4],
    ["Guyana", 2.62],
    ["Haiti", 2.41],
    ["Honduras", 12.24],
    ["Hungary", 93170.61],
    ["Iceland", 35.17],
    ["India", 969.2],
    ["Indonesia", 88.72],
    ["Iran", 6.01],
    ["Ireland", 8839.74],
    ["Israel", 6433],
    ["Italy", 2153517.21],
    ["Jamaica", 239.08],
    ["Japan", 128.62],
    ["Jordan", 27.71],
    ["Kazakhstan", 64.58],
    ["Kenya", 798.47],
    ["Kuwait", 0.48],
    ["Kyrgyzstan", 417.38],
    ["Laos", 0.22],
    ["Latvia", 90528.26],
    ["Lebanon", 2621.4],
    ["Lithuania", 59747.61],
    ["Luxembourg", 6619.78],
    ["Madagascar", 0.06],
    ["Malawi", 0.21],
    ["Malaysia", 1981.02],
    ["Mali", 15.01],
    ["Malta", 21.56],
    ["Mauritius", 66.52],
    ["Mexico", 786.52],
    ["Mongolia", 0.08],
    ["Montenegro", 6070.97],
    ["Morocco", 4465.51],
    ["Mozambique", 27417.3],
    ["Myanmar", 19.94],
    ["Namibia", 1697.13],
    ["Nepal", 0.07],
    ["Netherlands", 63840.21],
    ["New Caledonia", 0.23],
    ["New Zealand", 278884.4],
    ["Nicaragua", 16.92],
    ["Niger", 0],
    ["Nigeria", 24.6],
    ["North Macedonia", 66107.48],
    ["Norway", 2566.45],
    ["Oman", 57.42],
    ["Panama", 1103.04],
    ["Paraguay", 0.02],
    ["Peru", 417.95],
    ["Philippines", 56.19],
    ["Poland", 11986.77],
    ["Portugal", 297941.72],
    ["Qatar", 1.25],
    ["South Korea", 175.64],
    ["Moldova", 151410.02],
    ["Romania", 18643.81],
    ["Russia", 7312.85],
    ["Rwanda", 529.39],
    ["Saint Kitts and Nevis", 0.37],
    ["Saint Lucia", 18.62],
    ["Saint Vincent and the Grenadines", 0.04],
    ["Samoa", 0.51],
    ["Senegal", 18.31],
    ["Serbia", 13336.18],
    ["Sierra Leone", 0.16],
    ["Singapore", 13669.99],
    ["Slovakia", 35829.32],
    ["Slovenia", 4638.39],
    ["Somalia", 0.04],
    ["South Africa", 411126.39],
    ["South Sudan", 25.92],
    ["Spain", 2176274.6],
    ["Sri Lanka", 121.92],
    ["Sudan", 0.01],
    ["Suriname", 36.23],
    ["Sweden", 7673.7],
    ["Switzerland", 1314.69],
    ["Syria", 16.13],
    ["Tajikistan", 0.04],
    ["Thailand", 15816.88],
    ["Togo", 18038.95],
    ["Tonga", 0.14],
    ["Trinidad and Tobago", 1.35],
    ["Tunisia", 427.31],
    ["Turkiye", 4904.62],
    ["Uganda", 142.27],
    ["Ukraine", 8739.74],
    ["United Arab Emirates", 10217.2],
    ["United Kingdom", 108216.25],
    ["Tanzania", 89.01],
    ["United States", 355330.7],
    ["Uruguay", 6479.08],
    ["Uzbekistan", 9098.88],
    ["Vanuatu", 0],
    ["Venezuela", 0.79],
    ["Viet Nam", 561.26],
    ["Zambia", 50.25],
    ["Zimbabwe", 6.76]
];

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

    var options = opt;

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
}
// Google Chartここまで
}
// quantハンドラここまで



// valueハンドラここから
let usd_value = document.getElementById("usd_value");
usd_value.addEventListener("click", function (event) {
    sales_figure("world");
});
let usd_value_euro = document.getElementById("usd_value_euro");
usd_value_euro.addEventListener("click", function (event) {
    sales_figure("euro");
});

function sales_figure(region) {
    let opt;
    if (region == "euro") {
        opt = {
            region: '150', // Europe
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    } else if (region == "world") {
        opt = {
            //region: '150', // Europe
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    } else {
        opt = {
            region: '029', // Caribbean
            colorAxis: { colors: ['#33aa55', '774477', '#bb0088'] },
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    }

    // 国別データ
    let country_data = [
        ["Area", "Export Value (1000 USD)"],
        ["Algeria", 417],
        ["Angola", 2181],
        ["Antigua and Barbuda", 125],
        ["Argentina", 792730],
        ["Armenia", 11833],
        ["Australia", 2052822],
        ["Austria", 215151],
        ["Azerbaijan", 6063],
        ["Bahamas", 0],
        ["Bahrain", 726],
        ["Bangladesh", 0],
        ["Barbados", 1561],
        ["Belarus", 11729],
        ["Belgium", 195464],
        ["Belize", 5],
        ["Benin", 31],
        ["Bhutan", 50],
        ["Bolivia", 234],
        ["Bosnia and Herzegovina", 4023],
        ["Botswana", 27],
        ["Brazil", 7932],
        ["Bulgaria", 38492],
        ["Burkina Faso", 547],
        ["Burundi", 32],
        ["Cambodia", 71],
        ["Cameroon", 156],
        ["Canada", 64897],
        ["Chile", 1921091],
        ["China", 307466],
        ["Colombia", 56],
        ["Congo", 1225],
        ["Costa Rica", 1],
        ["Cote d'Ivoire", 79],
        ["Croatia", 17689],
        ["Cuba", 142],
        ["Cyprus", 2360],
        ["Czechia", 30987],
        ["Democratic Republic of the Congo", 2],
        ["Denmark", 172663],
        ["Djibouti", 1],
        ["Dominica", 1],
        ["Dominican Republic", 6473],
        ["Ecuador", 0],
        ["Egypt", 16],
        ["El Salvador", 2],
        ["Equatorial Guinea", 101],
        ["Eritrea", 0],
        ["Estonia", 28294],
        ["Eswatini", 489],
        ["Ethiopia", 238],
        ["Faroe Islands", 32],
        ["Fiji", 254],
        ["Finland", 25829],
        ["France", 10819153],
        ["French Polynesia", 56],
        ["Gabon", 0],
        ["Georgia", 222849],
        ["Germany", 1153568],
        ["Ghana", 2350],
        ["Greece", 87821],
        ["Guatemala", 905],
        ["Guinea", 2],
        ["Guyana", 8],
        ["Haiti", 9],
        ["Honduras", 33],
        ["Hungary", 106016],
        ["Iceland", 145],
        ["India", 8373],
        ["Indonesia", 889],
        ["Iran", 80],
        ["Ireland", 20107],
        ["Israel", 50868],
        ["Italy", 7078980],
        ["Jamaica", 720],
        ["Japan", 1543],
        ["Jordan", 173],
        ["Kazakhstan", 141],
        ["Kenya", 2722],
        ["Kuwait", 2],
        ["Kyrgyzstan", 641],
        ["Laos", 1],
        ["Latvia", 279997],
        ["Lebanon", 21334],
        ["Lithuania", 182388],
        ["Luxembourg", 25276],
        ["Madagascar", 2],
        ["Malawi", 1],
        ["Malaysia", 25525],
        ["Mali", 41],
        ["Malta", 1018],
        ["Mauritius", 491],
        ["Mexico", 4902],
        ["Mongolia", 1],
        ["Montenegro", 15234],
        ["Morocco", 12019],
        ["Mozambique", 45],
        ["Myanmar", 331],
        ["Namibia", 2548],
        ["Nepal", 4],
        ["Netherlands", 364998],
        ["New Caledonia", 12],
        ["New Zealand", 1229899],
        ["Nicaragua", 26],
        ["Niger", 15],
        ["Nigeria", 18],
        ["North Macedonia", 50928],
        ["Norway", 13865],
        ["Oman", 340],
        ["Panama", 7732],
        ["Paraguay", 0],
        ["Peru", 1305],
        ["Philippines", 253],
        ["Poland", 33053],
        ["Portugal", 910047],
        ["Qatar", 15],
        ["South Korea", 418],
        ["Moldova", 139588],
        ["Romania", 33420],
        ["Russia", 9948],
        ["Rwanda", 1192],
        ["Saint Kitts and Nevis", 5],
        ["Saint Lucia", 110],
        ["Saint Vincent and the Grenadines", 1],
        ["Samoa", 82],
        ["Senegal", 236],
        ["Serbia", 20865],
        ["Sierra Leone", 1],
        ["Singapore", 517787],
        ["Slovakia", 29756],
        ["Slovenia", 18404],
        ["Somalia", 0],
        ["South Africa", 660356],
        ["South Sudan", 44],
        ["Spain", 3007879],
        ["Sri Lanka", 1171],
        ["Sudan", 0],
        ["Suriname", 172],
        ["Sweden", 32440],
        ["Switzerland", 114017],
        ["Syrian Arab Republic", 142],
        ["Tajikistan", 0],
        ["Thailand", 52799],
        ["Togo", 15153],
        ["Tonga", 1],
        ["Trinidad and Tobago", 19],
        ["Tunisia", 2987],
        ["Turkiye", 14745],
        ["Uganda", 464],
        ["Ukraine", 11859],
        ["United Arab Emirates", 55305],
        ["United Kingdom", 815165],
        ["Tanzania", 364],
        ["United States", 1384495],
        ["Uruguay", 16526],
        ["Uzbekistan", 3744],
        ["Vanuatu", 0],
        ["Venezuela", 1],
        ["Vietnam", 2079],
        ["Zambia", 82],
        ["Zimbabwe", 13]
    ];

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

        var options = opt;
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        chart.draw(data, options);
    }
    // Google Chartここまで
}
//valueハンドラここま