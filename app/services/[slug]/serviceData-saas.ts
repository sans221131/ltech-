// SaaS & Enterprise Services
import { ServiceData } from "./serviceData";

export const allSaasServices: Record<string, ServiceData> = {
  "crm-platform": {
    title: "Customer Relationship Management (CRM)",
    tagline: "Sales pipeline, contact management, and automation for growing businesses.",
    tags: ["CRM", "Sales", "Pipeline", "Automation"],
    overview:
      "Modern CRM platform that helps sales teams close more deals faster. Manage contacts, track pipeline, automate follow-ups, integrate with email and calendar, generate proposals, and analyze sales performance—all in one intuitive interface.",
    features: [
      { title: "Pipeline Management", description: "Visual deal pipeline with drag-and-drop stages, probability scoring, and forecasting." },
      { title: "Contact Management", description: "Centralized database with interaction history, notes, and relationship mapping." },
      { title: "Sales Automation", description: "Automated follow-ups, task creation, and email sequences based on triggers." },
      { title: "Reporting & Analytics", description: "Dashboards for win rates, sales velocity, rep performance, and pipeline health." },
    ],
    whenYouNeedThis: [
      { title: "Lost Opportunities", description: "Deals falling through cracks due to poor follow-up and lack of visibility." },
      { title: "Scaling Sales", description: "Growing team needs structured process and consistent methodology." },
      { title: "Spreadsheet Chaos", description: "Managing sales in spreadsheets becoming unmanageable and error-prone." },
    ],
    industries: [
      { title: "B2B SaaS", category: "SOFTWARE" },
      { title: "Professional Services", category: "SERVICES" },
      { title: "Manufacturing", category: "B2B" },
    ],
  },

  "project-management": {
    title: "Project Management Platform",
    tagline: "Organize tasks, track progress, and collaborate with teams using visual workflows.",
    tags: ["Project Management", "Collaboration", "Agile", "Kanban"],
    overview:
      "Comprehensive project management solution with customizable boards, Gantt charts, time tracking, resource allocation, and team collaboration. Support for Agile, Scrum, Kanban, and waterfall methodologies with real-time updates and reporting.",
    features: [
      { title: "Visual Workflows", description: "Kanban boards, Gantt charts, calendar views, and list layouts for different work styles." },
      { title: "Resource Management", description: "Workload balancing, capacity planning, and allocation tracking across projects." },
      { title: "Time Tracking", description: "Built-in timers, timesheets, billable hours tracking, and budget monitoring." },
      { title: "Collaboration Tools", description: "Comments, file attachments, @mentions, and real-time notifications for team sync." },
    ],
    whenYouNeedThis: [
      { title: "Project Chaos", description: "Tasks scattered across email, spreadsheets, and chat causing missed deadlines." },
      { title: "Team Visibility", description: "Leadership can't see project status or bottlenecks without constant status meetings." },
      { title: "Remote Teams", description: "Distributed team needs unified workspace for async collaboration." },
    ],
    industries: [
      { title: "Software Development", category: "TECHNOLOGY" },
      { title: "Marketing Agencies", category: "CREATIVE" },
      { title: "Construction", category: "PROJECT-BASED" },
    ],
  },

  "hr-management": {
    title: "Human Resources Management System",
    tagline: "End-to-end HRIS with recruiting, onboarding, payroll, performance reviews, and benefits.",
    tags: ["HRIS", "HR", "Payroll", "Talent Management"],
    overview:
      "All-in-one HR platform managing employee lifecycle from recruitment to offboarding. Features include applicant tracking, digital onboarding, payroll processing, time-off management, performance reviews, learning management, and benefits administration.",
    features: [
      { title: "Recruitment & ATS", description: "Job posting, candidate pipeline, interview scheduling, and offer letter automation." },
      { title: "Payroll & Compliance", description: "Automated payroll processing, tax filing, wage garnishments, and multi-state compliance." },
      { title: "Performance Management", description: "360 reviews, goal tracking, continuous feedback, and development plans." },
      { title: "Employee Self-Service", description: "Portal for PTO requests, document access, benefits enrollment, and profile updates." },
    ],
    whenYouNeedThis: [
      { title: "Growing Headcount", description: "Manual HR processes don't scale beyond 50 employees; need automation." },
      { title: "Compliance Risk", description: "Struggling with multi-state payroll, labor laws, and audit readiness." },
      { title: "Disconnected Systems", description: "Juggling separate tools for recruiting, payroll, and performance management." },
    ],
    industries: [
      { title: "Mid-Market Companies", category: "ENTERPRISE" },
      { title: "Professional Services", category: "SERVICES" },
      { title: "Retail & Hospitality", category: "HIGH-TURNOVER" },
    ],
  },

  "accounting-software": {
    title: "Accounting & Financial Management",
    tagline: "Double-entry bookkeeping, invoicing, expense tracking, and financial reporting for businesses.",
    tags: ["Accounting", "Bookkeeping", "Finance", "Tax"],
    overview:
      "Cloud-based accounting software with general ledger, accounts payable/receivable, bank reconciliation, expense management, invoicing, purchase orders, and financial reporting. Multi-currency support with tax compliance and audit trails.",
    features: [
      { title: "Automated Bookkeeping", description: "Bank feeds, transaction categorization, reconciliation with machine learning accuracy." },
      { title: "Invoicing & Payments", description: "Professional invoices, recurring billing, online payments, and automated reminders." },
      { title: "Expense Management", description: "Receipt scanning, mileage tracking, corporate card integration, and approval workflows." },
      { title: "Financial Reporting", description: "P&L, balance sheet, cash flow statements, budget vs. actual, and custom reports." },
    ],
    whenYouNeedThis: [
      { title: "Tax Season Chaos", description: "Scrambling to organize financial records for accountant and tax filing." },
      { title: "Cash Flow Visibility", description: "Don't know financial position without manual spreadsheet analysis." },
      { title: "Scaling Business", description: "Outgrowing QuickBooks or need multi-entity, multi-currency capabilities." },
    ],
    industries: [
      { title: "Small Businesses", category: "SMB" },
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Professional Services", category: "SERVICES" },
    ],
  },

  "help-desk": {
    title: "Help Desk & Ticketing System",
    tagline: "Multi-channel support ticketing with automation, SLA management, and customer satisfaction tracking.",
    tags: ["Help Desk", "Support", "Ticketing", "Customer Service"],
    overview:
      "Unified support platform managing tickets from email, chat, phone, and social media. Features include ticket routing, SLA automation, knowledge base integration, customer portal, team collaboration, and satisfaction surveys.",
    features: [
      { title: "Omnichannel Ticketing", description: "Unified inbox for email, live chat, phone, WhatsApp, and social media inquiries." },
      { title: "Automation & Routing", description: "Auto-assign tickets by skill, priority, workload with escalation rules and SLA tracking." },
      { title: "Knowledge Base Integration", description: "Suggest articles to agents and customers, deflect tickets with self-service." },
      { title: "Analytics & Reporting", description: "Response times, resolution rates, CSAT scores, agent performance, and trending issues." },
    ],
    whenYouNeedThis: [
      { title: "Support Scaling", description: "Growing support volume overwhelming shared inbox; need ticket management." },
      { title: "SLA Breaches", description: "Missing response commitments and losing customers due to slow support." },
      { title: "Multi-Channel Chaos", description: "Requests coming from email, chat, social with no unified view." },
    ],
    industries: [
      { title: "SaaS Companies", category: "SOFTWARE" },
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Managed Services", category: "IT SERVICES" },
    ],
  },

  "email-marketing": {
    title: "Email Marketing & Automation",
    tagline: "Design campaigns, automate journeys, segment audiences, and optimize with A/B testing.",
    tags: ["Email Marketing", "Marketing Automation", "Campaigns", "Segmentation"],
    overview:
      "Complete email marketing platform with drag-and-drop builder, marketing automation workflows, audience segmentation, A/B testing, deliverability optimization, and comprehensive analytics. Integrates with CRM, e-commerce, and analytics tools.",
    features: [
      { title: "Visual Campaign Builder", description: "Drag-and-drop email designer with templates, dynamic content, and mobile optimization." },
      { title: "Marketing Automation", description: "Triggered campaigns, drip sequences, behavioral workflows, and lead nurturing journeys." },
      { title: "Segmentation & Personalization", description: "Advanced audience segments with dynamic content blocks and personalization tokens." },
      { title: "Deliverability Tools", description: "Spam testing, sender reputation monitoring, bounce management, and authentication setup." },
    ],
    whenYouNeedThis: [
      { title: "Email Revenue", description: "Want to build email as significant revenue channel with automation and segmentation." },
      { title: "Low Engagement", description: "Emails going to spam or low open rates; need deliverability expertise." },
      { title: "Manual Campaigns", description: "Sending one-off blasts; want automated nurture sequences and triggered emails." },
    ],
    industries: [
      { title: "E-Commerce", category: "RETAIL" },
      { title: "B2B Marketing", category: "LEAD GEN" },
      { title: "Content Publishers", category: "MEDIA" },
    ],
  },

  "analytics-platform": {
    title: "Business Intelligence & Analytics",
    tagline: "Connect data sources, build dashboards, and discover insights with self-service BI.",
    tags: ["Analytics", "Business Intelligence", "Data Viz", "Reporting"],
    overview:
      "Enterprise analytics platform connecting to databases, APIs, and SaaS tools for unified reporting. Build interactive dashboards, explore data with SQL, schedule reports, set alerts, and share insights across organization.",
    features: [
      { title: "Data Connectors", description: "Pre-built integrations for databases, warehouses, APIs, and 200+ SaaS applications." },
      { title: "Visual Dashboard Builder", description: "Drag-and-drop charts, tables, maps with real-time updates and drill-down capabilities." },
      { title: "SQL & Advanced Analytics", description: "Write custom queries, create calculated fields, and use predictive models." },
      { title: "Collaboration & Sharing", description: "Scheduled email reports, embedded dashboards, and permissions management." },
    ],
    whenYouNeedThis: [
      { title: "Data Silos", description: "Important data scattered across systems with no unified reporting." },
      { title: "Excel Dependency", description: "Creating reports in spreadsheets is time-consuming and error-prone." },
      { title: "Decision Lag", description: "Waiting on data teams for reports; need self-service analytics." },
    ],
    industries: [
      { title: "Enterprise", category: "BUSINESS INTELLIGENCE" },
      { title: "E-Commerce", category: "RETAIL ANALYTICS" },
      { title: "SaaS", category: "PRODUCT ANALYTICS" },
    ],
  },

  "document-management": {
    title: "Document Management System",
    tagline: "Centralized document storage with version control, e-signatures, and collaboration workflows.",
    tags: ["DMS", "Document Control", "Collaboration", "E-Signature"],
    overview:
      "Enterprise document management with secure cloud storage, version control, metadata tagging, full-text search, approval workflows, e-signature integration, and retention policies. Support for compliance requirements and audit trails.",
    features: [
      { title: "Version Control", description: "Track all document changes, compare versions, rollback, and see edit history." },
      { title: "Workflow Automation", description: "Route documents for review, approval, signature with automated reminders and escalations." },
      { title: "Advanced Search", description: "Full-text OCR search, metadata filters, saved searches, and AI-powered recommendations." },
      { title: "Security & Compliance", description: "Encryption, access controls, audit logs, retention policies, and compliance templates." },
    ],
    whenYouNeedThis: [
      { title: "File Chaos", description: "Critical documents scattered across email, shared drives, and personal folders." },
      { title: "Compliance Requirements", description: "Need to prove document retention, access controls, and audit trails." },
      { title: "Collaboration Bottlenecks", description: "Emailing document versions causing confusion and lost work." },
    ],
    industries: [
      { title: "Legal", category: "LAW FIRMS" },
      { title: "Healthcare", category: "COMPLIANCE" },
      { title: "Financial Services", category: "REGULATED" },
    ],
  },

  "video-conferencing": {
    title: "Video Conferencing & Meetings",
    tagline: "HD video calls with screen sharing, recording, breakout rooms, and webinar capabilities.",
    tags: ["Video Conferencing", "Meetings", "Webinars", "Remote Work"],
    overview:
      "Enterprise video conferencing platform with HD video/audio, screen sharing, virtual backgrounds, meeting recording, live transcription, breakout rooms, and webinar mode. Support for up to 1000 participants with reliability and security.",
    features: [
      { title: "High-Quality Video", description: "1080p video, noise cancellation, speaker view, gallery view, and virtual backgrounds." },
      { title: "Screen Sharing & Co-annotation", description: "Share screen, specific windows, or whiteboard with collaborative drawing tools." },
      { title: "Recording & Transcription", description: "Cloud recording with automatic transcription, searchable meeting library, and clips." },
      { title: "Webinar Features", description: "Registration pages, Q&A, polls, raised hands, waiting rooms, and post-event analytics." },
    ],
    whenYouNeedThis: [
      { title: "Remote Workforce", description: "Distributed team needs reliable video for daily standups and collaboration." },
      { title: "Client Meetings", description: "Professional video conferencing with branding and recording for client engagements." },
      { title: "Webinars & Training", description: "Hosting large-scale webinars, training sessions, or all-hands meetings." },
    ],
    industries: [
      { title: "Remote-First Companies", category: "TECHNOLOGY" },
      { title: "Education", category: "EDTECH" },
      { title: "Professional Services", category: "CONSULTING" },
    ],
  },

  "time-tracking": {
    title: "Time Tracking & Timesheet Software",
    tagline: "Track billable hours, manage timesheets, and optimize team productivity with insights.",
    tags: ["Time Tracking", "Timesheets", "Productivity", "Billing"],
    overview:
      "Comprehensive time tracking solution with timers, manual entry, timesheets, project tracking, client billing, productivity analytics, and integrations with project management and accounting tools. Mobile apps for on-the-go tracking.",
    features: [
      { title: "Flexible Time Entry", description: "One-click timers, manual entry, bulk editing, and automatic time capture integrations." },
      { title: "Project & Task Tracking", description: "Track time by project, task, client with hierarchical organization and budgets." },
      { title: "Billable Hours & Invoicing", description: "Mark time as billable, set hourly rates, generate invoices from timesheets." },
      { title: "Productivity Insights", description: "Time distribution reports, utilization rates, budget vs. actual, and team comparisons." },
    ],
    whenYouNeedThis: [
      { title: "Billable Work", description: "Agencies and consultancies need accurate time tracking for client billing." },
      { title: "Project Profitability", description: "Don't know which projects are profitable without time tracking data." },
      { title: "Remote Team Management", description: "Need visibility into how distributed team spends time." },
    ],
    industries: [
      { title: "Agencies", category: "CREATIVE SERVICES" },
      { title: "Consulting", category: "PROFESSIONAL SERVICES" },
      { title: "Legal", category: "LAW FIRMS" },
    ],
  },

  "inventory-system": {
    title: "Inventory Management System",
    tagline: "Track stock levels, automate reordering, manage warehouses, and optimize inventory costs.",
    tags: ["Inventory", "Warehouse", "Stock Control", "Supply Chain"],
    overview:
      "End-to-end inventory management with real-time stock tracking, multi-warehouse support, automated reordering, barcode scanning, lot tracking, kitting, inventory valuation, and integration with e-commerce and accounting systems.",
    features: [
      { title: "Real-Time Stock Tracking", description: "Live inventory levels across warehouses with low stock alerts and reorder automation." },
      { title: "Multi-Warehouse Management", description: "Track inventory across locations with inter-warehouse transfers and allocation rules." },
      { title: "Barcode & Serial Numbers", description: "Barcode scanning, serial number tracking, lot/batch control for traceability." },
      { title: "Demand Forecasting", description: "Predictive analytics for optimal stock levels, reducing overstock and stockouts." },
    ],
    whenYouNeedThis: [
      { title: "Stock Inconsistencies", description: "Physical inventory doesn't match system causing overselling or overbuying." },
      { title: "Multi-Location Complexity", description: "Managing inventory across warehouses or retail locations manually." },
      { title: "Cash Tied in Inventory", description: "Overstock tying up cash; need data-driven inventory optimization." },
    ],
    industries: [
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Wholesale Distribution", category: "DISTRIBUTION" },
      { title: "Manufacturing", category: "PRODUCTION" },
    ],
  },

  "invoicing": {
    title: "Invoicing & Billing Software",
    tagline: "Create professional invoices, automate recurring billing, and get paid faster online.",
    tags: ["Invoicing", "Billing", "Payments", "AR"],
    overview:
      "Modern invoicing platform with customizable templates, recurring billing, online payment acceptance, automatic reminders, late fee calculation, multi-currency support, and integration with accounting software for seamless AR management.",
    features: [
      { title: "Professional Invoices", description: "Branded templates, line items, discounts, taxes, terms with PDF generation." },
      { title: "Recurring Billing", description: "Automate subscription and retainer invoicing with flexible schedules and payment plans." },
      { title: "Online Payments", description: "Accept credit cards, ACH, PayPal with embedded payment links in invoices." },
      { title: "Payment Reminders", description: "Automated reminder emails for overdue invoices with escalation workflows." },
    ],
    whenYouNeedThis: [
      { title: "Slow Payments", description: "Cash flow suffering from late payments; need automated reminders and online payment." },
      { title: "Manual Invoicing", description: "Creating invoices in Word or Excel is time-consuming and unprofessional." },
      { title: "Subscription Business", description: "Need recurring billing automation for subscriptions or retainers." },
    ],
    industries: [
      { title: "Freelancers", category: "SOLOPRENEURS" },
      { title: "Agencies", category: "SERVICES" },
      { title: "B2B SaaS", category: "SUBSCRIPTIONS" },
    ],
  },

  "workflow-automation": {
    title: "Workflow Automation Platform",
    tagline: "Connect apps and automate repetitive tasks with no-code workflows and integrations.",
    tags: ["Automation", "Workflow", "Integration", "No-Code"],
    overview:
      "No-code automation platform connecting 1000+ apps to automate workflows. Build multi-step automations with conditional logic, data transformations, scheduling, error handling, and monitoring. Reduce manual work and human error.",
    features: [
      { title: "Pre-Built Integrations", description: "Connect to 1000+ apps including CRM, marketing, support, accounting, and databases." },
      { title: "Visual Workflow Builder", description: "Drag-and-drop automation builder with conditional logic, loops, and data mapping." },
      { title: "Advanced Features", description: "Webhooks, API requests, JavaScript code steps, scheduling, and error recovery." },
      { title: "Monitoring & Logging", description: "Track automation runs, debug failures, view execution history, and set alerts." },
    ],
    whenYouNeedThis: [
      { title: "Manual Data Entry", description: "Team copying data between systems wasting hours daily on repetitive work." },
      { title: "Integration Gaps", description: "Apps don't talk to each other requiring manual handoffs and data sync." },
      { title: "Scaling Operations", description: "Hiring more people for manual tasks that could be automated." },
    ],
    industries: [
      { title: "Operations Teams", category: "BUSINESS OPS" },
      { title: "Marketing", category: "MARTECH" },
      { title: "Sales", category: "REVENUE OPS" },
    ],
  },

  "knowledge-base": {
    title: "Knowledge Base & Help Center",
    tagline: "Self-service documentation with AI search, article analytics, and multi-language support.",
    tags: ["Knowledge Base", "Documentation", "Help Center", "Self-Service"],
    overview:
      "Customer-facing knowledge base with intuitive article editor, categorization, AI-powered search, voting and feedback, multi-language support, embeddable widgets, and analytics on article performance and content gaps.",
    features: [
      { title: "AI-Powered Search", description: "Natural language search with typo tolerance, synonyms, and suggested articles." },
      { title: "Article Management", description: "Rich text editor, media embeds, version history, SEO optimization, and scheduled publishing." },
      { title: "Feedback & Analytics", description: "Article voting, comments, search analytics, and identification of content gaps." },
      { title: "Multi-Language Support", description: "Translate articles, automatic language detection, and localized search." },
    ],
    whenYouNeedThis: [
      { title: "Support Ticket Volume", description: "Overwhelmed with repetitive questions that could be answered by documentation." },
      { title: "Scattered Documentation", description: "Help content in emails, docs, wikis with no searchable central location." },
      { title: "Self-Service Strategy", description: "Want to deflect tickets and empower customers to find answers independently." },
    ],
    industries: [
      { title: "SaaS Companies", category: "SOFTWARE" },
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Financial Services", category: "BANKING" },
    ],
  },

  "calendar-booking": {
    title: "Calendar Booking & Scheduling",
    tagline: "Eliminate scheduling back-and-forth with shareable booking links and calendar sync.",
    tags: ["Scheduling", "Calendar", "Booking", "Appointments"],
    overview:
      "Scheduling automation with personal booking pages, team round-robin, calendar sync with Google/Outlook, buffer times, custom availability, automated reminders, integrations with video conferencing and payment processing.",
    features: [
      { title: "Shareable Booking Links", description: "Personal pages with custom URLs, branding, availability display, and event types." },
      { title: "Calendar Sync", description: "Two-way sync with Google, Outlook, iCloud to prevent double-bookings and conflicts." },
      { title: "Team Scheduling", description: "Round-robin routing, collective availability, and hierarchical booking rules." },
      { title: "Automation & Integrations", description: "Confirmation emails, reminders, Zoom links, payment collection, and CRM updates." },
    ],
    whenYouNeedThis: [
      { title: "Email Ping-Pong", description: "Wasting time on back-and-forth emails to find meeting times." },
      { title: "No-Shows", description: "Missed appointments hurting business; need automated reminders." },
      { title: "Professional Image", description: "Want branded booking experience better than Calendly links." },
    ],
    industries: [
      { title: "Consulting", category: "SERVICES" },
      { title: "Sales Teams", category: "B2B" },
      { title: "Healthcare", category: "APPOINTMENTS" },
    ],
  },

  "form-builder": {
    title: "Form Builder & Data Collection",
    tagline: "Build custom forms, surveys, and quizzes with conditional logic and powerful integrations.",
    tags: ["Forms", "Surveys", "Data Collection", "Lead Capture"],
    overview:
      "Drag-and-drop form builder with 40+ field types, conditional logic, payment collection, file uploads, e-signatures, and integrations with CRM, email marketing, and analytics tools. Embed forms or use standalone landing pages.",
    features: [
      { title: "Visual Form Builder", description: "Drag-and-drop interface with templates, themes, custom branding, and mobile optimization." },
      { title: "Conditional Logic", description: "Show/hide fields, skip pages, calculate values based on user responses for dynamic forms." },
      { title: "Advanced Fields", description: "Payment processing, file uploads, e-signatures, address lookup, and rating scales." },
      { title: "Data Management", description: "Response storage, export to CSV/Excel, webhooks, and API access to submission data." },
    ],
    whenYouNeedThis: [
      { title: "Lead Generation", description: "Need professional forms for lead capture on website and landing pages." },
      { title: "Complex Workflows", description: "Registration, applications, or intake requiring conditional logic and multi-step flows." },
      { title: "Payment Collection", description: "Want to collect payments, donations, or deposits through forms." },
    ],
    industries: [
      { title: "Marketing", category: "LEAD GEN" },
      { title: "Events", category: "REGISTRATION" },
      { title: "Nonprofits", category: "FUNDRAISING" },
    ],
  },

  "contract-management": {
    title: "Contract Lifecycle Management",
    tagline: "Centralize contracts, automate workflows, track obligations, and reduce legal risk.",
    tags: ["CLM", "Contracts", "Legal Tech", "Compliance"],
    overview:
      "End-to-end contract management with centralized repository, template library, approval workflows, e-signature integration, obligation tracking, renewal alerts, version control, and AI-powered contract analysis for risk and key terms.",
    features: [
      { title: "Contract Repository", description: "Centralized storage with metadata tagging, full-text search, and folder organization." },
      { title: "Workflow Automation", description: "Template-based creation, approval routing, negotiation tracking, and e-signature collection." },
      { title: "Obligation Management", description: "Extract and track key dates, deliverables, payments with automated alerts and reporting." },
      { title: "AI-Powered Analysis", description: "Extract key terms, identify non-standard clauses, flag risks, and suggest improvements." },
    ],
    whenYouNeedThis: [
      { title: "Contract Chaos", description: "Contracts scattered across email and file shares with no visibility or searchability." },
      { title: "Missed Renewals", description: "Losing leverage on renewals or auto-renewing unfavorable terms due to lack of tracking." },
      { title: "Legal Bottleneck", description: "Contract approvals taking too long; need workflow automation." },
    ],
    industries: [
      { title: "Legal Departments", category: "CORPORATE LEGAL" },
      { title: "Procurement", category: "VENDOR MANAGEMENT" },
      { title: "Sales Teams", category: "DEAL DESK" },
    ],
  },

  "expense-tracking": {
    title: "Expense Tracking & Management",
    tagline: "Automate expense reports with receipt capture, policy enforcement, and reimbursement workflows.",
    tags: ["Expense Management", "T&E", "Reimbursement", "Finance"],
    overview:
      "Modern expense management with mobile receipt scanning, OCR data extraction, corporate card integration, policy enforcement, multi-level approvals, reimbursement processing, and integration with accounting systems for seamless reconciliation.",
    features: [
      { title: "Receipt Capture & OCR", description: "Snap photos of receipts, extract data automatically, match to card transactions." },
      { title: "Policy Enforcement", description: "Set spending limits, flag violations, require explanations with automated approvals." },
      { title: "Corporate Card Integration", description: "Sync transactions from Amex, Visa, Mastercard for automatic expense creation." },
      { title: "Multi-Currency & Mileage", description: "Support international expenses, real-time FX rates, and IRS-compliant mileage tracking." },
    ],
    whenYouNeedThis: [
      { title: "Manual Expense Reports", description: "Employees submitting paper receipts causing admin burden and delayed reimbursements." },
      { title: "Policy Violations", description: "No way to enforce spending policies before expenses occur." },
      { title: "Accounting Integration", description: "Manual expense entry into accounting system causing errors and delays." },
    ],
    industries: [
      { title: "Enterprises", category: "FINANCE" },
      { title: "Professional Services", category: "CONSULTING" },
      { title: "Field Services", category: "MOBILE WORKFORCE" },
    ],
  },

  "survey-platform": {
    title: "Survey & Feedback Platform",
    tagline: "Create surveys, analyze responses, and gain insights with advanced question types and logic.",
    tags: ["Surveys", "Feedback", "Research", "NPS"],
    overview:
      "Enterprise survey platform with 20+ question types, branching logic, quota management, panel integration, real-time analytics, cross-tab reports, sentiment analysis, and distribution via email, web, mobile, and SMS.",
    features: [
      { title: "Advanced Question Types", description: "Multiple choice, matrix, ranking, slider, NPS, open-ended with validation rules." },
      { title: "Survey Logic", description: "Skip logic, display logic, piping, quotas, and randomization for sophisticated surveys." },
      { title: "Analytics & Reporting", description: "Real-time dashboards, cross-tabs, filters, sentiment analysis, and exportable reports." },
      { title: "Distribution Channels", description: "Email invitations, web links, website embeds, mobile app, SMS, and social media." },
    ],
    whenYouNeedThis: [
      { title: "Customer Feedback", description: "Need systematic approach to collect NPS, CSAT, and product feedback." },
      { title: "Market Research", description: "Conducting research studies requiring complex survey logic and quotas." },
      { title: "Employee Engagement", description: "Measuring employee satisfaction, pulse surveys, and 360 feedback." },
    ],
    industries: [
      { title: "Market Research", category: "RESEARCH" },
      { title: "Customer Success", category: "SAAS" },
      { title: "HR Teams", category: "EMPLOYEE ENGAGEMENT" },
    ],
  },

  "api-gateway": {
    title: "API Gateway & Management",
    tagline: "Secure, scale, and monitor APIs with authentication, rate limiting, and analytics.",
    tags: ["API Gateway", "API Management", "Microservices", "Infrastructure"],
    overview:
      "Enterprise API gateway providing authentication, rate limiting, request/response transformation, caching, load balancing, and monitoring. Support for REST, GraphQL, WebSocket with developer portal, API keys, OAuth, and comprehensive analytics.",
    features: [
      { title: "Authentication & Security", description: "API keys, OAuth 2.0, JWT, mTLS, IP whitelisting, and request validation." },
      { title: "Rate Limiting & Quotas", description: "Throttle requests by API key, IP, or user with customizable limits and fair queuing." },
      { title: "Transformation & Caching", description: "Modify requests/responses, aggregate APIs, cache responses for performance." },
      { title: "Analytics & Monitoring", description: "Real-time metrics, error tracking, latency monitoring, and usage reports." },
    ],
    whenYouNeedThis: [
      { title: "API Monetization", description: "Want to charge for API access with tiered plans and usage tracking." },
      { title: "Microservices Architecture", description: "Managing multiple backend services requiring unified entry point." },
      { title: "Third-Party Integrations", description: "Exposing APIs to partners and need security, rate limiting, and monitoring." },
    ],
    industries: [
      { title: "SaaS Platforms", category: "SOFTWARE" },
      { title: "Fintech", category: "FINANCIAL SERVICES" },
      { title: "API-First Companies", category: "TECHNOLOGY" },
    ],
  },
};
