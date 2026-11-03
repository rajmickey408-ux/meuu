import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STARTUP_PATH_STAGES, STARTUP_RESOURCES } from '../../../data/careersData';
import { StartupStage, StartupResource } from '../../../types';
import { 
  Rocket, 
  Lightbulb, 
  Target, 
  Layers, 
  Users, 
  DollarSign, 
  FileText, 
  Building, 
  TrendingUp, 
  CheckCircle2, 
  Circle,
  ExternalLink, 
  AlertTriangle, 
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Award,
  BookOpen,
  Edit3,
  Save,
  Briefcase,
  Code2,
  Scale,
  Gift,
  Clock,
  ArrowUpRight,
  BarChart3,
  Presentation,
  HelpCircle
} from 'lucide-react';

interface VentureProfile {
  name: string;
  oneLiner: string;
  category: string;
  problemStatement: string;
}

const PITCH_DECK_SLIDES = [
  {
    slideNumber: 1,
    title: 'The Problem',
    tagline: 'Define the acute pain point with emotional intensity and real user quotes.',
    keyElements: [
      'Specific target persona experiencing the friction',
      'Why current solutions (spreadsheets, manual labor) fail',
      'The cost of the problem in wasted time, money, or frustration'
    ],
    proTip: 'Never say "there is no competition". If nobody is trying to solve it, the problem might not exist.'
  },
  {
    slideNumber: 2,
    title: 'The Solution & Value Proposition',
    tagline: 'Introduce your product and the fundamental transformation it delivers.',
    keyElements: [
      'Simple 1-sentence value proposition (what it does in plain English)',
      'The "Magic Moment" where the user experiences instant relief or value',
      'Why your technical or structural approach is 10x better, faster, or cheaper'
    ],
    proTip: 'Focus on benefits, not just features. Explain how user life changes after using your product.'
  },
  {
    slideNumber: 3,
    title: 'Target Market & Market Size',
    tagline: 'TAM, SAM, and SOM calculated from bottom-up first principles.',
    keyElements: [
      'TAM (Total Addressable Market): Total annual spend if 100% of the market bought',
      'SAM (Serviceable Addressable Market): The subset of the market you can realistically target today',
      'SOM (Serviceable Obtainable Market): Your 2-3 year realistic beachhead capture'
    ],
    proTip: 'Avoid top-down hand-waving like "If we just capture 1% of China". Build bottom-up: (Number of users) × (Annual price).'
  },
  {
    slideNumber: 4,
    title: 'Product Demo & Architecture',
    tagline: 'Show, don\'t tell. High-fidelity screenshots, live GIF, or system diagram.',
    keyElements: [
      'Clean UI showing the core happy path in 3 simple steps',
      'Technical architecture highlighting proprietary algorithms or workflow automation',
      'Current development status: Live deployed MVP vs functional prototype'
    ],
    proTip: 'Keep screenshots minimal and crisp with high contrast. Highlight the exact user button that triggers the magic.'
  },
  {
    slideNumber: 5,
    title: 'Traction & Key Metrics',
    tagline: 'The ultimate slide: concrete evidence of user desire and retention.',
    keyElements: [
      'Growth chart showing weekly or monthly active users (WAU / MAU)',
      'Cohort retention curve proving users come back unprompted',
      'Customer love: testimonials, high NPS score (>60), or letters of intent (LOIs)'
    ],
    proTip: 'If pre-revenue, showcase engagement: daily time spent, task completion rate, and organic word-of-mouth referral.'
  },
  {
    slideNumber: 6,
    title: 'Business Model & Unit Economics',
    tagline: 'Explain how you generate revenue and achieve positive gross margins.',
    keyElements: [
      'Pricing model: SaaS subscription, transaction fee, marketplace take-rate, or freemium',
      'Customer Acquisition Cost (CAC) vs Customer Lifetime Value (LTV)',
      'Payback period: Months required to recover the cost of acquiring a customer'
    ],
    proTip: 'Target an LTV:CAC ratio of at least 3:1. Ensure gross margins exceed 70% for software ventures.'
  },
  {
    slideNumber: 7,
    title: 'Go-To-Market (GTM) Strategy',
    tagline: 'Your unfair distribution engine for customer acquisition at low or zero cost.',
    keyElements: [
      'Initial beachhead channel (e.g. campus ambassador network, open-source community, viral loops)',
      'Content and SEO playbook for inbound organic discovery',
      'B2B partnership pipeline or direct outbound sales process'
    ],
    proTip: 'First-time founders obsess over product; second-time founders obsess over distribution.'
  },
  {
    slideNumber: 8,
    title: 'Competitive Moat & Defense',
    tagline: 'Why incumbents or copycats cannot easily displace you in 12 months.',
    keyElements: [
      '2x2 positioning matrix comparing key dimensions (e.g. Speed vs Customization)',
      'Defensible moats: Network effects, proprietary data assets, high switching costs',
      'Speed of iteration as an asymmetric advantage over slow corporate rivals'
    ],
    proTip: 'Be fair to competitors. Acknowledge what they do well and clearly articulate your unique angle.'
  },
  {
    slideNumber: 9,
    title: 'Founding Team',
    tagline: 'Why this specific team has the obsession, technical grit, and domain insight.',
    keyElements: [
      'Founders and core engineers with respective roles (CEO, CTO, Design)',
      'Key accomplishments: previous hackathon wins, published papers, or relevant internships',
      'Advisors: respected professors, industry veterans, or incubator EIRs'
    ],
    proTip: 'Show founder-market fit: Why are YOU uniquely obsessed with solving this exact problem?'
  },
  {
    slideNumber: 10,
    title: 'The Ask, Milestones & Runway',
    tagline: 'Clearly state your funding or grant requirement and 18-month execution roadmap.',
    keyElements: [
      'Capital amount sought (e.g. ₹20 Lakhs grant via SISFS or ₹50 Lakhs angel round)',
      'Use of funds breakdown: Engineering/Product (60%), GTM (25%), Legal/Infra (15%)',
      'Specific 12-to-18 month milestones you will hit with this capital before next round'
    ],
    proTip: 'Never ask for money without specifying what metrics you will achieve before the bank account reaches zero.'
  }
];

