import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import Training from "../components/sections/Training";
import CTABand from "../components/home/CTABand";

export default function TrainingPage() {
  usePageTitle(
    "Training",
    "Live, practical coding courses from Chennai Coder: Python, SQL, DSA, Web Development, FastAPI, Machine Learning, Computer Vision and LLM Application Development. Batch and 1-to-1 options, with Git & GitHub included."
  );

  return (
    <>
      <Breadcrumbs current="Training" />
      <Training />
      <CTABand />
    </>
  );
}
