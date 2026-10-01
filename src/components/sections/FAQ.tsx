import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "../Reveal";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const faqs = [
  {
    q: "What kind of AI development does Chennai Coder do?",
    a: "Practical, applied AI work — LLM-based agents, AI-powered application features, and data-driven tools built for a specific business need rather than generic AI add-ons.",
  },
  {
    q: "Do you take on software projects without an AI component?",
    a: "Yes. Software development and automation are offered on their own, independent of AI work.",
  },
  {
    q: "How are projects scoped and priced?",
    a: "Every project is scoped individually. Share what you need and you'll get a straight answer on approach, timeline and cost before any work begins.",
  },
  {
    q: "Do you offer one-on-one technical training?",
    a: "Yes, alongside client project work. Reach out with the course you're interested in and your current level.",
  },
  {
    q: "How do I start a project?",
    a: "Use the contact form or WhatsApp below with a short description of what you need — you'll hear back directly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Common questions
          </h2>
        </Reveal>

        <motion.div
          className="max-w-3xl divide-y divide-border border-y border-border"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.06)}
        >
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={item.q} variants={fadeUp}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={18} className="shrink-0 text-text-muted" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-muted leading-relaxed pb-5 pr-8">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
