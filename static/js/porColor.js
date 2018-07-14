$(function () {

    init("Debes Solar los triangulos en el color que corresponda","ka2QBKEeU4Q");

    $("#draggeable  .bottom-red").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'redTriangle');

    $("#draggeable .bottom-blue").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'blueTriangle');

    $("#draggeable .bottom-yellow").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'yellowTriangle');


    $("#droppeable .bottom-red").droppable({
        accept: '.bottom-red',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'redTriangle');

    $("#droppeable .bottom-blue").droppable({
        accept: '.bottom-blue',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'blueTriangle');

    $("#droppeable .bottom-yellow").droppable({
        accept: '.bottom-yellow',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'yellowTriangle');


});

function countDisplayElements() {

    var count = $('.count').filter(function () {
        return $(this).css('display') !== 'none';
    }).length;


    if (count == 0) {
        $(".mdl-dialog__title").html("Felicitaciones, lo has logrado!!!!")
        $(".mdl-dialog__content > p").html("¿Volver a jugar?")
        $(".close").html("No");
        $(".refresh").show();
        setTimeout(showModalView, 500);
        horaF = new Date()
        guardarJuego("COL")
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

        ui.draggable.hide(500, function () {
            countDisplayElements();
        });


    } else {

        errores++;
    }


}