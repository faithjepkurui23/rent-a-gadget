import { FaInstagram,FaFacebook,FaWhatsapp,FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"
export default function Footer(){

    return(
        <footer className="footer-container">
            <div className="main-footer">
            <div className="footer-desc">
                <h3><img src="logo6.png"/>Timely Purchase</h3>
                <p>Your go-to hub for premium rentals. We provide fast, affordable and reliable access to high-quality equipment.</p>
                
            <div className="icons">
                <FaFacebook/>
                <FaYoutube/>
                <FaInstagram/>
                <FaWhatsapp/>
            </div>
            </div>
            <div className="footer-list">
                <h3>Company</h3>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
            </div>
            <div className="footer-list">
                <h3>Customer Services</h3>
                <ul>
                    <li><Link to="/orders">My Account</Link></li>
                    <li><Link to="/">Return</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                </ul>
            </div>
            <div className="footer-list">
                <h3>Our Information</h3>
                <ul>
                    <li><Link to="/privacy">Privacy policy</Link></li>
                    <li><Link to="/terms">Terms & Conditions</Link></li>
                    <li><Link to="/return">Return Policy</Link></li>
                </ul>
            </div>
            <div className="footer-list">
                <h3>Contact Info</h3>
                <ul>
                    <li><Link to="/">+(254)799883311</Link></li>
                    <li><Link to="/">timelypurchase@gmail.com</Link></li>
                    <li><Link to="/">Nairobi, Kenya</Link></li>
                </ul>
            </div>
            </div>
        <div className="footer-bottom">
            <p>Copyright © 2026 Timely Purchase. All Rights Reserved.</p>
        </div>
            
        </footer>
    )
}
    