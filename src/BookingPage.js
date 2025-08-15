import React, { useReducer } from 'react';
import Header from './Header';
import BookingForm from './BookingForm';
import Footer from './Footer';

    export function initializeTimes (date) {
    if (!date) {
        // Return a default set of times for today
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
        ];
    }
    // Return times based on a specific date, if provided
    return [
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];
    }

    export function updateTimes(state, action) {//retrun new state
        return initializeTimes(action.date);
    }

function BookingPage() {




    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} onDateChanged ={dispatch }/>
      <Footer />
    </>
  );
}

export default BookingPage;