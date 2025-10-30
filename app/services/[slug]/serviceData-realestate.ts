// Real Estate Services Data - Consolidated placeholder
import { ServiceData } from "./serviceData";

export const realestateServices: Record<string, ServiceData> = {
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
};

// Additional Real Estate services with similar structure
export const realestateServicesExtended: Record<string, ServiceData> = {
  "booking-system-realestate": realestateServices["property-listings"], // Reuse for now
  "property-valuation": realestateServices["virtual-tours"],
  "mortgage-portal": realestateServices["crm-agents"],
  "lease-management": realestateServices["property-listings"],
  "maintenance-requests": realestateServices["virtual-tours"],
  "hoa-portal": realestateServices["crm-agents"],
  "rent-collection": realestateServices["property-listings"],
  "smart-home-iot": realestateServices["virtual-tours"],
  "construction-pm": realestateServices["crm-agents"],
  "bim-platform": realestateServices["property-listings"],
  "bidding-system": realestateServices["virtual-tours"],
  "site-inspection": realestateServices["crm-agents"],
  "energy-management": realestateServices["property-listings"],
  "coworking-booking": realestateServices["virtual-tours"],
  "property-analytics": realestateServices["crm-agents"],
  "document-vault": realestateServices["property-listings"],
  "title-search": realestateServices["virtual-tours"],
};

export const allRealEstateServices = { ...realestateServices, ...realestateServicesExtended };
