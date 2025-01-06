
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WaterValueViewSet

router = DefaultRouter()
router.register(r'watervalues', WaterValueViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
