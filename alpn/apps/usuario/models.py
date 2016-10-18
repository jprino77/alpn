from django.db import models

# Create your models here.

class Tipo_Usuario (models.Model):
    descripcion = models.CharField(max_length=45)
    fecha_insert = models.DateTimeField(auto_now = True)
    fecha_delete = models.DateTimeField(auto_now = False)
    fecha_update = models.DateTimeField(auto_now = False)


