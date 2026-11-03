import React, { useState } from 'react';
import { INITIAL_TRACKED_APPLICATIONS } from '../../data/mockData';
import { Layers, Bell, CheckCircle2, Clock, FileText, ChevronRight } from 'lucide-react';
import { ActiveTab } from '../../types';

interface ApplicationsTabProps {
  onNavigate?: (tab: ActiveTab) => void;
}

export const ApplicationsTab: React.FC<ApplicationsTabProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'In Progress' | 'Submitted' | 'Admitted'>('All');

  const filtered = INITIAL_TRACKED_APPLICATIONS.filter((app) => {
    if (activeFilter === 'All') return true;
    return app.status === activeFilter;
  });

  return (
    <div className="w-full space-y-3.5 text-left pb-4">
      {/* Title Bar */}
      <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
        <h3 className="font-display font-extrabold text-base text-white flex items-center space-x-1.5">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>My Applications</span>
        </h3>
      </div>

      {/* Filter Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        {(['All', 'In Progress', 'Submitted', 'Admitted'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeFilter === filter
                ? 'bg-blue-600 text-white font-bold shadow-md'
                : 'bg-slate-900 text-slate-300 border border-white/10 hover:bg-slate-800'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Applications Cards List */}
      <div className="space-y-2.5">
        {filtered.map((item) => {
          const badgeStyles = {
            Submitted: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
            'In Review': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
            'In Progress': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            Admitted: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
          }[item.status];

          return (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 bg-slate-900/80 space-y-2 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {item.notes.split('.')[0]} • {item.submittedDate}
                  </p>
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${badgeStyles}`}>
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time Updates Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 flex items-center space-x-3 text-xs text-white">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
          <Bell className="w-4 h-4" />
        </div>
        <div>
          <h5 className="font-bold text-xs text-white">Get real-time updates</h5>
          <p className="text-[10px] text-slate-300">on email, SMS & App</p>
        </div>
      </div>
    </div>
  );
};
