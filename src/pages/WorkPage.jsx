import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Layout, Github, ExternalLink, Mail } from 'lucide-react';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from '../components/useScrollReveal';

const projectImages = ['luno.png', 'pizza.png', 'educore.png', 'hospital.png', 'vibespace.png'];
const tagColors = { green: 'ptag-green', warm: 'ptag-warm', blue: 'ptag-blue' };

export default function WorkPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb rv"><Link to="/">Home</Link><ChevronRight size={12} /><span>Work</span></div>
          <h1 className="rv rv-d1">Projects I've <em>built</em></h1>
          <p className="hero-lead rv rv-d2">Every project here is live, deployed, and solving real problems. Click through to explore each one in action.</p>
        </div>
      </section>

      <section className="page-section" ref={useScrollReveal()}>
        <div className="container">
          <div className="work-grid">
            {siteData.projects.map((p, i) => (
              <div className="work-card rv" key={i}>
                <div className="work-card-img">
                  <img 
                    src={`/images/${projectImages[i]}`} 
                    alt={p.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} 
                  />
                  <div className="wc-overlay">
                    {p.links.live && (
                      <a href={p.links.live} target="_blank" rel="noopener" className="wc-btn"><ExternalLink size={13} /> Live Site</a>
                    )}
                    {p.links.github && (
                      <a href={p.links.github} target="_blank" rel="noopener" className="wc-btn"><Github size={13} /> Code</a>
                    )}
                  </div>
                </div>
                <div className="work-card-info">
                  <div className="wc-tags">
                    {p.tags.map((t, j) => (<span className={`ptag ${tagColors[t.color]}`} key={j}>{t.label}</span>))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tech" style={{ marginTop: 12, marginBottom: 12 }}>
                    {p.tech.map((t, j) => (<span key={j}>{t}</span>))}
                  </div>
                  <div className="project-links">
                    {p.links.live && (<a href={p.links.live} target="_blank" rel="noopener" className="project-link-btn"><Globe size={14} /> Live</a>)}
                    {p.links.admin && (<a href={p.links.admin} target="_blank" rel="noopener" className="project-link-btn"><Layout size={14} /> Dashboard</a>)}
                    {p.links.github && (<a href={p.links.github} target="_blank" rel="noopener" className="project-link-btn"><Github size={14} /> GitHub</a>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt" ref={useScrollReveal()}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="sec-label rv" style={{ justifyContent: 'center' }}><i /> Tech Stack</div>
          <h2 className="sec-title rv rv-d1">Built with <em>modern tools</em></h2>
          <p className="sec-desc rv rv-d2" style={{ margin: '0 auto 48px' }}>The technologies I use across all my projects.</p>
          <div className="skills-cloud rv rv-d3" style={{ maxWidth: 800, margin: '0 auto' }}>
            {Object.values(siteData.skills).flat().map((s, i) => (
              <div className="skill-pill" key={i}>{s}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" ref={useScrollReveal()}>
        <div className="container">
          <div className="cta-box rv">
            <div className="sec-label"><i /> Like What You See?</div>
            <h2>Let's build your <em>next project</em></h2>
            <p>I'm currently available for new work. Let's discuss how I can help bring your idea to life.</p>
            <div className="cta-actions">
              <a href="/#contact" className="btn btn-fill"><Mail size={15} /> Start a Project</a>
              <Link to="/about" className="btn btn-white">About Me</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
