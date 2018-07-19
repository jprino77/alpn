# -*- coding: utf-8 -*-

from apps.juego.models import Partida
from django.db import connection
from apps.juego.models import TipoJuego
from apps.usuario.models import Usuario


def estadistica_edad(tipo_juego):
    
    with connection.cursor() as cursor:
        cursor.execute("""SELECT CONCAT(YEAR(p.fecha_insert) - YEAR(u.fecha_nacimiento) - (RIGHT(p.fecha_insert, 5) < RIGHT(u.fecha_nacimiento, 5)), ' años') as edad, sum(p.cantidad_errores) as errores, sum(p.cantidad_movimientos) as movimientos
                        FROM partida p
                        inner join auth_user au on au.id = p.usuario_id
                        inner join usuario u on au.id = u.user_id
                        where p.tipo_juego_id = %s
                        group by 1;""", [tipo_juego])
        row = cursor.fetchall()
    return row

def estadistica_alumnos(juego_id, alumno_id):
   return Partida.objects.filter(tipo_juego__id = juego_id, usuario__id = alumno_id ).order_by('id')


def datos_filtro(tutor_id):
    return TipoJuego.objects.order_by('descripcion'), Usuario.objects.filter(tutor__id = tutor_id)