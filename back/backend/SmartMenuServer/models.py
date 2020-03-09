from django.db import models

# Create your models here.

STATUS_ENUM = {
    ('0', 'iniciado'),
    ('1', 'pendiente'),
    ('2', 'en proceso'),
    ('3', 'finalizado'),
}


class Restaurant(models.Model):
    name = models.CharField(max_length=120)
    latitude = models.CharField(max_length=120)
    longitude = models.CharField(max_length=120)
    reservations = []  # aca van las reservations
    menus = []  # aca van los menus


class Menu(models.Model):
    name = models.CharField(max_length=120)
    restaurant_id = models.ForeignKey(Restaurant, related_name='menues', null=True, on_delete=models.SET_NULL)
    plates = []  # aca van los plates


class Plate(models.Model):
    name = models.CharField(max_length=120)
    price = models.IntegerField(default=0)
    menu_id = models.ForeignKey(Menu, null=True, related_name='plates', on_delete=models.SET_NULL)


class User(models.Model):
    name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    image = models.CharField(max_length=120)


class Reservation(models.Model):
    time = models.CharField(max_length=120)
    status = models.CharField(max_length=120, choices=STATUS_ENUM, default='0')
    restaurant_id = models.ForeignKey(Restaurant, related_name='reservations', null=True, on_delete=models.SET_NULL)
    host_id = models.ForeignKey(User, null=True, related_name='reservations', on_delete=models.SET_NULL)
    orders = []


class Order(models.Model):
    reservation_id = models.ForeignKey(Reservation, related_name='orders', null=True, on_delete=models.SET_NULL)
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    items = []


class OrderItem(models.Model):
    order_id = models.ForeignKey(Order, related_name='items',null=True, on_delete=models.SET_NULL)
    plate_id = models.ForeignKey(Plate, null=True, on_delete=models.SET_NULL)