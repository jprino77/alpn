from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Usuario

@receiver(post_save, sender=User)
def create_or_update_user_usuario(sender, instance, created, **kwargs):
    user = instance
    if created:
        usuario = Usuario(user=user)
        usuario.save()