import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Skills />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}

export default function App() {
  return (
// NEW
<HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
