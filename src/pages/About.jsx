import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      
      <section className="about-hero">
        <h1>About Our Platform</h1>
        <p>
          A trusted university gadget rental marketplace connecting students and owners.
        </p>
      </section>

      
      <section className="about-content">

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To provide affordable, reliable, and secure access to essential 
            gadgets like calculators, cameras, power banks, and bikes for students.
          </p>
        </div>

        <div className="about-card">
          <h2>How It Works</h2>
          <p>
            Owners list their gadgets. Students browse and reserve items. 
            Payment is completed after return under our verified policy system.
          </p>
        </div>

        <div className="about-card">
          <h2>Trust & Policies</h2>
          <p>
            All users are verified. Clear rental terms, deposit agreements, 
            and accountability policies ensure safety for both students and owners.
          </p>
        </div>

      </section>

      
      <section className="social-section">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

export default About;