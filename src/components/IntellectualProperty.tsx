import ScrollReveal from './ScrollReveal';
import { patents } from '../data/patents';
import lkFlag from '../assets/flags/lk.svg';
import auFlag from '../assets/flags/au.svg';
import gbFlag from '../assets/flags/gb.svg';

const countryData: Record<string, { svg: string; code: string }> = {
  'Sri Lanka': { svg: lkFlag, code: 'LK' },
  'Australia': { svg: auFlag, code: 'AU' },
  'United Kingdom': { svg: gbFlag, code: 'UK' },
};

export default function IntellectualProperty() {
  return (
    <section id="ip" className="ip-section section-py">
      <div className="container">
        <ScrollReveal>
          <div className="ip-intro">
            <span className="section-label">Patents</span>
            <div className="gold-line" />
            <h2 className="section-title section-title--light">
              Patents &amp;<br />Global Protection
            </h2>
            <p className="section-subtitle section-subtitle--light">
              From Sri Lankan patent applications to international filings in Australia and the United Kingdom, the flagship innovation is protected across three jurisdictions.
            </p>
          </div>
        </ScrollReveal>

        <div className="ip-grid">
          {patents.map((patent, i) => {
            const country = countryData[patent.jurisdiction];
            return (
              <ScrollReveal key={i} delay={i + 1}>
                <div className={`ip-card ${patent.featured ? 'ip-card--featured' : ''}`}>
                  <div className="ip-card__country-header">
                    {country && (
                      <img
                        src={country.svg}
                        alt={`${patent.jurisdiction} flag`}
                        className="ip-card__flag-img"
                      />
                    )}
                    <span className="ip-card__country-code">{country?.code || patent.flag}</span>
                  </div>
                  <div className="ip-card__jurisdiction">{patent.jurisdiction}</div>
                  <div className="ip-card__status">
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block', flexShrink: 0 }} aria-hidden="true" />
                    {patent.status}
                  </div>
                  <div className="ip-card__ref">Ref: {patent.reference}</div>
                  <div className="ip-card__date">Filed: {patent.date}</div>
                  <h3 className="ip-card__title">{patent.title}</h3>
                  {patent.notes && (
                    <p className="ip-card__notes">
                      {patent.notes}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
