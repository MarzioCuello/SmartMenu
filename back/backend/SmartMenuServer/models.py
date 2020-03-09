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

    def __str__(self):
        return "Restaurant " + str(self.pk) + ": " + str(self.name)


class Menu(models.Model):
    name = models.CharField(max_length=120)
    restaurant_id = models.ForeignKey(Restaurant, related_name='menues', null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return "Menu " + str(self.pk) + ": " + str(self.name) + " in " + str(self.restaurant_id)


class Plate(models.Model):
    name = models.CharField(max_length=120)
    price = models.IntegerField(default=0)
    menu_id = models.ForeignKey(Menu, null=True, related_name='plates', on_delete=models.SET_NULL)

    def __str__(self):
        return "Plate " + str(self.pk) + ": " + str(self.name) + " from " + str(self.menu_id)


class User(models.Model):
    name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    image = models.CharField(max_length=120)

    def __str__(self):
        return "User " + str(self.pk) + ": " + str(self.name) + " " + str(self.last_name)


class Reservation(models.Model):
    time = models.CharField(max_length=120)
    status = models.CharField(max_length=120, choices=STATUS_ENUM, default='0')
    restaurant_id = models.ForeignKey(Restaurant, related_name='reservations', null=True, on_delete=models.SET_NULL)
    host_id = models.ForeignKey(User, null=True, related_name='reservations', on_delete=models.SET_NULL)

    def __str__(self):
        return "Reservation " + str(self.pk) + ": " + str(self.host_id) + " in " + \
               str(self.restaurant_id) + " at " + str(self.time)


class Order(models.Model):
    reservation_id = models.ForeignKey(Reservation, related_name='orders', null=True, on_delete=models.SET_NULL)
    user_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return "Order " + str(self.pk) + ": from " + str(self.user_id) + " in " + str(self.reservation_id)


class OrderItem(models.Model):
    order_id = models.ForeignKey(Order, related_name='items', null=True, on_delete=models.SET_NULL)
    plate_id = models.ForeignKey(Plate, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return "Item " + str(self.pk) + ": from " + str(self.order_id)