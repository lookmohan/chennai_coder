import React from 'react';
import { BookOpenCheck, Layers, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const approachCards = [
    {
      title: 'Learn',
      description:
        'Master programming concepts through clear explanations, practical demonstrations, and hands-on coding exercises.',
      icon: (
        <BookOpenCheck
          size={28}
          style={{ color: 'var(--color-primary)' }}
        />
      ),
      color: 'var(--color-primary)'
    },
    {
      title: 'Build',
      description:
        'Apply your knowledge by building real-world applications, solving problems, and creating robust software solutions.',
      icon: (
        <Layers
          size={28}
          style={{ color: 'var(--color-accent)' }}
        />
      ),
      color: 'var(--color-accent)'
    },
    {
      title: 'Improve',
      description:
        'Continuously enhance your technical skills through practice, projects, and mastery of modern development technologies.',
      icon: (
        <TrendingUp
          size={28}
          style={{ color: 'var(--color-success)' }}
        />
      ),
      color: 'var(--color-success)'
    }
  ];

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        background: 'var(--bg-main)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">

        {/* Section Header */}
        <div className="section-header">

          <span className="section-tag">
            About Chennai Coder
          </span>

          <h2 className="section-title">
            About Chennai Coder
          </h2>

          <p className="section-desc">
            Chennai Coder provides practical programming training, AI
            development, and custom software solutions for students,
            developers, and businesses in Chennai and online.
          </p>

        </div>

        {/* Main Narrative Card */}
        <div
          className="glass-card about-main-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto 3.5rem auto',
            borderLeft: '4px solid var(--color-accent)'
          }}
        >

          {/* Introduction */}
          <p className="about-intro">
            <strong>Chennai Coder</strong> is a programming and technology
            platform focused on practical programming education, AI
            development, and custom software solutions.
          </p>

          {/* About Mohanraj */}
          <p className="about-text">
            Founded by <strong>Mohanraj</strong>, a Python Trainer and
            AI Developer based in Chennai, Chennai Coder helps students
            and professionals learn programming through practical
            examples, project-based learning, and real-world problem
            solving.
          </p>

          {/* Software & AI Services */}
          <p className="about-text about-text-last">
            Beyond programming training, Chennai Coder provides
            AI-powered solutions, machine learning applications,
            automation, and custom software development for businesses
            looking to build intelligent applications and improve their
            operations.
          </p>

        </div>

        {/* Learn / Build / Improve */}
        <div className="about-cards-grid">

          {approachCards.map((card, index) => (
            <div
              key={card.title}
              className="glass-card about-approach-card"
              style={{
                borderTop: `2px solid ${card.color}`
              }}
            >

              {/* Icon */}
              <div
                className="about-icon"
                style={{
                  background:
                    index === 0
                      ? 'var(--color-primary-light)'
                      : index === 1
                      ? 'var(--color-accent-light)'
                      : 'rgba(16, 185, 129, 0.15)'
                }}
              >
                {card.icon}
              </div>

              {/* Card Content */}
              <div>
                <h3 className="about-card-title">
                  {card.title}
                </h3>

                <p className="about-card-description">
                  {card.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Responsive Styles */}
      <style>{`

        /* Desktop */
        .about-main-card {
          padding: 2.5rem;
        }

        .about-intro {
          font-size: 1.1rem;
          line-height: 1.85;
          color: var(--text-heading);
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        .about-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-body);
          margin-bottom: 1.25rem;
        }

        .about-text-last {
          margin-bottom: 0;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .about-approach-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: all 0.3s ease;
        }

        .about-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-card-title {
          font-size: 1.35rem;
          color: var(--text-heading);
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .about-card-description {
          color: var(--text-body);
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
        }

        /* Tablet */
        @media (max-width: 991px) {

          .about-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        /* Mobile */
        @media (max-width: 767px) {

          .about-main-card {
            padding: 1.5rem;
            margin-bottom: 2.5rem !important;
          }

          .about-intro {
            font-size: 1rem;
            line-height: 1.75;
          }

          .about-text {
            font-size: 0.95rem;
            line-height: 1.7;
          }

          .about-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .about-approach-card {
            padding: 1.5rem;
            gap: 1rem;
          }

          .about-icon {
            width: 50px;
            height: 50px;
          }

          .about-card-title {
            font-size: 1.2rem;
          }

          .about-card-description {
            font-size: 0.9rem;
            line-height: 1.65;
          }

        }

        /* Small Mobile */
        @media (max-width: 480px) {

          .about-main-card {
            padding: 1.25rem;
          }

          .about-intro {
            font-size: 0.95rem;
          }

          .about-text {
            font-size: 0.9rem;
          }

          .about-approach-card {
            padding: 1.25rem;
          }

        }

      `}</style>
    </section>
  );
};
