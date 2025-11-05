// Real Estate Services Data
import { ServiceData } from "./serviceData";

export const allRealEstateServices: Record<string, ServiceData> = {
  "property-listings": {
    title: "Property Listings & MLS Integration",
    tagline: "IDX/MLS integration with advanced search, virtual tours, and lead capture.",
    tags: ["Real Estate", "MLS", "Property Search", "Listings"],
    overview: "Powerful property listing platform with MLS integration, advanced search filters, map-based browsing, saved searches, and lead capture. Enable buyers to find their perfect property while capturing and nurturing leads for your real estate business.",
    features: [
      { title: "MLS Integration", description: "Real-time synchronization with MLS systems for up-to-date listings and automated updates." },
      { title: "Advanced Search", description: "Filter by price, location, size, amenities, school districts, and custom criteria." },
      { title: "Map-Based Browsing", description: "Interactive maps with clustering, boundary drawing, and neighborhood overlays." },
      { title: "Lead Capture", description: "Inquiry forms, showing requests, and mortgage calculator with CRM integration." },
    ],
    whenYouNeedThis: [
      { title: "Listing Visibility", description: "Properties not getting enough exposure; need professional website with SEO optimization." },
      { title: "Lead Generation", description: "Not capturing enough qualified leads from website visitors; missing conversion opportunities." },
      { title: "MLS Limitations", description: "MLS website doesn't provide branding or lead capture; need your own property portal." },
    ],
    industries: [
      { title: "Real Estate Brokerages", category: "REAL ESTATE" },
      { title: "Property Portals", category: "PROPTECH" },
      { title: "Real Estate Teams", category: "REAL ESTATE" },
    ],
  },

  "virtual-tours": {
    title: "360° Virtual Tours & 3D Walkthroughs",
    tagline: "Immersive property experiences with 3D scans, virtual staging, and interactive floor plans.",
    tags: ["Virtual Tours", "3D", "Matterport", "Property Marketing"],
    overview: "Create engaging virtual property experiences that let buyers explore homes remotely. 3D scanning, 360° photography, virtual staging, dollhouse views, and floor plans—reducing unnecessary showings while attracting serious buyers.",
    features: [
      { title: "3D Property Scans", description: "Matterport-style 3D walkthroughs with measurement tools and dollhouse view." },
      { title: "Virtual Staging", description: "Digitally furnish empty rooms to help buyers visualize potential." },
      { title: "Interactive Floor Plans", description: "Clickable floor plans with room dimensions and 360° photo hotspots." },
      { title: "Analytics", description: "Track viewer engagement, hot spots, and time spent in each room." },
    ],
    whenYouNeedThis: [
      { title: "Remote Buyers", description: "Out-of-town buyers can't visit in person; need immersive remote viewing experience." },
      { title: "Marketing Differentiation", description: "Competing listings have better photos; need cutting-edge marketing to stand out." },
      { title: "Showing Efficiency", description: "Too many unqualified showings wasting time; virtual tours pre-qualify serious buyers." },
    ],
    industries: [
      { title: "Luxury Real Estate", category: "REAL ESTATE" },
      { title: "Commercial Real Estate", category: "CRE" },
      { title: "Vacation Rentals", category: "HOSPITALITY" },
    ],
  },

  "crm-agents": {
    title: "Real Estate CRM for Agents",
    tagline: "Lead management, transaction pipeline, and automated follow-up for real estate professionals.",
    tags: ["CRM", "Lead Management", "Real Estate", "Pipeline"],
    overview: "Purpose-built CRM for real estate with lead capture from multiple sources, automated follow-up campaigns, transaction management, and commission tracking. Keep deals moving while staying top-of-mind with past clients.",
    features: [
      { title: "Lead Management", description: "Capture leads from website, portals, open houses with automatic assignment and scoring." },
      { title: "Automated Follow-Up", description: "Drip campaigns, property alerts, and birthday/anniversary reminders to nurture relationships." },
      { title: "Transaction Pipeline", description: "Track deals from lead to close with tasks, milestones, and document management." },
      { title: "Commission Tracking", description: "Calculate and track commissions, splits, and referral fees with accounting integration." },
    ],
    whenYouNeedThis: [
      { title: "Lead Follow-Up", description: "Leads falling through cracks due to poor follow-up; missing conversion opportunities." },
      { title: "Transaction Chaos", description: "Managing multiple transactions becoming overwhelming; need organized system." },
      { title: "Client Retention", description: "Losing touch with past clients; missing out on repeat and referral business." },
    ],
    industries: [
      { title: "Real Estate Agents", category: "REAL ESTATE" },
      { title: "Brokerages", category: "REAL ESTATE" },
      { title: "Property Management", category: "PROPERTY" },
    ],
  },

  "booking-system-realestate": {
    title: "Property Showing & Appointment Booking",
    tagline: "Self-service showing scheduler with agent coordination and automated reminders.",
    tags: ["Booking", "Showings", "Scheduling", "Automation"],
    overview: "Streamline property showings with online booking system that lets buyers schedule viewings, coordinates agent availability, manages open houses, and sends automated reminders—reducing phone tag while improving conversion rates.",
    features: [
      { title: "Self-Service Scheduling", description: "Buyers book showings online with real-time agent availability and instant confirmation." },
      { title: "Agent Coordination", description: "Sync with agent calendars, handle multi-property tours, and coordinate showing access." },
      { title: "Automated Reminders", description: "SMS and email reminders to buyers and agents with easy rescheduling links." },
      { title: "Open House Management", description: "Register attendees, collect feedback, and capture leads from open house events." },
    ],
    whenYouNeedThis: [
      { title: "Scheduling Friction", description: "Phone tag with buyers wasting time and causing missed opportunities." },
      { title: "No-Shows", description: "High no-show rates for showings hurting productivity and frustrating agents." },
      { title: "Lead Capture", description: "Missing opportunity to capture contact info and preferences during booking process." },
    ],
    industries: [
      { title: "Real Estate Agencies", category: "REAL ESTATE" },
      { title: "Property Management", category: "PROPTECH" },
      { title: "Brokerages", category: "REAL ESTATE" },
    ],
  },

  "property-valuation": {
    title: "Automated Property Valuation & AVMs",
    tagline: "AI-powered property valuations with comparable sales and market trend analysis.",
    tags: ["Valuation", "AVM", "Pricing", "Market Analysis"],
    overview: "Provide instant property valuations using AI models trained on local market data. Analyze comparable sales, market trends, property features, and neighborhood factors to generate accurate estimates—helping sellers price competitively and buyers make informed offers.",
    features: [
      { title: "AVM Engine", description: "Machine learning models trained on MLS data, public records, and market trends for accurate valuations." },
      { title: "Comparable Analysis", description: "Identify and analyze similar properties with adjustments for differences in features and condition." },
      { title: "Market Insights", description: "Historical price trends, days on market, and neighborhood appreciation rates." },
      { title: "Valuation Reports", description: "Professional PDF reports with confidence intervals, comps, and market data." },
    ],
    whenYouNeedThis: [
      { title: "Pricing Strategy", description: "Sellers unsure how to price; need data-driven valuation to set competitive listing price." },
      { title: "Lead Generation", description: "Offering free home valuations is proven lead magnet for seller leads." },
      { title: "Buyer Guidance", description: "Buyers want to know if asking price is fair before making offer." },
    ],
    industries: [
      { title: "Real Estate Portals", category: "PROPTECH" },
      { title: "Mortgage Lenders", category: "FINTECH" },
      { title: "Appraisal Companies", category: "REAL ESTATE" },
    ],
  },

  "mortgage-portal": {
    title: "Mortgage Application & Pre-Qualification",
    tagline: "Digital mortgage application with document upload, rate comparison, and lender marketplace.",
    tags: ["Mortgage", "Lending", "Pre-Qualification", "FinTech"],
    overview: "Simplify home financing with digital mortgage platform. Enable pre-qualification in minutes, collect documents electronically, compare rates from multiple lenders, track application status, and close faster—all while ensuring compliance with lending regulations.",
    features: [
      { title: "Pre-Qualification", description: "Soft credit pull for instant pre-qual letters to strengthen buyer offers." },
      { title: "Document Collection", description: "Secure portal for uploading pay stubs, tax returns, and bank statements." },
      { title: "Lender Marketplace", description: "Compare rates and terms from multiple lenders to find best deal." },
      { title: "Application Tracking", description: "Real-time status updates from application through underwriting to closing." },
    ],
    whenYouNeedThis: [
      { title: "Buyer Readiness", description: "Buyers losing out on properties because they don't have pre-approval ready." },
      { title: "Document Chaos", description: "Email and fax for documents is slow and insecure; need modern solution." },
      { title: "Referral Revenue", description: "Want to monetize mortgage referrals while providing value to clients." },
    ],
    industries: [
      { title: "Real Estate Brokerages", category: "REAL ESTATE" },
      { title: "Mortgage Brokers", category: "LENDING" },
      { title: "PropTech Platforms", category: "FINTECH" },
    ],
  },

  "lease-management": {
    title: "Lease Management & Rental Administration",
    tagline: "End-to-end lease lifecycle from applications to renewals with tenant portal.",
    tags: ["Lease", "Rental", "Property Management", "Tenant Portal"],
    overview: "Manage residential and commercial leases efficiently from application to move-out. Handle tenant screening, lease generation, rent collection, maintenance requests, renewals, and deposits—all with automated workflows and compliance tracking.",
    features: [
      { title: "Tenant Screening", description: "Credit checks, background checks, and income verification with instant reports." },
      { title: "Lease Generation", description: "Template-based lease creation with e-signature and automatic renewal tracking." },
      { title: "Rent Collection", description: "Online payments with ACH, card, or digital wallets; automated late fee assessment." },
      { title: "Tenant Portal", description: "Self-service portal for payments, maintenance requests, documents, and communication." },
    ],
    whenYouNeedThis: [
      { title: "Manual Processes", description: "Paper leases and checks creating administrative burden and errors." },
      { title: "Rent Collection", description: "Late payments and chasing tenants for rent hurting cash flow." },
      { title: "Tenant Communication", description: "Phone and email overwhelm; need organized system for requests and communication." },
    ],
    industries: [
      { title: "Property Management", category: "REAL ESTATE" },
      { title: "Landlords", category: "RENTAL" },
      { title: "Commercial Property", category: "CRE" },
    ],
  },

  "maintenance-requests": {
    title: "Property Maintenance & Work Order Management",
    tagline: "Tenant request tracking with vendor dispatch, scheduling, and completion verification.",
    tags: ["Maintenance", "Work Orders", "Facility Management", "Service"],
    overview: "Streamline property maintenance with comprehensive work order system. Tenants submit requests via portal, system routes to appropriate vendors, tracks progress, manages scheduling, and verifies completion—improving tenant satisfaction while controlling costs.",
    features: [
      { title: "Request Portal", description: "Tenant-facing portal with mobile app for submitting requests with photos and priority." },
      { title: "Vendor Management", description: "Vendor database with specialties, rates, and performance ratings for smart dispatch." },
      { title: "Scheduling & Dispatch", description: "Automated vendor assignment, appointment scheduling, and access coordination." },
      { title: "Tracking & Analytics", description: "Real-time status updates, completion verification, and maintenance cost analysis." },
    ],
    whenYouNeedThis: [
      { title: "Response Time", description: "Slow response to maintenance requests causing tenant dissatisfaction and churn." },
      { title: "Vendor Coordination", description: "Managing multiple vendors and scheduling is chaotic and inefficient." },
      { title: "Cost Control", description: "No visibility into maintenance spending or vendor performance." },
    ],
    industries: [
      { title: "Multi-Family Housing", category: "PROPERTY" },
      { title: "Commercial Buildings", category: "CRE" },
      { title: "HOAs", category: "COMMUNITY" },
    ],
  },

  "hoa-portal": {
    title: "HOA Management & Community Portal",
    tagline: "Homeowner association management with dues collection, violation tracking, and resident communication.",
    tags: ["HOA", "Community", "Association Management", "Compliance"],
    overview: "Comprehensive HOA management platform for board members and residents. Manage dues and assessments, architectural requests, violation tracking, meeting minutes, document library, and community communication—improving transparency and compliance.",
    features: [
      { title: "Dues & Assessments", description: "Automated invoicing, online payment collection, and delinquency management." },
      { title: "Architectural Review", description: "Submit and approve modification requests with photo documentation and compliance tracking." },
      { title: "Violation Management", description: "Document violations, send notices, track compliance, and assess fines per CCRs." },
      { title: "Resident Portal", description: "Access documents, pay dues, submit requests, and view community announcements." },
    ],
    whenYouNeedThis: [
      { title: "Volunteer Burnout", description: "Board members overwhelmed by administrative tasks; need automation and organization." },
      { title: "Collections Issues", description: "Difficulty collecting dues and assessments hurting association finances." },
      { title: "Communication Gaps", description: "Residents complaining about lack of transparency and difficulty accessing information." },
    ],
    industries: [
      { title: "Homeowner Associations", category: "HOA" },
      { title: "Condo Associations", category: "PROPERTY" },
      { title: "Community Management", category: "REAL ESTATE" },
    ],
  },

  "rent-collection": {
    title: "Online Rent Collection & Payment Processing",
    tagline: "Automated rent payments with multiple payment methods, late fees, and ledger tracking.",
    tags: ["Rent", "Payments", "ACH", "Collections"],
    overview: "Modern rent collection platform that makes payments easy for tenants while ensuring timely collection for landlords. Support ACH, cards, digital wallets; automate late fees and reminders; provide payment history and receipts—improving cash flow and reducing manual work.",
    features: [
      { title: "Multiple Payment Methods", description: "Accept ACH, debit/credit cards, Apple Pay, Google Pay with automatic processing." },
      { title: "Auto-Pay Enrollment", description: "Encourage tenants to set up recurring payments for on-time collection." },
      { title: "Late Fee Automation", description: "Automatically assess and collect late fees based on lease terms." },
      { title: "Payment Ledger", description: "Complete payment history, receipts, and accounting integration for both parties." },
    ],
    whenYouNeedThis: [
      { title: "Late Payments", description: "Chasing tenants for rent checks causing cash flow problems and frustration." },
      { title: "Manual Processes", description: "Tracking checks and cash deposits is time-consuming and error-prone." },
      { title: "Tenant Convenience", description: "Tenants expecting modern payment options like other bills." },
    ],
    industries: [
      { title: "Property Management", category: "RENTAL" },
      { title: "Landlords", category: "REAL ESTATE" },
      { title: "Student Housing", category: "PROPERTY" },
    ],
  },

  "smart-home-iot": {
    title: "Smart Home & IoT Property Management",
    tagline: "Connected property devices for access control, energy management, and remote monitoring.",
    tags: ["Smart Home", "IoT", "PropTech", "Automation"],
    overview: "Transform properties with IoT technology for remote management and automation. Smart locks for keyless entry, thermostats for energy savings, leak sensors for damage prevention, and occupancy monitoring—reducing costs while improving tenant experience.",
    features: [
      { title: "Smart Access Control", description: "Digital locks with temporary codes for showings, contractors, and new tenants." },
      { title: "Energy Management", description: "Smart thermostats and lighting with scheduling and remote control to reduce utility costs." },
      { title: "Leak Detection", description: "Water sensors with instant alerts to prevent costly damage from leaks." },
      { title: "Remote Monitoring", description: "Dashboard showing all properties with real-time device status and alerts." },
    ],
    whenYouNeedThis: [
      { title: "Operating Costs", description: "Utilities and maintenance costs too high; need data and automation to optimize." },
      { title: "Property Damage", description: "Water leaks or HVAC failures causing expensive damage that could be prevented." },
      { title: "Access Management", description: "Managing physical keys for showings and turnover is inefficient and insecure." },
    ],
    industries: [
      { title: "Vacation Rentals", category: "HOSPITALITY" },
      { title: "Property Management", category: "PROPTECH" },
      { title: "Co-Living Spaces", category: "REAL ESTATE" },
    ],
  },

  "construction-pm": {
    title: "Construction Project Management Software",
    tagline: "Plan, track, and collaborate on construction projects with scheduling, budgets, and document control.",
    tags: ["Construction", "Project Management", "Scheduling", "Budget"],
    overview: "Purpose-built project management for construction projects. Gantt charts for scheduling, budget tracking with change orders, RFI management, submittal workflows, daily logs, and photo documentation—keeping projects on time and within budget.",
    features: [
      { title: "Project Scheduling", description: "Gantt charts with task dependencies, critical path, and resource allocation." },
      { title: "Budget Management", description: "Track costs, purchase orders, change orders, and compare to budget in real-time." },
      { title: "Document Control", description: "Centralized storage for plans, specs, submittals, and RFIs with version control." },
      { title: "Field Collaboration", description: "Mobile app for daily logs, punch lists, photos, and time tracking from job site." },
    ],
    whenYouNeedThis: [
      { title: "Project Delays", description: "Projects running behind schedule due to poor coordination and communication." },
      { title: "Budget Overruns", description: "Costs exceeding budget without visibility until too late to correct." },
      { title: "Document Chaos", description: "Plans and documents scattered across email, creating confusion and rework." },
    ],
    industries: [
      { title: "General Contractors", category: "CONSTRUCTION" },
      { title: "Developers", category: "REAL ESTATE" },
      { title: "Subcontractors", category: "CONSTRUCTION" },
    ],
  },

  "bim-platform": {
    title: "Building Information Modeling (BIM) Platform",
    tagline: "3D modeling, clash detection, and collaboration for architecture and engineering.",
    tags: ["BIM", "3D Modeling", "Architecture", "Engineering"],
    overview: "Cloud-based BIM platform for architectural and engineering collaboration. 3D modeling, clash detection, quantity takeoffs, 4D scheduling integration, and model coordination across disciplines—reducing errors and rework while improving project outcomes.",
    features: [
      { title: "3D Modeling", description: "Create and edit building models with parametric components and real-time rendering." },
      { title: "Clash Detection", description: "Automatically identify conflicts between disciplines before construction begins." },
      { title: "Model Coordination", description: "Multi-disciplinary model federation with change tracking and issue management." },
      { title: "Quantity Takeoffs", description: "Automated material quantities and cost estimation directly from BIM models." },
    ],
    whenYouNeedThis: [
      { title: "Design Coordination", description: "Conflicts between architectural, structural, and MEP designs causing costly rework." },
      { title: "Collaboration Issues", description: "Dispersed teams struggling to coordinate on complex projects." },
      { title: "Estimating Accuracy", description: "Manual takeoffs time-consuming and prone to errors; need model-based quantities." },
    ],
    industries: [
      { title: "Architecture Firms", category: "AEC" },
      { title: "Engineering Firms", category: "AEC" },
      { title: "Construction Companies", category: "CONSTRUCTION" },
    ],
  },

  "bidding-system": {
    title: "Construction Bidding & Procurement Platform",
    tagline: "Digital bid management with plan rooms, subcontractor invitations, and quote comparison.",
    tags: ["Bidding", "Procurement", "Construction", "RFQ"],
    overview: "Streamline construction procurement with digital bidding platform. Publish projects with plans and specs, invite qualified subs, receive and compare bids, manage pre-bid Q&A, and award contracts—saving time while ensuring competitive pricing.",
    features: [
      { title: "Digital Plan Room", description: "Secure document sharing with version control and automatic notification of changes." },
      { title: "Subcontractor Network", description: "Database of qualified subs with ratings, trade specialties, and past performance." },
      { title: "Bid Comparison", description: "Side-by-side comparison of bids with scope analysis and pricing breakdowns." },
      { title: "Pre-Bid Management", description: "Q&A portal, site visit scheduling, and addendum distribution." },
    ],
    whenYouNeedThis: [
      { title: "Bid Management", description: "Email-based bidding is chaotic; missing bids or comparing incompatible proposals." },
      { title: "Sub Selection", description: "Limited sub network or difficulty finding qualified subs for specific trades." },
      { title: "Pricing Transparency", description: "Want competitive bidding but need structured process for fair comparison." },
    ],
    industries: [
      { title: "General Contractors", category: "CONSTRUCTION" },
      { title: "Owners/Developers", category: "REAL ESTATE" },
      { title: "Public Works", category: "GOVERNMENT" },
    ],
  },

  "site-inspection": {
    title: "Site Inspection & Quality Control App",
    tagline: "Mobile-first inspection checklists with photo documentation and defect tracking.",
    tags: ["Inspection", "Quality Control", "Construction", "Mobile"],
    overview: "Digitize site inspections and quality control with mobile app. Customizable checklists, photo annotation, offline capability, instant reporting, and defect tracking—ensuring quality standards while creating documentation for liability protection.",
    features: [
      { title: "Digital Checklists", description: "Customizable inspection templates by trade, phase, or requirement with pass/fail criteria." },
      { title: "Photo Documentation", description: "Camera with annotation, markups, and automatic attachment to inspection items." },
      { title: "Defect Tracking", description: "Log issues, assign responsibility, track remediation, and verify completion." },
      { title: "Offline Capability", description: "Complete inspections without internet connection; sync when back online." },
    ],
    whenYouNeedThis: [
      { title: "Quality Issues", description: "Defects not caught until too late; need systematic inspection process." },
      { title: "Documentation", description: "Paper inspections creating documentation gaps that increase liability." },
      { title: "Inspection Efficiency", description: "Inspectors spending too much time on paperwork instead of actual inspection." },
    ],
    industries: [
      { title: "Construction Management", category: "CONSTRUCTION" },
      { title: "Building Inspectors", category: "GOVERNMENT" },
      { title: "Quality Assurance", category: "CONSTRUCTION" },
    ],
  },

  "energy-management": {
    title: "Building Energy Management & Sustainability",
    tagline: "Monitor and optimize building energy consumption with IoT sensors and AI analytics.",
    tags: ["Energy", "Sustainability", "IoT", "Analytics"],
    overview: "Reduce operating costs and carbon footprint with intelligent energy management. Monitor real-time consumption, identify inefficiencies, automate HVAC and lighting, benchmark performance, and track sustainability goals—achieving 15-30% energy savings.",
    features: [
      { title: "Real-Time Monitoring", description: "IoT sensors track energy, water, and gas consumption across all building systems." },
      { title: "Optimization Algorithms", description: "AI adjusts HVAC, lighting, and other systems based on occupancy and weather." },
      { title: "Anomaly Detection", description: "Identify equipment issues and inefficiencies before they become expensive problems." },
      { title: "Sustainability Reporting", description: "Track carbon footprint, energy intensity, and progress toward ESG goals." },
    ],
    whenYouNeedThis: [
      { title: "High Utility Costs", description: "Energy bills eating into profits; need visibility and control to reduce consumption." },
      { title: "Sustainability Goals", description: "ESG commitments or LEED certification require energy tracking and reduction." },
      { title: "Tenant Satisfaction", description: "Comfort complaints due to inefficient HVAC management and temperature inconsistencies." },
    ],
    industries: [
      { title: "Commercial Real Estate", category: "CRE" },
      { title: "Facility Management", category: "OPERATIONS" },
      { title: "Property Owners", category: "REAL ESTATE" },
    ],
  },

  "coworking-booking": {
    title: "Coworking Space & Flex Office Management",
    tagline: "Manage flexible workspaces with desk booking, meeting rooms, and member services.",
    tags: ["Coworking", "Flex Space", "Booking", "Community"],
    overview: "Operate coworking and flexible office spaces efficiently. Members book desks and meeting rooms, manage access with smart locks, track usage for billing, facilitate community connections, and automate operations—maximizing space utilization and member satisfaction.",
    features: [
      { title: "Space Booking", description: "Real-time desk and room availability with reservations via mobile app or web portal." },
      { title: "Access Control", description: "Smart lock integration with member badges, QR codes, or mobile credentials." },
      { title: "Usage Tracking", description: "Monitor space utilization for optimization and billing based on usage plans." },
      { title: "Community Features", description: "Member directory, event management, and collaboration tools to foster community." },
    ],
    whenYouNeedThis: [
      { title: "Space Utilization", description: "Poor visibility into desk and room usage; can't optimize space allocation." },
      { title: "Member Experience", description: "Manual booking and access creating friction and hurting member satisfaction." },
      { title: "Operational Efficiency", description: "Staff spending too much time on bookings and access instead of member services." },
    ],
    industries: [
      { title: "Coworking Spaces", category: "WORKSPACE" },
      { title: "Corporate Offices", category: "REAL ESTATE" },
      { title: "Shared Workspaces", category: "FLEXIBLE OFFICE" },
    ],
  },

  "property-analytics": {
    title: "Real Estate Analytics & Market Intelligence",
    tagline: "Data-driven insights for investment decisions, pricing strategies, and market trends.",
    tags: ["Analytics", "Market Data", "Investment", "BI"],
    overview: "Make informed real estate decisions with comprehensive analytics platform. Analyze market trends, compare properties, forecast appreciation, assess investment returns, and identify opportunities—using AI and big data for competitive advantage.",
    features: [
      { title: "Market Analysis", description: "Neighborhood trends, inventory levels, price per square foot, and days on market analytics." },
      { title: "Investment Modeling", description: "ROI calculators, cash flow projections, and scenario analysis for acquisitions." },
      { title: "Predictive Analytics", description: "ML models forecast property values, rental rates, and market direction." },
      { title: "Portfolio Dashboards", description: "Track performance across multiple properties with KPIs and custom reports." },
    ],
    whenYouNeedThis: [
      { title: "Investment Decisions", description: "Relying on gut feel instead of data for acquisition and disposition decisions." },
      { title: "Market Timing", description: "Missing opportunities or overpaying due to lack of real-time market intelligence." },
      { title: "Portfolio Optimization", description: "Managing multiple properties without consolidated view of performance." },
    ],
    industries: [
      { title: "Real Estate Investors", category: "INVESTMENT" },
      { title: "REITs", category: "FINANCE" },
      { title: "Commercial Brokers", category: "CRE" },
    ],
  },

  "document-vault": {
    title: "Real Estate Document Management & Vault",
    tagline: "Secure document storage with e-signature, version control, and compliance tracking.",
    tags: ["Document Management", "E-Signature", "Compliance", "Storage"],
    overview: "Centralize all real estate documents in secure cloud vault. Store contracts, leases, inspections, and disclosures with version control, e-signature workflows, automatic organization, and compliance tracking—ensuring nothing gets lost and reducing risk.",
    features: [
      { title: "Secure Storage", description: "Cloud-based vault with encryption, access controls, and disaster recovery." },
      { title: "E-Signature", description: "Integrated digital signature workflows with audit trails and legal compliance." },
      { title: "Auto-Organization", description: "AI automatically categorizes and tags documents by type, property, and date." },
      { title: "Compliance Tracking", description: "Alerts for missing documents, expiration dates, and regulatory requirements." },
    ],
    whenYouNeedThis: [
      { title: "Document Chaos", description: "Critical documents scattered across email, computers, and filing cabinets." },
      { title: "Compliance Risk", description: "Missing disclosures or expired documents creating legal and regulatory risk." },
      { title: "Transaction Speed", description: "Slow document retrieval and signature process delaying closings." },
    ],
    industries: [
      { title: "Real Estate Brokerages", category: "REAL ESTATE" },
      { title: "Title Companies", category: "TITLE" },
      { title: "Property Managers", category: "PROPERTY" },
    ],
  },

  "title-search": {
    title: "Title Search & Settlement Services Platform",
    tagline: "Automated title search, examination, and closing workflow for faster settlements.",
    tags: ["Title", "Settlement", "Closing", "Escrow"],
    overview: "Modernize title operations with digital platform that automates title searches, manages examinations, coordinates closings, and handles escrow—reducing errors and cycle time while improving customer experience and compliance.",
    features: [
      { title: "Automated Title Search", description: "AI-powered search of public records with automatic identification of liens and encumbrances." },
      { title: "Examination Workflow", description: "Digital workflow for title examination with issue tracking and underwriter communication." },
      { title: "Closing Coordination", description: "Manage closing timeline, document preparation, and coordination between all parties." },
      { title: "Escrow Management", description: "Track funds, disbursements, and reconciliation with accounting integration." },
    ],
    whenYouNeedThis: [
      { title: "Cycle Time", description: "Title searches and closings taking too long, causing customer dissatisfaction and lost deals." },
      { title: "Error Reduction", description: "Manual processes causing title defects or closing errors that increase claims." },
      { title: "Scalability", description: "Growing transaction volume overwhelming manual workflows and staff." },
    ],
    industries: [
      { title: "Title Companies", category: "TITLE" },
      { title: "Settlement Services", category: "REAL ESTATE" },
      { title: "Escrow Companies", category: "FINANCE" },
    ],
  },
};
