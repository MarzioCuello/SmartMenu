from django.contrib import admin
from SmartMenuServer.models import Restaurant, Menu, Plate, User, Reservation, Order, OrderItem
# Register your models here.

admin.site.register(Menu)
admin.site.register(Restaurant)
admin.site.register(Plate)
admin.site.register(User)
admin.site.register(Reservation)
admin.site.register(Order)
admin.site.register(OrderItem)