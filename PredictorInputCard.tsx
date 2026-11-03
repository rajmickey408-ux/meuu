import React, { useState } from 'react';
import { ExamScoreInput, CategoryType } from '../../types';
import { ALL_INDIAN_STATES, POPULAR_BRANCHES } from '../../data/collegeData';
import { Award, SlidersHorizontal, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  scoreInput: ExamScoreInput;
  onChangeInput: (newInput: ExamScoreInput) => void;
  onPredict: () => void;
  totalMatchedCount: number;
  counts: { dream: number; target: number; safe: number };
}

export const PredictorInputCard: React.FC<Props> = ({
  scoreInput,
  onChangeInput,
  onPredict,
  totalMatchedCount,
  counts
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const examsList = [
    'JEE Main',
    'JEE Advanced',
    'BITSAT',
    'CUET',
    'NEET',
    'WBJEE',
    'MHT-CET',
    'COMEDK',
    'KCET',
    'CAT',
    'CLAT'
  ] as const;

  const categoriesList: CategoryType[] = ['General', 'OBC', 'SC', 'ST', 'EWS'];

  const isScoreBased = scoreInput.exam === 'BITSAT' || scoreInput.exam === 'CUET';

  return (
    <div className="w-full glass-panel border border-cyan-500/30 rounded-2xl p-4 bg-slate-900/90 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-left space-y-3">
      {/* Header Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black">
            <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-sm text-white flex items-center space-x-1.5">
              <span>AI Rank & Score Predictor</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold">
                Smart Match
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Enter your rank or score to generate Dream, Target, & Safe admissions
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs flex items-center space-x-1 cursor-pointer"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline font-semibold">{isOpen ? 'Hide Inputs' : 'Edit Score'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="pt-2 border-t border-white/10 space-y-3">
          {/* Row 1: Exam & Score/Rank */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Exam Dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                Select Entrance Exam
              </label>
              <select
                value={scoreInput.exam}
                onChange={(e) =>
                  onChangeInput({ ...scoreInput, exam: e.target.value as ExamScoreInput['exam'] })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {examsList.map((ex) => (
                  <option key={ex} value={ex} className="bg-slate-900 text-white">
                    {ex}
                  </option>
                ))}
              </select>
            </div>

            {/* Rank / Score Input */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                {isScoreBased ? `${scoreInput.exam} Score` : `${scoreInput.exam} All India Rank (AIR)`}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  max={isScoreBased ? 800 : 500000}
                  value={scoreInput.rankOrScore || ''}
                  onChange={(e) =>
                    onChangeInput({ ...scoreInput, rankOrScore: Number(e.target.value) || 0 })
                  }
                  placeholder={isScoreBased ? 'e.g. 320' : 'e.g. 8500'}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white font-bold placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <span className="absolute right-3 top-2.5 text-[10px] text-cyan-400 font-extrabold">
                  {isScoreBased ? 'Marks' : 'AIR'}
                </span>
              </div>
            </div>
          </div>

          {/* Row 2: Category, Home State, Branch */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* Category */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                Category
              </label>
              <select
                value={scoreInput.category}
                onChange={(e) =>
                  onChangeInput({ ...scoreInput, category: e.target.value as CategoryType })
                }
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-900 text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Home State Quota */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                Home State (Quota)
              </label>
              <select
                value={scoreInput.homeState}
                onChange={(e) => onChangeInput({ ...scoreInput, homeState: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {ALL_INDIAN_STATES.map((st) => (
                  <option key={st} value={st} className="bg-slate-900 text-white">
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Branch */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                Preferred Branch
              </label>
              <select
                value={scoreInput.targetBranch || 'All Branches'}
                onChange={(e) => onChangeInput({ ...scoreInput, targetBranch: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
              >
                {POPULAR_BRANCHES.map((br) => (
                  <option key={br} value={br} className="bg-slate-900 text-white">
                    {br}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Trigger Predictor CTA */}
          <div className="pt-1 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-[11px] text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Analyzing cutoffs across 2,000+ colleges</span>
            </div>

            <button
              onClick={onPredict}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Award className="w-4 h-4 text-slate-950" />
              <span>Predict Colleges</span>
            </button>
          </div>
        </div>
      )}

      {/* Summary Pills Tier Counter */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <p className="text-[10px] font-bold text-purple-300 uppercase">🎯 Dream</p>
          <p className="text-sm font-black text-white">{counts.dream} Colleges</p>
          <p className="text-[9px] text-purple-200/70">Probability &lt; 35%</p>
        </div>

        <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-[10px] font-bold text-blue-300 uppercase">⚡ Target</p>
          <p className="text-sm font-black text-white">{counts.target} Colleges</p>
          <p className="text-[9px] text-blue-200/70">Probability 35% - 75%</p>
        </div>

        <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <p className="text-[10px] font-bold text-emerald-300 uppercase">🛡️ Safe</p>
          <p className="text-sm font-black text-white">{counts.safe} Colleges</p>
          <p className="text-[9px] text-emerald-200/70">Probability &gt; 75%</p>
        </div>
      </div>
    </div>
  );
};
