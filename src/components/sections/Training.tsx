import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import {
  courseGroups,
  tracks,
  formatPrice,
  trackSavings,
  courseLabel,
  type Course,
  type Level,
} from "../../data/training";
import Reveal from "../Reveal";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const levelStyles: Record<Level, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  "Beginner → Intermediate": "bg-sky-50 text-sky-700",
  Intermediate: "bg-blue-50 text-blue-700",
  Advanced: "bg-violet-50 text-violet-700",
};

type Mode = "batch" | "one";
const modes: { id: Mode; label: string }[] = [
  { id: "batch", label: "Batch" },
  { id: "one", label: "1-to-1 live" },
];

const levelFilters = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type LevelFilter = (typeof levelFilters)[number];

const highlights = [
  "Live instructor-led sessions",
  "Practical projects",
  "Git & GitHub included free",
  "Batch or 1-to-1",
];

const steps = [
  { title: "Learn", description: "Attend live instructor-led sessions, one hour each." },
  { title: "Practice", description: "Complete exercises and coding practice outside the live session." },
  { title: "Build", description: "Apply what you learn through practical projects." },
  { title: "GitHub", description: "Push exercises and projects to GitHub and organize your repositories." },
  { title: "Showcase", description: "Use your finished projects as part of a personal coding portfolio." },
];

function prerequisiteText(needs: string) {
  if (needs === "None") return "No prerequisites";
  if (needs.includes("recommended")) return needs;
  return `Prerequisite: ${needs}`;
}

function matchesLevel(course: Course, filter: LevelFilter) {
  return filter === "All" || course.level.includes(filter);
}

export default function Training() {
  const [mode, setMode] = useState<Mode>("batch");
  const [level, setLevel] = useState<LevelFilter>("All");

  const visibleGroups = courseGroups
    .map((group) => ({ ...group, courses: group.courses.filter((c) => matchesLevel(c, level)) }))
    .filter((group) => group.courses.length > 0);

  return (
    <section id="training" className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">Technical training</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
            Affordable, practical, live coding education
          </h1>
          <p className="text-text-muted leading-relaxed mb-6">
            Learn live, build real projects and finish with a GitHub portfolio.
            Every course is available in a lower-priced batch or as 1-to-1
            live sessions just for you.
          </p>
          <ul className="flex flex-wrap gap-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Interactive controls */}
        <div className="sticky top-[6.5rem] z-20 -mx-1 mb-10 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-white/95 p-3 shadow-card backdrop-blur">
          <div role="radiogroup" aria-label="Learning format" className="flex rounded-lg border border-border bg-surface-2 p-1">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                role="radio"
                aria-checked={mode === m.id}
                onClick={() => setMode(m.id)}
                className="relative rounded-md px-4 py-2 text-sm font-semibold"
              >
                {mode === m.id && (
                  <motion.span
                    layoutId="mode-pill"
                    className="absolute inset-0 rounded-md bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative ${mode === m.id ? "text-white" : "text-text-muted"}`}>{m.label}</span>
              </button>
            ))}
          </div>

          <div role="radiogroup" aria-label="Level" className="flex flex-wrap gap-2">
            {levelFilters.map((l) => (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={level === l}
                onClick={() => setLevel(l)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  level === l
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-text-muted hover:border-primary/50"
                }`}
              >
                {l === "All" ? "All levels" : l}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-14">
          {visibleGroups.map((group) => (
            <div key={`${group.title}-${level}`}>
              <Reveal className="mb-6">
                <h2 className="font-display text-xl sm:text-2xl font-semibold">{group.title}</h2>
                <p className="text-sm text-text-muted mt-1">{group.blurb}</p>
              </Reveal>

              <motion.div
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={stagger(0.07)}
              >
                {group.courses.map((course) => {
                  const main = mode === "batch" ? course.batch : course.oneToOne;
                  const other = mode === "batch" ? course.oneToOne : course.batch;
                  return (
                    <motion.div
                      key={course.id}
                      variants={fadeUp}
                      className="card flex flex-col !p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-card-hover"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-display text-lg font-semibold leading-snug">{course.name}</h3>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${levelStyles[course.level]}`}
                        >
                          {course.level}
                        </span>
                      </div>

                      <p className="text-sm text-text-muted">{course.liveHours} live hours</p>
                      <p className="mt-1 text-xs text-text-faint">{prerequisiteText(course.needs)}</p>

                      <div className="mt-5 flex items-end justify-between border-t border-border pt-5">
                        <div>
                          <p className="text-xs text-text-faint mb-0.5">
                            {mode === "batch" ? "Batch price" : "1-to-1 live price"}
                          </p>
                          <AnimatePresence mode="wait">
                            <motion.p
                              key={mode}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{ duration: 0.15 }}
                              className="font-display text-2xl font-bold text-primary"
                            >
                              {formatPrice(main)}
                            </motion.p>
                          </AnimatePresence>
                        </div>
                        <p className="text-xs text-text-faint text-right">
                          {mode === "batch" ? "1-to-1" : "Batch"}
                          <span className="block text-sm font-semibold text-text-muted">{formatPrice(other)}</span>
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="card !bg-surface-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Github size={24} />
            </span>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">
                Git &amp; GitHub included free with every course
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                You don't pay extra for GitHub learning and support. Where it
                fits the course, you'll use repositories, upload your projects,
                write README documentation and build a portfolio.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal className="max-w-2xl mb-8">
            <p className="eyebrow mb-3">Learning paths</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight mb-2">
              Bundle courses around a goal and save
            </h2>
            <p className="text-sm text-text-muted">
              Path prices are for batch learning and cover every course in the path.
            </p>
          </Reveal>

          <motion.div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.08)}
          >
            {tracks.map((track) => (
              <motion.div
                key={track.name}
                variants={fadeUp}
                className="card flex flex-col !p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-card-hover"
              >
                <h3 className="font-display text-lg font-semibold">{track.name}</h3>
                <p className="text-sm text-text-muted mt-1 mb-4">Best for: {track.bestFor}</p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {track.courses.map((id) => (
                    <li
                      key={id}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted"
                    >
                      {courseLabel(id)}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="font-display text-2xl font-bold">{formatPrice(track.price)}</p>
                    <p className="text-xs text-text-faint">Batch price, all courses</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    Save {formatPrice(trackSavings(track))}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20">
          <Reveal className="max-w-2xl mb-8">
            <p className="eyebrow mb-3">How learning works</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
              From live class to portfolio
            </h2>
          </Reveal>

          <motion.ol
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
          >
            {steps.map((step, i) => (
              <motion.li key={step.title} variants={fadeUp}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-2xl font-semibold text-primary">{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-16 card !bg-surface-2 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6"
        >
          <div className="mb-5 sm:mb-0">
            <h3 className="font-display font-semibold text-lg mb-1">Not sure where to start?</h3>
            <p className="text-text-muted text-sm">
              Message on WhatsApp or email with your current level and we'll suggest the right course.
            </p>
          </div>
          <Link to="/contact" className="btn-primary w-fit mx-auto sm:mx-0 shrink-0">
            Contact now to join
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
