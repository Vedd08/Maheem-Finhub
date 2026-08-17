"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function DrawLine({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const ctx = gsap.context(() => {
      gsap.set(path, { drawSVG: "0%" });
      gsap.to(path, {
        drawSVG: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: svg,
          start: "top 75%",
          end: "bottom 55%",
          scrub: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 1000 2"
      preserveAspectRatio="none"
      fill="none"
    >
      <path ref={pathRef} d="M0,1 L1000,1" stroke="var(--color-brand-highlight)" strokeWidth="2" />
    </svg>
  );
}
