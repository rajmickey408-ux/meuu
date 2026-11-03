import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_PAYMENT_RECORDS } from '../../data/paymentsData';
import { PaymentRecord, ActiveTab } from '../../types';
import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Wallet, 
  Building, 
  Smartphone, 
  Download, 
  FileCheck, 
  Search, 
  Sparkles, 
  X, 
  AlertTriangle,
  Receipt
} from 'lucide-react';

interface PaymentsTabProps {
  onNavigate?: (tab: ActiveTab) => void;
}

export const PaymentsTab: React.FC<PaymentsTabProps> = ({ onNavigate }) => {
  const [payments, setPayments] = useState<PaymentRecord[]>(INITIAL_PAYMENT_RECORDS);
  const [activeType, setActiveType] = useState<'All' | 'Application Fee' | 'Counselling Fee' | 'College Fee'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal states
  const [selectedPaymentForPay, setSelectedPaymentForPay] = useState<PaymentRecord | null>(null);
  const [paymentStage, setPaymentStage] = useState<'method' | 'processing' | 'success'>('method');
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'card' | 'netbanking' | 'wallet'>('upi');
  const [selectedReceipt, setSelectedReceipt] = useState<PaymentRecord | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredPayments = payments.filter((p) => {
    const matchType = activeType === 'All' || p.type === activeType;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.collegeOrExam.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  const handleExecutePayment = (payment: PaymentRecord) => {
    setSelectedPaymentForPay(payment);
    setPaymentStage('method');
  };

  const handleConfirmPay = () => {
    if (!selectedPaymentForPay) return;
    setPaymentStage('processing');

    setTimeout(() => {
      const receiptNum = `MEUU-PAY-2025-${Math.floor(1000 + Math.random() * 9000)}`;
      const txnRef = `TXN/${Date.now()}/SUCCESS`;

      setPayments((prev) =>
        prev.map((item) =>
          item.id === selectedPaymentForPay.id
            ? {
                ...item,
                status: 'Paid',
                paidDate: new Date().toISOString().split('T')[0],
                receiptId: receiptNum,
                transactionRef: txnRef,
                paymentMethod:
                  selectedMethod === 'upi'
                    ? 'UPI (Google Pay / PhonePe)'
                    : selectedMethod === 'card'
                    ? 'Credit / Debit Card'
                    : selectedMethod === 'netbanking'
                    ? 'Net Banking'
                    : 'Digital Wallet'
              }
            : item
        )
      );

      setSelectedPaymentForPay((prev) =>
        prev
          ? {
              ...prev,
              status: 'Paid',
              paidDate: new Date().toISOString().split('T')[0],
              receiptId: receiptNum,
              transactionRef: txnRef
            }
          : null
      );

      setPaymentStage('success');
    }, 1500);
  };

  const totalPaid = payments
    .filter((p) => p.status === 'Paid')
    .reduce((acc, p) => acc + p.amount, 0);

  const totalPending = payments
    .filter((p) => p.status === 'Pending')
    .reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="w-full space-y-4 text-left pb-12 relative">
      {/* Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-2xl bg-teal-400 text-slate-950 font-black text-xs shadow-2xl flex items-center space-x-2 border border-teal-200"
          >
            <Sparkles className="w-4 h-4 text-slate-950 animate-spin" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Banner */}
      <div className="p-4 rounded-3xl glass-panel border border-teal-500/30 bg-gradient-to-r from-slate-900 via-slate-900 to-teal-950/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[10px] font-extrabold border border-teal-400/30 uppercase tracking-wider flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-teal-400" />
                <span>Zero Transaction Loss</span>
              </span>
            </div>
            <h2 className="font-display font-black text-xl text-white mt-1">
              Secure Payments Hub
            </h2>
            <p className="text-xs text-slate-300 mt-0.5 max-w-md">
              Pay Application Fees, Counselling Fees, and College Tuition with instant official digital receipts.
            </p>
          </div>
          <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/40 items-center justify-center text-teal-300 shrink-0">
            <CreditCard className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-white/10 space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            Total Paid Fees
          </span>
          <span className="font-display font-black text-lg text-emerald-400">
            ₹{totalPaid.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-emerald-400/80 block">Verified & Archived</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 space-y-1">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
            Pending Due Fees
          </span>
          <span className="font-display font-black text-lg text-amber-400">
            ₹{totalPending.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-amber-400/80 block">Action Required</span>
        </div>
      </div>

      {/* Search & Category Filter Pills */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fee item, exam, college..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-400/80 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {(['All', 'Application Fee', 'Counselling Fee', 'College Fee'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveType(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                activeType === cat
                  ? 'bg-teal-500 text-slate-950 shadow-md font-black'
                  : 'bg-slate-900 text-slate-300 border border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Items List */}
      <div className="space-y-3">
        {filteredPayments.map((pay) => (
          <div
            key={pay.id}
            className={`p-4 rounded-3xl glass-panel border transition-all space-y-3 ${
              pay.status === 'Paid'
                ? 'border-emerald-500/30 bg-slate-900/80'
                : 'border-amber-500/40 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-slate-800 text-teal-300 text-[10px] font-bold border border-white/10">
                  {pay.type}
                </span>
                <h4 className="font-display font-extrabold text-sm text-white mt-1">
                  {pay.title}
                </h4>
                <p className="text-xs text-slate-400">{pay.collegeOrExam}</p>
              </div>

              <div className="text-right shrink-0">
                <span className="font-display font-black text-base text-white block">
                  ₹{pay.amount.toLocaleString('en-IN')}
                </span>
                <span
                  className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold mt-0.5 ${
                    pay.status === 'Paid'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                  }`}
                >
                  {pay.status === 'Paid' ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Paid</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>Pending</span>
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Fee Breakdown Accordion / Box */}
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/5 text-xs space-y-1.5">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                Fee Component Breakdown
              </span>
              {pay.breakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between text-slate-300 text-[11px]">
                  <span>{item.label}</span>
                  <span className="font-mono text-white">₹{item.amount.toLocaleString('en-IN')}</span>
                </div>
              ))}
              <div className="pt-1.5 border-t border-white/10 flex justify-between font-bold text-slate-200 text-xs">
                <span>Due Date / Paid On:</span>
                <span className={pay.status === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}>
                  {pay.status === 'Paid' ? `Paid on ${pay.paidDate}` : `Due by ${pay.dueDate}`}
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-1">
              {pay.status === 'Paid' ? (
                <button
                  onClick={() => setSelectedReceipt(pay)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 text-xs font-bold flex items-center space-x-1.5 cursor-pointer transition-colors"
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>View & Download Receipt</span>
                </button>
              ) : (
                <button
                  onClick={() => handleExecutePayment(pay)}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center space-x-1.5 cursor-pointer transition-transform"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Pay ₹{pay.amount.toLocaleString('en-IN')} Now</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* PAYMENT MODAL */}
      <AnimatePresence>
        {selectedPaymentForPay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-5 rounded-3xl glass-panel border border-teal-500/40 bg-slate-900 text-left space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-teal-400" />
                  <h3 className="font-display font-black text-base text-white">
                    MEUU Gateway Payment
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPaymentForPay(null)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Stage 1: Select Method */}
              {paymentStage === 'method' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Paying For</span>
                    <span className="font-bold text-white text-sm block">{selectedPaymentForPay.title}</span>
                    <div className="flex justify-between items-center pt-1 text-xs">
                      <span className="text-slate-400">Total Amount:</span>
                      <span className="font-display font-black text-base text-teal-300">
                        ₹{selectedPaymentForPay.amount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">
                    Select Secure Payment Method
                  </span>

                  <div className="space-y-2">
                    {/* UPI */}
                    <button
                      onClick={() => setSelectedMethod('upi')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                        selectedMethod === 'upi'
                          ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                          : 'bg-slate-950 border-white/10 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <Smartphone className="w-5 h-5 text-teal-400 shrink-0" />
                      <div>
                        <span className="font-bold text-xs block">UPI / QR (Google Pay / PhonePe / Paytm)</span>
                        <span className="text-[10px] text-teal-300 font-semibold block">Instant Auto Approval</span>
                      </div>
                    </button>

                    {/* Debit/Credit Card */}
                    <button
                      onClick={() => setSelectedMethod('card')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                        selectedMethod === 'card'
                          ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                          : 'bg-slate-950 border-white/10 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-blue-400 shrink-0" />
                      <div>
                        <span className="font-bold text-xs block">Credit / Debit Card</span>
                        <span className="text-[10px] text-slate-400 block">VISA, Mastercard, RuPay</span>
                      </div>
                    </button>

                    {/* NetBanking */}
                    <button
                      onClick={() => setSelectedMethod('netbanking')}
                      className={`w-full p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                        selectedMethod === 'netbanking'
                          ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                          : 'bg-slate-950 border-white/10 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <Building className="w-5 h-5 text-purple-400 shrink-0" />
                      <div>
                        <span className="font-bold text-xs block">Net Banking</span>
                        <span className="text-[10px] text-slate-400 block">SBI, HDFC, ICICI, Axis & 50+ Banks</span>
                      </div>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center justify-center space-x-1.5 text-[11px] text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Bank Grade 256-Bit SSL Encryption</span>
                  </div>

                  <button
                    onClick={handleConfirmPay}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg transition-transform cursor-pointer"
                  >
                    Pay ₹{selectedPaymentForPay.amount.toLocaleString('en-IN')} Now
                  </button>
                </div>
              )}

              {/* Stage 2: Processing */}
              {paymentStage === 'processing' && (
                <div className="p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full border-4 border-teal-400 border-t-transparent animate-spin mx-auto" />
                  <h4 className="font-bold text-white text-sm">Processing Secure Payment...</h4>
                  <p className="text-xs text-slate-400">Communicating with banking servers & generating official receipt.</p>
                </div>
              )}

              {/* Stage 3: Success */}
              {paymentStage === 'success' && (
                <div className="p-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-lg text-white">Payment Successful!</h4>
                    <p className="text-xs text-emerald-300 mt-0.5">
                      Receipt Generated: {selectedPaymentForPay.receiptId}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-950 border border-white/10 text-xs text-left space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Transaction Ref:</span>
                      <span className="font-mono text-cyan-300 font-bold">{selectedPaymentForPay.transactionRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Amount Paid:</span>
                      <span className="font-bold text-white">₹{selectedPaymentForPay.amount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const target = selectedPaymentForPay;
                        setSelectedPaymentForPay(null);
                        setSelectedReceipt(target);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-slate-950 font-black text-xs shadow-md cursor-pointer"
                    >
                      View Receipt
                    </button>
                    <button
                      onClick={() => setSelectedPaymentForPay(null)}
                      className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RECEIPT VIEW MODAL */}
      <AnimatePresence>
        {selectedReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-6 rounded-3xl glass-panel border border-emerald-500/40 bg-slate-900 text-left space-y-4 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center space-x-2">
                  <Receipt className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-display font-black text-base text-white">
                    Official Fee Payment Receipt
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedReceipt(null)}
                  className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Receipt Body Canvas */}
              <div id="receipt-print-area" className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-3 text-xs">
                <div className="flex justify-between items-start border-b border-white/10 pb-3">
                  <div>
                    <span className="font-display font-black text-sm text-cyan-400">MEUU AI ECOSYSTEM</span>
                    <span className="text-[10px] text-slate-400 block">Verified Transaction Authorization</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                    STATUS: PAID
                  </span>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Receipt No:</span>
                    <span className="font-mono font-bold text-white">{selectedReceipt.receiptId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payment Date:</span>
                    <span className="font-bold text-white">{selectedReceipt.paidDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Category:</span>
                    <span className="font-bold text-teal-300">{selectedReceipt.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Institute / Exam:</span>
                    <span className="font-bold text-white">{selectedReceipt.collegeOrExam}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payment Method:</span>
                    <span className="font-bold text-white">{selectedReceipt.paymentMethod}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Breakdown</span>
                  {selectedReceipt.breakdown.map((b, i) => (
                    <div key={i} className="flex justify-between text-[11px] text-slate-300">
                      <span>{b.label}</span>
                      <span className="font-mono text-white">₹{b.amount.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/10 flex justify-between font-extrabold text-sm text-emerald-400">
                    <span>Total Amount Paid:</span>
                    <span>₹{selectedReceipt.amount.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => showToast(`Receipt ${selectedReceipt.receiptId} downloaded successfully as PDF!`)}
                  className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Receipt</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
