import pandas as pd
from django.core.management.base import BaseCommand
from website.models import Region  

class Command(BaseCommand):
    help = 'Import data from Excel'

    def handle(self, *args, **kwargs):
        df = pd.read_excel('data/debtstats.xls')

        for _, row in df.iterrows():
            Region.objects.create(
                region_name=row['region_name'],  
                percentage=row['percentage'],
                median=row['median'],
                percentile_25=row['percentile_25'],
                percentile_75=row['percentile_75'],
                frequency=row['frequency'],
                frequency_legend=row['frequency_legend'],
            )

        self.stdout.write(self.style.SUCCESS('Data import successful.'))
