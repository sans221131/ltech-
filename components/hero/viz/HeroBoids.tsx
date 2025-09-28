// /components/hero/viz/HeroBoids.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { deviceScore } from "@/lib/utils/deviceScore";

type Phase = "leafway" | "brain";
type Particle = { x: number; y: number; vx: number; vy: number; tx: number; ty: number };

type HeroBoidsProps = {
  headline: string;          // kept for API symmetry
  variant?: string;          // visual variant (e.g. "flowGlow")
  accent?: string;           // particle color
  bg?: string;               // background for trail fade
  periodMs?: number;         // ms each phase holds (default 5000)
  onPhaseChange?: (p: Phase) => void;
};

const DPR_CAP = 1.25;
const LUCIDE_BRAIN_URL = "https://unpkg.com/lucide-static@latest/icons/brain.svg";

// visuals: calm + legible
const TRAIL_ALPHA = 0.0; // Remove trails completely
const GLOW_ALPHA  = 0.02;
const SPEED_DAMP  = 0.96; // Smoother motion
const SEEK_BASE   = 0.05; // Gentler convergence 
const CURL        = 0.015; // Reduced harsh patterns
const GRAVITY     = 0.02; // Much lighter gravity
const DOT_SIZE = (n: number) => Math.max(4.5, Math.min(6.5, 25000 / n)); // Bigger particles

// brain sizing/centering
const LUCIDE_ICON_SIZE = 24;
const BRAIN_SCALE_FRAC = 0.78;  // enlarge here if you want more
const BRAIN_CENTER_Y   = 0.50;  // vertical center (0..1)

