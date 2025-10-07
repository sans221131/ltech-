"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin-login");
  }

  return (
    <nav className="bg-white border-b border-zinc-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin/invoices" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LW</span>
              </div>
              <span className="font-bold text-zinc-900">Admin Dashboard</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/admin/invoices"
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  pathname === "/admin/invoices"
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                Invoices
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-zinc-600 hover:text-zinc-900 transition"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
