# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http      import HttpResponse,JsonResponse
from apps.usuario.decorators import tutor_required
from .querys import estadistica_edad, estadistica_alumnos, datos_filtro

import json

@tutor_required
def index(request):
    return render(request,"base/estadisticaBase.html")

@tutor_required
def estadistica(request):
    respuesta = datos_filtro(request.user.usuario.id)
    return render(request, 'estadisticasPorUsuario.html',{'tipoJuegos':respuesta[0], 'alumnos':respuesta[1]})

@tutor_required
def estadisticaEdad(request):
    respuesta = datos_filtro(request.user.usuario.id)
    return render(request, 'estadisticasPorEdad.html',{'tipoJuegos':respuesta[0]})

@tutor_required
def mov_eror_partida (request):
    tipo_juego_id = request.GET.get('tipoJuego')
    alumno = request.GET.get('alumno')

    resultado = estadistica_alumnos(tipo_juego_id,alumno)
    errores = list();
    movimientos = list();
    index = 0; 
    for resultados in resultado:
        index = index + 1;
        errores.append([int(index),int(resultados.cantidad_errores)])
        movimientos.append([int(index),int(resultados.cantidad_movimientos)])
    data = {'errores': errores, 'movimientos': movimientos}

    return HttpResponse(json.dumps(data), content_type="application/json")

@tutor_required
def mov_err_edad (request):
    tipo_juego_id = request.GET.get('tipoJuego')
    resultado= estadistica_edad(tipo_juego_id);
    errores = list();
    movimientos = list();
    
    for resultados in resultado:
        errores.append([resultados[0],int(resultados[1])])
        movimientos.append([resultados[0],int(resultados[2])])
    data = {'errores': errores, 'movimientos': movimientos}
    return HttpResponse(json.dumps(data), content_type="application/json")