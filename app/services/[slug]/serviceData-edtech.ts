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
};
