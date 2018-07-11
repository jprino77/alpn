# -*- coding: utf-8 -*-

from apps.juego.models import Partida
from django.db import connection

def estadistica_edad():
    with connection.cursor() as cursor:
        cursor.execute("""SELECT CONCAT(YEAR(p.fecha_insert) - YEAR(u.fecha_nacimiento) - (RIGHT(p.fecha_insert, 5) < RIGHT(u.fecha_nacimiento, 5)), ' años') as edad, sum(p.cantidad_errores) as errores, sum(p.cantidad_movimientos) as movimientos
                        FROM partida p
                        inner join auth_user au on au.id = p.usuario_id
                        inner join usuario u on au.id = u.user_id
                        group by 1;""")
        row = cursor.fetchall()
    return row

def estadistica_alumnos():
    # filter(usuario = alumno, tipo_juego = juego )
   return Partida.objects.order_by('id')