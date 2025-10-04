"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export type Client = {
  name: string;
  logoSrc: string;
  href?: string;
  alt?: string;
  scale?: number; // optional per-logo scale to counter fat SVG padding, e.g. 1.15
};

type Props = {
  items: Client[];
  railHeight?: number;       // overall rail height
  logoHeightRatio?: number;  // 0..1, portion of rail height used by logo
  gapPx?: number;            // spacing between items
  speedPxPerSec?: number;
  backgroundHex?: string;
  className?: string;
};

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

export default function ClientsOnlyRail({
  items,
  railHeight = 400,         // 3x bigger for much larger logos
  logoHeightRatio = 1, // use more of the rail height
  gapPx = 100,               // much wider spacing between logos
  speedPxPerSec = 64,
  backgroundHex = "#F7F7F7", // Match --bg from global theme
  className = "",
}: Props) {
  const reducedMotion = useReducedMotion();

  // Pause when offscreen
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

  // Duplicate for seamless loop
  const loopItems = useMemo(() => [...items, ...items], [items]);

  // Compute duration from content width
  const laneRef = useRef<HTMLDivElement | null>(null);
  const [duration, setDuration] = useState(30);
  useEffect(() => {
    const el = laneRef.current;
    if (!el) return;
    const w = el.scrollWidth / 2; // doubled content
    const pxps = Math.max(20, Math.min(140, speedPxPerSec));
    setDuration(Math.max(10, w / pxps));
  }, [items, speedPxPerSec]);

  const paused = reducedMotion || !inView;

  // Effective logo height in pixels
  const imgH = Math.max(28, Math.floor(railHeight * logoHeightRatio));

  return (
    <section
      ref={sectionRef}
      aria-label="Clients who trust us"
      className={`w-full px-6 md:px-10 lg:px-16 py-8 ${className}`}
      style={{ ["--gap" as any]: `${gapPx}px` }}
    >
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 rounded-full border backdrop-blur-sm px-3 py-1 eyebrow" style={{borderColor: 'var(--border)', backgroundColor: 'var(--card)'}}>
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{backgroundColor: 'var(--accent)'}} />
          Trusted by teams at
        </span>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          height: railHeight,
        }}
      >

        {/* edge fades */}
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

        {/* lane */}
        <div
          ref={laneRef}
          className="absolute inset-0"
          style={{
            animationName: paused ? "none" : "cor-left",
            animationDuration: `${duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            animationFillMode: "both",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          <div
            className="flex h-full w-[200%] items-center px-6"
            style={{ gap: "var(--gap)" }}
          >
            {loopItems.map((c, i) => {
              const scale = (c.scale ?? 1) * 2; // Apply 1.5x additional scale on top of any per-logo scale
              const Logo = (
                <Image
                  src={c.logoSrc}
                  alt={c.alt ?? c.name}
                  width={Math.round(imgH * 6)} // arbitrary wide cap so aspect isn't constrained
                  height={imgH}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{
                    height: imgH,
                    width: "auto",
                    transform: `scale(${scale})`,
                    transformOrigin: "center",
                  }}
                  className="select-none object-contain grayscale contrast-75 opacity-90 transition-[filter,opacity,transform] duration-200 ease-out hover:grayscale-0 hover:contrast-100 hover:opacity-100"
                  priority={false}
                  unoptimized
                />
              );
              return (
                <div key={`${c.name}-${i}`} className="relative flex items-center justify-center">
                  {c.href ? (
                    <a href={c.href} aria-label={c.name} className="inline-flex items-center">
                      {Logo}
                    </a>
                  ) : (
                    Logo
                  )}
                  {/* slimmer separator to keep focus on logos */}
                  <div className="ml-4 h-1 w-1 rounded-full bg-[var(--muted)]/70" />
                </div>
              );
            })}
          </div>
        </div>

        {/* sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 8%, transparent 16%)",
            backgroundSize: "200% 100%",
            animationName: paused ? "none" : "cor-sheen",
            animationDuration: "12s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: "normal",
            animationFillMode: "both",
            animationPlayState: paused ? "paused" : "running",
            opacity: 0.55,
          }}
        />
      </div>

      <style jsx global>{`
        @keyframes cor-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes cor-sheen {
          0%   { background-position: -50% 0; }
          100% { background-position: 150% 0; }
        }
      `}</style>
    </section>
  );
}
