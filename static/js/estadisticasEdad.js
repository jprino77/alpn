$(function(){
    google.charts.load("current", {
        packages: ['corechart']
    });

    $('#buscar').click(function(){
        obtenerDatosChart($('#tipoJuego').val())
    });

    
});

function obtenerDatosChart(tipoJuego){
    filtro={
        tipoJuego : tipoJuego
    }
    
    $.getJSON("movErrEdad",filtro, function(data) {
        google.charts.setOnLoadCallback(drawMovChart(data.movimientos));
        google.charts.setOnLoadCallback(drawErrChart(data.errores));
    });
}

function drawMovChart(data) {
        
    var dataChart = new google.visualization.DataTable();
    dataChart.addColumn('string', 'edad');
    dataChart.addColumn('number', 'Movimientos');
    dataChart.addRows(data);

    var view = new google.visualization.DataView(dataChart);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },

    ]);

    var options = {
        title: "Cantidad de Movimientos Por edad",
        width: 600,
        height: 400,
        bar: {
            groupWidth: "95%"
        },
        legend: {
            position: "none"
        },
        animation: {
            duration: 2000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            scaleType: 'linear',
            title: 'Movimientos'
        },
        hAxis: {
            minValue: 0,
            scaleType: 'linear',
            title: 'Edad'

        },

    };
    var chart = new google.visualization.ColumnChart(document.getElementById("chart_movimiento_div"));
    chart.draw(view, options);

}

function drawErrChart(data) {
   
    var dataChart = new google.visualization.DataTable();
    dataChart.addColumn('string', 'edad');
    dataChart.addColumn('number', 'Errores');
    dataChart.addRows(data);

    var view = new google.visualization.DataView(dataChart);
    view.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },

    ]);

    var options = {
        title: "Cantidad de Errores Por edad",
        width: 600,
        height: 400,
        bar: {
            groupWidth: "95%"
        },
        legend: {
            position: "none"
        },
        animation: {
            duration: 2000,
            easing: 'out',
            startup: true
        },
        vAxis: {
            scaleType: 'linear',
            title: 'Movimientos'
        },
        hAxis: {
            minValue: 0,
            scaleType: 'linear',
            title: 'Edad'

        },

    };
    var chart = new google.visualization.ColumnChart(document.getElementById("chart_error_div"));
    chart.draw(view, options);
}

