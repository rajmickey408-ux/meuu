import { DetailedCollege, CutoffData, ExamScoreInput, CollegeRecommendation, CollegeFilterState } from '../types';

export const ALL_INDIAN_STATES = [
  'All States',
  'Delhi',
  'Maharashtra',
  'Karnataka',
  'Tamil Nadu',
  'Telangana',
  'West Bengal',
  'Uttar Pradesh',
  'Rajasthan',
  'Punjab',
  'Gujarat',
  'Kerala',
  'Andhra Pradesh',
  'Madhya Pradesh',
  'Haryana',
  'Odisha',
  'Bihar',
  'Assam',
  'Jharkhand',
  'Uttarakhand',
  'Himachal Pradesh'
];

export const POPULAR_BRANCHES = [
  'All Branches',
  'Computer Science & Engineering (CSE)',
  'Artificial Intelligence & Data Science',
  'Electronics & Communication (ECE)',
  'Electrical & Electronics (EEE)',
  'Mechanical Engineering',
  'Civil Engineering',
  'Aerospace Engineering',
  'Biotechnology / Bioengineering',
  'Chemical Engineering',
  'MBBS / Medical Sciences',
  'B.Com (Hons) / Finance',
  'BBA / Business Administration',
  'BA LLB (Hons) / Law',
  'B.Sc Economics / Statistics'
];

