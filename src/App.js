import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Terms from './pages/Terms';
import Policies from './pages/Policies';
import Management from './pages/Management';
import About from './pages/About';
import Partners from './pages/Partners';
import Impact from './pages/Impact';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Contribute from './pages/Contribute';
import Volunteers from './pages/Volunteers';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import AnnouncementsBar from './components/AnnouncementsBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const images = [
  'carousel_1.png',
  'carousel_2.png',
  'carousel_3.png',
  'carousel_4.png',
  'carousel_5.png',
  'carousel_6.png',
  'carousel_7.png',
  'carousel_8.png',
];

const resourceSections = [
  { 
    label: 'Parents/students:', 
    items: [
      { text: '• Course details and upcoming classes: ', linkText: 'Programs ↗', to: '/programs' },
      { text: '• See our program hosts\' websites: ', linkText: 'Partners ↗', to: '/partners' }
    ]
  },
  { 
    label: 'Anyone curious:', 
    items: [
      { text: '• Mission and founding: ', linkText: 'About ↗', to: '/about' },
      { text: '• Benefits for students and volunteers: ', linkText: 'Impact ↗', to: '/impact' },
      { text: '• How we work with our partners ', linkText: 'Partners ↗', to: '/partners' }
    ]
  },
  { 
    label: 'Prospective volunteers:', 
    items: [
      { text: '• What our volunteers do: ', linkText: 'Volunteers ↗', to: '/volunteers' },
      { text: '• Join our volunteer team: ', linkText: 'Contribute ↗', to: '/contribute' },
      { text: '• The subjects we teach: ', linkText: 'Programs ↗', to: '/programs' }
    ]
  },
  { 
    label: 'Libraries, schools, or organizations:', 
    items: [
      { text: '• The courses we offer: ', linkText: 'Programs ↗', to: '/programs' },
      { text: '• How we work with our program hosts: ', linkText: 'Partners ↗', to: '/partners' },
      { text: '• Contact us to teach at your location: ', linkText: 'Contact ↗', to: '/contact' }
    ]
  },
  { 
    label: 'Potential donors, sponsors, or partners:', 
    items: [
      { text: '• How your support helps: ', linkText: 'Impact ↗', to: '/impact' },
      { text: '• How our partners support us: ', linkText: 'Partners ↗', to: '/partners' },
      { text: '• Become a sponsor or donor: ', linkText: 'Contribute ↗', to: '/contribute' }
    ]
  },
];

