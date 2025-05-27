import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left footer-links-desktop">
        <ul className="footer-links">
          <li><Link to="/terms">Terms</Link></li>
          <li><Link to="/policies">Policies</Link></li>
          <li><Link to="/management">Management</Link></li>
        </ul>
      </div>
      <div className="footer-center">
        <span>© 2025 Project NexTech, Inc. All rights reserved.</span>
      </div>
      <div className="footer-right">
        <a href="mailto:info@projectnextech.com"><img src={process.env.PUBLIC_URL + '/img/mail_logo.png'} alt="Mail" className="footer-icon" /></a>
        <a href="https://www.youtube.com/channel/UCaMPwKcJ3ifjqaFoN-cqoTA"><img src={process.env.PUBLIC_URL + '/img/youtube_logo.png'} alt="YouTube" className="footer-icon" /></a>
        <a href="https://www.instagram.com/projectnextech/"><img src={process.env.PUBLIC_URL + '/img/instagram_logo.png'} alt="Instagram" className="footer-icon" /></a>
        <a href="https://www.facebook.com/profile.php?id=61560717552719"><img src={process.env.PUBLIC_URL + '/img/facebook_logo.png'} alt="Facebook" className="footer-icon" /></a>
        <a href="https://www.linkedin.com/company/project-nextech"><img src={process.env.PUBLIC_URL + '/img/linkedin_logo.png'} alt="LinkedIn" className="footer-icon" /></a>
      </div>
    </footer>
  );
}

export default Footer; 