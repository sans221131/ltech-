// EdTech Services Data
import { ServiceData } from "./serviceData";

export const edtechServices: Record<string, ServiceData> = {
  "lms-platform": {
    title: "Learning Management System (LMS)",
    tagline: "Scalable LMS with course delivery, progress tracking, and integrated assessments.",
    tags: ["LMS", "E-Learning", "Course Management", "Education"],
    overview:
      "Deploy comprehensive learning management systems that power online education at scale. Support course creation, content delivery, student enrollment, progress tracking, assessments, certifications, and analytics—all with mobile-responsive design and SCORM compliance.",
    features: [
      {
        title: "Course Builder",
        description: "Intuitive authoring tools for multimedia courses with SCORM/xAPI content support and version control.",
      },
      {
        title: "Student Portal",
        description: "Personalized dashboards with course catalog, progress tracking, discussion forums, and resource library.",
      },
      {
        title: "Assessment Engine",
        description: "Quiz builder with multiple question types, adaptive testing, automated grading, and proctoring integration.",
      },
      {
        title: "Analytics & Reporting",
        description: "Course completion rates, engagement metrics, learning outcomes analysis, and compliance reporting.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Online Learning Launch",
        description: "Transitioning to online or hybrid learning but lack infrastructure for course delivery and management.",
      },
      {
        title: "Scalability Issues",
        description: "Current LMS can't handle growing student numbers or crashes during peak usage times.",
      },
      {
        title: "Feature Limitations",
        description: "Need advanced features like adaptive learning, gamification, or integration with third-party tools.",
      },
    ],
    industries: [
      { title: "Higher Education", category: "EDUCATION" },
      { title: "Corporate Training", category: "ENTERPRISE" },
      { title: "K-12 Schools", category: "EDUCATION" },
    ],
  },

  "virtual-classroom": {
    title: "Virtual Classroom & Live Sessions",
    tagline: "Interactive live teaching with video, whiteboard, breakout rooms, and recording.",
    tags: ["Virtual Classroom", "Live Learning", "Video Conferencing", "Collaboration"],
    overview:
      "Enable engaging live online instruction with virtual classroom technology built for education. Features include HD video conferencing, interactive whiteboard, screen sharing, breakout rooms, polls, chat, attendance tracking, and session recording—optimized for teaching workflows.",
    features: [
      {
        title: "Interactive Whiteboard",
        description: "Collaborative canvas with drawing tools, shapes, text, and ability to annotate shared screens or PDFs.",
      },
      {
        title: "Breakout Rooms",
        description: "Automatic or manual assignment to small group rooms with instructor monitoring and broadcast messaging.",
      },
      {
        title: "Engagement Tools",
        description: "Live polls, Q&A, hand raising, reactions, and participation tracking to keep students engaged.",
      },
      {
        title: "Session Recording",
        description: "Automatic recording with post-processing, transcription, and integration with LMS for on-demand access.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Remote Learning Demand",
        description: "Students expect live online classes but generic video tools lack education-specific features.",
      },
      {
        title: "Engagement Challenges",
        description: "Struggling to maintain student engagement and participation in virtual sessions.",
      },
      {
        title: "Recording & Accessibility",
        description: "Need automatic recording, captioning, and playback for students who can't attend live.",
      },
    ],
    industries: [
      { title: "Online Schools", category: "EDUCATION" },
      { title: "Tutoring Services", category: "EDTECH" },
      { title: "Professional Development", category: "TRAINING" },
    ],
  },

  "student-portal": {
    title: "Student Information System (SIS)",
    tagline: "Comprehensive student management with enrollment, grades, attendance, and communications.",
    tags: ["SIS", "Student Management", "Academic Records", "Administration"],
    overview:
      "Streamline academic administration with integrated SIS that manages the entire student lifecycle. Handle admissions, enrollment, scheduling, attendance, grades, transcripts, and parent communications—all with role-based access for administrators, teachers, students, and parents.",
    features: [
      {
        title: "Enrollment Management",
        description: "Online applications, document submission, admission decisions, and automated enrollment workflows.",
      },
      {
        title: "Academic Records",
        description: "Grade books, transcript generation, GPA calculation, and academic standing tracking with audit trails.",
      },
      {
        title: "Attendance Tracking",
        description: "Digital attendance capture, absence notifications, and attendance report generation for compliance.",
      },
      {
        title: "Parent Portal",
        description: "Real-time access to grades, attendance, assignments, and secure messaging with teachers.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Manual Processes",
        description: "Paper-based or spreadsheet student records causing inefficiency and data integrity issues.",
      },
      {
        title: "Parent Communication",
        description: "Parents demanding better visibility into student progress and easier communication with teachers.",
      },
      {
        title: "Compliance Reporting",
        description: "Struggling to meet state reporting requirements for attendance, grades, and student demographics.",
      },
    ],
    industries: [
      { title: "K-12 Schools", category: "EDUCATION" },
      { title: "Charter Schools", category: "EDUCATION" },
      { title: "Private Schools", category: "EDUCATION" },
    ],
  },

  "course-builder": {
    title: "Course Authoring & Content Creation",
    tagline: "No-code course builder with multimedia support, templates, and interactive elements.",
    tags: ["Course Creation", "Authoring", "Content", "Interactive"],
    overview:
      "Empower educators to create engaging online courses without technical skills. Drag-and-drop course builder with multimedia support, interactive elements, quizzes, assignments, templates, and collaboration tools—all with preview mode and version control for iterative development.",
    features: [
      {
        title: "Drag-and-Drop Builder",
        description: "Visual course editor with pre-built templates, modules, and lessons for rapid course development.",
      },
      {
        title: "Multimedia Integration",
        description: "Upload videos, audio, PDFs, presentations, and embed external content from YouTube, Vimeo, etc.",
      },
      {
        title: "Interactive Elements",
        description: "Add quizzes, flashcards, timelines, accordion panels, and knowledge checks throughout content.",
      },
      {
        title: "Collaboration",
        description: "Multi-author support with commenting, review workflows, and change tracking for course teams.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Content Creation Bottleneck",
        description: "Instructors need IT help to create courses; want self-service tools for faster course development.",
      },
      {
        title: "Course Quality",
        description: "Inconsistent course design across instructors; need templates and standards for professional look.",
      },
      {
        title: "Rapid Course Development",
        description: "Need to quickly create and update courses to keep pace with industry changes or student demand.",
      },
    ],
    industries: [
      { title: "Online Course Creators", category: "EDTECH" },
      { title: "Corporate Training", category: "ENTERPRISE" },
      { title: "Professional Certification", category: "TRAINING" },
    ],
  },

  "assessment-tools": {
    title: "Online Assessment & Testing Platform",
    tagline: "Secure online exams with anti-cheating, auto-grading, and detailed analytics.",
    tags: ["Assessments", "Testing", "Proctoring", "Grading"],
    overview:
      "Administer secure, fair online assessments with comprehensive testing platform. Support multiple question types, randomization, time limits, proctoring, plagiarism detection, automated grading, and detailed analytics—ensuring academic integrity while reducing instructor workload.",
    features: [
      {
        title: "Question Bank",
        description: "Create and organize questions by topic, difficulty, and learning objective with metadata tagging.",
      },
      {
        title: "Proctoring & Security",
        description: "Browser lockdown, webcam monitoring, AI-powered behavior detection, and plagiarism checking.",
      },
      {
        title: "Auto-Grading",
        description: "Instant grading for objective questions with configurable partial credit and feedback templates.",
      },
      {
        title: "Analytics & Insights",
        description: "Item analysis, performance distribution, learning outcome assessment, and question difficulty metrics.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Academic Integrity Concerns",
        description: "Cheating in online exams undermining assessment validity; need proctoring and security controls.",
      },
      {
        title: "Grading Burden",
        description: "Instructors spending excessive time grading; need automated grading for objective assessments.",
      },
      {
        title: "Assessment Quality",
        description: "Want data-driven insights into question quality and student learning to improve assessments.",
      },
    ],
    industries: [
      { title: "Higher Education", category: "EDUCATION" },
      { title: "Certification Programs", category: "PROFESSIONAL" },
      { title: "Recruitment Testing", category: "HR TECH" },
    ],
  },

  "gradebook": {
    title: "Digital Gradebook & Performance Tracking",
    tagline: "Comprehensive grade management with weighted categories, curves, and standards-based grading.",
    tags: ["Gradebook", "Grades", "Performance", "Analytics"],
    overview:
      "Modernize grade management with flexible digital gradebook that supports multiple grading schemes, weighted categories, curves, standards-based grading, and mastery tracking. Provide transparent grade calculation, what-if scenarios, and real-time access for students and parents.",
    features: [
      {
        title: "Flexible Grading Schemes",
        description: "Support points, percentages, letter grades, standards-based, or custom scales with conversion tables.",
      },
      {
        title: "Weighted Categories",
        description: "Configure weighted assignment categories, drop lowest scores, and apply custom calculation rules.",
      },
      {
        title: "Standards Alignment",
        description: "Map assignments to learning standards and track mastery progression across competencies.",
      },
      {
        title: "Student Analytics",
        description: "What-if grade calculators, progress reports, and predictive alerts for at-risk students.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Grade Transparency",
        description: "Students and parents want real-time grade access and clear understanding of grade calculation.",
      },
      {
        title: "Standards-Based Grading",
        description: "Transitioning from traditional to standards-based grading; need system that supports both approaches.",
      },
      {
        title: "At-Risk Identification",
        description: "Need early warning system to identify struggling students before it's too late to intervene.",
      },
    ],
    industries: [
      { title: "K-12 Education", category: "EDUCATION" },
      { title: "Higher Education", category: "EDUCATION" },
      { title: "Tutoring Centers", category: "EDTECH" },
    ],
  },

  "video-lectures": {
    title: "Video Lecture Platform & Content Delivery",
    tagline: "Scalable video hosting with interactive transcripts, analytics, and adaptive streaming.",
    tags: ["Video Learning", "Lecture Capture", "Streaming", "Content Delivery"],
    overview:
      "Deliver engaging video-based learning at scale with education-focused video platform. Features include adaptive streaming, interactive transcripts, in-video quizzes, bookmarking, playback speed control, and detailed engagement analytics—optimized for educational content consumption.",
    features: [
      {
        title: "Adaptive Streaming",
        description: "Automatic quality adjustment based on bandwidth with offline download for mobile learners.",
      },
      {
        title: "Interactive Transcripts",
        description: "Auto-generated captions with search, jump-to-point, and translation for accessibility and SEO.",
      },
      {
        title: "Engagement Features",
        description: "In-video quizzes, chapters, bookmarks, notes, and variable playback speed for personalized learning.",
      },
      {
        title: "Video Analytics",
        description: "Track view completion, engagement heatmaps, drop-off points, and rewatch patterns by student.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Lecture Recording Volume",
        description: "Growing library of recorded lectures overwhelming generic video platforms or costing too much.",
      },
      {
        title: "Student Engagement",
        description: "Students not watching videos; need interactive elements and analytics to improve engagement.",
      },
      {
        title: "Accessibility Requirements",
        description: "Need accurate captions, transcripts, and multilingual support for diverse student populations.",
      },
    ],
    industries: [
      { title: "Universities", category: "HIGHER ED" },
      { title: "MOOCs", category: "ONLINE LEARNING" },
      { title: "Professional Training", category: "CORPORATE" },
    ],
  },

  "interactive-labs": {
    title: "Virtual Labs & Hands-On Simulations",
    tagline: "Cloud-based interactive labs for STEM, coding, and technical skills practice.",
    tags: ["Virtual Labs", "Simulations", "Hands-On Learning", "STEM"],
    overview:
      "Provide hands-on learning experiences without physical infrastructure through virtual labs. Offer coding environments, science simulations, network simulators, and technical sandboxes with auto-grading, progress tracking, and scalable cloud infrastructure for unlimited concurrent learners.",
    features: [
      {
        title: "Pre-Configured Environments",
        description: "Instantly launch coding IDEs, science simulations, or network labs without setup or installation.",
      },
      {
        title: "Auto-Grading",
        description: "Automated test cases for code submissions and simulation objectives with instant feedback.",
      },
      {
        title: "Progress Tracking",
        description: "Monitor student work, time spent, attempts, and completion across lab exercises and modules.",
      },
      {
        title: "Scalable Infrastructure",
        description: "Cloud-based labs that scale to thousands of concurrent users without performance degradation.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Lab Access Limitations",
        description: "Physical lab capacity limiting enrollment or students can't access equipment outside class hours.",
      },
      {
        title: "Equipment Costs",
        description: "High cost of lab equipment, software licenses, and maintenance straining budgets.",
      },
      {
        title: "Remote Learning",
        description: "Need to provide hands-on learning experiences for remote or online students.",
      },
    ],
    industries: [
      { title: "Computer Science", category: "STEM" },
      { title: "Engineering Programs", category: "STEM" },
      { title: "IT Certifications", category: "TECHNICAL TRAINING" },
    ],
  },

  "study-groups": {
    title: "Collaborative Learning & Study Groups",
    tagline: "Peer collaboration platform with group formation, discussion, and shared resources.",
    tags: ["Collaboration", "Peer Learning", "Study Groups", "Social Learning"],
    overview:
      "Foster peer-to-peer learning with collaborative study platform. Enable students to form study groups, share resources, collaborate on assignments, hold video discussions, and get peer help—with moderation tools and analytics to ensure productive collaboration.",
    features: [
      {
        title: "Smart Group Formation",
        description: "Algorithm-based matching by course, location, schedule, and learning goals for effective study groups.",
      },
      {
        title: "Collaborative Workspace",
        description: "Shared documents, whiteboards, video chat, and screen sharing for synchronous and async collaboration.",
      },
      {
        title: "Resource Sharing",
        description: "Upload and organize study materials, notes, flashcards, and practice problems within groups.",
      },
      {
        title: "Moderation Tools",
        description: "Instructor oversight, reporting mechanisms, and AI content filtering to maintain safe environment.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Student Isolation",
        description: "Online students feeling isolated; need social connection and peer support for motivation and success.",
      },
      {
        title: "Engagement & Retention",
        description: "Low engagement and high dropout; peer collaboration shown to improve persistence and outcomes.",
      },
      {
        title: "Scalable Support",
        description: "Can't provide 1-on-1 help to all students; peer learning reduces support burden while improving outcomes.",
      },
    ],
    industries: [
      { title: "Online Universities", category: "HIGHER ED" },
      { title: "Test Prep", category: "EDTECH" },
      { title: "Bootcamps", category: "SKILLS TRAINING" },
    ],
  },

  "certification": {
    title: "Digital Credentials & Certification",
    tagline: "Verifiable digital badges and certificates with blockchain verification and skills tracking.",
    tags: ["Certification", "Digital Badges", "Credentials", "Blockchain"],
    overview:
      "Issue tamper-proof digital credentials and certificates that learners can share and employers can verify. Support Open Badges standard, blockchain verification, skill-based credentials, micro-credentials, and credential pathways with integrated learner wallet and public verification portal.",
    features: [
      {
        title: "Certificate Generation",
        description: "Automated certificate issuance based on course completion, assessment scores, or manual approval.",
      },
      {
        title: "Blockchain Verification",
        description: "Immutable credential records on blockchain with instant verification via QR code or URL.",
      },
      {
        title: "Digital Badge System",
        description: "Skill-based badges with metadata describing competencies, evidence, and issuer information.",
      },
      {
        title: "Learner Wallet",
        description: "Personal portfolio where learners collect, organize, and share credentials with employers or LinkedIn.",
      },
    ],
    whenYouNeedThis: [
      {
        title: "Credential Fraud",
        description: "Fake certificates undermining program credibility; need verifiable, tamper-proof credentials.",
      },
      {
        title: "Employer Recognition",
        description: "Employers don't recognize or trust your certificates; need industry-standard digital credentials.",
      },
      {
        title: "Skills-Based Hiring",
        description: "Want to issue skill badges that align with job requirements and demonstrate specific competencies.",
      },
    ],
    industries: [
      { title: "Professional Development", category: "TRAINING" },
      { title: "Corporate Learning", category: "ENTERPRISE" },
      { title: "Bootcamps", category: "CAREER TRAINING" },
    ],
  },

  "tutoring-platform": {
    title: "1-on-1 Tutoring & Session Marketplace",
    tagline: "Connect students with tutors for personalized instruction via video sessions and scheduling.",
    tags: ["Tutoring", "1-on-1 Learning", "Video Sessions", "Marketplace"],
    overview:
      "Launch tutoring marketplace connecting students with qualified tutors. Search tutors by subject and availability, book sessions with calendar integration, conduct video sessions with whiteboard, track session history and notes, process payments with tutor payout management—creating flexible personalized learning marketplace.",
    features: [
      { title: "Tutor Marketplace", description: "Browse tutor profiles with qualifications, ratings, hourly rates; filter by subject, grade level, and language." },
      { title: "Session Scheduling", description: "Calendar booking with automated reminders, rescheduling, and cancellation policies." },
      { title: "Virtual Classroom", description: "Integrated video with screen sharing, interactive whiteboard, and session recording for review." },
      { title: "Payment Processing", description: "Hourly or package pricing with automatic tutor payouts; handle commissions and transaction fees." },
    ],
    whenYouNeedThis: [
      { title: "Tutoring Marketplace", description: "Want to create Uber-for-tutoring platform; need two-sided marketplace infrastructure." },
      { title: "Supplemental Learning", description: "Students need help outside classroom; institutional tutoring doesn't meet all needs." },
      { title: "Monetization", description: "Have network of tutors; want platform to facilitate bookings and take transaction fee." },
    ],
    industries: [
      { title: "Tutoring Companies", category: "EDTECH" },
      { title: "Test Prep", category: "EDUCATION" },
      { title: "Language Learning", category: "SKILLS" },
    ],
  },

  "language-learning": {
    title: "Language Learning Platform",
    tagline: "Manage scholarship applications, awards, disbursements, and reporting in one system.",
    tags: ["Financial Aid", "Scholarships", "Awards", "Student Funding"],
    overview:
      "Simplify scholarship administration from application to disbursement. Accept scholarship applications, evaluate candidates, award scholarships, track disbursements, manage donor restrictions, generate compliance reports, and provide transparency to students and donors—reducing administrative burden while serving more students.",
    features: [
      { title: "Application Portal", description: "Customized scholarship applications with eligibility criteria, essays, and supporting documents." },
      { title: "Award Management", description: "Review committee workflows with scoring, comments, and multi-round selection processes." },
      { title: "Disbursement Tracking", description: "Schedule payments, track disbursements to student accounts, and manage renewal requirements." },
      { title: "Donor Reporting", description: "Automated reports showing how funds were used, recipient profiles, and impact stories for donors." },
    ],
    whenYouNeedThis: [
      { title: "Manual Administration", description: "Managing scholarships in spreadsheets; error-prone and can't scale with growing scholarship programs." },
      { title: "Donor Relations", description: "Donors want transparency on scholarship usage; need reporting to maintain relationships and secure future gifts." },
      { title: "Student Experience", description: "Students don't know what scholarships they qualify for; need better discovery and application process." },
    ],
    industries: [
      { title: "Colleges", category: "HIGHER ED" },
      { title: "Scholarship Foundations", category: "NON-PROFIT" },
      { title: "Corporate Programs", category: "CSR" },
    ],
  },

  "school-admin": {
    title: "School Administration & SIS Platform",
    tagline: "Meal plans, dining hall menus, nutrition tracking, and cashless payments for campus dining.",
    tags: ["Dining Services", "Meal Plans", "Nutrition", "Campus Life"],
    overview:
      "Modernize campus dining with digital meal plan management. Track meal plan balances, display menus with nutrition info, enable mobile ordering and payment, accommodate dietary restrictions, analyze dining patterns, and integrate with student ID cards—improving dining experience while optimizing operations.",
    features: [
      { title: "Meal Plan Tracking", description: "Students check balances, view transaction history, and receive low-balance alerts via mobile app." },
      { title: "Digital Menus", description: "Display daily menus with nutrition facts, allergen info, and dietary filters (vegan, gluten-free, halal)." },
      { title: "Mobile Ordering", description: "Order ahead for pickup to skip lines; pre-order for next day to improve kitchen planning." },
      { title: "Analytics Dashboard", description: "Track dining hall traffic, popular items, food waste, and meal plan usage for operational insights." },
    ],
    whenYouNeedThis: [
      { title: "Student Complaints", description: "Long lines and poor visibility into what's being served; students want convenience and transparency." },
      { title: "Dietary Accommodations", description: "Difficulty serving students with allergies and dietary restrictions; need better information system." },
      { title: "Operational Efficiency", description: "Food waste and overproduction; need data on actual consumption to optimize purchasing and prep." },
    ],
    industries: [
      { title: "Universities", category: "HIGHER ED" },
      { title: "Boarding Schools", category: "K-12" },
      { title: "Corporate Cafeterias", category: "FOOD SERVICE" },
    ],
  },

  "parent-portal": {
    title: "Parent & Family Engagement Portal",
    tagline: "Keep parents connected with student progress, school events, and teacher communication.",
    tags: ["Parent Portal", "Family Engagement", "Communication", "K-12"],
    overview:
      "Strengthen home-school connection with comprehensive parent portal. Real-time access to grades, attendance, and assignments; two-way messaging with teachers; school calendar and event registration; lunch menu and balance; permission slips and forms—empowering parents to support their child's education.",
    features: [
      { title: "Academic Dashboard", description: "View real-time grades, assignment details, missing work, and teacher comments for each child." },
      { title: "Attendance & Behavior", description: "See daily attendance, tardies, and behavior incidents with context from teachers." },
      { title: "Direct Messaging", description: "Message teachers directly; automated translation for non-English speaking families." },
      { title: "School Events", description: "View calendar, register for events, volunteer sign-ups, and receive reminders." },
    ],
    whenYouNeedThis: [
      { title: "Parent Transparency", description: "Parents feel uninformed about child's progress; want real-time access not just report cards." },
      { title: "Reduce Calls", description: "Office overwhelmed with parent calls for basic information; need self-service portal." },
      { title: "Parent Involvement", description: "Want to increase parent engagement and volunteering; need tools to facilitate participation." },
    ],
    industries: [
      { title: "Elementary Schools", category: "K-12" },
      { title: "Middle Schools", category: "EDUCATION" },
      { title: "School Districts", category: "PUBLIC EDUCATION" },
    ],
  },

  "attendance-tracking": {
    title: "Attendance & Absence Management System",
    tagline: "Real-time attendance tracking with automated parent notifications and truancy analytics.",
    tags: ["Attendance", "Absence Management", "Truancy", "School Operations"],
    overview:
      "Modernize attendance tracking with digital management system. Teachers take attendance via app or web, automatic absence notifications to parents, track tardies and early dismissals, identify chronic absenteeism patterns, generate compliance reports—improving accuracy while reducing administrative workload.",
    features: [
      { title: "Digital Roll Call", description: "Teachers mark attendance via mobile app or web portal; sync instantly to student records and parent portal." },
      { title: "Automated Notifications", description: "Send absence/tardy alerts to parents via SMS or email within minutes of class start." },
      { title: "Pattern Analysis", description: "Identify chronic absenteeism, frequent tardies, and concerning patterns for early intervention." },
      { title: "Reporting", description: "Generate attendance reports by student, class, date range; support ADA calculations and state reporting." },
    ],
    whenYouNeedThis: [
      { title: "Paper Attendance", description: "Teachers using paper attendance sheets sent to office; slow, error-prone, and delays parent notification." },
      { title: "Truancy Issues", description: "Can't identify at-risk students early; by the time patterns noticed, intervention too late." },
      { title: "Parent Complaints", description: "Parents find out about absences days later; want real-time notification when child misses school." },
    ],
    industries: [
      { title: "K-12 Schools", category: "EDUCATION" },
      { title: "Alternative Schools", category: "SPECIAL PROGRAMS" },
      { title: "Vocational Schools", category: "CAREER TRAINING" },
    ],
  },

  "library-system": {
    title: "School Library Management System",
    tagline: "Catalog, circulation, and digital resources for school and academic libraries.",
    tags: ["Library", "Circulation", "E-Books", "Resource Management"],
    overview:
      "Modernize library operations with digital management system. Catalog books and resources with barcode scanning, manage checkouts and holds, integrate e-book platforms, track overdue items with automated reminders, provide online catalog search, and analyze circulation data—making library more accessible and efficient.",
    features: [
      { title: "Catalog Management", description: "MARC records import, barcode labeling, Dewey/LC classification, and searchable online catalog." },
      { title: "Circulation", description: "Check out materials with barcode scan, manage holds and renewals, automated overdue notices." },
      { title: "Digital Resources", description: "Integrate e-book platforms like Overdrive; single search across physical and digital collections." },
      { title: "Reading Programs", description: "Track reading challenges, book clubs, and summer reading with badges and leaderboards." },
    ],
    whenYouNeedThis: [
      { title: "Card Catalog", description: "Still using card catalog or outdated system; students can't search library holdings online." },
      { title: "Manual Checkout", description: "Hand-writing checkout cards; slow process and no way to track overdue books systematically." },
      { title: "Digital Collection", description: "Added e-books but students don't know they exist; need integrated discovery." },
    ],
    industries: [
      { title: "K-12 Libraries", category: "SCHOOL" },
      { title: "University Libraries", category: "HIGHER ED" },
      { title: "Public Libraries", category: "MUNICIPAL" },
    ],
  },

  "career-services": {
    title: "Career Services & Job Placement Platform",
    tagline: "Connect students with employers through job boards, career fairs, resume reviews, and placement tracking.",
    tags: ["Career Services", "Job Placement", "Employer Relations", "Student Success"],
    overview:
      "Empower student career success with comprehensive career services platform. Post job and internship opportunities, host virtual career fairs, schedule advising appointments, review resumes, track placement outcomes, manage employer relationships—supporting students from resume building to job offer.",
    features: [
      { title: "Job Board", description: "Students search opportunities by major, industry, location; employers post jobs exclusively to your students." },
      { title: "Virtual Career Fairs", description: "Host online career fairs with virtual booths, video chat, resume sharing, and event analytics." },
      { title: "Resume Builder", description: "Guided resume creation with templates, AI suggestions, and peer/advisor review workflow." },
      { title: "Placement Tracking", description: "Survey graduates on employment status, salary, industry; generate placement reports for accreditation." },
    ],
    whenYouNeedThis: [
      { title: "Placement Outcomes", description: "Can't track graduate employment; need data for rankings, accreditation, and prospective student marketing." },
      { title: "Employer Partnerships", description: "Want to build relationships with employers; need platform to connect students with recruiting companies." },
      { title: "Student Preparedness", description: "Students unprepared for job search; need tools and resources to develop career readiness skills." },
    ],
    industries: [
      { title: "Colleges & Universities", category: "HIGHER ED" },
      { title: "Vocational Schools", category: "CAREER TRAINING" },
      { title: "Bootcamps", category: "SKILLS TRAINING" },
    ],
  },

  "alumni-network": {
    title: "Alumni Engagement Platform",
    tagline: "Connect graduates with networking, mentorship, job boards, and giving campaigns.",
    tags: ["Alumni", "Networking", "Fundraising", "Career Services"],
    overview:
      "Build thriving alumni community with engagement platform. Enable alumni directory and networking, mentor matching, job postings, event registration, giving campaigns, and class notes—strengthening lifelong connection to institution while supporting current students and fundraising goals.",
    features: [
      { title: "Alumni Directory", description: "Searchable directory with privacy controls; filter by graduation year, major, industry, location." },
      { title: "Mentorship Matching", description: "Connect students with alumni mentors based on career interests, industry, and goals." },
      { title: "Career Center", description: "Job board where alumni can post opportunities; exclusive to alumni and current students." },
      { title: "Fundraising Campaigns", description: "Class giving campaigns with progress tracking, donor recognition, and recurring gift management." },
    ],
    whenYouNeedThis: [
      { title: "Alumni Engagement", description: "Lost touch with graduates; need platform to re-engage alumni and build community." },
      { title: "Fundraising Goals", description: "Struggling to reach fundraising targets; need better tools to engage and convert alumni donors." },
      { title: "Career Services", description: "Students want connections to alumni for mentorship and job opportunities; need networking platform." },
    ],
    industries: [
      { title: "Universities", category: "HIGHER ED" },
      { title: "Business Schools", category: "GRADUATE ED" },
      { title: "Independent Schools", category: "K-12" },
    ],
  },

  "admission-portal": {
    title: "Student Admissions Management Platform",
    tagline: "Application processing, document management, decision tracking, and enrollment workflows.",
    tags: ["Admissions", "Enrollment", "Applications", "Student Recruitment"],
    overview:
      "Streamline admissions from inquiry to enrollment. Accept online applications with fee processing, track required documents, coordinate application review, send admission decisions, manage waitlist, collect enrollment deposits, and communicate with applicants—creating professional experience while reducing administrative burden.",
    features: [
      { title: "Online Applications", description: "Customizable application forms with conditional logic, file uploads, payment processing, and recommendation requests." },
      { title: "Application Review", description: "Admissions committee portal with scoring rubrics, notes, collaborative decision-making, and status tracking." },
      { title: "Decision Letters", description: "Automated email of acceptance, waitlist, or rejection letters with personalized content and next steps." },
      { title: "Enrollment Pipeline", description: "Track admitted students through enrollment: deposit paid, forms completed, orientation registered." },
    ],
    whenYouNeedThis: [
      { title: "Paper Applications", description: "Receiving paper applications; difficult to track, review collaboratively, and ensure nothing gets lost." },
      { title: "Applicant Experience", description: "Applicants frustrated by lack of transparency; want portal to check application status." },
      { title: "Enrollment Yield", description: "Low yield from accepted to enrolled students; need better follow-up and engagement during decision period." },
    ],
    industries: [
      { title: "Colleges", category: "HIGHER ED" },
      { title: "Private Schools", category: "K-12" },
      { title: "Graduate Programs", category: "ADVANCED ED" },
    ],
  },

  "learning-analytics": {
    title: "Learning Analytics & Student Success Platform",
    tagline: "Predictive analytics for early intervention with at-risk students using engagement and performance data.",
    tags: ["Learning Analytics", "Student Success", "Early Warning", "Data-Driven"],
    overview:
      "Identify struggling students before it's too late with predictive analytics. Aggregate data from LMS, SIS, and attendance systems; apply machine learning to identify at-risk students; alert advisors and instructors; track intervention effectiveness; and provide dashboards showing factors impacting student success—enabling proactive support.",
    features: [
      { title: "Early Warning System", description: "ML models predict students at risk of failing, dropping out, or not graduating based on engagement patterns." },
      { title: "Intervention Tracking", description: "Document outreach attempts, meeting notes, and support provided; measure impact of interventions." },
      { title: "Engagement Metrics", description: "Track LMS logins, assignment completion, discussion participation, and resource access." },
      { title: "Success Dashboards", description: "Visualize retention rates, course completion, time-to-graduation by program, demographic, and cohort." },
    ],
    whenYouNeedThis: [
      { title: "High Attrition", description: "Students dropping out or failing; by the time problems noticed, too late to intervene effectively." },
      { title: "Data Silos", description: "Have data in LMS, SIS, attendance but no holistic view of student engagement and success." },
      { title: "Accountability", description: "Accreditors or leadership want data on student success initiatives and their effectiveness." },
    ],
    industries: [
      { title: "Community Colleges", category: "HIGHER ED" },
      { title: "Universities", category: "HIGHER ED" },
      { title: "Online Programs", category: "DISTANCE LEARNING" },
    ],
  },
};
