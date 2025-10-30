// Travel Services
import { ServiceData } from "./serviceData";

export const travelServices: Record<string, ServiceData> = {
  "hotel-booking": {
    title: "Hotel Booking & Reservation System",
    tagline: "Channel manager, booking engine, and property management for hotels and vacation rentals.",
    tags: ["Hotel", "Booking", "PMS", "Channel Manager"],
    overview:
      "Complete hotel technology stack with online booking engine, property management system, channel manager for OTAs, revenue management, and guest communication tools. Maximize occupancy while reducing distribution costs.",
    features: [
      { title: "Booking Engine", description: "Direct booking website with real-time availability, dynamic pricing, and secure payment." },
      { title: "Channel Manager", description: "Sync rates and availability across Expedia, Booking.com, Airbnb, and other OTAs." },
      { title: "Property Management", description: "Reservations, housekeeping, maintenance, and front desk operations in one system." },
      { title: "Revenue Management", description: "Dynamic pricing based on demand, competition, and historical data." },
    ],
    whenYouNeedThis: [
      { title: "OTA Dependency", description: "Paying high commissions to OTAs; need direct booking to improve margins." },
      { title: "Overbooking", description: "Manual channel management causing overbookings and guest dissatisfaction." },
      { title: "Operations", description: "Disconnected systems for reservations, housekeeping, and billing creating inefficiency." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Vacation Rentals", category: "TRAVEL" },
      { title: "Resorts", category: "HOSPITALITY" },
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

export const allTravelServices = {
  ...travelServices,
  "flight-search": createPlaceholder("Flight Search & Booking", "TRAVEL"),
  "tour-packages": createPlaceholder("Tour Packages", "TRAVEL"),
  "activity-booking": createPlaceholder("Activity Booking", "TRAVEL"),
  "travel-crm": createPlaceholder("Travel Agency CRM", "TRAVEL"),
  "loyalty-programs-travel": createPlaceholder("Travel Loyalty Programs", "HOSPITALITY"),
  "property-management": createPlaceholder("Hotel Property Management", "HOSPITALITY"),
  "channel-manager": createPlaceholder("Hotel Channel Manager", "HOSPITALITY"),
  "revenue-management": createPlaceholder("Revenue Management", "HOSPITALITY"),
  "guest-portal": createPlaceholder("Guest Portal", "HOSPITALITY"),
  "concierge-app": createPlaceholder("Concierge App", "HOSPITALITY"),
  "restaurant-pos": createPlaceholder("Restaurant POS", "F&B"),
  "event-management": createPlaceholder("Event Management", "HOSPITALITY"),
  "travel-insurance": createPlaceholder("Travel Insurance", "INSURTECH"),
  "visa-services": createPlaceholder("Visa Services", "TRAVEL"),
  "currency-exchange": createPlaceholder("Currency Exchange", "FINTECH"),
  "cruise-booking": createPlaceholder("Cruise Booking", "TRAVEL"),
  "car-hire": createPlaceholder("Car Hire", "TRAVEL"),
  "travel-guides": createPlaceholder("Travel Guides", "CONTENT"),
  "group-travel": createPlaceholder("Group Travel", "TRAVEL"),
};
