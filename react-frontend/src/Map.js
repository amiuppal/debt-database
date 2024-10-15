import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import http from "./http-common";

function MapComponent({ onRegionSelect }) {
  useEffect(() => {
    if (!document.getElementById("map")._leaflet_id) {
      const map = L.map("map").setView([54.5, -3], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );

      fetch("/map.geojson")
        .then((response) => response.json())
        .then((geoData) => {
          L.geoJSON(geoData, {
            style: () => ({
              fillColor: "white",
              weight: 2,
              opacity: 1,
              color: "gray",
              fillOpacity: 0.1,
            }),
            onEachFeature: function (feature, layer) {
              let tooltip;

              layer.on("mouseover", function (e) {
                const regionName = feature.properties.name;

                tooltip = L.tooltip({
                  permanent: false,
                  direction: "top",
                  className: "custom-tooltip",
                })
                  .setLatLng(e.latlng)
                  .setContent(regionName);

                tooltip.addTo(map);
              });

              layer.on("mouseout", function () {
                if (tooltip) {
                  map.removeLayer(tooltip);
                  tooltip = null;
                }
              });

              layer.on("click", () => {
                const regionID = feature.properties.name;
                fetchRegionData(regionID);
              });
            },
          }).addTo(map);
        });

      const fetchRegionData = (regionID) => {
        http
          .get(`/api/region-data/${regionID}`)
          .then((response) => {
            console.log(response.data);
            onRegionSelect(response.data);
          })
          .catch((error) => {
            console.error("Error fetching region data:", error);
          });
      };
    }

    return () => {
      const mapContainer = document.getElementById("map");
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null;
      }
    };
  }, [onRegionSelect]);

  return (
    <div className="map__container">
      <div id="map" style={{ height: "375px", width: "100%" }}></div>
    </div>
  );
}

export default MapComponent;
