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

  "medical-billing": {
    title: "Medical Billing & Revenue Cycle Management",
    tagline: "Automated claims processing with denial management and payment posting for maximized reimbursement.",
    tags: ["Medical Billing", "RCM", "Claims", "Revenue Cycle"],
    overview:
      "Optimize revenue cycle with comprehensive medical billing solutions. Automate claims submission to payers, track claim status, manage denials and appeals, post payments, and generate reports—ensuring compliance with coding standards and maximizing clean claim rates.",
    features: [
      {
        title: "Claims Automation",
        description: "Electronic claims submission to all major payers with real-time eligibility verification and scrubbing.",
      },
      {
        title: "Denial Management",
        description: "Track denial reasons, automate appeals workflows, and identify patterns to prevent future denials.",
      },
      {
        title: "Payment Posting",
        description: "Automated ERA/EOB posting with reconciliation and patient responsibility calculation.",
      },
      {
        title: "Revenue Analytics",
        description: "Track KPIs like days in AR, collection rates, and denial rates by payer, provider, and service.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Claim Denials",
        description: "High denial rates and slow appeals process causing cash flow problems and lost revenue.",
      },
      {
        title: "AR Management",
        description: "Days in accounts receivable increasing; need better tracking and follow-up on outstanding claims.",
      },
      {
        title: "Billing Staff Burden",
        description: "Manual billing processes requiring large staff; need automation to improve efficiency and margins.",
      },
    ],
    industries: [
      { title: "Medical Practices", category: "HEALTHCARE" },
      { title: "Hospital Systems", category: "HEALTHCARE" },
      { title: "Billing Companies", category: "RCM" },
    ],
  },

  "drug-discovery": {
    title: "Drug Discovery & Development Platforms",
    tagline: "AI-accelerated compound screening and clinical development tools for faster time to market.",
    tags: ["Drug Discovery", "AI", "Molecular Design", "Clinical Development"],
    overview:
      "Accelerate drug discovery with AI-powered platforms that predict compound properties, optimize molecular structures, identify drug targets, and manage preclinical studies. Reduce time and cost from target identification to IND filing with data-driven insights.",
    features: [
      {
        title: "AI Compound Screening",
        description: "Machine learning models predict binding affinity, toxicity, and pharmacokinetics for virtual screening.",
      },
      {
        title: "Molecular Design Tools",
        description: "Generative AI suggests novel compounds with desired properties and synthetic feasibility.",
      },
      {
        title: "Target Identification",
        description: "Analyze genomic and proteomic data to identify disease targets and biomarkers.",
      },
      {
        title: "Preclinical Management",
        description: "Track in vitro and in vivo studies, manage compound libraries, and integrate analytical data.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "R&D Efficiency",
        description: "Traditional discovery methods too slow and expensive; need AI to screen larger compound spaces faster.",
      },
      {
        title: "Failed Clinical Trials",
        description: "Compounds failing in trials due to poor prediction of human efficacy and safety; need better modeling.",
      },
      {
        title: "Competitive Pressure",
        description: "Competitors using AI for discovery gaining speed advantage; need to modernize research approach.",
      },
    ],
    industries: [
      { title: "Pharmaceutical Companies", category: "PHARMA" },
      { title: "Biotech Startups", category: "BIOTECH" },
      { title: "Research Institutions", category: "ACADEMIC" },
    ],
  },

  "mental-health-apps": {
    title: "Mental Health & Behavioral Health Apps",
    tagline: "Teletherapy, mood tracking, and crisis intervention tools with measurement-based care.",
    tags: ["Mental Health", "Teletherapy", "Behavioral Health", "Wellness"],
    overview:
      "Support mental health delivery with specialized digital platforms. Enable video therapy sessions, asynchronous messaging, mood and symptom tracking, crisis protocols, measurement-based care tools, and integration with EHR systems—all with enhanced privacy protections.",
    features: [
      {
        title: "Teletherapy Platform",
        description: "HIPAA-compliant video therapy with secure messaging, session notes, and treatment planning.",
      },
      {
        title: "Mood & Symptom Tracking",
        description: "Patient-reported outcomes with validated scales like PHQ-9, GAD-7 to inform treatment decisions.",
      },
      {
        title: "Crisis Intervention",
        description: "Risk assessment protocols, safety planning tools, and integration with crisis hotlines.",
      },
      {
        title: "Measurement-Based Care",
        description: "Track outcomes over time, identify deterioration early, and demonstrate treatment effectiveness.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Access Barriers",
        description: "Long waitlists for mental health care; teletherapy can increase capacity and reach underserved areas.",
      },
      {
        title: "Outcome Measurement",
        description: "Payers requiring outcome data for reimbursement; need systematic tracking of patient progress.",
      },
      {
        title: "Patient Engagement",
        description: "High dropout rates in therapy; need tools to engage patients between sessions and support adherence.",
      },
    ],
    industries: [
      { title: "Mental Health Clinics", category: "BEHAVIORAL HEALTH" },
      { title: "Employee Assistance", category: "CORPORATE WELLNESS" },
      { title: "Telehealth Providers", category: "TELEHEALTH" },
    ],
  },

  "care-coordination": {
    title: "Care Coordination & Case Management",
    tagline: "Multi-disciplinary care team collaboration with care plans and patient engagement tools.",
    tags: ["Care Coordination", "Case Management", "Team Collaboration", "Care Plans"],
    overview:
      "Enable seamless care coordination across providers, settings, and organizations. Manage complex patient cases with shared care plans, team communication, task assignment, transition of care workflows, and social determinants screening—improving outcomes for high-risk populations.",
    features: [
      {
        title: "Shared Care Plans",
        description: "Collaborative care planning with goals, interventions, and progress tracking visible to entire care team.",
      },
      {
        title: "Team Communication",
        description: "HIPAA-compliant messaging, care team directories, and case conferencing tools.",
      },
      {
        title: "Transition Management",
        description: "Hospital discharge planning, post-acute care coordination, and medication reconciliation workflows.",
      },
      {
        title: "SDOH Screening",
        description: "Screen for social determinants like housing, food insecurity, and transportation; connect to resources.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Readmission Rates",
        description: "Patients readmitted due to poor care coordination during transitions; need systematic handoff processes.",
      },
      {
        title: "Complex Patients",
        description: "Managing complex patients with multiple providers and conditions; communication gaps causing poor outcomes.",
      },
      {
        title: "Value-Based Care",
        description: "ACO or bundle contracts requiring care coordination capabilities to manage total cost of care.",
      },
    ],
    industries: [
      { title: "Health Plans", category: "MANAGED CARE" },
      { title: "ACOs", category: "HEALTHCARE" },
      { title: "Home Health Agencies", category: "POST-ACUTE" },
    ],
  },

  "medical-devices": {
    title: "Medical Device Software & IoT Platforms",
    tagline: "FDA-compliant device software with cloud connectivity and real-time data streaming.",
    tags: ["Medical Devices", "IoT", "FDA Compliance", "Connected Health"],
    overview:
      "Develop FDA-compliant software for medical devices or Software as a Medical Device (SaMD). Support device control, data acquisition, cloud connectivity, OTA updates, and regulatory compliance with IEC 62304, ISO 13485, and FDA 21 CFR Part 820 requirements.",
    features: [
      {
        title: "Device Control Software",
        description: "Embedded software for device operation, user interface, and safety-critical functions.",
      },
      {
        title: "Cloud Connectivity",
        description: "Secure IoT protocols for real-time device data streaming to cloud platforms and EHR integration.",
      },
      {
        title: "OTA Updates",
        description: "Over-the-air software updates with version management and FDA change control compliance.",
      },
      {
        title: "Regulatory Documentation",
        description: "Software development lifecycle documentation meeting FDA and international regulatory requirements.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Device Development",
        description: "Developing new medical device but lack expertise in FDA software compliance and validation.",
      },
      {
        title: "Connected Device Strategy",
        description: "Want to add cloud connectivity and remote monitoring to existing devices for competitive advantage.",
      },
      {
        title: "SaMD Launch",
        description: "Creating standalone software product that qualifies as medical device requiring FDA clearance.",
      },
    ],
    industries: [
      { title: "Medical Device Manufacturers", category: "MED TECH" },
      { title: "Digital Health Startups", category: "DIGITAL HEALTH" },
      { title: "Contract Manufacturers", category: "MANUFACTURING" },
    ],
  },

  "health-insurance": {
    title: "Health Insurance Core Systems",
    tagline: "Policy administration, claims adjudication, and member portals for payers and TPAs.",
    tags: ["Insurance", "Claims Processing", "Policy Admin", "Member Services"],
    overview:
      "Modernize health insurance operations with comprehensive core systems. Manage policy administration, benefits configuration, claims adjudication, provider networks, member portals, and regulatory reporting—enabling rapid product launches and operational efficiency.",
    features: [
      {
        title: "Policy Administration",
        description: "Flexible benefit plan configuration, enrollment processing, premium billing, and eligibility management.",
      },
      {
        title: "Claims Adjudication",
        description: "Automated claims processing with edits, repricing, COB, and authorization requirements enforcement.",
      },
      {
        title: "Provider Network",
        description: "Provider credentialing, contract management, fee schedules, and network adequacy reporting.",
      },
      {
        title: "Member Portal",
        description: "Self-service for ID cards, claims status, explanation of benefits, and provider directory.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Legacy Systems",
        description: "Mainframe systems preventing product innovation and creating operational inefficiencies.",
      },
      {
        title: "Market Expansion",
        description: "Entering new markets or product lines but can't configure current system for new benefit designs.",
      },
      {
        title: "TPA Services",
        description: "Want to offer third-party administration services but need modern, scalable platform.",
      },
    ],
    industries: [
      { title: "Health Plans", category: "INSURANCE" },
      { title: "Third Party Administrators", category: "TPA" },
      { title: "Self-Insured Employers", category: "CORPORATE" },
    ],
  },

  "genomics-platforms": {
    title: "Genomics & Precision Medicine Platforms",
    tagline: "NGS data analysis, variant interpretation, and clinical genomics workflows.",
    tags: ["Genomics", "Precision Medicine", "NGS", "Variant Analysis"],
    overview:
      "Enable precision medicine with comprehensive genomics platforms. Process next-generation sequencing data, interpret variants using clinical databases, generate reports compliant with ACMG guidelines, and integrate with EHR for clinical decision support—supporting oncology, rare disease, and pharmacogenomics.",
    features: [
      {
        title: "NGS Pipeline",
        description: "Automated bioinformatics pipeline for sequence alignment, variant calling, and quality control.",
      },
      {
        title: "Variant Interpretation",
        description: "Clinical variant classification using ClinVar, COSMIC, and literature with ACMG criteria.",
      },
      {
        title: "Clinical Reporting",
        description: "Generate patient reports with actionable variants, therapy recommendations, and clinical trial matching.",
      },
      {
        title: "EHR Integration",
        description: "Deliver genomic insights within clinical workflow with CDS hooks and SMART on FHIR apps.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Precision Medicine Program",
        description: "Launching precision medicine initiative but lack bioinformatics infrastructure and expertise.",
      },
      {
        title: "Report Turnaround Time",
        description: "Manual variant interpretation causing long turnaround times for actionable results.",
      },
      {
        title: "Clinical Integration",
        description: "Genomic data siloed from EHR; clinicians not using results because of access friction.",
      },
    ],
    industries: [
      { title: "Cancer Centers", category: "ONCOLOGY" },
      { title: "Genetic Testing Labs", category: "DIAGNOSTICS" },
      { title: "Academic Medical Centers", category: "RESEARCH" },
    ],
  },

  "nutrition-tracking": {
    title: "Nutrition & Wellness Tracking Apps",
    tagline: "Food logging, meal planning, and nutrition coaching with health condition-specific guidance.",
    tags: ["Nutrition", "Wellness", "Diet", "Food Tracking"],
    overview:
      "Support healthy eating and therapeutic diets with comprehensive nutrition platforms. Enable food logging with barcode scanning, provide personalized meal plans, track macros and micronutrients, integrate with wearables, and offer condition-specific guidance for diabetes, heart disease, and weight management.",
    features: [
      {
        title: "Food Database & Logging",
        description: "Comprehensive food database with barcode scanning, recipe builder, and restaurant menus.",
      },
      {
        title: "Meal Planning",
        description: "Personalized meal plans based on dietary preferences, health goals, and medical conditions.",
      },
      {
        title: "Nutrition Coaching",
        description: "In-app messaging with registered dietitians, educational content, and goal-setting tools.",
      },
      {
        title: "Health Integration",
        description: "Sync with glucose monitors, fitness trackers, and EHR for comprehensive health picture.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Chronic Disease Management",
        description: "Patients with diabetes, obesity, or heart disease need nutrition support but can't see dietitian frequently.",
      },
      {
        title: "Preventive Programs",
        description: "Employer wellness or health plan programs need scalable nutrition intervention tools.",
      },
      {
        title: "Patient Engagement",
        description: "Want to improve diet adherence for better outcomes but lack tools for ongoing monitoring and support.",
      },
    ],
    industries: [
      { title: "Wellness Programs", category: "CORPORATE WELLNESS" },
      { title: "Weight Management", category: "HEALTHCARE" },
      { title: "Chronic Disease Programs", category: "MANAGED CARE" },
    ],
  },

  "hospital-management": {
    title: "Hospital Management & Operations Systems",
    tagline: "Integrated HMS for bed management, staff scheduling, supply chain, and financial operations.",
    tags: ["Hospital Management", "HMS", "Operations", "Resource Planning"],
    overview:
      "Optimize hospital operations with comprehensive management systems. Coordinate bed placement, staff scheduling, OR scheduling, supply chain, patient flow, billing, and financial reporting—providing real-time visibility into resource utilization and operational efficiency across the enterprise.",
    features: [
      {
        title: "Bed Management",
        description: "Real-time bed status, patient placement algorithms, transfer coordination, and discharge planning.",
      },
      {
        title: "Staff Scheduling",
        description: "Workforce management with credential tracking, shift scheduling, time & attendance, and skill mix optimization.",
      },
      {
        title: "OR Management",
        description: "Surgery scheduling, case coordination, preference cards, and OR utilization analytics.",
      },
      {
        title: "Supply Chain",
        description: "Inventory management, purchasing, vendor management, and clinical supply integration with EHR.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Capacity Constraints",
        description: "Boarding patients in ED due to lack of bed visibility and inefficient patient placement processes.",
      },
      {
        title: "Operational Inefficiency",
        description: "Siloed systems creating manual workflows, data entry duplication, and lack of real-time visibility.",
      },
      {
        title: "Financial Pressure",
        description: "Need to reduce costs and improve margins through better resource utilization and supply chain management.",
      },
    ],
    industries: [
      { title: "Hospital Systems", category: "HEALTHCARE" },
      { title: "Academic Medical Centers", category: "HEALTHCARE" },
      { title: "Ambulatory Surgery Centers", category: "OUTPATIENT" },
    ],
  },

  "diagnostics-ai": {
    title: "AI-Powered Diagnostics & Clinical Decision Support",
    tagline: "Machine learning models for disease detection, diagnosis assistance, and treatment recommendations.",
    tags: ["AI Diagnostics", "Machine Learning", "Clinical Decision Support", "Medical AI"],
    overview:
      "Augment clinical expertise with AI-powered diagnostic tools. Deploy machine learning models for medical image analysis, early disease detection, diagnosis suggestions, treatment protocol recommendations, and risk prediction—improving accuracy, speed, and consistency of clinical decisions.",
    features: [
      {
        title: "Medical Image Analysis",
        description: "Deep learning models for radiology, pathology, dermatology, and ophthalmology image interpretation.",
      },
      {
        title: "Diagnosis Assistance",
        description: "Differential diagnosis suggestions based on symptoms, labs, imaging, and patient history.",
      },
      {
        title: "Treatment Recommendations",
        description: "Evidence-based treatment protocols personalized to patient characteristics and comorbidities.",
      },
      {
        title: "Risk Prediction",
        description: "Predict patient deterioration, readmission risk, or disease progression using ML models.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Diagnostic Accuracy",
        description: "Variability in diagnostic accuracy or missed findings; AI can provide second opinion and improve consistency.",
      },
      {
        title: "Specialist Shortage",
        description: "Lack of specialists in certain areas; AI can extend capacity and provide guidance to generalists.",
      },
      {
        title: "Complex Decisions",
        description: "Complex patients with multiple conditions; AI can synthesize large amounts of data for decision support.",
      },
    ],
    industries: [
      { title: "Radiology Groups", category: "DIAGNOSTICS" },
      { title: "Hospital Systems", category: "HEALTHCARE" },
      { title: "Pathology Labs", category: "DIAGNOSTICS" },
    ],
  },
};
