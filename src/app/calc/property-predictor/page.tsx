"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Home as HomeIcon,
  Calendar as CalendarIcon,
  Percent as PercentIcon,
  Wallet as WalletIcon,
  RotateCcw,
  Trophy,
  AlertTriangle,
  Sofa,
  Building,
  PiggyBank
} from "lucide-react";
import SliderInput from "@/components/SliderInput";
import KineticText from "@/components/KineticText";
import Link from "next/link";

const DEFAULTS = {
  propertyCost: 5000000,
  documentCost: 350000,
  furnitureCost: 1300000,
  loanAmount: 4000000,
  interestRate: 8.5,
  tenureYears: 20,
  appreciationRate: 6,
  monthlyRent: 25000,
};

function EditableCardValue({
  value,
  onChange,
  min,
  max,
  display,
  prefix = "",
  suffix = "",
}: {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  display: React.ReactNode;
  prefix?: string;
  suffix?: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState("");

  const commit = () => {
    setIsEditing(false);
    const num = parseFloat(editVal.replace(/[^0-9.]/g, ""));
    if (!isNaN(num) && num >= 0) onChange(num);
  };

  if (isEditing) {
    return (
      <div className="flex items-center text-sm font-bold px-2 py-1 rounded-lg bg-white shadow-md border border-brand-primary text-brand-text tabular-nums whitespace-nowrap">
        {prefix && <span className="opacity-70 text-xs mr-0.5">{prefix}</span>}
        <input
          type="text"
          inputMode="decimal"
          value={editVal}
          onChange={(e) => setEditVal(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") setIsEditing(false);
          }}
          onFocus={(e) => e.target.select()}
          autoFocus
          className="bg-transparent outline-none font-bold tabular-nums text-center"
          style={{ width: `${Math.max(2, editVal.length)}ch` }}
        />
        {suffix && <span className="opacity-70 text-xs ml-0.5">{suffix}</span>}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setEditVal(value.toLocaleString("en-IN"));
        setIsEditing(true);
      }}
      className="font-bold text-brand-text hover:text-brand-primary cursor-pointer px-2 py-0.5 rounded hover:bg-gray-100/60 transition-all focus:outline-none text-right"
    >
      {display}
    </button>
  );
}

