import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserProfile } from '../types';
import { Sparkles, Mail, Lock, User, ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface Props {
  onLogin: (profile: UserProfile) => void;
  onBack: () => void;
}

export const ThirdScreen: React.FC<Props> = ({ onLogin, onBack }) => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailMode, setEmailMode] = useState<'signin' | 'signup'>('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentClass, setStudentClass] = useState('Class 10');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleSignIn = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onLogin({
        name: 'Aarav Sharma',
        email: 'aarav.sharma@gmail.com',
        currentClass: 'Class 10',
        preferredStream: 'Science (PCM)',
        targetCity: 'Delhi NCR',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      });
    }, 700);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onLogin({
        name: name || 'Student User',
        email: email || 'student@meuu.ai',
        currentClass: studentClass,
        preferredStream: 'To be decided',
      });
      setShowEmailModal(false);
    }, 600);
  };

  const handleGuestEntry = () => {
    onLogin({
      name: 'Guest Explorer',
      email: 'guest@meuu.ai',
      currentClass: 'Class 10',
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center justify-between min-h-[calc(100vh-65px)] px-4 py-6 text-center select-none"
    >
      {/* Top Header */}
      <div className="w-full max-w-sm flex flex-col items-center pt-2">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-[2px] shadow-[0_0_35px_rgba(6,182,212,0.5)] mb-4 animate-float">
          <div className="w-full h-full rounded-[22px] bg-[#070D1E] flex items-center justify-center font-display font-black text-2xl text-cyan-300">
            MEUU
          </div>
        </div>

        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-semibold tracking-wide mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>JOIN THE AI STUDENT REVOLUTION</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white leading-tight uppercase">
          LET'S BUILD <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            YOUR FUTURE.
          </span>
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xs leading-relaxed">
          Create your personalized MEUU AI account to unlock instant stream selection, entrance exam tracking & AI counseling.
        </p>
      </div>

      {/* Main Required Auth Buttons Container */}
      <div className="w-full max-w-sm my-auto flex flex-col items-center space-y-3 py-6">
        
        {/* 1. Continue with Google Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isSubmitting}
          className="w-full py-3.5 px-5 rounded-2xl glass-panel border border-white/15 bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 font-bold text-sm shadow-lg hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center space-x-3 cursor-pointer group"
        >
          {/* Official Google Icon SVG */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* 2. Continue with Email Button */}
        <button
          onClick={() => setShowEmailModal(true)}
          disabled={isSubmitting}
          className="w-full py-3.5 px-5 rounded-2xl glass-panel border border-cyan-500/30 bg-slate-900/60 hover:bg-slate-800 text-cyan-200 font-bold text-sm shadow-md hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Continue with Email</span>
        </button>

        {/* Divider */}
        <div className="w-full flex items-center space-x-3 my-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">OR</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* 3. Sign In / Direct Demo Account Entry */}
        <button
          onClick={handleGuestEntry}
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 font-display font-bold text-slate-950 text-sm shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
        >
          <span>Sign In / Quick Access</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-slate-400 pt-1">
          No credit card required. Free tier forever for all students.
        </p>
      </div>

      {/* Bottom Security Assurance Footer */}
      <div className="w-full max-w-sm flex items-center justify-center space-x-4 text-[11px] text-slate-400 border-t border-white/5 pt-4">
        <span className="flex items-center space-x-1">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>256-Bit Encrypted Vault</span>
        </span>
        <span>•</span>
        <span className="flex items-center space-x-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>100% Privacy</span>
        </span>
      </div>

      {/* Email Sign In / Sign Up Modal */}
      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-sm p-6 rounded-3xl border border-cyan-500/40 bg-slate-950 text-left shadow-[0_0_50px_rgba(6,182,212,0.3)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2 mb-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">
                    {emailMode === 'signup' ? 'Create MEUU AI Account' : 'Welcome Back'}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {emailMode === 'signup' ? 'Enter your details to start guidance' : 'Sign in to access your profile'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-3 mt-4">
                {emailMode === 'signup' && (
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyanshu Varma"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {emailMode === 'signup' && (
                  <div>
                    <label className="block text-[11px] font-medium text-slate-300 mb-1">Current Academic Level</label>
                    <select
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Class 10">Class 10 Student</option>
                      <option value="Class 11">Class 11 Student</option>
                      <option value="Class 12">Class 12 Student</option>
                      <option value="Undergraduate">College Student (UG)</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-slate-950 text-xs shadow-md mt-2"
                >
                  {isSubmitting ? 'Authenticating...' : emailMode === 'signup' ? 'Create Account & Enter' : 'Sign In'}
                </button>
              </form>

              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={() => setEmailMode(emailMode === 'signup' ? 'signin' : 'signup')}
                  className="text-[11px] text-cyan-400 hover:underline"
                >
                  {emailMode === 'signup' ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
