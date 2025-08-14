import React from 'react';

const SpecialCard = ({ imageSrc, imageAlt, title, price, description }) => (
  <div className="special-card">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="special-image"
    />
    <div className="special-card-content">
      <h4 className="special-title">{title}</h4>
      <p className="special-price">{price}</p>
      <p className="special-description">
        {description}
      </p>
    </div>
  </div>
);

export default SpecialCard;