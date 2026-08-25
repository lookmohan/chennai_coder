import React from 'react';
import {
  Rocket,
  Cpu,
  Bot,
  Server,
  Database,
  Code,
  Zap
} from 'lucide-react';

export const FreelanceDev: React.FC = () => {
  const capabilities = [
    {
      title: 'AI-Powered Applications',
      icon: (
        <Bot
          size={20}
          aria-hidden="true"
          style={{ color: 'var(--color-primary)' }}
        />
      )
    },
    {
      title: 'Automation Workflows',
      icon: (
        <Zap
          size={20}
          aria-hidden="true"
          style={{ color: 'var(--color-accent)' }}
        />
      )
    },
    {
      title: 'Backend APIs & Services',
      icon: (
        <Server
          size={20}
          aria-hidden="true"
          style={{ color: 'var(--color-success)' }}
        />
      )
    },
    {
      title: 'Data Processing Systems',
      icon: (
        <Database
          size={20}
          aria-hidden="true"
          style={{ color: 'var(--color-warning)' }}
        />
      )
    },
    {
      title: 'Custom Python Solutions',
      icon: (
        <Code
          size={20}
          aria-hidden="true"
          style={{ color: 'var(--color-primary)' }}
        />
      )
    },
    {
      title: 'Machine Learning Models',
      icon: (
        <Cpu
          size={20}
          aria-hidden="true"
          style={{ color: 'var(--color-accent)' }}
        />
      )
    }
  ];

  return (
    <section
      id="freelance"
      className="section-padding"
      style={{
        background: 'var(--bg-main)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">

        <div
          className="glass-card freelance-main-card"
          style={{
            borderRadius: '24px',
            background:
              'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.08))',
            border: '2px solid var(--color-accent)',
            boxShadow: 'var(--shadow-glow)',
            overflow: 'hidden'
          }}
        >

          <div className="freelance-grid">

            {/* Left Content */}
            <div className="freelance-content">

              <span
                className="section-tag"
                style={{ marginBottom: '1rem' }}
              >
                Freelance AI & Software Development
              </span>

              <h2 className="freelance-title">
                Hire a Developer for Custom Software & AI Solutions
              </h2>

              <p className="freelance-description">
                Chennai Coder helps businesses build custom software,
                AI-powered applications, machine learning solutions,
                backend APIs, automation workflows, and data processing
                systems designed around their specific requirements.
              </p>

              <p className="freelance-description secondary">
                From Python development and API integration to AI
                applications and business automation, projects are
                developed with practical, scalable, and maintainable
                solutions in mind.
              </p>

              <a
                href="#contact"
                className="btn btn-primary freelance-button"
                aria-label="Start a software or AI development project with Chennai Coder"
              >
                <Rocket
                  size={20}
                  aria-hidden="true"
                />
                Start a Project
              </a>

            </div>

            {/* Right Capabilities */}
            <div
              className="freelance-capabilities"
              aria-label="Software development capabilities"
            >

              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="capability-card"
                >

                  <div className="capability-icon">
                    {item.icon}
                  </div>

                  <span className="capability-title">
                    {item.title}
                  </span>

                </article>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`

        /* Desktop */
        .freelance-main-card {
          padding: 3.5rem 2.5rem;
        }

        .freelance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .freelance-content {
          min-width: 0;
        }

        .freelance-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          color: var(--text-heading);
          margin-bottom: 1rem;
          font-weight: 800;
          line-height: 1.25;
        }

        .freelance-description {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.8;
          margin-bottom: 1.25rem;
          max-width: 550px;
        }

        .freelance-description.secondary {
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }

        .freelance-button {
          padding: 0.85rem 2rem;
          font-size: 0.95rem;
        }

        .freelance-capabilities {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .capability-card {
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          padding: 1.15rem 1.25rem;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          transition: all 0.3s ease;
        }

        .capability-card:hover {
          border-color: var(--color-accent);
          background: var(--bg-surface);
        }

        .capability-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .capability-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-heading);
          line-height: 1.4;
        }

        /* Tablet */
        @media (max-width: 991px) {

          .freelance-main-card {
            padding: 2.5rem 2rem;
          }

          .freelance-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .freelance-description {
            max-width: 100%;
          }

        }

        /* Mobile */
        @media (max-width: 767px) {

          .freelance-main-card {
            padding: 1.75rem 1.25rem;
            border-radius: 20px;
          }

          .freelance-grid {
            gap: 2rem;
          }

          .freelance-title {
            font-size: 1.7rem;
            line-height: 1.3;
          }

          .freelance-description {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .freelance-description.secondary {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .freelance-button {
            width: 100%;
            justify-content: center;
          }

          .freelance-capabilities {
            grid-template-columns: 1fr;
            gap: 0.9rem;
          }

          .capability-card {
            padding: 1rem;
          }

        }

        /* Small Mobile */
        @media (max-width: 480px) {

          .freelance-main-card {
            padding: 1.5rem 1rem;
          }

          .freelance-title {
            font-size: 1.5rem;
          }

          .freelance-description {
            font-size: 0.9rem;
          }

          .capability-title {
            font-size: 0.85rem;
          }

        }

      `}</style>
    </section>
  );
};
