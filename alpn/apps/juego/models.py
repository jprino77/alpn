from django.db import models
from apps.usuario.models import Usuario 

# Create your models here.
class TipoJuego (models.Model):
    descripcion = models.CharField(max_length=45, null= False)
    fecha_insert = models.DateTimeField(auto_now = True)
    fecha_delete = models.DateTimeField(auto_now = False)
    fecha_update = models.DateTimeField(auto_now = False)
    def __unicode__(self):
        return self.title

class Partida (models.Model):
    cantidad_errores = models.IntegerField(default=0)
    cantidad_movimientos = models.IntegerField(default=0)
    nivel = models.IntegerField(null=True)
    hora_inicio = models.TimeField(null=True)
    hora_fin = models.TimeField(null=True)
    tipo_juego =  models.ForeignKey(TipoJuego, null=False)
    usuario =  models.ForeignKey(Usuario, null=True)
    fecha_insert = models.DateTimeField(auto_now = True)
    fecha_delete = models.DateTimeField(auto_now = False)
    fecha_update = models.DateTimeField(auto_now = False)
    def __unicode__(self):
        return self.title

