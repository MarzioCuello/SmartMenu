from django.shortcuts import render
from rest_framework import generics
from SmartMenuServer.models import Restaurant, Menu, Plate, User, Reservation, Order, OrderItem
from SmartMenuServer.serializers import RestaurantSerializer, MenuSerializer, PlateSerializer, UserSerializer, ReservationSerializer, OrderSerializer, OrderItemSerializer
from django.db.models import Q
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.


class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name']

class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer



class MenuList(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class MenuDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class PlateList(generics.ListCreateAPIView):
    queryset = Plate.objects.all()
    serializer_class = PlateSerializer


class PlateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Plate.objects.all()
    serializer_class = PlateSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ReservationList(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer


class ReservationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemList(generics.ListCreateAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class OrderItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
