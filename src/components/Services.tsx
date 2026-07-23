import React from 'react';
import { servicesData } from '../data/servicesData';
import { GraduationCap, BrainCircuit, Eye, Server, Sparkles, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit size={28} style={{ color: 'var(--color-primary)' }} />;
      case 'Server': return <Server size={28} style={{ color: 'var(--color-accent)' }} />;
      case 'Eye': return <Eye size={28} style={{ color: 'var(--color-success)' }} />;
      case 'Sparkles': return <Sparkles size={28} style={{ color: 'var(--color-warning)' }} />;
      case 'GraduationCap': return <GraduationCap size={28} style={{ color: 'var(--color-primary)' }} />;
      default: return <BrainCircuit size={28} />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Services & Solutions</h2>
          <p className="section-desc">
            Custom software engineering, AI automation systems for businesses, and technical training for aspiring developers.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  {getIcon(service.iconName)}
                </div>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--text-heading)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.65
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
                  marginTop: 'auto'
                }}
              >
                <span>Inquire About Solution</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
