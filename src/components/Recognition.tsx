import { useState } from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Modal from './Modal';
import ceremony from '../assets/images/ceremony.jpg';
import image4 from '../assets/images/image_4.jpg';

export default function Recognition() {
  const [isCommendationOpen, setIsCommendationOpen] = useState(false);

  return (
    <section id="recognition" className="recognition section-py">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Professional Recognition</span>
          <div className="gold-line" />
          <h2 className="section-title">
            Recognised by Leading<br />Innovation Institutions
          </h2>
        </ScrollReveal>

        <div className="recognition__grid">
          {/* Main commendation letter feature */}
          <div>
            <ScrollReveal>
              <div className="recognition__letter">
                <div className="recognition__letter-label">
                  Commendation - Southern Technology Incubation Centre, University of Ruhuna
                </div>

                <div className="recognition__quote-wrapper">
                  <div className="recognition__quote-mark recognition__quote-mark--open" aria-hidden="true">“</div>
                  <blockquote className="recognition__quote-text">
                    “I have witnessed his exceptional creativity, dedication, and outstanding ability to transform innovative ideas into practical technologies with significant social and industrial value.”
                  </blockquote>
                  <div className="recognition__quote-mark recognition__quote-mark--close" aria-hidden="true">”</div>
                </div>

                <p className="recognition__content-p">
                  The official commendation letter from the Southern Technology Incubation Centre (STIC), University of Ruhuna, highlights Oshada's capacity to develop inventions that address real industrial, environmental, disaster management and public safety challenges. It confirms his projects were selected for commercialisation funding through STIC, progressed toward industrial implementation, and entered the patent protection process.
                </p>

                <div className="recognition__attribution">
                  <div className="recognition__person">Prof. KKLB Adikaram</div>
                  <div className="recognition__person-title">Director, Southern Technology Incubation Centre<br />University of Ruhuna, Sri Lanka</div>
                </div>

                <div style={{ marginTop: 'var(--space-6)' }}>
                  <button
                    id="recognition-view-commendation-btn"
                    className="btn btn-primary"
                    onClick={() => setIsCommendationOpen(true)}
                  >
                    <FileText size={14} />
                    View Commendation Letter
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image evidence sidebar */}
          <div className="recognition__images">
            <ScrollReveal direction="right">
              <div className="recognition__img-card">
                <img
                  src={ceremony}
                  alt="G.H.D. Oshada Neranga receiving award at national innovation ceremony"
                  loading="lazy"
                />
                <div className="recognition__img-label">
                  New Inventions Award - presented by Vice Dean Senior Professor Sujeewa Amarasena, Faculty of Medicine, University of Ruhuna
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={1}>
              <div className="recognition__img-card">
                <img
                  src={image4}
                  alt="G.H.D. Oshada Neranga with invention awards"
                  loading="lazy"
                />
                <div className="recognition__img-label">
                  Southern Province New Invention Competition - University of Ruhuna, 2023
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>


      {/* Commendation Letter PDF Modal */}
      <Modal
        isOpen={isCommendationOpen}
        onClose={() => setIsCommendationOpen(false)}
        title="Official Commendation Letter - University of Ruhuna"
      >
        <div className="pdf-modal">
          <div className="pdf-modal__toolbar">
            <span className="pdf-modal__meta">Issued: 01 August 2026 · Southern Technology Incubation Centre (STIC)</span>
            <div className="pdf-modal__buttons">
              <button
                type="button"
                onClick={() => window.open('/Commendation%20Letter.pdf', '_blank', 'noopener,noreferrer')}
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={13} />
                Open in New Tab
              </button>
              <button
                type="button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Commendation%20Letter.pdf';
                  link.download = 'Commendation Letter - Oshada Neranga.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn btn-primary btn-sm"
              >
                <Download size={13} />
                Download PDF
              </button>
            </div>
          </div>
          <div className="pdf-modal__frame-wrap">
            <iframe
              src="/Commendation%20Letter.pdf#toolbar=1"
              title="Official Commendation Letter - Southern Technology Incubation Centre, University of Ruhuna"
              className="pdf-modal__iframe"
            />
          </div>
        </div>
      </Modal>
    </section>
  );
}
