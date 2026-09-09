import ScrollReveal from './ScrollReveal';

const domains = [
  'Sustainable Technology',
  'Public Safety',
  'Disaster Preparedness',
  'Waste Valorisation',
  'Construction Technology',
  'Surveillance Systems',
  'Technology Commercialisation',
];

export default function About() {
  return (
    <section id="about" className="about section-py">


      <div className="container about__container">
        <div className="about__content-grid">
          {/* Left Side — New Invention Image */}
          <div className="about__image-side">
            <ScrollReveal>
              <figure className="about__image-wrapper">
                <img 
                  src="/assets/bulb-changer-colored.jpg" 
                  alt="Bulb-Changing Device for Permanently Mounted or Wire-End Bulbs" 
                  className="about__invention-img" 
                />
                <figcaption className="about__image-caption">
                  Bulb-Changing Device for Permanently Mounted or Wire-End Bulbs
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>

          {/* Content — RIGHT */}
          <div className="about__content-side">
            <ScrollReveal>
              <span className="section-label">Professional Profile</span>
              <div className="gold-line" />
              <h2 className="section-title">An Inventor Driven by<br />Real-World Impact</h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="about__bio">
                G.H.D. Oshada Neranga is an emerging inventor focused on solving practical engineering problems through original thinking. His innovation journey began during his school years at G/Udugama National College, leading to a systematic approach to invention and real-world problem solving.
              </p>
              <p className="about__bio">
                His work spans applied domains from sustainable construction and waste valorisation to public safety, surveillance, and disaster preparedness. He has presented multiple original inventions at national-level platforms, including the Ruhuna Invention &amp; Innovation Exhibition (RIIE).
              </p>
              <p className="about__bio">
                A defining feature of his work is the progression from concept to Patents development. His flagship eco-friendly construction brick technology, which converts waste porcelain into high-strength building materials, is backed by the Southern Technology Incubation Centre (STIC) and is the subject of patent applications filed in Sri Lanka, Australia, and the UK.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h3 className="about__domains-heading">Core Invention Domains</h3>
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
