import React from 'react';

const TestimonialCard = ({ rating, userImageSrc, userImageAlt, username, text }) => (
  <div className="testimonial-card">
    <p className="testimonial-rating">{rating}</p>
    <img
      src={userImageSrc}
      alt={userImageAlt}
      className="testimonial-user-image"
    />
    <p className="testimonial-username">{username}</p>
    <p className="testimonial-text">"{text}"</p>
  </div>
);

export default TestimonialCard;