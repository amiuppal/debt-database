import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Navbar";
import MapComponent from "./Map";

export default function App() {
  const [selectedRegionData, setSelectedRegionData] = useState(null);

  const handleRegionSelect = (data) => {
    setSelectedRegionData(data);
  };

  return (
    <>
    <head>
      <title>UK Debt Database</title>
    </head>
      <Navbar />
      <div className="main">
        <div className="main__container">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Select a region to view its debt statistics</h2>
            <p>Just hover for the region name!</p>
            {selectedRegionData && (
              <div className="region-name">
                <h3>Region:</h3>
                <h2>{selectedRegionData.region_name}</h2>
              </div>
            )}
          </div>
  
          {/* Map Container */}
          <div className="map__container">
            <MapComponent onRegionSelect={handleRegionSelect} />
          </div>
        </div>
  
        {/* Statistics Row Inside Main Container */}
        <div className="statistics">
          {selectedRegionData ? (
            <>
              <div className="statistic">
                <strong>Percentage of Households with Financial Debt:</strong>
                <p>{selectedRegionData.percentage}</p>
              </div>
              <div className="statistic">
                <strong>Median:</strong>
                <p>{selectedRegionData.median}</p>
              </div>
              <div className="statistic">
                <strong>25th Percentile:</strong>
                <p>{selectedRegionData.percentile_25}</p>
              </div>
              <div className="statistic">
                <strong>75th Percentile:</strong>
                <p>{selectedRegionData.percentile_75}</p>
              </div>
              <div className="statistic">
                <strong>Frequency:</strong>
                <p>{selectedRegionData.frequency}</p>
              </div>
            </>
          ) : (
            <div className="statistic">
              <strong>No data available. Please select a region.</strong>
            </div>
          )}
        </div>
      </div>
    </>
  );  
}
