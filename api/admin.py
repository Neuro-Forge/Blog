from django.contrib import admin
from .models import category, product, userprofile, order, orderitem
# Register your models here.


admin.site.register(category)
admin.site.register(product)
admin.site.register(userprofile)    
admin.site.register(order)
admin.site.register(orderitem)
