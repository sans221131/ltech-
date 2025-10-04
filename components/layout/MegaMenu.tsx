"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { INDUSTRIES, type Industry } from "./megaMenuData";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuCloseTimeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
}

export default function MegaMenu({ isOpen, onClose, menuCloseTimeoutRef }: MegaMenuProps) {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(INDUSTRIES[0]);

  const handleIndustryChange = (industry: Industry) => {
    if (industry.id !== activeIndustry.id) {
      setActiveIndustry(industry);
    }
  };

  const handleMouseEnter = () => {
    // Clear any pending close timeout when entering megamenu
    if (menuCloseTimeoutRef.current) {
      clearTimeout(menuCloseTimeoutRef.current);
      menuCloseTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    // Add 300ms delay before closing
    menuCloseTimeoutRef.current = setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div 
      className={[
        "fixed left-0 right-0 top-[72px] transition-all duration-300 z-50",
        isOpen 
          ? "opacity-100 visible pointer-events-auto" 
          : "opacity-0 invisible pointer-events-none"
      ].join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white/98 backdrop-blur-3xl border-t border-[var(--border)] shadow-[0_30px_100px_rgba(0,0,0,0.15)]">
        <div className="mx-auto px-8" style={{ maxWidth: "100vw" }}>
          <div className="grid grid-cols-12" style={{ height: "calc(100vh - 72px)", maxHeight: "none" }}>
            {/* Left Sidebar - Industry Tabs */}
            <div className="col-span-2 border-r border-[var(--border)] bg-gradient-to-br from-[var(--card)]/30 to-white/50 p-8 py-12 overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--muted)] mb-2">
                  Browse by
                </p>
                <h3 className="text-[26px] font-bold text-[var(--fg)]">Industries</h3>
              </div>
              
              <nav className="space-y-2">
                {INDUSTRIES.map((industry, idx) => (
                  <button
                    key={industry.id}
                    onMouseEnter={() => handleIndustryChange(industry)}
                    className={[
                      "group/tab w-full text-left px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden",
                      activeIndustry.id === industry.id
                        ? "bg-[var(--accent)] text-white shadow-xl scale-[1.03]"
                        : "hover:bg-white/80 text-[var(--fg)] hover:shadow-md",
                    ].join(" ")}
                    style={{
                      transitionDelay: activeIndustry.id === industry.id ? "0ms" : `${idx * 20}ms`
                    }}
                  >
                    {/* Active indicator */}
                    {activeIndustry.id === industry.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/50" />
                    )}
                    
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="font-bold text-[16px] mb-1.5">
                          {industry.name}
                        </div>
                        <div
                          className={[
                            "text-[12.5px] transition-colors leading-snug",
                            activeIndustry.id === industry.id
                              ? "text-white/90"
                              : "text-[var(--muted)] group-hover/tab:text-[var(--fg)]",
                          ].join(" ")}
                        >
                          {industry.description}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <svg 
                        className={[
                          "w-4 h-4 transition-all duration-300 flex-shrink-0 mt-1",
                          activeIndustry.id === industry.id 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 -translate-x-2 group-hover/tab:opacity-50 group-hover/tab:translate-x-0"
                        ].join(" ")}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Content - Solutions Grid (5x4) */}
            <div className="col-span-10 p-12 py-12 bg-white relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-8 pb-6 border-b border-[var(--border)]/50">
                  <div className="flex items-start justify-between gap-4">
                  <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="size-2.5 rounded-full bg-[var(--accent)]" />
                        <h3 className="text-[32px] font-bold text-[var(--fg)]">
                          {activeIndustry.name}
                        </h3>
                      </div>
                      <p className="text-[15px] text-[var(--muted)] max-w-3xl">
                        {activeIndustry.description} • {activeIndustry.solutions.length} solutions available
                      </p>
                    </div>                    <Link
                      href={`/solutions?industry=${activeIndustry.id}`}
                      className="group/link inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-[var(--accent)] hover:text-white bg-[var(--accent)]/10 hover:bg-[var(--accent)] rounded-xl transition-all duration-200 hover:shadow-lg whitespace-nowrap"
                    >
                      <span>View all solutions</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* 5 columns x 4 rows grid - optimized for performance */}
                <div className="grid grid-cols-5 gap-x-4 gap-y-4 overflow-y-auto pr-4 custom-scrollbar" style={{ maxHeight: "calc(100vh - 360px)" }}>
                  {activeIndustry.solutions.map((solution, idx) => (
                    <Link
                      key={`${activeIndustry.id}-${solution.title}`}
                      href={`/solutions?industry=${activeIndustry.id}#${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group/solution block p-4 rounded-xl hover:bg-gradient-to-br hover:from-[var(--card)] hover:to-white border border-[var(--border)]/40 hover:border-[var(--accent)]/60 transition-colors duration-150 hover:shadow-lg"
                    >
                      <div className="flex items-start gap-3">
                        <div className="size-2 rounded-full bg-[var(--accent)]/40 group-hover/solution:bg-[var(--accent)] mt-1.5 flex-shrink-0 transition-colors duration-150" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[14px] font-semibold text-[var(--fg)] mb-1.5 leading-tight group-hover/solution:text-[var(--accent)] transition-colors duration-150">
                            {solution.title}
                          </h4>
                          <p className="text-[12px] text-[var(--muted)] leading-snug line-clamp-2">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Footer note */}
                <div className="mt-8 pt-6 border-t border-[var(--border)]/50">
                  <p className="text-[13px] text-[var(--muted)] text-center">
                    Can't find what you're looking for? <Link href="/contact" className="text-[var(--accent)] font-semibold hover:underline">Contact us</Link> for custom solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--border) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 10px;
          transition: background 0.2s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--muted);
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
