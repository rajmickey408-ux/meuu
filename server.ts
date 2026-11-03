import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client Lazily / Safe Check
let aiClient: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not set. Gemini endpoints will return fallback structured responses.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health Check Endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "MEUU AI", timestamp: new Date().toISOString() });
});

// 1. AI Assistant Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, context, chatHistory } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      const lower = message.toLowerCase();
      let customReply = "";
      let customSuggestions = [
        "Give me a DSA roadmap",
        "Am I ready for a software internship?",
        "Make me a 90-day placement plan",
        "What should I learn for AI/ML?"
      ];

      if (lower.includes("90-day") || lower.includes("placement plan")) {
        customReply = `### 📌 Summary\nHere is your **Structured 90-Day Placement Preparation Masterplan** tailored for tech roles (Software Development, Systems & AI Engineering).\n\n### 🧭 Step-by-Step Guidance\n1. **Days 1–30 (DSA & Core Coding Foundations)**: Master Arrays, Two Pointers, Sliding Window, Linked Lists, Binary Search, and Stacks/Queues. Target 60–80 quality LeetCode problems.\n2. **Days 31–60 (Advanced DSA & CS Fundamentals)**: Trees (BFS/DFS), Graphs (Dijkstra, Topological Sort), Dynamic Programming patterns, DBMS (SQL indexing & transactions), and Operating Systems (threads, processes, virtual memory).\n3. **Days 61–75 (Projects & System Design)**: Polish 2 production-grade deployed projects (with live URLs and GitHub READMEs). Practice Low-Level Design (LLD) and High-Level Design (caching, rate limiting, load balancing).\n4. **Days 76–90 (Mock Interviews & Behavioral STAR)**: Daily peer mock interviews, timed coding assessments, and behavioral storytelling using the Situation-Task-Action-Result framework.\n\n### ⏱️ Timeline\n- **Month 1**: Core DSA patterns (NeetCode 150)\n- **Month 2**: Trees, Graphs, DP & System Architecture\n- **Month 3**: Mock rounds, resume freeze, and company-specific tests\n\n### 🎯 Recommended Next Action\nSolve 2 LeetCode problems on Sliding Window today and document your approach in your coding journal.\n\n### 📝 Related Exams\n- **Campus Placement Coding Drives**\n- **TCS NQT / Infosys HackWithInfy**\n- **Google Kickstart & Codeforces Contests**\n\n### 🏛️ Related Colleges\n- **Top Tier-1 & Tier-2 Engineering Campuses**\n\n### 🔗 Official Portal Links\n- [LeetCode Practice](https://leetcode.com)\n- [NeetCode Roadmap](https://neetcode.io)`;
      } else if (lower.includes("dsa") || lower.includes("roadmap")) {
        customReply = `### 📌 Summary\nMastering **Data Structures & Algorithms (DSA)** requires focusing on problem-solving patterns rather than memorizing random solutions.\n\n### 🧭 Step-by-Step Guidance\n1. **Phase 1: Language Fluency**: Choose C++, Java, or Python. Master standard templates (STL / Collections / Collections deque).\n2. **Phase 2: Linear Data Structures**: Arrays, Strings, Hash Maps, Prefix Sums, Two Pointers, Stacks, Queues, and Priority Queues.\n3. **Phase 3: Non-Linear Structures**: Binary Trees, Binary Search Trees, Tries, and Graph traversals (BFS, DFS, Cycle Detection).\n4. **Phase 4: Optimization Techniques**: Dynamic Programming (Knapsack, LCS, LIS), Greedy algorithms, and Bit Manipulation.\n5. **Phase 5: Practice Strategy**: Aim for 150–200 curated problems (NeetCode 150 / Striver A2Z DSA Sheet).\n\n### ⏱️ Timeline\n- **Weeks 1–4**: Arrays, Strings, Sorting & Binary Search\n- **Weeks 5–8**: Linked Lists, Trees & Heaps\n- **Weeks 9–12**: Graphs, DP & Mock Timed Tests\n\n### 🎯 Recommended Next Action\nImplement Binary Search on a sorted rotated array and verify edge cases without looking up solutions.\n\n### 📝 Related Exams\n- **Campus Placement Coding Rounds**\n- **HackerRank & LeetCode Weekly Contests**\n\n### 🏛️ Related Colleges\n- **IITs, NITs, BITS, IIITs**\n\n### 🔗 Official Portal Links\n- [NeetCode 150 Sheet](https://neetcode.io)\n- [Striver's TakeUForward](https://takeuforward.org)`;
      } else if (lower.includes("internship") || lower.includes("ready")) {
        customReply = `### 📌 Summary\nYou are ready for software internships when you have **1 core coding language mastered**, **75+ DSA problems solved**, and **at least 1 deployed full-stack project** with live users and a clean GitHub repo.\n\n### 🧭 Step-by-Step Guidance\n1. **Portfolio Check**: Ensure your project is deployed on Vercel/Cloud Run with real authentication and responsive UI—not just running on localhost.\n2. **Git Hygiene**: Your GitHub must show meaningful commit messages, branches, and a detailed README explaining system architecture.\n3. **Resume Formatting**: Single-page LaTeX or Jake’s Resume template. Use action verbs and metric impact (e.g., "Reduced latency by 40% using Redis caching").\n4. **Application Pipeline**: Apply to 10-15 curated roles weekly across LinkedIn, Wellfound (AngelList), and campus portals.\n\n### ⏱️ Timeline\n- **Current**: Resume audit & project deployment\n- **Next 2 Weeks**: Complete first 10 targeted internship applications\n\n### 🎯 Recommended Next Action\nTrack your active applications in MEUU AI's **"My Opportunities"** tracker under the Internships tab.\n\n### 📝 Related Exams\n- **Google Summer of Code (GSoC)**\n- **MLH Fellowship**\n- **Microsoft IDC Internships**\n\n### 🏛️ Related Colleges\n- **All Recognized Engineering Universities**\n\n### 🔗 Official Portal Links\n- [Google Students Portal](https://careers.google.com/students/)\n- [MLH Fellowship](https://fellowship.mlh.io)`;
      } else {
        customReply = `### 📌 Summary\nWelcome to **MEUU AI**! Regarding **"${message}"**, your academic and career pathway requires deliberate alignment between your current stream, target skill profile, and high-growth technology roles.\n\n### 🧭 Step-by-Step Guidance\n1. **Aptitude & Stream Alignment**: Choose PCM for Engineering/Tech, PCB for Medical/Research, Commerce for Finance, or Humanities for Civil Services & Design.\n2. **Core In-Demand Skills**: Focus on AI & Machine Learning, Cloud Architecture, Full-Stack Development, and Problem Solving.\n3. **Milestone Tracking**: Balance board exams with entrance test dates (JEE, NEET, CUET) and college cutoffs.\n4. **Hands-On Craft**: Build 2 deployed projects that demonstrate tangible value.\n\n### ⏱️ Timeline\n- **Foundation Building**: Months 1–3\n- **Entrance / Internship Registration**: Oct – Jan\n- **Final Placements / Admissions**: March – June\n\n### 🎯 Recommended Next Action\nExplore the **10 Industry Trends** and **Career Timeline** in MEUU AI's **Careers & Training** hub.\n\n### 📝 Related Exams\n- **JEE Main 2025** (Engineering Entrance)\n- **CUET-UG 2025** (Central Universities)\n- **Campus Placement Coding Drives**\n\n### 🏛️ Related Colleges\n- **IIT Delhi / DTU Delhi / BITS Pilani**\n\n### 🔗 Official Portal Links\n- [NTA Official](https://jeemain.nta.nic.in)\n- [National Career Service](https://www.ncs.gov.in)`;
      }

      return res.json({
        reply: customReply,
        suggestions: customSuggestions,
        relatedExams: ["JEE Main 2025", "CUET-UG 2025", "BITSAT 2025"],
        relatedColleges: ["IIT Delhi", "DTU Delhi", "VIT Vellore"]
      });
    }

    const systemInstruction = `You are MEUU AI, an elite, highly professional, warm, and world-class Academic & Career Mentor for Class 10+, Class 12, and undergraduate college students.
Your product journey covers: "From choosing your path to building your career" (Career Discovery → Stream Selection → Entrance Exams → College Discovery → Scholarships → Applications → Counselling → Skills Mastery → Internships → Training → Placements → Job/Startup).
Your responses MUST be written in flawless, non-robotic English with zero grammar mistakes, zero repeated commas, and zero robotic filler phrases.

If asked about DSA, internships, placement plans, resume reviews, AI/ML roadmaps, or interview prep:
Act as an experienced technical hiring manager and career mentor. Provide exact problem-solving patterns, concrete milestones, project recommendations, and interview tactics.

ALWAYS structure your response using these exact Markdown headers:

### 📌 Summary
[Provide a crisp 1-2 sentence overview directly answering the query]

### 🧭 Step-by-Step Guidance
[Provide clear, numbered actionable steps for the student]

### ⏱️ Timeline
[Provide key milestones, exam dates, application deadlines, or weekly breakdown]

### 🎯 Recommended Next Action
[State 1 immediate practical step the student should do today]

### 📝 Related Exams
[List 2-4 key entrance tests, assessments, or coding competitions relevant to this query]

### 🏛️ Related Colleges
[List 2-4 top colleges, universities, or tech employers relevant to this pathway]

### 🔗 Official Portal Links
[List official links like https://jeemain.nta.nic.in, https://leetcode.com, https://careers.google.com/students/, https://scholarships.gov.in]

If the user query is brief or general and crucial details like Class, Stream, College Year, or Target Role are missing, politely ask 1-2 quick follow-up questions at the very beginning to gather details while answering.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        { role: "user", parts: [{ text: `${context ? `[Context: ${context}] ` : ""}${message}` }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.6,
      },
    });

    res.json({
      reply: response.text || "I am analyzing your educational pathway. Let me know your stream or exam preferences!",
      suggestions: [
        "Tell me more about preparation strategy",
        "What are the top government scholarships?",
        "Compare Engineering vs Management options",
        "How to prepare for Class 10/12 Board Exams?"
      ]
    });
  } catch (err: any) {
    console.error("Gemini Chat Error:", err);
    res.json({
      reply: `### 📌 Summary\nI am analyzing your academic profile. Choosing the right path after Class 10 requires systematically evaluating your strengths in Physics, Math, Chemistry, and Logical Reasoning.\n\n### 🧭 Step-by-Step Guidance\n1. **Assess Strengths**: Review your Class 10 scores and aptitude tests.\n2. **Explore Streams**: Evaluate PCM, PCB, Commerce, or Humanities.\n3. **Track Deadlines**: Prepare for upcoming entrance exams and form deadlines.\n\n### ⏱️ Timeline\n- **Stream Selection**: March 2025\n- **Entrance Registration**: Oct - Dec 2025\n\n### 🎯 Recommended Next Action\nExplore our built-in **Stream Selector** and **Exam Tracker** modules in MEUU AI.\n\n### 📝 Related Exams\n- **JEE Main 2025**\n- **CUET-UG 2025**\n\n### 🏛️ Related Colleges\n- **IIT Delhi**\n- **DTU Delhi**\n\n### 🔗 Official Portal Links\n- [NTA Official](https://jeemain.nta.nic.in)`,
      suggestions: ["Which stream should I choose after Class 10?", "Show top colleges for Engineering"]
    });
  }
});

