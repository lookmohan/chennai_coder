import { motion, type Variants, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "../lib/motion";

export default function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "li";
}) {
  const Component = as === "li" ? motion.li : motion.div;

  // Merge delay into the variant's own transition (variant-level transitions
  // take priority over a top-level `transition` prop in Framer Motion, so
  // the delay has to live here to actually apply).
  const visible = variants.visible as TargetAndTransition | undefined;
  const effectiveVariants: Variants =
    delay && visible
      ? {
          hidden: variants.hidden,
          visible: { ...visible, transition: { ...visible.transition, delay } },
        }
      : variants;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={effectiveVariants}
    >
      {children}
    </Component>
  );
}
