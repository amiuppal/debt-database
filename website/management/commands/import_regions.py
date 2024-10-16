import pandas as pd
from django.core.management.base import BaseCommand
from website.models import Region
from django.db import IntegrityError

class Command(BaseCommand):
    help = 'Import data from CSV'

    def handle(self, *args, **kwargs):
        file_path = 'data/debtstats.csv'
        
        df = pd.read_csv(file_path)
  
        for _, row in df.iterrows():
            region_name = row['region_name']
            if not Region.objects.filter(region_name=region_name).exists():
                try:
                    Region.objects.create(
                        region_name=region_name,
                        percentage=row['percentage'],
                        median=row['median'],
                        percentile_25=row['percentile_25'],
                        percentile_75=row['percentile_75'],
                        frequency=row['frequency'],
                        frequency_legend=row['frequency_legend'],
                    )
                    self.stdout.write(self.style.SUCCESS(f'Successfully added region: {region_name}'))
                except IntegrityError:
                    self.stdout.write(self.style.WARNING(f'Region {region_name} already exists, skipping...'))
            else:
                self.stdout.write(self.style.WARNING(f'Region {region_name} already exists, skipping...'))

        self.stdout.write(self.style.SUCCESS('Data import from CSV completed.'))