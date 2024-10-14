from rest_framework import serializers

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = 'website.Region' 
        fields = ['region_name', 'percentage', 'median', 'percentile_25', 'percentile_75', 'frequency', 'frequency_legend']  
