import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const reasons = [
  {
    title: "Practical over theoretical",
    description:
      "Solutions built to actually run in a business, not to look impressive in a demo.",
  },
  {
    title: "AI and software, together",
    description:
      "Comfortable across the LLM/AI layer and the software engineering underneath it.",
  },
  {
    title: "Automation-first thinking",
    description:
      "Looking for the repetitive, manual step first — then deciding if software should replace it.",
  },
  {
    title: "Teaches what it builds",
    description:
      "The same developer who ships the code also teaches it — Python, SQL, AI/ML and more.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Why Chennai Coder</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            A practical, hands-on approach
          </h2>
        </Reveal>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {reasons.map((r) => (
            <motion.div key={r.title} variants={fadeUp}>
              <h3 className="font-display font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-text-muted leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
