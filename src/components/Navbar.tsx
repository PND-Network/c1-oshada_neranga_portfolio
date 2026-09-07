import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Inventions', href: '#inventions' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Patents', href: '#ip' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isLight = !scrolled;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
        <div className="container navbar__inner">
          <a
            href="#home"
            className="navbar__brand"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
            aria-label="G.H.D. Oshada Neranga — Home"
          >
            <span className={`navbar__name ${isLight ? 'navbar__name--light' : ''}`}>
              G.H.D. Oshada Neranga
            </span>
            <span className="navbar__title">Inventor</span>
          </a>

          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${isLight ? 'navbar__link--light' : ''} ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`navbar__hamburger ${isLight ? 'navbar__hamburger--light' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} color={isLight ? 'white' : undefined} /> : (
              <>
                <span /><span /><span />
              </>
            )}
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile ${mobileOpen ? 'is-open' : ''}`} role="navigation" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
