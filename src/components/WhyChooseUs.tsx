import React from 'react';
import { Hammer, FolderCode, Cpu, UserCheck, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Practical Learning",
      description: "Learn by building real software projects instead of only studying abstract theory.",
      icon: <Hammer size={26} style={{ color: 'var(--color-primary)' }} />
    },
    {
      title: "Real-World Projects",
      description: "Apply concepts directly through meaningful backend, web, and AI applications.",
      icon: <FolderCode size={26} style={{ color: 'var(--color-accent)' }} />
    },
    {
      title: "Modern Technologies",
      description: "Master industry-current tools used in modern software engineering & AI development.",
      icon: <Cpu size={26} style={{ color: 'var(--color-success)' }} />
    },
    {
      title: "Personal Guidance",
      description: "Receive direct, dedicated mentorship and feedback while learning and building projects.",
      icon: <UserCheck size={26} style={{ color: 'var(--color-warning)' }} />
    },
    {
      title: "Skill Development",
      description: "Build robust, demonstrable technical skills for long-term career growth and freelance work.",
      icon: <ShieldCheck size={26} style={{ color: 'var(--color-primary)' }} />
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">Why Choose Chennai Coder</h2>
          <p className="section-desc">
            Designed for learners and clients seeking authentic, high-quality technical education and software execution.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
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
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
