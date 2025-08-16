import React from 'react';
import SpecialCard from "./SpecialCard"

const SpecialSection = () => {
  return (
    <section className="section section-white" aria-labelledby="specials-heading">
      <h2 id="specials-heading" className="section-title" style={{ textAlign: 'center' }}>This Week's Specials</h2>
      <div className="specials-container" role="list">
        <SpecialCard
          role="listitem"
          imageSrc="greek salad.jpg"
          imageAlt="Greek Salad"
          title="Greek Salad"
          price="$12.99"
          description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialCard
          role="listitem"
          imageSrc="Bruchetta.jpg"
          imageAlt="Bruschetta"
          title="Bruschetta"
          price="$7.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialCard
          role="listitem"
          imageSrc="lemon dessert.jpg"
          imageAlt="Lemon Dessert"
          title="Lemon Dessert"
          price="$5.99"
          description="This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
}

export default SpecialSection;