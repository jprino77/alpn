from django.db import models
from apps.usuario.models import User 

# Create your models here.
class TipoJuego (models.Model):
    codigo = models.CharField(max_length=3, null= False)
    descripcion = models.CharField(max_length=45, null= False)
    fecha_insert = models.DateTimeField(auto_now = True, null= True)
    fecha_delete = models.DateTimeField(auto_now = False, null= True)
    fecha_update = models.DateTimeField(auto_now = False, null= True)
    
    class Meta:
        db_table = "tipo_juego"

    def __unicode__(self):
        return self.pk

class Partida (models.Model):
    cantidad_errores = models.IntegerField(default=0)
    cantidad_movimientos = models.IntegerField(default=0)
    nivel = models.IntegerField(null=True)
    hora_inicio = models.TimeField(null=True)
    hora_fin = models.TimeField(null=True)
    tipo_juego =  models.ForeignKey(TipoJuego, null=False)
    usuario =  models.ForeignKey(User, null=True)
    fecha_insert = models.DateTimeField(auto_now = True, null= True)
    fecha_delete = models.DateTimeField(auto_now = False, null= True)
    fecha_update = models.DateTimeField(auto_now = False, null= True)

    class Meta:
        db_table = "partida"

    def __unicode__(self):
        return self.pk

