"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

export default function ServiceCard({ title, description, icon: Icon, variants = defaultVariants }: ServiceCardProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="group relative bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-2 overflow-hidden"
    >
      {/* Zero-cost CSS spotlight glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_center,rgba(30,58,138,0.06),transparent_70%)]" />

      {/* Draw-in Borders */}
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-highlight origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10"></div>

      <div className="relative z-20 flex flex-col h-full">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center mb-6 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white"
        >
          <Icon className="w-6 h-6" strokeWidth={2} />
        </motion.div>
        <h3 className="text-display-xs font-heading font-bold text-brand-text mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-500 mb-6 text-body-sm grow">{description}</p>
        <div className="mt-auto">
          <Link href="/contact" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-brand-highlight transition-colors text-caption uppercase tracking-wide">
            Know More <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
