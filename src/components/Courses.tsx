import React from 'react';
import { coursesData } from '../data/coursesData';
import { ExternalLink, Info, CheckCircle2 } from 'lucide-react';

export const Courses: React.FC = () => {
  return (
    <section
      id="courses"
      className="section-padding"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Learn Online</span>

          <h2 className="section-title">
            Programming Courses
          </h2>

          <p className="section-desc">
            Practical, beginner-friendly programming and technology courses
            designed around live coding, hands-on practice, and real-world
            projects.
          </p>
        </div>

        {/* Fee Information Banner */}
        <div
          className="glass-card"
          style={{
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            padding: '1.5rem 1.75rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.25rem',
            borderLeft: '4px solid var(--color-accent)',
            background:
              'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(37, 99, 235, 0.05))'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
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
            <h4
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-heading)',
                marginBottom: '0.3rem',
                fontWeight: 600
              }}
            >
              Course Pricing & Enrollment
            </h4>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-body)',
                margin: 0,
                lineHeight: 1.6
              }}
            >
              Most courses start from <strong>₹600 onwards</strong>.
              SQL programming starts from <strong>₹300 onwards</strong>.
              Course duration, schedule, learning requirements, and final
              pricing can be discussed before enrollment.
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
          {coursesData.map((course) => {

            /*
             * Additional course information.
             * This is kept here so the existing coursesData structure
             * does not need to be changed.
             */
            const courseDetails: Record<
              string,
              {
                points: string[];
                suitableFor: string;
              }
            > = {
              'Python Programming': {
                points: [
                  'Python fundamentals and programming concepts',
                  'Variables, data types, conditions and loops',
                  'Functions and object-oriented programming',
                  'Lists, tuples, sets and dictionaries',
                  'File handling and exception handling',
                  'Practical coding exercises and projects'
                ],
                suitableFor:
                  'Beginners, college students, and anyone starting programming'
              },

              'SQL Programming': {
                points: [
                  'Database and relational database fundamentals',
                  'SELECT, INSERT, UPDATE and DELETE queries',
                  'Filtering, sorting and grouping data',
                  'Aggregate functions and practical queries',
                  'INNER JOIN, LEFT JOIN and other joins',
                  'Subqueries, constraints and database exercises'
                ],
                suitableFor:
                  'Beginners, students, developers, and placement preparation'
              },

              'Web Development': {
                points: [
                  'HTML and semantic webpage structure',
                  'CSS styling and responsive layouts',
                  'JavaScript fundamentals',
                  'DOM manipulation and browser interactions',
                  'Building responsive web pages',
                  'Practical website development projects'
                ],
                suitableFor:
                  'Beginners and students interested in frontend development'
              },

              'AI & ML': {
                points: [
                  'Python programming for AI and ML',
                  'NumPy and Pandas fundamentals',
                  'Data preprocessing and exploration',
                  'Machine learning concepts',
                  'Regression and classification',
                  'Model evaluation and practical ML projects'
                ],
                suitableFor:
                  'Students and Python learners interested in AI and Machine Learning'
              },

              'OpenCV': {
                points: [
                  'Computer vision fundamentals',
                  'Reading and processing images',
                  'Image resizing, cropping and transformations',
                  'Color spaces and image operations',
                  'Working with video and webcam input',
                  'Practical computer vision projects'
                ],
                suitableFor:
                  'Students and developers interested in Computer Vision'
              },

              'FastAPI': {
                points: [
                  'FastAPI fundamentals',
                  'Creating REST APIs with Python',
                  'Request and response handling',
                  'Data validation and API models',
                  'API documentation with Swagger',
                  'Building practical backend APIs'
                ],
                suitableFor:
                  'Python developers and students learning backend development'
              },

              'LLM App Development': {
                points: [
                  'Fundamentals of Large Language Model applications',
                  'Working with LLM APIs',
                  'Prompt engineering fundamentals',
                  'Building AI-powered applications',
                  'RAG application concepts',
                  'Practical LLM application projects'
                ],
                suitableFor:
                  'Developers and students interested in modern AI application development'
              }
            };

            const details = courseDetails[course.title];

            return (
              <div
                key={course.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.75rem',
                  position: 'relative'
                }}
              >
                <div>

                  {/* Price Badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      background: 'var(--color-accent-light)',
                      padding: '0.4rem 0.85rem',
                      borderRadius: '16px',
                      marginBottom: '1.25rem',
                      border: '1px solid rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    {course.priceTag}
                  </div>

                  {/* Course Title */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      color: 'var(--text-heading)',
                      marginBottom: '0.75rem',
                      fontWeight: 700
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.7,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {course.description}
                  </p>

                  {/* What You Will Learn */}
                  {details && (
                    <>
                      <h4
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--text-heading)',
                          marginBottom: '0.75rem',
                          fontWeight: 600
                        }}
                      >
                        What you'll learn
                      </h4>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.55rem'
                        }}
                      >
                        {details.points.map((point, index) => (
                          <div
                            key={index}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.55rem'
                            }}
                          >
                            <CheckCircle2
                              size={16}
                              style={{
                                color: 'var(--color-accent)',
                                flexShrink: 0,
                                marginTop: '3px'
                              }}
                            />

                            <span
                              style={{
                                fontSize: '0.84rem',
                                color: 'var(--text-body)',
                                lineHeight: 1.5
                              }}
                            >
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Suitable For */}
                      <div
                        style={{
                          marginTop: '1.25rem',
                          paddingTop: '1rem',
                          borderTop: '1px solid var(--border-color)'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.78rem',
                            color: 'var(--text-muted)',
                            display: 'block',
                            marginBottom: '0.3rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}
                        >
                          Suitable for
                        </span>

                        <p
                          style={{
                            fontSize: '0.84rem',
                            color: 'var(--text-body)',
                            lineHeight: 1.5,
                            margin: 0
                          }}
                        >
                          {details.suitableFor}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Enrollment CTA */}
<a
  href={`https://wa.me/917395981362?text=${encodeURIComponent(
    `Hi Mohanraj, I'm interested in the ${course.title} course. I would like to know more about the course duration, schedule, syllabus, and enrollment details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-secondary"
  style={{
    width: '100%',
    justifyContent: 'center',
    fontSize: '0.9rem',
    marginTop: 'auto'
  }}
>
  <ExternalLink
    size={18}
    style={{ color: '#25D366' }}
  />

  Discuss & Enroll on WhatsApp
</a>
              </div>
            );
          })}
        </div>

        {/* Bottom Information */}
        <div
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            maxWidth: '750px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              margin: 0
            }}
          >
            Looking for a specific topic or a customized learning plan?
            Contact me to discuss your current skill level, learning goals,
            preferred schedule, and project requirements.
          </p>
        </div>

      </div>
    </section>
  );
};