"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  TrendingDown,
  Home as HomeIcon,
  Store,
  Factory,
  MapPin,
  Percent,
  Coins,
  Calculator,
  UserCheck,
} from "lucide-react";
import KineticText from "@/components/KineticText";

export default function LoanAgainstPropertyPage() {
  const stats = [
    { label: "High Loan Amount", value: "Up to ₹15Cr*", sub: "Up to 70% of market value", icon: Coins, color: "text-teal-600", bg: "bg-teal-50" },
    { label: "Lower Interest Rate", value: "8.25%*", sub: "Starting per annum", icon: Percent, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Long Tenure", value: "Up to 20 Yrs", sub: "Low monthly EMIs", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  const propertyTypes = [
    {
      title: "Residential Property",
      description: "Mortgage your self-occupied or rented residential flat, house, villa, or apartment for high-value funding.",
      icon: HomeIcon,
    },
    {
      title: "Commercial Real Estate",
      description: "Leverage your commercial office space, retail shop, showroom, or complex to raise business capital.",
      icon: Store,
    },
    {
      title: "Industrial Real Estate",
      description: "Unlock equity tied up in industrial sheds, manufacturing plants, or warehouse facilities.",
      icon: Factory,
    },
    {
      title: "Approved Plots & Land",
      description: "Pledge non-agricultural (NA) residential or commercial approved plots for long-term financing.",
      icon: MapPin,
    },
  ];

  const benefits = [
    "High Loan-to-Value (LTV) financing up to 70% of appraised property value",
    "Significantly lower interest rates compared to personal or business loans",
    "Retain full ownership and operational control of your mortgaged property",
    "Flexible tenure up to 20 years for easy monthly installments",
    "Overdraft (OD) facility available — pay interest only on funds utilized",
    "Quick doorstep legal verification and technical evaluation process",
  ];

  const eligibilityCriteria = [
    "Applicant Age: 21 to 65 years at loan maturity",
    "Eligible Profiles: Salaried Employees, Self-Employed Professionals, SMEs & Companies",
    "Property Ownership: Must hold clear, marketable, and unencumbered title deed",
    "CIBIL Score: 700 or above for optimal interest rates and fast approval",
  ];

  const documentsRequired = [
    "Property Title Documents (Registered Sale Deed, Mother Deed, Approved Building Plan)",
    "Property Tax Receipts & Latest Possession Letter / Index II",
    "KYC Documents (PAN Card, Aadhaar Card, Passport, Business Registration)",
    "Income Proofs (Last 3 years ITR with computation, P&L, 6 months Bank Statements)",
  ];

  const processSteps = [
    { title: "Application & Consult", desc: "Share property details and financial requirement with our loan specialist." },
    { title: "Legal & Tech Valuation", desc: "Expert assessment of property market value and title deed verification." },
    { title: "Sanction Letter", desc: "Get formal in-principle sanction with customized rate & tenure options." },
    { title: "Mortgage & Disbursal", desc: "Simple agreement registration and direct fund credit to your account." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#CCFBF1] rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#E0E7FF] rounded-full blur-[140px] opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIHBhdHRlcm49InRydWUiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC4wNCkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/loans" className="hover:text-brand-primary transition-colors">Loans</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Loan Against Property</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> Secured Property Equity Loan
          </motion.div>

          <KineticText as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Unlock The Hidden Value Of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Property</span>
          </KineticText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Leverage residential, commercial, or industrial real estate for high-value funding up to ₹15 Crores at affordable interest rates.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:scale-105 transition-all gap-2"
            >
              Apply For Property Loan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calc/loan-sip"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 font-bold rounded-2xl shadow-sm hover:bg-white hover:border-slate-300 hover:scale-105 transition-all gap-2"
            >
              <Calculator className="w-5 h-5 text-emerald-600" /> Calculate Loan EMI
            </Link>
          </motion.div>
        </div>

        {/* Stats Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center shrink-0`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 font-heading">{stat.value}</p>
                <p className="text-sm font-bold text-slate-700">{stat.label}</p>
                <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Property Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Acceptable Property Categories</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Mortgage any clear-title property to secure competitive long-term financing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyTypes.map((type, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{type.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-emerald-600 uppercase tracking-wider hover:gap-2 transition-all">
                    Check Property Eligibility <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block mb-4">Maximum Value Guarantee</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-6 leading-tight">
                Low Interest Rates & Maximum Funding For Your Real Estate
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                Whether you need funds to scale your business, consolidate debt, or cover large personal expenses, a Loan Against Property offers the lowest interest rates in the market.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-500 transition-all text-sm">
                Get Free Property Valuation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility & Documents */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Eligibility & Documents Required</h2>
            <p className="text-slate-500 font-medium">Standard legal and financial requirements for smooth property mortgage.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {documentsRequired.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Simple 4-Step Process</h2>
            <p className="text-slate-500 font-medium">From evaluation to loan disbursal into your account.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-black text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-[2rem] border border-emerald-100 p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-4">Want To Know How Much You Can Borrow?</h2>
            <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto">Get a free, zero-commitment property valuation and instant loan estimate from our real estate loan experts.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
