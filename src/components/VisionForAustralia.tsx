import { Leaf, Recycle, Cloud, ShieldCheck, Wrench, FlaskConical, TrendingUp, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const visionAreas = [
  {
    icon: <Leaf size={20} />,
    title: 'Sustainable Construction Technologies',
    desc: 'I aim to contribute eco-friendly construction material innovations — particularly waste-to-resource technologies — to Australia\'s sustainable building sector.',
  },
  {
    icon: <Recycle size={20} />,
    title: 'Circular Economy & Waste Valorisation',
    desc: 'My future focus includes exploring how industrial waste streams can be valorised as construction materials, aligned with Australia\'s circular economy priorities.',
  },
  {
    icon: <Cloud size={20} />,
    title: 'Environmental Innovation',
    desc: 'I intend to contribute to applied environmental innovation — developing practical technologies that reduce material waste and improve resource efficiency.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Disaster Preparedness',
    desc: 'Potential areas of contribution include community resilience technologies — building on existing flood-warning and emergency-preparedness innovation experience.',
  },
  {
    icon: <Wrench size={20} />,
    title: 'Public Safety Technologies',
    desc: 'I intend to continue developing practical engineering innovations with public safety applications, contributing to safer communities.',
  },
  {
    icon: <FlaskConical size={20} />,
    title: 'Research & Industry Collaboration',
    desc: 'I aim to engage with Australian universities, research institutions and industry partners — contributing practical problem-solving capabilities to applied innovation projects.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Commercialisation of Emerging Technologies',
    desc: 'My future focus includes advancing the commercialisation pathway for sustainable construction technologies, leveraging existing IP development experience.',
  },
  {
    icon: <Users size={20} />,
    title: 'Engineering Innovation',
    desc: 'I intend to contribute to practical engineering innovation challenges — applying an evidence-based, problem-focused inventive approach to real-world engineering problems.',
  },
];

export default function VisionForAustralia() {
  return (
    <section id="vision" className="vision section-py">
      <div className="container">
        <div className="vision__grid">
          {/* Intro column */}
          <div className="vision__intro">
            <ScrollReveal>
              <span className="section-label">Future Contribution</span>
              <div className="gold-line" />
              <h2 className="section-title section-title--light">
                Vision for<br />Australia
              </h2>
              <p className="section-subtitle section-subtitle--light" style={{ marginBottom: 'var(--space-8)' }}>
                The following represents a forward-looking perspective on how existing innovation experience, intellectual property activity and problem-solving capability could contribute to Australia's innovation ecosystem.
              </p>
              <div style={{
                padding: 'var(--space-6)',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-6)',
              }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, fontStyle: 'italic' }}>
                  Note: The statements in this section reflect intended future activity and genuine potential contribution. They do not represent confirmed employment, research positions, commercial agreements or guaranteed outcomes.
                </p>
              </div>
              <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: 'var(--space-6)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                  "Australia's commitment to innovation, sustainability and research collaboration makes it an ideal environment for me to continue developing practical, evidence-based technologies with global applications."
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Areas grid */}
          <div className="vision__areas">
            {visionAreas.map((area, i) => (
              <ScrollReveal key={i} delay={(i % 2) + 1}>
                <div className="vision__area-card">
                  <div className="vision__area-icon" aria-hidden="true">{area.icon}</div>
                  <h3 className="vision__area-title">{area.title}</h3>
                  <p className="vision__area-desc">{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
