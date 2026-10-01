import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found", "The page you're looking for could not be found.", { noindex: true });

  return (
    <section className="pt-40 pb-28 sm:pt-48">
      <div className="container max-w-content text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
            This page doesn't exist
          </h1>
          <p className="text-text-muted mb-8">
            The page you're looking for may have moved or never existed.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-fit mx-auto">
            <Link to="/" className="btn-primary">
              Back to home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
