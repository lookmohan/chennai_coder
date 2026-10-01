import Reveal from "../Reveal";

export default function WhatWeDo() {
  return (
    <section className="section-pad">
      <div className="container max-w-content">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 leading-tight">
            What Chennai Coder does
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Chennai Coder helps businesses turn ideas and repetitive workflows into
            practical software, AI-powered solutions and automation systems —
            built by a developer who also teaches the fundamentals behind them.
            That combination means solutions grounded in how things actually work,
            not just how they demo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
