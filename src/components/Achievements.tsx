import ScrollReveal from './ScrollReveal';
import { achievementTimeline } from '../data/achievements';
import ceremony from '../assets/images/ceremony.jpg';
import trophy from '../assets/images/trophy.jpg';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section-py">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Awards & Recognition</span>
          <div className="gold-line" />
          <h2 className="section-title">
            A Record of<br />National Recognition
          </h2>
          <p className="section-subtitle">
            A documented timeline of invention competitions, awards and recognition from 2023 to 2025, supported by certificates, official correspondence and photographic evidence.
          </p>
        </ScrollReveal>

        {/* Photographic evidence row */}
        <ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-6)',
            margin: 'var(--space-12) 0',
          }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src={ceremony}
                alt="Award ceremony — G.H.D. Oshada Neranga receiving recognition at national innovation competition"
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                padding: 'var(--space-3) var(--space-4)',
                background: 'var(--color-navy)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.5,
              }}>
                Award ceremony — national-level innovation recognition
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <img
                src={trophy}
                alt="G.H.D. Oshada Neranga with innovation awards and medals"
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'top' }}
                loading="lazy"
              />
              <div style={{
                padding: 'var(--space-3) var(--space-4)',
                background: 'var(--color-navy)',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 'var(--text-sm)',
                lineHeight: 1.5,
              }}>
                Innovation awards and medals — documented achievement record
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="timeline" aria-label="Achievement timeline 2023–2025">
          {achievementTimeline.map((group) => (
            <div key={group.year} className="timeline__year-group">
              <ScrollReveal>
                <h3 className="timeline__year">{group.year}</h3>
              </ScrollReveal>
              <div className="timeline__items">
                {group.items.map((item, ii) => (
                  <ScrollReveal key={ii} delay={(ii % 2) + 1}>
                    <div className="timeline__item">
                      {item.award && (
                        <div className="timeline__item-award">{item.award}</div>
                      )}
                      <div className="timeline__item-name">{item.name}</div>
                      <div className="timeline__item-desc">{item.description}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
