import React, { useState, useEffect } from 'react';
import { BookOpen, Code, ArrowRight, Terminal, Rocket } from 'lucide-react';

const roles = [
  "AI Application Developer",
  "Python Programming Trainer",
  "Machine Learning Developer",
  "Computer Vision Developer",
  "FastAPI Developer",
  "LLM Application Developer"
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2000;
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 300;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

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
              <Terminal size={16} />
              <span>Build AI Solutions • Hire a Developer • Learn Programming</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                lineHeight: 1.15,
                marginBottom: '0.75rem'
              }}
            >
              Hi, I'm <span className="gradient-text">Mohanraj</span>
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--text-heading)',
                marginBottom: '1rem',
                opacity: 0.95
              }}
            >
              AI Developer | Python Trainer | Freelance Software Engineer
            </h2>

            {/* Typing Animation Line */}
            <div
              style={{
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-code)',
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
                fontWeight: 600
              }}
            >
              <span style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}>&gt;</span>
              <span>{displayText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '1.2rem',
                  background: 'var(--color-accent)',
                  marginLeft: '4px',
                  animation: 'blink 1s infinite'
                }}
              />
            </div>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-body)',
                marginBottom: '2.25rem',
                maxWidth: '620px'
              }}
            >
              Welcome to <strong>Chennai Coder</strong>. I help businesses build AI-powered applications, automation solutions, and custom software while helping learners master modern programming technologies through practical training.
            </p>

            {/* CTA Buttons - Freelance & Business First */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <a href="#freelance" className="btn btn-primary">
                <Rocket size={18} />
                Start a Project
              </a>
              <a href="#courses" className="btn btn-accent">
                <BookOpen size={18} />
                Explore Courses
              </a>
              <a href="#projects" className="btn btn-secondary">
                <Code size={18} />
                View Projects
              </a>
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

                {/* Floating Status Badge */}
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-main)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--color-success)',
                        boxShadow: '0 0 8px var(--color-success)'
                      }}
                    />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                      Available for AI Projects & Training
                    </span>
                  </div>
                  <ArrowRight size={16} style={{ color: 'var(--color-accent)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }
      `}</style>
    </section>
  );
};
