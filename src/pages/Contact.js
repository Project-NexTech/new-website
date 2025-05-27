import React from 'react';
import AnnouncementsBar from '../components/AnnouncementsBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="App">
      <AnnouncementsBar />
      <Navbar />
      <div className="page-content">
        {/* This is where the Contact page content would go, but since it's blank, leaving it empty for now */}
      </div>
      <Footer />
    </div>
  );
}

export default Contact; 