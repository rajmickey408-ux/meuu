import React from 'react';
import { ScreenStep, UserProfile } from '../types';
import { Logo } from './Logo';
import { ArrowLeft, ShieldCheck, LogOut, Grid } from 'lucide-react';

interface Props {
  currentStep: ScreenStep;
  setStep: (step: ScreenStep) => void;
  user: UserProfile | null;
  onLogout: () => void;
  onToggleShowcase?: () => void;
  isShowcaseActive?: boolean;
}

export const Header: React.FC<Props> = ({ 
  currentStep, 
  setStep, 
  user, 
  onLogout,
  onToggleShowcase,
  isShowcaseActive = false
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 bg-[#040814]/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between select-none">
      {/* Brand / Logo */}
      <div className="flex items-center space-x-2.5">
        {currentStep !== 1 && currentStep !== 'dashboard' && (
          <button 
            onClick={() => setStep((typeof currentStep === 'number' ? (currentStep - 1) as ScreenStep : 1))}
            className="p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors border border-white/10"
            title="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}

        <div 
          onClick={() => setStep(1)} 
          className="cursor-pointer"
        >
          <Logo size="sm" showSubtitle={true} />
        </div>
      </div>

      {/* Right Action / Bento Switcher */}
      <div className="flex items-center space-x-2">
        {onToggleShowcase && (
          <button
            onClick={onToggleShowcase}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border flex items-center space-x-1.5 transition-all cursor-pointer ${
              isShowcaseActive
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900 text-cyan-300 border-cyan-500/30 hover:border-cyan-400'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isShowcaseActive ? 'Mobile App' : 'Bento Grid Showcase'}</span>
          </button>
        )}

        {user ? (
          <div className="flex items-center space-x-2">
            <div className="glass-panel px-2.5 py-1 rounded-full flex items-center space-x-1.5 border border-cyan-500/30 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-200 text-[11px] font-medium max-w-[90px] truncate">
                {user.name.split(' ')[0]}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-colors border border-white/10"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};
