"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu";
import { INDUSTRIES } from "./megaMenuData";

const NAV_LINKS = [
  { href: "/#process", label: "Process" },
  { href: "/#team", label: "Team" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [selectedMobileIndustry, setSelectedMobileIndustry] = useState<string>(INDUSTRIES[0].id);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  // focus + portal refs
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const menuCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => setMounted(true), []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  // close on hashchange too
  useEffect(() => {
    const onHash = () => {
      setMenuOpen(false);
      setMobileMenuOpen(false);
      setMobileSubmenuOpen(null);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // escape only when something is open
  useEffect(() => {
    if (!(mobileMenuOpen || menuOpen)) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileMenuOpen(false);
        setMobileSubmenuOpen(null);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen, menuOpen]);

  // body scroll lock (works with Lenis)
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const body = document.body;
    const scrollY = window.scrollY || 0;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    (window as any).lenis?.stop?.();

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      window.scrollTo(0, scrollY);
      (window as any).lenis?.start?.();
    };
  }, [mobileMenuOpen]);

  // focus trap inside drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;
    lastActiveRef.current = document.activeElement as HTMLElement;

    const first = drawerRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusables = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => !el.hasAttribute("disabled"));
      if (!focusables.length) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === firstEl) {
        e.preventDefault(); lastEl.focus();
      } else if (!e.shiftKey && active === lastEl) {
        e.preventDefault(); firstEl.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      lastActiveRef.current?.focus?.();
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-[70] transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent",
        ].join(" ")}
      >
        <div className="mx-auto px-8 lg:px-16" style={{ maxWidth: "1920px" }}>
          <div className="flex h-[64px] items-center justify-between">
            {/* Logo (text only) */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex">
                <span className="font-bold text-[22px] text-[var(--fg)] tracking-tight leading-tight">
                  LeafWay Tech
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              <div
                className="group relative"
                onMouseEnter={() => {
                  if (window.matchMedia("(pointer: fine)").matches) {
                    if (menuCloseTimeoutRef.current) {
                      clearTimeout(menuCloseTimeoutRef.current);
                      menuCloseTimeoutRef.current = null;
                    }
                    setMenuOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(pointer: fine)").matches) {
                    menuCloseTimeoutRef.current = setTimeout(() => {
                      setMenuOpen(false);
                    }, 300);
                  }
                }}
              >
                <button
                  className="group/btn relative px-5 py-2.5 text-[20px] font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-150 flex items-center gap-2 rounded-lg hover:bg-[var(--card)]"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                  aria-controls="solutions-menu"
                  onClick={() => setMenuOpen(v => !v)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault(); setMenuOpen(v => !v);
                    }
                  }}
                >
                  <span>Solutions</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id="solutions-menu" role="menu" aria-hidden={!menuOpen}>
                  <MegaMenu 
                    isOpen={menuOpen} 
                    onClose={() => setMenuOpen(false)}
                    menuCloseTimeoutRef={menuCloseTimeoutRef}
                  />
                </div>
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-5 py-2.5 text-[20px] font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-150 rounded-lg hover:bg-[var(--card)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <Link
                href="/#submit-brief"
                className="hidden lg:inline-flex items-center gap-2.5 px-7 py-3 text-[15px] font-bold text-white bg-[var(--fg)] rounded-full hover:bg-[var(--accent)] hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-[var(--accent)] tracking-wide"
              >
                <span>CONTACT</span>
              </Link>
              <button
                ref={burgerRef}
                onClick={() => {
                  const next = !mobileMenuOpen;
                  setMobileMenuOpen(next);
                  if (!next) setMobileSubmenuOpen(null);
                }}
                className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg border border-[var(--border)] bg-white/50 backdrop-blur-sm text-[var(--fg)] hover:bg-white hover:border-[var(--accent)] transition-all"
                aria-label="Menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE: portal so it sits above header and behaves on iOS */}
      {mounted && mobileMenuOpen &&
        createPortal(
          <>
            <div
              data-lenis-prevent
              className="fixed inset-0 z-[95] bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSubmenuOpen(null);
              }}
              aria-hidden="true"
            />
            <div
              id="mobile-menu"
              ref={drawerRef}
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              aria-label="Mobile menu"
              className="fixed inset-y-0 right-0 z-[110] w-[90%] max-w-md bg-white shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto"
            >
              {/* MAIN LEVEL */}
              {!mobileSubmenuOpen && (
                <div className="h-full flex flex-col overflow-hidden">
                  <div className="relative bg-gradient-to-br from-[var(--accent)]/10 via-white to-white px-6 pt-8 pb-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,64,64,0.08),transparent_50%)]" aria-hidden="true" />
                    <div className="relative">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Navigation</p>
                      <h2 className="text-2xl font-bold text-[var(--fg)]">Explore LeafWay</h2>
                    </div>
                  </div>

                  <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
                    {/* SERVICES with industry categories */}
                    <button
                      onClick={() => setMobileSubmenuOpen("services")}
                      className="group w-full text-left p-5 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/80 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" aria-hidden="true" />
                      <div className="relative flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-lg font-bold mb-1">Services</div>
                          <div className="text-sm text-white/80">Browse all solutions by industry</div>
                        </div>
                        <div className="size-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* The rest are anchors to sections */}
                    <Link
                      href="/#process"
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200"
                    >
                      <div className="size-10 rounded-lg bg-[var(--card)] group-hover:bg-[var(--accent)]/10 flex items-center justify-center transition-all">
                        <div className="size-2 rounded-full bg-[var(--accent)]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">Process</div>
                        <div className="text-xs text-[var(--muted)]">How we work</div>
                      </div>
                      <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <Link
                      href="/#team"
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200"
                    >
                      <div className="size-10 rounded-lg bg-[var(--card)] group-hover:bg-[var(--accent)]/10 flex items-center justify-center transition-all">
                        <div className="size-2 rounded-full bg-[var(--accent)]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">Team</div>
                        <div className="text-xs text-[var(--muted)]">Meet the experts</div>
                      </div>
                      <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* Careers removed */}

                    <Link
                      href="/#submit-brief"
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200"
                    >
                      <div className="size-10 rounded-lg bg-[var(--card)] group-hover:bg-[var(--accent)]/10 flex items-center justify-center transition-all">
                        <div className="size-2 rounded-full bg-[var(--accent)]" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">Request</div>
                        <div className="text-xs text-[var(--muted)]">Get in touch</div>
                      </div>
                      <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </nav>

                  <div className="p-6 border-t border-[var(--border)]">
                    <Link
                      href="/#submit-brief"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2.5 w-full px-7 py-4 text-[15px] font-bold text-white bg-[var(--fg)] rounded-full hover:bg-[var(--accent)] hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-[var(--accent)]"
                    >
                      <span>CONTACT</span>
                    </Link>
                  </div>
                </div>
              )}



              {/* SERVICES with horizontally scrollable industry categories */}
              {mobileSubmenuOpen === "services" && (
                <div className="h-full flex flex-col bg-white animate-in slide-in-from-right duration-300">
                  <div className="relative bg-gradient-to-br from-[var(--accent)]/10 via-white to-white border-b border-[var(--border)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(64,64,64,0.08),transparent_50%)]" aria-hidden="true" />
                    <button
                      onClick={() => setMobileSubmenuOpen(null)}
                      className="relative flex items-center gap-3 px-6 py-4 text-sm font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors group"
                    >
                      <div className="size-8 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-all shadow-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                      <span>Back to menu</span>
                    </button>
                    <div className="relative px-6 pb-4">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Browse by Industry</p>
                      <h3 className="text-2xl font-bold text-[var(--fg)]">All Services</h3>
                    </div>

                    {/* Horizontally scrollable industry categories */}
                    <div className="relative px-6 pb-4">
                      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
                        {INDUSTRIES.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedMobileIndustry(cat.id)}
                            className={[
                              "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0",
                              selectedMobileIndustry === cat.id
                                ? "bg-[var(--accent)] text-white border-2 border-[var(--accent)]"
                                : "bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/5"
                            ].join(" ")}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Services for selected industry only */}
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    {INDUSTRIES.filter((industry) => industry.id === selectedMobileIndustry).map((industry) => (
                      <div key={industry.id} id={`industry-${industry.id}`} className="mb-8 last:mb-0">
                        {/* Industry header */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="size-2 rounded-full bg-[var(--accent)]" />
                          <h4 className="text-base font-bold text-[var(--fg)]">{industry.name}</h4>
                          <span className="text-xs text-[var(--muted)]">({industry.solutions.length})</span>
                        </div>

                        {/* Services grid */}
                        <div className="space-y-2">
                          {industry.solutions.map((solution) => (
                            <Link
                              key={`${industry.id}-${solution.title}`}
                              href="/services/offshore-development-services"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileSubmenuOpen(null);
                              }}
                              className="group flex items-center gap-3 p-3 rounded-lg bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200"
                            >
                              <div className="size-8 rounded-lg bg-[var(--card)] group-hover:bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 transition-all">
                                <div className="size-1.5 rounded-full bg-[var(--accent)]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                                  {solution.title}
                                </div>
                              </div>
                              <svg className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>,
          document.body
        )
      }
    </>
  );
}
