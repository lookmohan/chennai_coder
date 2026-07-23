import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquareCheck } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

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
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-desc">
            Interested in learning programming or building an AI solution? Get in touch to discuss your requirements.
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
          {/* Left Column: Direct Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
              Direct Channels
            </h3>

            {/* Email Card */}
            <a
              href="mailto:chennaicoder.support@gmail.com"
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  Email
                </span>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-heading)' }}>
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
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: 'var(--color-success)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Phone size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  WhatsApp / Phone
                </span>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-heading)' }}>
                  +91 7395981362
                </h4>
              </div>
            </a>

            {/* Social Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <a
                href="https://in.linkedin.com/in/moganraj"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <LinkedinIcon size={22} style={{ color: '#0A66C2' }} />
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LinkedIn</span>
                  <h5 style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>Moganraj</h5>
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
                  gap: '0.75rem'
                }}
              >
                <GithubIcon size={22} style={{ color: 'var(--text-heading)' }} />
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>GitHub</span>
                  <h5 style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>lookmohan</h5>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '1.25rem' }}>
              Send a Direct Message
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
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: 'var(--color-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <MessageSquareCheck size={32} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-heading)' }}>
                  Message Ready!
                </h4>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                  Opening WhatsApp to send your message directly to Mohanraj.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
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
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-heading)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
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
                      fontSize: '0.95rem'
                    }}
                  >
                    <option value="Course Inquiry">Online Course Inquiry</option>
                    <option value="AI / Freelance Project">AI / Software Solution Project</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.4rem' }}
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
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  Send Message via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
