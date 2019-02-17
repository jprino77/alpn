from django.shortcuts import render
from django.http      import HttpResponse
import json
import datetime
# Create your views here.

def index(request):

    current_user = request.user.usuario
    
    page = HttpResponse()
    if current_user.tipo_usuario.codigo == 'ALU':
        page = render(request,"base/base.html")
    elif current_user.tipo_usuario.codigo == 'TUT':
        page = render(request,"base/estadisticaBase.html")

    return page