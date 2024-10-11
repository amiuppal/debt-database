import React, { useEffect } from 'react';
import './styles.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
  useEffect(() => {
    const map = L.map('map').setView([54.5, -3], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    fetch('/map.geojson')
      .then((response) => response.json())
      .then((geoData) => {
        L.geoJSON(geoData, {
          style: (feature) => ({
            fillColor: 'white',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 0.7,
          }),
          onEachFeature: (feature, layer) => {
            layer.on('click', () => {
              const region = feature.properties.name;
              alert('You clicked on ' + region);
            });
          },
        }).addTo(map);
      });
  }, []);

  return (
    <div className="map__container">
      <div id="map"></div>
    </div>
  );
}

export default MapComponent;
