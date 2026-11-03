import { CounselingPortal } from '../types';

export const ALL_COUNSELING_PORTALS: CounselingPortal[] = [
  {
    id: 'josaa',
    name: 'JoSAA',
    fullName: 'Joint Seat Allocation Authority 2025',
    badge: '23 IITs, 31 NITs, 26 IIITs, 38 GFTIs',
    logo: '🏛️',
    description: 'Centralized single-window seat allotment for all IITs, NITs, IIITs, and Government Funded Technical Institutes across India based on JEE Main & JEE Advanced ranks.',
    targetExams: ['JEE Main', 'JEE Advanced'],
    participatingColleges: '121 Top Central Institutes (23 IITs, 31 NITs, 26 IIITs, 38 GFTIs)',
    eligibility: 'Must have qualified JEE Main 2025 (for NITs/IIITs/GFTIs) or JEE Advanced 2025 (for IITs) with minimum 75% aggregate marks (65% for SC/ST/PwD) in Class 12 Board Exam or top 20 percentile.',
    registration: {
      steps: [
        'Visit josaa.nic.in and login using JEE Main Application Number and Password.',
        'Verify your pre-filled Candidate Profile (Name, Gender, Category, State Code of Eligibility).',
        'Update contact details, bank details for refund policy, and upload category/disability certificates if required.',
        'Submit registration and proceed directly to Choice Filling.'
      ],
      fee: 'Free Registration (No choice locking fee; Seat acceptance fee paid after allotment)',
      url: 'https://josaa.nic.in',
      status: 'Open',
      lastDate: 'June 18, 2025'
    },
    requiredDocuments: [
      'Class 10th Certificate / Birth Certificate (Proof of Date of Birth)',
      'Class 12th Marksheet & Passing Certificate',
      'JEE Main / JEE Advanced Admit Card & Rank Card',
      'Category Certificate (GEN-EWS / OBC-NCL / SC / ST) issued on/after April 1, 2025',
      'Medical Fitness Certificate (Signed by registered medical practitioner)',
      'Aadhaar Card / Government Photo ID Proof',
      'State Code of Eligibility Proof (Class 12 Passing School Document)'
    ],
    importantDates: [
      { event: 'Registration & Choice Filling Opens', date: 'June 10, 2025', isHot: true },
      { event: 'Mock Seat Allotment Round 1', date: 'June 15, 2025' },
      { event: 'Mock Seat Allotment Round 2', date: 'June 17, 2025' },
      { event: 'Choice Locking Deadline', date: 'June 18, 2025', isHot: true },
      { event: 'Round 1 Seat Allotment Result', date: 'June 20, 2025', isHot: true },
      { event: 'Round 2 Seat Allotment Result', date: 'June 27, 2025' },
      { event: 'Round 3 Seat Allotment Result', date: 'July 04, 2025' },
      { event: 'Round 4 Seat Allotment Result', date: 'July 10, 2025' },
      { event: 'Round 5 Final IIT Allotment & Reporting', date: 'July 16, 2025', isHot: true }
    ],
    choiceFilling: {
      strategy: 'Order your choices in strict decreasing order of personal preference without limiting counts. You can fill 300+ choices for free.',
      maxChoices: 'Unlimited (350+ combinations available)',
      mockSeatAllotmentDate: 'June 15 & June 17, 2025',
      lockDeadline: 'June 18, 2025 (5:00 PM)',
      tips: [
        'Always place top-tier Dream choices (e.g. IIT Bombay CSE, IIT Delhi CSE) at the top even if your rank is higher.',
        'Fill safe backup choices in NITs/IIITs towards the bottom so you never lose seat security.',
        'Remember to manually lock your choices before the deadline or the system auto-locks your last saved preferences.'
      ]
    },
    seatAllotment: {
      roundsCount: 5,
      allotmentMethod: 'Merit-cum-Preference Algorithm (Reservation Rules applied for SC/ST/OBC-NCL/EWS & PwD)',
      checkResultUrl: 'https://josaa.nic.in/result2025',
      prevYearCutoffsUrl: 'https://josaa.nic.in/orcr'
    },
    feePayment: {
      seatAcceptanceFee: '₹35,000 (GEN/OBC/EWS) or ₹15,000 (SC/ST/PwD)',
      paymentModes: ['SBI Net Banking', 'UPI', 'Debit/Credit Card', 'SBI E-Challan'],
      refundPolicy: 'Full refund minus ₹2,000 processing fee if withdrawn prior to the final round.'
    },
    reporting: {
      mode: '100% Online Document Verification & Physical Reporting at Allotted Institute',
      instructions: [
        'Select Freeze, Float, or Slide option upon seat allotment.',
        'Pay the Seat Acceptance Fee online.',
        'Upload all required original documents in PDF format for online verification by reporting officers.',
        'Respond immediately to queries raised by document verification officers within 24 hours.'
      ],
      requiredOriginals: ['10th Marksheet', '12th Marksheet', 'Category Certificate', 'Medical Certificate', 'Fee Receipt']
    },
    faqs: [
      {
        question: 'What is the difference between Freeze, Float, and Slide?',
        answer: 'Freeze means you accept the allotted seat and exit further rounds. Float means you accept the seat but wish to upgrade to a higher choice anywhere. Slide means you accept the seat but wish to upgrade to a higher choice within the same institute.'
      },
      {
        question: 'What happens if I do not lock my choices in JoSAA?',
        answer: 'If you fail to lock choices, your last saved choices will be automatically locked by the server at 5:00 PM on the deadline date.'
      },
      {
        question: 'Is physical presence required during JoSAA online rounds?',
        answer: 'No, all document verification and seat acceptance during rounds 1 to 5 are conducted 100% online through the JoSAA portal.'
      }
    ]
  },

  {
    id: 'csab',
    name: 'CSAB',
    fullName: 'Central Seat Allocation Board (Special Rounds) 2025',
    badge: 'Special Vacant Seats for NITs, IIITs & GFTIs',
    logo: '🎓',
    description: 'Conducts special counselling rounds to fill leftover vacant seats in NITs, IIITs, and GFTIs after JoSAA rounds complete.',
    targetExams: ['JEE Main'],
    participatingColleges: '95+ NITs, IIITs, and GFTIs (Excludes IITs)',
    eligibility: 'All JEE Main 2025 rank holders including those who participated in JoSAA (whether seat allotted, cancelled, or not registered).',
    registration: {
      steps: [
        'Register on csab.nic.in using JEE Main credentials.',
        'Pay the CSAB Special Round Participation Fee online.',
        'Fill fresh choices (JoSAA choices do NOT carry over to CSAB).',
        'Lock preferences before deadline.'
      ],
      fee: 'Special Round Enrollment Fee: ₹44,000 (GEN/OBC/EWS) / ₹24,000 (SC/ST/PwD)',
      url: 'https://csab.nic.in',
      status: 'Upcoming',
      lastDate: 'July 28, 2025'
    },
    requiredDocuments: [
      'JEE Main 2025 Admit Card & Scorecard',
      'Class 10 & 12 Marksheet',
      'Category Certificate (valid for current financial year)',
      'JoSAA Seat Cancellation / Withdrawal Letter (if applicable)',
      'Bank Cancelled Cheque / Passbook Copy for refund'
    ],
    importantDates: [
      { event: 'Vacant Seats Display', date: 'July 25, 2025', isHot: true },
      { event: 'CSAB Registration & Choice Filling', date: 'July 26, 2025', isHot: true },
      { event: 'CSAB Special Round 1 Allotment', date: 'August 02, 2025', isHot: true },
      { event: 'CSAB Special Round 2 Final Result', date: 'August 08, 2025' }
    ],
    choiceFilling: {
      strategy: 'Analyze the vacant seat matrix carefully before filling fresh choices. You must fill all acceptable choices in order.',
      maxChoices: 'Unlimited',
      mockSeatAllotmentDate: 'N/A',
      lockDeadline: 'July 30, 2025',
      tips: [
        'CSAB choices are completely fresh; previous JoSAA choices are reset.',
        'Ensure you only fill choices you are 100% prepared to join if allotted.'
      ]
    },
    seatAllotment: {
      roundsCount: 2,
      allotmentMethod: 'JEE Main All India CRL Rank & Category Ranks',
      checkResultUrl: 'https://csab.nic.in/specialround',
      prevYearCutoffsUrl: 'https://csab.nic.in/archive'
    },
    feePayment: {
      seatAcceptanceFee: 'Adjusted against enrollment fee paid during CSAB registration.',
      paymentModes: ['Net Banking', 'UPI', 'Debit Card', 'Credit Card'],
      refundPolicy: 'Refund issued after deduction of ₹5,000 processing charge if seat not allotted.'
    },
    reporting: {
      mode: 'Online Reporting followed by Physical Reporting at college',
      instructions: [
        'Pay institute balance fees online.',
        'Report physically to the allotted institute with original certificates.'
      ],
      requiredOriginals: ['JEE Main Scorecard', '10th & 12th Marksheet', 'Medical Fitness', 'Aadhaar Card']
    },
    faqs: [
      {
        question: 'Are IIT seats allocated through CSAB Special Rounds?',
        answer: 'No, CSAB Special Rounds are strictly for NITs, IIITs, and GFTIs. IIT seats are filled exclusively via JoSAA.'
      },
      {
        question: 'Can I participate in CSAB if I already accepted a seat in JoSAA?',
        answer: 'Yes, your JoSAA seat is retained while you explore upgrades in CSAB. If a higher choice in CSAB is allotted, the JoSAA seat is automatically relinquished.'
      }
    ]
  },

  {
    id: 'uptac',
    name: 'UPTAC',
    fullName: 'Uttar Pradesh Technical Admission Counselling (AKTU / MMMUT / HBTU)',
    badge: '750+ Colleges in Uttar Pradesh',
    logo: '🏰',
    description: 'State counselling portal for B.Tech, B.Arch, MBA, MCA admissions across Dr. A.P.J. Abdul Kalam Technical University (AKTU) and affiliated top state institutes.',
    targetExams: ['JEE Main', 'CUET UG'],
    participatingColleges: '750+ Engineering & Pharmacy Colleges in UP (IET Lucknow, BIET Jhansi, KNIT Sultanpur, etc.)',
    eligibility: 'Pass Class 12 with PCM (min 45% aggregate for General, 40% for SC/ST). Both UP Domicile and Non-UP candidates eligible under Home State & Other State quotas.',
    registration: {
      steps: [
        'Visit uptac.admissions.nic.in and click New Candidate Registration.',
        'Enter JEE Main 2025 Application Number and Roll Number.',
        'Upload documents (10th/12th Marksheet, Category, Domicile, Income Certificate).',
        'Pay Registration Fee online to unlock Choice Filling.'
      ],
      fee: '₹1,000 One-time Non-refundable Registration Fee',
      url: 'https://uptac.admissions.nic.in',
      status: 'Open',
      lastDate: 'June 30, 2025'
    },
    requiredDocuments: [
      'JEE Main 2025 Scorecard',
      'Class 10th & 12th Marksheets',
      'UP Domicile Certificate (if claiming Home State quota)',
      'Category Certificate (OBC-NCL / SC / ST / EWS issued by UP Govt)',
      'Income Certificate (for FW - Fee Waiver seats & scholarship eligibility)',
      'Character Certificate & Transfer Certificate (TC)'
    ],
    importantDates: [
      { event: 'Online Registration Opens', date: 'June 01, 2025' },
      { event: 'Document Verification by Portal', date: 'June 05 - July 05, 2025' },
      { event: 'Round 1 Choice Filling', date: 'July 10, 2025', isHot: true },
      { event: 'Round 1 Allotment Result', date: 'July 15, 2025', isHot: true },
      { event: 'Internal Sliding Round', date: 'August 05, 2025' }
    ],
    choiceFilling: {
      strategy: 'Select top government colleges (IET Lucknow, KNIT Sultanpur, BIET Jhansi) first, followed by top private university options (KIET, AKGEC, Galgotias).',
      maxChoices: 'Unlimited',
      mockSeatAllotmentDate: 'July 12, 2025',
      lockDeadline: 'July 14, 2025',
      tips: [
        'Always enable Tuition Fee Waiver (FW) seat options if your annual family income is below ₹6 Lakhs.',
        'Non-UP candidates can select seats under the 20% All India Quota.'
      ]
    },
    seatAllotment: {
      roundsCount: 4,
      allotmentMethod: 'JEE Main All India Rank (AIR) & Category Reservation',
      checkResultUrl: 'https://uptac.admissions.nic.in/result',
      prevYearCutoffsUrl: 'https://uptac.admissions.nic.in/or-cr'
    },
    feePayment: {
      seatAcceptanceFee: '₹20,000 (General / OBC) or ₹12,000 (SC / ST)',
      paymentModes: ['Net Banking', 'UPI', 'Debit Card', 'Credit Card'],
      refundPolicy: 'Refund allowed up to Round 3 as per AICTE guidelines.'
    },
    reporting: {
      mode: 'Physical Reporting at Allotted Institute after final round',
      instructions: [
        'Download Allotment Letter.',
        'Pay balance tuition fee online or at college counter.',
        'Submit original documents along with 2 sets of photocopies.'
      ],
      requiredOriginals: ['Allotment Letter', 'JEE Main Scorecard', 'Domicile', 'Income Certificate', 'Class 12 Marksheet']
    },
    faqs: [
      {
        question: 'Can Non-UP students participate in UPTAC counselling?',
        answer: 'Yes, students from outside UP are eligible for 20% of seats in private colleges and specified seats in state government universities.'
      },
      {
        question: 'What is a Tuition Fee Waiver (FW) seat in UPTAC?',
        answer: 'FW seats exempt 100% of the tuition fee for meritorious students whose annual family income is under ₹6 Lakhs.'
      }
    ]
  },

  {
    id: 'comedk',
    name: 'COMEDK',
    fullName: 'COMEDK UGET Engineering Counselling 2025',
    badge: '190+ Top Private Engineering Colleges in Karnataka',
    logo: '🏛️',
    description: 'Centralized counselling for admission into top premier private engineering colleges in Karnataka including RVCE, BMSCE, MSRIT, Dayananda Sagar, and BIT Bangalore.',
    targetExams: ['COMEDK UGET'],
    participatingColleges: '190+ Karnataka Engineering Institutes (RVCE Bangalore, BMSCE, MSRIT, DSCE, etc.)',
    eligibility: 'Class 12 pass with Physics, Chemistry, and Mathematics with min 45% marks (40% for SC/ST/OBC of Karnataka) and valid COMEDK UGET 2025 rank.',
    registration: {
      steps: [
        'Login to comedk.org using Application Number and Password.',
        'Upload mandatory scan copies of Class 10 & 12 Marksheets and ID Proof.',
        'Pay Online Document Verification Fee.',
        'Wait for Document Verification Status "Approved".'
      ],
      fee: '₹2,000 Counselling Registration Fee',
      url: 'https://comedk.org',
      status: 'Open',
      lastDate: 'June 25, 2025'
    },
    requiredDocuments: [
      'COMEDK UGET 2025 Rank Card & Test Admit Card',
      'Class 10th & 12th Marksheet / Passing Certificate',
      'Government Issued Photo ID Proof (Aadhaar / Passport / PAN)',
      'Category / Caste Certificate (for Karnataka Candidates)',
      'Parents Domicile Certificate (if applicable)'
    ],
    importantDates: [
      { event: 'Registration & Document Upload', date: 'June 05, 2025' },
      { event: 'Document Verification Approval', date: 'June 28, 2025' },
      { event: 'Mock Rank & Choice Filling', date: 'July 05, 2025', isHot: true },
      { event: 'Round 1 Seat Allotment Result', date: 'July 12, 2025', isHot: true },
      { event: 'Round 2 Seat Allotment Result', date: 'July 25, 2025' },
      { event: 'Round 3 Final Allotment & Decision', date: 'August 05, 2025', isHot: true }
    ],
    choiceFilling: {
      strategy: 'Focus on Tier 1 Bangalore colleges (RVCE, BMSCE, MSRIT) for Computer Science, AI/ML, Information Science, and Electronics branches.',
      maxChoices: 'Unlimited',
      mockSeatAllotmentDate: 'July 05, 2025',
      lockDeadline: 'July 10, 2025',
      tips: [
        'Ensure choices are saved properly; COMEDK allows editing before each round.',
        'Review total annual college fee structure before adding choices.'
      ]
    },
    seatAllotment: {
      roundsCount: 3,
      allotmentMethod: 'COMEDK UGET Merit Rank Order',
      checkResultUrl: 'https://comedk.org/counselling-login',
      prevYearCutoffsUrl: 'https://comedk.org/engineering-cut-off-ranks'
    },
    feePayment: {
      seatAcceptanceFee: '100% Annual Tuition Fee (approx. ₹2,60,000) paid online upon allotment',
      paymentModes: ['Net Banking', 'Credit Card', 'Debit Card'],
      refundPolicy: 'Full refund if seat rejected or surrendered within specified surrender window.'
    },
    reporting: {
      mode: 'Physical Reporting at Allotted College with Online Allotment Letter',
      instructions: [
        'Download Allotment Letter and Fee Receipt.',
        'Report to college within given reporting window.',
        'Submit original certificates for physical verification.'
      ],
      requiredOriginals: ['Original 10th/12th Marksheet', 'COMEDK Rank Card', 'Allotment Letter', 'ID Proof']
    },
    faqs: [
      {
        question: 'Are students from outside Karnataka eligible for COMEDK?',
        answer: 'Yes! All India candidates from any Indian state can participate in COMEDK counselling.'
      },
      {
        question: 'What happens if I do not pay the seat acceptance fee in COMEDK?',
        answer: 'Failure to pay the fee within the deadline results in automatic cancellation of the allotted seat and exclusion from further rounds.'
      }
    ]
  },

  {
    id: 'mhtcet',
    name: 'MHT CET',
    fullName: 'State Common Entrance Test Cell, Maharashtra (CAP Rounds) 2025',
    badge: 'ICT Mumbai, COEP, VJTI, PICT Pune & 400+ Institutes',
    logo: '🌾',
    description: 'Centralized Admission Process (CAP) for B.Tech, B.Pharm, and Agriculture programs in Maharashtra engineering colleges.',
    targetExams: ['MHT CET', 'JEE Main'],
    participatingColleges: 'COEP Technological University, VJTI Mumbai, ICT Mumbai, PICT Pune, SPIT Mumbai, MIT-WPU',
    eligibility: 'Pass 10+2 with Physics, Mathematics & Chemistry/Biology with 45% aggregate (40% for Backward Class of Maharashtra). Maharashtra State candidates & All India candidates eligible.',
    registration: {
      steps: [
        'Register on fe2025.mahacet.org with MHT CET or JEE Main details.',
        'Fill e-Scrutiny or Physical Scrutiny application form.',
        'Upload required certificates for verification.',
        'Get Document Verification Acknowledgement Receipt (FC Receipt).'
      ],
      fee: '₹1,000 for General / All India Candidates (₹800 for Reserved Category of MH)',
      url: 'https://mahacet.org',
      status: 'Open',
      lastDate: 'June 22, 2025'
    },
    requiredDocuments: [
      'MHT CET 2025 Scorecard / JEE Main Scorecard',
      'Class 10th & 12th Marksheet',
      'Maharashtra Domicile Certificate / Birth Certificate (Type A to E)',
      'Caste Certificate, Caste Validity & Non-Creamy Layer (NCL) Certificate (for MH Category)',
      'Income Certificate issued by Tehsildar (for TFWS seats)'
    ],
    importantDates: [
      { event: 'CAP Online Registration & Document Upload', date: 'June 01 - June 22, 2025', isHot: true },
      { event: 'Provisional Merit List Display', date: 'June 28, 2025' },
      { event: 'Final Merit List Display', date: 'July 03, 2025', isHot: true },
      { event: 'CAP Round 1 Choice Filling', date: 'July 08 - July 12, 2025', isHot: true },
      { event: 'CAP Round 1 Seat Allotment', date: 'July 16, 2025', isHot: true },
      { event: 'CAP Round 2 Seat Allotment', date: 'July 28, 2025' },
      { event: 'CAP Round 3 Seat Allotment', date: 'August 08, 2025' }
    ],
    choiceFilling: {
      strategy: 'Add top choices like COEP CSE/ENTC, VJTI CSE, ICT Chemical, PICT Pune CSE, SPIT Mumbai CSE at the top.',
      maxChoices: '300 Option Form Choices',
      mockSeatAllotmentDate: 'N/A',
      lockDeadline: 'July 12, 2025',
      tips: [
        'TFWS (Tuition Fee Waiver Scheme) options should be selected separately in option form.',
        'Auto-Freeze applies if your 1st option is allotted in Round 1.'
      ]
    },
    seatAllotment: {
      roundsCount: 3,
      allotmentMethod: 'MHT CET Percentile / JEE Main Percentile & Category Merit',
      checkResultUrl: 'https://fe2025.mahacet.org/CAP1',
      prevYearCutoffsUrl: 'https://fe2025.mahacet.org/CutOff2024'
    },
    feePayment: {
      seatAcceptanceFee: '₹1,000 Online Seat Acceptance Charge',
      paymentModes: ['Net Banking', 'UPI', 'Debit/Credit Cards'],
      refundPolicy: 'Refundable as per Maharashtra State CET Cell guidelines.'
    },
    reporting: {
      mode: 'Self-Verification at Portal + Physical Reporting at Allotted Institute',
      instructions: [
        'Complete Self-Verification of seat allotment online.',
        'Pay Seat Acceptance Fee.',
        'Report physically to college with all original documents for admission confirmation.'
      ],
      requiredOriginals: ['10th & 12th Marksheets', 'CET Scorecard', 'Caste Validity', 'Domicile', 'FC Acknowledgement']
    },
    faqs: [
      {
        question: 'Can All India candidates apply for COEP and VJTI?',
        answer: 'Yes, All India candidates can apply through JEE Main percentile for 15-20% seats reserved for All India quota in Maharashtra colleges.'
      },
      {
        question: 'What is Caste Validity Certificate in MHT CET?',
        answer: 'It is a mandatory document issued by the Scrutiny Committee verifying the authenticity of reserve category candidates in Maharashtra.'
      }
    ]
  },

  {
    id: 'wbjee',
    name: 'WBJEE',
    fullName: 'West Bengal Joint Entrance Examinations Board e-Counselling 2025',
    badge: 'Jadavpur University, KGEC, JGEC, Heritage & Techno India',
    logo: '🌊',
    description: 'State counselling portal for engineering, technology, and pharmacy seats across West Bengal universities and engineering institutes.',
    targetExams: ['WBJEE', 'JEE Main'],
    participatingColleges: 'Jadavpur University Kolkata, Kalyani Government Engineering College, Jalpaiguri Govt, Heritage Institute, Techno India',
    eligibility: 'Class 12 pass with Physics, Mathematics & Chemistry/Biotech/CS with min 45% aggregate (40% for SC/ST/OBC/PwD of West Bengal). Jadavpur University requires WBJEE rank.',
    registration: {
      steps: [
        'Visit wbjeeb.nic.in and register with WBJEE / JEE Main roll numbers.',
        'Fill personal, academic, and bank account details.',
        'Pay Registration Fee online.',
        'Proceed to Choice Filling.'
      ],
      fee: '₹500 Counselling Registration Fee',
      url: 'https://wbjeeb.nic.in',
      status: 'Open',
      lastDate: 'June 20, 2025'
    },
    requiredDocuments: [
      'WBJEE 2025 Rank Card & Admit Card',
      'Class 10th Admit Card / Birth Certificate',
      'Class 12th Marksheet',
      'West Bengal Domicile Certificate (Proforma A1 / A2 / B)',
      'Category Certificate (SC / ST / OBC-A / OBC-B of WB)',
      'TFW (Tuition Fee Waiver) Income Certificate'
    ],
    importantDates: [
      { event: 'Registration & Choice Filling', date: 'June 10 - June 20, 2025', isHot: true },
      { event: 'Mock Seat Allotment Display', date: 'June 16, 2025' },
      { event: 'Choice Locking Deadline', date: 'June 20, 2025', isHot: true },
      { event: 'Round 1 Seat Allotment Result', date: 'June 25, 2025', isHot: true },
      { event: 'Round 2 Seat Allotment Result', date: 'July 05, 2025' },
      { event: 'Mop-Up Round Registration & Result', date: 'July 15 - July 20, 2025', isHot: true }
    ],
    choiceFilling: {
      strategy: 'Always prioritize Jadavpur University (JU) branches first for unbeatable ROI, followed by KGEC, JGEC, Heritage, Techno India, and IEM Kolkata.',
      maxChoices: 'Unlimited',
      mockSeatAllotmentDate: 'June 16, 2025',
      lockDeadline: 'June 20, 2025',
      tips: [
        'Jadavpur University seats require West Bengal Domicile proof except for specialized All India quota seats.',
        'Mop-Up round offers fresh choice filling for upgraded seat allocation.'
      ]
    },
    seatAllotment: {
      roundsCount: 3,
      allotmentMethod: 'WBJEE General Merit Rank (GMR) & JEE Main AIR',
      checkResultUrl: 'https://wbjeeb.nic.in/result2025',
      prevYearCutoffsUrl: 'https://wbjeeb.nic.in/or-cr'
    },
    feePayment: {
      seatAcceptanceFee: '₹5,000 Seat Acceptance Fee online',
      paymentModes: ['Net Banking', 'UPI', 'Debit/Credit Cards'],
      refundPolicy: 'Refunded if seat withdrawn before mop-up round.'
    },
    reporting: {
      mode: 'Physical Reporting at Reporting Centres / Allotted College',
      instructions: [
        'Accept seat and download Allotment Letter.',
        'Report physically for document verification.',
        'Pay balance college admission fee.'
      ],
      requiredOriginals: ['WBJEE Rank Card', 'Class 10 & 12 Marksheets', 'WB Domicile', 'Category Certificate']
    },
    faqs: [
      {
        question: 'Why is Jadavpur University considered top choice in WBJEE?',
        answer: 'JU offers world-class engineering education with annual fees under ₹10,000 for 4 years and average placement packages exceeding ₹20 LPA.'
      },
      {
        question: 'Can non-domicile students join government colleges in West Bengal?',
        answer: 'Government colleges like JU reserved seats are for WB domicile candidates, but private colleges open 100% seats for All India candidates.'
      }
    ]
  },

  {
    id: 'kcet',
    name: 'KCET',
    fullName: 'Karnataka Examinations Authority (KEA) CET Counselling 2025',
    badge: 'UVCE, PES University, BMSCE, MSRIT Government Quota Seats',
    logo: '🐯',
    description: 'Karnataka State Government quota counselling for B.Tech, Agriculture, Veterinary, Architecture, and Pharmacy admissions.',
    targetExams: ['KCET', 'NEET UG'],
    participatingColleges: 'UVCE Bangalore, SKSJT, PES University (Govt Quota), BMSCE (Govt Quota), MSRIT (Govt Quota)',
    eligibility: 'Must satisfy Karnataka Domicile Clause (7 years study in Karnataka) and pass Class 12 with PCM (45% for General, 40% for Reserved categories).',
    registration: {
      steps: [
        'Visit kea.kar.nic.in and enter KCET Application Number.',
        'Verify document verification slip status (Interactive Verification Portal).',
        'Download Secret Key and Password to enter Option Entry Portal.',
        'Perform Option Entry in order of priority.'
      ],
      fee: 'Included in KCET Exam Application Fee',
      url: 'https://kea.kar.nic.in',
      status: 'Open',
      lastDate: 'June 28, 2025'
    },
    requiredDocuments: [
      'KCET 2025 Rank Card & Hall Ticket',
      'Class 10th & 12th Marksheets',
      'Study Certificate (Countersigned by BEO / DDPI covering 7 years in Karnataka)',
      'Rural Study Certificate & Kannada Medium Certificate (if applicable)',
      'Caste / Category & Income Certificate (1, 2A, 2B, 3A, 3B, SC, ST)'
    ],
    importantDates: [
      { event: 'Verification Slip Download', date: 'June 10, 2025' },
      { event: 'Mock Option Entry', date: 'June 18, 2025', isHot: true },
      { event: 'Round 1 Option Entry Deadline', date: 'June 28, 2025', isHot: true },
      { event: 'Round 1 Seat Allotment Result', date: 'July 05, 2025', isHot: true },
      { event: 'Round 2 Seat Allotment Result', date: 'July 22, 2025' },
      { event: 'Extended Mop-Up Round', date: 'August 10, 2025' }
    ],
    choiceFilling: {
      strategy: 'KCET option entry allows unlimited college-course combinations. Use KEA cutoffs from previous years to prioritize top seats.',
      maxChoices: 'Unlimited',
      mockSeatAllotmentDate: 'June 18, 2025',
      lockDeadline: 'June 28, 2025',
      tips: [
        'Never reveal your Secret Key to anyone.',
        'Verify Choice 1, Choice 2, Choice 3, Choice 4 options after Round 1 allotment.'
      ]
    },
    seatAllotment: {
      roundsCount: 3,
      allotmentMethod: 'KCET Rank & Merit List with Karnataka Reservation Matrix',
      checkResultUrl: 'https://kea.kar.nic.in/results',
      prevYearCutoffsUrl: 'https://kea.kar.nic.in/cutoffs'
    },
    feePayment: {
      seatAcceptanceFee: 'Government Quota Tuition Fee (approx ₹30,000 - ₹98,000 per year)',
      paymentModes: ['E-Challan at Bank', 'Net Banking', 'UPI'],
      refundPolicy: 'Refund issued if seat surrendered within specified KEA timeline.'
    },
    reporting: {
      mode: 'Physical Reporting at College after downloading Admission Order',
      instructions: [
        'Select Choice 1 to freeze seat.',
        'Pay government quota fee online or via bank challan.',
        'Download KEA Admission Order and report to college.'
      ],
      requiredOriginals: ['KCET Admission Order', '7 Years Study Certificate', '10th & 12th Marksheet', 'Category Certificate']
    },
    faqs: [
      {
        question: 'Who is eligible for KCET government quota seats?',
        answer: 'Candidates who meet Karnataka domicile clauses (e.g. studied 7 years in Karnataka or parents satisfy Karnataka domicile criteria).'
      },
      {
        question: 'What is Choice 1 in KCET round allotment?',
        answer: 'Choice 1 means you are completely satisfied with the allotted seat, pay the fee, download admission order, and join the college.'
      }
    ]
  },

  {
    id: 'mcc',
    name: 'MCC',
    fullName: 'Medical Counselling Committee (NEET UG All India Quota 15%) 2025',
    badge: '100% AIIMS, JIPMER, Deemed Universities & 15% AIQ MBBS/BDS',
    logo: '🩺',
    description: 'National level online counselling for 15% All India Quota MBBS/BDS seats, 100% seats in AIIMS, JIPMER, Central Universities (BHU, AMU, DU), and Deemed Medical Universities.',
    targetExams: ['NEET UG'],
    participatingColleges: 'AIIMS New Delhi & 19 AIIMS Institutes, JIPMER Puducherry, MAMC Delhi, VMMC, BHU, AFMC, Deemed Medical Colleges',
    eligibility: 'Must qualify NEET UG 2025 with minimum qualifying percentile (50th percentile for General/EWS, 40th for SC/ST/OBC).',
    registration: {
      steps: [
        'Visit mcc.nic.in and click UG Medical Counselling.',
        'Register using NEET UG Application Number and Roll Number.',
        'Pay Refundable Security Deposit and Non-refundable Registration Fee.',
        'Proceed to Choice Filling & Locking.'
      ],
      fee: 'Non-refundable: ₹1,000 (AIQ/Central) / ₹5,000 (Deemed) + Refundable Security Deposit: ₹10,000 (AIQ) / ₹2,000,000 (Deemed)',
      url: 'https://mcc.nic.in',
      status: 'Open',
      lastDate: 'July 15, 2025'
    },
    requiredDocuments: [
      'NEET UG 2025 Admit Card & Scorecard / Rank Letter',
      'Class 10th & 12th Marksheet & Passing Certificate',
      '8 Passport Size Photographs (matching NEET Application)',
      'Provisional Allotment Letter generated online from MCC',
      'Identity Proof (Aadhaar / Passport / Driving License / PAN)',
      'Category Certificate (EWS / OBC-NCL / SC / ST as per Central List)'
    ],
    importantDates: [
      { event: 'MCC Round 1 Registration & Choice Filling', date: 'July 05 - July 15, 2025', isHot: true },
      { event: 'Round 1 Seat Allotment Result', date: 'July 18, 2025', isHot: true },
      { event: 'Round 2 Registration & Allotment', date: 'August 01 - August 10, 2025' },
      { event: 'Round 3 (Mop-Up) Allotment', date: 'August 22 - August 30, 2025', isHot: true },
      { event: 'Stray Vacancy Round', date: 'September 10, 2025' }
    ],
    choiceFilling: {
      strategy: 'Fill top AIIMS institutes (AIIMS New Delhi, AIIMS Bhopal, AIIMS Jodhpur) first, followed by top state medical colleges under AIQ quota (MAMC, VMMC, KGMU).',
      maxChoices: 'Unlimited Medical & Dental Colleges',
      mockSeatAllotmentDate: 'N/A',
      lockDeadline: 'July 15, 2025 (11:55 PM)',
      tips: [
        'Deemed Universities have higher annual fees (₹15L - ₹25L per year); check fee structure before selecting choices.',
        'Free Exit is available ONLY in Round 1.'
      ]
    },
    seatAllotment: {
      roundsCount: 4,
      allotmentMethod: 'NEET All India Merit Rank (AIR)',
      checkResultUrl: 'https://mcc.nic.in/result',
      prevYearCutoffsUrl: 'https://mcc.nic.in/orcr-archives'
    },
    feePayment: {
      seatAcceptanceFee: 'Adjusted against college tuition fee upon physical reporting.',
      paymentModes: ['Net Banking', 'Credit Card', 'Debit Card'],
      refundPolicy: 'Refundable Security Deposit refunded to original bank account if seat not allotted or properly surrendered.'
    },
    reporting: {
      mode: 'Physical Reporting with Original Certificates at Allotted Medical College',
      instructions: [
        'Download Allotment Letter from MCC Portal.',
        'Report physically within specified reporting dates.',
        'Undergo Medical Board examination at college.',
        'Pay first-year MBBS tuition fee.'
      ],
      requiredOriginals: ['NEET Rank Letter', 'Admit Card', '10th & 12th Marksheets', 'Central Category Certificate', '8 Photos']
    },
    faqs: [
      {
        question: 'What is Free Exit in MCC NEET Counselling?',
        answer: 'Free Exit allows candidates allotted a seat in Round 1 to choose not to join without forfeiting their refundable security deposit.'
      },
      {
        question: 'Are state quota medical seats covered under MCC?',
        answer: 'No, MCC handles 15% All India Quota, AIIMS, JIPMER, BHU, AMU & Deemed Universities. 85% State Quota seats are filled by respective State Medical Counselling authorities.'
      }
    ]
  },

  {
    id: 'state-counseling',
    name: 'State Counselling',
    fullName: 'Unified State Level Engineering, Medical & Ayush Admission Portals',
    badge: '85% State Quota Seats across all Indian States',
    logo: '🗺️',
    description: 'State government admission bodies handling 85% State Quota seats in Medical (NEET), Engineering (JEE/State CET), and Ayush/Pharmacy colleges across all 28 States & 8 UTs.',
    targetExams: ['JEE Main', 'NEET UG', 'State CETs', 'CUET'],
    participatingColleges: 'State Government Medical Colleges, State Engineering Universities & Aided/Unaided Institutions in your Domicile State.',
    eligibility: 'Domicile of respective State or passed Class 10/12 from schools located in that state (Rules vary by State Govt).',
    registration: {
      steps: [
        'Select your state (e.g. Rajasthan REAP, MP DTE, Haryana HSTES, Bihar UACE, Tamil Nadu TNEA, Gujarat ACPC).',
        'Fill State Domicile & Merit Application Form.',
        'Upload Domicile, Merit Scorecard & Category Certificates.',
        'Complete Choice Filling.'
      ],
      fee: '₹500 - ₹1,500 State Registration Charge',
      url: 'https://meuu.ai/state-counseling',
      status: 'Open',
      lastDate: 'July 31, 2025'
    },
    requiredDocuments: [
      'State Domicile Certificate / Residential Proof',
      'Entrance Exam Scorecard (JEE Main / NEET / State CET)',
      'Class 10th & 12th Marksheets & Passing Certificates',
      'State Category Certificate (OBC-NCL / SC / ST / EWS)',
      'Income Certificate (for Fee Concession & State Scholarships)'
    ],
    importantDates: [
      { event: 'State Registration Opens', date: 'Varies by State (June - July 2025)', isHot: true },
      { event: 'State Merit List Publication', date: 'July 15, 2025' },
      { event: 'Round 1 Seat Allotment', date: 'July 25, 2025', isHot: true },
      { event: 'State Mop-Up Round', date: 'August 20, 2025' }
    ],
    choiceFilling: {
      strategy: 'Map your state rank against previous year closing ranks for top state government colleges.',
      maxChoices: 'Unlimited',
      mockSeatAllotmentDate: 'Available in major states (e.g. Gujarat ACPC, MP DTE)',
      lockDeadline: 'July 20, 2025',
      tips: [
        'Check category reservation percentages in your state.',
        'Verify if tuition fee waiver (TFW / MMVY) options are available.'
      ]
    },
    seatAllotment: {
      roundsCount: 3,
      allotmentMethod: 'State Merit List & Reservation Rules',
      checkResultUrl: 'https://meuu.ai/state-results',
      prevYearCutoffsUrl: 'https://meuu.ai/state-cutoffs'
    },
    feePayment: {
      seatAcceptanceFee: 'State Part Academic Fee (₹10,000 - ₹25,000)',
      paymentModes: ['Net Banking', 'UPI', 'Debit/Credit Cards'],
      refundPolicy: 'Governed by respective State Admission Regulatory Authority.'
    },
    reporting: {
      mode: 'Document Scrutiny Center / Physical Reporting at College',
      instructions: [
        'Verify state merit rank on portal.',
        'Accept allotted seat and download Provisional Seat Letter.',
        'Report to designated Help Center or College.'
      ],
      requiredOriginals: ['State Domicile', 'Scorecard', '10th/12th Marksheets', 'Category Proof', 'Income Proof']
    },
    faqs: [
      {
        question: 'Which state counselling portals are integrated into MEUU AI?',
        answer: 'MEUU AI provides direct tracking for REAP (Rajasthan), DTE MP, TNEA (Tamil Nadu), ACPC (Gujarat), HSTES (Haryana), UACE (Bihar), OJEE (Odisha), JAC Delhi, and JAC Chandigarh.'
      },
      {
        question: 'How do I know if I need State Domicile for 85% quota?',
        answer: 'Most states require candidate or parent to hold a valid Domicile/PRC certificate or to have completed Class 10 & 12 from that state.'
      }
    ]
  }
];
