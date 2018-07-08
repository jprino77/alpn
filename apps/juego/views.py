from django.shortcuts import render
from django.http      import HttpResponse
import json
import datetime
from apps.juego.models import Partida, TipoJuego
from apps.usuario.decorators import estudiante_required
# Create your views here.

@estudiante_required
def index(request):
    print request.user.usuario.fecha_nacimiento
    
    return render(request,"base/base.html")

@estudiante_required
def ordenar(request):
    return render(request,"ordenar.html")

@estudiante_required
def transformar(request):
   
    return render(request,"transformar.html")
@estudiante_required
def porColor(request):
    return render(request,"porColor.html")

@estudiante_required
def seriacion(request):
    return render(request,"seriacion.html")

@estudiante_required
def resultadoJuego(request):
    p = Partida()
    partidaJson =  json.loads(request.body)
    print 'ZORRAAA'
    #mover a un service
    tp = TipoJuego(id = 1,) #harcodeo prueba ver como levantar tp
    p.hora_inicio = partidaJson['hora_inicio']
    p.hora_fin = partidaJson['hora_fin']
    p.cantidad_errores = partidaJson['cantidad_errores']
    p.cantidad_movimientos = partidaJson['cantidad_movimientos']
    p.tipo_juego = tp
    p.save()

    
    return HttpResponse(request)

