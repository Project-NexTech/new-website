import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementsBar from '../components/AnnouncementsBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SplitSectionLeftText from '../components/SplitSectionLeftText';

function About() {
  return (
    <div className="App">
      <style>
        {`
          /* For narrow screens: fixed 2rem side padding, max image width = 100vw - 4rem */
          .responsive-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }

          .responsive-image {
            width: 100%;
            max-width: 800px;
          }

          @media (max-width: 864px) {
            .responsive-image {
              width: calc(100vw - 4rem);
            }
          }

          /* For wide screens: dynamic left/right margin = (vw - 800px) / 2 */
          @media (min-width: 865px) {
            .responsive-container {
              padding-left: calc((100vw - 800px) / 2);
              padding-right: calc((100vw - 800px) / 2);
            }
          }
        `}
      </style>

      <AnnouncementsBar />
      <Navbar />
      <div className="responsive-container flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center text-center w-full" style={{ maxWidth: '800px' }}>
          <img
            src="./img/page_not_found.png"
            alt="Page Not Found"
            className="responsive-image mb-6"
          />
          <p style={{ fontSize: '2.5rem', color: '#fff' }}>
            Whoops! You've stumbled across a page that is still in development. Please{' '}
            <Link to="/" style={{ color: '#4083cc', textDecoration: 'none' }}>
              click here
            </Link>{' '}
            to return to the home page.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
