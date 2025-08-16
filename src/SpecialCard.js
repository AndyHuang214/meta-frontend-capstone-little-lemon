import React from 'react';

const SpecialCard = ({ imageSrc, imageAlt, title, price, description }) => (
  <article className="special-card" aria-labelledby="special-card-title">
    <img  role="special image"
      src={imageSrc}
      alt={imageAlt}
      className="special-image"
    />
    <div className="special-card-content" role="special card content">
      <h4 id="special-card-title" className="special-title">{title}</h4>
      <p className="special-price">{price}</p>
      <p className="special-description">
        {description}
      </p>
    </div>
  </article>
);

export default SpecialCard;