export const DETAILED_COLLEGES_DATABASE: DetailedCollege[] = [
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay (IITB)',
    shortName: 'IIT Bombay',
    ownership: 'Government',
    universityType: 'IIT',
    establishedYear: 1958,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    photos: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'IIT Bombay is recognized worldwide as a leader in engineering education and research. Situated in Powai, Mumbai, it boasts state-of-the-art incubation hubs (SINE), world-class computing facilities, and an unmatched alumni network with tech leaders, startup founders, and global researchers.',
    ranking: {
      nirfOverall: 3,
      nirfStream: 3,
      qsWorld: '#149 Global QS World',
      outlook: '#1 Tech Institute',
      indiaToday: '#1 Engineering'
    },
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Main Gate Rd, IIT Area, Powai, Mumbai, Maharashtra 400076',
      campusAreaAcres: 550
    },
    courses: ['B.Tech', 'Dual Degree (B.Tech + M.Tech)', 'B.Des', 'M.Tech', 'M.Sc', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'Electrical Engineering',
      'Mechanical Engineering',
      'Aerospace Engineering',
      'Chemical Engineering',
      'Civil Engineering',
      'Metallurgical & Materials Engineering'
    ],
    fees: {
      annualTuition: '₹2,24,000 / Year',
      annualTuitionAmount: 224000,
      totalCourseFee: '₹8,96,000 (4 Years)',
      feeTier: '₹1-3 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹34,000 / Year',
      annualHostelFeeAmount: 34000,
      messCharges: '₹27,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Occupancy (Final Years)', 'Double Sharing (1st & 2nd Year)', 'AC Research Hostels']
    },
    placements: {
      highestPackage: '₹3.67 Crore PA (International)',
      highestPackageLpa: 367,
      averagePackage: '₹23.5 LPA',
      averagePackageLpa: 23.5,
      medianPackage: '₹19.2 LPA',
      placementPercentage: 98.4,
      topRecruiters: ['Google US', 'Jane Street', 'Microsoft Redmond', 'Apple', 'Texas Instruments', 'Qualcomm', 'McKinsey & Co', 'Goldman Sachs']
    },
    campusFacilities: [
      { name: 'Central Library', iconName: 'Library', description: 'Over 5,00,000 books, journals, and 24/7 digital reading halls.' },
      { name: 'NVidia AI Supercomputer', iconName: 'Cpu', description: 'Advanced GPU cluster dedicated to Deep Learning & Quantum Sim.' },
      { name: 'SINE Incubation Center', iconName: 'Rocket', description: 'Nurtured 200+ tech startups raising over $500M in venture capital.' },
      { name: 'Olympic Sports Complex', iconName: 'Activity', description: 'Floodlit football field, indoor badminton, swimming pool & squash.' },
      { name: 'Hostel Mess & Cafeterias', iconName: 'Coffee', description: 'Multi-cuisine mess council, CCD, Nescafe, and Powai lake view cafes.' }
    ],
    studentReviews: {
      rating: 4.9,
      totalReviews: 1240,
      ratingBreakdown: { 5: 1100, 4: 110, 3: 20, 2: 7, 1: 3 },
      pros: [
        'Top-tier peer group in Asia with 100% meritocratic environment',
        'Exceptional international research and exchange opportunities',
        'Unrivaled campus life, Techfest, and Mood Indigo cultural fest',
        'Strongest alumni network across Silicon Valley and Wall Street'
      ],
      cons: [
        'Highly competitive academic grading curve',
        'Powai monsoon weather gets heavily humid during July-August'
      ],
      reviewsList: [
        {
          id: 'rev-1',
          author: 'Aarav Sharma',
          branch: 'CSE',
          batch: '2021-2025',
          rating: 5,
          title: 'The pinnacle of tech education in India',
          comment: 'Studying CSE at IIT Bombay completely transformed my problem-solving mindset. Peer learning here is phenomenal, and professors encourage patenting innovative ideas.',
          date: '2026-03-15'
        },
        {
          id: 'rev-2',
          author: 'Ananya Deshmukh',
          branch: 'Electrical Engineering',
          batch: '2022-2026',
          rating: 5,
          title: 'Unbelievable exposure and industry connections',
          comment: 'Got selected for an exchange program at ETH Zurich in 3rd year. Placements and internships are top-notch with high international offers.',
          date: '2026-01-20'
        }
      ]
    },
    pros: [
      'Ranked #1 for Engineering placement packages in India',
      'Powai campus surrounded by lake & greenery',
      'Over 98% placement rate consistently'
    ],
    cons: [
      'Extreme cutoff required (Top 65 rank in JEE Advanced for CSE)',
      'Competitive relative grading pressure'
    ],
    officialWebsite: 'https://www.iitb.ac.in',
    previousYearCutoffs: [
      { examName: 'JEE Advanced', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 1, closingRank: 68 },
      { examName: 'JEE Advanced', branch: 'Computer Science & Engineering (CSE)', category: 'OBC', year: 2024, openingRank: 10, closingRank: 42 },
      { examName: 'JEE Advanced', branch: 'Electrical Engineering', category: 'General', year: 2024, openingRank: 120, closingRank: 480 },
      { examName: 'JEE Advanced', branch: 'Mechanical Engineering', category: 'General', year: 2024, openingRank: 600, closingRank: 1750 },
      { examName: 'JEE Advanced', branch: 'Aerospace Engineering', category: 'General', year: 2024, openingRank: 1100, closingRank: 2600 }
    ],
    admissionProcess: [
      { step: 1, title: 'Appear for JEE Main', description: 'Score in the top 2.5 Lakh candidates to qualify for JEE Advanced.' },
      { step: 2, title: 'Crack JEE Advanced', description: 'Achieve an All India Rank (AIR) in JEE Advanced matching required cutoff.' },
      { step: 3, title: 'JoSAA / CSAB Counselling', description: 'Fill choices on the JoSAA portal selecting IIT Bombay as preference.' },
      { step: 4, title: 'Seat Allotment & Document Verification', description: 'Accept seat, pay acceptance fee, and upload certificates for online verification.' }
    ],
    seatMatrix: [
      {
        branch: 'Computer Science & Engineering (CSE)',
        totalSeats: 180,
        remainingSeats: 12,
        categorySeats: [{ category: 'General', count: 72 }, { category: 'OBC', count: 48 }, { category: 'SC', count: 27 }, { category: 'ST', count: 14 }, { category: 'EWS', count: 19 }]
      },
      {
        branch: 'Electrical Engineering',
        totalSeats: 150,
        remainingSeats: 18,
        categorySeats: [{ category: 'General', count: 60 }, { category: 'OBC', count: 40 }, { category: 'SC', count: 22 }, { category: 'ST', count: 12 }, { category: 'EWS', count: 16 }]
      },
      {
        branch: 'Mechanical Engineering',
        totalSeats: 160,
        remainingSeats: 25,
        categorySeats: [{ category: 'General', count: 64 }, { category: 'OBC', count: 43 }, { category: 'SC', count: 24 }, { category: 'ST', count: 12 }, { category: 'EWS', count: 17 }]
      }
    ],
    scholarships: [
      { title: 'Merit-cum-Means (MCM) Scholarship', eligibility: 'Parental income < ₹5 Lakhs/year', benefit: '100% Tuition Fee Waiver + ₹1,000/month pocket allowance', provider: 'IIT Bombay Trust' },
      { title: 'Free Basic Mess Facility', eligibility: 'SC/ST candidates with income < ₹4.5 Lakhs', benefit: 'Free mess and hostel accommodation', provider: 'Government of India' }
    ],
    virtualCampusTour: {
      tourTitle: '360° Virtual Walkthrough - Powai Lake & Academic Corridor',
      previewImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { name: 'Main Academic Building (MAB)', description: 'Iconic foyer and administrative towers surrounded by palm trees.', imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80' },
        { name: 'Central Library & Reading Hall', description: 'Spacious air-conditioned multi-storey learning complex.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80' },
        { name: 'Powai Lake Promenade', description: 'Serene lakeside walking area inside campus for students.', imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    applicationDeadline: '2026-06-25',
    counsellingRequired: 'JoSAA / CSAB 2026',
    supportedExams: ['JEE Advanced'],
    applyUrl: 'https://josaa.nic.in'
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi (IITD)',
    shortName: 'IIT Delhi',
    ownership: 'Government',
    universityType: 'IIT',
    establishedYear: 1961,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    photos: [
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'IIT Delhi is located in Hauz Khas, New Delhi. Renowned for cutting-edge technology, AI centers, research partnerships with global corporates, and proximity to national decision makers and startup unicorns.',
    ranking: {
      nirfOverall: 2,
      nirfStream: 2,
      qsWorld: '#150 Global QS World',
      indiaToday: '#2 Engineering'
    },
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Hauz Khas, New Delhi, Delhi 110016',
      campusAreaAcres: 320
    },
    courses: ['B.Tech', 'Dual Degree', 'M.Tech', 'M.Sc', 'M.Des', 'MBA', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'Artificial Intelligence & Data Science',
      'Electrical Engineering',
      'Mathematics & Computing',
      'Mechanical Engineering',
      'Chemical Engineering',
      'Textile & Fibre Engineering'
    ],
    fees: {
      annualTuition: '₹2,30,000 / Year',
      annualTuitionAmount: 230000,
      totalCourseFee: '₹9,20,000 (4 Years)',
      feeTier: '₹1-3 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹36,000 / Year',
      annualHostelFeeAmount: 36000,
      messCharges: '₹28,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Hostel', 'Double Hostel', 'International Student Residence']
    },
    placements: {
      highestPackage: '₹2.40 Crore PA',
      highestPackageLpa: 240,
      averagePackage: '₹22.5 LPA',
      averagePackageLpa: 22.5,
      medianPackage: '₹18.5 LPA',
      placementPercentage: 97.8,
      topRecruiters: ['Microsoft', 'Google', 'Tower Research', 'Optiver', 'Uber', 'Amazon', 'Rubrik', 'Intel']
    },
    campusFacilities: [
      { name: 'School of AI (ScAI)', iconName: 'Brain', description: 'Dedicated AI & Machine Learning research center funded by industry leaders.' },
      { name: 'Central Research Facility', iconName: 'Microscope', description: 'High-end analytical instruments, electron microscopes, & clean rooms.' },
      { name: 'Yardi School of Health Sciences', iconName: 'Activity', description: 'Biomedical engineering research and startup incubator.' }
    ],
    studentReviews: {
      rating: 4.8,
      totalReviews: 980,
      ratingBreakdown: { 5: 850, 4: 100, 3: 20, 2: 7, 1: 3 },
      pros: [
        'Unmatched location advantage in heart of South Delhi',
        'Top Mathematics & Computing and CSE programs',
        'Vibrant startup culture with Foundation for Innovation & Tech Transfer'
      ],
      cons: [
        'Delhi winter smog during November-December'
      ],
      reviewsList: [
        {
          id: 'rev-3',
          author: 'Rohan Gupta',
          branch: 'Mathematics & Computing',
          batch: '2021-2025',
          rating: 5,
          title: 'Best place for Quant and AI enthusiasts',
          comment: 'MnC at IIT Delhi is insane for algorithmic trading and machine learning. Quant firms recruit heavily from here.',
          date: '2026-02-10'
        }
      ]
    },
    pros: [
      'Top 2 rank in NIRF Engineering category',
      'High density of startup incubators and VC connections',
      'Very high placement packages across tech and quant'
    ],
    cons: [
      'Demanding academic curriculum',
      'Hostel allotment rules are strict for 1st year'
    ],
    officialWebsite: 'https://home.iitd.ac.in',
    previousYearCutoffs: [
      { examName: 'JEE Advanced', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 15, closingRank: 115 },
      { examName: 'JEE Advanced', branch: 'Mathematics & Computing', category: 'General', year: 2024, openingRank: 120, closingRank: 310 },
      { examName: 'JEE Advanced', branch: 'Electrical Engineering', category: 'General', year: 2024, openingRank: 280, closingRank: 620 }
    ],
    admissionProcess: [
      { step: 1, title: 'JEE Main Qualification', description: 'Top percentile candidates qualify for JEE Advanced.' },
      { step: 2, title: 'JEE Advanced Exam', description: 'Score required rank in JEE Advanced.' },
      { step: 3, title: 'JoSAA Choice Locking', description: 'Select IIT Delhi in JoSAA choice list.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering (CSE)', totalSeats: 120, remainingSeats: 8, categorySeats: [{ category: 'General', count: 48 }, { category: 'OBC', count: 32 }, { category: 'SC', count: 18 }, { category: 'ST', count: 9 }, { category: 'EWS', count: 13 }] },
      { branch: 'Mathematics & Computing', totalSeats: 90, remainingSeats: 6, categorySeats: [{ category: 'General', count: 36 }, { category: 'OBC', count: 24 }, { category: 'SC', count: 14 }, { category: 'ST', count: 7 }, { category: 'EWS', count: 9 }] }
    ],
    scholarships: [
      { title: 'IITD Alumni Merit Scholarship', eligibility: 'Top 10 percentile students with need', benefit: 'Full tuition fee reimbursement', provider: 'IIT Delhi Endowment Fund' }
    ],
    virtualCampusTour: {
      tourTitle: '360° IIT Delhi Campus & Wind Tunnel Lab',
      previewImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { name: 'Dogra Hall Auditorium', description: 'Iconic hyperbolic paraboloid architectural landmark.', imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    applicationDeadline: '2026-06-25',
    counsellingRequired: 'JoSAA / CSAB 2026',
    supportedExams: ['JEE Advanced'],
    applyUrl: 'https://josaa.nic.in'
  },
  {
    id: 'dtu-delhi',
    name: 'Delhi Technological University (DTU / Former DCE)',
    shortName: 'DTU Delhi',
    ownership: 'Government',
    universityType: 'State Government',
    establishedYear: 1941,
    accreditation: 'NAAC A++, NBA Accredited',
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'DTU (formerly Delhi College of Engineering) is one of India’s premier government engineering institutions located in Rohini, Delhi. Known for massive campus infrastructure, strong industry ties, and exceptional JAC Delhi placement records.',
    ranking: {
      nirfOverall: 29,
      nirfStream: 29,
      outlook: '#4 Top Govt Engineering University',
      indiaToday: '#5 National Ranking'
    },
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Shahbad Daulatpur, Main Bawana Road, Rohini, Delhi 110042',
      campusAreaAcres: 164
    },
    courses: ['B.Tech', 'M.Tech', 'MBA', 'B.Des', 'M.Sc', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'Software Engineering (SE)',
      'Information Technology (IT)',
      'Mathematics & Computing (MCE)',
      'Electronics & Communication (ECE)',
      'Electrical Engineering',
      'Mechanical Engineering'
    ],
    fees: {
      annualTuition: '₹2,19,000 / Year',
      annualTuitionAmount: 219000,
      totalCourseFee: '₹8,76,000 (4 Years)',
      feeTier: '₹1-3 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹52,000 / Year',
      annualHostelFeeAmount: 52000,
      messCharges: '₹32,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Room', 'Double Sharing', 'Triple Sharing']
    },
    placements: {
      highestPackage: '₹1.84 Crore PA',
      highestPackageLpa: 184,
      averagePackage: '₹15.4 LPA',
      averagePackageLpa: 15.4,
      medianPackage: '₹13.0 LPA',
      placementPercentage: 92.5,
      topRecruiters: ['Amazon', 'Google', 'Microsoft', 'Atlassian', 'Adobe', 'Samsung', 'Goldman Sachs', 'De Shaw', 'Sprinklr']
    },
    campusFacilities: [
      { name: 'Dr. B.R. Ambedkar Central Library', iconName: 'Library', description: 'Fully automated 3-storey library with e-journals and quiet study pods.' },
      { name: 'High-Performance Supercomputing Facility', iconName: 'Cpu', description: 'CUDA GPU labs for computational intelligence research.' },
      { name: 'Sports Stadium & Gymnasium', iconName: 'Activity', description: '400m track, floodlit cricket ground, tennis courts & indoor gym.' }
    ],
    studentReviews: {
      rating: 4.6,
      totalReviews: 810,
      ratingBreakdown: { 5: 620, 4: 150, 3: 30, 2: 7, 1: 3 },
      pros: [
        '85% Delhi Region quota gives huge advantage to Delhi domicile students',
        'Top recruiters visit for CSE/IT/SE/MCE branches',
        'Lively cultural fests like Engifest (one of North India’s biggest fests)'
      ],
      cons: [
        'Outside Delhi candidates face high cutoff ranks'
      ],
      reviewsList: [
        {
          id: 'rev-4',
          author: 'Priya Verma',
          branch: 'Software Engineering',
          batch: '2022-2026',
          rating: 5,
          title: 'Outstanding placements and campus freedom',
          comment: 'DTU software engineering program is almost at par with top NITs. The placement cell works tirelessly to bring top MNCs.',
          date: '2026-03-01'
        }
      ]
    },
    pros: [
      'Great ROI with average package ₹15.4 LPA',
      '85% Home State Quota for Delhi Region candidates',
      'Strong coding culture and developer communities'
    ],
    cons: [
      'Outside Delhi quota cutoffs are very competitive (< 10,000 rank)'
    ],
    officialWebsite: 'https://www.dtu.ac.in',
    previousYearCutoffs: [
      { examName: 'JEE Main', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 1200, closingRank: 8500 },
      { examName: 'JEE Main', branch: 'Software Engineering (SE)', category: 'General', year: 2024, openingRank: 3500, closingRank: 11200 },
      { examName: 'JEE Main', branch: 'Information Technology (IT)', category: 'General', year: 2024, openingRank: 2500, closingRank: 10100 },
      { examName: 'JEE Main', branch: 'Electronics & Communication (ECE)', category: 'General', year: 2024, openingRank: 9000, closingRank: 18500 },
      { examName: 'JEE Main', branch: 'Mechanical Engineering', category: 'General', year: 2024, openingRank: 18000, closingRank: 34000 }
    ],
    admissionProcess: [
      { step: 1, title: 'Appear for JEE Main', description: 'Must take JEE Main Paper-1 conducted by NTA.' },
      { step: 2, title: 'Register for JAC Delhi Counselling', description: 'Fill application form on Joint Admission Counselling (JAC) Delhi portal.' },
      { step: 3, title: 'Choice Filling & Seat Allotment', description: 'Lock choice order among DTU, NSUT, IGDTUW, and IIIT Delhi.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering (CSE)', totalSeats: 480, remainingSeats: 42, categorySeats: [{ category: 'General', count: 204 }, { category: 'OBC', count: 129 }, { category: 'SC', count: 72 }, { category: 'ST', count: 36 }, { category: 'EWS', count: 39 }] },
      { branch: 'Software Engineering (SE)', totalSeats: 240, remainingSeats: 22, categorySeats: [{ category: 'General', count: 102 }, { category: 'OBC', count: 65 }, { category: 'SC', count: 36 }, { category: 'ST', count: 18 }, { category: 'EWS', count: 19 }] }
    ],
    scholarships: [
      { title: 'Merit Scholarship for SC/ST/OBC/EWS', eligibility: 'Income below ₹2.5 Lakhs/year', benefit: '100% Fee waiver or financial aid', provider: 'Delhi Govt e-District Portal' }
    ],
    virtualCampusTour: {
      tourTitle: '360° DTU Open Air Theater & Computer Center',
      previewImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { name: 'Open Air Theater (OAT)', description: 'Massive amphiteater host to cultural concerts and tech summits.', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    applicationDeadline: '2026-07-10',
    counsellingRequired: 'JAC Delhi 2026',
    supportedExams: ['JEE Main'],
    applyUrl: 'https://jacdelhi.admissions.nic.in'
  },
  {
    id: 'bits-pilani',
    name: 'BITS Pilani (Birla Institute of Technology and Science)',
    shortName: 'BITS Pilani',
    ownership: 'Private',
    universityType: 'Deemed University',
    establishedYear: 1964,
    accreditation: 'Institute of Eminence (IoE), NAAC A++',
    photos: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'BITS Pilani is India’s foremost private technological research university with zero-reservation policy. Famous for its flexible Practice School internship curriculum, modular degree choices, and vibrant alumni network including founders of Swiggy, Postman, & BigBasket.',
    ranking: {
      nirfOverall: 25,
      nirfStream: 11,
      qsWorld: '#200 QS Asia University',
      outlook: '#1 Private Tech University in India'
    },
    location: {
      city: 'Pilani',
      state: 'Rajasthan',
      address: 'Vidya Vihar, Pilani, Rajasthan 333031',
      campusAreaAcres: 328
    },
    courses: ['B.E. (Hons)', 'M.Sc (Integrated Dual)', 'B.Pharm', 'M.E.', 'MBA', 'Ph.D'],
    branches: [
      'Computer Science & Engineering',
      'Electronics & Instrumentation (ENI)',
      'Electrical & Electronics (EEE)',
      'Mechanical Engineering',
      'Chemical Engineering',
      'Civil Engineering',
      'Economics & Finance (M.Sc Dual)'
    ],
    fees: {
      annualTuition: '₹5,65,000 / Year',
      annualTuitionAmount: 565000,
      totalCourseFee: '₹22,60,000 (4 Years)',
      feeTier: '> ₹5 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹68,000 / Year',
      annualHostelFeeAmount: 68000,
      messCharges: '₹45,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Room (100% Single Allotment in 2nd/3rd Year)', 'Double Sharing (1st Year)']
    },
    placements: {
      highestPackage: '₹1.33 Crore PA',
      highestPackageLpa: 133,
      averagePackage: '₹20.8 LPA',
      averagePackageLpa: 20.8,
      medianPackage: '₹18.0 LPA',
      placementPercentage: 96.5,
      topRecruiters: ['Google', 'Microsoft', 'NVIDIA', 'Apple', 'Uber', 'Salesforce', 'Texas Instruments', 'Bain & Co', 'McKinsey']
    },
    campusFacilities: [
      { name: 'BITS Practice School (PS-I & PS-II)', iconName: 'Briefcase', description: 'Guaranteed 6-month corporate internships at top global firms.' },
      { name: 'Clock Tower & BITS Innovation Hub', iconName: 'Sparkles', description: 'Central campus clock tower and student startup incubator.' },
      { name: '24/7 Air-conditioned Super Library', iconName: 'BookOpen', description: 'Over 2.5 lakh printed volumes and digital databases.' }
    ],
    studentReviews: {
      rating: 4.8,
      totalReviews: 650,
      ratingBreakdown: { 5: 560, 4: 70, 3: 15, 2: 3, 1: 2 },
      pros: [
        'Zero attendance policy gives complete freedom for projects & startups',
        'Practice School guarantees paid 6-month industry internships',
        '100% Meritocratic peer group (No reservation quotas)'
      ],
      cons: [
        'High tuition fee structure compared to IITs/NITs'
      ],
      reviewsList: [
        {
          id: 'rev-5',
          author: 'Siddharth Nair',
          branch: 'Computer Science',
          batch: '2022-2026',
          rating: 5,
          title: 'Best 4 years of my life!',
          comment: 'The freedom to manage your schedule, practice school placements, and incredible entrepreneurial vibe makes BITS truly unique.',
          date: '2026-02-18'
        }
      ]
    },
    pros: [
      'Ranked #1 Private Tech University in India',
      'Average package exceeds ₹20.8 LPA',
      'Flexible Dual Degree option (M.Sc Economics + B.E. CS)'
    ],
    cons: [
      'Higher annual tuition fees (₹5.65L/yr)'
    ],
    officialWebsite: 'https://www.bits-pilani.ac.in',
    previousYearCutoffs: [
      { examName: 'BITSAT', branch: 'Computer Science & Engineering', category: 'General', year: 2024, openingRank: 1, closingRank: 331, scoreRequired: 331 },
      { examName: 'BITSAT', branch: 'Electronics & Instrumentation (ENI)', category: 'General', year: 2024, openingRank: 1, closingRank: 282, scoreRequired: 282 },
      { examName: 'BITSAT', branch: 'Electrical & Electronics (EEE)', category: 'General', year: 2024, openingRank: 1, closingRank: 298, scoreRequired: 298 },
      { examName: 'BITSAT', branch: 'Economics & Finance (M.Sc Dual)', category: 'General', year: 2024, openingRank: 1, closingRank: 278, scoreRequired: 278 }
    ],
    admissionProcess: [
      { step: 1, title: 'Apply for BITSAT', description: 'Register online for BITSAT Session 1 & Session 2 exams.' },
      { step: 2, title: 'Appear for BITSAT CBT', description: 'Score out of 390 total marks.' },
      { step: 3, title: 'Submit Preference Form', description: 'Enter campus (Pilani, Goa, Hyderabad) and branch preferences.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering', totalSeats: 220, remainingSeats: 15, categorySeats: [{ category: 'General', count: 220 }] }
    ],
    scholarships: [
      { title: 'Merit-cum-Need (MCN) Scholarship', eligibility: 'Family income < ₹15 Lakhs/year', benefit: 'Up to 80% Tuition fee waiver based on GPA', provider: 'BITS Alumni & Management' }
    ],
    virtualCampusTour: {
      tourTitle: '360° Virtual BITS Pilani Clock Tower & Library',
      previewImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { name: 'BITS Clock Tower', description: 'Iconic main building view.', imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    applicationDeadline: '2026-06-15',
    counsellingRequired: 'BITS Admissions Direct Portal 2026',
    supportedExams: ['BITSAT'],
    applyUrl: 'https://www.bitsadmission.com'
  },
  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology (VIT Vellore)',
    shortName: 'VIT Vellore',
    ownership: 'Private',
    universityType: 'Deemed University',
    establishedYear: 1984,
    accreditation: 'NAAC A++, ABET Accredited (USA)',
    photos: [
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'VIT Vellore is one of India’s top private engineering universities situated in Tamil Nadu. Known for Limca Record breaking campus placement drives with over 900+ visiting recruiters, international credit transfer programs, and high-tech campus infrastructure.',
    ranking: {
      nirfOverall: 11,
      nirfStream: 11,
      qsWorld: '#301-350 QS Asia',
      indiaToday: '#2 Private University'
    },
    location: {
      city: 'Vellore',
      state: 'Tamil Nadu',
      address: 'Katpadi-Ranipet Rd, Vellore, Tamil Nadu 632014',
      campusAreaAcres: 372
    },
    courses: ['B.Tech', 'M.Tech', 'MCA', 'B.Sc', 'BBA', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'CSE with AI & Machine Learning',
      'CSE with Cyber Security',
      'Electronics & Communication (ECE)',
      'Electrical & Electronics (EEE)',
      'Mechanical Engineering',
      'Biotechnology'
    ],
    fees: {
      annualTuition: '₹1,98,000 / Year (Cat-1)',
      annualTuitionAmount: 198000,
      totalCourseFee: '₹7,92,000 (Category 1)',
      feeTier: '₹1-3 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹85,000 / Year',
      annualHostelFeeAmount: 85000,
      messCharges: '₹55,000 / Year',
      acAvailable: true,
      roomTypes: ['2-Bed AC', '3-Bed AC', '4-Bed Non-AC', 'Single Deluxe AC']
    },
    placements: {
      highestPackage: '₹1.02 Crore PA',
      highestPackageLpa: 102,
      averagePackage: '₹9.2 LPA',
      averagePackageLpa: 9.2,
      medianPackage: '₹8.0 LPA',
      placementPercentage: 91.0,
      topRecruiters: ['TCS Digital', 'Cognizant', 'Wipro', 'Amazon', 'Microsoft', 'Deloitte', 'Bank of America', 'Intel']
    },
    campusFacilities: [
      { name: 'Anna Auditorium & Food Court', iconName: 'Coffee', description: 'Massive indoor food court with Subway, Dominos, & south Indian thalis.' },
      { name: 'Periyar EVR Central Library', iconName: 'BookOpen', description: '6-floor central library with digital research pods.' }
    ],
    studentReviews: {
      rating: 4.5,
      totalReviews: 1450,
      ratingBreakdown: { 5: 980, 4: 320, 3: 100, 2: 30, 1: 20 },
      pros: [
        'Huge campus recruitment with 900+ visiting companies',
        'Flexible Credit System (FFCS) allowing students to pick timetables & professors',
        'Category 1 fee structure offers high ROI for top VITEEE rankers'
      ],
      cons: [
        'Large student intake capacity',
        'Strict hostel curfew rules for 1st year students'
      ],
      reviewsList: [
        {
          id: 'rev-6',
          author: 'Kavya Raman',
          branch: 'CSE AI & ML',
          batch: '2022-2026',
          rating: 4,
          title: 'Great infrastructure and placement support',
          comment: 'If you get Category 1 or 2 via VITEEE, VIT is definitely worth it. FFCS system gives great control over course selection.',
          date: '2026-01-14'
        }
      ]
    },
    pros: [
      'Ranked #11 NIRF Engineering',
      'Over 900 recruiters visiting every year',
      'Fully Flexible Credit System (FFCS)'
    ],
    cons: [
      'Cat-4 and Cat-5 tuition fees are higher'
    ],
    officialWebsite: 'https://vit.ac.in',
    previousYearCutoffs: [
      { examName: 'VITEEE', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 1, closingRank: 8000, scoreRequired: 1 },
      { examName: 'VITEEE', branch: 'CSE with AI & Machine Learning', category: 'General', year: 2024, openingRank: 1, closingRank: 11500, scoreRequired: 1 },
      { examName: 'VITEEE', branch: 'Electronics & Communication (ECE)', category: 'General', year: 2024, openingRank: 1, closingRank: 18000, scoreRequired: 1 }
    ],
    admissionProcess: [
      { step: 1, title: 'Apply for VITEEE Exam', description: 'Fill online registration form on VIT official portal.' },
      { step: 2, title: 'Take VITEEE Online Test', description: 'Computer-based exam covering Physics, Chem, Math, English, Aptitude.' },
      { step: 3, title: 'Online Rank-based Counselling', description: 'Choose campus (Vellore, Chennai, AP, Bhopal) and fee category based on rank.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering (CSE)', totalSeats: 1200, remainingSeats: 140, categorySeats: [{ category: 'Category 1', count: 300 }, { category: 'Category 2', count: 300 }, { category: 'Category 3', count: 300 }, { category: 'Category 4', count: 300 }] }
    ],
    scholarships: [
      { title: 'STARS Scheme Scholarship', eligibility: 'Rural state board top rankers', benefit: '100% Fee & Hostel Waiver for 4 years', provider: 'VIT Management' }
    ],
    virtualCampusTour: {
      tourTitle: '360° VIT Vellore Technology Tower & Lake',
      previewImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80',
      hotspots: [
        { name: 'Technology Tower', description: 'Main CS & ECE departmental building.', imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80' }
      ]
    },
    applicationDeadline: '2026-03-31',
    counsellingRequired: 'VITEEE Counselling 2026',
    supportedExams: ['VITEEE'],
    applyUrl: 'https://viteee.vit.ac.in'
  },
  {
    id: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli (NIT Trichy)',
    shortName: 'NIT Trichy',
    ownership: 'Government',
    universityType: 'NIT',
    establishedYear: 1964,
    accreditation: 'Institute of National Importance (INI), NAAC A++',
    photos: [
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'NIT Trichy is consistently ranked as the #1 NIT in India by NIRF. Situated in Tiruchirappalli, Tamil Nadu, it offers world-class lab infrastructure, premier research culture, and stellar placement statistics competing directly with top IITs.',
    ranking: {
      nirfOverall: 9,
      nirfStream: 9,
      outlook: '#1 NIT in India',
      indiaToday: '#1 Govt Tech Institute among NITs'
    },
    location: {
      city: 'Tiruchirappalli',
      state: 'Tamil Nadu',
      address: 'Tanjore Main Road, National Highway 67, Tiruchirappalli, Tamil Nadu 620015',
      campusAreaAcres: 800
    },
    courses: ['B.Tech', 'B.Arch', 'M.Tech', 'MCA', 'MBA', 'M.Sc', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'Electronics & Communication (ECE)',
      'Electrical & Electronics (EEE)',
      'Instrumentation & Control (ICE)',
      'Mechanical Engineering',
      'Civil Engineering',
      'Production Engineering'
    ],
    fees: {
      annualTuition: '₹1,42,000 / Year',
      annualTuitionAmount: 142000,
      totalCourseFee: '₹5,68,000 (4 Years)',
      feeTier: '₹1-3 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹42,000 / Year',
      annualHostelFeeAmount: 42000,
      messCharges: '₹38,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Room (3rd & 4th Year)', 'Double Sharing (1st & 2nd Year)']
    },
    placements: {
      highestPackage: '₹52.8 LPA',
      highestPackageLpa: 52.8,
      averagePackage: '₹18.2 LPA',
      averagePackageLpa: 18.2,
      medianPackage: '₹15.5 LPA',
      placementPercentage: 96.2,
      topRecruiters: ['Microsoft', 'Google', 'Amazon', 'Qualcomm', 'Texas Instruments', 'Cisco', 'L&T', 'ExxonMobil']
    },
    campusFacilities: [
      { name: 'Octagon Computer Center', iconName: 'Cpu', description: 'Central computing facility with 24/7 high-speed fiber internet.' },
      { name: 'A2A Central Library', iconName: 'Library', description: 'Modern digital resource center with IEEE & ScienceDirect subscriptions.' }
    ],
    studentReviews: {
      rating: 4.8,
      totalReviews: 780,
      ratingBreakdown: { 5: 650, 4: 100, 3: 20, 2: 7, 1: 3 },
      pros: [
        'Ranked #1 NIT in India consistently',
        'Top CSE placement average of ₹27 LPA',
        'Vibrant nationwide student culture with Pragyan tech fest'
      ],
      cons: [
        'Hot summer climate in Trichy'
      ],
      reviewsList: [
        {
          id: 'rev-7',
          author: 'Venkatesh Iyer',
          branch: 'CSE',
          batch: '2021-2025',
          rating: 5,
          title: 'Direct rival to top IITs',
          comment: 'Faculty, facilities, and placement opportunities here are top-tier. Octagon computer center is open 24/7 for coding projects.',
          date: '2026-02-25'
        }
      ]
    },
    pros: [
      'Ranked #9 Overall in NIRF India',
      'Affordable fees with high median package ₹15.5 LPA',
      'Top-notch sports and lab infrastructure'
    ],
    cons: [
      'High Home State vs Other State cutoff difference'
    ],
    officialWebsite: 'https://www.nitt.edu',
    previousYearCutoffs: [
      { examName: 'JEE Main', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 350, closingRank: 1500 },
      { examName: 'JEE Main', branch: 'Electronics & Communication (ECE)', category: 'General', year: 2024, openingRank: 1800, closingRank: 4200 },
      { examName: 'JEE Main', branch: 'Electrical & Electronics (EEE)', category: 'General', year: 2024, openingRank: 3500, closingRank: 7800 }
    ],
    admissionProcess: [
      { step: 1, title: 'JEE Main Entrance', description: 'Appear for JEE Main conducted by NTA.' },
      { step: 2, title: 'JoSAA / CSAB Allotment', description: 'Participate in JoSAA counseling choosing NIT Trichy.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering (CSE)', totalSeats: 120, remainingSeats: 10, categorySeats: [{ category: 'General', count: 50 }, { category: 'OBC', count: 32 }, { category: 'SC', count: 18 }, { category: 'ST', count: 9 }, { category: 'EWS', count: 11 }] }
    ],
    scholarships: [
      { title: 'Fee Remission Scheme', eligibility: 'Parental income < ₹1 Lakh', benefit: '100% Tuition Fee Exemption', provider: 'Ministry of Education, GoI' }
    ],
    virtualCampusTour: {
      tourTitle: '360° NIT Trichy Octagon & Clock Tower',
      previewImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      hotspots: []
    },
    applicationDeadline: '2026-06-25',
    counsellingRequired: 'JoSAA / CSAB 2026',
    supportedExams: ['JEE Main'],
    applyUrl: 'https://josaa.nic.in'
  },
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    shortName: 'AIIMS New Delhi',
    ownership: 'Government',
    universityType: 'Medical Institute (AIIMS/JIPMER)',
    establishedYear: 1956,
    accreditation: 'Institute of National Importance (INI), NAAC A++',
    photos: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'AIIMS New Delhi is the premier medical institution in India, world-renowned for medical training, cutting-edge clinical research, and advanced healthcare delivery. It holds the #1 position in NIRF Medical rankings continuously.',
    ranking: {
      nirfOverall: 6,
      nirfStream: 1,
      outlook: '#1 Medical Institute in Asia',
      indiaToday: '#1 MBBS College'
    },
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029',
      campusAreaAcres: 115
    },
    courses: ['MBBS', 'MD', 'MS', 'M.Ch', 'DM', 'B.Sc Nursing', 'Ph.D'],
    branches: [
      'MBBS / Medical Sciences',
      'Cardiology',
      'Neurology',
      'Oncology',
      'Radiology',
      'Orthopedics',
      'Pediatrics'
    ],
    fees: {
      annualTuition: '₹1,628 / Year',
      annualTuitionAmount: 1628,
      totalCourseFee: '₹5,856 (5.5 Years including Internship)',
      feeTier: '< ₹1 Lakh'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹1,200 / Year',
      annualHostelFeeAmount: 1200,
      messCharges: '₹24,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Hostel Room for all MBBS Cadets']
    },
    placements: {
      highestPackage: '₹48.0 LPA (US Residency / Global Fellowship)',
      highestPackageLpa: 48,
      averagePackage: '₹24.0 LPA',
      averagePackageLpa: 24,
      medianPackage: '₹22.0 LPA',
      placementPercentage: 100,
      topRecruiters: ['AIIMS Hospitals', 'Apollo Hospitals', 'Max Healthcare', 'Johns Hopkins US', 'Mayo Clinic US', 'NHS UK']
    },
    campusFacilities: [
      { name: 'Dr. B.B. Dikshit Library', iconName: 'Library', description: 'Premier medical repository with access to PubMed, Lancet & NEJM databases.' },
      { name: 'National Cancer Institute', iconName: 'Activity', description: 'State-of-the-art diagnostic and clinical research complex.' }
    ],
    studentReviews: {
      rating: 4.9,
      totalReviews: 520,
      ratingBreakdown: { 5: 490, 4: 25, 3: 5, 2: 0, 1: 0 },
      pros: [
        'Unmatched patient exposure and world-renowned faculty doctors',
        'Virtually zero tuition fees (₹5,856 total course fee)',
        '100% success rate for USMLE & PLAB international medical licensures'
      ],
      cons: [
        'Requires AIR 1 to 50 rank in NEET UG for General category'
      ],
      reviewsList: [
        {
          id: 'rev-8',
          author: 'Dr. Devansh Mehta',
          branch: 'MBBS',
          batch: '2020-2025',
          rating: 5,
          title: 'The holy grail of Indian medical education',
          comment: 'Clinical training at AIIMS Delhi is unmatched anywhere in Asia. Hands-on experience during internship prepares you for top global residencies.',
          date: '2026-02-01'
        }
      ]
    },
    pros: [
      'Ranked #1 Medical College in India',
      'Ultra affordable tuition (₹1,628/year)',
      'Top hospital patient flow and emergency residency training'
    ],
    cons: [
      'Extreme competition (NEET UG AIR 1 to 55)'
    ],
    officialWebsite: 'https://www.aiims.edu',
    previousYearCutoffs: [
      { examName: 'NEET', branch: 'MBBS / Medical Sciences', category: 'General', year: 2024, openingRank: 1, closingRank: 57 },
      { examName: 'NEET', branch: 'MBBS / Medical Sciences', category: 'OBC', year: 2024, openingRank: 60, closingRank: 250 },
      { examName: 'NEET', branch: 'MBBS / Medical Sciences', category: 'SC', year: 2024, openingRank: 120, closingRank: 980 }
    ],
    admissionProcess: [
      { step: 1, title: 'Crack NEET UG Exam', description: 'Score near-perfect 705+ marks out of 720 in NEET UG.' },
      { step: 2, title: 'MCC AIQ Counselling', description: 'Register on Medical Counselling Committee (MCC) portal under All India Quota.' }
    ],
    seatMatrix: [
      { branch: 'MBBS / Medical Sciences', totalSeats: 132, remainingSeats: 5, categorySeats: [{ category: 'General', count: 53 }, { category: 'OBC', count: 35 }, { category: 'SC', count: 19 }, { category: 'ST', count: 10 }, { category: 'EWS', count: 13 }] }
    ],
    scholarships: [
      { title: 'AIIMS Student Aid Fund', eligibility: 'Needs based aid for hostel and book allowances', benefit: '100% Allowance Support', provider: 'AIIMS Delhi Trust' }
    ],
    virtualCampusTour: {
      tourTitle: '360° AIIMS Delhi Quadrangle & Emergency Block',
      previewImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
      hotspots: []
    },
    applicationDeadline: '2026-07-20',
    counsellingRequired: 'MCC NEET UG Counselling 2026',
    supportedExams: ['NEET'],
    applyUrl: 'https://mcc.nic.in'
  },
  {
    id: 'srcc-delhi',
    name: 'Shri Ram College of Commerce (SRCC - Delhi University)',
    shortName: 'SRCC Delhi',
    ownership: 'Government',
    universityType: 'Central University',
    establishedYear: 1926,
    accreditation: 'NAAC A++',
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'SRCC is India’s premier college for Commerce and Economics located in DU North Campus, New Delhi. Famous for producing top CFOs, investment bankers, policy makers, and McKinsey/Bain/BCG management consultants.',
    ranking: {
      nirfOverall: 11,
      nirfStream: 1,
      outlook: '#1 Commerce College in India',
      indiaToday: '#1 B.Com & Economics College'
    },
    location: {
      city: 'New Delhi',
      state: 'Delhi',
      address: 'University of Delhi, Maurice Nagar, Delhi 110007',
      campusAreaAcres: 17
    },
    courses: ['B.Com (Hons)', 'B.A. (Hons) Economics', 'M.Com', 'M.A. Economics', 'GBO'],
    branches: [
      'B.Com (Hons) / Finance',
      'B.Sc Economics / Statistics',
      'Global Business Operations'
    ],
    fees: {
      annualTuition: '₹30,000 / Year',
      annualTuitionAmount: 30000,
      totalCourseFee: '₹90,000 (3 Years)',
      feeTier: '< ₹1 Lakh'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹45,000 / Year',
      annualHostelFeeAmount: 45000,
      messCharges: '₹30,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Room', 'Double Sharing']
    },
    placements: {
      highestPackage: '₹36.0 LPA',
      highestPackageLpa: 36,
      averagePackage: '₹12.8 LPA',
      averagePackageLpa: 12.8,
      medianPackage: '₹10.5 LPA',
      placementPercentage: 94.0,
      topRecruiters: ['McKinsey & Co', 'Bain & Company', 'Boston Consulting Group (BCG)', 'J.P. Morgan', 'Morgan Stanley', 'Deloitte', 'EY', 'KPMG']
    },
    campusFacilities: [
      { name: 'Heritage Library & E-Resource Hub', iconName: 'Library', description: 'Air-conditioned 2-storey commerce library with Bloomberg Terminals.' },
      { name: 'Sports Complex & Swimming Pool', iconName: 'Activity', description: 'Indoor sports stadium, gym, & Olympic training facility.' }
    ],
    studentReviews: {
      rating: 4.8,
      totalReviews: 610,
      ratingBreakdown: { 5: 510, 4: 80, 3: 15, 2: 3, 1: 2 },
      pros: [
        'Top consulting firms (McKinsey, Bain, BCG) hire undergrads directly',
        'Unrivaled peer network in Indian finance & corporate governance',
        'Extremely affordable tuition fees (₹30,000/year)'
      ],
      cons: [
        'Extremely competitive CUET UG percentile score required'
      ],
      reviewsList: [
        {
          id: 'rev-9',
          author: 'Megha Jain',
          branch: 'B.Com (Hons) / Finance',
          batch: '2022-2025',
          rating: 5,
          title: 'The Harvard of Indian Commerce',
          comment: 'Placements and society culture at SRCC are incredible. You study alongside top commerce minds across India.',
          date: '2026-01-30'
        }
      ]
    },
    pros: [
      'Ranked #1 Commerce College in India',
      'Average package ₹12.8 LPA for 3-year undergrad degree',
      'Top tier MBB consulting recruiters'
    ],
    cons: [
      'CUET UG 795+ score out of 800 needed for General'
    ],
    officialWebsite: 'https://www.srcc.edu',
    previousYearCutoffs: [
      { examName: 'CUET', branch: 'B.Com (Hons) / Finance', category: 'General', year: 2024, openingRank: 1, closingRank: 150, scoreRequired: 792 },
      { examName: 'CUET', branch: 'B.Sc Economics / Statistics', category: 'General', year: 2024, openingRank: 1, closingRank: 180, scoreRequired: 788 }
    ],
    admissionProcess: [
      { step: 1, title: 'Take CUET UG Exam', description: 'Appear for Domain subjects + General Test in CUET UG conducted by NTA.' },
      { step: 2, title: 'DU CSAS Portal Registration', description: 'Apply on Delhi University Common Seat Allocation System (CSAS).' },
      { step: 3, title: 'Preference Allocation', description: 'Select SRCC B.Com (Hons) or B.A. Econ as top preference.' }
    ],
    seatMatrix: [
      { branch: 'B.Com (Hons) / Finance', totalSeats: 630, remainingSeats: 35, categorySeats: [{ category: 'General', count: 252 }, { category: 'OBC', count: 170 }, { category: 'SC', count: 95 }, { category: 'ST', count: 47 }, { category: 'EWS', count: 66 }] }
    ],
    scholarships: [
      { title: 'SRCC Student Support Fund', eligibility: 'Students with household income < ₹3 Lakhs', benefit: 'Full tuition & hostel fee waiver', provider: 'SRCC Alumni Association' }
    ],
    virtualCampusTour: {
      tourTitle: '360° SRCC Red Brick Foyer & Auditorium',
      previewImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      hotspots: []
    },
    applicationDeadline: '2026-07-15',
    counsellingRequired: 'DU CSAS Portal 2026',
    supportedExams: ['CUET'],
    applyUrl: 'https://ugadmission.uod.ac.in'
  },
  {
    id: 'iiit-hyderabad',
    name: 'International Institute of Information Technology Hyderabad (IIITH)',
    shortName: 'IIIT Hyderabad',
    ownership: 'Private',
    universityType: 'IIIT',
    establishedYear: 1998,
    accreditation: 'NAAC A++, NBA Accredited',
    photos: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'IIIT Hyderabad is an autonomous research university in Gachibowli, Hyderabad. Renowned globally for CS research, competitive programming dominance (ACM ICPC world finalists), and average CSE package matching top 3 IITs.',
    ranking: {
      nirfOverall: 55,
      nirfStream: 55,
      outlook: '#1 Autonomous CS Research Institute',
      indiaToday: '#1 Specialized Tech Institute'
    },
    location: {
      city: 'Hyderabad',
      state: 'Telangana',
      address: 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032',
      campusAreaAcres: 66
    },
    courses: ['B.Tech', 'Dual Degree (B.Tech + MS by Research)', 'M.Tech', 'MS by Research', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'Electronics & Communication (ECE)',
      'Computer Science + Computational Linguistics (Dual)',
      'Computer Science + Human Sciences (Dual)'
    ],
    fees: {
      annualTuition: '₹4,00,000 / Year',
      annualTuitionAmount: 400000,
      totalCourseFee: '₹16,00,000 (4 Years)',
      feeTier: '₹3-5 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹48,000 / Year',
      annualHostelFeeAmount: 48000,
      messCharges: '₹42,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Room (3rd & 4th Year)', 'Double Sharing (1st & 2nd Year)']
    },
    placements: {
      highestPackage: '₹1.02 Crore PA',
      highestPackageLpa: 102,
      averagePackage: '₹32.2 LPA (CSE)',
      averagePackageLpa: 32.2,
      medianPackage: '₹30.0 LPA',
      placementPercentage: 99.1,
      topRecruiters: ['Google US', 'Meta Menlo Park', 'Apple', 'NVIDIA', 'Uber', 'Directi', 'Atlassian', 'Qualcomm', 'CodeNation']
    },
    campusFacilities: [
      { name: 'Kohli Center on Intelligent Systems (KCIS)', iconName: 'Brain', description: 'India’s largest academic research center in AI, Computer Vision & Robotics.' },
      { name: '24/7 Supercomputing & Fiber Network', iconName: 'Cpu', description: '1Gbps connectivity and GPU clusters in every lab.' }
    ],
    studentReviews: {
      rating: 4.9,
      totalReviews: 430,
      ratingBreakdown: { 5: 390, 4: 30, 3: 8, 2: 2, 1: 0 },
      pros: [
        'Average CSE package of ₹32.2 LPA is highest among Indian engineering colleges',
        'Direct research focus from 1st year without unnecessary general science subjects',
        'Unbeatable coding culture and ACM ICPC World Finalist mentor team'
      ],
      cons: [
        'Rigorous research assignment deadlines'
      ],
      reviewsList: [
        {
          id: 'rev-10',
          author: 'Harshit Reddy',
          branch: 'CSE',
          batch: '2021-2025',
          rating: 5,
          title: 'Paradise for pure Computer Science lovers',
          comment: 'You learn data structures, algorithms, and systems from Day 1. The research exposure here is comparable to CMU and MIT.',
          date: '2026-02-14'
        }
      ]
    },
    pros: [
      'Average CSE placement package ₹32.2 LPA',
      'Top AI & Machine Learning research outputs in Asia',
      'Multi-mode admission via JEE Main, UGEE, and SPEC'
    ],
    cons: [
      'Higher tuition fee structure (₹4.0L/year)'
    ],
    officialWebsite: 'https://www.iiit.ac.in',
    previousYearCutoffs: [
      { examName: 'JEE Main', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 1, closingRank: 1680 },
      { examName: 'JEE Main', branch: 'Electronics & Communication (ECE)', category: 'General', year: 2024, openingRank: 1, closingRank: 3800 }
    ],
    admissionProcess: [
      { step: 1, title: 'JEE Main Mode / UGEE Mode', description: 'Apply via JEE Main percentile score OR UGEE dual-degree entrance exam.' },
      { step: 2, title: 'Interview (for UGEE)', description: 'Research aptitude interview for dual degree applicants.' },
      { step: 3, title: 'IIITH Direct Seat Allotment', description: 'Accept seat and submit portal confirmation fee.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering (CSE)', totalSeats: 170, remainingSeats: 12, categorySeats: [{ category: 'General', count: 170 }] }
    ],
    scholarships: [
      { title: 'Alumni Financial Assistance (MCN)', eligibility: 'Household income < ₹8 Lakhs', benefit: 'Interest-free tuition fee loan refunded post graduation', provider: 'IIITH Alumni Fund' }
    ],
    virtualCampusTour: {
      tourTitle: '360° IIIT Hyderabad Kohli AI Center & Amphitheater',
      previewImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      hotspots: []
    },
    applicationDeadline: '2026-06-10',
    counsellingRequired: 'IIIT Hyderabad Direct Admissions 2026',
    supportedExams: ['JEE Main'],
    applyUrl: 'https://ugadmissions.iiit.ac.in'
  },
  {
    id: 'rvce-bangalore',
    name: 'RV College of Engineering (RVCE Bengaluru)',
    shortName: 'RVCE Bengaluru',
    ownership: 'Private',
    universityType: 'Private University',
    establishedYear: 1963,
    accreditation: 'NAAC A+, Autonomous, NBA Accredited',
    photos: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'RVCE Bangalore is Karnataka’s premiere engineering institution located on Mysuru Road, Bengaluru. Renowned for proximity to Electronic City and Whitefield tech parks, top KCET/COMEDK cutoffs, and industry-aligned autonomous syllabus.',
    ranking: {
      nirfOverall: 96,
      nirfStream: 96,
      outlook: '#1 Private College in Karnataka',
      indiaToday: '#3 South India Engineering'
    },
    location: {
      city: 'Bengaluru',
      state: 'Karnataka',
      address: 'RV Vidyaniketan Post, Mysore Road, Bengaluru, Karnataka 560059',
      campusAreaAcres: 52
    },
    courses: ['B.E.', 'M.Tech', 'MCA', 'Ph.D'],
    branches: [
      'Computer Science & Engineering (CSE)',
      'Information Science & Engineering (ISE)',
      'Artificial Intelligence & Machine Learning',
      'Electronics & Communication (ECE)',
      'Electrical & Electronics (EEE)',
      'Mechanical Engineering'
    ],
    fees: {
      annualTuition: '₹2,42,000 / Year (COMEDK)',
      annualTuitionAmount: 242000,
      totalCourseFee: '₹9,68,000 (4 Years)',
      feeTier: '₹1-3 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹75,000 / Year',
      annualHostelFeeAmount: 75000,
      messCharges: '₹48,000 / Year',
      acAvailable: true,
      roomTypes: ['Double Sharing AC', 'Triple Sharing Non-AC']
    },
    placements: {
      highestPackage: '₹92.0 LPA',
      highestPackageLpa: 92,
      averagePackage: '₹14.8 LPA',
      averagePackageLpa: 14.8,
      medianPackage: '₹12.0 LPA',
      placementPercentage: 93.5,
      topRecruiters: ['Cisco', 'Amazon', 'Microsoft', 'Atlassian', 'Intel', 'Mercedes-Benz R&D', 'Samsung', 'Texas Instruments']
    },
    campusFacilities: [
      { name: 'Cisco Networking Academy Lab', iconName: 'Cpu', description: 'Advanced cybersecurity and cloud infrastructure testing lab.' },
      { name: 'Center for Clean Energy & EV', iconName: 'Zap', description: 'R&D center partnered with Bosch & Toyota.' }
    ],
    studentReviews: {
      rating: 4.6,
      totalReviews: 540,
      ratingBreakdown: { 5: 410, 4: 90, 3: 25, 2: 10, 1: 5 },
      pros: [
        'Bangalore location provides unbeatable internship & startup networking',
        'Top average package of ₹14.8 LPA among COMEDK colleges',
        'Autonomous curriculum updated annually as per IT industry demands'
      ],
      cons: [
        'High competition for COMEDK rankers (< 800 rank for CSE)'
      ],
      reviewsList: [
        {
          id: 'rev-11',
          author: 'Nikhil Gowda',
          branch: 'CSE',
          batch: '2022-2026',
          rating: 5,
          title: 'Top choice in Bangalore tech capital',
          comment: 'Location matters a lot. Tech startups in Indiranagar and Koramangala come directly to campus for off-campus and on-campus roles.',
          date: '2026-02-02'
        }
      ]
    },
    pros: [
      'Prime location in Silicon Valley of India (Bengaluru)',
      'High average package ₹14.8 LPA',
      'Strong corporate sponsorship programs'
    ],
    cons: [
      'Management quota fees are high'
    ],
    officialWebsite: 'https://www.rvce.edu.in',
    previousYearCutoffs: [
      { examName: 'KCET', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 1, closingRank: 280 },
      { examName: 'COMEDK', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 1, closingRank: 450 },
      { examName: 'COMEDK', branch: 'Information Science & Engineering (ISE)', category: 'General', year: 2024, openingRank: 200, closingRank: 780 }
    ],
    admissionProcess: [
      { step: 1, title: 'Take KCET / COMEDK Entrance', description: 'Karnataka domicile students take KCET; All India students take COMEDK.' },
      { step: 2, title: 'Counselling Registration', description: 'Select RVCE choices on KEA or COMEDK portal.' }
    ],
    seatMatrix: [
      { branch: 'Computer Science & Engineering (CSE)', totalSeats: 240, remainingSeats: 18, categorySeats: [{ category: 'KCET', count: 120 }, { category: 'COMEDK', count: 72 }, { category: 'Management', count: 48 }] }
    ],
    scholarships: [
      { title: 'RV Trust Merit Award', eligibility: 'Top 5 rankers in each branch', benefit: '₹50,000 cash grant per academic year', provider: 'Rashtreeya Sikshana Samithi Trust' }
    ],
    virtualCampusTour: {
      tourTitle: '360° RVCE Bengaluru Academic Block',
      previewImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      hotspots: []
    },
    applicationDeadline: '2026-06-30',
    counsellingRequired: 'KCET / COMEDK Counselling 2026',
    supportedExams: ['KCET', 'COMEDK'],
    applyUrl: 'https://www.comedk.org'
  },
  {
    id: 'nlsiu-bangalore',
    name: 'National Law School of India University (NLSIU Bengaluru)',
    shortName: 'NLSIU Bengaluru',
    ownership: 'Government',
    universityType: 'Law University (NLU)',
    establishedYear: 1987,
    accreditation: 'NAAC A++, Institute of National Stature',
    photos: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'NLSIU Bengaluru is the undisputed #1 law university in India located in Nagarbhavi, Bengaluru. Famous for pioneering clinical legal education, international moot court championships, and top magic circle law firm placements.',
    ranking: {
      nirfOverall: 1,
      nirfStream: 1,
      outlook: '#1 Law School in India',
      indiaToday: '#1 National Law University'
    },
    location: {
      city: 'Bengaluru',
      state: 'Karnataka',
      address: 'Gnana Bharathi Main Rd, Opp. NAAC, Nagarbhavi, Bengaluru, Karnataka 560072',
      campusAreaAcres: 23
    },
    courses: ['B.A. LL.B. (Hons)', 'LL.M.', 'Ph.D', 'Master of Public Policy (MPP)'],
    branches: [
      'BA LLB (Hons) / Law',
      'Corporate & Commercial Law',
      'Constitutional Law',
      'Intellectual Property Law'
    ],
    fees: {
      annualTuition: '₹3,25,000 / Year',
      annualTuitionAmount: 325000,
      totalCourseFee: '₹16,25,000 (5 Years Integrated)',
      feeTier: '₹3-5 Lakhs'
    },
    hostelFees: {
      hasHostel: true,
      annualHostelFee: '₹60,000 / Year',
      annualHostelFeeAmount: 60000,
      messCharges: '₹42,000 / Year',
      acAvailable: true,
      roomTypes: ['Single Room', 'Double Sharing']
    },
    placements: {
      highestPackage: '₹48.0 LPA (International Magic Circle)',
      highestPackageLpa: 48,
      averagePackage: '₹19.5 LPA',
      averagePackageLpa: 19.5,
      medianPackage: '₹18.0 LPA',
      placementPercentage: 98.0,
      topRecruiters: ['Trilegal', 'Cyril Amarchand Mangaldas', 'Shardul Amarchand Mangaldas', 'Khaitan & Co', 'AZB & Partners', 'Clifford Chance London', 'Linklaters UK']
    },
    campusFacilities: [
      { name: 'Sri Narayan Rao Law Library', iconName: 'BookOpen', description: 'Premier legal research repository with Supreme Court Reporter & Westlaw.' },
      { name: 'Moot Court Hall', iconName: 'Scale', description: 'State-of-the-art judicial simulation chamber.' }
    ],
    studentReviews: {
      rating: 4.9,
      totalReviews: 380,
      ratingBreakdown: { 5: 350, 4: 25, 3: 5, 2: 0, 1: 0 },
      pros: [
        'Ranked #1 Law School in India consistently',
        'Top 100% placements at Tier-1 corporate law firms',
        'Incredible alumni network including Supreme Court advocates and judges'
      ],
      cons: [
        'Requires AIR 1 to 110 rank in CLAT UG'
      ],
      reviewsList: [
        {
          id: 'rev-12',
          author: 'Ananya Bose',
          branch: 'BA LLB (Hons)',
          batch: '2021-2026',
          rating: 5,
          title: 'The premier center for legal education',
          comment: 'Socratic discussion methods in class, international moots, and top Tier-1 firm internships make NLSIU second to none.',
          date: '2026-01-22'
        }
      ]
    },
    pros: [
      'Ranked #1 Law School in India',
      'Average law placement package ₹19.5 LPA',
      'International London Magic Circle firm recruitments'
    ],
    cons: [
      'Extreme CLAT rank cutoffs'
    ],
    officialWebsite: 'https://www.nls.ac.in',
    previousYearCutoffs: [
      { examName: 'CLAT', branch: 'BA LLB (Hons) / Law', category: 'General', year: 2024, openingRank: 1, closingRank: 104 },
      { examName: 'CLAT', branch: 'BA LLB (Hons) / Law', category: 'OBC', year: 2024, openingRank: 110, closingRank: 550 }
    ],
    admissionProcess: [
      { step: 1, title: 'Crack CLAT UG Exam', description: 'Score required All India Rank in Common Law Admission Test.' },
      { step: 2, title: 'Consortium of NLUs Counselling', description: 'Select NLSIU Bengaluru as choice #1.' }
    ],
    seatMatrix: [
      { branch: 'BA LLB (Hons) / Law', totalSeats: 240, remainingSeats: 12, categorySeats: [{ category: 'General', count: 96 }, { category: 'OBC', count: 54 }, { category: 'SC', count: 36 }, { category: 'ST', count: 18 }, { category: 'EWS', count: 24 }] }
    ],
    scholarships: [
      { title: 'Aditya Birla Law Scholarship', eligibility: 'Top 20 CLAT rankers', benefit: '₹2,00,000 annual scholarship grant', provider: 'Aditya Birla Group' }
    ],
    virtualCampusTour: {
      tourTitle: '360° NLSIU Bengaluru Quad & Moot Court',
      previewImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
      hotspots: []
    },
    applicationDeadline: '2026-05-30',
    counsellingRequired: 'CLAT Consortium 2026',
    supportedExams: ['CLAT'],
    applyUrl: 'https://consortiumofnlus.ac.in'
  }
];

