import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingContactInfoPage from './BookingContactInfoPage';
import AboutPage from './AboutPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import BookingConfirmationPage from './BookingConfirmationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking-contact" element={<BookingContactInfoPage />} />
      <Route path="/BookingConfirmation" element={<BookingConfirmationPage />} />
      <Route path="/orderonline" element={<OrderOnlinePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
