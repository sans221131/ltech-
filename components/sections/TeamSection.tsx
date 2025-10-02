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
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden text-[var(--fg)]"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(64, 64, 64, 0.08) 0%, var(--bg) 60%)"
      }}
    >
      {/* Full background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(64, 64, 64, 0.12), transparent 70%)"
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20 md:py-24">
        <p className="eyebrow mb-10 md:mb-12">
          {eyebrow}
        </p>

        {/* Big copy block */}
        <div className="space-y-2 md:space-y-3">
          <h2 data-line className="text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--fg)]">
            {lines[0]}
          </h2>
          <p data-line className="text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-[var(--fg)] opacity-90">
            {lines[1]}
          </p>
          <p data-line className="text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-[var(--fg)] opacity-90">
            {lines[2]}
          </p>
        </div>

        {/* understated caption line */}
        <div className="mt-16 md:mt-20 max-w-xl">
          <p className="flex items-center gap-4 text-base md:text-lg text-[var(--muted)]">
            <span className="h-px w-16 bg-[var(--muted)] opacity-40" />
            <span>We keep it simple: ship, repeat.</span>
          </p>
        </div>
      </div>

    </section>
  );
}
