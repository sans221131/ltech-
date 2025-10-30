// HealthTech Services Data
import { ServiceData } from "./serviceData";

export const healthcareServices: Record<string, ServiceData> = {
  "telemedicine": {
    title: "Telemedicine & Virtual Care Platforms",
    tagline: "HIPAA-compliant telehealth infrastructure with video consultations and remote patient monitoring.",
    tags: ["Telehealth", "Video Consultations", "HIPAA", "Remote Care"],
    overview:
      "Launch comprehensive telemedicine services with secure video conferencing, appointment scheduling, prescription management, and integrated EHR connectivity. Our platform ensures HIPAA compliance, supports multi-provider practices, and scales to handle thousands of concurrent consultations.",
    features: [
      {
        title: "HD Video Consultations",
        description: "WebRTC-based video with screen sharing, waiting rooms, and recording capabilities for documentation.",
      },
      {
        title: "Appointment Management",
        description: "Self-service scheduling, automated reminders, waitlist management, and provider calendar synchronization.",
      },
      {
        title: "E-Prescribing Integration",
        description: "Direct integration with pharmacy networks for electronic prescriptions and controlled substance management.",
      },
      {
        title: "EHR Connectivity",
        description: "HL7/FHIR integration with major EHR systems for seamless patient data exchange and clinical documentation.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Virtual Care Expansion",
        description: "Healthcare organization needs to offer telehealth services but lacks HIPAA-compliant infrastructure.",
      },
      {
        title: "Patient Access Issues",
        description: "Rural or underserved populations can't easily access care; telemedicine improves reach and convenience.",
      },
      {
        title: "Post-Pandemic Sustainability",
        description: "Patients now expect virtual visit options; need professional telehealth platform to compete.",
      },
    ],
    industries: [
      { title: "Primary Care", category: "HEALTHCARE" },
      { title: "Behavioral Health", category: "MENTAL HEALTH" },
      { title: "Specialty Clinics", category: "HEALTHCARE" },
    ],
  },

  "ehr-systems": {
    title: "Electronic Health Records (EHR) Systems",
    tagline: "Modern, interoperable EHR with clinical decision support and population health management.",
    tags: ["EHR", "Medical Records", "Clinical Workflows", "Interoperability"],
    overview:
      "Deploy feature-rich EHR systems that streamline clinical workflows, ensure regulatory compliance, and enable data-driven care delivery. Support multi-specialty practices with customizable templates, clinical decision support, quality reporting, and seamless information exchange.",
    features: [
      {
        title: "Clinical Documentation",
        description: "Templates for all specialties, voice-to-text dictation, smart forms, and structured data capture.",
      },
      {
        title: "Clinical Decision Support",
        description: "Drug interaction alerts, evidence-based care protocols, and diagnosis suggestion algorithms.",
      },
      {
        title: "Interoperability",
        description: "FHIR APIs, health information exchange connectivity, and CommonWell/Carequality network integration.",
      },
      {
        title: "Population Health Tools",
        description: "Risk stratification, care gap identification, and quality measure tracking for value-based care.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Legacy System Limitations",
        description: "Current EHR outdated and not certified; can't meet meaningful use or MACRA requirements.",
      },
      {
        title: "Practice Growth",
        description: "Expanding to new locations or specialties; need scalable EHR with multi-site support.",
      },
      {
        title: "Value-Based Care",
        description: "Transitioning to value-based reimbursement models; need analytics and population health capabilities.",
      },
    ],
    industries: [
      { title: "Hospital Systems", category: "HEALTHCARE" },
      { title: "Medical Groups", category: "HEALTHCARE" },
      { title: "Community Health Centers", category: "PUBLIC HEALTH" },
    ],
  },

  "patient-portal": {
    title: "Patient Engagement & Portal Solutions",
    tagline: "Empower patients with self-service access to health records, appointments, and care coordination.",
    tags: ["Patient Portal", "Engagement", "Self-Service", "Mobile Health"],
    overview:
      "Improve patient satisfaction and reduce administrative burden with comprehensive patient portals. Provide secure access to medical records, lab results, appointment scheduling, prescription refills, bill payment, and direct messaging with care teams—all HIPAA-compliant.",
    features: [
      {
        title: "Health Record Access",
        description: "View visit summaries, lab results, imaging reports, and medication lists with patient-friendly explanations.",
      },
      {
        title: "Online Scheduling",
        description: "Self-service appointment booking with provider availability, specialty filtering, and automated confirmations.",
      },
      {
        title: "Secure Messaging",
        description: "HIPAA-compliant communication with providers, care coordinators, and administrative staff.",
      },
      {
        title: "Mobile App",
        description: "Native iOS/Android apps with push notifications, biometric authentication, and offline access.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Administrative Burden",
        description: "Staff overwhelmed with phone calls for appointments, prescription refills, and record requests.",
      },
      {
        title: "Patient Expectations",
        description: "Patients demanding digital access to health information and online services like other industries.",
      },
      {
        title: "Care Coordination",
        description: "Need better communication with patients between visits to improve adherence and outcomes.",
      },
    ],
    industries: [
      { title: "Primary Care", category: "HEALTHCARE" },
      { title: "Specialty Practices", category: "HEALTHCARE" },
      { title: "Integrated Health Systems", category: "HEALTHCARE" },
    ],
  },

  "medical-imaging": {
    title: "Medical Imaging & PACS Solutions",
    tagline: "Enterprise PACS with AI-powered diagnostics and cloud-based image sharing.",
    tags: ["PACS", "Radiology", "Medical Imaging", "AI Diagnostics"],
    overview:
      "Manage medical imaging workflows with scalable PACS infrastructure that supports DICOM, HL7, and modern imaging modalities. Incorporate AI-assisted diagnostics, enable cross-facility image sharing, and provide radiologists with advanced visualization tools for accurate interpretation.",
    features: [
      {
        title: "DICOM Workflow",
        description: "Modality worklist, image storage, retrieval, and archiving with compliance to DICOM standards.",
      },
      {
        title: "AI-Assisted Diagnostics",
        description: "Automated detection of abnormalities, measurement tools, and prioritization of critical findings.",
      },
      {
        title: "Cloud Image Exchange",
        description: "Secure sharing of studies with referring physicians, specialists, and patients via web viewer.",
      },
      {
        title: "Advanced Visualization",
        description: "3D reconstruction, multi-planar reformatting, and specialized tools for different imaging modalities.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Storage Capacity",
        description: "On-premise PACS running out of storage; need cloud-based solution with unlimited scalability.",
      },
      {
        title: "Radiologist Productivity",
        description: "Growing imaging volume overwhelming radiologists; need AI to prioritize critical cases and assist reading.",
      },
      {
        title: "Image Sharing Friction",
        description: "Burning CDs for image sharing is inefficient; need modern cloud-based exchange with referring providers.",
      },
    ],
    industries: [
      { title: "Radiology Centers", category: "HEALTHCARE" },
      { title: "Hospital Imaging", category: "HEALTHCARE" },
      { title: "Teleradiology Services", category: "TELEHEALTH" },
    ],
  },

  "lab-management": {
    title: "Laboratory Information Management Systems (LIMS)",
    tagline: "Streamline lab operations from specimen collection to result delivery with quality control.",
    tags: ["LIMS", "Lab Workflow", "Quality Control", "Result Reporting"],
    overview:
      "Optimize laboratory workflows with comprehensive LIMS that tracks specimens, manages testing protocols, ensures quality control, and delivers results electronically. Support clinical, research, and reference labs with configurable assays, instrument integration, and regulatory compliance.",
    features: [
      {
        title: "Specimen Tracking",
        description: "Barcode-based tracking from collection through testing with chain of custody documentation.",
      },
      {
        title: "Instrument Integration",
        description: "Bi-directional interfaces with analyzers and equipment for automated order download and result upload.",
      },
      {
        title: "Quality Management",
        description: "QC protocols, proficiency testing, calibration tracking, and corrective action management.",
      },
      {
        title: "Result Delivery",
        description: "HL7 interfaces to EHR systems, patient portals, and automated critical value notifications.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Manual Processes",
        description: "Paper-based lab workflows causing errors, delays, and difficulty meeting turnaround time requirements.",
      },
      {
        title: "Lab Accreditation",
        description: "Pursuing CLIA, CAP, or ISO accreditation; need documented quality systems and audit trails.",
      },
      {
        title: "Lab Expansion",
        description: "Growing test menu or adding new locations; current system can't scale or integrate new equipment.",
      },
    ],
    industries: [
      { title: "Clinical Laboratories", category: "HEALTHCARE" },
      { title: "Research Labs", category: "BIOTECH" },
      { title: "Reference Labs", category: "DIAGNOSTICS" },
    ],
  },

  "pharmacy-systems": {
    title: "Pharmacy Management & Medication Systems",
    tagline: "Integrated pharmacy operations with e-prescribing, inventory, and medication therapy management.",
    tags: ["Pharmacy", "Medication Management", "E-Prescribing", "Inventory"],
    overview:
      "Modernize pharmacy operations with comprehensive management systems covering e-prescribing, dispensing workflows, inventory control, insurance billing, and clinical services. Support retail, hospital, and specialty pharmacies with regulatory compliance and patient safety features.",
    features: [
      {
        title: "E-Prescribing & EPCS",
        description: "Receive electronic prescriptions including controlled substances with NCPDP SCRIPT certification.",
      },
      {
        title: "Drug Utilization Review",
        description: "Automated screening for drug interactions, allergies, duplications, and clinical contraindications.",
      },
      {
        title: "Inventory Management",
        description: "Automated ordering, expiration tracking, recalled drug management, and perpetual inventory.",
      },
      {
        title: "Insurance Adjudication",
        description: "Real-time claims processing with major PBMs, prior authorization tracking, and rejected claim resolution.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Medication Errors",
        description: "Manual processes leading to dispensing errors; need automated checks and barcode verification.",
      },
      {
        title: "Inventory Inefficiency",
        description: "Stockouts or excess inventory affecting profitability; need better demand forecasting and ordering.",
      },
      {
        title: "Clinical Services Expansion",
        description: "Adding MTM, immunizations, or specialty services; need documentation and billing capabilities.",
      },
    ],
    industries: [
      { title: "Retail Pharmacy", category: "HEALTHCARE" },
      { title: "Hospital Pharmacy", category: "HEALTHCARE" },
      { title: "Specialty Pharmacy", category: "SPECIALTY HEALTHCARE" },
    ],
  },

  "clinical-trials": {
    title: "Clinical Trial Management Systems",
    tagline: "EDC, patient recruitment, and regulatory compliance for efficient clinical research.",
    tags: ["Clinical Trials", "Research", "EDC", "Regulatory"],
    overview:
      "Accelerate clinical research with modern trial management platforms. Manage study protocols, patient recruitment and enrollment, electronic data capture, adverse event reporting, and regulatory submissions—all while ensuring 21 CFR Part 11 compliance and data integrity.",
    features: [
      {
        title: "Electronic Data Capture",
        description: "Web-based eCRFs with validation rules, query management, and source data verification workflows.",
      },
      {
        title: "Patient Recruitment",
        description: "Screening tools, enrollment tracking, randomization, and patient engagement portals.",
      },
      {
        title: "Safety Reporting",
        description: "Adverse event tracking, SAE reporting, SUSAR identification, and regulatory authority submissions.",
      },
      {
        title: "Regulatory Compliance",
        description: "Audit trails, electronic signatures, protocol deviation tracking, and IRB submission management.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Study Startup Delays",
        description: "Slow patient recruitment or site activation extending trial timelines and burning budget.",
      },
      {
        title: "Data Quality Issues",
        description: "Paper-based data collection causing errors, queries, and delays in database lock.",
      },
      {
        title: "Multi-Site Complexity",
        description: "Coordinating across multiple sites and countries; need centralized trial management system.",
      },
    ],
    industries: [
      { title: "Pharmaceutical Companies", category: "PHARMA" },
      { title: "Contract Research Orgs", category: "CRO" },
      { title: "Academic Medical Centers", category: "RESEARCH" },
    ],
  },

  "health-analytics": {
    title: "Healthcare Analytics & Population Health",
    tagline: "Data-driven insights for care quality, cost reduction, and population health management.",
    tags: ["Analytics", "Population Health", "Quality Metrics", "Predictive Analytics"],
    overview:
      "Transform healthcare data into actionable insights with advanced analytics platforms. Aggregate data from multiple sources, identify high-risk patients, track quality measures, predict readmissions, and optimize resource utilization—enabling value-based care success.",
    features: [
      {
        title: "Data Aggregation",
        description: "Integrate EHR, claims, pharmacy, lab, and social determinants data into unified patient view.",
      },
      {
        title: "Risk Stratification",
        description: "Predictive models to identify patients at risk for readmissions, ER visits, or chronic disease progression.",
      },
      {
        title: "Quality Reporting",
        description: "Automated calculation of HEDIS, STAR, and CMS quality measures with performance dashboards.",
      },
      {
        title: "Cost Analytics",
        description: "Episode-based costing, utilization patterns, and financial performance tracking by provider and service line.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Value-Based Contracts",
        description: "Participating in ACO, bundled payments, or risk-sharing arrangements; need analytics to manage performance.",
      },
      {
        title: "Quality Improvement",
        description: "Failing to meet quality benchmarks or pay-for-performance targets; need data to drive improvement.",
      },
      {
        title: "Population Health Programs",
        description: "Launching care management initiatives; need to identify and stratify high-risk patient populations.",
      },
    ],
    industries: [
      { title: "Health Plans", category: "INSURANCE" },
      { title: "ACOs", category: "HEALTHCARE" },
      { title: "Health Systems", category: "HEALTHCARE" },
    ],
  },

  "remote-monitoring": {
    title: "Remote Patient Monitoring (RPM)",
    tagline: "IoT-enabled continuous monitoring with alerts and care coordination for chronic conditions.",
    tags: ["RPM", "IoT", "Wearables", "Chronic Care"],
    overview:
      "Enable proactive care with remote patient monitoring solutions that collect vitals from connected devices, apply clinical algorithms to identify deterioration, and alert care teams for timely intervention. Support chronic disease management, post-discharge monitoring, and aging-in-place programs.",
    features: [
      {
        title: "Device Integration",
        description: "Connect to 100+ FDA-approved devices for blood pressure, glucose, weight, SpO2, and activity tracking.",
      },
      {
        title: "Clinical Algorithms",
        description: "Customizable alert rules based on vital trends, thresholds, and patient-specific care protocols.",
      },
      {
        title: "Care Team Dashboard",
        description: "Real-time patient status, alert queue, intervention tracking, and outcomes reporting for care managers.",
      },
      {
        title: "Patient Engagement",
        description: "Mobile app for patients to view their data, receive educational content, and communicate with care team.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Readmission Reduction",
        description: "High readmission rates driving penalties; need post-discharge monitoring to catch deterioration early.",
      },
      {
        title: "Chronic Care Management",
        description: "Large population with CHF, diabetes, or COPD; need scalable monitoring to manage between visits.",
      },
      {
        title: "RPM Reimbursement",
        description: "Want to bill CPT codes for remote monitoring but lack compliant infrastructure and workflows.",
      },
    ],
    industries: [
      { title: "Cardiology", category: "SPECIALTY CARE" },
      { title: "Home Health", category: "HEALTHCARE" },
      { title: "Senior Living", category: "SENIOR CARE" },
    ],
  },

  "appointment-booking": {
    title: "Healthcare Appointment Scheduling",
    tagline: "Intelligent scheduling with provider matching, waitlist management, and automated reminders.",
    tags: ["Scheduling", "Appointments", "Patient Access", "Automation"],
    overview:
      "Optimize patient access and reduce no-shows with smart scheduling systems. Enable online self-service booking, match patients to appropriate providers and time slots, manage waitlists, send automated reminders, and handle rescheduling—all integrated with your practice management system.",
    features: [
      {
        title: "Online Self-Scheduling",
        description: "Patient-facing portal with real-time availability, provider profiles, and insurance verification.",
      },
      {
        title: "Provider Matching",
        description: "Route patients to appropriate providers based on specialty, language, location, and availability.",
      },
      {
        title: "Automated Reminders",
        description: "SMS, email, and voice reminders with two-way confirmation and easy rescheduling links.",
      },
      {
        title: "Waitlist Management",
        description: "Automatically fill cancelled slots from waitlist based on patient preferences and urgency.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "No-Show Rates",
        description: "High no-show rates impacting revenue and access; need better reminders and rescheduling options.",
      },
      {
        title: "Phone Volume",
        description: "Front desk overwhelmed with scheduling calls; need self-service options to reduce call volume.",
      },
      {
        title: "Access Delays",
        description: "Long wait times for appointments hurting patient satisfaction; need better capacity management.",
      },
    ],
    industries: [
      { title: "Primary Care", category: "HEALTHCARE" },
      { title: "Specialty Practices", category: "HEALTHCARE" },
      { title: "Urgent Care", category: "HEALTHCARE" },
    ],
  },
};
