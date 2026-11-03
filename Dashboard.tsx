import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab, UserProfile } from '../types';
import { HomeTab } from './dashboard/HomeTab';
import { GuidanceTab } from './dashboard/GuidanceTab';
import { StreamTab } from './dashboard/StreamTab';
import { ExamsTab } from './dashboard/ExamsTab';
import { CollegesTab } from './dashboard/CollegesTab';
import { CounselingHubTab } from './dashboard/CounselingHubTab';
import { ScholarshipsTab } from './dashboard/ScholarshipsTab';
import { FormsTab } from './dashboard/FormsTab';
import { PaymentsTab } from './dashboard/PaymentsTab';
import { ApplicationsTab } from './dashboard/ApplicationsTab';
import { DocumentsTab } from './dashboard/DocumentsTab';
import { ProfileTab } from './dashboard/ProfileTab';
import { CareersTab } from './dashboard/CareersTab';
import { SmartNotificationsDrawer } from './dashboard/SmartNotificationsDrawer';
import { StudentIdCardModal } from './common/StudentIdCardModal';

import { 
  Home, 
  Bot, 
  Compass, 
  Target, 
  Building2, 
  GraduationCap, 
  FileEdit, 
  CreditCard,
  Layers,
  FolderLock,
  Bell,
  User,
  QrCode,
  Sparkles,
  Briefcase
} from 'lucide-react';

interface Props {
  user: UserProfile | null;
  initialTab?: ActiveTab;
  onSwitchToBento?: () => void;
}

const TOP_TABS: { id: ActiveTab; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'careers', label: 'Careers & Training', icon: Briefcase },
  { id: 'chat', label: 'AI Assistant', icon: Bot },
  { id: 'counseling', label: 'Counselling Hub', icon: Building2 },
  { id: 'stream', label: 'Stream Rec', icon: Compass },
  { id: 'exams', label: 'Exam Tracker', icon: Target },
  { id: 'colleges', label: 'College Finder', icon: Building2 },
  { id: 'scholarships', label: 'Scholarships', icon: GraduationCap },
  { id: 'forms', label: 'Form Filling', icon: FileEdit },
  { id: 'payments', label: 'Payment', icon: CreditCard },
  { id: 'applications', label: 'Applications', icon: Layers },
  { id: 'documents', label: 'Vault', icon: FolderLock },
  { id: 'profile', label: 'Profile', icon: User },
];

