import { motion } from "framer-motion";
import { Check, Github } from "lucide-react";
import Reveal from "../Reveal";
import { caseStudies } from "../../data/caseStudies";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export default function CaseStudies() {
  return (
    <section id="work" className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Work</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
            Delivered client projects
          </h1>
          <p className="text-text-muted leading-relaxed">
            Data products built end to end, from raw data to a working
            dashboard the client can use.
          </p>
        </Reveal>

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.slug}
              variants={fadeUp}
              className="card !p-0 overflow-hidden"
            >
              <div className="grid lg:grid-cols-[1.25fr,1fr]">
                <div className="p-6 sm:p-10">
                  <p className="eyebrow mb-3">{study.category}</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight mb-3">
                    {study.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-8">{study.summary}</p>

                  <dl className="space-y-6 mb-8">
                    <div>
                      <dt className="text-sm font-semibold text-text mb-1">The challenge</dt>
                      <dd className="text-sm text-text-muted leading-relaxed">{study.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-text mb-1">What we built</dt>
                      <dd className="text-sm text-text-muted leading-relaxed">{study.solution}</dd>
                    </div>
                  </dl>

                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm !px-5 !py-2.5"
                  >
                    <Github size={16} />
                    View source code
                  </a>
                </div>

                <div className="bg-surface-2 border-t lg:border-t-0 lg:border-l border-border p-6 sm:p-10">
                  <h3 className="text-sm font-semibold text-text mb-4">Key features</h3>
                  <ul className="space-y-3 mb-8">
                    {study.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-text-muted">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-sm font-semibold text-text mb-3">Built with</h3>
                  <ul className="flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-white px-2.5 py-1 text-xs font-medium text-text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
