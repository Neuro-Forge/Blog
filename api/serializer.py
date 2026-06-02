from rest_framework import serializers
from .models import category, product, userprofile, order, orderitem

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

        

