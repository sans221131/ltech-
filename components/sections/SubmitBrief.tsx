"use client";

import { useState } from "react";

export default function SubmitBrief() {
  const [sent, setSent] = useState(false);

  return (
    <section id="submit-brief" className="section" aria-labelledby="brief-heading">
      <div className="section-inner">
        <p className="eyebrow">Start a project</p>
        <h2 id="brief-heading" className="h2 mt-3">Submit a brief</h2>

        {!sent ? (
          <form
            className="mt-6 grid gap-4 max-w-2xl"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <label className="grid gap-1">
              <span className="text-sm text-[var(--muted)]">What are you trying to build?</span>
              <input className="card p-3" required name="project" placeholder="One sentence" />
            </label>

            <label className="grid gap-1">
              <span className="text-sm text-[var(--muted)]">Desired outcomes</span>
              <textarea className="card p-3" required name="outcomes" rows={4} placeholder="Success looks like..." />
            </label>

            <div className="grid md:grid-cols-3 gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-[var(--muted)]">Timeline</span>
                <input className="card p-3" name="timeline" placeholder="e.g., 8–12 weeks" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-[var(--muted)]">Ballpark</span>
                <input className="card p-3" name="budget" placeholder="$25k+" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-[var(--muted)]">Contact email</span>
                <input className="card p-3" type="email" required name="email" placeholder="you@company.com" />
              </label>
            </div>

            <button className="btn btn-primary w-fit" type="submit">Send</button>
            <p className="text-[var(--muted)] text-sm">No spam. We email once to schedule a call.</p>
          </form>
        ) : (
          <div className="card p-6 mt-6 max-w-2xl">
            <div className="text-lg font-medium">Thanks — brief received.</div>
            <p className="mt-2 text-[var(--muted)]">We’ll reply with a calendar link and a few scoping questions.</p>
          </div>
        )}
      </div>
    </section>
  );
}
