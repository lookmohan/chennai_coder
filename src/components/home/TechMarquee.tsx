// Technologies used on our projects and taught in our courses.
const tech = [
  "Python",
  "FastAPI",
  "SQL",
  "Machine Learning",
  "OpenCV",
  "LLM Applications",
  "Streamlit",
  "Pandas",
  "Plotly",
  "Selenium",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Git & GitHub",
];

export default function TechMarquee() {
  // The list is rendered twice so the loop is seamless.
  const loop = [...tech, ...tech];

  return (
    <section aria-label="Technologies we work with" className="border-b border-border bg-surface-2/70 py-8">
      <div className="container max-w-content">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-faint">
          Technologies we work with
        </p>
        <div
          className="marquee overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <ul className="marquee-track flex w-max gap-3">
            {loop.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= tech.length}
                className="whitespace-nowrap rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-text-muted shadow-card"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
