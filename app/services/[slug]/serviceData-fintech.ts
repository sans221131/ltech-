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

  "p2p-transfers": {
    title: "Peer-to-Peer Transfer Platform",
    tagline: "Instant P2P payments with social features and multi-currency support.",
    tags: ["P2P", "Payments", "Social", "Transfers"],
    overview:
      "Enable seamless person-to-person money transfers with instant settlement, social payment features, and multi-currency support. Build the next generation of P2P payment apps with real-time notifications, split bills, and group payments functionality.",
    features: [
      { title: "Instant Transfers", description: "Real-time money movement between users with immediate availability." },
      { title: "Social Features", description: "Payment requests, split bills, and social feed of transaction activity." },
      { title: "Multi-Currency", description: "Support multiple currencies with real-time FX conversion and low fees." },
      { title: "Integration", description: "Connect to bank accounts, cards, and digital wallets for funding sources." },
    ],
    whenYouNeedThis: [
      { title: "P2P Product Launch", description: "Building Venmo/Cash App competitor or adding P2P to existing app." },
      { title: "User Engagement", description: "Need social features to drive payment volume and user retention." },
      { title: "International Transfers", description: "Users sending money across borders; need compliant remittance infrastructure." },
    ],
    industries: [
      { title: "Payment Apps", category: "FINTECH" },
      { title: "Social Platforms", category: "SOCIAL" },
      { title: "Remittance", category: "CROSS-BORDER" },
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

  "open-banking-apis": {
    title: "Open Banking & API Infrastructure",
    tagline: "Secure APIs for account aggregation, payment initiation, and financial data sharing.",
    tags: ["Open Banking", "APIs", "PSD2", "Financial Data"],
    overview:
      "Implement open banking standards with secure APIs for account information services (AIS) and payment initiation services (PIS). Enable third-party access to banking data with customer consent, strong customer authentication, and comprehensive audit trails.",
    features: [
      { title: "Account Aggregation", description: "Read-only access to account balances, transactions, and beneficiary data." },
      { title: "Payment Initiation", description: "Trigger payments from customer accounts with SCA and transaction monitoring." },
      { title: "OAuth2 & Security", description: "Strong customer authentication with consent management and token lifecycle." },
      { title: "Regulatory Compliance", description: "PSD2, UK Open Banking, and Consumer Data Right (CDR) compliance." },
    ],
    whenYouNeedThis: [
      { title: "Open Banking Mandate", description: "Regulatory requirement to provide APIs; need compliant implementation." },
      { title: "Data Monetization", description: "Want to offer banking data to partners and fintechs for revenue sharing." },
      { title: "Ecosystem Strategy", description: "Building platform with third-party developers; need robust API program." },
    ],
    industries: [
      { title: "Banking", category: "FINANCIAL SERVICES" },
      { title: "Fintech Platforms", category: "FINTECH" },
      { title: "Data Providers", category: "FINANCIAL DATA" },
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

  "bill-payment": {
    title: "Automated Bill Payment & Billing Systems",
    tagline: "Recurring bill payment automation with reminders and multi-biller support.",
    tags: ["Bill Payment", "Recurring Payments", "Automation", "Reminders"],
    overview:
      "Build comprehensive bill payment solutions that handle recurring payments, one-time bills, and payment reminders. Connect to thousands of billers for utilities, subscriptions, loans, and services with automated payment processing and confirmation.",
    features: [
      { title: "Biller Network", description: "Integration with utility companies, telecom, insurance, and loan servicers for payments." },
      { title: "Payment Scheduling", description: "One-time, recurring, and custom schedule payments with automatic execution." },
      { title: "Smart Reminders", description: "Due date notifications, low balance alerts, and payment confirmation messages." },
      { title: "Account Linking", description: "Connect bank accounts, debit cards, and credit cards as funding sources." },
    ],
    whenYouNeedThis: [
      { title: "Financial Wellness", description: "Helping users avoid late fees and manage cash flow with automated bill pay." },
      { title: "Banking Features", description: "Adding bill payment to banking app as retention and engagement feature." },
      { title: "Payment Aggregation", description: "Users want single place to manage all recurring payments and subscriptions." },
    ],
    industries: [
      { title: "Digital Banking", category: "FINTECH" },
      { title: "Personal Finance", category: "PFM" },
      { title: "Bill Payment Services", category: "PAYMENTS" },
    ],
  },

  "fx-trading": {
    title: "Foreign Exchange Trading Platform",
    tagline: "Multi-currency trading with real-time rates, hedging tools, and settlement.",
    tags: ["FX", "Forex", "Currency Trading", "Hedging"],
    overview:
      "Build professional FX trading platforms with real-time spot rates, forward contracts, options, and algorithmic trading. Serve corporate treasurers, investment managers, and retail traders with institutional-grade execution and risk management.",
    features: [
      { title: "Real-Time Pricing", description: "Streaming FX rates from multiple liquidity providers with smart order routing." },
      { title: "Multi-Product Support", description: "Spot, forward, swap, and options trading with margin and leverage controls." },
      { title: "Risk Management", description: "Position monitoring, VaR calculations, and hedging strategy recommendations." },
      { title: "Settlement & Clearing", description: "Integration with SWIFT, correspondent banks, and payment rails for settlement." },
    ],
    whenYouNeedThis: [
      { title: "Corporate Treasury", description: "Managing foreign exchange exposure; need tools for hedging and execution." },
      { title: "FX Platform Launch", description: "Building retail or institutional FX trading platform; need market connectivity." },
      { title: "Execution Quality", description: "Current FX provider has wide spreads; need direct market access." },
    ],
    industries: [
      { title: "Forex Brokers", category: "CAPITAL MARKETS" },
      { title: "Treasury Management", category: "CORPORATE" },
      { title: "Fintech", category: "PAYMENTS" },
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
