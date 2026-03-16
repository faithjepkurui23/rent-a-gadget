import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-section">
          <h2>Campus Gadget Rentals</h2>
          <p>
            Making student life easier through secure and affordable gadget rentals.
          </p>
        </div>

        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

    
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: timelypurchase@gmail.com</p>
          <p>Phone: +254 7XX XXX XXX</p>
          <p>Kirinyaga, Kutus</p>
        </div>

    
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Campus Gadget Rentals. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;