import { FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { patents } from '../data/patents';

export default function IntellectualProperty() {
  const scrollToDocuments = () => {
    document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ip" className="ip-section section-py">
      <div className="container">
        <ScrollReveal>
          <div className="ip-intro">
            <span className="section-label">Intellectual Property</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title section-title--light text-center">
              Intellectual Property &amp;<br />Global Protection
            </h2>
            <p className="section-subtitle section-subtitle--light text-center">
              From Sri Lankan patent applications to international filings in Australia and the United Kingdom, the flagship innovation is protected across three jurisdictions.
            </p>
          </div>
        </ScrollReveal>

        <div className="ip-grid">
          {patents.map((patent, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className={`ip-card ${patent.featured ? 'ip-card--featured' : ''}`}>
                <div className="ip-card__flag" aria-hidden="true">{patent.flag}</div>
                <div className="ip-card__jurisdiction">{patent.jurisdiction}</div>
                <div className="ip-card__status">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block', flexShrink: 0 }} aria-hidden="true" />
                  {patent.status}
                </div>
                <div className="ip-card__ref">Ref: {patent.reference}</div>
                <div className="ip-card__date">Filed: {patent.date}</div>
                <h3 className="ip-card__title">{patent.title}</h3>
                {patent.notes && (
                  <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                    {patent.notes}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{
            marginTop: 'var(--space-12)',
            padding: 'var(--space-8) var(--space-10)',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--space-6)',
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                color: 'var(--color-white)',
                marginBottom: 'var(--space-3)',
                fontWeight: 600,
              }}>
                International Patent Activity — Key Technology
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 'var(--space-3)' }}>
                <strong style={{ color: 'var(--color-gold)' }}>Technology: </strong>
                "Eco-Friendly, High-Strength Construction Brick Manufactured from Waste Porcelain Using High-Pressure Cold-Bonding Technology with a Ball Clay Catalyst and Method of Production Thereof"
              </p>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>
                Patent applications have been filed in Australia (IP Australia, Application No. 2026905817) and the United Kingdom (UK Intellectual Property Office, Application GB2613415.5). These applications are currently pending — they have been filed and accepted for processing, but have not yet been examined or granted.
              </p>
            </div>
            <button
              id="ip-view-docs-btn"
              className="btn btn-outline btn-outline--light"
              onClick={scrollToDocuments}
              style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
            >
              <FileText size={14} />
              View Patent Documents
            </button>
          </div>
        </ScrollReveal>

        <p className="ip-disclaimer">
          Note: "Patent Application Filed" indicates that an application has been submitted to the relevant intellectual property authority. It does not indicate that a patent has been examined, published or granted.
        </p>
      </div>
    </section>
  );
}
