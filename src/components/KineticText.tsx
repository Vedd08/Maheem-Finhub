"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText } from "@/lib/gsap";
import { motion } from "framer-motion";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

interface KineticTextProps {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  trigger?: "load" | "scroll";
  delay?: number;
  stagger?: number;
}

export default function KineticText({
  children,
  className = "",
  as = "div",
  trigger = "scroll",
  delay = 0,
  stagger = 0.04,
}: KineticTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Safety check: If element contains gradient text (bg-clip-text), GSAP SplitText will break CSS text-transparent
    if (el.querySelector(".bg-clip-text") || el.querySelector(".text-transparent")) {
      return;
    }

    const ctx = gsap.context(() => {
      SplitText.create(el, {
        type: "words",
        autoSplit: true,
        onSplit: (self) => {
          self.words.forEach((word) => {
            gsap.set(word, { display: "inline-block", verticalAlign: "baseline" });
          });
          return gsap.fromTo(
            self.words,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger,
              ease: "power3.out",
              delay,
              scrollTrigger:
                trigger === "scroll"
                  ? { trigger: el, start: "top 92%", once: true }
                  : undefined,
            }
          );
        },
      });
    }, ref as React.RefObject<HTMLElement>);

    return () => ctx.revert();
  }, [children, trigger, delay, stagger]);

  const Tag = as as React.ElementType;
  
  // If element contains gradient clip text, animate smoothly with motion wrapper to prevent text clipping
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="inline"
    >
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    </motion.div>
  );
}
