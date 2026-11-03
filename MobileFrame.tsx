import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

export const MobileFrame: React.FC<Props> = ({ children }) => {
  const [viewMode, setViewMode] = useState<'mobile' | 'full'>('mobile');

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col items-center justify-between relative overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* Desktop View Switcher Header Bar */}
      <div className="hidden lg:flex items-center justify-between w-full max-w-5xl px-6 py-2.5 my-2 glass-panel rounded-full border border-white/10 text-xs text-slate-300">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-display font-bold text-cyan-200">MEUU AI Web Application</span>
          <span className="text-slate-400 text-[11px]">• Mobile First Design Engine</span>
        </div>

        <div className="flex items-center space-x-1.5 bg-slate-900/90 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              viewMode === 'mobile'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Device View</span>
          </button>

          <button
            onClick={() => setViewMode('full')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              viewMode === 'full'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Full Monitor View</span>
          </button>
        </div>
      </div>

      {/* Container Frame */}
      {viewMode === 'mobile' ? (
        <div className="w-full lg:max-w-[420px] lg:my-4 lg:rounded-[44px] lg:border-[8px] lg:border-[#121B33] lg:shadow-[0_0_80px_rgba(6,182,212,0.25)] bg-[#060913] min-h-screen lg:min-h-[850px] flex flex-col relative overflow-hidden">
          
          {/* Apple Style Dynamic Island Bar for Mobile Preview */}
          <div className="hidden lg:flex items-center justify-center pt-2 pb-1 bg-[#060913]">
            <div className="w-24 h-4 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-between px-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[8px] font-bold text-slate-400 tracking-widest">MEUU</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl min-h-screen py-4 px-4 flex flex-col">
          {children}
        </div>
      )}
    </div>
  );
};
