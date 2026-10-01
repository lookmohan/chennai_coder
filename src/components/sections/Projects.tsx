import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Selected projects</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-4">
            Real projects, built and shipped
          </h1>
          <p className="text-text-muted leading-relaxed">
            Personal and open-source work spanning software development, AI/LLM
            applications, and data visualization — the same disciplines behind
            every client engagement.
          </p>
        </Reveal>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={fadeUp}>
              <TiltCard className="card flex flex-col h-full hover:border-primary hover:shadow-card-hover transition-colors">
                <span className="eyebrow mb-4">{project.type}</span>

                <h3 className="font-display text-xl font-semibold mb-3">{project.name}</h3>

                <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary text-sm !py-2.5 mt-auto"
                >
                  <Github size={16} />
                  View on GitHub
                </motion.a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
