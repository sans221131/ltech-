// Automotive Services (moved from consolidated file)
import { ServiceData } from "./serviceData";

export const automotiveServices: Record<string, ServiceData> = {
  "fleet-telematics": {
    title: "Fleet Telematics & Connected Vehicles",
    tagline: "Real-time vehicle data, diagnostics, and driver behavior for fleet optimization.",
    tags: ["Telematics", "Fleet", "IoT", "Connected Cars"],
    overview:
      "Advanced telematics platform collecting real-time data from vehicles for fleet management, predictive maintenance, driver coaching, and fuel optimization. OBD-II integration, GPS tracking, and comprehensive analytics dashboard.",
    features: [
      { title: "Vehicle Diagnostics", description: "Real-time engine data, fault codes, and predictive maintenance alerts." },
      { title: "Driver Behavior", description: "Score driving habits with coaching recommendations for safety and efficiency." },
      { title: "Fuel Optimization", description: "Monitor consumption patterns and idle time to reduce fuel costs." },
      { title: "Compliance", description: "ELD compliance, HOS tracking, and IFTA reporting automation." },
    ],
    whenYouNeedThis: [
      { title: "Fleet Costs", description: "Rising fuel and maintenance costs without visibility into causes." },
      { title: "Safety Concerns", description: "Accidents and unsafe driving increasing insurance premiums." },
      { title: "Compliance", description: "Struggling to maintain ELD and HOS compliance across fleet." },
    ],
    industries: [
      { title: "Fleet Management", category: "TRANSPORTATION" },
      { title: "Logistics", category: "SUPPLY CHAIN" },
      { title: "Delivery Services", category: "LAST MILE" },
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

export const allAutomotiveServices = {
  ...automotiveServices,
  "ride-sharing": createPlaceholder("Ride Sharing Platform", "MOBILITY"),
  "car-rental": createPlaceholder("Car Rental Management", "AUTOMOTIVE"),
  "ev-charging": createPlaceholder("EV Charging Network", "CLEANTECH"),
  "auto-insurance": createPlaceholder("Auto Insurance Platform", "INSURTECH"),
  "parts-marketplace": createPlaceholder("Auto Parts Marketplace", "E-COMMERCE"),
  "service-booking": createPlaceholder("Auto Service Booking", "AUTOMOTIVE"),
  "diagnostic-tools": createPlaceholder("Vehicle Diagnostics", "AUTOMOTIVE"),
  "connected-car": createPlaceholder("Connected Car Platform", "IOT"),
  "parking-platform": createPlaceholder("Smart Parking", "MOBILITY"),
  "dealer-crm": createPlaceholder("Dealer CRM", "AUTOMOTIVE"),
  "test-drive-booking": createPlaceholder("Test Drive Booking", "AUTOMOTIVE"),
  "trade-in-valuation": createPlaceholder("Trade-In Valuation", "AUTOMOTIVE"),
  "auto-financing": createPlaceholder("Auto Financing", "FINTECH"),
  "roadside-assistance": createPlaceholder("Roadside Assistance", "AUTOMOTIVE"),
  "vehicle-tracking": createPlaceholder("Vehicle Tracking", "TELEMATICS"),
  "carpool-platform": createPlaceholder("Carpool Platform", "MOBILITY"),
  "toll-payment": createPlaceholder("Toll Payment System", "FINTECH"),
  "driver-safety": createPlaceholder("Driver Safety Analytics", "INSURANCE"),
  "auction-platform": createPlaceholder("Vehicle Auction", "AUTOMOTIVE"),
};
