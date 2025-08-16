import React from 'react';
import TestimonialCard from "./TestimonialCard"

const TestimonialSection = () => {
    return (
        <section className="section" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="section-title" style={{ textAlign: 'center' }}>Customer Testimonials</h2>
            <div className="testimonials-container" role="list">
                <TestimonialCard
                    role="listitem"
                    rating="★★★★★"
                    userImageSrc="male3.jpg"
                    userImageAlt="John D."
                    username="John D."
                    text="The food was amazing! The service was excellent and the atmosphere was perfect for a date night."
                />
                <TestimonialCard
                    role="listitem"
                    rating="★★★★★"
                    userImageSrc="female1.jpg"
                    userImageAlt="Sarah L."
                    username="Sarah L."
                    text="A hidden gem in the city. The lemon dessert is to die for and I can't wait to come back!"
                />
                <TestimonialCard
                    role="listitem"
                    rating="★★★★★"
                    userImageSrc="male2.jpg"
                    userImageAlt="Michael P."
                    username="Michael P."
                    text="Great for a quick bite or a full meal. The Greek salad is my favorite. Highly recommended!"
                />
            </div>
        </section>
    )
}

export default TestimonialSection;