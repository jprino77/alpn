from django.conf.urls import patterns, include, url
from apps.usuario.views import index

urlpatterns = patterns('',

    url(r'^$', index, name='index'),
    url(r'^juego/', include('apps.juego.urls',namespace= "juego")),
    url(r'^estadistica/', include('apps.estadistica.urls', namespace = "estadistica")),
    
)
