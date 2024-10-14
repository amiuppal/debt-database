from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.conf import settings
from .serializers import RegionSerializer

def index(request):
    return render(request, 'index.html', {})
    
class RegionData(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, region_name, *args, **kwargs):
        try:
            region_data = Region.objects.get(name=region_name)  
            serializer = RegionSerializer(region_data)  
            return Response(serializer.data, status=200)
        except Region.DoesNotExist:
            return Response({'error': 'No data found.'}, status=404)