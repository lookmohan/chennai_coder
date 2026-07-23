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
            Real-world software applications, AI retrieval pipelines, machine learning models, and Python projects developed by Mohanraj.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.25rem'
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
                borderRadius: '18px'
              }}
            >
              {/* Graphic Header Banner */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))',
                  borderBottom: '1px solid var(--border-color)',
                  padding: '1.5rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-code)',
                      color: 'var(--color-accent)',
                      background: 'var(--color-accent-light)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Code Window / Architecture Graphic */}
                <div
                  style={{
                    background: '#090D16',
                    borderRadius: '10px',
                    padding: '1rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.78rem',
                    color: '#A7F3D0',
                    maxHeight: '130px',
                    overflowY: 'auto',
                    lineHeight: 1.5
                  }}
                >
                  <div style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    # Core Implementation Snippet
                  </div>
                  <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>
                    {project.codeSnippet}
                  </pre>
                </div>
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
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      color: 'var(--text-heading)',
                      marginBottom: '0.6rem'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-code)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px',
                          background: 'var(--bg-main)',
                          color: 'var(--text-body)',
                          border: '1px solid var(--border-color)'
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
                      padding: '0.65rem 1rem',
                      fontSize: '0.88rem'
                    }}
                  >
                    <GithubIcon size={18} />
                    View Repository on GitHub
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
