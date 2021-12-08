from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    sku = models.CharField(max_length=50)
    price = models.DecimalField(decimal_places=2,max_digits=10, default=0)
    inventory = models.IntegerField(default=0)
    create_date= models.DateTimeField()
    create_user= models.IntegerField()
    update_date= models.DateTimeField(blank=True, null=True)
    update_user= models.IntegerField(blank=True, null=True)
    delete_date= models.DateTimeField(blank=True, null=True)
    delete_user= models.IntegerField(blank=True, null=True)
    image = models.ImageField(null=True, upload_to='inventory/products/')
    active = models.BooleanField()
