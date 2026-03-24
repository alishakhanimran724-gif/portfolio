import { Code, Server, Database, Wrench } from 'lucide-react';
import { siteData } from '../data/portfolio';
import { useScrollReveal } from './useScrollReveal';

const catIcons = { frontend: Code, backend: Server, database: Database, tools: Wrench };

export default function Skills() {
  const ref = useScrollReveal();
  const allSkills = Object.entries(siteData.skills).flatMap(([cat, items]) => items.map((s) => ({ name: s, cat })));

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="skills-inner">
          <div className="sec-label rv" style={{ justifyContent: 'center' }}><i /> Expertise</div>
          <h2 className="sec-title rv rv-d1">Tech stack & <em>tools</em></h2>
          <p className="sec-desc rv rv-d2" style={{ margin: '0 auto 48px' }}>The technologies I use daily to build production-ready applications.</p>
          <div className="skills-cloud rv rv-d3">
            {allSkills.map((s, i) => {
              const Icon = catIcons[s.cat] || Code;
              return (<div className="skill-pill" key={i}><Icon size={16} /> {s.name}</div>);
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
