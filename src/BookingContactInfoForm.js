import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./BookingForm.css";

const BookingContactInfoForm = ({ initialValues, updateBookingState, submitForm }) => {
    const navigate = useNavigate();

    // Define the Yup validation schema
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('First Name is required'),
        lastName: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Last Name is required'),
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone Number is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    // Use the useFormik hook to handle form state and validation
    const formik = useFormik({
        initialValues: initialValues, // Use the prop for initial values
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("Form submitted with data:", values);
            submitForm(values); // Call the parent submit function
        },
        enableReinitialize: true, // Crucial for updating the form if initialValues change
    });

    // Function to handle navigation back to the first page while saving state
    const handleBackClick = () => {
        // Update the parent state with the current form values before navigating
        updateBookingState(formik.values);
        navigate('/booking');
    };

    return (
        <section className="booking-section" aria-labelledby="booking-title">
            <div className="booking-links-container">
                {/* <Link to="/booking" className="booking-link grayout-link">Book a Table</Link> */}
                <button type="button" onClick={handleBackClick} className="transparent-button booking-link grayout-link">
                    Book a Table
                </button>
                <Link to="/booking-contact" className="booking-link current-booking-link disabled-link">Contact Info</Link>
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Info</h2>
            <form className="booking-form" onSubmit={formik.handleSubmit} aria-labelledby="booking-title">
                <img
                    src="Booking.jpg"
                    alt="A beautiful restaurant interior"
                    className="booking-image"
                />

                {/* First Name Field */}
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    className="form-input"
                    {...formik.getFieldProps('firstName')}
                    aria-label="First Name"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                ) : null}

                {/* Last Name Field */}
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    className="form-input"
                    {...formik.getFieldProps('lastName')}
                    aria-label="Last Name"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                ) : null}

                {/* Phone Number Field */}
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    className="form-input"
                    {...formik.getFieldProps('phoneNumber')}
                    aria-label="Phone Number"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>
                ) : null}

                {/* Email Field */}
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    {...formik.getFieldProps('email')}
                    aria-label="Email Address"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}

                <button type="submit" className="form-submit" aria-label="Reserve Now" disabled={!formik.isValid || formik.isSubmitting}>Reserve Now</button>
            </form>
        </section>
    );
};

export default BookingContactInfoForm;