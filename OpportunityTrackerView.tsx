import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEFAULT_OPPORTUNITIES } from '../../../data/careersData';
import { CareerOpportunity, OpportunityCategory, OpportunityStatus } from '../../../types';
import { 
  Briefcase, 
  Search, 
  Plus, 
  ExternalLink, 
  Calendar, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Bookmark, 
  Filter, 
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';

const CATEGORY_TABS: OpportunityCategory[] = [
  'Internships',
  'Jobs',
  'Placements',
  'Hackathons',
  'Competitions',
  'Scholarships',
  'Fellowships',
  'Startup Opportunities'
];

const STATUS_OPTIONS: OpportunityStatus[] = [
  'Saved',
  'Applied',
  'Assessment',
  'Interview',
  'Selected',
  'Rejected'
];

export const OpportunityTrackerView: React.FC = () => {
  const [opportunities, setOpportunities] = useState<CareerOpportunity[]>(DEFAULT_OPPORTUNITIES);
  const [activeCategory, setActiveCategory] = useState<OpportunityCategory>('Internships');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Custom Opportunity Form
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('');
  const [newCategory, setNewCategory] = useState<OpportunityCategory>('Internships');
  const [newLocation, setNewLocation] = useState('Bangalore / Remote');
  const [newStipend, setNewStipend] = useState('₹40,000/mo');
  const [newDeadline, setNewDeadline] = useState('Nov 30, 2024');
  const [newUrl, setNewUrl] = useState('https://careers.google.com');

  const handleStatusChange = (id: string, newStatus: OpportunityStatus) => {
    setOpportunities((prev) =>
      prev.map((opp) => (opp.id === id ? { ...opp, status: newStatus } : opp))
    );
  };

  const handleAddOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newCompany) return;

    const newOpp: CareerOpportunity = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      companyOrOrg: newCompany,
      category: newCategory,
      type: 'Custom Tracked Opportunity',
      location: newLocation,
      stipendOrSalary: newStipend,
      deadline: newDeadline,
      daysRemaining: 30,
      status: 'Saved',
      applyUrl: newUrl,
      skillsRequired: ['Self-Identified Skills'],
      description: 'Added manually to personal opportunity pipeline.',
      isDemoData: false
    };

    setOpportunities((prev) => [newOpp, ...prev]);
    setShowAddModal(false);
    setNewTitle('');
    setNewCompany('');
  };

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesCategory = opp.category === activeCategory;
    const matchesStatus = statusFilter === 'All' || opp.status === statusFilter;
    const matchesSearch = 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.companyOrOrg.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  const getStatusBadgeColor = (status: OpportunityStatus) => {
    switch (status) {
      case 'Saved': return 'bg-slate-700 text-slate-300 border-slate-600';
      case 'Applied': return 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40';
      case 'Assessment': return 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40';
      case 'Interview': return 'bg-purple-500/20 text-purple-300 border-purple-400/40';
      case 'Selected': return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40';
      case 'Rejected': return 'bg-rose-500/20 text-rose-300 border-rose-400/40';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="p-4 rounded-3xl glass-panel border border-teal-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 relative overflow-hidden">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2 text-teal-400 text-xs font-black uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-teal-400" />
            <span>My Opportunities Pipeline</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-bold border border-cyan-400/30">
            Prototype Demo Data
          </span>
        </div>
        <h3 className="font-display font-black text-base text-white">
          Internships, Placements, Hackathons & Competitions Tracker
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Manage your personal application funnel from initial bookmarking through online assessments, interview rounds, and final offers.
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Tracking <strong>{opportunities.length}</strong> opportunities across your pipeline
          </span>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs flex items-center space-x-1 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Opportunity</span>
          </button>
        </div>
      </div>

      {/* Category Tabs (8 Specific Tabs) */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORY_TABS.map((cat) => {
          const count = opportunities.filter((o) => o.category === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 ${
                isActive
                  ? 'bg-teal-500 text-slate-950 font-black shadow-md'
                  : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-white/20'
              }`}
            >
              <span>{cat}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-black ${
                isActive ? 'bg-slate-950 text-teal-300' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search & Status Filter */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="sm:col-span-2 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by role or company..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
          />
        </div>

        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-200 focus:outline-none focus:border-teal-400 cursor-pointer"
          >
            <option value="All">All Statuses</option>
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Opportunities List */}
      <div className="space-y-3">
        {filteredOpportunities.length === 0 ? (
          <div className="p-8 rounded-3xl glass-panel border border-white/10 bg-slate-900/40 text-center space-y-2">
            <Layers className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-sm font-bold text-slate-300">No opportunities in this category yet</p>
            <p className="text-xs text-slate-500">Tap "Add Opportunity" above to track your first application.</p>
          </div>
        ) : (
          filteredOpportunities.map((opp) => (
            <motion.div
              key={opp.id}
              layout
              className="p-4 rounded-3xl glass-panel border border-white/10 bg-slate-900/85 hover:border-teal-500/30 transition-all space-y-3 shadow-lg"
            >
              {/* Header: Title, Org, Status Dropdown */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-display font-black text-sm text-white">
                      {opp.title}
                    </h4>
                    {opp.isDemoData && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[9px] font-bold border border-white/10">
                        Demo Data
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-cyan-300 font-bold mt-0.5">
                    {opp.companyOrOrg}
                  </p>
                </div>

                {/* Status Selector */}
                <div className="relative shrink-0">
                  <select
                    value={opp.status}
                    onChange={(e) => handleStatusChange(opp.id, e.target.value as OpportunityStatus)}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border cursor-pointer focus:outline-none ${getStatusBadgeColor(
                      opp.status
                    )}`}
                  >
                    {STATUS_OPTIONS.map((st) => (
                      <option key={st} value={st} className="bg-slate-950 text-white">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Meta: Location, Compensation, Deadline */}
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{opp.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-emerald-300">{opp.stipendOrSalary}</span>
                </div>
                <div className="flex items-center space-x-1 text-amber-300">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Deadline: {opp.deadline}</span>
                  {opp.daysRemaining && (
                    <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-[9px] font-black ml-1">
                      {opp.daysRemaining}d left
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {opp.description}
              </p>

              {/* Skills Tags & Apply Action */}
              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <div className="flex flex-wrap gap-1">
                  {opp.skillsRequired.map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[9px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={opp.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/30 text-xs font-bold flex items-center space-x-1 transition-colors"
                >
                  <span>Apply / Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Add Custom Opportunity Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-5 rounded-3xl glass-panel border border-cyan-500/40 bg-slate-900 space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-display font-black text-base text-white">
                  Add Custom Opportunity
                </h4>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddOpportunity} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Opportunity Title *</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Backend Engineering Intern"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    placeholder="e.g. Atlassian / Zomato"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as OpportunityCategory)}
                      className="w-full px-2 py-2 rounded-xl bg-slate-950 border border-white/10 text-white"
                    >
                      {CATEGORY_TABS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Stipend / Salary</label>
                    <input
                      type="text"
                      value={newStipend}
                      onChange={(e) => setNewStipend(e.target.value)}
                      placeholder="e.g. ₹50,000/mo"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Location</label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Hyderabad / Remote"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Deadline Date</label>
                    <input
                      type="text"
                      value={newDeadline}
                      onChange={(e) => setNewDeadline(e.target.value)}
                      placeholder="e.g. Dec 15, 2024"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Official Portal URL</label>
                  <input
                    type="url"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black"
                  >
                    Save to Tracker
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
