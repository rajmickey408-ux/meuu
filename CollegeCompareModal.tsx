import React from 'react';
import { CollegeRecommendation } from '../../types';
import { X, Award, MapPin, DollarSign, TrendingUp, Building2, Check, ExternalLink } from 'lucide-react';

interface Props {
  selectedRecommendations: CollegeRecommendation[];
  onClose: () => void;
  onRemoveFromCompare: (collegeId: string) => void;
  onApplyNow: (recommendation: CollegeRecommendation) => void;
}

export const CollegeCompareModal: React.FC<Props> = ({
  selectedRecommendations,
  onClose,
  onRemoveFromCompare,
  onApplyNow
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#090E1F] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.2)] text-left overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-display font-extrabold text-sm text-white">
              Side-by-Side College Comparison Matrix ({selectedRecommendations.length}/3 Colleges)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Matrix */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 scrollbar-thin">
          <table className="w-full text-left text-xs border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-3 w-48 bg-slate-950 text-slate-400 font-bold sticky left-0 z-10">
                  Feature / College
                </th>
                {selectedRecommendations.map((rec) => (
                  <th key={rec.college.id} className="p-3 min-w-[220px] bg-slate-900/80 text-white font-extrabold border-l border-white/10 relative">
                    <div className="flex items-start justify-between">
                      <span className="line-clamp-2">{rec.college.name}</span>
                      <button
                        onClick={() => onRemoveFromCompare(rec.college.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-200">
              {/* Row 1: Admission Chance */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-cyan-300 sticky left-0 z-10">
                  Admission Chance
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10">
                    <span className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 font-black">
                      {rec.probabilityPercent}% ({rec.tier})
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Location & NIRF */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  NIRF Rank & Location
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10">
                    <p className="font-bold text-amber-300">NIRF #{rec.college.ranking.nirfOverall}</p>
                    <p className="text-[11px] text-slate-400">{rec.college.location.city}, {rec.college.location.state}</p>
                  </td>
                ))}
              </tr>

              {/* Row 3: Tuition Fee */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  Annual Tuition Fee
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10 font-bold text-white">
                    {rec.college.fees.annualTuition}
                  </td>
                ))}
              </tr>

              {/* Row 4: Hostel Fee */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  Hostel & Mess Fee
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10">
                    <p>{rec.college.hostelFees.annualHostelFee}</p>
                    <p className="text-[10px] text-slate-400">Mess: {rec.college.hostelFees.messCharges}</p>
                  </td>
                ))}
              </tr>

              {/* Row 5: Average Package */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  Average Placement Package
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10 font-black text-emerald-400">
                    {rec.college.placements.averagePackage}
                  </td>
                ))}
              </tr>

              {/* Row 6: Highest Package */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  Highest Package Offered
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10 font-bold text-white">
                    {rec.college.placements.highestPackage}
                  </td>
                ))}
              </tr>

              {/* Row 7: Closing Rank */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  Expected Closing Rank
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10 text-cyan-300 font-mono">
                    {rec.closingRank}
                  </td>
                ))}
              </tr>

              {/* Row 8: Action button */}
              <tr>
                <td className="p-3 font-bold bg-slate-950/80 text-slate-400 sticky left-0 z-10">
                  Apply Now
                </td>
                {selectedRecommendations.map((rec) => (
                  <td key={rec.college.id} className="p-3 border-l border-white/10">
                    <button
                      onClick={() => onApplyNow(rec)}
                      className="w-full px-3 py-1.5 rounded-xl bg-cyan-400 text-slate-950 font-black text-xs hover:bg-cyan-300 transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-900 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 border border-white/15 text-xs font-bold transition-colors cursor-pointer"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};
