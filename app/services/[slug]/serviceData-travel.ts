// Travel Services
import { ServiceData } from "./serviceData";

export const allTravelServices: Record<string, ServiceData> = {
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

  "flight-search": {
    title: "Flight Search & Booking Engine",
    tagline: "Multi-GDS flight search with fare comparison, seat selection, and booking management.",
    tags: ["Flight Booking", "GDS", "Travel", "Aviation"],
    overview:
      "Comprehensive flight booking platform integrating with major GDS systems (Amadeus, Sabre, Travelport) for real-time availability, fare comparison, multi-city routing, ancillary sales, and booking management with automated ticketing.",
    features: [
      { title: "Multi-GDS Integration", description: "Connect to Amadeus, Sabre, Travelport for global flight inventory and real-time pricing." },
      { title: "Fare Intelligence", description: "Smart search with flexible dates, price alerts, fare calendars, and mix-and-match routing." },
      { title: "Ancillary Sales", description: "Seat selection, baggage, meals, lounge access, and travel insurance upsells." },
      { title: "Booking Management", description: "PNR retrieval, modifications, cancellations, and automated e-ticket issuance." },
    ],
    whenYouNeedThis: [
      { title: "OTA Launch", description: "Building travel booking platform and need flight search capability." },
      { title: "Corporate Travel", description: "Managing business travel bookings with policy enforcement and reporting." },
      { title: "Travel Agency", description: "Modernizing legacy booking systems with self-service portal." },
    ],
    industries: [
      { title: "Online Travel Agencies", category: "TRAVEL" },
      { title: "Corporate Travel", category: "BUSINESS TRAVEL" },
      { title: "Travel Management", category: "TMC" },
    ],
  },

  "tour-packages": {
    title: "Tour Package Builder & Management",
    tagline: "Create, customize, and sell multi-day tour packages with itinerary management.",
    tags: ["Tours", "Packages", "Itineraries", "Travel"],
    overview:
      "Tour operator platform for creating customizable packages, managing inventory for attractions and accommodations, dynamic pricing, online booking, itinerary builder, supplier coordination, and group travel management.",
    features: [
      { title: "Package Builder", description: "Drag-and-drop itinerary builder with flights, hotels, activities, and transfers in one package." },
      { title: "Dynamic Pricing", description: "Season-based pricing, group discounts, early bird offers, and yield management." },
      { title: "Supplier Management", description: "Coordinate with hotels, guides, transport providers with automated confirmations." },
      { title: "Traveler Portal", description: "Customers can view itineraries, documents, make payments, and communicate with guides." },
    ],
    whenYouNeedThis: [
      { title: "Tour Operations", description: "Managing tour packages manually in spreadsheets; need automation and online booking." },
      { title: "Scalability", description: "Growing tour business needing better inventory and supplier coordination." },
      { title: "Customization", description: "Customers want tailored itineraries; need flexible package builder." },
    ],
    industries: [
      { title: "Tour Operators", category: "TRAVEL" },
      { title: "Destination Management", category: "DMC" },
      { title: "Adventure Travel", category: "TOURISM" },
    ],
  },

  "activity-booking": {
    title: "Activities & Experiences Marketplace",
    tagline: "Book tours, attractions, and experiences with instant confirmation and mobile tickets.",
    tags: ["Activities", "Experiences", "Tours", "Attractions"],
    overview:
      "Marketplace platform connecting travelers with local experiences, tours, and attractions. Real-time availability, instant confirmation, mobile tickets, reviews and ratings, and commission management for activity providers.",
    features: [
      { title: "Real-Time Availability", description: "Live inventory with instant booking confirmation and automated voucher generation." },
      { title: "Mobile Tickets", description: "QR code tickets in Apple/Google Wallet with offline access and barcode scanning." },
      { title: "Supplier Portal", description: "Activity providers manage inventory, pricing, schedules, and payouts." },
      { title: "Discovery & Reviews", description: "Search by location, category, rating with user-generated photos and reviews." },
    ],
    whenYouNeedThis: [
      { title: "Experience Economy", description: "Travelers seeking unique local experiences beyond traditional tours." },
      { title: "Last-Minute Bookings", description: "Need real-time availability for same-day activity bookings." },
      { title: "Supplier Network", description: "Connecting activity providers with travelers through marketplace." },
    ],
    industries: [
      { title: "Experience Platforms", category: "TRAVEL TECH" },
      { title: "Destination Marketing", category: "TOURISM" },
      { title: "Attraction Operators", category: "ENTERTAINMENT" },
    ],
  },

  "travel-crm": {
    title: "Travel Agency CRM",
    tagline: "Manage client relationships, bookings, commissions, and travel itineraries in one system.",
    tags: ["Travel CRM", "Agency", "Bookings", "Commissions"],
    overview:
      "Purpose-built CRM for travel agencies and advisors. Track client preferences, manage bookings across suppliers, commission tracking, itinerary creation, client communication, and reporting for travel professionals.",
    features: [
      { title: "Client Profiles", description: "Track travel preferences, past trips, special requests, and communication history." },
      { title: "Booking Management", description: "Centralize bookings from all suppliers with status tracking and automated reminders." },
      { title: "Commission Tracking", description: "Monitor commissions from suppliers, reconcile payments, and forecast revenue." },
      { title: "Itinerary Builder", description: "Create professional itineraries with trip details, vouchers, and travel documents." },
    ],
    whenYouNeedThis: [
      { title: "Travel Advisors", description: "Managing clients and bookings across email and spreadsheets; need centralized system." },
      { title: "Commission Reconciliation", description: "Losing track of supplier commissions and payments." },
      { title: "Client Experience", description: "Want to deliver professional itineraries and personalized service." },
    ],
    industries: [
      { title: "Travel Agencies", category: "RETAIL TRAVEL" },
      { title: "Travel Advisors", category: "LUXURY TRAVEL" },
      { title: "Corporate Travel", category: "TMC" },
    ],
  },

  "loyalty-programs-travel": {
    title: "Travel Loyalty & Rewards Program",
    tagline: "Points, tiers, and perks to build traveler loyalty and repeat bookings.",
    tags: ["Loyalty", "Rewards", "Points", "Retention"],
    overview:
      "Comprehensive loyalty platform for airlines, hotels, and OTAs. Points earning and redemption, tier management, partner rewards, personalized offers, gamification, and analytics to drive repeat bookings and customer lifetime value.",
    features: [
      { title: "Points Engine", description: "Flexible earning rules, redemption catalog, points transfer, and expiration management." },
      { title: "Tier Management", description: "Silver, Gold, Platinum tiers with escalating benefits and status matching." },
      { title: "Partner Network", description: "Integrate partner rewards from airlines, hotels, car rentals, and experiences." },
      { title: "Personalized Offers", description: "AI-driven promotions based on travel behavior, preferences, and tier status." },
    ],
    whenYouNeedThis: [
      { title: "Customer Retention", description: "High customer acquisition cost; need loyalty program to drive repeat bookings." },
      { title: "Competitive Differentiation", description: "Competitors have loyalty programs; losing customers to them." },
      { title: "Revenue Optimization", description: "Want to incentivize direct bookings and higher-margin products." },
    ],
    industries: [
      { title: "Airlines", category: "AVIATION" },
      { title: "Hotel Chains", category: "HOSPITALITY" },
      { title: "Online Travel Agencies", category: "TRAVEL" },
    ],
  },

  "property-management": {
    title: "Hotel Property Management System (PMS)",
    tagline: "Comprehensive hotel operations software for reservations, front desk, and housekeeping.",
    tags: ["PMS", "Hotel", "Operations", "Hospitality"],
    overview:
      "Cloud-based property management system for hotels, resorts, and vacation rentals. Manage reservations, check-in/out, room assignments, housekeeping, maintenance, billing, and reporting. Integrates with booking engines, channel managers, and POS systems.",
    features: [
      { title: "Front Desk Operations", description: "Reservations, check-in/out, room assignments, guest profiles, and folio management." },
      { title: "Housekeeping Management", description: "Room status tracking, task assignment, mobile app for housekeepers, and maintenance requests." },
      { title: "Billing & Payments", description: "Consolidated billing, split folios, payment processing, and night audit automation." },
      { title: "Reporting & Analytics", description: "Occupancy, RevPAR, ADR, forecasting, and operational dashboards." },
    ],
    whenYouNeedThis: [
      { title: "Legacy System", description: "On-premise PMS outdated and expensive; need modern cloud solution." },
      { title: "Multi-Property", description: "Managing multiple properties requiring centralized system." },
      { title: "Integration Needs", description: "Want to connect PMS with booking engine, channel manager, and POS." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Resorts", category: "HOSPITALITY" },
      { title: "Vacation Rentals", category: "SHORT-TERM RENTALS" },
    ],
  },

  "channel-manager": {
    title: "Hotel Channel Manager",
    tagline: "Sync rates and inventory across OTAs from one dashboard to maximize bookings.",
    tags: ["Channel Manager", "OTA", "Distribution", "Hospitality"],
    overview:
      "Multi-channel distribution platform connecting hotels to OTAs (Booking.com, Expedia, Airbnb), GDS, and wholesalers. Two-way sync of rates, availability, and reservations to prevent overbookings and maximize distribution reach.",
    features: [
      { title: "OTA Connectivity", description: "Connect to 100+ OTAs and booking channels with two-way sync of rates and availability." },
      { title: "Rate Parity Management", description: "Monitor and maintain rate consistency across all channels automatically." },
      { title: "Centralized Dashboard", description: "Manage all channels from single interface with bulk updates and rules." },
      { title: "Booking Consolidation", description: "All reservations flow into PMS automatically with real-time inventory updates." },
    ],
    whenYouNeedThis: [
      { title: "Overbooking Issues", description: "Manual channel updates causing overbookings and guest frustration." },
      { title: "Distribution Expansion", description: "Want to list on more OTAs but can't manage manually." },
      { title: "Rate Parity", description: "Struggling to maintain consistent pricing across channels." },
    ],
    industries: [
      { title: "Independent Hotels", category: "HOSPITALITY" },
      { title: "Vacation Rentals", category: "SHORT-TERM RENTALS" },
      { title: "Hotel Chains", category: "HOSPITALITY" },
    ],
  },

  "revenue-management": {
    title: "Revenue Management System (RMS)",
    tagline: "AI-powered dynamic pricing to optimize room rates and maximize hotel revenue.",
    tags: ["Revenue Management", "Dynamic Pricing", "Yield", "Hospitality"],
    overview:
      "Revenue optimization platform for hotels using AI to analyze demand, competition, and historical data for optimal pricing recommendations. Automated rate adjustments, forecasting, and performance analytics to maximize RevPAR.",
    features: [
      { title: "Dynamic Pricing", description: "AI algorithms recommend optimal rates based on demand, competition, events, and seasonality." },
      { title: "Competitive Intelligence", description: "Monitor competitor rates and availability with automated alerts and benchmarking." },
      { title: "Demand Forecasting", description: "Predict future demand with machine learning for better inventory management." },
      { title: "Performance Analytics", description: "RevPAR, ADR, occupancy, pickup reports, and revenue optimization insights." },
    ],
    whenYouNeedThis: [
      { title: "Revenue Optimization", description: "Leaving money on table with static pricing; want dynamic rate strategies." },
      { title: "Competitive Market", description: "Need to respond quickly to competitor pricing and market demand." },
      { title: "Large Inventory", description: "Managing hundreds of rooms requiring sophisticated yield management." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Resorts", category: "HOSPITALITY" },
      { title: "Vacation Rentals", category: "SHORT-TERM RENTALS" },
    ],
  },

  "guest-portal": {
    title: "Hotel Guest Portal & Mobile App",
    tagline: "Enhance guest experience with mobile check-in, digital keys, and concierge services.",
    tags: ["Guest Experience", "Mobile App", "Digital Key", "Hospitality"],
    overview:
      "White-label guest mobile app and web portal for hotels. Mobile check-in/out, digital room keys, service requests, dining reservations, local recommendations, and loyalty program integration for seamless guest experience.",
    features: [
      { title: "Mobile Check-In", description: "Guests check in, select rooms, and receive digital key on smartphone before arrival." },
      { title: "Digital Room Key", description: "Smartphone room access via Bluetooth with secure encryption and access controls." },
      { title: "Service Requests", description: "In-app requests for housekeeping, maintenance, amenities, and concierge services." },
      { title: "Personalized Experience", description: "Room preferences, dining reservations, spa bookings, and local activity recommendations." },
    ],
    whenYouNeedThis: [
      { title: "Guest Expectations", description: "Modern travelers expect mobile-first, contactless experiences." },
      { title: "Front Desk Bottleneck", description: "Long check-in lines during peak times hurting guest satisfaction." },
      { title: "Service Efficiency", description: "Want to streamline guest requests and communication." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Resorts", category: "HOSPITALITY" },
      { title: "Serviced Apartments", category: "EXTENDED STAY" },
    ],
  },

  "concierge-app": {
    title: "Digital Concierge Platform",
    tagline: "AI-powered virtual concierge providing 24/7 guest assistance and recommendations.",
    tags: ["Concierge", "AI Chatbot", "Guest Services", "Hospitality"],
    overview:
      "Intelligent virtual concierge combining AI chatbot and human support for guest inquiries, local recommendations, booking assistance, and service requests. Multi-language support with integration to hotel systems and local partners.",
    features: [
      { title: "AI Chatbot", description: "Natural language chatbot handling FAQs, recommendations, and simple requests 24/7." },
      { title: "Local Recommendations", description: "Curated guides for restaurants, attractions, events with booking integration." },
      { title: "Human Handoff", description: "Seamless escalation to human concierge for complex requests and personalized service." },
      { title: "Multi-Language Support", description: "Automatic translation supporting 50+ languages for international guests." },
    ],
    whenYouNeedThis: [
      { title: "24/7 Support", description: "Guest inquiries outside concierge hours; need always-available assistance." },
      { title: "Labor Costs", description: "Want to scale guest services without proportional staffing increases." },
      { title: "International Guests", description: "Language barriers preventing optimal guest service delivery." },
    ],
    industries: [
      { title: "Luxury Hotels", category: "HOSPITALITY" },
      { title: "Resorts", category: "HOSPITALITY" },
      { title: "Serviced Apartments", category: "EXTENDED STAY" },
    ],
  },

  "restaurant-pos": {
    title: "Restaurant POS & Management",
    tagline: "Cloud POS system with table management, kitchen display, and integrated payments.",
    tags: ["POS", "Restaurant", "Payments", "F&B"],
    overview:
      "Modern restaurant point-of-sale system with table management, menu customization, kitchen display system, integrated payments, online ordering, delivery integration, and comprehensive reporting for restaurants and hotel F&B.",
    features: [
      { title: "Table Management", description: "Visual floor plan, table status, reservations, wait list, and server assignments." },
      { title: "Kitchen Display System", description: "Digital order routing to kitchen with course timing, modifications, and completion tracking." },
      { title: "Menu Management", description: "Dynamic menus, modifiers, combos, daily specials, and 86'd items in real-time." },
      { title: "Integrated Payments", description: "Accept all payment types including contactless, split bills, and mobile payments." },
    ],
    whenYouNeedThis: [
      { title: "Legacy POS", description: "Old POS system slow, unreliable, and can't support modern payment methods." },
      { title: "Online Ordering", description: "Need integrated online ordering and delivery management." },
      { title: "Multi-Location", description: "Managing multiple restaurants requiring centralized reporting and menu control." },
    ],
    industries: [
      { title: "Restaurants", category: "F&B" },
      { title: "Hotel Dining", category: "HOSPITALITY" },
      { title: "Quick Service", category: "QSR" },
    ],
  },

  "event-management": {
    title: "Hotel Event & Catering Management",
    tagline: "Manage event bookings, banquet operations, and catering with comprehensive event software.",
    tags: ["Events", "Catering", "Banquets", "Hospitality"],
    overview:
      "Event management platform for hotels and venues handling inquiries, proposals, contracts, BEOs (Banquet Event Orders), room setup, catering menus, staff scheduling, and billing for meetings, weddings, and conferences.",
    features: [
      { title: "Event Sales Pipeline", description: "Track inquiries, create proposals, generate contracts, and manage event bookings." },
      { title: "Banquet Event Orders", description: "Detailed BEOs with room setup, AV requirements, catering menus, and timelines." },
      { title: "Catering Management", description: "Menu builder, dietary restrictions, order management, and kitchen coordination." },
      { title: "Staff Scheduling", description: "Assign banquet staff, servers, AV technicians based on event requirements and labor costs." },
    ],
    whenYouNeedThis: [
      { title: "Event Revenue", description: "Events and catering are significant revenue but managed manually." },
      { title: "Communication Breakdown", description: "Miscommunication between sales, kitchen, and operations causing event failures." },
      { title: "Proposal Speed", description: "Want to respond to inquiries faster with professional proposals." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Conference Centers", category: "EVENTS" },
      { title: "Wedding Venues", category: "EVENTS" },
    ],
  },

  "travel-insurance": {
    title: "Travel Insurance Platform",
    tagline: "Sell and manage travel insurance with instant quotes, claims processing, and assistance.",
    tags: ["Travel Insurance", "InsurTech", "Protection", "Travel"],
    overview:
      "Travel insurance platform offering trip cancellation, medical coverage, baggage protection, and emergency assistance. Instant quotes, policy issuance, claims management, and 24/7 traveler assistance network integration.",
    features: [
      { title: "Instant Quotes", description: "Real-time pricing based on trip details, traveler age, coverage options, and destinations." },
      { title: "Policy Management", description: "Digital policy issuance, modifications, cancellations, and document storage." },
      { title: "Claims Processing", description: "Online claims submission with document upload, status tracking, and automated adjudication." },
      { title: "Assistance Network", description: "24/7 emergency medical, evacuation, and travel assistance coordination." },
    ],
    whenYouNeedThis: [
      { title: "Ancillary Revenue", description: "Travel agencies and OTAs want to monetize insurance as ancillary product." },
      { title: "Customer Protection", description: "Travelers seeking comprehensive coverage for trip investments." },
      { title: "Claims Efficiency", description: "Manual claims processing slow and labor-intensive." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL" },
      { title: "Online Travel Agencies", category: "TRAVEL TECH" },
      { title: "Insurance Carriers", category: "INSURTECH" },
    ],
  },

  "visa-services": {
    title: "Visa Processing & Document Services",
    tagline: "Streamline visa applications with document management, tracking, and embassy coordination.",
    tags: ["Visa", "Immigration", "Documentation", "Travel"],
    overview:
      "Visa processing platform managing applications, document collection, embassy appointments, status tracking, and traveler communication. Support for tourist, business, and work visas across countries with automated requirement checklists.",
    features: [
      { title: "Requirements Engine", description: "Automatic visa requirements based on nationality, destination, and visa type." },
      { title: "Document Management", description: "Secure upload, verification, and storage of passports, photos, and supporting documents." },
      { title: "Application Tracking", description: "Real-time status updates from submission to approval with automated notifications." },
      { title: "Embassy Coordination", description: "Appointment scheduling, submission preparation, and liaison with consular offices." },
    ],
    whenYouNeedThis: [
      { title: "Travel Agencies", description: "Offering visa services as value-add for complex international travel." },
      { title: "Corporate Immigration", description: "Managing business travel visas and work permits for employees." },
      { title: "Visa Service Companies", description: "Scaling visa processing operations with automation." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL" },
      { title: "Corporate Travel", category: "TMC" },
      { title: "Immigration Services", category: "LEGAL SERVICES" },
    ],
  },

  "currency-exchange": {
    title: "Currency Exchange & FX Platform",
    tagline: "Multi-currency payments and exchange with competitive rates and transparent fees.",
    tags: ["Currency Exchange", "FX", "Multi-Currency", "Payments"],
    overview:
      "Foreign exchange platform for travelers and businesses enabling currency conversion, international transfers, travel money cards, and hedging. Real-time rates, transparent pricing, and integration with booking platforms.",
    features: [
      { title: "Real-Time Rates", description: "Live FX rates with transparent pricing and comparison to bank/competitor rates." },
      { title: "Multi-Currency Wallet", description: "Hold, exchange, and spend multiple currencies with pre-loaded travel cards." },
      { title: "International Transfers", description: "Send money abroad with competitive rates and same-day or next-day delivery." },
      { title: "Rate Alerts", description: "Set target exchange rates with automatic notifications and order execution." },
    ],
    whenYouNeedThis: [
      { title: "Travel Money", description: "Travelers need convenient currency exchange without airport/hotel markups." },
      { title: "Business Payments", description: "Tour operators and hotels dealing with international suppliers and guests." },
      { title: "FX Revenue", description: "Travel platforms want to earn from currency exchange as ancillary service." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL" },
      { title: "Tour Operators", category: "TOURISM" },
      { title: "Hotels", category: "HOSPITALITY" },
    ],
  },

  "cruise-booking": {
    title: "Cruise Booking & Management System",
    tagline: "Search cruises, book cabins, manage itineraries with deck plans and excursion sales.",
    tags: ["Cruise", "Booking", "Maritime", "Travel"],
    overview:
      "Cruise booking platform connecting to cruise line inventory for cabin availability, pricing, itineraries, and booking management. Interactive deck plans, shore excursion sales, dining preferences, and pre-cruise documentation.",
    features: [
      { title: "Cruise Search", description: "Search by destination, cruise line, ship, dates with filtering and comparison tools." },
      { title: "Interactive Deck Plans", description: "Visual cabin selection with deck layouts, cabin categories, and real-time availability." },
      { title: "Shore Excursions", description: "Browse and book port excursions with inventory management and commission tracking." },
      { title: "Pre-Cruise Services", description: "Dining reservations, spa bookings, special requests, and travel documentation." },
    ],
    whenYouNeedThis: [
      { title: "Travel Agencies", description: "Offering cruise bookings and want modern booking tools with commission tracking." },
      { title: "Cruise Lines", description: "Direct-to-consumer booking requiring sophisticated cabin and ancillary management." },
      { title: "OTA Expansion", description: "Adding cruise inventory to diversify product offerings." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL" },
      { title: "Cruise Lines", category: "MARITIME" },
      { title: "Online Travel Agencies", category: "TRAVEL TECH" },
    ],
  },

  "car-hire": {
    title: "Car Rental & Ground Transportation",
    tagline: "Book rental cars, transfers, and chauffeur services with fleet management integration.",
    tags: ["Car Rental", "Ground Transport", "Fleet", "Travel"],
    overview:
      "Ground transportation platform for car rentals, airport transfers, chauffeur services, and vehicle subscriptions. Fleet management, pricing engine, insurance options, loyalty integration, and driver management.",
    features: [
      { title: "Vehicle Selection", description: "Browse fleet by vehicle type, features, pricing with real-time availability." },
      { title: "Dynamic Pricing", description: "Yield management with seasonal rates, demand pricing, and promotional discounts." },
      { title: "Insurance & Upsells", description: "Offer insurance coverage, GPS, child seats, and additional drivers at checkout." },
      { title: "Fleet Management", description: "Vehicle tracking, maintenance scheduling, utilization reporting, and damage documentation." },
    ],
    whenYouNeedThis: [
      { title: "Car Rental Companies", description: "Modernizing booking system with online reservations and fleet optimization." },
      { title: "Travel Platforms", description: "Adding car rental as ancillary product to flight and hotel bookings." },
      { title: "Corporate Travel", description: "Managing ground transportation for business travelers with policy compliance." },
    ],
    industries: [
      { title: "Car Rental", category: "AUTOMOTIVE" },
      { title: "Ground Transportation", category: "TRAVEL" },
      { title: "Corporate Travel", category: "TMC" },
    ],
  },

  "travel-guides": {
    title: "Digital Travel Guides & Content Platform",
    tagline: "Curated destination guides with offline access, maps, and local recommendations.",
    tags: ["Travel Guides", "Content", "Destinations", "Mobile"],
    overview:
      "Digital travel guide platform with destination content, interactive maps, itineraries, local tips, and offline access. User-generated content, influencer collaboration, and monetization through bookings and advertising.",
    features: [
      { title: "Destination Content", description: "Professionally curated guides for attractions, restaurants, hotels, and activities." },
      { title: "Offline Access", description: "Download guides and maps for offline use without data roaming charges." },
      { title: "Interactive Maps", description: "Custom maps with saved places, walking routes, and location-based recommendations." },
      { title: "User-Generated Content", description: "Reviews, photos, tips from travelers with moderation and rewards." },
    ],
    whenYouNeedThis: [
      { title: "Content Monetization", description: "Travel bloggers and influencers want to monetize destination expertise." },
      { title: "DMO Marketing", description: "Destination marketing organizations need engaging content platform for visitors." },
      { title: "Travel Planning", description: "Travelers seeking authentic, detailed destination information beyond generic sources." },
    ],
    industries: [
      { title: "Travel Media", category: "CONTENT" },
      { title: "Destination Marketing", category: "TOURISM" },
      { title: "Travel Apps", category: "TRAVEL TECH" },
    ],
  },

  "group-travel": {
    title: "Group Travel Management Platform",
    tagline: "Coordinate group bookings, payments, and itineraries for events and tour groups.",
    tags: ["Group Travel", "Event Travel", "Coordination", "Tours"],
    overview:
      "Group travel coordination platform managing bookings for conferences, weddings, sports teams, and tour groups. Passenger manifests, room blocks, payment collection, itinerary distribution, and on-trip communication.",
    features: [
      { title: "Booking Management", description: "Centralized dashboard for group bookings with individual passenger details and preferences." },
      { title: "Payment Collection", description: "Split payments, deposits, installments, and individual payment tracking with reconciliation." },
      { title: "Room Blocks", description: "Negotiate and manage hotel room blocks with reservation codes and inventory tracking." },
      { title: "Communication Tools", description: "Mass emails, SMS updates, mobile app for itineraries, and real-time announcements." },
    ],
    whenYouNeedThis: [
      { title: "Event Organizers", description: "Conferences and events needing to coordinate attendee travel and accommodations." },
      { title: "Group Tour Operators", description: "Managing coach tours, pilgrimage travel, or educational trips." },
      { title: "Destination Weddings", description: "Couples coordinating guest travel and accommodation for wedding events." },
    ],
    industries: [
      { title: "Event Management", category: "EVENTS" },
      { title: "Tour Operators", category: "TRAVEL" },
      { title: "Corporate Travel", category: "BUSINESS EVENTS" },
    ],
  },
};
