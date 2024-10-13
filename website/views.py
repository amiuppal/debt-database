from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from django.conf import settings
import json 

def index(request):
    return render(request, 'index.html', {})
    
class RegionData(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request, region_name, *args, **kwargs):
        df = pd.read_excel('data/debtstats.xls')
        region_data = df[df['region_name'] == region_name]
        if region_data.empty:
            return Response({'error': 'No data found'}, status=404)
        return Response(region_data.to_json(orient='records'), status=200)
