function showModalView() {
    var dialog = document.querySelector('dialog');

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    dialog.showModal();

    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });

    dialog.querySelector('.refresh').addEventListener('click', function() {
        location.reload();
    });
}

function init(mensaje) {
    $(".mdl-dialog__title").html("Bienvenido");
    $(".mdl-dialog__content > p").html(mensaje);
    $(".close").html("De acuerdo");
    $(".refresh").hide();
    showModalView();
}