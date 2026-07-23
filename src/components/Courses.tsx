import React from 'react';
import { coursesData } from '../data/coursesData';
import { LinkedinIcon } from './SocialIcons';
import { Info } from 'lucide-react';

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Online Training</span>
          <h2 className="section-title">Programming Courses</h2>
          <p className="section-desc">
            Practical, project-oriented courses designed to build strong software engineering and AI capabilities.
          </p>
        </div>

        {/* Global Fee Notice Banner */}
        <div
          className="glass-card"
          style={{
            maxWidth: '780px',
            margin: '0 auto 3rem auto',
            padding: '1.25rem 1.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            borderLeft: '4px solid var(--color-accent)'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--color-accent-light)',
              color: 'var(--color-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Info size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-heading)', marginBottom: '0.2rem' }}>
              Course Fee Information
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
              Courses start from <strong>₹1500 onwards</strong> (SQL course starts from <strong>₹700 onwards</strong>). Contact Mohanraj on LinkedIn for course duration, schedule, and enrollment details.
            </p>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {coursesData.map((course) => (
            <div
              key={course.id}
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
                {/* Header Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-accent)',
                    background: 'var(--color-accent-light)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '16px',
                    marginBottom: '1rem'
                  }}
                >
                  {course.priceTag}
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--text-heading)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.96rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.65
                  }}
                >
                  {course.description}
                </p>
              </div>

              {/* Action Button linking to LinkedIn */}
              <a
                href={course.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.9rem'
                }}
              >
                <LinkedinIcon size={18} style={{ color: '#0A66C2' }} />
                Discuss Course Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
