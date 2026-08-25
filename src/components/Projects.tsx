import React from "react";
import { projectsData } from "../data/projectsData";
import { GithubIcon } from "./SocialIcons";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="section-padding projects-section"
      aria-labelledby="projects-title"
    >
      <style>
        {`
          .projects-section {
            background: var(--bg-main);
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .project-card {
            display: flex;
            flex-direction: column;
            min-width: 0;
            height: 100%;
            overflow: hidden;
            border-radius: 18px;
            padding: 0;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }

          .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          }

          .project-card-header {
            padding: 1.5rem 1.5rem 1.25rem;
            border-bottom: 1px solid var(--border-color);
            background:
              linear-gradient(
                135deg,
                rgba(37, 99, 235, 0.08),
                rgba(6, 182, 212, 0.08)
              );
          }

          .project-header-top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
          }

          .project-title {
            margin: 0;
            color: var(--text-heading);
            font-size: 1.2rem;
            line-height: 1.4;
            font-weight: 700;
          }

          .project-category {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            font-size: 0.7rem;
            line-height: 1;
            font-family: var(--font-code);
            font-weight: 600;
            color: var(--color-accent);
            background: var(--color-accent-light);
            padding: 0.45rem 0.65rem;
            border-radius: 999px;
            white-space: nowrap;
          }

          .project-card-body {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 1.5rem;
          }

          .project-description {
            margin: 0 0 1.25rem;
            color: var(--text-body);
            font-size: 0.94rem;
            line-height: 1.7;
          }

          .project-tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
          }

          .project-tech {
            display: inline-flex;
            align-items: center;
            max-width: 100%;
            padding: 0.4rem 0.65rem;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            background: var(--bg-main);
            color: var(--text-body);
            font-family: var(--font-code);
            font-size: 0.72rem;
            font-weight: 500;
            line-height: 1.2;
            word-break: break-word;
          }

          .project-actions {
            display: flex;
            gap: 0.75rem;
            margin-top: auto;
          }

          .project-github-button {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            min-height: 44px;
            padding: 0.7rem 1rem;
            font-size: 0.88rem;
            text-decoration: none;
          }

          .project-github-button:focus-visible {
            outline: 3px solid var(--color-accent);
            outline-offset: 3px;
          }

          @media (max-width: 1100px) {
            .projects-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 700px) {
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
              margin-top: 2rem;
            }

            .project-card-header {
              padding: 1.25rem;
            }

            .project-card-body {
              padding: 1.25rem;
            }

            .project-header-top {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.75rem;
            }

            .project-title {
              font-size: 1.1rem;
            }

            .project-description {
              font-size: 0.9rem;
              line-height: 1.65;
            }
          }

          @media (max-width: 400px) {
            .project-card-header,
            .project-card-body {
              padding: 1rem;
            }

            .project-title {
              font-size: 1.02rem;
            }

            .project-tech {
              font-size: 0.68rem;
              padding: 0.35rem 0.55rem;
            }

            .project-github-button {
              font-size: 0.82rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .project-card {
              transition: none;
            }

            .project-card:hover {
              transform: none;
            }
          }
        `}
      </style>

      <div className="container">

        {/* SEO-friendly section header */}
        <header className="section-header">
          <span className="section-tag">Portfolio</span>

          <h2
            id="projects-title"
            className="section-title"
          >
            AI, Machine Learning & Software Projects
          </h2>

          <p className="section-desc">
            Explore practical AI, machine learning, data analytics, Python,
            and software development projects built by Chennai Coder. The
            portfolio includes RAG applications, multi-agent AI systems,
            data visualization dashboards, desktop applications, and
            database-driven software projects.
          </p>
        </header>

        {/* Projects */}
        <div
          className="projects-grid"
          role="list"
          aria-label="Featured software and AI projects"
        >
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="glass-card project-card"
              role="listitem"
              aria-labelledby={`${project.id}-title`}
            >

              {/* Project Header */}
              <div className="project-card-header">
                <div className="project-header-top">

                  <h3
                    id={`${project.id}-title`}
                    className="project-title"
                  >
                    {project.title}
                  </h3>

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>
              </div>

              {/* Project Content */}
              <div className="project-card-body">

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="project-tech-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="project-tech"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="project-actions">

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-github-button"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <GithubIcon size={18} aria-hidden="true" />
                      <span>View Source Code</span>
                    </a>
                  )}

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
