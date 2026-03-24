import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from './useScrollReveal';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const ref = useScrollReveal();

  const toggle = (i) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="sec-label rv" style={{ justifyContent: 'center' }}><i /> FAQ</div>
          <h2 className="sec-title rv rv-d1">Common <em>questions</em></h2>
          <p className="sec-desc rv rv-d2" style={{ margin: '0 auto' }}>Everything you need to know before we start working together.</p>
        </div>
        <div className="faq-list">
          {siteData.faq.map((item, i) => (
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
              <div className="faq-question" onClick={() => toggle(i)}>
                <h4>{item.q}</h4>
                <ChevronDown size={20} className="faq-icon" />
              </div>
              <div className="faq-answer" style={{ maxHeight: openIdx === i ? '300px' : '0px' }}>
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
