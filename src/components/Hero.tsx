import React from "react";
import { BookOpen, Code, Mail, Rocket } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-section"
    >
      {/* Decorative Background */}
      <div
        className="hero-glow hero-glow-left"
        aria-hidden="true"
      />

      <div
        className="hero-glow hero-glow-right"
        aria-hidden="true"
      />

      <div className="container hero-container">

        <div className="hero-grid">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="hero-content">

            {/* Brand / Service Badge */}
            <div
              className="hero-badge"
              aria-label="Chennai Coder services"
            >
              <Rocket
                size={16}
                aria-hidden="true"
              />

              <span>
                AI • Software • Programming Training
              </span>
            </div>

            {/* Main SEO Heading */}
            <h1
              id="hero-title"
              className="hero-title"
            >
              Chennai Coder
              <span className="gradient-text hero-title-highlight">
                AI, Programming & Software Development
              </span>
              <span className="hero-title-location">
                in Chennai
              </span>
            </h1>

            {/* Main Introduction */}
            <p className="hero-description">
              Learn programming and build real-world projects with
              Chennai Coder. Get practical training in{" "}
              <strong>Python, SQL, Web Development, AI & Machine Learning,
              OpenCV, FastAPI and LLM applications</strong>.
              I also build custom AI-powered applications, automation
              tools and software solutions for businesses.
            </p>

            {/* Primary Actions */}
            <div className="hero-actions">

              <a
                href="#courses"
                className="btn btn-primary hero-button"
                aria-label="Explore programming and AI courses"
              >
                <BookOpen
                  size={18}
                  aria-hidden="true"
                />

                <span>
                  Explore Courses
                </span>
              </a>

              <a
                href="#freelance"
                className="btn btn-accent hero-button"
                aria-label="Hire Chennai Coder for AI and software development"
              >
                <Code
                  size={18}
                  aria-hidden="true"
                />

                <span>
                  Hire a Developer
                </span>
              </a>

              <a
                href="#contact"
                className="btn btn-secondary hero-button"
                aria-label="Contact Chennai Coder"
              >
                <Mail
                  size={18}
                  aria-hidden="true"
                />

                <span>
                  Contact Me
                </span>
              </a>

            </div>

            {/* Availability */}
            <div className="hero-availability">

              <span
                className="availability-dot"
                aria-hidden="true"
              />

              <span>
                Available for AI projects, software development
                and programming training
              </span>

            </div>

            {/* Quick Value Points */}
            <div
              className="hero-highlights"
              aria-label="Chennai Coder highlights"
            >

              <div className="hero-highlight">
                <strong>
                  Practical
                </strong>

                <span>
                  Project-Based Learning
                </span>
              </div>

              <div className="hero-highlight">
                <strong>
                  AI & Software
                </strong>

                <span>
                  Development Solutions
                </span>
              </div>

              <div className="hero-highlight">
                <strong>
                  Beginner Friendly
                </strong>

                <span>
                  Personalized Guidance
                </span>
              </div>

            </div>

          </div>


          {/* =========================
              RIGHT PROFILE CARD
          ========================== */}
          <div className="hero-profile-wrapper">

            <div
              className="hero-profile-glow"
              aria-hidden="true"
            />

            <div className="glass-card hero-profile-card">

              {/* Profile Image */}
              <div className="hero-image-wrapper">

                <img
                  src="/assets/mohanraj-profile.jpg"
                  alt="Mohanraj, founder of Chennai Coder, AI developer and programming trainer in Chennai"
                  width="420"
                  height="420"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="hero-profile-image"
                />

              </div>

              {/* Profile Details */}
              <div className="hero-profile-info">

                <h2>
                  Mohanraj
                </h2>

                <p className="hero-profile-role">
                  Founder of Chennai Coder
                </p>

                <p className="hero-profile-description">
                  AI Developer • Python Trainer • Software Engineer
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          RESPONSIVE STYLES
      ========================== */}
      <style>{`

        /* =========================================
           HERO BASE
        ========================================== */

        .hero-section {
          min-height: 100vh;
          min-height: 100svh;
          padding-top: calc(var(--nav-height) + 3rem);
          padding-bottom: 4rem;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .hero-container {
          width: 100%;
          position: relative;
          z-index: 2;
        }


        /* =========================================
           BACKGROUND GLOWS
        ========================================== */

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
        }

        .hero-glow-left {
          top: 15%;
          left: -180px;
          width: 500px;
          height: 500px;
          background:
            radial-gradient(
              circle,
              rgba(37, 99, 235, 0.15) 0%,
              rgba(0, 0, 0, 0) 70%
            );
        }

        .hero-glow-right {
          bottom: 5%;
          right: -160px;
          width: 500px;
          height: 500px;
          background:
            radial-gradient(
              circle,
              rgba(6, 182, 212, 0.15) 0%,
              rgba(0, 0, 0, 0) 70%
            );
        }


        /* =========================================
           GRID
        ========================================== */

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }


        /* =========================================
           LEFT CONTENT
        ========================================== */

        .hero-content {
          min-width: 0;
        }


        /* =========================================
           BADGE
        ========================================== */

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;

          padding: 0.45rem 1rem;

          margin-bottom: 1.25rem;

          border-radius: 999px;

          border: 1px solid
            rgba(6, 182, 212, 0.3);

          background:
            var(--color-accent-light);

          color:
            var(--color-accent);

          font-size: 0.82rem;
          font-weight: 600;

          line-height: 1.4;
        }


        /* =========================================
           HEADING
        ========================================== */

        .hero-title {
          margin: 0 0 1.25rem;

          max-width: 850px;

          color:
            var(--text-heading);

          font-size:
            clamp(2.3rem, 5vw, 4.25rem);

          line-height: 1.1;

          font-weight: 800;

          letter-spacing: -0.035em;
        }

        .hero-title-highlight {
          display: block;

          margin-top: 0.25rem;
        }

        .hero-title-location {
          display: block;

          margin-top: 0.25rem;

          font-size:
            clamp(1.8rem, 4vw, 3rem);

          color:
            var(--text-heading);
        }


        /* =========================================
           DESCRIPTION
        ========================================== */

        .hero-description {
          max-width: 700px;

          margin: 0 0 2.25rem;

          color:
            var(--text-body);

          font-size:
            clamp(1rem, 2vw, 1.18rem);

          line-height: 1.75;
        }

        .hero-description strong {
          color:
            var(--text-heading);

          font-weight: 650;
        }


        /* =========================================
           CTA BUTTONS
        ========================================== */

        .hero-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 0.85rem;

          align-items: center;
        }

        .hero-button {
          min-height: 46px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 0.5rem;

          white-space: nowrap;

          text-decoration: none;
        }


        /* =========================================
           AVAILABILITY
        ========================================== */

        .hero-availability {
          display: flex;

          align-items: flex-start;

          gap: 0.7rem;

          margin-top: 2rem;

          max-width: 650px;

          color:
            var(--text-body);

          font-size: 0.88rem;

          line-height: 1.5;
        }

        .availability-dot {
          width: 9px;
          height: 9px;

          min-width: 9px;

          margin-top: 0.35rem;

          border-radius: 50%;

          background:
            var(--color-success);

          box-shadow:
            0 0 8px var(--color-success);
        }


        /* =========================================
           HIGHLIGHTS
        ========================================== */

        .hero-highlights {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          max-width: 720px;

          margin-top: 2.25rem;

          border-top:
            1px solid var(--border-color);

          padding-top: 1.5rem;

          gap: 1rem;
        }

        .hero-highlight {
          display: flex;

          flex-direction: column;

          gap: 0.25rem;
        }

        .hero-highlight strong {
          color:
            var(--text-heading);

          font-size: 0.85rem;

          font-weight: 700;
        }

        .hero-highlight span {
          color:
            var(--text-body);

          font-size: 0.75rem;

          line-height: 1.45;
        }


        /* =========================================
           PROFILE
        ========================================== */

        .hero-profile-wrapper {
          display: flex;

          justify-content: center;

          position: relative;

          width: 100%;

          max-width: 430px;

          margin: 0 auto;
        }

        .hero-profile-glow {
          position: absolute;

          inset: -14px;

          border-radius: 30px;

          background:
            linear-gradient(
              135deg,
              var(--color-primary),
              var(--color-accent)
            );

          opacity: 0.35;

          filter: blur(22px);

          pointer-events: none;
        }

        .hero-profile-card {
          position: relative;

          z-index: 1;

          width: 100%;

          padding: 1.15rem;

          overflow: hidden;

          border-radius: 24px;
        }


        /* =========================================
           PROFILE IMAGE
        ========================================== */

        .hero-image-wrapper {
          width: 100%;

          overflow: hidden;

          border-radius: 17px;
        }

        .hero-profile-image {
          display: block;

          width: 100%;

          height: auto;

          aspect-ratio: 1 / 1;

          object-fit: cover;
        }


        /* =========================================
           PROFILE INFO
        ========================================== */

        .hero-profile-info {
          margin-top: 1rem;

          padding: 1rem;

          text-align: center;

          border:
            1px solid var(--border-color);

          background:
            var(--bg-main);

          border-radius: 13px;
        }

        .hero-profile-info h2 {
          margin: 0 0 0.3rem;

          color:
            var(--text-heading);

          font-size: 1rem;

          font-weight: 700;
        }

        .hero-profile-role {
          margin: 0 0 0.3rem;

          color:
            var(--color-accent);

          font-size: 0.82rem;

          font-weight: 600;
        }

        .hero-profile-description {
          margin: 0;

          color:
            var(--text-body);

          font-size: 0.78rem;

          line-height: 1.5;
        }


        /* =========================================
           LARGE DESKTOP
        ========================================== */

        @media (min-width: 992px) {

          .hero-grid {
            grid-template-columns:
              minmax(0, 1.3fr)
              minmax(330px, 0.7fr);

            gap: 4rem;
          }

        }


        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 991px) {

          .hero-section {
            padding-top:
              calc(var(--nav-height) + 2.5rem);

            padding-bottom: 3.5rem;
          }

          .hero-grid {
            gap: 3rem;
          }

          .hero-content {
            text-align: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-availability {
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
            text-align: left;
          }

          .hero-highlights {
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .hero-profile-wrapper {
            max-width: 380px;
          }

        }


        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .hero-section {
            min-height: auto;

            padding-top:
              calc(var(--nav-height) + 2rem);

            padding-bottom: 3rem;
          }

          .hero-grid {
            gap: 2.5rem;
          }

          .hero-badge {
            font-size: 0.74rem;

            padding:
              0.4rem 0.75rem;
          }

          .hero-title {
            font-size:
              clamp(2rem, 10vw, 2.7rem);

            line-height: 1.12;

            letter-spacing: -0.025em;
          }

          .hero-title-highlight {
            margin-top: 0.4rem;
          }

          .hero-title-location {
            font-size:
              clamp(1.55rem, 7vw, 2rem);
          }

          .hero-description {
            font-size: 0.95rem;

            line-height: 1.7;

            margin-bottom: 1.75rem;
          }

          .hero-actions {
            display: grid;

            grid-template-columns: 1fr;

            width: 100%;

            gap: 0.7rem;
          }

          .hero-button {
            width: 100%;
          }

          .hero-availability {
            margin-top: 1.5rem;

            font-size: 0.8rem;

            justify-content: flex-start;
          }

          .hero-highlights {
            grid-template-columns: 1fr;

            gap: 0.9rem;

            text-align: center;

            padding-top: 1.25rem;
          }

          .hero-highlight {
            align-items: center;
          }

          .hero-profile-wrapper {
            max-width: 340px;
          }

          .hero-profile-card {
            padding: 0.85rem;

            border-radius: 20px;
          }

          .hero-profile-info {
            padding: 0.85rem;
          }

          .hero-glow-left {
            left: -280px;
            top: 15%;
          }

          .hero-glow-right {
            right: -280px;
            bottom: 5%;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 380px) {

          .hero-section {
            padding-top:
              calc(var(--nav-height) + 1.5rem);

            padding-bottom: 2.5rem;
          }

          .hero-title {
            font-size: 1.9rem;
          }

          .hero-title-location {
            font-size: 1.45rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }

          .hero-profile-wrapper {
            max-width: 300px;
          }

          .hero-badge {
            font-size: 0.7rem;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .hero-section *,
          .hero-section *::before,
          .hero-section *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

        }

      `}</style>
    </section>
  );
};
