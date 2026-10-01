import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Reveal from "../Reveal";

// Real Google reviews for Chennai Coder — names and quotes as given,
// nothing invented. Reviews with a trailing "… More" on Google are
// trimmed to their last complete sentence rather than continued.
const reviews = [
  {
    name: "Cutie Girl",
    text: "The teacher is very friendly and explains the concepts clearly. The classes are easy to understand, and all my doubts are explained patiently. Overall, it's a great learning experience.",
  },
  {
    name: "Madhu Madhu1529",
    text: "Thanks for teaching important coding methods and lots of information 🙏✨️🫶 sir.",
  },
  {
    name: "AJAI KRISHNA JS",
    text: "Great mentor who makes students understand the concept very well with examples easily!",
  },
  {
    name: "Dhosith.S",
    text: "Chennai Coder is an excellent institute for anyone looking to build a strong foundation in computer science and programming. As a student here, I had a great learning experience.",
  },
  {
    name: "Bhagavath 2008",
    text: "Satisfied",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number, dir: number) {
    setDirection(dir);
    setIndex((next + reviews.length) % reviews.length);
  }

  const current = reviews[index];

  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-4">
          <p className="eyebrow mb-3">Genuine reviews</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
            What students say
          </h2>
        </Reveal>

        <div className="flex items-center gap-2 mb-10">
          <div className="flex text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-text-muted">5.0 · 9 Google reviews</span>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(index + 1, 1);
                  else if (info.offset.x > 60) go(index - 1, -1);
                }}
                initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card text-center py-12 px-8 sm:px-14"
              >
                <Quote className="mx-auto mb-5 text-primary/30" size={32} />
                <blockquote className="text-lg text-text leading-relaxed mb-6">
                  "{current.text}"
                </blockquote>
                <figcaption className="font-display font-medium text-sm text-text-muted">
                  {current.name}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous review"
            onClick={() => go(index - 1, -1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-11 w-11 items-center justify-center rounded-full border border-border bg-surface shadow-card hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next review"
            onClick={() => go(index + 1, 1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-11 w-11 items-center justify-center rounded-full border border-border bg-surface shadow-card hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            aria-label="Previous review"
            onClick={() => go(index - 1, -1)}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-surface"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next review"
            onClick={() => go(index + 1, 1)}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-border bg-surface"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center justify-center mt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className="p-2"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
