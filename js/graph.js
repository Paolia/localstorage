// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
data.addColumn('string', 'Country');
data.addColumn('number', 'Volume');
data.addRows([
    ["Angola", 2181],
    ["Argentina", 792730],
    ["Armenia", 11833],
    ["Australia", 2052822],
    ["Austria", 215151],
    ["Azerbaijan", 6063],
    ["Barbados", 1561],
    ["Belarus", 11729],
    ["Belgium", 195464],
    ["Bosnia and Herzegovina", 4023],
    ["Brazil", 7932],
    ["Bulgaria", 38492],
    ["Canada", 64897],
    ["Chile", 1921091],
    ["China", 307466],
    ["Congo", 1225],
    ["Croatia", 17689],
    ["Cyprus", 2360],
    ["Czechia", 30987],
    ["Denmark", 172663],
    ["Dominican Republic", 6473],
    ["Estonia", 28294],
    ["Finland", 25829],
    ["France", 10819153],
    ["Georgia", 222849],
    ["Germany", 1153568],
    ["Ghana", 2350],
    ["Greece", 87821],
    ["Hungary", 106016],
    ["India", 8373],
    ["Ireland", 20107],
    ["Israel", 50868],
    ["Italy", 7078980],
    ["Japan", 1543],
    ["Kenya", 2722],
    ["Latvia", 279997],
    ["Lebanon", 21334],
    ["Lithuania", 182388],
    ["Luxembourg", 25276],
    ["Malaysia", 25525],
    ["Malta", 1018],
    ["Mexico", 4902],
    ["Montenegro", 15234],
    ["Morocco", 12019],
    ["Namibia", 2548],
    ["Netherlands", 364998],
    ["New Zealand", 1229899],
    ["North Macedonia", 50928],
    ["Norway", 13865],
    ["Panama", 7732],
    ["Peru", 1305],
    ["Poland", 33053],
    ["Portugal", 910047],
    ["Moldova", 139588],
    ["Romania", 33420],
    ["Russia", 9948],
    ["Rwanda", 1192],
    ["Serbia", 20865],
    ["Singapore", 517787],
    ["Slovakia", 29756],
    ["Slovenia", 18404],
    ["South Africa", 660356],
    ["Spain", 3007879],
    ["Sri Lanka", 1171],
    ["Sweden", 32440],
    ["Switzerland", 114017],
    ["Thailand", 52799],
    ["Togo", 15153],
    ["Tunisia", 2987],
    ["Turkiye", 14745],
    ["Ukraine", 11859],
    ["United Arab Emirates", 55305],
    ["United Kingdom", 815165],
    ["United States", 1384495],
    ["Uruguay", 16526],
    ["Uzbekistan", 3744],
    ["Vietnam", 2079],
]);

// Set chart options
    var options = {
        'title':'Main Wine Producing Countries by Volume (t)',
'width':960,
                    'height':400};

// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(data, options);
    }