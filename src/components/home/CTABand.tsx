import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeUp, viewportOnce } from "../../lib/motion";

export default function CTABand() {
  return (
    <section className="section-pad border-t border-border">
      <div className="container max-w-content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-2xl bg-text px-8 py-12 sm:px-14 sm:py-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-tight mb-3">
              Have a project or workflow in mind?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Tell us what you need. You'll hear back directly from the
              developer who would build it.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-slate-100"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/917395981362"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
