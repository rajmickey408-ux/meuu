import { FeaturePillar, ExamItem, CollegeItem, ScholarshipItem, StudentDocument, PaymentItem, TrackedApplication } from '../types';

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: 'guidance',
    title: 'AI Career Guidance',
    shortDesc: 'Personalized 24/7 AI mentor for stream, degree & high-growth career pathing.',
    iconName: 'Bot',
    badge: 'Gemini 3.6 Flash',
    colorGradient: 'from-cyan-500 to-blue-600',
    highlights: ['Skill & Personality Matrix', 'Salary & Job Demand Forecasts', 'Instant Q&A for Class 10+']
  },
  {
    id: 'stream',
    title: 'Stream Selection',
    shortDesc: 'Interactive diagnostic quiz matching Class 10 students to PCM, PCB, Commerce or Arts.',
    iconName: 'Compass',
    badge: 'Class 10 Special',
    colorGradient: 'from-blue-500 to-indigo-600',
    highlights: ['Subject Aptitude Assessment', 'Future Degree Mapping', 'Career Outcome Predictor']
  },
  {
    id: 'exams',
    title: 'Exam Tracker',
    shortDesc: 'Live countdowns, eligibility checkers & syllabus guides for JEE, NEET, CUET & more.',
    iconName: 'Target',
    badge: 'Real-time Alerts',
    colorGradient: 'from-emerald-400 to-cyan-500',
    highlights: ['Syllabus Breakdown & Weightage', 'Registration Deadlines', 'Previous Cutoff Analytics']
  },
  {
    id: 'colleges',
    title: 'College Finder',
    shortDesc: 'Smart matcher for NIRF-ranked Indian & Global Universities matching your rank.',
    iconName: 'Building2',
    badge: '500+ Top Colleges',
    colorGradient: 'from-indigo-500 to-purple-600',
    highlights: ['Placement Statistics', 'Tier 1 / Tier 2 Categorization', 'Cutoff vs Rank Predictor']
  },
  {
    id: 'scholarships',
    title: 'Scholarships Finder',
    shortDesc: 'Discover national, state & merit-based scholarships worth up to ₹5,00,000.',
    iconName: 'GraduationCap',
    badge: '₹50Cr+ Awarded',
    colorGradient: 'from-violet-500 to-fuchsia-600',
    highlights: ['Auto Eligibility Filter', 'Direct Portal Links', 'Renewal Deadline Reminders']
  },
  {
    id: 'forms',
    title: 'Smart Form Filling',
    shortDesc: 'Auto-fill application forms without errors, category mistakes, or missing info.',
    iconName: 'FileEdit',
    badge: 'Zero Errors',
    colorGradient: 'from-cyan-400 to-teal-500',
    highlights: ['Document Auto-Pull', 'Photo/Signature Resizer', 'Validation Guardrails']
  },
  {
    id: 'documents',
    title: 'Documents Vault',
    shortDesc: 'AES-256 encrypted digital storage for Marksheets, ID proofs, & Certificates.',
    iconName: 'FolderLock',
    badge: 'Secure Vault',
    colorGradient: 'from-blue-400 to-cyan-600',
    highlights: ['Instant AI OCR Verification', 'One-Click Share to Colleges', 'Expiry & Renewal Alerts']
  },
  {
    id: 'payments',
    title: 'Payments & Fee Manager',
    shortDesc: 'Track exam form fees, tuition payments, and application deposits effortlessly.',
    iconName: 'CreditCard',
    badge: 'Smart Finance',
    colorGradient: 'from-teal-400 to-emerald-600',
    highlights: ['Fee Due Date Reminders', 'Split Payment Planner', 'Digital Receipt Archive']
  }
];

export const POPULAR_EXAMS: ExamItem[] = [
  {
    id: 'jee-main',
    name: 'JEE Main 2025',
    fullName: 'Jan 24 - Feb 1, 2025',
    category: 'Engineering Entrance Exam',
    date: 'Jan 24 - Feb 1, 2025',
    daysLeft: 32,
    eligibility: 'Class 12 with Physics, Chemistry, Math',
    stream: 'Engineering (PCM)',
    regStatus: 'Open',
    officialUrl: 'https://jeemain.nta.nic.in'
  },
  {
    id: 'jee-advanced',
    name: 'JEE Advanced 2025',
    fullName: 'May 18, 2025',
    category: 'IIT Entrance Exam',
    date: 'May 18, 2025',
    daysLeft: 146,
    eligibility: 'Top 2,50,000 qualifiers in JEE Main',
    stream: 'Engineering (PCM)',
    regStatus: 'Upcoming',
    officialUrl: 'https://jeeadv.ac.in'
  },
  {
    id: 'bitsat',
    name: 'BITSAT 2025',
    fullName: 'May - Jun 2025',
    category: 'Private Tech University Exam',
    date: 'May - Jun 2025',
    daysLeft: 172,
    eligibility: 'Class 12 PCM with min 75% aggregate',
    stream: 'Engineering & Sciences',
    regStatus: 'Upcoming',
    officialUrl: 'https://bitsadmission.com'
  },
  {
    id: 'viteee',
    name: 'VITEEE 2025',
    fullName: 'Apr 20 - 30, 2025',
    category: 'Engineering Entrance Exam',
    date: 'Apr 20 - 30, 2025',
    daysLeft: 120,
    eligibility: 'Class 12 with min 60% aggregate',
    stream: 'Engineering',
    regStatus: 'Open',
    officialUrl: 'https://viteee.vit.ac.in'
  }
];

