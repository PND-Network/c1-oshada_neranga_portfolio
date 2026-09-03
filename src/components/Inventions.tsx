import { Award, Shield, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { inventions, additionalInventions } from '../data/inventions';

export default function Inventions() {
  const scrollToDocuments = () => {
    document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inventions" className="inventions section-py">
      <div className="container">
        <ScrollReveal>
          <div className="inventions__header">
            <span className="section-label">Featured Inventions</span>
            <div className="gold-line" />
            <h2 className="section-title">
              Original Technologies<br />Addressing Real Problems
            </h2>
            <p className="section-subtitle">
              Each invention is evidence-based and has been presented at recognised national-level innovation competitions. Supporting documentation is available for review.
            </p>
          </div>
        </ScrollReveal>

        <div className="inventions__grid">
          {inventions.map((inv, i) => (
            <ScrollReveal key={inv.id} delay={(i % 3) + 1}>
              <article className="invention-card" aria-labelledby={`inv-title-${inv.id}`}>
                <div className="invention-card__head">
                  <span className="invention-card__num" aria-hidden="true">{String(inv.id).padStart(2, '0')}</span>
                  <div className="invention-card__category">{inv.category}</div>
                  <h3 className="invention-card__title" id={`inv-title-${inv.id}`}>{inv.title}</h3>
                </div>

                <div className="invention-card__body">
                  <div className="invention-card__problem">Problem Addressed</div>
                  <p className="invention-card__problem-text">{inv.problem}</p>

                  <p className="invention-card__concept">{inv.concept}</p>

                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 'var(--space-5)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--color-navy)' }}>Value: </span>
                    {inv.value}
                  </p>

                  <div className="invention-card__badges">
                    {inv.awards.map((a, j) => (
                      <span key={j} className="badge badge--award">
                        <Award size={10} />
                        {a}
                      </span>
                    ))}
                    {inv.ipStatus && (
                      <span className="badge badge--ip">
                        <Shield size={10} />
                        {inv.ipStatus}
                      </span>
                    )}
                  </div>
                </div>

                <div className="invention-card__footer">
                  <button
                    id={`inv-evidence-${inv.id}`}
                    className="btn btn-outline btn-sm"
                    onClick={scrollToDocuments}
                    aria-label={`View evidence for ${inv.title}`}
                  >
                    <FileText size={12} />
                    View Evidence
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional inventions */}
        <ScrollReveal>
          <div style={{
            marginTop: 'var(--space-16)',
            padding: 'var(--space-8) var(--space-10)',
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-gray-200)',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              color: 'var(--color-navy)',
              marginBottom: 'var(--space-2)',
              fontWeight: 600,
            }}>
              Additional Innovations
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
              Further inventions documented in competition records and official correspondence.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {additionalInventions.map((inv, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-3)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-body)',
                }}>
                  <span style={{
                    display: 'inline-block',
                    width: 6, height: 6,
                    borderRadius: '50%',
                    background: 'var(--color-gold)',
                    marginTop: 9,
                    flexShrink: 0,
                  }} aria-hidden="true" />
                  {inv}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
