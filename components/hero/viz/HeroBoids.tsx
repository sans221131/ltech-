// /components/hero/viz/HeroBoids.tsx
"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { deviceScore } from "@/lib/utils/deviceScore";

// ---------- types ----------
type Particle = {
  x: number; y: number; vx: number; vy: number; tx: number; ty: number;
  heat: number; // placeholder for future trails/glow
};

type HeroBoidsProps = {
  headline: string;
  variant?: string;
  accent?: string;
  bg?: string;               // unused (no full-canvas trails)
  periodMs?: number;         // shimmer pulse cadence
  onPhaseChange?: (shape: "icon", phase: "hold") => void; // compat no-op
};

const DPR_CAP = 1.25;

// ---------- visuals (tuned) ----------
const TRAIL_ALPHA = 0.0;      // no full-canvas motion blur

// FASTER RETURN: increased base seek
const SEEK_BASE   = 0.085;    // was 0.055

const SPEED_DAMP  = 0.96;     // smooth drift
const CURL        = 0.015;    // ambient flow

// ---------- icon sizing/centering ----------
const ICON_VIEWBOX = 24;
const SHAPE_SCALE_FRAC = 0.86;
const SHAPE_CENTER_Y   = 0.50;

// ---------- distortion pulse (icon shimmer) ----------
const DISTORT_PERIOD_MS = 4500;
const DISTORT_DUR_MS    = 1400;
const DISTORT_MAX_PX    = 10;
const DISTORT_NOISE_SCL = 0.035;

