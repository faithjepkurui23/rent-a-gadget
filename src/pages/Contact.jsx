import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are ready to assist students and gadget owners.</p>
      </section>

      <div className="contact-content">

      
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><strong>Email:</strong> timelypurchase@gmail.com</p>
          <p><strong>Phone:</strong> +254 7XX XXX XXX</p>
          <p><strong>Location:</strong> Kutus, Kirinyaga</p>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

      
        <form className="contact-form">
          <h2>Send Message</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Submit Message</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;