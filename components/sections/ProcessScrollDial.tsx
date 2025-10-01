// /components/sections/ProcessScrollDial.tsx
"use client";

import React, { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export type Step = {
  id: string;
  index: number;     // 0..5
  title: string;
  blurb: string;     // 2–5 lines
  points?: string[]; // optional bullets, 2–4 items
};

type Props = {
  id?: string;
  heading?: string;
  subheading?: string;
  steps: Step[];
  accent?: string; // Tailwind gradient tokens: "from-amber-300 via-yellow-200 to-lime-300"
};

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Fallback bullets if none are provided. */
const DEFAULT_POINTS: Record<number, string[]> = {
  0: [
    "Clarify goals, success metrics, and guardrails",
    "Map constraints: budget, timeline, compliance",
    "Identify key users and primary use cases",
    "Surface risks early to de-risk later work",
  ],
  1: [
    "Write clear scope and acceptance criteria",
    "Milestones with owners and review cadence",
    "Delivery plan with resourcing and estimates",
    "Baseline roadmap and change-control policy",
  ],
  2: [
    "User journeys and screen flows",
    "Wireframes that lock information hierarchy",
    "Design tokens and component library",
    "Clickable prototype for fast validation",
  ],
  3: [
    "Iterate in sprints with weekly demos",
    "CI/CD, linting, and test coverage",
    "API contracts and typed clients",
    "Preview/staging environments for review",
  ],
  4: [
    "Data migration dry-runs and verification",
    "Security, performance, and accessibility checks",
    "Release plan with rollback procedure",
    "Observability: logs, metrics, alerts",
  ],
  5: [
    "SLAs/SLOs and on-call rotation",
    "Analytics dashboards tied to KPIs",
    "Backlog for improvements and experiments",
    "Quarterly roadmap refresh",
  ],
};

export default function ProcessScrollDial({
  id = "process",
  heading = "Get your app live in 6 clear steps.",
  subheading = "Minimal, predictable flow from alignment to operations. No fine print.",
  steps,
  accent = "from-amber-300 via-yellow-200 to-lime-300",
}: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const numRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const dotsRef = useRef<HTMLSpanElement[]>([]);

  // Ensure every step has bullets so the cards never feel empty.
  const sorted = useMemo(() => {
    return [...steps]
      .sort((a, b) => a.index - b.index)
      .slice(0, 6)
      .map((s) => ({
        ...s,
        points: s.points && s.points.length ? s.points : DEFAULT_POINTS[s.index] || [],
      }));
  }, [steps]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !cardsRef.current || !railRef.current) return;
    if (!sorted.length) return;
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(
        cardsRef.current!.querySelectorAll<HTMLElement>("[data-card]")
      );
      if (!cards.length) return;
      const LAST_STEP_ACTIVATION = 0.995;

      const measure = () => {
        const first = cards[0];
        const gap = parseFloat(getComputedStyle(cardsRef.current!).rowGap || "24");
        const h = first.getBoundingClientRect().height;
        return { stepY: h + gap };
      };

      const tick = () => {
        if (!numRef.current) return;
        gsap.fromTo(
          numRef.current,
          { yPercent: -25, opacity: 0.6, scale: 0.96 },
          { yPercent: 0, opacity: 1, scale: 1, duration: 0.22, ease: "power2" }
        );
      };

      const state = { t: 0 };

      const updateUI = () => {
        const lastIndex = sorted.length - 1;
        const normalized = lastIndex > 0 ? Math.min(1, state.t / lastIndex) : 1;
        let nearIndex = Math.round(state.t);
        if (lastIndex > 0 && nearIndex >= lastIndex && normalized <= LAST_STEP_ACTIVATION) {
          nearIndex = lastIndex - 1;
        }
        const activeIndex = lastIndex >= 0 ? Math.min(lastIndex, Math.max(0, nearIndex)) : 0;

        // Left number + ring
        if (numRef.current) numRef.current.textContent = String(activeIndex + 1).padStart(2, "0");
        if (ringRef.current) {
          const progressPct = Math.max(0, normalized * 100);
          ringRef.current.style.setProperty("--pct", `${progressPct}`);
        }

        // Move stack and style cards
        const { stepY } = measure();
        gsap.set(cardsRef.current, { y: -state.t * stepY });

        cards.forEach((el, i) => {
          const delta = i - state.t;
          // Fade and scale as it passes
          let opacity = 1;
          if (delta < 0) opacity = 1 - Math.min(1, Math.abs(delta)) * 0.85; // 1 -> 0.15
          else if (delta > 0) opacity = 1 - Math.min(1, delta) * 0.12;      // 1 -> 0.88
          const scale = 1 - Math.min(0.015, Math.max(0, Math.abs(delta) * 0.01));
          el.style.opacity = opacity.toFixed(3);
          el.style.transform = `translateZ(0) scale(${scale})`;
          const active = i === activeIndex;
          el.dataset.active = active ? "true" : "false";

          // animate bullets when becoming active
          const bullets = el.querySelectorAll<HTMLElement>("[data-bullet]");
          bullets.forEach((b, idx) => {
            if (active) {
              b.style.transition = "transform .35s ease, opacity .35s ease";
              b.style.transitionDelay = `${idx * 40}ms`;
              b.style.transform = "translateY(0)";
              b.style.opacity = "1";
            } else {
              b.style.transition = "none";
              b.style.transform = "translateY(6px)";
              b.style.opacity = "0.0";
            }
          });
        });

        // Legend dots
        dotsRef.current.forEach((dot, i) => (dot.dataset.active = i === activeIndex ? "true" : "false"));

        if (activeIndex !== activeIndexRef.current) {
          activeIndexRef.current = activeIndex;
          tick();
          if (location.hash !== `#step-${activeIndex + 1}`) {
            history.replaceState(null, "", `#step-${activeIndex + 1}`);
          }
        }
      };

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: "+=620%",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: (v) => {
              const s = Math.round(v * (sorted.length - 1));
              return s / (sorted.length - 1);
            },
            duration: 0.35,
            ease: "power1.inOut",
          },
          onRefresh: updateUI,
        },
      });

      tl.to(state, { t: sorted.length - 1, onUpdate: updateUI });
    }, sectionRef);

    return () => ctx.revert();
  }, [sorted]);

  // tilt only on active card
  useLayoutEffect(() => {
    const wrap = railRef.current;
    if (!wrap || prefersReduced()) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const dx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const dy = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      const inner = wrap.querySelector<HTMLElement>("[data-card][data-active='true'] .card-inner");
      if (!inner) return;
      inner.style.transform = `rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) translateZ(12px)`;
    };
    const reset = () => {
      const inner = wrap.querySelector<HTMLElement>("[data-card][data-active='true'] .card-inner");
      if (inner) inner.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)";
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", reset);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate bg-[#F8F7F3] text-zinc-900">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10 text-left">
          <p className="eyebrow text-sm text-neutral-500 mb-2">Process</p>
          <h2 className="h2 mb-3">{heading}</h2>
          <p className="mt-3 text-[var(--muted)] max-w-2xl">{subheading}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* LEFT: dial + legend */}
          <div className="md:col-span-5 sticky top-16 self-start">
            <div className="mx-auto w-[200px] aspect-square relative">
              <div
                ref={ringRef}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#eab308 calc(var(--pct,0) * 1%), #e5e7eb 0)",
                }}
              />
              <div className={["absolute inset-[10px] rounded-full bg-gradient-to-br", accent].join(" ")} />
              <div className="absolute inset-[24px] rounded-full border border-black/5 grid place-items-center backdrop-blur-md bg-white/65 supports-[backdrop-filter]:bg-white/45 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div ref={numRef} className="text-6xl font-black tabular-nums leading-none">01</div>
              </div>
              <div className="absolute -inset-2 rounded-full border border-black/10 opacity-40" />
            </div>

            <ol className="mx-auto mt-4 w-[240px] space-y-2 text-sm text-[var(--muted)]">
              {sorted.map((s, i) => (
                <li key={s.id} className="flex items-center gap-2">
                  <span
                    ref={(el) => { if (el) dotsRef.current[i] = el; }}
                    className="inline-flex size-2 rounded-full bg-zinc-300 data-[active=true]:bg-zinc-900 transition-colors"
                    data-active={i === 0 ? "true" : "false"}
                  />
                  <span className="tabular-nums w-6 text-zinc-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate">{s.title}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* RIGHT: stack panels */}
          <div className="md:col-span-7 flex justify-center">
            <div ref={railRef} className="relative">
              {/* peek masks only */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 from-[#F8F7F3] to-transparent bg-gradient-to-b z-20" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 from-[#F8F7F3] to-transparent bg-gradient-to-t z-20" />

              <div ref={cardsRef} className="relative grid grid-rows-1 gap-5" style={{ transform: "translateZ(0)" }}>
                {sorted.map((s, i) => (
                  <article
                    key={s.id}
                    data-card
                    data-active={i === 0 ? "true" : "false"}
                    className="relative w-[640px] h-[340px] max-w-full rounded-3xl bg-white border border-black/10 overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                    style={{ transform: "translateZ(0)" }}
                  >
                    {/* top brand rule that grows on active */}
                    <div className={`absolute left-0 right-1/3 top-0 h-[3px] bg-gradient-to-r ${accent} transition-all duration-300 data-[active=true]:right-0`} />

                    <div className="card-inner relative h-full p-6 md:p-8">
                      <h3 className="h3 mb-2 text-left">{s.title}</h3>
                      <p className="text-[var(--muted)] text-[16px] leading-relaxed max-w-[58ch] mb-3">
                        {s.blurb}
                      </p>

                      {/* Bullets always present (fallbacks apply) */}
                      <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-[15px] text-zinc-800">
                        {s.points!.slice(0, 6).map((p, idx) => (
                          <li
                            key={idx}
                            data-bullet
                            className="flex items-start gap-2 opacity-0 translate-y-[6px]"
                          >
                            <span className="mt-[7px] inline-block size-[6px] rounded-full bg-zinc-400" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* active emphasis */}
                    <style jsx>{`
                      [data-card][data-active="true"] {
                        box-shadow: 0 24px 48px rgba(0,0,0,0.14);
                        border-color: rgba(0,0,0,0.12);
                      }
                    `}</style>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
