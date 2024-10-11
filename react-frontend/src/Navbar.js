import React from 'react';
import './styles.css';
import logo from './logo.png';

export default function Navbar() {
  return ( 
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links">Debt Mapper</a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__links">Budgeting Tool</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}