import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    
    <footer className="footer-section" id = "contact">
      <div className="footer-container">
        
        {/* Left Column: Brand Info & Contact */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="logo-icon">📅</span>
            <h2>Smart Event <span>Planner</span></h2>
          </div>
          
          <p className="footer-description">
            The all-in-one platform for event organizers and vendors. Book stalls, manage events, and grow your business — smarter.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:hello@smarteventplanner.in">hello@smarteventplanner.in</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Right Column Grid: Navigation Links */}
        <div className="footer-links-grid">
          
          {/* Platform Column */}
          <div className="footer-col">
            <h3>Platform</h3>
            <ul>
              <li><a href="#events">Events</a></li>
              <li><a href="#vendors">Vendors</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#help">Help Centre</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#refunds">Refunds</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Smart Event Planner. All rights reserved.</p>
        <p className="made-with">Made with care in India 🇮🇳</p>
      </div>
    </footer>
  );
};

export default Contact;

