// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-section">
          <img src="/Logo-yellow 20@4x.png" alt="Site Logo" className="logo" />
        </div>

        <div className="spacer" />

        <div className="link-columns">
          <div className="column">
            <h4>Doormat<br/>Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>

          <div className="column">
            <h4>Contact</h4>
            <ul>
              <li>3913 NE 163rd St <br/>North Miami Beach, FL 33160</li>
              <li>745-945-9240</li>
              <li>Little.Lemon@gmail.com</li>
            </ul>
          </div>

          <div className="column">
            <h4>Support</h4>
            <ul>
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