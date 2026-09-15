import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Send, Loader2, X, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Patent Licensing & Commercialization',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dismissTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/wathsalaattanayake002@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Name / Organization': formData.name,
          'Email': formData.email,
          'Inquiry Type': formData.inquiryType,
          'Subject': formData.subject,
          'Message': formData.message,
          '_subject': `[Portfolio Inquiry] ${formData.subject} (${formData.name})`,
          '_template': 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.message))) {
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Patent Licensing & Commercialization',
          subject: '',
          message: ''
        });
        setShowSuccess(true);

        if (dismissTimerRef.current) clearTimeout(dismissTimerRef.current);
        dismissTimerRef.current = window.setTimeout(() => {
          setShowSuccess(false);
        }, 4500);
      } else {
        throw new Error(data?.message || 'Unable to submit the message right now. Please try again.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred while sending your message. Please try again.';
      setErrorMessage(msg);
      setTimeout(() => setErrorMessage(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-py" style={{ backgroundColor: '#fff', color: 'inherit' }}>
      <div className="container">
        <ScrollReveal>
          <div style={{ marginBottom: 'var(--space-12)' }}>
            <span className="section-label">Professional Contact</span>
            <div className="gold-line" />
            <h2 className="section-title">
              Get in Touch &amp;<br /> Collaboration
            </h2>
            <p className="contact__intro" style={{ maxWidth: '800px', marginTop: 'var(--space-4)' }}>
              For professional enquiries, collaboration discussions or further details,<br /> please fill out the form below.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal delay={1}>
            <div style={{ background: '#fff', padding: 'var(--space-8)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-200)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-5)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label htmlFor="name" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Full Name / Organization *</label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', background: '#fff', color: 'inherit', fontFamily: 'inherit', fontSize: 'var(--text-base)' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <label htmlFor="email" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Email Address *</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', background: '#fff', color: 'inherit', fontFamily: 'inherit', fontSize: 'var(--text-base)' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label htmlFor="inquiryType" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Inquiry Type / Purpose *</label>
                  <select required id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange} style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', background: '#fff', color: 'inherit', fontFamily: 'inherit', fontSize: 'var(--text-base)' }}>
                    <option value="Patent Licensing & Commercialization">Patent Licensing & Commercialization</option>
                    <option value="R&D Collaboration & Prototyping">R&D Collaboration & Prototyping</option>
                    <option value="Investor / Incubation Inquiry">Investor / Incubation Inquiry</option>
                    <option value="Media, Press & Exhibitions">Media, Press & Exhibitions</option>
                    <option value="General Discussion">General Discussion</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label htmlFor="subject" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Subject *</label>
                  <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', background: '#fff', color: 'inherit', fontFamily: 'inherit', fontSize: 'var(--text-base)' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <label htmlFor="message" style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>Your Message *</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={6} style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-gray-300)', background: '#fff', color: 'inherit', fontFamily: 'inherit', fontSize: 'var(--text-base)', resize: 'vertical' }} />
                </div>

                {errorMessage && (
                  <div style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#DC2626', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    marginTop: 'var(--space-2)',
                    padding: 'var(--space-4) var(--space-8)',
                    width: 'auto',
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.75 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin-animation" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Successfully Sent Popup */}
      {showSuccess && (
        <div role="alert" className="contact-popup">
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(197, 180, 149, 0.15)',
              border: '1px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-gold)',
              flexShrink: 0
            }}
          >
            <CheckCircle2 size={22} />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <h4 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                Message Sent Successfully!
              </h4>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color 0.2s'
                }}
                aria-label="Close message"
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: '#C9C5BC', lineHeight: 1.5 }}>
              Thank you! Your message has been sent directly to <strong>wathsalaattanayake002@gmail.com</strong>. Oshada will get back to you shortly.
            </p>

            <div
              style={{
                marginTop: 'var(--space-3)',
                height: '3px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-lt))',
                  animation: 'shrinkBar 4.5s linear forwards'
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
