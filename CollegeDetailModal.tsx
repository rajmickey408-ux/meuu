import React, { useState } from 'react';
import { CollegeRecommendation, VirtualCampusHotspot } from '../../types';
import {
  X,
  MapPin,
  Building2,
  Award,
  Globe,
  TrendingUp,
  BookOpen,
  Coffee,
  CheckCircle2,
  XCircle,
  Star,
  DollarSign,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Compass,
  Zap,
  Activity,
  ArrowUpRight
} from 'lucide-react';

interface Props {
  recommendation: CollegeRecommendation;
  onClose: () => void;
  onApplyNow: (recommendation: CollegeRecommendation) => void;
}

export const CollegeDetailModal: React.FC<Props> = ({
  recommendation,
  onClose,
  onApplyNow
}) => {
  const { college, tier, probabilityPercent, openingRank, closingRank, matchedBranch, remainingSeats } = recommendation;

  const [activeTab, setActiveTab] = useState<'overview' | 'virtualTour' | 'cutoffs' | 'placements' | 'seatMatrix' | 'reviews' | 'scholarships'>('overview');
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<VirtualCampusHotspot | null>(
    college.virtualCampusTour?.hotspots[0] || null
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090E1F] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.2)] text-left overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-display font-extrabold text-sm text-white line-clamp-1">
              {college.name}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Main Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-cyan-500/30">
          {/* Photos Gallery & Hero Header */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950">
            {/* Main Image */}
            <div className="relative h-48 sm:h-64 w-full">
              <img
                src={college.photos[activePhotoIdx] || college.photos[0]}
                alt={college.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090E1F] via-[#090E1F]/40 to-transparent" />

              {/* Badges Over Image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-black backdrop-blur-md">
                  NIRF Rank #{college.ranking.nirfOverall}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-200 border border-white/20 text-xs font-bold backdrop-blur-md">
                  {college.ownership} • {college.universityType}
                </span>
              </div>

              {/* Title & Location overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <h2 className="font-display font-black text-xl text-white drop-shadow-md">
                  {college.name}
                </h2>
                <p className="text-xs text-slate-300 flex items-center space-x-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{college.location.address}</span>
                </p>
              </div>
            </div>

            {/* Photo Thumbnails */}
            {college.photos.length > 1 && (
              <div className="flex items-center space-x-2 p-2 bg-slate-900/90 overflow-x-auto scrollbar-none border-t border-white/10">
                {college.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activePhotoIdx === idx ? 'border-cyan-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Predictor Match Summary Box */}
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 grid grid-cols-1 sm:grid-cols-4 gap-3 text-left">
            <div>
              <p className="text-[10px] text-cyan-300 font-bold uppercase">Admission Probability</p>
              <p className="text-lg font-black text-white">{probabilityPercent}% ({tier} Fit)</p>
              <p className="text-[10px] text-slate-400">{matchedBranch}</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Opening Rank</p>
              <p className="text-sm font-bold text-slate-200">{openingRank}</p>
              <p className="text-[10px] text-slate-400">Previous Year Cutoff</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Closing Rank</p>
              <p className="text-sm font-bold text-cyan-300">{closingRank}</p>
              <p className="text-[10px] text-slate-400">Previous Year Cutoff</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-medium">Remaining Seats</p>
              <p className="text-sm font-bold text-amber-300">{remainingSeats} Seats Available</p>
              <p className="text-[10px] text-slate-400">{college.counsellingRequired}</p>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center space-x-1.5 border-b border-white/10 pb-2 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: 'Overview & Facilities' },
              { id: 'virtualTour', label: '360° Virtual Tour' },
              { id: 'cutoffs', label: 'Cutoffs & Admission' },
              { id: 'placements', label: 'Placements' },
              { id: 'seatMatrix', label: 'Seat Matrix' },
              { id: 'reviews', label: 'Reviews (Pros & Cons)' },
              { id: 'scholarships', label: 'Scholarships' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === t.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW & FACILITIES */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Overview Text */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-2">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>College Overview</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {college.overview}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400">Established:</span>{' '}
                    <strong className="text-white">{college.establishedYear}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Accreditation:</span>{' '}
                    <strong className="text-cyan-300">{college.accreditation}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Campus Size:</span>{' '}
                    <strong className="text-white">{college.location.campusAreaAcres} Acres</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Rating:</span>{' '}
                    <strong className="text-amber-300">{college.studentReviews.rating} ⭐ ({college.studentReviews.totalReviews} Reviews)</strong>
                  </div>
                </div>
              </div>

              {/* Courses & Branches */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Courses Offered & Specialization Branches</span>
                </h4>

                <div className="flex flex-wrap gap-1.5">
                  {college.courses.map((course, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold">
                      {course}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-[11px] font-bold text-slate-400 mb-1.5">Popular Branches:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {college.branches.map((branch, i) => (
                      <div key={i} className="flex items-center space-x-1.5 p-2 rounded-xl bg-slate-950 border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{branch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fees & Hostel Fees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-2">
                  <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    <span>Tuition Fee Structure</span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Annual Tuition:</span>
                      <span className="font-bold text-white">{college.fees.annualTuition}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Total Course Fee:</span>
                      <span className="font-bold text-emerald-400">{college.fees.totalCourseFee}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Fee Tier Category:</span>
                      <span className="font-bold text-cyan-300">{college.fees.feeTier}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-2">
                  <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                    <Coffee className="w-4 h-4 text-amber-400" />
                    <span>Hostel & Mess Charges</span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Annual Hostel Fee:</span>
                      <span className="font-bold text-white">{college.hostelFees.annualHostelFee}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Mess Charges:</span>
                      <span className="font-bold text-slate-300">{college.hostelFees.messCharges}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">AC Accommodation:</span>
                      <span className="font-bold text-cyan-300">{college.hostelFees.acAvailable ? 'Available' : 'Non-AC only'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campus Facilities Grid */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Campus Facilities & Infrastructure</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {college.campusFacilities.map((fac, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-1">
                      <p className="text-xs font-bold text-cyan-300 flex items-center space-x-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{fac.name}</span>
                      </p>
                      <p className="text-[11px] text-slate-400">{fac.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: VIRTUAL CAMPUS TOUR */}
          {activeTab === 'virtualTour' && (
            <div className="space-y-4 text-left">
              <div className="p-4 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                      <Compass className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span>{college.virtualCampusTour.tourTitle}</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Explore key campus landmarks and infrastructure hotspots virtually
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-[10px] font-bold">
                    360° Interactive Preview
                  </span>
                </div>

                {/* Hotspot Preview Frame */}
                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950">
                  <img
                    src={selectedHotspot?.imageUrl || college.virtualCampusTour.previewImage}
                    alt={selectedHotspot?.name || 'Campus'}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                  {/* Hotspot Info overlay */}
                  <div className="absolute bottom-3 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/15">
                    <p className="text-xs font-extrabold text-cyan-300">
                      📍 {selectedHotspot?.name || 'Main Campus Gateway'}
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {selectedHotspot?.description || 'Explore administrative blocks, libraries, and hostels.'}
                    </p>
                  </div>
                </div>

                {/* Hotspots Selector Buttons */}
                {college.virtualCampusTour.hotspots.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-bold text-slate-300">Select Landmark Hotspot:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {college.virtualCampusTour.hotspots.map((hotspot, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedHotspot(hotspot)}
                          className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                            selectedHotspot?.name === hotspot.name
                              ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                              : 'bg-slate-950 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <p className="line-clamp-1">{hotspot.name}</p>
                          <p className="text-[10px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                            {hotspot.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: CUTOFFS & ADMISSION PROCESS */}
          {activeTab === 'cutoffs' && (
            <div className="space-y-4">
              {/* Previous Year Cutoffs Table */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Previous Year Cutoffs (Opening & Closing Ranks)</span>
                </h4>

                <div className="overflow-x-auto border border-white/10 rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 border-b border-white/10">
                      <tr>
                        <th className="p-2.5">Exam</th>
                        <th className="p-2.5">Branch</th>
                        <th className="p-2.5">Category</th>
                        <th className="p-2.5">Year</th>
                        <th className="p-2.5">Opening Rank</th>
                        <th className="p-2.5">Closing Rank</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {college.previousYearCutoffs.map((cutoff, i) => (
                        <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                          <td className="p-2.5 font-bold text-cyan-300">{cutoff.examName}</td>
                          <td className="p-2.5">{cutoff.branch}</td>
                          <td className="p-2.5 font-semibold text-slate-400">{cutoff.category}</td>
                          <td className="p-2.5">{cutoff.year}</td>
                          <td className="p-2.5 font-mono text-emerald-400">AIR {cutoff.openingRank}</td>
                          <td className="p-2.5 font-mono text-cyan-300">AIR {cutoff.closingRank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Admission Process Steps */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Step-by-Step Admission Procedure</span>
                </h4>

                <div className="space-y-2">
                  {college.admissionProcess.map((step) => (
                    <div key={step.step} className="p-3 rounded-xl bg-slate-950 border border-white/10 flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-xs flex items-center justify-center shrink-0 border border-cyan-400/30">
                        {step.step}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{step.title}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PLACEMENTS */}
          {activeTab === 'placements' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-left">
                  <p className="text-[10px] text-emerald-300 font-bold uppercase">Highest Package Offered</p>
                  <p className="text-xl font-black text-white">{college.placements.highestPackage}</p>
                  <p className="text-[10px] text-slate-400">International / Top Domestic</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-left">
                  <p className="text-[10px] text-cyan-300 font-bold uppercase">Average Package</p>
                  <p className="text-xl font-black text-white">{college.placements.averagePackage}</p>
                  <p className="text-[10px] text-slate-400">Across all B.Tech/Degrees</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-left">
                  <p className="text-[10px] text-purple-300 font-bold uppercase">Placement Rate</p>
                  <p className="text-xl font-black text-white">{college.placements.placementPercentage}%</p>
                  <p className="text-[10px] text-slate-400">Median: {college.placements.medianPackage}</p>
                </div>
              </div>

              {/* Top Recruiters */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-2">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Top Recruiting Companies</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {college.placements.topRecruiters.map((rec, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-white/10 text-xs font-bold text-slate-200">
                      💼 {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SEAT MATRIX */}
          {activeTab === 'seatMatrix' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Branch-Wise & Category Seat Matrix</span>
                </h4>

                <div className="space-y-3">
                  {college.seatMatrix.map((sm, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-2 text-xs">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="font-bold text-white">{sm.branch}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                          {sm.remainingSeats} / {sm.totalSeats} Seats Remaining
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                        {sm.categorySeats.map((cs, i) => (
                          <span key={i} className="px-2 py-1 rounded bg-slate-900 border border-white/5 text-slate-300">
                            {cs.category}: <strong>{cs.count} Seats</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: REVIEWS (PROS & CONS) */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Pros List */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2 text-left">
                  <h4 className="font-bold text-xs text-emerald-300 flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Key Pros & Highlights</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {college.studentReviews.pros.map((pro, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons List */}
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-2 text-left">
                  <h4 className="font-bold text-xs text-rose-300 flex items-center space-x-1">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>Considerations & Drawbacks</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {college.studentReviews.cons.map((con, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Student Verified Reviews */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
                <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Verified Student Reviews ({college.studentReviews.totalReviews})</span>
                </h4>

                <div className="space-y-2">
                  {college.studentReviews.reviewsList.map((rev) => (
                    <div key={rev.id} className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-1 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">{rev.author} ({rev.branch} {rev.batch})</span>
                        <span className="text-amber-300 font-bold">{rev.rating} ⭐</span>
                      </div>
                      <p className="font-bold text-cyan-300">{rev.title}</p>
                      <p className="text-slate-300">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: SCHOLARSHIPS */}
          {activeTab === 'scholarships' && (
            <div className="p-4 rounded-2xl glass-panel border border-white/10 bg-slate-900/60 space-y-3">
              <h4 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Scholarships & Financial Assistance Programs</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {college.scholarships.map((sch, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-1 text-xs text-left">
                    <p className="font-bold text-cyan-300">{sch.title}</p>
                    <p className="text-slate-400">Eligibility: {sch.eligibility}</p>
                    <p className="text-emerald-400 font-semibold">Benefit: {sch.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-5 py-3.5 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <a
            href={college.officialWebsite}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-cyan-400 hover:underline flex items-center space-x-1 font-bold"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Visit Official Website ({college.officialWebsite})</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-white/15 text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onApplyNow(recommendation);
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <span>Initiate Admission Application</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
