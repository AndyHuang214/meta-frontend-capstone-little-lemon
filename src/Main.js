// Main.jsx
import React from 'react';
import './Main.css'; // Optional styling
import SpecialSection from './SpecialSection';
import TestimonialSection from './TestimonialSection';
import AboutSection from './AboutSection';

const Main = () => {
  return (
    <main>
      {/* First Section: About Us */}
      <AboutSection
        title="Little Lemon"
        subtitle="A Taste of Chicago"
        paragraph="We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Our chefs craft each dish with fresh, local ingredients, ensuring a unique and memorable dining experience."
        imageSrc="head_chef.jpg"
        imageAlt="Restaurant Interior"
      />

      {/* Second Section: Specials */}
      <SpecialSection />

      {/* Third Section: Testimonials */}
      <TestimonialSection />

      {/* Fourth Section: Our History */}
      <AboutSection
        title="Our History"
        subtitle="From Chicago with love"
        paragraph="Founded by brothers Adrian and Mario in 2021, Little Lemon has become a local favorite. Starting from a small food truck, they built a reputation for fresh, authentic Mediterranean cuisine. They are passionate about sharing their family's culinary traditions with the world."
        imageSrc="Mario and Adrian A.jpg"
        imageAlt="Adrian and Mario"
        reverse={true}
      />
    </main>
  );
};

export default Main;