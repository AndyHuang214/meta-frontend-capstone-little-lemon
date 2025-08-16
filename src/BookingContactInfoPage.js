import React, { useReducer, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import BookingContactInfoForm from './BookingContactInfoForm';

import Footer from './Footer';


function BookingContactInfoPage({ bookingState, updateBookingState }) {
  const navigate = useNavigate();

const submitForm = (formData) => {
    updateBookingState(formData);
    navigate('/BookingConfirmation', {bookingState:{bookingState},
          updateBookingState:{updateBookingState}});
};

  return (
    <>
      <Header />
      <BookingContactInfoForm
        initialValues={bookingState} // Pass initial values to the form
        updateBookingState = {updateBookingState}
        submitForm={submitForm}
        />
      <Footer />
    </>
  );
}

export default BookingContactInfoPage;