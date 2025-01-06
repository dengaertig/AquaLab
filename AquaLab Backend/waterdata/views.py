from rest_framework.viewsets import ModelViewSet
from .models import WaterValue
from .serializers import WaterValueSerializer

class WaterValueViewSet(ModelViewSet):
    queryset = WaterValue.objects.all()
    serializer_class = WaterValueSerializer
