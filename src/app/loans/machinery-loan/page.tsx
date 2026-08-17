"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Settings,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  TrendingUp,
  Percent,
  Factory,
  Printer,
  HeartPulse,
  HardHat,
  Cpu,
  UserCheck,
  Zap,
} from "lucide-react";
import KineticText from "@/components/KineticText";

export default function MachineryLoanPage() {
  const stats = [
    { label: "High LTV Funding", value: "Up to 90%*", sub: "Of machine invoice value", icon: Zap, color: "text-slate-700", bg: "bg-slate-100" },
    { label: "Industrial Interest Rate", value: "8.00%*", sub: "Starting per annum", icon: Percent, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Max Loan Tenure", value: "Up to 7 Yrs", sub: "Flexible EMI repayment", icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const machineryCategories = [
    {
      title: "CNC & Metalworking Machinery",
      description: "Finance high-precision CNC lathes, milling, laser cutting, and metal fabrication machinery.",
      icon: Cpu,
    },
    {
      title: "Textile & Weaving Equipment",
      description: "Upgrade your textile unit with modern looms, embroidery machines, and spinning equipment.",
      icon: Factory,
    },
    {
      title: "Printing & Packaging Plants",
      description: "Acquire latest offset printing presses, corrugated box makers, and flexible packaging units.",
      icon: Printer,
    },
    {
      title: "Medical & Diagnostic Devices",
      description: "Finance MRI, CT Scanners, Ultrasound, and ICU medical diagnostic equipment for hospitals & labs.",
      icon: HeartPulse,
    },
    {
      title: "Construction & Heavy Equipment",
      description: "Funding solutions for earthmoving machinery, excavators, cranes, and concrete mixing units.",
      icon: HardHat,
    },
  ];

  const benefits = [
    "Direct disbursement to machine manufacturers/vendors across India or international importers",
    "Max Tax Benefits: 100% Tax Depreciation & Interest Expense deduction for business",
    "Collateral-free options available under MSME Credit Guarantee (CGTMSE) schemes",
    "Customized step-up or seasonal EMIs to match your manufacturing output cycle",
    "Doorstep technical evaluation and fast-track loan approval within 3 to 5 days",
    "Partnerships with 35+ top Banks and industrial equipment NBFC lenders",
  ];

  const eligibilityCriteria = [
    "Business Vintage: Minimum 2 to 3 years of active manufacturing / business history",
    "Turnover Requirement: Healthy turnover with positive net worth & cash profit",
    "Borrower Profile: Proprietorship, Partnership, LLP, or Private Limited Company",
    "CIBIL Score: 700 or above for business entity and promoters",
  ];

  const documentsRequired = [
    "Machinery Details: Proforma Invoice / Technical Quotation from Machine Supplier",
    "KYC & Business Registration: PAN Card, Aadhaar, GST Registration, Udyam Certificate",
    "Financial Proofs: Audited Balance Sheet & P&L Statement (Last 2-3 Years) with Computation",
    "Bank Statements: Last 12 months active Business Current Account statement",
  ];

  const processSteps = [
    { title: "Select Machinery", desc: "Obtain official proforma quotation from your machinery supplier." },
    { title: "Submit Application", desc: "Upload business financials & GST returns for quick technical evaluation." },
    { title: "LTV & Sanction", desc: "Receive loan sanction letter specifying LTV, interest rate, & EMI schedule." },
    { title: "Vendor Payment", desc: "Direct payment to machine vendor for immediate delivery & installation." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#F1F5F9] rounded-full blur-[140px] opacity-60" />
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
          <span className="text-slate-900 font-semibold">Machinery Loan</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-slate-600" /> Industrial Equipment Financing
          </motion.div>

          <KineticText as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Upgrade Your Plant With <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-900 to-blue-600">Modern Machinery</span>
          </KineticText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Fund up to 90% of new or imported machinery cost with competitive interest rates, tax depreciation benefits, and direct vendor disbursal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-105 transition-all gap-2"
            >
              Apply For Machinery Loan <ArrowRight className="w-5 h-5" />
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

        {/* Equipment Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Machinery & Equipment We Finance</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Tailored financing options for indigenous as well as imported capital equipment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineryCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-6">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{cat.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-slate-800 uppercase tracking-wider hover:gap-2 transition-all">
                    Inquire Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-4">Industrial Credit Specialists</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-6 leading-tight">
                Scale Plant Productivity Without Exhausting Cash Reserves
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                Boost operational capacity and tech efficiency by spreading the cost of capital machinery over manageable monthly installments.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-500 transition-all text-sm">
                Request Industrial Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
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
            <p className="text-slate-500 font-medium">Standard requirements for fast equipment loan sanction.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Required */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {documentsRequired.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Simple 4-Step Approval Process</h2>
            <p className="text-slate-500 font-medium">From quotation to machinery delivery at your factory.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-800 font-black text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-[2rem] border border-slate-200 p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-4">Planning To Purchase New Machinery?</h2>
            <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto">Talk to our industrial equipment finance experts today to get competitive LTV and interest rate offers.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
