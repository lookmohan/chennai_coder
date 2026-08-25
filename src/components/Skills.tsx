import React, { useState } from "react";
import { skillsData } from "../data/skillsData";
import {
  Code,
  Brain,
  Terminal,
  Database,
  Wrench,
  Cpu,
  CheckCircle2
} from "lucide-react";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  /*
   * Create unique categories
   */
  const categories = [
    "All",
    ...Array.from(
      new Set(skillsData.map((category) => category.title))
    )
  ];

  /*
   * Get icon based on skill category
   */
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return <Code size={21} aria-hidden="true" />;

      case "Artificial Intelligence & Machine Learning":
        return <Brain size={21} aria-hidden="true" />;

      case "Python Development":
        return <Terminal size={21} aria-hidden="true" />;

      case "AI Frameworks & Tools":
        return <Cpu size={21} aria-hidden="true" />;

      case "Databases":
        return <Database size={21} aria-hidden="true" />;

      case "Developer Tools":
        return <Wrench size={21} aria-hidden="true" />;

      default:
        return <Code size={21} aria-hidden="true" />;
    }
  };

  /*
   * Filter categories
   */
  const filteredCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter(
          (category) => category.title === activeCategory
        );

  return (
    <section
      id="skills"
      className="section-padding skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <header className="section-header">

          <span className="section-tag">
            Technical Expertise
          </span>

          <h2
            id="skills-title"
            className="section-title"
          >
            Programming, AI & Software Development Skills
          </h2>

          <p className="section-desc">
            Explore the programming languages, AI technologies, frameworks,
            databases, and developer tools used to build practical software,
            machine learning, RAG, and AI-powered applications.
          </p>

        </header>


        {/* =========================================
            CATEGORY FILTER
        ========================================== */}

        <div
          className="skills-filter"
          role="tablist"
          aria-label="Filter technical skills by category"
        >

          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="skills-content"
                className={`skill-filter-button ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            );
          })}

        </div>


        {/* =========================================
            SKILLS GRID
        ========================================== */}

        <div
          id="skills-content"
          className="skills-grid"
          role="tabpanel"
        >

          {filteredCategories.map((category) => (

            <article
              key={category.title}
              className="glass-card skill-category-card"
            >

              {/* Category Header */}
              <div className="skill-category-header">

                <div className="skill-category-icon">
                  {getCategoryIcon(category.title)}
                </div>

                <div>
                  <h3 className="skill-category-title">
                    {category.title}
                  </h3>

                  <p className="skill-category-count">
                    {category.skills.length}{" "}
                    {category.skills.length === 1
                      ? "technology"
                      : "technologies"}
                  </p>
                </div>

              </div>


              {/* Skill List */}
              <ul
                className="skill-list"
                aria-label={`${category.title} skills`}
              >

                {category.skills.map((skill) => (

                  <li
                    key={skill}
                    className="skill-item"
                  >

                    <CheckCircle2
                      size={15}
                      aria-hidden="true"
                      className="skill-check"
                    />

                    <span>
                      {skill}
                    </span>

                  </li>

                ))}

              </ul>

            </article>

          ))}

        </div>


        {/* =========================================
            SECTION FOOTER
        ========================================== */}

        <div className="skills-footer">

          <p>
            These technologies are applied through practical projects,
            AI applications, software development, data solutions, and
            hands-on programming training.
          </p>

        </div>

      </div>


      {/* =========================================
          RESPONSIVE STYLES
      ========================================== */}

      <style>{`

        /* =========================================
           SECTION
        ========================================== */

        .skills-section {
          position: relative;
          overflow: hidden;
          background: var(--bg-main);
        }


        /* =========================================
           FILTER BUTTONS
        ========================================== */

        .skills-filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;

          max-width: 1000px;

          margin: 0 auto 3rem;
        }

        .skill-filter-button {
          appearance: none;

          border: 1px solid var(--border-color);

          background: var(--bg-surface);

          color: var(--text-body);

          padding: 0.6rem 1rem;

          border-radius: 999px;

          font-family: var(--font-body);

          font-size: 0.82rem;

          font-weight: 600;

          line-height: 1.2;

          cursor: pointer;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .skill-filter-button:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
          transform: translateY(-1px);
        }

        .skill-filter-button.active {
          background: var(--color-accent-light);
          border-color: var(--color-accent);
          color: var(--color-accent);
        }

        .skill-filter-button:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 3px;
        }


        /* =========================================
           SKILLS GRID
        ========================================== */

        .skills-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 1.5rem;

          max-width: 1150px;

          margin: 0 auto;
        }


        /* =========================================
           SKILL CATEGORY CARD
        ========================================== */

        .skill-category-card {
          min-width: 0;

          padding: 1.75rem;

          display: flex;
          flex-direction: column;

          gap: 1.35rem;

          border-top:
            2px solid var(--color-accent);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-4px);
        }


        /* =========================================
           CATEGORY HEADER
        ========================================== */

        .skill-category-header {
          display: flex;
          align-items: center;

          gap: 0.85rem;
        }

        .skill-category-icon {
          width: 45px;
          height: 45px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          background:
            var(--color-primary-light);

          color:
            var(--color-primary);
        }

        .skill-category-title {
          margin: 0;

          color:
            var(--text-heading);

          font-size: 1.05rem;

          line-height: 1.4;

          font-weight: 700;
        }

        .skill-category-count {
          margin: 0.25rem 0 0;

          color:
            var(--text-body);

          font-size: 0.72rem;

          line-height: 1.3;
        }


        /* =========================================
           SKILL LIST
        ========================================== */

        .skill-list {
          display: flex;
          flex-wrap: wrap;

          gap: 0.55rem;

          padding: 0;
          margin: 0;

          list-style: none;
        }

        .skill-item {
          display: inline-flex;
          align-items: center;

          gap: 0.4rem;

          padding:
            0.42rem 0.7rem;

          border:
            1px solid var(--border-color);

          border-radius: 7px;

          background:
            var(--bg-main);

          color:
            var(--text-heading);

          font-family:
            var(--font-code);

          font-size: 0.76rem;

          line-height: 1.3;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .skill-item:hover {
          border-color:
            var(--color-accent);

          background:
            var(--color-accent-light);

          transform:
            translateY(-1px);
        }

        .skill-check {
          flex-shrink: 0;

          color:
            var(--color-success);
        }


        /* =========================================
           FOOTER
        ========================================== */

        .skills-footer {
          max-width: 750px;

          margin:
            2.5rem auto 0;

          text-align: center;
        }

        .skills-footer p {
          margin: 0;

          color:
            var(--text-body);

          font-size: 0.85rem;

          line-height: 1.7;
        }


        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 1100px) {

          .skills-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            max-width: 850px;
          }

        }


        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 767px) {

          .skills-filter {
            justify-content: flex-start;

            flex-wrap: nowrap;

            overflow-x: auto;

            padding:
              0.25rem 0.15rem 0.75rem;

            margin-bottom: 2rem;

            scrollbar-width: thin;

            -webkit-overflow-scrolling: touch;
          }

          .skill-filter-button {
            flex: 0 0 auto;

            font-size: 0.76rem;

            padding:
              0.55rem 0.85rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;

            gap: 1.15rem;
          }

          .skill-category-card {
            padding: 1.35rem;

            gap: 1.1rem;
          }

          .skill-category-title {
            font-size: 1rem;
          }

          .skill-category-icon {
            width: 42px;
            height: 42px;
          }

          .skill-item {
            font-size: 0.72rem;

            padding:
              0.4rem 0.6rem;
          }

          .skills-footer {
            margin-top: 2rem;
          }

          .skills-footer p {
            font-size: 0.8rem;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 480px) {

          .skills-filter {
            gap: 0.5rem;
          }

          .skill-category-card {
            padding: 1.15rem;
          }

          .skill-category-header {
            gap: 0.7rem;
          }

          .skill-category-icon {
            width: 40px;
            height: 40px;

            border-radius: 10px;
          }

          .skill-category-title {
            font-size: 0.92rem;
          }

          .skill-category-count {
            font-size: 0.68rem;
          }

          .skill-item {
            font-size: 0.68rem;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .skills-section *,
          .skills-section *::before,
          .skills-section *::after {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }

          .skill-category-card:hover,
          .skill-item:hover,
          .skill-filter-button:hover {
            transform: none;
          }

        }

      `}</style>
    </section>
  );
};
