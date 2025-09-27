export const services = [
  {
    name: "Custom Platforms",
    scope: "B2B dashboards, workflows, multi-tenant",
    floor: "Starts ~ $25k",
    tech: "Next.js, Postgres, Workers, Drizzle",
  },
  {
    name: "Edge APIs",
    scope: "Low-latency, typed, cache-aware",
    floor: "Starts ~ $15k",
    tech: "tRPC/HTTP, KV/Cache, Observability",
  },
  {
    name: "Data/ETL",
    scope: "Pipelines, warehousing, governance",
    floor: "Starts ~ $18k",
    tech: "dbt, Airflow-lite, S3-compatible",
  },
  {
    name: "AI Systems",
    scope: "Retrieval, tools, evals, guardrails",
    floor: "Starts ~ $30k",
    tech: "RAG, vector DB, streaming UIs",
  },
  {
    name: "Performance Pass",
    scope: "Budgets, profiling, regressions",
    floor: "Starts ~ $8k",
    tech: "Lighthouse CI, tracing, APM",
  },
  {
    name: "Design Systems",
    scope: "Tokens, theming, motion rules",
    floor: "Starts ~ $12k",
    tech: "Tailwind tokens, shadcn UI",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="section-inner">
        <p className="eyebrow">Services</p>
        <h2 id="services-heading" className="h2 mt-3">Ways we plug into your roadmap</h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => (
            <article key={s.name} className="card p-6">
              <h3 className="text-lg font-medium">{s.name}</h3>
              <p className="mt-2 text-[var(--muted)]">{s.scope}</p>
              <div className="mt-4 text-sm">
                <div><span className="text-[var(--muted)]">Typical floor:</span> {s.floor}</div>
                <div className="mt-1"><span className="text-[var(--muted)]">Tech:</span> {s.tech}</div>
              </div>
              <a href="#submit-brief" className="btn btn-ghost mt-6 w-full">Discuss this</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
