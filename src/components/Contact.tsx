import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  MessageSquareCheck,
  ExternalLink,
  MapPin,
  Clock
} from "lucide-react";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Course Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    const formattedText =
      `Hi Mohanraj,\n\n` +
      `My name is ${name}.\n` +
      `Email: ${email}\n` +
      `Inquiry: ${subject}\n\n` +
      `Message:\n${message}\n\n` +
      `I found Chennai Coder through the website.`;

    const whatsappUrl =
      `https://wa.me/917395981362?text=${encodeURIComponent(
        formattedText
      )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("Course Inquiry");
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="section-padding contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <header className="section-header">

          <span className="section-tag">
            Contact Chennai Coder
          </span>

          <h2
            id="contact-title"
            className="section-title"
          >
            Let's Build, Learn & Work Together
          </h2>

          <p className="section-desc">
            Looking for programming training, AI development, machine
            learning solutions, or custom software development? Contact
            Chennai Coder to discuss your learning goals or project
            requirements.
          </p>

        </header>


        {/* =========================================
            CONTACT CONTENT
        ========================================== */}

        <div className="contact-grid">

          {/* =======================================
              LEFT COLUMN
          ======================================== */}

          <div className="contact-info">

            <div className="contact-heading">

              <span className="contact-eyebrow">
                Get in touch
              </span>

              <h3>
                Let's discuss your requirements
              </h3>

              <p>
                Whether you want to learn programming, build an AI
                application, or develop custom software, you can contact
                Chennai Coder directly.
              </p>

            </div>


            {/* =====================================
                EMAIL
            ====================================== */}

            <a
              href="mailto:chennaicoder.support@gmail.com"
              className="glass-card contact-method"
              aria-label="Email Chennai Coder"
            >
              <div className="contact-method-icon email-icon">
                <Mail size={22} aria-hidden="true" />
              </div>

              <div className="contact-method-content">

                <span className="contact-label">
                  Email
                </span>

                <strong>
                  chennaicoder.support@gmail.com
                </strong>

                <small>
                  For course and project inquiries
                </small>

              </div>
            </a>


            {/* =====================================
                WHATSAPP
            ====================================== */}

            <a
              href="https://wa.me/917395981362"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card contact-method"
              aria-label="Contact Chennai Coder on WhatsApp"
            >
              <div className="contact-method-icon whatsapp-icon">
                <Phone size={22} aria-hidden="true" />
              </div>

              <div className="contact-method-content">

                <span className="contact-label">
                  WhatsApp / Phone
                </span>

                <strong>
                  +91 7395981362
                </strong>

                <small>
                  Quick communication and project discussions
                </small>

              </div>
            </a>


            {/* =====================================
                LOCATION / AVAILABILITY
            ====================================== */}

            <div className="contact-meta-grid">

              <div className="contact-meta">

                <MapPin
                  size={18}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Location
                  </span>

                  <strong>
                    Chennai, Tamil Nadu
                  </strong>
                </div>

              </div>


              <div className="contact-meta">

                <Clock
                  size={18}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    Availability
                  </span>

                  <strong>
                    Online
                  </strong>
                </div>

              </div>

            </div>


            {/* =====================================
                SOCIAL LINKS
            ====================================== */}

            <div className="social-links">

              <a
                href="https://in.linkedin.com/in/moganraj"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card social-link"
                aria-label="Visit Mohanraj on LinkedIn"
              >
                <ExternalLink
                  size={18}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    LinkedIn
                  </span>

                  <strong>
                    Moganraj
                  </strong>
                </div>
              </a>


              <a
                href="https://github.com/lookmohan"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card social-link"
                aria-label="Visit Chennai Coder GitHub profile"
              >
                <ExternalLink
                  size={18}
                  aria-hidden="true"
                />

                <div>
                  <span>
                    GitHub
                  </span>

                  <strong>
                    lookmohan
                  </strong>
                </div>
              </a>

            </div>

          </div>


          {/* =======================================
              RIGHT COLUMN — CONTACT FORM
          ======================================== */}

          <div className="glass-card contact-form-card">

            <div className="form-heading">

              <h3>
                Send an Inquiry
              </h3>

              <p>
                Fill in the details below and continue the conversation
                directly through WhatsApp.
              </p>

            </div>


            {submitted ? (

              /* ===================================
                 SUCCESS / WHATSAPP STATE
              ==================================== */

              <div
                className="contact-success"
                role="status"
                aria-live="polite"
              >

                <div className="success-icon">
                  <MessageSquareCheck
                    size={34}
                    aria-hidden="true"
                  />
                </div>

                <h4>
                  Opening WhatsApp
                </h4>

                <p>
                  Your inquiry has been prepared. WhatsApp should open
                  in a new tab so you can review and send the message.
                </p>

              </div>

            ) : (

              /* ===================================
                 FORM
              ==================================== */

              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                {/* Name */}

                <div className="form-group">

                  <label htmlFor="contact-name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    placeholder="Enter your name"
                  />

                </div>


                {/* Email */}

                <div className="form-group">

                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="your@email.com"
                  />

                </div>


                {/* Inquiry Type */}

                <div className="form-group">

                  <label htmlFor="contact-subject">
                    What can I help you with?
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) =>
                      setSubject(e.target.value)
                    }
                  >
                    <option value="Course Inquiry">
                      Programming Course
                    </option>

                    <option value="AI Project">
                      AI / Machine Learning Project
                    </option>

                    <option value="Software Development">
                      Custom Software Development
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="General Question">
                      General Question
                    </option>
                  </select>

                </div>


                {/* Message */}

                <div className="form-group">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    placeholder="Tell me about your learning goals, course requirements, or software project..."
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                >
                  <Send
                    size={18}
                    aria-hidden="true"
                  />

                  Continue via WhatsApp
                </button>


                <p className="form-note">
                  Your message will be prepared and opened in WhatsApp.
                </p>

              </form>

            )}

          </div>

        </div>

      </div>


      {/* =========================================
          RESPONSIVE STYLES
      ========================================== */}

      <style>{`

        /* =========================================
           SECTION
        ========================================== */

        .contact-section {
          background: var(--bg-surface);
          position: relative;
          overflow: hidden;
        }


        /* =========================================
           MAIN GRID
        ========================================== */

        .contact-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.1fr);

          gap: 3rem;

          max-width: 1100px;

          margin: 0 auto;

          align-items: start;
        }


        /* =========================================
           LEFT CONTENT
        ========================================== */

        .contact-info {
          display: flex;

          flex-direction: column;

          gap: 1rem;

          min-width: 0;
        }

        .contact-heading {
          margin-bottom: 0.5rem;
        }

        .contact-eyebrow {
          display: block;

          color:
            var(--color-accent);

          font-size: 0.75rem;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 1.2px;

          margin-bottom: 0.5rem;
        }

        .contact-heading h3 {
          margin: 0 0 0.75rem;

          color:
            var(--text-heading);

          font-size: 1.55rem;

          line-height: 1.3;

          font-weight: 750;
        }

        .contact-heading p {
          margin: 0;

          color:
            var(--text-body);

          font-size: 0.95rem;

          line-height: 1.7;

          max-width: 520px;
        }


        /* =========================================
           CONTACT METHODS
        ========================================== */

        .contact-method {
          display: flex;

          align-items: center;

          gap: 1rem;

          padding: 1.25rem;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .contact-method:hover {
          transform: translateY(-3px);

          border-color:
            var(--color-accent);
        }

        .contact-method-icon {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          border-radius: 12px;

          display: flex;

          align-items: center;

          justify-content: center;
        }

        .email-icon {
          background:
            var(--color-primary-light);

          color:
            var(--color-primary);
        }

        .whatsapp-icon {
          background:
            rgba(16, 185, 129, 0.15);

          color:
            var(--color-success);
        }

        .contact-method-content {
          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 0.2rem;
        }

        .contact-label {
          color:
            var(--text-muted);

          font-size: 0.7rem;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        .contact-method-content strong {
          color:
            var(--text-heading);

          font-size: 0.92rem;

          line-height: 1.4;

          word-break: break-word;
        }

        .contact-method-content small {
          color:
            var(--text-body);

          font-size: 0.75rem;

          line-height: 1.4;
        }


        /* =========================================
           LOCATION / AVAILABILITY
        ========================================== */

        .contact-meta-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 0.75rem;

          margin-top: 0.25rem;
        }

        .contact-meta {
          display: flex;

          align-items: center;

          gap: 0.7rem;

          padding: 0.85rem;

          border:
            1px solid var(--border-color);

          border-radius: 10px;

          background:
            var(--bg-main);

          color:
            var(--color-accent);
        }

        .contact-meta div {
          display: flex;

          flex-direction: column;

          gap: 0.15rem;

          min-width: 0;
        }

        .contact-meta span {
          color:
            var(--text-muted);

          font-size: 0.68rem;

          text-transform: uppercase;

          letter-spacing: 0.7px;
        }

        .contact-meta strong {
          color:
            var(--text-heading);

          font-size: 0.75rem;

          line-height: 1.3;
        }


        /* =========================================
           SOCIAL LINKS
        ========================================== */

        .social-links {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 0.75rem;

          margin-top: 0.25rem;
        }

        .social-link {
          display: flex;

          align-items: center;

          gap: 0.65rem;

          padding: 1rem;

          text-decoration: none;

          color:
            var(--text-heading);

          transition:
            transform 0.25s ease,
            border-color 0.25s ease;
        }

        .social-link:hover {
          transform: translateY(-2px);

          border-color:
            var(--color-accent);
        }

        .social-link div {
          display: flex;

          flex-direction: column;

          gap: 0.15rem;
        }

        .social-link span {
          color:
            var(--text-muted);

          font-size: 0.68rem;
        }

        .social-link strong {
          color:
            var(--text-heading);

          font-size: 0.82rem;
        }


        /* =========================================
           FORM CARD
        ========================================== */

        .contact-form-card {
          padding: 2rem;

          min-width: 0;
        }

        .form-heading {
          margin-bottom: 1.5rem;
        }

        .form-heading h3 {
          margin: 0 0 0.45rem;

          color:
            var(--text-heading);

          font-size: 1.4rem;

          font-weight: 700;
        }

        .form-heading p {
          margin: 0;

          color:
            var(--text-body);

          font-size: 0.85rem;

          line-height: 1.6;
        }


        /* =========================================
           FORM
        ========================================== */

        .contact-form {
          display: flex;

          flex-direction: column;

          gap: 1.15rem;
        }

        .form-group {
          display: flex;

          flex-direction: column;

          gap: 0.45rem;
        }

        .form-group label {
          color:
            var(--text-heading);

          font-size: 0.82rem;

          font-weight: 650;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;

          box-sizing: border-box;

          padding:
            0.78rem 0.9rem;

          border:
            1px solid var(--border-color);

          border-radius: 9px;

          background:
            var(--bg-main);

          color:
            var(--text-heading);

          font-family:
            inherit;

          font-size: 0.9rem;

          line-height: 1.5;

          outline: none;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color:
            var(--text-muted);

          opacity: 0.8;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color:
            var(--color-accent);

          box-shadow:
            0 0 0 3px
            var(--color-accent-light);
        }

        .form-group textarea {
          resize: vertical;

          min-height: 120px;
        }

        .contact-submit {
          width: 100%;

          margin-top: 0.25rem;

          justify-content: center;
        }

        .form-note {
          margin: 0;

          text-align: center;

          color:
            var(--text-muted);

          font-size: 0.7rem;

          line-height: 1.5;
        }


        /* =========================================
           SUCCESS STATE
        ========================================== */

        .contact-success {
          min-height: 380px;

          padding: 2rem 1rem;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          gap: 0.9rem;
        }

        .success-icon {
          width: 68px;
          height: 68px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(16, 185, 129, 0.15);

          color:
            var(--color-success);

          margin-bottom: 0.25rem;
        }

        .contact-success h4 {
          margin: 0;

          color:
            var(--text-heading);

          font-size: 1.3rem;
        }

        .contact-success p {
          max-width: 430px;

          margin: 0;

          color:
            var(--text-body);

          font-size: 0.9rem;

          line-height: 1.7;
        }


        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {

          .contact-grid {
            grid-template-columns: 1fr;

            max-width: 700px;

            gap: 2rem;
          }

          .contact-heading p {
            max-width: none;
          }

        }


        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 767px) {

          .contact-grid {
            gap: 1.5rem;
          }

          .contact-form-card {
            padding: 1.35rem;
          }

          .contact-heading h3 {
            font-size: 1.3rem;
          }

          .contact-heading p {
            font-size: 0.9rem;
          }

          .contact-method {
            padding: 1rem;
          }

          .contact-method-icon {
            width: 44px;
            height: 44px;
          }

          .contact-method-content strong {
            font-size: 0.82rem;
          }

          .contact-method-content small {
            font-size: 0.7rem;
          }

          .contact-meta-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            grid-template-columns: 1fr;
          }

          .contact-success {
            min-height: 300px;

            padding:
              1.5rem 0.5rem;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 480px) {

          .contact-form-card {
            padding: 1.1rem;
          }

          .form-heading h3 {
            font-size: 1.2rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            font-size: 0.85rem;

            padding:
              0.72rem 0.8rem;
          }

          .contact-method-content strong {
            font-size: 0.76rem;
          }

        }


        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .contact-section *,
          .contact-section *::before,
          .contact-section *::after {
            transition-duration:
              0.01ms !important;

            animation-duration:
              0.01ms !important;
          }

          .contact-method:hover,
          .social-link:hover {
            transform: none;
          }

        }

      `}</style>
    </section>
  );
};
