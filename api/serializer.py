from rest_framework import serializers
from .models import category, product, userprofile, order, orderitem,cartitem,cart

class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = '__all__'
        
class productSerializer(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = '__all__'

class userprofileSerializer(serializers.ModelSerializer):
    class Meta:
        model = userprofile
        fields = '__all__'
        
class orderitemSerializer(serializers.ModelSerializer):
    class Meta:
        model = orderitem
        fields = '__all__'

class orderSerializer(serializers.ModelSerializer):
    items = orderitemSerializer(many=True, read_only=True)
    
    class Meta:
        model = order
        fields = '__all__'

        
class cartitemSerializer(serializers.ModelSerializer):
    
    product_name =serializers.CharField(source = 'prodcuct.name', read_only=True)
    product_price = serializers.DecimalField(source='prodcuct.price', max_digits=10, decimal_places=2, read_only=True)
    product_image = serializers.URLField(source='prodcuct.image.url', read_only=True)
    
    class Meta:
        model = cartitem
        fields= '__all__'


class cartserializer(serializers.ModelSerializer):
    items = cartitemSerializer(many=True, read_only=True)
    total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)
    
    class Meta:
        
        model = cart
        fields = '__all__'
        
