import { Link } from "react-router-dom";
import { courses, startingPrice, formatPrice } from "../../data/training";
import Reveal from "../Reveal";
import { slideInLeft, slideInRight } from "../../lib/motion";

export default function TrainingPreview() {
  return (
    <section id="training" className="section-pad bg-surface-2/70 border-b border-border">
      <div className="container max-w-content">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] items-start">
          <Reveal variants={slideInLeft}>
            <p className="eyebrow mb-3">Technical training</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Affordable, practical, live coding education
            </h2>
            <p className="text-text-muted leading-relaxed mb-4 max-w-md">
              Live sessions, practical projects and a GitHub portfolio. Every
              course is available in a lower-priced batch or as 1-to-1 live
              sessions.
            </p>
            <p className="text-sm text-text-muted mb-6">
              Git &amp; GitHub is included free with every course.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Courses start from {startingPrice}
              </span>
              <Link to="/training" className="btn-primary text-sm !px-5 !py-2.5">
                View courses &amp; prices
              </Link>
            </div>
          </Reveal>

          <Reveal variants={slideInRight} delay={0.1}>
            <div className="card !p-6">
              <ul className="divide-y divide-border">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-text">{course.name}</p>
                      <p className="text-xs text-text-faint">
                        {course.level} · {course.liveHours} live hours
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-text-muted">
                      Batch <span className="font-semibold text-text">{formatPrice(course.batch)}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/training"
              className="inline-block mt-5 text-sm font-medium text-primary hover:text-primary-dim transition-colors"
            >
              See 1-to-1 prices and learning paths →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
