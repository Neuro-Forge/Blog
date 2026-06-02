from django.urls import path
from . import views
urlpatterns = [
	# Define API routes here, e.g.:
	# path('posts/', views.post_list, name='post_list'),
path('products/', views.get_products.as_view(), name='product_list'),
# path('categories/', views.get_categories, name='category_list'),
# path('orders/', views.get_orders, name='order_list'),

]
