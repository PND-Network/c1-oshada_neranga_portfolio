import { useState, useRef, useCallback } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import portrait from '../assets/images/portrait.jpg';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: -y * 22,
      rotateY: x * 22,
      glareX: (x + 0.5) * 100,
      glareY: (y + 0.5) * 100,
      isHovered: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  }, []);

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

          <div className="hero__meta-links">
            <a
              href="/G.H.D.%20Oshada%20Neranga%20CV.pdf"
              download="G.H.D. Oshada Neranga CV.pdf"
              className="hero__download"
              aria-label="Download professional CV"
            >
              <Download size={13} />
              Download Professional CV
            </a>

            <a
              href="https://www.google.com/search?q=G.H.D.oshada+neranga&client=ms-android-transsion&sourceid=chrome-mobile&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__google-verify"
              aria-label="Verify G.H.D. Oshada Neranga on Google Search"
            >
              <ExternalLink size={13} />
              Verify on Google
            </a>
          </div>
        </div>

        {/* 3D Interactive Portrait */}
        <div
          className="hero__image-col"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            className={`hero__portrait-3d-stage ${!tilt.isHovered ? 'hero__portrait--idle-float' : ''}`}
            style={{
              transform: tilt.isHovered
                ? `perspective(1200px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg)`
                : undefined,
            }}
          >
            {/* 3D Backlight Halo */}
            <div className="hero__portrait-halo" aria-hidden="true" />

            {/* Layer 0: Deep floating frame */}
            <div className="hero__portrait-frame-2" aria-hidden="true" />

            {/* Layer 1: Forward floating frame */}
            <div className="hero__portrait-frame" aria-hidden="true" />

            {/* Layer 2: Main 3D Card with Bevel & Specular Glare */}
            <div className="hero__portrait-card">
              <img
                src={portrait}
                alt="G.H.D. Oshada Neranga — Inventor"
                className="hero__portrait"
                loading="eager"
                fetchPriority="high"
              />
              <div
                className="hero__portrait-glare"
                style={{
                  opacity: tilt.isHovered ? 0.4 : 0,
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45) 0%, rgba(197, 180, 149, 0.15) 35%, transparent 70%)`,
                }}
                aria-hidden="true"
              />
            </div>

            {/* Layer 3: High-depth floating badge */}
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
