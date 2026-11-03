import React from 'react';
import { CollegeRecommendation } from '../../types';
import {
  MapPin,
  Building2,
  DollarSign,
  TrendingUp,
  Award,
  Bookmark,
  ChevronRight,
  Sparkles,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface Props {
  recommendation: CollegeRecommendation;
  isBookmarked: boolean;
  isCompared: boolean;
  onToggleBookmark: (collegeId: string) => void;
  onToggleCompare: (collegeId: string) => void;
  onSelectCollege: (recommendation: CollegeRecommendation) => void;
  onApplyNow: (recommendation: CollegeRecommendation) => void;
}

export const CollegeCard: React.FC<Props> = ({
  recommendation,
  isBookmarked,
  isCompared,
  onToggleBookmark,
  onToggleCompare,
  onSelectCollege,
  onApplyNow
}) => {
  const { college, tier, probabilityPercent, openingRank, closingRank, matchedBranch, remainingSeats, applicationDeadline, counsellingRequired } = recommendation;

  // Tier color styling
  const tierBadges = {
    Dream: {
      bg: 'bg-purple-500/15 border-purple-400/40 text-purple-300',
      bar: 'from-purple-500 to-fuchsia-500',
      label: '🎯 Dream College'
    },
    Target: {
      bg: 'bg-blue-500/15 border-blue-400/40 text-blue-300',
      bar: 'from-blue-500 to-cyan-400',
      label: '⚡ Target Fit'
    },
    Safe: {
      bg: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300',
      bar: 'from-emerald-400 to-teal-500',
      label: '🛡️ Safe Backup'
    }
  };

  const currentTierBadge = tierBadges[tier];

  return (
    <div className="w-full rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/50 bg-slate-900/90 p-4 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] text-left flex flex-col justify-between space-y-3">
      {/* Top Banner Row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start space-x-3">
          {/* Photo / Emblem Placeholder */}
          <div className="relative w-12 h-12 rounded-xl bg-slate-950 border border-white/15 overflow-hidden shrink-0 group">
            {college.photos && college.photos[0] ? (
              <img
                src={college.photos[0]}
                alt={college.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-black text-cyan-400 text-xs">
                {college.shortName.slice(0, 3)}
              </div>
            )}
          </div>

          <div>
            {/* Ownership & University Type Pill */}
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span className={`px-2 py-0.5 rounded-full border text-[9px] font-extrabold uppercase ${currentTierBadge.bg}`}>
                {currentTierBadge.label}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/10 text-[9px] font-bold">
                {college.ownership} • {college.universityType}
              </span>
            </div>

            {/* Title */}
            <h4
              onClick={() => onSelectCollege(recommendation)}
              className="font-display font-black text-sm text-white hover:text-cyan-300 cursor-pointer transition-colors line-clamp-1"
            >
              {college.name}
            </h4>

            {/* Location */}
            <p className="text-[11px] text-slate-400 flex items-center space-x-1 mt-0.5">
              <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>{college.location.city}, {college.location.state}</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300 font-bold">NIRF #{college.ranking.nirfOverall}</span>
            </p>
          </div>
        </div>

        {/* Actions: Bookmark & Compare Checkbox */}
        <div className="flex items-center space-x-1 shrink-0">
          <label className="flex items-center space-x-1 text-[10px] text-slate-400 cursor-pointer hover:text-white px-2 py-1 rounded-lg bg-slate-800/80 border border-white/10">
            <input
              type="checkbox"
              checked={isCompared}
              onChange={() => onToggleCompare(college.id)}
              className="rounded bg-slate-900 border-white/20 text-cyan-400 focus:ring-0 cursor-pointer"
            />
            <span className="hidden sm:inline">Compare</span>
          </label>

          <button
            onClick={() => onToggleBookmark(college.id)}
            className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-amber-500/20 text-amber-300 border-amber-400/40'
                : 'bg-slate-800/80 text-slate-400 border-white/10 hover:text-amber-300'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Probability Progress Bar */}
      <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-300 font-bold flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Admission Chance ({matchedBranch})</span>
          </span>
          <span className="font-extrabold text-cyan-300">{probabilityPercent}% Likelihood</span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${currentTierBadge.bar} transition-all duration-500`}
            style={{ width: `${probabilityPercent}%` }}
          />
        </div>

        {/* Cutoff Details Row */}
        <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-slate-400">
          <div>
            <span>Opening Rank: </span>
            <strong className="text-slate-200">{openingRank}</strong>
          </div>
          <div className="text-right">
            <span>Closing Rank: </span>
            <strong className="text-cyan-300">{closingRank}</strong>
          </div>
        </div>
      </div>

      {/* Key Stats Grid: Fees, Placements, Hostel */}
      <div className="grid grid-cols-3 gap-2 py-1 text-left">
        <div className="p-2 rounded-xl bg-slate-800/40 border border-white/5">
          <p className="text-[10px] text-slate-400 font-medium">Annual Fee</p>
          <p className="text-xs font-black text-white">{college.fees.annualTuition}</p>
          <p className="text-[9px] text-slate-500 mt-0.5">Hostel: {college.hostelFees.annualHostelFee}</p>
        </div>

        <div className="p-2 rounded-xl bg-slate-800/40 border border-white/5">
          <p className="text-[10px] text-slate-400 font-medium">Avg Package</p>
          <p className="text-xs font-black text-emerald-400">{college.placements.averagePackage}</p>
          <p className="text-[9px] text-slate-500 mt-0.5">Highest: {college.placements.highestPackage}</p>
        </div>

        <div className="p-2 rounded-xl bg-slate-800/40 border border-white/5">
          <p className="text-[10px] text-slate-400 font-medium">Remaining Seats</p>
          <p className="text-xs font-black text-cyan-300">{remainingSeats} Seats Left</p>
          <p className="text-[9px] text-amber-300 mt-0.5">JoSAA / MCC</p>
        </div>
      </div>

      {/* Footer Meta & Apply Now Action */}
      <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-[10px] text-slate-400">
          <span className="flex items-center space-x-1 text-slate-300 font-semibold">
            <Calendar className="w-3 h-3 text-cyan-400" />
            <span>Deadline: {applicationDeadline}</span>
          </span>
          <span>•</span>
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-bold">
            {counsellingRequired}
          </span>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => onSelectCollege(recommendation)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-white/15 text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1"
          >
            <span>Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onApplyNow(recommendation)}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-extrabold text-xs shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center space-x-1"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
