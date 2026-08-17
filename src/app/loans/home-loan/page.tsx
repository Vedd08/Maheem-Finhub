"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  CheckCircle2,
  FileText,
  Calculator,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Clock,
  Percent,
  Building,
  Hammer,
  RefreshCw,
  Sparkles,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import KineticText from "@/components/KineticText";

export default function HomeLoanPage() {
  const stats = [
    { label: "Interest Rate", value: "7.20%*", sub: "Starting per annum", icon: Percent, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Max Loan Tenure", value: "30 Years", sub: "Flexible EMI options", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Loan to Value (LTV)", value: "Up to 90%", sub: "Of property cost", icon: TrendingDown, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  const loanTypes = [
    {
      title: "Home Purchase Loan",
      description: "Get funding to purchase your new ready-to-move-in or under-construction residential apartment/house.",
      icon: Home,
    },
    {
      title: "Construction Loan",
      description: "Build your dream home on your plot of land with stage-wise disbursal tailored to construction progress.",
      icon: Hammer,
    },
    {
      title: "Plot + Construction Loan",
      description: "Combined funding solution to purchase a residential plot and construct your home on it.",
      icon: Building,
    },
    {
      title: "Home Renovation Loan",
      description: "Upgrade, repair, or redesign your existing living space with easy top-up or improvement loans.",
      icon: Sparkles,
    },
    {
      title: "Balance Transfer & Top-Up",
      description: "Transfer your existing high-interest home loan to Maheem Finhub for lower EMIs and extra top-up cash.",
      icon: RefreshCw,
    },
  ];

  const benefits = [
    "Competitive Interest Rates starting at 7.20% p.a.",
    "Customized repayment options tailored to your cash flow",
    "Doorstep service & fast-track digital approval process",
    "Max Tax Benefits: Save up to ₹3.5 Lakhs annually under Sec 80C & Sec 24",
    "Complete transparency with zero hidden processing charges",
    "Partnerships with 50+ top banks and financial institutions",
  ];

  const eligibilitySalaried = [
    "Age: 21 to 60 years at loan maturity",
    "Work Experience: Min. 2 years overall (1 year in current organization)",
    "Minimum Net Monthly Salary: ₹25,000+",
    "CIBIL Score: 750 or above for best rates",
  ];

  const eligibilitySelfEmployed = [
    "Age: 23 to 65 years at loan maturity",
    "Business Continuity: Min. 3 years in current business",
    "Minimum Annual Income: As per audited ITR requirements",
    "Clean banking history & financial statements",
  ];

  const documentsRequired = [
    "Identity & Address Proof (Aadhaar, PAN Card, Passport)",
    "Income Proof (Latest 3 months salary slips / 3 years ITR with computation)",
    "Bank Statements (Last 6 months active bank account statement)",
    "Property Documents (Copy of Buyer Agreement, Title Deed, Approved Plan)",
  ];

  const processSteps = [
    { title: "Application", desc: "Submit your details & loan requirement online or meet our advisor." },
    { title: "Verification", desc: "Our team verifies your financial profile and property documents." },
    { title: "In-Principle Approval", desc: "Get fast-track approval letter with customized loan terms." },
    { title: "Disbursal", desc: "Direct fund transfer to the seller or builder upon agreement." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#E0E7FF] rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D1FAE5] rounded-full blur-[140px] opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIHBhdHRlcm49InRydWUiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC4wNCkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/loans" className="hover:text-brand-primary transition-colors">Loans</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Home Loan</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> Trusted Housing Finance Solutions
          </motion.div>

          <KineticText as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Turn Your Dream Home Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Reality</span>
          </KineticText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Seamless, hassle-free Home Loans with attractive interest rates, instant approval, and expert support from application to key handover.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 hover:scale-105 transition-all gap-2"
            >
              Apply For Home Loan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calc/loan-sip"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 font-bold rounded-2xl shadow-sm hover:bg-white hover:border-slate-300 hover:scale-105 transition-all gap-2"
            >
              <Calculator className="w-5 h-5 text-blue-600" /> Calculate Loan EMI
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

        {/* Types of Home Loans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Tailored Home Loan Offerings</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Explore customized home loan options designed to meet your specific housing need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanTypes.map((type, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{type.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-wider hover:gap-2 transition-all">
                    Inquire Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-br from-brand-primary to-slate-900 rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-brand-highlight font-bold text-xs uppercase tracking-widest block mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-6 leading-tight">
                Why Thousands Trust Maheem Finhub For Home Loans
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                We simplify home financing by matching your profile with the lowest interest rates from premier banking partners across India.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-highlight text-brand-text font-bold rounded-xl shadow-lg hover:brightness-110 transition-all text-sm">
                Get Personalized Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-highlight shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eligibility & Documents */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Eligibility & Documentation</h2>
            <p className="text-slate-500 font-medium">Simple parameters and minimal paperwork for hassle-free processing.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Salaried Eligibility */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Salaried Applicants</h3>
              </div>
              <ul className="space-y-3">
                {eligibilitySalaried.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Self-Employed Eligibility */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Self-Employed</h3>
              </div>
              <ul className="space-y-3">
                {eligibilitySelfEmployed.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Key Documents</h3>
              </div>
              <ul className="space-y-3">
                {documentsRequired.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Simple Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Simple 4-Step Approval Process</h2>
            <p className="text-slate-500 font-medium">How we take you from application to your new doorstep.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-[2rem] border border-blue-100 p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-4">Ready To Lock In Low Home Loan Rates?</h2>
            <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto">Talk to our housing loan specialists today and get an instant quote tailored to your budget.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
