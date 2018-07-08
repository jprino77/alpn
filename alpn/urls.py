from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth.views import login, logout_then_login

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', login, {'template_name': 'login.html'}, name='login'),
    url(r'^logout/$', logout_then_login , name='logout'),
    url(r'^logged/', include('apps.usuario.urls',namespace= "usuario"))

)
