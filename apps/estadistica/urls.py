from django.conf.urls import patterns, url
from django.contrib.auth.decorators import login_required
from apps.estadistica.views import index,estadistica,estadisticaEdad,mov_eror_partida, mov_err_edad

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'alpn.views.home', name='home'),
    # url(r'^blog/', include('blog.urls'),

    url(r'^$', login_required(index), name='indexEstadistica'),
    url(r'estadistica_por_alumno/$', login_required(estadistica), name= 'estadistica_por_alumno'),
    url(r'edad/$', login_required(estadisticaEdad), name= 'edad'),
    url(r'movErrPartida/$', login_required(mov_eror_partida), name= 'movErrPartida'),
    url(r'movErrEdad/$', login_required(mov_err_edad), name= 'moverredad'),
    
)
