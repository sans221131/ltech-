"use client";

import { useState, useEffect } from "react";

type Invoice = {
  id: string;
  receipt: string;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  amount_in_paise: number;
  currency: string;
  provider: string;
  provider_invoice_id: string | null;
  provider_short_url: string | null;
  status: string;
  notes: any;
  created_at: Date | null;
  updated_at: Date | null;
};

export default function AdminInvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    amount: "",
    currency: "INR",
    redirect_url: "",
    description: "",
  });

  useEffect(() => {
    fetchInvoices();
  }, []);

  async function fetchInvoices() {
    try {
      const res = await fetch("/api/admin/invoices");
      if (res.ok) {
        const data = await res.json();
        setInvoices(data.invoices || []);
      }
    } catch (err) {
      console.error("Failed to fetch invoices:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    // Validate URL
    if (formData.redirect_url) {
      try {
        new URL(formData.redirect_url);
      } catch {
        setError("Invalid redirect URL");
        setSubmitting(false);
        return;
      }
    }

    try {
      const res = await fetch("/api/admin/invoices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount_in_paise: Math.round(parseFloat(formData.amount) * 100),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(`Invoice created! Receipt: ${data.invoice.receipt}`);
        setFormData({
          customer_name: "",
          customer_email: "",
          customer_phone: "",
          amount: "",
          currency: "INR",
          redirect_url: "",
          description: "",
        });
        setShowForm(false);
        fetchInvoices();
      } else {
        setError(data.error || "Failed to create invoice");
      }
    } catch (err) {
      setError("Failed to create invoice");
    } finally {
      setSubmitting(false);
    }
  }

  const formatMoney = (paise: number, currency: string) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency || "INR",
    }).format(paise / 100);
  };

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "draft":
        return "bg-zinc-100 text-zinc-800 border-zinc-200";
      case "issued":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "expired":
        return "bg-rose-100 text-rose-800 border-rose-200";
      default:
        return "bg-zinc-100 text-zinc-800 border-zinc-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Invoices</h1>
          <p className="text-zinc-600 mt-1">Manage and create payment invoices</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Invoice
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}

      {/* Create Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Create New Invoice</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={formData.customer_name}
                  onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Customer Email
                </label>
                <input
                  type="email"
                  value={formData.customer_email}
                  onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Customer Phone
                </label>
                <input
                  type="tel"
                  value={formData.customer_phone}
                  onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Amount (in currency units) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                  placeholder="100.00"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Currency *
                </label>
                <select
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                >
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="AED">AED - UAE Dirham</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Redirect URL (after payment) *
                </label>
                <input
                  type="url"
                  value={formData.redirect_url}
                  onChange={(e) => setFormData({ ...formData, redirect_url: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                  placeholder="https://example.com/thank-you"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none"
                rows={3}
                placeholder="What is this invoice for?"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition disabled:opacity-50"
              >
                {submitting ? "Creating..." : "Create Invoice"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-zinc-100 text-zinc-900 font-semibold rounded-lg hover:bg-zinc-200 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Invoices List */}
      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-200">
          <h2 className="text-lg font-bold text-zinc-900">All Invoices</h2>
        </div>

        {loading ? (
          <div className="p-12 text-center text-zinc-500">Loading...</div>
        ) : invoices.length === 0 ? (
          <div className="p-12 text-center text-zinc-500">
            No invoices yet. Create your first one!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    Receipt
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-zinc-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-mono text-sm font-medium text-zinc-900">
                        {invoice.receipt}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-zinc-900">
                        {invoice.customer_name || "—"}
                      </div>
                      {invoice.customer_email && (
                        <div className="text-xs text-zinc-500">{invoice.customer_email}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-zinc-900">
                        {formatMoney(invoice.amount_in_paise, invoice.currency)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getBadgeColor(
                          invoice.status
                        )}`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600">
                      {invoice.created_at
                        ? new Date(invoice.created_at).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={`/invoices?ref=${invoice.receipt}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 hover:text-zinc-600 font-medium"
                      >
                        View →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
