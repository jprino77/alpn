from django.shortcuts import render
from django.http      import HttpResponse
import json
import datetime
from apps.juego.models import Partida, TipoJuego 
# Create your views here.

def index(request):
    return render(request,"base/base.html")

def ordenar(request):
    return render(request,"ordenar.html")

def transformar(request):
   
    return render(request,"transformar.html")

def porColor(request):
    return render(request,"porColor.html")

def seriacion(request):
    return render(request,"seriacion.html")

def resultadoJuego(request):
    p = Partida()
    
    partidaJson =  json.loads(request.body)
    
    #mover a un service
    tp = TipoJuego(id = 1,) #harcodeo prueba ver como levantar tp
    p.hora_inicio = partidaJson['hora_inicio']
    p.hora_fin = partidaJson['hora_fin']
    p.cantidad_errores = partidaJson['cantidad_errores']
    p.cantidad_movimientos = partidaJson['cantidad_movimientos']
    p.tipo_juego = tp
    p.save()

    
    return HttpResponse(request)

