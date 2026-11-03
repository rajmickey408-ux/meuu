export type ScreenStep = 1 | 2 | 3 | 'dashboard';

export type AppViewMode = 'interactive' | 'bento-showcase';

export type ActiveTab = 
  | 'home'
  | 'careers'
  | 'chat'
  | 'stream'
  | 'exams'
  | 'colleges'
  | 'counseling'
  | 'scholarships'
  | 'forms'
  | 'payments'
  | 'applications'
  | 'documents'
  | 'profile';

export interface UserProfile {
  name: string;
  email: string;
  phone?: string;
  currentClass: string;
  preferredStream?: string;
  targetCity?: string;
  avatarUrl?: string;
  tenthPercentage?: number;
  journeyProgress?: number;
  completedSteps?: number;
  totalSteps?: number;
  completionPercentage?: number;
  targetExam?: string;
  dreamCollege?: string;
  preferredBranch?: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  twoFactorEnabled?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface FeaturePillar {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge: string;
  colorGradient: string;
  highlights: string[];
}

export interface DetailedExam {
  id: string;
  name: string;
  fullName: string;
  category: string;
  stream: 'Science PCM' | 'Science PCB' | 'PCMB' | 'Commerce' | 'Arts' | 'Diploma' | 'Polytechnic' | 'Other Career Paths';
  overview: string;
  eligibility: string;
  registrationDate: string;
  lastDate: string;
  examDate: string;
  targetExamIsoDate: string; // ISO date for countdown calculation
  regStatus: 'Open' | 'Upcoming' | 'Closed';
  officialWebsite: string;
  syllabus: { subject: string; topics: string[] }[];
  pattern: {
    mode: string;
    duration: string;
    totalMarks: number | string;
    questionCount: number | string;
    markingScheme: string;
  };
  previousYearCutoff: { categoryOrBranch: string; cutoffValue: string }[];
  difficulty: 'Easy' | 'Moderate' | 'High' | 'Extreme';
  acceptedColleges: string[];
  preparationStrategy: string[];
  faqs: { question: string; answer: string }[];
  isSaved?: boolean;
  isNotified?: boolean;
}

export interface RoadmapStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  keyMilestones: string[];
  exams?: string[];
  counselingPortals?: string[];
  colleges?: string[];
  iconName: string;
}

export interface StreamRoadmap {
  id: string;
  title: 'Science PCM' | 'Science PCB' | 'PCMB' | 'Commerce' | 'Arts' | 'Diploma' | 'Polytechnic' | 'Other Career Paths';
  shortName: string;
  badge: string;
  matchPercentage: number;
  colorGradient: string;
  borderColor: string;
  description: string;
  whyChoose: string[];
  steps: RoadmapStep[];
  careerOutcomes: { role: string; avgPackage: string; growthRate: string }[];
  keyExams: string[];
  recommendedColleges: string[];
}

export interface ExamItem {
  id: string;
  name: string;
  fullName: string;
  category: string;
  date: string;
  daysLeft: number;
  eligibility: string;
  stream: string;
  regStatus: 'Open' | 'Upcoming' | 'Closed';
  officialUrl: string;
}

export interface CollegeItem {
  id: string;
  name: string;
  location: string;
  type: string;
  stream: string;
  ranking: string;
  avgPackage: string;
  fees: string;
  cutoffScore: string;
  rating: number;
}

export type OwnershipType = 'Government' | 'Private';

export type UniversityType = 
  | 'IIT' 
  | 'NIT' 
  | 'IIIT' 
  | 'Central University' 
  | 'State Government' 
  | 'Deemed University' 
  | 'Private University'
  | 'Medical Institute (AIIMS/JIPMER)'
  | 'Law University (NLU)';

export interface CutoffData {
  examName: string;
  branch: string;
  category: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';
  year: number;
  openingRank: number;
  closingRank: number;
  scoreRequired?: number;
}

export interface SeatMatrixData {
  branch: string;
  totalSeats: number;
  remainingSeats: number;
  categorySeats: { category: string; count: number }[];
}

export interface StudentReviewData {
  rating: number;
  totalReviews: number;
  ratingBreakdown: { 5: number; 4: number; 3: number; 2: number; 1: number };
  pros: string[];
  cons: string[];
  reviewsList: {
    id: string;
    author: string;
    branch: string;
    batch: string;
    rating: number;
    title: string;
    comment: string;
    date: string;
  }[];
}

export interface CampusFacility {
  name: string;
  iconName: string;
  description: string;
}

export interface VirtualCampusHotspot {
  name: string;
  description: string;
  imageUrl: string;
}

