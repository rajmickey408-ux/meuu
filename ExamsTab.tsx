import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  ExternalLink, 
  Bookmark, 
  Bell, 
  BellOff, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  Building2, 
  Sparkles, 
  X, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  Check, 
  HelpCircle, 
  Zap, 
  ShieldCheck,
  Compass
} from 'lucide-react';
import { UserProfile, DetailedExam } from '../../types';
import { DETAILED_EXAMS } from '../../data/examData';

interface ExamsTabProps {
  user?: UserProfile | null;
}

export const ExamsTab: React.FC<ExamsTabProps> = ({ user }) => {
  // Stream Filter
  const [selectedStreamFilter, setSelectedStreamFilter] = useState<string>(
    user?.preferredStream || 'Science PCM'
  );

  // Status Filter
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Upcoming' | 'Closed'>('All');

  // Search Query
  const [searchQuery, setSearchQuery] = useState('');

  // Exam List State (allows toggling isSaved and isNotified)
  const [examsList, setExamsList] = useState<DetailedExam[]>(DETAILED_EXAMS);

  // Active Exam Modal Details
  const [activeExam, setActiveExam] = useState<DetailedExam | null>(null);

  // Active Tab inside Exam Detail Modal
  const [activeDetailTab, setActiveDetailTab] = useState<'overview' | 'syllabus' | 'pattern' | 'cutoffs' | 'strategy' | 'faqs'>('overview');

  // FAQ Expand state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Real Countdown Timer State (Hours, Mins, Secs)
  const [nowTime, setNowTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter exams by stream, status, and search query
  const filteredExams = examsList.filter((exam) => {
    // Stream match check
    const matchesStream = 
      selectedStreamFilter === 'All' || 
      exam.stream === selectedStreamFilter || 
      (selectedStreamFilter === 'Science PCM' && exam.stream === 'Science PCM') ||
      (selectedStreamFilter === 'Science PCB' && exam.stream === 'Science PCB') ||
      (selectedStreamFilter === 'PCMB' && (exam.stream === 'PCMB' || exam.stream === 'Science PCM' || exam.stream === 'Science PCB'));

    // Status match
    const matchesStatus = statusFilter === 'All' || exam.regStatus === statusFilter;

    // Search query match
    const matchesSearch = 
      exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStream && matchesStatus && matchesSearch;
  });

  // Countdown Helper
  const calculateCountdown = (targetIsoDate: string) => {
    const target = new Date(targetIsoDate).getTime();
    const current = nowTime.getTime();
    const diff = target - current;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPassed: false };
  };

  const handleToggleSave = (examId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExamsList((prev) =>
      prev.map((item) =>
        item.id === examId ? { ...item, isSaved: !item.isSaved } : item
      )
    );
    if (activeExam && activeExam.id === examId) {
      setActiveExam((prev) => prev ? { ...prev, isSaved: !prev.isSaved } : null);
    }
  };

  const handleToggleNotify = (examId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExamsList((prev) =>
      prev.map((item) =>
        item.id === examId ? { ...item, isNotified: !item.isNotified } : item
      )
    );
    if (activeExam && activeExam.id === examId) {
      setActiveExam((prev) => prev ? { ...prev, isNotified: !prev.isNotified } : null);
    }
  };

  const streamOptions = [
    'Science PCM',
    'Science PCB',
    'PCMB',
    'Commerce',
    'Arts',
    'Diploma',
    'Polytechnic',
    'Other Career Paths',
    'All'
  ];

  return (
    <div className="w-full space-y-4 text-left pb-12">
      
      {/* 1. HEADER & STREAM FILTER BAR */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-slate-900/90 space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
              <Target className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-sm text-white">
                Dedicated Entrance Exam Hub
              </h3>
              <p className="text-[11px] text-slate-300">
                Filtered automatically for your selected academic stream
              </p>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-extrabold border border-cyan-400/30">
            {filteredExams.length} Exams Listed
          </span>
        </div>

        {/* Stream Filter Pills Bar */}
        <div className="space-y-1 pt-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Filter by Stream:
          </span>
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            {streamOptions.map((streamKey) => {
              const isSelected = selectedStreamFilter === streamKey;
              return (
                <button
                  key={streamKey}
                  onClick={() => setSelectedStreamFilter(streamKey)}
                  className={`px-3 py-1 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-950/80 text-slate-300 border-white/10 hover:bg-slate-800'
                  }`}
                >
                  {streamKey}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Status Filter Row */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
          {/* Search Bar */}
          <div className="relative w-full flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by exam name (JEE, NEET, CUET, CLAT...)"
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Status Filter */}
          <div className="flex rounded-xl bg-slate-950 p-1 border border-white/10 text-xs font-semibold w-full sm:w-auto shrink-0">
            {(['All', 'Open', 'Upcoming', 'Closed'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-center rounded-lg transition-all cursor-pointer text-[11px] ${
                  statusFilter === st
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. EXAM CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredExams.length > 0 ? (
          filteredExams.map((exam) => {
            const countdown = calculateCountdown(exam.targetExamIsoDate);

            return (
              <div
                key={exam.id}
                onClick={() => {
                  setActiveExam(exam);
                  setActiveDetailTab('overview');
                  setOpenFaqIndex(0);
                }}
                className="p-4 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/50 bg-slate-900/90 hover:bg-slate-900 space-y-3 transition-all cursor-pointer shadow-md group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-2">
                  {/* Top Badge & Save/Notify Controls */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                      exam.regStatus === 'Open'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                        : exam.regStatus === 'Upcoming'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                        : 'bg-rose-500/20 text-rose-300 border-rose-400/30'
                    }`}>
                      Registration {exam.regStatus}
                    </span>

                    <div className="flex items-center space-x-1">
                      {/* Save Reminder Button */}
                      <button
                        onClick={(e) => handleToggleSave(exam.id, e)}
                        title="Save Exam Reminder"
                        className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                          exam.isSaved
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
                            : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                        }`}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${exam.isSaved ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                      </button>

                      {/* Notification Button */}
                      <button
                        onClick={(e) => handleToggleNotify(exam.id, e)}
                        title="Enable Live Notifications"
                        className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                          exam.isNotified
                            ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                            : 'bg-slate-950 text-slate-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {exam.isNotified ? (
                          <Bell className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ) : (
                          <BellOff className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Exam Name & Category */}
                  <div>
                    <h4 className="font-display font-black text-base text-white group-hover:text-cyan-300 transition-colors leading-tight">
                      {exam.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {exam.fullName}
                    </p>
                  </div>

                  {/* Stream Badge & Difficulty */}
                  <div className="flex items-center space-x-2 text-[10px]">
                    <span className="px-2 py-0.5 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-400/20 font-bold">
                      {exam.stream}
                    </span>
                    <span className={`px-2 py-0.5 rounded-lg border font-bold ${
                      exam.difficulty === 'Extreme'
                        ? 'bg-rose-500/15 text-rose-300 border-rose-400/30'
                        : exam.difficulty === 'High'
                        ? 'bg-amber-500/15 text-amber-300 border-amber-400/30'
                        : 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30'
                    }`}>
                      Difficulty: {exam.difficulty}
                    </span>
                  </div>
                </div>

                {/* Bottom Countdown & Action Row */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  {/* Live Countdown Badge */}
                  <div className="flex items-center space-x-1.5 text-cyan-300 text-xs font-mono font-bold">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>
                      {countdown.isPassed ? (
                        <span className="text-slate-400">Exam Passed</span>
                      ) : (
                        <span>{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</span>
                      )}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-cyan-400 group-hover:underline flex items-center space-x-1">
                    <span>Full Details</span>
                    <ChevronDown className="-rotate-90 w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full p-8 rounded-3xl glass-panel border border-white/10 bg-slate-900/60 text-center space-y-2">
            <AlertCircle className="w-8 h-8 text-amber-400 mx-auto" />
            <h4 className="font-display font-bold text-sm text-white">
              No exams found matching your filter
            </h4>
            <p className="text-xs text-slate-400">
              Try switching the stream filter to "All" or clearing your search query.
            </p>
            <button
              onClick={() => {
                setSelectedStreamFilter('All');
                setStatusFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30 cursor-pointer hover:bg-cyan-500/30 transition-colors mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 3. EXAM FULL DETAILS MODAL / DRAWER */}
      <AnimatePresence>
        {activeExam && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="w-full max-w-3xl max-h-[90vh] glass-panel bg-slate-900 border border-cyan-500/40 rounded-3xl p-4 sm:p-6 overflow-y-auto space-y-4 shadow-2xl relative text-left"
            >
              {/* Top Close & Control Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-3">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold uppercase border border-cyan-400/30">
                      {activeExam.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-extrabold border border-blue-400/30">
                      {activeExam.stream}
                    </span>
                  </div>
                  <h2 className="font-display font-black text-xl text-white">
                    {activeExam.name}
                  </h2>
                  <p className="text-xs text-slate-300">{activeExam.fullName}</p>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Official Link Button */}
                  <a
                    href={activeExam.officialWebsite}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-400/30 text-xs font-bold transition-colors flex items-center space-x-1"
                  >
                    <span>Official Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Close Modal Button */}
                  <button
                    onClick={() => setActiveExam(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* LIVE COUNTDOWN BAR & CONTROLS */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950 via-slate-950 to-indigo-950 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                    Live Exam Countdown:
                  </span>
                  <div className="flex items-center space-x-2 text-white font-mono font-black text-sm sm:text-base mt-0.5">
                    <Clock className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                    <span>
                      {calculateCountdown(activeExam.targetExamIsoDate).days}d : {' '}
                      {calculateCountdown(activeExam.targetExamIsoDate).hours}h : {' '}
                      {calculateCountdown(activeExam.targetExamIsoDate).minutes}m : {' '}
                      {calculateCountdown(activeExam.targetExamIsoDate).seconds}s
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleToggleSave(activeExam.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer flex items-center space-x-1 transition-all ${
                      activeExam.isSaved
                        ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-extrabold'
                        : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{activeExam.isSaved ? 'Saved in Reminders' : 'Save Reminder'}</span>
                  </button>

                  <button
                    onClick={() => handleToggleNotify(activeExam.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer flex items-center space-x-1 transition-all ${
                      activeExam.isNotified
                        ? 'bg-amber-500 text-slate-950 border-amber-300 font-extrabold'
                        : 'bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800'
                    }`}
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span>{activeExam.isNotified ? 'Notifications On' : 'Alert Me'}</span>
                  </button>
                </div>
              </div>

              {/* DETAIL SUB-TABS */}
              <div className="flex rounded-2xl bg-slate-950 p-1 border border-white/10 text-xs font-bold overflow-x-auto scrollbar-none">
                {[
                  { id: 'overview', label: 'Overview & Eligibility' },
                  { id: 'syllabus', label: 'Syllabus' },
                  { id: 'pattern', label: 'Exam Pattern' },
                  { id: 'cutoffs', label: 'Previous Cutoffs' },
                  { id: 'strategy', label: 'Prep Strategy' },
                  { id: 'faqs', label: 'FAQs' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDetailTab(tab.id as any)}
                    className={`flex-1 py-1.5 px-3 text-center rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                      activeDetailTab === tab.id
                        ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT AREA */}
              <div className="space-y-4 pt-1">
                
                {/* 1. OVERVIEW & ELIGIBILITY */}
                {activeDetailTab === 'overview' && (
                  <div className="space-y-3.5 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                      <h4 className="font-display font-extrabold text-sm text-cyan-300 uppercase tracking-wider">
                        Overview & Purpose
                      </h4>
                      <p className="text-slate-200 leading-relaxed">
                        {activeExam.overview}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                      <h4 className="font-display font-extrabold text-sm text-emerald-300 uppercase tracking-wider flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Eligibility Criteria</span>
                      </h4>
                      <p className="text-slate-200 leading-relaxed font-sans">
                        {activeExam.eligibility}
                      </p>
                    </div>

                    {/* Key Dates Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Registration Opens</span>
                        <span className="font-bold text-white text-xs mt-0.5 block">{activeExam.registrationDate}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/30">
                        <span className="text-[10px] font-bold text-rose-300 uppercase block">Last Date To Apply</span>
                        <span className="font-bold text-white text-xs mt-0.5 block">{activeExam.lastDate}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                        <span className="text-[10px] font-bold text-cyan-300 uppercase block">Exam Date</span>
                        <span className="font-bold text-white text-xs mt-0.5 block">{activeExam.examDate}</span>
                      </div>
                    </div>

                    {/* Accepted Colleges Badges */}
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                      <h4 className="font-display font-extrabold text-xs text-purple-300 uppercase tracking-wider">
                        Accepted Institutes & Universities
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeExam.acceptedColleges.map((col, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-400/30 font-bold text-[11px]">
                            {col}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. SYLLABUS BREAKDOWN */}
                {activeDetailTab === 'syllabus' && (
                  <div className="space-y-3 text-xs">
                    <h4 className="font-display font-extrabold text-sm text-cyan-300 uppercase tracking-wider">
                      Subject-Wise Core Syllabus
                    </h4>
                    {activeExam.syllabus.map((subj, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                        <h5 className="font-bold text-white text-xs flex items-center space-x-1.5">
                          <BookOpen className="w-4 h-4 text-cyan-400" />
                          <span>{subj.subject}</span>
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {subj.topics.map((topic, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 rounded-xl bg-slate-900 text-slate-200 border border-white/10 text-[11px]">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. EXAM PATTERN */}
                {activeDetailTab === 'pattern' && (
                  <div className="space-y-3 text-xs">
                    <h4 className="font-display font-extrabold text-sm text-cyan-300 uppercase tracking-wider">
                      Exam Format & Structure
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Test Mode</span>
                        <p className="font-extrabold text-white">{activeExam.pattern.mode}</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Exam Duration</span>
                        <p className="font-extrabold text-white">{activeExam.pattern.duration}</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Total Marks</span>
                        <p className="font-extrabold text-cyan-300">{activeExam.pattern.totalMarks} Marks</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Question Count</span>
                        <p className="font-extrabold text-white">{activeExam.pattern.questionCount}</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-1">
                      <span className="text-[10px] font-bold text-amber-300 uppercase block">Marking Scheme:</span>
                      <p className="text-slate-200 font-sans">{activeExam.pattern.markingScheme}</p>
                    </div>
                  </div>
                )}

                {/* 4. PREVIOUS YEAR CUTOFFS */}
                {activeDetailTab === 'cutoffs' && (
                  <div className="space-y-3 text-xs">
                    <h4 className="font-display font-extrabold text-sm text-cyan-300 uppercase tracking-wider">
                      Previous Year Benchmarks & Cutoffs
                    </h4>
                    <div className="space-y-2">
                      {activeExam.previousYearCutoff.map((cut, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between">
                          <span className="font-bold text-slate-200">{cut.categoryOrBranch}</span>
                          <span className="font-mono font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20">
                            {cut.cutoffValue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. PREPARATION STRATEGY */}
                {activeDetailTab === 'strategy' && (
                  <div className="space-y-3 text-xs">
                    <h4 className="font-display font-extrabold text-sm text-cyan-300 uppercase tracking-wider">
                      Mentor Preparation Strategy
                    </h4>
                    <div className="space-y-2">
                      {activeExam.preparationStrategy.map((strat, idx) => (
                        <div key={idx} className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start space-x-2.5">
                          <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span className="text-slate-200 leading-relaxed">{strat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. FAQS */}
                {activeDetailTab === 'faqs' && (
                  <div className="space-y-2.5 text-xs">
                    <h4 className="font-display font-extrabold text-sm text-cyan-300 uppercase tracking-wider mb-2">
                      Frequently Asked Questions
                    </h4>
                    {activeExam.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className="rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full p-3.5 text-left font-bold text-white flex items-center justify-between cursor-pointer hover:bg-slate-900/60"
                          >
                            <span className="pr-2">{faq.question}</span>
                            <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>

                          {isOpen && (
                            <div className="p-3.5 pt-0 text-slate-300 border-t border-white/5 leading-relaxed bg-slate-900/40 font-sans">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
