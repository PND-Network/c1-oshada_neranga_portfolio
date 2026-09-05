import { useState } from 'react';
import { FileText, Eye } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Modal from './Modal';
import { documents } from '../data/documents';
import certificatesImg from '../assets/images/certificates.jpg';
import ceremonyImg from '../assets/images/ceremony.jpg';

const imageMap: Record<string, string> = {
  certificates: certificatesImg,
  ceremony: ceremonyImg,
};

export default function Documents() {
  const [activeDoc, setActiveDoc] = useState<typeof documents[0] | null>(null);

  return (
    <section id="documents" className="documents section-py">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">Evidence & Documentation</span>
          <div className="gold-line" />
          <h2 className="section-title">
            Evidence &amp; Recognition<br />Record
          </h2>
          <p className="section-subtitle">
            Supporting documentation for all major achievements and Patents activities. Each document can be viewed directly as evidence of the innovation record described in this portfolio.
          </p>
        </ScrollReveal>

        {/* Evidence hierarchy */}
        <ScrollReveal delay={1}>
          <div style={{
            marginTop: 'var(--space-10)',
            marginBottom: 'var(--space-6)',
            padding: 'var(--space-6) var(--space-8)',
            background: 'var(--color-navy)',
            borderRadius: 'var(--radius-lg)',
            color: 'rgba(255,255,255,0.75)',
            fontSize: 'var(--text-sm)',
            lineHeight: 1.75,
          }}>
            <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: 'var(--space-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 'var(--text-xs)' }}>
              Evidence Hierarchy
            </strong>
            <ol style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
              <li>International patent activity (Australia, United Kingdom)</li>
              <li>National / provincial invention awards (Sri Lanka Inventors Commission)</li>
              <li>Official government / commission documentation</li>
              <li>University / STIC commendation (University of Ruhuna)</li>
              <li>Competition certificates (RIIE 2023, 2024, 2025)</li>
              <li>Innovation project and achievement documentation</li>
            </ol>
          </div>
        </ScrollReveal>

        <div className="documents__grid">
          {documents.map((doc, i) => (
            <ScrollReveal key={doc.id} delay={(i % 3) + 1}>
              <div className="doc-card" id={`doc-card-${doc.id}`}>
                <div
                  className={doc.image ? 'doc-card__preview' : 'doc-card__preview doc-card__preview--no-img'}
                  onClick={() => setActiveDoc(doc)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Preview ${doc.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveDoc(doc); }}
                >
                  {doc.image ? (
                    <>
                      <img src={imageMap[doc.image]} alt={doc.title} loading="lazy" />
                      <div className="doc-card__preview-icon" aria-hidden="true">
                        <Eye size={24} />
                      </div>
                    </>
                  ) : (
                    <FileText size={48} aria-hidden="true" />
                  )}
                </div>

                <div className="doc-card__body">
                  <div className="doc-card__category">{doc.category}</div>
                  <h3 className="doc-card__title">{doc.title}</h3>
                  <div className="doc-card__org">{doc.organisation}</div>
                  <div className="doc-card__date">{doc.date}</div>
                </div>

                <div className="doc-card__footer">
                  <button
                    id={`doc-view-${doc.id}`}
                    className="btn btn-outline btn-sm"
                    onClick={() => setActiveDoc(doc)}
                    aria-label={`View evidence: ${doc.title}`}
                  >
                    <Eye size={12} />
                    View Evidence
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Evidence Modal */}
      <Modal
        isOpen={activeDoc !== null}
        onClose={() => setActiveDoc(null)}
        title={activeDoc?.title ?? ''}
      >
        {activeDoc && (
          <>
            {activeDoc.image && imageMap[activeDoc.image] && (
              <img
                src={imageMap[activeDoc.image]}
                alt={activeDoc.title}
                style={{ borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-6)' }}
              />
            )}

            {!activeDoc.image && (
              <div style={{
                background: 'var(--color-offwhite)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-10)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)',
              }}>
                <FileText size={48} color="var(--color-gold)" />
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>
                  The original document for this evidence item is held in the full evidence portfolio. Please contact for access to the full authenticated document set.
                </p>
              </div>
            )}

            {activeDoc.description && (
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-body)', lineHeight: 1.75, marginBottom: 'var(--space-6)' }}>
                {activeDoc.description}
              </p>
            )}

            <div className="modal-meta">
              <div className="modal-meta-item">
                <div className="modal-meta-label">Category</div>
                <div className="modal-meta-value">{activeDoc.category}</div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Organisation</div>
                <div className="modal-meta-value">{activeDoc.organisation}</div>
              </div>
              <div className="modal-meta-item">
                <div className="modal-meta-label">Date</div>
                <div className="modal-meta-value">{activeDoc.date}</div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
