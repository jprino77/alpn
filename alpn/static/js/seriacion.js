$(function() {
    init("Debes arrastrar las tarjetas hasta que completes la serie");

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
        $(".mdl-dialog__title").html("Felicitaciones, lo has logrado!!!!")
        $(".mdl-dialog__content > p").html("¿Volver a jugar?")
        $(".close").html("No");
        $(".refresh").show();
        setTimeout(showModalView, 500);
    }

}

function handleDrop(event, ui) {
    var drop = $(this).data('position');
    var drag = ui.draggable.data('position');

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
        countDisplayElements();



    }


}