import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamburgerClick = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={process.env.PUBLIC_URL + '/img/NexTech Logo 3.png'} alt="NexTech Logo" className="logo-img" />
        </Link>
        <span className="mobile-logo-text">Project NexTech</span>
      </div>
      <div className="navbar-links-wrapper">
        <ul className="nav-links navbar-links-left">
          <li><Link to="/about" className="footer-link">About</Link></li>
          <li><Link to="/partners" className="footer-link">Partners</Link></li>
          <li><Link to="/impact" className="footer-link">Impact</Link></li>
          <li><Link to="/programs" className="footer-link">Programs</Link></li>
          <li><Link to="/team" className="footer-link">Team</Link></li>
          <li><Link to="/contribute" className="footer-link">Contribute</Link></li>
          <li><Link to="/volunteers" className="footer-link">Volunteers</Link></li>
          <li><Link to="/projects" className="footer-link">Projects</Link></li>
        </ul>
        <ul className="nav-links navbar-links-right">
          <li><Link to="/contact" className="footer-link">Contact</Link></li>
          <li><Link to="/dashboard" className="footer-link">Dashboard</Link></li>
          <li><Link to="/login" className="footer-link">Log In</Link></li>
        </ul>
      </div>
      <button className="hamburger" aria-label="Open menu" onClick={handleHamburgerClick}>
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <ul className="mobile-nav-links">
          <li><Link to="/about" className="footer-link">About</Link></li>
          <li><Link to="/partners" className="footer-link">Partners</Link></li>
          <li><Link to="/impact" className="footer-link">Impact</Link></li>
          <li><Link to="/programs" className="footer-link">Programs</Link></li>
          <li><Link to="/team" className="footer-link">Team</Link></li>
          <li><Link to="/contribute" className="footer-link">Contribute</Link></li>
          <li><Link to="/volunteers" className="footer-link">Volunteers</Link></li>
          <li><Link to="/projects" className="footer-link">Projects</Link></li>
          <li><Link to="/contact" className="footer-link">Contact</Link></li>
          <li><Link to="/dashboard" className="footer-link">Dashboard</Link></li>
          <li><Link to="/login" className="footer-link">Log In</Link></li>
          <li><Link to="/terms" className="footer-link">Terms</Link></li>
          <li><Link to="/policies" className="footer-link">Policies</Link></li>
          <li><Link to="/management" className="footer-link">Management</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 