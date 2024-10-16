from django.db import models

class Region(models.Model):
    region_name = models.CharField(max_length=30)
    percentage = models.IntegerField()
    median = models.IntegerField()
    percentile_25 = models.IntegerField()
    percentile_75 = models.IntegerField()
    frequency = models.IntegerField()
    frequency_legend = models.CharField(max_length=30)

    def __str__(self):
        return self.region_name
