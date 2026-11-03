import React from 'react';
import { motion } from 'motion/react';
import { ActiveTab } from '../../../types';
import { CAREER_TIMELINE_STEPS } from '../../../data/careersData';
import { 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Target, 
  Building2, 
  Code, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  UserCheck, 
  Rocket,
  BookOpen
} from 'lucide-react';

interface Props {
  onNavigateTab: (tab: ActiveTab) => void;
}

export const CareerTimelineView: React.FC<Props> = ({ onNavigateTab }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'Target': return <Target className="w-4 h-4" />;
      case 'Building2': return <Building2 className="w-4 h-4" />;
      case 'Code': return <Code className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4" />;
      case 'Rocket': return <Rocket className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center space-x-2 text-cyan-400 text-xs font-black uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span>Complete Student Journey</span>
        </div>
        <h3 className="font-display font-black text-base text-white">
          Visual Career Timeline: From Class 10 to Dream Career
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          MEUU AI accompanies you through every critical juncture—from stream selection and national entrance exams to college admissions, industrial skills, internships, and campus placements.
        </p>
      </div>

      {/* Visual Timeline Nodes */}
      <div className="relative pl-6 space-y-4 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-emerald-400 before:via-cyan-400 before:to-purple-500">
        {CAREER_TIMELINE_STEPS.map((step, idx) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="relative group"
            >
              {/* Timeline Pin */}
              <div 
                className={`absolute -left-[30px] top-3.5 w-6 h-6 rounded-full flex items-center justify-center border text-xs shadow-lg transition-transform group-hover:scale-110 ${
                  isCompleted 
                    ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : isCurrent
                    ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] animate-pulse'
                    : 'bg-slate-900 text-slate-400 border-white/20'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                ) : (
                  <span className="font-black text-[10px]">{step.order}</span>
                )}
              </div>

              {/* Card */}
              <div 
                className={`p-3.5 rounded-2xl glass-panel border transition-all ${
                  isCurrent
                    ? 'border-cyan-400/50 bg-slate-900/90 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/30'
                    : isCompleted
                    ? 'border-emerald-500/30 bg-slate-900/70 hover:border-emerald-500/50'
                    : 'border-white/10 bg-slate-900/50 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span 
                        className={`p-1 rounded-lg ${
                          isCurrent 
                            ? 'bg-cyan-500/20 text-cyan-300' 
                            : isCompleted 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {getStepIcon(step.iconName)}
                      </span>
                      <h4 className="font-display font-extrabold text-sm text-white">
                        {step.title}
                      </h4>
                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[9px] font-black uppercase tracking-wider border border-cyan-400/40 animate-pulse">
                          Current Stage
                        </span>
                      )}
                      {isCompleted && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-black uppercase tracking-wider border border-emerald-500/40">
                          Achieved
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-semibold text-cyan-300/80">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                      {step.description}
                    </p>
                  </div>

                  {step.relatedTab && (
                    <button
                      onClick={() => onNavigateTab(step.relatedTab!)}
                      className="ml-3 px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 text-cyan-300 text-[10px] font-bold border border-cyan-400/30 transition-all flex items-center space-x-1 shrink-0 cursor-pointer hover:scale-105"
                      title={`Go to ${step.title}`}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
