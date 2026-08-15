import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquareCheck, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Course Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const formattedText = `Hi Mohanraj, I am ${name} (${email}). ${subject}: ${message}`;
    const whatsappUrl = `https://wa.me/917395981362?text=${encodeURIComponent(formattedText)}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('Course Inquiry');
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-desc">
            Interested in AI solutions, software development, or programming training? Reach out to discuss your needs.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Contact Methods */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>
              Direct Contact
            </h3>

            {/* Email Card */}
            <a
              href="mailto:chennaicoder.support@gmail.com"
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  Email
                </div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', margin: 0 }}>
                  chennaicoder.support@gmail.com
                </h4>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/917395981362"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-success)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  WhatsApp / Phone
                </div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', margin: 0 }}>
                  +91 7395981362
                </h4>
              </div>
            </a>

            {/* Social Links */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href="https://in.linkedin.com/in/moganraj"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0A66C2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <ExternalLink size={20} style={{ color: '#0A66C2' }} />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                  <h5 style={{ fontSize: '0.9rem', color: 'var(--text-heading)', margin: 0 }}>Moganraj</h5>
                </div>
              </a>

              <a
                href="https://github.com/lookmohan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <ExternalLink size={20} style={{ color: 'var(--text-heading)' }} />
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>GitHub</div>
                  <h5 style={{ fontSize: '0.9rem', color: 'var(--text-heading)', margin: 0 }}>lookmohan</h5>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '1.5rem', fontWeight: 700 }}>
              Send a Message
            </h3>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--color-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MessageSquareCheck size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', margin: 0 }}>
                  Message Sent!
                </h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', margin: 0 }}>
                  Opening WhatsApp to send your message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem' }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-heading)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-heading)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem' }}
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-heading)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Course Inquiry">Programming Course</option>
                    <option value="AI Project">AI Solution Project</option>
                    <option value="Software Development">Software Development</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.5rem' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your learning goals or project requirements..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-heading)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
