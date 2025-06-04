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
import Accordion from './components/home/Accordion.tsx';
import Carousel from './components/home/Carousel.tsx';

function MainContent() {
  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="main-text">
          <h1>Free and effective STEM education.</h1>
          <div className="main-subtext">Hello! Here are resources for...</div>
          <Accordion />
        </div>
        <div className="main-gap" />
        <div className="main-image">
          <Carousel />
          <div className="mission-text">Our mission: "To inspire and support a global community of students through interactive, accessible, and high-quality STEM education, equipping them with a passion to combat real-world problems."</div>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter basename="/SRC-Vibe-Coding-Version--V7-">
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