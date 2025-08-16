import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link
import "./BookingForm.css"

const BookingForm = ({availableTimes = [], onDateChanged, submitForm }) => {

  // Use useState hook to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
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
    submitForm(formData);
  };

  return (
    <section className="booking-section" aria-labelledby="booking-title">
      <div className="booking-links-container">
        <Link to="/booking" className="booking-link grayout-link">Book a Table</Link>
        <Link to="/booking-contact" className="booking-link current-booking-link disabled-link">Contact Info</Link>
      </div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Info</h2>
      <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="booking-title">
        <img
            src="Booking.jpg"
            alt="A beautiful restaurant interior"
            className="booking-image"
        />

        {/* New Contact Information Fields */}
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          id="firstName"
          className="form-input"
          value={formData.firstName}
          onChange={handleChange}
          required
          aria-label="First Name"
        />

        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="form-input"
          value={formData.lastName}
          onChange={handleChange}
          required
          aria-label="Last Name"
        />

        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          className="form-input"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          aria-label="Phone Number"
        />

        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
          aria-label="Email Address"
        />
        <button type="submit" className="form-submit" aria-label="Make your reservation">Reserve Now</button>
      </form>
    </section>
  );
};

export default BookingForm;