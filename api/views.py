from django.shortcuts import render
from .models import category, product, userprofile, order, orderitem, cart, cartitem
from .serializer import categorySerializer, productSerializer, userprofileSerializer, orderSerializer, orderitemSerializer
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.
from rest_framework import status, generics, mixins
from rest_framework.decorators import api_view
from .serializer import cartserializer
class get_products(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = product.objects.all()
    serializer_class = productSerializer
    lookup_field = 'id'
    

@api_view(['GET'])
def get_cart(request):
    cart_obj, created = cart.objects.get_or_create(user=None)
    serializer = cartserializer(cart_obj)
    return Response(serializer.data)

@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    product_obj = product.objects.get(id=product_id)
    
    cart_obj, created = cart.objects.get_or_create(user=None)
    item, created = cartitem.objects.get_or_create(cart=cart_obj, product=product_obj)
    
    if not created:
        item.quantity += 1
        item.save()
        
    return Response({'message': 'Product added to cart'}, status=status.HTTP_200_OK)

@api_view(['POST'])
def remove_from_cart(request):
    item_id = request.data.get('item_id')
    cartitem.objects.filter(id=item_id).delete()
    return Response({'message': 'Product removed from cart'}, status=status.HTTP_200_OK)
  