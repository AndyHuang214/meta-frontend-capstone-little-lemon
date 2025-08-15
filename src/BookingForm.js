import React, { useState } from 'react';
import "./BookingForm.css"

const BookingForm = ({availableTimes = [], onDateChanged }) => {

  // Use useState hook to manage form data
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Occasion',
    specialRequest: '' // Added a new state for special requests
  });



  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));

    if (id === "date") {
        onDateChanged({date:value});
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // You would typically send this data to an API here.
    // Instead of alert, we'll log to console for now.
    // A custom modal or message box would be a good next step.
    console.log("Reservation submitted! Check the console for data.");
  };

  return (
    <section className="booking-section" aria-labelledby="booking-title">
      <h2 className="section-title" style={{ textAlign: 'center' }}>Book a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="booking-title">
        <label htmlFor="res-date" className="form-label">Date</label>
        <input
          type="date"
          id="date"
          className="form-input"
          value={formData.date}
          onChange={handleChange}
          required
          aria-label="Date"
        />
        <label htmlFor="res-time" className="form-label">Time</label>
        <select
          id="time"
          className="form-select"
          value={formData.time}
          onChange={handleChange}
          required
          aria-label="Time"
          aria-haspopup="listbox"
        >
            {
                availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))
            }
        </select>
        <label htmlFor="guests" className="form-label">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className="form-input"
          value={formData.guests}
          onChange={handleChange}
          required
          aria-label="Number of guests"
        />
        <label htmlFor="occasion" className="form-label">Occasion</label>
        <select
          id="occasion"
          className="form-select"
          value={formData.occasion}
          onChange={handleChange}
          required
          aria-label="Occasion"
          aria-haspopup="listbox"
        >
          <option>Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <label htmlFor="specialRequest" className="form-label">Special Requests</label>
        <textarea
          id="specialRequest"
          className="form-textarea"
          placeholder="e.g., 'Please ensure a high chair is available for our party.'"
          value={formData.specialRequest}
          onChange={handleChange}
          aria-label="Special requests"
        />
        <button type="submit" className="form-submit" aria-label="Make your reservation">Make Your Reservation</button>
      </form>
    </section>
  );
};

export default BookingForm;