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
      <div className="relative mx-auto px-6 md:px-10 lg:px-16 w-full h-full flex items-center" style={{maxWidth: '1400px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full">
          
          {/* Left: Content - Order 2 on mobile, 1 on desktop */}
          <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1">
            {eyebrow && (
              <div className="eyebrow mb-4">
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
              <p className="mt-4 md:mt-6 font-serif" style={{color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px'}}>
                {subhead}
              </p>
            )}
            <div className="mt-6 md:mt-8">
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

          {/* Right: Boids Visualization - Order 1 on mobile, 2 on desktop */}
          <div className="relative h-[350px] md:h-[500px] lg:h-[800px] flex items-center justify-center order-1 lg:order-2">
            {/* Interactive Hint - Above cube, different positioning for mobile vs desktop */}
            <div className="absolute top-2 md:top-20 lg:top-24 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <div className="flex items-center gap-2.5 animate-[bounce_2s_ease-in-out_infinite]">
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 text-[#666] animate-pulse" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" 
                  />
                </svg>
                <span className="text-sm md:text-base font-semibold text-[#666] whitespace-nowrap">
                  Drag to interact
                </span>
              </div>
            </div>

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
