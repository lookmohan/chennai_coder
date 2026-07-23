import React from 'react';
import { BookOpenCheck, Layers, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const approachCards = [
    {
      title: "Learn",
      description: "Understand programming concepts with clear explanations and practical demonstrations.",
      icon: <BookOpenCheck size={28} style={{ color: 'var(--color-primary)' }} />,
      color: 'var(--color-primary)'
    },
    {
      title: "Build",
      description: "Apply knowledge by creating real-world projects and robust software applications.",
      icon: <Layers size={28} style={{ color: 'var(--color-accent)' }} />,
      color: 'var(--color-accent)'
    },
    {
      title: "Improve",
      description: "Continuously develop technical skills through practice and modern technologies.",
      icon: <TrendingUp size={28} style={{ color: 'var(--color-success)' }} />,
      color: 'var(--color-success)'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-main)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">About Chennai Coder</h2>
          <p className="section-desc">
            Empowering students and businesses through hands-on programming education and modern AI solution development.
          </p>
        </div>

        {/* Narrative Card */}
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
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'var(--text-heading)',
              marginBottom: '1.25rem'
            }}
          >
            <strong>Chennai Coder</strong> is a technology training and development initiative focused on programming education, artificial intelligence, and modern software solutions.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-body)', marginBottom: '1.25rem' }}>
            Founded by <strong>Mohanraj</strong>, Chennai Coder helps learners understand programming concepts through clear practical examples and project-based learning.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-body)' }}>
            Along with training, Chennai Coder provides software development services including AI applications, automation solutions, backend APIs, and intelligent systems for businesses.
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
          {approachCards.map((card) => (
            <div
              key={card.title}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
