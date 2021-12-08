from .models import Product
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import ProductListSerializer, ProductDetailSerializer, ProductWriteSerializer
from rest_framework import viewsets
from users import functions
from rest_framework.response import Response
from datetime import datetime
import io
import base64
from rest_framework.permissions import AllowAny 
from rest_framework.parsers import JSONParser
from rest_framework_simplejwt.models import TokenUser
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from django.http import FileResponse,HttpResponse


class ProductPublicViewSet(TokenObtainPairView):
    def get(self, request):
        queryset = Product.objects.filter(active=True).exclude(inventory__lte=5)
        serializer = ProductListSerializer(queryset, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ViewSet):
    def list(self, request):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.view_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        queryset = Product.objects.filter(active=True)
        serializer = ProductListSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def retrieve(self,request,pk):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.view_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        instance = Product.objects.get(id=pk)
        serializer = ProductDetailSerializer(instance)
        return Response(serializer.data)

    def load_image(self,request,pk):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.change_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        data = {'image':request.FILES["image"]}
        instance = Product.objects.get(id=pk)
        serializer = ProductWriteSerializer(instance,data=data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'ok':'ok'})
    
    def get_image(self,request,pk):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.view_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        instance = Product.objects.get(id=pk)
        img = open(instance.image.path, 'rb')
        response = FileResponse(img)
        return response
    
    def get_image_base64(self,request,pk):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.view_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        instance = Product.objects.get(id=pk)
        try:
            with open(instance.image.path, 'rb') as img:
                encod = base64.b64encode(img.read())
            return HttpResponse(encod)
        except:
            return HttpResponse("")

    def create(self,request,*args, **kwargs):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.add_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        data = request.data
        data["active"]=True
        data["create_date"]=datetime.now()
        data["create_user"]=user.id
        serializer = ProductWriteSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def partial_update(self,request,*args, **kwargs):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.change_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        instance = Product.objects.get(id=kwargs.get('pk'))
        data = request.data
        data["update_date"] = datetime.now()
        data["update_user"]=user.id
        serializer = ProductWriteSerializer(instance,data=data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(ProductDetailSerializer(instance).data)

    def destroy(self,request,*args, **kwargs):
        user = User.objects.get(id=request.user.id)
        if(user.has_perm('inventory.delete_product')==False):
            return Response({"detail":"No se tiene permiso para esta accion"},status.HTTP_403_FORBIDDEN)
        instance = Product.objects.get(id=kwargs.get('pk'))
        data = {"active":False}
        data["delete_date"] =  datetime.now()
        data["delete_user"]=user.id
        serializer = ProductWriteSerializer(instance,data=data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(ProductDetailSerializer(instance).data)

product_list= ProductViewSet.as_view({
    'get': 'list',
    'post':'create'
})
product_list_home= ProductPublicViewSet.as_view()
product = ProductViewSet.as_view({
    'get':'retrieve',
    'put':'partial_update',
    'delete':'destroy'
})

image = ProductViewSet.as_view({
    'post':'load_image',
    'get':'get_image'
})
image64 = ProductViewSet.as_view({
    'get':'get_image_base64'
})