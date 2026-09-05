import ScrollReveal from './ScrollReveal';

const journeySteps = [
  {
    step: "Stage 01",
    title: "School Years",
    desc: "Early experimentation and problem-solving during school years at Udugama National College, developing a foundational interest in practical innovation.",
  },
  {
    step: "Stage 02",
    title: "Early Inventions",
    desc: "First inventions developed — identifying real-world engineering problems and exploring original technical solutions through practical experimentation.",
  },
  {
    step: "Stage 03",
    title: "Ruhuna Invention & Innovation Competitions",
    desc: "Multiple inventions entered and recognised at RIIE (Ruhuna Invention & Innovation Exhibition), co-organised by the University of Ruhuna and Sri Lanka Inventors Commission.",
  },
  {
    step: "Stage 04",
    title: "Provincial & National Recognition",
    desc: "Gold, Bronze and other national-level awards received for innovations including the eco-friendly porcelain brick and the grass cutter between interlock pavement device.",
  },
  {
    step: "Stage 05",
    title: "Technology Incubation",
    desc: "Selected for support and engagement with the Southern Technology Incubation Centre (STIC) at the University of Ruhuna, with formal commendation issued by the Director.",
  },
  {
    step: "Stage 06",
    title: "Commercialisation Development",
    desc: "The porcelain brick technology identified as having practical industrial application in the Sri Lankan brick manufacturing industry, with development toward implementation.",
  },
  {
    step: "Stage 07",
    title: "Patents Development",
    desc: "Two patent applications filed in Sri Lanka (LK/P/1/23235 and LK/P/1/23387) for the eco-friendly porcelain brick technology, establishing formal IP protection.",
  },
  {
    step: "Stage 08",
    title: "International Patent Filings",
    desc: "Patent applications filed in Australia (Application No. 2026905817, June 2026) and the United Kingdom (Application GB2613415.5, June 2026) — extending IP protection internationally.",
  },
  {
    step: "Stage 09",
    title: "Future Innovation in Australia",
    desc: "Seeking to continue the innovation journey in Australia — contributing to sustainable construction, circular economy, environmental innovation and engineering research.",
  },
];

export default function InnovationJourney() {
  return (
    <section id="journey" className="journey section-py">
      <div className="container">
        <ScrollReveal>
          <div className="text-center" style={{ marginBottom: 'var(--space-4)' }}>
            <span className="section-label">Innovation Journey</span>
          </div>
          <div className="gold-line gold-line--center" />
          <h2 className="section-title text-center">
            From First Invention<br />to International Recognition
          </h2>
          <p className="section-subtitle text-center" style={{ margin: '0 auto var(--space-4)' }}>
            A progressive journey through invention, competition, recognition, technology incubation, Patents development and international patent activity.
          </p>
        </ScrollReveal>

        <div className="journey__timeline" role="list" aria-label="Innovation journey timeline">
          {journeySteps.map((step, i) => (
            <div key={i} className="journey__item" role="listitem">
              {i % 2 === 0 ? (
                <>
                  <ScrollReveal direction="left" className="journey__content">
                    <div className="journey__step-num">{step.step}</div>
                    <h3 className="journey__step-title">{step.title}</h3>
                    <p className="journey__step-desc">{step.desc}</p>
                  </ScrollReveal>
                  <div className="journey__dot">
                    <div className="journey__dot-inner" aria-hidden="true" />
                  </div>
                  <div className="journey__spacer" />
                </>
              ) : (
                <>
                  <div className="journey__spacer" />
                  <div className="journey__dot">
                    <div className="journey__dot-inner" aria-hidden="true" />
                  </div>
                  <ScrollReveal direction="right" className="journey__content">
                    <div className="journey__step-num">{step.step}</div>
                    <h3 className="journey__step-title">{step.title}</h3>
                    <p className="journey__step-desc">{step.desc}</p>
                  </ScrollReveal>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
