# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('juego', '0002_partida_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partida',
            name='fecha_delete',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='partida',
            name='fecha_insert',
            field=models.DateTimeField(auto_now=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='partida',
            name='fecha_update',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='tipojuego',
            name='fecha_delete',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='tipojuego',
            name='fecha_insert',
            field=models.DateTimeField(auto_now=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='tipojuego',
            name='fecha_update',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterModelTable(
            name='partida',
            table='partida',
        ),
        migrations.AlterModelTable(
            name='tipojuego',
            table='tipo_juego',
        ),
    ]
