"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, ShieldCheck, ArrowUpRight, Award, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 relative overflow-hidden font-sans border-t-4 border-brand-primary">
      
      {/* Background Ambient Light Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-40 left-1/4 w-[45vw] h-[45vw] bg-blue-100/60 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 w-[40vw] h-[40vw] bg-emerald-100/60 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pre-Footer Call to Action Banner */}
        <div className="pt-12 pb-8">
          <div className="bg-white border border-slate-200/90 rounded-[2.2rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-1">Get In Touch</span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">
                Ready To Accelerate Your Financial Independence?
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Talk directly with our senior Surat financial advisors today. Zero obligation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href="tel:+918980022365"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-bold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-brand-primary" /> +91 89800 22365
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-black rounded-2xl text-xs uppercase tracking-wider hover:bg-slate-900 transition-all shadow-md"
              >
                Schedule Free Advisory <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Credibility */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center font-black text-white text-xl shadow-md font-heading">
                M
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 font-heading">MAHEEM FINHUB</h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-medium pr-0 lg:pr-8">
              Empowering individuals, families, and businesses across Surat and India with transparent, data-driven financial advice, custom mutual fund SIP portfolios, and 50+ bank partner loans.
            </p>

            {/* Certifications Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="border border-slate-200/90 rounded-2xl p-3 bg-white shadow-sm flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900">AMFI Registered</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">Mutual Fund Distributor</p>
                </div>
              </div>

              <div className="border border-slate-200/90 rounded-2xl p-3 bg-white shadow-sm flex items-center gap-3">
                <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900">50+ Banking Partners</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Lowest Rate Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Loan Products */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 font-heading border-l-2 border-brand-primary pl-3">
              Loan Offerings
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
              {[
                { label: "Home Loan", href: "/loans/home-loan" },
                { label: "Personal Loan", href: "/loans/personal-loan" },
                { label: "Business Loan", href: "/loans/business-loan" },
                { label: "Loan Against Property", href: "/loans/loan-against-property" },
                { label: "Machinery Loan", href: "/loans/machinery-loan" },
                { label: "New Car Loan", href: "/loans/new-car-loan" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-brand-primary transition-all duration-200 inline-block hover:translate-x-1.5">
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 font-heading border-l-2 border-emerald-600 pl-3">
              Calculators & Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
              {[
                { label: "Financial Calculators Hub", href: "/calc" },
                { label: "Loan vs SIP Simulator", href: "/calc/loan-sip" },
                { label: "All Loan Offerings", href: "/loans" },
                { label: "About Our 15-Yr Journey", href: "/about" },
                { label: "Contact Advisory Team", href: "/contact" },
                { label: "Home Page", href: "/" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-emerald-600 transition-all duration-200 inline-block hover:translate-x-1.5">
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Surat HQ */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 font-heading border-l-2 border-indigo-600 pl-3">
              Surat Headquarters
            </h4>
            <ul className="space-y-4 text-xs font-medium text-slate-700">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold">Divyesh Vadher</strong>
                  <a href="tel:+918980022365" className="hover:text-brand-primary transition-colors">+91 89800 22365</a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:maheemspprt@gmail.com" className="hover:text-emerald-600 transition-colors truncate">
                  maheemspprt@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-indigo-600 shrink-0" />
                <a href="https://maheemfinhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                  maheemfinhub.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span className="leading-relaxed text-slate-600 font-medium">
                  401, Tirupati Square, <br />
                  Near Padmavati Textile Market, <br />
                  Sahara Darwaja, Surat-395003
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Legal Bar */}
        <div className="border-t border-slate-200/80 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Maheem Finhub. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300">|</span>
            <p className="text-slate-600 font-semibold">AMFI Certified Fiduciary Advisor</p>
          </div>

          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed text-slate-500 font-medium">
            Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance does not guarantee future returns.
          </p>
        </div>

      </div>
    </footer>
  );
}
