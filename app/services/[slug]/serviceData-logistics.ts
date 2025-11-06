// Logistics Services Data
import { ServiceData } from "./serviceData";

export const logisticsServices: Record<string, ServiceData> = {
  "fleet-management": {
    title: "Fleet Management & Vehicle Tracking",
    tagline: "Real-time GPS tracking, route optimization, and driver behavior monitoring for fleet efficiency.",
    tags: ["Fleet Management", "GPS Tracking", "Telematics", "Logistics"],
    overview:
      "Optimize fleet operations with comprehensive management platform. Track vehicles in real-time, monitor fuel consumption, schedule maintenance, analyze driver behavior, and automate compliance reporting—reducing costs while improving safety and customer service.",
    features: [
      {
        title: "Real-Time GPS Tracking",
        description: "Live vehicle location with geofencing, breadcrumb trails, and ETA predictions for dispatchers.",
      },
      {
        title: "Driver Behavior Monitoring",
        description: "Track speeding, harsh braking, idle time, and unsafe driving with scoring and coaching workflows.",
      },
      {
        title: "Maintenance Scheduling",
        description: "Automated service reminders based on mileage, engine hours, or time intervals with work order management.",
      },
      {
        title: "Fuel Management",
        description: "Monitor fuel consumption, detect anomalies, and optimize routes to reduce fuel costs and emissions.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Fleet Visibility Gaps",
        description: "Limited visibility into vehicle locations and driver activities causing inefficiency and customer service issues.",
      },
      {
        title: "Rising Operating Costs",
        description: "Fuel, maintenance, and insurance costs climbing; need data to identify savings opportunities.",
      },
      {
        title: "Compliance Requirements",
        description: "Struggle to maintain ELD compliance, safety records, and inspection documentation.",
      },
    ],
    industries: [
      { title: "Delivery Services", category: "LOGISTICS" },
      { title: "Field Services", category: "SERVICE" },
      { title: "Transportation", category: "TRUCKING" },
    ],
  },

  "route-optimization": {
    title: "Dynamic Route Optimization & Planning",
    tagline: "AI-powered routing that adapts to traffic, priorities, and constraints in real-time.",
    tags: ["Route Optimization", "Dispatch", "AI Planning", "Efficiency"],
    overview:
      "Maximize delivery efficiency with intelligent route planning that considers traffic, delivery windows, vehicle capacity, driver hours, and customer priorities. Real-time re-routing adapts to changes, while multi-stop optimization reduces miles driven and improves on-time performance.",
    features: [
      {
        title: "Multi-Stop Optimization",
        description: "Calculate optimal stop sequence considering priorities, time windows, and vehicle constraints.",
      },
      {
        title: "Real-Time Re-Routing",
        description: "Dynamically adjust routes based on traffic, new orders, cancellations, or driver delays.",
      },
      {
        title: "Constraint Handling",
        description: "Respect delivery windows, driver hours, vehicle capacity, and customer preferences in route plans.",
      },
      {
        title: "Dispatch Automation",
        description: "Auto-assign orders to drivers based on location, availability, and skills with load balancing.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Inefficient Routes",
        description: "Manual route planning resulting in excessive miles, late deliveries, and overtime costs.",
      },
      {
        title: "Scaling Deliveries",
        description: "Growing delivery volume making manual dispatch impossible; need automated optimization.",
      },
      {
        title: "Customer Expectations",
        description: "Customers demanding narrow delivery windows and real-time ETAs; current process can't deliver.",
      },
    ],
    industries: [
      { title: "Last-Mile Delivery", category: "E-COMMERCE" },
      { title: "Food Delivery", category: "FOOD SERVICES" },
      { title: "Field Service", category: "SERVICE" },
    ],
  },

  "warehouse-system-logistics": {
    title: "Warehouse Management System (WMS)",
    tagline: "Inventory optimization, pick-pack-ship automation, and real-time warehouse operations control.",
    tags: ["WMS", "Warehouse", "Inventory", "Fulfillment"],
    overview:
      "Transform warehouse operations with modern WMS that optimizes receiving, putaway, picking, packing, and shipping processes. Barcode/RFID integration, task management, inventory accuracy, and integration with ERP and shipping carriers for seamless fulfillment.",
    features: [
      {
        title: "Receiving & Putaway",
        description: "Barcode scanning for accuracy, directed putaway optimization, and cross-docking workflows.",
      },
      {
        title: "Pick Optimization",
        description: "Wave picking, batch picking, zone picking with optimized pick paths to maximize productivity.",
      },
      {
        title: "Inventory Accuracy",
        description: "Cycle counting, real-time stock levels, lot tracking, and expiration date management.",
      },
      {
        title: "Shipping Integration",
        description: "Rate shopping, label printing, manifest generation, and EDI with major carriers.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Inventory Inaccuracy",
        description: "Frequent stock discrepancies between system and physical inventory causing fulfillment errors.",
      },
      {
        title: "Labor Inefficiency",
        description: "Workers spending too much time searching for items or using inefficient pick paths.",
      },
      {
        title: "Fulfillment Speed",
        description: "Can't meet same-day or next-day shipping commitments with current manual processes.",
      },
    ],
    industries: [
      { title: "E-Commerce Fulfillment", category: "LOGISTICS" },
      { title: "3PL Providers", category: "LOGISTICS" },
      { title: "Distribution Centers", category: "WHOLESALE" },
    ],
  },

  "last-mile-delivery": {
    title: "Last-Mile Delivery Management",
    tagline: "Customer-facing delivery experience with real-time tracking, notifications, and proof of delivery.",
    tags: ["Last Mile", "Delivery", "Customer Experience", "Proof of Delivery"],
    overview:
      "Perfect the final mile with customer-centric delivery platform. Provide accurate ETAs, live tracking, delivery preferences, contactless options, photo proof of delivery, and automated notifications—creating Amazon-level delivery experience for your customers.",
    features: [
      {
        title: "Live Tracking",
        description: "Customer-facing map showing real-time driver location with accurate ETA countdown.",
      },
      {
        title: "Delivery Preferences",
        description: "Let customers choose delivery windows, safe drop locations, or special instructions.",
      },
      {
        title: "Proof of Delivery",
        description: "Photo capture, signature collection, and timestamp with GPS coordinates for delivery verification.",
      },
      {
        title: "Automated Notifications",
        description: "SMS/email alerts for dispatched, out-for-delivery, nearby, and delivered status updates.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Delivery Visibility",
        description: "Customers calling to ask 'where's my order' overwhelming support team; need self-service tracking.",
      },
      {
        title: "Delivery Disputes",
        description: "Frequent claims of non-delivery without proof; need photo documentation to reduce chargebacks.",
      },
      {
        title: "Customer Experience",
        description: "Delivery experience not meeting customer expectations set by Amazon and other e-commerce leaders.",
      },
    ],
    industries: [
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Grocery Delivery", category: "FOOD" },
      { title: "Courier Services", category: "LOGISTICS" },
    ],
  },

  "freight-booking": {
    title: "Freight Booking & Carrier Management",
    tagline: "Digital freight marketplace connecting shippers with carriers for optimized load matching.",
    tags: ["Freight", "Shipping", "Carrier Network", "Load Board"],
    overview:
      "Modernize freight procurement with digital marketplace that matches shipments to carriers. Post loads, get competitive quotes, book capacity, track shipments, manage documents, and process payments—all in one platform with carrier vetting and performance ratings.",
    features: [
      {
        title: "Load Posting & Matching",
        description: "Post shipment requirements and get matched with qualified carriers based on lanes, equipment, and ratings.",
      },
      {
        title: "Quote Management",
        description: "Receive and compare carrier quotes with price, transit time, and service level for optimal selection.",
      },
      {
        title: "Carrier Vetting",
        description: "Automated insurance verification, authority checks, and performance ratings for carrier qualification.",
      },
      {
        title: "Document Management",
        description: "Digital BOL, POD, invoices, and customs docs with e-signature and automated delivery to ERP.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Capacity Challenges",
        description: "Struggling to find available carriers during peak seasons; need access to larger carrier network.",
      },
      {
        title: "Cost Optimization",
        description: "Paying too much for freight; need competitive quotes and rate benchmarking.",
      },
      {
        title: "Manual Processes",
        description: "Booking freight via phone and email is slow and error-prone; need digital self-service.",
      },
    ],
    industries: [
      { title: "Shippers", category: "MANUFACTURING" },
      { title: "3PLs", category: "LOGISTICS" },
      { title: "Freight Brokers", category: "LOGISTICS" },
    ],
  },

  "track-trace": {
    title: "Shipment Tracking & Visibility Platform",
    tagline: "End-to-end supply chain visibility with multi-carrier tracking and predictive alerts.",
    tags: ["Track & Trace", "Visibility", "Supply Chain", "Shipment Tracking"],
    overview:
      "Gain complete shipment visibility across all carriers and modes with unified tracking platform. Aggregate tracking data from ocean, air, rail, and parcel carriers, provide customer-facing tracking pages, send proactive delay alerts, and analyze transit performance for optimization.",
    features: [
      {
        title: "Multi-Carrier Integration",
        description: "Connect to 100+ carriers with unified tracking data normalization and status mapping.",
      },
      {
        title: "Predictive Alerts",
        description: "ML models predict delays based on historical patterns and trigger proactive customer notifications.",
      },
      {
        title: "Customer Tracking Portal",
        description: "Branded tracking pages with order details, shipment timeline, and delivery estimates.",
      },
      {
        title: "Exception Management",
        description: "Dashboard of delayed, stuck, or lost shipments with workflow for investigation and resolution.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Visibility Gaps",
        description: "Shipments crossing multiple carriers creating blind spots; can't answer 'where is my shipment' questions.",
      },
      {
        title: "Customer Experience",
        description: "Customers frustrated by lack of transparency; need proactive updates on shipment status.",
      },
      {
        title: "Performance Analysis",
        description: "Can't measure carrier performance or identify improvement opportunities without unified data.",
      },
    ],
    industries: [
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Import/Export", category: "TRADE" },
      { title: "Manufacturing", category: "SUPPLY CHAIN" },
    ],
  },

  "cold-chain": {
    title: "Cold Chain & Temperature Monitoring",
    tagline: "IoT-enabled temperature tracking for perishable goods with compliance reporting.",
    tags: ["Cold Chain", "Temperature Monitoring", "IoT", "Compliance"],
    overview:
      "Ensure product integrity for temperature-sensitive goods with comprehensive cold chain monitoring. Track temperature, humidity, and location in real-time using IoT sensors, receive alerts for excursions, generate compliance reports, and maintain complete audit trail for regulatory requirements.",
    features: [
      {
        title: "IoT Sensor Integration",
        description: "Connect to temperature loggers, data recorders, and smart containers for continuous monitoring.",
      },
      {
        title: "Real-Time Alerts",
        description: "Immediate notifications when temperature exceeds thresholds with escalation workflows.",
      },
      {
        title: "Compliance Reporting",
        description: "Automated generation of temperature logs and compliance certificates for regulatory audits.",
      },
      {
        title: "Quality Analytics",
        description: "Analyze temperature excursions, identify problem routes or carriers, and optimize cold chain.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Product Spoilage",
        description: "Temperature excursions causing product loss; need real-time monitoring to take corrective action.",
      },
      {
        title: "Regulatory Compliance",
        description: "Pharma, food, or chemical regulations require documented temperature control throughout transit.",
      },
      {
        title: "Quality Assurance",
        description: "Customers demanding proof that products maintained proper conditions during shipping.",
      },
    ],
    industries: [
      { title: "Food & Beverage", category: "CPG" },
      { title: "Pharmaceuticals", category: "HEALTHCARE" },
      { title: "Chemical Logistics", category: "MANUFACTURING" },
    ],
  },

  "dock-scheduling": {
    title: "Dock Scheduling & Yard Management",
    tagline: "Appointment-based loading/unloading to eliminate detention and optimize dock utilization.",
    tags: ["Dock Scheduling", "Yard Management", "Warehouse", "Logistics"],
    overview:
      "Eliminate congestion and detention fees with intelligent dock scheduling. Allow carriers to book appointments, optimize dock door allocation, track yard inventory, manage check-in/check-out, and measure dwell time—improving throughput while reducing driver wait times.",
    features: [
      {
        title: "Appointment Scheduling",
        description: "Self-service carrier portal for booking dock appointments with real-time availability and confirmations.",
      },
      {
        title: "Dock Door Optimization",
        description: "Automatically assign appointments to dock doors based on shipment type, equipment, and priorities.",
      },
      {
        title: "Yard Visibility",
        description: "Track trailers in yard with location, status, and contents for quick retrieval and inventory management.",
      },
      {
        title: "Check-In Automation",
        description: "Kiosk or mobile check-in for drivers with automatic dock assignment and wait time tracking.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Dock Congestion",
        description: "Trucks queuing for hours causing detention fees, driver frustration, and operational delays.",
      },
      {
        title: "Yard Inventory",
        description: "Lost trailers in yard or unclear what's waiting to be unloaded; need better visibility.",
      },
      {
        title: "Detention Costs",
        description: "Paying excessive detention fees due to unpredictable arrival times and inefficient dock utilization.",
      },
    ],
    industries: [
      { title: "Distribution Centers", category: "LOGISTICS" },
      { title: "Manufacturing Plants", category: "MANUFACTURING" },
      { title: "Retail Warehouses", category: "RETAIL" },
    ],
  },

  "returns-logistics": {
    title: "Returns & Reverse Logistics Management",
    tagline: "Streamlined returns processing with customer portal, routing, and disposition workflows.",
    tags: ["Returns", "Reverse Logistics", "RMA", "Refunds"],
    overview:
      "Turn returns from cost center to competitive advantage with efficient reverse logistics. Provide easy customer returns portal, optimize return shipping, automate receiving and inspection, manage disposition (resell, refurbish, recycle), and process refunds quickly.",
    features: [
      {
        title: "Returns Portal",
        description: "Self-service customer portal for initiating returns with reasons, photos, and prepaid label generation.",
      },
      {
        title: "Return Routing",
        description: "Intelligent routing to closest return center or directly to vendor based on item type and value.",
      },
      {
        title: "Disposition Workflows",
        description: "Automated grading and routing to resale, refurbishment, recycling, or disposal with value recovery tracking.",
      },
      {
        title: "Refund Automation",
        description: "Trigger refunds based on inspection results with partial refunds for damaged returns.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Returns Volume",
        description: "High return rates overwhelming manual processing; delays hurting customer satisfaction.",
      },
      {
        title: "Value Recovery",
        description: "Returned inventory sitting idle instead of being quickly resold or refurbished; losing value.",
      },
      {
        title: "Customer Experience",
        description: "Complicated returns process causing customer frustration and negative reviews.",
      },
    ],
    industries: [
      { title: "E-Commerce", category: "RETAIL" },
      { title: "Consumer Electronics", category: "RETAIL" },
      { title: "Fashion & Apparel", category: "RETAIL" },
    ],
  },

  "driver-app": {
    title: "Mobile Driver App & Delivery Management",
    tagline: "Driver-focused mobile app with navigation, proof of delivery, and real-time communication.",
    tags: ["Driver App", "Mobile", "Delivery", "Field Operations"],
    overview:
      "Empower drivers with mobile app that streamlines deliveries. Turn-by-turn navigation, optimized stop sequence, customer contact, digital proof of delivery, barcode scanning, time tracking, and chat with dispatch—all offline-capable for areas with poor connectivity.",
    features: [
      {
        title: "Integrated Navigation",
        description: "Built-in maps with optimized route, upcoming stops, and traffic-aware re-routing.",
      },
      {
        title: "Proof of Delivery",
        description: "Capture signature, photo, and notes with GPS timestamp for delivery verification.",
      },
      {
        title: "Task Management",
        description: "View delivery details, customer instructions, and complete required tasks like age verification.",
      },
      {
        title: "Offline Mode",
        description: "Continue working in areas without cell coverage with automatic sync when connection returns.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Driver Inefficiency",
        description: "Drivers using personal GPS and paper manifests; need integrated app for productivity gains.",
      },
      {
        title: "Communication Gaps",
        description: "Dispatchers can't reach drivers or get real-time updates; relying on phone calls.",
      },
      {
        title: "Delivery Proof",
        description: "Lack of photo proof for deliveries leading to disputes and chargebacks.",
      },
    ],
    industries: [
      { title: "Delivery Services", category: "LOGISTICS" },
      { title: "Field Services", category: "SERVICE" },
      { title: "Courier Services", category: "LOGISTICS" },
    ],
  },

  "customs-clearance": {
    title: "Customs Brokerage & Trade Compliance",
    tagline: "Automate customs documentation, duty calculation, and trade compliance for cross-border shipping.",
    tags: ["Customs", "International Shipping", "Trade Compliance", "Imports"],
    overview:
      "Simplify international shipping with automated customs clearance. Generate commercial invoices, calculate duties and taxes, file electronic customs declarations, manage HS code classification, track clearance status, and ensure compliance with trade regulations—reducing delays and clearance costs for cross-border shipments.",
    features: [
      { title: "Automated Documentation", description: "Generate commercial invoices, packing lists, and certificates of origin based on shipment data." },
      { title: "Duty Calculation", description: "Calculate import duties, VAT, and fees based on HS codes, origin country, and trade agreements." },
      { title: "Electronic Filing", description: "Submit customs declarations electronically to customs authorities via EDI integration." },
      { title: "Compliance Screening", description: "Check shipments against restricted party lists, export controls, and sanctions before shipping." },
    ],
    whenYouNeedThis: [
      { title: "International Expansion", description: "Expanding to international markets but customs clearance complexity causing shipping delays." },
      { title: "Manual Processing", description: "Creating customs documents manually; error-prone and can't scale with growing international volume." },
      { title: "Customs Delays", description: "Frequent customs holds due to documentation errors or missing information costing time and money." },
    ],
    industries: [
      { title: "E-Commerce", category: "CROSS-BORDER" },
      { title: "Freight Forwarders", category: "LOGISTICS" },
      { title: "Importers/Exporters", category: "TRADE" },
    ],
  },

  "freight-audit": {
    title: "Freight Invoice Audit & Payment",
    tagline: "Automate freight bill audit, discrepancy detection, and carrier payment processing.",
    tags: ["Freight Audit", "Invoice Processing", "Cost Control", "Accounting"],
    overview:
      "Reduce freight costs with automated invoice auditing. Match freight bills against contracts and shipment data, detect overcharges and duplicate invoices, dispute errors with carriers, process approved payments, allocate costs to departments, and analyze spending patterns—recovering 3-5% of freight spend through better auditing.",
    features: [
      { title: "Automated Matching", description: "Match invoices to shipments, purchase orders, and rate agreements automatically with AI-powered data extraction." },
      { title: "Discrepancy Detection", description: "Flag overcharges, duplicate invoices, accessorial charges, and rate errors for review before payment." },
      { title: "Dispute Management", description: "Generate dispute documentation, track carrier responses, and recover overcharges systematically." },
      { title: "Payment Processing", description: "Batch-process approved invoices for payment with GL coding, cost allocation, and accrual tracking." },
    ],
    whenYouNeedThis: [
      { title: "Freight Cost Control", description: "Paying freight invoices without verification; likely overpaying due to errors and unauthorized charges." },
      { title: "Manual Auditing", description: "Auditing freight bills in spreadsheets; can't keep up with invoice volume and missing savings opportunities." },
      { title: "Carrier Disputes", description: "Difficulty tracking disputes with carriers; losing money by not recovering overcharges." },
    ],
    industries: [
      { title: "Shippers", category: "MANUFACTURING" },
      { title: "3PLs", category: "LOGISTICS" },
      { title: "Retail Distribution", category: "RETAIL" },
    ],
  },

  "load-planning": {
    title: "Load Planning & Optimization",
    tagline: "Maximize trailer utilization with 3D load planning and weight distribution optimization.",
    tags: ["Load Planning", "Optimization", "Trailer Loading", "Utilization"],
    overview:
      "Optimize trailer and container loading with 3D planning software. Calculate optimal product placement considering dimensions, weight distribution, stacking rules, load sequence for multi-stop routes, and DOT weight limits—increasing trailer utilization by 10-15% and reducing shipping costs per unit.",
    features: [
      { title: "3D Visualization", description: "Visual representation of how products fit in trailer with dimensions, weight, and stacking constraints." },
      { title: "Weight Distribution", description: "Balance weight across axles to meet DOT regulations and prevent unsafe loads." },
      { title: "Multi-Stop Routing", description: "Plan load sequence so items for first stop are accessible; avoid reloading at each delivery." },
      { title: "Utilization Metrics", description: "Track cube utilization, weight utilization, and cost per cubic foot to identify efficiency opportunities." },
    ],
    whenYouNeedThis: [
      { title: "Poor Trailer Utilization", description: "Trailers leaving half-empty due to inefficient loading; paying for unused capacity." },
      { title: "Damaged Freight", description: "Products damaged in transit due to improper stacking or weight distribution." },
      { title: "Loading Delays", description: "Warehouse staff spending excessive time figuring out how to fit orders in trailers." },
    ],
    industries: [
      { title: "Manufacturing", category: "PRODUCTION" },
      { title: "Distribution", category: "WHOLESALE" },
      { title: "LTL Carriers", category: "TRUCKING" },
    ],
  },

  "yard-management": {
    title: "Yard Management System (YMS)",
    tagline: "Track trailers, manage dock doors, and optimize yard operations at distribution centers.",
    tags: ["Yard Management", "Trailer Tracking", "Dock Scheduling", "Distribution"],
    overview:
      "Gain visibility and control over yard operations. Track trailers by location in yard, manage dock door assignments, schedule inbound and outbound appointments, optimize trailer movements, detect yard detention, and integrate with WMS and TMS—reducing dwell time and improving dock productivity.",
    features: [
      { title: "Trailer Tracking", description: "Real-time location of every trailer in yard with status (loaded, empty, in-process) and contents." },
      { title: "Dock Door Management", description: "Assign loads to dock doors based on type, priority, and warehouse zone proximity for efficiency." },
      { title: "Yard Spotting", description: "Optimize yard jockey movements to stage trailers at dock doors and return empties to carrier areas." },
      { title: "Detention Tracking", description: "Monitor trailer dwell time to avoid detention charges and identify bottlenecks in yard flow." },
    ],
    whenYouNeedThis: [
      { title: "Lost Trailers", description: "Can't quickly locate trailers in yard; drivers waiting while staff searches for loads." },
      { title: "Dock Congestion", description: "Poor dock door utilization causing backups and delays in loading/unloading operations." },
      { title: "Detention Charges", description: "Paying excessive detention fees because trailers sitting too long in yard." },
    ],
    industries: [
      { title: "Distribution Centers", category: "WAREHOUSING" },
      { title: "Manufacturing Plants", category: "PRODUCTION" },
      { title: "Cross-Dock Facilities", category: "LOGISTICS" },
    ],
  },

  "cross-docking": {
    title: "Cross-Dock Operations Management",
    tagline: "Direct product flow from receiving to shipping with minimal storage and handling.",
    tags: ["Cross-Docking", "Transloading", "Consolidation", "Distribution"],
    overview:
      "Enable efficient cross-dock operations by routing incoming products directly to outbound shipments. Coordinate inbound and outbound schedules, assign dock doors strategically, track products through cross-dock flow, consolidate LTL shipments, and measure dock-to-dock time—reducing inventory holding costs and speeding delivery.",
    features: [
      { title: "Flow Management", description: "Match inbound receipts to outbound orders; direct products to appropriate staging areas or dock doors." },
      { title: "Dock Coordination", description: "Schedule receiving and shipping in sync to minimize dwell time; position doors to minimize travel distance." },
      { title: "Consolidation", description: "Combine multiple LTL shipments into full truckloads for cost savings and faster transit." },
      { title: "Performance Metrics", description: "Track dock-to-dock time, touches per item, and throughput to identify process improvements." },
    ],
    whenYouNeedThis: [
      { title: "Cross-Dock Operation", description: "Running cross-dock but coordinating manually; need system to synchronize inbound and outbound flows." },
      { title: "Speed to Market", description: "Need to reduce time products spend in distribution center to get to customers faster." },
      { title: "Inventory Reduction", description: "Want to minimize inventory holding by flowing product through facility rather than storing." },
    ],
    industries: [
      { title: "Retail Distribution", category: "RETAIL" },
      { title: "Food Distribution", category: "FOOD & BEVERAGE" },
      { title: "LTL Terminals", category: "TRUCKING" },
    ],
  },

  "vendor-portal": {
    title: "Supplier & Vendor Collaboration Portal",
    tagline: "Connect with suppliers for PO management, ASN transmission, and invoice reconciliation.",
    tags: ["Supplier Portal", "Vendor Management", "EDI", "Procurement"],
    overview:
      "Streamline supplier communication with self-service portal. Share purchase orders, receive advance ship notices (ASN), track shipment status, reconcile invoices and receipts, manage compliance scorecards, and communicate about order issues—reducing email chaos and improving on-time delivery from suppliers.",
    features: [
      { title: "PO Visibility", description: "Suppliers view open purchase orders, acknowledge orders, and update estimated ship dates via portal." },
      { title: "ASN Submission", description: "Suppliers submit advance ship notices with packing details so warehouse can prepare for receipts." },
      { title: "Invoice Reconciliation", description: "Three-way match of PO, receipt, and invoice with variance highlighting for resolution." },
      { title: "Performance Scorecards", description: "Track on-time delivery, quality metrics, and compliance; share performance data with suppliers." },
    ],
    whenYouNeedThis: [
      { title: "Supplier Communication", description: "Managing supplier relationships via email and phone; orders falling through cracks and causing stockouts." },
      { title: "Receiving Delays", description: "Warehouse unprepared for inbound shipments; need advance notice of what's arriving when." },
      { title: "Invoice Disputes", description: "Frequent invoice discrepancies due to pricing or quantity errors; need better matching process." },
    ],
    industries: [
      { title: "Manufacturing", category: "PRODUCTION" },
      { title: "Retail", category: "MERCHANDISING" },
      { title: "Food Service", category: "HOSPITALITY" },
    ],
  },

  "proof-delivery": {
    title: "Electronic Proof of Delivery (ePOD)",
    tagline: "Digital signatures, photos, and delivery confirmation to eliminate paper PODs.",
    tags: ["Proof of Delivery", "ePOD", "Delivery Confirmation", "Paperless"],
    overview:
      "Eliminate paper proof of delivery with digital capture. Collect signatures on mobile devices, capture photos of delivered goods, record GPS coordinates and timestamps, note delivery exceptions, and automatically share POD with customers and billing—speeding up invoice processing and reducing disputes.",
    features: [
      { title: "Digital Signature", description: "Capture consignee signature on driver's mobile device with printed name and timestamp." },
      { title: "Photo Documentation", description: "Take photos of delivered products, packaging condition, and delivery location as visual proof." },
      { title: "GPS Verification", description: "Automatically record GPS coordinates and time of delivery for location verification." },
      { title: "Instant Sharing", description: "Email POD to customer immediately upon delivery with link to track shipment history and documents." },
    ],
    whenYouNeedThis: [
      { title: "Paper PODs", description: "Managing paper delivery receipts; slow to process, easy to lose, and delays invoice generation." },
      { title: "Delivery Disputes", description: "Customers claiming non-delivery or damage; need better documentation to resolve disputes." },
      { title: "Billing Delays", description: "Can't invoice until PODs returned to office; electronic POD enables immediate billing." },
    ],
    industries: [
      { title: "LTL Carriers", category: "TRUCKING" },
      { title: "White Glove Delivery", category: "LOGISTICS" },
      { title: "Food Distribution", category: "FOOD & BEVERAGE" },
    ],
  },

  "fuel-card-management": {
    title: "Fuel Card & Expense Management",
    tagline: "Control fuel spending with card integration, fraud detection, and mileage validation.",
    tags: ["Fuel Management", "Fleet Cards", "Expense Control", "Fraud Prevention"],
    overview:
      "Optimize fuel spending with integrated fuel card management. Connect to fleet card networks (WEX, FleetCor, Comdata), set spending controls by vehicle and driver, detect anomalous purchases, validate fuel purchases against routes and mileage, and analyze fuel efficiency—reducing fuel costs by 5-10% through better oversight.",
    features: [
      { title: "Card Integration", description: "Automatic import of transactions from fuel card providers with vehicle and driver matching." },
      { title: "Spending Controls", description: "Set daily limits, restrict purchase types (fuel only, no cash withdrawals), and limit to specific fuel brands." },
      { title: "Fraud Detection", description: "Alert on unusual patterns like weekend purchases, duplicate transactions, or purchases exceeding tank capacity." },
      { title: "Mileage Validation", description: "Compare fuel purchases to vehicle routes and expected MPG to identify inefficiency or fraud." },
    ],
    whenYouNeedThis: [
      { title: "Fuel Cost Control", description: "Fuel is major expense but lack visibility into spending patterns and no controls on purchases." },
      { title: "Fraud Concerns", description: "Suspecting fuel card fraud or personal use but can't easily detect without manual review." },
      { title: "Efficiency Analysis", description: "Want to compare actual MPG to expected to identify vehicles needing maintenance or driver training." },
    ],
    industries: [
      { title: "Trucking", category: "TRANSPORTATION" },
      { title: "Delivery Fleets", category: "LOGISTICS" },
      { title: "Service Fleets", category: "FIELD SERVICE" },
    ],
  },

  "route-analytics": {
    title: "Route Performance Analytics & Optimization",
    tagline: "Analyze route efficiency, driver performance, and delivery metrics to improve operations.",
    tags: ["Analytics", "Route Optimization", "Performance", "Business Intelligence"],
    overview:
      "Make data-driven decisions with comprehensive route analytics. Analyze on-time performance, route efficiency, stops per hour, cost per delivery, driver productivity, and customer delivery preferences—identifying optimization opportunities and tracking improvement initiatives to continuously reduce costs and improve service.",
    features: [
      { title: "Route Efficiency Metrics", description: "Compare planned vs actual routes, measure deadhead miles, and identify recurring inefficiencies." },
      { title: "Driver Scorecards", description: "Rank drivers by productivity, on-time performance, customer ratings, and safety metrics." },
      { title: "Cost Analysis", description: "Break down cost per delivery by route, region, and time period to identify high-cost areas." },
      { title: "Predictive Insights", description: "ML-powered recommendations for route improvements, staffing levels, and delivery time windows." },
    ],
    whenYouNeedThis: [
      { title: "Performance Visibility", description: "Lack of data on route and driver performance; making decisions based on gut feel rather than data." },
      { title: "Cost Pressure", description: "Need to reduce delivery costs but don't know where inefficiencies are occurring." },
      { title: "Continuous Improvement", description: "Want to systematically improve operations but lack metrics to track progress and identify opportunities." },
    ],
    industries: [
      { title: "Last-Mile Delivery", category: "E-COMMERCE" },
      { title: "Food Delivery", category: "FOOD SERVICE" },
      { title: "Field Service", category: "SERVICE" },
    ],
  },

  "driver-onboarding": {
    title: "Driver Recruitment & Onboarding Platform",
    tagline: "Streamline driver hiring with applications, background checks, training, and compliance.",
    tags: ["Driver Recruitment", "Onboarding", "Compliance", "HR"],
    overview:
      "Solve driver shortage with efficient recruitment and onboarding. Accept online applications, conduct background and MVR checks, verify licenses and certifications, complete I-9 and tax forms electronically, deliver safety training, track document expiration, and ensure DOT compliance—reducing time-to-productivity for new drivers.",
    features: [
      { title: "Application Portal", description: "Online driver application with automatic screening based on requirements (CDL class, experience, violations)." },
      { title: "Background Checks", description: "Integrated background checks, MVR reports, drug screening, and employment verification services." },
      { title: "Electronic Onboarding", description: "Digital I-9, W-4, direct deposit enrollment, and policy acknowledgments with e-signature." },
      { title: "Training Management", description: "Assign and track completion of safety training, compliance courses, and skills assessments." },
    ],
    whenYouNeedThis: [
      { title: "Driver Shortage", description: "Struggling to recruit and retain drivers; slow hiring process causing you to lose candidates." },
      { title: "Manual Paperwork", description: "Paper-based hiring process taking weeks; need digital workflow to onboard drivers faster." },
      { title: "Compliance Risk", description: "Difficulty tracking license renewals, medical card expirations, and training requirements." },
    ],
    industries: [
      { title: "Trucking Companies", category: "TRANSPORTATION" },
      { title: "Delivery Services", category: "LOGISTICS" },
      { title: "Bus Companies", category: "PASSENGER TRANSPORT" },
    ],
  },
};
