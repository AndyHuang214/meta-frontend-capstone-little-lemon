// Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import './Header.css'; // Optional: for styling
import Navigation from './Navigation';
import MenuIcon from './MenuIcon';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    useEffect(() => {
    // Function to check for clicks outside the header
    const handleClickOutside = (event) => {
      // If the header ref exists and the click is outside the header element
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [headerRef]); // The effect depends on headerRef, so it only runs once

  return (
    <header ref={headerRef}>
      <div className="header-container">
        <img
          src="/Logo-with-text-yellow16@4x.png" // Replace with your actual logo path
          alt="Site Logo"
          className="logo-header"
        />
      <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MenuIcon onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;