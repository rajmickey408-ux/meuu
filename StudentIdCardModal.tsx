import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../../types';
import { 
  QrCode, 
  Scan, 
  Copy, 
  Download, 
  Share2, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  X, 
  FileCheck2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface StudentIdCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile | null;
}

export const StudentIdCardModal: React.FC<StudentIdCardModalProps> = ({ isOpen, onClose, user }) => {
  const [isVerifyingQR, setIsVerifyingQR] = useState(false);
  const [qrScanResult, setQrScanResult] = useState<{
    verified: boolean;
    studentName: string;
    studentId: string;
    documentsVerified: string[];
    timestamp: string;
  } | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const studentName = user?.name || 'Harsh Sharma';
  const currentClass = user?.currentClass || 'Class 12 (PCM)';
  const email = user?.email || 'harsh.sharma2026@gmail.com';
  const avatarUrl = user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80';
  const studentIdNumber = 'MEUU-2026-9842-IN';

  const handleSimulateScanQR = () => {
    setIsVerifyingQR(true);
    setQrScanResult(null);

    setTimeout(() => {
      setIsVerifyingQR(false);
      setQrScanResult({
        verified: true,
        studentName,
        studentId: studentIdNumber,
        documentsVerified: [
          'Class 10 CBSE Board Marksheet (DigiLocker Synced)',
          'Aadhaar National Identity (UIDAI Verified)',
          'JEE Main 2026 Admit Card (NTA Verified)',
          'Income / Category EWS Certificate (State Portal Validated)'
        ],
        timestamp: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      });
      triggerToast('Identity & Document Signature Verified!');
    }, 1200);
  };

  const handleCopyToken = () => {
    const token = `MEUU-AUTH-PASSPORT:${studentIdNumber}:${btoa(studentName)}:${Date.now()}`;
    navigator.clipboard.writeText(token);
    setCopiedToken(true);
    triggerToast('Secure Verification Token copied to clipboard');
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const handleDownloadCard = () => {
    triggerToast('MEUU Digital Student Pass saved to device');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${studentName}'s MEUU Student ID Pass`,
        text: `Verified Academic Identity for ${studentName} (${studentIdNumber}) on MEUU AI.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      triggerToast('Verification link copied to clipboard');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 15 }}
        className="w-full max-w-md p-5 rounded-3xl glass-panel border border-cyan-400/50 bg-gradient-to-b from-slate-900 via-slate-900 to-[#0c1836] text-left space-y-4 shadow-2xl relative my-auto"
      >
        {/* Toast Alert */}
        {toastMessage && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-xl bg-cyan-400 text-slate-950 font-black text-xs shadow-xl animate-bounce">
            {toastMessage}
          </div>
        )}

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm text-white flex items-center space-x-1.5">
                <span>Official MEUU Student ID Pass</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-[10px] text-cyan-300 font-mono">Encrypted QR & DigiLocker Vault Linked</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Physical / Digital ID Card Visual Surface */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/70 border border-cyan-500/40 shadow-2xl relative overflow-hidden space-y-3">
          {/* Holographic Glowing Accents */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

          {/* ID Top Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center space-x-1.5">
              <div className="w-6 h-6 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-[10px]">
                M
              </div>
              <span className="font-display font-black text-xs text-white tracking-wider">
                MEUU ACADEMIC PASSPORT
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-mono font-bold">
              VALID: 2025–2026
            </span>
          </div>

          {/* Main Card Bio */}
          <div className="flex items-start justify-between gap-3 pt-1">
            <div className="flex items-start space-x-3">
              <div className="relative shrink-0">
                <img
                  src={avatarUrl}
                  alt={studentName}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400/80 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-slate-950">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-black text-base text-white">{studentName}</h4>
                <p className="text-xs text-cyan-300 font-medium">{currentClass}</p>
                <p className="text-[11px] text-slate-300 font-mono">
                  ID: <span className="text-white font-bold">{studentIdNumber}</span>
                </p>
                <p className="text-[10px] text-slate-400">{email}</p>
              </div>
            </div>

            {/* Micro Smart Chip Icon */}
            <div className="w-9 h-7 rounded-md bg-gradient-to-r from-amber-300 to-amber-500 border border-amber-200/80 shadow-sm shrink-0 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-0.5 bg-amber-700/40 my-auto" />
              <div className="absolute inset-y-0 left-1/3 w-0.5 bg-amber-700/40" />
            </div>
          </div>

          {/* Scannable Large QR Code Area */}
          <div className="p-3 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-col items-center justify-center text-center space-y-2 relative">
            <div className="relative w-28 h-28 bg-white p-2 rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
              {/* SVG QR Code Pattern */}
              <svg viewBox="0 0 24 24" className="w-full h-full fill-slate-950">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 2h2v4h-2v-4zm-4-4h2v2h-2v-2zm2 4h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-2h2v2h-2v-2zm0-4h2v2h-2v-2zm-4 0h2v2h-2v-2z" />
              </svg>

              {/* Scanning laser animation bar when verifying */}
              {isVerifyingQR && (
                <motion.div
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="absolute left-0 right-0 h-1 bg-cyan-500 shadow-[0_0_12px_#06b6d4]"
                />
              )}
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] text-cyan-300 font-mono font-bold flex items-center justify-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>NTA & University Verification QR</span>
              </span>
              <span className="text-[9px] text-slate-400 block">
                Official signature for JoSAA, CSAB & College Admissions
              </span>
            </div>
          </div>
        </div>

        {/* QR Verification Result Display */}
        {qrScanResult && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs space-y-2"
          >
            <div className="flex items-center justify-between font-bold text-emerald-400">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>DIGITAL CREDENTIALS AUDIT PASSED</span>
              </span>
              <span className="text-[10px] font-mono">{qrScanResult.timestamp}</span>
            </div>

            <div className="space-y-1 pt-1 border-t border-emerald-500/20">
              <span className="text-[10px] font-bold text-emerald-300 uppercase block">Verified Vault Documents:</span>
              {qrScanResult.documentsVerified.map((doc, i) => (
                <div key={i} className="flex items-center space-x-1.5 text-[11px] text-slate-200">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
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
            <span>{isVerifyingQR ? 'Scanning & Verifying DigiLocker Hashes...' : 'Verify QR & Document Authenticity'}</span>
          </button>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={handleCopyToken}
              className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-extrabold text-[11px] flex items-center justify-center space-x-1 cursor-pointer transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copiedToken ? 'Copied!' : 'Copy Token'}</span>
            </button>

            <button
              onClick={handleDownloadCard}
              className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 font-extrabold text-[11px] flex items-center justify-center space-x-1 cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={handleShare}
              className="py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-500/30 font-extrabold text-[11px] flex items-center justify-center space-x-1 cursor-pointer transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
