export default function AboutUs() {
  return (
    <section className="section" aria-labelledby="about-heading" id="about">
      <div className="section-inner">
        <p className="eyebrow">About us</p>
        <h2 id="about-heading" className="h2 mt-3">Principles over fashion</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <p className="text-[var(--muted)]">
            We’re architecture-first. We design domain models before pixels, and we choose boring tech that scales.
            Delivery cadence is honest, observability is non-negotiable, and performance is budgeted like money.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Typed contracts, trunk-based flow, CI with quality gates</li>
            <li>• Environments and data hygiene you aren’t embarrassed by</li>
            <li>• Accessibility treated as a baseline, not an upsell</li>
            <li>• Motion with taste, behind a reduced-motion switch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
