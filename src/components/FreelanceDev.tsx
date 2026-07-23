import React from 'react';
import { Rocket, Cpu, Bot, Server, Database, Code, Zap } from 'lucide-react';

export const FreelanceDev: React.FC = () => {
  const capabilities = [
    { title: "AI-Powered Applications", icon: <Bot size={20} style={{ color: 'var(--color-primary)' }} /> },
    { title: "Automation Workflows", icon: <Zap size={20} style={{ color: 'var(--color-accent)' }} /> },
    { title: "Backend APIs & Microservices", icon: <Server size={20} style={{ color: 'var(--color-success)' }} /> },
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
            background: 'linear-gradient(135deg, rgba(23, 158, 211, 0.8), rgba(175, 195, 240, 0.95))',
            border: '1px solid var(--border-highlight)',
            boxShadow: 'var(--shadow-glow)'
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
                Freelance Development
              </span>

              <h2 style={{ fontSize: '2.4rem', color: 'var(--text-heading)', marginBottom: '1rem' }}>
                Need a Custom Software Solution?
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether you need an intelligent AI agent, high-performance FastAPI microservice, or automated data pipeline, <strong>Chennai Coder</strong> delivers production-grade code designed for business efficiency.
              </p>

              <a href="#contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
                <Rocket size={20} />
                Start a Project
              </a>
            </div>

            {/* Right Capabilities Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                    gap: '0.85rem'
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
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-heading)' }}>
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
