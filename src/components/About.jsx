import { CheckCircle, Zap, Users, Settings, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from './useScrollReveal';

const icons = [CheckCircle, Zap, Users, Settings];

export default function About() {
  const ref = useScrollReveal();
  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-img-col rv">
            <div className="about-img">
              <img src="/images/profile.jpg" alt="Alisha Khan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="about-badge"><span className="big">3+</span><span className="small">Years</span></div>
          </div>
          <div className="about-content">
            <div className="sec-label rv"><i /> About Me</div>
            <h2 className="sec-title rv rv-d1">{siteData.about.title} <em>{siteData.about.subtitle}</em></h2>
            <p className="sec-desc rv rv-d2">{siteData.about.desc}</p>
            <div className="about-values rv rv-d3">
              {siteData.about.values.map((v, i) => {
                const Icon = icons[i];
                return (<div className="value-card" key={i}><Icon size={20} /><h4>{v.title}</h4><p>{v.desc}</p></div>);
              })}
            </div>
            <Link to="/about" className="btn btn-fill rv rv-d4"><ExternalLink size={15} /> More About Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
