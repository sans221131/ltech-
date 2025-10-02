"use client";

import HeroBoids from "./viz/HeroBoids";


type Client = { name: string; logoSrc: string; alt?: string };

type HeroProps = {
  eyebrow?: string;
  headline: string;
  headline2?: string;
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
  headline2,
  subhead = "Edge-first APIs, resilient data layers, and motion that respects budgets.",
  ctaText = "Explore solutions",
  ctaHref = "/solutions",
  accent = "#272727", // Match --fg from global theme
  bg = "#F7F7F7", // Match --bg from global theme
  clients = [],
}: HeroProps) {
  return (
    <section
      className="relative isolate w-full h-screen flex items-center justify-center"
      style={{backgroundColor: 'var(--bg)', color: 'var(--fg)'}}
      aria-labelledby="hero-heading"
    >
      {/* Main Container */}
      <div className="relative mx-auto px-6 md:px-10 lg:px-16 w-full" style={{maxWidth: '1400px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left: Content */}
          <div className="relative z-10 flex flex-col justify-center">
            {eyebrow && (
              <div className="eyebrow mb-6">
                {eyebrow}
              </div>
            )}
            <h1 id="hero-heading" className="h1 font-sans">
              {headline}
              {headline2 && (
                <>
                  <br />
                  {headline2}
                </>
              )}
            </h1>
            {subhead && (
              <p className="mt-6 font-serif" style={{color: 'var(--muted)', fontSize: '1.25rem', lineHeight: '1.7', maxWidth: '600px'}}>
                {subhead}
              </p>
            )}
            <div className="mt-8">
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

          {/* Right: Boids Visualization */}
          <div className="relative h-[550px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
            <HeroBoids
              variant="flowGlow"
              headline={headline2 ? `${headline} ${headline2}` : headline}
              accent="#272727"
              bg="#F7F7F7"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
