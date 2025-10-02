"use client";

import { useLayoutEffect, useRef, useState } from "react";
import ProblemToPatternDial, { DetailPanel } from "@/components/sections/ProblemToPatternDial";
import { PROJECT_SOLUTIONS } from "@/lib/whatwedo/projects";

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
  paragraph = "We architect, build, and scale traffic-proof platforms with resilient data and edge APIs.",
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
  const transitionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const headingEl = headingRef.current;
    const transitionEl = transitionRef.current;
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

      // Initial fade-in animation (happens before pinning)
      gsap.set(fadeTargets, { opacity: 0, y: 30 });
      if (dialNode) gsap.set(dialNode, { opacity: 0, y: 40 });
      if (detailNode) gsap.set(detailNode, { opacity: 0, x: -30 });

      // Pre-scroll fade-in: elements appear as section comes into view
      const preTl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });

      // Stagger in all elements during scroll approach
      if (eyebrowEl) preTl.to(eyebrowEl, { opacity: 1, y: 0, duration: 0.3 }, 0);
      if (titleEl) preTl.to(titleEl, { opacity: 1, y: 0, duration: 0.3 }, 0.1);
      if (paraEl) preTl.to(paraEl, { opacity: 1, y: 0, duration: 0.3 }, 0.2);
      if (dialNode) preTl.to(dialNode, { opacity: 1, y: 0, duration: 0.3 }, 0.3);
      if (detailNode) preTl.to(detailNode, { opacity: 1, x: 0, duration: 0.3 }, 0.4);

      const total = Math.max(1, PROJECT_SOLUTIONS.length);
      const speedExp = 1.6;

      const updateFromScroll = (progress: number) => {
        // Dial rotation happens throughout the entire pinned scroll
        const start = 0.1; // start dial rotation almost immediately after pin
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

      // Main pinned scroll timeline - just for dial rotation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "+=500%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: self => updateFromScroll(self.progress),
        },
        defaults: { ease: "none" },
      });

      // Just a placeholder for the scroll duration - dial rotation handled by onUpdate
      tl.to({}, { duration: 1 });
    }, root);

    return () => ctx.revert();
  }, []);

  const safeIdx = clamp(activeIndex, 0, Math.max(0, PROJECT_SOLUTIONS.length - 1));

  return (
    <section
      id={id}
      ref={rootRef}
      className="relative overflow-visible bg-[var(--bg)] text-[var(--fg)]"
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

      {/* Pinned stage */}
      <div
        ref={stageRef}
        className="relative min-h-[100svh] flex items-start justify-center pt-20 md:pt-24 lg:pt-28 pb-12 px-4"
      >
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Heading */}
          <div ref={headingRef} className="text-center mb-8 md:mb-10 max-w-4xl mx-auto px-4">
            <p className="eyebrow wwd-eyebrow">{eyebrow}</p>
            <h2 id="what-we-do-heading" className="h2 mt-3 wwd-heading">
              {heading}
            </h2>
            <p className="mt-4 text-[var(--muted)] wwd-paragraph text-lg leading-relaxed">{paragraph}</p>
          </div>

          {/* Detail left, Dial right */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start justify-items-center">
            <div ref={detailRef} className="order-2 lg:order-1 w-full max-w-[550px] px-2">
              <DetailPanel item={PROJECT_SOLUTIONS[safeIdx]} />
            </div>

            <div ref={dialRef} className="flex flex-col items-center justify-start order-1 lg:order-2 w-full max-w-[550px] px-2">
              <div className="w-full flex justify-center">
                <ProblemToPatternDial selectedIndex={dialFloat} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
