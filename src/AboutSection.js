import React from 'react';
import './AboutSection.css';

const AboutSection = ({ title, subtitle, paragraph, imageSrc, imageAlt, reverse }) => {
  const containerClass = `about-us-container ${reverse ? 'flex-reverse' : ''}`;
  
  // Create a unique, kebab-case ID from the title prop.
  const sectionId = title.toLowerCase().replace(/\s/g, '-');

  return (
    <section className="section" aria-labelledby={sectionId}>
      <div className={containerClass}>
      <article  className={containerClass}>
        <div className="about-text">
          <h2 id={sectionId} className="section-title">{title}</h2>
          <h3 className="section-subtitle">{subtitle}</h3>
          <p className="section-paragraph">{paragraph}</p>
        </div>
        <figure className="about-image">
          <img src={imageSrc} alt={imageAlt} />
        </figure>
      </article>
      </div>
    </section>
  );
};

export default AboutSection;