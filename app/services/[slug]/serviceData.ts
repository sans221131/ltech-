// /app/services/[slug]/serviceData.ts

export type ServiceData = {
  title: string;
  tagline: string;
  tags: string[];
  overview: string;
  features: Array<{ title: string; description: string }>;
  whenYouNeedThis: Array<{ title: string; description: string }>;
  industries: Array<{ title: string; category: string }>;
};

export function getServiceData(slug: string): ServiceData | null {
  const dataMap: Record<string, ServiceData> = {
    "ai-agent-development-services": {
      title: "AI Agent Development Services",
      tagline:
        "Task-grounded agents that ship work, not demos: planning, tools, evals, guardrails.",
      tags: ["AI", "Agents", "Automation", "Enterprise AI"],
      overview:
        "Transform your operations with cutting-edge AI agent systems. Designed for production reliability and real-world impact, our solutions integrate planning engines, tool orchestration, comprehensive evaluation frameworks, and robust guardrails to deliver agents that actually complete tasks—not just impressive demos.",
      features: [
        {
          title: "Agentic Planning Engine",
          description:
            "Multi-step task decomposition with backtracking and replanning when plans fail in the real world.",
        },
        {
          title: "Tool Orchestration",
          description:
            "Connect agents to your APIs, databases, and internal services with secure, auditable tool-use patterns.",
        },
        {
          title: "Evaluation & Guardrails",
          description:
            "Continuous evals, safety checks, and human-in-the-loop workflows to keep agents reliable and aligned.",
        },
        {
          title: "Production Monitoring",
          description:
            "Real-time observability with token usage tracking, latency metrics, and success rate dashboards.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Manual Process Inefficiencies",
          description:
            "Teams spending hours on repetitive workflows like data entry, document processing, or customer routing that could be automated.",
        },
        {
          title: "Limited Scalability",
          description:
            "Current automation brittle and hard-coded, unable to adapt to exceptions or handle nuanced scenarios.",
        },
        {
          title: "Compliance & Audit Requirements",
          description:
            "Need complete traceability of agent actions with rollback capabilities and human oversight checkpoints.",
        },
      ],
      industries: [
        { title: "Financial Services", category: "FINTECH" },
        { title: "Healthcare Operations", category: "HEALTHCARE" },
        { title: "Legal Document Processing", category: "LEGAL TECH" },
      ],
    },

    "offshore-development-services": {
      title: "Offshore Development Services",
      tagline:
        "Senior pods you can actually trust for delivery, integrated into your cadence.",
      tags: ["Offshore", "Team Augmentation", "Engineering"],
      overview:
        "Get senior engineering teams that integrate seamlessly into your workflow. Our pods come with proven track records, clear communication rhythms, and shared timezone overlap to keep momentum high—no handoff friction, no endless context-switching.",
      features: [
        {
          title: "Senior-Only Teams",
          description:
            "Every pod member has 5+ years experience shipping production systems at scale.",
        },
        {
          title: "Timezone-Aware Scheduling",
          description:
            "Guaranteed 4-hour daily overlap with your core team for standups, pairing, and decisions.",
        },
        {
          title: "Integrated Tooling",
          description:
            "Teams onboard to your Git, CI/CD, monitoring, and comms stack on day one—no separate silos.",
        },
        {
          title: "Delivery Cadence Sync",
          description:
            "Align sprint cycles, retros, and planning sessions so offshore feels like in-house.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Scaling Constraints",
          description:
            "Hiring locally is slow or expensive, but you need to double engineering capacity this quarter.",
        },
        {
          title: "Skill Gaps",
          description:
            "Missing critical expertise (e.g., ML, mobile, or DevOps) that's hard to hire for domestically.",
        },
        {
          title: "Budget Pressure",
          description:
            "Need to stretch runway without compromising on quality or velocity.",
        },
      ],
      industries: [
        { title: "SaaS Startups", category: "SOFTWARE" },
        { title: "E-Commerce Platforms", category: "RETAIL" },
        { title: "Fintech Scale-Ups", category: "FINTECH" },
      ],
    },

    "software-re-engineering": {
      title: "Software Re-Engineering",
      tagline:
        "Lift a legacy codebase into a modern shape without stopping the world.",
      tags: ["Legacy", "Modernization", "Refactoring"],
      overview:
        "Modernize aging systems with incremental, low-risk refactoring strategies. We map your legacy architecture, design migration paths that preserve business logic, and execute phased rollouts so you can ship new features while the transformation happens underneath.",
      features: [
        {
          title: "Code Archaeology & Mapping",
          description:
            "Document implicit dependencies, data flows, and business rules buried in legacy code.",
        },
        {
          title: "Strangler Fig Patterns",
          description:
            "Incrementally replace old modules with new implementations behind feature flags and routing layers.",
        },
        {
          title: "Test Harness Generation",
          description:
            "Build characterization tests to lock in existing behavior before refactoring starts.",
        },
        {
          title: "Zero-Downtime Migrations",
          description:
            "Dual-write patterns and sync layers to migrate data and traffic with rollback safety nets.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Technical Debt Accumulation",
          description:
            "Legacy monolith slowing down feature development; every change risks breaking unrelated parts.",
        },
        {
          title: "Compliance & Security Gaps",
          description:
            "Old frameworks with unpatched vulnerabilities that can't be upgraded without major rewrites.",
        },
        {
          title: "Performance Bottlenecks",
          description:
            "System can't scale to meet growing demand; re-architecture needed but can't afford downtime.",
        },
      ],
      industries: [
        { title: "Banking Systems", category: "FINANCIAL SERVICES" },
        { title: "Healthcare Records", category: "HEALTHCARE" },
        { title: "Government Portals", category: "PUBLIC SECTOR" },
      ],
    },

    "cto-as-a-service-for-startups": {
      title: "CTO as a Service for Startups",
      tagline:
        "Interim tech leadership: architecture, hiring loops, runway-safe roadmaps.",
      tags: ["CTO", "Startup", "Technical Leadership"],
      overview:
        "Fractional CTO support for pre-seed and seed-stage startups. We design your technical foundation, set up hiring processes, build runway-aware roadmaps, and coach your first engineering hires—then transition leadership as you scale.",
      features: [
        {
          title: "Architecture Design",
          description:
            "Stack selection, data modeling, and system boundaries that scale with your first million users.",
        },
        {
          title: "Hiring & Onboarding",
          description:
            "Interview loops, take-home challenges, and onboarding playbooks to build your founding engineering team.",
        },
        {
          title: "Roadmap & Prioritization",
          description:
            "Balance feature velocity with tech debt paydown to hit milestones without burning out the team.",
        },
        {
          title: "Investor & Board Updates",
          description:
            "Prepare technical diligence materials and communicate progress to non-technical stakeholders.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Founder Skill Gaps",
          description:
            "Non-technical founder needs a technical co-founder or first engineering leader but hasn't found the right fit.",
        },
        {
          title: "Interim Leadership",
          description:
            "CTO departed or not yet hired; need someone to steer the ship until permanent hire is onboarded.",
        },
        {
          title: "Investor Confidence",
          description:
            "Board or investors want assurance that technical execution risks are managed and roadmap is credible.",
        },
      ],
      industries: [
        { title: "Early-Stage SaaS", category: "SOFTWARE" },
        { title: "Consumer Apps", category: "MOBILE" },
        { title: "Marketplace Platforms", category: "MARKETPLACE" },
      ],
    },

    "product-discovery-and-technical-architecture": {
      title: "Product Discovery & Technical Architecture",
      tagline:
        "Cut risk upfront with proof-level spikes and crisp domain models.",
      tags: ["Discovery", "Architecture", "MVP"],
      overview:
        "De-risk new initiatives with structured discovery sprints. We run technical spikes, model domain complexity, prototype risky integrations, and deliver decision-ready artifacts so you can commit budget with confidence.",
      features: [
        {
          title: "Technical Feasibility Spikes",
          description:
            "Prototype the hardest integration or performance requirement to prove it's viable before full build.",
        },
        {
          title: "Domain Modeling Workshops",
          description:
            "Event storming and bounded context mapping to align engineering and product on system boundaries.",
        },
        {
          title: "API & Data Design",
          description:
            "Design RESTful or GraphQL contracts and data schemas that anticipate future feature expansions.",
        },
        {
          title: "Risk & Complexity Mapping",
          description:
            "Identify technical landmines and dependencies that could derail timelines if ignored upfront.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Greenfield Uncertainty",
          description:
            "Launching a new product or feature with unclear technical requirements or integration risks.",
        },
        {
          title: "Cross-Team Alignment",
          description:
            "Engineering and product have conflicting assumptions about what's feasible or how long it'll take.",
        },
        {
          title: "Investor Diligence",
          description:
            "Need to demonstrate technical feasibility to secure funding or partnership commitments.",
        },
      ],
      industries: [
        { title: "B2B SaaS", category: "SOFTWARE" },
        { title: "IoT Platforms", category: "HARDWARE" },
        { title: "Data Products", category: "ANALYTICS" },
      ],
    },

    "platform-modernization-roadmaps": {
      title: "Platform Modernization Roadmaps",
      tagline:
        "Decompose the monolith, sequence the wins, keep incidents boring.",
      tags: ["Platform", "Microservices", "DevOps"],
      overview:
        "Transform monolithic architectures into modular, scalable systems with phased roadmaps that prioritize quick wins and minimize blast radius. We map service boundaries, design migration sequences, and set up the infrastructure to support independent deployments.",
      features: [
        {
          title: "Service Boundary Design",
          description:
            "Identify bounded contexts and decompose the monolith into independently deployable services.",
        },
        {
          title: "Migration Sequencing",
          description:
            "Prioritize extractions by business value and risk; start with low-coupling, high-impact modules.",
        },
        {
          title: "Infrastructure Automation",
          description:
            "Set up CI/CD pipelines, container orchestration, and monitoring for the new service architecture.",
        },
        {
          title: "Incident Readiness",
          description:
            "Build runbooks, alerting, and rollback procedures so reliability doesn't degrade during migration.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Deployment Bottlenecks",
          description:
            "Monolith deployments are risky and slow; teams can't ship independently without merge conflicts.",
        },
        {
          title: "Scaling Challenges",
          description:
            "Parts of the system need to scale independently but are tightly coupled to resource-heavy modules.",
        },
        {
          title: "Team Organization",
          description:
            "Growing engineering team needs clear ownership boundaries to avoid stepping on each other's toes.",
        },
      ],
      industries: [
        { title: "E-Commerce", category: "RETAIL" },
        { title: "Media Streaming", category: "MEDIA" },
        { title: "Logistics Platforms", category: "SUPPLY CHAIN" },
      ],
    },

    "data-pipeline-design-and-governance": {
      title: "Data Pipeline Design & Governance",
      tagline:
        "From event schemas to lineage and SLAs; data that can be trusted.",
      tags: ["Data Engineering", "ETL", "Governance"],
      overview:
        "Build reliable, auditable data pipelines with clear lineage, schema governance, and SLA monitoring. We design event-driven architectures, implement data quality checks, and set up observability so analytics and ML teams can trust the data they consume.",
      features: [
        {
          title: "Event Schema Registry",
          description:
            "Version-controlled schemas with backward compatibility checks to prevent breaking downstream consumers.",
        },
        {
          title: "Data Lineage Tracking",
          description:
            "Automated lineage graphs showing how data flows from sources through transformations to endpoints.",
        },
        {
          title: "Quality & Validation",
          description:
            "Continuous data quality checks with alerting on anomalies, missing data, or schema violations.",
        },
        {
          title: "SLA Monitoring",
          description:
            "Track pipeline freshness, throughput, and error rates against defined SLAs with automated escalation.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Data Trust Issues",
          description:
            "Analytics reports show inconsistent numbers; teams don't trust data enough to make decisions.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Need audit trails and data provenance to comply with GDPR, HIPAA, or financial regulations.",
        },
        {
          title: "ML Pipeline Failures",
          description:
            "Models break in production due to unexpected data drift or missing features in training pipelines.",
        },
      ],
      industries: [
        { title: "Financial Analytics", category: "FINTECH" },
        { title: "Healthcare Data", category: "HEALTHCARE" },
        { title: "Ad Tech Platforms", category: "MARKETING" },
      ],
    },

    "realtime-interfaces-and-motion-systems": {
      title: "Realtime Interfaces & Motion Systems",
      tagline:
        "Live data, smooth motion, and performance budgets that hold on mobile.",
      tags: ["Frontend", "Real-time", "Performance"],
      overview:
        "Deliver buttery-smooth user experiences with real-time data updates, optimized animations, and strict performance budgets. We build interfaces that feel instant—even on slow networks and low-end devices—using cutting-edge rendering techniques and progressive enhancement.",
      features: [
        {
          title: "WebSocket & SSE Integration",
          description:
            "Real-time data streaming with automatic reconnection, backpressure handling, and offline queuing.",
        },
        {
          title: "Optimized Animations",
          description:
            "GPU-accelerated motion using CSS transforms and requestAnimationFrame with frame budget monitoring.",
        },
        {
          title: "Performance Budgets",
          description:
            "Enforce bundle size, LCP, and TTI targets with CI checks; monitor Core Web Vitals in production.",
        },
        {
          title: "Responsive & Accessible",
          description:
            "Touch-optimized gestures, keyboard navigation, and screen reader support without sacrificing performance.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "User Experience Expectations",
          description:
            "Users demand instant feedback and smooth interactions; current UI feels sluggish or outdated.",
        },
        {
          title: "Live Collaboration Features",
          description:
            "Building multi-user editing, live dashboards, or real-time notifications that require sub-second updates.",
        },
        {
          title: "Mobile Performance",
          description:
            "App is slow on mobile devices; need to optimize for low-end Android and spotty network conditions.",
        },
      ],
      industries: [
        { title: "Collaboration Tools", category: "PRODUCTIVITY" },
        { title: "Trading Platforms", category: "FINTECH" },
        { title: "Gaming Interfaces", category: "GAMING" },
      ],
    },

    "observability-and-reliability-readiness": {
      title: "Observability & Reliability Readiness",
      tagline:
        "SLIs that matter, alerts that don't lie, and incident muscle memory.",
      tags: ["SRE", "Monitoring", "Incident Response"],
      overview:
        "Build production-ready observability with meaningful SLIs, accurate alerting, and practiced incident response. We instrument your systems, set up dashboards that surface real problems, and run chaos exercises so your team builds muscle memory before the real outages hit.",
      features: [
        {
          title: "SLI & SLO Definition",
          description:
            "Define service-level indicators tied to user experience and set realistic objectives with error budgets.",
        },
        {
          title: "Structured Logging & Tracing",
          description:
            "Distributed tracing with correlation IDs and structured logs that make debugging production issues tractable.",
        },
        {
          title: "Alert Tuning",
          description:
            "Replace noisy alerts with symptom-based monitoring that pages only for user-impacting incidents.",
        },
        {
          title: "Chaos Engineering",
          description:
            "Run controlled failure scenarios (e.g., dependency outages, latency spikes) to test recovery procedures.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Alert Fatigue",
          description:
            "Teams ignore alerts because most are false positives; real incidents get lost in the noise.",
        },
        {
          title: "Slow Incident Response",
          description:
            "Outages take hours to diagnose because logs are unstructured and dashboards don't show the right metrics.",
        },
        {
          title: "Reliability Commitments",
          description:
            "Need to hit uptime SLAs for enterprise customers but don't have visibility into where failures happen.",
        },
      ],
      industries: [
        { title: "Cloud Infrastructure", category: "INFRASTRUCTURE" },
        { title: "Payment Processing", category: "FINTECH" },
        { title: "Video Streaming", category: "MEDIA" },
      ],
    },

    "ai-augmented-operations-automation": {
      title: "AI-Augmented Operations Automation",
      tagline:
        "Wire AI into ops to kill toil: routing, summaries, RCA drafts.",
      tags: ["AI Ops", "Automation", "DevOps"],
      overview:
        "Eliminate operational toil by embedding AI into routine workflows. We build systems that auto-route incidents, summarize alerts, draft root cause analyses, and suggest remediation steps—so your team focuses on high-leverage work instead of repetitive ticket triage.",
      features: [
        {
          title: "Intelligent Incident Routing",
          description:
            "AI classifies incoming incidents and routes them to the right on-call engineer based on historical patterns.",
        },
        {
          title: "Alert Summarization",
          description:
            "Condense noisy alert storms into concise summaries with suggested actions and context links.",
        },
        {
          title: "RCA Draft Generation",
          description:
            "Automatically generate initial root cause analysis drafts from logs, traces, and incident timelines.",
        },
        {
          title: "Runbook Automation",
          description:
            "AI-driven runbook execution with approval gates for high-risk actions like restarts or rollbacks.",
        },
      ],
      whenYouNeedThis: [
        {
          title: "Operational Overload",
          description:
            "On-call engineers spend most of their time triaging repetitive incidents instead of improving systems.",
        },
        {
          title: "Knowledge Silos",
          description:
            "Only a few people know how to diagnose certain failures; AI can democratize that expertise.",
        },
        {
          title: "Incident Volume",
          description:
            "Alert volume is growing faster than headcount; need automation to maintain response times.",
        },
      ],
      industries: [
        { title: "SaaS Operations", category: "SOFTWARE" },
        { title: "Cloud Platforms", category: "INFRASTRUCTURE" },
        { title: "DevOps Teams", category: "ENGINEERING" },
      ],
    },
  };

  return dataMap[slug] || null;
}
