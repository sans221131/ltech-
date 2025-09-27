export default function SiteFooter() {
  return (
    <footer className="section">
      <div className="section-inner">
        <div className="grid md:grid-cols-12 gap-8 text-sm">
          <div className="md:col-span-5">
            <div className="text-lg font-medium">LeafWay Tech</div>
            <p className="mt-2 text-[var(--muted)] max-w-sm">
              Architecture-first engineering. Platforms, edge APIs, AI systems.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <div className="font-medium">Company</div>
              <ul className="mt-2 space-y-1 text-[var(--muted)]">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#submit-brief">Submit a brief</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Legal</div>
              <ul className="mt-2 space-y-1 text-[var(--muted)]">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium">Contact</div>
              <ul className="mt-2 space-y-1 text-[var(--muted)]">
                <li><a href="mailto:hello@leafway.tech">hello@leafway.tech</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] text-[var(--muted)] text-xs">
          © {new Date().getFullYear()} LeafWay Tech
        </div>
      </div>
    </footer>
  );
}
