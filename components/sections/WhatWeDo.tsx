"use client";

import { useLayoutEffect, useRef, useState } from "react";
import ProblemToPatternDial, { DetailPanel } from "@/components/sections/ProblemToPatternDial";
import { PROBLEM_PATTERNS } from "@/lib/whatwedo/problems";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  paragraph?: string;
};

const clamp = (v: number, min: number, max: number) => (v < min ? min : v > max ? max : v);

export default function WhatWeDo({
  id = "what-we-do",
  eyebrow = "What we do",
  heading = "Architect. Build. Scale.",
  paragraph = "We architect, build, and scale custom platforms that survive traffic: clean domain models, edge-first APIs, resilient data layers, and motion that respects performance budgets. The result is boringly reliable software that still feels premium.",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const dialRef = useRef<HTMLDivElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  // Fractional progress for smooth dial motion (can update very frequently)
  const [dialFloat, setDialFloat] = useState(0);

  // Active index for the left detail panel (should update rarely)
  const [activeIndex, setActiveIndex] = useState(0);

  // rAF throttle so the dialFloat re-render doesn't fire every gsap tick
  const rafLock = useRef(false);
  const pendingFloat = useRef(0);
  const lastActive = useRef(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const headingEl = headingRef.current;
    if (!root || !stage || !headingEl) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const eyebrowEl = headingEl.querySelector(".wwd-eyebrow") as HTMLElement | null;
      const titleEl = headingEl.querySelector(".wwd-heading") as HTMLElement | null;
      const paraEl = headingEl.querySelector(".wwd-paragraph") as HTMLElement | null;

      const fadeTargets = [eyebrowEl, titleEl, paraEl].filter(Boolean) as HTMLElement[];
      const dialNode = dialRef.current;
      const detailNode = detailRef.current;

      if (prefersReduced) {
        gsap.set([headingEl, dialNode, detailNode].filter(Boolean), { opacity: 1, clearProps: "all" });
        return;
      }

      gsap.set(fadeTargets, { opacity: 0, y: 30 });
      if (dialNode) gsap.set(dialNode, { opacity: 0, y: 40 });
      if (detailNode) gsap.set(detailNode, { opacity: 0, x: -30 });

      const total = Math.max(1, PROBLEM_PATTERNS.length);
      const speedExp = 1.6;

      const updateFromScroll = (progress: number) => {
        // Start rotation slightly before the dial/detail are fully in
        const start = 0.65; // set to 0.55 if you want it after the fade
        const dialProgress01 = clamp((progress - start) / (1 - start), 0, 1);
        const adj = Math.pow(dialProgress01, speedExp);
        const floatIndex = adj * (total - 1);

        // Queue dial float for a throttled re-render
        pendingFloat.current = floatIndex;
        if (!rafLock.current) {
          rafLock.current = true;
          requestAnimationFrame(() => {
            setDialFloat(pendingFloat.current);
            rafLock.current = false;
          });
        }

        // Derive active integer index; only update state when it actually changes
        const nextActive = clamp(Math.round(floatIndex), 0, total - 1);
        if (nextActive !== lastActive.current) {
          lastActive.current = nextActive;
          setActiveIndex(nextActive);
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: self => updateFromScroll(self.progress),
        },
        defaults: { ease: "power2.out" },
      });

      // Phase 1: stagger in heading
      if (eyebrowEl) tl.to(eyebrowEl, { opacity: 1, y: 0, duration: 0.15 }, 0);
      if (titleEl) tl.to(titleEl, { opacity: 1, y: 0, duration: 0.15 }, 0.05);
      if (paraEl) tl.to(paraEl, { opacity: 1, y: 0, duration: 0.15 }, 0.1);

      // Small hold
      tl.to({}, { duration: 0.15 });

      // Phase 3: bring in dial and detail
      if (dialNode) tl.to(dialNode, { opacity: 1, y: 0, duration: 0.35 }, 0.45);
      if (detailNode) tl.to(detailNode, { opacity: 1, x: 0, duration: 0.35 }, 0.5);

      // tiny filler so ScrollTrigger retains length
      tl.to({}, { duration: 0.15 });
    }, root);

    return () => ctx.revert();
  }, []);

  const safeIdx = clamp(activeIndex, 0, Math.max(0, PROBLEM_PATTERNS.length - 1));

  return (
    <section
      id={id}
      ref={rootRef}
      className="relative overflow-visible bg-[#F8F7F3] text-[#101010]"
      aria-labelledby="what-we-do-heading"
    >
      {/* soft background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 55% at 85% 10%, rgba(16,16,16,0.06) 0%, transparent 60%), radial-gradient(70% 45% at 10% 80%, rgba(16,16,16,0.04) 0%, transparent 60%)",
          maskImage: "radial-gradient(120% 100% at 50% 50%, black, transparent 70%)",
        }}
      />

  {/* Spacer to position section below header/trusted rail; smaller on mobile */}
  <div className="h-[48vh] md:h-[44vh] lg:h-[60vh]" aria-hidden />

      {/* Pinned stage */}
      <div
        ref={stageRef}
        className="relative min-h-[100svh] flex items-start justify-center pt-6 md:pt-10 lg:pt-14"
      >
        <div className="w-full max-w-7xl transform -translate-y-0 lg:-translate-y-8 mx-auto px-6 md:px-10 lg:px-16">
          {/* Heading */}
          <div ref={headingRef} className="text-left mb-16 max-w-4xl">
            <p className="eyebrow wwd-eyebrow">{eyebrow}</p>
            <h2 id="what-we-do-heading" className="h2 mt-3 wwd-heading">
              {heading}
            </h2>
            <p className="mt-6 text-[var(--muted)] wwd-paragraph text-lg leading-relaxed">{paragraph}</p>
          </div>

          {/* Detail left, Dial right */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div ref={detailRef} className="order-2 lg:order-1">
              <DetailPanel item={PROBLEM_PATTERNS[safeIdx]} />
            </div>

            <div ref={dialRef} className="flex flex-col items-center justify-start order-1 lg:order-2">
              <div className="mb-8 text-center">
                <p className="eyebrow">Problem → Pattern</p>
                <p className="mt-3 text-[var(--muted)] max-w-sm leading-relaxed">
                  Architecture-first fixes to real problems.
                </p>
              </div>

              {/* Fixed: removed unsupported prop */}
              <ProblemToPatternDial selectedIndex={dialFloat} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
