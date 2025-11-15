// FinTech Services Data
import { ServiceData } from "./serviceData";

export const fintechServices: Record<string, ServiceData> = {
  "quantitative-risk-labs": {
    title: "Quantitative Risk Labs",
    tagline: "Bespoke risk modeling and stress-testing platforms for institutional finance.",
    tags: ["Risk", "Quantitative", "Stress Testing", "Monte Carlo"],
    overview:
      "Design advanced quantitative toolsets that simulate market shocks, run scenario analysis, and calibrate risk models at portfolio scale. Our labs integrate market data, factor models, and custom scenarios to deliver actionable capital and liquidity forecasts.",
    features: [
      {
        title: "Scenario Simulation Engine",
        description: "Run large-scale Monte Carlo and historical-scenario simulations with distributed compute and reproducible pipelines.",
      },
      {
        title: "Model Governance",
        description: "Versioned models, automated validation, and explainability reports to satisfy audit and regulator requirements.",
      },
      {
        title: "Portfolio Attribution",
        description: "Decompose P&L and risk contributions across factors, instruments, and desks with interactive dashboards.",
      },
      {
        title: "Real-Time Risk Feeds",
        description: "Low-latency ingestion of market and position data to compute intraday exposures and breach alerts.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Regulatory Stress Tests",
        description: "Automate capital and liquidity stress testing to meet regulator timelines and reporting formats.",
      },
      {
        title: "New Product Risk",
        description: "Assess risk impact of novel financial products or structured trades before go-live.",
      },
      {
        title: "Model Risk Management",
        description: "Consolidate model catalogue, run validations, and maintain reproducibility for governance.",
      },
    ],
    industries: [
      { title: "Investment Banks", category: "FINANCIAL SERVICES" },
      { title: "Hedge Funds", category: "ASSET MANAGEMENT" },
      { title: "Treasury", category: "CORPORATE" },
    ],
  },

  "real-time-liquidity-orchestration": {
    title: "Real-Time Liquidity Orchestration",
    tagline: "Dynamic liquidity routing and funding orchestration across accounts and rails.",
    tags: ["Liquidity", "Treasury", "Orchestration", "Real-Time"],
    overview:
      "Optimize intraday liquidity and funding costs with an orchestration layer that routes payments, borrows from credit lines, and sweeps balances in real time. Reduce overdraft risk and minimize funding costs using predictive models and policy-driven routing across multiple bank accounts and settlement rails.",
    features: [
      {
        title: "Dynamic Routing",
        description: "Route outgoing payments through the most cost-effective rails based on liquidity, fees, and timing constraints.",
      },
      {
        title: "Auto-Funding Policies",
        description: "Automatically draw on credit facilities or execute intraday sweeps to meet payment obligations.",
      },
      {
        title: "Predictive Liquidity Models",
        description: "Machine-learning forecasts for cash flows and balance trajectories to preempt shortfalls.",
      },
      {
        title: "Centralized Treasury Dashboard",
        description: "Real-time view of balances, exposures, and funding decisions with simulation capabilities.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "High Payment Volume",
        description: "Manage liquidity efficiently when processing large numbers of payments across regions.",
      },
      {
        title: "Cost Reduction",
        description: "Reduce fees and borrowing costs by optimizing rail selection and timing of transfers.",
      },
      {
        title: "Treasury Consolidation",
        description: "Centralize treasury functions for multi-entity organizations to improve visibility and control.",
      },
    ],
    industries: [
      { title: "Banks", category: "FINANCIAL SERVICES" },
      { title: "Payment Processors", category: "FINTECH" },
      { title: "Large Corporates", category: "CORPORATE" },
    ],
  },

  "privacy-preserving-analytics": {
    title: "Privacy-Preserving Financial Analytics",
    tagline: "Federated and differential-privacy analytics for sensitive financial datasets.",
    tags: ["Privacy", "Federated Learning", "Differential Privacy", "Analytics"],
    overview:
      "Enable banks and fintechs to extract insights from cross-institutional data without exposing raw customer data. Solutions include federated model training, differential privacy guarantees, and encrypted aggregation for secure analytics and benchmarking.",
    features: [
      {
        title: "Federated Model Training",
        description: "Train ML models across partner institutions without centralizing PII, reducing privacy and compliance risk.",
      },
      {
        title: "Differential Privacy Guards",
        description: "Built-in DP mechanisms to bound information leakage while preserving analytical utility.",
      },
      {
        title: "Secure Aggregation",
        description: "Encrypted aggregation primitives for computing statistics across datasets without revealing individual records.",
      },
      {
        title: "Privacy Audits",
        description: "Automated privacy budget tracking and audit-ready reports for compliance teams.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Cross-Institution Insights",
        description: "Benchmark performance or detect fraud across institutions without sharing raw data.",
      },
      {
        title: "Regulatory Constraints",
        description: "Operate in privacy-sensitive jurisdictions while maintaining analytical capabilities.",
      },
      {
        title: "Model Collaboration",
        description: "Collaborate on models with partners while preserving customer confidentiality.",
      },
    ],
    industries: [
      { title: "Banks", category: "FINANCIAL SERVICES" },
      { title: "Payment Networks", category: "FINTECH" },
      { title: "RegTech", category: "COMPLIANCE" },
    ],
  },

  "kyc-automation": {
    title: "KYC & Identity Verification Automation",
    tagline: "Streamlined customer onboarding with AI-powered identity verification and risk scoring.",
    tags: ["KYC", "Identity", "Compliance", "AML"],
    overview:
      "Accelerate customer onboarding with automated KYC workflows that verify identities in minutes, not days. Integrate with global identity databases, perform liveness detection, extract document data, and generate risk scores—all while maintaining audit trails for compliance.",
    features: [
      {
        title: "Document Verification",
        description: "AI-powered extraction and validation of government IDs with forgery detection and liveness checks.",
      },
      {
        title: "Global Database Checks",
        description: "Real-time screening against OFAC, PEP lists, sanctions databases, and adverse media sources.",
      },
      {
        title: "Risk Scoring Engine",
        description: "ML-based risk assessment combining identity signals, behavioral patterns, and external data sources.",
      },
      {
        title: "Ongoing Monitoring",
        description: "Continuous screening of existing customers against updated watchlists and transaction pattern analysis.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Manual Review Bottlenecks",
        description: "Compliance team overwhelmed with manual KYC reviews; customer onboarding takes days or weeks.",
      },
      {
        title: "Fraud & Identity Theft",
        description: "Seeing increase in synthetic identities and account takeovers; need stronger verification controls.",
      },
      {
        title: "Regulatory Requirements",
        description: "Expanding to new markets with strict KYC/AML requirements; need automated compliance infrastructure.",
      },
    ],
    industries: [
      { title: "Digital Banking", category: "FINTECH" },
      { title: "Cryptocurrency", category: "WEB3" },
      { title: "Lending Platforms", category: "FINTECH" },
    ],
  },

  "fraud-detection": {
    title: "AI-Powered Fraud Detection & Prevention",
    tagline: "Real-time fraud scoring with adaptive ML models that learn from emerging attack patterns.",
    tags: ["Fraud Prevention", "Machine Learning", "Risk Management", "Real-time"],
    overview:
      "Protect revenue and customer trust with intelligent fraud detection systems. Our ML models analyze transaction patterns, device signals, and behavioral biometrics in real-time to block fraud while minimizing false positives that hurt legitimate customers.",
    features: [
      {
        title: "Real-Time Scoring",
        description: "Sub-100ms fraud scoring at transaction time with ensemble models and explainable AI outputs.",
      },
      {
        title: "Device Intelligence",
        description: "Browser fingerprinting, IP geolocation, velocity checks, and device reputation scoring.",
      },
      {
        title: "Behavioral Biometrics",
        description: "Mouse movement, typing patterns, and navigation behavior analysis to detect bot activity.",
      },
      {
        title: "Adaptive Learning",
        description: "Models retrain on new fraud patterns weekly; incorporate feedback from fraud analyst reviews.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Rising Fraud Losses",
        description: "Fraud chargebacks increasing faster than revenue; need better detection without adding friction.",
      },
      {
        title: "Account Takeover Attacks",
        description: "Credential stuffing and social engineering attacks targeting customer accounts at scale.",
      },
      {
        title: "New Product Vulnerabilities",
        description: "Launching new payment methods or features that could be exploited by fraudsters.",
      },
    ],
    industries: [
      { title: "Payment Processing", category: "FINTECH" },
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Gaming & Gambling", category: "ENTERTAINMENT" },
    ],
  },

  "lending-platforms": {
    title: "Digital Lending & Loan Origination Systems",
    tagline: "End-to-end loan management from application to servicing with automated underwriting.",
    tags: ["Lending", "Credit", "Underwriting", "Loan Servicing"],
    overview:
      "Build modern lending products with configurable underwriting rules, instant decisioning, and automated servicing workflows. Support personal loans, business financing, BNPL, and mortgages with compliance-ready document management and payment processing.",
    features: [
      {
        title: "Automated Underwriting",
        description: "Rules engine with credit bureau integration, income verification, and risk-based pricing models.",
      },
      {
        title: "Loan Origination Workflow",
        description: "Application forms, document collection, e-signatures, and funding with progress tracking for applicants.",
      },
      {
        title: "Servicing & Collections",
        description: "Payment processing, amortization schedules, delinquency management, and automated dunning workflows.",
      },
      {
        title: "Compliance & Reporting",
        description: "TILA disclosures, adverse action notices, HMDA reporting, and state-specific lending law compliance.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Manual Underwriting Delays",
        description: "Loan decisions take days due to manual review; losing customers to faster competitors.",
      },
      {
        title: "Portfolio Growth",
        description: "Existing servicing system can't handle growing loan volume; need to automate collections and payments.",
      },
      {
        title: "New Lending Product",
        description: "Launching BNPL, revenue-based financing, or alternative credit product; need flexible platform.",
      },
    ],
    industries: [
      { title: "Consumer Lending", category: "FINTECH" },
      { title: "Business Financing", category: "SMB" },
      { title: "Buy Now Pay Later", category: "E-COMMERCE" },
    ],
  },

  "wealth-management": {
    title: "Digital Wealth Management & Investment Platforms",
    tagline: "Robo-advisory, portfolio management, and trading infrastructure for modern wealth platforms.",
    tags: ["Investing", "Robo-Advisory", "Portfolio Management", "Trading"],
    overview:
      "Launch investment products with robo-advisory algorithms, real-time portfolio tracking, and integrated trading execution. Support tax-loss harvesting, rebalancing automation, fractional shares, and custom indexing strategies for retail and high-net-worth clients.",
    features: [
      {
        title: "Robo-Advisory Engine",
        description: "Risk tolerance questionnaires, goal-based portfolio construction, and automated asset allocation.",
      },
      {
        title: "Trading Integration",
        description: "Connect to brokerages for order execution with smart routing, fractional shares, and real-time fills.",
      },
      {
        title: "Tax Optimization",
        description: "Automated tax-loss harvesting, HIFO accounting, and capital gains distribution management.",
      },
      {
        title: "Performance Reporting",
        description: "Client-facing dashboards with IRR, time-weighted returns, benchmarking, and fee transparency.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Digital Wealth Launch",
        description: "Traditional wealth firm going digital or fintech launching investment product; need modern platform.",
      },
      {
        title: "Service Scalability",
        description: "Advisors overwhelmed with routine portfolio tasks; need automation to serve more clients profitably.",
      },
      {
        title: "Differentiation",
        description: "Competing with robo-advisors and zero-commission brokers; need innovative features to attract AUM.",
      },
    ],
    industries: [
      { title: "Wealth Management", category: "FINANCIAL SERVICES" },
      { title: "Robo-Advisors", category: "FINTECH" },
      { title: "Retirement Platforms", category: "RETIREMENT" },
    ],
  },

  "insurance-tech": {
    title: "Insurance Technology & Claims Processing",
    tagline: "Modern policy administration and claims workflow automation for digital-first insurers.",
    tags: ["Insurance", "Claims", "Underwriting", "Risk Assessment"],
    overview:
      "Transform insurance operations with digital policy administration, automated claims adjudication, and data-driven risk assessment. Support multiple product lines with configurable rules, reduce claims processing time, and improve customer satisfaction with self-service portals.",
    features: [
      {
        title: "Policy Administration System",
        description: "Quote generation, policy issuance, renewals, and mid-term endorsements with rating engine integration.",
      },
      {
        title: "Claims Automation",
        description: "First notice of loss, document collection, damage assessment AI, and payment automation workflows.",
      },
      {
        title: "Risk Modeling",
        description: "Actuarial models with external data enrichment for pricing, underwriting, and portfolio risk management.",
      },
      {
        title: "Customer Self-Service",
        description: "Mobile apps and web portals for policy management, claims filing, and real-time status updates.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Legacy System Modernization",
        description: "Mainframe-based policy system limiting product innovation; can't launch new insurance products quickly.",
      },
      {
        title: "Claims Processing Delays",
        description: "Manual claims handling causing customer dissatisfaction and high operational costs.",
      },
      {
        title: "Digital Distribution",
        description: "Moving to direct-to-consumer or embedded insurance models; need API-first platform for partners.",
      },
    ],
    industries: [
      { title: "Property & Casualty", category: "INSURANCE" },
      { title: "Health Insurance", category: "HEALTHTECH" },
      { title: "Embedded Insurance", category: "INSURTECH" },
    ],
  },

  "tokenized-assets-platform": {
    title: "Tokenized Assets Platform",
    tagline: "Issue, manage, and trade tokenized securities and real-world assets with full lifecycle controls.",
    tags: ["Tokenization", "Securities", "Asset Management", "Compliance"],
    overview:
      "Platformize the issuance and lifecycle management of tokenized assets—real estate, private equity, debt instruments, and collectibles. Provide custody, regulatory controls, fractional ownership, and secondary market infrastructure with compliance baked in.",
    features: [
      {
        title: "Issuance Workflows",
        description: "KYC'd onboarding, cap table management, and automated legal document generation for token issuances.",
      },
      {
        title: "Custody & Transfer",
        description: "Secure custody solutions with on-chain settlement and off-chain legal registries to maintain compliance.",
      },
      {
        title: "Fractional Ownership",
        description: "Support fractionalized tokens with dividend distribution, voting, and transfer restrictions.",
      },
      {
        title: "Secondary Market Support",
        description: "Order books, OTC matchmaking, and compliant secondary trading with settlement guarantees.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Unlock Illiquid Assets",
        description: "Enable liquidity for traditionally illiquid assets via compliant tokenization and secondary markets.",
      },
      {
        title: "Fractional Investment",
        description: "Offer smaller investment tickets by fractionalizing ownership and automating distributions.",
      },
      {
        title: "Regulatory Readiness",
        description: "Operate token markets within regulatory guardrails and investor protections.",
      },
    ],
    industries: [
      { title: "Real Estate", category: "INVESTMENTS" },
      { title: "Private Markets", category: "ASSET MANAGEMENT" },
      { title: "Capital Markets", category: "FINANCIAL SERVICES" },
    ],
  },

  "regtech-compliance": {
    title: "RegTech & Compliance Automation",
    tagline: "Automated regulatory reporting, transaction monitoring, and audit trail management.",
    tags: ["Compliance", "Regulatory", "AML", "Audit"],
    overview:
      "Navigate complex financial regulations with automated compliance workflows. Monitor transactions for suspicious activity, generate required regulatory reports, maintain comprehensive audit trails, and stay current with evolving requirements across multiple jurisdictions.",
    features: [
      {
        title: "Transaction Monitoring",
        description: "Pattern detection for money laundering, structuring, and suspicious activity with case management.",
      },
      {
        title: "Regulatory Reporting",
        description: "Automated generation of CTR, SAR, FBAR, and other regulatory filings with validation and submission.",
      },
      {
        title: "Audit Trail Management",
        description: "Immutable logs of all system activity with search, export, and retention policy enforcement.",
      },
      {
        title: "Rule Engine",
        description: "Configurable compliance rules that adapt to changing regulations without code deployments.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Regulatory Expansion",
        description: "Entering new markets with different compliance requirements; need scalable multi-jurisdiction support.",
      },
      {
        title: "Manual Compliance Burden",
        description: "Compliance team overwhelmed with report generation and transaction reviews; need automation.",
      },
      {
        title: "Audit Failures",
        description: "Recent regulatory exam found gaps in monitoring or reporting; need stronger compliance controls.",
      },
    ],
    industries: [
      { title: "Banking", category: "FINANCIAL SERVICES" },
      { title: "Payment Processors", category: "FINTECH" },
      { title: "Crypto Platforms", category: "WEB3" },
    ],
  },

  "embedded-credit-underwriting": {
    title: "Embedded Credit Underwriting",
    tagline: "Real-time credit decisions for embedded finance using alternative signals.",
    tags: ["Underwriting", "Embedded Finance", "Risk", "API"],
    overview:
      "Enable instant credit decisions at the point of checkout or within partner apps by combining transactional signals, device telemetry, and alternative data. Provide a fully API-driven underwriting engine that supports configurable policies and risk-based pricing for embedded lenders.",
    features: [
      { title: "Real-Time Decisioning", description: "Low-latency credit decisions with transparent scoring and configurable thresholds." },
      { title: "Alternative Data", description: "Use bank transaction flows, utility payments, and behavioral signals for thin-file customers." },
      { title: "Policy Engine", description: "Rule-based and ML-backed policies with per-partner customization and override workflows." },
      { title: "Risk-Based Pricing", description: "Dynamic pricing and limits based on predicted loss, tenure, and product type." },
    ],
    whenYouNeedThis: [
      { title: "Embed Credit", description: "Offer point-of-sale installment or BNPL within merchant checkout flows." },
      { title: "Thin-File Customers", description: "Underwrite customers without traditional bureau histories using alternative signals." },
      { title: "Partner Platforms", description: "Monetize partner traffic with white-label credit products and APIs." },
    ],
    industries: [
      { title: "Retail", category: "E-COMMERCE" },
      { title: "Marketplaces", category: "PLATFORM" },
      { title: "Embedded Finance", category: "BAAS" },
    ],
  },

  "neobank-core": {
    title: "Neobank Core Banking Platform",
    tagline: "Modern core banking infrastructure purpose-built for digital-first banks.",
    tags: ["Neobank", "Digital Banking", "Core Banking", "Cloud-Native"],
    overview:
      "Launch a digital bank with cloud-native core banking infrastructure. Support checking and savings accounts, debit cards, instant transfers, budgeting tools, and financial wellness features—all with modern APIs and scalable architecture.",
    features: [
      { title: "Account Management", description: "Multi-currency accounts with real-time balance updates and transaction history." },
      { title: "Card Issuing", description: "Instant virtual cards, physical card fulfillment, and spend controls." },
      { title: "Financial Wellness", description: "Budgeting, savings goals, spending insights, and automated savings rules." },
      { title: "API-First", description: "RESTful APIs for account aggregation, payment initiation, and third-party integrations." },
    ],
    whenYouNeedThis: [
      { title: "Neobank Launch", description: "Starting digital-first bank; need modern core without legacy constraints." },
      { title: "Banking-as-a-Service", description: "Offering embedded banking to partners; need white-label platform." },
      { title: "Legacy Replacement", description: "Replacing mainframe core banking system with cloud-native alternative." },
    ],
    industries: [
      { title: "Neobanks", category: "FINTECH" },
      { title: "Challenger Banks", category: "BANKING" },
      { title: "Embedded Finance", category: "BAAS" },
    ],
  },

  "credit-scoring": {
    title: "Alternative Credit Scoring & Underwriting",
    tagline: "AI-powered credit risk assessment using alternative data sources.",
    tags: ["Credit", "Underwriting", "Machine Learning", "Alternative Data"],
    overview:
      "Build sophisticated credit scoring models that go beyond traditional bureau data. Leverage cash flow analysis, utility payments, rental history, and behavioral signals to assess creditworthiness for thin-file and credit-invisible consumers.",
    features: [
      { title: "Alternative Data", description: "Bank transactions, utility bills, rent payments, and employment data integration." },
      { title: "ML Scoring Models", description: "Ensemble models with explainable AI for regulatory compliance and transparency." },
      { title: "Cash Flow Analysis", description: "Income verification and expense categorization from bank transaction data." },
      { title: "Continuous Monitoring", description: "Ongoing credit assessment with early warning signals for default risk." },
    ],
    whenYouNeedThis: [
      { title: "Thin-File Lending", description: "Serving customers without traditional credit history; need alternative scoring." },
      { title: "Credit Access", description: "Expanding credit to underserved populations with responsible underwriting." },
      { title: "Model Performance", description: "Traditional credit scores not predictive for your portfolio; need custom models." },
    ],
    industries: [
      { title: "Lending", category: "FINTECH" },
      { title: "BNPL", category: "E-COMMERCE" },
      { title: "Microfinance", category: "FINANCIAL INCLUSION" },
    ],
  },

  "synthetic-data-engine": {
    title: "Synthetic Data Engine",
    tagline: "Generate privacy-safe synthetic financial datasets for model training and testing.",
    tags: ["Synthetic Data", "Privacy", "ML", "Testing"],
    overview:
      "Create high-fidelity, privacy-preserving synthetic datasets that mirror production distributions for model development, QA, and analytics. Supports domain constraints, correlation preservation, and rapid dataset generation to accelerate data science workflows without exposing real customer data.",
    features: [
      { title: "Statistical Fidelity", description: "Preserve key distributions and correlations so models trained on synthetic data generalize to production." },
      { title: "Privacy Controls", description: "Differential privacy and k-anonymity modes to ensure synthetic datasets are safe for sharing." },
      { title: "Scenario Generation", description: "Create rare-event scenarios and edge cases for stress-testing models and pipelines." },
      { title: "Test Data Pipelines", description: "Automated pipelines to refresh synthetic datasets and seed testing environments reproducibly." },
    ],
    whenYouNeedThis: [
      { title: "Model Development", description: "Train and validate ML models without exposing PII or working with limited datasets." },
      { title: "QA Environments", description: "Populate staging systems with realistic data for end-to-end testing." },
      { title: "Data Sharing", description: "Share datasets with partners or vendors while protecting customer privacy." },
    ],
    industries: [
      { title: "Banks", category: "FINANCIAL SERVICES" },
      { title: "Fintech", category: "FINTECH" },
      { title: "Data Science", category: "ML" },
    ],
  },

  "pos-systems": {
    title: "Point of Sale & Payment Terminal Systems",
    tagline: "Modern POS with integrated payments, inventory, and customer management.",
    tags: ["POS", "Retail", "Payments", "Inventory"],
    overview:
      "Build cloud-based point-of-sale systems with integrated payment processing, real-time inventory management, and customer relationship features. Support omnichannel retail with unified commerce across in-store, online, and mobile channels.",
    features: [
      { title: "Payment Processing", description: "Accept cards, contactless, mobile wallets with integrated terminal management." },
      { title: "Inventory Management", description: "Real-time stock levels, automatic reordering, and SKU tracking across locations." },
      { title: "Customer Loyalty", description: "Rewards programs, customer profiles, and purchase history tracking." },
      { title: "Analytics & Reporting", description: "Sales dashboards, staff performance, peak hours analysis, and revenue forecasting." },
    ],
    whenYouNeedThis: [
      { title: "Retail Modernization", description: "Replacing legacy POS with cloud-based system for better insights and reliability." },
      { title: "Omnichannel Retail", description: "Need unified view of inventory and customers across all sales channels." },
      { title: "Payment Integration", description: "Want to own payment experience and reduce processing fees." },
    ],
    industries: [
      { title: "Retail", category: "RETAIL" },
      { title: "Restaurants", category: "HOSPITALITY" },
      { title: "Service Businesses", category: "SMB" },
    ],
  },

  "robo-advisory": {
    title: "Robo-Advisory & Automated Investing",
    tagline: "Algorithm-driven portfolio management with tax optimization and rebalancing.",
    tags: ["Robo-Advisory", "Investing", "Portfolio Management", "Automation"],
    overview:
      "Launch robo-advisory service with automated portfolio construction, tax-loss harvesting, and intelligent rebalancing. Serve retail investors with low minimums, transparent fees, and goal-based investing strategies powered by modern portfolio theory.",
    features: [
      { title: "Risk Assessment", description: "Questionnaire-based risk profiling with goal-based portfolio recommendations." },
      { title: "Auto-Rebalancing", description: "Drift monitoring and automatic rebalancing to maintain target allocations." },
      { title: "Tax-Loss Harvesting", description: "Opportunistic selling of losing positions to offset capital gains for tax savings." },
      { title: "Fractional Shares", description: "Invest with any dollar amount using fractional share trading for full diversification." },
    ],
    whenYouNeedThis: [
      { title: "Wealth Management Democratization", description: "Serving mass affluent with automated advice; human advisors too expensive." },
      { title: "Digital Wealth Launch", description: "Traditional wealth firm adding robo-advisory to compete with digital-first platforms." },
      { title: "Cost Efficiency", description: "Need to serve more clients profitably with automated portfolio management." },
    ],
    industries: [
      { title: "Wealth Management", category: "FINANCIAL SERVICES" },
      { title: "Robo-Advisors", category: "FINTECH" },
      { title: "401(k) Platforms", category: "RETIREMENT" },
    ],
  },

  "regulatory-automation-hub": {
    title: "Regulatory Automation Hub",
    tagline: "Rule-driven regulatory observability, automated filings and compliance workflows.",
    tags: ["Regulatory", "Automation", "Reporting", "Compliance"],
    overview:
      "Automate regulatory reporting and ongoing compliance tasks with a centralized rule engine, document generation, and submission pipelines. Map business events to reporting obligations, schedule submissions, and retain audit-ready artifacts to reduce manual work and regulatory risk.",
    features: [
      { title: "Rule Engine", description: "Express regulatory rules as data-driven policies that trigger reports and alerts." },
      { title: "Automated Filings", description: "Generate and submit regulator-specific reports (CTR, SAR, tax forms) with validation." },
      { title: "Compliance Dashboard", description: "Unified view of obligations, deadlines, evidence, and remediation tasks." },
      { title: "Evidence Management", description: "Attach transaction-level evidence and maintain immutable audit trails for exams." },
    ],
    whenYouNeedThis: [
      { title: "High Reporting Burden", description: "Multiple jurisdictions and frequent filings causing operational strain." },
      { title: "Audit Readiness", description: "Prepare evidence and reports quickly when regulators request examinations." },
      { title: "Policy-as-Code", description: "Define compliance rules in code and deploy across environments with confidence." },
    ],
    industries: [
      { title: "Banks", category: "FINANCIAL SERVICES" },
      { title: "Payment Processors", category: "FINTECH" },
      { title: "Capital Markets", category: "REGULATORY" },
    ],
  },

  "smart-contract-orchestration": {
    title: "Smart Contract Orchestration",
    tagline: "Enterprise orchestration for multi-party programmable agreements and workflows.",
    tags: ["Orchestration", "Smart Contracts", "Workflow", "Automation"],
    overview:
      "Coordinate on-chain and off-chain operations with an orchestration layer that manages smart contract lifecycles, dispute resolution hooks, and integration with legacy systems. Ideal for tokenized assets, syndicated lending, and automated settlements where business logic spans multiple parties.",
    features: [
      { title: "Workflow Designer", description: "Visual designer for composing multi-step, multi-party contract workflows with retry and compensation semantics." },
      { title: "On/Off-Chain Bridges", description: "Integrations that securely sync contract state with enterprise systems and oracles." },
      { title: "Policy Enforcement", description: "Enforce compliance checks and KYC gates as preconditions to contract execution." },
      { title: "Monitoring & Observability", description: "End-to-end tracing of events across chains and participants with alerting and replay capabilities." },
    ],
    whenYouNeedThis: [
      { title: "Cross-Party Automation", description: "Automate agreements between counterparties while preserving legal enforceability." },
      { title: "Hybrid Systems", description: "Coordinate blockchain workflows with existing banking and settlement systems." },
      { title: "Operational Resilience", description: "Provide retries, compensation, and manual intervention tools for automated contracts." },
    ],
    industries: [
      { title: "Syndicated Lending", category: "CAPITAL MARKETS" },
      { title: "Asset Tokenization", category: "INVESTMENTS" },
      { title: "Trade Finance", category: "COMMERCE" },
    ],
  },

  "accounting-automation": {
    title: "Automated Accounting & Reconciliation",
    tagline: "AI-powered bookkeeping with bank sync, categorization, and financial reporting.",
    tags: ["Accounting", "Bookkeeping", "Reconciliation", "Automation"],
    overview:
      "Automate accounting workflows with intelligent transaction categorization, bank reconciliation, invoice matching, and financial statement generation. Reduce manual data entry, minimize errors, and provide real-time financial visibility for businesses.",
    features: [
      { title: "Bank Feed Integration", description: "Automatic transaction import from thousands of banks with daily synchronization." },
      { title: "Smart Categorization", description: "ML-powered transaction classification with learning from corrections and rules." },
      { title: "Reconciliation", description: "Automated matching of bank transactions with invoices, bills, and receipts." },
      { title: "Financial Reporting", description: "Real-time P&L, balance sheet, cash flow statements with drill-down to transactions." },
    ],
    whenYouNeedThis: [
      { title: "Manual Bookkeeping", description: "Finance team spending hours on data entry and reconciliation each month." },
      { title: "Accounting Accuracy", description: "Errors in books causing issues with taxes, audits, or investor reporting." },
      { title: "Real-Time Visibility", description: "Management needs current financial metrics; monthly close takes too long." },
    ],
    industries: [
      { title: "Small Business", category: "SMB" },
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Professional Services", category: "SERVICES" },
    ],
  },

  "tax-compliance": {
    title: "Tax Compliance & Reporting Automation",
    tagline: "Automated tax calculations, reporting, and filing for multi-jurisdiction compliance.",
    tags: ["Tax", "Compliance", "Reporting", "Filing"],
    overview:
      "Simplify tax compliance with automated calculations, form generation, and electronic filing. Support income tax, sales tax, VAT, and payroll tax across multiple jurisdictions with audit trails, nexus tracking, and regulatory updates.",
    features: [
      { title: "Tax Calculation Engine", description: "Real-time tax computation for income, sales, VAT with multi-jurisdiction support." },
      { title: "Form Generation", description: "Automatic preparation of 1099s, W-2s, 1040s, sales tax returns, and VAT filings." },
      { title: "E-Filing", description: "Direct submission to IRS, state revenue agencies, and international tax authorities." },
      { title: "Nexus Tracking", description: "Monitor business activity to determine tax filing obligations across jurisdictions." },
    ],
    whenYouNeedThis: [
      { title: "Multi-State Operations", description: "Expanding to new states; need to track nexus and file sales tax returns." },
      { title: "Manual Tax Prep", description: "Accountants overwhelmed preparing returns; need automation for efficiency." },
      { title: "Compliance Risk", description: "Errors in tax filings causing penalties; need reliable automated system." },
    ],
    industries: [
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Professional Services", category: "ACCOUNTING" },
      { title: "Small Business", category: "SMB" },
    ],
  },
};
