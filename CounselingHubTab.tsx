import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_COUNSELING_PORTALS } from '../../data/counselingData';
import { CounselingPortal, ActiveTab } from '../../types';
import { 
  Building2, 
  Search, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  CreditCard, 
  ExternalLink, 
  ChevronRight, 
  Info, 
  Sparkles, 
  ListOrdered, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Lock,
  ArrowRight
} from 'lucide-react';

interface CounselingHubTabProps {
  onNavigate?: (tab: ActiveTab) => void;
}

export const CounselingHubTab: React.FC<CounselingHubTabProps> = ({ onNavigate }) => {
  const [selectedPortalId, setSelectedPortalId] = useState<string>('josaa');
  const [activeSection, setActiveSection] = useState<
    | 'eligibility'
    | 'registration'
    | 'documents'
    | 'dates'
    | 'choices'
    | 'allotment'
    | 'fee'
    | 'reporting'
    | 'faqs'
  >('eligibility');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredPortals = ALL_COUNSELING_PORTALS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.badge.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPortal: CounselingPortal = 
    ALL_COUNSELING_PORTALS.find(p => p.id === selectedPortalId) || ALL_COUNSELING_PORTALS[0];

  const SECTIONS = [
    { id: 'eligibility', label: 'Eligibility', icon: Info },
    { id: 'registration', label: 'Registration', icon: FileText },
    { id: 'documents', label: 'Required Documents', icon: ShieldCheck },
    { id: 'dates', label: 'Important Dates', icon: Calendar },
    { id: 'choices', label: 'Choice Filling', icon: ListOrdered },
    { id: 'allotment', label: 'Seat Allotment', icon: Layers },
    { id: 'fee', label: 'Fee Payment', icon: CreditCard },
    { id: 'reporting', label: 'Reporting', icon: MapPin },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle }
  ] as const;

  return (
    <div className="w-full space-y-4 text-left pb-12">
      {/* Header Banner */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold border border-cyan-400/30 uppercase tracking-wider flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Central & State Hub</span>
              </span>
            </div>
            <h2 className="font-display font-black text-xl text-white mt-1">
              Counselling Hub 2025
            </h2>
            <p className="text-xs text-slate-300 mt-0.5 max-w-md">
              Complete guide for JoSAA, CSAB, UPTAC, COMEDK, MHT CET, WBJEE, KCET, MCC & State Counselling.
            </p>
          </div>
          <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 items-center justify-center text-cyan-300 shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search JoSAA, CSAB, UPTAC, COMEDK, MHT CET, WBJEE, KCET, MCC..."
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/80 transition-colors"
        />
      </div>

      {/* Horizontal Body Selector Pills */}
      <div className="w-full flex items-center space-x-2 overflow-x-auto pb-1.5 scrollbar-none">
        {filteredPortals.map((portal) => {
          const isSelected = portal.id === selectedPortalId;
          return (
            <button
              key={portal.id}
              onClick={() => {
                setSelectedPortalId(portal.id);
                setActiveSection('eligibility');
              }}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-[1.02]'
                  : 'glass-panel text-slate-300 border-white/10 hover:border-cyan-400/40 hover:text-white bg-slate-900/80'
              }`}
            >
              <span className="text-sm">{portal.logo}</span>
              <span>{portal.name}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Counselling Portal Overview Card */}
      <div className="p-4 rounded-3xl glass-panel border border-white/10 bg-slate-900/90 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl">{currentPortal.logo}</span>
              <h3 className="font-display font-black text-lg text-white">
                {currentPortal.fullName}
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {currentPortal.description}
            </p>
          </div>
          <a
            href={currentPortal.registration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-[11px] font-bold flex items-center space-x-1 shrink-0 transition-colors"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Badges & Quotas */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/10 text-[11px]">
          <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-white/10 font-medium">
            🏫 {currentPortal.participatingColleges}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-bold">
            Status: {currentPortal.registration.status}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-500/30 font-medium">
            Exams: {currentPortal.targetExams.join(', ')}
          </span>
        </div>
      </div>

      {/* 9 Feature Detail Tabs Bar */}
      <div className="w-full flex items-center space-x-1.5 overflow-x-auto pb-1.5 scrollbar-none">
        {SECTIONS.map((sec) => {
          const IconComp = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md font-extrabold border border-blue-400'
                  : 'bg-slate-900 text-slate-300 border border-white/10 hover:text-white hover:bg-slate-800'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
              <span>{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* Section Content Display Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedPortalId}-${activeSection}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="p-4 rounded-3xl glass-panel border border-white/10 bg-slate-900/95 space-y-4 shadow-xl"
        >
          {/* 1. ELIGIBILITY */}
          {activeSection === 'eligibility' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Info className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Eligibility Criteria for {currentPortal.name}
                </h4>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs text-slate-200 leading-relaxed space-y-2">
                <p>{currentPortal.eligibility}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs space-y-1">
                <span className="font-bold text-cyan-300 uppercase tracking-wider text-[10px] block">Target Qualifying Exams</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentPortal.targetExams.map((exam) => (
                    <span key={exam} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-400/30 text-white font-bold">
                      {exam}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. REGISTRATION */}
          {activeSection === 'registration' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-blue-400">
                  <FileText className="w-5 h-5" />
                  <h4 className="font-display font-extrabold text-sm text-white">
                    Registration Procedure
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold">
                  Last Date: {currentPortal.registration.lastDate}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  Step-by-Step Registration Guide
                </span>
                <div className="space-y-2 pt-1">
                  {currentPortal.registration.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-blue-600/30 text-cyan-300 border border-cyan-400/40 text-[10px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Registration Fee</span>
                <span className="font-extrabold text-cyan-300">{currentPortal.registration.fee}</span>
              </div>

              <a
                href={currentPortal.registration.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
              >
                <span>Go to Official Registration Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* 3. REQUIRED DOCUMENTS */}
          {activeSection === 'documents' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Mandatory Document Verification Checklist
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {currentPortal.requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center space-x-3 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{doc}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs flex items-center space-x-2">
                <Info className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Ensure category and income certificates are issued in the current financial year.</span>
              </div>
            </div>
          )}

          {/* 4. IMPORTANT DATES */}
          {activeSection === 'dates' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-amber-400">
                <Calendar className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Schedule & Important Milestones
                </h4>
              </div>

              <div className="space-y-2">
                {currentPortal.importantDates.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border flex items-center justify-between text-xs transition-all ${
                      item.isHot
                        ? 'bg-gradient-to-r from-amber-500/10 via-slate-950 to-amber-950/30 border-amber-500/40'
                        : 'bg-slate-950/80 border-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Clock className={`w-4 h-4 ${item.isHot ? 'text-amber-400 animate-pulse' : 'text-slate-400'}`} />
                      <span className="font-bold text-slate-100">{item.event}</span>
                    </div>
                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${
                      item.isHot ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-cyan-300'
                    }`}>
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. CHOICE FILLING */}
          {activeSection === 'choices' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-purple-400">
                <ListOrdered className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Choice Filling & Locking Rules
                </h4>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Max Choice Limit:</span>
                  <span className="font-bold text-purple-300">{currentPortal.choiceFilling.maxChoices}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Mock Allotment Date:</span>
                  <span className="font-bold text-cyan-300">{currentPortal.choiceFilling.mockSeatAllotmentDate}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span className="text-slate-400">Choice Lock Deadline:</span>
                  <span className="font-extrabold text-amber-400">{currentPortal.choiceFilling.lockDeadline}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                <span className="text-[10px] text-purple-300 uppercase font-bold tracking-wider block">
                  MEUU AI Strategic Advice
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {currentPortal.choiceFilling.strategy}
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {currentPortal.choiceFilling.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 6. SEAT ALLOTMENT */}
          {activeSection === 'allotment' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Layers className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Seat Allotment Rounds & Results
                </h4>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Total Rounds:</span>
                  <span className="font-bold text-cyan-300">{currentPortal.seatAllotment.roundsCount} Rounds</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Allotment Algorithm:</span>
                  <span className="font-bold text-white">{currentPortal.seatAllotment.allotmentMethod}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={currentPortal.seatAllotment.checkResultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-400/40 text-cyan-200 text-xs font-bold flex items-center justify-between transition-all"
                >
                  <span>Check Allotment Result</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href={currentPortal.seatAllotment.prevYearCutoffsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-400/40 text-purple-200 text-xs font-bold flex items-center justify-between transition-all"
                >
                  <span>View Opening/Closing Ranks</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* 7. FEE PAYMENT */}
          {activeSection === 'fee' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-teal-400">
                <CreditCard className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Seat Acceptance & Payment Structure
                </h4>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-950 to-slate-950 border border-teal-500/30 text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Seat Acceptance Deposit:</span>
                  <span className="font-black text-sm text-teal-300">{currentPortal.feePayment.seatAcceptanceFee}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-2 text-slate-300">
                  <span className="text-slate-400">Accepted Modes:</span>
                  <span className="font-bold text-white">{currentPortal.feePayment.paymentModes.join(', ')}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-amber-400 text-[10px] uppercase tracking-wider block">Refund & Withdrawal Policy</span>
                <p>{currentPortal.feePayment.refundPolicy}</p>
              </div>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('payments')}
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <span>Pay Counselling / Seat Fee via MEUU Secure Pay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {/* 8. REPORTING */}
          {activeSection === 'reporting' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400">
                <MapPin className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Reporting Protocol & Document Submission
                </h4>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-white/10 text-xs text-slate-200">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Mode of Reporting</span>
                <span className="font-bold text-cyan-300 block text-sm mt-0.5">{currentPortal.reporting.mode}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Reporting Instructions</span>
                <div className="space-y-1.5">
                  {currentPortal.reporting.instructions.map((inst, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 9. FAQS */}
          {activeSection === 'faqs' && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-indigo-400">
                <HelpCircle className="w-5 h-5" />
                <h4 className="font-display font-extrabold text-sm text-white">
                  Frequently Asked Questions
                </h4>
              </div>

              <div className="space-y-2">
                {currentPortal.faqs.map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-slate-950/80 border border-white/10 overflow-hidden text-xs transition-all"
                    >
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left font-bold text-white flex justify-between items-center cursor-pointer hover:bg-slate-900"
                      >
                        <span className="pr-2">{faq.question}</span>
                        <ChevronRight className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-slate-300 leading-relaxed border-t border-white/5 bg-slate-900/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
