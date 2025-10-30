// FinTech Services Data
import { ServiceData } from "./serviceData";

export const fintechServices: Record<string, ServiceData> = {
  "payment-gateway": {
    title: "Payment Gateway Solutions",
    tagline: "Secure, compliant payment processing infrastructure that scales with your transaction volume.",
    tags: ["Payments", "PCI-DSS", "API Integration", "Real-time"],
    overview:
      "Build robust payment processing systems with multi-currency support, fraud detection, and PCI-DSS compliance. Our solutions handle high-volume transactions with sub-second latency, support multiple payment methods, and provide detailed reconciliation tools for your finance team.",
    features: [
      {
        title: "Multi-Payment Method Support",
        description: "Accept credit cards, digital wallets, ACH, wire transfers, and cryptocurrency with unified API.",
      },
      {
        title: "Fraud Detection Engine",
        description: "ML-powered fraud scoring with velocity checks, device fingerprinting, and real-time risk assessment.",
      },
      {
        title: "PCI-DSS Compliance",
        description: "Tokenization, secure vaults, and audit logging that meet Level 1 PCI requirements out of the box.",
      },
      {
        title: "Reconciliation & Reporting",
        description: "Automated settlement matching, chargeback management, and detailed transaction reporting dashboards.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Scaling Transaction Volume",
        description: "Current payment provider can't handle peak loads; need infrastructure that scales to millions of transactions per day.",
      },
      {
        title: "International Expansion",
        description: "Entering new markets requires local payment methods, multi-currency support, and regional compliance.",
      },
      {
        title: "Cost Optimization",
        description: "Payment processing fees eating into margins; need to negotiate better rates or own more of the stack.",
      },
    ],
    industries: [
      { title: "E-Commerce Platforms", category: "RETAIL" },
      { title: "Subscription Services", category: "SAAS" },
      { title: "Marketplace Platforms", category: "MARKETPLACE" },
    ],
  },

  "digital-banking": {
    title: "Digital Banking Core Systems",
    tagline: "Modern core banking infrastructure for neobanks and financial institutions.",
    tags: ["Core Banking", "Account Management", "Ledger", "Compliance"],
    overview:
      "Launch digital banking products with a flexible core system built on modern architecture. Support multiple account types, real-time ledger updates, automated compliance reporting, and seamless integration with payment networks and third-party services.",
    features: [
      {
        title: "Real-Time Ledger",
        description: "Double-entry accounting system with ACID guarantees and instant balance updates for all transactions.",
      },
      {
        title: "Multi-Product Support",
        description: "Checking, savings, loans, credit cards, and investment accounts managed through unified platform.",
      },
      {
        title: "Regulatory Reporting",
        description: "Automated OFAC screening, CTR/SAR filing, and audit trail generation for compliance requirements.",
      },
      {
        title: "Open Banking APIs",
        description: "RESTful APIs with OAuth2 for account aggregation, payment initiation, and third-party integrations.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Legacy System Constraints",
        description: "Mainframe-based core can't support new digital products; innovation is blocked by technical limitations.",
      },
      {
        title: "Neobank Launch",
        description: "Starting a digital-first bank or fintech product; need modern core without legacy baggage.",
      },
      {
        title: "API Monetization",
        description: "Want to offer Banking-as-a-Service (BaaS) to partners but current system lacks API capabilities.",
      },
    ],
    industries: [
      { title: "Retail Banking", category: "FINANCIAL SERVICES" },
      { title: "Neobanks", category: "FINTECH" },
      { title: "Credit Unions", category: "FINANCIAL SERVICES" },
    ],
  },

  "blockchain-wallets": {
    title: "Blockchain & Crypto Wallet Infrastructure",
    tagline: "Secure custody, multi-chain support, and compliant crypto transaction processing.",
    tags: ["Blockchain", "Cryptocurrency", "Web3", "Custody"],
    overview:
      "Build enterprise-grade cryptocurrency wallets with institutional custody standards. Support multiple blockchains, implement secure key management, provide transaction batching, and ensure compliance with crypto regulations including travel rule and AML requirements.",
    features: [
      {
        title: "Multi-Chain Support",
        description: "Support Bitcoin, Ethereum, Solana, and 50+ chains with unified wallet interface and gas optimization.",
      },
      {
        title: "HSM-Based Key Management",
        description: "Hardware security modules for private key storage with multi-signature approval workflows.",
      },
      {
        title: "DeFi Protocol Integration",
        description: "Connect to DEXs, lending protocols, and staking services with automated yield optimization.",
      },
      {
        title: "Compliance & Travel Rule",
        description: "VASP identification, travel rule compliance, and transaction monitoring for regulatory requirements.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Crypto Product Launch",
        description: "Adding crypto trading, custody, or DeFi features but lack blockchain infrastructure expertise.",
      },
      {
        title: "Institutional Custody Needs",
        description: "Need enterprise-grade security and insurance for managing customer crypto assets at scale.",
      },
      {
        title: "Regulatory Compliance",
        description: "Operating in jurisdictions with strict crypto regulations; need compliant infrastructure from day one.",
      },
    ],
    industries: [
      { title: "Crypto Exchanges", category: "CRYPTOCURRENCY" },
      { title: "Wealth Management", category: "FINANCIAL SERVICES" },
      { title: "Payment Processors", category: "FINTECH" },
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

  "trading-platforms": {
    title: "Real-Time Trading & Exchange Platforms",
    tagline: "Low-latency order matching, market data distribution, and risk management for trading platforms.",
    tags: ["Trading", "Exchange", "Market Data", "Low Latency"],
    overview:
      "Build professional-grade trading infrastructure with microsecond-level order matching, real-time market data feeds, and robust risk controls. Support equities, options, futures, forex, and crypto with institutional-quality execution and regulatory compliance.",
    features: [
      {
        title: "Order Matching Engine",
        description: "Sub-millisecond matching with price-time priority, order types (limit, market, stop), and fill algorithms.",
      },
      {
        title: "Market Data Distribution",
        description: "Real-time quote and trade feeds with WebSocket streaming, historical data APIs, and market depth.",
      },
      {
        title: "Risk Management",
        description: "Pre-trade risk checks, position limits, margin calculations, and circuit breaker mechanisms.",
      },
      {
        title: "Regulatory Compliance",
        description: "Trade reporting, order audit trails, best execution monitoring, and regulator connectivity.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Exchange Platform Launch",
        description: "Building new trading venue for stocks, derivatives, or digital assets; need institutional-grade infrastructure.",
      },
      {
        title: "Latency Competitiveness",
        description: "Current platform losing market share to faster competitors; need to optimize execution speed.",
      },
      {
        title: "Product Expansion",
        description: "Adding new asset classes or order types; existing system can't support required functionality.",
      },
    ],
    industries: [
      { title: "Stock Exchanges", category: "CAPITAL MARKETS" },
      { title: "Crypto Exchanges", category: "CRYPTOCURRENCY" },
      { title: "Brokerage Firms", category: "FINANCIAL SERVICES" },
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
};
