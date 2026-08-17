"use client";
import { useRef, MouseEvent } from "react";
import Link from "next/link";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import investingLottie from "@/assets/investing.json";
import RotatingWord from "@/components/RotatingWord";
import KineticText from "@/components/KineticText";
import MagneticButton from "@/components/MagneticButton";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const HERO_WORDS = ["Wealth Creation", "Financial Freedom", "Smart Investments", "Secure Future"];

const heroStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const heroBadgeItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const heroVisualItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
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

  const handleVisualMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 8);
    tiltX.set(-py * 8);
  };

  const handleVisualMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-white"
    >
      {/* Ambient Background Orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-highlight/8 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
        >
          {/* Left Content */}
          <div className="lg:w-3/5 text-center lg:text-left z-20">
            <motion.div
              variants={heroBadgeItem}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/6 border border-brand-primary/10 text-brand-primary font-semibold text-caption tracking-wide uppercase mb-8"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-primary" />
              </span>
              AMFI Registered Mutual Fund Distributor
            </motion.div>

            <h1 className="sr-only">Your Partner in Wealth Creation</h1>
            <div aria-hidden="true" className="mb-8">
              <div className="overflow-hidden pb-1">
                <KineticText
                  as="div"
                  trigger="load"
                  className="block text-display-xs sm:text-display-sm font-semibold text-brand-text-light tracking-tight"
                >
                  Your Partner in
                </KineticText>
              </div>
              <div className="overflow-hidden pb-3 mt-1 min-h-[1.1em]">
                <RotatingWord
                  words={HERO_WORDS}
                  className="text-display-md sm:text-display-lg md:text-display-xl lg:text-display-xxl font-heading font-extrabold text-brand-primary tracking-tight leading-[0.92]"
                />
              </div>
            </div>

            <motion.p
              variants={heroItem}
              className="text-body-lg text-brand-text-light mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Expertly crafted financial strategies tailored for you. Navigate the complex world
              of mutual funds, insurance, and loans with confidence.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MagneticButton>
                <Link
                  href="/calc"
                  className="relative overflow-hidden px-6 py-3 bg-brand-primary text-white rounded-3xl font-semibold shadow-sm w-full sm:w-auto flex items-center justify-center group text-button-md transition-all hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Financial Calculators
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/about"
                  className="relative overflow-hidden px-6 py-3 bg-white text-brand-text border border-brand-text/20 rounded-3xl font-semibold w-full sm:w-auto text-center text-button-md group transition-all hover:border-brand-text/40"
                >
                  <div className="absolute inset-0 bg-gray-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10">Know More About Us</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Content - Motion graphic with scroll parallax + mouse tilt */}
          <motion.div
            variants={heroVisualItem}
            className="lg:w-2/5 w-full h-85 md:h-110 relative flex items-center justify-center perspective-distant"
            onMouseMove={handleVisualMouseMove}
            onMouseLeave={handleVisualMouseLeave}
          >
            <motion.div
              style={{
                y: lottieY,
                opacity: lottieOpacity,
                rotateX: springTiltX,
                rotateY: springTiltY,
              }}
              className="w-full h-full relative animate-float-y"
            >
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-highlight/10 rounded-full blur-3xl z-0"
              />

              {/* Grounding panel behind the illustration */}
              <div
                aria-hidden="true"
                className="absolute inset-6 sm:inset-10 bg-brand-light/60 rounded-3xl z-0"
              />

              <div className="relative z-10 w-full h-full drop-shadow-2xl">
                <Player autoplay loop src={investingLottie} style={{ height: "100%", width: "100%" }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
