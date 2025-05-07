import React from 'react';
import '../styles/Footer.css'; // Ensure the CSS file matches the updated design

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Website Name */}
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MyWebsite Logo" className="footer-logo-img" />
        </div>

        {/* Footer Navigation Links */}
        <ul className="footer-links">
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#create">Get Started</a></li>
       </ul>
       <div className="contact-us-box">
          <button
            type="button"
            className="contact-button"
            onClick={() =>
              window.location.href = 'mailto:athiragireesh16@gmail.com'
            }
          >
            Contact Us
          </button>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <p style={{ color: 'white' }}><strong>Email:</strong> athiragireesh16@gmail.com</p>
          <p style={{ color: 'white' }}><strong>Phone:</strong> +91 7907924190</p>
          <p style={{ color: 'white' }}><strong>Address:</strong> Brototype, Kochi, Kerala</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p style={{ color: 'white' }}>&copy; 2025 CVForge. Designed with love and passion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
