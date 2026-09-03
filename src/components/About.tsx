import ScrollReveal from './ScrollReveal';
import portrait from '../assets/images/portrait.jpg';

const domains = [
  'Sustainable Technology',
  'Environmental Innovation',
  'Engineering Innovation',
  'Public Safety',
  'Disaster Preparedness',
  'Intellectual Property',
  'Technology Commercialisation',
  'Waste Valorisation',
  'Construction Technology',
  'Surveillance Systems',
];

export default function About() {
  return (
    <section id="about" className="about section-py">
      <div className="container">
        <div className="about__grid">
          {/* Image side */}
          <div className="about__image-side">
            <ScrollReveal direction="left">
              <div className="about__accent-block" aria-hidden="true" />
              <div className="about__image-wrap">
                <img
                  src={portrait}
                  alt="G.H.D. Oshada Neranga"
                  className="about__image"
                  loading="lazy"
                />
                <div className="about__image-caption">
                  <strong>G.H.D. Oshada Neranga</strong>
                  <span>Inventor · Technology Innovator</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Content side */}
          <div className="about__content-side">
            <ScrollReveal>
              <span className="section-label">Professional Profile</span>
              <div className="gold-line" />
              <h2 className="section-title">An Inventor Driven by<br />Real-World Impact</h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="about__bio">
                G.H.D. Oshada Neranga is an emerging inventor and technology innovator whose work centres on solving practical, everyday engineering problems through original thinking and inventive application. His innovation journey began during his school years at Udugama National College, where early experimentation grew into a systematic approach to invention and problem solving.
              </p>
              <p className="about__bio">
                His inventions span a broad range of applied domains — from sustainable construction and environmental waste valorisation to public safety, surveillance, disaster preparedness, and practical engineering. He has developed and presented multiple original inventions at national-level competition platforms, including the Ruhuna Invention & Innovation Exhibition (RIIE), co-organised by the University of Ruhuna and the Sri Lanka Inventors Commission.
              </p>
              <p className="about__bio">
                A defining feature of his work is the progression from invention concept through to intellectual property development. His flagship eco-friendly construction brick technology — which converts waste porcelain into high-strength building materials — has been recognised at the national level, supported by the Southern Technology Incubation Centre (STIC) at the University of Ruhuna, and is the subject of patent applications filed in Sri Lanka, Australia and the United Kingdom.
              </p>
              <p className="about__bio">
                His profile has been recognised by Prof. KKLB Adikaram, Director of the Southern Technology Incubation Centre, University of Ruhuna, who has commended his ability to transform innovative ideas into practical technologies with social, industrial and environmental value.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 'var(--space-3)' }}>
                Core Innovation Domains
              </h3>
              <div className="about__domains">
                {domains.map((d) => (
                  <span key={d} className="about__domain-tag">{d}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
