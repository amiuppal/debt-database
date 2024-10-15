from rest_framework import serializers
from .models import Region 

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = ['region_name', 'percentage', 'median', 'percentile_25', 'percentile_75', 'frequency', 'frequency_legend']
