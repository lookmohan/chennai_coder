import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import About from "../components/sections/About";
import BusinessDetails from "../components/sections/BusinessDetails";
import WhyUs from "../components/sections/WhyUs";
import CTABand from "../components/home/CTABand";

export default function AboutPage() {
  usePageTitle(
    "About",
    "Chennai Coder is built around Mohanraj — AI Developer, Software Engineer and Programming Trainer based in Chennai."
  );

  return (
    <>
      <Breadcrumbs current="About" />
      <About />
      <BusinessDetails />
      <WhyUs />
      <CTABand />
    </>
  );
}
