import React from 'react';
import { UserProfile, ActiveTab } from '../../../types';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  BrainCircuit, 
  TrendingUp, 
  BookOpen, 
  Compass 
} from 'lucide-react';

interface Props {
  user: UserProfile | null;
  onAskAiPrompt: (prompt: string) => void;
}

export const AiCoachConnectCard: React.FC<Props> = ({ user, onAskAiPrompt }) => {
  const studentStream = user?.preferredStream || 'Science (PCM)';
  const studentRole = 'Software & AI Engineer';
  const readinessScore = 78;

  const quickQuestions = [
    { label: "What skills should I learn this semester?", icon: BookOpen },
    { label: "Am I ready for a software internship?", icon: CheckCircle2 },
    { label: "Make me a 90-day placement plan.", icon: Target },
    { label: "What should I learn for AI/ML?", icon: BrainCircuit },
    { label: "Review my resume.", icon: Sparkles },
    { label: "Give me a DSA roadmap.", icon: TrendingUp },
    { label: "How can I prepare for interviews?", icon: Compass }
  ];

  return (
    <div className="p-4 rounded-3xl glass-panel border border-cyan-400/40 bg-gradient-to-br from-slate-900 via-[#071329] to-[#0D1D3A] space-y-3.5 shadow-xl relative overflow-hidden">
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 shadow-lg shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-display font-black text-sm text-white">
                Personalized AI Career Coach
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[9px] font-black uppercase tracking-wider border border-cyan-400/40">
                Connected
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mt-0.5">
              Synced with your education, skills, target role & saved opportunities.
            </p>
          </div>
        </div>

        {/* Career Readiness Badge */}
        <div className="text-right shrink-0">
          <span className="text-[10px] text-slate-400 font-bold block">Career Readiness</span>
          <span className="font-display font-black text-emerald-400 text-sm">
            {readinessScore}% Ready
          </span>
        </div>
      </div>

      {/* Student Profile Snapshot Used by the AI */}
      <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-950/60 border border-white/5 text-[11px]">
        <div>
          <span className="text-[9px] text-slate-400 uppercase font-bold block">Stream / Branch</span>
          <span className="text-slate-200 font-semibold truncate block">{studentStream}</span>
        </div>
        <div>
          <span className="text-[9px] text-slate-400 uppercase font-bold block">Target Role</span>
          <span className="text-cyan-300 font-semibold truncate block">{studentRole}</span>
        </div>
        <div>
          <span className="text-[9px] text-slate-400 uppercase font-bold block">Focus Area</span>
          <span className="text-purple-300 font-semibold truncate block">DSA & Systems</span>
        </div>
      </div>

      {/* 1-Click Mentor Prompts */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-black text-cyan-300 uppercase tracking-wider block">
          Ask Your Mentor (1-Click Career Strategy)
        </span>
        <div className="flex flex-wrap gap-1.5">
          {quickQuestions.map((q, idx) => {
            const Icon = q.icon;
            return (
              <button
                key={idx}
                onClick={() => onAskAiPrompt(q.label)}
                className="px-2.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-200 text-xs font-semibold border border-cyan-400/20 hover:border-cyan-400/50 transition-all flex items-center space-x-1.5 text-left cursor-pointer group"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                <span>{q.label}</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5 shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
