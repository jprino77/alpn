from django.shortcuts import render
from django.http      import HttpResponse
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
