# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('usuario', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=45)),
                ('apellido', models.CharField(max_length=45)),
                ('fecha_nacimiento', models.DateTimeField()),
                ('mail', models.EmailField(max_length=100)),
                ('fecha_insert', models.DateTimeField(auto_now=True)),
                ('fecha_delete', models.DateTimeField()),
                ('fecha_update', models.DateTimeField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RenameModel(
            old_name='Tipo_Usuario',
            new_name='TipoUsuario',
        ),
        migrations.AddField(
            model_name='usuario',
            name='tipo_usuario',
            field=models.ForeignKey(to='usuario.TipoUsuario'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='usuario',
            name='tutor',
            field=models.ForeignKey(to='usuario.Usuario', null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='usuario',
            name='user',
            field=models.OneToOneField(to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
    ]
