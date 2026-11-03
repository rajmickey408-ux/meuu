import React from 'react';
import { Logo } from './Logo';
import { ActiveTab, UserProfile } from '../types';
import { 
  Bot, 
  Target, 
  Building2, 
  GraduationCap, 
  FileEdit, 
  CreditCard, 
  FolderLock, 
  Sparkles, 
  ShieldCheck, 
  Rocket, 
  Compass, 
  MessageSquare,
  Layers
} from 'lucide-react';
import { HomeTab } from './dashboard/HomeTab';
import { GuidanceTab } from './dashboard/GuidanceTab';
import { StreamTab } from './dashboard/StreamTab';
import { ExamsTab } from './dashboard/ExamsTab';
import { CollegesTab } from './dashboard/CollegesTab';
import { ScholarshipsTab } from './dashboard/ScholarshipsTab';
import { FormsTab } from './dashboard/FormsTab';
import { PaymentsTab } from './dashboard/PaymentsTab';
import { ApplicationsTab } from './dashboard/ApplicationsTab';

interface BentoShowcaseProps {
  user: UserProfile | null;
  onSelectScreen: (tab: ActiveTab) => void;
}

export const BentoShowcase: React.FC<BentoShowcaseProps> = ({ user, onSelectScreen }) => {
  const sidebarFeatures = [
    { icon: Bot, label: 'AI Career Guidance' },
    { icon: Target, label: 'Exam Tracking' },
    { icon: Building2, label: 'College Finder' },
    { icon: GraduationCap, label: 'Scholarship Alerts' },
    { icon: FileEdit, label: 'Form Filling' },
    { icon: CreditCard, label: 'Secure Payments' },
    { icon: FolderLock, label: 'Document Vault' },
    { icon: MessageSquare, label: '24/7 AI Support' },
  ];

  const showcaseScreens = [
    { num: 1, title: 'HOME DASHBOARD', tab: 'home' as ActiveTab, component: <HomeTab user={user} onNavigate={onSelectScreen} /> },
    { num: 2, title: 'AI CHAT ASSISTANT', tab: 'chat' as ActiveTab, component: <GuidanceTab user={user} /> },
    { num: 3, title: 'STREAM RECOMMENDATION', tab: 'stream' as ActiveTab, component: <StreamTab onNavigate={onSelectScreen} /> },
    { num: 4, title: 'EXAM TRACKER', tab: 'exams' as ActiveTab, component: <ExamsTab /> },
    { num: 5, title: 'COLLEGE FINDER', tab: 'colleges' as ActiveTab, component: <CollegesTab /> },
    { num: 6, title: 'SCHOLARSHIP FINDER', tab: 'scholarships' as ActiveTab, component: <ScholarshipsTab /> },
  ];

  const bottomScreens = [
    { num: 7, title: 'FORM FILLING - STEP BY STEP', tab: 'forms' as ActiveTab, component: <FormsTab user={user} onNavigate={onSelectScreen} /> },
    { num: 8, title: 'SECURE PAYMENT', tab: 'payments' as ActiveTab, component: <PaymentsTab onNavigate={onSelectScreen} /> },
    { num: 9, title: 'APPLICATION TRACKING', tab: 'applications' as ActiveTab, component: <ApplicationsTab onNavigate={onSelectScreen} /> },
  ];

  return (
    <div className="w-full min-h-screen bg-[#040814] text-white p-4 lg:p-6 overflow-x-auto space-y-6">
      {/* Top Banner & Header */}
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-3xl border border-white/10 glass-panel">
        <Logo size="lg" />
        <div className="flex items-center space-x-3">
          <span className="text-xs text-cyan-300 font-semibold px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30">
            ✨ Interactive Bento Grid Showcase Mode
          </span>
          <button
            onClick={() => onSelectScreen('home')}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-extrabold text-xs hover:scale-105 transition-transform cursor-pointer shadow-lg"
          >
            Launch Interactive Mobile App →
          </button>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Left Branding & Capabilities Sidebar */}
        <div className="xl:col-span-2 space-y-4 flex flex-col justify-between">
          <div className="p-5 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-b from-[#070D1F] via-[#050917] to-slate-950 space-y-5">
            <Logo size="lg" />
            
            <div className="space-y-1">
              <h2 className="font-display font-extrabold text-lg bg-gradient-to-r from-cyan-300 via-blue-200 to-white bg-clip-text text-transparent">
                One App. One AI. Every Answer.
              </h2>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/10">
              {sidebarFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-300">
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-400/20 shrink-0">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{feat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rocket Graphic Card */}
          <div className="p-5 rounded-3xl glass-panel border border-indigo-500/30 bg-gradient-to-b from-indigo-950/60 to-slate-950 text-center space-y-3 relative overflow-hidden">
            <Rocket className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
            <h4 className="font-display font-bold text-sm text-white">
              Your Future. Our Guidance. Endless Possibilities.
            </h4>
          </div>
        </div>

        {/* Right Main Showcase Content */}
        <div className="xl:col-span-10 space-y-6">
          
          {/* Top Row: Screens 1 to 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {showcaseScreens.map((screen) => (
              <div key={screen.num} className="space-y-2 group">
                <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                    {screen.num}
                  </span>
                  <span className="truncate uppercase tracking-wider text-[11px]">
                    {screen.title}
                  </span>
                </div>

                {/* Simulated Phone Frame */}
                <div 
                  onClick={() => onSelectScreen(screen.tab)}
                  className="w-full h-[520px] rounded-[32px] bg-[#060B18] border-2 border-slate-800 group-hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,0,0,0.8)] p-3 overflow-hidden relative flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01]"
                >
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 px-2 pb-2 border-b border-white/5 shrink-0">
                    <span>9:41</span>
                    <div className="w-12 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                    <span>100%</span>
                  </div>

                  {/* Screen Content */}
                  <div className="flex-1 overflow-y-auto py-2 pr-1 scrollbar-none text-left">
                    {screen.component}
                  </div>

                  {/* Phone Bottom Notch / Bar */}
                  <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto my-1 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Screens 7, 8, 9 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomScreens.map((screen) => (
              <div key={screen.num} className="space-y-2 group">
                <div className="flex items-center space-x-2 text-xs font-bold text-cyan-300">
                  <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                    {screen.num}
                  </span>
                  <span className="truncate uppercase tracking-wider text-[11px]">
                    {screen.title}
                  </span>
                </div>

                {/* Simulated Phone Frame */}
                <div 
                  onClick={() => onSelectScreen(screen.tab)}
                  className="w-full h-[500px] rounded-[32px] bg-[#060B18] border-2 border-slate-800 group-hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,0,0,0.8)] p-3 overflow-hidden relative flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01]"
                >
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 px-2 pb-2 border-b border-white/5 shrink-0">
                    <span>9:41</span>
                    <div className="w-12 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
                    <span>100%</span>
                  </div>

                  {/* Screen Content */}
                  <div className="flex-1 overflow-y-auto py-2 pr-1 scrollbar-none text-left">
                    {screen.component}
                  </div>

                  {/* Phone Bottom Notch / Bar */}
                  <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto my-1 shrink-0" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="max-w-[1700px] mx-auto p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-base text-white uppercase tracking-wider">
            EVERYTHING YOU NEED, ALL IN ONE APP
          </h3>
          <p className="text-xs text-slate-400">Navigate your future with MEUU AI</p>
        </div>

        <div className="flex items-center space-x-4">
          <Logo size="md" />
        </div>
      </div>
    </div>
  );
};
