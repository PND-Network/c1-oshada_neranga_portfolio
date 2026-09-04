export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Inventions', id: 'inventions' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Intellectual Property', id: 'ip' },
    { label: 'Recognition', id: 'recognition' },
    { label: 'Vision for Australia', id: 'vision' },
    { label: 'Documents', id: 'documents' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__brand-name">G.H.D. Oshada Neranga</div>
            <div className="footer__brand-title">Inventor</div>
            <p className="footer__tagline">
              Innovation · Sustainability · Engineering · Impact
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer__col-title">Navigation</div>
            <ul className="footer__links" role="list">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer__link"
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <div className="footer__col-title">Evidence &amp; Contact</div>
            <ul className="footer__links" role="list">
              {navLinks.slice(5).map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer__link"
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:" className="footer__link">Email</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">
            This website presents a professional portfolio and supporting evidence of innovation activities for G.H.D. Oshada Neranga. All claims are evidence-based and supported by documentation available upon request. This website is not a substitute for formal visa or migration advice. Patent applications referenced are pending and have not been examined or granted unless otherwise stated. &copy; 2026 G.H.D. Oshada Neranga.
          </p>
        </div>
      </div>
    </footer>
  );
}
