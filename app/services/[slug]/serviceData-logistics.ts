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
};
