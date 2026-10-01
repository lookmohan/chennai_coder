import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export default function Services() {
  return (
    <section id="services" className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Services</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            Four ways Chennai Coder can help
          </h1>
        </Reveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.12)}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <TiltCard className="card h-full hover:shadow-card-hover hover:border-primary transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    className="h-11 w-11 rounded-lg bg-brand-gradient flex items-center justify-center mb-5"
                  >
                    <Icon size={22} className="text-white" strokeWidth={2.25} />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-5">{service.description}</p>
                  <Link
                    to="/contact"
                    className="text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Get in touch →
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
