"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Percent, ShieldCheck, Zap, ArrowRight, CheckCircle2, Building2, Home, Briefcase, Car, Sun, Wallet } from "lucide-react";
import Link from "next/link";

export default function LoanRateVisualizer() {
  const [activeLoan, setActiveLoan] = useState<number>(0);

  const loanOptions = [
    { title: "Home Loan", rate: "7.20%*", tenure: "Up to 30 Yrs", ltv: "85%-90%", icon: Home, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Personal Loan", rate: "10.49%*", tenure: "Up to 6 Yrs", ltv: "Unsecured", icon: Zap, color: "text-rose-600", bg: "bg-rose-50" },
    { title: "Business Loan", rate: "11.25%*", tenure: "Up to 5 Yrs", ltv: "Up to ₹50L", icon: Briefcase, color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Property Loan", rate: "8.25%*", tenure: "Up to 20 Yrs", ltv: "Up to 70%", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
    { title: "New Car Loan", rate: "8.25%*", tenure: "Up to 7 Yrs", ltv: "Up to 100%", icon: Car, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Machinery Loan", rate: "8.00%*", tenure: "Up to 7 Yrs", ltv: "Up to 90%", icon: Zap, color: "text-slate-700", bg: "bg-slate-100" },
  ];

  const current = loanOptions[activeLoan];

  return (
    <div className="relative w-full py-16 px-6 sm:px-10 bg-gradient-to-br from-white via-slate-50 to-indigo-50/50 text-slate-900 overflow-hidden rounded-[2.5rem] my-16 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-200/80">
      
      {/* Motion Background Animated Wave & Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[110px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-highlight/20 rounded-full blur-[130px]"
        />

        {/* Animated Light Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Category Selector */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-brand-primary text-xs font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4 text-brand-primary" /> Live Rate Visualizer
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-heading leading-tight text-slate-900">
            Compare Rates & Disbursal Speeds <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-indigo-600 to-emerald-600">Side-by-Side</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Select any loan product below to inspect key parameters, interest rate baselines, and maximum sanction limits.
          </p>

          {/* Selector Grid Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            {loanOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLoan(idx)}
                className={`p-3.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2.5 border ${
                  activeLoan === idx
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <opt.icon className={`w-4 h-4 ${activeLoan === idx ? "text-brand-highlight" : opt.color}`} />
                <span className="truncate">{opt.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Animated Rate Meter & Specs Card */}
        <div className="lg:col-span-6 relative flex justify-center">
          
          <motion.div
            key={activeLoan}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xl backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Top Indicator */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${current.bg} flex items-center justify-center`}>
                  <current.icon className={`w-6 h-6 ${current.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{current.title}</h3>
                  <p className="text-xs text-slate-400 font-medium">Standard Indicative Rate</p>
                </div>
              </div>

              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold rounded-full uppercase tracking-wider">
                Active Offer
              </span>
            </div>

            {/* Rate Gauge Animation */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center mb-6 relative overflow-hidden">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Interest Rate Starting At</p>
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl sm:text-5xl font-black text-brand-primary font-heading my-2 tracking-tight"
              >
                {current.rate}
              </motion.p>
              <div className="flex justify-center gap-6 text-xs font-bold text-slate-600 mt-3 pt-3 border-t border-slate-200/60">
                <span>Max Tenure: <strong className="text-slate-900">{current.tenure}</strong></span>
                <span>Funding LTV: <strong className="text-emerald-600">{current.ltv}</strong></span>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-3 mb-6">
              {[
                "Direct application with 50+ leading Banks & Financial Partners",
                "0% hidden charges & transparent processing terms",
                "Fast digital in-principle approval within 24-48 hours",
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Link */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl text-xs uppercase tracking-wider hover:bg-brand-primary transition-colors shadow-md"
            >
              Apply For {current.title} <ArrowRight className="w-4 h-4" />
            </Link>

          </motion.div>

          {/* Floating Motion Graphic Badge */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -right-3 sm:-right-5 bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20 pointer-events-none"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-brand-primary flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">50+ Partner Banks</p>
              <p className="text-[10px] text-slate-500 font-medium">Best Interest Rate Guarantee</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
