import React from 'react';
import { projectsData } from '../data/projectsData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Real-world applications including AI systems, machine learning models, and full-stack software projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '18px',
                padding: '0'
              }}
            >
              {/* Header with Category Badge */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(6, 182, 212, 0.1))',
                  borderBottom: '1px solid var(--border-color)',
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-heading)',
                    fontWeight: 700,
                    margin: 0
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-code)',
                    color: 'var(--color-accent)',
                    background: 'var(--color-accent-light)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '12px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Body Content */}
              <div
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-code)',
                          padding: '0.35rem 0.7rem',
                          borderRadius: '6px',
                          background: 'var(--bg-main)',
                          color: 'var(--text-body)',
                          border: '1px solid var(--border-color)',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      fontSize: '0.9rem',
                      justifyContent: 'center'
                    }}
                  >
                    <GithubIcon size={18} />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
