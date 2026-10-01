import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Code2,
  Eye,
  Globe,
  LineChart,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { courses, tracks, formatPrice, courseLabel, trackSavings } from "../../data/training";
import Reveal from "../Reveal";

type Goal = {
  id: string;
  label: string;
  icon: LucideIcon;
  kind: "course" | "track";
  // Course id (kind "course") or track name (kind "track").
  ref: string;
};

const goals: Goal[] = [
  { id: "new", label: "I'm new to coding", icon: Code2, kind: "course", ref: "python" },
  { id: "interview", label: "Crack coding interviews", icon: Briefcase, kind: "track", ref: "Interview Ready" },
  { id: "web", label: "Become a web developer", icon: Globe, kind: "track", ref: "Full-Stack Python Developer" },
  { id: "ai", label: "Build AI applications", icon: Bot, kind: "track", ref: "AI Application Developer" },
  { id: "ml", label: "Learn machine learning", icon: LineChart, kind: "track", ref: "Machine Learning" },
  { id: "vision", label: "Work with images and video", icon: Eye, kind: "track", ref: "Computer Vision" },
];

type Result = {
  title: string;
  subtitle: string;
  chips: string[];
  priceLabel: string;
  priceValue: string;
  note: string;
};

function getResult(goal: Goal): Result | null {
  if (goal.kind === "course") {
    const course = courses.find((c) => c.id === goal.ref);
    if (!course) return null;
    return {
      title: course.name,
      subtitle: `${course.level} · ${course.liveHours} live hours · ${
        course.needs === "None" ? "no prerequisites" : `needs ${course.needs}`
      }`,
      chips: [],
      priceLabel: "Batch price",
      priceValue: formatPrice(course.batch),
      note: `1-to-1 live: ${formatPrice(course.oneToOne)}`,
    };
  }

  const track = tracks.find((t) => t.name === goal.ref);
  if (!track) return null;
  return {
    title: `${track.name} path`,
    subtitle: `Best for: ${track.bestFor}`,
    chips: track.courses.map(courseLabel),
    priceLabel: "Batch price, all courses",
    priceValue: formatPrice(track.price),
    note: `You save ${formatPrice(trackSavings(track))} compared with buying separately`,
  };
}

export default function CourseFinder() {
  const [selected, setSelected] = useState(goals[0].id);
  const goal = goals.find((g) => g.id === selected) ?? goals[0];
  const result = getResult(goal);

  const whatsappHref = result
    ? `https://wa.me/917395981362?text=${encodeURIComponent(
        `Hi Chennai Coder, I'm interested in ${result.title}. Please share the next batch details.`
      )}`
    : "https://wa.me/917395981362";

  return (
    <section id="course-finder" className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Find your course</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-3">
            Not sure where to start? Pick your goal.
          </h2>
          <p className="text-text-muted leading-relaxed">
            Tell us what you want to achieve and we'll point you to the right
            course or learning path.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-6 rounded-2xl border border-border bg-brand-gradient-soft p-5 sm:p-8 lg:grid-cols-[1fr,1.05fr]">
            <div role="radiogroup" aria-label="Your goal" className="grid gap-3 sm:grid-cols-2">
              {goals.map((g) => {
                const Icon = g.icon;
                const active = g.id === selected;
                return (
                  <button
                    key={g.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setSelected(g.id)}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                      active
                        ? "border-primary bg-white shadow-card-hover"
                        : "border-border bg-white/70 hover:border-primary/50 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        active ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                    <span className={`text-sm font-semibold ${active ? "text-text" : "text-text-muted"}`}>
                      {g.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-xl border border-border bg-white p-6 sm:p-7 shadow-card min-h-[18rem]">
              <AnimatePresence mode="wait">
                {result && (
                  <motion.div
                    key={goal.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col"
                  >
                    <p className="eyebrow mb-2">We recommend</p>
                    <h3 className="font-display text-2xl font-semibold leading-tight mb-1">{result.title}</h3>
                    <p className="text-sm text-text-muted mb-4">{result.subtitle}</p>

                    {result.chips.length > 0 && (
                      <ul className="mb-5 flex flex-wrap gap-2">
                        {result.chips.map((chip) => (
                          <li
                            key={chip}
                            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted"
                          >
                            {chip}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto border-t border-border pt-5">
                      <p className="text-xs text-text-faint">{result.priceLabel}</p>
                      <p className="font-display text-3xl font-bold text-primary">{result.priceValue}</p>
                      <p className="mt-1 text-xs text-text-muted">{result.note}</p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm !px-5 !py-2.5"
                        >
                          <MessageCircle size={16} />
                          Ask about this on WhatsApp
                        </a>
                        <Link to="/training" className="btn-secondary text-sm !px-5 !py-2.5">
                          Full details
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
