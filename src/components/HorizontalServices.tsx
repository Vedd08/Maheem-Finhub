"use client";
import { useLayoutEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { gsap } from "@/lib/gsap";
import ServiceCard from "./ServiceCard";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function HorizontalServices({ services }: { services: Service[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const getScrollDistance = () => track.scrollWidth - section.clientWidth;

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    }, section);

    return () => ctx.revert();
  }, [services.length]);

  return (
    <div ref={sectionRef} data-pin-section="services" className="relative overflow-hidden lg:min-h-screen lg:flex lg:items-center">
      <div
        ref={trackRef}
        data-track="services"
        className="flex flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:gap-8 lg:w-max lg:px-[8vw] lg:pr-[16vw]"
      >
        {services.map((service, index) => (
          <div key={index} className="lg:w-[380px] shrink-0">
            <ServiceCard title={service.title} description={service.description} icon={service.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
