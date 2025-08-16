import React from 'react';

const TestimonialCard = ({ rating, userImageSrc, userImageAlt, username, text }) => (
  <article className="testimonial-card" aria-label={`Testimonial from ${username}`}>
    <div className="testimonial-header">
      <p className="testimonial-rating" aria-label={`Rating: ${rating}`}>{rating}</p>
      <img role="testimonial user image"
        src={userImageSrc}
        alt={userImageAlt}
        className="testimonial-user-image"
      />
    </div>
    <div className="testimonial-body">
      <h3 className="testimonial-username" role="testimonial user name">{username}</h3>
      <blockquote className="testimonial-text" role="testimonial text">
        <p>"{text}"</p>
      </blockquote>
    </div>
  </article>
);

export default TestimonialCard;