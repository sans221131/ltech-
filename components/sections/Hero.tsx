"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

  const ctx = canvas.getContext("2d")!;
  if (!ctx) return;

    let raf = 0;
    let anim = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const height = Math.max(360, rect.width * 0.4);
      // set backing store size
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(height * dpr);
      // set CSS size
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${height}px`;
      // logical 1 unit = 1 CSS px
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const nodes = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
    }));

    function frame() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // clear in CSS px because we set transform above
      ctx.clearRect(0, 0, rect.width, rect.height);

      // nodes
      ctx.fillStyle = "#ECEBE4";
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;

        const px = n.x * rect.width;
        const py = n.y * rect.height;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // links
      ctx.strokeStyle = "rgba(236,235,228,0.18)";
      nodes.forEach((a, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = (a.x - b.x) * rect.width;
          const dy = (a.y - b.y) * rect.height;
          const d = Math.hypot(dx, dy);
          if (d < 140) {
            ctx.globalAlpha = Math.max(0, 1 - d / 140) * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x * rect.width, a.y * rect.height);
            ctx.lineTo(b.x * rect.width, b.y * rect.height);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      if (anim) raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) anim = false;

    resize();
    if (anim) frame();

    return () => {
      anim = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <header className="section">
      <div className="section-inner">
        <p className="eyebrow">LeafWay Tech</p>
        <h1 className="h1 mt-3 max-w-3xl">
          Architecture-first engineering for teams that need boringly reliable software.
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          We design clean domain models, build edge-ready APIs, and scale resilient data layers.
        </p>

        <div className="mt-8 flex gap-3">
          <a href="#submit-brief" className="btn btn-primary">Submit a brief</a>
          <a href="#services" className="btn btn-ghost">See services</a>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border)] overflow-hidden relative">
          <canvas ref={canvasRef} className="w-full block" aria-hidden />
        </div>
      </div>
    </header>
  );
}
