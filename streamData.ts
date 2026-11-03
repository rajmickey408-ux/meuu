import { StreamRoadmap } from '../types';

export const STREAM_ROADMAPS: Record<string, StreamRoadmap> = {
  'Science PCM': {
    id: 'pcm',
    title: 'Science PCM',
    shortName: 'PCM (Math)',
    badge: 'Engineering & Tech Path',
    matchPercentage: 95,
    colorGradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    borderColor: 'border-cyan-400/40',
    description: 'Focus on Physics, Chemistry, and Mathematics. Ideal for Engineering, Computer Science, AI/ML, Architecture, Pure Sciences, and Defense.',
    whyChoose: [
      'Highest demand for B.Tech CS, Data Science & AI engineering graduates',
      'Strong analytical and quantitative problem-solving foundation',
      'Diverse career choices including Engineering, Defense (NDA), Research & FinTech',
      'Direct eligibility for top central institutions like IITs, NITs, IIITs & BITS'
    ],
    keyExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'SRMJEEE', 'COMEDK', 'MHT CET', 'WBJEE', 'KCET', 'CUET UG'],
    recommendedColleges: ['IIT Delhi', 'IIT Bombay', 'BITS Pilani', 'DTU New Delhi', 'VIT Vellore', 'NIT Trichy'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 11 Foundation',
        subtitle: 'Core Concept Building',
        description: 'Master fundamentals of Mechanics, Calculus, Physical Chemistry & Vectors. Build daily study habits and conceptual clarity.',
        keyMilestones: ['Complete NCERT Class 11 Physics & Math', 'Solve HC Verma & RD Sharma fundamentals', 'Take weekly topic-wise diagnostic tests'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Preparation & Mocks',
        subtitle: 'Class 12 Boards & Test Series',
        description: 'Balance Class 12 board preparation with speed, accuracy, and full-length JEE/State CET mock test series.',
        keyMilestones: ['Maintain 85%+ in Class 12 Board Pre-boards', 'Complete 30+ full syllabus timed mock exams', 'Analyze error logs and weak area remediation'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Entrance Exams Phase',
        subtitle: 'National & State Entrance Tests',
        description: 'Appear for JEE Main (Sessions 1 & 2), JEE Advanced, and state/private entrance exams matching your target score range.',
        exams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'SRMJEEE', 'COMEDK', 'MHT CET', 'WBJEE', 'KCET', 'CUET UG'],
        keyMilestones: ['Aim for 98+ percentile in JEE Main', 'Clear JEE Advanced for IIT eligibility', 'Secure high percentile in BITSAT / State CETs'],
        iconName: 'Award'
      },
      {
        stepNumber: 4,
        title: 'Counselling Phase',
        subtitle: 'Seat Allocation & Choice Filling',
        description: 'Participate in JoSAA, CSAB, JAC Delhi, and state counselling portals. Strategy-driven choice filling based on NIRF rank & placements.',
        counselingPortals: ['JoSAA (IITs/NITs/IIITs)', 'CSAB Special Round', 'JAC Delhi (DTU/NSUT/IGDTUW)', 'REAP / COMEDK Counselling'],
        keyMilestones: ['Document verification & lock choices', 'Verify seat acceptance fees & reporting', 'Physical reporting at allocated institute'],
        iconName: 'Compass'
      },
      {
        stepNumber: 5,
        title: 'College Admission',
        subtitle: 'B.Tech / B.E. / B.Arch Degree',
        description: 'Enroll in 4-year B.Tech in CS, AI, Robotics, Electrical, or Mechanical Engineering. Build projects, open-source code & internships.',
        colleges: ['IIT Delhi', 'IIT Bombay', 'BITS Pilani', 'DTU Delhi', 'VIT Vellore', 'NIT Trichy'],
        keyMilestones: ['Maintain CGPA 8.0+', 'Complete 2 industry internships', 'Participate in hackathons & coding leagues'],
        iconName: 'Building2'
      },
      {
        stepNumber: 6,
        title: 'Engineering Career',
        subtitle: 'High Impact Professional Role',
        description: 'Graduate into top tech companies, research labs, startup ventures, or higher studies (M.Tech/MS/MBA).',
        keyMilestones: ['Campus Placements in top product firms', 'High-growth career trajectory in AI, Tech or Core Engineering', 'Continuous skill upscaling'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Software & AI Engineer', avgPackage: '₹14 - 35 LPA', growthRate: '32% Very High' },
      { role: 'Data Scientist & ML Architect', avgPackage: '₹16 - 38 LPA', growthRate: '35% Very High' },
      { role: 'Core Electrical / Robotics Lead', avgPackage: '₹10 - 22 LPA', growthRate: '22% High' },
      { role: 'Product Manager / FinTech Specialist', avgPackage: '₹18 - 40 LPA', growthRate: '28% High' }
    ]
  },

  'Science PCB': {
    id: 'pcb',
    title: 'Science PCB',
    shortName: 'PCB (Biology)',
    badge: 'Medical & Healthcare Path',
    matchPercentage: 92,
    colorGradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    borderColor: 'border-emerald-400/40',
    description: 'Focus on Physics, Chemistry, and Biology (Botany & Zoology). Ideal for MBBS, BDS, BAMS, BHMS, Pharmacy, Biotechnology, and Nursing.',
    whyChoose: [
      'Noble, rewarding healthcare and medical research career options',
      'High social impact and global demand for doctors & healthcare professionals',
      'Rapid growth in Biotechnology, Clinical Research & Medical Science',
      'Direct pathway to top government medical colleges like AIIMS & JIPMER'
    ],
    keyExams: ['NEET UG', 'AIIMS Nursing/Paramedical', 'CUET UG Biology', 'ICAR AIEEA', 'JIPMER Paramedical'],
    recommendedColleges: ['AIIMS New Delhi', 'CMC Vellore', 'JIPMER Puducherry', 'KGMU Lucknow', 'MAMC New Delhi'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 11 Foundation',
        subtitle: 'NCERT Mastery in Biology',
        description: 'Read NCERT Biology word-for-word. Understand Plant/Animal Physiology, Cell Biology, and Organic Chemistry fundamentals.',
        keyMilestones: ['100% thorough reading of Class 11 NCERT Biology', 'Solve 5000+ topic-wise Biology MCQs', 'Build formula sheets for Physics & Chemistry'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Preparation & Mocks',
        subtitle: 'Targeted NEET Practice',
        description: 'Rigorous revision of Human Physiology, Genetics & Ecology. Solve full-length 720-mark timed NEET mock tests.',
        keyMilestones: ['Score 650+ consistently in NEET full syllabus mocks', 'Master NCERT diagrams and line-by-line questions', 'Clear Class 12 Boards with 85%+'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Entrance Exams Phase',
        subtitle: 'National Medical Entrance',
        description: 'Appear for NEET UG for MBBS/BDS/BAMS, along with AIIMS/JIPMER Nursing & CUET for Allied Health Sciences.',
        exams: ['NEET UG', 'AIIMS Nursing', 'CUET UG', 'ICAR AIEEA'],
        keyMilestones: ['Aim for 660+ in NEET for Govt Medical College seat', 'Qualify for State Quotas (85% state seats)', 'Clear CUET for B.Sc Biotech/Genetics'],
        iconName: 'Award'
      },
      {
        stepNumber: 4,
        title: 'Counselling Phase',
        subtitle: 'MCC & State Quota Seat Allotment',
        description: 'Register for MCC (Medical Counselling Committee) 15% All India Quota and 85% State Counselling rounds.',
        counselingPortals: ['MCC (mcc.nic.in)', 'State Medical Counselling Authorities', 'AYUSH Admissions Central Counseling (AACCC)'],
        keyMilestones: ['Choice locking for top medical institutes', 'Biometric & original document verification', 'Security deposit & college reporting'],
        iconName: 'Compass'
      },
      {
        stepNumber: 5,
        title: 'College Admission',
        subtitle: 'MBBS / BDS / B.Pharm Degree',
        description: '5.5-year MBBS degree including 1-year rotatory internship, or 4-year B.Pharm / B.Sc Biotech in top clinical colleges.',
        colleges: ['AIIMS New Delhi', 'CMC Vellore', 'JIPMER', 'MAMC Delhi'],
        keyMilestones: ['Pass pre-clinical & clinical university exams', 'Complete mandatory clinical rotations', 'Prepare for NEXT / USMLE for specialization'],
        iconName: 'Building2'
      },
      {
        stepNumber: 6,
        title: 'Healthcare Career',
        subtitle: 'Doctor, Surgeon or Specialist',
        description: 'Practice as a licensed Doctor (General Physician/Surgeon/Specialist), Medical Researcher, or Hospital Administrator.',
        keyMilestones: ['MD / MS Specialization or Super Speciality (DM/MCh)', 'Set up clinical practice or join top super-specialty hospital', 'High prestige and lifelong career security'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Medical Specialist / Surgeon (MD/MS)', avgPackage: '₹18 - 45 LPA', growthRate: '28% High' },
      { role: 'Clinical Biochemist / Biotechnologist', avgPackage: '₹8 - 20 LPA', growthRate: '25% High' },
      { role: 'Pharmacologist / R&D Scientist', avgPackage: '₹9 - 22 LPA', growthRate: '24% High' },
      { role: 'Hospital Administrator & Healthcare Consultant', avgPackage: '₹12 - 28 LPA', growthRate: '22% High' }
    ]
  },

  'PCMB': {
    id: 'pcmb',
    title: 'PCMB',
    shortName: 'PCMB (Dual Focus)',
    badge: 'Ultimate Flexibility Path',
    matchPercentage: 90,
    colorGradient: 'from-blue-500 via-indigo-600 to-purple-600',
    borderColor: 'border-blue-400/40',
    description: 'Combines Physics, Chemistry, Math, and Biology. Offers ultimate freedom to pursue either Engineering, Medicine, Research, or Interdisciplinary Fields like Biomedical Engineering & Bioinformatics.',
    whyChoose: [
      'Maximum career flexibility - open doors for both JEE & NEET',
      'Ideal for emerging hybrid domains: Biomedical Engineering, Computational Biology & Neuroscience',
      'Eligibility for elite IISERs, NISER, and pure science BS-MS dual degrees',
      'No regret path if you decide to switch between Engineering and Medicine later'
    ],
    keyExams: ['JEE Main', 'NEET UG', 'IISER IAT', 'NISER NEST', 'ICAR AIEEA', 'CUET UG'],
    recommendedColleges: ['IISc Bengaluru', 'IISER Pune', 'IIT Madras (Biomedical)', 'AIIMS', 'BITS Pilani'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 11 Dual Track',
        subtitle: 'Math & Biology Balance',
        description: 'Structure balanced daily timetable for Calculus + Biology NCERT. Focus on Physics & Chemistry as the common bridge subjects.',
        keyMilestones: ['Master Class 11 Physics & Physical Chemistry', 'Complete NCERT Biology chapters & RD Sharma Math exercises', 'Determine whether JEE or NEET is your primary target'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Preparation & Mocks',
        subtitle: 'Multi-Exam Strategy',
        description: 'Take full-length mocks for your primary target exam (JEE or NEET) while keeping the secondary option primed.',
        keyMilestones: ['Clear Class 12 Boards with 88%+ aggregate', 'Take 20+ combined mock tests', 'Maintain formula books for Math and notes for Bio'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Entrance Exams Phase',
        subtitle: 'Engineering, Medical & Science Exams',
        description: 'Appear for JEE Main, NEET UG, IISER Aptitude Test (IAT), and NISER NEST for top research institutions.',
        exams: ['JEE Main', 'NEET UG', 'IISER IAT', 'NISER NEST', 'CUET UG'],
        keyMilestones: ['Qualify for JEE or NEET with top rank', 'Secure high percentile in IISER IAT for 5-Year BS-MS Dual Degree', 'Clear ICAR for Agricultural Science'],
        iconName: 'Award'
      },
      {
        stepNumber: 4,
        title: 'Counselling Phase',
        subtitle: 'Cross-Domain Allotment',
        description: 'Choose between Engineering (JoSAA), Medical (MCC), or Research (IISER JAC) based on your top rank result.',
        counselingPortals: ['JoSAA Counselling', 'MCC Medical Counselling', 'IISER Admissions Portal', 'ICAR Counselling'],
        keyMilestones: ['Finalize primary passion: B.Tech vs MBBS vs BS-MS Research', 'Complete seat acceptance & fee submission', 'Document audit'],
        iconName: 'Compass'
      },
      {
        stepNumber: 5,
        title: 'College Admission',
        subtitle: 'B.Tech / BS-MS / MBBS',
        description: 'Join top research or technical universities in Biomedical Tech, Genetics, Pharmacy, or Artificial Intelligence in Healthcare.',
        colleges: ['IISc Bengaluru', 'IISER Pune', 'IIT Madras', 'AIIMS New Delhi'],
        keyMilestones: ['Maintain academic excellence (CGPA 8.5+)', 'Publish research papers in scientific journals', 'Summer research fellowship at national labs'],
        iconName: 'Building2'
      },
      {
        stepNumber: 6,
        title: 'Interdisciplinary Career',
        subtitle: 'Innovator in Health-Tech & AI',
        description: 'Work at the cutting edge of Bio-Tech, Genome Editing, Medical Devices, Computational Biology, or Clinical Research.',
        keyMilestones: ['Global positions in pharma/tech multinationals', 'Patent filings and biotech startups', 'High growth in futuristic sectors'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Biomedical Engineer & Medical Device Designer', avgPackage: '₹12 - 28 LPA', growthRate: '30% Very High' },
      { role: 'Bioinformatician & Computational Geneticist', avgPackage: '₹14 - 32 LPA', growthRate: '32% Very High' },
      { role: 'Research Scientist (IISc / Global Labs)', avgPackage: '₹10 - 25 LPA', growthRate: '25% High' },
      { role: 'Health-Tech AI Specialist', avgPackage: '₹16 - 36 LPA', growthRate: '34% Very High' }
    ]
  },

  'Commerce': {
    id: 'commerce',
    title: 'Commerce',
    shortName: 'Commerce',
    badge: 'Business & Finance Path',
    matchPercentage: 91,
    colorGradient: 'from-amber-500 via-orange-600 to-rose-600',
    borderColor: 'border-amber-400/40',
    description: 'Focus on Accountancy, Business Studies, Economics, and Financial Management. Ideal for CA, CS, Finance, Investment Banking, Management (BBA/IPMAT), and Economics.',
    whyChoose: [
      'Direct pathway to high-paying careers in Corporate Finance, Banking & Consulting',
      'Prepares you for prestigious Chartered Accountancy (CA) & Company Secretary (CS) designations',
      'Integrated 5-year MBA opportunities directly after Class 12 via IPMAT in IIMs',
      'Strong commercial acumen, startup founding skills, and financial literacy'
    ],
    keyExams: ['CUET UG Commerce', 'IPMAT (IIM Indore/Rohtak)', 'CA Foundation', 'CSEET (CS)', 'NPAT (NMIMS)', 'SET (Symbiosis)'],
    recommendedColleges: ['SRCC New Delhi', 'IIM Indore (IPM)', 'Christ University Bangalore', 'Hindu College', 'NMIMS Mumbai'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 11 Fundamentals',
        subtitle: 'Accounting & Economics Principles',
        description: 'Build rock-solid clarity in Journal Entries, Balance Sheets, Microeconomics, and Business Environment basics.',
        keyMilestones: ['Master Double Entry Bookkeeping & Financial Statements', 'Understand Economic laws of Demand & Supply', 'Participate in school business quizzes'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Preparation & Mocks',
        subtitle: 'Boards + CA/IPMAT Prep',
        description: 'Balance Class 12 Accountancy & Macroeconomics board exam score with IPMAT quantitative aptitude and logical reasoning.',
        keyMilestones: ['Target 95%+ in Class 12 Commerce Board Exams', 'Complete 25+ timed aptitude & accounting mock tests', 'Solve previous 5-year CUET Commerce papers'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Entrance Exams Phase',
        subtitle: 'CUET, IPMAT & CA Foundation',
        description: 'Appear for CUET UG for top Delhi University colleges, IPMAT for 5-Year Integrated MBA at IIMs, and ICAI CA Foundation.',
        exams: ['CUET UG', 'IPMAT Indore/Rohtak', 'CA Foundation', 'NPAT', 'SET'],
        keyMilestones: ['Clear CUET with 780+/800 score for SRCC', 'Qualify IPMAT Written Ability Test & Personal Interview for IIM', 'Pass CA Foundation in 1st attempt'],
        iconName: 'Award'
      },
      {
        stepNumber: 4,
        title: 'Counselling Phase',
        subtitle: 'DU CSAS Portal & IIM Allotment',
        description: 'Submit choices on DU CSAS portal for B.Com (Hons) & BA Economics (Hons). Attend IIM PI interviews.',
        counselingPortals: ['Delhi University CSAS Portal', 'IIM IPM Admission Committee', 'Christ University Admission Portal'],
        keyMilestones: ['Choice filling for SRCC, Hindu, Hansraj, LSR', 'Document verification & seat allotment', 'Fee payment confirmation'],
        iconName: 'Compass'
      },
      {
        stepNumber: 5,
        title: 'College Admission',
        subtitle: 'B.Com (Hons) / BBA / CA Intermediate',
        description: 'Enroll in top commerce degree or pursue CA Intermediate articleship with top Big 4 accounting firms.',
        colleges: ['SRCC Delhi', 'IIM Indore', 'Christ University', 'LSR Delhi'],
        keyMilestones: ['Articleship training at EY, Deloitte, PwC or KPMG', 'Maintain 8.5+ CGPA in college', 'Complete financial modeling certifications'],
        iconName: 'Building2'
      },
      {
        stepNumber: 6,
        title: 'Finance & Leadership Career',
        subtitle: 'Chartered Accountant / Investment Banker',
        description: 'Step into roles as Chartered Accountant, Investment Banker, Financial Analyst, Chief Financial Officer (CFO), or Management Consultant.',
        keyMilestones: ['ICAI CA Final or CFA Charterholder designation', 'High-growth career in corporate finance or private equity', 'Leadership executive roles'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Chartered Accountant (CA)', avgPackage: '₹12 - 30 LPA', growthRate: '25% High' },
      { role: 'Investment Banker / Financial Analyst', avgPackage: '₹15 - 35 LPA', growthRate: '28% High' },
      { role: 'Management Consultant (McKinsey/BCG)', avgPackage: '₹18 - 40 LPA', growthRate: '30% Very High' },
      { role: 'Corporate CFO / Treasury Head', avgPackage: '₹25 - 60 LPA', growthRate: '22% High' }
    ]
  },

  'Arts': {
    id: 'arts',
    title: 'Arts',
    shortName: 'Arts / Humanities',
    badge: 'Civil Services & Creative Path',
    matchPercentage: 88,
    colorGradient: 'from-purple-500 via-fuchsia-600 to-pink-600',
    borderColor: 'border-purple-400/40',
    description: 'Focus on Political Science, History, Psychology, Sociology, Literature, and Media. Ideal for Civil Services (UPSC), Law (CLAT), Design, Journalism, Psychology, and Public Policy.',
    whyChoose: [
      'Unmatched foundation for UPSC Civil Services Examination (IAS/IFS/IPS)',
      'High-paying creative and strategic careers in Law, UI/UX Design, Media & PR',
      'Increasing demand for Corporate Psychologists, Policy Analysts & Content Strategists',
      'Direct admission to premier central universities (DU, JNU, BHU, TISS) via CUET'
    ],
    keyExams: ['CUET UG Arts', 'CLAT (Law)', 'NIFT Entrance Exam', 'NID DAT (Design)', 'NCHM JEE', 'TISS BAT'],
    recommendedColleges: ['St. Stephen’s Delhi', 'LSR Delhi', 'NLSIU Bengaluru', 'NIFT New Delhi', 'JNU New Delhi'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 11 Foundation',
        subtitle: 'Critical Thinking & Analysis',
        description: 'Develop strong analytical reading habits across World History, Political Theory, Psychology & Literature.',
        keyMilestones: ['Read daily editorials in national newspapers', 'Master NCERT Class 11 Political Science & History', 'Participate in Model United Nations (MUNs)'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Preparation & Mocks',
        subtitle: 'CUET & Law / Design Prep',
        description: 'Prepare for Class 12 Board exams alongside specialized entrance exam syllabus (Legal Aptitude for CLAT, Design Portfolio for NID/NIFT).',
        keyMilestones: ['Achieve 95%+ in Board Exams', 'Solve 30+ CUET General Test & Domain Mocks', 'Build a creative portfolio for NID/NIFT'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Entrance Exams Phase',
        subtitle: 'CUET, CLAT & Design Tests',
        description: 'Appear for CUET UG (Humanities), CLAT for 5-Year Integrated BA-LLB at NLUs, NIFT, and NID DAT.',
        exams: ['CUET UG', 'CLAT', 'NIFT', 'NID DAT', 'NCHM JEE'],
        keyMilestones: ['Secure top rank in CLAT for NLSIU Bengaluru', 'Clear CUET with 99+ percentile for St. Stephen’s / LSR', 'Clear NID Situation Test'],
        iconName: 'Award'
      },
      {
        stepNumber: 4,
        title: 'Counselling Phase',
        subtitle: 'Central Allotment & Seat Allocation',
        description: 'Apply on DU CSAS portal, CLAT Consortium seat allotment rounds, and NIFT counselling sessions.',
        counselingPortals: ['DU CSAS Portal', 'CLAT Consortium Portal', 'NIFT / NID Admission Portal'],
        keyMilestones: ['Submit college preferences', 'Document verification & seat confirmation', 'Fee reporting'],
        iconName: 'Compass'
      },
      {
        stepNumber: 5,
        title: 'College Admission',
        subtitle: 'BA (Hons) / BA-LLB / B.Des',
        description: 'Enroll in 3-4 year BA (Hons) program, 5-year Integrated Law degree, or 4-year Design & Media programs.',
        colleges: ['St. Stephen’s College', 'NLSIU Bengaluru', 'LSR New Delhi', 'NIFT Delhi'],
        keyMilestones: ['Maintain academic distinction', 'Complete internships at Supreme Court / Law firms / Media houses', 'UPSC foundation preparation'],
        iconName: 'Building2'
      },
      {
        stepNumber: 6,
        title: 'Administrative & Creative Career',
        subtitle: 'Civil Servant, Corporate Lawyer, Designer',
        description: 'Serve as an IAS/IFS Officer, Corporate Legal Advisor, UX/UI Lead Designer, International Journalist, or Policy Consultant.',
        keyMilestones: ['Clear UPSC Civil Services or Judicial Services Examination', 'Senior partner in law firm or Lead Creative Officer', 'Global policy advisory roles'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Civil Servant (IAS / IFS / IPS)', avgPackage: 'Govt Pay Level 10 + Perks', growthRate: 'Prestigious National' },
      { role: 'Corporate Lawyer / Legal Advisor', avgPackage: '₹14 - 36 LPA', growthRate: '28% High' },
      { role: 'UX/UI Lead Designer & Product Strategist', avgPackage: '₹12 - 28 LPA', growthRate: '30% Very High' },
      { role: 'Policy Analyst & Public Affairs Consultant', avgPackage: '₹10 - 24 LPA', growthRate: '22% High' }
    ]
  },

  'Diploma': {
    id: 'diploma',
    title: 'Diploma',
    shortName: 'Diploma',
    badge: 'Fast-Track Technical Path',
    matchPercentage: 86,
    colorGradient: 'from-teal-500 via-emerald-600 to-green-600',
    borderColor: 'border-teal-400/40',
    description: '3-Year Technical Diploma after Class 10 in Mechanical, Electrical, Computer, Civil, or Chemical Engineering. Provides fast job entry or 2nd year B.Tech Lateral Entry.',
    whyChoose: [
      'Immediate career opportunity after 3 years directly out of Class 10',
      'Direct Lateral Entry (2nd Year B.Tech) into top Engineering Colleges without repeating 11th/12th',
      'Hands-on practical workshop and laboratory training right from Day 1',
      'High demand for Junior Engineers (JE) in PSU government jobs (RRB, SSC JE, ISRO)'
    ],
    keyExams: ['JEECUP (UP Polytechnic)', 'Delhi CET', 'POLYCET', 'TS POLYCET', 'JEXPO', 'DCET Lateral Entry'],
    recommendedColleges: ['Government Polytechnic Mumbai', 'PUSA Polytechnic New Delhi', 'SJT Polytechnic Bangalore'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 10 Completion',
        subtitle: 'Basic Math & Science Focus',
        description: 'Secure 60%+ marks in Class 10 Board exams with strong fundamentals in Physics, Chemistry, and Geometry.',
        keyMilestones: ['Complete Class 10 Boards', 'Revise Class 9 & 10 Science & Mathematics formulas', 'Select target Polytechnic specialization'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Entrance Exam Phase',
        subtitle: 'State Polytechnic Entrance',
        description: 'Appear for state-level polytechnic entrance tests like JEECUP, Delhi CET, POLYCET, or JEXPO.',
        exams: ['JEECUP', 'Delhi CET', 'POLYCET', 'JEXPO'],
        keyMilestones: ['Secure top 1000 rank in State CET', 'Target top Government Polytechnic institutes', 'Complete document verification'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Counselling & Allotment',
        subtitle: 'Branch Selection',
        description: 'Fill branch choices (Computer, Electrical, Mechanical, Civil) during state polytechnic online counselling.',
        counselingPortals: ['State Board of Technical Education (SBTE) Portal', 'JEECUP Counselling', 'Delhi CET Portal'],
        keyMilestones: ['Choice locking for top Govt Polytechnic', 'Physical reporting and fee deposit', 'Hostel allotment'],
        iconName: 'Compass'
      },
      {
        stepNumber: 4,
        title: '3-Year Diploma Education',
        subtitle: 'Hands-on Technical Training',
        description: 'Undergo 6 semesters of rigorous workshop, drafting, circuit labs, and industrial project training.',
        colleges: ['Govt Polytechnic Mumbai', 'PUSA Polytechnic Delhi', 'SJT Polytechnic Bangalore'],
        keyMilestones: ['Maintain 75%+ semester marks', 'Complete 6-week industrial internship in 2nd year', 'Final year capstone technical project'],
        iconName: 'Building2'
      },
      {
        stepNumber: 5,
        title: 'Dual Career Milestone',
        subtitle: 'Junior Engineer vs B.Tech Lateral Entry',
        description: 'Choose between immediate job placement / Govt JE exams OR appear for Lateral Entry B.Tech entrance (DCET / ECET).',
        exams: ['DCET', 'ECET', 'LEET B.Tech'],
        keyMilestones: ['Clear Lateral Entry test for 2nd Year B.Tech in top engineering colleges', 'Or pass SSC JE / Railway Junior Engineer exam'],
        iconName: 'Award'
      },
      {
        stepNumber: 6,
        title: 'Engineering / Technical Career',
        subtitle: 'Junior Engineer / Technical Lead',
        description: 'Work as Junior Engineer (JE) in Govt/PSUs or complete B.Tech to become Senior System Engineer.',
        keyMilestones: ['Job security in Railways/CPWD/DRDO/ISRO', 'Accelerated career path to Senior Engineer', 'Technical expertise'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Govt Junior Engineer (SSC JE / RRB)', avgPackage: '₹6 - 12 LPA + Govt Quarters', growthRate: 'Govt Job Security' },
      { role: 'Industrial Automation Specialist', avgPackage: '₹5 - 10 LPA', growthRate: '20% High' },
      { role: 'B.Tech Graduate via Lateral Entry', avgPackage: '₹10 - 24 LPA', growthRate: '28% Very High' },
      { role: 'Site Engineer / CAD Technician', avgPackage: '₹4.5 - 9 LPA', growthRate: '18% Moderate' }
    ]
  },

  'Polytechnic': {
    id: 'polytechnic',
    title: 'Polytechnic',
    shortName: 'Polytechnic',
    badge: 'Practical Skill & Job Path',
    matchPercentage: 85,
    colorGradient: 'from-orange-500 via-amber-600 to-yellow-600',
    borderColor: 'border-orange-400/40',
    description: 'Practical, industry-aligned diploma courses focused on applied engineering, manufacturing, tool design, computer applications, and automation skills.',
    whyChoose: [
      'Affordable tuition fees in government polytechnic institutes across India',
      'Focus on real-world machinery, lab work, CAD/CAM drafting & IT tools',
      'Immediate campus placement upon 3-year diploma completion',
      'Flexible options to pursue lateral entry degree or start an independent workshop'
    ],
    keyExams: ['AP POLYCET', 'MP PPT', 'Bihar DCECE', 'Haryana DET', 'TS POLYCET'],
    recommendedColleges: ['Govt Polytechnic Pune', 'Govt Polytechnic Ahmedabad', 'PUSA Polytechnic'],
    steps: [
      {
        stepNumber: 1,
        title: 'Class 10 Prep',
        subtitle: 'Science & Math Base',
        description: 'Ensure clean understanding of Class 10 algebra, trigonometry, light, electricity, and chemistry.',
        keyMilestones: ['Clear Class 10 Board Exam', 'Focus on practical math applications', 'Apply for state polytechnic entrance exam'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Entrance & Registration',
        subtitle: 'State Polytechnic Test',
        description: 'Register and appear for AP POLYCET, MP PPT, Bihar DCECE, or Haryana DET state entrance test.',
        exams: ['AP POLYCET', 'MP PPT', 'Bihar DCECE', 'Haryana DET'],
        keyMilestones: ['Achieve high state merit rank', 'Download merit card', 'Gather income & reservation certificates'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Counselling & Branch Lock',
        subtitle: 'Institute Choice Filling',
        description: 'Participate in online seat allotment. Choose core technical trades like Automobile, Civil, Electrical, or IT.',
        counselingPortals: ['State Technical Education Board', 'DCECE Allotment Portal'],
        keyMilestones: ['Lock trade preferences', 'Seat allotment letter download', 'College document submission'],
        iconName: 'Compass'
      },
      {
        stepNumber: 4,
        title: 'Polytechnic Training',
        subtitle: 'Lab Work & Field Training',
        description: '3 years of intensive practical workshop learning, machine operations, circuit assembly, and software tools.',
        colleges: ['Govt Polytechnic Pune', 'Govt Polytechnic Ahmedabad', 'PUSA Polytechnic'],
        keyMilestones: ['Maintain zero backlogs', '6-month industrial apprenticeship', 'Technical project demonstration'],
        iconName: 'Building2'
      },
      {
        stepNumber: 5,
        title: 'Apprenticeship & Placements',
        subtitle: 'Industry Onboarding',
        description: 'Campus interviews by manufacturing, automotive, construction, and IT firms or National Apprenticeship Training (NATS).',
        keyMilestones: ['Receive company appointment letter', 'Register on NATS portal for Govt Stipend', 'Complete skill certifications'],
        iconName: 'Award'
      },
      {
        stepNumber: 6,
        title: 'Polytechnic Career',
        subtitle: 'Technical Specialist / Supervisor',
        description: 'Work as Plant Supervisor, CAD Designer, Service Engineer, or progress into B.Tech degree.',
        keyMilestones: ['Promotions to Plant Manager or Tech Lead', 'Option for part-time B.Tech degree', 'Financial independence early'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Plant Supervisor / Production Specialist', avgPackage: '₹5 - 10 LPA', growthRate: '20% High' },
      { role: 'CAD / CAM Drafting Engineer', avgPackage: '₹4.5 - 9 LPA', growthRate: '18% Moderate' },
      { role: 'Field Service & Maintenance Engineer', avgPackage: '₹5 - 11 LPA', growthRate: '22% High' },
      { role: 'Independent Workshop / Tech Entrepreneur', avgPackage: '₹6 - 20 LPA', growthRate: 'Self-Employed' }
    ]
  },

  'Other Career Paths': {
    id: 'other',
    title: 'Other Career Paths',
    shortName: 'Specialized Paths',
    badge: 'Alternative & Niche Opportunities',
    matchPercentage: 89,
    colorGradient: 'from-rose-500 via-pink-600 to-red-600',
    borderColor: 'border-rose-400/40',
    description: 'Explore high-growth specialized paths: Armed Forces (NDA), Merchant Navy (IMU CET), Architecture (NATA), Hotel Management (NCHM JEE), Design (UCEED), Animation & Digital Media.',
    whyChoose: [
      'Join the Indian Armed Forces (Army, Navy, Air Force) directly after Class 12 via NDA',
      'High-paying international seafaring career in Merchant Navy right after 10+2',
      'Creative careers in Architecture, Industrial Product Design & Game Development',
      'Fast-paced global hospitality & luxury brand management careers'
    ],
    keyExams: ['NDA 1 & 2', 'IMU CET (Merchant Navy)', 'NATA (Architecture)', 'UCEED (IIT Design)', 'NCHM JEE (Hotel Mgmt)'],
    recommendedColleges: ['National Defence Academy Pune', 'Indian Maritime University', 'IIT Bombay (IDC)', 'IHM Pusa Delhi'],
    steps: [
      {
        stepNumber: 1,
        title: 'Aptitude & Track Selection',
        subtitle: 'Specialized Discipline Choice',
        description: 'Identify your passion: Defense Services (NDA), Maritime Engineering, Architecture, Product Design, or Hospitality.',
        keyMilestones: ['Verify age & physical medical standards for Defense / Navy', 'Build drawing & spatial aptitude for NATA / UCEED', 'Research target service domain'],
        iconName: 'BookOpen'
      },
      {
        stepNumber: 2,
        title: 'Targeted Exam Preparation',
        subtitle: 'Written & Fitness / Skill Prep',
        description: 'Prepare for NDA written (Math + General Ability), IMU CET for Maritime, or NATA drawing/Aptitude tests.',
        keyMilestones: ['Maintain physical fitness for SSB Interview / Medicals', 'Solve last 10 years NDA / IMU CET / NATA question papers', 'Maintain 75%+ in 10+2'],
        iconName: 'Target'
      },
      {
        stepNumber: 3,
        title: 'Entrance Exams & Interviews',
        subtitle: 'National Entrance & SSB',
        description: 'Appear for NDA written exam followed by 5-day SSB Interview, or IMU CET, UCEED, NATA, and NCHM JEE.',
        exams: ['NDA 1 & 2', 'IMU CET', 'NATA', 'UCEED', 'NCHM JEE'],
        keyMilestones: ['Pass NDA Written & clear 5-Day SSB Interview & Medical Board', 'Achieve AIR under 500 in IMU CET / UCEED', 'Clear NATA with 120+ score'],
        iconName: 'Award'
      },
      {
        stepNumber: 4,
        title: 'Selection & Merit List',
        subtitle: 'Final Allotment',
        description: 'Receive joining instructions for National Defence Academy Khadakwasla, IMU Campuses, or top IHMs / Architecture Colleges.',
        counselingPortals: ['UPSC / Army Officers Selection Board', 'IMU Counselling Portal', 'COA NATA Allotment'],
        keyMilestones: ['Medical fitness certificate clearance', 'Issuance of call letter', 'Reporting at academy/college'],
        iconName: 'Compass'
      },
      {
        stepNumber: 5,
        title: 'Academy / College Training',
        subtitle: '3-4 Year Professional Training',
        description: 'Undergo military officer training at NDA Pune, B.Sc Nautical Science at IMU, B.Arch 5-year degree, or B.Des at IIT.',
        colleges: ['National Defence Academy Pune', 'IMU Chennai/Kolkata', 'IIT Bombay IDC', 'IHM Pusa'],
        keyMilestones: ['Commissioning parade / Sea cadet training / Design degree', 'Specialized tactical or professional training', 'Professional certification'],
        iconName: 'Building2'
      },
      {
        stepNumber: 6,
        title: 'Elite Specialized Career',
        subtitle: 'Commissioned Officer, Captain, Chief Designer',
        description: 'Serve as Lieutenant/Flying Officer in Defense, Captain/Chief Engineer in Merchant Navy, Chief Architect, or Hotel General Manager.',
        keyMilestones: ['Commissioned Officer in Indian Armed Forces', 'High tax-free foreign exchange earnings in Merchant Navy', 'Global prestige & adventure'],
        iconName: 'TrendingUp'
      }
    ],
    careerOutcomes: [
      { role: 'Commissioned Officer (Indian Army/Navy/Air Force)', avgPackage: 'Pay Level 10 (₹12-25LPA + Perks & Pension)', growthRate: 'Defense Honor' },
      { role: 'Merchant Navy Deck Officer / Chief Engineer', avgPackage: '₹18 - 45 LPA (Tax Free Overseas)', growthRate: '30% High' },
      { role: 'Chief UX/Product Designer (IIT Graduate)', avgPackage: '₹15 - 38 LPA', growthRate: '32% Very High' },
      { role: 'General Manager (Luxury Hotel & Hospitality)', avgPackage: '₹12 - 30 LPA', growthRate: '22% High' }
    ]
  }
};
