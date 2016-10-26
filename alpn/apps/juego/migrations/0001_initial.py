# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Partida',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('cantidad_errores', models.IntegerField(default=0)),
                ('cantidad_movimientos', models.IntegerField(default=0)),
                ('nivel', models.IntegerField(null=True)),
                ('hora_inicio', models.TimeField(null=True)),
                ('hora_fin', models.TimeField(null=True)),
                ('fecha_insert', models.DateTimeField(auto_now=True)),
                ('fecha_delete', models.DateTimeField()),
                ('fecha_update', models.DateTimeField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TipoJuego',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('descripcion', models.CharField(max_length=45)),
                ('fecha_insert', models.DateTimeField(auto_now=True)),
                ('fecha_delete', models.DateTimeField()),
                ('fecha_update', models.DateTimeField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='partida',
            name='tipo_juego',
            field=models.ForeignKey(to='juego.TipoJuego'),
            preserve_default=True,
        ),
    ]
