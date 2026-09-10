import { Leaf, ShieldCheck, CloudRain, Wrench, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { statsData } from '../data/achievements';

const impacts = [
  {
    icon: <Leaf size={22} />,
    title: 'Sustainability',
    desc: 'Converting waste porcelain and other industrial by-products into valuable construction materials, reducing landfill burden and enabling circular-economy approaches to manufacturing.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Public Safety',
    desc: 'Developing technologies including improved vehicle number plate visibility and enhanced surveillance systems that directly address road safety and community security.',
  },
  {
    icon: <CloudRain size={22} />,
    title: 'Disaster Preparedness',
    desc: 'Creating emergency water storage solutions and pre-warning flood detection systems designed to improve community resilience and response capability during natural disasters.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'Engineering Innovation',
    desc: 'Designing practical devices — including specialised tools for interlocking pavement maintenance — that address real world engineering and maintenance challenges.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Commercialisation',
    desc: 'Moving selected innovations toward industrial implementation, with IP protection established across multiple jurisdictions and technology incubation support from University of Ruhuna.',
  },
];

export default function ImpactSection() {
  return (
    <>
      <section className="stats-row" aria-label="Innovation statistics">
        <div className="container">
          <div className="stats-row__grid">
            {statsData.map((stat, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="stats-row__item">
                  <div className="stats-row__number">{stat.value}</div>
                  <div className="stats-row__label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="innovation" className="impact section-py">
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: 'var(--space-4)' }}>
              <span className="section-label">Innovation Impact</span>
            </div>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title text-center" style={{ marginBottom: 'var(--space-4)' }}>
              Five Dimensions of Impact
            </h2>
            <p className="section-subtitle text-center" style={{ margin: '0 auto' }}>
              Each invention addresses a documented real world problem, contributing across five interconnected impact categories.
            </p>
          </ScrollReveal>

          <div className="impact__grid">
            {impacts.map((item, i) => (
              <ScrollReveal key={i} delay={i + 1}>
                <div className="impact__card">
                  <div className="impact__icon" aria-hidden="true">{item.icon}</div>
                  <h3 className="impact__card-title">{item.title}</h3>
                  <p className="impact__card-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
