# waterdata/serializers.py
from rest_framework import serializers
from .models import WaterValue

class WaterValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterValue
        fields = '__all__'
