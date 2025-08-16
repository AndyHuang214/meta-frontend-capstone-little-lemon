import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = ({ title, subtitle, paragraph, imageSrc, imageAlt, reverse, showButton=false }) => {
  const containerClass = `about-us-container ${reverse ? 'flex-reverse' : ''}`;
  
  // Create a unique, kebab-case ID from the title prop.
  const sectionId = title.toLowerCase().replace(/\s/g, '-');
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/booking');
  };

  return (
    <section className="section" aria-labelledby={sectionId}>
      <div className={containerClass}>
        <article  className={containerClass}>
          <div className="about-text">
            <h2 id={sectionId} className="section-title">{title}</h2>
            <h3 className="section-subtitle">{subtitle}</h3>
            <p className="section-paragraph">{paragraph}</p>

            {showButton ? 
              <button className="back-button" onClick={handleBackToHome}>
                Book a Table
              </button> : null
            }
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