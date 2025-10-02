"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { INDUSTRIES } from "@/components/layout/megaMenuData";

export default function SolutionsPage() {
  const searchParams = useSearchParams();
  const industryParam = searchParams.get('industry');
  
  const [activeIndustry, setActiveIndustry] = useState(industryParam || INDUSTRIES[0].id);

  useEffect(() => {
    if (industryParam) {
      setActiveIndustry(industryParam);
    }
  }, [industryParam]);

  const currentIndustry = INDUSTRIES.find(ind => ind.id === activeIndustry) || INDUSTRIES[0];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 size-[600px] bg-[var(--accent)] opacity-5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 size-[500px] bg-[var(--accent)] opacity-5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)]/10 rounded-full mb-6">
              <div className="size-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-sm font-semibold text-[var(--accent)]">200+ Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-[var(--fg)] mb-6 leading-tight">
              Solutions Built for
              <br />
              <span className="text-[var(--accent)]">Every Industry</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              From FinTech to HealthTech, E-Commerce to EdTech — explore our comprehensive suite of custom software solutions designed to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Sidebar - Industry Navigation */}
            <div className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl border border-[var(--border)] p-6 shadow-lg">
                  <h2 className="text-xl font-bold text-[var(--fg)] mb-4">Browse by Industry</h2>
                  
                  <nav className="space-y-2">
                    {INDUSTRIES.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => setActiveIndustry(industry.id)}
                        className={[
                          "w-full text-left px-4 py-3 rounded-xl transition-all duration-200",
                          activeIndustry === industry.id
                            ? "bg-[var(--accent)] text-white shadow-md"
                            : "hover:bg-[var(--card)] text-[var(--fg)]"
                        ].join(" ")}
                      >
                        <div className="font-semibold text-sm mb-0.5">
                          {industry.name}
                        </div>
                        <div className={[
                          "text-xs",
                          activeIndustry === industry.id
                            ? "text-white/80"
                            : "text-[var(--muted)]"
                        ].join(" ")}>
                          {industry.solutions.length} solutions
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Right Content - Solutions Grid */}
            <div className="col-span-12 lg:col-span-9">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--fg)] mb-3">
                  {currentIndustry.name}
                </h2>
                <p className="text-base text-[var(--muted)]">
                  {currentIndustry.description} • {currentIndustry.solutions.length} solutions available
                </p>
              </div>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentIndustry.solutions.map((solution, idx) => (
                  <Link
                    key={`${currentIndustry.id}-${idx}`}
                    href={solution.href}
                    className="group block bg-white rounded-xl border border-[var(--border)] p-6 hover:border-[var(--accent)]/60 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="size-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)] transition-colors">
                        <div className="size-2 rounded-full bg-[var(--accent)] group-hover:bg-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[var(--accent)] text-sm font-semibold">
                      <span>Learn more</span>
                      <svg 
                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/80 rounded-3xl p-12 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 size-[400px] bg-white blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 size-[300px] bg-white blur-[80px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Can't find the right solution?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                We specialize in custom software development. Let's discuss your unique requirements and build something amazing together.
              </p>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--fg)] rounded-xl font-bold hover:bg-white/90 transition-all hover:scale-105 shadow-xl"
              >
                <span>Start a project</span>
                <svg 
                  className="w-5 h-5" 
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
        </div>
      </section>
    </div>
  );
}
