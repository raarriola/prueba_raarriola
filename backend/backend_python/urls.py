"""backend_python URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from users.views import user_list, user, permissions
from inventory.views import product_list, product, product_list_home, image
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users', user_list,name="user-list"),
    path('user/<int:pk>', user,name="user"),
    path('permissions/<slug:module>', permissions,name="perm"),
    path('product/<int:pk>/image', image,name="image"),
    path('product/<int:pk>', product,name="product"),
    path('products/home', product_list_home,name="product_list_home"),
    path('products', product_list,name="product_list"), 
    path('token/', TokenObtainPairView.as_view(),name="token_obtain_pair"), 
    path('token/refresh/', TokenRefreshView.as_view(),name="token_refresh"), 
    path('api/token/verify', TokenVerifyView.as_view(),name="token_verify"), 
]