// Generates procedural top colleges for any state or search parameter to scale up to thousands of colleges across India
export function generateScaledCollegeDatabase(filterState?: CollegeFilterState): DetailedCollege[] {
  // We combine DETAILED_COLLEGES_DATABASE with procedurally generated top tier colleges for all 28 states
  const baseList = [...DETAILED_COLLEGES_DATABASE];

  const stateCollegeTemplates = [
    { nameSuffix: 'Institute of Technology', types: ['State Government', 'Private University'] as const, streams: ['Engineering', 'Architecture'] },
    { nameSuffix: 'Medical College & Hospital', types: ['State Government', 'Medical Institute (AIIMS/JIPMER)'] as const, streams: ['Medical Sciences'] },
    { nameSuffix: 'University School of Management & Commerce', types: ['Central University', 'Deemed University'] as const, streams: ['Management', 'Commerce'] }
  ];

  const syntheticStateMap: Record<string, string[]> = {
    'Maharashtra': ['COEP Technological University Pune', 'VJTI Mumbai', 'ICT Mumbai', 'Symbiosis Institute of Tech Pune', 'MIT World Peace University Pune'],
    'Karnataka': ['BMS College of Engineering Bengaluru', 'Manipal Institute of Technology', 'PES University Bengaluru', 'MS Ramaiah Institute of Tech Bengaluru'],
    'Tamil Nadu': ['PSG College of Technology Coimbatore', 'Anna University (CEG Campus) Chennai', 'SRM Institute of Science & Tech Kattankulathur', 'SASTRA Deemed University Thanjavur'],
    'Telangana': ['JNTU College of Engineering Hyderabad', 'CBIT Hyderabad', 'Vasavi College of Engineering Hyderabad'],
    'West Bengal': ['Jadavpur University Kolkata', 'IIEST Shibpur', 'Heritage Institute of Technology Kolkata'],
    'Uttar Pradesh': ['HBTI Kanpur', 'MMMUT Gorakhpur', 'Shiv Nadar University Greater Noida', 'Jaypee Institute of Information Tech Noida'],
    'Rajasthan': ['MNIT Jaipur', 'MBM University Jodhpur', 'LNMIIT Jaipur'],
    'Punjab': ['Thapar Institute of Engineering & Tech Patiala', 'PEC Chandigarh', 'GNDU Amritsar', 'LPU Phagwara'],
    'Gujarat': ['Nirma University Ahmedabad', 'DAIICT Gandhinagar', 'SVNIT Surat'],
    'Kerala': ['NIT Calicut', 'College of Engineering Trivandrum (CET)', 'Model Engineering College Kochi'],
    'Andhra Pradesh': ['AU College of Engineering Visakhapatnam', 'Koneru Lakshmaiah (KL) University Vijayawada'],
    'Madhya Pradesh': ['MANIT Bhopal', 'SGSITS Indore', 'IIITM Gwalior'],
    'Haryana': ['NIT Kurukshetra', 'YMCA University Faridabad', 'Ashoka University Sonepat']
  };

  let idCounter = 100;

  Object.entries(syntheticStateMap).forEach(([state, collegeNames]) => {
    collegeNames.forEach((name, idx) => {
      // Check if already in baseList
      if (baseList.some(c => c.name.toLowerCase().includes(name.toLowerCase()))) return;

      const isGovt = idx % 2 === 0;
      const feeAmount = isGovt ? 120000 + (idx * 15000) : 280000 + (idx * 35000);
      const avgPackageNum = isGovt ? 11.5 + (idx % 5) : 8.5 + (idx % 4);
      const highestPackageNum = isGovt ? 45 + idx * 4 : 32 + idx * 3;

      baseList.push({
        id: `synth-col-${idCounter++}`,
        name: name,
        shortName: name.split(' ')[0] + ' ' + state,
        ownership: isGovt ? 'Government' : 'Private',
        universityType: isGovt ? 'State Government' : 'Private University',
        establishedYear: 1970 + (idx * 5),
        accreditation: 'NAAC A+ Accredited',
        photos: [
          'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80'
        ],
        overview: `${name} is one of the premier institutions in ${state}, recognized for high academic standards, modern research centers, and top industry placements.`,
        ranking: {
          nirfOverall: 40 + idx * 5,
          nirfStream: 35 + idx * 4,
          outlook: `#${idx + 2} in ${state}`
        },
        location: {
          city: name.split(' ').pop() || state,
          state: state,
          address: `Main Campus, ${state}, India`,
          campusAreaAcres: 80 + idx * 20
        },
        courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D'],
        branches: [
          'Computer Science & Engineering (CSE)',
          'Artificial Intelligence & Data Science',
          'Electronics & Communication (ECE)',
          'Mechanical Engineering',
          'Civil Engineering'
        ],
        fees: {
          annualTuition: `₹${(feeAmount / 100000).toFixed(2)} Lakhs / Year`,
          annualTuitionAmount: feeAmount,
          totalCourseFee: `₹${((feeAmount * 4) / 100000).toFixed(2)} Lakhs (4 Years)`,
          feeTier: feeAmount < 300000 ? '₹1-3 Lakhs' : '₹3-5 Lakhs'
        },
        hostelFees: {
          hasHostel: true,
          annualHostelFee: '₹55,000 / Year',
          annualHostelFeeAmount: 55000,
          messCharges: '₹36,000 / Year',
          acAvailable: true,
          roomTypes: ['Double Sharing AC', 'Triple Sharing Non-AC']
        },
        placements: {
          highestPackage: `₹${highestPackageNum}.0 LPA`,
          highestPackageLpa: highestPackageNum,
          averagePackage: `₹${avgPackageNum.toFixed(1)} LPA`,
          averagePackageLpa: avgPackageNum,
          medianPackage: `₹${(avgPackageNum * 0.85).toFixed(1)} LPA`,
          placementPercentage: 88 + (idx % 8),
          topRecruiters: ['TCS Digital', 'Infosys', 'Cognizant', 'Amazon', 'Accenture', 'Capgemini', 'L&T Tech']
        },
        campusFacilities: [
          { name: 'Central Library', iconName: 'Library', description: 'Air-conditioned digital resource center with 1,00,000+ volumes.' },
          { name: 'Innovation & Incubation Hub', iconName: 'Rocket', description: 'Startup incubation lab with mentorship & seed grants.' }
        ],
        studentReviews: {
          rating: 4.4 + (idx % 5) * 0.1,
          totalReviews: 320 + idx * 40,
          ratingBreakdown: { 5: 220, 4: 80, 3: 20, 2: 5, 1: 2 },
          pros: [
            `Top state rankers benchmark in ${state}`,
            'Active campus placement cell with high corporate turnout',
            'Well-equipped central computer labs and sports complex'
          ],
          cons: [
            'Hostel allotment fills quickly during 1st round'
          ],
          reviewsList: [
            {
              id: `rev-${idCounter}`,
              author: 'Student Reviewer',
              branch: 'CSE',
              batch: '2022-2026',
              rating: 4.5,
              title: `Great college life and learning in ${state}`,
              comment: `Campus life is energetic with good sports grounds and solid tech fests. Placements in CSE/ECE are very reliable.`,
              date: '2026-02-12'
            }
          ]
        },
        pros: [
          `Top-tier institution in ${state}`,
          `Strong average placement package ₹${avgPackageNum.toFixed(1)} LPA`
        ],
        cons: [
          'Moderate seat competition'
        ],
        officialWebsite: `https://www.${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.edu.in`,
        previousYearCutoffs: [
          { examName: 'JEE Main', branch: 'Computer Science & Engineering (CSE)', category: 'General', year: 2024, openingRank: 2000 + idx * 1000, closingRank: 18000 + idx * 4000 },
          { examName: 'JEE Main', branch: 'Electronics & Communication (ECE)', category: 'General', year: 2024, openingRank: 12000 + idx * 1000, closingRank: 35000 + idx * 5000 }
        ],
        admissionProcess: [
          { step: 1, title: 'Entrance Examination', description: 'Appear for JEE Main / State Entrance Exam.' },
          { step: 2, title: 'Counselling Registration', description: 'Fill choices on state DTE portal or JoSAA.' }
        ],
        seatMatrix: [
          { branch: 'Computer Science & Engineering (CSE)', totalSeats: 180, remainingSeats: 25, categorySeats: [{ category: 'General', count: 90 }, { category: 'Reserved', count: 90 }] }
        ],
        scholarships: [
          { title: `${state} Post-Matric State Scholarship`, eligibility: 'Income < ₹2.5 Lakhs', benefit: '100% Fee Reimbursement', provider: `${state} Govt Portal` }
        ],
        virtualCampusTour: {
          tourTitle: `360° ${name} Campus Promenade`,
          previewImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
          hotspots: []
        },
        applicationDeadline: '2026-07-15',
        counsellingRequired: `${state} DTE / JoSAA 2026`,
        supportedExams: ['JEE Main', 'MHT-CET', 'WBJEE', 'KCET'],
        applyUrl: 'https://jeemain.nta.nic.in'
      });
    });
  });

  return baseList;
}

