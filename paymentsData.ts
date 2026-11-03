import { PaymentRecord } from '../types';

export const INITIAL_PAYMENT_RECORDS: PaymentRecord[] = [
  {
    id: 'PAY-1001',
    title: 'JEE Main 2025 Phase 1 Application',
    type: 'Application Fee',
    collegeOrExam: 'National Testing Agency (NTA)',
    amount: 1000,
    dueDate: '2025-01-20',
    paidDate: '2025-01-15',
    status: 'Paid',
    receiptId: 'MEUU-NTA-2025-8842',
    paymentMethod: 'UPI (Google Pay)',
    transactionRef: 'UPI/501294821039/SUCCESS',
    breakdown: [
      { label: 'Application Registration Fee', amount: 950 },
      { label: 'NTA Portal Convenience Fee', amount: 50 }
    ]
  },
  {
    id: 'PAY-1002',
    title: 'JoSAA 2025 Seat Acceptance Fee',
    type: 'Counselling Fee',
    collegeOrExam: 'Joint Seat Allocation Authority (JoSAA)',
    amount: 35000,
    dueDate: '2025-06-25',
    status: 'Pending',
    breakdown: [
      { label: 'Seat Acceptance Fee (GEN/OBC)', amount: 33000 },
      { label: 'JoSAA Processing Charge', amount: 2000 }
    ]
  },
  {
    id: 'PAY-1003',
    title: 'IIT Delhi First Semester Tuition Deposit',
    type: 'College Fee',
    collegeOrExam: 'Indian Institute of Technology, Delhi',
    amount: 112500,
    dueDate: '2025-07-20',
    status: 'Pending',
    breakdown: [
      { label: 'Semester Tuition Fee', amount: 100000 },
      { label: 'Caution Deposit (Refundable)', amount: 7500 },
      { label: 'Student Activity & Gymkhana Fee', amount: 5000 }
    ]
  },
  {
    id: 'PAY-1004',
    title: 'VITEEE 2025 Application Form',
    type: 'Application Fee',
    collegeOrExam: 'VIT University',
    amount: 1350,
    dueDate: '2025-03-31',
    paidDate: '2025-03-10',
    status: 'Paid',
    receiptId: 'MEUU-VIT-2025-3319',
    paymentMethod: 'HDFC Debit Card',
    transactionRef: 'HDFC/CARD/881204921',
    breakdown: [
      { label: 'VITEEE Entrance Test Fee', amount: 1300 },
      { label: 'Bank Gateway Charge', amount: 50 }
    ]
  },
  {
    id: 'PAY-1005',
    title: 'COMEDK UGET Counselling Registration',
    type: 'Counselling Fee',
    collegeOrExam: 'COMEDK Karnataka',
    amount: 2000,
    dueDate: '2025-06-15',
    paidDate: '2025-06-08',
    status: 'Paid',
    receiptId: 'MEUU-COMEDK-2025-1102',
    paymentMethod: 'Net Banking (SBI)',
    transactionRef: 'SBI/NET/994102941',
    breakdown: [
      { label: 'Document Verification Charge', amount: 2000 }
    ]
  },
  {
    id: 'PAY-1006',
    title: 'BITS Pilani Advance Admission Deposit',
    type: 'College Fee',
    collegeOrExam: 'BITS Pilani',
    amount: 55000,
    dueDate: '2025-07-10',
    status: 'Pending',
    breakdown: [
      { label: 'Admission Fee', amount: 50000 },
      { label: 'Institute Hostel Advance', amount: 5000 }
    ]
  }
];