export default function HeroBoids({
  headline,
  variant,
  accent = "#272727", // Match --fg from global theme
  bg = "#F7F7F7", // Match --bg from global theme
  periodMs = 5000,
  onPhaseChange,
}: HeroBoidsProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef  = useRef<HTMLCanvasElement | null>(null);
  const rafRef     = useRef(0);
  const prefersReduced = useReducedMotion();
  const [lucidePaths, setLucidePaths] = useState<string[] | null>(null);

  // fetch Lucide brain once
  useEffect(() => {
    let cancelled = false;
    fetch(LUCIDE_BRAIN_URL, { mode: "cors" })
      .then(r => r.text())
      .then(xml => {
        if (cancelled) return;
        const doc = new DOMParser().parseFromString(xml, "image/svg+xml");
        const paths = Array.from(doc.querySelectorAll("path"))
          .map(p => p.getAttribute("d") || "")
          .filter(Boolean);
        if (paths.length) setLucidePaths(paths);
      })
      .catch(() => { /* fallback inside builder handles it */ });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    // narrow to non-null locals for the duration of this effect
    const _wrap: HTMLDivElement = wrap;
    const _canvas: HTMLCanvasElement = canvas;

    const ctx = _canvas.getContext("2d", { alpha: true })!;

    const score = deviceScore();
    const BASE = window.innerWidth < 520 ? 5000 : 10000; // 6k for small, 10k for large
    const TARGET_COUNT = Math.floor(Math.min(12000, Math.max(4000, BASE * (score / 3)))); // Adjusted limits

    // state
    let dpr = 1, width = 0, height = 0;
    let particles: Particle[] = [];
    let targetsLeaf:  { x: number; y: number }[] = [];
    let targetsBrain: { x: number; y: number }[] = [];
    let activeTargets: { x: number; y: number }[] = [];
    let running = false;
    let phase: Phase = "leafway";
    let phaseT0 = performance.now();
    let last = performance.now();

    // pointer repulsion pulse
    let pulse: { x: number; y: number; power: number; radius: number; decay: number } | null = null;

    // ramp-in for seek, so scattered start breathes before converging
    const seekRamp = { enabled: false as boolean, t0: 0, dur: 900 }; // ms

    function setPhase(p: Phase) {
      if (phase === p) return;
      phase = p;
      phaseT0 = performance.now();
      onPhaseChange?.(phase);
      remapTargets(phase === "leafway" ? targetsLeaf : targetsBrain);
    }

    function resize() {
      const rect = _wrap.getBoundingClientRect();
      const cssW = rect.width;
      const cssH = rect.height || Math.min(Math.max(window.innerHeight * 0.56, 320), 520);
      dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      _canvas.style.width = `${cssW}px`;
      _canvas.style.height = `${cssH}px`;
      _canvas.width  = Math.floor(cssW * dpr);
      _canvas.height = Math.floor(cssH * dpr);
      width  = _canvas.width;
      height = _canvas.height;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      targetsLeaf  = buildTargetsFromText("LeafWay");
      targetsBrain = buildTargetsFromLucideBrain();
      activeTargets = phase === "leafway" ? targetsLeaf : targetsBrain;

      if (!prefersReduced) initParticles();
      hardClear();
      renderPoster();
    }

    // ---------- target builders ----------
    function buildTargetsFromText(text: string) {
      const off = document.createElement("canvas");
      const octx = off.getContext("2d")!;
      off.width  = Math.floor(width / dpr);
      off.height = Math.floor(height / dpr);
      octx.clearRect(0, 0, off.width, off.height);
      octx.fillStyle = "#000";
      const fontPx = clamp(Math.floor(off.width / 6.5), 72, 150); // Bigger font: 6.5 instead of 8.5, increased min/max
      octx.font = `800 ${fontPx}px "Inter","DM Sans",system-ui,-apple-system,Segoe UI,Roboto`;
      octx.textBaseline = "middle";
      const w = octx.measureText(text).width;
      const x = Math.floor((off.width - w) / 2);
      const y = Math.floor(off.height * 0.50);
      octx.fillText(text, x, y);

      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const step = Math.max(1, Math.floor(off.width / 330));
      const pts: { x: number; y: number }[] = [];
      for (let yy = 0; yy < off.height; yy += step)
        for (let xx = 0; xx < off.width; xx += step)
          if (data[(yy * off.width + xx) * 4 + 3] > 128) pts.push({ x: xx, y: yy });
      shuffle(pts);
      return pts.slice(0, Math.min(TARGET_COUNT, pts.length));
    }

    function buildTargetsFromLucideBrain() {
      // Rasterize Lucide strokes, sample alpha. Centered + enlarged.
      const off = document.createElement("canvas");
      const octx = off.getContext("2d")!;
      off.width  = Math.floor(width / dpr);
      off.height = Math.floor(height / dpr);
      octx.clearRect(0, 0, off.width, off.height);

      const side   = Math.min(off.width, off.height) * BRAIN_SCALE_FRAC;
      const scale  = side / LUCIDE_ICON_SIZE;
      const cx     = off.width  * 0.5;
      const cy     = off.height * BRAIN_CENTER_Y;
      const tx     = cx - (LUCIDE_ICON_SIZE * scale) / 2;
      const ty     = cy - (LUCIDE_ICON_SIZE * scale) / 2;

      // fallback strokes if Lucide fetch failed
      const FALLBACK: string[] = [
        "M70 60c0-16 14-28 30-28 10 0 19 4 24 11 5-7 14-11 24-11 16 0 30 12 30 28 0 5-1 9-3 13 6 5 9 12 9 20 0 18-16 32-36 32H100c-20 0-36-14-36-32 0-8 3-15 9-20-2-4-3-8-3-13z",
        "M88 58c8-6 18-6 26 0","M114 58c7-5 16-5 23 0","M92 72c10-5 22-5 32 0",
        "M86 86c12-6 30-6 42 0","M120 96c10-3 18-3 26 0"
      ];
      const paths = lucidePaths && lucidePaths.length ? lucidePaths : FALLBACK;

      octx.save();
      octx.translate(tx, ty);
      octx.scale(scale, scale);
      octx.strokeStyle = "#000";
      octx.lineWidth   = 3.0;
      octx.lineCap = "round";
      octx.lineJoin = "round";
      for (const d of paths) octx.stroke(new Path2D(d));
      octx.restore();

      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const step = Math.max(1, Math.floor(off.width / 340));
      const pts: { x: number; y: number }[] = [];
      for (let yy = 0; yy < off.height; yy += step)
        for (let xx = 0; xx < off.width; xx += step)
          if (data[(yy * off.width + xx) * 4 + 3] > 128) pts.push({ x: xx, y: yy });
      shuffle(pts);
      return pts.slice(0, Math.min(TARGET_COUNT, pts.length));
    }

    // ---------- particles ----------
    function initParticles() {
      const src = activeTargets.length ? activeTargets : targetsLeaf;
      const N = Math.min(TARGET_COUNT, src.length);

      // scatter start across canvas (CSS pixels), blue-noise-ish
      const scatter = makeJitteredScatter(N, width / dpr, height / dpr);

      particles = new Array(N);
      for (let i = 0; i < N; i++) {
        const s = scatter[i] || { x: Math.random() * (width / dpr), y: Math.random() * (height / dpr) }; // Fallback if scatter is missing
        const t = src[i] || { x: (width / dpr) * 0.5, y: (height / dpr) * 0.5 }; // Fallback if target is missing
        particles[i] = {
          x: s.x,
          y: s.y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          tx: t.x,
          ty: t.y,
        };
      }

      // ramp-in seek so the scatter is visible before converge
      seekRamp.t0 = performance.now();
      seekRamp.enabled = true;
    }

    function remapTargets(next: { x: number; y: number }[]) {
      if (!particles.length || !next.length) return;
      const m = next.length;
      for (let i = 0; i < particles.length; i++) {
        const n = next[i % m];
        particles[i].tx = n.x;
        particles[i].ty = n.y;
      }
      activeTargets = next;
    }

    // ---------- drawing ----------
    function softClear() {
      // Since TRAIL_ALPHA is 0, this just does a hard clear
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);
    }
    function hardClear() {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);
    }
    function renderPoster() {
      hardClear();
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = accent;
      const src = phase === "leafway" ? targetsLeaf : targetsBrain;
      for (let i = 0; i < Math.min(1200, src.length); i += 10) {
        const t = src[i];
        ctx.fillRect(t.x, t.y, 1.8, 1.8);
      }
      ctx.globalAlpha = 1;
    }

    function step(dt: number) {
      if (prefersReduced) return;

      // flip phases on schedule
      if (performance.now() - phaseT0 >= periodMs) {
        setPhase(phase === "leafway" ? "brain" : "leafway");
      }

      // pulse decay
      if (pulse) {
        pulse.power *= pulse.decay;
        pulse.radius *= 0.995;
        if (pulse.power < 40) pulse = null;
      }

      // seek ramp factor
      const ramp = seekRamp.enabled
        ? Math.min(1, (performance.now() - seekRamp.t0) / seekRamp.dur)
        : 1;

      const N = particles.length;
      for (let i = 0; i < N; i++) {
        const p = particles[i];

        // More organic flow with multiple noise layers
        const t = performance.now() * 0.0008;
        const fx = Math.sin(p.y * 0.012 + t) * CURL + Math.sin(p.x * 0.017 + t * 1.3) * CURL * 0.5;
        const fy = Math.cos(p.x * 0.014 + t * 0.8) * CURL + Math.cos(p.y * 0.019 + t * 1.1) * CURL * 0.6;

        const dx = p.tx - p.x, dy = p.ty - p.y;
        p.vx += dx * (SEEK_BASE * ramp) + fx;
        p.vy += dy * (SEEK_BASE * ramp) + fy + GRAVITY;

        // repulsion pulse: spread out, then seek brings them back
        if (pulse) {
          const rx = p.x - pulse.x;
          const ry = p.y - pulse.y;
          const d2 = rx * rx + ry * ry + 1e-4;
          const d  = Math.sqrt(d2);
          const falloff = Math.exp(-(d * d) / (pulse.radius * pulse.radius));
          const force = pulse.power * falloff / (d + 1e-3);
          p.vx += (rx / d) * force;
          p.vy += (ry / d) * force;
        }

        p.vx *= SPEED_DAMP;
        p.vy *= SPEED_DAMP;
        p.x += p.vx * dt * 60 * 0.016;
        p.y += p.vy * dt * 60 * 0.016;

        // Remove harsh border collisions - let particles flow naturally beyond bounds
        // They'll be pulled back by seek behavior toward targets anyway
      }

      if (seekRamp.enabled && ramp >= 1) seekRamp.enabled = false;
    }

    function draw() {
      softClear();

      // glow
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = accent;
      ctx.globalAlpha = GLOW_ALPHA;
      const glowR = 3.2;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fill();
      }

      // core dots
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.95;
      ctx.fillStyle = accent;
      const r = DOT_SIZE(particles.length);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillRect(p.x, p.y, r, r);
      }
      ctx.globalAlpha = 1;
    }

    function loop(t: number) {
      const dt = Math.min(1 / 30, (t - last) / 1000);
      last = t;
      step(dt);
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }

    // events
    const onPointerMove = (e: PointerEvent) => {
      const rect = _canvas.getBoundingClientRect();
      pulse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        power: 2200,  // blast strength
        radius: 140,  // area of effect
        decay: 0.90,  // fade per frame
      };
    };
    const onPointerLeave = () => { pulse = null; };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.intersectionRatio <= 0) { stop(); return; }
        if (!running && !prefersReduced) start();
      },
      { threshold: [0, 0.01, 0.2, 0.6, 0.9, 1] }
    );

    function start() {
      if (running) return;
      running = true;
      last = performance.now();
      phase = "leafway";
      phaseT0 = last;
      activeTargets = targetsLeaf.length ? targetsLeaf : activeTargets;
      rafRef.current = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(rafRef.current);
      renderPoster();
    }

  window.addEventListener("resize", resize, { passive: true });
  _canvas.addEventListener("pointermove", onPointerMove);
  _canvas.addEventListener("pointerleave", onPointerLeave);
  io.observe(_wrap);

    resize();
    if (!prefersReduced) start();

    return () => {
      io.disconnect();
      window.removeEventListener("resize", resize);
      _canvas.removeEventListener("pointermove", onPointerMove);
      _canvas.removeEventListener("pointerleave", onPointerLeave);
      stop();
    };
  }, [headline, accent, bg, periodMs, prefersReduced, onPhaseChange, lucidePaths]);

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="block w-full h-full select-none [image-rendering:pixelated]"
      />
    </div>
  );
}

/* ---------- helpers ---------- */

function shuffle<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// Blue-noise-ish scatter: grid + jitter for even distribution without clumps
function makeJitteredScatter(count: number, widthCss: number, heightCss: number) {
  const aspect = widthCss / Math.max(1, heightCss);
  const cols = Math.max(8, Math.round(Math.sqrt(count * aspect)));
  const rows = Math.max(6, Math.round(count / cols));
  const cellW = widthCss / cols;
  const cellH = heightCss / rows;

  const pts: { x: number; y: number }[] = [];
  
  // Generate grid points first
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pts.length >= count) break;
      const jx = Math.random() * 0.8 + 0.1; // keep inside cell
      const jy = Math.random() * 0.8 + 0.1;
      pts.push({ x: (c + jx) * cellW, y: (r + jy) * cellH });
    }
    if (pts.length >= count) break;
  }
  
  // Fill remaining points with random positions if needed
  while (pts.length < count) {
    pts.push({ 
      x: Math.random() * widthCss, 
      y: Math.random() * heightCss 
    });
  }
  
  // light shuffle so draw order isn't gridy
  for (let i = pts.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [pts[i], pts[j]] = [pts[j], pts[i]];
  }
  return pts;
}
