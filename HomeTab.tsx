import React, { useState } from 'react';
import { ActiveTab, UserProfile } from '../../types';
import { 
  Bot, 
  Compass, 
  Target, 
  Building2, 
  GraduationCap, 
  FolderLock, 
  FileEdit,
  CreditCard,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
  TrendingUp,
  Award,
  Newspaper,
  Flame,
  Bookmark,
  Star,
  Zap,
  AlertCircle,
  Quote,
  Briefcase
} from 'lucide-react';
import { FEATURED_COLLEGES, SCHOLARSHIPS_LIST, POPULAR_EXAMS } from '../../data/mockData';

interface HomeTabProps {
  user: UserProfile | null;
  onNavigate: (tab: ActiveTab, promptOrSubSection?: string) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ user, onNavigate }) => {
  const [showChecklist, setShowChecklist] = useState(false);
  const userName = user ? user.name.split(' ')[0] : 'Harsh';
  const progress = user?.journeyProgress || 65;
  const completed = user?.completedSteps || 5;
  const total = user?.totalSteps || 8;

  const quickAccessItems = [
    {
      id: 'careers' as ActiveTab,
      label: 'Training & Placements',
      desc: 'Timeline, 10 Trends, Startups',
      icon: Briefcase,
      bgColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
    },
    {
      id: 'counseling' as ActiveTab,
      label: 'Counselling Hub',
      desc: 'JoSAA, CSAB, UPTAC, COMEDK',
      icon: Building2,
      bgColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
    },
    {
      id: 'scholarships' as ActiveTab,
      label: 'Scholarship Finder',
      desc: 'Govt. & Merit Grants',
      icon: GraduationCap,
      bgColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30'
    },
    {
      id: 'payments' as ActiveTab,
      label: 'Secure Payments',
      desc: 'Fees & Digital Receipts',
      icon: CreditCard,
      bgColor: 'bg-teal-500/15 text-teal-400 border-teal-500/30'
    },
    {
      id: 'stream' as ActiveTab,
      label: 'Stream Selector',
      desc: 'Class 10 PCM/PCB/Comm',
      icon: Compass,
      bgColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30'
    },
    {
      id: 'exams' as ActiveTab,
      label: 'Exam Tracker',
      desc: 'JEE, NEET, CUET Alerts',
      icon: Target,
      bgColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30'
    },
    {
      id: 'colleges' as ActiveTab,
      label: 'College Finder',
      desc: '500+ Top NIRF Colleges',
      icon: Building2,
      bgColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
    },
    {
      id: 'forms' as ActiveTab,
      label: 'Form Filling',
      desc: 'Zero Error Assistant',
      icon: FileEdit,
      bgColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
    },
    {
      id: 'documents' as ActiveTab,
      label: 'Document Vault',
      desc: 'Encrypted Storage',
      icon: FolderLock,
      bgColor: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30'
    }
  ];

  const newsFeed = [
    { id: 1, title: 'CBSE Class 10 & 12 Board Exam 2025 Date Sheet Released', time: '2 hours ago', tag: 'Boards' },
    { id: 2, title: 'NTA Opens JEE Main Session 1 Application Correction Window', time: '5 hours ago', tag: 'JEE 2025' },
    { id: 3, title: 'Central Govt. Announces 10,000 New STEM Scholarships for Girls', time: '1 day ago', tag: 'Scholarship' }
  ];

  const profileChecklist = [
    { title: 'Basic Profile & Contact Details', done: true },
    { title: 'Class 10 Academic Scores Input', done: true },
    { title: 'Aptitude & Stream Assessment Quiz', done: true },
    { title: 'Essential Documents Verification (Marksheet/ID)', done: true },
    { title: 'Target Stream Finalization (Science PCM)', done: true },
    { title: 'Shortlist Top 5 Target Colleges', done: false },
    { title: 'Set Target Entrance Exams (JEE / CUET)', done: false },
    { title: 'Apply for National Merit Scholarship', done: false }
  ];

  return (
    <div className="w-full space-y-4 text-left pb-12">
      {/* 1. TOP GREETING BAR */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-[#070D1F] via-[#08122B] to-[#040814] flex items-center justify-between shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider border border-cyan-400/30">
              Class 10 Student
            </span>
            <span className="flex items-center text-[10px] text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
              Active Journey
            </span>
          </div>
          <h3 className="font-display font-extrabold text-lg text-white">
            Hi, {userName}! 👋
          </h3>
          <p className="text-xs text-slate-300">
            Let's build your pathway to top engineering & tech universities.
          </p>
        </div>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shrink-0">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-display font-black text-cyan-300 text-lg">
            {userName.charAt(0)}
          </div>
        </div>
      </div>

      {/* 2. PROFILE COMPLETION & PROGRESS GAUGE */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/90 space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
              Profile & Pathway Readiness
            </span>
            <h4 className="font-display font-extrabold text-base text-white">
              {progress}% Completed ({completed}/{total} Steps)
            </h4>
          </div>

          <button
            onClick={() => setShowChecklist(!showChecklist)}
            className="text-xs font-bold text-cyan-300 hover:text-white px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-400/30 transition-colors"
          >
            {showChecklist ? 'Hide Checklist' : 'View Checklist'}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-white/10 p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-1000 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Expandable Checklist Drawer */}
        {showChecklist && (
          <div className="pt-2 border-t border-white/10 space-y-1.5">
            <span className="text-[11px] font-bold text-slate-300 block mb-1">
              Your Career Milestones Checklist:
            </span>
            {profileChecklist.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-slate-950/60 border border-white/5">
                <span className={item.done ? 'text-slate-200' : 'text-slate-400'}>
                  {idx + 1}. {item.title}
                </span>
                {item.done ? (
                  <span className="flex items-center text-emerald-400 text-[10px] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Done
                  </span>
                ) : (
                  <span className="text-amber-400 text-[10px] font-bold">Pending</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. SELECTED STREAM & CAREER GOAL SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Stream Card */}
        <div className="p-3.5 rounded-2xl glass-panel border border-purple-500/30 bg-gradient-to-b from-purple-950/40 via-slate-900 to-slate-950 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider flex items-center space-x-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Selected Stream</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-black border border-purple-400/30">
              94% Match
            </span>
          </div>

          <div>
            <h5 className="font-display font-extrabold text-sm text-white">
              {user?.preferredStream || 'Science (PCM)'}
            </h5>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Physics, Chemistry, Mathematics & CS
            </p>
          </div>

          <button
            onClick={() => onNavigate('stream')}
            className="w-full py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 text-[11px] font-bold transition-colors cursor-pointer border border-purple-400/30 flex items-center justify-center space-x-1"
          >
            <span>Retake Assessment</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Career Goal Card */}
        <div className="p-3.5 rounded-2xl glass-panel border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider flex items-center space-x-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Target Career Goal</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
              High Growth
            </span>
          </div>

          <div>
            <h5 className="font-display font-extrabold text-sm text-white">
              Software & AI Engineer
            </h5>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Target: B.Tech Computer Science (IIT/NIT/DTU)
            </p>
          </div>

          <button
            onClick={() => onNavigate('careers')}
            className="w-full py-1.5 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 text-cyan-200 text-[11px] font-bold transition-colors cursor-pointer border border-cyan-400/30 flex items-center justify-center space-x-1"
          >
            <span>Explore Career Roadmap</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4. TRAINING & PLACEMENT ECOSYSTEM SPOTLIGHT */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-[#071329] via-[#0D1D3A] to-[#08122B] space-y-3 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
              <Briefcase className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wider block">
                CAREERS & PLACEMENTS
              </span>
              <h4 className="font-display font-black text-sm text-white">
                “From choosing your path to building your career.”
              </h4>
            </div>
          </div>

          <button
            onClick={() => onNavigate('careers')}
            className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center space-x-1 cursor-pointer transition-all hover:scale-105 shadow-md shrink-0"
          >
            <span>Open Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          The all-in-one ecosystem: Visual 10-step career timeline, 10 industry trends (AI, Cloud, Dev), CEO insights, student startup path, and internship pipeline tracker.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
          <button
            onClick={() => onNavigate('careers', 'startups')}
            className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400 text-left transition-colors cursor-pointer"
          >
            <span className="text-[10px] font-black text-cyan-300 block">🚀 Build Startup</span>
            <span className="text-[10px] text-slate-300">Idea to Scaling</span>
          </button>
          <button
            onClick={() => onNavigate('careers', 'timeline')}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-cyan-400/40 text-left transition-colors cursor-pointer"
          >
            <span className="text-[10px] font-black text-slate-200 block">Career Timeline</span>
            <span className="text-[10px] text-slate-400">Class 10 to Jobs</span>
          </button>
          <button
            onClick={() => onNavigate('careers', 'trends')}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-400/40 text-left transition-colors cursor-pointer"
          >
            <span className="text-[10px] font-black text-indigo-300 block">10 Tech Trends</span>
            <span className="text-[10px] text-slate-400">AI, Cloud, Cyber</span>
          </button>
          <button
            onClick={() => onNavigate('careers', 'voices')}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-purple-400/40 text-left transition-colors cursor-pointer"
          >
            <span className="text-[10px] font-black text-purple-300 block">Industry Voices</span>
            <span className="text-[10px] text-slate-400">CEOs & Tech Leads</span>
          </button>
          <button
            onClick={() => onNavigate('careers', 'opportunities')}
            className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-teal-400/40 text-left transition-colors cursor-pointer col-span-2 sm:col-span-1"
          >
            <span className="text-[10px] font-black text-teal-300 block">Opportunities</span>
            <span className="text-[10px] text-slate-400">Internship Tracker</span>
          </button>
        </div>
      </div>

      {/* 4. CONTINUE PREVIOUS SESSION CARD */}
      <div className="p-4 rounded-3xl glass-panel border border-indigo-500/40 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-950 space-y-2 shadow-lg relative overflow-hidden">
        <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4 animate-spin-slow" />
          <span>Continue Previous Session</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-display font-bold text-sm text-white">
              JEE Main 2025 Form Filling
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Step 4 of 5: Upload Marksheet & ID Proofs
            </p>
          </div>

          <button
            onClick={() => onNavigate('forms')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-extrabold text-xs shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center space-x-1 shrink-0"
          >
            <span>Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5. AI RECOMMENDATION CARD */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/40 bg-gradient-to-r from-slate-900 via-slate-900 to-[#0A1B3B] space-y-2.5 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>
          <span className="font-display font-extrabold text-xs text-cyan-300 uppercase tracking-wider">
            MEUU AI Personalized Insight
          </span>
        </div>

        <p className="text-xs text-slate-200 leading-relaxed">
          "Based on your Class 10 Physics & Math score profile, enrolling in **Science (PCM)** will position you in the top tier for **B.Tech Computer Science & AI** entrance exams."
        </p>

        <button
          onClick={() => onNavigate('chat')}
          className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1"
        >
          <Bot className="w-3.5 h-3.5" />
          <span>Ask AI Mentor for Details</span>
        </button>
      </div>

      {/* 6. UPCOMING EXAMS & COUNTDOWN */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
            <Target className="w-4 h-4 text-cyan-400" />
            <span>Upcoming Entrance Exams</span>
          </h4>
          <button onClick={() => onNavigate('exams')} className="text-[11px] text-cyan-400 font-bold hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {POPULAR_EXAMS.slice(0, 2).map((exam) => (
            <div
              key={exam.id}
              className="p-3 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 flex items-start justify-between"
            >
              <div>
                <h5 className="font-display font-bold text-xs text-white">
                  {exam.name}
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5">{exam.date}</p>
                <div className="mt-1.5 flex items-center space-x-1 text-[11px] font-extrabold text-cyan-300">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{exam.daysLeft} Days Left</span>
                </div>
              </div>

              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {exam.regStatus}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. UPCOMING APPLICATION DEADLINES */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            <span>Upcoming Deadlines</span>
          </h4>
        </div>

        <div className="space-y-2">
          <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-white block">JEE Main 2025 Application Correction</span>
              <span className="text-[10px] text-amber-300">Deadline: Dec 15, 2024</span>
            </div>
            <button
              onClick={() => onNavigate('forms')}
              className="px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 font-bold text-[10px] hover:bg-amber-500/30 cursor-pointer border border-amber-400/30"
            >
              Action
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-white block">National Merit Scholarship Form</span>
              <span className="text-[10px] text-blue-300">Deadline: Oct 31, 2026</span>
            </div>
            <button
              onClick={() => onNavigate('scholarships')}
              className="px-2.5 py-1 rounded-xl bg-blue-500/20 text-blue-300 font-bold text-[10px] hover:bg-blue-500/30 cursor-pointer border border-blue-400/30"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* 8. QUICK ACCESS BUTTONS GRID */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
          Quick Tools & Services
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {quickAccessItems.map((item) => {
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 bg-slate-900/70 flex flex-col items-start justify-between text-left transition-all hover:scale-[1.02] cursor-pointer group min-h-[82px]"
              >
                <div className={`p-1.5 rounded-xl border ${item.bgColor} mb-1.5`}>
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors block leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 9. RECENTLY VIEWED COLLEGES */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Recently Viewed Colleges</span>
          </h4>
          <button onClick={() => onNavigate('colleges')} className="text-[11px] text-cyan-400 font-bold hover:underline">
            Explore All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {FEATURED_COLLEGES.slice(0, 2).map((college) => (
            <div
              key={college.id}
              className="p-3 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 flex items-center justify-between"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-500/30 flex items-center justify-center font-display font-black text-xs text-cyan-300 shrink-0">
                  {college.name.slice(0, 3)}
                </div>
                <div>
                  <h5 className="font-display font-bold text-xs text-white">
                    {college.name}
                  </h5>
                  <p className="text-[10px] text-slate-400">{college.ranking} • {college.fees}</p>
                </div>
              </div>
              <div className="flex items-center text-amber-300 text-xs font-bold px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <span>{college.rating}</span>
                <Star className="w-3 h-3 fill-amber-400 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10. RECENTLY VIEWED SCHOLARSHIPS */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Top Featured Scholarships</span>
          </h4>
          <button onClick={() => onNavigate('scholarships')} className="text-[11px] text-cyan-400 font-bold hover:underline">
            View All
          </button>
        </div>

        <div className="space-y-2">
          {SCHOLARSHIPS_LIST.slice(0, 2).map((sch) => (
            <div
              key={sch.id}
              className="p-3 rounded-2xl glass-panel border border-white/10 bg-slate-900/80 flex items-center justify-between"
            >
              <div>
                <h5 className="font-display font-bold text-xs text-white">
                  {sch.title}
                </h5>
                <p className="text-[10px] text-slate-400 mt-0.5">{sch.provider}</p>
              </div>
              <span className="font-display font-extrabold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-xl">
                {sch.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 11. LATEST EDUCATION NEWS FEED */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <span>Latest Education Updates</span>
          </h4>
        </div>

        <div className="space-y-2">
          {newsFeed.map((news) => (
            <div key={news.id} className="p-3 rounded-2xl glass-panel border border-white/10 bg-slate-900/70 flex items-start justify-between space-x-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[9px] font-bold border border-cyan-400/20">
                    {news.tag}
                  </span>
                  <span className="text-[9px] text-slate-400">{news.time}</span>
                </div>
                <h5 className="font-bold text-xs text-slate-200 leading-snug">
                  {news.title}
                </h5>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>

      {/* 12. DAILY MOTIVATION CARD */}
      <div className="p-4 rounded-3xl glass-panel border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-950 flex items-start space-x-3">
        <div className="w-9 h-9 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
          <Quote className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
            Daily Motivation & Mentor Tip
          </span>
          <p className="text-xs text-slate-200 italic leading-relaxed">
            "Success isn't overnight. It's when every day you get a little better than the day before. Keep pushing!"
          </p>
        </div>
      </div>

    </div>
  );
};
