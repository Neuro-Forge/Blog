from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class category(models.Model):
    
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True)
    


    def __str__(self):
        return self.name
    
class product(models.Model):
    category = models.ForeignKey(category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    decription = models.TextField(blank=True)
    price =models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/', null = True, blank = True)
    
    def __str__(self):
        return self.name
    
class userprofile(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    avatar = models.URLField(blank=True)
    
    def __str__(self):
        return self.user.username

class order(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"order {self.id}"     
    
class orderitem(models.Model):
    order = models.ForeignKey(order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.quantity} x {self.product.name}"