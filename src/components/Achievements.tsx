import ScrollReveal from './ScrollReveal';
import { achievementTimeline, statsData } from '../data/achievements';
import image8MedalsAwards from '../assets/images/image8_medals_awards.jpg';
import image3PrizeGivingCeremony from '../assets/images/image_3.jpg';
import image4RuhunaCompetition from '../assets/images/image_4.jpg';
import image7RiieCertificates from '../assets/images/image_7.jpg';
import image9CertificatesAwards from '../assets/images/image_9.jpg';

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
            A documented timeline of invention competitions, awards and recognition from 2022 to 2026, supported by certificates, official correspondence and photographic evidence.
          </p>
        </ScrollReveal>

        {/* Stats bar */}
        <ScrollReveal delay={1}>
          <div className="achievements__stats">
            {statsData.map((stat, i) => (
              <div key={i} className="achievements__stat">
                <div className="achievements__stat-value">{stat.value}</div>
                <div className="achievements__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Photographic evidence gallery - horizontal scroll strip */}
        <ScrollReveal>
          <div style={{ position: 'relative', margin: 'var(--space-12) 0' }}>

            {/* Scroll-hint fade edges */}
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 20,
              width: 48, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to right, #ffffff, transparent)',
              borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)',
            }} />
            <div style={{
              position: 'absolute', top: 0, right: 0, bottom: 20,
              width: 48, zIndex: 2, pointerEvents: 'none',
              background: 'linear-gradient(to left, #ffffff, transparent)',
              borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
            }} />

            {/* Scroll track */}
            <div
              id="achievements-photo-gallery"
              style={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                overflowY: 'hidden',
                paddingBottom: '16px',
                paddingLeft: '4px',
                paddingRight: '4px',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                /* Custom scrollbar via inline style doesn't work — handled by class below */
              }}
              className="achievements-gallery-scroll"
            >
              {/* Card 1 — Medals & Awards */}
              <div
                style={{
                  position: 'relative',
                  flex: '0 0 300px',
                  height: '380px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.30)',
                  scrollSnapAlign: 'start',
                  background: '#f2f2f2',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.06)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 56px rgba(0,0,0,0.42)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.30)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
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
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(5,10,30,0.93) 0%, rgba(5,10,30,0.5) 55%, transparent 100%)',
                  padding: '48px 16px 16px',
                }}>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>🥇🥉 Gold &amp; Bronze Awards</div>
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                    G/Udugama National College Prize Giving
                  </p>
                </div>
              </div>

              {/* Card 2 — Prize Giving Ceremony */}
              <div
                style={{
                  position: 'relative',
                  flex: '0 0 300px',
                  height: '380px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.30)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.06)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 56px rgba(0,0,0,0.42)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.30)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
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
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.6) 50%, transparent 100%)',
                  padding: '52px 16px 16px',
                }}>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>🎓 Prize Giving Ceremony</div>
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                    New Inventions Award - presented by Vice Dean Senior Professor Sujeewa Amarasena, Faculty of Medicine, University of Ruhuna
                  </p>
                </div>
              </div>

              {/* Card 3 — Southern Province Competition */}
              <div
                style={{
                  position: 'relative',
                  flex: '0 0 300px',
                  height: '380px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.30)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.06)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 56px rgba(0,0,0,0.42)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.30)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
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
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.6) 45%, transparent 100%)',
                  padding: '48px 16px 16px',
                }}>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>🏆 Provincial Competition</div>
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                    Southern Province New Invention Competition - University of Ruhuna, 2023
                  </p>
                </div>
              </div>

              {/* Card 4 — RIIE Certificates */}
              <div
                style={{
                  position: 'relative',
                  flex: '0 0 300px',
                  height: '380px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.30)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.06)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 56px rgba(0,0,0,0.42)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.30)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
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
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.6) 50%, transparent 100%)',
                  padding: '48px 16px 16px',
                }}>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>📜 RIIE 2023</div>
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                    Ruhuna Invention &amp; Innovation Competition (RIIE) Certificates - 2023
                  </p>
                </div>
              </div>

              {/* Card 5 — Certificates and Awards for Inventions */}
              <div
                style={{
                  position: 'relative',
                  flex: '0 0 300px',
                  height: '380px',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.30)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  background: '#f8f8f8',
                }}
                onMouseEnter={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1.06)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 56px rgba(0,0,0,0.42)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget.querySelector('img') as HTMLImageElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.30)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={image9CertificatesAwards}
                  alt="Certificates and awards for inventions - G.H.D. Oshada Neranga"
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center',
                    transition: 'transform 0.5s ease',
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(5,10,30,0.97) 0%, rgba(5,10,30,0.6) 50%, transparent 100%)',
                  padding: '48px 16px 16px',
                }}>
                  <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>🎖️ Certificates &amp; Awards</div>
                  <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                    Certificates and Awards for Inventions
                  </p>
                </div>
              </div>

            </div>

            {/* Scroll hint label */}
            <p style={{
              textAlign: 'center',
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.08em',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}>
              <span style={{ fontSize: '14px' }}>←</span>
              Scroll to view all photos
              <span style={{ fontSize: '14px' }}>→</span>
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="timeline" aria-label="Achievement timeline 2022-2026">
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
