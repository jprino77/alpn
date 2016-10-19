from django.shortcuts import render
from django.http      import HttpResponse
import logging
import json
# Create your views here.
logger = logging.getLogger(__name__)
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
    json_data=json.loads(request.body)
    logger.info('Something went wrong!')
    return HttpResponse(request)

