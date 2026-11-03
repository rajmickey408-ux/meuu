import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, ActiveTab } from '../../types';
import { CareerTimelineView } from './careers/CareerTimelineView';
import { IndustryTrendsView } from './careers/IndustryTrendsView';
import { IndustryVoicesView } from './careers/IndustryVoicesView';
import { EntrepreneurshipView } from './careers/EntrepreneurshipView';
import { OpportunityTrackerView } from './careers/OpportunityTrackerView';
import { AiCoachConnectCard } from './careers/AiCoachConnectCard';
import { 
  Briefcase, 
  TrendingUp, 
  Quote, 
  Rocket, 
  Layers, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Bot, 
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

interface Props {
  user: UserProfile | null;
  onNavigate: (tab: ActiveTab, prompt?: string) => void;
  initialSubSection?: 'timeline' | 'trends' | 'voices' | 'startups' | 'opportunities';
}

export const CareersTab: React.FC<Props> = ({ user, onNavigate, initialSubSection = 'timeline' }) => {
  const [subSection, setSubSection] = useState<'timeline' | 'trends' | 'voices' | 'startups' | 'opportunities'>(initialSubSection);

  const subNavItems = [
    { id: 'timeline', label: 'Career Timeline', icon: Compass, badge: 'Journey' },
    { id: 'trends', label: '10 Industry Trends', icon: TrendingUp, badge: 'Skills' },
    { id: 'voices', label: 'Industry Voices', icon: Quote, badge: 'CEOs & Leads' },
    { id: 'startups', label: 'Build Your Own Path', icon: Rocket, badge: 'Startups' },
    { id: 'opportunities', label: 'My Opportunities', icon: Briefcase, badge: 'Tracker' }
  ];

  const handleAskAi = (prompt: string) => {
    onNavigate('chat', prompt);
  };

  return (
    <div className="w-full space-y-4 text-left pb-16 relative">
      {/* 1. MASTER PRODUCT POSITIONING HEADER */}
      <div className="p-4 sm:p-5 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-[#060D1E] via-[#091530] to-[#040814] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-cyan-500/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
              Training & Placement Ecosystem
            </span>
            <span className="flex items-center text-[10px] text-emerald-400 font-extrabold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
              Comprehensive Career Coverage
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-bold border border-white/10 flex items-center space-x-1">
            <Info className="w-3 h-3 text-cyan-400" />
            <span>Prototype Mode (Demo Benchmark Data)</span>
          </span>
        </div>

        <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
          “From choosing your path to building your career.”
        </h2>

        <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
          MEUU AI expands beyond stream selection and entrance admissions to empower your entire trajectory: from computer science foundations and portfolio engineering to venture creation, tech internships, and campus placement mastery.
        </p>

        {/* Complete Journey Badge Chain */}
        <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center overflow-x-auto pb-1 scrollbar-none text-[10px] font-bold text-slate-400 space-x-1.5">
          <span className="text-cyan-300 shrink-0">DISCOVERY</span>
          <span>→</span>
          <span className="text-cyan-300 shrink-0">STREAM</span>
          <span>→</span>
          <span className="text-cyan-300 shrink-0">EXAMS</span>
          <span>→</span>
          <span className="text-cyan-300 shrink-0">COLLEGES</span>
          <span>→</span>
          <span className="text-cyan-300 shrink-0">SCHOLARSHIPS</span>
          <span>→</span>
          <span className="text-indigo-300 shrink-0">APPLICATIONS</span>
          <span>→</span>
          <span className="text-purple-300 shrink-0">COUNSELLING</span>
          <span>→</span>
          <span className="text-purple-300 shrink-0">SKILLS</span>
          <span>→</span>
          <span className="text-emerald-300 shrink-0">INTERNSHIPS</span>
          <span>→</span>
          <span className="text-emerald-300 shrink-0">TRAINING</span>
          <span>→</span>
          <span className="text-amber-300 shrink-0">PLACEMENTS</span>
          <span>→</span>
          <span className="text-amber-300 shrink-0">CAREER / STARTUP</span>
        </div>
      </div>

      {/* 2. PERSONALIZED AI CAREER COACH CARD */}
      <AiCoachConnectCard user={user} onAskAiPrompt={handleAskAi} />

      {/* 3. SECTION NAVIGATION PILL BAR */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {subNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = subSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSubSection(item.id as any)}
              className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-2 shrink-0 border ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black border-cyan-300 shadow-xl shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/20'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
              <span>{item.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-black ${
                isActive ? 'bg-slate-950 text-cyan-300' : 'bg-slate-800 text-slate-400'
              }`}>
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* 4. ACTIVE SUB-SECTION VIEW */}
      <AnimatePresence mode="wait">
        <motion.div
          key={subSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          {subSection === 'timeline' && <CareerTimelineView onNavigateTab={onNavigate} />}
          {subSection === 'trends' && <IndustryTrendsView />}
          {subSection === 'voices' && <IndustryVoicesView />}
          {subSection === 'startups' && <EntrepreneurshipView />}
          {subSection === 'opportunities' && <OpportunityTrackerView />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
