"use client";
import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({ children, className = "", strength = 0.2 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const xVal = useMotionValue(0);
  const yVal = useMotionValue(0);
  const x = useSpring(xVal, { stiffness: 200, damping: 22, mass: 0.5 });
  const y = useSpring(yVal, { stiffness: 200, damping: 22, mass: 0.5 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current && ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
    const rect = rectRef.current;
    if (!rect) return;
    xVal.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    yVal.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => {
        if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rectRef.current = null;
        xVal.set(0);
        yVal.set(0);
      }}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