export interface DetailedCollege {
  id: string;
  name: string;
  shortName: string;
  ownership: OwnershipType;
  universityType: UniversityType;
  establishedYear: number;
  accreditation: string;
  photos: string[];
  overview: string;
  ranking: {
    nirfOverall: number | string;
    nirfStream: number | string;
    qsWorld?: string;
    outlook?: string;
    indiaToday?: string;
  };
  location: {
    city: string;
    state: string;
    address: string;
    campusAreaAcres: number;
  };
  courses: string[];
  branches: string[];
  fees: {
    annualTuition: string;
    annualTuitionAmount: number; // for numeric sorting/filtering
    totalCourseFee: string;
    feeTier: '< ₹1 Lakh' | '₹1-3 Lakhs' | '₹3-5 Lakhs' | '> ₹5 Lakhs';
  };
  hostelFees: {
    hasHostel: boolean;
    annualHostelFee: string;
    annualHostelFeeAmount: number;
    messCharges: string;
    acAvailable: boolean;
    roomTypes: string[];
  };
  placements: {
    highestPackage: string;
    highestPackageLpa: number;
    averagePackage: string;
    averagePackageLpa: number;
    medianPackage: string;
    placementPercentage: number;
    topRecruiters: string[];
  };
  campusFacilities: CampusFacility[];
  studentReviews: StudentReviewData;
  pros: string[];
  cons: string[];
  officialWebsite: string;
  previousYearCutoffs: CutoffData[];
  admissionProcess: { step: number; title: string; description: string }[];
  seatMatrix: SeatMatrixData[];
  scholarships: { title: string; eligibility: string; benefit: string; provider: string }[];
  virtualCampusTour: {
    tourTitle: string;
    previewImage: string;
    hotspots: VirtualCampusHotspot[];
  };
  applicationDeadline: string; // ISO or formatted date string
  counsellingRequired: string; // JoSAA, CSAB, MCC, JAC Delhi, COMEDK, REAP, MHT-CET, etc.
  supportedExams: string[]; // ['JEE Main', 'JEE Advanced', 'BITSAT', 'CUET', 'NEET', 'WBJEE', 'COMEDK', 'MHT-CET', 'KCET', 'GATE', 'CAT', 'CLAT']
  applyUrl?: string;
}

export type CategoryType = 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';

export interface ExamScoreInput {
  exam: 'JEE Main' | 'JEE Advanced' | 'BITSAT' | 'CUET' | 'NEET' | 'WBJEE' | 'MHT-CET' | 'COMEDK' | 'KCET' | 'CAT' | 'CLAT';
  rankOrScore: number; // Rank for rank-based, score for BITSAT/CUET
  category: CategoryType;
  homeState: string;
  targetBranch?: string;
}

export interface CollegeRecommendation {
  college: DetailedCollege;
  tier: 'Dream' | 'Target' | 'Safe';
  probabilityPercent: number; // e.g. 88
  openingRank: number | string;
  closingRank: number | string;
  matchedBranch: string;
  matchedExam: string;
  remainingSeats: number;
  applicationDeadline: string;
  counsellingRequired: string;
}

export interface CollegeFilterState {
  searchQuery: string;
  selectedState: string;
  maxAnnualFee: number; // e.g., 600000 (6 Lakhs)
  selectedBranch: string;
  hostelRequired: boolean;
  minAvgPlacementLpa: number; // e.g., 0, 5, 10, 15, 20
  ownership: 'All' | 'Government' | 'Private';
  universityType: 'All' | UniversityType;
  categoryFilter: 'All' | 'Dream' | 'Target' | 'Safe';
  sortBy: 'probability' | 'nirf' | 'placement' | 'feesLowToHigh';
}

export interface ScholarshipItem {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  category: string;
  applyUrl: string;
}

export interface StudentDocument {
  id: string;
  title: string;
  category: 'Marksheet' | 'Identity' | 'Certificate' | 'Income' | 'Photo' | 'Signature';
  fileName: string;
  uploadDate: string;
  status: 'Verified' | 'Pending AI Audit' | 'Uploaded';
  size: string;
}

export interface PaymentItem {
  id: string;
  title: string;
  category: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Upcoming';
  receiptId?: string;
}

export interface TrackedApplication {
  id: string;
  title: string;
  category: string;
  submittedDate: string;
  status: 'Submitted' | 'In Review' | 'In Progress' | 'Admitted';
  statusColor: 'emerald' | 'amber' | 'blue' | 'cyan';
  notes: string;
}

export interface CounselingPortal {
  id: string;
  name: string; // e.g. JoSAA, CSAB, UPTAC, COMEDK, MHT CET, WBJEE, KCET, MCC, State Counselling
  fullName: string;
  badge: string;
  logo: string;
  description: string;
  targetExams: string[];
  participatingColleges: string;
  eligibility: string;
  registration: {
    steps: string[];
    fee: string;
    url: string;
    status: 'Open' | 'Upcoming' | 'Closed';
    lastDate: string;
  };
  requiredDocuments: string[];
  importantDates: { event: string; date: string; isHot?: boolean }[];
  choiceFilling: {
    strategy: string;
    maxChoices: string;
    mockSeatAllotmentDate: string;
    lockDeadline: string;
    tips: string[];
  };
  seatAllotment: {
    roundsCount: number;
    allotmentMethod: string;
    checkResultUrl: string;
    prevYearCutoffsUrl: string;
  };
  feePayment: {
    seatAcceptanceFee: string;
    paymentModes: string[];
    refundPolicy: string;
  };
  reporting: {
    mode: string;
    instructions: string[];
    requiredOriginals: string[];
  };
  faqs: { question: string; answer: string }[];
}

