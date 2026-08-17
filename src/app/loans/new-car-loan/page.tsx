"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Car,
  CheckCircle2,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  TrendingDown,
  Percent,
  Calculator,
  UserCheck,
  Shield,
  FileCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import KineticText from "@/components/KineticText";

export default function NewCarLoanPage() {
  const stats = [
    { label: "High Funding", value: "Up to 100%*", sub: "Of car market valuation", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Competitive Rate", value: "8.25%*", sub: "Starting per annum", icon: Percent, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Max Loan Tenure", value: "Up to 7 Yrs", sub: "Flexible monthly EMIs", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  const carCategories = [
    {
      title: "Hatchbacks & Compact Cars",
      description: "Easy financing for budget-friendly city cars with quick documentation and low EMIs.",
      icon: Car,
    },
    {
      title: "Sedans & Family Cars",
      description: "Drive comfortable premium sedans with tailored loan structures up to 7 years.",
      icon: Shield,
    },
    {
      title: "SUVs & MUVs",
      description: "High-value loans for rugged, spacious SUVs with high LTV funding options.",
      icon: Sparkles,
    },
    {
      title: "Luxury New Vehicles",
      description: "Customized financing for certified luxury brands (BMW, Mercedes, Audi, etc.) with dedicated advisory.",
      icon: ShieldCheck,
    },
  ];

  const benefits = [
    "Up to 100% on-road loan financing for new vehicles",
    "Fast-track approval with minimal documentation",
    "End-to-end assistance with RTO Ownership & RC Transfer process",
    "Flexible tenure choices from 12 to 84 months for smooth budgeting",
    "Pre-approved top-up loans available for existing car loan customers",
    "Partnerships with major private banks and automotive NBFCs",
  ];

  const ageGuidelines = [
    { age: "Hatchbacks", maxTenure: "Up to 7 Years (84 Mos)", ltv: "Up to 90%" },
    { age: "Sedans", maxTenure: "Up to 7 Years (84 Mos)", ltv: "Up to 100%" },
    { age: "SUVs", maxTenure: "Up to 7 Years (84 Mos)", ltv: "Up to 100%" },
    { age: "Luxury Cars", maxTenure: "Up to 7 Years (84 Mos)", ltv: "Up to 100%" },
  ];

  const eligibilityCriteria = [
    "Applicant Age: 21 to 65 years at loan maturity",
    "Employment Status: Salaried (Min 1 yr exp) or Self-Employed (Min 2 yrs business vintage)",
    "Minimum Income: Net salary of ₹20,000/mo or ITR equivalent for self-employed",
    "CIBIL Score: 720+ preferred for best interest rates and quick sanction",
  ];

  const documentsRequired = [
    "Vehicle Documents: Copy of Car RC (Registration Certificate) & Valid Insurance",
    "Car Inspection: Professional valuation report by authorized partner evaluator",
    "KYC Proofs: Aadhaar Card, PAN Card, Passport / Driving License",
    "Income Proofs: Salary Slips (last 3 months) / ITR (last 2 years) & 6 months Bank Statement",
  ];

  const processSteps = [
    { title: "Select Car & Apply", desc: "Share details of the New Car you wish to buy." },
    { title: "Vehicle Valuation", desc: "Free doorstep inspection by technical experts to determine market value." },
    { title: "Loan Sanction", desc: "Instant approval of loan amount, interest rate, and tenure options." },
    { title: "Disbursal & RC Transfer", desc: "Fast credit to seller and complete assistance with RTO transfer." },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[#FFEDD5] rounded-full blur-[140px] opacity-60" />
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
          <span className="text-slate-900 font-semibold">New Car Loan</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" /> New Automobile Finance
          </motion.div>

          <KineticText as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Drive Home Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">New Car</span>
          </KineticText>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Get up to 90% financing on New Cars with attractive interest rates, fast valuation, doorstep RTO transfer, and flexible repayment up to 7 years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 hover:bg-orange-700 hover:scale-105 transition-all gap-2"
            >
              Apply For New Car Loan <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/calc/loan-sip"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 font-bold rounded-2xl shadow-sm hover:bg-white hover:border-slate-300 hover:scale-105 transition-all gap-2"
            >
              <Calculator className="w-5 h-5 text-orange-600" /> Calculate EMI
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

        {/* Vehicle Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-3">Financing Across All Car Segments</h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">Whether buying from an individual seller, dealer, or online platform, we've got you covered.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{cat.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <Link href="/contact" className="inline-flex items-center text-xs font-bold text-orange-600 uppercase tracking-wider hover:gap-2 transition-all">
                    Inquire Now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vehicle Age vs Loan Matrix Table */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-slate-900 font-heading mb-2">Vehicle Category & Loan Matrix Guidelines</h3>
            <p className="text-slate-500 text-sm font-medium">Estimated maximum loan tenure and LTV funding based on vehicle age.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-orange-50/50">
                  <th className="p-4 font-bold text-slate-800 text-sm">Vehicle Category</th>
                  <th className="p-4 font-bold text-slate-800 text-sm">Max Loan Tenure</th>
                  <th className="p-4 font-bold text-slate-800 text-sm">Estimated LTV Funding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-600">
                {ageGuidelines.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{row.age}</td>
                    <td className="p-4">{row.maxTenure}</td>
                    <td className="p-4 text-orange-600 font-bold">{row.ltv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mb-4">Hassle-Free New Car Loans</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading mb-6 leading-tight">
                Quick Valuation & Doorstep RC Transfer Assistance
              </h2>
              <p className="text-slate-300 font-medium leading-relaxed mb-8">
                We handle the end-to-end process from professional car valuation to legal RTO ownership transfer, giving you complete peace of mind.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:bg-orange-500 transition-all text-sm">
                Get Pre-Approved New Car Loan <ArrowRight className="w-4 h-4" />
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
            <p className="text-slate-500 font-medium">Simple parameters for instant vehicle loan sanction.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
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
                <h3 className="text-lg font-bold text-slate-900">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {documentsRequired.map((item, idx) => (
                  <li key={idx} className="text-sm font-medium text-slate-600 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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
            <p className="text-slate-500 font-medium">From car selection to keys in your hand.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-black text-sm flex items-center justify-center mb-4">
                  {idx + 1}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-[2rem] border border-orange-100 p-8 lg:p-12 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 font-heading mb-4">Found A Car You Want To Buy?</h2>
            <p className="text-slate-600 font-medium mb-8 max-w-xl mx-auto">Get an instant pre-approved New Car Loan quote and doorstep valuation support today.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
