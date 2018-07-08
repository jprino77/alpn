from django.conf.urls import patterns, url
from django.contrib.auth.decorators import login_required
from apps.juego.views   import index, seriacion, ordenar, transformar, porColor, resultadoJuego

urlpatterns = patterns('',
    url(r'^$', login_required(index), name='index'),
    url(r'seriacion', login_required(seriacion)),
    url(r'ordenar', login_required(ordenar)),
    url(r'transformar', login_required(transformar)),
    url(r'porColor', login_required(porColor)),
    url(r'resultadoJuego', login_required(resultadoJuego)),
    
)
