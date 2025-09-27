const logos = [
  { name: "Arcline", svg: "A" },
  { name: "Nimbus", svg: "N" },
  { name: "Quartz", svg: "Q" },
  { name: "Horizon", svg: "H" },
  { name: "Vertex", svg: "V" },
  { name: "Slate", svg: "S" },
];

export default function ClientSection() {
  return (
    <section className="section" aria-labelledby="clients-heading">
      <div className="section-inner">
        <p className="eyebrow">Selected clients</p>
        <h2 id="clients-heading" className="h2 mt-3">Trusted by teams that actually ship</h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {logos.map((l) => (
            <div key={l.name} className="card h-20 flex items-center justify-center text-2xl font-semibold">
              <span aria-label={l.name} title={l.name}>{l.svg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
