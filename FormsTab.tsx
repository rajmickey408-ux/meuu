import React, { useState } from 'react';
import { FileEdit, CheckCircle2, ChevronLeft, Upload, Edit3, ShieldCheck, ArrowRight } from 'lucide-react';
import { UserProfile, ActiveTab } from '../../types';

interface FormsTabProps {
  user: UserProfile | null;
  onNavigate?: (tab: ActiveTab) => void;
}

export const FormsTab: React.FC<FormsTabProps> = ({ user, onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedExam, setSelectedExam] = useState('JEE Main 2025');

  // Form State
  const [fullName, setFullName] = useState(user?.name || 'Harsh Raj');
  const [dob, setDob] = useState('12/03/2008');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [email, setEmail] = useState(user?.email || 'harshraj@gmail.com');
  const [mobile, setMobile] = useState('+91 98765 43210');

  const [tenthBoard, setTenthBoard] = useState('CBSE');
  const [passingYear, setPassingYear] = useState('2024');
  const [percentage, setPercentage] = useState('63.0%');
  const [streamInterested, setStreamInterested] = useState('Science (PCM)');

  const [docsUploaded, setDocsUploaded] = useState({
    marksheet: true,
    photo: true,
    signature: true,
    aadhaar: true,
  });

  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { num: 1, label: 'Select App' },
    { num: 2, label: 'Personal' },
    { num: 3, label: 'Academic' },
    { num: 4, label: 'Upload' },
    { num: 5, label: 'Preview' },
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as any);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as any);
    }
  };

  return (
    <div className="w-full space-y-3.5 text-left pb-4">
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          {currentStep > 1 && !submitted && (
            <button
              onClick={handlePrev}
              className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          <h3 className="font-display font-extrabold text-base text-white flex items-center space-x-1.5">
            <FileEdit className="w-4 h-4 text-cyan-400" />
            <span>Form Filling Step by Step</span>
          </h3>
        </div>
        <span className="text-xs font-bold text-cyan-300">
          Step {currentStep} of 5
        </span>
      </div>

      {/* Progress Dots / Bar */}
      <div className="flex items-center justify-between px-2">
        {steps.map((st) => (
          <div key={st.num} className="flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                currentStep >= st.num
                  ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'bg-slate-800 text-slate-500 border border-white/10'
              }`}
            >
              {st.num}
            </div>
            <span className={`text-[9px] mt-1 ${currentStep === st.num ? 'text-cyan-300 font-bold' : 'text-slate-500'}`}>
              {st.label}
            </span>
          </div>
        ))}
      </div>

      {!submitted ? (
        <div className="glass-panel p-4 rounded-2xl border border-white/10 bg-slate-900/80 space-y-3.5">
          {/* STEP 1: Select Application */}
          {currentStep === 1 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Select Application
              </h4>
              <p className="text-[11px] text-slate-400">What do you want to apply for?</p>
              
              <div className="space-y-2">
                {[
                  { id: 'JEE Main 2025', desc: 'Engineering Entrance Exam' },
                  { id: 'VITEEE 2025', desc: 'Engineering Entrance Exam' },
                  { id: 'DTU B.Tech Admission', desc: 'College Admission' },
                  { id: 'Other Exams & Colleges', desc: 'Browse All' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedExam(item.id)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      selectedExam === item.id
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs block">{item.id}</span>
                      <span className="text-[10px] text-slate-400">{item.desc}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selectedExam === item.id ? 'border-blue-400 bg-blue-500' : 'border-slate-600'
                    }`}>
                      {selectedExam === item.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Save & Continue
              </button>
            </div>
          )}

          {/* STEP 2: Personal Information */}
          {currentStep === 2 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Personal Details
              </h4>
              
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Date of Birth</label>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Gender</label>
                <div className="flex space-x-2">
                  {(['Male', 'Female', 'Other'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        gender === g ? 'bg-blue-600 text-white' : 'bg-slate-950 text-slate-400 border border-white/10'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Save & Continue
              </button>
            </div>
          )}

          {/* STEP 3: Academic Details */}
          {currentStep === 3 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Academic Details
              </h4>
              
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">10th Board</label>
                <select
                  value={tenthBoard}
                  onChange={(e) => setTenthBoard(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                >
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State Board">State Board</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Passing Year</label>
                <input
                  type="text"
                  value={passingYear}
                  onChange={(e) => setPassingYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">10th Percentage</label>
                <input
                  type="text"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-400 block mb-1">Stream Interested In</label>
                <input
                  type="text"
                  value={streamInterested}
                  onChange={(e) => setStreamInterested(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white"
                />
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Save & Continue
              </button>
            </div>
          )}

          {/* STEP 4: Upload Documents */}
          {currentStep === 4 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Upload Documents
              </h4>

              {[
                { label: '10th Marksheet', status: docsUploaded.marksheet },
                { label: 'Photo', status: docsUploaded.photo },
                { label: 'Signature', status: docsUploaded.signature },
                { label: 'Aadhaar Card', status: docsUploaded.aadhaar }
              ].map((doc, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-200">{doc.label}</span>
                  <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Uploaded</span>
                  </div>
                </div>
              ))}

              <button
                onClick={handleNext}
                className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                Save & Continue
              </button>
            </div>
          )}

          {/* STEP 5: Preview & Submit */}
          {currentStep === 5 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Preview Application
              </h4>
              <p className="text-[11px] text-slate-400">Review your details before submission</p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Personal Details</span>
                    <span className="text-white font-bold">{fullName} ({gender})</span>
                  </div>
                  <button onClick={() => setCurrentStep(2)} className="text-blue-400 hover:underline text-[11px]">Edit</button>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Academic Details</span>
                    <span className="text-white font-bold">{tenthBoard} - {percentage}</span>
                  </div>
                  <button onClick={() => setCurrentStep(3)} className="text-blue-400 hover:underline text-[11px]">Edit</button>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Exam / College</span>
                    <span className="text-white font-bold">{selectedExam}</span>
                  </div>
                  <button onClick={() => setCurrentStep(1)} className="text-blue-400 hover:underline text-[11px]">Edit</button>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="confirm-check"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-0.5 accent-blue-500 rounded"
                />
                <label htmlFor="confirm-check" className="text-[11px] text-slate-300 leading-tight cursor-pointer">
                  I confirm that all the details provided are correct.
                </label>
              </div>

              <button
                disabled={!confirmed}
                onClick={() => onNavigate && onNavigate('payments')}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 disabled:opacity-40 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
              >
                Submit & Proceed to Pay
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="p-6 rounded-2xl glass-panel border border-emerald-500/30 bg-slate-900 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display font-extrabold text-base text-white">Application Submitted!</h4>
          <p className="text-xs text-slate-300">Your form for {selectedExam} has been saved.</p>
        </div>
      )}
    </div>
  );
};
