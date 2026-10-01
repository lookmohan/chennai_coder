import { usePageTitle } from "../hooks/usePageTitle";
import Breadcrumbs from "../components/Breadcrumbs";
import Reveal from "../components/Reveal";

export default function TermsPage() {
  usePageTitle("Terms of Service", "Terms for working with Chennai Coder on development or training.");

  return (
    <>
      <Breadcrumbs current="Terms" />
      <section className="pt-10 pb-24 sm:pt-14">
        <div className="container max-w-3xl">
          <Reveal>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-8">Terms of Service</h1>

          <div className="space-y-8 text-text-muted leading-relaxed">
            <p>Last updated: September 2026</p>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Working together</h2>
              <p>
                Enquiries made through this site's contact form, email or WhatsApp
                are not a binding agreement on their own. Project scope, timeline,
                and pricing for development or training work are agreed separately,
                in writing, before work begins.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Website content</h2>
              <p>
                The content on this website — including project descriptions and
                the reviews shown — reflects real Chennai Coder work and genuine
                client/student feedback at the time of publishing. Course pricing
                is confirmed directly with Chennai Coder rather than published as
                a fixed rate on this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Intellectual property</h2>
              <p>
                Code, designs and written content on this site belong to Chennai
                Coder unless otherwise stated. Linked open-source projects are
                governed by the license stated in their own repositories.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-text mb-2">Contact</h2>
              <p>
                Questions about these terms can be sent to{" "}
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
