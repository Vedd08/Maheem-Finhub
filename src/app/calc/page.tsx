"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, PiggyBank, Home as HomeIcon, Calculator, ShieldCheck, Lock } from "lucide-react";
import KineticText from "@/components/KineticText";

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-24 overflow-hidden relative">
      
      {/* Psychological Color Backgrounds - Trust (Blue) & Growth (Emerald) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E0E7FF] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-[#D1FAE5] rounded-full blur-[120px] opacity-60" />
        
        {/* Crisp grid for an analytical, precise feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUsMjMsNDIsMC4wNSkiLz48L3N2Zz4=')] opacity-60" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Evoking Trust and Clarity */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm"
          >
             <ShieldCheck className="w-4 h-4" /> Secure Financial Toolkit
          </motion.div>
          
          <KineticText as="h1" className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 font-heading tracking-tight mb-6 leading-tight">
            Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Financial Future</span>
          </KineticText>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Data-driven intelligence to optimize your wealth, minimize debt, and secure your retirement.
          </motion.p>
        </div>

        {/* Dashboard Grid - Distinct distinct designs for each calculator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {/* 1. Flagship Tool - Light Mode Split Pane Design */}
           <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2 h-full group"
           >
              <Link href="/calc/loan-sip" className="block h-full">
                 <div className="bg-white border border-emerald-100 rounded-[2.5rem] p-2 shadow-xl hover:shadow-2xl transition-shadow h-full flex flex-col md:flex-row relative overflow-hidden">
                    {/* Left Content Area */}
                    <div className="p-8 md:p-10 md:w-3/5 relative z-10 flex flex-col justify-between h-full">
                       <div>
                         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-6 border border-emerald-100">
                            <TrendingUp className="w-4 h-4" /> Highest ROI Tool
                         </div>
                         <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-heading mb-4 leading-tight">
                            Home Loan vs SIP Optimizer
                         </h2>
                         <p className="text-slate-600 text-base md:text-lg max-w-md leading-relaxed">
                            The math banks don't want you to see. Compare your EMI against potential SIP investments and discover the optimal path.
                         </p>
                       </div>
                       <div className="mt-8 flex items-center gap-3 text-white font-bold">
                          <span className="bg-emerald-600 px-6 py-3 rounded-xl group-hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-200 flex items-center gap-2">
                            Launch Calculator <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                       </div>
                    </div>
                    
                    {/* Right Visual Area */}
                    <div className="md:w-2/5 bg-emerald-50/50 rounded-[2rem] relative overflow-hidden flex items-center justify-center p-8 m-2 border border-emerald-100/50 hidden md:flex">
                       <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-teal-50/50" />
                       <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-200/40 rounded-full blur-[60px]" />
                       
                       {/* Animated Bar Chart Representation */}
                       <div className="relative z-10 flex gap-4 items-end h-40">
                          <div className="w-10 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-xl h-16 group-hover:h-24 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
                          <div className="w-10 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t-xl h-24 group-hover:h-32 transition-all duration-700 delay-75 ease-out shadow-[0_0_15px_rgba(45,212,191,0.4)]" />
                          <div className="w-10 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t-xl h-32 group-hover:h-40 transition-all duration-700 delay-150 ease-out shadow-[0_0_15px_rgba(103,232,249,0.4)]" />
                       </div>
                    </div>
                 </div>
              </Link>
           </motion.div>

           {/* 2. SIP Engine - Glassmorphic Soft UI Design */}
           <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="h-full group"
           >
              <Link href="/calc/loan-sip" className="block h-full">
                 <div className="bg-white/50 backdrop-blur-3xl rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white h-full flex flex-col relative overflow-hidden">
                    {/* Organic glowing blobs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-300/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 delay-100" />
                    
                    <div className="relative z-10 flex-grow">
                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-8 text-white group-hover:-rotate-6 transition-transform duration-300">
                          <TrendingUp className="w-8 h-8" />
                       </div>
                       
                       <h3 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">SIP Engine</h3>
                       <p className="text-slate-600 text-sm leading-relaxed font-medium">
                          Harness the power of compounding. Project your wealth creation over 10, 20, or 30 years effortlessly.
                       </p>
                    </div>
                    
                    <div className="mt-8 relative z-10 flex items-center text-emerald-600 font-bold text-sm uppercase tracking-wider">
                       Explore Engine <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                 </div>
              </Link>
           </motion.div>

           {/* 3. Lumpsum - Neo-brutalist Design */}
           <motion.div 
              whileHover={{ x: -4, y: -4 }}
              transition={{ duration: 0.2 }}
              className="h-full group"
           >
              <Link href="/calc" className="block h-full">
                 <div className="h-full relative">
                    {/* Hard solid offset shadow */}
                    <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-3 group-hover:translate-y-3" />
                    
                    <div className="bg-white rounded-[2rem] p-8 border-2 border-slate-900 h-full flex flex-col relative z-10 transition-transform bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')]">
                       <div className="flex justify-between items-start mb-8">
                          <h3 className="text-3xl font-black text-slate-900 leading-none tracking-tight">Lumpsum<br/>Calc</h3>
                          <div className="bg-indigo-100 p-3 rounded-xl border border-slate-900 shadow-[2px_2px_0px_rgba(15,23,42,1)] group-hover:shadow-[4px_4px_0px_rgba(15,23,42,1)] transition-shadow">
                             <PiggyBank className="w-8 h-8 text-indigo-600" strokeWidth={2} />
                          </div>
                       </div>
                       
                       <p className="text-slate-700 font-bold mb-8 flex-grow text-sm">
                          Received a bonus or inheritance? Calculate exactly how much it will grow over time.
                       </p>
                       
                       <div className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-indigo-600 transition-colors border-2 border-slate-900 group-hover:border-indigo-600 shadow-[2px_2px_0px_rgba(15,23,42,1)] group-hover:shadow-none">
                          Calculate Now <ArrowRight className="w-4 h-4" />
                       </div>
                    </div>
                 </div>
              </Link>
           </motion.div>

           {/* 4. Property Predictor - Interactive Card */}
           <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2 h-full group"
           >
              <Link href="/calc/property-predictor" className="block h-full">
                 <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-10 h-full border border-indigo-900/50 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                       <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:text-indigo-300 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                          <HomeIcon className="w-8 h-8" />
                       </div>
                       <div className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-4">
                          New Calculator
                       </div>
                       <h3 className="text-3xl font-black text-white font-heading mb-3">Property Value Predictor</h3>
                       <p className="text-indigo-200/70 max-w-lg mx-auto font-medium text-sm mb-8">Calculate the true out-of-pocket cost of buying and furnishing a home, versus its estimated future value after paying off the loan.</p>
                       
                       <div className="w-full sm:w-auto py-3 px-8 bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-indigo-400 transition-colors shadow-lg">
                          Analyze Property <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                       </div>
                    </div>
                 </div>
              </Link>
           </motion.div>

        </div>
      </div>
    </div>
  );
}