import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile, ActiveTab } from '../../types';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Edit3, 
  CheckCircle2, 
  FileText, 
  Upload, 
  Eye, 
  Trash2, 
  Target, 
  Building2, 
  Compass, 
  TrendingUp, 
  Bookmark, 
  Award, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Receipt, 
  RefreshCw, 
  Bell, 
  Lock, 
  Key, 
  Smartphone, 
  Shield, 
  Laptop, 
  Moon, 
  Sun, 
  Globe, 
  HelpCircle, 
  MessageSquare, 
  AlertTriangle, 
  Heart, 
  Info, 
  LogOut, 
  Sparkles, 
  ChevronRight, 
  X, 
  Check, 
  Star, 
  ExternalLink,
  Plus,
  ChevronDown,
  QrCode,
  Scan,
  Copy,
  Download,
  Share2
} from 'lucide-react';

interface ProfileTabProps {
  user: UserProfile | null;
  onNavigate?: (tab: ActiveTab) => void;
  onUpdateUser?: (updated: UserProfile) => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ user, onNavigate, onUpdateUser }) => {
  // Local editable state initialized with user prop or rich fallback defaults
  const [profile, setProfile] = useState<UserProfile>({
    name: user?.name || 'Harsh Sharma',
    email: user?.email || 'harsh.sharma2026@gmail.com',
    phone: user?.phone || '+91 98765 43210',
    currentClass: user?.currentClass || 'Class 12 (PCM)',
    completionPercentage: user?.completionPercentage || 92,
    avatarUrl: user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    targetExam: user?.targetExam || 'JEE Advanced & BITSAT 2026',
    dreamCollege: user?.dreamCollege || 'IIT Bombay / BITS Pilani',
    preferredBranch: user?.preferredBranch || 'Computer Science & Engineering',
    isEmailVerified: true,
    isPhoneVerified: true,
    twoFactorEnabled: true,
  });

  // Settings states
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'English' | 'Hindi' | 'Hinglish' | 'Tamil' | 'Telugu'>('English');
  const [notifications, setNotifications] = useState({
    examAlerts: true,
    collegeUpdates: true,
    scholarshipUpdates: true,
  });

  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isVerifyingQR, setIsVerifyingQR] = useState(false);
  const [qrScanResult, setQrScanResult] = useState<{ verified: boolean; message: string; timestamp: string } | null>(null);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{ id: string; name: string; status: string; date: string } | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isDeleteAccountDialogOpen, setIsDeleteAccountDialogOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Document Vault Items
  const [documents, setDocuments] = useState([
    { id: '1', name: 'Aadhaar Card', category: 'Identity', status: 'Verified', date: '12 Jan 2025' },
    { id: '2', name: 'PAN Card', category: 'Identity', status: 'Verified', date: '15 Jan 2025' },
    { id: '3', name: 'Class 10th Marksheet', category: 'Academic', status: 'Verified', date: '10 Feb 2025' },
    { id: '4', name: 'Class 12th Marksheet / Admit Card', category: 'Academic', status: 'Pending Review', date: '01 Mar 2025' },
    { id: '5', name: 'JEE Main Scorecard 2025', category: 'Scorecard', status: 'Verified', date: '18 Apr 2025' },
    { id: '6', name: 'Passport-size Photos (Recent)', category: 'Photo', status: 'Uploaded', date: '20 May 2025' },
  ]);

  // Edit profile form state
  const [editForm, setEditForm] = useState({ ...profile });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveProfile = () => {
    setProfile(editForm);
    if (onUpdateUser) onUpdateUser(editForm);
    setIsEditModalOpen(false);
    triggerToast('Profile updated successfully!');
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    setSelectedDoc(null);
    triggerToast('Document deleted from secure vault');
  };

  const handleUploadDocument = () => {
    const newDoc = {
      id: Date.now().toString(),
      name: 'Category Certificate (OBC-NCL)',
      category: 'Certificate',
      status: 'Verified',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    };
    setDocuments((prev) => [newDoc, ...prev]);
    triggerToast('New document uploaded and encrypted successfully!');
  };

  const handleSimulateScanQR = () => {
    setIsVerifyingQR(true);
    setQrScanResult(null);
    setTimeout(() => {
      setIsVerifyingQR(false);
      setQrScanResult({
        verified: true,
        message: `Identity & Document Vault Verified for ${profile.name} (ID: MEUU-2026-9842-IN). AES-256 HMAC digital signature matches official records.`,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      });
      triggerToast('QR Code Scanned! Student Identity Verified 100%');
    }, 1600);
  };

  const faqs = [
    {
      q: 'How does MEUU AI calculate College Admission Cutoffs?',
      a: 'MEUU AI cross-analyzes historical 5-year JoSAA, CSAB, and State Counselling closing ranks with live category percentile models.',
    },
    {
      q: 'Is my Document Vault encrypted?',
      a: 'Yes, all files are encrypted with AES-256 bit encryption and verified with automated watermark protection for form filling.',
    },
    {
      q: 'How do I claim MEUU AI Pro Scholarship guidance?',
      a: 'Navigate to the Scholarships tab or click on your Premium Membership card to apply directly with pre-filled documents.',
    },
    {
      q: 'Can I change my preferred engineering stream after Class 12?',
      a: 'Absolutely! Use the Stream Selector module anytime to evaluate PCM, PCB, Commerce, or Interdisciplinary paths.',
    },
  ];

  return (
    <div className="w-full space-y-4 text-left pb-16">
      
      {/* Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-cyan-500 text-slate-950 font-black text-xs shadow-2xl flex items-center space-x-2 border border-cyan-300"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOP USER PROFILE HEADER CARD */}
      <div className="p-5 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            {/* Circular Profile Photo with Ring & Badge */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-xl">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-full border-2 border-slate-950"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-slate-950 shadow-md">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </div>

            {/* Profile Info */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h2 className="font-display font-black text-xl text-white tracking-tight">
                  {profile.name}
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold border border-cyan-400/30">
                  PRO
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profile.currentClass}</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-400">
                <span className="flex items-center space-x-1">
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>{profile.email}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Phone className="w-3 h-3 text-slate-500" />
                  <span>{profile.phone}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={() => {
              setEditForm({ ...profile });
              setIsEditModalOpen(true);
            }}
            className="self-end sm:self-center px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold border border-cyan-500/30 hover:border-cyan-400 flex items-center space-x-1.5 cursor-pointer transition-all shadow-md"
          >
            <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Profile Completion Bar */}
        <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-bold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Profile Completion</span>
            </span>
            <span className="font-mono font-black text-cyan-300">
              {profile.completionPercentage}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-950 border border-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${profile.completionPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
            />
          </div>
          <p className="text-[10px] text-slate-400">
            Keep your profile 100% updated for instant error-free form submissions & AI college match precision.
          </p>
        </div>
      </div>

      {/* 🪪 STUDENT DIGITAL ID CARD WITH SCANNER QR CODE */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-400/40 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 relative overflow-hidden shadow-2xl space-y-3">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-display font-black text-sm text-white tracking-wide">MEUU DIGITAL STUDENT ID</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-extrabold uppercase flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>AI VERIFIED</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono">ID: MEUU-2026-9842-IN • Encrypted Document Verification QR</p>
            </div>
          </div>

          <button
            onClick={() => setIsIdCardModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-black flex items-center space-x-2 shadow-lg cursor-pointer transition-transform active:scale-95 shrink-0 self-start sm:self-auto"
          >
            <Scan className="w-4 h-4" />
            <span>Scan / Verify ID Pass</span>
          </button>
        </div>

        {/* Digital ID Card Preview Surface */}
        <div 
          onClick={() => setIsIdCardModalOpen(true)}
          className="p-3.5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer transition-all group shadow-inner"
        >
          <div className="flex items-center space-x-3.5">
            <div className="relative shrink-0">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-12 h-12 rounded-2xl object-cover border-2 border-cyan-400/60 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center text-slate-950">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
            </div>

            <div className="text-left space-y-0.5">
              <span className="font-black text-sm text-white group-hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                <span>{profile.name}</span>
                <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">CLASS 12</span>
              </span>
              <p className="text-xs text-slate-300 font-medium">{profile.currentClass} • {profile.targetExam}</p>
              <p className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>6 Documents Verified in Secure Vault</span>
              </p>
            </div>
          </div>

          {/* Scannable Micro QR Box */}
          <div className="flex items-center justify-between sm:justify-end space-x-3 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-0">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-400 font-mono block">SECURE QR PASS</span>
              <span className="text-[9px] text-cyan-400 font-bold block">TAP TO EXPAND & SCAN</span>
            </div>

            <div className="p-1.5 rounded-xl bg-white text-slate-950 shadow-md group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-4h2v2h-2v-2zm2 4h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-2h2v2h-2v-2zm0-4h2v2h-2v-2zm-4 0h2v2h-2v-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS GRID / LIST */}

      {/* 📁 1. Document Vault */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm text-white">Document Vault</h3>
              <p className="text-[10px] text-slate-400">Encrypted AI Auto-Sync Credentials</p>
            </div>
          </div>
          <button
            onClick={handleUploadDocument}
            className="px-2.5 py-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-[11px] flex items-center space-x-1 cursor-pointer transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload</span>
          </button>
        </div>

        {/* Document Items List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-all"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-xs text-white block">{doc.name}</span>
                <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                  <span className="px-1.5 py-0.2 rounded bg-slate-800 text-cyan-300 font-semibold">
                    {doc.category}
                  </span>
                  <span>• {doc.date}</span>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-cyan-400 hover:text-white cursor-pointer"
                  title="View Document"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDeleteDocument(doc.id)}
                  className="p-1.5 rounded-lg hover:bg-slate-800 text-rose-400 hover:text-rose-300 cursor-pointer"
                  title="Delete Document"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 2. My Goals */}
      <div className="p-4 rounded-3xl glass-panel border border-indigo-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm text-white">My Goals</h3>
              <p className="text-[10px] text-slate-400">Target Milestones & Trackers</p>
            </div>
          </div>
          <button
            onClick={() => {
              setEditForm({ ...profile });
              setIsEditModalOpen(true);
            }}
            className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1 cursor-pointer"
          >
            <span>Update</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
              Target Exam
            </span>
            <span className="font-extrabold text-white block">{profile.targetExam}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
              Dream College
            </span>
            <span className="font-extrabold text-indigo-300 block">{profile.dreamCollege}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
              Preferred Branch
            </span>
            <span className="font-extrabold text-white block">{profile.preferredBranch}</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Progress Tracker
              </span>
              <span className="font-mono text-emerald-400 font-black">98.4%ile Target</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-emerald-400 rounded-full w-[85%]" />
            </div>
            <span className="text-[10px] text-emerald-400/90 block pt-0.5">Syllabus 85% Complete</span>
          </div>
        </div>
      </div>

      {/* 📊 3. My Activity */}
      <div className="p-4 rounded-3xl glass-panel border border-blue-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <Bookmark className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-black text-sm text-white">My Activity</h3>
            <p className="text-[10px] text-slate-400">Saved Items & Application History</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <button
            onClick={() => onNavigate && onNavigate('colleges')}
            className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-blue-400/40 text-left space-y-1 cursor-pointer transition-all"
          >
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Saved Colleges</span>
            <span className="font-display font-black text-base text-blue-400">12</span>
            <span className="text-[10px] text-slate-400 block">IIT Bombay, BITS +10</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('scholarships')}
            className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-blue-400/40 text-left space-y-1 cursor-pointer transition-all"
          >
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Saved Scholarships</span>
            <span className="font-display font-black text-base text-amber-400">5</span>
            <span className="text-[10px] text-slate-400 block">Worth ₹3,50,000</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('exams')}
            className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-blue-400/40 text-left space-y-1 cursor-pointer transition-all"
          >
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Saved Exams</span>
            <span className="font-display font-black text-base text-emerald-400">4</span>
            <span className="text-[10px] text-slate-400 block">JEE Main, BITSAT, CUET</span>
          </button>

          <button
            onClick={() => onNavigate && onNavigate('applications')}
            className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-blue-400/40 text-left space-y-1 cursor-pointer transition-all"
          >
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Form Applications</span>
            <span className="font-display font-black text-base text-cyan-400">3 Active</span>
            <span className="text-[10px] text-slate-400 block">Phase 1 Approved</span>
          </button>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 text-left space-y-1 col-span-2 sm:col-span-2">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Recently Viewed</span>
            <span className="font-semibold text-white text-[11px] block truncate">
              IIT Madras CSE Cutoffs 2025 • JoSAA Round 1 Ranks
            </span>
          </div>
        </div>
      </div>

      {/* 💳 4. Payments */}
      <div className="p-4 rounded-3xl glass-panel border border-emerald-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm text-white">Payments & Billing</h3>
              <p className="text-[10px] text-slate-400">Transactions, Invoices & Pro Tier</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('payments')}
            className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 text-[11px] font-bold border border-emerald-500/30 flex items-center space-x-1 cursor-pointer"
          >
            <span>Manage</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Premium Membership</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-400/30">
                ACTIVE
              </span>
            </div>
            <span className="font-extrabold text-white block">MEUU AI Pro Scholar Tier</span>
            <span className="text-[10px] text-slate-400 block">Renews on Jan 2027</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Invoices & Receipts</span>
            <span className="font-extrabold text-white block">3 Verified PDF Receipts</span>
            <button
              onClick={() => triggerToast('Generating Tax Invoice PDF...')}
              className="text-[10px] font-bold text-emerald-400 hover:underline cursor-pointer block pt-0.5"
            >
              Download Latest Invoice
            </button>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1 col-span-1 sm:col-span-2 flex justify-between items-center">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Refund Status</span>
              <span className="font-bold text-slate-200 text-xs">No active refund claims</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-extrabold bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-400/20">
              100% Fee Protection
            </span>
          </div>
        </div>
      </div>

      {/* 🔔 5. Notifications Settings */}
      <div className="p-4 rounded-3xl glass-panel border border-cyan-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-black text-sm text-white">Notifications Preferences</h3>
            <p className="text-[10px] text-slate-400">Exam Deadlines & Admission Alerts</p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {/* Exam Alerts */}
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-bold text-white block">Exam Alerts</span>
              <span className="text-[10px] text-slate-400 block">Registration open, admit card & result pushes</span>
            </div>
            <button
              onClick={() => {
                setNotifications((p) => ({ ...p, examAlerts: !p.examAlerts }));
                triggerToast('Notification preferences saved');
              }}
              className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer flex items-center ${
                notifications.examAlerts ? 'bg-cyan-500 justify-end' : 'bg-slate-800 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-slate-950 shadow-md" />
            </button>
          </div>

          {/* College Updates */}
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-bold text-white block">College Updates</span>
              <span className="text-[10px] text-slate-400 block">JoSAA Round cutoffs & merit list updates</span>
            </div>
            <button
              onClick={() => {
                setNotifications((p) => ({ ...p, collegeUpdates: !p.collegeUpdates }));
                triggerToast('Notification preferences saved');
              }}
              className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer flex items-center ${
                notifications.collegeUpdates ? 'bg-cyan-500 justify-end' : 'bg-slate-800 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-slate-950 shadow-md" />
            </button>
          </div>

          {/* Scholarship Updates */}
          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="font-bold text-white block">Scholarship Updates</span>
              <span className="text-[10px] text-slate-400 block">New national & merit award announcements</span>
            </div>
            <button
              onClick={() => {
                setNotifications((p) => ({ ...p, scholarshipUpdates: !p.scholarshipUpdates }));
                triggerToast('Notification preferences saved');
              }}
              className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer flex items-center ${
                notifications.scholarshipUpdates ? 'bg-cyan-500 justify-end' : 'bg-slate-800 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-slate-950 shadow-md" />
            </button>
          </div>
        </div>
      </div>

      {/* 🔒 6. Privacy & Security */}
      <div className="p-4 rounded-3xl glass-panel border border-purple-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-black text-sm text-white">Privacy & Security</h3>
            <p className="text-[10px] text-slate-400">Authentication & Connected Devices</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {/* Change Password Button */}
          <button
            onClick={() => setIsPasswordModalOpen(true)}
            className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-purple-400/40 text-left flex items-center justify-between cursor-pointer transition-all"
          >
            <div className="flex items-center space-x-2">
              <Key className="w-4 h-4 text-purple-400" />
              <div>
                <span className="font-bold text-white block">Change Password</span>
                <span className="text-[10px] text-slate-400 block">Last changed 30 days ago</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </button>

          {/* Email Verification */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="font-bold text-white block">Email Verification</span>
                <span className="text-[10px] text-emerald-400 block font-semibold">Verified</span>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>

          {/* Phone Verification */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="font-bold text-white block">Phone Verification</span>
                <span className="text-[10px] text-emerald-400 block font-semibold">Verified</span>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>

          {/* 2FA Switch */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <div>
                <span className="font-bold text-white block">2-Factor Authentication</span>
                <span className="text-[10px] text-slate-400 block">SMS / Authenticator App</span>
              </div>
            </div>
            <button
              onClick={() => {
                setProfile((p) => ({ ...p, twoFactorEnabled: !p.twoFactorEnabled }));
                triggerToast('2FA settings updated');
              }}
              className={`w-10 h-5 rounded-full transition-colors p-0.5 cursor-pointer flex items-center ${
                profile.twoFactorEnabled ? 'bg-purple-500 justify-end' : 'bg-slate-800 justify-start'
              }`}
            >
              <div className="w-4 h-4 rounded-full bg-slate-950 shadow-md" />
            </button>
          </div>

          {/* Login Devices */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-1 col-span-1 sm:col-span-2">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Active Login Devices</span>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-200 flex items-center space-x-1.5">
                <Laptop className="w-3.5 h-3.5 text-cyan-400" />
                <span>Chrome on Windows 11 (This Device)</span>
              </span>
              <span className="text-emerald-400 font-bold">Active Now</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400 flex items-center space-x-1.5">
                <Smartphone className="w-3.5 h-3.5 text-slate-500" />
                <span>iPhone 15 Pro (MEUU iOS App)</span>
              </span>
              <span className="text-slate-500">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* ⚙️ 7. Settings */}
      <div className="p-4 rounded-3xl glass-panel border border-teal-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
          <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-black text-sm text-white">App Settings</h3>
            <p className="text-[10px] text-slate-400">Appearance & Preferred Language</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {/* Dark / Light Mode */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {darkMode ? <Moon className="w-4 h-4 text-cyan-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
              <div>
                <span className="font-bold text-white block">Theme Mode</span>
                <span className="text-[10px] text-slate-400 block">{darkMode ? 'Dark Cyber Mode' : 'Light Clean Mode'}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                triggerToast(`Switched to ${!darkMode ? 'Dark Cyber' : 'Light Clean'} mode`);
              }}
              className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer flex items-center ${
                darkMode ? 'bg-cyan-500 justify-end' : 'bg-slate-800 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-slate-950 shadow-md" />
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-teal-400" />
              <div>
                <span className="font-bold text-white block">App Language</span>
                <span className="text-[10px] text-slate-400 block">AI Q&A & Interface</span>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value as any);
                triggerToast(`Language updated to ${e.target.value}`);
              }}
              className="bg-slate-800 text-teal-300 font-bold text-xs px-2.5 py-1 rounded-xl border border-teal-500/30 focus:outline-none cursor-pointer"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Hinglish">Hinglish</option>
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="Telugu">Telugu (తెలుగు)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 💬 8. Help & Support */}
      <div className="p-4 rounded-3xl glass-panel border border-amber-500/20 bg-slate-900/90 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-black text-sm text-white">Help & Support</h3>
            <p className="text-[10px] text-slate-400">FAQs, Live Desk & Feedback</p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {/* FAQs Accordion */}
          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white flex items-center space-x-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Frequently Asked Questions</span>
              </span>
              <button
                onClick={() => setIsFaqOpen(!isFaqOpen)}
                className="text-[10px] font-bold text-amber-400 hover:underline cursor-pointer flex items-center space-x-0.5"
              >
                <span>{isFaqOpen ? 'Hide' : 'Expand All'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isFaqOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {isFaqOpen && (
              <div className="space-y-1.5 pt-1 border-t border-white/10">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-2 rounded-xl bg-slate-900 border border-white/5 space-y-1 text-left">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full font-semibold text-amber-200 text-xs flex justify-between items-center text-left cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-3 h-3 shrink-0 ml-1 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === index && (
                      <p className="text-[11px] text-slate-300 pt-1 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => triggerToast('Connecting to 24/7 AI Desk on WhatsApp...')}
              className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-amber-400/40 text-center flex flex-col items-center justify-center space-y-1 cursor-pointer transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white text-[11px]">Contact Support</span>
            </button>

            <button
              onClick={() => triggerToast('Support Ticket Form opened')}
              className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-amber-400/40 text-center flex flex-col items-center justify-center space-y-1 cursor-pointer transition-all"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-[11px]">Report Problem</span>
            </button>

            <button
              onClick={() => setIsFeedbackModalOpen(true)}
              className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-amber-400/40 text-center flex flex-col items-center justify-center space-y-1 cursor-pointer transition-all"
            >
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="font-bold text-white text-[11px]">Feedback & Rating</span>
            </button>
          </div>
        </div>
      </div>

      {/* ℹ️ 9. About */}
      <div className="p-4 rounded-3xl glass-panel border border-slate-700/40 bg-slate-900/90 space-y-3">
        <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-display font-black text-sm text-white">About MEUU AI</h3>
            <p className="text-[10px] text-slate-400">Legal, Version & Credentials</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <button
            onClick={() => triggerToast('Terms & Conditions document loaded')}
            className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-white/20 text-center cursor-pointer"
          >
            <span className="font-bold text-slate-300 text-[11px] block">Terms of Service</span>
          </button>

          <button
            onClick={() => triggerToast('Privacy Policy document loaded')}
            className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-white/20 text-center cursor-pointer"
          >
            <span className="font-bold text-slate-300 text-[11px] block">Privacy Policy</span>
          </button>

          <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 text-center">
            <span className="font-mono font-bold text-cyan-300 text-[11px] block">v2.4.0 Pro</span>
          </div>

          <button
            onClick={() => setIsFeedbackModalOpen(true)}
            className="p-2.5 rounded-2xl bg-slate-950/80 border border-white/5 hover:border-amber-400/40 text-center cursor-pointer flex items-center justify-center space-x-1"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-white text-[11px]">Rate App</span>
          </button>
        </div>
      </div>

      {/* BOTTOM ACTIONS: LOG OUT & DELETE ACCOUNT */}
      <div className="pt-4 space-y-3 text-center">
        {/* Large Red Log Out Button */}
        <button
          onClick={() => setIsLogoutDialogOpen(true)}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-black text-sm shadow-xl flex items-center justify-center space-x-2 cursor-pointer transition-transform active:scale-[0.99]"
        >
          <LogOut className="w-5 h-5 text-white" />
          <span>Log Out of MEUU AI</span>
        </button>

        {/* Delete Account Option */}
        <button
          onClick={() => setIsDeleteAccountDialogOpen(true)}
          className="text-xs font-bold text-rose-400 hover:text-rose-300 hover:underline cursor-pointer inline-block"
        >
          Delete Account & Purge My Data
        </button>
      </div>

      {/* EDIT PROFILE MODAL */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg p-5 rounded-3xl glass-panel border border-cyan-500/40 bg-slate-900 text-left space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Edit3 className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-display font-black text-base text-white">Edit Student Profile</h3>
                </div>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Student Full Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Class / Year</label>
                  <select
                    value={editForm.currentClass}
                    onChange={(e) => setEditForm({ ...editForm, currentClass: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    <option value="Class 10 (Standard)">Class 10 (Standard)</option>
                    <option value="Class 11 (PCM/PCB/Comm)">Class 11 (PCM/PCB/Comm)</option>
                    <option value="Class 12 (PCM)">Class 12 (PCM)</option>
                    <option value="Class 12 (PCB)">Class 12 (PCB)</option>
                    <option value="Class 12 (Commerce / Arts)">Class 12 (Commerce / Arts)</option>
                    <option value="Dropper / Repeater Year">Dropper / Repeater Year</option>
                    <option value="B.Tech 1st Year">B.Tech 1st Year</option>
                    <option value="Undergraduate (B.Sc / B.A)">Undergraduate (B.Sc / B.A)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-slate-300 font-bold block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-bold block mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Target Exam</label>
                  <input
                    type="text"
                    value={editForm.targetExam}
                    onChange={(e) => setEditForm({ ...editForm, targetExam: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Dream College</label>
                  <input
                    type="text"
                    value={editForm.dreamCollege}
                    onChange={(e) => setEditForm({ ...editForm, dreamCollege: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-slate-300 font-bold block mb-1">Preferred Branch</label>
                  <input
                    type="text"
                    value={editForm.preferredBranch}
                    onChange={(e) => setEditForm({ ...editForm, preferredBranch: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-2">
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs shadow-lg cursor-pointer"
                >
                  Save Profile Changes
                </button>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VIEW DOCUMENT MODAL */}
      <AnimatePresence>
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-5 rounded-3xl glass-panel border border-cyan-500/40 bg-slate-900 text-left space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-display font-black text-base text-white">{selectedDoc.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Document Preview Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <span className="font-extrabold text-white text-sm block">{selectedDoc.name}</span>
                  <span className="text-xs text-emerald-400 font-bold block mt-0.5">
                    Status: {selectedDoc.status}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Uploaded on {selectedDoc.date} • AES-256 Encrypted
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    triggerToast(`Downloaded ${selectedDoc.name}`);
                    setSelectedDoc(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs shadow-lg cursor-pointer"
                >
                  Download Secured PDF
                </button>
                <button
                  onClick={() => handleDeleteDocument(selectedDoc.id)}
                  className="px-3.5 py-2.5 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 font-bold text-xs cursor-pointer border border-rose-500/30"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CHANGE PASSWORD MODAL */}
      <AnimatePresence>
        {isPasswordModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm p-5 rounded-3xl glass-panel border border-purple-500/40 bg-slate-900 text-left space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-purple-400" />
                  <h3 className="font-display font-black text-base text-white">Change Password</h3>
                </div>
                <button
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-slate-300 font-bold block mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setIsPasswordModalOpen(false);
                  triggerToast('Password updated securely!');
                }}
                className="w-full py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-black text-xs shadow-lg cursor-pointer"
              >
                Update Password
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FEEDBACK & RATING MODAL */}
      <AnimatePresence>
        {isFeedbackModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm p-5 rounded-3xl glass-panel border border-amber-500/40 bg-slate-900 text-left space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <h3 className="font-display font-black text-base text-white">Rate MEUU AI</h3>
                </div>
                <button
                  onClick={() => setIsFeedbackModalOpen(false)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center space-y-3">
                <span className="text-xs text-slate-300 font-semibold block">
                  How was your career guidance experience?
                </span>

                <div className="flex justify-center items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Share your thoughts or feature suggestions for MEUU AI..."
                  rows={3}
                  className="w-full p-3 rounded-2xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                onClick={() => {
                  setIsFeedbackModalOpen(false);
                  triggerToast('Thank you for rating MEUU AI!');
                }}
                className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-lg cursor-pointer"
              >
                Submit Feedback
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LOG OUT CONFIRMATION DIALOG */}
      <AnimatePresence>
        {isLogoutDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm p-5 rounded-3xl glass-panel border border-rose-500/40 bg-slate-900 text-center space-y-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/30">
                <LogOut className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display font-black text-base text-white">Log Out Confirmation</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Are you sure you want to log out of MEUU AI? Your document vault will stay encrypted.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setIsLogoutDialogOpen(false);
                    triggerToast('Logged out successfully');
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs shadow-lg cursor-pointer"
                >
                  Yes, Log Out
                </button>
                <button
                  onClick={() => setIsLogoutDialogOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* STUDENT DIGITAL ID CARD FULL MODAL */}
      <AnimatePresence>
        {isIdCardModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md p-5 rounded-3xl glass-panel border border-cyan-400/50 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/80 text-left space-y-4 shadow-2xl relative my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm text-white">Official MEUU Student ID Pass</h3>
                    <p className="text-[10px] text-cyan-300 font-mono">Encrypted QR & Vault Verification</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsIdCardModalOpen(false);
                    setQrScanResult(null);
                  }}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Physical / Digital ID Card Visual Surface */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 border border-cyan-500/40 shadow-2xl relative overflow-hidden space-y-3">
                {/* Holographic BG accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* ID Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-6 h-6 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-[10px]">
                      M
                    </div>
                    <span className="font-display font-black text-xs text-white tracking-wider">MEUU ACADEMIC IDENTITY</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-mono font-bold">
                    VALID: 2025–2026
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div className="flex items-start space-x-3">
                    <div className="relative shrink-0">
                      <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400/80 shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-slate-950">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-display font-black text-base text-white">{profile.name}</h4>
                      <p className="text-xs text-cyan-300 font-medium">{profile.currentClass}</p>
                      <p className="text-[11px] text-slate-300 font-mono">ID: <span className="text-white font-bold">MEUU-2026-9842-IN</span></p>
                      <p className="text-[10px] text-slate-400">{profile.email}</p>
                    </div>
                  </div>

                  {/* Micro Chip Icon */}
                  <div className="w-9 h-7 rounded-md bg-gradient-to-r from-amber-300 to-amber-500 border border-amber-200/80 shadow-sm shrink-0 flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-0.5 bg-amber-700/40 my-auto" />
                    <div className="absolute inset-y-0 left-1/3 w-0.5 bg-amber-700/40" />
                  </div>
                </div>

                {/* Scannable Large QR Code Area */}
                <div className="p-3 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-col items-center justify-center text-center space-y-2 relative">
                  <div className="relative w-28 h-28 bg-white p-2 rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
                    {/* SVG QR Code Matrix */}
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-950">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-4h2v2h-2v-2zm2 4h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-2h2v2h-2v-2zm0-4h2v2h-2v-2zm-4 0h2v2h-2v-2z" />
                    </svg>

                    {/* Scanning animation bar when verifying */}
                    {isVerifyingQR && (
                      <motion.div
                        initial={{ top: '0%' }}
                        animate={{ top: '100%' }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                        className="absolute left-0 right-0 h-1 bg-cyan-500 shadow-[0_0_12px_#06b6d4]"
                      />
                    )}
                  </div>

                  <span className="text-[10px] text-cyan-300 font-mono font-bold flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Scan for Document & Identity Audit</span>
                  </span>
                </div>
              </div>

              {/* QR Verification Result Message */}
              {qrScanResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-emerald-400">
                    <span className="flex items-center space-x-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>DOCUMENT VERIFICATION SUCCESSFUL</span>
                    </span>
                    <span className="text-[10px] font-mono">{qrScanResult.timestamp}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-200">{qrScanResult.message}</p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleSimulateScanQR}
                  disabled={isVerifyingQR}
                  className="w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-black text-xs flex items-center justify-center space-x-2 shadow-lg cursor-pointer transition-all active:scale-98"
                >
                  <Scan className={`w-4 h-4 ${isVerifyingQR ? 'animate-spin' : ''}`} />
                  <span>{isVerifyingQR ? 'Verifying Document Signature...' : 'Simulate Scan QR & Verify Documents'}</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`MEUU-VERIFIED-AUTH-TOKEN:${profile.name}:2026`);
                      triggerToast('Student ID Token copied to clipboard!');
                    }}
                    className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-extrabold text-[11px] flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Token</span>
                  </button>

                  <button
                    onClick={() => {
                      triggerToast('Digital ID Pass downloaded to device!');
                    }}
                    className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 font-extrabold text-[11px] flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download ID Pass</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DELETE ACCOUNT DIALOG */}
      <AnimatePresence>
        {isDeleteAccountDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm p-5 rounded-3xl glass-panel border border-rose-600/60 bg-slate-900 text-center space-y-4 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-rose-600/20 text-rose-500 flex items-center justify-center mx-auto border border-rose-500/40">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-display font-black text-base text-rose-400">Delete Account & Purge Data?</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  This action is permanent and cannot be undone. All saved colleges, document vault files, and counselling records will be wiped.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setIsDeleteAccountDialogOpen(false);
                    triggerToast('Account deletion request initiated');
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-600 text-white font-black text-xs shadow-lg cursor-pointer"
                >
                  Permanently Delete
                </button>
                <button
                  onClick={() => setIsDeleteAccountDialogOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
