import React from 'react';
import { BookOpen, Code, Mail, Rocket } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: 'calc(var(--nav-height) + 3rem)',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Copy & Actions */}
          <div>
            {/* Tagline Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--color-accent)',
                background: 'var(--color-accent-light)',
                padding: '0.4rem 1rem',
                borderRadius: '30px',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                marginBottom: '1.25rem'
              }}
            >
              <Rocket size={16} />
              <span>AI • Software • Training</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                fontWeight: 800
              }}
            >
              Learn Programming<span className="gradient-text" style={{ display: 'block' }}>
                Build Software • Create AI
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--text-body)',
                marginBottom: '2.5rem',
                maxWidth: '600px',
                lineHeight: 1.7
              }}
            >
              Welcome to <strong>Chennai Coder</strong>. I help businesses build AI-powered applications, custom software, and automation solutions. I also provide hands-on programming training for aspiring developers.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <a href="#courses" className="btn btn-primary">
                <BookOpen size={18} />
                Learn Programming
              </a>
              <a href="#freelance" className="btn btn-accent">
                <Code size={18} />
                Hire a Developer
              </a>
              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Availability Badge */}
            <div
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.9rem',
                color: 'var(--text-body)'
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--color-success)',
                  boxShadow: '0 0 8px var(--color-success)'
                }}
              />
              <span>Available for AI projects, software development, and training</span>
            </div>
          </div>

          {/* Right Column: Mohanraj Profile Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px'
              }}
            >
              {/* Outer Glowing Border Box */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  opacity: 0.4,
                  filter: 'blur(20px)',
                  zIndex: 0
                }}
              />

              <div
                className="glass-card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '1.25rem',
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}
              >
                <img
                  src="/assets/mohanraj-profile.jpg"
                  alt="Mohanraj - Founder of Chennai Coder"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    display: 'block'
                  }}
                />

                {/* Status Info */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '1rem',
                    background: 'var(--bg-main)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    Mohanraj
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-body)' }}>
                    AI Developer • Python Trainer • Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }
      `}</style>
    </section>
  );
};
