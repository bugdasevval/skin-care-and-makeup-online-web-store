from django.contrib import admin
from .models import Product, Category
# Register your models here.
from .models import *

admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Skincarepro)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(Kullanici)
