"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  id?: string;
  eyebrow?: string;
  lines?: [string, string, string];
  accentClass?: string;
};

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TeamReliability({
  id = "team-reliability",
  eyebrow = "Team",
  lines = [
    "Quiet pros. Fewer promises, more commits.",
    "Boringly reliable: deadlines met, alerts silent.",
    "They make chaos look scheduled."
  ],
  accentClass = "from-[#F4C3C2]/50 via-transparent to-transparent"
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-line]");
    const mm = gsap.matchMedia();

    // hard-set initial state to avoid FOUC and ensure we see the stagger
    gsap.set(items, { autoAlpha: 0, y: 28 });

    if (prefersReduced()) {
      gsap.set(items, { autoAlpha: 1, y: 0 });
      return;
    }

    mm.add("(min-width: 1px)", () => {
      const ctx = gsap.context(() => {
        // clear prior triggers if this hot-reloads
        ScrollTrigger.getAll().forEach(t => {
          if (t.trigger === el) t.kill();
        });

        gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: el,
            // earlier start and clear pinning nonsense
            start: "top 80%",   // reveal well before fully in view
            end: "bottom 20%",
            once: true,
            // get rid of race conditions across mobile browsers
            anticipatePin: 1,
            fastScrollEnd: true
          }
        })
        .to(items, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.18
        });
      }, el);

      // keep ScrollTrigger honest on resizes and font swaps
      const ro = new ResizeObserver(() => ScrollTrigger.refresh());
      ro.observe(el);

      return () => {
        ro.disconnect();
        mm.revert();
        ctx.revert();
      };
    });
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      aria-label="Boringly reliable team"
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden bg-[var(--bg)] text-[var(--fg)]"
    >
      {/* background polish */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -10%, rgba(234,179,8,0.08) 0%, rgba(234,179,8,0.03) 35%, transparent 70%), radial-gradient(800px 500px at 90% 90%, rgba(0,0,0,0.02), transparent 60%)"
        }}
      />

      {/* soft inner vignette */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-[48px] blur-3xl opacity-30 bg-gradient-to-b from-amber-200/20 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 py-16">
        <p className="eyebrow mb-8 text-sm text-[var(--muted)]">
          {eyebrow}
        </p>

        {/* Big copy block */}
        <div className="space-y-3 leading-[0.94] font-black tracking-[-0.02em]">
          <h2 data-line className="h1 text-[clamp(2.5rem,7vw,7rem)] text-left">
            {lines[0]}
          </h2>
          <p data-line className="h1 text-[clamp(2.5rem,7vw,7rem)] text-left">
            {lines[1]}
          </p>
          <p data-line className="h1 text-[clamp(2.5rem,7vw,7rem)] text-left">
            {lines[2]}
          </p>
        </div>

        {/* understated caption line */}
        <div className="mt-12 max-w-xl text-[16px] text-[var(--muted)]">
          <span className="inline-flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--border)]" />
            We keep it simple: ship, repeat.
          </span>
        </div>
      </div>

      {/* corner bloom for depth */}
      <div
        aria-hidden
        className="absolute right-[-10%] bottom-[-20%] size-[48vmin] rounded-full blur-3xl opacity-15 bg-gradient-to-br from-amber-300 to-lime-300"
      />
    </section>
  );
}