export default function HeroBoids({
  headline,
  accent = "#272727",
  bg = "#F7F7F7",
  periodMs = DISTORT_PERIOD_MS,
  onPhaseChange,
}: HeroBoidsProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef  = useRef<HTMLCanvasElement | null>(null);

  // dev double-mount guard
  const initOnce = useRef(false);

  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (initOnce.current) return;
    initOnce.current = true;

    const wrap = wrapperRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    const score = deviceScore();
    const BASE = window.innerWidth < 520 ? 5000 : 10000;
    const TARGET_COUNT = Math.floor(Math.min(12000, Math.max(4000, BASE * (score / 3))));

    // ---------- state ----------
    let dpr = 1, width = 0, height = 0;
    let particles: Particle[] = [];
    let targetsIcon: { x: number; y: number }[] = [];
    let activeTargets: { x: number; y: number }[] = [];
    let running = false;

    // +10% PARTICLES: raise desired and cap
    // was 3200..12000; allow 10% headroom on the top end too
    let desiredCount = Math.floor(TARGET_COUNT * 1.10);
    const MIN_COUNT = 3200;
    const MAX_COUNT = 13200;

    // FPS tracking window
    let frames = 0;
    let fpsT0 = performance.now();
    const FPS_WIN_MS = 800;
    let lastAdaptMs = fpsT0;

    // timekeeping
    let last = performance.now();
    let distortT0 = last;

    // pointer state (kept) + RESPONSIVENESS: time-constant smoothing in step()
    const pointer = {
      active: false,
      tx: 0, ty: 0,   // latest event position
      x: 0, y: 0,     // smoothed position
      speedInst: 0,   // instantaneous speed (px/s) from events
      speedSm: 0,     // smoothed speed
      lastT: 0,
    };

    // disabled initial fly-in
    const seekRamp = { enabled: false as boolean, t0: 0, dur: 900 };

    // layout guard
    let didFirstLayout = false;

    // cached last CSS size to avoid thrash
    let lastCssW = 0, lastCssH = 0;
    let resizeRAF = 0;

    // DPR-aware, count-aware dot radius
    const dotRadius = (n: number) => {
      const base = 9000 / Math.max(1, n);
      const scaled = base * (1.15 / dpr);
      return clamp(scaled, 1.1, 3.2);
    };

    function resize() {
      cancelAnimationFrame(resizeRAF);
      resizeRAF = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const cssW = rect.width;
        const cssH = rect.height || Math.min(Math.max(window.innerHeight * 0.56, 320), 520);

        if (!hasArea(cssW, cssH)) return;

        // only act if size changed > 3%
        const wChanged = Math.abs(cssW - lastCssW) > Math.max(2, lastCssW * 0.03);
        const hChanged = Math.abs(cssH - lastCssH) > Math.max(2, lastCssH * 0.03);
        if (!didFirstLayout || wChanged || hChanged) {
          didFirstLayout = true;
          lastCssW = cssW; lastCssH = cssH;

          dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
          canvas.style.width = `${cssW}px`;
          canvas.style.height = `${cssH}px`;
          canvas.width  = Math.floor(cssW * dpr);
          canvas.height = Math.floor(cssH * dpr);
          width  = canvas.width;
          height = canvas.height;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

          targetsIcon = buildTargetsFromTechIcon();
          activeTargets = targetsIcon;

          if (!prefersReduced) initParticles();
          softClear();
          renderPoster();
        }
      });
    }

    // ---------- target builder ----------
    function buildTargetsFromTechIcon() {
      const wCss = Math.floor(width / dpr);
      const hCss = Math.floor(height / dpr);
      if (!hasArea(wCss, hCss)) return [];

      const off = document.createElement("canvas");
      const octx = off.getContext("2d")!;
      off.width  = wCss;
      off.height = hCss;
      octx.clearRect(0, 0, off.width, off.height);

      const side   = Math.min(off.width, off.height) * SHAPE_SCALE_FRAC;
      const scale  = side / ICON_VIEWBOX;
      const cx     = off.width  * 0.5;
      const cy     = off.height * SHAPE_CENTER_Y;
      const tx     = cx - (ICON_VIEWBOX * scale) / 2;
      const ty     = cy - (ICON_VIEWBOX * scale) / 2;

      const ICON_PATHS: string[] = [
        "M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z",
        "M12 22v-10",
        "M12 12l8.73 -5.04",
        "M3.27 6.96l8.73 5.04"
      ];

      octx.save();
      octx.translate(tx, ty);
      octx.scale(scale, scale);
      octx.strokeStyle = "#000";
      octx.lineWidth   = 2;
      octx.lineCap = "round";
      octx.lineJoin = "round";
      for (const d of ICON_PATHS) octx.stroke(new Path2D(d));
      octx.restore();

      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const minDim = Math.min(off.width, off.height);
      const step = Math.max(1, Math.round(minDim / 180));
      const pts: { x: number; y: number }[] = [];
      for (let yy = 0; yy < off.height; yy += step) {
        for (let xx = 0; xx < off.width; xx += step) {
          if (data[(yy * off.width + xx) * 4 + 3] > 128) pts.push({ x: xx, y: yy });
        }
      }
      shuffle(pts);
      return pts.slice(0, Math.min(MAX_COUNT, pts.length)); // cap raised to 13.2k
    }

    // ---------- particles ----------
    function initParticles() {
      const src = activeTargets.length ? activeTargets : targetsIcon;
      const N = Math.min(desiredCount, src.length || desiredCount);

      const arr: Particle[] = new Array(N);
      for (let i = 0; i < N; i++) {
        const t = src[i] || { x: Math.random() * (width / dpr), y: Math.random() * (height / dpr) };
        const jx = (Math.random() - 0.5) * 0.15;
        const jy = (Math.random() - 0.5) * 0.15;
        arr[i] = {
          x: t.x + jx,
          y: t.y + jy,
          vx: 0,
          vy: 0,
          tx: t.x,
          ty: t.y,
          heat: 0,
        };
      }
      particles = arr;

      seekRamp.enabled = false;
      seekRamp.t0 = performance.now();

      distortT0 = performance.now();
      onPhaseChange?.("icon", "hold");
    }

    // ---------- drawing ----------
    function softClear() {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);
    }
    function renderPoster() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = accent;
      const src = activeTargets;
      const r = Math.max(1, dotRadius(Math.max(1, src.length)) * 0.7);
      for (let i = 0; i < Math.min(1200, src.length); i += 12) {
        const t = src[i];
        ctx.beginPath();
        ctx.arc(t.x, t.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    // distortion 0..1 envelope
    function distortAlpha(now: number) {
      const t = (now - distortT0) % Math.max(1, periodMs);
      if (t > DISTORT_DUR_MS) return 0;
      const u = t / DISTORT_DUR_MS;
      return (u < 0.5) ? (2 * u) : (1 - (2 * u - 1) * 0.85);
    }

    function targetOffset(x: number, y: number, now: number) {
      const a = distortAlpha(now);
      if (a <= 0) return { dx: 0, dy: 0 };
      const k = DISTORT_NOISE_SCL;
      const t = now * 0.0012;
      const nx = Math.sin(x * k + t) + 0.6 * Math.sin(y * k * 1.3 - t * 0.8);
      const ny = Math.cos(y * k * 0.9 - t * 1.1) + 0.6 * Math.cos(x * k * 1.1 + t * 0.7);
      return { dx: nx * DISTORT_MAX_PX * a, dy: ny * DISTORT_MAX_PX * a };
    }

    // ---------- sim ----------
    function step(dt: number) {
      if (prefersReduced) return;
      const now = performance.now();

      // RESPONSIVENESS: time-constant smoothing (dt-aware), not fixed per-frame
      // smaller taus = snappier
      const TAU_POS  = 0.050; // 50 ms to follow pointer position
      const TAU_SPD  = 0.080; // 80 ms to follow speed
      const aPos = 1 - Math.exp(-dt / TAU_POS);
      const aSpd = 1 - Math.exp(-dt / TAU_SPD);

      pointer.x += (pointer.tx - pointer.x) * aPos;
      pointer.y += (pointer.ty - pointer.y) * aPos;
      pointer.speedSm += (pointer.speedInst - pointer.speedSm) * aSpd;

      const maxX = width / dpr;
      const maxY = height / dpr;

      // keep the same speed→force pattern
      const SPEED_MIN = 320;
      const SPEED_MAX = 1800;
      const s = clamp01((pointer.speedSm - SPEED_MIN) / (SPEED_MAX - SPEED_MIN));
      const pulsePower = s > 0 ? lerp(0, 1500, smoothstep(s)) : 0;
      const pulseRadius = s > 0 ? lerp(40, 220, s) : 0;

      // FASTER RETURN: boost seek when pointer is slow or inactive
      const returnBoost = pointer.active ? (1 + (1 - s) * 0.5) : 1.6; // up to 1.5x when slow; 1.6x when inactive
      const seekK = SEEK_BASE * returnBoost;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // ambient curl
        const tt = now * 0.0008;
        const fx = Math.sin(p.y * 0.012 + tt) * CURL + Math.sin(p.x * 0.017 + tt * 1.3) * CURL * 0.5;
        const fy = Math.cos(p.x * 0.014 + tt * 0.8) * CURL + Math.cos(p.y * 0.019 + tt * 1.1) * CURL * 0.6;

        // distorted target
        const off = targetOffset(p.tx, p.ty, now);
        const dx = (p.tx + off.dx) - p.x;
        const dy = (p.ty + off.dy) - p.y;

        p.vx += dx * seekK + fx;
        p.vy += dy * seekK + fy;

        // speed-based pointer influence
        if (pointer.active && s > 0) {
          const rx = p.x - pointer.x;
          const ry = p.y - pointer.y;
          const d2 = rx * rx + ry * ry + 1e-4;
          const d  = Math.sqrt(d2);
          const falloff = Math.exp(-(d * d) / (pulseRadius * pulseRadius));
          const force = pulsePower * falloff / (d + 1e-3);
          p.vx += (rx / d) * force;
          p.vy += (ry / d) * force;
        }

        // damping + integrate
        p.vx *= SPEED_DAMP;
        p.vy *= SPEED_DAMP;
        p.x += p.vx * dt * 60 * 0.016;
        p.y += p.vy * dt * 60 * 0.016;

        // soft bounds + tiny nudge to avoid sticking
        if (p.x < 0) { p.x = 0.001; p.vx *= -0.2; }
        else if (p.x > maxX) { p.x = maxX - 0.001; p.vx *= -0.2; }
        if (p.y < 0) { p.y = 0.001; p.vy *= -0.2; }
        else if (p.y > maxY) { p.y = maxY - 0.001; p.vy *= -0.2; }
      }
    }

    function draw() {
      // clear main
      if (TRAIL_ALPHA <= 0) softClear();
      else {
        ctx.globalAlpha = TRAIL_ALPHA;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;
      }

      // core dots
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.95;
      ctx.fillStyle = accent;
      const r = dotRadius(particles.length);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop(t: number) {
      const dt = Math.min(1 / 30, (t - last) / 1000);
      last = t;
      step(dt);
      draw();

      // adaptive count (kept)
      frames++;
      const winMs = t - fpsT0;
      if (winMs >= FPS_WIN_MS) {
        const fps = (frames * 1000) / winMs;
        frames = 0;
        fpsT0 = t;

        let newDesired = desiredCount;
        if (fps < 46 && particles.length > MIN_COUNT) {
          newDesired = Math.max(MIN_COUNT, Math.floor(particles.length * 0.85));
        } else if (fps > 60 && particles.length < MAX_COUNT) {
          newDesired = Math.min(MAX_COUNT, Math.ceil(particles.length * 1.08));
        }

        const delta = Math.abs(newDesired - particles.length) / Math.max(1, particles.length);
        if (delta >= 0.25 && t - lastAdaptMs > 1600) {
          lastAdaptMs = t;
          if (newDesired < particles.length) {
            particles.length = newDesired; // trim tail
          } else {
            const src = activeTargets.length ? activeTargets : targetsIcon;
            for (let i = particles.length; i < newDesired && i < src.length; i++) {
              const tp = src[i];
              particles.push({
                x: tp.x + (Math.random() - 0.5) * 0.2,
                y: tp.y + (Math.random() - 0.5) * 0.2,
                vx: 0, vy: 0, tx: tp.x, ty: tp.y, heat: 0,
              });
            }
          }
          desiredCount = newDesired;
        }
      }

      raf();
    }

    const raf = () => { rafId = requestAnimationFrame(loop); };
    let rafId = requestAnimationFrame(loop);

    // ---------- events ----------
    const onPointerMove = (e: PointerEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const t = performance.now();
      const dt = Math.max(1, t - (pointer.lastT || t)); // ms since last event
      const dx = x - (pointer.tx || x);
      const dy = y - (pointer.ty || y);
      const dist = Math.hypot(dx, dy);
      const speedPxPerS = (dist / dt) * 1000;

      pointer.tx = x;
      pointer.ty = y;
      pointer.speedInst = speedPxPerS;
      pointer.lastT = t;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.speedInst = 0;
    };
    const onPointerEnter = (e: PointerEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      pointer.tx = pointer.x = e.clientX - rect.left;
      pointer.ty = pointer.y = e.clientY - rect.top;
      pointer.active = true;
      pointer.speedInst = 0;
      pointer.speedSm = 0;
      pointer.lastT = performance.now();
    };
    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      pointer.tx = pointer.x = e.clientX - rect.left;
      pointer.ty = pointer.y = e.clientY - rect.top;
      pointer.active = true;
      pointer.speedInst = 200; // Give a little initial speed on click
      pointer.lastT = performance.now();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.intersectionRatio <= 0) { stop(); return; }
        if (!running && !prefersReduced) start();
      },
      { threshold: [0, 0.01, 0.2, 0.6, 0.9, 1] }
    );

    const ro = new ResizeObserver(() => resize());

    function start() {
      if (running) return;
      running = true;
      const now = performance.now();
      last = now;
      distortT0 = now;
      activeTargets = targetsIcon;
      raf();
    }
    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
      softClear();
      renderPoster();
    }

    // only ResizeObserver; no window resize to avoid double-firing
    canvas.addEventListener("pointermove", onPointerMove, { passive: false });
    canvas.addEventListener("pointerleave", onPointerLeave, { passive: true });
    canvas.addEventListener("pointerenter", onPointerEnter, { passive: false });
    canvas.addEventListener("pointerdown", onPointerDown, { passive: false });
    io.observe(wrap);
    ro.observe(wrap);

    resize();
    if (!prefersReduced) start();

    return () => {
      io.disconnect();
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointerenter", onPointerEnter);
      canvas.removeEventListener("pointerdown", onPointerDown);
      stop();
    };
  }, [prefersReduced, periodMs, accent, headline, onPhaseChange]);

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="block w-full h-full select-none [image-rendering:pixelated]"
        style={{ touchAction: 'none' }}
      />
    </div>
  );
}

/* ---------- helpers ---------- */

function hasArea(w: number, h: number) {
  return Number.isFinite(w) && Number.isFinite(h) && w > 2 && h > 2;
}

function shuffle<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function smoothstep(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}