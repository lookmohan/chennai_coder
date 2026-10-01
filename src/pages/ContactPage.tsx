import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";

export default function ContactPage() {
  usePageTitle(
    "Contact",
    "Start a project with Chennai Coder — email, WhatsApp, or the enquiry form."
  );

  return (
    <>
      <Breadcrumbs current="Contact" />
      <Contact />
      <FAQ />
    </>
  );
}
