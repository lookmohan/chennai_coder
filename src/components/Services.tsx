import React from 'react';
import { servicesData } from '../data/servicesData';
import { GraduationCap, BrainCircuit, Code, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit size={32} style={{ color: 'var(--color-primary)' }} />;
      case 'Code': return <Code size={32} style={{ color: 'var(--color-accent)' }} />;
      case 'GraduationCap': return <GraduationCap size={32} style={{ color: 'var(--color-success)' }} />;
      default: return <BrainCircuit size={32} />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">What I Offer</span>
          <h2 className="section-title">Services & Solutions</h2>
          <p className="section-desc">
            Custom software engineering, AI-powered solutions, and practical programming training for businesses and aspiring developers.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.75rem',
                position: 'relative',
                borderTop: index === 0 ? '2px solid var(--color-primary)' : 
                          index === 1 ? '2px solid var(--color-accent)' :
                          '2px solid var(--color-success)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: index === 0 ? 'var(--color-primary-light)' :
                               index === 1 ? 'var(--color-accent-light)' :
                               'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  {getIcon(service.iconName)}
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--text-heading)',
                    marginBottom: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.7
                  }}
                >
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  marginTop: 'auto',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '0.75rem';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.5rem';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
              >
                <span>Learn More</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
