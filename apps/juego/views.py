from django.shortcuts import render
from django.http      import HttpResponse
import json
import datetime
from apps.juego.models import Partida, TipoJuego
from apps.usuario.decorators import estudiante_required
# Create your views here.

@estudiante_required
def index(request):
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
    tp = TipoJuego()
    partidaJson =  json.loads(request.body)
    #mover a un service
    tp = TipoJuego.objects.get(codigo = partidaJson['codigo_juego'],)
    print tp.id
    p.hora_inicio = partidaJson['hora_inicio']
    p.hora_fin = partidaJson['hora_fin']
    p.cantidad_errores = partidaJson['cantidad_errores']
    p.cantidad_movimientos = partidaJson['cantidad_movimientos']
    p.tipo_juego = tp
    p.usuario = request.user
    p.save()

    
    return HttpResponse(request)

