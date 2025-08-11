// Navigation.jsx
import React from 'react';
import './Navigation.css'; // Optional styling

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Reservations</a></li>
        <li><a href="#contact">Order Online</a></li>
        <li><a href="#contact">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;