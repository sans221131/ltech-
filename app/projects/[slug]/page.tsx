//app/projects/[slug]/page.tsx
"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECT_SOLUTIONS } from "@/lib/whatwedo/projects";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECT_SOLUTIONS.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 lg:px-12 border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-12" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--fg)] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[var(--border)]">/</li>
              <li>
                <Link href="/#what-we-do" className="hover:text-[var(--fg)] transition-colors">
                  Work
                </Link>
              </li>
              <li className="text-[var(--border)]">/</li>
              <li className="text-[var(--fg)] font-medium">{project.project}</li>
            </ol>
          </nav>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-[var(--fg)] text-white text-sm font-semibold rounded-full">
                {project.industry}
              </span>
              <span className="text-sm text-[var(--muted)]">{project.year}</span>
              {project.client && (
                <>
                  <span className="text-[var(--border)]">•</span>
                  <span className="text-sm text-[var(--muted)]">{project.client}</span>
                </>
              )}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--fg)] mb-6 leading-tight">
              {project.project}
            </h1>
            
            <p className="text-2xl text-[var(--muted)] leading-relaxed max-w-4xl">
              {project.solution}
            </p>
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[var(--border)]">
            <div>
              <div className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                Client
              </div>
              <div className="text-lg font-semibold text-[var(--fg)]">
                {project.client || "Confidential"}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                Duration
              </div>
              <div className="text-lg font-semibold text-[var(--fg)]">
                {project.duration || "6 months"}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                Year
              </div>
              <div className="text-lg font-semibold text-[var(--fg)]">
                {project.year || "2024"}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-2">
                Industry
              </div>
              <div className="text-lg font-semibold text-[var(--fg)]">
                {project.industry}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              {project.description && (
                <div>
                  <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                    Overview
                  </h2>
                  <p className="text-lg text-[var(--fg)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                    The Challenge
                  </h2>
                  <p className="text-lg text-[var(--fg)] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Approach */}
              {project.approach && (
                <div>
                  <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                    Our Approach
                  </h2>
                  <p className="text-lg text-[var(--fg)] leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}
            </div>

            {/* Results Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {project.results && project.results.length > 0 && (
                  <div className="bg-[var(--bg)] rounded-2xl p-8 border border-[var(--border)]">
                    <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-6">
                      Key Results
                    </h3>
                    <div className="space-y-6">
                      {project.results.map((result, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold text-[var(--fg)] mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-[var(--muted)]">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="px-6 lg:px-12 py-20 bg-[var(--bg)]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-[var(--border)] hover:border-[var(--fg)]/20 transition-all"
                >
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[var(--muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-8">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <div 
                  key={idx}
                  className="px-5 py-2.5 bg-white border border-[var(--border)] rounded-lg text-sm font-medium text-[var(--fg)] hover:border-[var(--fg)] transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="px-6 lg:px-12 py-20 bg-[var(--fg)] text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-4xl">
              <svg className="w-12 h-12 mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
                {project.testimonial.quote}
              </blockquote>
              <div>
                <div className="font-bold text-lg">{project.testimonial.author}</div>
                <div className="text-white/70">{project.testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="px-6 lg:px-12 py-20 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider">
              More Projects
            </h2>
            <Link 
              href="/#what-we-do"
              className="text-sm font-semibold text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECT_SOLUTIONS.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="group block bg-white border border-[var(--border)] rounded-xl p-8 hover:border-[var(--fg)] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-[var(--bg)] text-xs font-semibold text-[var(--fg)] rounded-full">
                    {relatedProject.industry}
                  </span>
                  <svg 
                    className="w-5 h-5 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--fg)]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--fg)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {relatedProject.project}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {relatedProject.solution}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-24 bg-[var(--fg)] text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Have a similar project in mind?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you build production-grade software that scales.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[var(--fg)] rounded-xl font-bold hover:bg-white/90 transition-all hover:scale-105"
            >
              <span>Start a conversation</span>
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
            
            <Link 
              href="/#what-we-do"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              <span>View all work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
