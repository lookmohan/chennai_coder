import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Radio, Star } from "lucide-react";
import { fadeUp, stagger } from "../../lib/motion";

const words = ["AI applications", "software", "automation"];

const highlights = [
  "Work directly with the developer who builds your solution",
  "AI, software and automation from a single team",
  "Live, hands-on training in Python, SQL, AI/ML and more",
];

const terminalLines = [
  { text: "Understand your workflow", delay: 0.9 },
  { text: "Design the right solution", delay: 1.5 },
  { text: "Build with AI, software and automation", delay: 2.1 },
  { text: "Launch, train and support", delay: 2.7 },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((n) => (n + 1) % words.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-2 to-bg pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Soft animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="blob-a absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="blob-b absolute top-44 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="container relative max-w-content">
        <motion.div
          className="grid gap-14 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger(0.1)}
        >
          <motion.div variants={fadeUp}>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-text-muted mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Now enrolling live batches · Chennai
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-text mb-6">
              Practical
              <span className="relative block h-[1.2em] overflow-hidden text-primary">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    className="absolute left-0 top-0 block whitespace-nowrap"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              for your business
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-xl mb-8">
              Chennai Coder builds AI applications, software and automation
              systems for startups and growing businesses, and trains the next
              generation of developers.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/917395981362"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <Link to="/training" className="btn-secondary">
                Explore courses
              </Link>
            </div>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="float-slow absolute -top-5 -left-3 z-10 hidden items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-card-hover sm:flex">
              <Star size={18} className="fill-amber-400 text-amber-400" />
              <div>
                <p className="text-sm font-semibold leading-none text-text">5.0 on Google</p>
                <p className="mt-1 text-[11px] leading-none text-text-faint">9 reviews</p>
              </div>
            </div>

            <div className="float-slower absolute -bottom-5 -right-3 z-10 hidden items-center gap-2.5 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-card-hover sm:flex">
              <Radio size={18} className="text-emerald-600" />
              <div>
                <p className="text-sm font-semibold leading-none text-text">Live coding classes</p>
                <p className="mt-1 text-[11px] leading-none text-text-faint">Batch or 1-to-1</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-text shadow-card-hover">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-400">chennai-coder: new project</span>
              </div>
              <div className="space-y-3 p-6 font-mono text-sm text-slate-300">
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <span className="text-cyan-300">$</span> chennai-coder start
                </motion.p>
                {terminalLines.map((line) => (
                  <motion.p
                    key={line.text}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: line.delay, duration: 0.4 }}
                  >
                    <span className="mr-2 text-emerald-400">✓</span>
                    {line.text}
                  </motion.p>
                ))}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                >
                  <span className="text-cyan-300">$</span>
                  <span className="caret ml-2 inline-block h-4 w-2 translate-y-0.5 bg-slate-300" />
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
