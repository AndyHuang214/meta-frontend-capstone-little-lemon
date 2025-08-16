import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BookingForm from './BookingForm';
import Footer from './Footer';

export function initializeTimes (date) {

    if (date === undefined) {
        return [];
    }

    const [year, month, day] = date.split("-").map(Number);
    const bookingDate = new Date(year, month-1, day);

    const availableTimes = window.fetchAPI(bookingDate);
    console.log("initializeTimes:", date, bookingDate, availableTimes);
    return availableTimes;
}

export function updateTimes(state, action) {//retrun new state
    return initializeTimes(action.date);
}



function BookingPage({ bookingState, updateBookingState }) {
    //Make sure fetchAPI is loaded before parse BookingPage
    useEffect(() => {
    const checkAPI = () => {
        if (window.fetchAPI) {
        const times = window.fetchAPI(new Date());
        console.log(times);
        } else {
        console.warn('fetchAPI not loaded yet');
        }
    };

    // Retry a few times if needed
    const interval = setInterval(() => {
        if (window.fetchAPI) {
        checkAPI();
        clearInterval(interval);
        }
    }, 100);

    return () => clearInterval(interval);
    }, []);

  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(bookingState.date));


  const submitForm = (formData) => {
    updateBookingState(formData);
    const result = window.submitAPI(formData);

    if (result) {
      console.log("Reservation successful:", formData);
      // Use navigate to go to the confirmation page, passing the form data in state
      navigate('/booking-contact');
    }
    else {
      console.error("Reservation failed.");
    }
  };

  return (
    <>
      <Header />
      <BookingForm initialValues={bookingState} availableTimes={availableTimes} onDateChanged ={dispatch} submitForm={submitForm}/>
      <Footer />
    </>
  );
}

export default BookingPage;