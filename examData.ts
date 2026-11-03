import { DetailedExam } from '../types';

export const DETAILED_EXAMS: DetailedExam[] = [
  // --- SCIENCE PCM ---
  {
    id: 'jee-main',
    name: 'JEE Main 2025',
    fullName: 'Joint Entrance Examination (Main)',
    category: 'National Level Engineering Entrance',
    stream: 'Science PCM',
    overview: 'JEE Main is conducted by the National Testing Agency (NTA) for admission to undergraduate engineering programs (B.Tech/B.E.) at NITs, IIITs, CFTIs, and as an eligibility test for JEE Advanced (IIT admission).',
    eligibility: 'Class 12 passed or appearing with Physics, Mathematics, and Chemistry/Biology/Technical Vocational subject. No age limit.',
    registrationDate: 'Nov 1, 2024 - Nov 30, 2024',
    lastDate: 'Nov 30, 2024 (11:50 PM)',
    examDate: 'Session 1: Jan 22 - Jan 31, 2025 | Session 2: Apr 1 - Apr 12, 2025',
    targetExamIsoDate: '2025-01-22T09:00:00Z',
    regStatus: 'Open',
    officialWebsite: 'https://jeemain.nta.nic.in',
    syllabus: [
      { subject: 'Physics', topics: ['Kinematics', 'Laws of Motion', 'Thermodynamics', 'Electrostatics', 'Current Electricity', 'Optics', 'Modern Physics'] },
      { subject: 'Chemistry', topics: ['Atomic Structure', 'Chemical Bonding', 'Equilibrium', 'Organic Chemistry Basics', 'Coordination Compounds', 'Electrochemistry'] },
      { subject: 'Mathematics', topics: ['Calculus (Limits, Integration)', 'Vectors & 3D Geometry', 'Matrices & Determinants', 'Coordinate Geometry', 'Probability', 'Algebra'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT)',
      duration: '3 Hours (180 Minutes)',
      totalMarks: 300,
      questionCount: 75,
      markingScheme: '+4 for correct answer, -1 for incorrect answer in MCQs & Numerical questions'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'General Cutoff Percentile', cutoffValue: '93.23 Percentile' },
      { categoryOrBranch: 'OBC-NCL Percentile', cutoffValue: '79.65 Percentile' },
      { categoryOrBranch: 'EWS Percentile', cutoffValue: '81.32 Percentile' },
      { categoryOrBranch: 'SC Percentile', cutoffValue: '60.09 Percentile' },
      { categoryOrBranch: 'NIT Trichy CS Branch', cutoffValue: 'AIR < 1,500' }
    ],
    difficulty: 'Extreme',
    acceptedColleges: ['31 NITs', '26 IIITs', '38 CFTIs', 'DTU Delhi', 'NSUT Delhi', '300+ State Engineering Colleges'],
    preparationStrategy: [
      'Master NCERT Chemistry line-by-line — 80% of inorganic questions come directly from NCERT text.',
      'Solve previous 5 years JEE Main NTA official question papers under 3-hour exam simulation.',
      'Focus heavily on high-weightage math topics: Vectors, 3D Geometry, Definite Integration, and Matrices.',
      'Maintain an Error Log notebook to record conceptual traps and formula mistakes.'
    ],
    faqs: [
      { question: 'Can I attempt both Session 1 and Session 2?', answer: 'Yes! NTA considers the best of the two scores for calculating your final NTA percentile and AIR rank.' },
      { question: 'Is NCERT sufficient for Physics?', answer: 'NCERT provides a good foundation, but solving HC Verma (Concepts of Physics) and Previous Year Questions (PYQs) is essential for numerical speed.' },
      { question: 'What is the minimum marks required for 99 Percentile?', answer: 'In recent papers, a score around 180-200 marks out of 300 generally secures 99+ Percentile.' }
    ],
    isSaved: true,
    isNotified: true
  },

  {
    id: 'jee-advanced',
    name: 'JEE Advanced 2025',
    fullName: 'Joint Entrance Examination (Advanced)',
    category: 'IIT Entrance Examination',
    stream: 'Science PCM',
    overview: 'JEE Advanced is conducted by one of the 7 zonal IITs under the guidance of the Joint Admission Board (JAB). It is the sole gateway for admission to Bachelor degree programs in the 23 IITs across India.',
    eligibility: 'Must be in top 2,50,000 successful candidates in JEE Main 2025. Age limit: Born on or after Oct 1, 2000.',
    registrationDate: 'Apr 25, 2025 - May 2, 2025',
    lastDate: 'May 2, 2025',
    examDate: 'May 18, 2025 (Paper 1: 9 AM - 12 PM | Paper 2: 2:30 PM - 5:30 PM)',
    targetExamIsoDate: '2025-05-18T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://jeeadv.ac.in',
    syllabus: [
      { subject: 'Physics', topics: ['Rotational Mechanics', 'Electromagnetism', 'Wave Optics', 'Thermal Physics', 'Modern Physics & Quantum'] },
      { subject: 'Chemistry', topics: ['Reaction Mechanisms (Organic)', 'Thermodynamics & Kinetics', 'Coordination Chemistry', 'Qualitative Analysis'] },
      { subject: 'Mathematics', topics: ['Advanced Calculus', 'Vectors & 3D Geometry', 'Complex Numbers', 'Probability & Combinatorics', 'Conic Sections'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT - 2 Papers mandatory)',
      duration: '6 Hours Total (2 Papers of 3 Hours each)',
      totalMarks: 360,
      questionCount: 108,
      markingScheme: 'Variable marking: Single Correct, Multiple Correct (+4/-2 with partial marking), Numerical & Matching'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'IIT Bombay Computer Science', cutoffValue: 'AIR 1 - 68' },
      { categoryOrBranch: 'IIT Delhi Computer Science', cutoffValue: 'AIR 1 - 115' },
      { categoryOrBranch: 'General Category Qualifying Marks', cutoffValue: '109 / 360 Marks' }
    ],
    difficulty: 'Extreme',
    acceptedColleges: ['23 Indian Institutes of Technology (IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur, etc.)'],
    preparationStrategy: [
      'Focus on deep multi-concept problem solving rather than simple formula substitution.',
      'Practice multiple-correct type questions with negative and partial marking awareness.',
      'Build physical and mental stamina for attempting two rigorous 3-hour papers on the same day.'
    ],
    faqs: [
      { question: 'How many times can a student attempt JEE Advanced?', answer: 'A student can attempt JEE Advanced maximum 2 times in consecutive years after passing Class 12.' }
    ],
    isSaved: false,
    isNotified: false
  },

  {
    id: 'bitsat',
    name: 'BITSAT 2025',
    fullName: 'BITS Admission Test 2025',
    category: 'Deemed University Engineering Entrance',
    stream: 'Science PCM',
    overview: 'BITSAT is a national computer-based online test for admission to Integrated First Degree programs (B.E., B.Pharm, M.Sc) at BITS Pilani campuses in Pilani, Goa, and Hyderabad.',
    eligibility: 'Passed Class 12 with Physics, Chemistry, and Mathematics with minimum 75% aggregate in PCM and 60% in each subject.',
    registrationDate: 'Jan 15, 2025 - Apr 10, 2025',
    lastDate: 'Apr 10, 2025',
    examDate: 'Session 1: May 20 - May 24, 2025 | Session 2: Jun 22 - Jun 26, 2025',
    targetExamIsoDate: '2025-05-20T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://bitsadmission.com',
    syllabus: [
      { subject: 'Physics & Chemistry', topics: ['NCERT Class 11 & 12 Physics & Chemistry Complete Syllabus'] },
      { subject: 'Mathematics', topics: ['Algebra, Trigonometry, Calculus, Vectors & Coordinate Geometry'] },
      { subject: 'English Proficiency & Logical Reasoning', topics: ['Grammar, Vocabulary, Reading Comprehension, Verbal Reasoning, Analogy, Patterns'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT)',
      duration: '3 Hours (180 Minutes)',
      totalMarks: 390,
      questionCount: 130,
      markingScheme: '+3 for correct answer, -1 for incorrect answer. 12 Bonus questions available if all 130 attempted!'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'BITS Pilani Computer Science', cutoffValue: 'Score 331 / 390' },
      { categoryOrBranch: 'BITS Goa Computer Science', cutoffValue: 'Score 302 / 390' },
      { categoryOrBranch: 'BITS Hyderabad Computer Science', cutoffValue: 'Score 298 / 390' }
    ],
    difficulty: 'High',
    acceptedColleges: ['BITS Pilani Campus', 'BITS KK Birla Goa Campus', 'BITS Hyderabad Campus', 'BITS Dubai Campus'],
    preparationStrategy: [
      'Focus on SPEED and ACCURACY — BITSAT tests 130 questions in 180 minutes.',
      'Do not ignore English & Logical Reasoning (gives 75 vital marks out of 390).',
      'Attempt mock tests on BITSAT-style interface to master quick decision making.'
    ],
    faqs: [
      { question: 'Is there direct admission for Board Toppers?', answer: 'Yes! First rank holders in any central/state board are offered direct admission to the branch of their choice in BITS.' }
    ],
    isSaved: true,
    isNotified: false
  },

  {
    id: 'viteee',
    name: 'VITEEE 2025',
    fullName: 'VIT Engineering Entrance Examination',
    category: 'Private University Entrance Test',
    stream: 'Science PCM',
    overview: 'VITEEE is conducted by Vellore Institute of Technology for admission to B.Tech programs across VIT Vellore, Chennai, AP, and Bhopal campuses.',
    eligibility: 'Class 12 with min 60% aggregate in Physics, Chemistry, and Mathematics/Biology.',
    registrationDate: 'Nov 1, 2024 - Mar 31, 2025',
    lastDate: 'Mar 31, 2025',
    examDate: 'Apr 21 - Apr 27, 2025',
    targetExamIsoDate: '2025-04-21T09:00:00Z',
    regStatus: 'Open',
    officialWebsite: 'https://viteee.vit.ac.in',
    syllabus: [
      { subject: 'Physics, Chem & Math', topics: ['Class 11 & 12 Board Level Fundamentals'] },
      { subject: 'Aptitude & English', topics: ['Data Interpretation, Syllogisms, Number Series, Basic Grammar'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT)',
      duration: '2 Hours 30 Minutes',
      totalMarks: 125,
      questionCount: 125,
      markingScheme: '+1 for correct, NO negative marking!'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'VIT Vellore CS Category 1', cutoffValue: 'Rank < 5,000' },
      { categoryOrBranch: 'VIT Chennai CS Category 1', cutoffValue: 'Rank < 14,000' }
    ],
    difficulty: 'Moderate',
    acceptedColleges: ['VIT Vellore', 'VIT Chennai', 'VIT AP (Amaravati)', 'VIT Bhopal'],
    preparationStrategy: [
      'Take advantage of NO negative marking — attempt all 125 questions.',
      'Maintain steady speed: average 1 minute per question.'
    ],
    faqs: [
      { question: 'Are there fee categories in VIT?', answer: 'Yes, VIT admissions are divided into Categories 1 to 5 based on rank; Category 1 has the lowest tuition fees.' }
    ],
    isSaved: false,
    isNotified: true
  },

  {
    id: 'comedk',
    name: 'COMEDK UGET 2025',
    fullName: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka',
    category: 'State Level Engineering Entrance',
    stream: 'Science PCM',
    overview: 'COMEDK UGET is an all-India computer-based test conducted for entrance to 150+ top private engineering colleges in Karnataka state (including RVCE, BMSCE, MSRIT).',
    eligibility: 'Passed Class 12 with Physics, Chemistry, and Math with minimum 45% aggregate.',
    registrationDate: 'Feb 1, 2025 - Apr 10, 2025',
    lastDate: 'Apr 10, 2025',
    examDate: 'May 11, 2025',
    targetExamIsoDate: '2025-05-11T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://comedk.org',
    syllabus: [
      { subject: 'PCM', topics: ['Class 11 & 12 Physics, Chemistry, and Mathematics syllabus based on CBSE / Karnataka PUC board'] }
    ],
    pattern: {
      mode: 'Online CBT',
      duration: '3 Hours',
      totalMarks: 180,
      questionCount: 180,
      markingScheme: '+1 for correct answer, NO negative marking'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'RV College of Engineering (RVCE) CS', cutoffValue: 'Rank < 400' },
      { categoryOrBranch: 'BMS College of Engineering CS', cutoffValue: 'Rank < 1,200' },
      { categoryOrBranch: 'MS Ramaiah Institute of Tech CS', cutoffValue: 'Rank < 1,500' }
    ],
    difficulty: 'Moderate',
    acceptedColleges: ['RVCE Bangalore', 'BMS College of Engineering', 'MSRIT Bangalore', 'Dayananda Sagar', '150+ Karnataka Colleges'],
    preparationStrategy: [
      'Focus on NCERT level concepts and speed; aim to attempt all 180 questions since there is zero negative marking.',
      'Practice mock tests to build rapid calculation skills for Physics & Math.'
    ],
    faqs: [
      { question: 'Can non-Karnataka students apply for COMEDK?', answer: 'Yes! COMEDK is open to all eligible Indian citizens across all states.' }
    ],
    isSaved: false,
    isNotified: false
  },

  // --- SCIENCE PCB ---
  {
    id: 'neet-ug',
    name: 'NEET UG 2025',
    fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
    category: 'National Medical Entrance Exam',
    stream: 'Science PCB',
    overview: 'NEET UG is the single nationwide entrance test conducted by NTA for admission to MBBS, BDS, BAMS, BHMS, BSMS, BUMS, and BVSc & AH courses in all medical colleges across India including AIIMS & JIPMER.',
    eligibility: 'Passed Class 12 with Physics, Chemistry, Biology/Biotechnology & English. Minimum 50% marks for General (40% for SC/ST/OBC). Minimum age: 17 years.',
    registrationDate: 'Feb 9, 2025 - Mar 16, 2025',
    lastDate: 'Mar 16, 2025',
    examDate: 'May 4, 2025 (2:00 PM - 5:20 PM)',
    targetExamIsoDate: '2025-05-04T14:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://neet.nta.nic.in',
    syllabus: [
      { subject: 'Biology', topics: ['Botany & Zoology: Diversity in Living World, Cell Biology, Genetics & Evolution, Human Physiology, Plant Physiology, Ecology'] },
      { subject: 'Physics', topics: ['Mechanics, Electrostatics, Current Electricity, Optics, Thermodynamics, Modern Physics'] },
      { subject: 'Chemistry', topics: ['Physical Chemistry, Organic Mechanisms, Inorganic NCERT Reactions, Biomolecules, Polymers'] }
    ],
    pattern: {
      mode: 'Pen and Paper (OMR Sheet based)',
      duration: '3 Hours 20 Minutes (200 Minutes)',
      totalMarks: 720,
      questionCount: '200 Questions (180 to be attempted)',
      markingScheme: '+4 for correct answer, -1 for incorrect answer'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'General Category Qualifying Percentile', cutoffValue: '50th Percentile (~164/720)' },
      { categoryOrBranch: 'Govt Medical College MBBS AIQ Cutoff', cutoffValue: '650+ Marks out of 720' },
      { categoryOrBranch: 'AIIMS New Delhi MBBS Cutoff', cutoffValue: '705+ Marks (AIR < 50)' }
    ],
    difficulty: 'Extreme',
    acceptedColleges: ['AIIMS New Delhi & 20 new AIIMS', 'JIPMER Puducherry', 'MAMC New Delhi', 'KGMU Lucknow', '600+ Govt & Private Medical Colleges'],
    preparationStrategy: [
      'Read NCERT Biology at least 10-15 times line-by-line; memorize diagrams, examples, and scientist notes.',
      'Solve 15 years NEET & AIPMT past question papers repeatedly.',
      'Practice OMR bubbling speed to avoid last-minute filling errors.'
    ],
    faqs: [
      { question: 'Is there an upper age limit for NEET UG?', answer: 'No! The Supreme Court removed the upper age limit for NEET UG.' },
      { question: 'How many questions are asked in Biology?', answer: 'Biology has 100 questions (50 Botany + 50 Zoology), out of which 90 must be attempted for a total of 360 marks.' }
    ],
    isSaved: true,
    isNotified: true
  },

  {
    id: 'aiims-nursing',
    name: 'AIIMS B.Sc Nursing / Paramedical 2025',
    fullName: 'AIIMS Entrance Exam for B.Sc (Hons) Nursing & Paramedical',
    category: 'National Nursing & Allied Health Exam',
    stream: 'Science PCB',
    overview: 'Conducted by AIIMS New Delhi for admission to 4-year B.Sc (Hons) Nursing and 3-year Paramedical programs across AIIMS institutes.',
    eligibility: 'Class 12 with Physics, Chemistry, Biology & English with min 55% marks (Only female candidates eligible for B.Sc Nursing).',
    registrationDate: 'Feb 15, 2025 - Mar 25, 2025',
    lastDate: 'Mar 25, 2025',
    examDate: 'Jun 8, 2025',
    targetExamIsoDate: '2025-06-08T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://aiimsexams.ac.in',
    syllabus: [
      { subject: 'PCB + General Knowledge', topics: ['Physics (30 Qs), Chemistry (30 Qs), Biology (30 Qs), General Knowledge (10 Qs)'] }
    ],
    pattern: {
      mode: 'Online Computer Based Test (CBT)',
      duration: '2 Hours (120 Minutes)',
      totalMarks: 100,
      questionCount: 100,
      markingScheme: '+1 for correct, -1/3 for incorrect'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'AIIMS New Delhi Nursing', cutoffValue: 'Score 70+/100' }
    ],
    difficulty: 'Moderate',
    acceptedColleges: ['AIIMS New Delhi', 'AIIMS Bhopal', 'AIIMS Bhubaneswar', 'AIIMS Jodhpur', 'AIIMS Rishikesh'],
    preparationStrategy: ['Master NCERT Biology & basic Physics numericals along with daily current affairs for GK.'],
    faqs: [
      { question: 'Is B.Sc Nursing open for male candidates in AIIMS?', answer: 'AIIMS B.Sc (Hons) Nursing is currently reserved for female candidates, while Paramedical courses are open to both male and female candidates.' }
    ],
    isSaved: false,
    isNotified: false
  },

  // --- PCMB ---
  {
    id: 'iiser-iat',
    name: 'IISER IAT 2025',
    fullName: 'IISER Aptitude Test 2025',
    category: 'Premier Science Research Entrance',
    stream: 'PCMB',
    overview: 'IISER IAT is the gateway for 5-Year BS-MS Dual Degree programs and 4-Year BS programs at the 7 premier Indian Institutes of Science Education and Research (IISERs) and IIT Madras (Medical Sciences).',
    eligibility: 'Passed Class 12 with Science Stream (PCM/PCB/PCMB) with min 60% aggregate.',
    registrationDate: 'Mar 1, 2025 - May 10, 2025',
    lastDate: 'May 10, 2025',
    examDate: 'Jun 9, 2025',
    targetExamIsoDate: '2025-06-09T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://iiseradmission.in',
    syllabus: [
      { subject: 'Physics, Chem, Math & Bio', topics: ['Class 11 & 12 NCERT curriculum across all four subjects (15 questions per subject)'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT)',
      duration: '3 Hours',
      totalMarks: 240,
      questionCount: 60,
      markingScheme: '+4 for correct answer, -1 for incorrect'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'IISER Pune BS-MS Cutoff', cutoffValue: 'AIR < 500' },
      { categoryOrBranch: 'IISER Kolkata BS-MS Cutoff', cutoffValue: 'AIR < 1,200' }
    ],
    difficulty: 'High',
    acceptedColleges: ['IISER Pune', 'IISER Kolkata', 'IISER Mohali', 'IISER Bhopal', 'IISER Thiruvananthapuram', 'IISER Tirupati', 'IISER Berhampur'],
    preparationStrategy: ['PCMB students have an advantage because IAT tests Physics, Chemistry, Mathematics AND Biology.'],
    faqs: [
      { question: 'Can PCM or PCB students attempt IAT?', answer: 'Yes! However, PCMB students can attempt all 4 sections for maximum score.' }
    ],
    isSaved: true,
    isNotified: false
  },

  // --- COMMERCE ---
  {
    id: 'cuet-ug-commerce',
    name: 'CUET UG 2025 (Commerce)',
    fullName: 'Common University Entrance Test (UG)',
    category: 'Central Universities Entrance Test',
    stream: 'Commerce',
    overview: 'CUET UG conducted by NTA is the mandatory single-window examination for admission to undergraduate commerce courses (B.Com Hons, BBA, BA Economics) in Delhi University (DU), BHU, Jamia Millia, and 200+ universities.',
    eligibility: 'Passed Class 12 from any recognized board in relevant subjects.',
    registrationDate: 'Feb 27, 2025 - Mar 31, 2025',
    lastDate: 'Mar 31, 2025',
    examDate: 'May 15 - May 31, 2025',
    targetExamIsoDate: '2025-05-15T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://exams.nta.ac.in/CUET-UG',
    syllabus: [
      { subject: 'Domain Subjects', topics: ['Accountancy, Business Studies, Economics, Mathematics / Applied Math'] },
      { subject: 'Language & General Test', topics: ['English Language Reading Comprehension, General Awareness, Numerical Ability & Reasoning'] }
    ],
    pattern: {
      mode: 'Hybrid Mode (CBT / Pen-Paper)',
      duration: '45 Minutes per Domain paper (60 Mins for Accountancy/Math)',
      totalMarks: '800 (for 4 domain papers)',
      questionCount: '50 Questions (40 to be attempted per subject)',
      markingScheme: '+5 for correct answer, -1 for incorrect'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'SRCC B.Com (Hons) Cutoff', cutoffValue: '782+ / 800' },
      { categoryOrBranch: 'Hindu College B.Com (Hons)', cutoffValue: '775+ / 800' },
      { categoryOrBranch: 'LSR College B.Com (Hons)', cutoffValue: '770+ / 800' }
    ],
    difficulty: 'High',
    acceptedColleges: ['SRCC Delhi', 'Hindu College', 'Hansraj College', 'LSR Delhi', 'Christ University', 'BHU Varanasi'],
    preparationStrategy: [
      'NCERT Class 12 textbooks are the absolute bible for Accountancy, Economics & BST domain subjects.',
      'Practice mock tests with strict timer management (45 mins passes very fast!).'
    ],
    faqs: [
      { question: 'Is Mathematics compulsory for B.Com Hons in DU?', answer: 'In DU, you can choose either Mathematics/Applied Math OR Accountancy along with one Language and two domain subjects for B.Com (Hons).' }
    ],
    isSaved: true,
    isNotified: true
  },

  {
    id: 'ipmat',
    name: 'IPMAT 2025 (IIM Indore / Rohtak)',
    fullName: 'Integrated Programme in Management Aptitude Test',
    category: 'Premier Management Entrance',
    stream: 'Commerce',
    overview: 'IPMAT is conducted by IIM Indore and IIM Rohtak for direct admission to their 5-year Integrated Programme in Management (BBA + MBA dual degree) straight after Class 12.',
    eligibility: 'Passed Class 12 with minimum 60% aggregate (55% for SC/ST/PwD). Born on or after Aug 1, 2005.',
    registrationDate: 'Feb 14, 2025 - Apr 10, 2025',
    lastDate: 'Apr 10, 2025',
    examDate: 'May 23, 2025',
    targetExamIsoDate: '2025-05-23T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://www.iimidr.ac.in',
    syllabus: [
      { subject: 'Quantitative Ability (SA)', topics: ['Short Answer Math: Higher Algebra, Numbers, P&C, Probability'] },
      { subject: 'Quantitative Ability (MCQ)', topics: ['Arithmetic, Geometry, Modern Math, Mensuration'] },
      { subject: 'Verbal Ability (MCQ)', topics: ['Vocabulary, Grammar, Reading Comprehension, Para Jumbles'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT) + Personal Interview (PI)',
      duration: '2 Hours (120 Minutes)',
      totalMarks: 360,
      questionCount: 90,
      markingScheme: '+4 for correct answer, -1 for incorrect (no negative marking in Short Answer section)'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'IIM Indore Quant SA Sectional', cutoffValue: '12 Marks' },
      { categoryOrBranch: 'IIM Indore Quant MCQ Sectional', cutoffValue: '37 Marks' },
      { categoryOrBranch: 'IIM Indore Verbal Sectional', cutoffValue: '125 Marks' }
    ],
    difficulty: 'High',
    acceptedColleges: ['IIM Indore', 'IIM Rohtak', 'IIM Ranchi', 'IIM Bodh Gaya', 'IIM Jammu', 'Nirma University', 'TAPMI'],
    preparationStrategy: [
      'Focus heavily on Quantitative Aptitude accuracy and speed.',
      'Build vocabulary and reading stamina for 40 verbal comprehension questions.'
    ],
    faqs: [
      { question: 'Do I get an IIM MBA degree without giving CAT?', answer: 'Yes! IPMAT selected students directly complete their MBA at IIM without taking CAT after 3 years.' }
    ],
    isSaved: false,
    isNotified: false
  },

  {
    id: 'ca-foundation',
    name: 'CA Foundation June 2025',
    fullName: 'ICAI Chartered Accountancy Foundation Examination',
    category: 'Professional Accounting Certification',
    stream: 'Commerce',
    overview: 'CA Foundation is the entry-level examination conducted by the Institute of Chartered Accountants of India (ICAI) to qualify for the Chartered Accountancy course.',
    eligibility: 'Registered with ICAI Board of Studies after passing Class 10, and appeared/passed Class 12.',
    registrationDate: 'Feb 1, 2025 - Feb 23, 2025',
    lastDate: 'Feb 23, 2025',
    examDate: 'Jun 20 - Jun 26, 2025',
    targetExamIsoDate: '2025-06-20T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://icai.org',
    syllabus: [
      { subject: 'Paper 1 & 2 (Subjective)', topics: ['Accounting (100 Marks), Business Laws (100 Marks)'] },
      { subject: 'Paper 3 & 4 (Objective)', topics: ['Quantitative Aptitude (100 Marks), Business Economics (100 Marks)'] }
    ],
    pattern: {
      mode: 'Offline Pen & Paper (2 Subjective + 2 Objective OMR papers)',
      duration: '3 Hours for Papers 1 & 2 | 2 Hours for Papers 3 & 4',
      totalMarks: 400,
      questionCount: 'Mixed Format',
      markingScheme: 'Min 40% in each paper and 50% aggregate overall required to pass'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'Qualifying Pass Percentage', cutoffValue: '25% - 30% overall pass rate' }
    ],
    difficulty: 'High',
    acceptedColleges: ['ICAI (Institute of Chartered Accountants of India) - Gateway to CA Intermediate & Articleship'],
    preparationStrategy: ['Solve ICAI Study Material questions and Revision Test Papers (RTPs) carefully.'],
    faqs: [
      { question: 'How many papers are there in CA Foundation?', answer: 'There are 4 papers: Accounting, Business Laws, Quantitative Aptitude, and Business Economics.' }
    ],
    isSaved: true,
    isNotified: false
  },

  // --- ARTS ---
  {
    id: 'clat',
    name: 'CLAT 2025',
    fullName: 'Common Law Admission Test',
    category: 'National Law Entrance Examination',
    stream: 'Arts',
    overview: 'CLAT is a national-level entrance exam conducted by the Consortium of National Law Universities for admission to 5-year integrated LL.B (BA LL.B, BBA LL.B) degree programs across 24 NLUs.',
    eligibility: 'Passed Class 12 with minimum 45% marks (40% for SC/ST). No upper age limit.',
    registrationDate: 'Jul 15, 2024 - Nov 10, 2024',
    lastDate: 'Nov 10, 2024',
    examDate: 'Dec 1, 2024 (2:00 PM - 4:00 PM)',
    targetExamIsoDate: '2024-12-01T14:00:00Z',
    regStatus: 'Closed',
    officialWebsite: 'https://consortiumofnlus.ac.in',
    syllabus: [
      { subject: 'Passage-Based Sections', topics: ['English Language, Current Affairs & GK, Legal Reasoning, Logical Reasoning, Quantitative Techniques'] }
    ],
    pattern: {
      mode: 'Offline Pen & Paper (OMR)',
      duration: '2 Hours (120 Minutes)',
      totalMarks: 120,
      questionCount: 120,
      markingScheme: '+1 for correct, -0.25 for incorrect'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'NLSIU Bengaluru BA-LLB', cutoffValue: 'AIR 1 - 100 (Score ~100/120)' },
      { categoryOrBranch: 'NALSAR Hyderabad', cutoffValue: 'AIR 101 - 180' }
    ],
    difficulty: 'Extreme',
    acceptedColleges: ['24 National Law Universities (NLSIU, NALSAR, WBNUJS, NLIU, NLU Jodhpur, etc.)'],
    preparationStrategy: ['Build daily reading habit of editorials in The Hindu or Indian Express to improve reading speed.'],
    faqs: [
      { question: 'Is prior legal knowledge required for CLAT?', answer: 'No! Legal reasoning passages test your ability to apply rules given directly inside the text passage.' }
    ],
    isSaved: true,
    isNotified: true
  },

  {
    id: 'nift-entrance',
    name: 'NIFT Entrance Exam 2025',
    fullName: 'National Institute of Fashion Technology Entrance Test',
    category: 'Design & Fashion Technology Entrance',
    stream: 'Arts',
    overview: 'NIFT Entrance Test conducted by NTA offers admission to Bachelor of Design (B.Des) and Bachelor of Fashion Technology (B.F.Tech) at 18 NIFT campuses across India.',
    eligibility: 'Passed Class 12 from any recognized board for B.Des (PCM required for B.F.Tech). Maximum age: 24 years.',
    registrationDate: 'Dec 5, 2024 - Jan 8, 2025',
    lastDate: 'Jan 8, 2025',
    examDate: 'Feb 9, 2025',
    targetExamIsoDate: '2025-02-09T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://nift.ac.in',
    syllabus: [
      { subject: 'CAT (Creative Ability Test)', topics: ['Intuitive Design, Illustration Skills, Color Concepts, Observation Skills'] },
      { subject: 'GAT (General Ability Test)', topics: ['Quantitative Ability, Communication Ability, English Comprehension, Analytical Reasoning'] }
    ],
    pattern: {
      mode: 'Paper-based CAT + Computer-based GAT + Situation Test',
      duration: '2 Hours GAT + 3 Hours CAT',
      totalMarks: 100,
      questionCount: '100 GAT + 3 Creative Tasks',
      markingScheme: 'GAT (+1/-0.25) | CAT evaluated by expert design panel'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'NIFT New Delhi Fashion Design', cutoffValue: 'CMR Rank < 100' }
    ],
    difficulty: 'High',
    acceptedColleges: ['NIFT New Delhi', 'NIFT Mumbai', 'NIFT Bengaluru', 'NIFT Kolkata', '18 NIFT Campuses'],
    preparationStrategy: ['Practice perspective drawing, product sketching, shadow shading, and material handling for Situation Test.'],
    faqs: [
      { question: 'What is the Situation Test in NIFT?', answer: 'Shortlisted candidates create 3D material models using 3D craft materials provided on the spot.' }
    ],
    isSaved: false,
    isNotified: false
  },

  // --- DIPLOMA & POLYTECHNIC ---
  {
    id: 'jeecup',
    name: 'JEECUP 2025 (UP Polytechnic)',
    fullName: 'Joint Entrance Examination Council Uttar Pradesh',
    category: 'State Polytechnic Entrance',
    stream: 'Diploma',
    overview: 'JEECUP is the entrance test for admission to Diploma in Engineering, Technology, Pharmacy, and Vocational courses in 150+ government and private polytechnic colleges in UP.',
    eligibility: 'Passed Class 10 with minimum 35% marks.',
    registrationDate: 'Jan 8, 2025 - May 10, 2025',
    lastDate: 'May 10, 2025',
    examDate: 'Jun 13 - Jun 20, 2025',
    targetExamIsoDate: '2025-06-13T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://jeecup.admissions.nic.in',
    syllabus: [
      { subject: 'Math & Science', topics: ['Class 9 & 10 Physics, Chemistry, and Mathematics (50% Math, 50% Physics & Chemistry)'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT)',
      duration: '2 Hours 30 Minutes',
      totalMarks: 400,
      questionCount: 100,
      markingScheme: '+4 for correct answer, -1 for incorrect'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'Govt Polytechnic Lucknow CS Branch', cutoffValue: 'Rank < 500' }
    ],
    difficulty: 'Easy',
    acceptedColleges: ['Govt Polytechnic Lucknow', 'Govt Polytechnic Kanpur', '150+ UP Polytechnic Institutes'],
    preparationStrategy: ['Revise Class 10 NCERT Science & Math formulas thoroughly.'],
    faqs: [
      { question: 'Can Class 10 appearing students apply?', answer: 'Yes! Candidates appearing in Class 10 board exams are eligible.' }
    ],
    isSaved: false,
    isNotified: false
  },

  {
    id: 'polycet',
    name: 'AP / TS POLYCET 2025',
    fullName: 'Polytechnic Common Entrance Test',
    category: 'State Diploma Entrance Exam',
    stream: 'Polytechnic',
    overview: 'POLYCET is conducted by the State Boards of Technical Education & Training for admission to engineering and non-engineering diploma programs.',
    eligibility: 'Passed or appearing in SSC (Class 10) examination with Math as one of the subjects.',
    registrationDate: 'Feb 20, 2025 - Apr 15, 2025',
    lastDate: 'Apr 15, 2025',
    examDate: 'Apr 27, 2025',
    targetExamIsoDate: '2025-04-27T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://polycet.sbtet.ap.gov.in',
    syllabus: [
      { subject: 'Math, Physics, Chem', topics: ['Class 10 State PUC / CBSE syllabus (Mathematics 60 Qs, Physics 30 Qs, Chemistry 30 Qs)'] }
    ],
    pattern: {
      mode: 'Offline Pen-Paper OMR',
      duration: '2 Hours',
      totalMarks: 120,
      questionCount: 120,
      markingScheme: '+1 for correct answer, NO negative marking'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'Govt Polytechnic Hyderabad', cutoffValue: 'Rank < 800' }
    ],
    difficulty: 'Easy',
    acceptedColleges: ['Govt Polytechnic Hyderabad', 'Govt Polytechnic Visakhapatnam', '80+ Govt Polytechnics'],
    preparationStrategy: ['Attempt all 120 questions since there is zero negative marking.'],
    faqs: [
      { question: 'What is the minimum qualifying score?', answer: '36 marks out of 120 (30%) is the minimum qualifying mark for general candidates.' }
    ],
    isSaved: false,
    isNotified: false
  },

  // --- OTHER CAREER PATHS ---
  {
    id: 'nda-2025',
    name: 'UPSC NDA 1 2025',
    fullName: 'National Defence Academy & Naval Academy Examination',
    category: 'Defense Services Officer Entrance',
    stream: 'Other Career Paths',
    overview: 'Conducted twice a year by UPSC for admission to the Army, Navy, and Air Force wings of the NDA, and 3-Year B.Tech course at Indian Naval Academy (INA).',
    eligibility: 'Passed Class 12 (Physics & Math required for Navy/Air Force). Unmarried male/female candidates. Age: 16.5 to 19.5 years.',
    registrationDate: 'Dec 11, 2024 - Dec 31, 2024',
    lastDate: 'Dec 31, 2024',
    examDate: 'Apr 13, 2025',
    targetExamIsoDate: '2025-04-13T09:00:00Z',
    regStatus: 'Closed',
    officialWebsite: 'https://upsc.gov.in',
    syllabus: [
      { subject: 'Paper 1: Mathematics (300 Marks)', topics: ['Algebra, Matrices, Trigonometry, Analytical Geometry, Differential Calculus, Statistics'] },
      { subject: 'Paper 2: GAT (600 Marks)', topics: ['English (200 Marks) & General Knowledge (400 Marks: Physics, Chemistry, History, Geography, Current Events)'] }
    ],
    pattern: {
      mode: 'Offline OMR Exam + 5-Day SSB Interview',
      duration: '5 Hours Written (2.5 Hrs Math + 2.5 Hrs GAT)',
      totalMarks: '1800 (900 Written + 900 SSB Interview)',
      questionCount: '120 Math + 150 GAT Questions',
      markingScheme: 'Math (+2.5/-0.83) | GAT (+4/-1.33)'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'Written Qualifying Cutoff', cutoffValue: '301 / 900 Marks (25% in each paper)' },
      { categoryOrBranch: 'Final Merit Rank Air Force Wing', cutoffValue: 'AIR < 150' }
    ],
    difficulty: 'Extreme',
    acceptedColleges: ['National Defence Academy (NDA) Khadakwasla, Pune', 'Indian Naval Academy (INA) Ezhimala'],
    preparationStrategy: [
      'Solve 10 years UPSC NDA official papers to get accustomed to negative marking traps.',
      'Maintain peak physical fitness and daily newspaper reading for SSB Officer Intelligence Rating.'
    ],
    faqs: [
      { question: 'Are women candidates eligible for NDA?', answer: 'Yes! Female candidates are eligible to apply for all three wings (Army, Navy, Air Force) in NDA.' }
    ],
    isSaved: true,
    isNotified: true
  },

  {
    id: 'imu-cet',
    name: 'IMU CET 2025',
    fullName: 'Indian Maritime University Common Entrance Test',
    category: 'Merchant Navy Entrance Exam',
    stream: 'Other Career Paths',
    overview: 'IMU CET is conducted by Indian Maritime University for admission to B.Sc Nautical Science, B.Tech Marine Engineering, and Naval Architecture programs.',
    eligibility: 'Passed Class 12 with PCM min 60% aggregate and 50% in English. Must pass DG Shipping Medical Fitness Test.',
    registrationDate: 'Apr 1, 2025 - May 15, 2025',
    lastDate: 'May 15, 2025',
    examDate: 'Jun 1, 2025',
    targetExamIsoDate: '2025-06-01T09:00:00Z',
    regStatus: 'Upcoming',
    officialWebsite: 'https://imu.edu.in',
    syllabus: [
      { subject: 'PCM + English + Aptitude', topics: ['Physics (50 Qs), Chemistry (20 Qs), Math (50 Qs), English (25 Qs), General Aptitude (55 Qs)'] }
    ],
    pattern: {
      mode: 'Computer Based Test (CBT)',
      duration: '3 Hours',
      totalMarks: 200,
      questionCount: 200,
      markingScheme: '+1 for correct, -0.25 for incorrect'
    },
    previousYearCutoff: [
      { categoryOrBranch: 'IMU Chennai B.Tech Marine', cutoffValue: 'Rank < 1,500' }
    ],
    difficulty: 'Moderate',
    acceptedColleges: ['IMU Chennai', 'IMU Kolkata', 'IMU Mumbai Port', 'IMU Visakhapatnam', 'Tolani Maritime Institute'],
    preparationStrategy: ['Focus on Class 11 & 12 Physics & Math formulas along with English proficiency.'],
    faqs: [
      { question: 'Is company sponsorship required before IMU CET?', answer: 'Sponsorship from shipping companies (like Anglo-Eastern, Synergy, Great Eastern) guarantees 100% job placement right after graduation!' }
    ],
    isSaved: false,
    isNotified: false
  }
];
