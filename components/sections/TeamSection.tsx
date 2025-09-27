const team = [
  { name: "Naeem", role: "Principal Engineer", note: "Systems & Architecture" },
  { name: "A. Khan", role: "Frontend Lead", note: "Motion & DX" },
  { name: "R. Iyer", role: "Data Lead", note: "Pipelines & Stores" },
  { name: "S. Mehra", role: "Design", note: "Systems & A11y" },
];

export default function TeamSection() {
  return (
    <section className="section" aria-labelledby="team-heading">
      <div className="section-inner">
        <p className="eyebrow">Team</p>
        <h2 id="team-heading" className="h2 mt-3">People who like boring reliability</h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map(m => (
            <div key={m.name} className="card p-5">
              <div className="h-24 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
                <span aria-hidden className="text-2xl">{m.name[0]}</span>
              </div>
              <div className="mt-4 font-medium">{m.name}</div>
              <div className="text-sm text-[var(--muted)]">{m.role}</div>
              <div className="mt-1 text-sm">{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
