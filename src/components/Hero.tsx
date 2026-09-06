import { ChevronDown, Download } from 'lucide-react';
import portrait from '../assets/images/portrait.jpg';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="hero__bg-radial" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Content */}
        <div className="hero__content">
          <div className="hero__eyebrow" aria-label="Professional identity">
            Inventions for impact
          </div>

          <h1 className="hero__name">
            G.H.D. Oshada<br />
            <span>Neranga</span>
          </h1>

          <p className="hero__profession">
            <strong>Inventor</strong> · <strong>Entrepreneurial Problem Solver</strong>
          </p>

          <blockquote className="hero__statement">
            "Developing practical technologies that transform real-world challenges into sustainable, scalable innovations."
          </blockquote>

          <div className="hero__actions">
            <button
              id="hero-explore-btn"
              className="btn btn-gold btn-lg"
              onClick={() => scrollTo('inventions')}
            >
              Explore Inventions
            </button>
            <button
              id="hero-achievements-btn"
              className="btn btn-outline btn-outline--light btn-lg"
              onClick={() => scrollTo('achievements')}
            >
              View Achievements
            </button>
          </div>

          <a
            href="/G.H.D.%20Oshada%20Neranga%20CV.pdf"
            download="G.H.D. Oshada Neranga CV.pdf"
            className="hero__download"
            aria-label="Download professional CV"
          >
            <Download size={13} />
            Download Professional CV
          </a>
        </div>

        {/* Portrait */}
        <div className="hero__image-col" aria-hidden="true">
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-frame" />
            <div className="hero__portrait-frame-2" />
            <img
              src={portrait}
              alt="G.H.D. Oshada Neranga — Inventor"
              className="hero__portrait"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero__portrait-badge">
              Sri Lankan<br />Inventor
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <ChevronDown size={18} />
      </div>
    </section>
  );
}
