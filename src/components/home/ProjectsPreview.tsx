import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../../data/projects";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export default function ProjectsPreview() {
  const featured = projects.slice(0, 2);

  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Selected projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Real projects, built and shipped
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-fit shrink-0">
            <Link to="/projects" className="btn-secondary text-sm !px-5 !py-2.5">
              View all projects
            </Link>
          </motion.div>
        </Reveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {featured.map((project) => (
            <motion.div key={project.name} variants={fadeUp}>
              <TiltCard className="card h-full hover:border-primary hover:shadow-card-hover transition-colors">
                <span className="eyebrow mb-4 block">{project.type}</span>
                <h3 className="font-display text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm !py-2.5"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
