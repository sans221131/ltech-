// SaaS & Enterprise Services
import { ServiceData } from "./serviceData";

export const saasServices: Record<string, ServiceData> = {
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
};

const createPlaceholder = (title: string, industry: string): ServiceData => ({
  title,
  tagline: `Professional ${title.toLowerCase()} solutions for modern businesses.`,
  tags: [industry, "Enterprise", "Digital Transformation", "Automation"],
  overview: `Comprehensive ${title.toLowerCase()} platform designed to streamline operations, improve efficiency, and drive business growth. Built with modern technology stack for scalability and performance.`,
  features: [
    { title: "Core Functionality", description: `Essential ${title.toLowerCase()} features for day-to-day operations.` },
    { title: "Integration Capabilities", description: "Connect with existing tools and systems via APIs and webhooks." },
    { title: "Analytics & Reporting", description: "Actionable insights with customizable dashboards and reports." },
    { title: "Security & Compliance", description: "Enterprise-grade security with role-based access and audit trails." },
  ],
  whenYouNeedThis: [
    { title: "Operational Efficiency", description: "Manual processes causing delays and errors; need automation." },
    { title: "Scalability", description: "Current solution can't grow with business; hitting limitations." },
    { title: "Integration", description: "Disconnected systems creating data silos and inefficiency." },
  ],
  industries: [
    { title: "Enterprise", category: industry },
    { title: "Mid-Market", category: industry },
    { title: "Startups", category: industry },
  ],
});

export const allSaasServices = {
  ...saasServices,
  "project-management": createPlaceholder("Project Management", "PRODUCTIVITY"),
  "hr-management": createPlaceholder("HR Management", "HR TECH"),
  "accounting-software": createPlaceholder("Accounting Software", "FINTECH"),
  "help-desk": createPlaceholder("Help Desk", "SUPPORT"),
  "email-marketing": createPlaceholder("Email Marketing", "MARTECH"),
  "analytics-platform": createPlaceholder("Analytics Platform", "ANALYTICS"),
  "document-management": createPlaceholder("Document Management", "PRODUCTIVITY"),
  "video-conferencing": createPlaceholder("Video Conferencing", "COLLABORATION"),
  "time-tracking": createPlaceholder("Time Tracking", "PRODUCTIVITY"),
  "inventory-system": createPlaceholder("Inventory System", "OPERATIONS"),
  "invoicing": createPlaceholder("Invoicing", "FINTECH"),
  "workflow-automation": createPlaceholder("Workflow Automation", "AUTOMATION"),
  "knowledge-base": createPlaceholder("Knowledge Base", "SUPPORT"),
  "calendar-booking": createPlaceholder("Calendar Booking", "SCHEDULING"),
  "form-builder": createPlaceholder("Form Builder", "PRODUCTIVITY"),
  "contract-management": createPlaceholder("Contract Management", "LEGAL TECH"),
  "expense-tracking": createPlaceholder("Expense Tracking", "FINTECH"),
  "survey-platform": createPlaceholder("Survey Platform", "RESEARCH"),
  "api-gateway": createPlaceholder("API Gateway", "INFRASTRUCTURE"),
};
