from django.urls import path
from . import views
urlpatterns = [
	# Define API routes here, e.g.:
	# path('posts/', views.post_list, name='post_list'),
path('products/', views.get_products.as_view(), name='product_list'),
path('products/<int:id>/', views.get_products.as_view(), name='product_detail'),
# path('categories/', views.get_categories, name='category_list'),
# path('orders/', views.get_orders, name='order_list'),
path('cart/', views.get_cart),
path('cart/add/',views.add_to_cart),
path('cart/remove/', views.remove_from_cart)


]
