import { motion } from "framer-motion";
import { courses } from "../../data/training";
import { caseStudies } from "../../data/caseStudies";
import CountUp from "../CountUp";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

// Only facts that are real today. Add client counts, years in business, etc.
// here once you have verified numbers.
type Stat = { label: string; to?: number; decimals?: number; text?: string };

const stats: Stat[] = [
  { to: caseStudies.length, label: "Client projects delivered" },
  { to: 5, decimals: 1, label: "Google rating · 9 reviews" },
  { to: courses.length, label: "Live courses" },
  { text: "Udyam", label: "Registered MSME, Chennai" },
];

export default function BrandBar() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container max-w-content">
        <motion.dl
          className="grid grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="px-4 py-7 sm:px-8 text-center border-l border-border first:border-l-0 max-lg:odd:border-l-0"
            >
              <dt className="font-display text-2xl sm:text-3xl font-bold text-primary">
                {stat.to !== undefined ? (
                  <CountUp to={stat.to} decimals={stat.decimals ?? 0} />
                ) : (
                  stat.text
                )}
              </dt>
              <dd className="mt-1 text-xs sm:text-sm text-text-muted">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
