export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer 
      aria-labelledby="footer-heading" 
      className="relative isolate text-[var(--fg)] overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(64, 64, 64, 0.08) 0%, var(--bg) 60%)"
      }}
    >
      <h2 id="footer-heading" className="sr-only">Website footer</h2>

      {/* Full background glow */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(64, 64, 64, 0.12), transparent 70%)"
        }}
      />

      {/* Middle: large centered footer block */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-[var(--card)] p-8 md:p-12 text-center shadow-[0_24px_70px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)]">
          <a href="#top" className="inline-flex items-center gap-4 mb-8 group">
            <span className="inline-flex w-16 h-16 rounded-full bg-[var(--accent)] items-center justify-center text-white font-extrabold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">LW</span>
            <span className="text-3xl font-serif font-semibold tracking-tight">LeafWay Tech</span>
          </a>

          <nav aria-label="Footer center navigation" className="mt-6">
            <ul className="inline-flex flex-wrap gap-x-10 gap-y-4 items-center justify-center text-[15px]">
              <li>
                <a className="relative px-2 py-1 text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5 inline-block" href="#about">About</a>
              </li>
              <li>
                <a className="relative px-2 py-1 text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5 inline-block" href="#services">Services</a>
              </li>
              <li>
                <a className="relative px-2 py-1 text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5 inline-block" href="#process">Process</a>
              </li>
              <li>
                <a className="relative px-2 py-1 text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5 inline-block" href="#careers">Careers</a>
              </li>
              <li>
                <a className="relative px-2 py-1 text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-200 hover:-translate-y-0.5 inline-block" href="#submit-brief">Submit a brief</a>
              </li>
            </ul>
          </nav>

          <div className="mt-8 flex items-center justify-center gap-8">
            <a aria-label="Twitter" className="group text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-300" href="#">
              <svg className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0023 3z" fill="currentColor"/>
              </svg>
            </a>
            <a aria-label="LinkedIn" className="group text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-300" href="#">
              <svg className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8H12v2.2c.7-1.2 2.2-2.2 4.6-2.2 4.9 0 5.8 3.2 5.8 7.4V24H17v-7.6c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.7H7.5z" fill="currentColor"/>
              </svg>
            </a>
            <a aria-label="Email" className="group text-[var(--muted)] hover:text-[var(--fg)] transition-all duration-300" href="mailto:hello@leafway.tech">
              <svg className="transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M2 4h20v16H2z" stroke="currentColor" strokeWidth="0" fill="currentColor"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="0" fill="currentColor"/>
              </svg>
            </a>
          </div>

          <p className="mt-8 text-[14px] text-[var(--fg)] leading-relaxed max-w-[62ch] mx-auto font-medium">
            Architecture-first engineering. Platforms, edge APIs, AI systems. We partner with businesses to build resilient, observable products.
          </p>
        </div>
      </div>

      {/* Bottom: slim bar */}
      <div className="bg-[var(--bg)]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[var(--muted)]">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex w-9 h-9 rounded-full bg-[var(--accent)] items-center justify-center text-white font-bold">LW</span>
            <span className="text-sm">LeafWay Tech</span>
          </div>

          <div className="text-center">© {year} LeafWay Tech</div>

          <div className="flex items-center gap-6">
            <a aria-label="Privacy" className="hover:underline text-[var(--muted)] hover:text-[var(--fg)] transition-colors" href="#">Privacy</a>
            <a aria-label="Terms" className="hover:underline text-[var(--muted)] hover:text-[var(--fg)] transition-colors" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
