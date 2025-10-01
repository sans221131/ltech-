"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#team", label: "Team" },
  { href: "/#submit-brief", label: "Start" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        "border-b",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10" style={{ maxWidth: "var(--maxw)" }}>
        <Link href="/" className="flex items-center gap-2 font-sans text-sm tracking-[0.24em] uppercase text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
          <span className="inline-flex size-8 items-center justify-center rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-xs font-semibold text-[var(--fg)]">
            LW
          </span>
          LeafWay Tech
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-serif transition hover:text-[var(--fg)]"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 transform bg-[var(--fg)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#submit-brief"
            className="hidden rounded-full border border-black/10 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm font-sans text-[var(--fg)] transition hover:bg-white hover:border-black/20 hover:shadow-sm md:inline-flex"
          >
            Book a call
          </Link>
          <a
            href="mailto:hello@leafway.tech"
            className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-sm font-sans text-[var(--fg)] transition hover:bg-white hover:border-black/20 hover:shadow-sm"
            aria-label="Email LeafWay Tech"
          >
            @
          </a>
        </div>
      </div>
    </header>
  );
}
