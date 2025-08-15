// Navigation.jsx
import React from 'react';
import './Navigation.css'; // Optional styling

const Navigation = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className={isMenuOpen ? 'nav-open' : ''}>
      <ul className="nav-list">
        <li><a href="/" onClick={toggleMenu}>Home</a></li>
        <li><a href="/about" onClick={toggleMenu}>About</a></li>
        <li><a href="/booking" onClick={toggleMenu}>Reservations</a></li>
        <li><a href="/orderonline" onClick={toggleMenu}>Order Online</a></li>
        <li><a href="/login" onClick={toggleMenu}>Login</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;