export type ProblemPattern = {
  id: string;
  problem: string;
  pattern: string;
  summary: string;
  details?: string[];
  emoji?: string;
};

export const PROBLEM_PATTERNS: ProblemPattern[] = [
  {
    id: "slow-apis",
    problem: "Slow APIs at peak",
    pattern: "Edge-first gateway + caching",
    summary: "Push hot paths to the edge with smart TTLs and surge protection.",
    details: [
      "Global cache with stale-while-revalidate",
      "Queue backpressure under load spikes",
      "Observability hooks at the edge",
    ],
    emoji: "⚡",
  },
  {
    id: "brittle-data",
    problem: "Brittle data layer",
    pattern: "Clean domain model + CQRS",
    summary: "Split write vs read models so features stop fighting each other.",
    details: ["Drizzle ORM, typed boundaries", "Outbox for reliable events", "Async projections"],
    emoji: "🧱",
  },
  {
    id: "frontend-jank",
    problem: "Frontend jank",
    pattern: "Motion budget + islands",
    summary: "Interactivity where it matters, static where it doesn’t.",
    details: ["prefers-reduced-motion support", "DPR caps, no layout thrash", "TTI prioritized"],
    emoji: "🎯",
  },
  {
    id: "ai-misfit",
    problem: "AI that doesn’t fit",
    pattern: "Task-level agents + evals",
    summary: "Start narrow, wire evals, expand only when stable.",
    details: ["Latency budgets per task", "Feature-flagged models", "Golden set regressions"],
    emoji: "🤖",
  },
  {
    id: "ops-chaos",
    problem: "Ops chaos",
    pattern: "Error budgets + SLOs",
    summary: "Ship faster by agreeing what we’re allowed to break.",
    details: [
      "SLOs by journey, not endpoints",
      "Budget burn alerts",
      "Release rail with guardrails",
    ],
    emoji: "📈",
  },
];
