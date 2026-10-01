import { usePageTitle } from "../hooks/usePageTitle";
import Hero from "../components/sections/Hero";
import WhatWeDo from "../components/sections/WhatWeDo";
import WhoWeHelp from "../components/sections/WhoWeHelp";
import WhyUs from "../components/sections/WhyUs";
import Process from "../components/sections/Process";
import Reviews from "../components/sections/Reviews";
import BrandBar from "../components/home/BrandBar";
import TechMarquee from "../components/home/TechMarquee";
import ServicesPreview from "../components/home/ServicesPreview";
import WorkPreview from "../components/home/WorkPreview";
import CourseFinder from "../components/home/CourseFinder";
import TrainingPreview from "../components/home/TrainingPreview";
import AboutPreview from "../components/home/AboutPreview";
import CTABand from "../components/home/CTABand";

export default function Home() {
  usePageTitle(
    "AI, Software & Automation Development",
    "Chennai Coder builds AI applications, software and automation systems for businesses and startups, and provides practical technical training."
  );

  return (
    <>
      <Hero />
      <BrandBar />
      <TechMarquee />
      <WhatWeDo />
      <ServicesPreview />
      <WorkPreview />
      <WhoWeHelp />
      <Process />
      <WhyUs />
      <CourseFinder />
      <TrainingPreview />
      <Reviews />
      <AboutPreview />
      <CTABand />
    </>
  );
}
