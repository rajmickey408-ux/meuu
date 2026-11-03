import React, { useState } from 'react';
import { CollegeRecommendation } from '../../types';
import { X, CheckCircle2, ShieldCheck, ArrowUpRight, Calendar, Layers, FileText, Sparkles } from 'lucide-react';

interface Props {
  recommendation: CollegeRecommendation;
  onClose: () => void;
}

export const ApplyNowModal: React.FC<Props> = ({ recommendation, onClose }) => {
  const { college, matchedBranch, counsellingRequired, applicationDeadline } = recommendation;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Harsh Raj',
    email: 'harshraj@gmail.com',
    phone: '+91 98765 43210',
    category: 'General',
    score: '8500 AIR',
    preferredBranch: matchedBranch
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#090E1F] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.2)] text-left overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-display font-extrabold text-sm text-white">
              Instant Application Assistant
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[80vh] scrollbar-thin">
          {/* Target College Card */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-cyan-500/30 space-y-2">
            <h3 className="font-display font-black text-base text-white">{college.name}</h3>
            <p className="text-xs text-cyan-300 font-bold">{matchedBranch}</p>
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">
                Counselling: {counsellingRequired}
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                Deadline: {applicationDeadline}
              </span>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="font-display font-extrabold text-base text-white">Application Pre-Registration Complete!</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your application details for <strong className="text-cyan-300">{college.name}</strong> have been linked to your MEUU Applications Tracker.
              </p>
              <div className="pt-2">
                <a
                  href={college.applyUrl || college.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-black text-xs cursor-pointer shadow-lg hover:scale-105 transition-all"
                >
                  <span>Proceed to {counsellingRequired} Portal</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-xs text-slate-300">
                Confirm your student profile details to initiate official counselling registration & auto-fill documents:
              </p>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">Full Student Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Document Auto-Pull Info */}
              <div className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-1 text-xs">
                <p className="font-bold text-cyan-300 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Vault Documents Linked:</span>
                </p>
                <ul className="text-[11px] text-slate-400 space-y-0.5 list-disc list-inside">
                  <li>10th / 12th Marksheet (Verified PDF)</li>
                  <li>JEE / NEET / BITSAT Admit Card & Scorecard</li>
                  <li>Category Certificate & Domicile Proof</li>
                </ul>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center justify-end space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Pre-Register & Track Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
