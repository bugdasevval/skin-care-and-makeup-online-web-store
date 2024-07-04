from django.urls import path
from . import views

urlpatterns = [
    #Leave as empty string for base url
    path('', views.store, name="store"),
    path('skincare/', views.skincare, name="skincare"),
    path('cart/', views.cart, name="cart"),
    path('login/', views.login_view, name="login"),
    path('checkout/', views.checkout, name="checkout"),
    path('update_item/', views.updateItem, name="update_item"),
    path('process_order/', views.processOrder, name="process_order"),
    path('register/', views.register_view, name='register'),
    path('logout/', views.logout_view, name="logout"),
    path('product/<int:pk>/', views.product_detail, name='product_detail'),
]
