# Generated by Django 5.1.2 on 2024-10-16 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("website", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="region",
            name="region_name",
            field=models.CharField(max_length=50),
        ),
    ]
