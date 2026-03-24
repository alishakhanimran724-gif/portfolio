import { Globe, Layout, Github, ShoppingBag, Pizza, GraduationCap, HeartPulse, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from './useScrollReveal';

const projectImages = ['luno.png', 'pizza.png', 'educore.png', 'hospital.png', 'vibespace.png'];
const tagColors = { green: 'ptag-green', warm: 'ptag-warm', blue: 'ptag-blue' };

export default function Projects() {
  const ref = useScrollReveal();
  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="sec-label rv" style={{ justifyContent: 'center' }}><i /> Portfolio</div>
          <h2 className="sec-title rv rv-d1">Real projects, <em>real results</em></h2>
          <p className="sec-desc rv rv-d2" style={{ margin: '0 auto' }}>Live, deployed platforms with admin panels — not just mockups.</p>
        </div>
        {siteData.projects.map((p, i) => (
          <div className={`project-row rv ${i % 2 !== 0 ? 'reverse' : ''}`} key={i}>
            <div className="project-visual">
              <img 
                src={`/images/${projectImages[i]}`} 
                alt={p.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="project-detail">
              <div className="project-number">{p.num}</div>
              <div className="project-tags">
                {p.tags.map((t, j) => (<span className={`ptag ${tagColors[t.color]}`} key={j}>{t.label}</span>))}
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => (<span key={j}>{t}</span>))}
              </div>
              <div className="project-links">
                {p.links.live && (<a href={p.links.live} target="_blank" rel="noopener" className="project-link-btn"><Globe size={14} /> Live Site</a>)}
                {p.links.admin && (<a href={p.links.admin} target="_blank" rel="noopener" className="project-link-btn"><Layout size={14} /> Dashboard</a>)}
                {p.links.github && (<a href={p.links.github} target="_blank" rel="noopener" className="project-link-btn"><Github size={14} /> GitHub</a>)}
              </div>
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center', marginTop: 40 }} className="rv">
          <Link to="/work" className="btn btn-fill"><ArrowRight size={15} /> View All Work</Link>
        </div>
      </div>
    </section>
  );
}
