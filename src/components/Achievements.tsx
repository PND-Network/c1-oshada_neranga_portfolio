import ScrollReveal from './ScrollReveal';
import { achievementTimeline } from '../data/achievements';
import image8MedalsAwards from '../assets/images/image8_medals_awards.jpg';
import image3PrizeGivingCeremony from '../assets/images/image_3.jpg';
import image4RuhunaCompetition from '../assets/images/image_4.jpg';
import image7RiieCertificates from '../assets/images/image_7.jpg';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section-py">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Awards &amp; Recognition</span>
          <div className="gold-line" />
          <h2 className="section-title">
            A Record of<br />National Recognition
          </h2>
          <p className="section-subtitle">
            A documented timeline of invention competitions, awards and recognition from 2023 to 2025, supported by certificates, official correspondence and photographic evidence.
          </p>
        </ScrollReveal>

        {/* Photographic evidence gallery - magazine editorial layout */}
        <ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.8fr',
            gridTemplateRows: 'auto auto',
            gap: 'var(--space-4)',
            margin: 'var(--space-12) 0',
          }}>

            {/* ROW 1 LEFT - image_8: portrait (contains full photo on white bg) */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 10px 36px rgba(0,0,0,0.35)',
                aspectRatio: '3/4',
                background: '#f2f2f2',
              }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)'; }}
            >
              <img
                src={image8MedalsAwards}
                alt="G.H.D. Oshada Neranga proudly displaying gold and bronze awards at the G/Udugama National College Prize Giving"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'center',
                  transition: 'transform 0.5s ease',
                }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
                background: 'linear-gradient(135deg, #c9a227, #f5d06a)',
                color: '#1a0f00', fontWeight: 700, fontSize: 'var(--text-xs)',
                padding: '4px 12px', borderRadius: '999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}>🏅 Gold &amp; Bronze</div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(5,10,30,0.92) 0%, rgba(5,10,30,0.55) 50%, transparent 100%)',
                padding: 'var(--space-10) var(--space-4) var(--space-4)',
              }}>
                <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>🥇🥉 Gold &amp; Bronze Awards</div>
                <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'var(--text-sm)', lineHeight: 1.5, margin: 0 }}>
                  G/Udugama National College Prize Giving
                </p>
              </div>
            </div>

            {/* ROW 1 RIGHT - image_3: ceremony, fills row height */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 10px 36px rgba(0,0,0,0.35)',
              }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)'; }}
            >
              <img
                src={image3PrizeGivingCeremony}
                alt="G.H.D. Oshada Neranga receiving the New Inventions Award from Vice Dean Senior Professor Sujeewa Amarasena, Faculty of Medicine, University of Ruhuna"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 20%',
                  transition: 'transform 0.5s ease',
                }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
                background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                color: '#fff', fontWeight: 700, fontSize: 'var(--text-xs)',
                padding: '4px 12px', borderRadius: '999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}>🎓 University of Ruhuna</div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.65) 45%, transparent 100%)',
                padding: 'var(--space-12) var(--space-5) var(--space-4)',
              }}>
                <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>🎓 Prize Giving Ceremony</div>
                <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'var(--text-sm)', lineHeight: 1.5, margin: 0 }}>
                  New Inventions Award — presented by Vice Dean Senior Professor Sujeewa Amarasena, Faculty of Medicine, University of Ruhuna
                </p>
              </div>
            </div>

            {/* ROW 2 LEFT - image_4: Southern Province competition */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 10px 36px rgba(0,0,0,0.35)',
                aspectRatio: '3/4',
              }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)'; }}
            >
              <img
                src={image4RuhunaCompetition}
                alt="G.H.D. Oshada Neranga with a gold medal and certificates at the Southern Province New Invention Competition, University of Ruhuna 2023"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center 15%',
                  transition: 'transform 0.5s ease',
                }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
                background: 'linear-gradient(135deg, #0d7a4e, #34d399)',
                color: '#fff', fontWeight: 700, fontSize: 'var(--text-xs)',
                padding: '4px 12px', borderRadius: '999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}>🏆 2023</div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.65) 45%, transparent 100%)',
                padding: 'var(--space-10) var(--space-4) var(--space-3)',
              }}>
                <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>🏆 Provincial Competition</div>
                <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'var(--text-sm)', lineHeight: 1.5, margin: 0 }}>
                  Southern Province New Invention Competition — University of Ruhuna, 2023
                </p>
              </div>
            </div>

            {/* ROW 2 RIGHT - image_7 (RIIE): certificates fills row height */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 10px 36px rgba(0,0,0,0.35)',
              }}
              onMouseEnter={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.05)'; }}
              onMouseLeave={e => { (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)'; }}
            >
              <img
                src={image7RiieCertificates}
                alt="Ruhuna Invention and Innovation Competition (RIIE) 2023 certificates awarded to G.H.D. Oshada Neranga"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  transition: 'transform 0.5s ease',
                }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)',
                background: 'linear-gradient(135deg, #b45309, #fbbf24)',
                color: '#fff', fontWeight: 700, fontSize: 'var(--text-xs)',
                padding: '4px 12px', borderRadius: '999px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              }}>📜 RIIE 2023</div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.65) 50%, transparent 100%)',
                padding: 'var(--space-10) var(--space-5) var(--space-3)',
              }}>
                <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>📜 RIIE 2023</div>
                <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: 'var(--text-sm)', lineHeight: 1.5, margin: 0 }}>
                  Ruhuna Invention &amp; Innovation Competition (RIIE) Certificates — 2023
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="timeline" aria-label="Achievement timeline 2023-2025">
          {achievementTimeline.map((group) => (
            <div key={group.year} className="timeline__year-group">
              <ScrollReveal>
                <h3 className="timeline__year">{group.year}</h3>
              </ScrollReveal>
              <div className="timeline__items">
                {group.items.map((item, ii) => (
                  <ScrollReveal key={ii} delay={(ii % 2) + 1}>
                    <div className="timeline__item">
                      {item.award && (
                        <div className="timeline__item-award">{item.award}</div>
                      )}
                      <div className="timeline__item-name">{item.name}</div>
                      <div className="timeline__item-desc">{item.description}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
