from rest_framework import serializers
from SmartMenuServer.models import Restaurant, Menu, Plate, User, Reservation, Order, OrderItem, Category, Page


class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = ('id', 'name', 'price', 'photo', 'description', 'category_id')


class CategorySerializer(serializers.ModelSerializer):
    plates = PlateSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'plates')


class PageSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Page
        fields = ('id', 'name', 'categories')


class MenuSerializer(serializers.ModelSerializer):
    pages = PageSerializer(many=True, read_only=True)

    class Meta:
        model = Menu
        fields = ('id', 'name', 'restaurant_id', 'pages')


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
