from django.urls import path
from django.conf.urls import url
from . import views

# Restaurant, Menu, Plate, User, Reservation, Order, OrderItem


urlpatterns = [
    url(r'^restaurante$', views.RestaurantList.as_view()),
    url(r'^restaurante/(?P<pk>[0-9]+)$', views.RestaurantDetail.as_view()),
    url(r'^menu$', views.MenuList.as_view()),
    url(r'^menu/(?P<pk>[0-9]+)$', views.MenuDetail.as_view()),
    url(r'^plate$', views.PlateList.as_view()),
    url(r'^plate/(?P<pk>[0-9]+)$', views.PlateDetail.as_view()),
    url(r'^user$', views.UserList.as_view()),
    url(r'^user/(?P<pk>[0-9]+)$', views.UserDetail.as_view()),
    url(r'^reservation$', views.ReservationList.as_view()),
    url(r'^reservation/(?P<pk>[0-9]+)$', views.ReservationDetail.as_view()),
    url(r'^order$', views.OrderList.as_view()),
    url(r'^order/(?P<pk>[0-9]+)$', views.OrderDetail.as_view()),
    url(r'^orderitem$', views.OrderItemList.as_view()),
    url(r'^orderitem/(?P<pk>[0-9]+)$', views.OrderItemDetail.as_view())
]
