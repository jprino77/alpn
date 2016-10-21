from django.conf.urls import patterns, include, url
from django.contrib import admin
from apps.juego.views   import index, seriacion, ordenar, transformar, porColor, resultadoJuego
from apps.estadistica.views import estadistica,movimiento_partida,estadisticaEdad,error_partida, movimiento_edad, movimiento_error

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
    url(r'edad', estadisticaEdad),
    url(r'error_partida', error_partida),
    url(r'movEdad', movimiento_edad),
    url(r'errEdad', movimiento_error),
    
)
