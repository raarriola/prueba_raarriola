from .models import Product
from rest_framework import serializers

class ProductListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'sku', 'inventory']

class ProductDetailSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'sku', 'inventory','description','image']

class ProductWriteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'image','sku', 'inventory','description','active','create_date','update_date','delete_date','create_user','update_user','delete_user']

