import { ExternalLink, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";

// Details taken from the Udyam registration record. Personal fields on the
// certificate (gender, social category, phone) are intentionally not shown.
const details = [
  { label: "Business name", value: "Chennai Coder" },
  { label: "Organisation type", value: "Proprietorship" },
  { label: "Udyam registration no.", value: "UDYAM-TN-02-0493357" },
  { label: "Enterprise classification", value: "Micro enterprise" },
  { label: "Registered on", value: "29 July 2026" },
  { label: "Registered activity", value: "Computer programming, consultancy and related activities" },
];

export default function BusinessDetails() {
  return (
    <section className="section-pad border-t border-border bg-surface-2/70">
      <div className="container max-w-content">
        <Reveal className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">Business details</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
            A registered Indian business
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck size={20} />
              </span>
              <p className="font-semibold text-text">
                Registered under Udyam (MSME), Government of India
              </p>
            </div>

            <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-text-faint mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium text-text">{item.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://udyamregistration.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dim transition-colors"
            >
              Verify on the official Udyam portal (Print/Verify)
              <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
