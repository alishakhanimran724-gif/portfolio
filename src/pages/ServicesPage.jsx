import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Layout, ShoppingCart, Building, BarChart3, Server, Code, Mail } from 'lucide-react';
import { useScrollReveal } from '../components/useScrollReveal';

const services = [
  { icon: Layout, title: 'Custom Web Applications', desc: 'Full-stack web apps tailored to your business logic — from user-facing interfaces to backend APIs and databases.', features: ['User authentication & role management', 'Custom dashboards & analytics', 'REST API development', 'Database design & optimization', 'Deployment & server setup', 'Post-launch support'] },
  { icon: ShoppingCart, title: 'E-Commerce Platforms', desc: 'Complete online stores with everything you need to sell online — product management, payments, and order fulfillment.', features: ['Product catalog & categories', 'Shopping cart & checkout', 'Payment gateway integration', 'Order management system', 'Inventory tracking', 'Customer accounts & wishlists'] },
  { icon: Building, title: 'Management Systems', desc: 'Enterprise-grade ERPs for hospitals, schools, and businesses — digitizing operations and streamlining workflows.', features: ['Multi-role access control', 'Patient / student records', 'Scheduling & appointments', 'Billing & fee management', 'Reporting & analytics', 'Communication modules'] },
  { icon: BarChart3, title: 'Admin Dashboards', desc: 'Powerful back-office control panels that give you full visibility and control over your business data.', features: ['Real-time data visualization', 'CRUD operations on all entities', 'Role-based permissions', 'Export reports (PDF / Excel)', 'Activity logs & audit trails', 'Responsive mobile access'] },
  { icon: Server, title: 'API Development', desc: 'RESTful APIs that power your applications — secure, documented, and built for performance at scale.', features: ['RESTful architecture', 'JWT authentication', 'Rate limiting & security', 'API documentation', 'Third-party integrations', 'Database connectivity'] },
  { icon: Code, title: 'Frontend Development', desc: 'Pixel-perfect, responsive interfaces built with modern frameworks that look great on every device.', features: ['React.js / Next.js apps', 'Responsive design (all devices)', 'Interactive UI components', 'Performance optimization', 'Cross-browser testing', 'Accessibility (WCAG)'] },
];

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const ref = useScrollReveal();

  return (
    <div ref={ref}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb rv"><Link to="/">Home</Link><ChevronRight size={12} /><span>Services</span></div>
          <h1 className="rv rv-d1">What I can <em>build</em> for you</h1>
          <p className="hero-lead rv rv-d2">From simple landing pages to complex enterprise platforms — here's everything I offer, in detail.</p>
        </div>
      </section>

      <section className="page-section" ref={useScrollReveal()}>
        <div className="container">
          <div className="service-detail-grid">
            {services.map((s, i) => (
              <div className="sd-card rv" key={i}>
                <div className="sd-icon"><s.icon size={24} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="sd-features">
                  {s.features.map((f, j) => (
                    <div className="sd-feature" key={j}><Check size={14} /> {f}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt" ref={useScrollReveal()}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="sec-label rv" style={{ justifyContent: 'center' }}><i /> My Process</div>
          <h2 className="sec-title rv rv-d1">How I <em>work</em></h2>
          <p className="sec-desc rv rv-d2" style={{ margin: '0 auto 48px' }}>A structured approach that keeps things clear and on-track from day one.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, maxWidth: 900, margin: '0 auto' }}>
            {['Discover', 'Design', 'Develop', 'Deliver'].map((step, i) => (
              <div className="rv" key={i} style={{ background: 'var(--bg)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius)', padding: '32px 20px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--accent)' }}>0{i + 1}</div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>{step}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {['Understanding your goals through research.', 'Wireframes and visual direction.', 'Clean, tested, production code.', 'Launch, testing, and ongoing support.'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" ref={useScrollReveal()}>
        <div className="container">
          <div className="cta-box rv">
            <div className="sec-label"><i /> Ready to Start?</div>
            <h2>Let's discuss your <em>project</em></h2>
            <p>Tell me what you need and I'll get back to you within 24 hours with a plan and quote.</p>
            <div className="cta-actions">
              <a href="/#contact" className="btn btn-fill"><Mail size={15} /> Get a Quote</a>
              <Link to="/work" className="btn btn-white"><Layout size={15} /> See My Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
