# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0002_auto_20161026_0021'),
        ('juego', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='partida',
            name='usuario',
            field=models.ForeignKey(to='usuario.Usuario', null=True),
            preserve_default=True,
        ),
    ]
