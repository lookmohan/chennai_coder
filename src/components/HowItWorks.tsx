import React from 'react';
import { Target, Code2, Rocket, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Choose Your Goal",
      description: "Select from programming fundamentals, web development, backend APIs, or AI & machine learning paths.",
      icon: <Target size={24} style={{ color: 'var(--color-primary)' }} />
    },
    {
      number: "2",
      title: "Learn Interactively",
      description: "Master concepts through live demonstrations, practical code examples, and step-by-step explanations.",
      icon: <Code2 size={24} style={{ color: 'var(--color-accent)' }} />
    },
    {
      number: "3",
      title: "Build Real Projects",
      description: "Apply your skills by building production-ready applications, AI systems, and backend services.",
      icon: <Rocket size={24} style={{ color: 'var(--color-success)' }} />
    },
    {
      number: "4",
      title: "Launch Your Career",
      description: "Confidently showcase your portfolio, solve complex problems, or accelerate your technical career growth.",
      icon: <Award size={24} style={{ color: 'var(--color-warning)' }} />
    }
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Learning Path</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">
            A structured, step-by-step learning approach designed to transform programming concepts into practical, job-ready skills.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card"
              style={{
                padding: '2.25rem 1.75rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderTop: '3px solid var(--color-accent)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Step Number & Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-code)',
                    color: 'var(--color-accent)',
                    opacity: 0.3,
                    lineHeight: 1
                  }}
                >
                  {step.number}
                </div>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--bg-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)',
                    flexShrink: 0
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
