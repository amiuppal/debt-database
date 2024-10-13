from django.urls import path
from . import views
from .views import RegionData

urlpatterns = [
    path("", views.index, name="index"),
    path('api/region-data/<str:region_name>/', RegionData.as_view(), name='region-data'),
]
