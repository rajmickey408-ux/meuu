import React from 'react';
import { motion } from 'motion/react';
import { GlowingAssistantIllustration } from './GlowingAssistantIllustration';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Compass, CheckCircle2 } from 'lucide-react';

interface Props {
  onNext: () => void;
  onQuickInteract?: (text: string) => void;
}

export const FirstScreen: React.FC<Props> = ({ onNext, onQuickInteract }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center justify-between min-h-[calc(100vh-65px)] px-4 py-4 text-center select-none"
    >
      {/* Top Hero Header */}
      <div className="w-full max-w-sm flex flex-col items-center pt-2">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide mb-3 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/20" />
          <span>CLASS 10 TO GRADUATION AI GUIDE</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white leading-[1.15] uppercase">
          YOUR FUTURE <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            STARTS HERE.
          </span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base font-normal mt-2 max-w-xs leading-relaxed">
          MEUU AI guides you at every step.
        </p>
      </div>

      {/* Center Illustration: Student Interacting with Glowing AI Assistant */}
      <div className="w-full my-auto flex items-center justify-center">
        <GlowingAssistantIllustration onInteract={onQuickInteract} />
      </div>

      {/* Bottom Highlights & Next Action Button */}
      <div className="w-full max-w-sm flex flex-col items-center space-y-4 pt-2 pb-6">
        
        {/* Quick Value Badges */}
        <div className="w-full grid grid-cols-2 gap-2 text-left text-[11px] text-slate-300">
          <div className="glass-panel p-2.5 rounded-xl border border-white/10 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Stream & College AI Match</span>
          </div>
          <div className="glass-panel p-2.5 rounded-xl border border-white/10 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Exam & Form Automation</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={onNext}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 font-display font-bold text-slate-950 text-base shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer group"
        >
          <span>Explore 8 AI Pillars</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[10px] text-slate-400 flex items-center space-x-1">
          <ShieldCheck className="w-3 h-3 text-cyan-400" />
          <span>Trusted by 50,000+ Students across India & Abroad</span>
        </p>
      </div>
    </motion.div>
  );
};
