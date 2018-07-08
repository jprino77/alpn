# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http      import HttpResponse,JsonResponse
from apps.usuario.decorators import tutor_required

import json

@tutor_required
def index(request):
    return render(request,"base/estadisticaBase.html")

@tutor_required
def estadistica(request):
    return render(request, 'estadisticasPorUsuario.html')

@tutor_required
def movimiento_partida (request):
    data =  [[1,12],[1,7],[3,6],[4,6],[5,9],[6,13],[7,12],[8,15],[9,14],[10,18]]
    return HttpResponse(json.dumps(data), content_type="application/json")

@tutor_required
def estadisticaEdad(request):
    return render(request, 'estadisticasPorEdad.html')

@tutor_required
def error_partida (request):
    data =  [[5,9],[6,13],[7,12],[8,15],[9,14]]
    return HttpResponse(json.dumps(data), content_type="application/json")

@tutor_required
def movimiento_edad (request):
    data =  [["5 años",9],["6 años",13],["7 años",12],["8 años",15],["9 años",14]]
    return HttpResponse(json.dumps(data), content_type="application/json")

@tutor_required
def movimiento_error (request):
    data =  [["5 años",9],["6 años",13],["7 años",12],["8 años",15],["9 años",1]]
    return HttpResponse(json.dumps(data), content_type="application/json")