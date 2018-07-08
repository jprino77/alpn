from django.conf.urls import patterns, url
from django.contrib.auth.decorators import login_required
from apps.estadistica.views import index,estadistica,movimiento_partida,estadisticaEdad,error_partida, movimiento_edad, movimiento_error

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'alpn.views.home', name='home'),
    # url(r'^blog/', include('blog.urls'),

    url(r'^$', login_required(index), name='indexEstadistica'),
    url(r'estadistica', login_required(estadistica)),
    url(r'movimiento_partida', login_required(movimiento_partida)),
    url(r'edad', login_required(estadisticaEdad)),
    url(r'error_partida', login_required(error_partida)),
    url(r'movEdad', login_required(movimiento_edad)),
    url(r'errEdad', login_required(movimiento_error)),
    
)
