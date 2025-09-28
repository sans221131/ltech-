"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Types ---------- */
export type Client = { name: string; logoSrc: string; href?: string; alt?: string; blurb?: string };
export type Capability = { name: string; iconSrc: string; alt?: string; blurb?: string };

type Props = {
  clients: Client[];
  capabilities: Capability[]; // your internal icons (SVGs) go here
  railHeight?: number;        // px
  speedPxPerSec?: number;     // content speed
  backgroundHex?: string;     // for edge fades & plate blend
  className?: string;
};

/* ---------- Utils ---------- */
function useReducedMotion() {
  const [rm, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => set(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);
  return rm;
}

/* ---------- Component ---------- */
export default function ClientsBlueprintRail({
  clients,
  capabilities,
  railHeight = 68,
  speedPxPerSec = 64,
  backgroundHex = "#F7F7F7", // Match --bg from global theme
  className = "",
}: Props) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? true),
      { rootMargin: "0px 0px -20% 0px", threshold: 0.01 }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  // Interleave clients and capabilities: [C0, Cap0, C1, Cap1, ...]
  const items = useMemo(() => {
    const out: Array<{ type: "client" | "cap"; name: string; src: string; href?: string; alt?: string; blurb?: string }> = [];
    const max = Math.max(clients.length, capabilities.length);
    for (let i = 0; i < max; i++) {
      if (clients[i]) out.push({ type: "client", name: clients[i].name, src: clients[i].logoSrc, href: clients[i].href, alt: clients[i].alt ?? clients[i].name, blurb: clients[i].blurb });
      if (capabilities[i]) out.push({ type: "cap", name: capabilities[i].name, src: capabilities[i].iconSrc, alt: capabilities[i].alt ?? capabilities[i].name, blurb: capabilities[i].blurb });
    }
    return out;
  }, [clients, capabilities]);

  // Duplicate for seamless loop
  const loopItems = useMemo(() => [...items, ...items], [items]);

  // Measure to compute duration
  const laneRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(30);
  useEffect(() => {
    const el = laneRef.current;
    if (!el) return;
    const w = el.scrollWidth / 2; // 200% width because duplicated
    const pxps = Math.max(20, Math.min(140, speedPxPerSec));
    setDuration(Math.max(12, w / pxps));
  }, [items, speedPxPerSec]);

  const paused = reducedMotion || !inView;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      aria-label="Clients and capabilities"
      className={`mx-auto max-w-7xl px-6 md:px-10 lg:px-16 w-full ${className}`}
    >
      {/* Label chip */}
      <div className="mb-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs backdrop-blur-sm eyebrow">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" style={{backgroundColor: 'var(--accent)'}} />
          Trusted by teams & powered by our capabilities
        </span>
      </div>

      {/* Plate */}
      <div
        className="card relative overflow-hidden"
        style={{
          height: railHeight,
          borderRadius: 'var(--radius)',
        }}
      >
        {/* Blueprint grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px, 28px 28px",
            maskImage: "radial-gradient(120% 100% at 50% 50%, black, transparent)",
          }}
        />

        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24"
          style={{
            WebkitMaskImage: "linear-gradient(to right, black, transparent)",
            maskImage: "linear-gradient(to right, black, transparent)",
            background: `linear-gradient(to right, ${backgroundHex}, transparent)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24"
          style={{
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
            maskImage: "linear-gradient(to left, black, transparent)",
            background: `linear-gradient(to left, ${backgroundHex}, transparent)`,
          }}
        />

        {/* Lane content */}
        <div
          ref={laneRef}
          className="absolute inset-0"
          // Longhands only (no shorthand+playState mix)
          style={{
            animationName: paused ? "none" : "cbr-left",
            animationDuration: `${duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            animationFillMode: "both",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          <div className="flex h-full w-[200%] items-center gap-10 px-8">
            {loopItems.map((it, i) => {
              const isClient = it.type === "client";
              const h = Math.max(18, Math.floor(railHeight * 0.52));
              return (
                <div
                  key={`${it.type}-${it.name}-${i}`}
                  className="group relative flex items-center justify-center"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx((idx) => (idx === i ? null : idx))}
                >
                  {isClient && it.href ? (
                    <a href={it.href} aria-label={it.name} className="inline-flex items-center">
                      <img
                        src={it.src}
                        alt={it.alt ?? it.name}
                        loading="lazy"
                        style={{ height: h, width: "auto" }}
                        className="select-none object-contain grayscale contrast-75 opacity-80 transition-[filter,opacity] duration-200 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
                      />
                    </a>
                  ) : (
                    <img
                      src={it.src}
                      alt={it.alt ?? it.name}
                      loading="lazy"
                      style={{ height: h, width: "auto" }}
                      className={[
                        "select-none object-contain",
                        isClient
                          ? "grayscale contrast-75 opacity-80 transition-[filter,opacity] duration-200 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100"
                          : "opacity-80",
                      ].join(" ")}
                    />
                  )}

                  {/* Micro blurb on hover */}
                  {(hoveredIdx === i) && (it.blurb || it.name) && (
                    <div className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-full border border-black/10 bg-white/80 px-2.5 py-1 text-[11px] text-neutral-800 shadow-sm backdrop-blur-sm">
                      {it.blurb ?? it.name}
                    </div>
                  )}

                  {/* divider dot between items */}
                  <div className="ml-6 h-1 w-1 rounded-full bg-neutral-300/80" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Light sweep accent (very subtle) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.20) 8%, transparent 16%)",
            backgroundSize: "200% 100%",
            animationName: paused ? "none" : "cbr-sheen",
            animationDuration: "12s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            animationFillMode: "both",
            animationPlayState: paused ? "paused" : "running",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Scoped keyframes */}
      <style jsx global>{`
        @keyframes cbr-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes cbr-sheen {
          0%   { background-position: -50% 0; }
          100% { background-position: 150% 0; }
        }
      `}</style>
    </section>
  );
}
