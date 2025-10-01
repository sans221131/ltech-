// /app/services/[slug]/page.tsx
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { getServiceData } from "./serviceData";

const VALID = new Set([
  "ai-agent-development-services",
  "offshore-development-services",
  "software-re-engineering",
  "cto-as-a-service-for-startups",
  "product-discovery-and-technical-architecture",
  "platform-modernization-roadmaps",
  "data-pipeline-design-and-governance",
  "realtime-interfaces-and-motion-systems",
  "observability-and-reliability-readiness",
  "ai-augmented-operations-automation",
]);

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  if (!VALID.has(slug)) notFound();
  
  const data = getServiceData(slug);
  if (!data) notFound();

  return (
    <main className="relative bg-[var(--bg)] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50/30 via-white/50 to-lime-50/30 border-b border-[var(--border)]">
        {/* Background accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(800px 600px at 20% 30%, rgba(234,179,8,0.1), transparent 60%), radial-gradient(600px 500px at 80% 70%, rgba(163,230,53,0.08), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--muted)] mb-8">
            <Link href="/" className="hover:text-[var(--fg)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-[var(--fg)] transition-colors">
              Solutions
            </Link>
            <span>/</span>
            <span className="text-[var(--fg)] font-medium">{data.title}</span>
          </nav>

          {/* Title & Description */}
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-lime-400 shadow-sm" />
              <p className="eyebrow text-[var(--muted)] tracking-widest">Solution Profile</p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--fg)] leading-[1.1] mb-8 tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[var(--muted)] leading-relaxed max-w-3xl font-light">
              {data.tagline}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {data.tags.map((tag, idx) => (
                <span
                  key={tag}
                  className="group relative px-5 py-2 text-sm font-semibold bg-white/90 backdrop-blur-sm border border-amber-200 rounded-xl text-[var(--fg)] shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <span className="relative z-10">{tag}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              ))}
            </div>
          </div>
          
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-4">
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[var(--muted)] leading-relaxed text-base">
                    {data.overview}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="pt-12">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-3xl font-bold text-[var(--fg)]">
                    Key Features
                  </h3>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-300 via-yellow-200 to-transparent" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {data.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-gradient-to-br from-white to-amber-50/30 border-2 border-[var(--border)] rounded-2xl p-7 hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Top gradient accent */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />
                      
                      {/* Number badge */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
                          <span className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white text-lg font-bold shadow-md">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className="flex-1 font-bold text-[var(--fg)] text-[17px] leading-snug pt-2">
                          {feature.title}
                        </h4>
                      </div>
                      
                      <p className="text-[14px] text-[var(--muted)] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* When You Need This */}
              <div className="pt-12">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="text-3xl font-bold text-[var(--fg)]">
                    When You Need This
                  </h3>
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-300 via-yellow-200 to-transparent" />
                </div>
                
                <div className="space-y-5">
                  {data.whenYouNeedThis.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden bg-gradient-to-br from-amber-50/80 via-yellow-50/50 to-lime-50/30 border-l-4 border-amber-400 rounded-2xl p-6 hover:shadow-lg hover:border-l-amber-500 transition-all duration-300"
                    >
                      {/* Background pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="flex items-start gap-5 relative z-10">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl blur-md opacity-40" />
                            <span className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white text-base font-bold shadow-lg">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h5 className="font-bold text-[var(--fg)] text-[18px] mb-3 leading-tight">
                            {item.title}
                          </h5>
                          <p className="text-[15px] text-[var(--muted)] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Industries */}
                <div className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/20 backdrop-blur-sm border-2 border-amber-200 rounded-3xl p-7 shadow-lg">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-transparent rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400" />
                      <h4 className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                        Industries
                      </h4>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--fg)] mb-8 leading-tight">
                      Where it excels
                    </h3>
                    <div className="space-y-5">
                      {data.industries.map((industry, idx) => (
                        <div key={idx} className="group pb-5 border-b border-amber-200/60 last:border-0 last:pb-0 hover:border-amber-300 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <div className="flex-1">
                              <h5 className="font-bold text-[var(--fg)] text-[15px] mb-1 group-hover:text-amber-600 transition-colors">
                                {industry.title}
                              </h5>
                              <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                                {industry.category}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-100 to-lime-100 border-2 border-amber-300 rounded-3xl p-8 shadow-xl">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-200/40 via-yellow-200/40 to-lime-200/40 opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/80 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 animate-pulse" />
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                        Let's Talk
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-[var(--fg)] mb-3 leading-tight">
                      Ready to scope the next sprint?
                    </h4>
                    <p className="text-[14px] text-[var(--fg)]/70 mb-7 leading-relaxed">
                      Share your brief and we'll continue the discovery inside the workspace chat.
                    </p>
                    <div className="space-y-3">
                      <Link
                        href="/#submit-brief"
                        className="block w-full text-center px-6 py-4 bg-[var(--fg)] text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-200 shadow-lg"
                      >
                        Start a conversation
                      </Link>
                      <button className="block w-full text-center px-6 py-4 bg-white/90 backdrop-blur-sm border-2 border-amber-300 text-[var(--fg)] font-semibold rounded-2xl hover:bg-white hover:border-amber-400 hover:shadow-md transition-all duration-200">
                        Download overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
