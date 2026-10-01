import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import Reveal from "../components/Reveal";

export default function PrivacyPage() {
  usePageTitle("Privacy Policy", "How Chennai Coder handles information submitted through this website.");

  return (
    <>
      <Breadcrumbs current="Privacy Policy" />
      <section className="pt-10 pb-24 sm:pt-14">
        <div className="container max-w-3xl">
          <Reveal>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-text-muted leading-relaxed">
            <p>Last updated: September 2026</p>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">What this site collects</h2>
              <p>
                This website does not use tracking cookies or third-party analytics.
                The contact form on this site does not submit data to a server — it
                opens WhatsApp with your message pre-filled, and the enquiry is
                sent directly from your own WhatsApp account to Chennai Coder's
                number. Nothing you type into the form is stored by this website
                itself.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Information sent by email or WhatsApp</h2>
              <p>
                Any information you send directly — by email, WhatsApp, or the
                contact form — is used only to respond to your enquiry and, where
                a project or course goes ahead, to deliver that work. It is not
                sold or shared with third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Third-party links</h2>
              <p>
                This site links out to GitHub, LinkedIn, Instagram and WhatsApp.
                Each of those services has its own privacy policy, which governs
                any information you share there.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a href="mailto:chennaicoder.support@gmail.com" className="text-primary hover:text-accent">
                  chennaicoder.support@gmail.com
                </a>.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
