import React, { useState } from 'react';
import './styles.css';
import Navbar from './Navbar';
import MapComponent from './Map';

export default function App() {
  const [regionData, setRegionData] = useState(null);
  const handleRegionSelect = (data) => {
    setRegionData();
  }
  return (
    <div>
        <Navbar />
          <div className="main">
            <div className="main__container">
              <div className="main__content">
                <h1>Debt Statistics by UK Region</h1>
                <MapComponent onRegionSelect={handleRegionSelect} />
              </div>
              <div className="region-data">
                {regionData ? (
                  <>
                    <h2>Region: {regionData.region_name}</h2>
                    <p>Percentage of households with financial debt: {regionData.percentage}</p>
                    <p>Median: {regionData.median}</p>
                    <p>25th Percentile: {regionData.percentile_25}</p>
                    <p>75th Percentile: {regionData.percentile_75}</p>
                    <p>Frequency: {regionData.frequency}</p>
                  </>
                ) : (
                  <h3>Select a region to view its data.</h3>
                )}
              </div>
          </div>
        </div>
      </div>
    );
  }