$(function() {

    init("Debes armar el rompecabezas con las figuras que se encuentran sueltas en la pantalla","rtAG7qcVZgE");

    $("#draggeable  .square").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'square');

    $("#draggeable .parallelogram").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'parallelogram');

    $("#draggeable .triangle3").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'triangle3');


    $("#droppeable .square").droppable({

        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'square');

    $("#droppeable .parallelogram").droppable({

        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'parallelogram');

    $("#droppeable .triangle3").droppable({

        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'triangle3');


});

function countDisplayElements() {

    var count = $('.no-dropped').length;


    if (count == 0) {
        horaF = new Date()
        guardarJuego("TRA")
    }

}

function handleDrop(event, ui) {
    var drop = $(this).data('figure');
    var drag = ui.draggable.data('figure');
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

        ui.draggable.removeClass("no-dropped");
        reproducirSonido("coin");
        countDisplayElements();



    } else {

        errores++;
    }


}