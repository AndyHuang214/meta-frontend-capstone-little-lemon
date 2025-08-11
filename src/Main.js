// Main.jsx
import React from 'react';
import './Main.css'; // Optional styling

const Main = () => {
  return (
    <main>
      <section id="home">
        <h1>Welcome to Our Site</h1>
        <p>This is a demo of semantic HTML structure.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <article>
          <h3>Our Mission</h3>
          <p>We aim to build accessible and meaningful web experiences.</p>
        </article>
        <article>
          <h3>Our Team</h3>
          <p>Meet the people behind the code and design.</p>
        </article>
      </section>

      <aside>
        <h2>Related Links</h2>
        <ul>
          <li><a href="#">HTML5 Guide</a></li>
          <li><a href="#">Accessibility Tips</a></li>
        </ul>
      </aside>
    </main>
  );
};

export default Main;