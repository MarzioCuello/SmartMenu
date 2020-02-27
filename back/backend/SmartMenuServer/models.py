from django.db import models

# Create your models here.

STATUS_ENUM = {
    ('0', 'iniciado'),
    ('1', 'pendiente'),
    ('2', 'en proceso'),
    ('3', 'finalizado'),
}


class Restaurant(models.Model):
    Restaurant_id = models.IntegerField()
    Restaurant_name = models.CharField(max_length=120)
    Restaurant_latitude = models.CharField(max_length=120)
    Restaurant_longitude = models.CharField(max_length=120)
    Restaurant_Reservations = []  # aca van las reservations
    Restaurant_Menus = []  # aca van los menus


class Menu(models.Model):
    Menu_id = models.IntegerField()
    Menu_name = models.CharField(max_length=120)
    Menu_Restaurant_id = models.ForeignKey(Restaurant, null=True, on_delete=models.SET_NULL)
    Menu_Plates = []  # aca van los plates


class Plate(models.Model):
    Plate_id = models.IntegerField()
    Plate_name = models.CharField(max_length=120)
    Plate_Menu = models.ForeignKey(Menu, null=True, on_delete=models.SET_NULL)


class User(models.Model):
    User_id = models.IntegerField()
    User_name = models.CharField(max_length=120)
    User_last_name = models.CharField(max_length=120)
    User_email = models.CharField(max_length=120)
    User_image_src = models.CharField(max_length=120)


class Reservation(models.Model):
    Reservation_id = models.IntegerField()
    Reservation_time = models.CharField(max_length=120)
    Reservation_Status = models.CharField(max_length=120, choices=STATUS_ENUM, default='0')
    Reservation_Restaurant_id = models.ForeignKey(Restaurant, null=True, on_delete=models.SET_NULL)
    Reservation_Host_Id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)


class Order(models.Model):
    Order_id = models.IntegerField()
    Order_Reservation_id = models.ForeignKey(Reservation, null=True, on_delete=models.SET_NULL)
    Order_User_id = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    Order_OrderItems = []


class OrderItem(models.Model):
    OrderItem_id = models.IntegerField()
    Order_Order_id = models.ForeignKey(Order, null=True, on_delete=models.SET_NULL)
    Order_Plate_id = models.ForeignKey(Plate, null=True, on_delete=models.SET_NULL)