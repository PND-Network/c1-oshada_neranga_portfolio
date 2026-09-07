import { Phone, Mail } from 'lucide-react';
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
          <p className="contact__intro">
            For professional enquiries, collaboration discussions or further details, please use the contact details below. All enquiries will be responded to promptly.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="contact__grid">
            {/* Phone */}
            <a href="tel:+94764689418" className="contact__card">
              <div className="contact__info-icon" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact__info-label">Phone</div>
                <div className="contact__info-value">+94 76 468 9418</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:Oshadaneranga4@gmail.com" className="contact__card">
              <div className="contact__info-icon" aria-hidden="true">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact__info-label">Email</div>
                <div className="contact__info-value">Oshadaneranga4@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/g-h-d-oshada-neranga-339389417?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__info-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="contact__info-label">LinkedIn</div>
                <div className="contact__info-value">G.H.D. Oshada Neranga</div>
              </div>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/OshadaNeranga"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__info-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <div className="contact__info-label">X (Twitter)</div>
                <div className="contact__info-value">@OshadaNeranga</div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61590850472852"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card"
            >
              <div className="contact__info-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <div className="contact__info-label">Facebook</div>
                <div className="contact__info-value">Oshada Neranga</div>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
