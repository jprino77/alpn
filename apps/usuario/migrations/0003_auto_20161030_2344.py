# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0002_auto_20161026_0021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tipousuario',
            name='fecha_delete',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='tipousuario',
            name='fecha_insert',
            field=models.DateTimeField(auto_now=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='tipousuario',
            name='fecha_update',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='usuario',
            name='fecha_delete',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='usuario',
            name='fecha_insert',
            field=models.DateTimeField(auto_now=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='usuario',
            name='fecha_update',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterModelTable(
            name='tipousuario',
            table='tipo_usuario',
        ),
        migrations.AlterModelTable(
            name='usuario',
            table='usuario',
        ),
    ]
