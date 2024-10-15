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
      <Navbar />
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Debt Statistics by UK Region</h1>
            <MapComponent onRegionSelect={handleRegionSelect} />

            {selectedRegionData ? (
              <div className="region-data">
                <h2>Region: {selectedRegionData.region_name}</h2>
                <p>
                  Percentage of households with financial debt:{" "}
                  {selectedRegionData.percentage}
                </p>
                <p>Median: {selectedRegionData.median}</p>
                <p>25th Percentile: {selectedRegionData.percentile_25}</p>
                <p>75th Percentile: {selectedRegionData.percentile_75}</p>
                <p>Frequency: {selectedRegionData.frequency}</p>
              </div>
            ) : (
              <div className="region-data">
                <h2>Select a region to view its debt statistics.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
