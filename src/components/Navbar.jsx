import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const close = () => setOpen(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    close();
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo">Alisha<span>.</span></Link>
          <div className={`nav-center ${open ? 'open' : ''}`}>
            <a href="#about" onClick={scrollTo('about')}>About</a>
            <Link to="/services" onClick={close}>Services</Link>
            <Link to="/work" onClick={close}>Work</Link>
            <a href="#faq" onClick={scrollTo('faq')}>FAQ</a>
            <a href="#contact" onClick={scrollTo('contact')}>Contact</a>
          </div>
          <div className="nav-cta">
            <a href="#contact" onClick={scrollTo('contact')} className="btn btn-fill" style={{ padding: '10px 22px', fontSize: '0.7rem' }}>
              <Send size={13} /> Hire Me
            </a>
          </div>
          <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}