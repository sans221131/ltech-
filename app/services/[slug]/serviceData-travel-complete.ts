// This file contains complete Travel services data to replace serviceData-travel.ts
// Copy this content to serviceData-travel.ts once reviewed

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

  "flight-search": {
    title: "Flight Search & Booking Engine",
    tagline: "GDS integration with fare comparison, seat selection, and ancillary booking.",
    tags: ["Flight Booking", "GDS", "Travel", "Airfare"],
    overview:
      "Power travel bookings with comprehensive flight search and booking engine. Connect to GDS systems (Amadeus, Sabre, Travelport), compare fares across airlines, enable seat selection and baggage, book ancillaries, and process payments—earning commissions on bookings.",
    features: [
      { title: "Multi-GDS Integration", description: "Access real-time flight inventory and fares from multiple GDS providers simultaneously." },
      { title: "Fare Comparison", description: "Smart shopping algorithms find best prices considering connections, duration, and preferences." },
      { title: "Ancillary Services", description: "Upsell baggage, seat selection, meals, and travel insurance during booking flow." },
      { title: "PNR Management", description: "Create, retrieve, and modify bookings with e-ticket issuance and cancellation handling." },
    ],
    whenYouNeedThis: [
      { title: "Travel Agency Launch", description: "Starting online travel agency but need GDS connectivity and booking infrastructure." },
      { title: "Direct Integration", description: "Relying on third-party booking widgets taking high commission; want own solution." },
      { title: "Customer Experience", description: "Clunky booking process causing cart abandonment; need modern UX." },
    ],
    industries: [
      { title: "Online Travel Agencies", category: "TRAVEL" },
      { title: "Corporate Travel", category: "BUSINESS TRAVEL" },
      { title: "Travel Management", category: "TMC" },
    ],
  },

  "tour-packages": {
    title: "Tour & Package Management System",
    tagline: "Create and sell custom tour packages with itineraries, supplier management, and booking.",
    tags: ["Tours", "Packages", "Travel", "Itinerary"],
    overview:
      "Build and sell tour packages with comprehensive management system. Create customizable itineraries, manage supplier relationships, handle group bookings, process deposits and payments, and provide travelers with digital itineraries—streamlining tour operations.",
    features: [
      { title: "Itinerary Builder", description: "Drag-and-drop tool to create multi-day itineraries with activities, accommodations, and transport." },
      { title: "Supplier Management", description: "Database of hotels, guides, transport providers with contracts, rates, and availability." },
      { title: "Group Booking", description: "Manage group reservations with passenger manifests, rooming lists, and special requests." },
      { title: "Traveler Portal", description: "Digital itinerary access with maps, booking confirmations, and travel documents." },
    ],
    whenYouNeedThis: [
      { title: "Manual Operations", description: "Building itineraries in Word and Excel; need purpose-built tour management system." },
      { title: "Customization", description: "Customers want tailored packages but customization is time-consuming with current tools." },
      { title: "Supplier Coordination", description: "Managing multiple suppliers via email is chaotic and error-prone." },
    ],
    industries: [
      { title: "Tour Operators", category: "TRAVEL" },
      { title: "DMCs", category: "DESTINATION MANAGEMENT" },
      { title: "Travel Agencies", category: "RETAIL TRAVEL" },
    ],
  },

  "activity-booking": {
    title: "Activities & Experiences Booking Platform",
    tagline: "Marketplace for tours, attractions, and experiences with instant confirmation and mobile tickets.",
    tags: ["Activities", "Experiences", "Tours", "Attractions"],
    overview:
      "Connect travelers with local activities and experiences. List tours, attractions, shows, and experiences; handle online bookings with instant confirmation; process payments; issue mobile tickets; and provide operator tools for capacity and scheduling—monetizing destination activities.",
    features: [
      { title: "Activity Catalog", description: "Rich listing with photos, videos, reviews, and detailed descriptions with availability calendar." },
      { title: "Real-Time Booking", description: "Instant confirmation based on live inventory with flexible cancellation policies." },
      { title: "Mobile Tickets", description: "QR code tickets delivered via app or email for contactless redemption." },
      { title: "Operator Dashboard", description: "Manage capacity, pricing, schedules, and view bookings with customer communication tools." },
    ],
    whenYouNeedThis: [
      { title: "Distribution", description: "Activity operators want online distribution but don't have booking infrastructure." },
      { title: "Inventory Management", description: "Manual capacity tracking causing overbooking or lost revenue from underselling." },
      { title: "Customer Convenience", description: "Travelers expect instant confirmation and mobile tickets like other bookings." },
    ],
    industries: [
      { title: "Tour Operators", category: "ACTIVITIES" },
      { title: "Attractions", category: "ENTERTAINMENT" },
      { title: "Activity Platforms", category: "MARKETPLACE" },
    ],
  },

  "travel-crm": {
    title: "Travel Agency CRM & Client Management",
    tagline: "Lead tracking, trip planning, client database, and automated communications for travel agencies.",
    tags: ["Travel CRM", "Client Management", "Lead Tracking", "Travel Agency"],
    overview:
      "Purpose-built CRM for travel agencies and advisors. Manage client profiles with preferences and history, track inquiry pipeline, collaborate on complex itineraries, automate pre/post-trip communications, and measure advisor performance—improving conversion and retention.",
    features: [
      { title: "Client Profiles", description: "Store travel preferences, passport details, loyalty programs, and past trip history." },
      { title: "Quote Management", description: "Build and present quotes with multiple options, track revisions, and convert to bookings." },
      { title: "Trip Collaboration", description: "Internal notes and tasks for multi-person trip planning with client communication log." },
      { title: "Automated Campaigns", description: "Birthday travel offers, destination promotions, and post-trip follow-up sequences." },
    ],
    whenYouNeedThis: [
      { title: "Client Retention", description: "Losing touch with past clients; missing repeat and referral business opportunities." },
      { title: "Quote Tracking", description: "Can't measure quote-to-booking conversion or follow up on outstanding proposals." },
      { title: "Team Coordination", description: "Multiple advisors working with same clients; need centralized information." },
    ],
    industries: [
      { title: "Travel Agencies", category: "RETAIL TRAVEL" },
      { title: "Travel Advisors", category: "TRAVEL CONSULTING" },
      { title: "Luxury Travel", category: "HIGH-END TRAVEL" },
    ],
  },

  "loyalty-programs-travel": {
    title: "Travel Loyalty & Rewards Programs",
    tagline: "Points, tier status, and partner redemptions to drive repeat bookings and customer lifetime value.",
    tags: ["Loyalty", "Rewards", "Travel Programs", "Retention"],
    overview:
      "Build traveler loyalty with comprehensive rewards platform. Award points for bookings, create elite tiers with perks, enable redemption for flights/hotels, partner with other brands, and gamify engagement—increasing repeat bookings and lifetime value.",
    features: [
      { title: "Points Engine", description: "Earn points on bookings with flexible redemption for travel, upgrades, or partner offers." },
      { title: "Tier System", description: "Silver/Gold/Platinum status with escalating benefits like room upgrades and priority service." },
      { title: "Partner Network", description: "Coalition loyalty with airline miles, hotel points, and retail partner integration." },
      { title: "Member Portal", description: "View balance, transaction history, tier progress, and exclusive member-only offers." },
    ],
    whenYouNeedThis: [
      { title: "Customer Acquisition Cost", description: "High CAC making first booking unprofitable; need repeat bookings to achieve ROI." },
      { title: "Competitive Pressure", description: "Competitors with loyalty programs attracting your customers; need retention tool." },
      { title: "Booking Frequency", description: "Most customers book once; want incentives to drive repeat purchases." },
    ],
    industries: [
      { title: "Airlines", category: "AVIATION" },
      { title: "Hotel Chains", category: "HOSPITALITY" },
      { title: "OTAs", category: "ONLINE TRAVEL" },
    ],
  },

  "property-management": {
    title: "Hotel Property Management System (PMS)",
    tagline: "Complete hotel operations from front desk to housekeeping with guest management and billing.",
    tags: ["PMS", "Hotel Management", "Operations", "Hospitality"],
    overview:
      "Centralize all hotel operations with cloud-based PMS. Manage reservations, front desk check-in/out, housekeeping assignments, maintenance requests, guest folios, night audit, and reporting—replacing legacy systems with modern, mobile-friendly solution.",
    features: [
      { title: "Front Desk", description: "Check-in/out, room assignments, guest registration, and key card programming." },
      { title: "Housekeeping", description: "Room status tracking, cleaning assignments, and inspection checklists with mobile app." },
      { title: "Guest Folio", description: "Track charges, payments, comp items, and generate invoices with multiple payment methods." },
      { title: "Night Audit", description: "Automated end-of-day processing with financial reporting and date rollover." },
    ],
    whenYouNeedThis: [
      { title: "Legacy System", description: "Outdated PMS lacking modern features and cloud access from anywhere." },
      { title: "Operational Efficiency", description: "Manual processes and paper logs creating inefficiency and errors." },
      { title: "Guest Experience", description: "Slow check-in and lack of guest information hurting service quality." },
    ],
    industries: [
      { title: "Independent Hotels", category: "HOSPITALITY" },
      { title: "Boutique Hotels", category: "HOSPITALITY" },
      { title: "Bed & Breakfast", category: "HOSPITALITY" },
    ],
  },

  "channel-manager": {
    title: "Hotel Channel Manager & Distribution",
    tagline: "Sync rates and availability across all OTAs and booking channels from single dashboard.",
    tags: ["Channel Manager", "Distribution", "OTAs", "Connectivity"],
    overview:
      "Maximize hotel revenue by distributing inventory across all major OTAs and booking channels. Two-way sync of rates, availability, and restrictions prevents overbooking while real-time updates ensure competitive pricing—all managed from single dashboard.",
    features: [
      { title: "Channel Connectivity", description: "Connect to Booking.com, Expedia, Airbnb, Agoda, and 100+ OTAs and GDS systems." },
      { title: "Rate Parity", description: "Maintain rate consistency across channels with bulk updates and percentage adjustments." },
      { title: "Availability Sync", description: "Real-time inventory updates prevent overbooking with reservation pull-through to PMS." },
      { title: "Performance Analytics", description: "Compare channel performance, commissions, and ROI to optimize distribution mix." },
    ],
    whenYouNeedThis: [
      { title: "Overbooking", description: "Manual updates across multiple OTAs causing double bookings and guest dissatisfaction." },
      { title: "Rate Disparity", description: "Inconsistent rates across channels confusing guests and violating OTA parity requirements." },
      { title: "Time Management", description: "Logging into multiple extranet portals daily is time-consuming and error-prone." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Vacation Rentals", category: "SHORT-TERM RENTAL" },
      { title: "Hostels", category: "BUDGET HOSPITALITY" },
    ],
  },

  "revenue-management": {
    title: "Hotel Revenue Management & Dynamic Pricing",
    tagline: "AI-powered pricing optimization considering demand, competition, and market conditions.",
    tags: ["Revenue Management", "Dynamic Pricing", "Yield Management", "Analytics"],
    overview:
      "Maximize room revenue with intelligent pricing platform. Analyze demand forecasts, competitor rates, booking pace, and events to recommend optimal pricing; automate rate changes; implement length-of-stay restrictions; and measure RevPAR performance—increasing profitability.",
    features: [
      { title: "Demand Forecasting", description: "ML models predict future demand based on historical patterns, events, and market trends." },
      { title: "Competitive Intelligence", description: "Monitor competitor rates across OTAs and adjust pricing to maintain competitive position." },
      { title: "Pricing Recommendations", description: "AI suggests optimal rates by room type and date to maximize revenue." },
      { title: "Performance Dashboards", description: "Track KPIs like RevPAR, ADR, occupancy, and pickup compared to budget and prior year." },
    ],
    whenYouNeedThis: [
      { title: "Revenue Optimization", description: "Using fixed pricing or gut feel; leaving revenue on table during high-demand periods." },
      { title: "Occupancy Issues", description: "Either selling out too early at low rates or having empty rooms during low demand." },
      { title: "Market Competition", description: "Competitors using dynamic pricing taking market share with better rate strategies." },
    ],
    industries: [
      { title: "Hotel Chains", category: "HOSPITALITY" },
      { title: "Resort Properties", category: "HOSPITALITY" },
      { title: "Independent Hotels", category: "HOSPITALITY" },
    ],
  },

  "guest-portal": {
    title: "Hotel Guest Portal & Mobile App",
    tagline: "Pre-arrival communication, mobile check-in, digital room keys, and concierge services.",
    tags: ["Guest App", "Mobile Check-In", "Guest Experience", "Contactless"],
    overview:
      "Enhance guest experience with comprehensive mobile app. Pre-arrival communications and upsells, mobile check-in and checkout, digital room keys, service requests, local recommendations, and mobile charging—creating seamless, personalized stays.",
    features: [
      { title: "Mobile Check-In", description: "Guests check in via app, select room preferences, and skip front desk line entirely." },
      { title: "Digital Keys", description: "Smartphone becomes room key using Bluetooth or NFC technology." },
      { title: "Guest Services", description: "Request housekeeping, maintenance, room service, and amenities from app." },
      { title: "Upsell Opportunities", description: "Offer room upgrades, late checkout, spa services, and dining reservations pre-arrival." },
    ],
    whenYouNeedThis: [
      { title: "Guest Expectations", description: "Travelers expect mobile-first experience and contactless services post-pandemic." },
      { title: "Front Desk Lines", description: "Check-in lines during peak times creating poor first impression." },
      { title: "Upsell Revenue", description: "Missing ancillary revenue opportunities; need digital channel for offers." },
    ],
    industries: [
      { title: "Hotels", category: "HOSPITALITY" },
      { title: "Resorts", category: "HOSPITALITY" },
      { title: "Casino Hotels", category: "GAMING HOSPITALITY" },
    ],
  },

  "concierge-app": {
    title: "Digital Concierge & Guest Services",
    tagline: "AI chatbot and human concierge hybrid for restaurant bookings, recommendations, and requests.",
    tags: ["Concierge", "Guest Services", "AI Chatbot", "Hospitality"],
    overview:
      "Provide 24/7 concierge services with AI-powered platform. Automated responses for common requests, seamless handoff to human concierge for complex needs, restaurant and activity bookings, local recommendations, and request fulfillment tracking—elevating service levels.",
    features: [
      { title: "AI Chatbot", description: "Handle FAQs, directions, amenity hours, and simple requests instantly with natural language." },
      { title: "Local Recommendations", description: "Curated dining, attractions, and activities with booking integration and directions." },
      { title: "Service Requests", description: "Submit and track maintenance, housekeeping, and amenity requests with staff routing." },
      { title: "Human Handoff", description: "Escalate complex or high-value requests to live concierge team seamlessly." },
    ],
    whenYouNeedThis: [
      { title: "Service Limitations", description: "Can't afford full-time concierge but want to provide high-touch service." },
      { title: "Guest Requests", description: "Repetitive questions overwhelming front desk; need automation for simple inquiries." },
      { title: "Personalization", description: "Want to provide personalized recommendations but lack data on guest preferences." },
    ],
    industries: [
      { title: "Luxury Hotels", category: "HOSPITALITY" },
      { title: "Resorts", category: "HOSPITALITY" },
      { title: "Boutique Hotels", category: "HOSPITALITY" },
    ],
  },

  "restaurant-pos": {
    title: "Restaurant POS & Management System",
    tagline: "Complete restaurant operations with ordering, kitchen management, payments, and reporting.",
    tags: ["Restaurant POS", "F&B", "Table Management", "Hospitality"],
    overview:
      "Streamline restaurant operations with modern cloud POS. Table management, order taking on tablets, kitchen display system, payment processing with split checks, inventory tracking, and sales analytics—improving service speed and reducing errors.",
    features: [
      { title: "Table Management", description: "Floor plan visualization, table status, reservation integration, and section assignment." },
      { title: "Order Entry", description: "Tableside ordering on tablets with modifiers, coursing, and automatic kitchen routing." },
      { title: "Kitchen Display", description: "Digital KDS showing orders by station with prep times and bump screens." },
      { title: "Payment Processing", description: "Split checks, tip management, integrated card processing, and mobile payment options." },
    ],
    whenYouNeedThis: [
      { title: "Service Speed", description: "Slow order taking and kitchen communication causing long wait times and table turns." },
      { title: "Order Accuracy", description: "Handwritten tickets causing errors, kitchen confusion, and food waste." },
      { title: "Financial Visibility", description: "Lack of real-time sales data and reporting hindering decision making." },
    ],
    industries: [
      { title: "Restaurants", category: "F&B" },
      { title: "Hotel F&B", category: "HOSPITALITY" },
      { title: "Bars & Nightclubs", category: "ENTERTAINMENT" },
    ],
  },

  "event-management": {
    title: "Hotel Event & Catering Management",
    tagline: "Manage events, banquets, and catering from inquiry to execution with BEO generation.",
    tags: ["Event Management", "MICE", "Catering", "Banquets"],
    overview:
      "Win and execute events seamlessly with dedicated event management system. Track inquiries and proposals, manage contracts and deposits, create banquet event orders, coordinate catering and AV, and invoice post-event—centralizing complex event operations.",
    features: [
      { title: "Event CRM", description: "Track leads, send proposals, manage negotiations, and convert to bookings." },
      { title: "BEO Generation", description: "Create detailed banquet event orders with setup, menu, timing, and special requirements." },
      { title: "Resource Management", description: "Reserve meeting rooms, equipment, and staff with conflict prevention and setup notifications." },
      { title: "Catering Orders", description: "Menu planning, dietary accommodations, and coordination with kitchen for execution." },
    ],
    whenYouNeedThis: [
      { title: "Event Complexity", description: "Managing events in spreadsheets and email; missing details causing execution errors." },
      { title: "Sales Pipeline", description: "Can't track event inquiry conversion or identify sales bottlenecks." },
      { title: "Communication", description: "Miscommunication between sales, operations, and kitchen causing service failures." },
    ],
    industries: [
      { title: "Hotels", category: "MICE" },
      { title: "Convention Centers", category: "EVENTS" },
      { title: "Conference Venues", category: "HOSPITALITY" },
    ],
  },

  "travel-insurance": {
    title: "Travel Insurance Platform",
    tagline: "Embedded insurance distribution with policy management and claims processing.",
    tags: ["Travel Insurance", "InsurTech", "Risk Management", "Claims"],
    overview:
      "Distribute travel insurance and earn commission with white-label platform. Offer trip cancellation, medical, and baggage coverage at booking; manage policies and documentation; handle claims submission and tracking; and provide 24/7 traveler assistance—adding revenue stream.",
    features: [
      { title: "Quote & Purchase", description: "Embed insurance options in booking flow with instant quotes based on trip details." },
      { title: "Policy Management", description: "Issue certificates, handle changes, and provide policy documents and customer portal." },
      { title: "Claims Processing", description: "Digital claims submission with document upload, adjudication workflows, and payout tracking." },
      { title: "Assistance Services", description: "24/7 emergency hotline for medical assistance, trip interruption, and lost luggage support." },
    ],
    whenYouNeedThis: [
      { title: "Revenue Diversification", description: "Want additional revenue from travel bookings through insurance commissions." },
      { title: "Customer Protection", description: "Travelers requesting trip protection; offering insurance builds trust and confidence." },
      { title: "Competitive Offering", description: "Competitors offering insurance making it expected table stakes for travel bookings." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL" },
      { title: "Tour Operators", category: "TOURS" },
      { title: "OTAs", category: "ONLINE TRAVEL" },
    ],
  },

  "visa-services": {
    title: "Visa & Travel Document Processing",
    tagline: "Streamline visa applications with document management, government liaisons, and status tracking.",
    tags: ["Visa Services", "Travel Documents", "Immigration", "Processing"],
    overview:
      "Simplify complex visa applications with comprehensive processing platform. Collect required documents digitally, validate completeness, submit to embassies/consulates, track application status, and communicate with applicants—reducing errors and processing time.",
    features: [
      { title: "Visa Requirements", description: "Database of visa requirements by nationality and destination with document checklists." },
      { title: "Document Collection", description: "Secure portal for uploading passports, photos, supporting documents with validation." },
      { title: "Embassy Coordination", description: "Liaise with embassies, schedule appointments, and submit applications on behalf of clients." },
      { title: "Status Tracking", description: "Real-time status updates and notifications as applications progress through approval process." },
    ],
    whenYouNeedThis: [
      { title: "Service Offering", description: "Travelers asking for visa help; want to offer service but lack infrastructure." },
      { title: "Processing Errors", description: "Incomplete applications and missed requirements causing rejections and delays." },
      { title: "Client Communication", description: "Constant status inquiries overwhelming staff; need self-service status access." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL SERVICES" },
      { title: "Visa Consultants", category: "IMMIGRATION" },
      { title: "Corporate Travel", category: "BUSINESS TRAVEL" },
    ],
  },

  "currency-exchange": {
    title: "Currency Exchange & FX Services",
    tagline: "Multi-currency booking and payment with dynamic FX rates and transparent pricing.",
    tags: ["Currency Exchange", "FX", "Multi-Currency", "Payments"],
    overview:
      "Accept bookings in multiple currencies with fair exchange rates. Dynamic currency conversion at point of sale, transparent pricing without hidden markups, automated settlement in preferred currency, and hedging against FX risk—enabling global expansion.",
    features: [
      { title: "Multi-Currency Display", description: "Show prices in traveler's local currency based on location or preference." },
      { title: "Dynamic Conversion", description: "Real-time exchange rates at time of purchase with transparent rate disclosure." },
      { title: "Payment Processing", description: "Accept multiple currencies with automatic conversion and settlement handling." },
      { title: "FX Management", description: "Hedging tools and reporting to manage foreign exchange risk and margins." },
    ],
    whenYouNeedThis: [
      { title: "International Customers", description: "Losing bookings because only accepting single currency causing friction." },
      { title: "Price Transparency", description: "Want to show prices in local currency to improve conversion and trust." },
      { title: "FX Risk", description: "Exposed to currency fluctuations; need better tools for managing FX exposure." },
    ],
    industries: [
      { title: "Global OTAs", category: "TRAVEL" },
      { title: "International Hotels", category: "HOSPITALITY" },
      { title: "DMCs", category: "DESTINATION MANAGEMENT" },
    ],
  },

  "cruise-booking": {
    title: "Cruise Booking & Management System",
    tagline: "Cruise inventory integration, cabin selection, shore excursions, and group bookings.",
    tags: ["Cruise", "Booking", "Shore Excursions", "Travel"],
    overview:
      "Specialize in cruise sales with dedicated booking platform. Connect to cruise line inventory systems, present cabins with deck plans, package shore excursions, handle deposits and final payment schedules, manage group blocks—simplifying complex cruise bookings.",
    features: [
      { title: "Inventory Integration", description: "Real-time cabin availability and pricing from major cruise lines with filtering and comparison." },
      { title: "Interactive Deck Plans", description: "Visual cabin selection showing location, views, and proximity to amenities." },
      { title: "Shore Excursions", description: "Package port activities and tours with descriptions, pricing, and availability." },
      { title: "Payment Management", description: "Handle deposit schedules, payment plans, and final payment deadlines with reminders." },
    ],
    whenYouNeedThis: [
      { title: "Cruise Specialization", description: "Focusing on cruise sales but generic booking tools don't support unique requirements." },
      { title: "Client Experience", description: "Want to provide visual cabin selection and comprehensive information for informed decisions." },
      { title: "Group Business", description: "Handling group cruise bookings manually; need tools for cabin blocking and management." },
    ],
    industries: [
      { title: "Cruise Travel Agents", category: "TRAVEL" },
      { title: "Group Travel", category: "LEISURE TRAVEL" },
      { title: "OTAs", category: "ONLINE TRAVEL" },
    ],
  },

  "car-hire": {
    title: "Car Hire & Ground Transportation Booking",
    tagline: "Compare and book rental cars, transfers, and ground transportation from multiple suppliers.",
    tags: ["Car Rental", "Ground Transport", "Transfers", "Mobility"],
    overview:
      "Complete ground transportation booking with multi-supplier platform. Compare rental cars from major and local companies, book airport transfers and chauffeur services, offer additional driver and insurance, and manage reservations—providing comprehensive mobility solutions.",
    features: [
      { title: "Multi-Supplier Search", description: "Compare rates and availability from multiple car rental companies and transfer providers." },
      { title: "Vehicle Selection", description: "Filter by car type, transmission, features with photos and detailed specifications." },
      { title: "Transfer Bookings", description: "Private and shared airport transfers with meet-and-greet and fixed pricing." },
      { title: "Extras & Insurance", description: "Offer GPS, child seats, additional driver, and comprehensive insurance coverage." },
    ],
    whenYouNeedThis: [
      { title: "One-Stop Shopping", description: "Customers want to book all travel components in one place including ground transport." },
      { title: "Commission Revenue", description: "Car rentals and transfers provide ancillary revenue stream for travel bookings." },
      { title: "Service Quality", description: "Partner with reliable suppliers to ensure positive ground transportation experience." },
    ],
    industries: [
      { title: "Travel Agencies", category: "TRAVEL" },
      { title: "Ride Management", category: "GROUND TRANSPORT" },
      { title: "Corporate Travel", category: "TMC" },
    ],
  },

  "travel-guides": {
    title: "Digital Travel Guides & Content Platform",
    tagline: "Create and distribute interactive travel guides with maps, recommendations, and bookable content.",
    tags: ["Travel Content", "Guides", "Recommendations", "UGC"],
    overview:
      "Engage travelers with rich destination content platform. Create interactive guides with curated recommendations, maps, photos, insider tips; enable user-generated content and reviews; integrate bookable activities and restaurants—monetizing through bookings and advertising.",
    features: [
      { title: "Interactive Guides", description: "Multi-media destination guides with maps, photos, videos, and local insights." },
      { title: "Personalized Recommendations", description: "AI suggests activities and dining based on traveler preferences and time of year." },
      { title: "Offline Access", description: "Download guides for offline use with maps and content accessible without internet." },
      { title: "Booking Integration", description: "Book recommended activities, restaurants, and services directly from guide content." },
    ],
    whenYouNeedThis: [
      { title: "Traveler Engagement", description: "Want to provide value beyond booking and establish authority as destination expert." },
      { title: "Content Monetization", description: "Have destination expertise; want to monetize through affiliate bookings and ads." },
      { title: "User-Generated Content", description: "Leverage traveler reviews and recommendations to build community and authenticity." },
    ],
    industries: [
      { title: "Travel Media", category: "CONTENT" },
      { title: "Destination Marketing", category: "TOURISM" },
      { title: "OTAs", category: "TRAVEL PLATFORMS" },
    ],
  },

  "group-travel": {
    title: "Group Travel Management System",
    tagline: "Coordinate group bookings with passenger management, itinerary sharing, and payment collection.",
    tags: ["Group Travel", "Events", "MICE", "Passenger Management"],
    overview:
      "Simplify complex group travel coordination with specialized platform. Manage passenger manifests, collect traveler details, coordinate rooming lists, handle group deposits and payments, share itineraries, and communicate with participants—streamlining group logistics.",
    features: [
      { title: "Passenger Management", description: "Collect names, passport details, dietary requirements, and special requests from group members." },
      { title: "Payment Collection", description: "Individual payment links for group participants with deposit and payment plan options." },
      { title: "Rooming Arrangements", description: "Coordinate room sharing, special requests, and accessibility needs across group." },
      { title: "Group Communication", description: "Send updates, itinerary changes, and pre-trip information to entire group via email and app." },
    ],
    whenYouNeedThis: [
      { title: "Group Complexity", description: "Managing group travel in spreadsheets; tracking payments and details overwhelming." },
      { title: "Participant Communication", description: "Individual emails to group members inefficient; need broadcast communication tools." },
      { title: "Payment Tracking", description: "Difficulty tracking who has paid deposits and final payments in group bookings." },
    ],
    industries: [
      { title: "Group Travel Organizers", category: "TRAVEL" },
      { title: "Corporate Events", category: "MICE" },
      { title: "Educational Tours", category: "STUDENT TRAVEL" },
    ],
  },
};
