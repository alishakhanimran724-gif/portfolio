import { Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, Facebook, MessageCircle, ArrowRight } from 'lucide-react';
import { siteData } from '../data/portfolio';

export default function Footer() {
  const navigate = useNavigate();

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="f-logo">Alisha<span>.</span></div>
            <p className="f-desc">Full Stack Developer specializing in MERN, PHP & MySQL. Building scalable web apps, e-commerce platforms, and management systems.</p>
            <div className="f-socials">
              <a href={siteData.contact.github} target="_blank" rel="noopener" className="f-soc" aria-label="GitHub"><Github size={16} /></a>
              <a href={siteData.contact.linkedin} target="_blank" rel="noopener" className="f-soc" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="f-soc" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" className="f-soc" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" className="f-soc" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="f-soc" aria-label="WhatsApp"><MessageCircle size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <a href="#contact" onClick={scrollTo('contact')}>Contact</a>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services" onClick={scrollTo('services')}>Custom Web Apps</a>
            <a href="#services" onClick={scrollTo('services')}>E-Commerce Platforms</a>
            <a href="#services" onClick={scrollTo('services')}>Management Systems</a>
            <a href="#services" onClick={scrollTo('services')}>Admin Dashboards</a>
            <a href="#services" onClick={scrollTo('services')}>API Development</a>
          </div>

          <div className="footer-col footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get notified about new projects and availability. No spam, ever.</p>
            <div className="fn-input">
              <input type="email" placeholder="Your email" />
              <button aria-label="Subscribe"><ArrowRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}