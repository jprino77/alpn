from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class TipoUsuario (models.Model):
    descripcion = models.CharField(max_length=45, null= False)
    fecha_insert = models.DateTimeField(auto_now = True, null= True)
    fecha_delete = models.DateTimeField(auto_now = False, null= True)
    fecha_update = models.DateTimeField(auto_now = False, null= True)

    class Meta:
        db_table = "tipo_usuario"

    def __unicode__(self):
        return self.pk

class Usuario (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=45, null= False)
    apellido = models.CharField(max_length=45, null= False)
    fecha_nacimiento = models.DateTimeField(auto_now = False)
    mail = models.EmailField(max_length=100)
    tipo_usuario =  models.ForeignKey(TipoUsuario, null=False)
    tutor = models.ForeignKey('self', null=True)
    fecha_insert = models.DateTimeField(auto_now = True, null= True)
    fecha_delete = models.DateTimeField(auto_now = False, null= True)
    fecha_update = models.DateTimeField(auto_now = False, null= True)

    class Meta:
        db_table = "usuario"
        
    def __unicode__(self):
       return self.nombre   
