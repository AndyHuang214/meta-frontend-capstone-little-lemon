import React from 'react';
import './MenuIcon.css';

const MenuIcon = ({ onClick }) => {
  return (
    <button className="menu-icon" onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default MenuIcon;