// 2. Stream Recommendation Engine
app.post("/api/stream-recommendation", async (req, res) => {
  try {
    const { mathScore, scienceScore, englishScore, socialScore, interests, workStyle } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Fallback rule-based recommendation
      const isMathStrong = (mathScore || 80) >= 75;
      const isScienceStrong = (scienceScore || 80) >= 75;
      return res.json({
        recommendedStream: isMathStrong && isScienceStrong ? "Science (PCM / PCMB)" : isMathStrong ? "Commerce with Mathematics" : "Humanities & Social Sciences",
        matchPercentage: 92,
        keyCareers: ["Software & AI Engineering", "Data Analytics", "Financial Planning", "Product Design"],
        topExams: ["JEE Main", "CUET-UG", "IPMAT", "Design Aptitude Test"],
        advice: "Based on your subject score profile and preferences, this stream aligns with high-growth future careers."
      });
    }

    const prompt = `Analyze this Class 10 student profile and recommend the ideal stream:
- Science/Physics/Chemistry Interest/Score: ${scienceScore}/100
- Mathematics/Logic Interest/Score: ${mathScore}/100
- English/Communication Score: ${englishScore}/100
- Social Sciences/History/Govt Score: ${socialScore}/100
- Student Interests: ${interests || "Technology, Problem Solving"}
- Preferred Working Style: ${workStyle || "Analytical & Creative"}

Return a JSON object with:
- "recommendedStream": string (e.g., "Science (PCM)", "Science (PCB)", "Commerce with IP/Math", "Humanities / Liberal Arts")
- "matchPercentage": number (80 to 98)
- "keyCareers": string array (4 top career outcomes)
- "topExams": string array (3 key entrance exams to target)
- "advice": string (2 sentences of encouraging, actionable career advice)`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text || "{}");
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: "Failed to generate stream recommendation" });
  }
});

// Mount Vite middleware for dev / static for prod
async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MEUU AI server running on http://0.0.0.0:${PORT}`);
  });
}

setupViteOrStatic();
