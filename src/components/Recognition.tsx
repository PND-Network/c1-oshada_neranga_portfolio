import { FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ceremony from '../assets/images/ceremony.jpg';
import trophy from '../assets/images/image8_medals_awards.jpg';

export default function Recognition() {
  const scrollToDocuments = () => {
    document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                  Commendation — Southern Technology Incubation Centre, University of Ruhuna
                </div>

                <div className="recognition__quote-mark" aria-hidden="true">"</div>

                <blockquote className="recognition__quote-text">
                  Oshada is an exceptionally creative and dedicated innovator with the ability to transform innovative ideas into practical technologies that carry real social, industrial and environmental value.
                </blockquote>

                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)' }}>
                  The commendation letter from the Southern Technology Incubation Centre (STIC), University of Ruhuna, highlights Oshada's capacity to develop inventions that address real industrial, environmental, disaster management and public safety challenges. It identifies his work as having both practical social value and potential for commercialisation.
                </p>

                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 'var(--space-6)', padding: 'var(--space-5)', background: 'var(--color-offwhite)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--color-gold)' }}>
                  <strong style={{ display: 'block', color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>Areas specifically identified in the commendation:</strong>
                  Industry application · Environmental sustainability · Disaster management · Public safety · Practical innovation · Technology incubation support
                </p>

                <div className="recognition__attribution">
                  <div className="recognition__person">Prof. KKLB Adikaram</div>
                  <div className="recognition__person-title">Director, Southern Technology Incubation Centre<br />University of Ruhuna, Sri Lanka</div>
                </div>

                <div style={{ marginTop: 'var(--space-6)' }}>
                  <button
                    id="recognition-view-commendation-btn"
                    className="btn btn-primary"
                    onClick={scrollToDocuments}
                  >
                    <FileText size={14} />
                    View Commendation Letter
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* SLIC recognition */}
            <ScrollReveal delay={1}>
              <div style={{
                marginTop: 'var(--space-8)',
                padding: 'var(--space-6) var(--space-8)',
                background: 'var(--color-white)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-gray-200)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div className="recognition__letter-label">
                  Sri Lanka Inventors Commission (SLIC)
                </div>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-body)', lineHeight: 1.75, marginBottom: 'var(--space-5)' }}>
                  The Sri Lanka Inventors Commission (SLIC) is the national body responsible for promoting and recognising invention and innovation in Sri Lanka. Official correspondence and awards documentation from SLIC confirms recognition of Oshada's inventions at national-level competitions, including the Ruhuna Invention &amp; Innovation Exhibition.
                </p>
                <button
                  id="recognition-slic-btn"
                  className="btn btn-outline btn-sm"
                  onClick={scrollToDocuments}
                >
                  <FileText size={12} />
                  View SLIC Documentation
                </button>
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
                  Award ceremony — national innovation recognition
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={1}>
              <div className="recognition__img-card">
                <img
                  src={trophy}
                  alt="G.H.D. Oshada Neranga with invention awards"
                  loading="lazy"
                />
                <div className="recognition__img-label">
                  Multiple invention awards and medals
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
