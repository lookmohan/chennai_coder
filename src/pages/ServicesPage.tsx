import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import CTABand from "../components/home/CTABand";

export default function ServicesPage() {
  usePageTitle(
    "Services",
    "AI development, software development, automation and technical training from Chennai Coder."
  );

  return (
    <>
      <Breadcrumbs current="Services" />
      <Services />
      <Process />
      <CTABand />
    </>
  );
}
