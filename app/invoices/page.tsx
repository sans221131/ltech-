"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SiteLayout from "@/components/layout/SiteLayout";

type Invoice = {
  id: string;
  receipt: string;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  amount_in_paise: number;
  currency: string;
  status: string;
  notes: any;
  created_at: Date | null;
};

const fmtMoney = (amountSubunits: number, currency: string) => {
  const decimals = 2;
  const value = (amountSubunits / 100).toFixed(decimals);
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 2,
  }).format(parseFloat(value));
};

const badgeClass = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-emerald-100 text-emerald-800 border-emerald-300";
    case "draft":
      return "bg-amber-100 text-amber-900 border-amber-300";
    case "expired":
      return "bg-zinc-200 text-zinc-800 border-zinc-300";
    case "cancelled":
      return "bg-rose-100 text-rose-800 border-rose-300";
    default:
      return "bg-zinc-100 text-zinc-800 border-zinc-300";
  }
};

function InvoicesContent() {
  const params = useSearchParams();
  const initialRef = params.get("ref") || "";
  const inputRef = useRef<HTMLInputElement>(null);

  const [queryRef, setQueryRef] = useState(initialRef);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(false);
  const [looking, setLooking] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [paidToast, setPaidToast] = useState<string | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (initialRef) void lookupInvoice(initialRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function lookupInvoice(ref: string) {
    setLooking(true);
    setErr(null);
    setInvoice(null);
    try {
      const res = await fetch(`/api/invoices/lookup?ref=${encodeURIComponent(ref)}`);
      if (!res.ok) {
        throw new Error(`Invoice not found (${res.status})`);
      }
      const data = await res.json();
      if (!data.invoice) throw new Error("Invoice not found.");
      setInvoice(data.invoice);
    } catch (e: any) {
      setErr(e?.message || "Could not find invoice.");
    } finally {
      setLooking(false);
    }
  }

  async function handlePay() {
    if (!invoice) return;
    setLoading(true);
    setErr(null);
    setPaidToast(null);

    try {
      // Show processing message
      setPaidToast("Processing payment...");
      
      // Mock payment for now - just mark as paid
      const res = await fetch("/api/invoices/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ receipt: invoice.receipt }),
      });

      if (!res.ok) throw new Error("Payment failed");
      
      const data = await res.json();
      
      // Don't update invoice state to show paid status
      // Just redirect immediately after short delay
      if (data.invoice.notes?.redirect_url) {
        setTimeout(() => {
          window.location.href = data.invoice.notes.redirect_url;
        }, 1500);
      } else {
        // If no redirect URL, show success and keep loading
        setPaidToast("Payment processed successfully!");
      }
    } catch (e: any) {
      setErr(e?.message || "Payment failed");
      setLoading(false);
    }
    // Keep loading true to show processing state
  }

  const canPay = invoice && invoice.status === "draft";
  const description = invoice?.notes?.description || `Invoice ${invoice?.receipt}`;

  return (
    <main className="min-h-[100dvh] bg-[#F8F7F3] text-[#1C1C1C]">
      <section className="mx-auto w-full max-w-4xl px-6 py-14">
        <header className="mb-10">
          <p className="uppercase tracking-[0.2em] text-xs text-zinc-600">
            Have an Invoice?
          </p>
          <h1
            className="mt-2 text-4xl sm:text-5xl font-semibold"
            style={{ fontFamily: "Coolvetica, system-ui, sans-serif" }}
          >
            Pay your invoice
          </h1>
          <p className="mt-3 text-zinc-700 max-w-2xl">
            Enter your invoice reference to fetch details securely and complete payment.
          </p>
        </header>

        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="p-5 sm:p-6 border-b border-zinc-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (queryRef.trim()) lookupInvoice(queryRef.trim());
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <label htmlFor="invoice-ref" className="sr-only">
                  Invoice reference
                </label>
                <input
                  ref={inputRef}
                  id="invoice-ref"
                  value={queryRef}
                  onChange={(e) => setQueryRef(e.target.value)}
                  placeholder="e.g. LW-2025-0001"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none ring-0 focus:border-zinc-900"
                  autoComplete="off"
                  inputMode="text"
                  aria-describedby="invoice-help"
                />
                <span className="pointer-events-none absolute -bottom-[2px] left-2 right-2 h-[2px] bg-[#F4C3C2] rounded-full" />
              </div>

              <button
                type="submit"
                disabled={looking || !queryRef.trim()}
                className="rounded-xl px-5 py-3 font-medium tracking-wide bg-zinc-900 text-white hover:opacity-90 disabled:opacity-50"
              >
                {looking ? "Looking…" : "Find invoice"}
              </button>
            </form>
            <p id="invoice-help" className="mt-2 text-xs text-zinc-500">
              Tip: Press <kbd className="px-1.5 py-0.5 rounded border">⌘/Ctrl</kbd>+
              <kbd className="px-1.5 py-0.5 rounded border">K</kbd> to re-focus the box.
            </p>
          </div>

          <div className="p-5 sm:p-6">
            {err && (
              <div className="mb-4 rounded-lg border border-rose-300 bg-rose-50 p-3 text-rose-800">
                {err}
              </div>
            )}

            {paidToast && (
              <div className="mb-4 rounded-lg border border-blue-300 bg-blue-50 p-4 text-blue-800">
                <div className="flex items-center gap-3">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-800"></div>
                  <div>
                    <p className="font-semibold">{paidToast}</p>
                    {invoice?.notes?.redirect_url && (
                      <p className="text-sm mt-1">Redirecting you shortly...</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {invoice ? (
              <div className="grid gap-4 sm:grid-cols-[1.6fr_1fr]">
                <div className="rounded-xl border border-zinc-200 p-4 sm:p-5 bg-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm text-zinc-500">Invoice Ref</div>
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${badgeClass(
                        invoice.status
                      )}`}
                      title={`Status: ${invoice.status}`}
                    >
                      ● {invoice.status}
                    </span>
                  </div>
                  <div className="mt-1 text-lg font-medium">{invoice.receipt}</div>

                  {description && (
                    <>
                      <div className="mt-4 text-sm text-zinc-500">Description</div>
                      <p className="text-zinc-800">{description}</p>
                    </>
                  )}

                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-xs text-zinc-500">Billed To</div>
                      <div className="font-medium break-words">{invoice.customer_name || "—"}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Email</div>
                      <div className="font-medium text-sm break-all">{invoice.customer_email || "—"}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Phone</div>
                      <div className="font-medium">{invoice.customer_phone || "—"}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 p-4 sm:p-5 bg-white relative overflow-hidden">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 100% 0%, #F4C3C2 0%, transparent 50%)",
                    }}
                  />
                  <div className="relative">
                    <div className="text-sm text-zinc-500">Amount Due</div>
                    <div className="mt-1 text-3xl font-semibold">
                      {fmtMoney(invoice.amount_in_paise, invoice.currency)}
                    </div>
                    <div className="mt-2 text-xs text-zinc-600">
                      Currency: <span className="font-medium">{invoice.currency}</span>
                    </div>

                    {canPay ? (
                      <button
                        onClick={handlePay}
                        disabled={loading}
                        className="mt-5 w-full rounded-xl bg-[#1C1C1C] text-white py-3 font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading && (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        )}
                        {loading ? "Processing payment..." : "Pay securely"}
                      </button>
                    ) : (
                      <div className="mt-5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-amber-800">
                        {invoice.status === "paid"
                          ? "⚠️ This invoice has already been paid."
                          : `Payments are not available: ${invoice.status}.`}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-zinc-500">
                Enter a reference above to fetch invoice details.
              </p>
            )}
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          By paying, you agree to the quoted scope and our standard terms.
        </p>
      </section>

      <style jsx global>{`
        :root {
          --lw-bg: #F8F7F3;
          --lw-ink: #1C1C1C;
          --lw-accent: #F4C3C2;
        }
        kbd {
          background: #fff;
          border-color: #d4d4d8;
        }
      `}</style>
    </main>
  );
}

export default function InvoicesPage() {
  return (
    <SiteLayout>
      <Suspense fallback={
        <main className="min-h-[100dvh] bg-[#F8F7F3] text-[#1C1C1C] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zinc-900 mx-auto mb-4"></div>
            <p className="text-zinc-600">Loading invoice page...</p>
          </div>
        </main>
      }>
        <InvoicesContent />
      </Suspense>
    </SiteLayout>
  );
}
