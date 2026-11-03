import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExamScoreInput,
  CollegeFilterState,
  CollegeRecommendation
} from '../../types';
import {
  generateScaledCollegeDatabase,
  predictCollegeRecommendations
} from '../../data/collegeData';
import { PredictorInputCard } from '../colleges/PredictorInputCard';
import { CollegeFilterBar } from '../colleges/CollegeFilterBar';
import { CollegeCard } from '../colleges/CollegeCard';
import { CollegeDetailModal } from '../colleges/CollegeDetailModal';
import { CollegeCompareModal } from '../colleges/CollegeCompareModal';
import { ApplyNowModal } from '../colleges/ApplyNowModal';
import { Building2, Sparkles, Scale, Bookmark, RefreshCw, Trophy, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CollegesTab: React.FC = () => {
  // Student Exam Score State
  const [scoreInput, setScoreInput] = useState<ExamScoreInput>({
    exam: 'JEE Main',
    rankOrScore: 8500,
    category: 'General',
    homeState: 'Delhi',
    targetBranch: 'Computer Science & Engineering (CSE)'
  });

  // Filter State
  const [filterState, setFilterState] = useState<CollegeFilterState>({
    searchQuery: '',
    selectedState: 'All States',
    maxAnnualFee: 600000,
    selectedBranch: 'All Branches',
    hostelRequired: false,
    minAvgPlacementLpa: 0,
    ownership: 'All',
    universityType: 'All',
    categoryFilter: 'All',
    sortBy: 'probability'
  });

  // Interactivity States
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['iit-delhi', 'dtu-delhi']);
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [selectedDetailRec, setSelectedDetailRec] = useState<CollegeRecommendation | null>(null);
  const [selectedApplyRec, setSelectedApplyRec] = useState<CollegeRecommendation | null>(null);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Scaled Database with thousands of colleges across India
  const fullDatabase = useMemo(() => {
    return generateScaledCollegeDatabase(filterState);
  }, []);

  // Run Predictor Engine
  const allRecommendations = useMemo(() => {
    return predictCollegeRecommendations(scoreInput, fullDatabase);
  }, [scoreInput, fullDatabase]);

  // Filter & Sort Logic
  const filteredRecommendations = useMemo(() => {
    return allRecommendations
      .filter((rec) => {
        const col = rec.college;

        // Search query
        if (filterState.searchQuery.trim()) {
          const q = filterState.searchQuery.toLowerCase();
          const matchName = col.name.toLowerCase().includes(q) || col.shortName.toLowerCase().includes(q);
          const matchLoc = col.location.city.toLowerCase().includes(q) || col.location.state.toLowerCase().includes(q);
          const matchCourse = col.courses.some(c => c.toLowerCase().includes(q)) || col.branches.some(b => b.toLowerCase().includes(q));
          if (!matchName && !matchLoc && !matchCourse) return false;
        }

        // Tier filter (Dream / Target / Safe)
        if (filterState.categoryFilter !== 'All') {
          if (rec.tier !== filterState.categoryFilter) return false;
        }

        // State filter
        if (filterState.selectedState !== 'All States') {
          if (col.location.state.toLowerCase() !== filterState.selectedState.toLowerCase()) return false;
        }

        // Branch filter
        if (filterState.selectedBranch !== 'All Branches') {
          if (!col.branches.some(b => b.toLowerCase().includes(filterState.selectedBranch.toLowerCase()))) return false;
        }

        // Max Fee filter
        if (col.fees.annualTuitionAmount > filterState.maxAnnualFee) return false;

        // Hostel required
        if (filterState.hostelRequired && !col.hostelFees.hasHostel) return false;

        // Min Placement
        if (col.placements.averagePackageLpa < filterState.minAvgPlacementLpa) return false;

        // Ownership (Govt vs Private)
        if (filterState.ownership !== 'All') {
          if (col.ownership !== filterState.ownership) return false;
        }

        // University Type
        if (filterState.universityType !== 'All') {
          if (col.universityType !== filterState.universityType) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filterState.sortBy === 'probability') {
          return b.probabilityPercent - a.probabilityPercent;
        } else if (filterState.sortBy === 'nirf') {
          const nirfA = typeof a.college.ranking.nirfOverall === 'number' ? a.college.ranking.nirfOverall : 999;
          const nirfB = typeof b.college.ranking.nirfOverall === 'number' ? b.college.ranking.nirfOverall : 999;
          return nirfA - nirfB;
        } else if (filterState.sortBy === 'placement') {
          return b.college.placements.highestPackageLpa - a.college.placements.highestPackageLpa;
        } else if (filterState.sortBy === 'feesLowToHigh') {
          return a.college.fees.annualTuitionAmount - b.college.fees.annualTuitionAmount;
        }
        return 0;
      });
  }, [allRecommendations, filterState]);

  // Top 100 Personalized Colleges Selection
  const top100Personalized = useMemo(() => {
    return filteredRecommendations.slice(0, 100);
  }, [filteredRecommendations]);

  const visibleColleges = useMemo(() => {
    return top100Personalized.slice(0, visibleCount);
  }, [top100Personalized, visibleCount]);

  // Tier Counts
  const counts = useMemo(() => {
    let dream = 0;
    let target = 0;
    let safe = 0;

    allRecommendations.forEach((r) => {
      if (r.tier === 'Dream') dream++;
      if (r.tier === 'Target') target++;
      if (r.tier === 'Safe') safe++;
    });

    return { dream, target, safe };
  }, [allRecommendations]);

  // Toggle handlers
  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const isSaved = prev.includes(id);
      if (isSaved) {
        showToast('College removed from saved list');
        return prev.filter((item) => item !== id);
      } else {
        showToast('College added to your target shortlist!');
        return [...prev, id];
      }
    });
  };

  const handleToggleCompare = (id: string) => {
    setComparedIds((prev) => {
      if (prev.includes(id)) {
        showToast('Removed from comparison');
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          showToast('You can compare up to 3 colleges side-by-side');
          return prev;
        }
        showToast('Added to comparison deck');
        return [...prev, id];
      }
    });
  };

  const resetFilters = () => {
    setFilterState({
      searchQuery: '',
      selectedState: 'All States',
      maxAnnualFee: 600000,
      selectedBranch: 'All Branches',
      hostelRequired: false,
      minAvgPlacementLpa: 0,
      ownership: 'All',
      universityType: 'All',
      categoryFilter: 'All',
      sortBy: 'probability'
    });
    showToast('Filters reset to default');
  };

  const comparedRecommendations = useMemo(() => {
    return allRecommendations.filter((r) => comparedIds.includes(r.college.id));
  }, [allRecommendations, comparedIds]);

  return (
    <div className="w-full space-y-4 text-left pb-16 relative">
      {/* Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-cyan-400 text-slate-950 font-black text-xs shadow-2xl flex items-center space-x-2 border border-cyan-200"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black">
            <Building2 className="w-4 h-4 text-slate-950" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-base text-white flex items-center space-x-1.5">
              <span>Intelligent College Finder</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold">
                2,000+ Colleges Database
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Personalized cutoffs, seat matrix, 360° virtual tours & admission predictions
            </p>
          </div>
        </div>

        {comparedIds.length > 0 && (
          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-black text-xs shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-105 transition-all cursor-pointer flex items-center space-x-1.5"
          >
            <Scale className="w-3.5 h-3.5 text-white" />
            <span>Compare ({comparedIds.length})</span>
          </button>
        )}
      </div>

      {/* Score Predictor Input Section */}
      <PredictorInputCard
        scoreInput={scoreInput}
        onChangeInput={setScoreInput}
        onPredict={() => setVisibleCount(20)}
        totalMatchedCount={top100Personalized.length}
        counts={counts}
      />

      {/* Filter Bar */}
      <CollegeFilterBar
        filterState={filterState}
        onFilterChange={setFilterState}
        onResetFilters={resetFilters}
        totalResultsCount={top100Personalized.length}
      />

      {/* Top 100 Personalized Colleges Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between pt-1">
          <h4 className="text-xs font-black text-white flex items-center space-x-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Top 100 Personalized Colleges for You</span>
          </h4>
          <span className="text-[11px] text-cyan-400 font-bold">
            Showing {visibleColleges.length} of {top100Personalized.length} Matches
          </span>
        </div>

        {visibleColleges.length === 0 ? (
          <div className="p-8 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 text-center space-y-3">
            <Building2 className="w-8 h-8 text-slate-500 mx-auto" />
            <h5 className="font-bold text-sm text-white">No Colleges Match Current Filters</h5>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your max fee range, branch selection, or state filter to explore more options.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-xs cursor-pointer hover:bg-cyan-300"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleColleges.map((rec) => (
              <CollegeCard
                key={rec.college.id}
                recommendation={rec}
                isBookmarked={bookmarkedIds.includes(rec.college.id)}
                isCompared={comparedIds.includes(rec.college.id)}
                onToggleBookmark={handleToggleBookmark}
                onToggleCompare={handleToggleCompare}
                onSelectCollege={setSelectedDetailRec}
                onApplyNow={setSelectedApplyRec}
              />
            ))}
          </div>
        )}

        {/* Show More Pagination Button */}
        {visibleCount < top100Personalized.length && (
          <div className="text-center pt-2">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(top100Personalized.length, prev + 20))}
              className="px-6 py-2.5 rounded-2xl glass-panel border border-cyan-500/30 text-cyan-300 font-extrabold text-xs hover:bg-slate-800 transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              Load More Top Colleges ({top100Personalized.length - visibleCount} Remaining)
            </button>
          </div>
        )}
      </div>

      {/* College Detail Modal */}
      {selectedDetailRec && (
        <CollegeDetailModal
          recommendation={selectedDetailRec}
          onClose={() => setSelectedDetailRec(null)}
          onApplyNow={setSelectedApplyRec}
        />
      )}

      {/* Compare Modal */}
      {isCompareModalOpen && (
        <CollegeCompareModal
          selectedRecommendations={comparedRecommendations}
          onClose={() => setIsCompareModalOpen(false)}
          onRemoveFromCompare={(id) => setComparedIds((prev) => prev.filter((i) => i !== id))}
          onApplyNow={(rec) => {
            setIsCompareModalOpen(false);
            setSelectedApplyRec(rec);
          }}
        />
      )}

      {/* Apply Now Helper Modal */}
      {selectedApplyRec && (
        <ApplyNowModal
          recommendation={selectedApplyRec}
          onClose={() => setSelectedApplyRec(null)}
        />
      )}
    </div>
  );
};
