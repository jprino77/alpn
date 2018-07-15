$(function() {
    init("Debes arrastrar las tarjetas hasta que completes la serie","Kdd8cW-yuZo");

    var numbers = []
    var dashNumbers = []
    var num = 0;
    for (var i = 0; i < 10; i++){
        num = Math.floor(Math.random() * 99 + 1);
        while(numbers.includes(num)){
            num = Math.floor(Math.random() * 99 + 1);
        }
        numbers.push(parseInt(num));
    }
    numbers.sort((a, b) => a - b);

    for (var i = 0; i < numbers.length; i++) {

        var div = $('<div>' + numbers[i] + '</div>').attr('id', numbers[i]).appendTo('#sortable');
        if (i % 2 == 0 || i % 5 == 0) {
            dashNumbers.push(numbers[i])
            div.html("");
        }

    }

    dashNumbers = shuffle(dashNumbers);

    for(var i = 0; i < dashNumbers.length; i++){
        $("#" + dashNumbers[i]).css({
            'border-style': 'dashed',
            'background': '#FFFFFF'
        });
        $('<div>' + dashNumbers[i] + '</div>').attr('id', 'drag' + dashNumbers[i]).addClass('serieIncompleta').appendTo('#drag-Serie');

        $("#drag" + dashNumbers[i]).draggable({
            containment: '#content',
            revert: true
        }).data('position', dashNumbers[i]);

        var accept = '#drag' + dashNumbers[i];
        $("#" + dashNumbers[i]).droppable({
            accept: accept,
            hoverClass: 'hovered',
            drop: handleDrop
        }).data('position', dashNumbers[i]);
        
    }


});

function countDisplayElements() {

    var count = $('.serieIncompleta').length;

    if (count == 0) {
        horaF = new Date()
        guardarJuego("SER")
    }

}

function handleDrop(event, ui) {
    var drop = $(this).data('position');
    var drag = ui.draggable.data('position');

    if (movimientos == 0) {
        horaI = new Date()
    }
    movimientos++;

    if (drop == drag) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this),
            my: 'center',
            at: 'center'
        });
        ui.draggable.draggable('option', 'revert', false);

        ui.draggable.removeClass("serieIncompleta");

        ui.draggable.css("background", "#66BB6A");
        reproducirSonido("coin");
        countDisplayElements();



    }else {

        errores++;
    }


}