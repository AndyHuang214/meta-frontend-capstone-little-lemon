// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer aria-label="Little Lemon Footer Navigation and Contact Information">
      <div className="footer-container">
        <div className="logo-section">
          <img
            src="/Logo-yellow 20@4x.png"
            alt="Little Lemon site logo"
            className="logo-footer"
          />
        </div>
        <div className="spacer" />
        <div className="link-columns" role="list">
          <div className="column" role="listitem">
            <h4 id="doormat-nav-heading">Doormat<br/>Navigation</h4>
            <ul aria-labelledby="doormat-nav-heading">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
          <div className="column" role="listitem">
            <h4 id="contact-heading">Contact</h4>
            <ul aria-labelledby="contact-heading">
              <li>3913 NE 163rd St <br/>North Miami Beach, FL 33160</li>
              <li><a href="tel:+17459459240">745-945-9240</a></li>
              <li><a href="mailto:little.lemon@gmail.com">Little.Lemon@gmail.com</a></li>
            </ul>
          </div>
          <div className="column" role="listitem">
            <h4 id="support-heading">Support</h4>
            <ul aria-labelledby="support-heading">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>
        </div>
        <div className="spacer" />
      </div>
    </footer>
  );
};

export default Footer;