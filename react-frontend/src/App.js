import React from 'react';
import './styles.css';
import Navbar from './Navbar';
import MapComponent from './Map';

export default function App() {
  return (
    <div>
        <Navbar />
          <div className="main">
            <div className="main__container">
              <div className="main__content">
                <h1>Median Debt by UK Region</h1>
                <MapComponent />
              </div>
            </div>
         </div>
     </div>
  );
}