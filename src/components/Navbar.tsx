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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setScrolled(scrollY > 60);

      // Edge case 1: Reached bottom of page -> activate contact
      if (scrollY + windowHeight >= docHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // Edge case 2: Near top of page -> activate home
      if (scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Scanline focal point 220px from top
      const focalPoint = 220;
      const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalPoint) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    setActiveSection(id);
    const el = document.getElementById(id);
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