function MainContent() {
  const [currentIdx, setCurrentIdx] = useState(0); // Start at carousel_1.png
  const [slideDirection, setSlideDirection] = useState(null); // 'left' or 'right'
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextIdx, setNextIdx] = useState(null); // The image to animate in
  const [timer, setTimer] = useState(0); // seconds
  const timerRef = useRef();
  const [expanded, setExpanded] = useState(Array(5).fill(false));
  const [resourceClosing, setResourceClosing] = useState([false, false, false, false, false]);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const timeoutRefs = useRef([]);  // Array to store timeout IDs

  const totalImages = images.length;

  const getPrevIdx = (idx) => (idx - 1 + totalImages) % totalImages;
  const getNextIdx = (idx) => (idx + 1) % totalImages;

  // Timer effect
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (timer >= 5 && !isAnimating) {
      handleNext(true); // true = auto
    }
    // eslint-disable-next-line
  }, [timer]);

  useEffect(() => {
    if (isAutoCycling) {
      const timeouts = [];
      const sequence = async () => {
        await new Promise(resolve => timeouts.push(setTimeout(() => {
          setExpanded(prev => {
            const newExpanded = Array(5).fill(false);
            newExpanded[0] = true;  // Open first
            return newExpanded;
          });
          resolve();
        }, 2000)));  // Step 1: 2 seconds
        
        for (let i = 0; i < 5; i++) {  // Steps 2-6
          if (!isAutoCycling) break;  // Stop if user interacts
          await new Promise(resolve => timeouts.push(setTimeout(() => {
            setExpanded(prev => {
              const newExpanded = Array(5).fill(false);
              newExpanded[(i + 1) % 5] = true;  // Open next (or first after fifth)
              return newExpanded;
            });
            resolve();
          }, 5000)));
        }
        if (isAutoCycling) sequence();  // Loop back if still active
      };
      sequence();  // Start the sequence
      
      return () => timeouts.forEach(clearTimeout);  // Cleanup
    }
  }, [isAutoCycling]);

  const handlePrev = (auto) => {
    if (isAnimating) return;
    const prevIdx = getPrevIdx(currentIdx);
    setSlideDirection('right');
    setNextIdx(prevIdx);
    setIsAnimating(true);
    if (!auto) setTimer(-5); // User interaction: delay next auto-advance by 10s
    setTimeout(() => {
      setCurrentIdx(prevIdx);
      setSlideDirection(null);
      setIsAnimating(false);
      setNextIdx(null);
      if (auto) setTimer(0);
    }, 400);
  };

  const handleNext = (auto) => {
    if (isAnimating) return;
    const next = getNextIdx(currentIdx);
    setSlideDirection('left');
    setNextIdx(next);
    setIsAnimating(true);
    if (!auto) setTimer(-5); // User interaction: delay next auto-advance by 10s
    setTimeout(() => {
      setCurrentIdx(next);
      setSlideDirection(null);
      setIsAnimating(false);
      setNextIdx(null);
      if (auto) setTimer(0);
    }, 400);
  };

  let currentImgClass = 'carousel-img';
  let nextImgClass = 'carousel-img';
  if (slideDirection === 'left') {
    currentImgClass += ' slide-out-left';
    nextImgClass += ' slide-in-right';
  } else if (slideDirection === 'right') {
    currentImgClass += ' slide-out-right';
    nextImgClass += ' slide-in-left';
  }

  const toggleExpand = (idx) => {
    setIsAutoCycling(false);  // Stop auto-cycling on user interaction
    timeoutRefs.current.forEach(clearTimeout);  // Clear all timeouts
    if (expanded[idx]) {
      // Start closing animation
      setResourceClosing(prev => prev.map((v, i) => (i === idx ? true : v)));
      setTimeout(() => {
        setExpanded(prev => prev.map((v, i) => (i === idx ? false : v)));
        setResourceClosing(prev => prev.map((v, i) => (i === idx ? false : v)));
      }, 250);  // Match animation duration
    } else {
      setExpanded(prev => prev.map((v, i) => (i === idx ? true : v)));
    }
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="main-text">
          <h1>Free and effective STEM education.</h1>
          <div className="main-subtext">Hello! Here are resources for...</div>
          <div className="resource-sections">
            {resourceSections.map((section, idx) => (
              <div key={idx} className="resource-section">
                <button className="resource-toggle" onClick={() => toggleExpand(idx)} aria-expanded={expanded[idx]}>
                  <span className={`resource-arrow${expanded[idx] ? ' expanded' : ''}`}>›</span>
                  <span className="resource-label">{section.label}</span>
                </button>
                {(expanded[idx] || resourceClosing[idx]) && (
                  <div className={`resource-details${resourceClosing[idx] ? ' closing' : ''}`}>
                    {section.items.map((item, index) => (
                      <span key={index}>
                        {item.text}<Link to={item.to} rel="noopener noreferrer">{item.linkText}</Link><br />
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="main-gap" />
        <div className="main-image">
          <div className="aspect-ratio-box">
            <button
              className="carousel-arrow left-arrow"
              aria-label="Previous image"
              onClick={() => handlePrev(false)}
              disabled={isAnimating}
            >
              &#x2039;
            </button>
            <div className="carousel-img-stack">
              <img
                src={'./img/' + images[currentIdx]}
                alt="STEM Education"
                className={currentImgClass}
                draggable={false}
                style={{objectPosition: 'center', zIndex: 1}}
              />
              {isAnimating && nextIdx !== null && (
                <img
                  src={'./img/' + images[nextIdx]}
                  alt="STEM Education"
                  className={nextImgClass}
                  draggable={false}
                  style={{objectPosition: 'center', zIndex: 2, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                />
              )}
            </div>
            <button
              className="carousel-arrow right-arrow"
              aria-label="Next image"
              onClick={() => handleNext(false)}
              disabled={isAnimating}
            >
              &#x203A;
            </button>
          </div>
          <div className="mission-text">Our mission: "To inspire and support a global community of students through interactive, accessible, and high-quality STEM education, equipping them with a passion to combat real-world problems."</div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL === '.' ? '' : process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<div className="App"><AnnouncementsBar /><Navbar /><MainContent /><Footer /></div>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/management" element={<Management />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 