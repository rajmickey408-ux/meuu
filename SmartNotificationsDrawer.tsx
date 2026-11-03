import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_SMART_NOTIFICATIONS } from '../../data/notificationsData';
import { SmartNotification, ActiveTab } from '../../types';
import { 
  Bell, 
  X, 
  Check, 
  Calendar, 
  Clock, 
  GraduationCap, 
  FolderLock, 
  CreditCard, 
  Bot, 
  Sparkles, 
  ChevronRight, 
  AlertCircle,
  Newspaper,
  Building2,
  FileEdit
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: ActiveTab) => void;
  unreadCount: number;
  onUpdateUnreadCount: (count: number) => void;
}

export const SmartNotificationsDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  onNavigateTab,
  unreadCount,
  onUpdateUnreadCount
}) => {
  const [notifications, setNotifications] = useState<SmartNotification[]>(INITIAL_SMART_NOTIFICATIONS);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const CATEGORIES = [
    'All',
    'Exam Dates',
    'Registration Deadlines',
    'Application Deadlines',
    'Counselling',
    'Scholarships',
    'Document Expiry',
    'Payment Due',
    'AI Recommendations',
    'Latest Education Updates'
  ];

  const filtered = notifications.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, isRead: true } : n));
      const newUnread = updated.filter((n) => !n.isRead).length;
      onUpdateUnreadCount(newUnread);
      return updated;
    });
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    onUpdateUnreadCount(0);
  };

  const getCategoryIcon = (category: SmartNotification['category']) => {
    switch (category) {
      case 'Exam Dates':
        return Calendar;
      case 'Registration Deadlines':
        return Clock;
      case 'Application Deadlines':
        return FileEdit;
      case 'Counselling':
        return Building2;
      case 'Scholarships':
        return GraduationCap;
      case 'Document Expiry':
        return FolderLock;
      case 'Payment Due':
        return CreditCard;
      case 'AI Recommendations':
        return Bot;
      case 'Latest Education Updates':
        return Newspaper;
      default:
        return Bell;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md h-full bg-[#060B18] border-l border-white/10 p-4 flex flex-col text-left space-y-3 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bell className="w-5 h-5 text-cyan-400" />
                {unreadCount > 0 && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute -top-0.5 -right-0.5" />
                )}
              </div>
              <div>
                <h3 className="font-display font-black text-base text-white">
                  Smart AI Notifications
                </h3>
                <p className="text-[10px] text-slate-400">
                  {unreadCount} unread alerts
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllRead}
                  className="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-400/30 hover:bg-cyan-500/30 cursor-pointer"
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter Horizontal Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-400 text-slate-950 font-black shadow-md'
                    : 'bg-slate-900 text-slate-300 border border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notifications List */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 scrollbar-none">
            {filtered.map((item) => {
              const IconComp = getCategoryIcon(item.category);
              return (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-2xl border transition-all text-left space-y-2 ${
                    !item.isRead
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'bg-slate-950/60 border-white/5 opacity-80'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-cyan-300 uppercase block">
                          {item.category}
                        </span>
                        <h4 className="font-display font-bold text-xs text-white">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {!item.isRead && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1" />
                    )}
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed pl-9">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pl-9 pt-1 border-t border-white/5 text-[10px]">
                    <span className="text-slate-500">{item.timestamp}</span>

                    <div className="flex items-center space-x-2">
                      {!item.isRead && (
                        <button
                          onClick={() => handleMarkAsRead(item.id)}
                          className="text-slate-400 hover:text-white font-bold flex items-center space-x-0.5 cursor-pointer"
                        >
                          <Check className="w-3 h-3" />
                          <span>Dismiss</span>
                        </button>
                      )}

                      {item.actionTab && (
                        <button
                          onClick={() => {
                            handleMarkAsRead(item.id);
                            onNavigateTab(item.actionTab!);
                            onClose();
                          }}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-extrabold flex items-center space-x-1 cursor-pointer"
                        >
                          <span>Open</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-xs">
                No notifications in this category.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
