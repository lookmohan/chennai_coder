import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const steps = [
  { title: "Understand", description: "Learning the actual problem, constraints and goal before proposing anything." },
  { title: "Plan", description: "Scoping the right-sized solution — not over-building, not under-building." },
  { title: "Build", description: "Writing and shipping the solution in stages, with visibility along the way." },
  { title: "Test", description: "Checking the solution actually holds up before it reaches real use." },
  { title: "Deliver", description: "Handing over something that works, with the context needed to maintain it." },
];

export default function Process() {
  return (
    <section className="section-pad border-t border-border bg-surface-2/70">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            A straightforward process
          </h2>
        </Reveal>

        <motion.ol
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.15)}
        >
          {steps.map((step, i) => (
            <motion.li key={step.title} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-3">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.15 }}
                  className="font-display text-2xl font-semibold text-primary"
                >
                  {i + 1}
                </motion.span>
                <motion.div
                  className="h-px flex-1 bg-border origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
