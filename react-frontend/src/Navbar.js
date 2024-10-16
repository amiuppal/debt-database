import React from 'react';
import './styles.css';
import logo from './logo.png';

export default function Navbar() {
  return ( 
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar_title">
          <h1>UK Debt Database</h1>
        </div>
      </div>
    </nav>
  );
}