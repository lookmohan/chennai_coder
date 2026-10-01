import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import { fadeUp, stagger, viewportOnce } from "../../lib/motion";

export default function ServicesPreview() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Four ways Chennai Coder can help
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-fit shrink-0">
            <Link to="/services" className="btn-secondary text-sm !px-5 !py-2.5">
              View all services
            </Link>
          </motion.div>
        </Reveal>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeUp}>
                <TiltCard className="h-full">
                  <Link to="/services" className="card block h-full hover:border-primary hover:shadow-card-hover transition-colors">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      className="h-10 w-10 rounded-lg bg-brand-gradient flex items-center justify-center mb-4"
                    >
                      <Icon size={20} className="text-white" strokeWidth={2.25} />
                    </motion.div>
                    <h3 className="font-display font-semibold mb-1">{service.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
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
