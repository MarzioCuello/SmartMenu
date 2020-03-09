from rest_framework import serializers
from SmartMenuServer.models import Restaurant, Menu, Plate, User, Reservation, Order, OrderItem

class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = ('id', 'name', 'menu_id')


class MenuSerializer(serializers.ModelSerializer):
    plates = PlateSerializer(many=True, read_only=True)
    class Meta:
        model = Menu
        fields = ('id', 'name', 'restaurant_id', 'plates')


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('id', 'order_id', 'plate_id')


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = ('id', 'reservation_id', 'user_id', 'items')


class ReservationSerializer(serializers.ModelSerializer):
    orders = OrderSerializer(many=True, read_only=True)
    class Meta:
        model = Reservation
        fields = ('id', 'time', 'status', 'restaurant_id', 'host_id', 'orders')


class UserSerializer(serializers.ModelSerializer):
    reservations = ReservationSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'name', 'last_name', 'email', 'image', 'reservations')

class RestaurantSerializer(serializers.ModelSerializer):
    menues = MenuSerializer(many=True, read_only=True)
    reservations = ReservationSerializer(many=True, read_only=True)
    class Meta:
        model = Restaurant
        fields = ('id', 'name', 'latitude', 'longitude', 'menues', 'reservations')