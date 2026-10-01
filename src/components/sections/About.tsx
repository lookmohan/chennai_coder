import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { slideInLeft, slideInRight } from "../../lib/motion";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-20 sm:pt-14 sm:pb-16">
      <div className="container max-w-content">
        <div className="grid gap-12 lg:grid-cols-[auto,1fr] items-start">
          <Reveal variants={slideInLeft}>
            <motion.img
              whileHover={{ scale: 1.03 }}
              src="/founder.jpg"
              alt="Mohanraj, founder of Chennai Coder"
              className="h-40 w-40 rounded-2xl object-cover border border-border shadow-card"
            />
          </Reveal>

          <Reveal variants={slideInRight} delay={0.1}>
            <p className="eyebrow mb-3">About</p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-2">
              Mohanraj
            </h1>
            <p className="text-primary font-medium mb-6">
              AI Developer · Python Trainer · Software Engineer
            </p>
            <p className="text-text-muted leading-relaxed max-w-2xl">
              Chennai Coder is built around one developer working directly with
              each business — building AI, software and automation solutions,
              and teaching the fundamentals behind them to students and working
              developers in Chennai.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
