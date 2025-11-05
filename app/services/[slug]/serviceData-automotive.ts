// Automotive Services
import { ServiceData } from "./serviceData";

export const allAutomotiveServices: Record<string, ServiceData> = {
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

  "ride-sharing": {
    title: "Ride-Sharing & Mobility Platform",
    tagline: "Complete ride-hailing platform with driver/rider matching, pricing, payments, and safety.",
    tags: ["Ride-Sharing", "Mobility", "Transportation", "Gig Economy"],
    overview:
      "Launch or scale ride-sharing services with enterprise-grade platform. Real-time driver-rider matching, dynamic pricing, in-app payments, route optimization, safety features, and driver onboarding—supporting thousands of concurrent rides with 99.9% uptime.",
    features: [
      { title: "Smart Matching", description: "AI-powered algorithm matches riders with nearest available drivers considering ratings and preferences." },
      { title: "Dynamic Pricing", description: "Surge pricing during high demand with transparent fare estimates and rider acceptance." },
      { title: "Safety Features", description: "Real-time ride tracking, SOS button, driver verification, and ride sharing with contacts." },
      { title: "Driver Management", description: "Onboarding with background checks, earnings tracking, ratings, and performance analytics." },
    ],
    whenYouNeedThis: [
      { title: "Market Entry", description: "Launching ride-sharing service but building platform from scratch is too expensive and time-consuming." },
      { title: "Scaling Challenges", description: "Current system can't handle peak demand or expanding to new cities." },
      { title: "Driver Retention", description: "High driver churn; need better earnings transparency and support tools." },
    ],
    industries: [
      { title: "Transportation", category: "MOBILITY" },
      { title: "Urban Mobility", category: "SHARED ECONOMY" },
      { title: "Corporate Transport", category: "ENTERPRISE" },
    ],
  },

  "car-rental": {
    title: "Car Rental Management System",
    tagline: "Fleet management, online booking, and rental operations for car rental businesses.",
    tags: ["Car Rental", "Fleet", "Booking", "Vehicle Management"],
    overview:
      "Complete car rental management system from booking to return. Online reservations with real-time availability, fleet management, pricing rules, customer contracts, damage documentation, and integrations with payment gateways and insurance—streamlining operations and improving utilization.",
    features: [
      { title: "Online Booking", description: "Customer-facing website and API for reservations with vehicle filtering and add-on selection." },
      { title: "Fleet Management", description: "Track vehicle location, maintenance schedules, availability, and utilization rates." },
      { title: "Dynamic Pricing", description: "Automated pricing based on demand, season, vehicle type, and rental duration." },
      { title: "Rental Operations", description: "Check-in/out workflows, damage inspection with photos, and contract generation." },
    ],
    whenYouNeedThis: [
      { title: "Manual Booking", description: "Phone-based reservations limiting growth and creating scheduling conflicts." },
      { title: "Fleet Utilization", description: "Poor visibility into vehicle availability causing underutilization or overbooking." },
      { title: "Operations Efficiency", description: "Manual paperwork and inspection processes slow and error-prone." },
    ],
    industries: [
      { title: "Car Rental Companies", category: "AUTOMOTIVE" },
      { title: "Airport Rentals", category: "TRAVEL" },
      { title: "Peer-to-Peer Car Sharing", category: "SHARING ECONOMY" },
    ],
  },

  "ev-charging": {
    title: "EV Charging Network Management",
    tagline: "Smart charging infrastructure with payment processing, load balancing, and remote monitoring.",
    tags: ["EV Charging", "Electric Vehicles", "Clean Energy", "IoT"],
    overview:
      "Build and operate EV charging networks with intelligent management platform. Monitor charger status, process payments, balance grid load, manage user authentication, provide mobile app for finding stations, and optimize pricing—supporting the transition to electric mobility.",
    features: [
      { title: "Charger Management", description: "Remote monitoring, diagnostics, and firmware updates for networked charging stations." },
      { title: "Payment Processing", description: "Multiple payment methods including RFID cards, mobile apps, and contactless with dynamic pricing." },
      { title: "Load Balancing", description: "Distribute power across chargers to optimize grid usage and prevent overload." },
      { title: "Driver App", description: "Find nearby chargers, check availability, reserve spots, and start/stop charging sessions." },
    ],
    whenYouNeedThis: [
      { title: "EV Infrastructure", description: "Installing EV chargers but need management platform for operations and monetization." },
      { title: "Charging Network", description: "Operating multiple locations; need centralized monitoring and billing system." },
      { title: "User Experience", description: "Drivers complaining about charger availability and payment friction." },
    ],
    industries: [
      { title: "Charging Networks", category: "ENERGY" },
      { title: "Commercial Real Estate", category: "PROPERTY" },
      { title: "Fleet Operators", category: "TRANSPORTATION" },
    ],
  },

  "auto-insurance": {
    title: "Usage-Based Auto Insurance Platform",
    tagline: "Telematics-based insurance with real-time risk assessment and personalized premiums.",
    tags: ["InsurTech", "Auto Insurance", "Telematics", "Risk Assessment"],
    overview:
      "Modernize auto insurance with usage-based models powered by telematics. Track driving behavior, calculate risk scores, adjust premiums dynamically, process claims with photos and AI, and engage customers through mobile app—reducing loss ratios while offering fair pricing.",
    features: [
      { title: "Telematics Integration", description: "Collect driving data from mobile sensors or OBD devices for behavior-based pricing." },
      { title: "Risk Scoring", description: "ML models assess risk based on speed, braking, acceleration, time of day, and location." },
      { title: "Dynamic Pricing", description: "Adjust premiums based on actual driving patterns with transparent savings for safe drivers." },
      { title: "Claims Processing", description: "Mobile-first first notice of loss with photo damage assessment and AI-powered fraud detection." },
    ],
    whenYouNeedThis: [
      { title: "Competitive Pressure", description: "InsurTech startups offering usage-based insurance stealing customers with better rates." },
      { title: "Loss Ratios", description: "Traditional underwriting not accurately pricing risk; high-risk drivers subsidized by safe drivers." },
      { title: "Customer Engagement", description: "Little interaction with policyholders between renewals; missing retention opportunities." },
    ],
    industries: [
      { title: "Auto Insurance", category: "INSURANCE" },
      { title: "InsurTech Startups", category: "FINTECH" },
      { title: "Fleet Insurance", category: "COMMERCIAL INSURANCE" },
    ],
  },

  "parts-marketplace": {
    title: "Auto Parts Marketplace & E-Commerce",
    tagline: "B2B/B2C marketplace for auto parts with VIN lookup, fitment data, and inventory integration.",
    tags: ["Auto Parts", "E-Commerce", "Marketplace", "Automotive"],
    overview:
      "Launch auto parts marketplace connecting suppliers with buyers. VIN decoder for accurate part identification, fitment database for compatibility checking, multi-vendor catalog, inventory sync with suppliers, and logistics integration—streamlining parts procurement.",
    features: [
      { title: "VIN Decoder", description: "Identify vehicle by VIN and show compatible parts automatically." },
      { title: "Fitment Database", description: "Comprehensive year-make-model database ensures correct part matches." },
      { title: "Multi-Vendor Platform", description: "Connect multiple suppliers with consolidated shopping and single checkout." },
      { title: "Inventory Sync", description: "Real-time inventory and pricing updates from supplier systems via API or file feeds." },
    ],
    whenYouNeedThis: [
      { title: "Part Identification", description: "Customers struggling to find correct parts; high return rates due to wrong fitment." },
      { title: "Inventory Management", description: "Manual catalog updates across multiple suppliers creating data inconsistencies." },
      { title: "Market Expansion", description: "Want to aggregate multiple suppliers but lack marketplace infrastructure." },
    ],
    industries: [
      { title: "Auto Parts Retailers", category: "AUTOMOTIVE" },
      { title: "Distributors", category: "B2B" },
      { title: "Repair Shops", category: "AFTERMARKET" },
    ],
  },

  "service-booking": {
    title: "Auto Service Booking & Shop Management",
    tagline: "Online appointment scheduling with service packages, technician assignment, and customer notifications.",
    tags: ["Auto Service", "Booking", "Repair Shop", "Scheduling"],
    overview:
      "Attract more customers and streamline shop operations with online service booking. Customers schedule oil changes, repairs, and maintenance online; system manages technician schedules, tracks work orders, sends status updates, and processes payments—improving throughput and customer satisfaction.",
    features: [
      { title: "Online Scheduling", description: "Customer-facing booking with service selection, date/time picker, and instant confirmation." },
      { title: "Service Packages", description: "Pre-configured service bundles with pricing, duration, and required parts." },
      { title: "Technician Management", description: "Assign jobs based on skills, availability, and workload balancing." },
      { title: "Customer Communication", description: "Automated reminders, service updates, and digital vehicle inspection reports." },
    ],
    whenYouNeedThis: [
      { title: "Booking Friction", description: "Relying on phone bookings; customers expect online self-service like other industries." },
      { title: "Shop Utilization", description: "Gaps in schedule or technician idle time due to poor appointment planning." },
      { title: "Customer Experience", description: "Lack of communication during service causing frustration and negative reviews." },
    ],
    industries: [
      { title: "Auto Repair Shops", category: "AUTOMOTIVE" },
      { title: "Quick Lube", category: "SERVICE" },
      { title: "Dealership Service", category: "AUTOMOTIVE" },
    ],
  },

  "diagnostic-tools": {
    title: "Vehicle Diagnostics & Service Tools",
    tagline: "Cloud-connected diagnostic platform with OBD scanning, repair procedures, and service history.",
    tags: ["Diagnostics", "OBD", "Vehicle Service", "Repair"],
    overview:
      "Empower technicians with comprehensive diagnostic platform. Scan engine codes via Bluetooth OBD adapter, access repair procedures and TSBs, view wiring diagrams, log service history, and generate quotes—reducing diagnostic time while improving accuracy.",
    features: [
      { title: "OBD Scanning", description: "Read and clear diagnostic codes with live data streaming and freeze frame analysis." },
      { title: "Repair Database", description: "Access OEM repair procedures, technical service bulletins, and recall information." },
      { title: "Service History", description: "Cloud-based vehicle history with past repairs, parts used, and maintenance schedules." },
      { title: "Estimate Generation", description: "Automated repair quotes with parts pricing and labor times from standard databases." },
    ],
    whenYouNeedThis: [
      { title: "Diagnostic Speed", description: "Technicians spending too much time troubleshooting; need faster access to repair information." },
      { title: "Service Quality", description: "Inconsistent repairs due to lack of standardized procedures and documentation." },
      { title: "Customer Trust", description: "Customers want transparency; need digital reports and repair justification." },
    ],
    industries: [
      { title: "Independent Repair", category: "AFTERMARKET" },
      { title: "Fleet Maintenance", category: "FLEET" },
      { title: "Mobile Mechanics", category: "SERVICE" },
    ],
  },

  "connected-car": {
    title: "Connected Car Platform & Services",
    tagline: "IoT platform for automotive OEMs with remote features, data analytics, and over-the-air updates.",
    tags: ["Connected Car", "IoT", "Automotive OEM", "Telematics"],
    overview:
      "Enable connected vehicle services for OEMs and aftermarket. Remote lock/unlock, vehicle diagnostics, stolen vehicle tracking, emergency assistance, OTA software updates, and predictive maintenance—creating new revenue streams while enhancing customer experience.",
    features: [
      { title: "Remote Commands", description: "Lock/unlock, remote start, climate control, and horn/lights via mobile app." },
      { title: "Vehicle Health", description: "Proactive alerts for maintenance needs, fault codes, and recall notifications." },
      { title: "OTA Updates", description: "Push software and firmware updates to vehicle ECUs without dealer visit." },
      { title: "Data Analytics", description: "Aggregate fleet data for product improvement, predictive quality, and usage patterns." },
    ],
    whenYouNeedThis: [
      { title: "OEM Connectivity", description: "Building connected car services but need scalable IoT platform and mobile apps." },
      { title: "Customer Engagement", description: "Want ongoing relationship with vehicle owners beyond initial purchase." },
      { title: "Service Revenue", description: "Need subscription services and new revenue streams from connected features." },
    ],
    industries: [
      { title: "Automotive OEMs", category: "AUTOMOTIVE" },
      { title: "Tier 1 Suppliers", category: "AUTOMOTIVE" },
      { title: "Aftermarket Telematics", category: "IOT" },
    ],
  },

  "parking-platform": {
    title: "Smart Parking Management & Guidance",
    tagline: "Real-time parking availability, reservations, payments, and enforcement for parking operators.",
    tags: ["Parking", "Smart City", "Mobility", "Payments"],
    overview:
      "Modernize parking operations with IoT-enabled platform. Sensors detect occupancy in real-time, drivers find and reserve spots via app, automated payments eliminate meters, LPR cameras enforce violations, and analytics optimize pricing—reducing congestion while maximizing revenue.",
    features: [
      { title: "Occupancy Detection", description: "IoT sensors or cameras detect real-time space availability across lots and garages." },
      { title: "Mobile Reservations", description: "Drivers reserve and pay for parking in advance via app with navigation to spot." },
      { title: "Automated Payments", description: "License plate recognition enables frictionless entry/exit and automatic billing." },
      { title: "Enforcement", description: "LPR-based violation detection with automated ticketing and appeals management." },
    ],
    whenYouNeedThis: [
      { title: "Parking Frustration", description: "Drivers circling looking for spots causing congestion and frustration." },
      { title: "Revenue Optimization", description: "Underutilized parking assets; need dynamic pricing and better visibility." },
      { title: "Operational Costs", description: "Manual enforcement and meter collection expensive and inefficient." },
    ],
    industries: [
      { title: "Parking Operators", category: "REAL ESTATE" },
      { title: "Municipalities", category: "SMART CITY" },
      { title: "Commercial Properties", category: "CRE" },
    ],
  },

  "dealer-crm": {
    title: "Automotive Dealer CRM & Sales",
    tagline: "Lead management, inventory integration, and sales pipeline for auto dealerships.",
    tags: ["Dealer CRM", "Auto Sales", "Inventory", "Lead Management"],
    overview:
      "Purpose-built CRM for car dealerships managing sales from lead to delivery. Capture leads from website and third parties, integrate with DMS and inventory, track sales pipeline, automate follow-ups, handle trade-ins and financing, and measure salesperson performance.",
    features: [
      { title: "Lead Management", description: "Aggregate leads from website, AutoTrader, Cars.com with automated assignment and response." },
      { title: "Inventory Integration", description: "Sync with DMS and display available vehicles with matching to customer preferences." },
      { title: "Sales Pipeline", description: "Track opportunities from inquiry through test drive, proposal, negotiation, and delivery." },
      { title: "Desking Tools", description: "Integrated penciling for trade-in valuation, financing options, and deal structuring." },
    ],
    whenYouNeedThis: [
      { title: "Lead Response", description: "Slow lead follow-up causing lost sales to competitors with faster response times." },
      { title: "Sales Process", description: "Inconsistent sales process across team; need structured workflow and accountability." },
      { title: "Performance Tracking", description: "Can't measure individual salesperson effectiveness or identify coaching opportunities." },
    ],
    industries: [
      { title: "New Car Dealers", category: "AUTOMOTIVE" },
      { title: "Used Car Dealers", category: "AUTOMOTIVE" },
      { title: "RV Dealers", category: "SPECIALTY AUTOMOTIVE" },
    ],
  },

  "test-drive-booking": {
    title: "Test Drive Scheduling & Management",
    tagline: "Online test drive booking with vehicle availability, route planning, and feedback collection.",
    tags: ["Test Drive", "Booking", "Auto Sales", "Customer Experience"],
    overview:
      "Streamline test drive process with online scheduling. Customers book test drives selecting vehicle, time, and location; dealership manages vehicle availability, prepares cars, captures license/insurance, logs routes, collects feedback, and nurtures hot leads.",
    features: [
      { title: "Online Scheduling", description: "Customer self-service booking with vehicle browsing, calendar selection, and instant confirmation." },
      { title: "Vehicle Preparation", description: "Alerts service team to prep, fuel, and position vehicle for scheduled test drive." },
      { title: "License Verification", description: "Digital capture and verification of driver's license and insurance before drive." },
      { title: "Follow-Up Automation", description: "Post-drive surveys and automated sales follow-up based on customer engagement level." },
    ],
    whenYouNeedThis: [
      { title: "Test Drive Friction", description: "Scheduling test drives requires multiple calls; customers expect online booking convenience." },
      { title: "Vehicle Availability", description: "Double-booking or unavailable vehicles creating poor first impression." },
      { title: "Lead Conversion", description: "Not effectively following up on test drives; missing sales opportunities." },
    ],
    industries: [
      { title: "Auto Dealerships", category: "AUTOMOTIVE" },
      { title: "Luxury Car Dealers", category: "AUTOMOTIVE" },
      { title: "Fleet Sales", category: "B2B" },
    ],
  },

  "trade-in-valuation": {
    title: "Trade-In Valuation & Appraisal Tools",
    tagline: "Instant trade-in values with VIN decode, condition assessment, and market data integration.",
    tags: ["Trade-In", "Vehicle Valuation", "Appraisal", "Pricing"],
    overview:
      "Provide instant, accurate trade-in valuations online and at dealership. VIN decode pulls vehicle details, guided condition assessment with photos, market data from Black Book/KBB, and transparent offers—capturing leads while building trust and accelerating sales.",
    features: [
      { title: "VIN Decode", description: "Automatic vehicle identification with year, make, model, trim, and options from VIN." },
      { title: "Condition Assessment", description: "Guided inspection with photo capture for exterior, interior, mechanical, and service history." },
      { title: "Market Pricing", description: "Real-time wholesale and retail values from multiple sources with local market adjustments." },
      { title: "Instant Offers", description: "Generate and present offers with breakdowns and validity period for decision urgency." },
    ],
    whenYouNeedThis: [
      { title: "Trade-In Process", description: "Manual appraisals slow and inconsistent; customers want instant online valuations." },
      { title: "Pricing Accuracy", description: "Over or under-valuing trade-ins hurting profitability or losing deals." },
      { title: "Lead Capture", description: "Online trade-in tools proven lead magnet for in-market car buyers." },
    ],
    industries: [
      { title: "Franchised Dealers", category: "AUTOMOTIVE" },
      { title: "Used Car Supermarkets", category: "AUTOMOTIVE" },
      { title: "Auto Buying Services", category: "AUTOMOTIVE" },
    ],
  },

  "auto-financing": {
    title: "Automotive Financing & Lending Platform",
    tagline: "Digital loan origination with credit decisioning, lender network, and compliance automation.",
    tags: ["Auto Financing", "Lending", "FinTech", "Credit"],
    overview:
      "Modernize auto financing with digital platform for dealers and lenders. Online applications with e-signature, instant credit decisions, lender marketplace for best rates, compliance with federal regulations, and loan servicing—accelerating funding while reducing risk.",
    features: [
      { title: "Digital Application", description: "Mobile-friendly loan application with ID verification, income verification, and e-signature." },
      { title: "Credit Decisioning", description: "Automated credit pulls and scoring with rule-based decisioning and fraud detection." },
      { title: "Lender Network", description: "Route applications to multiple lenders based on credit tier for competitive rate shopping." },
      { title: "Compliance", description: "TILA, ECOA, Fair Credit Reporting Act compliance with audit trails and required disclosures." },
    ],
    whenYouNeedThis: [
      { title: "Application Friction", description: "Paper applications and manual processing losing deals to competitors with faster approvals." },
      { title: "Approval Rates", description: "Limited lending sources resulting in high decline rates for near-prime customers." },
      { title: "Compliance Risk", description: "Manual processes creating compliance gaps and regulatory risk." },
    ],
    industries: [
      { title: "Auto Lenders", category: "FINANCE" },
      { title: "Credit Unions", category: "BANKING" },
      { title: "Buy Here Pay Here", category: "AUTOMOTIVE" },
    ],
  },

  "roadside-assistance": {
    title: "Roadside Assistance Dispatch & Management",
    tagline: "GPS-based service dispatch with provider network, real-time tracking, and customer updates.",
    tags: ["Roadside Assistance", "Dispatch", "Service", "GPS"],
    overview:
      "Operate roadside assistance programs with efficient dispatch platform. Drivers request help via app with GPS location, system finds nearest service provider, dispatches job, tracks arrival, and updates customer—providing peace of mind while optimizing response times.",
    features: [
      { title: "Mobile Assistance Request", description: "App-based service requests with GPS location, photos, and vehicle information." },
      { title: "Provider Network", description: "Database of tow companies and mobile mechanics with service areas, capabilities, and ratings." },
      { title: "Smart Dispatch", description: "Route jobs to closest available provider considering specialization and capacity." },
      { title: "Live Tracking", description: "Customer and dispatcher see provider location with ETA updates throughout." },
    ],
    whenYouNeedThis: [
      { title: "Response Time", description: "Slow dispatch and coordination causing long wait times and customer dissatisfaction." },
      { title: "Provider Management", description: "Managing network of service providers manually via phone is inefficient." },
      { title: "Customer Experience", description: "Lack of visibility into arrival times causing anxiety and support call volume." },
    ],
    industries: [
      { title: "Auto Clubs", category: "MEMBERSHIP" },
      { title: "Insurance Companies", category: "INSURANCE" },
      { title: "Fleet Operators", category: "TRANSPORTATION" },
    ],
  },

  "vehicle-tracking": {
    title: "Vehicle GPS Tracking & Asset Management",
    tagline: "Real-time GPS tracking for vehicle security, recovery, and usage monitoring.",
    tags: ["GPS Tracking", "Vehicle Security", "Asset Management", "Telematics"],
    overview:
      "Protect and monitor vehicles with GPS tracking platform. Real-time location tracking, geofencing alerts, movement notifications, theft recovery, usage reports, and driver identification—providing security and insights for personal and commercial vehicles.",
    features: [
      { title: "Real-Time Tracking", description: "Live GPS location with historical breadcrumb trails and trip replay." },
      { title: "Geofencing", description: "Create virtual boundaries with alerts when vehicles enter or exit defined areas." },
      { title: "Theft Recovery", description: "Immediate alerts for unauthorized movement with law enforcement assist features." },
      { title: "Usage Reports", description: "Mileage tracking, trip logs, and utilization analytics for personal or business use." },
    ],
    whenYouNeedThis: [
      { title: "Vehicle Security", description: "Theft risk for high-value vehicles; need GPS tracking for recovery and insurance benefits." },
      { title: "Fleet Oversight", description: "Limited visibility into company vehicle usage and unauthorized personal use." },
      { title: "Teen Drivers", description: "Parents want to monitor teen driving locations and behaviors for safety." },
    ],
    industries: [
      { title: "Auto Dealers", category: "AUTOMOTIVE" },
      { title: "Rental Companies", category: "FLEET" },
      { title: "Consumer Security", category: "PERSONAL" },
    ],
  },

  "carpool-platform": {
    title: "Carpooling & Ride-Sharing Platform",
    tagline: "Commuter carpool matching with route optimization, scheduling, and cost splitting.",
    tags: ["Carpooling", "Commute", "Sustainability", "Mobility"],
    overview:
      "Reduce traffic and emissions with carpooling platform. Match commuters with similar routes and schedules, coordinate pickups, split costs automatically, track carbon savings, and integrate with corporate sustainability programs—making carpooling convenient and rewarding.",
    features: [
      { title: "Smart Matching", description: "Algorithm matches riders with drivers based on route overlap, schedule, and preferences." },
      { title: "Route Optimization", description: "Calculate efficient multi-stop routes minimizing detours for all participants." },
      { title: "Cost Splitting", description: "Automatically calculate and collect each rider's share based on distance or equal split." },
      { title: "Scheduling", description: "Recurring rides for regular commutes with flexibility for one-time changes." },
    ],
    whenYouNeedThis: [
      { title: "Commute Costs", description: "Employees struggling with high gas and parking costs; carpool reduces expenses." },
      { title: "Parking Shortage", description: "Limited parking at workplace; carpooling reduces vehicles needing spaces." },
      { title: "Sustainability Goals", description: "Corporate initiatives to reduce carbon footprint and support employee wellbeing." },
    ],
    industries: [
      { title: "Corporate Commute", category: "ENTERPRISE" },
      { title: "University Transport", category: "EDUCATION" },
      { title: "Community Programs", category: "MUNICIPAL" },
    ],
  },

  "toll-payment": {
    title: "Electronic Toll Collection & Payment",
    tagline: "Cashless toll payment with account management, transponders, and multi-network support.",
    tags: ["Toll Payment", "E-ZPass", "Transportation", "Payments"],
    overview:
      "Manage electronic toll collection programs with account-based platform. Issue RFID transponders, process toll transactions, maintain account balances, handle violations, support multiple toll networks, and provide customer portal—enabling seamless highway travel.",
    features: [
      { title: "Account Management", description: "Customer portal for registration, balance top-up, transaction history, and transponder management." },
      { title: "Toll Processing", description: "Real-time transaction processing with account deduction and low-balance alerts." },
      { title: "Violation Management", description: "License plate recognition for non-transponder vehicles with citation issuance and payment." },
      { title: "Interoperability", description: "Support for multiple toll networks and reciprocal agreements between authorities." },
    ],
    whenYouNeedThis: [
      { title: "Toll Operations", description: "Launching electronic toll collection but need customer-facing platform and back-office." },
      { title: "Customer Experience", description: "Manual toll processes causing congestion and frustration; need automated solution." },
      { title: "Revenue Collection", description: "Unpaid tolls and manual enforcement inefficient; need automated violation processing." },
    ],
    industries: [
      { title: "Toll Authorities", category: "TRANSPORTATION" },
      { title: "Highway Operators", category: "INFRASTRUCTURE" },
      { title: "Parking Operators", category: "MOBILITY" },
    ],
  },

  "driver-safety": {
    title: "Driver Safety & Risk Management Platform",
    tagline: "Telematics-based safety scoring with coaching, training, and incident management.",
    tags: ["Driver Safety", "Risk Management", "Fleet Safety", "Training"],
    overview:
      "Improve fleet safety with comprehensive driver monitoring and coaching platform. Score driving behaviors, identify high-risk drivers, deliver personalized training, investigate incidents with video footage, and measure safety improvements—reducing accidents and insurance costs.",
    features: [
      { title: "Safety Scoring", description: "Real-time driver scores based on speeding, harsh braking, acceleration, cornering, and distraction." },
      { title: "Video Telematics", description: "Dashcams with AI detect unsafe behaviors and capture footage of incidents for investigation." },
      { title: "Driver Coaching", description: "Personalized training content and one-on-one coaching for high-risk behaviors." },
      { title: "Incident Management", description: "Workflow for crash investigation, root cause analysis, and corrective action tracking." },
    ],
    whenYouNeedThis: [
      { title: "Accident Rates", description: "High frequency of accidents increasing insurance premiums and liability exposure." },
      { title: "Insurance Costs", description: "Need to demonstrate safety program to insurers for premium reductions." },
      { title: "Driver Accountability", description: "Lack of objective data on driver behavior; can't identify and correct unsafe practices." },
    ],
    industries: [
      { title: "Commercial Fleets", category: "TRANSPORTATION" },
      { title: "Delivery Services", category: "LOGISTICS" },
      { title: "Public Transportation", category: "TRANSIT" },
    ],
  },

  "auction-platform": {
    title: "Vehicle Auction & Wholesale Platform",
    tagline: "Digital vehicle auctions with condition reports, bidding, and transportation coordination.",
    tags: ["Auto Auction", "Wholesale", "Bidding", "Remarketing"],
    overview:
      "Modernize vehicle remarketing with online auction platform. List vehicles with detailed condition reports and photos, conduct live or timed auctions, manage proxy bidding, process payments, coordinate transportation, and provide post-sale arbitration—expanding reach beyond physical auctions.",
    features: [
      { title: "Digital Cataloging", description: "Upload vehicle details, photos, condition reports, and inspection data with VIN decode." },
      { title: "Auction Formats", description: "Support live simulcast, timed online, and buy-now auctions with reserve pricing." },
      { title: "Bidding Platform", description: "Real-time bidding with proxy bids, mobile apps, and automated outbid notifications." },
      { title: "Post-Sale Services", description: "Title transfer, payment processing, transportation booking, and arbitration management." },
    ],
    whenYouNeedThis: [
      { title: "Market Reach", description: "Physical auctions limit buyer access; need online platform to expand bidder base." },
      { title: "Remarketing Speed", description: "Slow vehicle turn times hurting holding costs and depreciation." },
      { title: "Buyer Confidence", description: "Remote buyers need detailed condition reports and arbitration protection." },
    ],
    industries: [
      { title: "Auto Auctions", category: "WHOLESALE" },
      { title: "Lease Companies", category: "FLEET" },
      { title: "Rental Fleet Remarketing", category: "AUTOMOTIVE" },
    ],
  },
};
