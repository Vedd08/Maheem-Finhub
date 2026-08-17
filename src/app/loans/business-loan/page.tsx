"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  Zap,
  Building2,
  BadgePercent,
  Factory,
  CreditCard,
  UserCheck,
  Coins,
} from "lucide-react";
import KineticText from "@/components/KineticText";

export default function BusinessLoanPage() {
  const stats = [
    { label: "Collateral-Free Funding", value: "Up to ₹50L*", sub: "No security required", icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Fast Disbursal", value: "48 Hours", sub: "Speedy digital approval", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Flexible Tenure", value: "12-60 Mos", sub: "Tailored EMI schedules", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const loanTypes = [
    {
      title: "Working Capital Loan",
      description: "Manage inventory, pay vendor invoices, and maintain smooth day-to-day operational cash flow without liquidity bottlenecks.",
      icon: Coins,
    },
    {
      title: "Business Expansion Loan",
      description: "Capitalize on new market opportunities, open additional outlets, hire key talent, or scale production capacity.",
      icon: TrendingUp,
    },
    {
      title: "Machinery & Equipment Loan",
      description: "Acquire latest machinery and technology updates to boost output and operational efficiency.",
      icon: Factory,
    },
    {
      title: "MSME / SME Financing",
      description: "Government-backed priority sector loans with subsidized interest rates for growing small & medium enterprises.",
      icon: Building2,
    },
    {
      title: "Business Line of Credit",
      description: "Revolving credit line where you only pay interest on the amount actually utilized for your business.",
      icon: CreditCard,
    },
  ];

  const benefits = [
    "Unsecured Business Loans with zero collateral requirement",
    "Interest paid on business loan is 100% tax deductible",
    "Flexible EMI & bullet repayment options to match seasonal cash flow",
    "Doorstep document pickup & dedicated account manager",
    "Fast digital verification with disbursal in as fast as 48 hours",
    "Partnerships with 40+ leading Banks, NBFCs, and Fintech lenders",
  ];

  const eligibilityCriteria = [
    "Business Vintage: Minimum 2 years of continuous business operations",
    "Minimum Annual Turnover: ₹20 Lakhs and above",
    "CIBIL Score: 700 or above for proprietor / business entity",
    "Business Entities: Proprietorship, Partnership, LLP, Private Limited Companies",
  ];

  const documentsRequired = [
    "KYC Documents of Proprietor / Partners / Directors (PAN, Aadhaar, Passport)",
    "Business Proof (GST Registration, Udyam Registration, Trade License)",
    "Bank Statements (Last 12 months current bank account statement)",
    "Financial Proofs (Last 2 years audited ITRs, P&L statement, Balance Sheet)",
  ];

  const processSteps = [
    { title: "Online Application", desc: "Fill out a 2-minute online form with your basic business details." },
    { title: "Document Upload", desc: "Submit your GST & bank statements securely for digital assessment." },
    { title: "Instant In-Principle Sanction", desc: "Receive customized loan offers from partner lenders." },
    { title: "Quick Disbursal", desc: "Funds credited directly to your business current account." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#F3E8FF] rounded-full blur-[140px] opacity-60" />
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
          <span className="text-slate-900 font-semibold">Business Loan</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> Unsecured Business Financing
          </motion.div>

          <KineticText as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Supercharge Your Growth With <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Smart Capital</span>
          </KineticText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Collateral-free business loans up to ₹50 Lakhs with minimal documentation, competitive interest rates, and disbursal within 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-600/20 hover:bg-purple-700 hover:scale-105 transition-all gap-2"
            >
              Apply For Business Loan <ArrowRight className="w-5 h-5" />
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

        {/* Business Loan Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Customized Business Financing Solutions</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Select the credit solution that best aligns with your business goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((type, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{type.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-purple-600 uppercase tracking-wider hover:gap-2 transition-all">
                    Inquire Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-purple-400 font-bold text-xs uppercase tracking-widest block mb-4">Enterprise Growth Partner</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-6 leading-tight">
                Empowering Business Owners Across India
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                Whether you need capital for working funds, inventory buildup, or expansion, Maheem Finhub delivers hassle-free business loans tailored to your enterprise lifecycle.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-500 transition-all text-sm">
                Apply For Business Capital <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
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
            <p className="text-slate-500 font-medium">Simple parameters to ensure fast and seamless loan approval.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {documentsRequired.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Simple 4-Step Loan Process</h2>
            <p className="text-slate-500 font-medium">Get business funds delivered quickly to your current account.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-black text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-[2rem] border border-purple-100 p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-4">Take Your Business To The Next Level</h2>
            <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto">Connect with our business credit experts today for a customized loan offer with competitive rates.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-600/20 hover:bg-purple-700 transition-all"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
