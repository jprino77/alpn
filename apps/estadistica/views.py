# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http      import HttpResponse,JsonResponse

import json

# Create your views here.
def estadistica(request):
    return render(request, 'estadisticasPorUsuario.html')

def movimiento_partida (request):
    data =  [[1,12],[1,7],[3,6],[4,6],[5,9],[6,13],[7,12],[8,15],[9,14],[10,18]]
    return HttpResponse(json.dumps(data), content_type="application/json")

def estadisticaEdad(request):
    return render(request, 'estadisticasPorEdad.html')

def error_partida (request):
    data =  [[5,9],[6,13],[7,12],[8,15],[9,14]]
    return HttpResponse(json.dumps(data), content_type="application/json")

def movimiento_edad (request):
    data =  [["5 años",9],["6 años",13],["7 años",12],["8 años",15],["9 años",14]]
    return HttpResponse(json.dumps(data), content_type="application/json")
def movimiento_error (request):
    data =  [["5 años",9],["6 años",13],["7 años",12],["8 años",15],["9 años",1]]
    return HttpResponse(json.dumps(data), content_type="application/json")