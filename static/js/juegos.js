var errores = 0;
var movimientos = 0;
var horaI = 0;
var horaf = 0;

function shuffle(list) {
    var ctr = list.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = list[ctr];
        list[ctr] = list[index];
        list[index] = temp;
    }
    return list;
}

function reproducirSonido(sonido) {
    $("#" + sonido).get(0).play()
}

function showModalView() {
    'use strict';
    var dialog = document.querySelector('dialog');

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    dialog.showModal();

    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

    dialog.querySelector('.refresh').addEventListener('click', function () {
        location.reload();
    });
}

//url del video de youtube
function init(mensaje, video) {
    $(".mdl-dialog__title").html("Bienvenido");
    $(".mdl-dialog__content p").html(mensaje);
    $(".mdl-dialog__content div.video").html('<iframe src="https://www.youtube.com/embed/' + video + '?enablejsapi=1&version=3&playerapiid=ytplayer1&amp;autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>');
    $(".close").html("<i class='material-icons'> done</i> De acuerdo");
    $(".close").addClass("mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--green-300 mdl-color-text--white");
    $(".refresh").hide();
    showModalView();
}

function guardarJuego(codigoJuego) {

    var data = JSON.stringify({
        cantidad_errores: errores,
        cantidad_movimientos: movimientos,
        hora_inicio: horaI.toLocaleTimeString(),
        hora_fin: horaF.toLocaleTimeString(),
        codigo_juego: codigoJuego

    })
    $.ajax({
        // puede ser "get" y "post"
        type: "post",
        // el módulo que hará la búsqueda
        url: "resultadoJuego",
        dataType: 'json',
        data: data,
        complete: function (xhr, status) {

            setTimeout(function () {
                $(".mdl-dialog__content div.video").html('');
                $(".mdl-dialog__title").html("Felicitaciones, lo has logrado!!!!")
                $(".mdl-dialog__content p").html("¿Volver a jugar?")
                $(".close").html("No");
                $(".refresh").show();
                var dialog = document.querySelector('dialog');
                dialog.querySelector('.close').addEventListener('click', function () {
                    window.location.href = ("/logged")
                    dialog.close();
                });
                showModalView()
                reproducirSonido("aplausos");
            }, 500);
        }
    });
}
//envio seguro del ajax, para que envie el token de seguridad
$(function () {

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
        beforeSend: function (xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});
$(function () {
    $('button.close').click(function () {
        $('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
});