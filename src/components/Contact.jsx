import { useState } from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Instagram, Facebook, MessageCircle, Send } from 'lucide-react';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from './useScrollReveal';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      budget: form.budget.value,
      message: form.message.value,
    };

    try {
      // Use Vercel API in production, show message in dev
      const isLocal = window.location.hostname === 'localhost';
      
      if (isLocal) {
        // Simulate success in local dev
        setStatus('success');
        form.reset();
      } else {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await res.json();

        if (result.success) {
          setStatus('success');
          form.reset();
        } else {
          setStatus('error');
        }
      }
    } catch {
      setStatus('error');
    }

    setLoading(false);
    setTimeout(() => setStatus(''), 6000);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="sec-label rv"><i /> Contact</div>
            <h2 className="sec-title rv rv-d1">Let's build something <em>together</em></h2>
            <p className="sec-desc rv rv-d2">Have a project in mind? Tell me about it and I'll get back to you within 24 hours with a plan and quote.</p>
            <div className="ci-list rv rv-d3">
              <div className="ci-item">
                <div className="ci-icon"><Mail size={18} /></div>
                <div className="ci-text"><span>Email</span><a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a></div>
              </div>
              <div className="ci-item">
                <div className="ci-icon"><MapPin size={18} /></div>
                <div className="ci-text"><span>Location</span><p>{siteData.contact.location}</p></div>
              </div>
              <div className="ci-item">
                <div className="ci-icon"><Clock size={18} /></div>
                <div className="ci-text"><span>Availability</span><p>{siteData.contact.availability}</p></div>
              </div>
            </div>
            <div className="socials rv rv-d4">
              <a href={siteData.contact.github} target="_blank" rel="noopener" className="soc-link" aria-label="GitHub"><Github size={18} /></a>
              <a href={siteData.contact.linkedin} target="_blank" rel="noopener" className="soc-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="soc-link" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="soc-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="soc-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="soc-link" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            </div>
          </div>
          <div className="contact-form-card rv rv-d2">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="budget">Budget Range</label>
                  <input type="text" id="budget" name="budget" placeholder="e.g. $500 - $1,000" />
                </div>
                <div className="form-group full">
                  <label htmlFor="message">Project Details</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project, timeline, and goals..." required />
                </div>
                <div className="form-submit-row">
                  <button type="submit" className="btn btn-fill" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                    <Send size={15} /> {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'success' && (
                    <div className="form-status success">Message sent! I'll reply within 24 hours. Check your inbox for a confirmation.</div>
                  )}
                  {status === 'error' && (
                    <div className="form-status error">Something went wrong. Please email me directly at {siteData.contact.email}</div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
