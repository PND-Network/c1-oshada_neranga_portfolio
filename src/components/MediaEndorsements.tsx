import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface EndorsementItem {
  url: string;
  title: string;
  desc: string;
  actionText: string;
  isHighlight?: boolean;
}

const endorsements: EndorsementItem[] = [
  {
    url: 'https://www.facebook.com/share/1NDGQyoD4n/',
    title: 'National Innovation & Patents Feature',
    desc: 'Public tribute recognizing Sahasak Nimavum competition medals, patent-pending utility system solutions (LK/P/1/23235 & LK/P/1/23387), flood warning infrastructure, and recycled porcelain brick technology.',
    actionText: 'View Endorsement Post',
  },
  {
    url: 'https://www.facebook.com/share/18xJ8TZitY/',
    title: 'International Mechanism Demonstration',
    desc: "Live operating video demonstration reel showcasing the practical operation of Oshada's patented mechanical technology with international enthusiasm.",
    actionText: 'Watch Video Reel',
  },
  {
    url: 'https://www.facebook.com/share/18qfAzi4DZ/',
    title: 'Official Technology Showcase & Updates',
    desc: 'Featured public post detailing prototyping, field performance milestones, and community impact initiatives of active inventions.',
    actionText: 'View Project Update',
  },
  {
    url: 'https://www.facebook.com/share/p/1JFFhuycWT/',
    title: 'Inventor Spotlight & Community Impact',
    desc: "Community showcase highlighting Oshada Neranga's journey, from school-level experimentation to recognized national-level practical innovations.",
    actionText: 'Read Media Story',
  },
  {
    url: 'https://www.google.com/search?q=G.H.D.oshada+neranga&client=ms-android-transsion&sourceid=chrome-mobile&ie=UTF-8',
    title: 'Google Knowledge & Web Verification',
    isHighlight: true,
    desc: "Official Google search results and knowledge overview verifying Oshada Neranga's independent research awards, exhibition records, and public credentials.",
    actionText: 'Verify on Google Search',
  },
];

export default function MediaEndorsements() {
  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="media" className="media-section section-py">
      <div className="container media-section__content">
        <ScrollReveal>
          <div className="media-section__header">
            <span className="section-label">Media &amp; Public Endorsements</span>
            <div className="gold-line" />
            <h2 className="section-title">
              Independent Coverage &amp;<br />Public Demonstrations
            </h2>
            <p className="section-subtitle">
              Explore external media coverage, public endorsements and live demonstration reels.
            </p>
          </div>
        </ScrollReveal>

        <div className="endorsements-grid">
          {endorsements.map((item, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(item.url)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(item.url);
                  }
                }}
                className={`endorsement-card ${item.isHighlight ? 'endorsement-card--highlight' : ''}`}
              >
                <div className="endorsement-card__top">
                  <ExternalLink size={15} className="endorsement-card__icon" />
                </div>
                <h3 className="endorsement-card__title">{item.title}</h3>
                <p className="endorsement-card__desc">{item.desc}</p>
                <div className="endorsement-card__action">
                  <span>{item.actionText}</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
