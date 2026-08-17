"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, ArrowUpRight, Calculator, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MotionGraphicsBanner() {
  const [activeTab, setActiveTab] = useState<"sip" | "loan">("sip");
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(10);

  // Simple SIP formula: M = P * ({[1 + i]^n - 1} / i) * (1 + i)
  const rate = activeTab === "sip" ? 12 : 8.5; // 12% for SIP, 8.5% for Loan
  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  
  const estimatedWealth = Math.round(
    activeTab === "sip"
      ? amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
      : (amount * 10000 * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)
  );

  const totalInvested = activeTab === "sip" ? amount * months : amount * 10000;

  return (
    <div className="relative w-full py-16 px-6 sm:px-10 bg-gradient-to-br from-white via-slate-50 to-blue-50/60 text-slate-900 overflow-hidden rounded-[2.5rem] my-16 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-200/80">
      
      {/* Motion Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-highlight/20 rounded-full blur-[120px]"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Interactive Controller */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-primary text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-brand-primary" /> Interactive Wealth Simulator
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-heading leading-tight text-slate-900">
            Visualize Your Financial Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-600">In Real-Time</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Toggle between wealth building SIP investments or instant low-EMI loans to see how smart financial planning works for you.
          </p>

          {/* Toggle Buttons */}
          <div className="flex p-1.5 bg-slate-100/80 backdrop-blur-md rounded-2xl border border-slate-200/80 w-fit">
            <button
              onClick={() => setActiveTab("sip")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "sip"
                  ? "bg-brand-primary text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <TrendingUp className="w-4 h-4" /> SIP Investment
            </button>
            <button
              onClick={() => setActiveTab("loan")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "loan"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calculator className="w-4 h-4" /> Loan EMI Preview
            </button>
          </div>

          {/* Sliders */}
          <div className="space-y-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm backdrop-blur-md">
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-slate-700">
                  {activeTab === "sip" ? "Monthly Investment (₹)" : "Loan Amount (in Lakhs ₹)"}
                </span>
                <span className="text-brand-primary font-heading text-lg">
                  {activeTab === "sip" ? `₹${amount.toLocaleString()}` : `₹${amount} Lakhs`}
                </span>
              </div>
              <input
                type="range"
                min={activeTab === "sip" ? 1000 : 1}
                max={activeTab === "sip" ? 100000 : 100}
                step={activeTab === "sip" ? 1000 : 1}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-slate-700">Time Horizon</span>
                <span className="text-emerald-600 font-heading text-lg">{years} Years</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Right Animated Motion Display Graphic */}
        <div className="lg:col-span-6 relative flex justify-center">
          
          {/* Main Visual Glass Card */}
          <motion.div
            key={activeTab + amount + years}
            initial={{ scale: 0.96, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Dynamic Curve Graph */}
            <div className="h-44 w-full relative flex items-end mb-6">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lightChartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={activeTab === "sip" ? "#059669" : "#2563EB"} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={activeTab === "sip" ? "#059669" : "#2563EB"} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  d={`M 0 100 Q 150 ${Math.max(10, 100 - (estimatedWealth / (activeTab === "sip" ? 500000 : 50000)) * 10)} 300 ${Math.max(5, 90 - (estimatedWealth / (activeTab === "sip" ? 500000 : 50000)) * 15)}`}
                  fill="none"
                  stroke={activeTab === "sip" ? "#059669" : "#2563EB"}
                  strokeWidth="4"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  d={`M 0 100 Q 150 ${Math.max(10, 100 - (estimatedWealth / (activeTab === "sip" ? 500000 : 50000)) * 10)} 300 ${Math.max(5, 90 - (estimatedWealth / (activeTab === "sip" ? 500000 : 50000)) * 15)} L 300 120 L 0 120 Z`}
                  fill="url(#lightChartGradient)"
                />
              </svg>

              {/* Pulsing Target Marker */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute top-4 right-4 w-4 h-4 rounded-full ${activeTab === "sip" ? "bg-emerald-500" : "bg-blue-600"} shadow-md`}
              />
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4 text-center border-t border-slate-100 pt-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                  {activeTab === "sip" ? "Expected Corpus" : "Monthly EMI"}
                </p>
                <p className="text-2xl sm:text-3xl font-black font-heading text-emerald-600">
                  ₹{estimatedWealth.toLocaleString()}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">
                  {activeTab === "sip" ? "Total Invested" : "Total Interest"}
                </p>
                <p className="text-2xl sm:text-3xl font-black font-heading text-brand-primary">
                  ₹{totalInvested.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/calc"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-emerald-600 transition-colors uppercase tracking-widest"
              >
                Open Full Financial Calculator Toolkit <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -right-3 sm:-right-5 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Compound Growth</p>
              <p className="text-[10px] text-slate-500 font-medium">Automated SIP Power</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
