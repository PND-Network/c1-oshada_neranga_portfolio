import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import logoW from '../assets/images/logo W.png';
import logoB from '../assets/images/logo B.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Inventions', href: '#inventions' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Patents', href: '#ip' },
  { label: 'Media & Endorsements', href: '#media' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hashId = window.location.hash.replace('#', '');
    return window.scrollY > 50 || (!!hashId && hashId !== 'home');
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    const hashId = window.location.hash.replace('#', '');
    return hashId || 'home';
  });
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // If arriving with hash, smoothly scroll to it with navbar offset
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const el = document.getElementById(hashId);
      if (el) {
        setTimeout(() => {
          const navHeight = 72;
          const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: Math.max(0, elementTop - navHeight),
            behavior: 'smooth',
          });
        }, 150);
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Always update scrolled state so navbar never stays transparent over light sections
      setScrolled(scrollY > 50);

      if (isProgrammaticScrollRef.current) return;

      // Edge case 1: Near top of page -> activate home
      if (scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Edge case 2: Near bottom of page -> activate contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Priority check for Contact section ("Get in Touch & Collaboration"):
      // As soon as the top of Contact enters the upper/middle viewport (<= 65% of window height),
      // Contact becomes active and remains active across the entire Contact section & footer.
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        if (contactRect.top <= windowHeight * 0.65) {
          setActiveSection('contact');
          return;
        }
      }

      // Scanline focal point for other sections (top 35% of viewport or 240px)
      const readingLine = Math.min(240, windowHeight * 0.35);
      const sectionIds = ['home', 'about', 'inventions', 'achievements', 'recognition', 'ip', 'media'];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= readingLine && rect.bottom > readingLine) {
            setActiveSection(id);
            return;
          }
        }
      }

      // Fallback: lowest section whose top is at or above the reading line
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= readingLine) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    setActiveSection(id);

    // Immediately update scrolled state so navbar transitions to solid right away
    if (id !== 'home') {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    const el = document.getElementById(id);
    if (el) {
      isProgrammaticScrollRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      const navHeight = 72;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - navHeight),
        behavior: 'smooth',
      });

      scrollTimeoutRef.current = window.setTimeout(() => {
        isProgrammaticScrollRef.current = false;
        setScrolled(window.scrollY > 50);
      }, 800);
    }
  };

  const isLight = !scrolled;

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}>
        <div className="navbar__inner">
          <button
            type="button"
            className="navbar__brand"
            onClick={() => handleLinkClick('#home')}
            aria-label="G.H.D. Oshada Neranga — Home"
          >
            <img
              src={isLight ? logoW : logoB}
              alt="Oshada Neranga Signature"
              className="navbar__signature-img"
            />
            <div
              className={`navbar__brand-divider ${isLight ? 'navbar__brand-divider--light' : ''}`}
              aria-hidden="true"
            />
            <div className="navbar__brand-text">
              <span className={`navbar__name ${isLight ? 'navbar__name--light' : ''}`}>
                Oshada Neranga
              </span>
              <span className="navbar__title">Inventor</span>
            </div>
          </button>

          <ul className="navbar__links" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    type="button"
                    className={`navbar__link ${isLight ? 'navbar__link--light' : ''} ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            className={`navbar__hamburger ${isLight ? 'navbar__hamburger--light' : ''} ${mobileOpen ? 'is-active' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} color={isLight ? '#FFFFFF' : '#0B0C0E'} />
            ) : (
              <>
                <span />
                <span />
                <span />
              </>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`navbar__mobile ${mobileOpen ? 'is-open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-inner">
          {navLinks.map((link) => {
            const isCta = link.href === '#contact';
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                type="button"
                className={`navbar__mobile-link ${isCta ? 'navbar__mobile-link--cta' : ''} ${isActive ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.href)}
              >
                <span>{link.label}</span>
                {isActive && !isCta && <span className="navbar__mobile-active-dot" />}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
