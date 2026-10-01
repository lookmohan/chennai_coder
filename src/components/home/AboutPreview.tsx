import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { slideInLeft, slideInRight } from "../../lib/motion";

export default function AboutPreview() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <div className="grid gap-10 lg:grid-cols-[auto,1fr] items-center">
          <Reveal variants={slideInLeft}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/founder.jpg"
              alt="Mohanraj, founder of Chennai Coder"
              className="h-28 w-28 rounded-2xl object-cover border border-border shadow-card"
            />
          </Reveal>

          <Reveal variants={slideInRight} delay={0.1}>
            <p className="eyebrow mb-3">About</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight mb-3">
              Built around one developer, working directly with each business
            </h2>
            <p className="text-text-muted leading-relaxed max-w-2xl mb-5">
              Mohanraj — AI Developer, Software Engineer and Programming Trainer,
              based in Chennai.
            </p>
            <Link to="/about" className="text-primary font-medium hover:text-accent transition-colors">
              More about Chennai Coder →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
