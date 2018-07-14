$(function() {
    init("Debes arrastrar las tarjetas hasta que completes la serie","Kdd8cW-yuZo");

    for (var i = 1; i <= 10; i++) {

        var div = $('<div>' + i + '</div>').attr('id', i).appendTo('#sortable');
        if (i % 2 == 0 || i % 5 == 0) {
            $("#" + i).css({
                'border-style': 'dashed',
                'background': '#FFFFFF'
            });
            $('<div>' + i + '</div>').attr('id', 'drag' + i).addClass('serieIncompleta').appendTo('#drag-Serie');

            $("#drag" + i).draggable({
                containment: '#content',
                revert: true
            }).data('position', i);

            var accept = '#drag' + i;
            $("#" + i).droppable({
                accept: accept,
                hoverClass: 'hovered',
                drop: handleDrop
            }).data('position', i);
            div.html("");
        }

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