export interface FullScholarshipItem {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  officialWebsite: string;
  eligibility: string;
  requiredDocuments: string[];
  state: string; // e.g., 'All India', 'Delhi', 'Maharashtra', 'Karnataka', 'UP', 'West Bengal', etc.
  category: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'All';
  gender: 'Male' | 'Female' | 'Single Girl Child' | 'All';
  incomeLimit: string;
  classTarget: 'Class 10' | 'Class 11' | 'Class 12' | 'Undergraduate (B.Tech/MBBS)' | 'All';
  stream: 'Science PCM' | 'Science PCB' | 'Commerce' | 'Arts' | 'All';
  applyUrl: string;
  badge?: string;
}

export interface ScholarshipFilterState {
  searchQuery: string;
  state: string;
  category: string;
  gender: string;
  income: string;
  classTarget: string;
  stream: string;
}

export interface PaymentRecord {
  id: string;
  title: string;
  type: 'Application Fee' | 'Counselling Fee' | 'College Fee';
  collegeOrExam: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Processing';
  receiptId?: string;
  paymentMethod?: string;
  transactionRef?: string;
  breakdown: { label: string; amount: number }[];
}

export interface SmartNotification {
  id: string;
  title: string;
  description: string;
  category:
    | 'Exam Dates'
    | 'Registration Deadlines'
    | 'Application Deadlines'
    | 'Counselling'
    | 'Scholarships'
    | 'Document Expiry'
    | 'Payment Due'
    | 'AI Recommendations'
    | 'Latest Education Updates';
  timestamp: string;
  isRead: boolean;
  priority: 'high' | 'medium' | 'low';
  actionTab?: ActiveTab;
  badgeText?: string;
}

// 🚀 Career Advancement & Training & Placement Types

export interface IndustryTrend {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  gradient: string;
  iconName: string;
  whyItMatters: string;
  whatStudentsShouldLearn: string[];
  howToStart: string[];
  recommendedProjects: {
    title: string;
    description: string;
    techStack: string[];
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  }[];
  relatedCareerRoles: {
    role: string;
    description: string;
  }[];
  marketData: {
    stat: string;
    source: string;
    date: string;
    notes?: string;
  };
}

export type IndustryVoiceCategory =
  | 'All'
  | 'CEO Insights'
  | 'Founder Stories'
  | 'Recruiter Insights'
  | 'Engineer Experiences'
  | 'Startup & Entrepreneurship'
  | 'Future of Work'
  | 'AI & Industry';

export interface IndustryVoice {
  id: string;
  speaker: string;
  role: string;
  companyOrOrg: string;
  avatarUrl?: string;
  category: IndustryVoiceCategory;
  topic: string;
  quoteOrInsight: string;
  keyTakeaway: string;
  source: string;
  sourceUrl?: string;
  date?: string;
  isDirectQuote: boolean; // false = clearly marked as "Industry Insight" (AI-generated / generalized)
}

export interface StageResourceLink {
  title: string;
  url: string;
  source: string;
  tag: string;
}

export interface StartupStage {
  id: string;
  stageNumber: number;
  name: string;
  shortDesc: string;
  objectives: string[];
  actionSteps: string[];
  commonPitfalls: string[];
  recommendedTools: string[];
  milestoneCheck: string;
  milestoneChecklist: string[];
  keyDeliverables: string[];
  kpiMetrics: string[];
  resourceLinks: StageResourceLink[];
}

export interface StartupResource {
  id: string;
  type: 'Hackathon' | 'Incubator' | 'Competition' | 'Pitch Opportunity' | 'Founder Resource' | 'Government Grant';
  title: string;
  organization: string;
  description: string;
  linkText: string;
  url: string;
  eligibilityOrDeadline?: string;
  grantAmountOrPerk?: string;
  isDemoData: boolean;
}

export type OpportunityCategory =
  | 'Internships'
  | 'Jobs'
  | 'Placements'
  | 'Hackathons'
  | 'Competitions'
  | 'Scholarships'
  | 'Fellowships'
  | 'Startup Opportunities';

export type OpportunityStatus =
  | 'Saved'
  | 'Applied'
  | 'Assessment'
  | 'Interview'
  | 'Selected'
  | 'Rejected';

export interface CareerOpportunity {
  id: string;
  title: string;
  companyOrOrg: string;
  category: OpportunityCategory;
  type: string; // e.g., 'Full-time', 'Summer 2025 Internship', 'Virtual Hackathon'
  location: string;
  stipendOrSalary: string;
  deadline: string;
  daysRemaining?: number;
  status: OpportunityStatus;
  applyUrl: string;
  skillsRequired: string[];
  description: string;
  isDemoData: boolean; // Must be true for demo data
}

export interface TimelineStep {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  relatedTab?: ActiveTab;
}


