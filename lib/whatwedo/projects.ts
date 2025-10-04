export type ProjectSolution = {
  id: string;
  project: string;
  solution: string;
  summary: string;
  details?: string[];
  emoji?: string;
  industry?: string;
  tech?: string[];
  client?: string;
  duration?: string;
  year?: string;
  description?: string;
  challenge?: string;
  approach?: string;
  results?: {
    metric: string;
    value: string;
  }[];
  features?: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const PROJECT_SOLUTIONS: ProjectSolution[] = [
  {
    id: "realtime-ops-console",
    project: "Realtime Ops Console",
    solution: "Event-driven observability platform",
    summary: "Built for scale with WebSocket streaming, Redis pub/sub, and intelligent alerting.",
    details: [
      "Real-time metrics streaming with sub-100ms latency",
      "Custom alert rules with threshold monitoring",
      "Historical data retention with TimescaleDB",
    ],
    industry: "DevOps & Infrastructure",
    tech: ["Next.js", "WebSocket", "Redis", "TimescaleDB", "Docker", "Kubernetes"],
    client: "TechScale Inc.",
    duration: "6 months",
    year: "2024",
    description: "TechScale Inc., a rapidly growing SaaS company managing 200+ microservices, needed real-time visibility into their distributed infrastructure. Their existing monitoring tools couldn't keep up with the scale and velocity of their metrics data, leading to delayed incident response and poor operational visibility.",
    challenge: "The existing monitoring infrastructure was fragmented across multiple tools, causing alert fatigue with false positives, delayed incident detection (15-20 minute lag), and difficulty correlating events across services. The team needed a unified platform that could process 500K+ metrics per second with sub-100ms latency while providing intelligent alerting and historical analysis.",
    approach: "We architected a distributed event-driven system leveraging WebSocket for real-time streaming, Redis for in-memory caching and pub/sub, and TimescaleDB for time-series storage. The platform features a custom query engine for ad-hoc analysis, ML-powered anomaly detection, and a responsive React dashboard with infinite scrolling and virtualization for handling large datasets.",
    results: [
      { metric: "Latency Reduction", value: "98% (20min → 80ms)" },
      { metric: "Alert Accuracy", value: "94% (up from 62%)" },
      { metric: "MTTR Improvement", value: "67% faster" },
      { metric: "Cost Savings", value: "$120K annually" },
    ],
    features: [
      {
        title: "Real-time Metrics Streaming",
        description: "WebSocket-based streaming pipeline processing 500K+ metrics/sec with automatic backpressure handling and guaranteed delivery."
      },
      {
        title: "Intelligent Alerting Engine",
        description: "ML-powered anomaly detection with context-aware grouping, smart thresholds, and customizable escalation policies."
      },
      {
        title: "Interactive Query Builder",
        description: "Visual query interface with PromQL-inspired syntax, real-time previews, and saved query templates."
      },
      {
        title: "Distributed Tracing",
        description: "OpenTelemetry integration for end-to-end request tracing across 200+ microservices with dependency mapping."
      },
    ],
    testimonial: {
      quote: "This platform transformed how we monitor our infrastructure. We went from drowning in alerts to having actionable insights. The real-time visibility has been a game-changer for our SRE team.",
      author: "Sarah Chen",
      role: "VP of Engineering, TechScale Inc."
    }
  },
  {
    id: "ai-logistics-platform",
    project: "AI Logistics Platform",
    solution: "Smart routing and demand prediction",
    summary: "ML-powered route optimization reducing delivery times by 40% and fuel costs by 25%.",
    details: [
      "Real-time route optimization with traffic data",
      "Predictive demand forecasting",
      "Automated dispatch scheduling",
    ],
    industry: "Logistics & Transportation",
    tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis", "React", "Google Maps API"],
    client: "GlobalShip Logistics",
    duration: "8 months",
    year: "2023",
    description: "GlobalShip Logistics operates a fleet of 500+ vehicles delivering 10K+ packages daily across metropolitan areas. They were facing increasing fuel costs, customer complaints about late deliveries, and inefficient route planning that relied heavily on driver experience rather than data-driven optimization.",
    challenge: "The company's legacy routing system couldn't adapt to real-time conditions like traffic, weather, or last-minute order changes. Manual dispatch decisions led to suboptimal routes, with vehicles traveling 30% more miles than necessary. Customer satisfaction scores were declining due to missed delivery windows, and fuel costs were eating into margins.",
    approach: "We built an AI-powered logistics platform combining machine learning for demand forecasting, real-time route optimization using genetic algorithms, and predictive analytics for proactive planning. The system integrates live traffic data, weather conditions, vehicle capacity constraints, and customer time windows to generate optimal routes that automatically adapt throughout the day.",
    results: [
      { metric: "Delivery Time", value: "40% reduction" },
      { metric: "Fuel Costs", value: "25% decrease" },
      { metric: "On-time Delivery", value: "96% (up from 78%)" },
      { metric: "Fleet Utilization", value: "32% improvement" },
    ],
    features: [
      {
        title: "Dynamic Route Optimization",
        description: "Real-time route recalculation using genetic algorithms, adapting to traffic, weather, and priority changes with 5-minute refresh cycles."
      },
      {
        title: "Demand Forecasting",
        description: "LSTM neural networks predicting delivery volumes 7 days ahead with 92% accuracy, enabling proactive capacity planning."
      },
      {
        title: "Smart Dispatch Dashboard",
        description: "Interactive map interface for dispatchers with drag-and-drop reassignment, automated load balancing, and what-if scenario planning."
      },
      {
        title: "Driver Mobile App",
        description: "Turn-by-turn navigation with optimized stop sequences, proof of delivery, and two-way communication with dispatch."
      },
    ],
    testimonial: {
      quote: "The ROI was clear within 3 months. Not only did we cut costs significantly, but our customer satisfaction scores reached all-time highs. The platform has become essential to our daily operations.",
      author: "Michael Rodriguez",
      role: "COO, GlobalShip Logistics"
    }
  },
  {
    id: "fintech-payment-gateway",
    project: "FinTech Payment Gateway",
    solution: "Multi-currency payment processing infrastructure",
    summary: "PCI-compliant payment infrastructure handling $50M+ monthly with 99.99% uptime.",
    details: [
      "Multi-currency support with real-time FX rates",
      "Fraud detection with ML-based risk scoring",
      "Reconciliation engine for payment tracking",
    ],
    industry: "Financial Technology",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Stripe", "AWS"],
    client: "PayFlow Solutions",
    duration: "10 months",
    year: "2024",
    description: "PayFlow Solutions, a B2B payment processor serving 500+ merchants across 30 countries, needed to modernize their payment infrastructure to support real-time settlements, multi-currency transactions, and advanced fraud detection. Their legacy system couldn't scale with their growth and lacked the flexibility to integrate new payment methods.",
    challenge: "The existing monolithic system had single points of failure, couldn't handle peak transaction volumes (causing 3-4 hours of delays), and fraud detection was rule-based with a 7% false positive rate. They needed PCI-DSS Level 1 compliance, real-time FX conversion, and the ability to add new payment providers without system downtime.",
    approach: "We designed a microservices architecture with event-driven processing using Kafka for transaction streams. The system features a distributed ledger for reconciliation, real-time fraud detection using gradient boosting models, and a smart routing engine that selects optimal payment providers based on cost, success rates, and latency. All sensitive data is tokenized and encrypted at rest and in transit.",
    results: [
      { metric: "Transaction Volume", value: "$50M+ monthly" },
      { metric: "System Uptime", value: "99.99%" },
      { metric: "Fraud Detection", value: "98.5% accuracy" },
      { metric: "Settlement Speed", value: "Real-time (vs 3hrs)" },
    ],
    features: [
      {
        title: "Multi-Currency Processing",
        description: "Support for 45+ currencies with real-time FX conversion, automatic hedge recommendations, and transparent fee structure."
      },
      {
        title: "Fraud Detection Engine",
        description: "Machine learning models analyzing 200+ signals per transaction with risk scoring, velocity checks, and behavioral analysis."
      },
      {
        title: "Smart Payment Routing",
        description: "Intelligent routing across 12 payment providers based on success rates, costs, and latency with automatic failover."
      },
      {
        title: "Automated Reconciliation",
        description: "Real-time transaction matching with automatic dispute resolution, chargeback management, and financial reporting."
      },
    ],
    testimonial: {
      quote: "The new gateway has been rock solid. We've processed over $200M without a single major incident. The fraud detection alone has saved us millions, and our merchants love the instant settlements.",
      author: "Jennifer Park",
      role: "CTO, PayFlow Solutions"
    }
  },
  {
    id: "healthcare-data-fabric",
    project: "Healthcare Data Fabric",
    solution: "HIPAA-compliant interoperability platform",
    summary: "Unified patient data across 50+ healthcare systems with HL7 FHIR compliance.",
    details: [
      "HL7 FHIR data normalization and mapping",
      "End-to-end encryption with audit trails",
      "Real-time sync across EHR systems",
    ],
    industry: "Healthcare Technology",
    tech: ["Node.js", "FHIR", "MongoDB", "PostgreSQL", "AWS", "Docker", "HL7"],
    client: "MedConnect Health Network",
    duration: "12 months",
    year: "2023",
    description: "MedConnect Health Network, serving 50+ hospitals and 200+ clinics with 2M+ patients, struggled with fragmented patient data across disparate EHR systems. Physicians couldn't access complete patient histories, leading to duplicate tests, medication errors, and poor care coordination. They needed a HIPAA-compliant platform to unify patient data in real-time.",
    challenge: "Each healthcare facility used different EHR systems (Epic, Cerner, Allscripts) with incompatible data formats. Patient records were siloed, making it impossible to get a complete clinical picture. Manual data reconciliation took 48-72 hours, and 15% of patient transfers resulted in incomplete medical histories. The network needed real-time interoperability while maintaining strict HIPAA compliance and sub-second query performance.",
    approach: "We built a FHIR-based data fabric that acts as an abstraction layer over disparate EHR systems. The platform features real-time bidirectional sync, intelligent data normalization using NLP for unstructured clinical notes, and a master patient index for identity resolution. All data flows through encrypted channels with comprehensive audit logs, and the system includes SMART on FHIR apps for physician access.",
    results: [
      { metric: "Data Sync", value: "Real-time (<2 sec)" },
      { metric: "Patient Record Completeness", value: "99.2%" },
      { metric: "Duplicate Tests", value: "68% reduction" },
      { metric: "Care Coordination", value: "4x improvement" },
    ],
    features: [
      {
        title: "FHIR-Based Integration",
        description: "HL7 FHIR R4 compliant APIs with bidirectional sync across 50+ healthcare systems, supporting 80+ FHIR resources."
      },
      {
        title: "Master Patient Index",
        description: "Probabilistic matching algorithm achieving 99.7% accuracy in patient identification across systems with fuzzy name matching."
      },
      {
        title: "Clinical Data Normalization",
        description: "NLP-powered extraction from unstructured notes, automatic SNOMED CT coding, and standardized terminologies."
      },
      {
        title: "Security & Compliance",
        description: "End-to-end encryption, comprehensive audit trails, role-based access control, and full HIPAA compliance with BAA support."
      },
    ],
    testimonial: {
      quote: "This platform has fundamentally changed how we deliver care. Our physicians finally have complete patient histories at their fingertips, and the reduction in duplicate testing alone has saved us millions.",
      author: "Dr. Robert Chen",
      role: "Chief Medical Information Officer, MedConnect Health Network"
    }
  },
  {
    id: "ecommerce-marketplace",
    project: "E-Commerce Marketplace",
    solution: "Scalable multi-vendor platform",
    summary: "High-performance marketplace serving 1M+ daily users with advanced search and recommendations.",
    details: [
      "Elasticsearch-powered product discovery",
      "Real-time inventory management",
      "Personalized recommendations with collaborative filtering",
    ],
    industry: "E-Commerce & Retail",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Elasticsearch", "Redis", "AWS"],
    client: "ShopHub Marketplace",
    duration: "9 months",
    year: "2024",
    description: "ShopHub Marketplace aimed to compete with major e-commerce players by creating a platform for 5,000+ independent sellers to reach millions of customers. They needed a scalable, performant platform that could handle Black Friday traffic spikes while providing Amazon-level search and discovery features.",
    challenge: "Building a marketplace from scratch that could scale to millions of products, handle 10K+ concurrent users, and provide sub-200ms search response times. The platform needed sophisticated inventory management to prevent overselling, real-time pricing updates from sellers, fraud prevention, and a recommendation engine that could compete with established players. Additionally, they needed a seller dashboard with analytics and a mobile-first customer experience.",
    approach: "We architected a cloud-native platform using microservices for product catalog, orders, payments, and seller management. The search infrastructure uses Elasticsearch with custom relevance tuning and query optimization. We implemented a real-time inventory reservation system using Redis, preventing race conditions during checkout. The recommendation engine uses collaborative filtering and content-based algorithms, trained on user behavior data.",
    results: [
      { metric: "Daily Active Users", value: "1M+" },
      { metric: "Search Performance", value: "<150ms p95" },
      { metric: "Conversion Rate", value: "4.2% (industry avg 2.8%)" },
      { metric: "Black Friday Peak", value: "15K concurrent users" },
    ],
    features: [
      {
        title: "Intelligent Search",
        description: "Elasticsearch-powered search with typo tolerance, synonym expansion, faceted filtering, and ML-based ranking."
      },
      {
        title: "Personalized Recommendations",
        description: "Hybrid recommendation engine combining collaborative filtering and content-based algorithms, updated in real-time."
      },
      {
        title: "Real-time Inventory",
        description: "Distributed inventory management with optimistic locking, automatic reservation expiry, and seller sync APIs."
      },
      {
        title: "Seller Dashboard",
        description: "Comprehensive analytics for sellers including sales trends, customer insights, inventory alerts, and performance metrics."
      },
    ],
    testimonial: {
      quote: "We launched to 10K sellers in the first month and handled Black Friday with zero downtime. The recommendation engine has been incredibly effective—40% of sales come from recommended products.",
      author: "David Thompson",
      role: "Founder & CEO, ShopHub Marketplace"
    }
  },
];
