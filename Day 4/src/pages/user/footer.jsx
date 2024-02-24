import React from 'react';
import "../../assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <ul>
            <li><a href="/">About Company</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Blogs</a></li>
            <br/><br/>
            <li><a>5200+ happy services</a></li>
            <li><a>300+ experts</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li><a href="/">Training</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <div className="social-links">
            <a href="/"><img src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png" alt="Instagram" /></a>
            <a href="/"><img src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png" alt="Facebook" /></a>
            <a href="/"><img src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png" alt="WhatsApp" /></a>
            <a href="/"><img src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png" alt="Telegram" /></a>
            <a href="/"><img src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png" alt="LinkedIn" /></a>
          </div>
          <p>Telephone No: +91 232345553</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright <b>ecerasystem</b>. All Rights Reserved</p>
      </div>
    </footer>
  );
}