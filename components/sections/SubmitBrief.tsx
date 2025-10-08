"use client";

import { useState, FormEvent } from "react";

export default function SubmitBrief() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate submission (replace with your actual API call)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormState("success");
      setFormData({ name: "", email: "", company: "", budget: "", timeline: "", message: "" });
      
      // Reset after 3 seconds
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section 
      id="submit-brief" 
      className="relative isolate text-[var(--fg)] overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(64, 64, 64, 0.08) 0%, var(--bg) 60%)"
      }}
    >
      {/* Full background glow */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(64, 64, 64, 0.12), transparent 70%)"
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Heading & Info */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="eyebrow mb-3 text-sm text-[var(--muted)]">Let's Talk</p>
            <h2 className="h2 mb-6 text-left">Start a project with us</h2>
            <p className="text-[var(--muted)] text-[16px] leading-relaxed mb-8 max-w-md">
              Tell us about your challenge. We'll respond within 24 hours with next steps or a quick call to clarify scope.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--accent)] text-white font-bold shrink-0">1</span>
                <div>
                  <div className="font-medium mb-1">Submit your brief</div>
                  <div className="text-[var(--muted)] text-[14px]">Share your project goals, timeline, and budget range.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--accent)] text-white font-bold shrink-0">2</span>
                <div>
                  <div className="font-medium mb-1">We review & respond</div>
                  <div className="text-[var(--muted)] text-[14px]">Our team evaluates fit and proposes an approach.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--accent)] text-white font-bold shrink-0">3</span>
                <div>
                  <div className="font-medium mb-1">Kick off together</div>
                  <div className="text-[var(--muted)] text-[14px]">Align on scope, schedule a kickoff, and start building.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="relative">
              {/* Card wrapper with subtle 3D effect */}
              <div className="rounded-2xl bg-[var(--card)] border border-[var(--border)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                      placeholder="Acme Inc."
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    >
                      <option value="">Select range</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="sm:col-span-2">
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (1-2 weeks)</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project, key challenges, and what success looks like..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-xs text-[var(--muted)]">
                    We'll respond within 24 hours
                  </p>
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="group relative px-8 py-3 rounded-full bg-[var(--accent)] text-white font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <span className="relative z-10">
                      {formState === "submitting" ? "Sending..." : formState === "success" ? "Sent! ✓" : "Send Brief"}
                    </span>
                  </button>
                </div>

                {/* Success message */}
                {formState === "success" && (
                  <div className="mt-6 p-4 rounded-lg bg-[var(--card)] border border-[var(--accent)] text-[var(--fg)] text-sm">
                    ✓ Thanks! We've received your brief and will be in touch soon.
                  </div>
                )}

                {formState === "error" && (
                  <div className="mt-6 p-4 rounded-lg bg-red-100 border border-red-300 text-red-900 text-sm">
                    Something went wrong. Please try again or email us directly at contact@infytion.com
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
