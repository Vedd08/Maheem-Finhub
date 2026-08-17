"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  formatter?: (n: number) => string;
  className?: string;
}

export default function AnimatedNumber({ value, formatter, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { damping: 26, stiffness: 130 });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatter ? formatter(latest) : Math.round(latest).toLocaleString("en-IN");
      }
    });
  }, [springValue, formatter]);

  return <span ref={ref} className={className}>{formatter ? formatter(value) : value.toLocaleString("en-IN")}</span>;
}
