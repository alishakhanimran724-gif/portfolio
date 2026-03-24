import { Star, Monitor, Mail } from 'lucide-react';
import { siteData } from '../data/portfolio';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag"><Star size={14} /> {siteData.heroTag}</div>
            <h1 className="hero-name">
              {siteData.name.split(' ')[0]}<span className="accent">{siteData.name.split(' ')[1]}</span>
            </h1>
            <p className="hero-role">{siteData.role} — {siteData.tagline}</p>
            <p className="hero-bio">{siteData.heroBio}</p>
            <div className="hero-actions">
              <a href="#projects" onClick={scrollTo('projects')} className="btn btn-fill"><Monitor size={15} /> View Projects</a>
              <a href="#contact" onClick={scrollTo('contact')} className="btn btn-ghost"><Mail size={15} /> Hire Me</a>
            </div>
            <div className="hero-stats">
              {siteData.stats.map((s, i) => (
                <div className="hero-stat" key={i}><span className="num">{s.num}</span><span className="lbl">{s.label}</span></div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-frame">
              <img src="/images/profile.jpg" alt="Alisha Khan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="hero-float"><div className="dot" /><span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Open to work</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}