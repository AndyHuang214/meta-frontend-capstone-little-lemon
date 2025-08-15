import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./BookingConfirmationPage.css"

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingDetails = location.state?.bookingDetails || {
    date: 'N/A', time: 'N/A', guests: 'N/A', occasion: 'N/A', specialRequest: 'N/A'
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="header-content">
          <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <h1 className="confirmation-title">Booking Confirmed!</h1>
        </div>
        <p className="confirmation-message">
          Thank you for your reservation. We look forward to seeing you.
        </p>
        <div className="details-card">
          <h2 className="details-title">Reservation Details</h2>
          <ul className="details-list">
            <li>
              <strong>Date:</strong> {bookingDetails.date}
            </li>
            <li>
              <strong>Time:</strong> {bookingDetails.time}
            </li>
            <li>
              <strong>Guests:</strong> {bookingDetails.guests}
            </li>
            <li>
              <strong>Occasion:</strong> {bookingDetails.occasion}
            </li>
            <li>
              <strong>Special Request:</strong> {bookingDetails.specialRequest || 'None'}
            </li>
          </ul>
        </div>
        <button className="back-button" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;
