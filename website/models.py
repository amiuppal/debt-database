from django.db import models

class Region(models.Model):
    region_name = models.CharField(max_length=30)
    percentage = models.DecimalField(max_digits=10, decimal_places=2)
    median = models.DecimalField(max_digits=10, decimal_places=2)
    percentile_25 = models.DecimalField(max_digits=10, decimal_places=2)
    percentile_75 = models.CharField(max_length=10)
    frequency = models.CharField(max_length=30)
    frequency_legend = models.CharField(max_length=30)

    def __str__(self):
        return self.region_name