export default function PropertyPredictorPage() {
  const [propertyCost, setPropertyCost] = useState<number>(DEFAULTS.propertyCost);
  const [documentCost, setDocumentCost] = useState<number>(DEFAULTS.documentCost);
  const [furnitureCost, setFurnitureCost] = useState<number>(DEFAULTS.furnitureCost);
  const [loanAmount, setLoanAmount] = useState<number>(DEFAULTS.loanAmount);
  const [interestRate, setInterestRate] = useState<number>(DEFAULTS.interestRate);
  const [tenureYears, setTenureYears] = useState<number>(DEFAULTS.tenureYears);
  const [appreciationRate, setAppreciationRate] = useState<number>(DEFAULTS.appreciationRate);
  const [monthlyRent, setMonthlyRent] = useState<number>(DEFAULTS.monthlyRent);

  const resetDefaults = () => {
    setPropertyCost(DEFAULTS.propertyCost);
    setDocumentCost(DEFAULTS.documentCost);
    setFurnitureCost(DEFAULTS.furnitureCost);
    setLoanAmount(DEFAULTS.loanAmount);
    setInterestRate(DEFAULTS.interestRate);
    setTenureYears(DEFAULTS.tenureYears);
    setAppreciationRate(DEFAULTS.appreciationRate);
    setMonthlyRent(DEFAULTS.monthlyRent);
  };

  const calculateEMI = (principal: number, annualRate: number, years: number) => {
    if (principal <= 0 || annualRate <= 0 || years <= 0) return 0;
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(amount));
  };

  const formatLakh = (amount: number) => {
    const lakh = amount / 100000;
    return Number.isInteger(lakh) ? `${lakh}` : lakh.toFixed(1);
  };

  // Logic Calculations
  const totalCost = propertyCost + furnitureCost + documentCost;
  const safeLoanAmount = Math.min(loanAmount, totalCost);
  const downPayment = Math.max(0, totalCost - safeLoanAmount);
  
  const emi = calculateEMI(safeLoanAmount, interestRate, tenureYears);
  const totalLoanPaid = emi * tenureYears * 12;
  const totalRentIncome = monthlyRent * 12 * tenureYears;
  const totalOutPocket = downPayment + totalLoanPaid - totalRentIncome;

  const futureValue = propertyCost * Math.pow(1 + (appreciationRate / 100), tenureYears);
  const netGain = futureValue - totalOutPocket;
  const isProfitable = netGain >= 0;

  return (
    <div className="relative py-24 min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [-30, 30, -30], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[5%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [30, 0, 30], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[5%] right-[5%] w-[45vw] h-[45vw] bg-gradient-to-tl from-emerald-500/10 to-teal-500/5 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMikiLz48L3N2Zz4=')]" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/calc" className="hover:text-brand-primary transition-colors">Calculators</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Property Predictor</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mx-auto mb-6">
             <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/30 border border-white/40">
                <Building className="w-10 h-10 text-white" />
             </div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
             <KineticText as="h1" className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight font-heading drop-shadow-sm">
               Property Value Predictor
             </KineticText>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Calculate the true out-of-pocket cost of buying and furnishing a home, versus its estimated future value after paying off the loan.
          </motion.p>
        </div>

        {/* Inputs */}
        <div className="mb-12">
           <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/80 relative overflow-hidden">
             
             <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
               <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Investment Parameters
               </h2>
               <button
                 onClick={resetDefaults}
                 className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 transition-all px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md"
               >
                 <RotateCcw className="w-3.5 h-3.5" /> Reset
               </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
               <SliderInput
                 label="Property Cost"
                 value={propertyCost}
                 onChange={setPropertyCost}
                 min={1000000}
                 max={50000000}
                 step={500000}
                 prefix="₹"
                 accent="var(--color-brand-primary)"
               />
               <SliderInput
                 label="Document Charges"
                 value={documentCost}
                 onChange={setDocumentCost}
                 min={0}
                 max={5000000}
                 step={50000}
                 prefix="₹"
                 accent="#a855f7"
               />
               <SliderInput
                 label="Furniture / Reno Cost"
                 value={furnitureCost}
                 onChange={setFurnitureCost}
                 min={0}
                 max={10000000}
                 step={100000}
                 prefix="₹"
                 accent="var(--color-brand-highlight)"
               />
               <SliderInput
                 label="Loan Amount"
                 value={loanAmount}
                 onChange={setLoanAmount}
                 min={100000}
                 max={propertyCost + furnitureCost}
                 step={100000}
                 prefix="₹"
                 accent="#eab308"
               />
               <SliderInput
                 label="Loan Interest Rate"
                 value={interestRate}
                 onChange={setInterestRate}
                 min={5}
                 max={15}
                 step={0.1}
                 suffix="%"
               />
               <SliderInput
                 label="Time Horizon (Years)"
                 value={tenureYears}
                 onChange={setTenureYears}
                 min={5}
                 max={30}
                 step={1}
                 suffix=" yrs"
               />
               <SliderInput
                 label="Est. Yearly Appreciation"
                 value={appreciationRate}
                 onChange={setAppreciationRate}
                 min={0}
                 max={15}
                 step={0.5}
                 suffix="%"
                 accent="#10b981"
               />
               <SliderInput
                 label="Rent Income / Savings (Monthly)"
                 value={monthlyRent}
                 onChange={setMonthlyRent}
                 min={0}
                 max={200000}
                 step={1000}
                 prefix="₹"
                 accent="#3b82f6"
               />
             </div>
           </div>
        </div>

        {/* Results Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

          {/* Cost Analysis Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
             <div className="h-full bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-lg border border-gray-100 flex flex-col overflow-hidden">
               <div className="px-8 py-6 bg-slate-50 border-b border-gray-100">
                 <h2 className="text-xl font-black text-slate-800 tracking-tight">Total Investment Analysis</h2>
               </div>
               
               <div className="p-8 flex-grow flex flex-col gap-5 text-sm font-medium text-slate-600">
                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                   <span className="flex items-center gap-2"><HomeIcon className="w-4 h-4 text-blue-500" /> Base Property</span>
                   <span className="font-bold text-slate-800">{formatCurrency(propertyCost)}</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                   <span className="flex items-center gap-2 text-purple-500"><WalletIcon className="w-4 h-4" /> Document Charges</span>
                   <span className="font-bold text-slate-800">{formatCurrency(documentCost)}</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                   <span className="flex items-center gap-2"><Sofa className="w-4 h-4 text-orange-500" /> Furniture / Reno</span>
                   <span className="font-bold text-slate-800">{formatCurrency(furnitureCost)}</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                   <span className="flex items-center gap-2 font-bold text-slate-800"><WalletIcon className="w-4 h-4" /> Total Cost Base</span>
                   <span className="font-black text-slate-900 text-lg tabular-nums">{formatCurrency(totalCost)}</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                   <span className="flex items-center gap-2"><PiggyBank className="w-4 h-4 text-emerald-500" /> Out-of-pocket Downpayment</span>
                   <span className="font-bold text-emerald-600">{formatCurrency(downPayment)}</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                   <span className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-indigo-500" /> Total EMI Over {tenureYears} yrs</span>
                   <span className="font-bold text-indigo-600">{formatCurrency(totalLoanPaid)}</span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-500" /> Total Rent Saved/Earned</span>
                   <span className="font-bold text-blue-600">-{formatCurrency(totalRentIncome)}</span>
                 </div>
               </div>

               <div className="bg-slate-900 p-8 text-center text-white">
                 <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Total Amount Spent By You</p>
                 <p className="text-4xl font-black tabular-nums">{formatCurrency(totalOutPocket)}</p>
               </div>
             </div>
          </div>

          {/* Future Projection Card */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="h-full bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] shadow-2xl border border-indigo-700/30 overflow-hidden flex flex-col text-white relative">
               <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
               
               <div className="px-8 py-6 border-b border-white/10 relative z-10">
                 <h2 className="text-xl font-black text-white tracking-tight">Future Projection (After {tenureYears} Years)</h2>
               </div>
               
               <div className="p-8 flex-grow flex flex-col justify-center items-center text-center relative z-10">
                 <p className="text-sm uppercase tracking-widest font-bold text-indigo-300 mb-4">Estimated Property Value</p>
                 <p className="text-5xl md:text-6xl font-black drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-emerald-200 tabular-nums mb-12">
                   {formatCurrency(futureValue)}
                 </p>
                 
                 <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

                 <div className={`p-6 rounded-3xl w-full border backdrop-blur-md shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 ${isProfitable ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                   <div className="flex items-center gap-4">
                     <div className={`p-4 rounded-2xl ${isProfitable ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                       {isProfitable ? <Trophy className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                     </div>
                     <div className="text-left">
                       <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{isProfitable ? 'Net Profit' : 'Net Loss'} Over {tenureYears} Yrs</p>
                       <p className={`text-3xl font-black tabular-nums ${isProfitable ? 'text-emerald-400' : 'text-red-400'}`}>
                         {formatCurrency(Math.abs(netGain))}
                       </p>
                     </div>
                   </div>
                   
                   <div className="text-right text-sm font-medium opacity-70">
                     Future Value <br/> - Total Spent
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
