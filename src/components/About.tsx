import React from 'react';
import { BookOpenCheck, Layers, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const approachCards = [
    {
      title: "Learn",
      description: "Master programming concepts through clear explanations, practical demonstrations, and hands-on coding exercises.",
      icon: <BookOpenCheck size={28} style={{ color: 'var(--color-primary)' }} />,
      color: 'var(--color-primary)'
    },
    {
      title: "Build",
      description: "Apply your knowledge by building real-world applications, solving problems, and creating robust software solutions.",
      icon: <Layers size={28} style={{ color: 'var(--color-accent)' }} />,
      color: 'var(--color-accent)'
    },
    {
      title: "Improve",
      description: "Continuously enhance your technical skills through practice, projects, and mastery of modern development technologies.",
      icon: <TrendingUp size={28} style={{ color: 'var(--color-success)' }} />,
      color: 'var(--color-success)'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2 className="section-title">About Chennai Coder</h2>
          <p className="section-desc">
            Empowering developers and businesses through practical programming education and modern AI solutions.
          </p>
        </div>

        {/* Main Narrative Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3.5rem',
            maxWidth: '900px',
            margin: '0 auto 3.5rem auto',
            borderLeft: '4px solid var(--color-accent)'
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.85,
              color: 'var(--text-heading)',
              marginBottom: '1.25rem',
              fontWeight: 500
            }}
          >
            <strong>Chennai Coder</strong> is a technology platform dedicated to programming education, AI development, and custom software solutions.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '1.25rem' }}>
            Founded by <strong>Mohanraj</strong>, Chennai Coder helps students and professionals understand programming through practical examples, project-based learning, and real-world problem solving.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-body)' }}>
            Beyond training, we provide AI-powered solutions and custom software development services for businesses looking to build intelligent applications and streamline their operations.
          </p>
        </div>

        {/* Approach Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {approachCards.map((card, index) => (
            <div
              key={card.title}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderTop: `2px solid ${card.color}`,
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: index === 0 ? 'var(--color-primary-light)' :
                             index === 1 ? 'var(--color-accent-light)' :
                             'rgba(16, 185, 129, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {card.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
