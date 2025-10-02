"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu";

const NAV_LINKS = [
  { href: "/#process", label: "Process" },
  { href: "/#team", label: "Team" },
  { href: "/#careers", label: "Careers" },
  { href: "/#submit-brief", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto px-6 lg:px-12" style={{ maxWidth: "1600px" }}>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--accent)] rounded-xl blur-sm opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/80 text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                LW
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] text-[var(--fg)] tracking-tight">
                LeafWay Tech
              </span>
              <span className="text-[9px] text-[var(--muted)] tracking-[0.15em] uppercase font-medium">
                Engineering Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Solutions Mega Menu */}
            <div className="group relative">
              <button 
                className="group/btn relative px-4 py-2 text-[13px] font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 rounded-lg hover:bg-[var(--card)]"
                onMouseEnter={() => setMenuOpen(true)}
              >
                <span>Solutions</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-[var(--card)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/#submit-brief"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-[var(--fg)] rounded-xl hover:bg-[var(--accent)] hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <span>Start a project</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <button
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg border border-[var(--border)] bg-white/50 backdrop-blur-sm text-[var(--fg)] hover:bg-white hover:border-[var(--accent)] transition-all"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
