import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ScrollReveal from './ScrollReveal';
import { achievementTimeline } from '../data/achievements';
import image8MedalsAwards from '../assets/images/image8_medals_awards.png';
import image3PrizeGivingCeremony from '../assets/images/image_3.jpg';
import image4RuhunaCompetition from '../assets/images/image_4.jpg';
import image7RiieCertificates from '../assets/images/image_7.jpg';
import image9CertificatesAwards from '../assets/images/image_9.jpg';

/* Gallery data — image8 (contain-fit) moved to last for better first impression */
const galleryItems = [
  {
    src: image3PrizeGivingCeremony,
    alt: 'G.H.D. Oshada Neranga receiving the New Inventions Award from Vice Dean Senior Professor Sujeewa Amarasena, Faculty of Medicine, University of Ruhuna',
    tag: '🎓 Prize Giving Ceremony',
    caption: 'New Inventions Award - presented by Vice Dean Senior Professor Sujeewa Amarasena, Faculty of Medicine, University of Ruhuna',
    position: 'center 20%',
  },
  {
    src: image4RuhunaCompetition,
    alt: 'G.H.D. Oshada Neranga with a gold medal and certificates at the Southern Province New Invention Competition, University of Ruhuna 2023',
    tag: '🏆 Provincial Competition',
    caption: 'Southern Province New Invention Competition - University of Ruhuna, 2023',
    position: 'center 15%',
  },
  {
    src: image7RiieCertificates,
    alt: 'Ruhuna Invention and Innovation Competition (RIIE) 2023 certificates awarded to G.H.D. Oshada Neranga',
    tag: '📜 RIIE 2023',
    caption: 'Ruhuna Invention & Innovation Competition (RIIE) Certificates - 2023',
  },
  {
    src: image9CertificatesAwards,
    alt: 'Certificates and awards for inventions - G.H.D. Oshada Neranga',
    tag: '🎖️ Certificates & Awards',
    caption: 'Certificates and Awards for Inventions',
  },
  {
    src: image8MedalsAwards,
    alt: 'G.H.D. Oshada Neranga proudly displaying gold and bronze awards at the G/Udugama National College Prize Giving',
    tag: '🥇🥉 Gold & Bronze Awards',
    caption: 'G/Udugama National College Prize Giving',
    fit: 'contain' as const,
    background: '#fff',
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="achievements section-py"
      style={{
        background: 'linear-gradient(175deg, #080C14 0%, #0d1220 40%, #10162a 70%, #080C14 100%)',
        color: '#fff',
      }}
    >
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Awards &amp; Recognition</span>
          <div className="gold-line" />
          <h2 className="section-title section-title--light">
            A Record of<br />National Recognition
          </h2>
          <p className="section-subtitle section-subtitle--light">
            A documented timeline of invention competitions, awards and recognition from 2022 to 2026, supported by certificates, official correspondence and photographic evidence.
          </p>
        </ScrollReveal>

        {/* ── Photo Gallery — Swiper ── */}
        <ScrollReveal>
          <div className="ach-swiper-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4500, disableOnInteraction: true }}
              loop
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
              }}
              className="ach-swiper"
            >
              {galleryItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="ach-card" style={item.background ? { background: item.background } : {}}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="ach-card__img"
                      style={{ 
                        objectPosition: item.position || 'center',
                        objectFit: item.fit || 'cover'
                      }}
                      loading="lazy"
                    />
                    <div className="ach-card__overlay">
                      <div className="ach-card__tag">{item.tag}</div>
                      <p className="ach-card__caption">{item.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>

        {/* ── Timeline ── */}
        <div className="timeline timeline--dark" aria-label="Achievement timeline 2022-2026">
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
