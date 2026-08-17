"use client";
import { useRef, MouseEvent } from "react";
import Link from "next/link";
import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);
import investingLottie from "@/assets/investing.json";
import StatCounter from "@/components/StatCounter";
import RotatingWord from "@/components/RotatingWord";
import KineticText from "@/components/KineticText";
import MagneticButton from "@/components/MagneticButton";
import HorizontalServices from "@/components/HorizontalServices";
import DrawLine from "@/components/DrawLine";
import ThreeDCard from "@/components/ThreeDCard";
import { bankLogosList } from "@/components/BankLogos";
import MotionGraphicsBanner from "@/components/MotionGraphicsBanner";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users,
  Star,
  Search,
  Target,
  Briefcase,
  TrendingUp,
  LineChart,
  Home,
  Building2,
  Wallet,
  Award,
  Headphones,
  Calculator,
} from "lucide-react";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const lottieY = useTransform(heroProgress, [0, 1], [0, 140]);
  const lottieOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 20, mass: 0.5 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 20, mass: 0.5 });
  const visualRectRef = useRef<DOMRect | null>(null);

  const handleVisualMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    visualRectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleVisualMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!visualRectRef.current) {
      visualRectRef.current = e.currentTarget.getBoundingClientRect();
    }
    const rect = visualRectRef.current;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 8);
    tiltX.set(-py * 8);
  };

  const handleVisualMouseLeave = () => {
    visualRectRef.current = null;
    tiltX.set(0);
    tiltY.set(0);
  };

  const services = [
    {
      title: "Mutual Funds",
      description: "Build wealth over time with expertly curated SIPs and lumpsum investment strategies.",
      icon: LineChart,
    },
    {
      title: "Home Loan",
      description: "Turn your dream home into reality with our competitive interest rates and easy processing.",
      icon: Home,
    },
    {
      title: "Mortgage Loan",
      description: "Unlock the value of your property with hassle-free loan against property solutions.",
      icon: Building2,
    },
    {
      title: "Term Plan",
      description: "Secure your family's financial future with comprehensive life insurance coverage.",
      icon: ShieldCheck,
    }
  ];

  const stats: { icon: typeof Users; value: number; prefix?: string; suffix?: string; label: string }[] = [
    { icon: Users, value: 50, suffix: "K+", label: "Happy Clients" },
    { icon: Wallet, value: 200, prefix: "₹", suffix: "Cr+", label: "Assets Under Management" },
    { icon: Award, value: 15, suffix: "+", label: "Years Experience" },
    { icon: Headphones, value: 24, suffix: "/7", label: "Client Support" }
  ];

  const processSteps = [
    { title: "Understand", desc: "We analyze your financial goals and current portfolio.", icon: <Search className="w-6 h-6 text-brand-primary" /> },
    { title: "Plan", desc: "Create a customized investment strategy tailored for you.", icon: <Target className="w-6 h-6 text-brand-primary" /> },
    { title: "Invest", desc: "Execute the plan across mutual funds, insurance, or loans.", icon: <Briefcase className="w-6 h-6 text-brand-primary" /> },
    { title: "Track", desc: "Continuous monitoring and rebalancing of your portfolio.", icon: <TrendingUp className="w-6 h-6 text-brand-primary" /> }
  ];

  const partnerLogos = [
    { name: "HDFC Bank", logo: "/partners/hdfc.svg" },
    { name: "SBI", logo: "/partners/sbi.svg" },
    { name: "ICICI Bank", logo: "/partners/icici.svg" },
    { name: "Axis Bank", logo: "/partners/axis.svg" },
    { name: "Kotak Bank", logo: "/partners/kotak.svg" },
    { name: "Bank of Baroda", logo: "/partners/bob.svg" },
    { name: "Bajaj Finserv", logo: "/partners/bajaj.svg" },
    { name: "IDFC FIRST Bank", logo: "/partners/idfc.svg" },
    { name: "Tata Capital", logo: "/partners/tata.svg" },
  ];

  const heroWords = ["Wealth Creation", "Financial Freedom", "Smart Investments", "Secure Future"];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 24, rotateX: 20 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="flex flex-col font-sans overflow-hidden bg-background">

      {/* Hero Section - 3D Spline Integration */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-[#fafafa]">
        {/* Dynamic Mesh Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-brand-primary/10 to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tl from-brand-highlight/20 to-transparent rounded-full blur-[120px]" />
          {/* Floating Motion Graphic Particles */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[15%] w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-center text-brand-primary text-xl font-bold z-10 pointer-events-none hidden md:flex"
          >
            📈
          </motion.div>
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-[8%] w-14 h-14 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 shadow-lg flex items-center justify-center text-emerald-600 text-2xl font-bold z-10 pointer-events-none hidden md:flex"
          >
            💰
          </motion.div>
          <motion.div
            animate={{ y: [-10, 20, -10], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-36 right-[12%] w-10 h-10 rounded-xl bg-amber-400/20 backdrop-blur-md border border-amber-400/30 shadow-lg flex items-center justify-center text-amber-600 text-lg font-bold z-10 pointer-events-none hidden md:flex"
          >
            ⚡
          </motion.div>

          {/* Subtle grid overlay for texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L3N2Zz4=')] opacity-50" style={{ maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-20">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-brand-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-8 mx-auto lg:mx-0 w-fit group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-highlight opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-highlight"></span>
                </span>
                AMFI Registered Mutual Fund Distributor
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/0 via-brand-primary/5 to-brand-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <h1 className="sr-only">Your Partner in Wealth Creation</h1>
              <div aria-hidden="true" className="mb-6 flex flex-col items-center lg:items-start perspective-1000">
                <div className="overflow-hidden pb-1">
                  <KineticText
                    as="div"
                    trigger="load"
                    className="block text-display-sm sm:text-display-md font-semibold text-brand-text-light/80 tracking-tight"
                  >
                    Your Partner in
                  </KineticText>
                </div>
                <div className="overflow-hidden pb-4 mt-2 min-h-[1.2em]">
                  <RotatingWord
                    words={heroWords}
                    className="text-display-md sm:text-display-lg md:text-display-xl lg:text-display-xxl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-[#2a52be] tracking-tighter leading-[1.1] pb-2 preserve-3d"
                  />
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-body-lg text-brand-text/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Expertly crafted financial strategies tailored for you. Navigate the complex world of mutual funds, insurance, and loans with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap"
              >
                <MagneticButton>
                  <a
                    href="http://localhost:3001/calc/loan-sip"
                    className="relative overflow-hidden px-8 py-4 bg-brand-primary text-white rounded-full font-bold shadow-xl shadow-brand-primary/20 w-full sm:w-auto flex items-center justify-center group text-button-md transition-all hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Loan SIP Calculator
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/about" className="relative overflow-hidden px-8 py-4 bg-white/50 backdrop-blur-sm text-brand-text border-2 border-brand-primary/10 rounded-full font-bold w-full sm:w-auto text-center text-button-md group transition-all hover:bg-white hover:border-brand-primary/20 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
                    <span className="relative z-10">Know More About Us</span>
                  </Link>
                </MagneticButton>
              </motion.div>
             
              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-12 flex items-center gap-4 justify-center lg:justify-start grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden shadow-sm">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-brand-text-light flex flex-col items-start">
                  <div className="flex items-center text-brand-highlight">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <span>Trusted by 50K+ clients</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - 3D Visual container */}
            <div
              className="lg:w-1/2 w-full h-[400px] sm:h-[500px] md:h-[600px] relative flex items-center justify-center perspective-1000"
              onMouseEnter={handleVisualMouseEnter}
              onMouseMove={handleVisualMouseMove}
              onMouseLeave={handleVisualMouseLeave}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1.5, delay: 0.2, type: "spring", stiffness: 80, damping: 20 }}
                style={{ y: lottieY, opacity: lottieOpacity, rotateX: springTiltX, rotateY: springTiltY }}
                className="w-full h-full relative preserve-3d"
              >
                {/* Glowing backdrop specifically for the 3D area */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-highlight/15 rounded-full blur-[100px] z-0 animate-pulse"></div>

                <div className="relative z-10 w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] preserve-3d flex items-center justify-center bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10" />
                  {/* Decorative glass elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-highlight/10 rounded-tr-full" />
                  
                  {/* Lottie embedded inside a 3D elevated layer */}
                  <div className="relative w-full h-full p-8 transform-gpu preserve-3d flex items-center justify-center" style={{ transform: "translateZ(40px)" }}>
                    <Player
                      autoplay
                      loop
                      src={investingLottie}
                      style={{ height: '110%', width: '110%', objectFit: 'contain' }}
                    />
                  </div>
                </div>
                
                {/* Floating Stats Badge dynamically placed in 3D space */}
                <motion.div 
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 50 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="absolute bottom-20 -left-4 sm:-left-8 bg-white/90 backdrop-blur-md border border-white shadow-2xl rounded-2xl p-4 flex items-center gap-4 z-20 pointer-events-none transform-gpu"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-text-light font-bold uppercase tracking-wider">AUM Growth</p>
                    <p className="text-xl font-heading font-black text-brand-text">+24.5%</p>
                  </div>
                </motion.div>
                
                {/* Floating Shield Badge dynamically placed in 3D space */}
                <motion.div 
                  initial={{ opacity: 0, z: -50 }}
                  animate={{ opacity: 1, z: 80 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  className="absolute top-20 -right-2 sm:-right-6 bg-white/90 backdrop-blur-md border border-white shadow-2xl rounded-2xl p-3 flex items-center gap-3 z-20 pointer-events-none transform-gpu"
                  style={{ transform: "translateZ(120px)" }}
                >
                   <div className="w-10 h-10 rounded-full bg-brand-highlight/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-highlight" />
                  </div>
                  <div className="pr-2">
                    <p className="text-sm font-heading font-black text-brand-text">100% Secure</p>
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Network / Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100 overflow-hidden relative preserve-3d">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100"
          >
            {stats.map((stat, idx) => (
              <ThreeDCard key={idx} intensity={10} className="w-full">
                <motion.div
                  variants={fadeUpVariant}
                  className="text-center px-4 py-6 bg-white rounded-2xl shadow-sm border border-transparent hover:border-gray-100 transition-colors"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="mx-auto w-12 h-12 flex items-center justify-center mb-4 text-brand-highlight"
                  >
                    <stat.icon className="w-7 h-7" strokeWidth={2} />
                  </motion.div>
                  <h4 className="text-display-xs font-heading font-extrabold text-brand-primary mb-1 tracking-tight">
                    <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </h4>
                  <p className="text-caption text-gray-500 font-medium tracking-wide uppercase">{stat.label}</p>
                </motion.div>
              </ThreeDCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Associated Partners Marquee */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
           <KineticText as="h3" className="text-display-xs font-heading font-bold text-brand-text">Associated Partners</KineticText>
           <div className="h-1 w-16 bg-brand-highlight mx-auto mt-3 rounded"></div>
        </div>
        <div className="relative flex overflow-x-hidden group marquee-fade">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 py-4">
            {[...bankLogosList, ...bankLogosList, ...bankLogosList].map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center px-6 py-3 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:border-brand-primary/40 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md transform-gpu">
                <partner.Component />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Isometric Grid with Senior Motion Background */}
      <section className="py-28 bg-gradient-to-b from-slate-50 via-blue-50/40 to-slate-50 relative overflow-hidden preserve-3d">
        {/* Static Ambient Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 left-[10%] w-[35vw] h-[35vw] bg-brand-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 right-[10%] w-[40vw] h-[40vw] bg-brand-highlight/15 rounded-full blur-[150px]" />

          {/* Glowing Animated SVG Financial Flow Waves */}
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              d="M-100,180 C300,50 600,320 1000,140 C1400,-40 1700,220 2100,120"
              fill="none"
              stroke="url(#gradient-wave-1)"
              strokeWidth="3"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
              d="M-100,280 C250,380 700,120 1100,300 C1500,480 1800,180 2200,260"
              fill="none"
              stroke="url(#gradient-wave-2)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <defs>
              <linearGradient id="gradient-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#7bc243" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7bc243" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Financial Constellation Particle Nodes */}
          <motion.div
            animate={{ y: [-12, 12, -12], x: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-[20%] w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_12px_#1e3a8a]"
          />
          <motion.div
            animate={{ y: [14, -14, 14], x: [8, -8, 8] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-44 right-[25%] w-4 h-4 rounded-full bg-brand-highlight shadow-[0_0_15px_#7bc243]"
          />
          <motion.div
            animate={{ y: [-18, 18, -18] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-28 left-[35%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
          <KineticText as="h2" className="text-display-md md:text-display-lg font-heading font-black text-brand-primary mb-4">Our Expertise</KineticText>
          <div className="h-1.5 w-24 bg-gradient-to-r from-brand-highlight to-brand-primary mx-auto rounded-full shadow-sm"></div>
          <p className="text-brand-text-light max-w-2xl mx-auto mt-6 text-lg font-medium">Comprehensive financial products designed to meet your specific needs at every stage of life.</p>
        </div>

        {/* Replaced HorizontalServices with a true 3D spatial grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 perspective-1000">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                 <ThreeDCard key={idx} intensity={25}>
                    <div 
                       className="bg-white/70 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06)] h-full border border-white/80 hover:border-brand-primary/20 transition-all duration-300 flex flex-col group relative preserve-3d hover:shadow-[0_30px_60px_rgba(30,58,138,0.12)]"
                       style={{ transformStyle: "preserve-3d" }}
                    >
                       {/* Decorative 3D Glass Layer inside the card */}
                       <div 
                          className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                          style={{ transform: "translateZ(10px)" }} 
                       />
                       
                       <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full transition-transform group-hover:scale-110" />
                       
                       {/* Floating 3D Icon */}
                       <div 
                          className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mb-6 text-brand-primary group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-highlight group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl relative preserve-3d"
                          style={{ transform: "translateZ(60px)" }}
                       >
                          <service.icon className="w-8 h-8 transform-gpu" style={{ transform: "translateZ(20px)" }} />
                          {/* Glow effect behind icon on hover */}
                          <div className="absolute inset-0 bg-brand-highlight/40 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                       </div>
                       
                       {/* Floating Title */}
                       <h3 
                          className="text-xl font-bold font-heading text-brand-text mb-3 drop-shadow-sm"
                          style={{ transform: "translateZ(40px)" }}
                       >
                          {service.title}
                       </h3>
                       
                       {/* Floating Description */}
                       <p 
                          className="text-gray-500 text-sm leading-relaxed flex-grow"
                          style={{ transform: "translateZ(30px)" }}
                       >
                          {service.description}
                       </p>
                       
                       {/* Floating Call to Action */}
                       <div 
                          className="mt-6 flex items-center text-brand-highlight font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ transform: "translateZ(50px)" }}
                       >
                          <span className="transform translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-500 flex items-center">
                             Explore <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                       </div>
                    </div>
                 </ThreeDCard>
              ))}
           </div>
        </div>

        {/* Motion Graphics Interactive Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionGraphicsBanner />
        </div>
      </section>

      {/* Professional Process Timeline - Bright Light Theme with Animated Motion Background */}
      <section className="py-28 bg-gradient-to-b from-white via-slate-50/80 to-white text-slate-900 relative overflow-hidden preserve-3d border-t border-slate-100">
        {/* Ambient Glowing Light Physics */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[28vw] bg-gradient-to-r from-blue-100/60 via-emerald-100/60 to-indigo-100/60 rounded-full blur-[140px] opacity-60" />

          {/* Light Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">Step-By-Step Roadmap</span>
            <KineticText as="h2" className="text-display-sm md:text-display-md font-heading font-black text-brand-primary mb-4 tracking-tight">Our Professional Process</KineticText>
            <div className="h-1.5 w-20 bg-gradient-to-r from-brand-highlight to-brand-primary mx-auto rounded-full shadow-sm"></div>
          </div>

          <div className="relative">
            {/* Animated Laser Data Pulse Beam connecting steps */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[3px] bg-slate-200/80 z-0 overflow-hidden rounded-full border border-slate-100">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-highlight to-brand-primary shadow-[0_0_12px_#7bc243]"
              />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
            >
              {processSteps.map((step, idx) => (
                <ThreeDCard key={idx} intensity={18}>
                  <motion.div
                    variants={fadeUpVariant}
                    className="text-center bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-brand-primary/30 p-8 rounded-3xl transition-all duration-300 relative group shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] hover:-translate-y-1.5"
                  >
                    {/* Background Radar Ripple behind step badge */}
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                        className="absolute inset-0 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 pointer-events-none"
                      />
                      <motion.div
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-md relative transform-gpu z-10 group-hover:border-brand-primary/40 transition-colors"
                      >
                        <div className="text-brand-primary group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-brand-highlight to-emerald-500 rounded-full flex items-center justify-center text-slate-900 font-black text-xs shadow-md border border-white">
                          {idx + 1}
                        </div>
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading tracking-tight group-hover:text-brand-primary transition-colors">{step.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{step.desc}</p>
                  </motion.div>
                </ThreeDCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <KineticText as="h2" className="text-display-sm md:text-display-md font-heading font-extrabold text-brand-text leading-tight mb-4 tracking-tight">Why Choose Maheem Finhub?</KineticText>
                <p className="text-body-lg text-gray-500">
                  We don&apos;t just sell products; we craft solutions. Our AMFI registered experts ensure that every financial decision you make is optimized for long-term growth and security.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Unbiased, goal-oriented financial advice",
                  "Advanced comparison tools & calculators",
                  "End-to-end assistance with loan processing",
                  "Dedicated ongoing support & portfolio tracking"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-gray-100 transition-all"
                  >
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-highlight" />
                    </div>
                    <span className="text-base font-medium text-brand-text">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative perspective-1000"
            >
              <ThreeDCard intensity={25}>
                <div className="aspect-square md:h-[500px] rounded-[3rem] bg-gradient-to-br from-brand-primary to-blue-900 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(30,58,138,0.3)]">
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:30px_30px]"></div>
                   
                   {/* 3D Floating Elements inside Card */}
                   <motion.div 
                     animate={{ y: [-10, 10, -10], rotateZ: [0, 5, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     className="z-10"
                   >
                      <ShieldCheck className="w-20 h-20 text-brand-highlight mb-6 drop-shadow-[0_0_15px_rgba(123,194,67,0.5)]" />
                   </motion.div>
                   
                   <h3 className="text-white text-display-sm font-heading font-extrabold z-10 tracking-wide drop-shadow-md">
                     TRUST & TRANSPARENCY
                   </h3>
                   <p className="text-white/80 mt-4 z-10 max-w-sm text-body-sm">We believe in building long-lasting relationships based on absolute trust and clarity.</p>
                   
                   {/* Decorative 3D Spheres */}
                   <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                   <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-highlight/20 rounded-full blur-2xl"></div>
                </div>
              </ThreeDCard>

              <div className="absolute -bottom-6 -left-6 z-20 hidden md:block">
                <ThreeDCard intensity={15}>
                  <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-2xl border border-white flex items-center gap-4">
                    <div className="bg-brand-light p-3 rounded-2xl">
                      <Star className="w-6 h-6 text-brand-highlight fill-brand-highlight" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-text text-lg font-heading tracking-tight">Top Rated</p>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">Financial Advisor</p>
                    </div>
                  </div>
                </ThreeDCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-primary overflow-hidden preserve-3d">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <KineticText as="h2" className="text-display-sm md:text-display-md font-heading font-extrabold text-white mb-6 tracking-tight drop-shadow-md">Track Your Investment At One Click</KineticText>
            <p className="text-white/80 mb-10 text-body-lg max-w-2xl mx-auto font-medium">Compare loan rates, see the power of SIP investing, and get a perfectly balanced portfolio.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton>
                <a href="http://localhost:3001/calc/loan-sip" className="block px-8 py-4 bg-brand-highlight text-brand-text rounded-full font-bold text-button-md shadow-[0_0_30px_rgba(123,194,67,0.4)] hover:shadow-[0_0_40px_rgba(123,194,67,0.6)] hover:-translate-y-1 transition-all transform-gpu">
                  Loan SIP Calculator
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link href="/contact" className="block px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-button-md hover:bg-white hover:text-brand-primary hover:-translate-y-1 transition-all transform-gpu shadow-sm">
                  Get In Touch
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adding custom animations for marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
