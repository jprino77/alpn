from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class TipoUsuario (models.Model):
    codigo = models.CharField(max_length=3, null= False)
    descripcion = models.CharField(max_length=45, null= False)
    fecha_insert = models.DateTimeField(auto_now = True, null= True)
    fecha_delete = models.DateTimeField(auto_now = False, null= True)
    fecha_update = models.DateTimeField(auto_now = False, null= True)

    class Meta:
        db_table = "tipo_usuario"

    def __unicode__(self):
        return self.descripcion

class Usuario (models.Model):
    user = models.OneToOneField(User, null=True, blank= True, default= None, on_delete=models.CASCADE)
    fecha_nacimiento = models.DateField(auto_now = False, default= None)
    tipo_usuario =  models.ForeignKey(TipoUsuario, null=False, blank= True, default= None)
    tutor = models.ForeignKey('self', null=True, blank= True, default= None)

    class Meta:
        db_table = "usuario"
        
    def __unicode__(self):  # __unicode__ for Python 2
        return unicode(self.user)