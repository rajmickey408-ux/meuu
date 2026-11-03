import { SmartNotification } from '../types';

export const INITIAL_SMART_NOTIFICATIONS: SmartNotification[] = [
  {
    id: 'notif-1',
    title: 'JoSAA 2025 Choice Filling Opens Tomorrow!',
    description: 'Centralized counselling registration and choice locking for IITs, NITs, and IIITs starts tomorrow at 10:00 AM.',
    category: 'Counselling',
    timestamp: '10 minutes ago',
    isRead: false,
    priority: 'high',
    actionTab: 'counseling',
    badgeText: 'Action Required'
  },
  {
    id: 'notif-2',
    title: 'Payment Due: JoSAA Seat Acceptance Deposit',
    description: 'Your seat acceptance deposit of ₹35,000 for Round 1 is due in 24 hours to secure your allotted branch.',
    category: 'Payment Due',
    timestamp: '1 hour ago',
    isRead: false,
    priority: 'high',
    actionTab: 'payments',
    badgeText: '₹35,000 Due'
  },
  {
    id: 'notif-3',
    title: 'JEE Main 2025 Session 2 Exam Date Announced',
    description: 'NTA has officially published the exam dates schedule for JEE Main Session 2 starting April 04, 2025.',
    category: 'Exam Dates',
    timestamp: '3 hours ago',
    isRead: false,
    priority: 'medium',
    actionTab: 'exams',
    badgeText: 'Official Schedule'
  },
  {
    id: 'notif-4',
    title: 'Document Expiry Warning: Income Certificate',
    description: 'Your financial year Income Certificate expires on March 31. Renew it now to maintain scholarship & fee waiver eligibility.',
    category: 'Document Expiry',
    timestamp: '5 hours ago',
    isRead: false,
    priority: 'high',
    actionTab: 'documents',
    badgeText: 'Renewal Needed'
  },
  {
    id: 'notif-5',
    title: 'AI Recommendation: 3 Safe College Options Unlocked',
    description: 'Based on your JEE Main score of 98.4 percentile, MEUU AI recommends adding DTU Computer Engineering & IIIT Allahabad IT.',
    category: 'AI Recommendations',
    timestamp: 'Yesterday',
    isRead: true,
    priority: 'medium',
    actionTab: 'colleges',
    badgeText: '98.4% Match'
  },
  {
    id: 'notif-6',
    title: 'Registration Deadline: Central Sector Scholarship (CSSS)',
    description: 'Application portal for Central Sector Scholarship (₹12,000/yr) closes in 3 days. Submit before October 31.',
    category: 'Scholarships',
    timestamp: 'Yesterday',
    isRead: true,
    priority: 'medium',
    actionTab: 'scholarships',
    badgeText: '3 Days Left'
  },
  {
    id: 'notif-7',
    title: 'Application Deadline: COMEDK UGET Registration',
    description: 'Last date to submit COMEDK UGET online form for 190+ Karnataka engineering colleges.',
    category: 'Registration Deadlines',
    timestamp: '2 days ago',
    isRead: true,
    priority: 'high',
    actionTab: 'forms',
    badgeText: 'Closing Soon'
  },
  {
    id: 'notif-8',
    title: 'Latest Education Update: NTA Modifies Normalization Formula',
    description: 'Ministry of Education releases updated percentile calculation guidelines for multi-session national entrance exams.',
    category: 'Latest Education Updates',
    timestamp: '3 days ago',
    isRead: true,
    priority: 'low',
    actionTab: 'home',
    badgeText: 'Policy Update'
  }
];
