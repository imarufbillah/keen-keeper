"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value) ?? options[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {label && (
        <span className="text-sm text-muted shrink-0">{label}</span>
      )}
      <div ref={ref} className="relative">
        {/* Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border transition-colors bg-white ${
            open
              ? "border-primary text-primary ring-2 ring-primary/20"
              : "border-gray-200 text-heading hover:border-gray-300"
          }`}
        >
          {selected.label}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Menu */}
        {open && (
          <ul className="absolute z-50 mt-1.5 min-w-full w-max bg-white border border-gray-100 rounded-xl shadow-lg py-1 overflow-hidden">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-6 px-4 py-2 text-sm transition-colors ${
                    option.value === value
                      ? "text-primary bg-[#CBFADB]/50 font-medium"
                      : "text-heading hover:bg-gray-50"
                  }`}
                >
                  {option.label}
                  {option.value === value && (
                    <Check size={13} className="text-primary shrink-0" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
