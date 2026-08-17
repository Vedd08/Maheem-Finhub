"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  UserCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  Zap,
  HeartPulse,
  Heart,
  Home,
  Plane,
  GraduationCap,
  Scale,
  Percent,
  Wallet,
  Calculator,
} from "lucide-react";
import KineticText from "@/components/KineticText";

export default function PersonalLoanPage() {
  const stats = [
    { label: "Max Loan Amount", value: "Up to ₹40L*", sub: "Instant collateral-free cash", icon: Wallet, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Interest Rate", value: "10.49%*", sub: "Starting per annum", icon: Percent, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Disbursal Speed", value: "Same-Day", sub: "Instant 24-hr credit", icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const useCases = [
    {
      title: "Medical Emergencies",
      description: "Quick cash access to handle unexpected medical expenses and hospital bills without compromising care.",
      icon: HeartPulse,
    },
    {
      title: "Wedding & Celebrations",
      description: "Fund your dream wedding, venue booking, catering, and shopping with easy flexible EMIs.",
      icon: Heart,
    },
    {
      title: "Home Renovation & Decor",
      description: "Upgrade your interiors, remodel your kitchen, or fix structural repairs to enhance your living space.",
      icon: Home,
    },
    {
      title: "Travel & Vacations",
      description: "Experience your bucket-list international or domestic holiday without liquidating your long-term savings.",
      icon: Plane,
    },
    {
      title: "Debt Consolidation",
      description: "Combine high-interest credit card bills or multiple small loans into a single structured, affordable EMI.",
      icon: Scale,
    },
    {
      title: "Higher Education",
      description: "Finance specialized courses, certifications, or international university tuition fees easily.",
      icon: GraduationCap,
    },
  ];

  const benefits = [
    "100% Unsecured Personal Loans — No collateral or guarantor required",
    "Instant digital approval with funds credited directly to your bank account",
    "Flexible repayment tenure options ranging from 12 to 72 months",
    "Competitive interest rates starting from 10.49% p.a.",
    "Zero hidden fees with completely transparent charges and terms",
    "Customized pre-approved offers for existing salaried & self-employed clients",
  ];

  const eligibilitySalaried = [
    "Age: 21 to 60 years at loan maturity",
    "Work Experience: Minimum 1 year total (6 months in current company)",
    "Minimum Net Salary: ₹25,000 per month (credited to bank account)",
    "CIBIL Score: 750 or above for lowest interest rates",
  ];

  const eligibilitySelfEmployed = [
    "Age: 23 to 65 years",
    "Business Continuity: Minimum 2 years of active business operations",
    "Minimum Annual Income: ₹3 Lakhs as per audited ITR",
    "Clean banking history & healthy credit score",
  ];

  const documentsRequired = [
    "KYC Documents: PAN Card, Aadhaar Card, Passport or Voter ID",
    "Income Proof: Latest 3 months salary slips or 2 years ITR with computation",
    "Bank Statements: Last 6 months salary/current account statement",
    "Employment / Business Proof: Employee ID card or GST registration certificate",
  ];

  const processSteps = [
    { title: "Check Eligibility", desc: "Fill out a quick online form to check your loan offer in 60 seconds." },
    { title: "Upload Documents", desc: "Submit basic KYC, salary slips, and bank statements digitally." },
    { title: "Instant Verification", desc: "Automated digital verification by partner banks & financial institutions." },
    { title: "Same-Day Disbursal", desc: "Loan amount disbursed directly to your bank account." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#FFE4E6] rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FEF3C7] rounded-full blur-[140px] opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIHBhdHRlcm49InRydWUiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC4wNCkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/loans" className="hover:text-brand-primary transition-colors">Loans</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Personal Loan</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> Instant Collateral-Free Cash
          </motion.div>

          <KineticText as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Fund Life's Milestones With <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-500">Instant Cash</span>
          </KineticText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Unsecured Personal Loans up to ₹40 Lakhs with instant digital approval, competitive interest rates, and zero collateral requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:scale-105 transition-all gap-2"
            >
              Apply For Personal Loan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calc/loan-sip"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 font-bold rounded-2xl shadow-sm hover:bg-white hover:border-slate-300 hover:scale-105 transition-all gap-2"
            >
              <Calculator className="w-5 h-5 text-rose-600" /> Calculate EMI
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

        {/* Personal Loan Purposes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">One Personal Loan, Infinite Possibilities</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Flexible funds designed to support your personal goals, emergencies, and desires.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
                    <useCase.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{useCase.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-rose-600 uppercase tracking-wider hover:gap-2 transition-all">
                    Apply Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-4">Fast & Hassle-Free</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-6 leading-tight">
                Instant Personal Financing Made Transparent & Accessible
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                Skip tedious bank visits. With Maheem Finhub, enjoy streamlined digital verification, minimal paperwork, and fast credit disbursal straight to your account.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-bold rounded-xl shadow-lg hover:bg-rose-500 transition-all text-sm">
                Get Pre-Approved Loan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
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
            <p className="text-slate-500 font-medium">Simple prerequisites for instant loan pre-approval.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Salaried Eligibility */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Salaried Employees</h3>
              </div>
              <ul className="space-y-3">
                {eligibilitySalaried.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Self-Employed Eligibility */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Self-Employed Professionals</h3>
              </div>
              <ul className="space-y-3">
                {eligibilitySelfEmployed.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Required Documents</h3>
              </div>
              <ul className="space-y-3">
                {documentsRequired.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Simple 4-Step Approval Process</h2>
            <p className="text-slate-500 font-medium">How to get your personal loan credited in under 24 hours.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-black text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-[2rem] border border-rose-100 p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-4">Need Urgent Cash For Personal Use?</h2>
            <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto">Get pre-approved personal loan offers tailored to your profile with low interest rates today.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-all"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
