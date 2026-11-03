import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INDUSTRY_TRENDS } from '../../../data/careersData';
import { IndustryTrend } from '../../../types';
import { 
  Search, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Code, 
  Layers, 
  Rocket, 
  Briefcase, 
  CheckCircle2, 
  TrendingUp,
  Bot,
  Database,
  ShieldAlert,
  Cloud,
  Zap,
  MessageSquare,
  BrainCircuit,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const IndustryTrendsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedTrendId, setExpandedTrendId] = useState<string>(INDUSTRY_TRENDS[0].id);

  const getTrendIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const filteredTrends = INDUSTRY_TRENDS.filter((trend) => {
    const matchesSearch = 
      trend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trend.whatStudentsShouldLearn.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === 'All' || 
      (selectedCategory === 'Tech Core' && ['trend-ai-ml', 'trend-data', 'trend-cloud', 'trend-software-dev', 'trend-cybersecurity'].includes(trend.id)) ||
      (selectedCategory === 'Execution & Design' && ['trend-automation', 'trend-product-thinking'].includes(trend.id)) ||
      (selectedCategory === 'Mindset & Venture' && ['trend-communication', 'trend-problem-solving', 'trend-entrepreneurship'].includes(trend.id));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-4">
      {/* Top Banner with Strict Data Citation Notice */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 relative overflow-hidden">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-black uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>10 Critical Industry Pillars</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
            Current Data Verified
          </span>
        </div>
        <h3 className="font-display font-black text-base text-white">
          High-Impact Skills, Project Blueprints & Market Signals
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Comprehensive roadmaps across top technological and career pillars. Every trend outlines why it matters, curriculum priorities, kickstart milestones, portfolio projects, and verified market research citations.
        </p>

        <div className="mt-3 p-2 rounded-xl bg-slate-950/60 border border-white/10 flex items-center space-x-2 text-[11px] text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            <strong>Data Integrity Standard:</strong> Market statistics cite verified publications with source organization and publication dates. No outdated or fabricated figures.
          </span>
        </div>
      </div>

      {/* Search & Category Filter Pills */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search AI, Data, Cloud, Cybersecurity, DSA, Product, Startups..."
            className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
          />
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {['All', 'Tech Core', 'Execution & Design', 'Mindset & Venture'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                  : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 10 Trends Accordion / Cards */}
      <div className="space-y-3">
        {filteredTrends.map((trend) => {
          const isExpanded = expandedTrendId === trend.id;

          return (
            <div
              key={trend.id}
              className={`rounded-3xl glass-panel border transition-all overflow-hidden ${
                isExpanded
                  ? 'border-cyan-400/40 bg-slate-900/95 shadow-xl'
                  : 'border-white/10 bg-slate-900/70 hover:border-white/20'
              }`}
            >
              {/* Header Toggle */}
              <div
                onClick={() => setExpandedTrendId(isExpanded ? '' : trend.id)}
                className="p-4 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${trend.gradient} p-0.5 shadow-lg shrink-0`}>
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-300">
                      {getTrendIcon(trend.iconName)}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-display font-black text-sm sm:text-base text-white">
                        {trend.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[9px] font-black uppercase tracking-wider border border-cyan-400/30">
                        {trend.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-1">
                      {trend.tagline}
                    </p>
                  </div>
                </div>

                <button 
                  className="p-2 rounded-xl bg-slate-800/60 text-slate-300 hover:text-white transition-colors"
                  aria-label={isExpanded ? "Collapse details" : "Expand details"}
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Detailed Expanded Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 pb-4 space-y-4 border-t border-white/10 pt-3"
                  >
                    {/* 1. WHY IT MATTERS */}
                    <div className="space-y-1">
                      <h5 className="text-[10px] font-black text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>WHY IT MATTERS</span>
                      </h5>
                      <p className="text-xs text-slate-200 leading-relaxed bg-slate-950/40 p-3 rounded-2xl border border-white/5">
                        {trend.whyItMatters}
                      </p>
                    </div>

                    {/* 2. WHAT STUDENTS SHOULD LEARN */}
                    <div className="space-y-1.5">
                      <h5 className="text-[10px] font-black text-indigo-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>WHAT STUDENTS SHOULD LEARN</span>
                      </h5>
                      <div className="space-y-1.5">
                        {trend.whatStudentsShouldLearn.map((topic, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3. HOW TO START */}
                    <div className="space-y-1.5">
                      <h5 className="text-[10px] font-black text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Rocket className="w-3.5 h-3.5" />
                        <span>HOW TO START (STEP-BY-STEP)</span>
                      </h5>
                      <div className="space-y-2">
                        {trend.howToStart.map((step, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-200">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 4. RECOMMENDED PROJECTS */}
                    <div className="space-y-2">
                      <h5 className="text-[10px] font-black text-purple-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>RECOMMENDED PORTFOLIO PROJECTS</span>
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {trend.recommendedProjects.map((proj, idx) => (
                          <div key={idx} className="p-3 rounded-2xl bg-slate-950/60 border border-purple-500/20 space-y-1.5">
                            <div className="flex items-center justify-between">
                              <h6 className="font-display font-extrabold text-xs text-white">
                                {proj.title}
                              </h6>
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                                proj.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300' :
                                proj.difficulty === 'Intermediate' ? 'bg-cyan-500/20 text-cyan-300' :
                                'bg-rose-500/20 text-rose-300'
                              }`}>
                                {proj.difficulty}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                              {proj.description}
                            </p>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {proj.techStack.map((tech, tIdx) => (
                                <span key={tIdx} className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-[9px] font-bold border border-purple-400/20">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 5. RELATED CAREER ROLES */}
                    <div className="space-y-1.5">
                      <h5 className="text-[10px] font-black text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>RELATED CAREER ROLES</span>
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {trend.relatedCareerRoles.map((role, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-slate-950/40 border border-white/5 space-y-0.5">
                            <h6 className="font-display font-bold text-xs text-amber-200">
                              {role.role}
                            </h6>
                            <p className="text-[10px] text-slate-300">
                              {role.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 6. MARKET DATA (SOURCE & DATE CITED) */}
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-950 to-cyan-950/40 border border-cyan-500/30 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-cyan-300 font-bold">
                        <span>VERIFIED MARKET DATA & SIGNAL</span>
                        <span>{trend.marketData.date}</span>
                      </div>
                      <p className="text-xs text-white font-medium">
                        "{trend.marketData.stat}"
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Source: <span className="text-cyan-300 underline">{trend.marketData.source}</span>
                      </p>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
