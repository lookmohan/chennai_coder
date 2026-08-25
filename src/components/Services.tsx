import React from 'react';
import { servicesData } from '../data/servicesData';
import {
  GraduationCap,
  BrainCircuit,
  Code,
  ArrowRight
} from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BrainCircuit':
        return (
          <BrainCircuit
            size={32}
            aria-hidden="true"
            style={{ color: 'var(--color-primary)' }}
          />
        );

      case 'Code':
        return (
          <Code
            size={32}
            aria-hidden="true"
            style={{ color: 'var(--color-accent)' }}
          />
        );

      case 'GraduationCap':
        return (
          <GraduationCap
            size={32}
            aria-hidden="true"
            style={{ color: 'var(--color-success)' }}
          />
        );

      default:
        return (
          <BrainCircuit
            size={32}
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        background: 'var(--bg-surface)',
        overflow: 'hidden'
      }}
    >
      <div className="container">

        {/* Section Header */}
        <div className="section-header">

          <span className="section-tag">
            Chennai Coder Services
          </span>

          <h2 className="section-title">
            AI, Software Development & Programming Training
          </h2>

          <p className="section-desc">
            Chennai Coder provides custom software development,
            AI-powered solutions, automation, and practical programming
            training for businesses, students, and aspiring developers
            in Chennai and online.
          </p>

        </div>

        {/* Service Cards Grid */}
        <div className="services-grid">

          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className="glass-card service-card"
              style={{
                borderTop:
                  index === 0
                    ? '2px solid var(--color-primary)'
                    : index === 1
                    ? '2px solid var(--color-accent)'
                    : '2px solid var(--color-success)'
              }}
            >

              {/* Service Icon */}
              <div
                className="service-icon"
                style={{
                  background:
                    index === 0
                      ? 'var(--color-primary-light)'
                      : index === 1
                      ? 'var(--color-accent-light)'
                      : 'rgba(16, 185, 129, 0.15)'
                }}
              >
                {getIcon(service.iconName)}
              </div>

              {/* Service Content */}
              <div>

                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>

              </div>

              {/* Service CTA */}
              <a
                href="#contact"
                className="service-link"
                aria-label={`Learn more about ${service.title}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '0.75rem';
                  e.currentTarget.style.color =
                    'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '0.5rem';
                  e.currentTarget.style.color =
                    'var(--color-accent)';
                }}
              >
                <span>Learn More</span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                />
              </a>

            </article>
          ))}

        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`

        /* Desktop */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .service-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.75rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          flex-shrink: 0;
        }

        .service-title {
          font-size: 1.4rem;
          color: var(--text-heading);
          margin-bottom: 0.8rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .service-description {
          font-size: 0.98rem;
          color: var(--text-body);
          line-height: 1.7;
          margin: 0;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-top: auto;
          transition: all 0.2s ease;
          width: fit-content;
        }

        /* Tablet */
        @media (max-width: 991px) {

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }

          .service-card {
            padding: 2rem;
          }

        }

        /* Mobile */
        @media (max-width: 767px) {

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .service-card {
            padding: 1.5rem;
            gap: 1.25rem;
          }

          .service-icon {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            margin-bottom: 1.25rem;
          }

          .service-title {
            font-size: 1.2rem;
            line-height: 1.35;
          }

          .service-description {
            font-size: 0.92rem;
            line-height: 1.65;
          }

          .service-link {
            font-size: 0.88rem;
          }

        }

        /* Small Mobile */
        @media (max-width: 480px) {

          .service-card {
            padding: 1.25rem;
          }

          .service-icon {
            width: 52px;
            height: 52px;
          }

          .service-title {
            font-size: 1.1rem;
          }

          .service-description {
            font-size: 0.9rem;
          }

        }

      `}</style>
    </section>
  );
};
