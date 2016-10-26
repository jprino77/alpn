var errores = 0;
var movimientos = 0;
var horaI = 0;
var horaf = 0;

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

function guardarJuego() {

    var data = JSON.stringify({
        cantidad_errores: errores,
        cantidad_movimientos: movimientos,
        hora_inicio: horaI,
        hora_fin: horaF
    })
    $.ajax({
        // puede ser "get" y "post"
        type: "post",
        // el módulo que hará la búsqueda
        url: "resultadoJuego",
        dataType: 'json',
        data: data,
        complete: function(xhr, status) {

            setTimeout(showModalView, 500);
        }
    });
}

$(function() {

    // using jQuery
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });




});