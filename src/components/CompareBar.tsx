"use client";
import { motion } from "framer-motion";

interface CompareBarProps {
  label: string;
  valueA: number;
  valueB: number;
  format: (n: number) => string;
}

export default function CompareBar({ label, valueA, valueB, format }: CompareBarProps) {
  const max = Math.max(valueA, valueB, 1);
  const items = [
    { name: "Loan A", value: valueA, pct: (valueA / max) * 100, textColor: "text-brand-primary", bgColor: "bg-brand-primary" },
    { name: "Loan B", value: valueB, pct: (valueB / max) * 100, textColor: "text-brand-highlight", bgColor: "bg-brand-highlight" },
  ].sort((a, b) => b.value - a.value);

  return (
    <div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">{label}</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-gray-500 font-medium">{item.name}</span>
              <span className={`font-bold ${item.textColor} tabular-nums`}>{format(item.value)}</span>
            </div>
            <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`h-full rounded-full ${item.bgColor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
