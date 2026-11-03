import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURE_PILLARS } from '../data/mockData';
import { FeaturePillar } from '../types';
import { 
  Bot, 
  Compass, 
  Target, 
  Building2, 
  GraduationCap, 
  FileEdit, 
  CreditCard, 
  FolderLock, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  CheckCircle,
  X
} from 'lucide-react';

interface Props {
  onNext: () => void;
  onBack: () => void;
  onSelectFeature?: (pillar: FeaturePillar) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Compass,
  Target,
  Building2,
  GraduationCap,
  FileEdit,
  CreditCard,
  FolderLock,
};

export const SecondScreen: React.FC<Props> = ({ onNext, onBack, onSelectFeature }) => {
  const [selectedPillar, setSelectedPillar] = useState<FeaturePillar | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center justify-between min-h-[calc(100vh-65px)] px-4 py-4 text-center select-none"
    >
      {/* Top Header */}
      <div className="w-full max-w-sm flex flex-col items-center pt-1">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold tracking-wide mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ALL-IN-ONE EDUCATIONAL ECOSYSTEM</span>
        </div>

        <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white leading-tight uppercase">
          ONE APP. <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            EVERY ANSWER.
          </span>
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xs">
          Tap any of the 8 core pillars to preview how MEUU AI empowers your journey.
        </p>
      </div>

      {/* 8 Pillar Cards Grid */}
      <div className="w-full max-w-md my-4 grid grid-cols-2 gap-2.5 sm:gap-3 px-1">
        {FEATURE_PILLARS.map((pillar, index) => {
          const IconComponent = ICON_MAP[pillar.iconName] || Bot;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => {
                setSelectedPillar(pillar);
                if (onSelectFeature) onSelectFeature(pillar);
              }}
              className="glass-panel p-3.5 rounded-2xl border border-white/10 hover:border-cyan-400/40 bg-slate-900/60 shadow-lg cursor-pointer flex flex-col justify-between items-start text-left group hover:bg-slate-900/90 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
            >
              <div className="w-full flex items-center justify-between mb-2">
                <div className={`p-2 rounded-xl bg-gradient-to-tr ${pillar.colorGradient} text-white shadow-md transform group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                  {pillar.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2 leading-snug">
                  {pillar.shortDesc}
                </p>
              </div>

              <div className="w-full mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-cyan-400 font-medium">
                <span>Explore Features</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detail Preview Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-sm p-6 rounded-3xl border border-cyan-500/30 bg-slate-950/90 text-left shadow-[0_0_50px_rgba(6,182,212,0.3)] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedPillar(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${selectedPillar.colorGradient} text-white shadow-lg`}>
                  {React.createElement(ICON_MAP[selectedPillar.iconName] || Bot, { className: "w-6 h-6" })}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {selectedPillar.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-cyan-300 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20">
                    {selectedPillar.badge}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {selectedPillar.shortDesc}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                  Key Capabilities
                </p>
                {selectedPillar.highlights.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedPillar(null);
                  onNext();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm shadow-md hover:scale-[1.02] transition-transform"
              >
                Continue to Access Tool
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Control Buttons */}
      <div className="w-full max-w-sm flex items-center space-x-3 pt-2 pb-4">
        <button
          onClick={onBack}
          className="py-3.5 px-5 rounded-2xl glass-panel border border-white/10 font-bold text-slate-300 text-xs hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          onClick={onNext}
          className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 font-display font-bold text-slate-950 text-sm shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Continue to Sign In</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
