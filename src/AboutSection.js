import React from 'react';
import './AboutSection.css';

const AboutSection = ({ title, subtitle, paragraph, imageSrc, imageAlt, reverse }) => {
  const containerClass = `about-us-container ${reverse ? 'flex-reverse' : ''}`;
  return (
    <section className="section">
      <div className={containerClass}>
        <div className="about-text">
          <h2 className="section-title">{title}</h2>
          <h3 className="section-subtitle">{subtitle}</h3>
          <p className="section-paragraph">{paragraph}</p>
        </div>
        <div className="about-image">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;