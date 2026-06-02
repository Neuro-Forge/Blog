from django.shortcuts import render
from .models import category, product, userprofile, order, orderitem
from .serializer import categorySerializer, productSerializer, userprofileSerializer, orderSerializer, orderitemSerializer
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.
from rest_framework import status, generics, mixins


class get_products(generics.ListCreateAPIView, generics.RetrieveUpdateDestroyAPIView):
    queryset = product.objects.all()
    serializer_class = productSerializer
    lookup_field = 'id'
    
