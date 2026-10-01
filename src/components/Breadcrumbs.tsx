import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Breadcrumb"
      className="pt-24 sm:pt-28"
    >
      <div className="container max-w-content flex items-center gap-2 text-sm text-text-faint">
        <Link to="/" className="hover:text-text-muted">Home</Link>
        <ChevronRight size={14} />
        <span className="text-text-muted">{current}</span>
      </div>
    </motion.nav>
  );
}
