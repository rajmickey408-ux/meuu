import React, { useState } from 'react';
import { motion } from 'motion/react';
import { INDUSTRY_VOICES } from '../../../data/careersData';
import { IndustryVoice, IndustryVoiceCategory } from '../../../types';
import { 
  Quote, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  UserCheck, 
  MessageSquare,
  ShieldCheck,
  Building,
  Info
} from 'lucide-react';

const CATEGORIES: IndustryVoiceCategory[] = [
  'All',
  'CEO Insights',
  'Founder Stories',
  'Recruiter Insights',
  'Engineer Experiences',
  'Startup & Entrepreneurship',
  'Future of Work',
  'AI & Industry'
];

export const IndustryVoicesView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<IndustryVoiceCategory>('All');

  const filteredVoices = INDUSTRY_VOICES.filter((voice) => {
    if (activeCategory === 'All') return true;
    return voice.category === activeCategory;
  });

  return (
    <div className="space-y-4">
      {/* Top Banner with Strict Quote Attribution Standard */}
      <div className="p-4 rounded-3xl glass-panel border border-purple-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-purple-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2 text-purple-400 text-xs font-black uppercase tracking-wider">
            <Quote className="w-4 h-4 text-purple-400" />
            <span>Industry Voices</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-400/30">
            Verified Attribution
          </span>
        </div>
        <h3 className="font-display font-black text-base text-white">
          Direct Insights from Tech CEOs, Founders & Engineering Leads
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Actionable advice on what top companies hire for, high-leverage skills, common student mistakes, and navigating the AI era.
        </p>

        <div className="mt-3 p-2.5 rounded-2xl bg-slate-950/70 border border-white/10 flex items-start space-x-2 text-[11px] text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>
            <strong>Attribution Policy:</strong> Real quotes preserve the exact speaker wording, role, source, and date. Generalized industry best practices are transparently designated as <em>"Industry Insight (AI-Generated / Generalized)"</em>.
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md font-black'
                : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 gap-3">
        {filteredVoices.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="p-4 rounded-3xl glass-panel border border-white/10 bg-slate-900/85 hover:border-purple-500/30 transition-all space-y-3 shadow-lg"
          >
            {/* Header: Speaker & Role & Category Badge */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-500 p-0.5 shrink-0 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-display font-black text-cyan-300 text-sm">
                    {item.speaker.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-white">
                    {item.speaker}
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    {item.role} • <span className="text-cyan-300 font-semibold">{item.companyOrOrg}</span>
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 text-[10px] font-bold border border-purple-400/30 shrink-0">
                {item.category}
              </span>
            </div>

            {/* Topic & Attribution Status */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-bold border border-cyan-400/20">
                {item.topic}
              </span>
              {item.isDirectQuote ? (
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 text-[9px] font-bold border border-emerald-400/20 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Direct Quote</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-[9px] font-bold border border-amber-400/20 flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Industry Insight</span>
                </span>
              )}
            </div>

            {/* Quote Body */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/5 relative">
              <Quote className="w-5 h-5 text-purple-400/30 absolute top-2 right-3" />
              <p className="text-xs text-slate-200 italic leading-relaxed pr-6">
                "{item.quoteOrInsight}"
              </p>
            </div>

            {/* Key Takeaway */}
            <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-0.5">
              <span className="text-[10px] font-black text-purple-300 uppercase tracking-wider block">
                Key Takeaway for Students
              </span>
              <p className="text-xs text-slate-200 font-medium">
                {item.keyTakeaway}
              </p>
            </div>

            {/* Source and Link */}
            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[11px] text-slate-400">
              <div className="truncate pr-2">
                <span>Source: </span>
                <span className="text-slate-300 font-medium">{item.source}</span>
                {item.date && <span> ({item.date})</span>}
              </div>

              {item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 shrink-0 hover:underline"
                >
                  <span>Watch / Read</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
