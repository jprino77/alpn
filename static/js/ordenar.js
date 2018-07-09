$(function() {
    init("Debes arrastrar las tarjetas hasta que queden ordenadas de menor a mayor");

    $("#sortable").sortable({
        revert: true,
        update: isSorted
    });
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.sort(function() {
        return Math.random() - .5
    });

    for (var i = 0; i < 10; i++) {
        $('<div>' + numbers[i] + '</div>').attr('id', numbers[i]).addClass('ui-state-default').appendTo('#sortable');
    }


});

function countDisplayElements() {

    var count = $('.count').filter(function() {
        return $(this).css('display') !== 'none';
    }).length;


    if (count == 0) {
        showModalView();
    }

}

function isSorted(event, ui) {

    var len = $('#sortable > div').length;
    
    if (movimientos == 0) {
        horaI = new Date()
    }

    movimientos++;

    var id;
    var idAdyacente;
    var sorted = false;
    for (var i = 1; i < len; i++) {
        id = parseInt($("#" + i).attr('id'));
        idAdyacente = parseInt($("#" + i + "+ div").attr('id'));

        if (id < idAdyacente) {
            sorted = true;
        } else {
            sorted = false;
            break;
        }
    }

    if (sorted == true) {

        $(".mdl-dialog__title").html("Felicitaciones, lo has logrado!!!!")
        $(".mdl-dialog__content > p").html("¿Volver a jugar?")
        $(".close").html("No");
        $(".refresh").show();
        setTimeout(showModalView, 500);
        horaF = new Date()
        guardarJuego("ORD")
    }

}