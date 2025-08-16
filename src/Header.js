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
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [headerRef]);

    return (
        <header ref={headerRef}>
            <div className="header-container">
                <img role="Little Lemon site logo"
                    src="/Logo-with-text-yellow16@4x.png"
                    alt="Little Lemon site logo"
                    className="logo-header"
                />
                <Navigation
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                    // ARIA attributes for the navigation
                    aria-label="Main navigation"
                    role="navigation"
                />
                <MenuIcon
                    onClick={toggleMenu}
                    // ARIA attributes for the button
                    aria-controls="main-navigation"
                    aria-expanded={isMenuOpen}
                />
            </div>
        </header>
    );
};

export default Header;