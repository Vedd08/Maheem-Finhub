"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  BookOpen,
  Quote,
} from "lucide-react";
import StatCounter from "@/components/StatCounter";
import ThreeDCard from "@/components/ThreeDCard";

export default function AboutPage() {
  const [activeAct, setActiveAct] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const acts = [
    {
      num: "ACT I",
      year: "2010",
      title: "The Broken Paradigm",
      subtitle: "Why We Started",
      image: "/images/about_act1_problem.png",
      quote: "Financial advice in 2010 was designed to serve institutional balance sheets, not hard-working families.",
      content:
        "Sixteen years ago in Surat, we observed a heartbreaking trend. Families who spent decades building wealth were misled by opaque financial products, hidden commission structures, and aggressive sales targets. We knew there had to be a better way—a fiduciary sanctuary built solely on trust.",
      badge: "The Problem",
    },
    {
      num: "ACT II",
      year: "2015",
      title: "The Fiduciary Oath",
      subtitle: "Our Core Epiphany",
      image: "/images/about_story_handshake.png",
      quote: "What if financial advisory belonged 100% to the client, devoid of any hidden commission bias?",
      content:
        "We instituted a radical pledge: 100% unbiased advice, AMFI certification, and zero product push. By aligning our success exclusively with client portfolio growth, we earned the trust of over 500 pioneering families across Gujarat within our first 5 years.",
      badge: "The Epiphany",
    },
    {
      num: "ACT III",
      year: "2020",
      title: "Engineering Resilience",
      subtitle: "The Wealth Engine",
      image: "/images/about_hero_story.png",
      quote: "True wealth management isn't just about market upsides—it's about protecting capital when storms hit.",
      content:
        "When global markets faced unprecedented volatility in 2020, our proprietary risk-mitigation algorithms protected 1,000+ client portfolios with zero capital loss. We expanded institutional partnerships to 50+ premier banks to offer digital low-EMI loans.",
      badge: "The Engine",
    },
    {
      num: "ACT IV",
      year: "2026",
      title: "The Legacy Today",
      subtitle: "₹250Cr+ Impact",
      image: "/images/about_act4_legacy.png",
      quote: "Today, we stand proud as custodians of 1,200+ family legacies with ₹250Cr+ Assets Under Management.",
      content:
        "From securing 8.40% Home Loans for dream houses to generating multi-generational compounding wealth through automated SIPs, Maheem Finhub continues to lead Surat with cutting-edge digital calculators and human financial empathy.",
      badge: "The Legacy",
    },
  ];

  // Optional Auto-play timer for storytelling acts
  React.useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveAct((prev) => (prev + 1) % acts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, acts.length]);

  const currentAct = acts[activeAct];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen text-slate-900 overflow-hidden relative font-sans">
      
      {/* Light, Ultra-Fast Background Radial Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-emerald-50/40 to-transparent transform-gpu" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
      </div>

      <div className="relative z-10">
        
        {/* Story Intro Header */}
        <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-brand-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            <BookOpen className="w-4 h-4 text-brand-primary" /> An Interactive Financial Journey
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-slate-900 tracking-tight mb-6 leading-tight">
            The Story Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-indigo-600 to-emerald-600">Maheem Finhub</span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Step into our 16-year journey from a small Surat office to managing ₹250Cr+ in wealth across 1,200+ families.
          </p>

          {/* Act Navigator Pills & Auto Story Control */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {acts.map((act, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveAct(idx);
                  setIsPlaying(false);
                }}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                  activeAct === idx
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                    : "bg-white text-slate-600 border-slate-200/90 hover:bg-slate-50 hover:text-slate-900 shadow-sm"
                }`}
              >
                <span className="font-mono opacity-70">{act.num}</span>
                <span>{act.badge}</span>
              </button>
            ))}

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {isPlaying ? "⏸ Pause Auto-Story" : "▶ Play Auto-Story"}
            </button>
          </div>
        </section>

        {/* Interactive Light-Theme Act Viewer Card */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAct}
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-[2.8rem] p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Column: Story Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 text-brand-primary border border-indigo-100 text-xs font-bold tracking-widest uppercase">
                    {currentAct.num} • {currentAct.year}
                  </span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{currentAct.subtitle}</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight leading-tight">
                  {currentAct.title}
                </h2>

                {/* Pull Quote */}
                <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-brand-primary border border-slate-200/70 relative">
                  <Quote className="w-8 h-8 text-brand-primary/20 absolute top-2 right-2" />
                  <p className="text-slate-800 text-sm sm:text-base font-semibold italic leading-relaxed">
                    &ldquo;{currentAct.quote}&rdquo;
                  </p>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                  {currentAct.content}
                </p>

                {/* Act Step Controls */}
                <div className="pt-6 flex items-center justify-between border-t border-slate-100">
                  <button
                    disabled={activeAct === 0}
                    onClick={() => setActiveAct((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous Act
                  </button>

                  <div className="text-xs font-bold text-slate-400 tracking-widest">
                    CHAPTER {activeAct + 1} OF 4
                  </div>

                  <button
                    disabled={activeAct === acts.length - 1}
                    onClick={() => setActiveAct((prev) => Math.min(acts.length - 1, prev + 1))}
                    className="px-5 py-2 bg-slate-900 text-white hover:bg-brand-primary rounded-xl text-xs font-bold uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed transition-colors shadow-md"
                  >
                    Next Act →
                  </button>
                </div>
              </div>

              {/* Right Column: Photography in 3D Card Container */}
              <div className="lg:col-span-6 relative flex justify-center">
                <ThreeDCard intensity={16} className="w-full">
                  <div className="relative rounded-[2.2rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-900 preserve-3d group">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={currentAct.image}
                        alt={currentAct.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white preserve-3d">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1" style={{ transform: "translateZ(30px)" }}>
                        {currentAct.badge}
                      </span>
                      <p className="text-lg font-bold font-heading text-white" style={{ transform: "translateZ(40px)" }}>
                        {currentAct.title} ({currentAct.year})
                      </p>
                    </div>
                  </div>
                </ThreeDCard>
              </div>

            </motion.div>
          </AnimatePresence>
        </section>

        {/* Live Impact Stats Counter Ribbon */}
        <section className="py-14 border-y border-slate-200/80 bg-white/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200/80">
              <div className="text-center px-4">
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">Assets Managed</p>
                <div className="text-4xl md:text-5xl font-black text-brand-primary font-heading">
                  <StatCounter value={250} prefix="₹" suffix="Cr+" />
                </div>
              </div>
              <div className="text-center px-4">
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">Empowered Families</p>
                <div className="text-4xl md:text-5xl font-black text-emerald-600 font-heading">
                  <StatCounter value={1200} suffix="+" />
                </div>
              </div>
              <div className="text-center px-4">
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">Proven Track Record</p>
                <div className="text-4xl md:text-5xl font-black text-slate-900 font-heading">
                  <StatCounter value={15} suffix="+ Yrs" />
                </div>
              </div>
              <div className="text-center px-4">
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">Banking Partners</p>
                <div className="text-4xl md:text-5xl font-black text-indigo-600 font-heading">
                  <StatCounter value={50} suffix="+" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fiduciary Core Principles Bento */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Uncompromising Values</span>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight mb-4">
              Our Fiduciary Principles
            </h2>
            <p className="text-slate-600 text-base font-medium">Why 1,200+ families trust us with their financial future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <ThreeDCard intensity={12} className="md:col-span-2">
              <div className="bg-white border border-slate-200/90 p-10 rounded-[2.5rem] h-full shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6 font-bold shadow-sm">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">100% AMFI Fiduciary Loyalty</h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  We refuse to sell products with hidden kickbacks or inflated fees. As AMFI registered advisors, every financial recommendation is tailored strictly to maximize your long-term family wealth.
                </p>
              </div>
            </ThreeDCard>

            <ThreeDCard intensity={12}>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-10 rounded-[2.5rem] h-full shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="w-14 h-14 rounded-2xl bg-white text-emerald-600 flex items-center justify-center mb-6 font-bold border border-emerald-100 shadow-sm">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">Downside Protection</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Preserving your hard-earned capital during market downcycles is just as critical as capturing market alpha.
                </p>
              </div>
            </ThreeDCard>

          </div>
        </section>

        {/* CTA: Next Chapter */}
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight mb-6">
              Write Your Next Financial Chapter With Us
            </h2>
            <p className="text-slate-300 text-lg mb-8 font-medium max-w-2xl mx-auto">
              Schedule a free 1-on-1 portfolio review with our senior Surat advisors.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-highlight text-slate-950 font-black rounded-2xl text-sm uppercase tracking-wider hover:bg-emerald-400 transition-colors shadow-lg"
            >
              Book Free Advisory Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}