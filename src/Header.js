// Header.jsx
import React from 'react';
import './Header.css'; // Optional: for styling
import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img
          src="/Logo-with-text-yellow16@4x.png" // Replace with your actual logo path
          alt="Site Logo"
          className="logo"
        />
      <Navigation />
      </div>
    </header>
  );
};

export default Header;