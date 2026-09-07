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

        {/* Public Endorsements & Media Verification */}
        <div className="recognition__media-section">
          <ScrollReveal>
            <div className="recognition__media-header">
              <span className="section-label">Media &amp; Public Endorsements</span>
              <div className="gold-line" />
              <h3 className="recognition__media-title">
                Independent Coverage &amp; Public Demonstrations
              </h3>
              <p className="recognition__media-subtitle">
                Explore external media coverage, public endorsements, live demonstration reels, and verified web profiles documenting Oshada's innovations.
              </p>
            </div>
          </ScrollReveal>

          <div className="recognition__media-grid">
            {/* 1. Sameera Mihiran Endorsement */}
            <ScrollReveal delay={1}>
              <a
                href="https://www.facebook.com/share/1NDGQyoD4n/"
                target="_blank"
                rel="noopener noreferrer"
                className="endorsement-card"
              >
                <div className="endorsement-card__top">
                  <span className="endorsement-card__badge">National Endorsement</span>
                  <ExternalLink size={15} className="endorsement-card__icon" />
                </div>
                <h4 className="endorsement-card__title">
                  National Innovation &amp; Patents Feature
                </h4>
                <div className="endorsement-card__author">By Sameera Mihiran</div>
                <p className="endorsement-card__desc">
                  Public tribute recognizing Sahasak Nimavum competition medals, patent-pending utility system solutions (LK/P/1/23235 &amp; LK/P/1/23387), flood warning infrastructure, and recycled porcelain brick technology.
                </p>
                <div className="endorsement-card__action">
                  <span>View Endorsement Post</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            </ScrollReveal>

            {/* 2. Jiří Nevrlý Live Video Reel */}
            <ScrollReveal delay={2}>
              <a
                href="https://www.facebook.com/share/18xJ8TZitY/"
                target="_blank"
                rel="noopener noreferrer"
                className="endorsement-card"
              >
                <div className="endorsement-card__top">
                  <span className="endorsement-card__badge endorsement-card__badge--video">Live Video Demo</span>
                  <ExternalLink size={15} className="endorsement-card__icon" />
                </div>
                <h4 className="endorsement-card__title">
                  International Mechanism Demonstration
                </h4>
                <div className="endorsement-card__author">By Jiří Nevrlý</div>
                <p className="endorsement-card__desc">
                  Live operating video demonstration reel showcasing the practical operation of Oshada's patented mechanical technology with international enthusiasm.
                </p>
                <div className="endorsement-card__action">
                  <span>Watch Video Reel</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            </ScrollReveal>

            {/* 3. Official Innovation Showcase */}
            <ScrollReveal delay={3}>
              <a
                href="https://www.facebook.com/share/18qfAzi4DZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="endorsement-card"
              >
                <div className="endorsement-card__top">
                  <span className="endorsement-card__badge">Project Showcase</span>
                  <ExternalLink size={15} className="endorsement-card__icon" />
                </div>
                <h4 className="endorsement-card__title">
                  Official Technology Showcase &amp; Updates
                </h4>
                <div className="endorsement-card__author">Official Project Announcement</div>
                <p className="endorsement-card__desc">
                  Featured public post detailing prototyping, field performance milestones, and community impact initiatives of active inventions.
                </p>
                <div className="endorsement-card__action">
                  <span>View Project Update</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            </ScrollReveal>

            {/* 4. Public Media Story */}
            <ScrollReveal delay={4}>
              <a
                href="https://www.facebook.com/share/p/1JFFhuycWT/"
                target="_blank"
                rel="noopener noreferrer"
                className="endorsement-card"
              >
                <div className="endorsement-card__top">
                  <span className="endorsement-card__badge">Media Story</span>
                  <ExternalLink size={15} className="endorsement-card__icon" />
                </div>
                <h4 className="endorsement-card__title">
                  Inventor Spotlight &amp; Community Impact
                </h4>
                <div className="endorsement-card__author">Media Feature Story</div>
                <p className="endorsement-card__desc">
                  Community showcase highlighting Oshada Neranga's journey, from school-level experimentation to recognized national-level practical innovations.
                </p>
                <div className="endorsement-card__action">
                  <span>Read Media Story</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            </ScrollReveal>

            {/* 5. Google Search Verification */}
            <ScrollReveal delay={5}>
              <a
                href="https://www.google.com/search?q=G.H.D.oshada+neranga&client=ms-android-transsion&sourceid=chrome-mobile&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
                className="endorsement-card endorsement-card--highlight"
              >
                <div className="endorsement-card__top">
                  <span className="endorsement-card__badge endorsement-card__badge--gold">Verified Search</span>
                  <ExternalLink size={15} className="endorsement-card__icon" />
                </div>
                <h4 className="endorsement-card__title">
                  Google Knowledge &amp; Web Verification
                </h4>
                <div className="endorsement-card__author">Google Search Profile</div>
                <p className="endorsement-card__desc">
                  Official Google search results and knowledge overview verifying Oshada Neranga's independent research awards, exhibition records, and public credentials.
                </p>
                <div className="endorsement-card__action">
                  <span>Verify on Google Search</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
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
              <a
                href="/Commendation%20Letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={13} />
                Open in New Tab
              </a>
              <a
                href="/Commendation%20Letter.pdf"
                download="Commendation Letter - Oshada Neranga.pdf"
                className="btn btn-primary btn-sm"
              >
                <Download size={13} />
                Download PDF
              </a>
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
