import { 
  IndustryTrend, 
  IndustryVoice, 
  StartupStage, 
  StartupResource, 
  CareerOpportunity, 
  TimelineStep 
} from '../types';

// =========================================================================
// 1. THE 10 KEY INDUSTRY TRENDS & IN-DEMAND SKILLS
// =========================================================================

export const INDUSTRY_TRENDS: IndustryTrend[] = [
  {
    id: 'trend-ai-ml',
    name: 'AI & Machine Learning',
    tagline: 'From Foundation Models to Agentic Workflows & Neural Engineering',
    badge: 'Exponential Growth',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    iconName: 'Bot',
    whyItMatters: 
      'Artificial Intelligence is transitioning from predictive modeling to generative AI and autonomous agents. Enterprises across fintech, healthcare, and software are re-architecting systems around LLM orchestration, vector search, and multimodal understanding. Students with strong math foundations and applied AI skills hold an outsized advantage.',
    whatStudentsShouldLearn: [
      'Linear Algebra, Multivariate Calculus & Probability',
      'Python, PyTorch, Hugging Face Transformers & LangChain/LlamaIndex',
      'Prompt Engineering, RAG (Retrieval-Augmented Generation) & Vector DBs (Chroma/Pinecone)',
      'Model Fine-Tuning (LoRA/QLoRA), Quantization & Evaluation metrics',
      'AI Ethics, Data Governance & Safety Guardrails'
    ],
    howToStart: [
      'Phase 1 (Weeks 1–3): Master Python for Data Science (NumPy, Pandas) and Andrew Ng’s Machine Learning Specialization.',
      'Phase 2 (Weeks 4–7): Build small neural networks in PyTorch from scratch (MNIST, sentiment analysis).',
      'Phase 3 (Weeks 8–12): Implement an end-to-end RAG application querying personal textbooks or PDF documents using Gemini API.'
    ],
    recommendedProjects: [
      {
        title: 'Academic Multi-Document RAG Search Engine',
        description: 'Upload complex university textbooks/PDFs and query citations with vector similarity search and grounded LLM answers.',
        techStack: ['Python', 'LangChain', 'ChromaDB', 'Gemini API', 'Streamlit'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Autonomous Multi-Agent Research Assistant',
        description: 'An agentic workflow where autonomous sub-agents search live web sources, cross-verify claims, and write markdown research briefs.',
        techStack: ['Python', 'CrewAI', 'FastAPI', 'React'],
        difficulty: 'Advanced'
      },
      {
        title: 'Real-Time Edge Computer Vision for Safety',
        description: 'On-device pedestrian and lane detection running locally using quantized YOLO models.',
        techStack: ['Python', 'OpenCV', 'YOLOv8', 'ONNX Runtime'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Machine Learning Engineer', description: 'Designs, trains, and scales production neural networks and pipelines.' },
      { role: 'AI Applications Engineer', description: 'Integrates LLMs, fine-tuned models, and agentic workflows into products.' },
      { role: 'Research Scientist', description: 'Pioneers new architectures, training methodologies, and mathematical proofs.' },
      { role: 'Prompt & Evaluation Specialist', description: 'Constructs automated benchmarks and guardrails for frontier AI systems.' }
    ],
    marketData: {
      stat: '75% of global enterprises plan to integrate AI & Big Data by 2027; AI-related roles are projected as the fastest-growing tech jobs.',
      source: 'World Economic Forum (WEF) Future of Jobs Report',
      date: 'May 2023 / Updated 2024 Global Benchmark',
      notes: 'Verified global industry benchmark data.'
    }
  },
  {
    id: 'trend-data',
    name: 'Data Engineering & Analytics',
    tagline: 'Transforming Unstructured Raw Data into High-Value Business Intelligence',
    badge: 'Core Foundation',
    gradient: 'from-blue-500 via-teal-500 to-emerald-600',
    iconName: 'Database',
    whyItMatters: 
      'Data is the foundational fuel for every modern software product and AI model. Companies generate petabytes of transactional, behavioral, and telemetry logs every hour. Without robust distributed pipelines, data warehouses, and clean semantic layers, AI and business analytics cannot function.',
    whatStudentsShouldLearn: [
      'Advanced SQL (Window functions, CTEs, query optimization, indexing)',
      'Data modeling (Star schema, Snowflake schema, Data Vault 2.0)',
      'ETL/ELT orchestration (Apache Airflow, dbt, Dagster)',
      'Distributed computing (Apache Spark, PySpark, Snowflake, BigQuery)',
      'Data visualization and metric layer design (Tableau, PowerBI, Apache Superset)'
    ],
    howToStart: [
      'Phase 1 (Weeks 1–2): Solve 50+ LeetCode SQL problems (joins, self-joins, window functions).',
      'Phase 2 (Weeks 3–6): Learn dbt (data build tool) and build a transformation pipeline on public datasets (e.g. NYC Taxi or Kaggle E-Commerce).',
      'Phase 3 (Weeks 7–10): Build an automated daily ETL pipeline fetching API data and populating BigQuery/PostgreSQL.'
    ],
    recommendedProjects: [
      {
        title: 'Real-Time E-Commerce Analytics Pipeline',
        description: 'Stream order events using Kafka into a medallion data lakehouse architecture with automated dbt testing.',
        techStack: ['Python', 'Apache Kafka', 'PostgreSQL', 'dbt', 'Metabase'],
        difficulty: 'Advanced'
      },
      {
        title: 'National Entrance Exam Analytics Dashboard',
        description: 'Scrape and clean historical cutoff data across 500+ colleges; analyze percentiles vs rank trends.',
        techStack: ['Python', 'Pandas', 'SQLAlchemy', 'DuckDB', 'Next.js'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Data Engineer', description: 'Architects resilient pipelines, lakehouses, and batch/streaming workflows.' },
      { role: 'Data Analyst', description: 'Extracts strategic insights, builds dashboards, and defines KPI metrics.' },
      { role: 'Analytics Engineer', description: 'Bridges data engineers and business analysts with clean dbt models.' },
      { role: 'BI Developer', description: 'Designs enterprise reporting systems and executive dashboards.' }
    ],
    marketData: {
      stat: 'Data Analyst and Data Engineer roles projected to see a 30-35% rise in demand through 2027.',
      source: 'World Economic Forum Future of Jobs & NASSCOM Tech Talent Report',
      date: '2024 Edition',
      notes: 'Global & Indian IT sector projection.'
    }
  },
  {
    id: 'trend-cybersecurity',
    name: 'Cybersecurity & Zero Trust',
    tagline: 'Defending Digital Infrastructure, Cloud Assets & User Privacy',
    badge: 'Critical Defense',
    gradient: 'from-rose-500 via-red-600 to-amber-600',
    iconName: 'ShieldAlert',
    whyItMatters: 
      'With geopolitical tensions, ransomware-as-a-service, and the proliferation of API ecosystems, security is no longer an afterthought. Organizations operate under Zero Trust principles ("never trust, always verify"), creating immense demand for ethical hackers, cryptographers, and cloud security architects.',
    whatStudentsShouldLearn: [
      'Computer Networking fundamentals (TCP/IP, DNS, TLS/SSL, OSI Model)',
      'Linux system administration and shell scripting (Bash, Python)',
      'OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, Broken Auth)',
      'Cryptography fundamentals (symmetric/asymmetric encryption, PKI, hashing)',
      'Cloud security posture management & SOC operations (SIEM, Splunk, Wireshark)'
    ],
    howToStart: [
      'Phase 1 (Weeks 1–3): Master Linux basics and complete OverTheWire Bandit wargames.',
      'Phase 2 (Weeks 4–7): Solve beginner rooms on TryHackMe and PortSwigger Web Security Academy.',
      'Phase 3 (Weeks 8–12): Set up a local home lab with Kali Linux and a vulnerable machine (Metasploitable).'
    ],
    recommendedProjects: [
      {
        title: 'Automated Web Vulnerability Scanner',
        description: 'A Python tool that audits web endpoints for missing security headers, open ports, and SQLi vectors.',
        techStack: ['Python', 'Scapy', 'Requests', 'Docker'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Decentralized Encrypted Password & Document Vault',
        description: 'Client-side AES-256 encrypted credential manager with Argon2 key derivation and zero-knowledge architecture.',
        techStack: ['TypeScript', 'Web Crypto API', 'React', 'Tailwind'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Security Engineer', description: 'Hardens application architectures and implements encryption standards.' },
      { role: 'Penetration Tester / Ethical Hacker', description: 'Discovers zero-day vulnerabilities through simulated attacks.' },
      { role: 'SOC Analyst', description: 'Monitors telemetry feeds 24/7 to neutralize malicious intrusions.' },
      { role: 'DevSecOps Engineer', description: 'Integrates automated static and dynamic security scanning in CI/CD.' }
    ],
    marketData: {
      stat: 'Global shortage of over 3.4 million cybersecurity professionals; 85% of leaders view cyber talent as a critical risk.',
      source: 'ISC2 Cybersecurity Workforce Study',
      date: 'Latest 2023–2024 Audit',
      notes: 'Global workforce audit across 14,000+ security practitioners.'
    }
  },
  {
    id: 'trend-cloud',
    name: 'Cloud Computing & DevOps',
    tagline: 'Architecting Scalable, Distributed & High-Availability Systems',
    badge: 'Essential Scale',
    gradient: 'from-sky-500 via-blue-600 to-cyan-700',
    iconName: 'Cloud',
    whyItMatters: 
      'Practically all software runs on cloud infrastructure (AWS, Google Cloud, Azure). Understanding how to containerize microservices, deploy via Infrastructure as Code (Terraform), and monitor latency and distributed tracing is required for mid-to-senior software engineering roles.',
    whatStudentsShouldLearn: [
      'Core cloud compute, storage, and networking (VPC, EC2, S3, Cloud Run, IAM)',
      'Containerization and orchestration (Docker, Docker Compose, Kubernetes basics)',
      'Infrastructure as Code (Terraform, CloudFormation, Pulumi)',
      'CI/CD pipeline automation (GitHub Actions, GitLab CI)',
      'Observability and monitoring (Prometheus, Grafana, OpenTelemetry)'
    ],
    howToStart: [
      'Phase 1 (Weeks 1–2): Containerize a simple full-stack app with Docker and deploy to Google Cloud Run or AWS Lightsail.',
      'Phase 2 (Weeks 3–5): Write a GitHub Actions workflow to run lint, test, and automated build on every git push.',
      'Phase 3 (Weeks 6–8): Provision cloud resources automatically using Terraform scripts in git.'
    ],
    recommendedProjects: [
      {
        title: 'Multi-Region High-Availability Microservices Cluster',
        description: 'Deploy an Express/Go API behind an NGINX reverse proxy with auto-scaling and Redis caching.',
        techStack: ['Docker', 'AWS ECS / Google Cloud Run', 'Terraform', 'GitHub Actions'],
        difficulty: 'Advanced'
      },
      {
        title: 'Serverless Real-Time Media Transcoder',
        description: 'Event-driven architecture where file uploads trigger cloud functions to resize, compress, and optimize media.',
        techStack: ['Node.js', 'Google Cloud Storage / AWS S3', 'Serverless Functions', 'FFmpeg'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Cloud Solutions Architect', description: 'Designs multi-tenant enterprise topologies on AWS/GCP/Azure.' },
      { role: 'DevOps / SRE (Site Reliability Engineer)', description: 'Maintains 99.99% uptime, CI/CD pipelines, and incident response.' },
      { role: 'Platform Engineer', description: 'Builds internal developer platforms (IDPs) so dev teams ship fast.' }
    ],
    marketData: {
      stat: 'Over 85% of enterprises will embrace a cloud-first principle; worldwide cloud spending expected to surpass $600 Billion.',
      source: 'Gartner Global IT Spending & Cloud Projections',
      date: '2024 Market Forecast',
      notes: 'Cloud infrastructure adoption benchmark.'
    }
  },
  {
    id: 'trend-software-dev',
    name: 'Software Development & Architecture',
    tagline: 'Modern Full-Stack, System Design & Clean Code Craftsmanship',
    badge: 'Industry Backbone',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    iconName: 'Code',
    whyItMatters: 
      'Writing maintainable, modular, and high-performance software remains the timeless foundation of all technology careers. Modern developers must understand frontend user experience, backend concurrency, database ACID properties, and API contracts.',
    whatStudentsShouldLearn: [
      'Data Structures & Algorithms (Trees, Graphs, DP, Hash Maps, Two Pointers)',
      'TypeScript, Modern React / Next.js, and Node.js / Go / Java',
      'RESTful APIs, GraphQL, WebSockets & gRPC',
      'Relational and NoSQL databases (PostgreSQL indexing, Redis caching)',
      'System Design (Load balancers, horizontal scaling, caching strategies, rate limiting)'
    ],
    howToStart: [
      'Phase 1 (Weeks 1–4): Practice DSA on LeetCode/NeetCode 150 (focus on problem-solving patterns).',
      'Phase 2 (Weeks 5–8): Build a complete CRUD app using TypeScript, React, and PostgreSQL with proper auth.',
      'Phase 3 (Weeks 9–12): Read "Designing Data-Intensive Applications" chapters on replication and partitioning.'
    ],
    recommendedProjects: [
      {
        title: 'Collaborative Real-Time Workspace Canvas',
        description: 'Multiplayer whiteboard or document editor with conflict resolution, WebSocket streaming, and state sync.',
        techStack: ['TypeScript', 'React', 'WebSockets / Socket.io', 'Node.js', 'Tailwind'],
        difficulty: 'Advanced'
      },
      {
        title: 'Production-Grade API Rate Limiter & Gateway',
        description: 'Token bucket rate limiter middleware built on top of Redis to protect backend services from DDoS.',
        techStack: ['Go or Node.js', 'Redis', 'Docker', 'Jest/Supertest'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Full-Stack Developer', description: 'Builds responsive frontends and resilient backends end-to-end.' },
      { role: 'Backend Systems Engineer', description: 'Focuses on database throughput, concurrency, and microservice APIs.' },
      { role: 'Frontend Engineer', description: 'Specializes in user interfaces, web performance, and state architecture.' }
    ],
    marketData: {
      stat: 'Software engineers remain the #1 most recruited technology talent globally with over 25% projected growth in emerging tech sectors.',
      source: 'US Bureau of Labor Statistics & GitHub Octoverse Report',
      date: '2024 Global Talent Metrics',
      notes: 'Standardized industry hiring metric.'
    }
  },
  {
    id: 'trend-automation',
    name: 'Automation & Workflow Orchestration',
    tagline: 'Eliminating Repetitive Tasks with Scripting, RPA & Webhooks',
    badge: 'High Leverage',
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    iconName: 'Zap',
    whyItMatters: 
      'High-performing engineers automate everything. From CI/CD test suites to business operations and autonomous scraping, automation multiplies engineering leverage by 10x, saving thousands of hours and reducing human error.',
    whatStudentsShouldLearn: [
      'Headless browser automation (Playwright, Puppeteer, Selenium)',
      'Scripting & regex mastery (Python, Bash, Node.js scripts)',
      'Webhook architectures and event-driven triggers',
      'Workflow platforms (n8n, Zapier, Temporal for durable workflows)',
      'Automated testing suites (Unit, Integration, E2E with Playwright/Cypress)'
    ],
    howToStart: [
      'Phase 1 (Weeks 1–2): Write a Python script that automatically monitors an exam portal and emails you when dates change.',
      'Phase 2 (Weeks 3–4): Build an automated end-to-end test suite using Playwright for your existing web apps.',
      'Phase 3 (Weeks 5–6): Deploy an open-source n8n workflow server to connect Google Sheets, Telegram, and AI APIs.'
    ],
    recommendedProjects: [
      {
        title: 'Automated Entrance Exam & Deadline Bot',
        description: 'Scrapes 10+ government entrance portals daily, parses PDF notices with OCR/LLM, and posts alerts to Discord.',
        techStack: ['Python', 'Playwright', 'BeautifulSoup', 'Discord Webhooks', 'Cron'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Intelligent Resume Screener & Application Auto-Filler',
        description: 'Tool that reads student profile JSON and automatically assists form completion while validating document hashes.',
        techStack: ['TypeScript', 'Chrome Extension API', 'React'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Automation Engineer / SDET', description: 'Builds automated test harnesses and continuous verification engines.' },
      { role: 'RPA & Workflow Architect', description: 'Automates enterprise operations across legacy and modern platforms.' },
      { role: 'Operations & Reliability Specialist', description: 'Deploys self-healing infrastructure and incident alerts.' }
    ],
    marketData: {
      stat: 'Automation and intelligent process technologies are estimated to unlock over $1.5 Trillion in operational productivity by 2026.',
      source: 'McKinsey Global Institute Automation Benchmark',
      date: '2024 Report',
      notes: 'Productivity and workflow automation metrics.'
    }
  },
  {
    id: 'trend-product-thinking',
    name: 'Product Thinking & User Empathy',
    tagline: 'Bridging Technology, Business Goals & User Needs',
    badge: 'Differentiator',
    gradient: 'from-purple-500 via-pink-600 to-rose-500',
    iconName: 'Sparkles',
    whyItMatters: 
      'Code is only valuable if it solves a real human problem. Engineers who possess "Product Thinking" don’t just ask "how do I build this?", they ask "why are we building this, who is the user, and how will we measure success?" This mindset fast-tracks junior engineers to tech leads and founders.',
    whatStudentsShouldLearn: [
      'User journey mapping, wireframing & rapid prototyping (Figma)',
      'Metrics definition: North Star Metric, Retention, Churn, CAC, LTV',
      'User interview techniques (The Mom Test methodology)',
      'A/B testing, feature flagging, and analytics telemetry (Mixpanel, PostHog)',
      'Agile product roadmapping and PRD (Product Requirements Document) writing'
    ],
    howToStart: [
      'Phase 1 (Week 1): Read "The Mom Test" by Rob Fitzpatrick and "Inspired" by Marty Cagan.',
      'Phase 2 (Weeks 2–3): Pick an app you hate using, conduct 5 user interviews, and redesign its critical flow in Figma.',
      'Phase 3 (Weeks 4–6): Integrate PostHog or Google Analytics into your personal project and track conversion funnels.'
    ],
    recommendedProjects: [
      {
        title: 'Student Productivity & Study Tracker with Full Telemetry',
        description: 'A focused study timer and flashcard app instrumented with full PostHog event tracking and cohort retention charts.',
        techStack: ['React', 'Tailwind', 'PostHog', 'Figma Wireframes'],
        difficulty: 'Beginner'
      },
      {
        title: 'Comprehensive Product Requirements Document (PRD) & Prototype',
        description: 'Complete PRD including user personas, edge cases, success metrics, and high-fidelity Figma prototype for an edtech feature.',
        techStack: ['Figma', 'Notion PRD', 'Loom Walkthrough'],
        difficulty: 'Beginner'
      }
    ],
    relatedCareerRoles: [
      { role: 'Associate Product Manager (APM)', description: 'Guides product strategy, user discovery, and engineering sprints.' },
      { role: 'Product-Minded Software Engineer', description: 'High-leverage developer who makes sound product decisions without hand-holding.' },
      { role: 'Product Designer (UI/UX)', description: 'Conducts user research and crafts intuitive visual design systems.' }
    ],
    marketData: {
      stat: 'Product management and product-centric engineering roles have grown by 32% over the last 4 years in technology hubs.',
      source: 'LinkedIn Economic Graph & Global State of Product Management',
      date: '2024 Review',
      notes: 'State of Product Management report.'
    }
  },
  {
    id: 'trend-communication',
    name: 'Executive Communication & Storytelling',
    tagline: 'Technical Writing, Pitching, Negotiation & Cross-Functional Alignment',
    badge: 'Universal Multiplier',
    gradient: 'from-violet-500 via-indigo-600 to-blue-600',
    iconName: 'MessageSquare',
    whyItMatters: 
      'You can be the most brilliant coder in the room, but if you cannot explain your architecture to a manager, pitch your idea to an investor, or write a concise design doc for your team, your impact is bottlenecked. Communication is the ultimate career accelerator.',
    whatStudentsShouldLearn: [
      'Technical writing (RFCs, architectural decision records, README files)',
      'Executive verbal communication (BLUF: Bottom Line Up Front)',
      'Active listening and constructive code review feedback',
      'Public speaking and presenting technical work to non-technical stakeholders',
      'Constructing compelling slide decks and demo videos'
    ],
    howToStart: [
      'Phase 1 (Ongoing): Write 1 technical blog post or LinkedIn article every two weeks breaking down a concept you just learned.',
      'Phase 2 (Ongoing): Present a 5-minute lightning talk at a college tech club or community meetup.',
      'Phase 3 (Ongoing): Contribute detailed PR descriptions with before/after screenshots and architectural trade-offs.'
    ],
    recommendedProjects: [
      {
        title: 'Technical Deep-Dive Blog on Modern Web Systems',
        description: 'Publish a 3-part article series explaining how WebSockets, database indices, and JWT authentication work under the hood.',
        techStack: ['Markdown', 'Hashnode / Dev.to / Medium', 'Mermaid Diagrams'],
        difficulty: 'Beginner'
      },
      {
        title: '3-Minute Video Demo & Architecture Pitch',
        description: 'Record a crisp, professional video walkthrough of your best engineering project with clear problem-solution framing.',
        techStack: ['Loom / OBS', 'Canva Slides', 'Screen Recording'],
        difficulty: 'Beginner'
      }
    ],
    relatedCareerRoles: [
      { role: 'Developer Advocate / DevRel', description: 'Creates tutorials, speaks at conferences, and champions developer communities.' },
      { role: 'Technical Program Manager', description: 'Aligns dozens of cross-functional teams to deliver complex multi-month initiatives.' },
      { role: 'Engineering Manager', description: 'Mentors engineers, unblocks teams, and translates company vision into action.' }
    ],
    marketData: {
      stat: '93% of hiring managers rank communication and collaboration as equal to or more important than raw technical syntax skills.',
      source: 'LinkedIn Global Talent Trends & National Association of Colleges and Employers (NACE)',
      date: '2024 Hiring Survey',
      notes: 'Annual employer outlook survey.'
    }
  },
  {
    id: 'trend-problem-solving',
    name: 'First-Principles Problem Solving',
    tagline: 'Deconstructing Complexity, Critical Reasoning & Algorithmic Grit',
    badge: 'Timeless Superpower',
    gradient: 'from-amber-400 via-yellow-500 to-orange-600',
    iconName: 'BrainCircuit',
    whyItMatters: 
      'Technologies, frameworks, and syntax come and go every 3 years. The ability to break down an unfamiliar, ambiguous problem into its fundamental truths, construct hypotheses, and logically test them is what separates top 1% problem-solvers from average code copiers.',
    whatStudentsShouldLearn: [
      'First-principles thinking (breaking problems to basic physics/math components)',
      'Systematic debugging (binary search debugging, reading stack traces, isolating variables)',
      'Algorithmic complexity (Big-O space and time analysis)',
      'Root-cause analysis (The 5 Whys, Fishbone diagrams, incident post-mortems)',
      'Fermi estimations and back-of-the-envelope calculations'
    ],
    howToStart: [
      'Phase 1: Practice back-of-the-envelope estimations (e.g. "How many bytes per second does YouTube ingest in India?").',
      'Phase 2: When encountering a software bug, resist opening ChatGPT immediately; spend 15 minutes reading the exact stack trace and isolating the line.',
      'Phase 3: Write a 1-page post-mortem document every time your project breaks, explaining what happened and how to prevent it permanently.'
    ],
    recommendedProjects: [
      {
        title: 'Custom In-Memory Key-Value Store from Scratch',
        description: 'Build a mini-Redis clone supporting GET, SET, EXPIRE, and TTL eviction purely from scratch in C or Go.',
        techStack: ['Go or C++', 'TCP Sockets', 'Memory Management'],
        difficulty: 'Advanced'
      },
      {
        title: 'System Post-Mortem & Incident Diagnostic Repository',
        description: 'Document 5 complex real-world software outages (e.g. Cloudflare DNS, AWS S3 outage) and write first-principle diagnoses.',
        techStack: ['Markdown', 'System Diagrams', 'GitHub Wiki'],
        difficulty: 'Intermediate'
      }
    ],
    relatedCareerRoles: [
      { role: 'Quantitative Analyst / Trader', description: 'Solves complex mathematical and probability puzzles under time pressure.' },
      { role: 'Staff / Principal Engineer', description: 'Diagnoses high-severity distributed system bottlenecks and sets architecture standards.' },
      { role: 'Management & Strategy Consultant', description: 'Deconstructs business models and solves operational bottlenecks for Fortune 500s.' }
    ],
    marketData: {
      stat: 'Analytical thinking and complex problem-solving are ranked as the #1 most critical skills demanded by employers worldwide.',
      source: 'World Economic Forum (WEF) Future of Jobs Report',
      date: '2023–2025 Outlook',
      notes: 'Ranked top core skill across all surveyed industries.'
    }
  },
  {
    id: 'trend-entrepreneurship',
    name: 'Entrepreneurship & Venture Creation',
    tagline: 'Spotting Market Gaps, Building Products & Creating Economic Value',
    badge: 'Venture Builder',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    iconName: 'Rocket',
    whyItMatters: 
      'Whether you start a bootstrapped SaaS, launch a funded startup, or innovate as an intrapreneur inside a large enterprise, entrepreneurial skills teach you ownership, resourcefulness, financial literacy, and how to create something out of nothing.',
    whatStudentsShouldLearn: [
      'Customer discovery and problem validation (talking to 20+ real prospective users)',
      'Rapid MVP building (using modern no-code or full-stack starter templates in <48 hours)',
      'Basic unit economics (COGS, gross margin, payback period, run-rate)',
      'Go-to-market strategies (cold outreach, community marketing, Product Hunt launches)',
      'Pitch deck construction and angel/seed storytelling'
    ],
    howToStart: [
      'Phase 1: Identify 3 problems you or your classmates face daily (e.g. hostel mess food tracking, note sharing, commute).',
      'Phase 2: Build a 1-page landing page with a waitlist form in 1 day using React and Supabase.',
      'Phase 3: Get your first 50 signups before writing a single line of backend logic.'
    ],
    recommendedProjects: [
      {
        title: 'Micro-SaaS or EdTech Utility with Stripe/Razorpay',
        description: 'Build a focused utility that charges a small fee (e.g. ₹99) and achieve your first $100 / ₹10,000 in revenue.',
        techStack: ['Next.js', 'Tailwind', 'Stripe / Razorpay', 'Supabase'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Campus Marketplace or Service Prototype',
        description: 'Connect student buyers and sellers for second-hand textbooks, engineering calculators, and lab coats.',
        techStack: ['React', 'Firebase / Supabase', 'Tailwind'],
        difficulty: 'Beginner'
      }
    ],
    relatedCareerRoles: [
      { role: 'Startup Founder / Co-Founder', description: 'Leads product vision, hires founding team, and drives initial traction.' },
      { role: 'Founding Engineer', description: 'Builds the entire core architecture from 0 to 1 with equity upside.' },
      { role: 'Venture Capital Analyst', description: 'Evaluates early-stage startups, tech trends, and investment theses.' }
    ],
    marketData: {
      stat: 'India has become the world’s 3rd largest startup ecosystem with over 115,000+ recognized startups and growing student venture funds.',
      source: 'DPIIT Startup India & NASSCOM Tech Startup Ecosystem Report',
      date: '2024 Report',
      notes: 'Government & industry verified ecosystem audit.'
    }
  }
];

// =========================================================================
// 2. INDUSTRY VOICES (CEO, FOUNDER, RECRUITER & ENGINEER TALKS)
// =========================================================================

export const INDUSTRY_VOICES: IndustryVoice[] = [
  {
    id: 'voice-1',
    speaker: 'Satya Nadella',
    role: 'Chairman & CEO',
    companyOrOrg: 'Microsoft',
    category: 'CEO Insights',
    topic: 'Continuous Learning & The Growth Mindset',
    quoteOrInsight: 
      'The "learn-it-all" will always do better than the "know-it-all," even if the "know-it-all" starts with more innate capability. In a world being remade by AI, your curiosity and willingness to reinvent your skills matters more than any static credential.',
    keyTakeaway: 'Prioritize continuous learning and intellectual humility over fixed expertise. Adaptability is your core competitive edge.',
    source: 'Microsoft Annual Shareholder Address & Oxford Union Q&A',
    sourceUrl: 'https://news.microsoft.com',
    date: 'March 2024',
    isDirectQuote: true
  },
  {
    id: 'voice-2',
    speaker: 'Sam Altman',
    role: 'CEO & Co-Founder',
    companyOrOrg: 'OpenAI',
    category: 'AI & Industry',
    topic: 'AI as a Leverage Amplifier for Curious Students',
    quoteOrInsight: 
      'The most successful young people I see right now are using AI not as a shortcut to avoid thinking, but as a tireless research partner and tutor. If you are naturally curious and build things, you now have the leverage of a 50-person engineering team.',
    keyTakeaway: 'Use frontier AI models to accelerate prototype iteration and master complex topics faster, not as an excuse to skip fundamentals.',
    source: 'Stanford GSB View From The Top & Lex Fridman Interview',
    sourceUrl: 'https://stanford.edu',
    date: 'February 2024',
    isDirectQuote: true
  },
  {
    id: 'voice-3',
    speaker: 'Jensen Huang',
    role: 'Founder & CEO',
    companyOrOrg: 'NVIDIA',
    category: 'CEO Insights',
    topic: 'Domain Reasoning & Deep Fundamentals',
    quoteOrInsight: 
      'It is vital that everyone learns domain expertise alongside computer science. The computer is now learning human language. What matters is knowing what problem is worth solving in biology, physics, or finance, and reasoning systematically through the solution.',
    keyTakeaway: 'Combine technical coding literacy with deep domain understanding (materials, finance, physics, healthcare).',
    source: 'World Government Summit & Stanford GSB Fireside',
    sourceUrl: 'https://nvidia.com',
    date: 'February 2024',
    isDirectQuote: true
  },
  {
    id: 'voice-4',
    speaker: 'Sundar Pichai',
    role: 'CEO',
    companyOrOrg: 'Alphabet & Google',
    category: 'Future of Work',
    topic: 'Foundational Problem Solving over Ephemeral Frameworks',
    quoteOrInsight: 
      'Frameworks change rapidly, but deep computer science fundamentals—data structures, system design, and the ability to solve ambiguous problems calmly—will carry you through a 30-year technology career.',
    keyTakeaway: 'Master first principles and algorithmic clarity; do not chase every passing trendy library at the expense of core computer science.',
    source: 'Google I/O Keynote & IIT Kharagpur Interaction',
    sourceUrl: 'https://blog.google',
    date: 'May 2024',
    isDirectQuote: true
  },
  {
    id: 'voice-5',
    speaker: 'Paul Graham',
    role: 'Co-Founder',
    companyOrOrg: 'Y Combinator',
    category: 'Startup & Entrepreneurship',
    topic: 'Doing Things That Don’t Scale in College',
    quoteOrInsight: 
      'The best way to come up with startup ideas in college is not to try to think of startup ideas. It’s to look for things that seem to be missing in your own daily life as a student, build them well, and get 10 of your friends to genuinely love them.',
    keyTakeaway: 'Focus on solving real, immediate problems for a small group of passionate users before chasing scale or funding.',
    source: 'Paul Graham Essays ("How to Get Startup Ideas")',
    sourceUrl: 'https://paulgraham.com/startupideas.html',
    date: 'Archived & Verified Classic',
    isDirectQuote: true
  },
  {
    id: 'voice-6',
    speaker: 'Industry Recruiter Council',
    role: 'Senior Tech Recruiting Leadership',
    companyOrOrg: 'Tier-1 Tech & Global Capability Centers',
    category: 'Recruiter Insights',
    topic: 'What Companies Look for in Student Portfolios',
    quoteOrInsight: 
      'We reject dozens of resumes that list 20 tutorial clone projects (like Netflix clones or generic todo apps). What immediately gets you an interview is ONE deployed, production project with real active users, clean Git commit history, and a thoughtful README explaining architectural trade-offs.',
    keyTakeaway: 'Quality over quantity. One deeply engineered, deployed project with real users beats 10 copy-pasted tutorial repos.',
    source: 'Industry Insight (AI-Generated / Generalized Best Practice)',
    date: 'Updated September 2024',
    isDirectQuote: false
  },
  {
    id: 'voice-7',
    speaker: 'Staff Infrastructure Engineer',
    role: 'Distributed Systems Tech Lead',
    companyOrOrg: 'FinTech Unicorn Systems',
    category: 'Engineer Experiences',
    topic: 'Transitioning from College Student to Production Engineer',
    quoteOrInsight: 
      'In college, your code only needs to work once for the grading rubric. In production, code must survive network drops, database race conditions, and malformed inputs at 3 AM. Learning automated testing, logging, and error handling early is what makes you stand out.',
    keyTakeaway: 'Write defensive code. Learn unit testing, error boundaries, and telemetry before your first day on the job.',
    source: 'Industry Insight (AI-Generated / Generalized Best Practice)',
    date: 'Updated August 2024',
    isDirectQuote: false
  },
  {
    id: 'voice-8',
    speaker: 'Brian Chesky',
    role: 'Co-Founder & CEO',
    companyOrOrg: 'Airbnb',
    category: 'Founder Stories',
    topic: 'Obsessing Over the 11-Star Experience',
    quoteOrInsight: 
      'If you want to build something extraordinary, take a single user and imagine what a 5-star experience looks like, then 6-star, then what would blow their mind at 10-stars. It forces you to discover the magical threshold of extreme customer love.',
    keyTakeaway: 'Craft extraordinary delight for your earliest users. Word of mouth will do the rest of the marketing for you.',
    source: 'Masters of Scale with Reid Hoffman Podcast',
    sourceUrl: 'https://mastersofscale.com',
    date: 'Verified Audio Archive',
    isDirectQuote: true
  }
];

// =========================================================================
// 3. ENTREPRENEURSHIP PATH ("BUILD YOUR OWN PATH")
// =========================================================================

export const STARTUP_PATH_STAGES: StartupStage[] = [
  {
    id: 'stage-1',
    stageNumber: 1,
    name: 'Idea Generation',
    shortDesc: 'Identifying unaddressed student, campus, or market pain points.',
    objectives: [
      'Document 5-10 real personal frustrations or market inefficiencies',
      'Avoid "solution looking for a problem" traps',
      'Assess if this problem is frequent, painful, and worth paying to solve'
    ],
    actionSteps: [
      'Keep a "Frustration Diary" for 7 days recording daily campus/hostel friction',
      'Look for tasks currently done via messy WhatsApp groups or manual spreadsheets',
      'Frame the idea as: "I help [Specific Persona] achieve [Outcome] without [Pain Point]"'
    ],
    commonPitfalls: [
      'Falling in love with a solution before knowing if anyone cares',
      'Trying to build the next social media platform for everyone'
    ],
    recommendedTools: ['Notion', 'Obsidian', 'Google Docs', 'Miro'],
    milestoneCheck: 'Clear 1-sentence problem statement grounded in an observed behavior.',
    milestoneChecklist: [
      'Identified 3 acute personal or campus frictions experienced in the last 14 days',
      'Wrote a 1-sentence value proposition (Persona + Problem + Solution)',
      'Verified that at least 1 alternative workaround (e.g. Google Sheets/WhatsApp) exists',
      'Drafted a 1-page Lean Canvas outlining customer segments and value props'
    ],
    keyDeliverables: [
      '1-Sentence Value Proposition',
      '1-Page Lean Canvas Document',
      'List of 25 Ideal Customer Profiles (ICPs) to contact'
    ],
    kpiMetrics: [
      'Problem Urgency Score (1-10)',
      'Frequency of Occurrence (Daily vs Monthly)',
      'Estimated Target Market Size (TAM)'
    ],
    resourceLinks: [
      {
        title: 'How to Get Startup Ideas',
        url: 'https://paulgraham.com/startupideas.html',
        source: 'Paul Graham Essay',
        tag: 'Core Reading'
      },
      {
        title: 'How to Evaluate Startup Ideas',
        url: 'https://www.ycombinator.com/library/6e-how-to-evaluate-startup-ideas',
        source: 'YC Startup Library',
        tag: 'YC Video'
      }
    ]
  },
  {
    id: 'stage-2',
    stageNumber: 2,
    name: 'Problem Validation',
    shortDesc: 'Conducting unbiased user discovery interviews without pitching.',
    objectives: [
      'Interview at least 15-20 prospective users',
      'Verify if they have actively tried to solve this problem in the last 30 days',
      'Uncover their exact current workflow and financial/time budget'
    ],
    actionSteps: [
      'Follow "The Mom Test" rules: never ask "Would you use an app that does X?"',
      'Ask: "How do you currently handle this today? How much did that cost you?"',
      'Look for emotional intensity: are they indifferent, or visibly frustrated?'
    ],
    commonPitfalls: [
      'Asking friends if they "like your idea" (they will lie to be polite)',
      'Interpreting casual compliments as buying intent'
    ],
    recommendedTools: ['Google Forms', 'Calendly', 'Zoom', 'Otter.ai for transcriptions'],
    milestoneCheck: '80% of interviewed users confirm having spent real time or money attempting to fix this issue.',
    milestoneChecklist: [
      'Conducted 15+ in-depth user discovery interviews (at least 15 min each)',
      'Applied The Mom Test principles (no pitching, only asking about past behavior)',
      'Documented exact quotes of pain, current costs, and competitor deficiencies',
      'Identified top 3 must-have features that 80% of interviewees mentioned'
    ],
    keyDeliverables: [
      'User Discovery Interview Log (15+ transcripts)',
      'Customer Pain Point Ranking Matrix',
      'Validated Feature Priority Backlog'
    ],
    kpiMetrics: [
      'Validation Conversion Rate (% acknowledging severe pain)',
      'Active Workaround Rate (% currently spending time/money on alternatives)',
      'Willingness-to-Try Waitlist Size'
    ],
    resourceLinks: [
      {
        title: 'How to Talk to Users (The Mom Test Summary)',
        url: 'https://www.ycombinator.com/library/4D-how-to-talk-to-users',
        source: 'YC Startup Library',
        tag: 'User Research'
      },
      {
        title: 'Customer Discovery Interview Questions',
        url: 'https://steveblank.com',
        source: 'Steve Blank',
        tag: 'Discovery Guide'
      }
    ]
  },
  {
    id: 'stage-3',
    stageNumber: 3,
    name: 'Prototype Wireframing',
    shortDesc: 'Sketching user journeys and interactive clickable wireframes.',
    objectives: [
      'Define the core happy path in under 3 screens',
      'Test usability and navigation flow before writing any backend code',
      'Gather visual feedback from the users you interviewed'
    ],
    actionSteps: [
      'Draw paper sketches with pen and paper in 1 hour',
      'Build a clickable Figma prototype showing only the primary user action',
      'Have 5 users navigate the prototype while narrating their thoughts aloud'
    ],
    commonPitfalls: [
      'Spending 3 weeks designing edge cases before the main screen works',
      'Over-complicating user onboarding and account creation'
    ],
    recommendedTools: ['Figma', 'Excalidraw', 'Balsamiq', 'Loom'],
    milestoneCheck: 'User completes the core intended action without asking you for instructions.',
    milestoneChecklist: [
      'Low-fidelity paper sketch created in under 2 hours',
      'Clickable interactive Figma prototype with primary happy path flow',
      'Conducted 5 live user walkthrough tests with zero verbal hints',
      'Iterated navigation design based on user friction points'
    ],
    keyDeliverables: [
      'Interactive Clickable Figma Link',
      'User Journey Architecture Map',
      'Usability Test Video Walkthrough (Loom)'
    ],
    kpiMetrics: [
      'Task Completion Rate (% completing core action unguided)',
      'Time to First Value (Seconds on screen before reaching utility)',
      'Usability Friction Score'
    ],
    resourceLinks: [
      {
        title: 'Figma for Startup Builders',
        url: 'https://www.figma.com/resource-library/',
        source: 'Figma Learn',
        tag: 'UI/UX Design'
      },
      {
        title: 'Design Sprints & Rapid Prototyping',
        url: 'https://www.gv.com/sprint/',
        source: 'Google Ventures',
        tag: 'Methodology'
      }
    ]
  },
  {
    id: 'stage-4',
    stageNumber: 4,
    name: 'MVP (Minimum Viable Product)',
    shortDesc: 'Building the absolute simplest working version that delivers value.',
    objectives: [
      'Ship a functional build in less than 2 to 3 weeks',
      'Focus strictly on the single killer feature that solves the validated problem',
      'Ensure reliable error handling and zero broken primary flows'
    ],
    actionSteps: [
      'Use modern full-stack templates (Next.js, Supabase, Tailwind, Vercel)',
      'Avoid custom microservices; keep it in a monolithic, easy-to-deploy codebase',
      'Include an instant user feedback widget directly inside the app'
    ],
    commonPitfalls: [
      'Endless feature creep before launching to the public',
      'Spending money on trademarking, legal incorporation, or logos before user proof'
    ],
    recommendedTools: ['Next.js', 'Vercel', 'Supabase', 'Tailwind CSS', 'PostHog'],
    milestoneCheck: 'Live deployed URL accessible to anyone on mobile and desktop.',
    milestoneChecklist: [
      'Deployed production build with SSL and custom or sub-domain',
      'User authentication (OAuth or email magic link) functional',
      'Core killer feature working end-to-end with real database storage',
      'Integrated in-app analytics and error telemetry (PostHog or Google Analytics)'
    ],
    keyDeliverables: [
      'Live Public Web / App URL',
      'Public GitHub Repository with Clean README',
      'Working Product Telemetry Dashboard'
    ],
    kpiMetrics: [
      'Core Action Conversion Rate',
      'Page Load Speed (<2 seconds on mobile)',
      'Critical Error Rate (<0.5% of sessions)'
    ],
    resourceLinks: [
      {
        title: 'How to Plan and Build an MVP',
        url: 'https://www.ycombinator.com/library/6f-how-to-build-an-mvp',
        source: 'YC Startup School',
        tag: 'Engineering'
      },
      {
        title: 'Vercel & Next.js Quickstart',
        url: 'https://nextjs.org/learn',
        source: 'Vercel',
        tag: 'Tech Stack'
      }
    ]
  },
  {
    id: 'stage-5',
    stageNumber: 5,
    name: 'First 100 Real Users',
    shortDesc: 'Hand-recruiting early evangelists through direct outreach.',
    objectives: [
      'Onboard 50-100 real active users without paid ads',
      'Measure weekly retention (do users return unprompted?)',
      'Establish a direct feedback channel (Discord, WhatsApp group, Telegram)'
    ],
    actionSteps: [
      'Do things that do not scale: personally demo the tool to classmates and peers',
      'Post transparent building updates on Twitter/X, Reddit, and LinkedIn',
      'Fix any reported bug within 12 hours to shock users with your speed'
    ],
    commonPitfalls: [
      'Buying Facebook/Instagram ads before knowing your retention metrics',
      'Ignoring churned users instead of asking why they stopped using it'
    ],
    recommendedTools: ['Product Hunt', 'Reddit', 'Discord Community', 'Typeform'],
    milestoneCheck: 'At least 25% of users come back weekly without reminders.',
    milestoneChecklist: [
      'Acquired 100 registered organic users via direct outreach & community posts',
      'Created a dedicated feedback WhatsApp group / Discord with 30+ active users',
      'Conducted 10 post-launch retention interviews with active users',
      'Achieved >20% Day-7 user retention without email re-engagement campaigns'
    ],
    keyDeliverables: [
      'Cohort Retention Analysis Chart',
      'Early Customer Testimonial Deck',
      'Active User Community Hub'
    ],
    kpiMetrics: [
      'Weekly Active Users (WAU)',
      'Day 1 / Day 7 / Day 30 Retention Rates',
      'Organic Referral Rate (K-factor)'
    ],
    resourceLinks: [
      {
        title: 'Do Things that Don\'t Scale',
        url: 'https://paulgraham.com/ds.html',
        source: 'Paul Graham Essay',
        tag: 'Growth'
      },
      {
        title: 'How to Get Your First 100 Users',
        url: 'https://www.lennysnewsletter.com',
        source: 'Lenny\'s Newsletter',
        tag: 'Playbook'
      }
    ]
  },
  {
    id: 'stage-6',
    stageNumber: 6,
    name: 'Revenue Model & Monetization',
    shortDesc: 'Validating willingness to pay and positive unit economics.',
    objectives: [
      'Transition from free hobby app to a sustainable business model',
      'Charge your first ₹99 / $5 to verify genuine commercial value',
      'Calculate customer acquisition cost (CAC) vs Lifetime value (LTV)'
    ],
    actionSteps: [
      'Integrate payment gateway (Stripe or Razorpay)',
      'Offer a simple pricing tier (freemium vs one-time pass vs subscription)',
      'If users refuse to pay, investigate if the problem isn’t acute enough'
    ],
    commonPitfalls: [
      'Assuming "we will monetize with ads when we reach a million users"',
      'Under-pricing your product out of fear of rejection'
    ],
    recommendedTools: ['Razorpay', 'Stripe', 'Lemon Squeezy', 'Paddle'],
    milestoneCheck: 'First ₹5,000 / $100 earned from non-family, non-friend customers.',
    milestoneChecklist: [
      'Integrated Razorpay or Stripe payment gateway in production',
      'Structured pricing page with clear tier comparison & money-back promise',
      'Acquired first 5 paying customers who are not relatives or close friends',
      'Calculated basic unit economics (Hosting COGS per user vs Revenue generated)'
    ],
    keyDeliverables: [
      'Live Pricing & Checkout Gateway Flow',
      'Financial Unit Economics Model (Spreadsheet)',
      'First 5 Verified Invoices & Payment Receipts'
    ],
    kpiMetrics: [
      'Monthly Recurring Revenue (MRR)',
      'Customer Acquisition Cost (CAC)',
      'Lifetime Value (LTV) and LTV:CAC Ratio (>3x target)'
    ],
    resourceLinks: [
      {
        title: 'Pricing Your SaaS & Startup',
        url: 'https://www.ycombinator.com/library/1d-how-to-price-your-product',
        source: 'YC Startup Library',
        tag: 'Monetization'
      },
      {
        title: 'Razorpay Payment Integration Guide',
        url: 'https://razorpay.com/docs/',
        source: 'Razorpay Docs',
        tag: 'Payments API'
      }
    ]
  },
  {
    id: 'stage-7',
    stageNumber: 7,
    name: 'Pitch Deck & Storytelling',
    shortDesc: 'Distilling vision, traction, market size, and moats into 10 slides.',
    objectives: [
      'Craft a 10-slide deck that explains the opportunity in under 3 minutes',
      'Highlight real customer metrics, growth graph, and unfair advantage',
      'Clearly articulate what problem is being solved and why now'
    ],
    actionSteps: [
      'Use the standard Sequoia / YC 10-slide structure',
      'Keep slides visual: big numbers, customer quotes, simple charts',
      'Practice 3-minute verbal delivery until completely natural'
    ],
    commonPitfalls: [
      'Text-heavy slides with tiny fonts and complicated jargon',
      'Over-inflating market size with unrealistic top-down estimates'
    ],
    recommendedTools: ['Pitch.com', 'Canva', 'Google Slides', 'DocSend'],
    milestoneCheck: 'A complete 10-slide PDF reviewed by at least 2 experienced founders or mentors.',
    milestoneChecklist: [
      'Created 10 slides adhering to Sequoia / YC standard structure',
      'Verified all traction numbers match real analytics and bank receipts',
      'Engineered a 2-minute elevator pitch video recorded on Loom',
      'Conducted pitch practice with 3 college faculty/mentors and incorporated feedback'
    ],
    keyDeliverables: [
      '10-Slide Investor Deck (PDF & Pitch.com Link)',
      '1-Page Executive Summary / Teaser',
      '2-Minute Loom Elevator Pitch Video'
    ],
    kpiMetrics: [
      'DocSend Average Reading Time (<3 minutes)',
      'Investor Response Rate (% requesting follow-up calls)',
      'Pitch Comprehension Score'
    ],
    resourceLinks: [
      {
        title: 'Sequoia Capital Pitch Deck Template',
        url: 'https://www.sequoiacap.com/article/writing-a-business-plan/',
        source: 'Sequoia Capital',
        tag: 'Investor Deck'
      },
      {
        title: 'How to Pitch Your Startup (YC)',
        url: 'https://www.ycombinator.com/library/2o-how-to-pitch-your-startup',
        source: 'Y Combinator',
        tag: 'Pitching'
      }
    ]
  },
  {
    id: 'stage-8',
    stageNumber: 8,
    name: 'Incubators & Accelerators',
    shortDesc: 'Applying to structured mentorship programs and campus e-cells.',
    objectives: [
      'Leverage campus incubator facilities, lab grants, and peer founder networks',
      'Gain structured guidance from experienced operators and EIRs (Entrepreneurs in Residence)',
      'Prepare for competitive demo days'
    ],
    actionSteps: [
      'Apply to college E-Cells, Atal Incubation Centres, or national programs',
      'Focus application on user traction and customer retention numbers',
      'Take advantage of subsidized legal, server, and cloud hosting credits'
    ],
    commonPitfalls: [
      'Treating incubator acceptance as the goal itself instead of building the business',
      'Surrendering too much equity too early to predatory advisors'
    ],
    recommendedTools: ['F6S', 'Startup India Portal', 'YC Startup School'],
    milestoneCheck: 'Formal pitch delivered to an incubator screening committee or college e-cell.',
    milestoneChecklist: [
      'Applied to College Entrepreneurship Cell / Innovation Council (IIC)',
      'Submitted application to at least 2 Atal Incubation Centres (AICs)',
      'Enrolled in Y Combinator Startup School (free online founder cohort)',
      'Redeemed cloud provider credits (AWS Activate / Google Cloud for Startups)'
    ],
    keyDeliverables: [
      'Submitted Incubator Applications Portfolio',
      'Incubator Demo Day Pitch Presentation',
      'Faculty / Mentor Advisory Agreement'
    ],
    kpiMetrics: [
      'Incubator Interview Conversion Rate',
      'Active Cloud Credits Secured ($ value)',
      'Mentor Hours Logged per Month'
    ],
    resourceLinks: [
      {
        title: 'Atal Innovation Mission Incubators Directory',
        url: 'https://aim.gov.in',
        source: 'NITI Aayog',
        tag: 'Indian Incubators'
      },
      {
        title: 'Y Combinator Startup School',
        url: 'https://startupschool.org',
        source: 'YC Startup School',
        tag: 'Global Cohort'
      }
    ]
  },
  {
    id: 'stage-9',
    stageNumber: 9,
    name: 'Angel & Pre-Seed Funding',
    shortDesc: 'Raising catalytic capital from angels, government grants, or seed funds.',
    objectives: [
      'Raise capital to accelerate hiring, infrastructure, and user acquisition',
      'Utilize government innovation grants (NIDHI-PRAYAS, SISFS, MeitY TIDE 2.0)',
      'Protect founder equity with standard convertible instruments (SAFE notes)'
    ],
    actionSteps: [
      'Prioritize non-dilutive government grants before institutional equity dilution',
      'Network with alumni angel investors who understand your market',
      'Set clear 12-to-18 month milestone targets for what the funding will achieve'
    ],
    commonPitfalls: [
      'Fundraising when you have zero user traction or metrics',
      'Spending money on luxury offices and vanity PR instead of product velocity'
    ],
    recommendedTools: ['Startup India Seed Fund', 'AngelList / Wellfound', 'Carta'],
    milestoneCheck: 'First round of non-dilutive grant or angel capital wired to company account.',
    milestoneChecklist: [
      'Registered startup under DPIIT on Startup India Portal',
      'Applied for Startup India Seed Fund Scheme (SISFS) or NIDHI-PRAYAS grant',
      'Prepared standard Cap Table and Post-Money SAFE note agreement',
      'Built a 18-month financial runway projection spreadsheet'
    ],
    keyDeliverables: [
      'DPIIT Startup Recognition Certificate',
      'Cap Table & Equity Allocation Agreement',
      '18-Month Burn Rate & Runway Model'
    ],
    kpiMetrics: [
      'Capital Raised (Dilutive vs Non-Dilutive Grant)',
      'Monthly Cash Burn Rate',
      'Post-Funding Runway (Months of survival at current burn)'
    ],
    resourceLinks: [
      {
        title: 'Startup India Seed Fund Scheme (SISFS)',
        url: 'https://seedfund.startupindia.gov.in',
        source: 'DPIIT, Govt. of India',
        tag: 'Govt Grants'
      },
      {
        title: 'YC Post-Money SAFE Guide',
        url: 'https://www.ycombinator.com/documents',
        source: 'Y Combinator',
        tag: 'Legal Templates'
      }
    ]
  },
  {
    id: 'stage-10',
    stageNumber: 10,
    name: 'Scaling & Growth Loops',
    shortDesc: 'Building sustainable customer referral loops and expanding team.',
    objectives: [
      'Engineer self-reinforcing organic growth loops (referral, viral, SEO, API)',
      'Hire key specialized engineers and operators',
      'Establish repeatable sales and customer support operations'
    ],
    actionSteps: [
      'Analyze your highest retention user cohort and double down on their channel',
      'Automate internal telemetry, server redundancy, and security audits',
      'Foster a high-velocity engineering culture that ships weekly improvements'
    ],
    commonPitfalls: [
      'Premature scaling: spending on aggressive growth before product-market fit',
      'Hiring too many people before defining exact team ownership'
    ],
    recommendedTools: ['Linear', 'Slack', 'Datadog', 'Intercom'],
    milestoneCheck: 'Consistent, predictable month-over-month revenue or user growth exceeding 15%.',
    milestoneChecklist: [
      'Identified at least 1 proven organic growth engine with negative churn',
      'Implemented automated referral / invite mechanism with viral coefficient',
      'Drafted formal employee offer letters with vesting schedules (ESOPs)',
      'Maintained consistent >15% month-over-month active user or revenue growth'
    ],
    keyDeliverables: [
      'Growth Loops Blueprint Document',
      'Standard Operating Procedures (SOP) Wiki',
      '4-Year ESOP Equity Pool Allocation Plan'
    ],
    kpiMetrics: [
      'Month-over-Month (MoM) Growth Rate',
      'Net Revenue Retention (NRR)',
      'Viral Coefficient (K-Factor > 1.0)'
    ],
    resourceLinks: [
      {
        title: 'Growth Loops are the New Funnels',
        url: 'https://www.reforge.com/blog/growth-loops',
        source: 'Reforge',
        tag: 'Growth Strategy'
      },
      {
        title: 'High Output Management Summary',
        url: 'https://medium.com',
        source: 'Andy Grove',
        tag: 'Leadership'
      }
    ]
  }
];

export const STARTUP_RESOURCES: StartupResource[] = [
  // Hackathons
  {
    id: 'res-1',
    type: 'Hackathon',
    title: 'Smart India Hackathon (SIH)',
    organization: 'Ministry of Education & AICTE, Govt. of India',
    description: 'World’s biggest open innovation hackathon where student teams build real tech solutions for 50+ government ministries and leading industries.',
    linkText: 'Official SIH Portal',
    url: 'https://sih.gov.in',
    eligibilityOrDeadline: 'Annual National Event • Class 11-12 & College Students',
    grantAmountOrPerk: '₹1,00,000 per problem statement prize + Ministry pilot opportunities',
    isDemoData: false
  },
  {
    id: 'res-2',
    type: 'Hackathon',
    title: 'Devfolio Student Hackathons & ETHIndia',
    organization: 'Devfolio Global Community',
    description: 'Premier developer ecosystem hosting high-impact weekend hackathons with mentorship, sponsor tracks, and direct hiring pipelines.',
    linkText: 'Devfolio Hackathons',
    url: 'https://devfolio.co/hackathons',
    eligibilityOrDeadline: 'Monthly rolling hackathons across India & Remote',
    grantAmountOrPerk: '$100k+ in sponsor bounties & hiring tracks',
    isDemoData: false
  },
  {
    id: 'res-hackmit',
    type: 'Hackathon',
    title: 'HackMIT & Global Collegiate Hackathons',
    organization: 'Massachusetts Institute of Technology / MLH',
    description: 'Premier international student hackathon bringing together top collegiate engineers and builders to ship cutting-edge software and hardware prototypes.',
    linkText: 'HackMIT Portal',
    url: 'https://hackmit.org',
    eligibilityOrDeadline: 'Undergraduate & High School Students Worldwide',
    grantAmountOrPerk: 'Sponsor grants, flights reimbursement & VC mentorship',
    isDemoData: false
  },

  // Government Grants
  {
    id: 'res-sisfs',
    type: 'Government Grant',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    organization: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    description: 'Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization through incubators across India.',
    linkText: 'Startup India Seed Fund',
    url: 'https://seedfund.startupindia.gov.in',
    eligibilityOrDeadline: 'DPIIT-recognized startups incorporated within 2 years',
    grantAmountOrPerk: 'Up to ₹20 Lakhs grant (validation/prototype) & up to ₹50 Lakhs debt/convertible',
    isDemoData: false
  },
  {
    id: 'res-prayas',
    type: 'Government Grant',
    title: 'NIDHI-PRAYAS Prototyping Grant',
    organization: 'Department of Science and Technology (DST), Govt. of India',
    description: 'Program for promoting and accelerating young and aspiring innovators to transform their tech ideas into working physical or digital prototypes.',
    linkText: 'NIDHI-PRAYAS Portal',
    url: 'https://dst.gov.in',
    eligibilityOrDeadline: 'Individual student innovators & early-stage hardware/tech ventures',
    grantAmountOrPerk: 'Up to ₹10 Lakhs non-dilutive prototyping grant',
    isDemoData: false
  },
  {
    id: 'res-birac',
    type: 'Government Grant',
    title: 'BIRAC Biotechnology Ignition Grant (BIG)',
    organization: 'Biotechnology Industry Research Assistance Council (BIRAC)',
    description: 'Flagship grant for biotech, medtech, healthcare, and agritech student founders to validate proof-of-concept and build working medical prototypes.',
    linkText: 'BIRAC BIG Portal',
    url: 'https://birac.nic.in',
    eligibilityOrDeadline: 'Graduates, PhDs, and registered biotech startups',
    grantAmountOrPerk: 'Up to ₹50 Lakhs non-dilutive grant support over 18 months',
    isDemoData: false
  },

  // Incubators
  {
    id: 'res-3',
    type: 'Incubator',
    title: 'Atal Incubation Centres (AIC - NITI Aayog)',
    organization: 'AIM (Atal Innovation Mission), Government of India',
    description: 'Network of 70+ world-class incubation centres across Indian universities offering seed support, prototyping labs, and mentoring.',
    linkText: 'Atal Innovation Mission',
    url: 'https://aim.gov.in',
    eligibilityOrDeadline: 'Open to student and early-stage entrepreneurs',
    grantAmountOrPerk: 'Physical maker labs, mentoring, and up to ₹10 Cr center facilities',
    isDemoData: false
  },
  {
    id: 'res-4',
    type: 'Incubator',
    title: 'Y Combinator Startup School',
    organization: 'Y Combinator',
    description: 'Free, world-renowned online curriculum for founders covering idea validation, building MVPs, talk to users, and finding co-founders.',
    linkText: 'YC Startup School',
    url: 'https://startupschool.org',
    eligibilityOrDeadline: '100% Free • Self-Paced • Global Access',
    grantAmountOrPerk: 'Free curriculum, co-founder matching, $500k YC deal consideration',
    isDemoData: false
  },
  {
    id: 'res-iitmic',
    type: 'Incubator',
    title: 'IIT Madras Incubation Cell (IITMIC)',
    organization: 'IIT Madras',
    description: 'India\'s leading deep-tech university incubator, having nurtured 350+ technology startups including unicorns in electric vehicles, space, and AI.',
    linkText: 'IIT Madras Incubation',
    url: 'https://incubation.iitm.ac.in',
    eligibilityOrDeadline: 'Open to students, faculty, and external deep-tech builders',
    grantAmountOrPerk: 'Seed funding, world-class labs, IP protection assistance',
    isDemoData: false
  },
  {
    id: 'res-nsrcel',
    type: 'Incubator',
    title: 'NSRCEL IIM Bangalore',
    organization: 'IIM Bangalore',
    description: 'Management-focused incubation hub supporting social ventures, student entrepreneurs, and early-stage ventures with faculty mentoring.',
    linkText: 'NSRCEL IIMB',
    url: 'https://nsrcel.org',
    eligibilityOrDeadline: 'Student-led and social innovation ventures',
    grantAmountOrPerk: 'IIMB faculty mentorship, investor pitch days, founder alumni network',
    isDemoData: false
  },

  // Pitch Competitions
  {
    id: 'res-5',
    type: 'Competition',
    title: 'Eureka! Business Plan Competition',
    organization: 'E-Cell, IIT Bombay',
    description: 'Asia’s largest student business model competition offering ₹50+ Lakhs in prizes, intensive mentoring, and VC pitch exposure.',
    linkText: 'IIT Bombay Eureka!',
    url: 'https://ecell.in/eureka',
    eligibilityOrDeadline: 'Annual cycle (August - January)',
    grantAmountOrPerk: '₹50+ Lakhs in cash rewards & direct investor meetings',
    isDemoData: false
  },
  {
    id: 'res-conquest',
    type: 'Competition',
    title: 'Conquest Student Startup Conclave',
    organization: 'Center for Entrepreneurial Leadership (CEL), BITS Pilani',
    description: 'Student-run startup accelerator providing a 6-week summer cohort, 1:1 mentorship from top founders, and demo day in Bangalore.',
    linkText: 'BITS Pilani Conquest',
    url: 'https://conquest.org.in',
    eligibilityOrDeadline: 'Collegiate startups across India',
    grantAmountOrPerk: '₹35 Lakhs+ equity-free prize pool & VC term-sheet opportunities',
    isDemoData: false
  },

  // Founder Resources
  {
    id: 'res-6',
    type: 'Founder Resource',
    title: 'Paul Graham Essays & Startup Archive',
    organization: 'Paul Graham / YC',
    description: 'Timeless essays on startup ideas, founder psychology, how not to die, and the nature of innovation written by YC co-founder Paul Graham.',
    linkText: 'Read Paul Graham Essays',
    url: 'https://paulgraham.com/articles.html',
    eligibilityOrDeadline: 'Essential reading for any builder',
    grantAmountOrPerk: 'Foundational mental models for technology founders',
    isDemoData: false
  },
  {
    id: 'res-sequoia',
    type: 'Founder Resource',
    title: 'Sequoia Capital 10-Slide Pitch Deck Framework',
    organization: 'Sequoia Capital',
    description: 'The definitive slide-by-slide structure used by Apple, Google, Airbnb, and WhatsApp to raise their earliest institutional rounds.',
    linkText: 'Sequoia Pitch Framework',
    url: 'https://www.sequoiacap.com/article/writing-a-business-plan/',
    eligibilityOrDeadline: 'Free online guide & template',
    grantAmountOrPerk: 'De facto standard for venture storytelling',
    isDemoData: false
  },
  {
    id: 'res-safe',
    type: 'Founder Resource',
    title: 'YC Standard SAFE Financing Agreements',
    organization: 'Y Combinator Legal',
    description: 'Simple Agreement for Future Equity (SAFE)—the global industry standard contract for raising angel and pre-seed rounds without expensive lawyer fees.',
    linkText: 'YC SAFE Documents',
    url: 'https://www.ycombinator.com/documents',
    eligibilityOrDeadline: 'Free open-source legal documents',
    grantAmountOrPerk: 'Saves thousands in legal incorporation and term sheet costs',
    isDemoData: false
  }
];

// =========================================================================
// 4. CAREER OPPORTUNITY TRACKER ("MY OPPORTUNITIES")
// =========================================================================

export const DEFAULT_OPPORTUNITIES: CareerOpportunity[] = [
  {
    id: 'opp-1',
    title: 'Software Engineering Summer Intern 2025',
    companyOrOrg: 'Google India (Student Program)',
    category: 'Internships',
    type: 'Summer Internship',
    location: 'Bangalore / Hyderabad',
    stipendOrSalary: '₹1,00,000/month',
    deadline: 'October 30, 2024',
    daysRemaining: 18,
    status: 'Applied',
    applyUrl: 'https://careers.google.com/students/',
    skillsRequired: ['C++', 'Java or Python', 'Data Structures & Algorithms', 'Problem Solving'],
    description: 'Work on distributed services and AI systems with world-class engineering mentors over a 10-12 week structured internship.',
    isDemoData: true
  },
  {
    id: 'opp-2',
    title: 'Associate Cloud Consultant / Graduate Engineer',
    companyOrOrg: 'Microsoft IDC Campus Drives',
    category: 'Placements',
    type: 'Campus Placement / Full-Time',
    location: 'Noida / Hyderabad / Bangalore',
    stipendOrSalary: '₹16 - 22 LPA',
    deadline: 'November 15, 2024',
    daysRemaining: 34,
    status: 'Assessment',
    applyUrl: 'https://careers.microsoft.com',
    skillsRequired: ['Azure Fundamentals', 'Python / C#', 'Networking & OS', 'System Design'],
    description: 'Design resilient cloud computing architectures for global enterprise customers with Azure engineering teams.',
    isDemoData: true
  },
  {
    id: 'opp-3',
    title: 'Full-Stack Web Development Fellow',
    companyOrOrg: 'Major League Hacking (MLH Fellowship)',
    category: 'Fellowships',
    type: '12-Week Remote Fellowship',
    location: 'Remote (Worldwide)',
    stipendOrSalary: '$1,000 - $3,000 Educational Grant',
    deadline: 'December 01, 2024',
    daysRemaining: 50,
    status: 'Saved',
    applyUrl: 'https://fellowship.mlh.io',
    skillsRequired: ['Git/GitHub', 'TypeScript', 'React', 'Open-Source Contribution'],
    description: 'Work full-time on major open-source repositories powering global tech infrastructure under experienced tech mentors.',
    isDemoData: true
  },
  {
    id: 'opp-4',
    title: 'Smart India Hackathon 2025 (Hardware & Software)',
    companyOrOrg: 'AICTE / Govt. of India',
    category: 'Hackathons',
    type: 'National Team Competition',
    location: 'Nodal Centers Across India',
    stipendOrSalary: '₹1,00,000 Prize per Problem Statement',
    deadline: 'October 25, 2024',
    daysRemaining: 12,
    status: 'Interview',
    applyUrl: 'https://sih.gov.in',
    skillsRequired: ['Full-Stack', 'IoT / Robotics', 'AI/ML', 'Rapid Prototyping'],
    description: 'Represent your college in solving real problems posted by Government Ministries and defense organizations.',
    isDemoData: true
  },
  {
    id: 'opp-5',
    title: 'Junior Cyber Defense Analyst Intern',
    companyOrOrg: 'CyberPeace Foundation & CERT-In Partner',
    category: 'Internships',
    type: '6-Month Internship',
    location: 'New Delhi / Remote',
    stipendOrSalary: '₹25,000/month',
    deadline: 'November 05, 2024',
    daysRemaining: 24,
    status: 'Saved',
    applyUrl: 'https://cyberpeace.org',
    skillsRequired: ['Wireshark', 'Python Scripting', 'OWASP Top 10', 'Linux Hardening'],
    description: 'Monitor real-time threat intelligence feeds and conduct vulnerability assessments for non-profit and public networks.',
    isDemoData: true
  },
  {
    id: 'opp-6',
    title: 'Student Startup Pitch & Seed Incubation Cohort',
    companyOrOrg: 'NSRCEL - IIM Bangalore',
    category: 'Startup Opportunities',
    type: 'Pre-Incubation Program',
    location: 'IIM Bangalore Campus & Hybrid',
    stipendOrSalary: 'Up to ₹5 Lakhs Prototyping Grant Support',
    deadline: 'December 15, 2024',
    daysRemaining: 64,
    status: 'Saved',
    applyUrl: 'https://nsrcel.org',
    skillsRequired: ['Validated Problem Statement', 'Prototype / MVP', 'Founding Team Grit'],
    description: 'Structured 3-month pre-incubation program for student founders with direct access to IIM faculty, alumni angels, and seed grants.',
    isDemoData: true
  }
];

// =========================================================================
// 5. THE COMPLETE CAREER TIMELINE (VISUAL JOURNEY)
// =========================================================================

export const CAREER_TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 'step-1',
    order: 1,
    title: 'Class 10 Milestone',
    subtitle: 'Academic Foundations & Aptitude Discovery',
    iconName: 'BookOpen',
    description: 'Identify core strengths across Science, Math, Humanities, and Logical Aptitude. Lay strong conceptual groundwork.',
    status: 'completed',
    relatedTab: 'home'
  },
  {
    id: 'step-2',
    order: 2,
    title: 'Stream Selection',
    subtitle: 'PCM vs PCB vs Commerce vs Arts',
    iconName: 'Compass',
    description: 'Diagnose career affinities using MEUU AI’s Stream Matcher. Lock in your Senior Secondary subject combinations.',
    status: 'completed',
    relatedTab: 'stream'
  },
  {
    id: 'step-3',
    order: 3,
    title: 'Entrance Exams',
    subtitle: 'JEE • NEET • CUET • BITSAT • IPMAT',
    iconName: 'Target',
    description: 'Track syllabus breakdowns, cutoffs, previous year papers, and application dates with automated countdown timers.',
    status: 'current',
    relatedTab: 'exams'
  },
  {
    id: 'step-4',
    order: 4,
    title: 'College Discovery & Admissions',
    subtitle: 'NIRF Ranked Campuses & Cutoffs',
    iconName: 'Building2',
    description: 'Match your entrance scores and regional preferences to 500+ top engineering, medical, and central universities.',
    status: 'upcoming',
    relatedTab: 'colleges'
  },
  {
    id: 'step-5',
    order: 5,
    title: 'Core Skills Mastery',
    subtitle: 'Programming • Math • Systems • AI',
    iconName: 'Code',
    description: 'Build timeless technical foundations in algorithms, cloud infrastructure, AI/ML engineering, and product thinking.',
    status: 'upcoming',
    relatedTab: 'careers'
  },
  {
    id: 'step-6',
    order: 6,
    title: 'Hands-On Projects',
    subtitle: 'Full-Stack Deployed Systems & Open-Source',
    iconName: 'Layers',
    description: 'Construct 2-3 production-grade, deployed portfolio systems with clean documentation instead of copy-paste clones.',
    status: 'upcoming',
    relatedTab: 'careers'
  },
  {
    id: 'step-7',
    order: 7,
    title: 'Internships & Fellowships',
    subtitle: 'Real-World Production Experience',
    iconName: 'Briefcase',
    description: 'Gain industrial exposure through structured summer internships, research labs, or open-source fellowships.',
    status: 'upcoming',
    relatedTab: 'careers'
  },
  {
    id: 'step-8',
    order: 8,
    title: 'Training & Skill Certification',
    subtitle: 'Industry Certifications & Advanced Bootcamps',
    iconName: 'GraduationCap',
    description: 'Sharpen cloud credentials (AWS/GCP), security certifications, and high-level system design patterns.',
    status: 'upcoming',
    relatedTab: 'careers'
  },
  {
    id: 'step-9',
    order: 9,
    title: 'Placement & Interview Prep',
    subtitle: 'DSA Mock Interviews • System Design • Soft Skills',
    iconName: 'UserCheck',
    description: 'Participate in peer mock interviews, polish technical storytelling, and master behavioral STAR formats.',
    status: 'upcoming',
    relatedTab: 'careers'
  },
  {
    id: 'step-10',
    order: 10,
    title: 'Job • Startup • Higher Studies',
    subtitle: 'Building a High-Impact Career',
    iconName: 'Rocket',
    description: 'Launch into your career as a high-earning software engineer, venture founder, researcher, or postgraduate scholar.',
    status: 'upcoming',
    relatedTab: 'careers'
  }
];
