import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, GraduationCap, Award, BookOpen, Code, Globe, Zap, Heart, Mail, Monitor } from 'lucide-react';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from '../components/useScrollReveal';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb rv"><Link to="/">Home</Link><ChevronRight size={12} /><span>About</span></div>
          <h1 className="rv rv-d1">The developer <em>behind</em> the code</h1>
          <p className="hero-lead rv rv-d2">I'm Alisha — a Full Stack Developer from Pakistan who turns complex business ideas into production-ready digital products. Here's my story.</p>
        </div>
      </section>

      <section className="page-section" ref={useScrollReveal()}>
        <div className="container">
          <div className="content-grid">
            <div>
              <div className="sec-label rv"><i /> My Story</div>
              <h2 className="sec-title rv rv-d1">From curious student to <em>full-stack developer</em></h2>
              <p className="sec-desc rv rv-d2" style={{ maxWidth: '100%' }}>{siteData.about.desc}</p>
              <p className="sec-desc rv rv-d3" style={{ maxWidth: '100%', marginTop: 20 }}>{siteData.about.desc2}</p>
            </div>
            <div>
              <div className="about-values rv rv-d2">
                {siteData.about.values.map((v, i) => {
                  const icons = [CheckCircle, Zap, Heart, Code];
                  const Icon = icons[i];
                  return (<div className="value-card" key={i}><Icon size={20} /><h4>{v.title}</h4><p>{v.desc}</p></div>);
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section alt" ref={useScrollReveal()}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="sec-label rv" style={{ justifyContent: 'center' }}><i /> Journey</div>
            <h2 className="sec-title rv rv-d1">Milestones along <em>the way</em></h2>
          </div>
          <div className="timeline">
            {[
              { year: '2021', tag: 'Education', title: 'Started BS Computer Science', desc: 'Began my computer science degree, diving deep into programming fundamentals, data structures, and web development.' },
              { year: '2023', tag: 'First Role', title: 'Junior Web Developer Intern', desc: 'Built internal admin dashboards using PHP & MySQL within an agile team. Integrated REST APIs and developed responsive frontends.' },
              { year: '2024', tag: 'Independence', title: 'Went Freelance', desc: 'Delivered 4+ full-scale platforms including e-commerce stores and management dashboards. Managed clients and timelines independently.' },
              { year: '2025', tag: 'Graduating', title: 'BS CS Complete + Growing', desc: 'Completing my degree while expanding my freelance practice. Building hospital systems, school ERPs, and enterprise platforms.' },
            ].map((t, i) => (
              <div className="tl-item rv" key={i}>
                <div className="tl-dot" />
                <div className="tl-year">{t.year}<span>{t.tag}</span></div>
                <div className="tl-content">
                  <span className="tl-tag">{t.tag}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" ref={useScrollReveal()}>
        <div className="container">
          <div className="content-grid">
            <div>
              <div className="sec-label rv"><i /> Education</div>
              <h2 className="sec-title rv rv-d1">Academic <em>background</em></h2>
              <div className="rv rv-d2" style={{ marginTop: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                  <div className="ci-icon"><GraduationCap size={20} /></div>
                  <div><h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{siteData.education.degree}</h4><p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{siteData.education.years}</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div className="ci-icon"><BookOpen size={20} /></div>
                  <div><h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Intermediate (Computer Science)</h4><p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>2019 – 2021 — Government College, Pakistan</p></div>
                </div>
              </div>
            </div>
            <div>
              <div className="sec-label rv"><i /> Certifications</div>
              <h2 className="sec-title rv rv-d1">Continuous <em>learning</em></h2>
              <div className="rv rv-d2" style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {siteData.education.certs.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'var(--bg-alt)', borderRadius: 'var(--radius-sm)', padding: '18px 22px', border: '1px solid var(--border-light)' }}>
                    <Award size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" ref={useScrollReveal()}>
        <div className="container">
          <div className="cta-box rv">
            <div className="sec-label"><i /> Let's Work Together</div>
            <h2>Ready to build something <em>great?</em></h2>
            <p>I'm always open to discussing new projects and creative ideas.</p>
            <div className="cta-actions">
              <a href="/#contact" className="btn btn-fill"><Mail size={15} /> Get In Touch</a>
              <Link to="/work" className="btn btn-white"><Monitor size={15} /> View My Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
