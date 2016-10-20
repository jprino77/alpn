from django.conf.urls import patterns, include, url
from django.contrib import admin
from apps.juego.views   import index, seriacion, ordenar, transformar, porColor, resultadoJuego
from apps.estadistica.views import estadistica,movimiento_partida,error_partida

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'alpn.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', index),
    url(r'seriacion', seriacion),
    url(r'ordenar', ordenar),
    url(r'transformar', transformar),
    url(r'porColor', porColor),
    url(r'resultadoJuego', resultadoJuego),
    url(r'estadistica', estadistica),
    url(r'movimiento_partida', movimiento_partida),
    url(r'error_partida', error_partida),
    
)
