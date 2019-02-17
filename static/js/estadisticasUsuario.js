$(function () {

    // Load the Visualization API and the corechart package.
    google.charts.load("current", {
        packages: ["corechart"]
    });

    $('#buscar').click(function(){
        obtenerDatosChart($('#tipoJuego').val(), $('#alumno').val())
    });
});

function obtenerDatosChart(tipoJuego, alumno) {

    filtro = {
        tipoJuego : tipoJuego,
        alumno : alumno
    }
    $.getJSON("movErrPartida",filtro, function (data) {
        google.charts.setOnLoadCallback(drawMovimientoChart(data.movimientos));
        google.charts.setOnLoadCallback(drawErrorChart(data.errores));
    });

}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawMovimientoChart(data) {

    // Create the data table.
    var dataChart = new google.visualization.DataTable();
    dataChart.addColumn('number', 'Partida');
    dataChart.addColumn('number', 'Movimientos');


    dataChart.addRows(data);
    // Set chart options
    var options = {
        legend: 'none',
        hAxis: {
            minValue: 0,
            scaleType: 'linear',
            title: 'Partidas'

        },
        animation: {
            duration: 2000,
            easing: 'linear',
            startup: true
        },
        vAxis: {
            scaleType: 'linear',
            title: 'Movimientos'
        },

        pointSize: 10,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_movimiento_div'));
    chart.draw(dataChart, options);
}



function drawErrorChart(data) {

    console.log(data)
    // Create the data table.
    var dataChart = new google.visualization.DataTable();
    dataChart.addColumn('number', 'Partida');
    dataChart.addColumn('number', 'Errores');
    dataChart.addRows(data);
    // Set chart options
    var options = {
        legend: 'none',
        hAxis: {
            minValue: 0,
            scaleType: 'linear',
            title: 'Partidas'

        },
        animation: {
            duration: 2000,
            easing: 'linear',
            startup: true
        },
        vAxis: {
            scaleType: 'linear',
            title: 'Errores'
        },

        pointSize: 10,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_error_div'));
    chart.draw(dataChart, options);

}