export const Dashboard: React.FC<Props> = ({ user, initialTab = 'home', onSwitchToBento }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(initialTab);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(user);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(4);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | undefined>(undefined);
  const [careersSubSection, setCareersSubSection] = useState<'timeline' | 'trends' | 'voices' | 'startups' | 'opportunities'>('timeline');
  const [isIdModalOpen, setIsIdModalOpen] = useState(false);

  const handleTabNavigate = (tab: ActiveTab, promptOrSubSection?: string) => {
    if (tab === 'careers' && promptOrSubSection && ['timeline', 'trends', 'voices', 'startups', 'opportunities'].includes(promptOrSubSection)) {
      setCareersSubSection(promptOrSubSection as any);
    } else if (promptOrSubSection) {
      setChatInitialPrompt(promptOrSubSection);
    }
    setActiveTab(tab);
  };

  const bottomNavItems = [
    { id: 'home' as ActiveTab, label: 'Home', icon: Home },
    { id: 'careers' as ActiveTab, label: 'Careers', icon: Briefcase },
    { id: 'chat' as ActiveTab, label: 'MEUU', icon: Bot },
    { id: 'counseling' as ActiveTab, label: 'Counselling', icon: Building2 },
    { id: 'profile' as ActiveTab, label: 'Profile', icon: User },
  ];

  return (
    <div className="w-full flex flex-col justify-between min-h-screen px-3 py-2 select-none text-left bg-[#060B18]">
      
      {/* Top Banner & Mode Toggle */}
      <div className="w-full px-3 py-2 mb-2 rounded-2xl glass-panel border border-cyan-500/20 bg-slate-900/90 flex items-center justify-between">
        <button 
          onClick={() => setActiveTab('profile')}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-white flex items-center space-x-1">
            <span>Hi, {currentUser ? currentUser.name.split(' ')[0] : 'Harsh'}! 👋</span>
          </span>
        </button>

        <div className="flex items-center space-x-2">
          {/* Quick Student ID Pass Button */}
          <button
            onClick={() => setIsIdModalOpen(true)}
            className="px-2.5 py-1 rounded-xl bg-cyan-500/15 border border-cyan-400/30 hover:border-cyan-400 text-cyan-300 text-[11px] font-extrabold flex items-center space-x-1 cursor-pointer transition-colors shadow-sm"
          >
            <QrCode className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Student ID Pass</span>
            <span className="sm:hidden">ID Pass</span>
          </button>

          {/* Smart Notifications Bell Trigger */}
          <button
            onClick={() => setIsNotificationsOpen(true)}
            className="p-1.5 rounded-xl bg-slate-800 border border-white/10 hover:border-cyan-400/40 text-cyan-300 relative cursor-pointer transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-cyan-400 text-slate-950 text-[9px] font-black flex items-center justify-center absolute -top-1 -right-1 shadow-md">
                {unreadCount}
              </span>
            )}
          </button>

          {onSwitchToBento && (
            <button
              onClick={onSwitchToBento}
              className="px-2.5 py-1 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300 hover:text-white text-[10px] font-bold flex items-center space-x-1 cursor-pointer transition-colors"
            >
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="hidden sm:inline">Bento Grid</span>
            </button>
          )}
        </div>
      </div>

      {/* 11 Feature Top Pills Selector */}
      <div className="w-full flex items-center space-x-1.5 overflow-x-auto pb-2 scrollbar-none mb-2 px-1">
        {TOP_TABS.map((tab) => {
          const IconComp = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)] scale-[1.02]'
                  : 'glass-panel text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Screen Canvas */}
      <div className="flex-1 w-full max-w-xl mx-auto pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            {activeTab === 'home' && <HomeTab user={currentUser} onNavigate={handleTabNavigate} />}
            {activeTab === 'careers' && <CareersTab user={currentUser} onNavigate={handleTabNavigate} initialSubSection={careersSubSection} />}
            {activeTab === 'profile' && <ProfileTab user={currentUser} onNavigate={handleTabNavigate} onUpdateUser={setCurrentUser} />}
            {activeTab === 'chat' && <GuidanceTab user={currentUser} initialPrompt={chatInitialPrompt} />}
            {activeTab === 'counseling' && <CounselingHubTab onNavigate={handleTabNavigate} />}
            {activeTab === 'stream' && (
              <StreamTab 
                user={currentUser} 
                onNavigate={handleTabNavigate} 
                onSelectStream={(newStream) => {
                  setCurrentUser((prev) => prev ? { ...prev, preferredStream: newStream } : null);
                }} 
              />
            )}
            {activeTab === 'exams' && <ExamsTab user={currentUser} />}
            {activeTab === 'colleges' && <CollegesTab />}
            {activeTab === 'scholarships' && <ScholarshipsTab />}
            {activeTab === 'forms' && <FormsTab user={user} onNavigate={handleTabNavigate} />}
            {activeTab === 'payments' && <PaymentsTab onNavigate={handleTabNavigate} />}
            {activeTab === 'applications' && <ApplicationsTab onNavigate={handleTabNavigate} />}
            {activeTab === 'documents' && <DocumentsTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Smart Notifications Drawer */}
      <SmartNotificationsDrawer
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onNavigateTab={setActiveTab}
        unreadCount={unreadCount}
        onUpdateUnreadCount={setUnreadCount}
      />

      {/* Bottom Mobile Navigation Bar */}
      <div className="fixed bottom-0 inset-x-0 max-w-[420px] mx-auto bg-[#060B18]/95 backdrop-blur-xl border-t border-white/10 px-4 py-2 flex items-center justify-around z-40">
        {bottomNavItems.map((item) => {
          const IconComp = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center space-y-0.5 transition-colors cursor-pointer ${
                isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <IconComp className={`w-5 h-5 ${isActive ? 'text-cyan-400 animate-pulse' : 'text-slate-400'}`} />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Floating "Ask MEUU AI" Button */}
      {activeTab !== 'chat' && (
        <button
          onClick={() => setActiveTab('chat')}
          className="fixed bottom-16 right-4 sm:right-6 z-40 px-3.5 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-extrabold text-xs shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center space-x-1.5 cursor-pointer border border-cyan-300/60"
        >
          <Bot className="w-4 h-4 text-slate-950 animate-bounce" />
          <span>Ask MEUU AI</span>
          <Sparkles className="w-3.5 h-3.5 text-slate-950" />
        </button>
      )}

      {/* Global Student ID Pass Modal */}
      <StudentIdCardModal
        isOpen={isIdModalOpen}
        onClose={() => setIsIdModalOpen(false)}
        user={currentUser}
      />
    </div>
  );
};
