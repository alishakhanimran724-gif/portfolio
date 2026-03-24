import { Layout, Code, Smartphone, Globe, PenTool, Box } from 'lucide-react';

const items = [
  { icon: Layout, label: 'Web Apps' }, { icon: Code, label: 'Full-Stack Dev' },
  { icon: Smartphone, label: 'Responsive UI' }, { icon: Globe, label: 'E-Commerce' },
  { icon: PenTool, label: 'UI/UX' }, { icon: Box, label: 'Admin Panels' },
];

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div className="marquee-item" key={i}><item.icon size={16} /> {item.label}</div>
        ))}
      </div>
    </section>
  );
}