// Predictor & Recommendation Engine Logic
export function predictCollegeRecommendations(
  scoreInput: ExamScoreInput,
  collegesDatabase: DetailedCollege[]
): CollegeRecommendation[] {
  const { exam, rankOrScore, category, homeState, targetBranch } = scoreInput;

  return collegesDatabase.map((college) => {
    // Find matching cutoff data
    const cutoffs = college.previousYearCutoffs.filter(
      c => c.examName.toLowerCase().includes(exam.toLowerCase()) || college.supportedExams.includes(exam)
    );

    let openingRank = 500;
    let closingRank = 25000;
    let branchName = targetBranch && targetBranch !== 'All Branches' ? targetBranch : (college.branches[0] || 'Computer Science & Engineering (CSE)');

    if (cutoffs.length > 0) {
      const branchCutoff = cutoffs.find(c => c.branch.toLowerCase().includes(branchName.toLowerCase())) || cutoffs[0];
      openingRank = branchCutoff.openingRank;
      closingRank = branchCutoff.closingRank;
      branchName = branchCutoff.branch;

      // Category adjustments (e.g., OBC, SC, ST, EWS have relaxed cutoff thresholds)
      if (category === 'OBC' || category === 'EWS') {
        closingRank = Math.round(closingRank * 1.35);
      } else if (category === 'SC') {
        closingRank = Math.round(closingRank * 2.2);
      } else if (category === 'ST') {
        closingRank = Math.round(closingRank * 3.1);
      }
    } else {
      // Synthetic heuristic based on college NIRF and ownership
      if (college.universityType === 'IIT') {
        closingRank = exam === 'JEE Advanced' ? 4500 : 1200;
      } else if (college.universityType === 'NIT') {
        closingRank = 18000;
      } else if (college.universityType === 'IIIT') {
        closingRank = 22000;
      } else {
        closingRank = 45000;
      }
    }

    // Home state quota boost heuristic (if college is in home state)
    if (homeState && college.location.state.toLowerCase() === homeState.toLowerCase()) {
      closingRank = Math.round(closingRank * 1.4);
    }

    // Calculate Admission Probability % based on student rank vs closing rank
    let probabilityPercent = 50;
    let tier: 'Dream' | 'Target' | 'Safe' = 'Target';

    if (exam === 'BITSAT') {
      // Score-based exam (higher score is better, e.g. 331)
      const targetScore = 280;
      if (rankOrScore >= targetScore + 25) {
        probabilityPercent = Math.min(98, 85 + Math.round((rankOrScore - targetScore) / 2));
        tier = 'Safe';
      } else if (rankOrScore >= targetScore - 15) {
        probabilityPercent = Math.min(84, Math.max(35, 60 + Math.round((rankOrScore - targetScore) * 1.2)));
        tier = 'Target';
      } else {
        probabilityPercent = Math.max(12, Math.round((rankOrScore / targetScore) * 30));
        tier = 'Dream';
      }
    } else {
      // Rank-based exam (lower rank is better, e.g. Rank 1000 is better than 10000)
      if (rankOrScore <= openingRank) {
        probabilityPercent = Math.min(99, 90 + Math.round((openingRank - rankOrScore) / 50));
        tier = 'Safe';
      } else if (rankOrScore <= closingRank) {
        const ratio = (closingRank - rankOrScore) / (closingRank - openingRank + 1);
        probabilityPercent = Math.min(89, Math.max(36, Math.round(35 + ratio * 54)));
        tier = probabilityPercent >= 75 ? 'Safe' : 'Target';
      } else if (rankOrScore <= closingRank * 1.4) {
        const overageRatio = (closingRank * 1.4 - rankOrScore) / (closingRank * 0.4);
        probabilityPercent = Math.max(10, Math.round(overageRatio * 34));
        tier = 'Dream';
      } else {
        probabilityPercent = Math.max(5, Math.round(10000 / (rankOrScore - closingRank + 500)));
        tier = 'Dream';
      }
    }

    const remainingSeats = college.seatMatrix[0]?.remainingSeats || Math.floor(Math.random() * 25) + 5;

    return {
      college,
      tier,
      probabilityPercent,
      openingRank: exam === 'BITSAT' ? `Score ${openingRank}` : `AIR ${openingRank}`,
      closingRank: exam === 'BITSAT' ? `Score ${closingRank}` : `AIR ${closingRank}`,
      matchedBranch: branchName,
      matchedExam: exam,
      remainingSeats,
      applicationDeadline: college.applicationDeadline,
      counsellingRequired: college.counsellingRequired
    };
  });
}
