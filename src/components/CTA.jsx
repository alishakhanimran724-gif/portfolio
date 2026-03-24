import { Mail, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from './useScrollReveal';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function CTA() {
  const ref = useScrollReveal();
  return (
    <section className="cta" ref={ref}>
      <div className="container">
        <div className="cta-box rv">
          <div className="sec-label"><i /> Let's Collaborate</div>
          <h2>Ready to bring your <em>idea to life?</em></h2>
          <p>I'm currently taking on new projects. Let's talk about how I can help your business grow with a custom-built solution.</p>
          <div className="cta-actions">
            <a href="#contact" onClick={scrollTo('contact')} className="btn btn-fill"><Mail size={15} /> Start a Project</a>
            <Link to="/work" className="btn btn-white"><Monitor size={15} /> See My Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}