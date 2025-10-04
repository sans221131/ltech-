// /components/sections/ProcessScrollDial.tsx
"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ---------------- Types & defaults (kept) ---------------- */
export type Step = {
  id: string;
  index: number;      // 0..5
  title: string;
  blurb: string;      // 2–5 lines
  points?: string[];  // optional bullets, 2–4 items
};

export type Props = {
  id?: string;
  heading?: string;
  subheading?: string;
  steps: Step[];
  accent?: string;
};

export const DEFAULT_HEADING = "Get your app live in 6 clear steps.";
export const DEFAULT_SUBHEADING =
  "Minimal, predictable flow from alignment to operations. No fine print.";

export const PROCESS_DEFAULT_POINTS: Record<number, string[]> = {
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

export function normalizeSteps(steps: Step[]): Step[] {
  return [...steps]
    .sort((a, b) => a.index - b.index)
    .slice(0, 6)
    .map((s) => ({
      ...s,
      points:
        s.points && s.points.length ? s.points : PROCESS_DEFAULT_POINTS[s.index] || [],
    }));
}



/* ---------------- Curly Arrow Component ---------------- */
function CurlyArrow({ 
  direction = "down-right",
  className = "" 
}: { 
  direction?: "down-right" | "down-left";
  className?: string;
}) {
  return (
    <img
      src="/curved-arrow-with-broken-line.svg"
      alt=""
      aria-hidden="true"
      className={`${className} ${direction === "down-left" ? "-scale-x-100" : ""} opacity-40`}
    />
  );
}

/* ---------------- Layout ---------------- */
export default function ProcessScrollDial({
  id = "process",
  heading = DEFAULT_HEADING,
  subheading = DEFAULT_SUBHEADING,
  steps,
}: Props) {
  const items = normalizeSteps(steps);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const ctx = gsap.context(() => {
      // Animate header on scroll into view
      gsap.from(header.children, {
        scrollTrigger: {
          trigger: header,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
      });

      // Animate each step
      const steps = section.querySelectorAll("[data-step]");
      steps.forEach((step, i) => {
        const isEven = i % 2 === 0;
        const number = step.querySelector("[data-number]");
        const card = step.querySelector("[data-card]");
        const arrow = step.querySelector("[data-arrow]");

        // Number animation - scale and fade in
        gsap.from(number, {
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
            end: "top 40%",
            scrub: 1,
          },
          scale: 0.5,
          opacity: 0,
          rotation: isEven ? -15 : 15,
        });

        // Card animation - slide and fade from side
        gsap.from(card, {
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            end: "top 35%",
            scrub: 1,
          },
          x: isEven ? -100 : 100,
          opacity: 0,
          scale: 0.9,
        });

        // Arrow animation - draw in
        if (arrow) {
          gsap.from(arrow, {
            scrollTrigger: {
              trigger: arrow,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
            opacity: 0,
            scale: 0.8,
            rotation: isEven ? -20 : 20,
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className="relative isolate overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 20%, rgba(64, 64, 64, 0.04) 0%, var(--bg) 50%)"
      }}
    >
      {/* Animated background elements */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(64, 64, 64, 0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(64, 64, 64, 0.06), transparent 40%)"
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <header ref={headerRef} className="mb-12 md:mb-16 text-center">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="h2 mt-2 mb-6">{heading}</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg leading-relaxed">{subheading}</p>
        </header>

        <div className="relative">
          {/* Progress line - centered on all screens */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent -translate-x-1/2"
            aria-hidden
          />

          {items.map((s, i) => {
            const isEven = i % 2 === 0;
            const isLast = i === items.length - 1;
            
            return (
              <div key={s.id} data-step className="relative mb-12 md:mb-20">
                {/* Unified layout for mobile and desktop */}
                <div className={`flex items-start gap-6 md:gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Number with circle - aligned to center line */}
                  <div className="flex-shrink-0 relative">
                    <div 
                      data-number
                      className="relative inline-block"
                    >
                      {/* Circular indicator on line */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-lg z-0" />
                      <span className="relative z-10 inline-block text-4xl md:text-7xl font-black text-[var(--fg)] leading-none select-none w-16 md:w-20 text-center">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div data-card className="flex-1 max-w-[500px]">
                    <StepCard step={s} align={isEven ? "left" : "right"} />
                  </div>
                </div>

                {/* Curly arrow - alternating direction */}
                {!isLast && (
                  <div 
                    data-arrow
                    className="relative w-full flex justify-center py-6 md:py-8"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32">
                      <CurlyArrow 
                        direction={isEven ? "down-right" : "down-left"} 
                        className="w-full h-full opacity-40" 
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  align = "right",
  className = "",
}: {
  step: Step;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <article
      className={[
        "group w-full bg-[var(--card)] rounded-3xl border border-[var(--border)]",
        "shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
        "p-8 md:p-10 transition-all duration-500",
        "hover:scale-[1.02] hover:border-[var(--accent)]",
        className,
      ].join(" ")}
    >
      {/* Step title with accent */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-8 bg-[var(--accent)] rounded-full" />
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
          {step.title}
        </h3>
      </div>
      
      <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed mb-6">
        {step.blurb}
      </p>
      
      {!!step.points?.length && (
        <div className="border-t border-[var(--border)] pt-6 mt-6">
          <p className="text-xs font-bold text-[var(--fg)] mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="w-6 h-px bg-[var(--accent)]" />
            Deliverables
          </p>
          <ul className="text-sm md:text-base text-[var(--fg)] space-y-3">
            {step.points.slice(0, 4).map((p, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <span className="mt-1.5 inline-flex w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
