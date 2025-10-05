// /components/sections/DialDrivenShowcase.tsx
"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useId,
} from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { PROJECT_SOLUTIONS, type ProjectSolution } from "@/lib/whatwedo/projects";

type Props = {
  items?: ProjectSolution[];
  mantra?: [string, string, string, string];
  accent?: string; // hex recommended, e.g. "#2db7ff"
  className?: string;
};

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function DialDrivenShowcase({
  items = PROJECT_SOLUTIONS,
  mantra = ["Scope.", "Design.", "Validate.", "Launch."],
  accent = "#2db7ff",
  className = "",
}: Props) {
  const n = items.length;
  if (n === 0) return null;

  // --- index state
  const [idxFloat, setIdxFloat] = useState(0);
  const idxActive = mod(Math.round(idxFloat), n);

  // --- direction state for enter/exit card animation
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const prevIdxRef = useRef(0);

  useEffect(() => {
    const prev = prevIdxRef.current;
    const curr = idxActive;
    if (prev !== curr) {
      let d = (curr - prev + n) % n;
      if (d > n / 2) d -= n;
      setDirection(d > 0 ? "right" : "left");
      prevIdxRef.current = curr;
      const t = setTimeout(() => setDirection(null), 300);
      return () => clearTimeout(t);
    }
  }, [idxActive, n]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // ---------- drag math ----------
  const dialRefDesktop = useRef<SVGSVGElement | null>(null);
  const dialRefMobile = useRef<SVGSVGElement | null>(null);
  const draggingRef = useRef(false);
  const startAngleRef = useRef(0);
  const startIdxRef = useRef(0);
  const activeDialRef = useRef<SVGSVGElement | null>(null);

  const clientAngle = useCallback((clientX: number, clientY: number) => {
    const el = activeDialRef.current!;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const rad = Math.atan2(dx, -dy); // 0° at 12 o'clock, cw+
    let deg = (rad * 180) / Math.PI;
    if (deg < 0) deg += 360;
    return deg;
  }, []);

  const stepDeg = 360 / n;

  const onPointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      activeDialRef.current = e.currentTarget;
      e.currentTarget?.setPointerCapture(e.pointerId);
      draggingRef.current = true;
      startAngleRef.current = clientAngle(e.clientX, e.clientY);
      startIdxRef.current = idxFloat;
    },
    [clientAngle, idxFloat]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      const curr = clientAngle(e.clientX, e.clientY);
      const deltaDeg = curr - startAngleRef.current;
      const deltaIdx = deltaDeg / stepDeg;
      setIdxFloat(startIdxRef.current + deltaIdx);
    },
    [clientAngle, stepDeg]
  );

  // --- gentle snap to nearest slot after drag end
  const rafRef = useRef<number | null>(null);
  const animateTo = useCallback(
    (target: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = idxFloat;
      const diff = target - start;
      const dur = 260;
      const t0 =
        typeof performance !== "undefined" ? performance.now() : Date.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        setIdxFloat(start + diff * easeOutCubic(p));
        if (p < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [idxFloat]
  );

  const endDrag = useCallback(
    (e?: React.PointerEvent<SVGSVGElement>) => {
      draggingRef.current = false;
      if (e) {
        try {
          e.currentTarget?.releasePointerCapture(e.pointerId);
        } catch {}
      }
      if (prefersReduced) {
        setIdxFloat((v) => Math.round(v));
      } else {
        const target = Math.round(idxFloat);
        animateTo(target);
      }
    },
    [prefersReduced, idxFloat, animateTo]
  );

  useEffect(() => {
    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      if (prefersReduced) setIdxFloat((v) => Math.round(v));
      else animateTo(Math.round(idxFloat));
    };
    window.addEventListener("pointerup", onUp);
    return () => window.removeEventListener("pointerup", onUp);
  }, [prefersReduced, idxFloat, animateTo]);

  // --- keyboard and wheel
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setIdxFloat((v) => v - 1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setIdxFloat((v) => v + 1);
    }
  }, []);

  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const step = e.shiftKey ? 1 : 0.25;
    setIdxFloat((v) => v + (e.deltaY > 0 ? step : -step));
  }, []);

  // Dial geometry
  const pointerAngle = useMemo(
    () => mod(idxFloat * stepDeg, 360),
    [idxFloat, stepDeg]
  );
  const SLICE_DEG = stepDeg;
  const R_GREY = 193;
  const R_BLUE = 236;
  const greyArc = useMemo(
    () => 2 * Math.PI * R_GREY * (SLICE_DEG / 360),
    [SLICE_DEG]
  );
  const blueArc = useMemo(
    () => 2 * Math.PI * R_BLUE * (SLICE_DEG / 360),
    [SLICE_DEG]
  );

  const uid = useId();
  const rimId = `rim-${uid}`;

  const ariaValueText = items[idxActive]?.project ?? `Item ${idxActive + 1}`;

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className={`relative w-full overflow-x-clip overflow-y-visible ${className}`}
      style={{
        background: "linear-gradient(135deg, #F8F7F3 0%, #EFEDE8 100%)",
        color: "var(--ink, #111)",
        height: "100dvh",
        maxHeight: "100dvh",
      }}
    >
      <div className="sr-only" aria-live="polite" role="status">
        {ariaValueText}
      </div>

      {/* Mobile: Text → Card → Dial (flex-col), Desktop: Card left, Text+Dial right */}
      <div className="h-auto min-h-screen lg:h-full flex flex-col lg:grid lg:grid-cols-[0.58fr_0.42fr] lg:items-start gap-3 lg:gap-12 xl:gap-16 px-4 lg:px-12 xl:px-16 py-4 lg:py-10">
        
        {/* MOBILE ONLY: Mantra Text (order-1 on mobile) */}
        <div className="lg:hidden flex items-center justify-center py-1 pb-0">
          <div className="leading-tight select-none space-y-0 text-center">
            <h2 className="font-[900] tracking-[-0.04em] text-[9vw] sm:text-[7vw] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent animate-[fadeIn_0.6s_ease-out_0.1s_both]">
              {mantra[0]} {mantra[1]} {mantra[2]} {mantra[3]}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-medium animate-[fadeIn_0.6s_ease-out_0.3s_both]">
              Our approach to building exceptional solutions
            </p>
          </div>
        </div>

  {/* Card (order-2 on mobile, left column on desktop) */}
  <div className="flex items-start justify-center lg:justify-start mb-20 lg:mb-0">
          <div
            className="w-full max-w-[620px] relative"
            style={{ height: "min(340px, 42vh)" }}
          >
            {items.map((it, i) => {
              const isActive = i === idxActive;
              return (
                <a
                  key={it.id ?? i}
                  href={`/projects/${it.id}`}
                  className={`absolute inset-0 transition-all duration-300 ease-in-out block ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : direction === "right"
                      ? "opacity-0 -translate-x-8"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                  aria-hidden={!isActive}
                >
                  <CardContainer className="w-full h-full">
                    <CardBody className="relative w-full h-full overflow-hidden rounded-[1.2rem] bg-gradient-to-br from-white via-white to-neutral-50/40 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12),_0_4px_16px_-4px_rgba(0,0,0,0.08)] border border-neutral-200/80 backdrop-blur-sm cursor-pointer hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.18),_0_6px_20px_-4px_rgba(0,0,0,0.12)] hover:scale-[1.015] transition-all">
                      <div className="h-full flex flex-col p-7 lg:p-9">
                        <CardItem translateZ="70" className="w-full mb-2.5">
                          <h3 className="text-[1.5rem] lg:text-[1.85rem] font-[800] leading-[1.12] tracking-[-0.025em] text-neutral-900 truncate">
                            {it.project}
                          </h3>
                        </CardItem>

                        {it.summary && (
                          <CardItem translateZ="60" className="w-full mb-6">
                            <p className="text-neutral-600 text-[0.9rem] lg:text-base font-medium truncate leading-relaxed">
                              {it.summary}
                            </p>
                          </CardItem>
                        )}

                        <CardItem translateZ="50" className="w-full mb-0 relative flex-1">
                          <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center">
                            <img
                              src={`/card/${
                                it.id === "realtime-ops-console"
                                  ? "ops.png"
                                  : it.id === "ai-logistics-platform"
                                  ? "logistic.png"
                                  : it.id === "fintech-payment-gateway"
                                  ? "payment.png"
                                  : it.id === "healthcare-data-fabric"
                                  ? "healthcare.png"
                                  : it.id === "ecommerce-marketplace"
                                  ? "ecommerce.png"
                                  : "ops.png"
                              }`}
                              alt={it.project}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="absolute bottom-4 right-4 flex justify-end">
                            <div className="w-10 h-10 rounded-full border-2 border-neutral-300/80 bg-white/95 backdrop-blur-sm flex items-center justify-center hover:border-neutral-900 hover:bg-neutral-900 transition-all shadow-lg hover:shadow-xl">
                              <svg
                                className="w-4 h-4 text-neutral-700 hover:text-white transition-colors"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </a>
              );
            })}
          </div>
        </div>

        {/* DESKTOP ONLY: Mantra + Dial (right column) */}
        <div className="hidden lg:grid h-full grid-rows-[minmax(0,1fr)_auto] gap-10 lg:gap-12 pt-16 lg:pt-20">
          {/* DESKTOP: Mantra Text */}
          <div className="min-h-0 flex items-center justify-center">
            <div className="leading-tight select-none space-y-3 lg:space-y-4 text-center">
              <h2 className="font-[900] tracking-[-0.04em] text-[4.5vw] xl:text-[4vw] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent animate-[fadeIn_0.6s_ease-out_0.1s_both]">
                {mantra[0]} {mantra[1]} {mantra[2]} {mantra[3]}
              </h2>
              <p className="text-neutral-600 text-base lg:text-lg font-medium animate-[fadeIn_0.6s_ease-out_0.3s_both]">
                Our approach to building exceptional solutions
              </p>
            </div>
          </div>

          {/* DESKTOP: Dial */}
          <div className="min-h-0 flex items-end justify-center pb-4 lg:pb-6">
            <div
              className="outline-none select-none transition-transform hover:scale-[1.02] active:scale-[0.98]"
              role="slider"
              aria-label="Project dial"
              aria-valuemin={0}
              aria-valuemax={n - 1}
              aria-valuenow={idxActive}
              aria-valuetext={ariaValueText}
              tabIndex={0}
              onKeyDown={onKeyDown}
              onWheel={onWheel}
              onMouseDown={(e) => e.preventDefault()}
            >
              <svg
                ref={dialRefDesktop}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                role="img"
                aria-label="Dial"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                style={{
                  touchAction: "none",
                  cursor: "grab",
                  width: "clamp(280px, 35vh, 420px)",
                  height: "clamp(280px, 35vh, 420px)",
                  filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.18))",
                  ["--bg" as any]: "#000",
                  ["--center" as any]: "#151515",
                  ["--tick" as any]: "#fff",
                  ["--selector" as any]: "#1f1f1f",
                  ["--accent" as any]: accent,
                }}
              >
                {/* BODY */}
                <circle cx="256" cy="256" r="240" fill="var(--bg)" />
                <radialGradient id={rimId} cx="38%" cy="30%" r="80%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="65%" stopColor="#101010" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </radialGradient>
                <circle cx="256" cy="256" r="200" fill={`url(#${rimId})`} />

                {/* SELECTOR WINDOW + ACCENT */}
                <g transform={`rotate(${pointerAngle} 256 256)`}>
                  <circle
                    cx="256"
                    cy="256"
                    r={R_GREY}
                    fill="none"
                    stroke="var(--selector)"
                    strokeWidth="86"
                    strokeLinecap="butt"
                    transform="rotate(-90 256 256)"
                    strokeDasharray={`${greyArc} 2000`}
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="256"
                    cy="256"
                    r={R_BLUE}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    transform="rotate(-90 256 256)"
                    strokeDasharray={`${blueArc} 2000`}
                    strokeDashoffset="0"
                  />
                </g>

                {/* TICKS */}
                <g transform="translate(256 256)" fill="var(--tick)" opacity="0.95">
                  <g id="tMinor">
                    <rect x="-2.5" y="-220" width="5" height="24" rx="2.5" />
                  </g>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <use key={`m${i}`} href="#tMinor" transform={`rotate(${i * 30})`} />
                  ))}
                  <g id="tMajor">
                    <rect x="-4.5" y="-232" width="9" height="40" rx="4.5" />
                  </g>
                  {[0, 90, 180, 270].map((d) => (
                    <use key={`M${d}`} href="#tMajor" transform={`rotate(${d})`} />
                  ))}
                </g>

                {/* CENTER CAP */}
                <circle cx="256" cy="256" r="128" fill="var(--center)" />
              </svg>
            </div>
          </div>
        </div>

  {/* MOBILE ONLY: Dial (order-3 on mobile) */}
  <div className="lg:hidden flex items-center justify-center pt-6 pb-6">
          <div
            className="outline-none select-none transition-transform hover:scale-[1.02] active:scale-[0.98]"
            role="slider"
            aria-label="Project dial"
            aria-valuemin={0}
            aria-valuemax={n - 1}
            aria-valuenow={idxActive}
            aria-valuetext={ariaValueText}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onWheel={onWheel}
            onMouseDown={(e) => e.preventDefault()}
          >
            <svg
              ref={dialRefMobile}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              role="img"
              aria-label="Dial"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              style={{
                touchAction: "none",
                cursor: "grab",
                width: "clamp(120px, 35vw, 200px)",
                height: "clamp(120px, 35vw, 200px)",
                filter: "drop-shadow(0 8px 30px rgba(0,0,0,0.16))",
                ["--bg" as any]: "#000",
                ["--center" as any]: "#151515",
                ["--tick" as any]: "#fff",
                ["--selector" as any]: "#1f1f1f",
                ["--accent" as any]: accent,
              }}
            >
              {/* Same SVG content as desktop */}
              <circle cx="256" cy="256" r="240" fill="var(--bg)" />
              <radialGradient id={`${rimId}-mobile`} cx="38%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="65%" stopColor="#101010" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </radialGradient>
              <circle cx="256" cy="256" r="200" fill={`url(#${rimId}-mobile)`} />

              <g transform={`rotate(${pointerAngle} 256 256)`}>
                <circle
                  cx="256"
                  cy="256"
                  r={R_GREY}
                  fill="none"
                  stroke="var(--selector)"
                  strokeWidth="86"
                  strokeLinecap="butt"
                  transform="rotate(-90 256 256)"
                  strokeDasharray={`${greyArc} 2000`}
                  strokeDashoffset="0"
                />
                <circle
                  cx="256"
                  cy="256"
                  r={R_BLUE}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  transform="rotate(-90 256 256)"
                  strokeDasharray={`${blueArc} 2000`}
                  strokeDashoffset="0"
                />
              </g>

              <g transform="translate(256 256)" fill="var(--tick)" opacity="0.95">
                <g id="tMinor-mobile">
                  <rect x="-2.5" y="-220" width="5" height="24" rx="2.5" />
                </g>
                {Array.from({ length: 12 }).map((_, i) => (
                  <use key={`m${i}`} href="#tMinor-mobile" transform={`rotate(${i * 30})`} />
                ))}
                <g id="tMajor-mobile">
                  <rect x="-4.5" y="-232" width="9" height="40" rx="4.5" />
                </g>
                {[0, 90, 180, 270].map((d) => (
                  <use key={`M${d}`} href="#tMajor-mobile" transform={`rotate(${d})`} />
                ))}
              </g>

              <circle cx="256" cy="256" r="128" fill="var(--center)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}