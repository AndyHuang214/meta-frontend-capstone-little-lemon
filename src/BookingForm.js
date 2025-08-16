import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./BookingForm.css"

// Formik and Yup are used here to handle form state and validation.
const BookingForm = ({ initialValues, availableTimes = [], onDateChanged, submitForm }) => {

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    date: Yup.date()
      .required('Date is required')
      .min(new Date(), 'Date cannot be in the past'),
    time: Yup.string()
      .oneOf(availableTimes, 'Invalid time selected')
      .required('Time is required'),
    guests: Yup.number()
      .min(1, 'Must be at least 1 guest')
      .max(10, 'Cannot exceed 10 guests')
      .required('Number of guests is required'),
    occasion: Yup.string().required('Occasion is required'),
    specialRequest: Yup.string().nullable(),
  });

  // Use the useFormik hook to manage form state and validation
  const formik = useFormik({
    initialValues: initialValues, // Use the prop as the initial values,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with data:", values);
      submitForm(values);
    },
    enableReinitialize: true, // This is crucial for updating the form if initialValues change
  });

  // Since we are using Formik, we need to handle the date change separately to update times
  const handleDateChange = (e) => {
    formik.handleChange(e);
    onDateChanged({ date: e.target.value });
  };

  return (
    <section className="booking-section" aria-labelledby="booking-title">
      <div className="booking-links-container">
        <Link to="/booking" className="booking-link current-booking-link disabled-link">Book a Table</Link>
        <Link to="/booking-contact" className="booking-link disabled-link grayout-link">Contact Info</Link>
      </div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Book a Table</h2>
      <form className="booking-form" onSubmit={formik.handleSubmit} aria-labelledby="booking-title">
        <img
          src="Booking.jpg"
          alt="A beautiful restaurant interior"
          className="booking-image"
          onError={(e) => { e.target.src = 'https://placehold.co/600x400/222831/FFFFFF?text=Booking+Image'; e.target.onerror = null; }}
        />
        <label htmlFor="res-date" className="form-label">Date</label>
        <input
          type="date"
          id="date"
          className="form-input"
          value={formik.values.date}
          onChange={handleDateChange}
          onBlur={formik.handleBlur}
          aria-label="Date"
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
        ) : null}

        <label htmlFor="res-time" className="form-label">Time</label>
        <select
          id="time"
          className="form-select"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Time"
          aria-haspopup="listbox"
        >
          {availableTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests" className="form-label">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          className="form-input"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Number of guests"
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion" className="form-label">Occasion</label>
        <select
          id="occasion"
          className="form-select"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Occasion"
          aria-haspopup="listbox"
        >
          <option>Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.occasion}</div>
        ) : null}

        <label htmlFor="specialRequest" className="form-label">Special Requests</label>
        <textarea
          id="specialRequest"
          className="form-textarea"
          placeholder="e.g., 'Please ensure a high chair is available for our party.'"
          value={formik.values.specialRequest}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          aria-label="Special requests"
        />
        <button type="submit" className="form-submit" aria-label="Make your reservation" disabled={!formik.isValid || formik.isSubmitting}>Make Your Reservation</button>
      </form>
    </section>
  );
};

export default BookingForm;
