import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Send, Loader2, X, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    inquiryType: '',
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
      const sriLankanTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Colombo',
        dateStyle: 'full',
        timeStyle: 'medium',
      }).format(new Date()) + ' (Sri Lanka Time, GMT+5:30)';

      const response = await fetch('https://formsubmit.co/ajax/oshadaneranga4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Name / Organization': formData.name,
          'Email': formData.email,
          'Country': formData.country,
          'Inquiry Type': formData.inquiryType,
          'Subject': formData.subject,
          'Message': formData.message,
          'Submitted Date & Time': sriLankanTime,
          '_subject': `[Portfolio Inquiry] ${formData.subject} (${formData.name})`,
          '_template': 'table'
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === 'true' || data.message))) {
        setFormData({
          name: '',
          email: '',
          country: '',
          inquiryType: '',
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
    <section id="contact" className="contact section-py">
      {/* Background ambient lighting */}
      <div className="contact__glow" aria-hidden="true" />

      <div className="container contact__container">
        <ScrollReveal>
          <div className="contact__header">

            <h2 className="section-title contact__title">
              Get in Touch &amp; Collaboration
            </h2>
            <p className="contact__intro">
              For patent licensing, collaborative R&amp;D partnerships, technology prototyping or general professional inquiries, please submit your request below.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="contact__form-card">

            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Full Name / Organization *</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name here"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Email Address *</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="country" className="contact__label">Country *</label>
                <input
                  required
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country here"
                  value={formData.country}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="inquiryType" className="contact__label">Inquiry Type / Purpose *</label>
                <select
                  required
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="contact__select"
                >
                  <option value="" disabled>-- Select Purpose --</option>
                  <option value="Patent Licensing & Commercialization">Patent Licensing & Commercialization</option>
                  <option value="R&D Collaboration & Prototyping">R&D Collaboration & Prototyping</option>
                  <option value="Investor / Incubation Inquiry">Investor / Incubation Inquiry</option>
                  <option value="Media, Press & Exhibitions">Media, Press & Exhibitions</option>
                  <option value="General Discussion">General Discussion</option>
                </select>
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="subject" className="contact__label">Subject *</label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g. Proposal for Flood Detection Infrastructure Partnership"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact__input"
                />
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="message" className="contact__label">Your Message *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Provide details regarding your inquiry, technical interest, or collaboration scope..."
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {errorMessage && (
                <div className="contact__error-alert contact__form-group--full">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact__submit-btn contact__form-group--full"
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
              Thank you! Your message has been sent directly to <strong>oshadaneranga4@gmail.com</strong>. Oshada will get back to you shortly.
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
