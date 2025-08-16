import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingContactInfoPage from './BookingContactInfoPage';
import AboutPage from './AboutPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import BookingConfirmationPage from './BookingConfirmationPage';

function App() {
  const [bookingState, setBookingState] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Select One',
    specialRequest: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const updateBookingState = (updates) => {
    setBookingState(prevState => ({
      ...prevState,
      ...updates
    }));
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/booking"
        element={<BookingPage
          bookingState={bookingState}
          updateBookingState={updateBookingState}
        />}
      />
      <Route
        path="/booking-contact"
        element={<BookingContactInfoPage
          bookingState={bookingState}
          updateBookingState={updateBookingState}
        />}
      />
      <Route path="/BookingConfirmation" element={<BookingConfirmationPage 
          bookingState={bookingState}
          updateBookingState={updateBookingState}/>} />
      <Route path="/orderonline" element={<OrderOnlinePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;