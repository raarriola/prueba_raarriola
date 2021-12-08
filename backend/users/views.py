from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer, UserWriteSerializer, PermissionSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from datetime import datetime
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import make_password

class UserViewSet(viewsets.ViewSet):

    def perms(self, request, module):
        user = User.objects.get(id=request.user.id)
        print(module)
        data=user.get_all_permissions()
        return Response({'Permissions':data})

    def list(self, request):
        queryset = User.objects.filter(is_active=True)
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
    def retrieve(self,request,pk):
        instance = User.objects.get(id=pk)
        serializer = UserSerializer(instance)
        return Response(serializer.data)

    def create(self,request,*args, **kwargs):
        data = request.data
        data["is_active"]=True
        data["is_staff"]=True
        data["password"] = make_password(data["password"])
        serializer = UserWriteSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def partial_update(self,request,*args, **kwargs):
        instance = User.objects.get(id=kwargs.get('pk'))
        data = request.data
        data["password"] = make_password(data["password"])
        serializer = UserWriteSerializer(instance,data=data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(UserSerializer(instance).data)
    def destroy(self,request,*args, **kwargs):
        instance = User.objects.get(id=kwargs.get('pk'))
        data = {"is_active":False}
        serializer = UserWriteSerializer(instance,data=data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(UserSerializer(instance).data)

user_list= UserViewSet.as_view({
    'get': 'list',
    'post':'create'
})
user = UserViewSet.as_view({
    'get':'retrieve',
    'put':'partial_update',
    'delete':'destroy'
})
permissions = UserViewSet.as_view({
    'get':'perms'
})