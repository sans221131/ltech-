"use client";

import HeroBoids from "./viz/HeroBoids";


type Client = { name: string; logoSrc: string; alt?: string };

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subhead?: string;
  ctaText?: string;
  ctaHref?: string;
  accent?: string;   // particle color
  bg?: string;       // canvas fade color, your page bg
  clients?: Client[];
};

export default function Hero({
  eyebrow = "Architecture-first engineering",
  headline,
  subhead = "Edge-first APIs, resilient data layers, and motion that respects budgets.",
  ctaText = "Explore solutions",
  ctaHref = "/solutions",
  accent = "#272727", // Match --fg from global theme
  bg = "#F7F7F7", // Match --bg from global theme
  clients = [],
}: HeroProps) {
  return (
    <section
      className="relative isolate w-full pt-16 md:pt-24"
      style={{backgroundColor: 'var(--bg)', color: 'var(--fg)'}}
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto px-6 md:px-10 lg:px-16" style={{maxWidth: 'var(--maxw)'}}>
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left: text */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            {eyebrow && (
              <div className="eyebrow">
                {eyebrow}
              </div>
            )}
            <h1 id="hero-heading" className="mt-3 h1 font-sans">
              {headline}
            </h1>
            {subhead && (
              <p className="mt-4 font-serif max-w-xl" style={{color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.6'}}>
                {subhead}
              </p>
            )}
            <div className="mt-6">
              <a
                href={ctaHref}
                className="btn btn-outline"
              >
                {ctaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: viz (kept responsive, fixed height on desktop) */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <div className="relative h-[42vh] min-h-[320px] max-h-[520px] md:h-[56vh]">
              <HeroBoids
                variant="flowGlow"
                headline={headline}
                accent="#272727" // Use theme foreground color
                bg="#F7F7F7" // Use theme background color
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
