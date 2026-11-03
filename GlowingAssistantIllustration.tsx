import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Compass, BookOpen, GraduationCap, Award, ChevronRight } from 'lucide-react';

interface Props {
  onInteract?: (promptText: string) => void;
}

export const GlowingAssistantIllustration: React.FC<Props> = ({ onInteract }) => {
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const samplePrompts = [
    { label: "Which stream suits me after Class 10?", icon: Compass, answer: "Analyzing Math, Logic & Science skills → Science PCM or PCMB recommended!" },
    { label: "Best Engineering cutoffs for Rank 15,000", icon: BookOpen, answer: "Top NITs & IIITs (CSE / ECE / Data Science) found for 15k rank!" },
    { label: "Find Central Govt Scholarships for 85%+ score", icon: GraduationCap, answer: "Matched 4 active scholarships worth up to ₹80,000/year!" },
    { label: "Auto-fill JEE Main Form without errors", icon: Award, answer: "Documents verified! Auto-generating error-free application draft." },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto my-4 py-4 px-2 flex flex-col items-center justify-center select-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      {/* Main Container Illustration Canvas */}
      <div className="relative w-full aspect-square max-w-[320px] rounded-3xl border border-cyan-500/20 bg-slate-950/40 backdrop-blur-xl p-6 flex flex-col items-center justify-between shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)] overflow-hidden">
        
        {/* Animated Cyber Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-cyan-500/15 animate-orbit" style={{ animationDuration: '25s' }} />
          <div className="w-44 h-44 rounded-full border border-dashed border-blue-400/20 animate-orbit" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="w-32 h-32 rounded-full border border-cyan-400/30 animate-pulse-slow" />
        </div>

        {/* Floating Interactive Skill Nodes */}
        <motion.div 
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex justify-between items-center z-10"
        >
          <div className="glass-pill px-3 py-1.5 rounded-full flex items-center space-x-1.5 text-xs text-cyan-300 border border-cyan-400/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold tracking-wide">AI CORE ONLINE</span>
          </div>

          <div className="glass-pill px-2.5 py-1 rounded-full text-[11px] text-blue-200 border border-blue-500/20 flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Class 10 - 12+</span>
          </div>
        </motion.div>

        {/* Central Student & Glowing AI Orb Graphic */}
        <div className="relative my-auto flex flex-col items-center justify-center z-10">
          
          {/* Glowing AI Spherical Assistant Core */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[2px] shadow-[0_0_40px_rgba(6,182,212,0.6)] cursor-pointer"
            onClick={() => setActivePromptIndex((prev) => (prev + 1) % samplePrompts.length)}
          >
            <div className="w-full h-full rounded-full bg-[#070D1E] flex flex-col items-center justify-center backdrop-blur-md relative overflow-hidden group">
              {/* Internal plasma particle effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.35),transparent_70%)] animate-pulse" />
              <Brain className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] transform group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-extrabold tracking-widest text-cyan-200 mt-1 uppercase">MEUU AI</span>
            </div>
          </motion.div>

          {/* Student Interaction Ray Beam & Icon */}
          <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-400/80 to-transparent my-1 animate-pulse" />

          {/* Student Representation Badge */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="glass-panel px-4 py-2 rounded-2xl flex items-center space-x-2 border border-cyan-500/30 shadow-lg text-xs"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-[11px]">
              🎓
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-100 text-[12px] leading-none">Student Portal</p>
              <p className="text-[10px] text-cyan-300/80">Guided by MEUU Assistant</p>
            </div>
          </motion.div>
        </div>

        {/* Interactive Prompt Carousel / Live Query Preview */}
        <div className="w-full z-10 mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePromptIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="glass-panel p-3 rounded-2xl border border-cyan-500/25 bg-slate-900/60 shadow-md flex items-start space-x-2.5 cursor-pointer hover:border-cyan-400/50 transition-colors"
              onClick={() => {
                const prompt = samplePrompts[activePromptIndex];
                if (onInteract) onInteract(prompt.label);
                setActivePromptIndex((prev) => (prev + 1) % samplePrompts.length);
              }}
            >
              <div className="p-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shrink-0 mt-0.5">
                {React.createElement(samplePrompts[activePromptIndex].icon, { className: "w-4 h-4" })}
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="text-[11px] font-semibold text-cyan-200 line-clamp-1">
                  "{samplePrompts[activePromptIndex].label}"
                </p>
                <p className="text-[10px] text-slate-300 mt-0.5 line-clamp-2 leading-tight">
                  {samplePrompts[activePromptIndex].answer}
                </p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 self-center" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Sparkle Chips below Illustration */}
      <div className="w-full max-w-[320px] flex items-center justify-between text-[11px] text-cyan-300/70 mt-3 px-2">
        <span>Tap orb to test queries</span>
        <span className="flex items-center space-x-1 text-cyan-400 font-medium cursor-pointer hover:underline" onClick={() => setActivePromptIndex((prev) => (prev + 1) % samplePrompts.length)}>
          <span>Next Sample</span>
          <Sparkles className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
