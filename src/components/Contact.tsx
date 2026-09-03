import { Mail, ExternalLink, FileDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="contact section-py">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Professional Contact</span>
          <div className="gold-line" />
          <h2 className="section-title">
            Professional Enquiries<br />&amp; Collaboration
          </h2>
        </ScrollReveal>

        <div className="contact__grid">
          {/* Contact information */}
          <div>
            <ScrollReveal>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-10)' }}>
                For professional enquiries, evidence requests, collaboration discussions or to receive the full evidence portfolio, please use the contact details below. All enquiries will be responded to promptly.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="contact__info-item">
                <div className="contact__info-icon" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">
                    <a href="mailto:ghd.oshadaneranga@gmail.com" style={{ color: 'var(--color-navy)', textDecoration: 'underline', textDecorationColor: 'var(--color-gold)' }}>
                      [Available upon request]
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="contact__info-item">
                <div className="contact__info-icon" aria-hidden="true">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <div className="contact__info-label">LinkedIn</div>
                  <div className="contact__info-value">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--color-navy)', textDecoration: 'underline', textDecorationColor: 'var(--color-gold)' }}
                    >
                      [Profile available upon request]
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="contact__info-item">
                <div className="contact__info-icon" aria-hidden="true">
                  <FileDown size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Professional Profile / CV</div>
                  <div className="contact__info-value">Available upon request</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Note box */}
          <ScrollReveal direction="right">
            <div className="contact__form-note">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                color: 'var(--color-navy)',
                marginBottom: 'var(--space-4)',
              }}>
                Evidence Portfolio
              </h3>
              <p>
                A complete evidence portfolio is available for formal review purposes. It includes original copies of all certificates, commendation letters, patent application receipts, competition records and official correspondence referenced in this website.
              </p>
              <p>
                This portfolio is intended to support immigration assessment, academic or industry collaboration, and research partnership discussions.
              </p>
              <div style={{ borderTop: '1px solid var(--color-gray-200)', paddingTop: 'var(--space-5)' }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 0 }}>
                  All documents presented in this portfolio are authentic originals or certified copies. No claims have been fabricated or exaggerated beyond the available evidence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
