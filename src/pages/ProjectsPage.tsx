import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import Projects from "../components/sections/Projects";
import CTABand from "../components/home/CTABand";

export default function ProjectsPage() {
  usePageTitle(
    "Projects",
    "Real, verified Chennai Coder projects — software development, AI/LLM applications and data visualization."
  );

  return (
    <>
      <Breadcrumbs current="Projects" />
      <Projects />
      <CTABand />
    </>
  );
}