export const FEATURED_COLLEGES: CollegeItem[] = [
  {
    id: 'iit-delhi',
    name: 'IIT Delhi',
    location: 'New Delhi, Delhi',
    type: 'B.Tech',
    stream: 'Engineering',
    ranking: '#2 NIRF',
    avgPackage: '₹22.5 LPA',
    fees: '₹2.3 L / Year',
    cutoffScore: 'JEE Adv Rank 1-300',
    rating: 4.7
  },
  {
    id: 'vit-vellore',
    name: 'VIT Vellore',
    location: 'Vellore, Tamil Nadu',
    type: 'B.Tech',
    stream: 'Engineering',
    ranking: '#11 NIRF',
    avgPackage: '₹9.2 LPA',
    fees: '₹2.2 L / Year',
    cutoffScore: 'VITEEE Rank 1-20000',
    rating: 4.6
  },
  {
    id: 'dtu-delhi',
    name: 'DTU (Delhi Tech)',
    location: 'New Delhi, Delhi',
    type: 'B.Tech',
    stream: 'Engineering',
    ranking: '#29 NIRF',
    avgPackage: '₹15.4 LPA',
    fees: '₹1.8 L / Year',
    cutoffScore: 'JEE Main Rank 1-12000',
    rating: 4.5
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani',
    location: 'Pilani, Rajasthan',
    type: 'B.E. / B.Tech',
    stream: 'Engineering',
    ranking: '#7 Private',
    avgPackage: '₹20.8 LPA',
    fees: '₹4.5 L / Year',
    cutoffScore: 'BITSAT Score 310+',
    rating: 4.8
  }
];

export const SCHOLARSHIPS_LIST: ScholarshipItem[] = [
  {
    id: 'national-merit',
    title: 'National Merit Scholarship',
    provider: 'For 10th - 12th Students',
    amount: '₹25,000',
    deadline: '2026-10-31',
    eligibility: 'Class 10 students with 80%+ marks & income < ₹3.5L',
    category: 'Merit Based',
    applyUrl: 'https://scholarships.gov.in'
  },
  {
    id: 'inspire-scholarship',
    title: 'INSPIRE Scholarship',
    provider: 'For Science Students',
    amount: '₹80,000',
    deadline: '2026-11-15',
    eligibility: 'Top 1% in Class 12 Board Exams pursuing Science',
    category: 'Merit Science',
    applyUrl: 'https://online-inspire.gov.in'
  },
  {
    id: 'saksham-scholarship',
    title: 'Saksham Scholarship',
    provider: 'For Differently Abled Students',
    amount: '₹50,000',
    deadline: '2026-12-01',
    eligibility: 'Differently abled students pursuing technical education',
    category: 'Need Based',
    applyUrl: 'https://aicte-india.org'
  },
  {
    id: 'cbse-single-girl',
    title: 'CBSE Single Girl Child',
    provider: 'For Single Girl Child Students',
    amount: '₹50,000',
    deadline: '2026-10-15',
    eligibility: 'Single girl child scoring 60%+ in Class 10 CBSE',
    category: 'Govt.',
    applyUrl: 'https://cbse.gov.in'
  }
];

export const INITIAL_DOCUMENTS: StudentDocument[] = [
  {
    id: 'doc-1',
    title: '10th Marksheet',
    category: 'Marksheet',
    fileName: 'CBSE_10th_Marksheet.pdf',
    uploadDate: '2026-07-20',
    status: 'Verified',
    size: '1.4 MB'
  },
  {
    id: 'doc-2',
    title: 'Passport Photo',
    category: 'Photo',
    fileName: 'Student_Photo_NTA.jpg',
    uploadDate: '2026-07-22',
    status: 'Verified',
    size: '450 KB'
  },
  {
    id: 'doc-3',
    title: 'Digital Signature',
    category: 'Signature',
    fileName: 'Student_Signature.png',
    uploadDate: '2026-07-25',
    status: 'Verified',
    size: '120 KB'
  },
  {
    id: 'doc-4',
    title: 'Aadhaar Card',
    category: 'Identity',
    fileName: 'Aadhaar_ID_Verified.pdf',
    uploadDate: '2026-07-28',
    status: 'Verified',
    size: '980 KB'
  }
];

export const INITIAL_PAYMENTS: PaymentItem[] = [
  {
    id: 'pay-1',
    title: 'JEE Main 2025 Application',
    category: 'Entrance Exam Fee',
    amount: 1000,
    dueDate: '2025-01-15',
    status: 'Pending'
  },
  {
    id: 'pay-2',
    title: 'Processing Fee',
    category: 'Portal Service',
    amount: 50,
    dueDate: '2025-01-15',
    status: 'Pending'
  }
];

export const INITIAL_TRACKED_APPLICATIONS: TrackedApplication[] = [
  {
    id: 'app-1',
    title: 'JEE Main 2025',
    category: 'Engineering Entrance Exam',
    submittedDate: 'May 13, 2025',
    status: 'Submitted',
    statusColor: 'emerald',
    notes: 'Application Submitted successfully. Download confirmation page.'
  },
  {
    id: 'app-2',
    title: 'VITEEE 2025',
    category: 'Engineering Entrance Exam',
    submittedDate: 'May 12, 2025',
    status: 'In Review',
    statusColor: 'amber',
    notes: 'Payment Completed. Document verification under review by university.'
  },
  {
    id: 'app-3',
    title: 'DTU B.Tech Admission',
    category: 'College Admission',
    submittedDate: 'May 10, 2025',
    status: 'In Progress',
    statusColor: 'blue',
    notes: 'Form saved in draft. Pending final choice filling submission.'
  }
];
