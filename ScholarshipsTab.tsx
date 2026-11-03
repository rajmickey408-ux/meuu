import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FULL_SCHOLARSHIPS_LIST } from '../../data/scholarshipsData';
import { FullScholarshipItem, ScholarshipFilterState } from '../../types';
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Award, 
  Calendar, 
  DollarSign, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  X, 
  Sparkles, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const ScholarshipsTab: React.FC = () => {
  const [filters, setFilters] = useState<ScholarshipFilterState>({
    searchQuery: '',
    state: 'All',
    category: 'All',
    gender: 'All',
    income: 'All',
    classTarget: 'All',
    stream: 'All'
  });

  const [selectedScholarship, setSelectedScholarship] = useState<FullScholarshipItem | null>(null);
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const STATES = ['All', 'All India', 'Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Delhi', 'Rajasthan', 'West Bengal'];
  const CATEGORIES = ['All', 'General', 'OBC', 'SC', 'ST', 'EWS'];
  const GENDERS = ['All', 'Female', 'Single Girl Child', 'Male'];
  const INCOMES = ['All', 'Below ₹2.5 Lakhs', 'Below ₹4.5 Lakhs', 'Below ₹6 Lakhs', 'Below ₹8 Lakhs'];
  const CLASSES = ['All', 'Class 10', 'Class 11', 'Class 12', 'Undergraduate (B.Tech/MBBS)'];
  const STREAMS = ['All', 'Science PCM', 'Science PCB', 'Commerce', 'Arts'];

  const filteredScholarships = FULL_SCHOLARSHIPS_LIST.filter((item) => {
    // Search match
    const matchSearch =
      item.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      item.provider.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      item.eligibility.toLowerCase().includes(filters.searchQuery.toLowerCase());

    // State match
    const matchState = filters.state === 'All' || item.state === 'All India' || item.state === filters.state;

    // Category match
    const matchCategory = filters.category === 'All' || item.category === 'All' || item.category === filters.category;

    // Gender match
    const matchGender = filters.gender === 'All' || item.gender === 'All' || item.gender === filters.gender;

    // Income match
    const matchIncome = filters.income === 'All' || item.incomeLimit.includes(filters.income) || item.incomeLimit === 'No Limit';

    // Class match
    const matchClass = filters.classTarget === 'All' || item.classTarget === 'All' || item.classTarget === filters.classTarget;

    // Stream match
    const matchStream = filters.stream === 'All' || item.stream === 'All' || item.stream === filters.stream;

    return matchSearch && matchState && matchCategory && matchGender && matchIncome && matchClass && matchStream;
  });

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      state: 'All',
      category: 'All',
      gender: 'All',
      income: 'All',
      classTarget: 'All',
      stream: 'All'
    });
  };

  const activeFilterCount =
    (filters.state !== 'All' ? 1 : 0) +
    (filters.category !== 'All' ? 1 : 0) +
    (filters.gender !== 'All' ? 1 : 0) +
    (filters.income !== 'All' ? 1 : 0) +
    (filters.classTarget !== 'All' ? 1 : 0) +
    (filters.stream !== 'All' ? 1 : 0);

  return (
    <div className="w-full space-y-4 text-left pb-12">
      {/* Header Banner */}
      <div className="p-4 rounded-3xl glass-panel border border-violet-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-violet-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-extrabold border border-violet-400/30 uppercase tracking-wider flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-violet-400" />
                <span>₹50Cr+ Grants Portal</span>
              </span>
            </div>
            <h2 className="font-display font-black text-xl text-white mt-1">
              Scholarship Finder
            </h2>
            <p className="text-xs text-slate-300 mt-0.5 max-w-md">
              Discover national, state, merit & category-based scholarships with auto-eligibility matching.
            </p>
          </div>
          <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-400/40 items-center justify-center text-violet-300 shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Search Bar & Filter Toggle */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
            placeholder="Search scholarships by name, eligibility, provider..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-violet-400/80 transition-colors"
          />
        </div>

        <button
          onClick={() => setShowFiltersModal(true)}
          className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center space-x-1.5 transition-all cursor-pointer shrink-0 border ${
            activeFilterCount > 0
              ? 'bg-violet-600 text-white border-violet-400 shadow-lg'
              : 'glass-panel text-slate-300 border-white/10 hover:bg-slate-800'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-cyan-400 text-slate-950 text-[10px] font-black flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Quick State Pill Filter */}
      <div className="w-full flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {STATES.map((st) => {
          const isActive = filters.state === st;
          return (
            <button
              key={st}
              onClick={() => setFilters(prev => ({ ...prev, state: st }))}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-violet-600 text-white font-black shadow-md border border-violet-400'
                  : 'bg-slate-900 text-slate-300 border border-white/10 hover:text-white'
              }`}
            >
              {st === 'All' ? '🌐 All States' : st}
            </button>
          );
        })}
      </div>

      {/* Active Filter Chips Bar */}
      {activeFilterCount > 0 && (
        <div className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-900/60 border border-white/10 text-xs">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-slate-400 text-[11px]">Active Filters:</span>
            {filters.state !== 'All' && (
              <span className="px-2 py-0.5 rounded-lg bg-violet-950 text-violet-300 border border-violet-500/30 font-bold">
                State: {filters.state}
              </span>
            )}
            {filters.category !== 'All' && (
              <span className="px-2 py-0.5 rounded-lg bg-blue-950 text-blue-300 border border-blue-500/30 font-bold">
                Category: {filters.category}
              </span>
            )}
            {filters.gender !== 'All' && (
              <span className="px-2 py-0.5 rounded-lg bg-purple-950 text-purple-300 border border-purple-500/30 font-bold">
                Gender: {filters.gender}
              </span>
            )}
            {filters.income !== 'All' && (
              <span className="px-2 py-0.5 rounded-lg bg-amber-950 text-amber-300 border border-amber-500/30 font-bold">
                Income: {filters.income}
              </span>
            )}
            {filters.classTarget !== 'All' && (
              <span className="px-2 py-0.5 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-bold">
                Class: {filters.classTarget}
              </span>
            )}
            {filters.stream !== 'All' && (
              <span className="px-2 py-0.5 rounded-lg bg-teal-950 text-teal-300 border border-teal-500/30 font-bold">
                Stream: {filters.stream}
              </span>
            )}
          </div>
          <button
            onClick={resetFilters}
            className="text-[11px] font-bold text-red-400 hover:underline shrink-0 ml-2"
          >
            Reset
          </button>
        </div>
      )}

      {/* Scholarship Cards List */}
      <div className="space-y-3">
        {filteredScholarships.map((sch) => (
          <div
            key={sch.id}
            className="p-4 rounded-3xl glass-panel border border-white/10 hover:border-violet-400/50 bg-slate-900/80 transition-all space-y-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-display font-extrabold text-sm text-white">
                      {sch.title}
                    </h4>
                    {sch.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[9px] font-extrabold border border-violet-400/30">
                        {sch.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {sch.provider}
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Amount</span>
                <span className="font-display font-black text-sm text-emerald-400">
                  {sch.amount}
                </span>
              </div>
            </div>

            {/* Quick Details Badges */}
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">Eligibility</span>
                <p className="text-slate-200 line-clamp-2">{sch.eligibility}</p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-white/5 text-[11px]">
                <span className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-white/10">
                  State: {sch.state}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-white/10">
                  Cat: {sch.category}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-white/10">
                  Gender: {sch.gender}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-slate-900 text-slate-300 border border-white/10">
                  Income: {sch.incomeLimit}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-500/30 ml-auto font-bold flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Deadline: {sch.deadline}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setSelectedScholarship(sch)}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 cursor-pointer"
              >
                <span>View Full Eligibility & Documents</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={sch.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-extrabold shadow-md flex items-center space-x-1 cursor-pointer transition-transform"
              >
                <span>Apply Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}

        {filteredScholarships.length === 0 && (
          <div className="p-8 rounded-3xl glass-panel text-center space-y-2 border border-white/10">
            <GraduationCap className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="font-bold text-white text-sm">No Scholarships Found</h4>
            <p className="text-xs text-slate-400">Try broadening your state, category, or income filters.</p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-xs mt-2 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* SCHOLARSHIP DETAIL MODAL */}
      <AnimatePresence>
        {selectedScholarship && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto p-5 rounded-3xl glass-panel border border-violet-500/40 bg-slate-900 text-left space-y-4 shadow-2xl scrollbar-none"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="font-display font-black text-base text-white">
                      {selectedScholarship.title}
                    </h3>
                    <p className="text-xs text-slate-400">{selectedScholarship.provider}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedScholarship(null)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Amount & Deadline */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/30 flex justify-between items-center text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Scholarship Award</span>
                  <span className="font-display font-black text-base text-emerald-400">{selectedScholarship.amount}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Application Deadline</span>
                  <span className="font-bold text-amber-400">{selectedScholarship.deadline}</span>
                </div>
              </div>

              {/* Comprehensive Eligibility */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1.5 text-xs">
                <span className="font-bold text-violet-300 uppercase tracking-wider text-[10px] block">
                  Eligibility Criteria
                </span>
                <p className="text-slate-200 leading-relaxed">{selectedScholarship.eligibility}</p>
              </div>

              {/* Filter Attributes Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">State Applicability</span>
                  <span className="font-bold text-white">{selectedScholarship.state}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Category</span>
                  <span className="font-bold text-white">{selectedScholarship.category}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Gender Target</span>
                  <span className="font-bold text-white">{selectedScholarship.gender}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10">
                  <span className="text-[10px] text-slate-400 block">Family Income Limit</span>
                  <span className="font-bold text-white">{selectedScholarship.incomeLimit}</span>
                </div>
              </div>

              {/* Required Documents List */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2 text-xs">
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block">
                  Required Documents Checklist
                </span>
                <div className="space-y-1.5">
                  {selectedScholarship.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Website & Apply */}
              <div className="pt-2 flex items-center space-x-2">
                <a
                  href={selectedScholarship.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center space-x-1 border border-white/10"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={selectedScholarship.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-black text-xs flex items-center justify-center space-x-1 shadow-lg"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FILTERS OVERLAY MODAL */}
      <AnimatePresence>
        {showFiltersModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-5 rounded-3xl glass-panel border border-white/10 bg-slate-900 text-left space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-display font-black text-base text-white flex items-center space-x-2">
                  <SlidersHorizontal className="w-4 h-4 text-violet-400" />
                  <span>Filter Scholarships</span>
                </h3>
                <button
                  onClick={() => setShowFiltersModal(false)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1 scrollbar-none text-xs">
                {/* State */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block">State</label>
                  <select
                    value={filters.state}
                    onChange={(e) => setFilters(prev => ({ ...prev, state: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-violet-400"
                  >
                    {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Category */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-violet-400"
                  >
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Gender */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block">Gender</label>
                  <select
                    value={filters.gender}
                    onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-violet-400"
                  >
                    {GENDERS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                {/* Income */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block">Annual Income Limit</label>
                  <select
                    value={filters.income}
                    onChange={(e) => setFilters(prev => ({ ...prev, income: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-violet-400"
                  >
                    {INCOMES.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                {/* Class */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block">Class / Academic Stage</label>
                  <select
                    value={filters.classTarget}
                    onChange={(e) => setFilters(prev => ({ ...prev, classTarget: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-violet-400"
                  >
                    {CLASSES.map(cl => <option key={cl} value={cl}>{cl}</option>)}
                  </select>
                </div>

                {/* Stream */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300 block">Stream</label>
                  <select
                    value={filters.stream}
                    onChange={(e) => setFilters(prev => ({ ...prev, stream: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-violet-400"
                  >
                    {STREAMS.map(st => <option key={st} value={st}>{st}</option>)}
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <button
                  onClick={resetFilters}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
                >
                  Clear
                </button>
                <button
                  onClick={() => setShowFiltersModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-violet-600 text-white font-extrabold text-xs hover:bg-violet-500 cursor-pointer shadow-lg"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
