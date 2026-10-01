import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { caseStudies } from "../../data/caseStudies";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

// Abstract, decorative dashboard graphics (not screenshots of the real projects).
function ArtBars() {
  const heights = [45, 70, 55, 85, 62, 92, 74];
  return (
    <div className="flex h-24 items-end gap-2">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t bg-primary/80"
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: i * 0.07, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function ArtHeat() {
  const cells = Array.from({ length: 24 }, (_, i) => ((i * 7) % 10) / 10);
  return (
    <div className="grid h-24 grid-cols-8 gap-1.5">
      {cells.map((v, i) => (
        <motion.div
          key={i}
          className="rounded bg-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 + v * 0.75 }}
          viewport={viewportOnce}
          transition={{ delay: i * 0.03, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

function DashboardArt({ variant }: { variant: number }) {
  return (
    <div aria-hidden className="mb-5 rounded-lg border border-border bg-surface-2 p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2 w-12 rounded bg-border" />
        <span className="h-2 w-8 rounded bg-border" />
        <span className="ml-auto h-2 w-5 rounded bg-primary/40" />
      </div>
      {variant % 2 === 0 ? <ArtBars /> : <ArtHeat />}
    </div>
  );
}

export default function WorkPreview() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Delivered for clients
            </h2>
          </div>
          <Link to="/work" className="btn-secondary text-sm !px-5 !py-2.5 w-fit shrink-0">
            View all work
          </Link>
        </Reveal>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={study.slug} variants={fadeUp}>
              <Link
                to="/work"
                className="card group flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover"
              >
                <DashboardArt variant={index} />
                <p className="eyebrow mb-3">{study.category}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">{study.summary}</p>
                <ul className="mt-auto mb-5 flex flex-wrap gap-2">
                  {study.stack.slice(0, 4).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read the case study
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
