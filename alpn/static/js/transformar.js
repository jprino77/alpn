$(function() {

    init("Debes armar el rompecabezas con las figuras que se encuentran sueltas en la pantalla");

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
        accept: '.square',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'square');

    $("#droppeable .parallelogram").droppable({
        accept: '.parallelogram',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'parallelogram');

    $("#droppeable .triangle3").droppable({
        accept: '.triangle3',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'triangle3');


});

function countDisplayElements() {

    var count = $('.no-dropped').length;


    if (count == 0) {
        $(".mdl-dialog__title").html("Felicitaciones, lo has logrado!!!!")
        $(".mdl-dialog__content > p").html("¿Volver a jugar?")
        $(".close").html("No");
        $(".refresh").show();
        setTimeout(showModalView, 500);
    }

}

function handleDrop(event, ui) {
    var drop = $(this).data('figure');
    var drag = ui.draggable.data('figure');

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

        countDisplayElements();



    }


}