export const EntrepreneurshipView: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(STARTUP_PATH_STAGES[0].id);
  const [resourceFilter, setResourceFilter] = useState<string>('All');
  const [activeSubTab, setActiveSubTab] = useState<'stages' | 'tracker' | 'pitchdeck' | 'legal'>('stages');
  const [activeDeckSlide, setActiveDeckSlide] = useState<number>(1);
  
  // Venture Profile Local Storage State
  const [ventureProfile, setVentureProfile] = useState<VentureProfile>(() => {
    try {
      const saved = localStorage.getItem('meuu_startup_venture_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return {
      name: 'CampusCart',
      oneLiner: 'Peer-to-peer campus marketplace for verified engineering textbooks, calculators & lab kits.',
      category: 'Campus Utility / Marketplace',
      problemStatement: 'Students waste ₹5,000+ every semester on new textbooks while seniors discard old ones with zero convenient resale platform.'
    };
  });

  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [profileForm, setProfileForm] = useState<VentureProfile>(ventureProfile);

  // Completed Milestones state: set of strings `stageId_index`
  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('meuu_startup_completed_milestones');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return {
      'stage-1_0': true,
      'stage-1_1': true,
      'stage-1_2': true,
      'stage-2_0': true,
      'stage-2_1': true
    };
  });

  // Persist completed milestones
  useEffect(() => {
    try {
      localStorage.setItem('meuu_startup_completed_milestones', JSON.stringify(completedMilestones));
    } catch (e) {
      // ignore
    }
  }, [completedMilestones]);

  const toggleMilestone = (stageId: string, idx: number) => {
    const key = `${stageId}_${idx}`;
    setCompletedMilestones((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveProfile = () => {
    setVentureProfile(profileForm);
    try {
      localStorage.setItem('meuu_startup_venture_profile', JSON.stringify(profileForm));
    } catch (e) {
      // ignore
    }
    setIsEditingProfile(false);
  };

  // Calculate Overall Startup Readiness Score
  const totalPossibleMilestones = STARTUP_PATH_STAGES.reduce((acc, stage) => acc + (stage.milestoneChecklist?.length || 4), 0);
  const totalCompleted = Object.values(completedMilestones).filter(Boolean).length;
  const readinessPercent = Math.min(100, Math.round((totalCompleted / totalPossibleMilestones) * 100));

  const activeStage = STARTUP_PATH_STAGES.find((s) => s.id === activeStageId) || STARTUP_PATH_STAGES[0];

  const filteredResources = STARTUP_RESOURCES.filter((res) => {
    if (resourceFilter === 'All') return true;
    return res.type === resourceFilter;
  });

  return (
    <div className="space-y-4">
      {/* 1. TOP HEADER BANNER */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-[#0a1835] to-indigo-950/50 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-black uppercase tracking-wider mb-1">
            <span className="p-1 rounded-lg bg-cyan-500/20 text-cyan-300">
              <Rocket className="w-3.5 h-3.5" />
            </span>
            <span>Build Your Own Path</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black border border-cyan-400/30">
            Student Founder Hub
          </span>
        </div>

        <h3 className="font-display font-black text-lg text-white mt-1">
          The Student Founder’s Journey: Idea to Scaling
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          A battle-tested 10-stage blueprint designed for collegiate entrepreneurs. Diagnose campus frictions, validate with user interviews, build functional MVPs, apply to university incubation cells, and secure non-dilutive government grants.
        </p>

        {/* Startup Readiness Widget */}
        <div className="mt-3 p-3 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-black text-white">
                Venture Readiness: <span className="text-cyan-300">{ventureProfile.name}</span>
              </span>
            </div>
            <span className="text-xs font-black text-cyan-400">
              {readinessPercent}% Complete ({totalCompleted}/{totalPossibleMilestones} Milestones)
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${readinessPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Clear Regulatory Disclaimer */}
        <div className="mt-3 p-2.5 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-start space-x-2 text-[11px] text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-snug">
            <strong>Important Regulatory & Evaluation Disclaimer:</strong> MEUU AI does not promise, guarantee, or provide funding, investment, or admission into any incubator, accelerator, or government grant program. Selection for all featured programs (e.g. SISFS, NIDHI-PRAYAS, Atal Incubation Centres, YC) is subject to independent competitive evaluation by their respective boards.
          </div>
        </div>
      </div>

      {/* 2. SUB-SECTION NAVIGATION TABS */}
      <div className="flex items-center space-x-1.5 p-1 rounded-2xl bg-slate-900/90 border border-white/10 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveSubTab('stages')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'stages'
              ? 'bg-cyan-500 text-slate-950 font-black shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>10-Stage Blueprint</span>
        </button>

        <button
          onClick={() => setActiveSubTab('tracker')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'tracker'
              ? 'bg-cyan-500 text-slate-950 font-black shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>My Venture Canvas</span>
        </button>

        <button
          onClick={() => setActiveSubTab('pitchdeck')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'pitchdeck'
              ? 'bg-cyan-500 text-slate-950 font-black shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Presentation className="w-3.5 h-3.5" />
          <span>10-Slide Pitch Deck</span>
        </button>

        <button
          onClick={() => setActiveSubTab('legal')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
            activeSubTab === 'legal'
              ? 'bg-cyan-500 text-slate-950 font-black shadow-md'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Student IP & Legal Guide</span>
        </button>
      </div>

      {/* 3. VIEW MODE CONTENT */}
      {activeSubTab === 'stages' && (
        <div className="space-y-4">
          {/* Horizontal 10-Stage Stepper */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Select Stage to Inspect
              </span>
              <span className="text-xs text-cyan-300 font-extrabold">
                Stage {activeStage.stageNumber} of 10
              </span>
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              {STARTUP_PATH_STAGES.map((stg) => {
                const isSelected = stg.id === activeStage.id;
                // Count completed milestones for this stage
                const stageMilestones = stg.milestoneChecklist || [];
                const completedInStage = stageMilestones.filter((_, idx) => !!completedMilestones[`${stg.id}_${idx}`]).length;
                const isAllDone = stageMilestones.length > 0 && completedInStage === stageMilestones.length;

                return (
                  <button
                    key={stg.id}
                    onClick={() => setActiveStageId(stg.id)}
                    className={`px-3 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-2 shrink-0 border ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black border-cyan-300 shadow-lg scale-105'
                        : isAllDone
                        ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                        : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-black ${
                      isSelected ? 'bg-slate-950 text-cyan-300' : isAllDone ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isAllDone ? '✓' : stg.stageNumber}
                    </span>
                    <span>{stg.name}</span>
                    <span className="text-[9px] opacity-75 font-mono">
                      ({completedInStage}/{stageMilestones.length})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Deep Dive Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-4 rounded-3xl glass-panel border border-cyan-400/40 bg-slate-900/95 space-y-4 shadow-xl"
            >
              {/* Stage Header */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-black border border-cyan-400/30 uppercase">
                      Stage {activeStage.stageNumber} of 10
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {activeStage.shortDesc}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-xl text-white mt-1">
                    {activeStage.name}
                  </h4>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">
                    Stage Progress
                  </span>
                  <span className="text-xs font-black text-cyan-300">
                    {(activeStage.milestoneChecklist || []).filter((_, idx) => !!completedMilestones[`${activeStage.id}_${idx}`]).length} / {(activeStage.milestoneChecklist || []).length} Milestones
                  </span>
                </div>
              </div>

              {/* Interactive Milestone Checklist */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h5 className="text-[11px] font-black text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>INTERACTIVE MILESTONES (CHECK TO ADVANCE)</span>
                  </h5>
                  <span className="text-[10px] text-slate-400">
                    Click checkboxes to update venture score
                  </span>
                </div>

                <div className="space-y-2">
                  {(activeStage.milestoneChecklist || []).map((milestone, idx) => {
                    const isChecked = !!completedMilestones[`${activeStage.id}_${idx}`];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggleMilestone(activeStage.id, idx)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-start space-x-2.5 transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-cyan-950/30 border-cyan-400/50 text-white'
                            : 'bg-slate-900/60 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-500" />
                          )}
                        </span>
                        <span className={`text-xs leading-relaxed ${isChecked ? 'line-through text-slate-300 font-medium' : ''}`}>
                          {milestone}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Objectives & Tactical Action Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Objectives */}
                <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/10 space-y-2">
                  <h5 className="text-[10px] font-black text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <Target className="w-3.5 h-3.5" />
                    <span>CORE OBJECTIVES</span>
                  </h5>
                  <div className="space-y-1.5">
                    {activeStage.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactical Action Steps */}
                <div className="p-3.5 rounded-2xl bg-slate-950/50 border border-white/10 space-y-2">
                  <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>TACTICAL PLAYBOOK</span>
                  </h5>
                  <div className="space-y-1.5">
                    {activeStage.actionSteps.map((step, i) => (
                      <div key={i} className="text-xs text-slate-200">
                        <span className="font-bold text-emerald-400 mr-1.5">{i + 1}.</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Deliverables & Startup KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Key Deliverables */}
                <div className="p-3 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-1.5">
                  <h5 className="text-[10px] font-black text-indigo-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>GRADUATION DELIVERABLES</span>
                  </h5>
                  <div className="space-y-1">
                    {(activeStage.keyDeliverables || []).map((del, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-indigo-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Startup KPIs */}
                <div className="p-3 rounded-2xl bg-teal-950/20 border border-teal-500/20 space-y-1.5">
                  <h5 className="text-[10px] font-black text-teal-300 uppercase tracking-wider flex items-center space-x-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>STARTUP KPIS TO MEASURE</span>
                  </h5>
                  <div className="space-y-1">
                    {(activeStage.kpiMetrics || []).map((kpi, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-teal-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span>{kpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Common Pitfalls & Red Flags */}
              <div className="p-3 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                <h5 className="text-[10px] font-black text-rose-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>CRITICAL PITFALLS & RED FLAGS TO AVOID</span>
                </h5>
                <div className="space-y-1">
                  {activeStage.commonPitfalls.map((pit, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-rose-200/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{pit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Stack & Stage Specific Resources */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Recommended Stack:</span>
                  {activeStage.recommendedTools.map((tool, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-[10px] font-bold">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Stage Resource Links */}
                {(activeStage.resourceLinks || []).length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                      Curated Guides for Stage {activeStage.stageNumber}:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeStage.resourceLinks.map((rl, i) => (
                        <a
                          key={i}
                          href={rl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-slate-950/60 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <div>
                            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-bold mr-1.5">
                              {rl.tag}
                            </span>
                            <span className="text-xs text-white font-bold group-hover:text-cyan-300 transition-colors">
                              {rl.title}
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">
                              {rl.source}
                            </span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Directory of Hackathons, Incubators & Grants */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-1">
              <div>
                <h4 className="font-display font-black text-base text-white flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>Funding, Incubators & Competitions Directory</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verified ecosystem programs with active student cohorts and equity-free grants.
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
              {['All', 'Government Grant', 'Incubator', 'Hackathon', 'Competition', 'Founder Resource'].map((rf) => (
                <button
                  key={rf}
                  onClick={() => setResourceFilter(rf)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    resourceFilter === rf
                      ? 'bg-purple-500 text-white font-black shadow-md'
                      : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {rf}
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 gap-2.5">
              {filteredResources.map((res) => (
                <div
                  key={res.id}
                  className="p-3.5 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 hover:border-purple-500/40 space-y-2 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border uppercase ${
                          res.type === 'Government Grant'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                            : res.type === 'Incubator'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30'
                            : res.type === 'Hackathon'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                            : 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                        }`}>
                          {res.type}
                        </span>
                        {res.grantAmountOrPerk && (
                          <span className="text-[10px] font-bold text-emerald-400 flex items-center space-x-1">
                            <Gift className="w-3 h-3 mr-0.5" />
                            <span>{res.grantAmountOrPerk}</span>
                          </span>
                        )}
                      </div>

                      <h5 className="font-display font-bold text-sm text-white mt-1">
                        {res.title}
                      </h5>
                      <p className="text-[11px] text-cyan-300 font-semibold">
                        {res.organization}
                      </p>
                    </div>

                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-400/30 text-xs font-bold flex items-center space-x-1 shrink-0 transition-colors cursor-pointer"
                    >
                      <span>{res.linkText}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {res.description}
                  </p>

                  {res.eligibilityOrDeadline && (
                    <div className="text-[10px] text-slate-400 flex items-center space-x-1.5 pt-1 border-t border-white/5">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{res.eligibilityOrDeadline}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. MY VENTURE CANVAS (STUDENT STARTUP TRACKER) */}
      {activeSubTab === 'tracker' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/90 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <h4 className="font-display font-black text-base text-white">
                  My Venture Canvas & Idea Diary
                </h4>
              </div>

              {!isEditingProfile ? (
                <button
                  onClick={() => {
                    setProfileForm(ventureProfile);
                    setIsEditingProfile(true);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Venture Details</span>
                </button>
              ) : (
                <button
                  onClick={handleSaveProfile}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-xs font-bold text-slate-950 flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Venture</span>
                </button>
              )}
            </div>

            <p className="text-xs text-slate-300">
              Personalize your startup workspace. Your venture details and milestone completions are persisted locally on your device.
            </p>

            {isEditingProfile ? (
              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">
                    Startup Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:border-cyan-400 outline-none"
                    placeholder="e.g. EduSync, HostelClean, CodeCraft"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">
                    Venture Category / Domain
                  </label>
                  <input
                    type="text"
                    value={profileForm.category}
                    onChange={(e) => setProfileForm({ ...profileForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:border-cyan-400 outline-none"
                    placeholder="e.g. EdTech, Campus Marketplace, AI SaaS, FinTech"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">
                    One-Sentence Elevator Pitch
                  </label>
                  <input
                    type="text"
                    value={profileForm.oneLiner}
                    onChange={(e) => setProfileForm({ ...profileForm, oneLiner: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:border-cyan-400 outline-none"
                    placeholder="e.g. We help college students buy and sell peer engineering books with zero commission."
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1">
                    Acute Problem Statement (Observed Campus Friction)
                  </label>
                  <textarea
                    rows={3}
                    value={profileForm.problemStatement}
                    onChange={(e) => setProfileForm({ ...profileForm, problemStatement: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-white text-xs focus:border-cyan-400 outline-none"
                    placeholder="Describe the exact pain point experienced by you or your peers..."
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Startup Project Name</span>
                    <h5 className="font-display font-black text-sm text-white">{ventureProfile.name}</h5>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold inline-block mt-1">
                      {ventureProfile.category}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Overall Milestone Velocity</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="font-display font-black text-xl text-cyan-400">{readinessPercent}%</span>
                      <span className="text-xs text-slate-300">({totalCompleted} of {totalPossibleMilestones} milestones)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      {totalCompleted >= 20 ? 'Active MVP / Traction Phase' : totalCompleted >= 10 ? 'Prototyping & Discovery Phase' : 'Initial Idea & Problem Discovery'}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Elevator Pitch</span>
                  <p className="text-xs text-slate-200 italic font-serif">
                    “{ventureProfile.oneLiner}”
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Problem Statement</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ventureProfile.problemStatement}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Full 10-Stage Milestone Dashboard */}
          <div className="p-4 rounded-3xl glass-panel border border-white/10 bg-slate-900/90 space-y-3">
            <h4 className="font-display font-black text-sm text-white flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full Venture Milestone Progress Overview</span>
            </h4>

            <div className="space-y-2">
              {STARTUP_PATH_STAGES.map((stg) => {
                const stageMilestones = stg.milestoneChecklist || [];
                const completedInStage = stageMilestones.filter((_, idx) => !!completedMilestones[`${stg.id}_${idx}`]).length;
                const isComplete = stageMilestones.length > 0 && completedInStage === stageMilestones.length;

                return (
                  <div
                    key={stg.id}
                    className="p-3 rounded-2xl bg-slate-950/70 border border-white/5 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-black ${
                        isComplete ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {isComplete ? '✓' : stg.stageNumber}
                      </span>
                      <div>
                        <span className="text-xs font-bold text-white block">{stg.name}</span>
                        <span className="text-[10px] text-slate-400">{stg.shortDesc}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-bold ${isComplete ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {completedInStage}/{stageMilestones.length}
                      </span>
                      <button
                        onClick={() => {
                          setActiveStageId(stg.id);
                          setActiveSubTab('stages');
                        }}
                        className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] text-cyan-300 font-bold cursor-pointer"
                      >
                        Inspect
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 5. 10-SLIDE PITCH DECK BLUEPRINT */}
      {activeSubTab === 'pitchdeck' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/90 space-y-2">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-black uppercase tracking-wider">
              <Presentation className="w-4 h-4" />
              <span>Standard Venture Deck Blueprint</span>
            </div>
            <h4 className="font-display font-black text-base text-white">
              The 10-Slide Investor & Incubator Pitch Structure
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Based on the standard Sequoia Capital and Y Combinator templates used to raise over $100 Billion in seed and angel funding.
            </p>
          </div>

          {/* Slide Number Selector */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            {PITCH_DECK_SLIDES.map((slide) => (
              <button
                key={slide.slideNumber}
                onClick={() => setActiveDeckSlide(slide.slideNumber)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 ${
                  activeDeckSlide === slide.slideNumber
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-md'
                    : 'bg-slate-900/80 text-slate-300 border border-white/10'
                }`}
              >
                <span>Slide {slide.slideNumber}:</span>
                <span>{slide.title}</span>
              </button>
            ))}
          </div>

          {/* Active Slide Card */}
          {(() => {
            const currentSlide = PITCH_DECK_SLIDES.find((s) => s.slideNumber === activeDeckSlide) || PITCH_DECK_SLIDES[0];
            return (
              <motion.div
                key={currentSlide.slideNumber}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/95 space-y-3.5 shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase">
                      Slide {currentSlide.slideNumber} of 10
                    </span>
                    <h5 className="font-display font-black text-lg text-white mt-1">
                      {currentSlide.title}
                    </h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {currentSlide.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 space-y-2">
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wider block">
                    WHAT INVESTORS & INCUBATORS EXPECT ON THIS SLIDE
                  </span>
                  <div className="space-y-1.5">
                    {currentSlide.keyElements.map((elem, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{elem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pro Pitch Tip:</strong> {currentSlide.proTip}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <button
                    disabled={activeDeckSlide === 1}
                    onClick={() => setActiveDeckSlide((prev) => Math.max(1, prev - 1))}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-bold text-white cursor-pointer"
                  >
                    Previous Slide
                  </button>

                  <button
                    disabled={activeDeckSlide === 10}
                    onClick={() => setActiveDeckSlide((prev) => Math.min(10, prev + 1))}
                    className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 text-xs font-black text-slate-950 cursor-pointer"
                  >
                    Next Slide
                  </button>
                </div>
              </motion.div>
            );
          })()}
        </div>
      )}

      {/* 6. STUDENT FOUNDER LEGAL & IP GUIDE */}
      {activeSubTab === 'legal' && (
        <div className="space-y-4">
          <div className="p-4 rounded-3xl glass-panel border border-indigo-500/30 bg-slate-900/90 space-y-2">
            <div className="flex items-center space-x-2 text-indigo-400 text-xs font-black uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Legal & Intellectual Property Advisory</span>
            </div>
            <h4 className="font-display font-black text-base text-white">
              Student Founder Legal & IP Guide (India Edition)
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Navigate college IP policies, company incorporation (Sole Prop vs Pvt Ltd), DPIIT recognition, and founder vesting agreements without paying hefty legal fees early on.
            </p>
          </div>

          <div className="space-y-3">
            {/* Rule 1: College IP vs Student IP */}
            <div className="p-3.5 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 space-y-2">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs">
                <Code2 className="w-4 h-4" />
                <span>1. College IP Policies vs. Independent Student Software</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Most universities in India (including IITs and NITs) state in their student handbook that intellectual property created using <em>substantial university funds, lab equipment, or faculty grants</em> may be co-owned by the university.
              </p>
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-slate-200">
                <strong>Best Practice:</strong> Build your software on personal laptops, use independent cloud hosting (AWS/Vercel) on personal credentials, and register an explicit IP assignment agreement among student co-founders. If utilizing college incubator facilities, review their equity policy beforehand (most top incubators ask for only 1-3% equity in exchange for lab and seed support).
              </div>
            </div>

            {/* Rule 2: Incorporation Timing */}
            <div className="p-3.5 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
                <Building className="w-4 h-4" />
                <span>2. When to Incorporate: Sole Prop vs. OPC vs. Private Limited</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Do NOT spend ₹10,000+ incorporating a Private Limited company before having active users or revenue.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="font-bold text-cyan-300 block text-[11px]">Sole Proprietorship</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Zero cost, instant setup via GST or Udyam. Perfect for testing early revenue under ₹20 Lakhs.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="font-bold text-purple-300 block text-[11px]">One Person Company (OPC)</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Corporate veil with single director. Useful if building solo without co-founders.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="font-bold text-emerald-300 block text-[11px]">Private Limited (Pvt Ltd)</span>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">Mandatory for raising institutional angel/VC funding, issuing ESOPs, and DPIIT tax holidays.</span>
                </div>
              </div>
            </div>

            {/* Rule 3: Startup India DPIIT Recognition */}
            <div className="p-3.5 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 space-y-2">
              <div className="flex items-center space-x-2 text-purple-400 font-bold text-xs">
                <Award className="w-4 h-4" />
                <span>3. DPIIT Startup Recognition Benefits</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Once incorporated as a Pvt Ltd, apply immediately for DPIIT recognition on <strong>startupindia.gov.in</strong> (100% free online process taking 3-5 days).
              </p>
              <div className="space-y-1 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Eligible for up to ₹50 Lakhs through Startup India Seed Fund Scheme (SISFS)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>80% rebate on patent filing fees and 50% rebate on trademark applications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>3-year income tax holiday under Section 80-IAC</span>
                </div>
              </div>
            </div>

            {/* Rule 4: Founder Vesting & Equity Splits */}
            <div className="p-3.5 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
                <Users className="w-4 h-4" />
                <span>4. 4-Year Founder Vesting with 1-Year Cliff</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The #1 reason college startups implode is co-founder disputes when one founder drops out to take a corporate campus placement.
              </p>
              <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-[11px] text-amber-200">
                <strong>The Golden Rule:</strong> Implement 4-year vesting with a 1-year cliff. If a co-founder leaves in month 6, they walk away with 0% equity. If they leave after 2 years, they keep 50% of their allocation. This protects the company and remaining builders.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
