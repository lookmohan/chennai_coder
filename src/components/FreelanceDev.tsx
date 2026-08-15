import React from 'react';
import { Rocket, Cpu, Bot, Server, Database, Code, Zap } from 'lucide-react';

export const FreelanceDev: React.FC = () => {
  const capabilities = [
    { title: "AI-Powered Applications", icon: <Bot size={20} style={{ color: 'var(--color-primary)' }} /> },
    { title: "Automation Workflows", icon: <Zap size={20} style={{ color: 'var(--color-accent)' }} /> },
    { title: "Backend APIs & Services", icon: <Server size={20} style={{ color: 'var(--color-success)' }} /> },
    { title: "Data Processing Systems", icon: <Database size={20} style={{ color: 'var(--color-warning)' }} /> },
    { title: "Custom Python Solutions", icon: <Code size={20} style={{ color: 'var(--color-primary)' }} /> },
    { title: "Machine Learning Models", icon: <Cpu size={20} style={{ color: 'var(--color-accent)' }} /> }
  ];

  return (
    <section id="freelance" className="section-padding" style={{ background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '3.5rem 2.5rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.08))',
            border: '2px solid var(--color-accent)',
            boxShadow: 'var(--shadow-glow)',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
            className="freelance-grid"
          >
            {/* Left Content */}
            <div>
              <span className="section-tag" style={{ marginBottom: '1rem' }}>
                Software Development
              </span>

              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text-heading)', marginBottom: '1rem', fontWeight: 800 }}>
                Custom Software Solutions for Your Business
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '550px' }}>
                Build intelligent AI applications, high-performance APIs, automated data pipelines, and custom software solutions designed for business efficiency and growth.
              </p>

              <a href="#contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}>
                <Rocket size={20} />
                Start a Project
              </a>
            </div>

            {/* Right Capabilities Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    padding: '1.15rem 1.25rem',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.background = 'var(--bg-surface)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.background = 'var(--bg-main)';
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .freelance-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
