import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

const audiences = [
  {
    title: "Startups",
    description: "Turning an early-stage idea into working software without over-building.",
  },
  {
    title: "Small & growing businesses",
    description: "Practical software and automation that removes repetitive manual work.",
  },
  {
    title: "Founders",
    description: "A technical partner for the AI or software layer of a bigger idea.",
  },
  {
    title: "Students & developers",
    description: "Hands-on training in the languages and tools used to build the above.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="section-pad border-t border-border bg-surface-2/70">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Who we help</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Built for teams building something real
          </h2>
        </Reveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {audiences.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              className="border-l-2 border-primary pl-5"
            >
              <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
