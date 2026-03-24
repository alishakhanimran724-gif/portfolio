import { Layout, ShoppingCart, Building, BarChart3, Server, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from './useScrollReveal';

const icons = [Layout, ShoppingCart, Building, BarChart3, Server, Code];

export default function Services() {
  const ref = useScrollReveal();
  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <div className="sec-label rv"><i /> What I Do</div>
          <h2 className="sec-title rv rv-d1">Services that <em>deliver results</em></h2>
          <p className="sec-desc rv rv-d2">I don't just write code — I build complete systems that solve real business problems.</p>
        </div>
        <div className="services-grid">
          {siteData.services.map((s, i) => {
            const Icon = icons[i];
            const isFeatured = i === 0;
            return (
              <div className={`service-card rv rv-d${Math.min(i + 1, 4)} ${isFeatured ? 'featured' : ''}`} key={i}>
                <div className="sc-num">{s.num}</div>
                <div className="sc-icon"><Icon size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }} className="rv rv-d3">
          <Link to="/services" className="btn btn-ghost"><ArrowRight size={15} /> View All Services</Link>
        </div>
      </div>
    </section>
  );
}
