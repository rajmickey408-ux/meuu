import React, { useState } from 'react';
import { CollegeFilterState, UniversityType } from '../../types';
import { ALL_INDIAN_STATES, POPULAR_BRANCHES } from '../../data/collegeData';
import { Search, Filter, RotateCcw, Building2, ChevronDown, Check } from 'lucide-react';

interface Props {
  filterState: CollegeFilterState;
  onFilterChange: (newState: CollegeFilterState) => void;
  onResetFilters: () => void;
  totalResultsCount: number;
}

export const CollegeFilterBar: React.FC<Props> = ({
  filterState,
  onFilterChange,
  onResetFilters,
  totalResultsCount
}) => {
  const [showExpandedFilters, setShowExpandedFilters] = useState(false);

  const universityTypesList: ('All' | UniversityType)[] = [
    'All',
    'IIT',
    'NIT',
    'IIIT',
    'Central University',
    'State Government',
    'Deemed University',
    'Private University',
    'Medical Institute (AIIMS/JIPMER)',
    'Law University (NLU)'
  ];

  return (
    <div className="w-full glass-panel border border-white/10 rounded-2xl p-3.5 bg-slate-900/80 space-y-3 text-left">
      {/* Top Search & Filter Toggle Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={filterState.searchQuery}
            onChange={(e) => onFilterChange({ ...filterState, searchQuery: e.target.value })}
            placeholder="Search thousands of colleges, courses, cities..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Tier Pills (All, Dream, Target, Safe) */}
        <div className="flex items-center space-x-1 overflow-x-auto scrollbar-none shrink-0 py-0.5">
          {(['All', 'Dream', 'Target', 'Safe'] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => onFilterChange({ ...filterState, categoryFilter: tier })}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                filterState.categoryFilter === tier
                  ? tier === 'Dream'
                    ? 'bg-purple-500 text-white shadow-md'
                    : tier === 'Target'
                    ? 'bg-blue-600 text-white shadow-md'
                    : tier === 'Safe'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-cyan-400 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-300 border border-white/10 hover:bg-slate-800'
              }`}
            >
              {tier === 'All' ? 'All Top 100' : tier}
            </button>
          ))}
        </div>

        {/* Expand Filters Button */}
        <button
          onClick={() => setShowExpandedFilters(!showExpandedFilters)}
          className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 ${
            showExpandedFilters
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40'
              : 'bg-slate-950 text-slate-300 border-white/10 hover:text-white'
          }`}
        >
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span>Filters</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showExpandedFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Expanded Multi-Category Filter Drawer */}
      {showExpandedFilters && (
        <div className="pt-3 border-t border-white/10 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Filter 1: State */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">State</label>
              <select
                value={filterState.selectedState}
                onChange={(e) => onFilterChange({ ...filterState, selectedState: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {ALL_INDIAN_STATES.map((st) => (
                  <option key={st} value={st} className="bg-slate-900 text-white">
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 2: Preferred Branch */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">Branch</label>
              <select
                value={filterState.selectedBranch}
                onChange={(e) => onFilterChange({ ...filterState, selectedBranch: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {POPULAR_BRANCHES.map((br) => (
                  <option key={br} value={br} className="bg-slate-900 text-white">
                    {br}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 3: Ownership (Govt vs Private) */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">Government / Private</label>
              <select
                value={filterState.ownership}
                onChange={(e) =>
                  onFilterChange({ ...filterState, ownership: e.target.value as CollegeFilterState['ownership'] })
                }
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="All" className="bg-slate-900 text-white">All Ownerships</option>
                <option value="Government" className="bg-slate-900 text-white">Government / Central</option>
                <option value="Private" className="bg-slate-900 text-white">Private / Deemed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Filter 4: University Type */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">University Type</label>
              <select
                value={filterState.universityType}
                onChange={(e) =>
                  onFilterChange({ ...filterState, universityType: e.target.value as CollegeFilterState['universityType'] })
                }
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {universityTypesList.map((ut) => (
                  <option key={ut} value={ut} className="bg-slate-900 text-white">
                    {ut}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter 5: Min Placement Salary */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">Min Avg Placement</label>
              <select
                value={filterState.minAvgPlacementLpa}
                onChange={(e) =>
                  onFilterChange({ ...filterState, minAvgPlacementLpa: Number(e.target.value) })
                }
                className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                <option value={0} className="bg-slate-900 text-white">Any Placement Salary</option>
                <option value={5} className="bg-slate-900 text-white">&gt; ₹5 LPA</option>
                <option value={10} className="bg-slate-900 text-white">&gt; ₹10 LPA</option>
                <option value={15} className="bg-slate-900 text-white">&gt; ₹15 LPA</option>
                <option value={20} className="bg-slate-900 text-white">&gt; ₹20 LPA</option>
              </select>
            </div>

            {/* Filter 6: Max Fee Range Slider */}
            <div>
              <div className="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                <span>Max Fee / Year</span>
                <span className="text-cyan-300">
                  {filterState.maxAnnualFee >= 600000 ? 'Any Fee' : `≤ ₹${(filterState.maxAnnualFee / 100000).toFixed(1)} Lakhs`}
                </span>
              </div>
              <input
                type="range"
                min={100000}
                max={600000}
                step={50000}
                value={filterState.maxAnnualFee}
                onChange={(e) =>
                  onFilterChange({ ...filterState, maxAnnualFee: Number(e.target.value) })
                }
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-950 rounded-lg"
              />
            </div>
          </div>

          {/* Row 3: Sort & Hostel Checkbox */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-xs">
            {/* Hostel Available Checkbox */}
            <label className="flex items-center space-x-2 text-slate-300 font-semibold cursor-pointer">
              <input
                type="checkbox"
                checked={filterState.hostelRequired}
                onChange={(e) => onFilterChange({ ...filterState, hostelRequired: e.target.checked })}
                className="rounded bg-slate-950 border-white/20 text-cyan-400 focus:ring-0 cursor-pointer"
              />
              <span>Hostel Facility Required</span>
            </label>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-[11px] font-bold">Sort By:</span>
              <select
                value={filterState.sortBy}
                onChange={(e) =>
                  onFilterChange({ ...filterState, sortBy: e.target.value as CollegeFilterState['sortBy'] })
                }
                className="px-2.5 py-1 rounded-xl bg-slate-950 border border-white/15 text-xs text-cyan-300 font-bold focus:outline-none"
              >
                <option value="probability" className="bg-slate-900 text-white">Admission Probability %</option>
                <option value="nirf" className="bg-slate-900 text-white">NIRF Ranking (Top First)</option>
                <option value="placement" className="bg-slate-900 text-white">Highest Placement Package</option>
                <option value="feesLowToHigh" className="bg-slate-900 text-white">Fees (Low to High)</option>
              </select>

              <button
                onClick={onResetFilters}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400 border border-white/10 transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Counter Sub-Bar */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
        <span>
          Showing <strong className="text-cyan-300">{totalResultsCount}</strong> personalized colleges match your search
        </span>
        {filterState.selectedState !== 'All States' && (
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">
            State: {filterState.selectedState}
          </span>
        )}
      </div>
    </div>
  );
};
