import React from "react";
import {
  BookOpenCheck,
  Layers,
  TrendingUp,
  BrainCircuit,
  Code2,
  GraduationCap
} from "lucide-react";

export const About: React.FC = () => {
  const approachCards = [
    {
      title: "Learn",
      description:
        "Understand programming and AI concepts through clear explanations, live coding, practical exercises, and beginner-friendly guidance.",
      icon: (
        <BookOpenCheck
          size={28}
          aria-hidden="true"
          style={{ color: "var(--color-primary)" }}
        />
      ),
      background: "var(--color-primary-light)",
      color: "var(--color-primary)"
    },
    {
      title: "Build",
      description:
        "Turn concepts into real applications by building Python projects, AI tools, data solutions, web applications, and software projects.",
      icon: (
        <Layers
          size={28}
          aria-hidden="true"
          style={{ color: "var(--color-accent)" }}
        />
      ),
      background: "var(--color-accent-light)",
      color: "var(--color-accent)"
    },
    {
      title: "Improve",
      description:
        "Strengthen your development skills through continuous practice, project work, problem solving, and exposure to modern technologies.",
      icon: (
        <TrendingUp
          size={28}
          aria-hidden="true"
          style={{ color: "var(--color-success)" }}
        />
      ),
      background: "rgba(16, 185, 129, 0.15)",
      color: "var(--color-success)"
    }
  ];

  const expertise = [
    {
      icon: (
        <GraduationCap
          size={22}
          aria-hidden="true"
        />
      ),
      title: "Programming Training",
      description:
        "Practical learning for students, beginners, and developers."
    },
    {
      icon: (
        <BrainCircuit
          size={22}
          aria-hidden="true"
        />
      ),
      title: "AI & Machine Learning",
      description:
        "Build practical AI, RAG, LLM, and machine learning applications."
    },
    {
      icon: (
        <Code2
          size={22}
          aria-hidden="true"
        />
      ),
      title: "Software Development",
      description:
        "Custom applications, automation tools, and software solutions."
    }
  ];

  return (
    <section
      id="about"
      className="section-padding about-section"
      aria-labelledby="about-title"
    >
      <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <header className="section-header">

          <span className="section-tag">
            About Chennai Coder
          </span>

          <h2
            id="about-title"
            className="section-title"
          >
            Learn Programming. Build Real Projects. Grow Your Skills.
          </h2>

          <p className="section-desc">
            Chennai Coder is a technology and programming platform focused
            on practical programming education, AI development, and custom
            software solutions for students, developers, and businesses.
          </p>

        </header>


        {/* =========================================
            MAIN ABOUT CONTENT
        ========================================== */}

        <div className="about-main-layout">

          {/* Main Story */}
          <article className="glass-card about-main-card">

            <div className="about-card-label">
              <span className="about-label-dot" />
              <span>Chennai Coder</span>
            </div>

            <h3 className="about-main-title">
              Practical technology education and AI development
            </h3>

            <p className="about-intro">
              <strong>Chennai Coder</strong> helps people move from
              learning programming concepts to actually building useful
              software.
            </p>

            <p className="about-text">
              Founded by <strong>Mohanraj</strong>, Chennai Coder focuses
              on practical, project-based learning in technologies such as
              Python, SQL, web development, AI and machine learning,
              OpenCV, FastAPI, and LLM application development.
            </p>

            <p className="about-text">
              The goal is simple: instead of only learning syntax and
              theory, students and developers work with real programming
              problems, build projects, understand how technologies fit
              together, and develop the confidence to create applications
              independently.
            </p>

            <p className="about-text about-text-last">
              Chennai Coder also works on AI-powered applications,
              automation, machine learning solutions, and custom software
              development for businesses that need practical technology
              solutions.
            </p>

          </article>


          {/* Expertise */}
          <aside
            className="about-expertise"
            aria-label="Chennai Coder expertise"
          >

            {expertise.map((item) => (
              <div
                key={item.title}
                className="glass-card expertise-card"
              >

                <div className="expertise-icon">
                  {item.icon}
                </div>

                <div>
                  <h3 className="expertise-title">
                    {item.title}
                  </h3>

                  <p className="expertise-description">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </aside>

        </div>


        {/* =========================================
            LEARN / BUILD / IMPROVE
        ========================================== */}

        <div className="approach-heading">

          <h3>
            A Practical Approach to Learning & Development
          </h3>

          <p>
            Whether you are learning your first programming language or
            building an AI application, the approach focuses on
            understanding, implementation, and continuous improvement.
          </p>

        </div>


        <div
          className="about-cards-grid"
          role="list"
          aria-label="Chennai Coder learning approach"
        >

          {approachCards.map((card) => (
            <article
              key={card.title}
              className="glass-card about-approach-card"
              role="listitem"
              style={{
                borderTop: `2px solid ${card.color}`
              }}
            >

              {/* Icon */}
              <div
                className="about-icon"
                style={{
                  background: card.background
                }}
              >
                {card.icon}
              </div>

              {/* Content */}
              <div>

                <h3 className="about-card-title">
                  {card.title}
                </h3>

                <p className="about-card-description">
                  {card.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* =========================================
          RESPONSIVE STYLES
      ========================================== */}

      <style>{`

        /* =========================================
           BASE
        ========================================== */

        .about-section {
          position: relative;
          overflow: hidden;
          background: var(--bg-main);
        }


        /* =========================================
           MAIN LAYOUT
        ========================================== */

        .about-main-layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.45fr)
            minmax(280px, 0.75fr);

          gap: 2rem;

          max-width: 1100px;

          margin:
            0 auto 4rem;
        }


        /* =========================================
           MAIN ABOUT CARD
        ========================================== */

        .about-main-card {
          padding: 2.5rem;

          border-left:
            4px solid var(--color-accent);
        }

        .about-card-label {
          display: inline-flex;

          align-items: center;

          gap: 0.5rem;

          margin-bottom: 1rem;

          color: var(--color-accent);

          font-family: var(--font-code);

          font-size: 0.75rem;

          font-weight: 600;

          text-transform: uppercase;

          letter-spacing: 0.04em;
        }

        .about-label-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            var(--color-accent);

          box-shadow:
            0 0 7px var(--color-accent);
        }

        .about-main-title {
          margin: 0 0 1.25rem;

          color: var(--text-heading);

          font-size: 1.6rem;

          line-height: 1.35;

          font-weight: 750;
        }

        .about-intro {
          margin: 0 0 1.25rem;

          color: var(--text-heading);

          font-size: 1.08rem;

          line-height: 1.8;

          font-weight: 500;
        }

        .about-text {
          margin: 0 0 1.15rem;

          color: var(--text-body);

          font-size: 0.98rem;

          line-height: 1.8;
        }

        .about-text-last {
          margin-bottom: 0;
        }


        /* =========================================
           EXPERTISE
        ========================================== */

        .about-expertise {
          display: flex;

          flex-direction: column;

          gap: 1rem;
        }

        .expertise-card {
          display: flex;

          align-items: flex-start;

          gap: 1rem;

          padding: 1.35rem;

          height: 100%;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .expertise-card:hover {
          transform: translateY(-3px);
        }

        .expertise-icon {
          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          width: 44px;
          height: 44px;

          border-radius: 11px;

          color: var(--color-accent);

          background:
            var(--color-accent-light);
        }

        .expertise-title {
          margin: 0 0 0.35rem;

          color: var(--text-heading);

          font-size: 0.95rem;

          font-weight: 700;
        }

        .expertise-description {
          margin: 0;

          color: var(--text-body);

          font-size: 0.8rem;

          line-height: 1.55;
        }


        /* =========================================
           APPROACH HEADING
        ========================================== */

        .approach-heading {
          max-width: 720px;

          margin:
            0 auto 2rem;

          text-align: center;
        }

        .approach-heading h3 {
          margin: 0 0 0.65rem;

          color: var(--text-heading);

          font-size: 1.45rem;

          line-height: 1.4;

          font-weight: 700;
        }

        .approach-heading p {
          margin: 0;

          color: var(--text-body);

          font-size: 0.92rem;

          line-height: 1.7;
        }


        /* =========================================
           APPROACH CARDS
        ========================================== */

        .about-cards-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 2rem;
        }

        .about-approach-card {
          display: flex;

          flex-direction: column;

          gap: 1.25rem;

          min-width: 0;

          height: 100%;

          padding: 2.1rem;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .about-approach-card:hover {
          transform: translateY(-5px);
        }

        .about-icon {
          display: flex;

          align-items: center;

          justify-content: center;

          width: 56px;
          height: 56px;

          flex-shrink: 0;

          border-radius: 14px;
        }

        .about-card-title {
          margin: 0 0 0.65rem;

          color: var(--text-heading);

          font-size: 1.25rem;

          font-weight: 700;
        }

        .about-card-description {
          margin: 0;

          color: var(--text-body);

          font-size: 0.92rem;

          line-height: 1.7;
        }


        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 991px) {

          .about-main-layout {
            grid-template-columns: 1fr;

            max-width: 850px;

            margin-bottom: 3.5rem;
          }

          .about-expertise {
            display: grid;

            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

          .about-cards-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

        }


        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 767px) {

          .about-main-layout {
            gap: 1.25rem;

            margin-bottom: 2.75rem;
          }

          .about-main-card {
            padding: 1.5rem;

            border-left-width: 3px;
          }

          .about-main-title {
            font-size: 1.35rem;
          }

          .about-intro {
            font-size: 1rem;

            line-height: 1.75;
          }

          .about-text {
            font-size: 0.92rem;

            line-height: 1.7;
          }

          .about-expertise {
            grid-template-columns: 1fr;

            gap: 0.85rem;
          }

          .expertise-card {
            padding: 1.15rem;
          }

          .approach-heading {
            margin-bottom: 1.5rem;
          }

          .approach-heading h3 {
            font-size: 1.25rem;
          }

          .approach-heading p {
            font-size: 0.88rem;
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
            font-size: 1.15rem;
          }

          .about-card-description {
            font-size: 0.88rem;

            line-height: 1.65;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 480px) {

          .about-main-card {
            padding: 1.25rem;
          }

          .about-main-title {
            font-size: 1.2rem;
          }

          .about-intro {
            font-size: 0.94rem;
          }

          .about-text {
            font-size: 0.88rem;
          }

          .expertise-card {
            padding: 1rem;
          }

          .expertise-icon {
            width: 40px;
            height: 40px;
          }

          .expertise-title {
            font-size: 0.9rem;
          }

          .expertise-description {
            font-size: 0.76rem;
          }

          .about-approach-card {
            padding: 1.25rem;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .about-section *,
          .about-section *::before,
          .about-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .expertise-card:hover,
          .about-approach-card:hover {
            transform: none;
          }

        }

      `}</style>
    </section>
  );
};
