const pillars = [
  { t: "Architect", d: "Domain-first models, clear boundaries, design for change." },
  { t: "Build", d: "Edge APIs, typed contracts, testable pipelines, motion with budgets." },
  { t: "Scale", d: "Resilient data layers, caching strategy, observability wired in." },
  { t: "AI systems", d: "Use ML where it earns its keep. Guardrails, evals, ergonomics." },
];

export default function WhatWeDo() {
  return (
    <section className="section" aria-labelledby="what-heading">
      <div className="section-inner">
        <p className="eyebrow">What we do</p>
        <h2 id="what-heading" className="h2 mt-3">Architect. Build. Scale.</h2>
        <p className="mt-4 max-w-3xl text-[var(--muted)]">
          We ship platforms that survive real traffic. Clean domain models, edge-first APIs, and data that won’t cry during a spike.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {pillars.map(p => (
            <div key={p.t} className="card p-6">
              <div className="text-lg font-medium">{p.t}</div>
              <p className="mt-2 text-[var(--muted)]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
