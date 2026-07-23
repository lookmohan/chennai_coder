import React from 'react';
import { Target, Code2, Rocket, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Goal",
      description: "Select from core programming, web development, FastAPI backend, or AI & machine learning tracks.",
      icon: <Target size={24} style={{ color: 'var(--color-primary)' }} />
    },
    {
      number: "02",
      title: "Learn Through Practical Sessions",
      description: "Understand foundational concepts with live interactive code demonstrations and clear explanations.",
      icon: <Code2 size={24} style={{ color: 'var(--color-accent)' }} />
    },
    {
      number: "03",
      title: "Build Real Projects",
      description: "Apply your knowledge directly by crafting real-world applications, AI assistants, and backend APIs.",
      icon: <Rocket size={24} style={{ color: 'var(--color-success)' }} />
    },
    {
      number: "04",
      title: "Apply Your Skills",
      description: "Confidently showcase your portfolio, solve complex software challenges, or accelerate your tech career.",
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
            A structured, step-by-step approach designed to transform programming concepts into practical software engineering skills.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.75rem',
            position: 'relative'
          }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderTop: '3px solid var(--color-accent)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-code)',
                    color: 'var(--color-accent)',
                    opacity: 0.8
                  }}
                >
                  {step.number}
                </span>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'var(--bg-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {step.icon}
                </div>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>{step.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
