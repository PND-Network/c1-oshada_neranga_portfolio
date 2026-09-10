import { useState } from 'react';
import { Award, Shield, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Modal from './Modal';
import { inventions, type Invention } from '../data/inventions';

function InventionsWallpaper() {
  return (
    <svg
      className="inventions__wallpaper-svg"
      aria-hidden="true"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="inv-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C5B495" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C5B495" stopOpacity="0.8" />
        </linearGradient>
        
        <g id="base-pattern">
          {/* Network Lines */}
          <path d="M 100 200 L 550 80 L 700 300 L 900 600 L 500 800 L 200 600 Z" stroke="url(#inv-line)" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M 550 80 L 500 500 L 700 300" stroke="url(#inv-line)" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M 100 200 L 500 500 L 200 600" stroke="url(#inv-line)" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.5" />
          <path d="M 500 500 L 900 600" stroke="url(#inv-line)" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.5" />
          <path d="M 700 300 L 950 100" stroke="url(#inv-line)" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.5" />
          <path d="M 500 800 L 800 950" stroke="url(#inv-line)" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.5" />
          {/* Bridge lines for the 1000px seam */}
          <path d="M 900 600 L 1100 200" stroke="url(#inv-line)" strokeWidth="1" strokeDasharray="5 5" fill="none" opacity="0.5" />
          <path d="M 950 100 L 1100 200" stroke="url(#inv-line)" strokeWidth="1.5" fill="none" opacity="0.5" />
          
          <g opacity="0.85">
            {/* Node 2 - Bulb */}
            <circle cx="550" cy="80" r="55" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="550" cy="80" r="40" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(535,60) scale(1.5)">
              <path d="M9 18h6 M10 22h4 M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>

            {/* Node 3 - User/Person */}
            <circle cx="700" cy="300" r="50" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="700" cy="300" r="35" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(685,280) scale(1.5)">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>

            {/* Node 4 - Telescope */}
            <circle cx="200" cy="600" r="45" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="200" cy="600" r="30" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(185,585) scale(1.5)">
              <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m13.56 11.747 4.332-.924" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m16 21-3.105-6.21" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m6.158 8.633 1.114 4.456" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m8 21 3.105-6.21" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="13" r="2" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>
            
            {/* Node 5 - Settings/Gear */}
            <circle cx="500" cy="500" r="60" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="500" cy="500" r="45" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(485,485) scale(1.5)">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="12" r="3" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>
            
            {/* Node 6 - Another bulb */}
            <circle cx="900" cy="600" r="50" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="900" cy="600" r="35" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(885,580) scale(1.5)">
              <path d="M9 18h6 M10 22h4 M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>

            {/* Node 7 - Rocket */}
            <circle cx="500" cy="800" r="45" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="500" cy="800" r="30" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(485,785) scale(1.5)">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>

            {/* Node 8 - Telescope */}
            <circle cx="950" cy="100" r="45" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="950" cy="100" r="32" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(935,82) scale(1.5)">
              <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m13.56 11.747 4.332-.924" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m16 21-3.105-6.21" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m6.158 8.633 1.114 4.456" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <path d="m8 21 3.105-6.21" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="13" r="2" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>

            {/* Node 9 - Target */}
            <circle cx="800" cy="950" r="40" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="800" cy="950" r="28" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(785,935) scale(1.5)">
              <circle cx="12" cy="12" r="10" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="12" r="4" stroke="#C5B495" strokeWidth="1.5" fill="none" />
              <line x1="12" y1="2" x2="12" y2="6" stroke="#C5B495" strokeWidth="1.5" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="#C5B495" strokeWidth="1.5" />
              <line x1="2" y1="12" x2="6" y2="12" stroke="#C5B495" strokeWidth="1.5" />
              <line x1="18" y1="12" x2="22" y2="12" stroke="#C5B495" strokeWidth="1.5" />
            </g>
          </g>
        </g>
        
        <pattern id="inv-pattern" x="0" y="0" width="2000" height="1000" patternUnits="userSpaceOnUse">
          <use href="#base-pattern" />
          <use href="#base-pattern" x="1000" y="0" />
          
          <g opacity="0.85">
            {/* Node 1 - Test Tube (Left) */}
            <circle cx="100" cy="200" r="45" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="100" cy="200" r="30" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(85,185) scale(1.5)">
              <path d="M9 2v14c0 1.66 1.34 3 3 3s3-1.34 3-3V2M9 2h6M6 2h12M9 10h6M11 16h2" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>
            
            {/* Node 10 - Jet (Right) */}
            <circle cx="1100" cy="200" r="45" stroke="#C5B495" strokeWidth="2" fill="var(--color-gray-200)" />
            <circle cx="1100" cy="200" r="30" stroke="#C5B495" strokeWidth="1.5" fill="none" opacity="0.5" />
            <g transform="translate(1085,185) scale(1.5)">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="#C5B495" strokeWidth="1.5" fill="none" />
            </g>
          </g>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#inv-pattern)" />
    </svg>
  );
}

export default function Inventions() {
  const [activeInv, setActiveInv] = useState<Invention | null>(null);

  return (
    <section id="inventions" className="inventions section-py">
      <InventionsWallpaper />
      <div className="container">
        <ScrollReveal>
          <div className="inventions__header">
            <span className="section-label">Featured Inventions</span>
            <div className="gold-line" />
            <h2 className="section-title">
              Original Technologies<br />Addressing Real Problems
            </h2>
            <p className="section-subtitle">
              Each invention is evidence-based and has been presented at recognised national-level innovation competitions. Supporting documentation is available for review.
            </p>
          </div>
        </ScrollReveal>

        <div className="inventions__grid">
          {inventions.map((inv, i) => (
            <ScrollReveal key={inv.id} delay={(i % 3) + 1}>
              <article className="invention-card" aria-labelledby={`inv-title-${inv.id}`}>

                {/* Dark header — button lives here */}
                <div className="invention-card__head">
                  <span className="invention-card__num" aria-hidden="true">{String(inv.id).padStart(2, '0')}</span>
                  <div className="invention-card__category">{inv.category}</div>
                  <h3 className="invention-card__title" id={`inv-title-${inv.id}`}>{inv.title}</h3>
                  <button
                    id={`inv-details-${inv.id}`}
                    className="invention-card__details-btn"
                    onClick={() => setActiveInv(inv)}
                    aria-label={`View details for ${inv.title}`}
                  >
                    <FileText size={11} />
                    View Details
                  </button>
                </div>

              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Details modal */}
      {activeInv && (
        <Modal
          isOpen={!!activeInv}
          onClose={() => setActiveInv(null)}
          title={activeInv.title}
        >
          <div className="inv-modal">

            {/* Category */}
            <p className="inv-modal__category">{activeInv.category}</p>

            {/* Problem */}
            {activeInv.problem && (
              <>
                <h4 className="inv-modal__section-label">Problem Addressed</h4>
                <p className="inv-modal__text">{activeInv.problem}</p>
              </>
            )}

            {/* Concept */}
            {activeInv.concept && (
              <>
                <h4 className="inv-modal__section-label">Innovation</h4>
                <p className="inv-modal__text">{activeInv.concept}</p>
              </>
            )}

            {/* Value */}
            {activeInv.value && (
              <>
                <h4 className="inv-modal__section-label">Value</h4>
                <p className="inv-modal__text">{activeInv.value}</p>
              </>
            )}

            {/* Awards */}
            {activeInv.awards.length > 0 && (
              <>
                <h4 className="inv-modal__section-label">Awards &amp; Recognition</h4>
                <div className="invention-card__badges" style={{ marginBottom: 'var(--space-4)' }}>
                  {activeInv.awards.map((a, j) => (
                    <span key={j} className="badge badge--award">
                      <Award size={10} />
                      {a}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* IP status */}
            {activeInv.ipStatus && (
              <>
                <h4 className="inv-modal__section-label">Patents</h4>
                <div className="invention-card__badges">
                  <span className="badge badge--ip">
                    <Shield size={10} />
                    {activeInv.ipStatus}
                  </span>
                </div>
              </>
            )}

          </div>
        </Modal>
      )}
    </section>
  );
}
