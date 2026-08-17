"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Home,
  Briefcase,
  Building2,
  Car,
  RefreshCw,
  Settings,
  Sun,
  Wallet,
  ShieldCheck,
  UserCheck,
  Percent,
  Clock,
  Award,
  Zap,
  CheckCircle2,
  Filter,
} from "lucide-react";
import KineticText from "@/components/KineticText";
import ThreeDCard from "@/components/ThreeDCard";
import { bankLogosList } from "@/components/BankLogos";
import LoanRateVisualizer from "@/components/LoanRateVisualizer";

export default function LoansPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "personal-home", label: "Personal & Home" },
    { id: "business", label: "Business & Capital" },
    { id: "vehicle", label: "Vehicle Loans" },
    { id: "green", label: "Green Energy" },
  ];

  const loanCategories = [
    {
      id: "personal-loan",
      category: "personal-home",
      title: "Personal Loan",
      description: "Collateral-free personal financing up to ₹40 Lakhs for travel, medical, or education needs.",
      icon: UserCheck,
      spec: "From 10.49%* p.a.",
      tenure: "Up to 6 Years",
      color: "from-blue-600 to-indigo-600",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "Instant Approval",
      href: "/loans/personal-loan",
    },
    {
      id: "home-loan",
      category: "personal-home",
      title: "Home Loan",
      description: "Turn your dream home into reality with competitive interest rates and tax benefits under Sec 80C.",
      icon: Home,
      spec: "From 7.20%* p.a.",
      tenure: "Up to 30 Years",
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-cyan-50",
      iconColor: "text-cyan-600",
      badge: "Lowest Interest",
      href: "/loans/home-loan",
    },
    {
      id: "business-loan",
      category: "business",
      title: "Business Loan",
      description: "Fuel expansion, purchase inventory, or upgrade operations with unsecured business loans up to ₹50L.",
      icon: Briefcase,
      spec: "From 11.25%* p.a.",
      tenure: "Up to 5 Years",
      color: "from-indigo-600 to-purple-600",
      bgLight: "bg-indigo-50",
      iconColor: "text-indigo-600",
      badge: "Unsecured Financing",
      href: "/loans/business-loan",
    },
    {
      id: "loan-against-property",
      category: "personal-home",
      title: "Loan Against Property",
      description: "Unlock high-value liquidity up to ₹15 Crores against residential, commercial, or industrial property.",
      icon: Building2,
      spec: "From 8.25%* p.a.",
      tenure: "Up to 20 Years",
      color: "from-emerald-600 to-teal-600",
      bgLight: "bg-emerald-50",
      iconColor: "text-emerald-600",
      badge: "High LTV Limit",
      href: "/loans/loan-against-property",
    },
    {
      id: "new-car-loan",
      category: "vehicle",
      title: "New Car Loan",
      description: "Drive home your dream car with up to 100% on-road financing and instant approval.",
      icon: Car,
      spec: "From 8.25%* p.a.",
      tenure: "Up to 7 Years",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50",
      iconColor: "text-amber-600",
      badge: "100% On-Road",
      href: "/loans/new-car-loan",
    },
    {
      id: "machinery-loan",
      category: "business",
      title: "Machinery Loan",
      description: "Finance new or imported equipment up to 90% quotation value with direct vendor disbursal.",
      icon: Settings,
      spec: "From 8%* p.a.",
      tenure: "Up to 7 Years",
      color: "from-slate-700 to-slate-900",
      bgLight: "bg-slate-100",
      iconColor: "text-slate-800",
      badge: "100% Tax Depr.",
      href: "/loans/machinery-loan",
    },
  ];

  const filteredLoans =
    selectedCategory === "all"
      ? loanCategories
      : loanCategories.filter((loan) => loan.category === selectedCategory);

  const heroMetrics = [
    { label: "Interest Rates", value: "7.20%*", sub: "Starting per annum", icon: Percent },
    { label: "Loan Capital", value: "Up to ₹15Cr*", sub: "High limit sanction", icon: ShieldCheck },
    { label: "Bank Partners", value: "50+ Top Lenders", sub: "PSU & Private Banks", icon: Award },
    { label: "Digital Approval", value: "24-48 Hours", sub: "Fast-track processing", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 overflow-hidden relative font-sans">
      
      {/* Ambient Professional Background Motion Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] bg-indigo-100/50 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-5%] right-[-5%] w-[50vw] h-[50vw] bg-emerald-100/50 rounded-full blur-[150px]"
        />

        {/* Animated SVG Loan Flow Bezier Wave */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            d="M-100,200 C300,50 700,350 1200,100 C1600,-100 1900,250 2300,150"
            fill="none"
            stroke="url(#loan-wave-gradient)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="loan-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7bc243" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating 3D Micro Motion Graphic Badges */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[8%] bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-2xl shadow-sm text-xs font-bold text-slate-800 hidden xl:flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" /> 📈 Lowest EMI Guaranteed
        </motion.div>

        <motion.div
          animate={{ y: [12, -12, 12], rotate: [2, -2, 2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-48 right-[8%] bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2 rounded-2xl shadow-sm text-xs font-bold text-slate-800 hidden xl:flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> ⚡ 24-48h Sanction
        </motion.div>

        {/* Crisp Architectural Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-brand-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-brand-primary" /> Institutional Financial Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight"
          >
            Structured Financing Tailored For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-indigo-600 to-emerald-600">Your Ambitions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Access competitive interest rates and seamless disbursals across India&apos;s leading 50+ banking institutions.
          </motion.p>
        </div>

        {/* 3D Elevated Hero Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {heroMetrics.map((metric, idx) => (
            <ThreeDCard key={idx} intensity={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-shadow flex items-center gap-4 preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-indigo-50 text-brand-primary flex items-center justify-center shrink-0 shadow-sm"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <metric.icon className="w-6 h-6" />
                </div>
                <div style={{ transform: "translateZ(20px)" }}>
                  <p className="text-2xl font-black text-slate-900 font-heading">{metric.value}</p>
                  <p className="text-xs font-bold text-slate-700">{metric.label}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{metric.sub}</p>
                </div>
              </motion.div>
            </ThreeDCard>
          ))}
        </div>

        {/* 3D Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50"
              }`}
            >
              {cat.id === "all" && <Filter className="w-3.5 h-3.5" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Interactive Loan Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence>
            {filteredLoans.map((loan) => (
              <motion.div
                key={loan.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ThreeDCard intensity={18} className="h-full">
                  <div
                    className="bg-white/90 backdrop-blur-2xl border border-slate-200/90 rounded-[2.2rem] p-8 shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(30,58,138,0.12)] transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group preserve-3d"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Glowing Decorative Background Mesh Inside Card */}
                    <div
                      className={`absolute -right-12 -top-12 w-36 h-36 bg-gradient-to-br ${loan.color} rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Top Row: Icon + Badge */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl ${loan.bgLight} flex items-center justify-center border border-white shadow-sm transition-transform duration-300 group-hover:scale-110 relative preserve-3d`}
                          style={{ transform: "translateZ(45px)" }}
                        >
                          <loan.icon className={`w-7 h-7 ${loan.iconColor}`} />
                          <div className="absolute inset-0 bg-brand-primary/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        </div>

                        <span
                          className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold rounded-full uppercase tracking-wider"
                          style={{ transform: "translateZ(30px)" }}
                        >
                          {loan.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl font-bold text-slate-900 font-heading mb-3 tracking-tight group-hover:text-brand-primary transition-colors"
                        style={{ transform: "translateZ(35px)" }}
                      >
                        {loan.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-slate-600 text-sm leading-relaxed font-medium mb-6"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {loan.description}
                      </p>
                    </div>

                    {/* Bottom Specs & Action Link */}
                    <div className="relative z-10 pt-4 border-t border-slate-100">
                      <div
                        className="flex items-center justify-between text-xs font-bold text-slate-700 mb-4"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <span className="flex items-center gap-1 text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {loan.spec}
                        </span>
                        <span className="text-slate-500 font-medium">{loan.tenure}</span>
                      </div>

                      <Link
                        href={loan.href}
                        className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-slate-900 text-white font-bold rounded-2xl text-xs uppercase tracking-wider group-hover:bg-brand-primary transition-colors shadow-md"
                        style={{ transform: "translateZ(40px)" }}
                      >
                        <span>Explore Product Details</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Loan Rate Visualizer Motion Component */}
        <LoanRateVisualizer />

        {/* Banking & Financial Partners Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Empowered By Top Lenders</span>
            <KineticText as="h2" className="text-3xl font-black text-slate-900 font-heading">Our Banking & Financial Partners</KineticText>
            <p className="text-slate-500 text-sm font-medium mt-2 max-w-xl mx-auto">We partner with 50+ premier banks and NBFCs across India to get you the lowest interest rates.</p>
          </div>

          <div className="relative flex overflow-x-hidden group marquee-fade">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-8 py-4">
              {[...bankLogosList, ...bankLogosList, ...bankLogosList].map((partner, idx) => (
                <div key={idx} className="flex items-center justify-center px-6 py-3 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:border-indigo-400 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md transform-gpu">
                  <partner.Component />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
