import type { ReactNode } from "react";

// Previously a 3D mouse-tilt card. Kept as a thin wrapper so existing
// imports keep working; the tilt was removed for a calmer, more
// professional feel.
export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
