import React from "react";
import logoImage from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-column">
          <div className="footer-logo">
            <img
              className="logo logo-footer"
              src={logoImage}
              alt="Krishi Sahayak logo"
            />
            <span className="logo-text-footer logo-text">Krishi Sahayak</span>
          </div>
          <p className="footer-description">
            Empowering farmers with AI-driven agricultural insights for
            sustainable and profitable farming.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <i data-feather="mail" className="contact-icon"></i>{" "}
              support@krishisahayak.com
            </li>
            <li>
              <i data-feather="phone" className="contact-icon"></i> +91
              9876543210
            </li>
            <li>
              <i data-feather="map-pin" className="contact-icon"></i> Bangalore,
              India
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">© 2023 Krishi Sahayak. All rights reserved.</p>
        <div className="social-links">
          <a href="#" className="social-link">
            <i data-feather="facebook" className="social-icon"></i>
          </a>
          <a href="#" className="social-link">
            <i data-feather="twitter" className="social-icon"></i>
          </a>
          <a href="#" className="social-link">
            <i data-feather="instagram" className="social-icon"></i>
          </a>
          <a href="#" className="social-link">
            <i data-feather="linkedin" className="social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
