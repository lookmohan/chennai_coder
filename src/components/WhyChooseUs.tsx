import React from 'react';
import { Hammer, FolderCode, Cpu, UserCheck, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Practical Learning",
      description: "Learn by building real software instead of studying theory alone. Every concept connects to hands-on projects.",
      icon: <Hammer size={26} style={{ color: 'var(--color-primary)' }} />
    },
    {
      title: "Real Projects",
      description: "Work on meaningful applications—from backend APIs and web apps to AI systems that solve real-world problems.",
      icon: <FolderCode size={26} style={{ color: 'var(--color-accent)' }} />
    },
    {
      title: "Modern Tech Stack",
      description: "Learn industry-standard technologies and frameworks used in real software engineering and AI development jobs.",
      icon: <Cpu size={26} style={{ color: 'var(--color-success)' }} />
    },
    {
      title: "Direct Mentorship",
      description: "Get personalized guidance, code reviews, and dedicated feedback from an experienced developer and trainer.",
      icon: <UserCheck size={26} style={{ color: 'var(--color-warning)' }} />
    },
    {
      title: "Career-Ready Skills",
      description: "Build a portfolio with demonstrable projects and technical skills that make you job-ready or enable freelance work.",
      icon: <Award size={26} style={{ color: 'var(--color-primary)' }} />
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Why Us</span>
          <h2 className="section-title">Why Choose Chennai Coder</h2>
          <p className="section-desc">
            Designed for serious learners and businesses seeking authentic technical education and high-quality software execution.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
