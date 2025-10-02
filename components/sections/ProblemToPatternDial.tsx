// /components/sections/ProblemToPatternDial.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { PROJECT_SOLUTIONS, type ProjectSolution } from "@/lib/whatwedo/projects";

/* tiny classnames helper */
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
/* deterministic rounding so SSR and client style strings match */
const q = (n: number, dp = 3) => {
  const m = 10 ** dp;
  return Math.round(n * m) / m;
};

export type ProblemToPatternDialProps = {
  id?: string;
  className?: string;
  items?: ProjectSolution[];
  /** May be fractional (e.g., from scroll). */
  selectedIndex?: number;

  /** Visual style (present but not switching styles here) */
  variant?: "modern" | "classic";

  /** External start switch so dial/readout and detail panel sync up */
  enableMotion?: boolean;

  /** Optional safety: also require (mostly) visible before moving */
  waitUntilVisible?: boolean;
  visibleThreshold?: number; // 0..1
  visibleDelayMs?: number;   // ms
};

export default function ProblemToPatternDial({
  id = "problem-to-pattern-dial",
  className,
  items = PROJECT_SOLUTIONS,
  selectedIndex = 0,
  variant = "classic",
  enableMotion = true,
  waitUntilVisible = false,
  visibleThreshold = 0.95,
  visibleDelayMs = 0,
}: ProblemToPatternDialProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // a11y/fallback guards
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // optional visibility gate
  const [isVisibleEnough, setIsVisibleEnough] = useState(!waitUntilVisible);

  // capture first index so pre-motion render is stable
  const initialIndexRef = useRef<number>(Number.isFinite(selectedIndex) ? Number(selectedIndex) : 0);
  useEffect(() => {
    initialIndexRef.current = Number.isFinite(selectedIndex) ? Number(selectedIndex) : 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // Visibility observer (only if asked)
  useEffect(() => {
    if (!waitUntilVisible) return;
    const node = containerRef.current;
    if (!node || typeof window === "undefined") return;

    let timer: number | null = null;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting && e.intersectionRatio >= visibleThreshold) {
          if (timer) clearTimeout(timer);
          timer = window.setTimeout(() => setIsVisibleEnough(true), visibleDelayMs) as unknown as number;
        }
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    io.observe(node);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [waitUntilVisible, visibleThreshold, visibleDelayMs]);

  // media queries for reduced motion and mobile detection
  useEffect(() => {
    const mqMotion =
      typeof window !== "undefined" && "matchMedia" in window
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    const onMQ = () => setReduced(!!mqMotion?.matches);
    onMQ();
    mqMotion?.addEventListener?.("change", onMQ);

    const onResize = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 640);
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      mqMotion?.removeEventListener?.("change", onMQ);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // final gate: only move when parent says so AND (optionally) when visible
  const motionEnabled = enableMotion && isVisibleEnough;

  // choose the index we actually use for geometry/readout
  const liveIndex = motionEnabled ? selectedIndex : initialIndexRef.current;

  // content safety
  const count = Math.max(1, items.length);
  const stepDeg = 360 / count;

  // normalize angle so selected item sits at 12 o'clock (desktop dial)
  const angle = useMemo(() => {
    const idx = Number.isFinite(liveIndex) ? Number(liveIndex) : 0;
    const raw = 360 - idx * stepDeg;
    const norm = ((raw % 360) + 360) % 360;
    return q(norm, 4);
  }, [liveIndex, stepDeg]);

  // nearest integer for highlight
  const nearest = Number.isFinite(liveIndex) ? Math.round(Number(liveIndex)) : 0;
  const selected = ((nearest % count) + count) % count;

  // sizing for desktop dial
  const SIZE = 400;
  const RING = SIZE / 2;
  const R_TICK_MAJOR = Math.round(RING - 20);
  const R_TICK_MINOR = Math.round(RING - 16);
  const R_LABEL = Math.round(RING - 50);

  // ——— Mobile compact READOUT mapping ———
  const readout = useMemo(() => {
    const idx = Number.isFinite(liveIndex) ? Number(liveIndex) : 0;
    // normalize to 0..count
    const pos = ((idx % count) + count) % count;
    const withinStep = pos - Math.floor(pos); // 0..1 in current step
    return {
      total: count,
      progressPct: Math.round(withinStep * 100),
    };
  }, [liveIndex, count]);

  const desktopMode = !isMobile && !reduced;

  return (
    <div id={id} ref={containerRef} className={cx("relative w-full", className)}>
      {/* DESKTOP: Dial */}
      {desktopMode ? (
        <div
          className="relative select-none mx-auto md:-translate-y-4 lg:-translate-y-6"
          aria-live="polite"
          style={{ width: SIZE, height: SIZE }}
        >
          {/* base ring (thinner, subtle inner gradient) */}
          <div
            className={cx(
              "absolute inset-0 rounded-full z-0",
              "border-2 border-[var(--border)] bg-white/70",
              "shadow-[inset_0_8px_24px_rgba(255,255,255,0.6),inset_0_-8px_20px_rgba(0,0,0,0.03),0_10px_30px_rgba(0,0,0,0.04)]"
            )}
            style={{ boxShadow: undefined }}
          />

          {/* rotating ticks */}
          <div
            className="absolute inset-0 z-10 will-change-transform transition-transform duration-700 ease-in-out"
            style={{ transform: `rotate(${angle}deg)` }}
            aria-hidden
          >
            {/* major ticks */}
            {items.map((_, i) => (
              <div
                key={`maj-${i}`}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{ transform: `rotate(${q(i * stepDeg, 4)}deg) translateX(${R_TICK_MAJOR}px)` }}
              >
                <div className="w-6 h-1 bg-[var(--border)] rounded-full opacity-90" />
              </div>
            ))}

            {/* minor ticks */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`min-${i}`}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{ transform: `rotate(${q(i * 30, 4)}deg) translateX(${R_TICK_MINOR}px)` }}
              >
                <div className="w-3 h-px bg-[var(--border)]/70 rounded-full opacity-80" />
              </div>
            ))}
          </div>

          {/* labels kept upright */}
          <div className="absolute inset-0 z-20" role="listbox" aria-activedescendant={`dial-opt-${selected}`}>
            {items.map((it, i) => {
              const itemAngle = i * stepDeg;
              const adjustedAngle = itemAngle + angle;
              const rad = (adjustedAngle * Math.PI) / 180;
              const x = q(Math.sin(rad) * R_LABEL);
              const y = q(-Math.cos(rad) * R_LABEL);
              const isSelected = selected === i;

              return (
                <div
                  key={it.id ?? i}
                  id={`dial-opt-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  className="absolute left-1/2 top-1/2 will-change-transform"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                >
                  <div
                    className={cx(
                      "px-3 py-2 rounded-full text-sm font-serif border whitespace-nowrap shadow-sm transition-transform duration-200",
                      isSelected
                        ? "bg-[var(--fg)] text-white border-[var(--fg)] scale-105 shadow-lg"
                        : "bg-white text-[var(--fg)] border-[var(--border)] hover:border-[var(--fg)]/30"
                    )}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      try { (containerRef.current as any)?.focus?.(); } catch {}
                    }}
                    style={{ cursor: 'default' }}
                  >
                    <span className="mr-2 text-base">{it.emoji ?? "•"}</span>
                    <span className="font-medium">{it.project}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* center cap */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-4 h-4 rounded-full bg-[var(--fg)]/85 shadow-md" />
          </div>
        </div>
      ) : (
        /* MOBILE: compact readout (no numbers) */
        <MobileReadout
          total={readout.total}
          progressPct={readout.progressPct}
          item={items[selected]}
          reduced={reduced}
        />
      )}
    </div>
  );
}

/* ——— Mobile compact readout (no numbers) ——— */
function MobileReadout({
  total,          // kept for signature stability (not displayed)
  progressPct,
  item,
  reduced,
}: {
  total: number;
  progressPct: number; // 0..100
  item: ProjectSolution | undefined;
  reduced: boolean;
}) {
  return (
    <div className="w-full mx-auto">
      <div
        className={cx(
          "mx-auto w-full max-w-sm",
          // tighter container so the Pattern panel below is visible on first paint
          "rounded-2xl border border-[var(--border)] bg-white/80 backdrop-blur",
          "shadow-[0_4px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]",
          "px-4 py-3 mb-2"
        )}
        aria-live="polite"
      >
        {/* Single-line pill with emoji + problem label */}
        <div className="flex items-center justify-center gap-2">
          <span
            className={cx(
              "inline-flex items-center gap-2",
              "px-3 py-1.5 rounded-full",
              "bg-[var(--fg)] text-white",
              "shadow-[inset_0_-1px_3px_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.25)]",
              !reduced && "transition-transform duration-150 will-change-transform"
            )}
          >
            <span className="text-base leading-none">{item?.emoji ?? "•"}</span>
            <span className="text-sm font-medium leading-none whitespace-nowrap">
              {item?.project ?? "—"}
            </span>
          </span>
        </div>

        {/* ultra-compact progress bar */}
        <div className="mt-3 h-1 w-full rounded-full bg-[var(--border)]/50 overflow-hidden">
          <div
            className="h-full bg-[var(--fg)]/85 transition-[width] duration-150 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

/* One-markup detail panel */
export function DetailPanel({ item }: { item: ProjectSolution }) {
  return (
    <div className="mx-auto max-w-none">
      <div className="rounded-2xl border border-[var(--border)] bg-white shadow-lg p-6 md:p-8">
        <div className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-2">
          Solution
        </div>
        <h3 className="font-display text-xl md:text-2xl leading-tight text-[var(--fg)] mb-3">
          {item.solution}
        </h3>
        <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-4">{item.summary}</p>
        {item.details?.length ? (
          <ul className="space-y-3 text-[var(--fg)] mb-6">
            {item.details.map((d, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--fg)] mr-3 mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        ) : null}
        
        {/* View Project Button */}
        <a
          href={`/projects/${item.id}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--fg)] text-white rounded-xl font-semibold hover:bg-[var(--accent)] transition-all hover:scale-105 shadow-md text-sm"
        >
          <span>View Full Project</span>
          <svg 
            className="w-4 h-4 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}