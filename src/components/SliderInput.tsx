"use client";
import { useState } from "react";

interface SliderInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  accent?: string;
}

export default function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  accent = "var(--color-brand-primary)",
}: SliderInputProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editVal, setEditVal] = useState("");

  const commit = () => {
    setIsEditing(false);
    const num = parseFloat(editVal.replace(/[^0-9.]/g, ""));
    if (!isNaN(num) && num >= 0) onChange(num);
  };

  return (
    <div className="relative preserve-3d">
      <div className="flex items-center justify-between mb-3 gap-2 transform-gpu" style={{ transform: "translateZ(10px)" }}>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
        {isEditing ? (
          <div className="flex items-center text-sm font-bold px-3 py-1.5 rounded-lg bg-white shadow-md border border-brand-primary text-brand-primary tabular-nums whitespace-nowrap">
            {prefix && <span className="opacity-70">{prefix}</span>}
            <input
              type="text"
              inputMode="decimal"
              value={editVal}
              onChange={(e) => setEditVal(e.target.value)}
              onBlur={commit}
              onKeyDown={(e) => {
                if (e.key === "Enter") commit();
                if (e.key === "Escape") setIsEditing(false);
              }}
              onFocus={(e) => e.target.select()}
              autoFocus
              className="bg-transparent outline-none text-brand-primary font-bold tabular-nums text-center px-0.5"
              style={{ width: `${Math.max(2, editVal.length)}ch` }}
            />
            {suffix && <span className="opacity-70">{suffix}</span>}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setEditVal(value.toLocaleString("en-IN"));
              setIsEditing(true);
            }}
            className="text-sm font-bold px-3 py-1.5 rounded-lg bg-white shadow-sm border border-gray-100 hover:border-brand-primary text-brand-primary tabular-nums whitespace-nowrap cursor-pointer transition-all hover:shadow-md focus:outline-none"
          >
            {prefix}{value.toLocaleString("en-IN")}{suffix}
          </button>
        )}
      </div>
      
      {/* Custom styled range slider container */}
      <div className="relative transform-gpu" style={{ transform: "translateZ(5px)" }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ accentColor: accent }}
          className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer hover:opacity-100 opacity-90 transition-opacity"
        />
      </div>
      
      <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-2 tabular-nums uppercase tracking-wide transform-gpu" style={{ transform: "translateZ(5px)" }}>
        <span>{prefix}{min.toLocaleString("en-IN")}{suffix}</span>
        <span>{prefix}{max.toLocaleString("en-IN")}{suffix}</span>
      </div>
    </div>
  );
}
