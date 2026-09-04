import { useState } from 'react';
import { Award, Shield, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Modal from './Modal';
import { inventions, type Invention } from '../data/inventions';

export default function Inventions() {
  const [activeInv, setActiveInv] = useState<Invention | null>(null);

  return (
    <section id="inventions" className="inventions section-py">
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
                <h4 className="inv-modal__section-label">Intellectual Property</h4>
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
