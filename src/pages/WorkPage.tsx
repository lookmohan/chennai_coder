import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import CaseStudies from "../components/sections/CaseStudies";
import CTABand from "../components/home/CTABand";

export default function WorkPage() {
  usePageTitle(
    "Work",
    "Selected client projects from Chennai Coder: an industrial workforce dashboard and an end-to-end IMDb data pipeline, built with Python and Streamlit."
  );

  return (
    <>
      <Breadcrumbs current="Work" />
      <CaseStudies />
      <CTABand />
    </>
  );
}
