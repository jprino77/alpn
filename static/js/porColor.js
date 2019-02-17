$(function () {
    var colors = ["bottom-red","bottom-blue","bottom-yellow","bottom-green","bottom-pink","bottom-violet"];
    var colorsDrag=[];
    colors = shuffle(colors);

    for(var i = 0; i < 3; i++){
        $('<div></div>').addClass('triangle4').addClass(colors[i]).appendTo('#droppeable');
        //4 por color
        colorsDrag.push(colors[i]);
        colorsDrag.push(colors[i]);
        colorsDrag.push(colors[i]);
        colorsDrag.push(colors[i]);
    }

    colorsDrag = shuffle(colorsDrag);

    for(var i = 0; i < colorsDrag.length; i++){
        $('<div></div>').addClass('count').addClass('triangle3').addClass(colorsDrag[i]).appendTo('#draggeable');
    }


});

$(function () {

    init("Debes Solar los triangulos en el color que corresponda", "ka2QBKEeU4Q");

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


    $("#draggeable  .bottom-pink").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'pinkTriangle');


    $("#draggeable .bottom-green").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'greenTriangle');

    $("#draggeable .bottom-violet").draggable({
        containment: '#content',
        revert: true
    }).data('figure', 'violetTriangle');


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


    $("#droppeable .bottom-green").droppable({
        accept: '.bottom-green',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'greenTriangle');

    $("#droppeable .bottom-pink").droppable({
        accept: '.bottom-pink',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'pinkTriangle');

    $("#droppeable .bottom-violet").droppable({
        accept: '.bottom-violet',
        hoverClass: 'hovered',
        drop: handleDrop
    }).data('figure', 'violetTriangle');


});


function countDisplayElements() {

    var count = $('.count').filter(function () {
        return $(this).css('display') !== 'none';
    }).length;


    if (count == 0) {
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
       
        ui.draggable.position({
            of: $(this),
            my: 'center',
            at: 'center'
        });
        ui.draggable.draggable('option', 'revert', false);

        reproducirSonido("tuberia");

        ui.draggable.hide(500, function () {
            countDisplayElements();
        });


    } else {

        errores++;
    }


}