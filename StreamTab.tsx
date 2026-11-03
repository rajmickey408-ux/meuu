import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Target, 
  Award, 
  Building2, 
  TrendingUp, 
  Atom, 
  ShieldCheck, 
  Briefcase, 
  ChevronRight, 
  ExternalLink,
  GraduationCap,
  Layers,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { ActiveTab, UserProfile } from '../../types';
import { STREAM_ROADMAPS } from '../../data/streamData';

interface StreamTabProps {
  user?: UserProfile | null;
  onNavigate?: (tab: ActiveTab) => void;
  onSelectStream?: (streamName: string) => void;
}

export const StreamTab: React.FC<StreamTabProps> = ({ user, onNavigate, onSelectStream }) => {
  // Available stream keys
  const streamKeys = [
    'Science PCM',
    'Science PCB',
    'PCMB',
    'Commerce',
    'Arts',
    'Diploma',
    'Polytechnic',
    'Other Career Paths'
  ];

  // Current active stream selected
  const [selectedStreamKey, setSelectedStreamKey] = useState<string>(
    user?.preferredStream || 'Science PCM'
  );

  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const currentRoadmap = STREAM_ROADMAPS[selectedStreamKey] || STREAM_ROADMAPS['Science PCM'];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'Target': return Target;
      case 'Award': return Award;
      case 'Compass': return Compass;
      case 'Building2': return Building2;
      case 'TrendingUp': return TrendingUp;
      default: return Sparkles;
    }
  };

  const handleStreamChange = (key: string) => {
    setSelectedStreamKey(key);
    if (onSelectStream) {
      onSelectStream(key);
    }
  };

  return (
    <div className="w-full space-y-4 text-left pb-10">
      
      {/* 1. TOP STREAM SELECTION BAR */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/90 space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
              <Compass className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-sm text-white">
                Education & Career Stream Selector
              </h3>
              <p className="text-[11px] text-slate-300">
                Choose any stream to view its complete step-by-step career roadmap
              </p>
            </div>
          </div>
        </div>

        {/* 8 Supported Streams Pill Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          {streamKeys.map((key) => {
            const isSelected = selectedStreamKey === key;
            return (
              <button
                key={key}
                onClick={() => handleStreamChange(key)}
                className={`px-3 py-1.5 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer border flex items-center space-x-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-slate-950/80 text-slate-300 border-white/10 hover:border-cyan-400/40 hover:bg-slate-900'
                }`}
              >
                {isSelected && <Sparkles className="w-3.5 h-3.5 text-slate-950 animate-spin-slow" />}
                <span>{key}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. ROADMAP HERO HEADER CARD */}
      <div className={`p-5 rounded-3xl glass-panel border ${currentRoadmap.borderColor} bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 space-y-3 shadow-xl relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-400/30">
              {currentRoadmap.badge}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
              {currentRoadmap.matchPercentage}% Compatibility
            </span>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('exams')}
            className="px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 shrink-0"
          >
            <span>View {currentRoadmap.title} Exams</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div>
          <h2 className="font-display font-black text-xl text-white tracking-tight">
            {currentRoadmap.title} Career Pathway
          </h2>
          <p className="text-xs text-slate-200 mt-1 leading-relaxed max-w-2xl">
            {currentRoadmap.description}
          </p>
        </div>

        {/* Why choose this stream highlights */}
        <div className="pt-2 border-t border-white/10 space-y-2">
          <span className="text-[10px] font-extrabold text-cyan-300 uppercase tracking-wider block">
            Key Stream Advantages:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {currentRoadmap.whyChoose.map((advantage, i) => (
              <div key={i} className="flex items-start space-x-2 p-2 rounded-xl bg-slate-950/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-snug">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. VISUAL EDUCATION ROADMAP FLOW */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h4 className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider flex items-center space-x-1.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Complete Step-by-Step Pathway Flow</span>
          </h4>
          <span className="text-[10px] text-slate-400 font-mono">
            {currentRoadmap.steps.length} Milestones
          </span>
        </div>

        {/* Vertical Connected Steps Visual Layout */}
        <div className="relative pl-4 sm:pl-6 space-y-4 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-500 before:to-purple-500">
          {currentRoadmap.steps.map((step) => {
            const IconComponent = getStepIcon(step.iconName);
            const isExpanded = expandedStep === step.stepNumber;

            return (
              <div key={step.stepNumber} className="relative pl-6 sm:pl-8 group">
                {/* Step Circle Node */}
                <div className="absolute -left-3 sm:-left-4 top-1.5 w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center font-display font-black text-xs shadow-[0_0_12px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform">
                  {step.stepNumber}
                </div>

                {/* Step Content Card */}
                <div className="p-4 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/40 bg-slate-900/90 space-y-3 transition-all shadow-md">
                  
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpandedStep(isExpanded ? null : step.stepNumber)}>
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-2xl bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 flex items-center justify-center shrink-0">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                          Phase {step.stepNumber}: {step.subtitle}
                        </span>
                        <h4 className="font-display font-extrabold text-sm text-white">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <button className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors">
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Key Milestones List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Action Items:
                    </span>
                    <div className="space-y-1">
                      {step.keyMilestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Exams in Step if available */}
                  {step.exams && step.exams.length > 0 && (
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-wider block mb-1.5">
                        Target Entrance Exams in this phase:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {step.exams.map((examName, eIdx) => (
                          <span
                            key={eIdx}
                            className="px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/30 font-bold text-[10px] flex items-center space-x-1"
                          >
                            <Target className="w-3 h-3 text-amber-400" />
                            <span>{examName}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Counseling Portals if available */}
                  {step.counselingPortals && (
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-[10px] font-extrabold text-purple-300 uppercase tracking-wider block mb-1.5">
                        Counselling & Allotment Portals:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {step.counselingPortals.map((portal, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2.5 py-1 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-400/30 font-bold text-[10px]"
                          >
                            {portal}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Target Colleges if available */}
                  {step.colleges && (
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-[10px] font-extrabold text-emerald-300 uppercase tracking-wider block mb-1.5">
                        Target Colleges / Universities:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {step.colleges.map((col, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 font-bold text-[10px]"
                          >
                            {col}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. CAREER OUTCOMES & SALARY FORECAST */}
      <div className="p-4 rounded-3xl glass-panel border border-emerald-500/30 bg-slate-900/90 space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <h4 className="font-display font-extrabold text-xs text-emerald-300 uppercase tracking-wider">
              Career Roles & Salary Forecast
            </h4>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-400/20">
            Top Industry Prospects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {currentRoadmap.careerOutcomes.map((career, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1"
            >
              <h5 className="font-display font-bold text-xs text-white">
                {career.role}
              </h5>
              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="text-emerald-400 font-extrabold">
                  {career.avgPackage}
                </span>
                <span className="text-cyan-300 text-[10px]">
                  {career.growthRate}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BOTTOM NAVIGATE TO EXAM HUB BUTTON */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
        <div>
          <h4 className="font-display font-extrabold text-sm text-white">
            Ready to track {selectedStreamKey} entrance exams?
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Explore live registration dates, syllabus breakdown & cutoffs in Exam Hub.
          </p>
        </div>

        <button
          onClick={() => onNavigate && onNavigate('exams')}
          className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs shadow-lg hover:scale-105 transition-transform flex items-center justify-center space-x-1.5 cursor-pointer shrink-0"
        >
          <span>Open Dedicated Exam Hub</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
