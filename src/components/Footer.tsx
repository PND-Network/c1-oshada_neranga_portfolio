import { ArrowUp, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Inventions', id: 'inventions' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Patents', id: 'ip' },
    { label: 'Recognition', id: 'recognition' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__gold-bar" />
            <div className="footer__brand-name">G.H.D. Oshada Neranga</div>
            <div className="footer__brand-title">Inventor &amp; Innovator</div>
            <p className="footer__tagline">
              Developing patented engineering solutions in electrical safety, sustainable agriculture, and advanced mechanical systems.
            </p>
            <div className="footer__socials">
              <button
                type="button"
                onClick={() => window.open('https://www.linkedin.com/in/g-h-d-oshada-neranga-339389417?utm_source=share_via&utm_content=profile&utm_medium=member_android', '_blank', 'noopener,noreferrer')}
                className="footer__social-btn"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => window.open('https://x.com/OshadaNeranga', '_blank', 'noopener,noreferrer')}
                className="footer__social-btn"
                aria-label="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => window.open('https://www.facebook.com/profile.php?id=61590850472852', '_blank', 'noopener,noreferrer')}
                className="footer__social-btn"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = 'mailto:Oshadaneranga4@gmail.com'; }}
                className="footer__social-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = 'tel:+94764689418'; }}
                className="footer__social-btn"
                aria-label="Phone"
              >
                <Phone size={18} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__nav-col">
            <div className="footer__col-title">Navigation</div>
            <ul className="footer__links" role="list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className="footer__link"
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="footer__contact-col">
            <div className="footer__col-title">Direct Inquiries</div>
            <div className="footer__contact-list">
              <button
                type="button"
                onClick={() => { window.location.href = 'mailto:Oshadaneranga4@gmail.com'; }}
                className="footer__contact-item"
              >
                <div className="footer__contact-icon">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="footer__contact-label">Email</span>
                  <span className="footer__contact-value">Oshadaneranga4@gmail.com</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => { window.location.href = 'tel:+94764689418'; }}
                className="footer__contact-item"
              >
                <div className="footer__contact-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="footer__contact-label">Phone</span>
                  <span className="footer__contact-value">+94 76 468 9418</span>
                </div>
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="footer__back-to-top"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              &copy; 2026 G.H.D. Oshada Neranga. All rights reserved.
            </p>
            <p className="footer__tag-badge">
              Innovation · Sustainability · Engineering · Impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
