"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  ShieldCheck,
  Home as HomeIcon,
  Calendar as CalendarIcon,
  Percent as PercentIcon,
  Wallet as WalletIcon,
  RotateCcw,
  Trophy,
} from "lucide-react";
import SliderInput from "@/components/SliderInput";
import CompareBar from "@/components/CompareBar";
import KineticText from "@/components/KineticText";

const DEFAULTS = {
  loanAmount: 5000000,
  tenureYears: 20,
  rate1: 7.2,
  rate2: 8.5,
  sipReturnRate: 12,
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

export default function CalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(DEFAULTS.loanAmount);
  const [tenureYears, setTenureYears] = useState<number>(DEFAULTS.tenureYears);
  const [rate1, setRate1] = useState<number>(DEFAULTS.rate1);
  const [rate2, setRate2] = useState<number>(DEFAULTS.rate2);
  const [sipReturnRate, setSipReturnRate] = useState<number>(DEFAULTS.sipReturnRate);

  const resetDefaults = () => {
    setLoanAmount(DEFAULTS.loanAmount);
    setTenureYears(DEFAULTS.tenureYears);
    setRate1(DEFAULTS.rate1);
    setRate2(DEFAULTS.rate2);
    setSipReturnRate(DEFAULTS.sipReturnRate);
  };

  const calculateEMI = (principal: number, annualRate: number, years: number) => {
    if (principal === 0 || annualRate === 0 || years === 0) return 0;
    const r = annualRate / 12 / 100;
    const n = years * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const calculateSIP = (monthlyInvestment: number, annualRate: number, years: number) => {
    if (monthlyInvestment <= 0 || annualRate === 0 || years === 0) return 0;
    const i = annualRate / 12 / 100;
    const n = years * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    return Math.round(futureValue);
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

  const months = tenureYears * 12;
  const emi1 = calculateEMI(loanAmount, rate1, tenureYears);
  const emi2 = calculateEMI(loanAmount, rate2, tenureYears);

  const totalPayment1 = emi1 * months;
  const totalPayment2 = emi2 * months;

  const totalInterest1 = totalPayment1 - loanAmount;
  const totalInterest2 = totalPayment2 - loanAmount;

  const extraEmi = Math.max(0, emi2 - emi1);
  const extraPayment = Math.max(0, totalPayment2 - totalPayment1);

  const sipCorpus = calculateSIP(extraEmi, sipReturnRate, tenureYears);
  const totalBenefit = extraPayment + sipCorpus;

  const betterDeal = totalPayment1 === totalPayment2 ? null : totalPayment1 < totalPayment2 ? "A" : "B";

  return (
    <div className="relative py-24 min-h-screen overflow-hidden bg-[#fafafa]">
      {/* 3D Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ x: [-50, 50, -50], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [50, -50, 50], y: [50, 0, 50], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tl from-brand-highlight/15 to-transparent rounded-full blur-[120px]"
        />
        {/* Subtle grid overlay for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L3N2Zz4=')] opacity-50" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mx-auto mb-6">
             <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-primary to-brand-highlight flex items-center justify-center shadow-xl shadow-brand-primary/30 border border-white/40">
                <Calculator className="w-10 h-10 text-white" />
             </div>
          </div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
             <KineticText as="h1" className="text-display-md md:text-display-lg font-black text-brand-primary mb-4 uppercase tracking-tight font-heading tabular-nums drop-shadow-sm">
               ₹{formatLakh(loanAmount)} Lakh Home Loan Comparison
             </KineticText>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-text/70 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Drag the sliders to see how a higher interest rate impacts your EMI and total payment.
            Discover how investing the extra EMI in a SIP can create massive wealth.
          </motion.p>
        </div>

        {/* Inputs wrapped in a Glass Card */}
        <div className="mb-12">
           <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white/80 relative overflow-hidden">
             {/* Decorative element inside card */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-bl-full pointer-events-none" />
             
             <div className="flex items-center justify-between mb-8">
               <h2 className="text-sm font-bold text-brand-text uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-highlight"></span>
                  Customize Your Comparison
               </h2>
               <button
                 onClick={resetDefaults}
                 className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-primary transition-all px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5"
               >
                 <RotateCcw className="w-3.5 h-3.5" /> Reset
               </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 relative z-10">
               <SliderInput
                 label="Loan Amount"
                 value={loanAmount}
                 onChange={setLoanAmount}
                 min={10000}
                 max={20000000}
                 step={10000}
                 prefix="₹"
               />
               <SliderInput
                 label="Tenure"
                 value={tenureYears}
                 onChange={setTenureYears}
                 min={1}
                 max={30}
                 step={1}
                 suffix=" yrs"
               />
               <SliderInput
                 label="Rate 1"
                 value={rate1}
                 onChange={setRate1}
                 min={5}
                 max={15}
                 step={0.05}
                 suffix="%"
                 accent="var(--color-brand-primary)"
               />
               <SliderInput
                 label="Rate 2"
                 value={rate2}
                 onChange={setRate2}
                 min={5}
                 max={15}
                 step={0.05}
                 suffix="%"
                 accent="var(--color-brand-highlight)"
               />
               <SliderInput
                 label="SIP Return"
                 value={sipReturnRate}
                 onChange={setSipReturnRate}
                 min={6}
                 max={20}
                 step={0.5}
                 suffix="%"
               />
             </div>
           </div>
        </div>

        {/* Results Dashboard (Comparison Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Loan 2 Card */}
          <div className="h-full">
             <div className="h-full relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/60 overflow-hidden flex flex-col hover:shadow-[0_25px_50px_rgba(123,194,67,0.12)] transition-shadow">
               <div className="absolute top-0 inset-x-0 h-2 bg-brand-highlight" />
               {betterDeal === "B" && (
                 <div className="absolute top-5 right-4 z-10 inline-flex items-center gap-1 bg-brand-highlight text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                   <Trophy className="w-3 h-3" /> Better Deal
                 </div>
               )}
               
               <div className="px-8 py-6 bg-gradient-to-br from-brand-highlight/10 to-transparent border-b border-gray-100">
                 <h2 className="text-2xl font-black text-brand-highlight tabular-nums tracking-tight">LOAN @ {rate2.toFixed(2)}%</h2>
               </div>
               
               <div className="p-8 space-y-5 flex-grow">
                 <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                   <span className="text-gray-500 font-medium flex items-center gap-2 text-sm"><HomeIcon className="w-4 h-4 text-brand-highlight/60" /> Loan Amount</span>
                   <EditableCardValue
                      value={loanAmount}
                      onChange={setLoanAmount}
                      min={10000}
                      max={20000000}
                      prefix="₹"
                      display={formatCurrency(loanAmount)}
                    />
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                   <span className="text-gray-500 font-medium flex items-center gap-2 text-sm"><CalendarIcon className="w-4 h-4 text-brand-highlight/60" /> Loan Tenure</span>
                   <EditableCardValue
                      value={tenureYears}
                      onChange={setTenureYears}
                      min={1}
                      max={30}
                      suffix=" Years"
                      display={`${tenureYears} Years`}
                    />
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                   <span className="text-gray-500 font-medium flex items-center gap-2 text-sm"><PercentIcon className="w-4 h-4 text-brand-highlight/60" /> Interest Rate</span>
                   <EditableCardValue
                      value={rate2}
                      onChange={setRate2}
                      min={5}
                      max={15}
                      suffix="%"
                      display={`${rate2.toFixed(2)}%`}
                    />
                 </div>
                 <div className="flex justify-between items-center pb-3">
                   <span className="text-gray-500 font-bold flex items-center gap-2"><WalletIcon className="w-5 h-5 text-brand-highlight" /> Monthly EMI</span>
                   <span className="font-black text-2xl text-brand-highlight tabular-nums">{formatCurrency(emi2)}</span>
                 </div>
               </div>
               
               <div className="m-4 bg-brand-highlight/5 p-6 rounded-3xl border border-brand-highlight/10 text-center">
                 <p className="text-xs font-bold text-brand-highlight/70 uppercase tracking-widest mb-1">Total Payment</p>
                 <p className="text-2xl font-black text-brand-highlight mb-4 tabular-nums">{formatCurrency(totalPayment2)}</p>
                 <p className="text-xs font-bold text-brand-highlight/70 uppercase tracking-widest mb-1">Total Interest</p>
                 <p className="text-xl font-bold text-brand-text tabular-nums">{formatCurrency(totalInterest2)}</p>
               </div>
             </div>
          </div>

          {/* Loan 1 Card */}
          <div className="h-full">
             <div className="h-full relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white/60 overflow-hidden flex flex-col hover:shadow-[0_25px_50px_rgba(30,58,138,0.12)] transition-shadow">
               <div className="absolute top-0 inset-x-0 h-2 bg-brand-primary" />
               {betterDeal === "A" && (
                 <div className="absolute top-5 right-4 z-10 inline-flex items-center gap-1 bg-brand-highlight text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-lg">
                   <Trophy className="w-3 h-3" /> Better Deal
                 </div>
               )}
               
               <div className="px-8 py-6 bg-gradient-to-br from-brand-primary/5 to-transparent border-b border-gray-100">
                 <h2 className="text-2xl font-black text-brand-primary tabular-nums tracking-tight">LOAN @ {rate1.toFixed(2)}%</h2>
               </div>
               
               <div className="p-8 space-y-5 flex-grow">
                 <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                   <span className="text-gray-500 font-medium flex items-center gap-2 text-sm"><HomeIcon className="w-4 h-4 text-brand-primary/60" /> Loan Amount</span>
                   <EditableCardValue
                      value={loanAmount}
                      onChange={setLoanAmount}
                      min={10000}
                      max={20000000}
                      prefix="₹"
                      display={formatCurrency(loanAmount)}
                    />
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                   <span className="text-gray-500 font-medium flex items-center gap-2 text-sm"><CalendarIcon className="w-4 h-4 text-brand-primary/60" /> Loan Tenure</span>
                   <EditableCardValue
                      value={tenureYears}
                      onChange={setTenureYears}
                      min={1}
                      max={30}
                      suffix=" Years"
                      display={`${tenureYears} Years`}
                    />
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                   <span className="text-gray-500 font-medium flex items-center gap-2 text-sm"><PercentIcon className="w-4 h-4 text-brand-primary/60" /> Interest Rate</span>
                   <EditableCardValue
                      value={rate1}
                      onChange={setRate1}
                      min={5}
                      max={15}
                      suffix="%"
                      display={`${rate1.toFixed(2)}%`}
                    />
                 </div>
                 <div className="flex justify-between items-center pb-3">
                   <span className="text-gray-500 font-bold flex items-center gap-2"><WalletIcon className="w-5 h-5 text-brand-primary" /> Monthly EMI</span>
                   <span className="font-black text-2xl text-brand-primary tabular-nums">{formatCurrency(emi1)}</span>
                 </div>
               </div>
               
               <div className="m-4 bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10 text-center">
                 <p className="text-xs font-bold text-brand-primary/70 uppercase tracking-widest mb-1">Total Payment</p>
                 <p className="text-2xl font-black text-brand-primary mb-4 tabular-nums">{formatCurrency(totalPayment1)}</p>
                 <p className="text-xs font-bold text-brand-primary/70 uppercase tracking-widest mb-1">Total Interest</p>
                 <p className="text-xl font-bold text-brand-text tabular-nums">{formatCurrency(totalInterest1)}</p>
               </div>
             </div>
          </div>

          {/* Difference & SIP Cards */}
          <div className="space-y-8 flex flex-col">
            <div className="flex-1">
              <div className="h-full bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-lg border border-white/60 overflow-hidden flex flex-col">
                <div className="absolute top-0 inset-x-0 h-2 bg-red-500" />
                <div className="px-6 py-5 bg-red-50/50 border-b border-red-100">
                  <h2 className="text-lg font-black text-red-600 tabular-nums tracking-tight">DIFFERENCE</h2>
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                    <span className="text-gray-600 font-medium text-sm">Extra EMI / mo</span>
                    <span className="font-black text-red-500 text-xl tabular-nums">{formatCurrency(extraEmi)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-600 font-medium text-sm">Extra Payment</span>
                    <span className="font-black text-red-500 text-xl tabular-nums">{formatCurrency(extraPayment)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="h-full bg-gradient-to-br from-purple-600 to-indigo-800 rounded-[2rem] shadow-[0_20px_40px_rgba(107,33,168,0.25)] border border-purple-400/30 overflow-hidden flex flex-col text-white relative">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC44KSIvPjwvc3ZnPg==')] pointer-events-none" />
                <div className="px-6 py-5 border-b border-white/10">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-purple-200">SIP Investment</h2>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md shadow-inner border border-white/30">
                       <TrendingUp className="w-6 h-6 text-white" />
                     </div>
                     <div>
                        <p className="text-xs text-purple-200 uppercase tracking-widest font-semibold mb-1">Est. Corpus</p>
                        <p className="text-3xl font-black text-white drop-shadow-md tabular-nums">{formatCurrency(sipCorpus)}</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Comparison Chart Area */}
        <div className="mb-12">
          <div className="bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-xl p-8 border border-white/80">
            <h2 className="text-sm font-bold text-brand-text uppercase tracking-widest mb-8">Visual Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <CompareBar label="Monthly EMI" valueA={emi1} valueB={emi2} format={formatCurrency} />
              <CompareBar label="Total Interest Payable" valueA={totalInterest1} valueB={totalInterest2} format={formatCurrency} />
            </div>
          </div>
        </div>

        {/* Final Benefit Card */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(217,119,6,0.15)] border border-white overflow-hidden p-10 relative">
            
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-highlight/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-10 relative z-10">
              <h2 className="text-xl md:text-3xl font-black text-amber-900 tracking-tight uppercase">
                WHAT YOU GAIN BY CHOOSING {rate1.toFixed(2)}% & INVESTING
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto relative z-10">

              {/* Savings Card */}
              <div className="flex items-center gap-5 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white w-full flex-1">
                <div className="bg-green-100 p-4 rounded-2xl text-brand-highlight shadow-inner">
                  <PiggyBank className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Interest Saved</p>
                  <p className="text-2xl font-black text-brand-highlight tabular-nums">{formatCurrency(extraPayment)}</p>
                </div>
              </div>

              <div className="text-4xl font-black text-amber-800/50">+</div>

              {/* SIP Wealth Card */}
              <div className="flex items-center gap-5 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white w-full flex-1">
                <div className="bg-purple-100 p-4 rounded-2xl text-purple-700 shadow-inner">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">SIP Wealth</p>
                  <p className="text-2xl font-black text-purple-700 tabular-nums">{formatCurrency(sipCorpus)}</p>
                </div>
              </div>

              <div className="text-4xl font-black text-amber-800/50">=</div>

              {/* Total Benefit Card */}
              <div className="flex items-center gap-5 bg-gradient-to-br from-brand-highlight to-green-600 p-6 rounded-3xl shadow-xl border border-white/20 w-full flex-1 text-white relative overflow-hidden">
                <div className="bg-white/20 p-4 rounded-2xl shadow-inner backdrop-blur-sm">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-xs text-green-100 uppercase tracking-widest font-bold mb-1">Total Benefit</p>
                  <p className="text-3xl font-black drop-shadow-md tabular-nums">{formatCurrency(totalBenefit)}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="text-center text-xs text-brand-text/50 font-medium mb-12">
           * Calculations are approximate and may vary slightly based on actual bank policies and returns. SIP returns are market-linked and not guaranteed.
        </div>
      </div>
    </div>
  );
}
