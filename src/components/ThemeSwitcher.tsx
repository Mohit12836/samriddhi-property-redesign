"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Palette, X, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";

export default function ThemeSwitcher() {
  const { activeDesignId, currentTheme, setDesignId, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🎨 FLOATING SWITCHER TRIGGER PILL (BOTTOM LEFT) */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-[#0F172A] hover:bg-slate-800 text-white font-black text-xs sm:text-sm border-2 border-amber-400 shadow-2xl transition-all hover:scale-105 active:scale-95 group"
          title="10 अलग-अलग डिज़ाइन देखें"
        >
          <div className="relative">
            <Palette className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
          </div>
          <span className="text-amber-300 font-extrabold">डिज़ाइन {activeDesignId}/10:</span>
          <span className="text-white hidden sm:inline">{currentTheme.hindiName}</span>
          <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded-full ml-1">
            बदलें
          </span>
        </button>
      </div>

      {/* 🪟 SLIDE-OVER DRAWER WITH ALL 10 DESIGNS */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-md h-full bg-[#0F172A] text-white p-5 flex flex-col justify-between shadow-2xl border-l border-slate-700 overflow-hidden">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-black text-white">
                    10 संपूर्ण डिज़ाइन सिस्टम्स
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-2 font-medium">
                किसी भी डिज़ाइन पर क्लिक करें—पूरी वेबसाइट (Header से Footer तक) 1 सेकंड में बदल जाएगी:
              </p>
            </div>

            {/* List of 10 Designs */}
            <div className="flex-1 my-4 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar">
              {allThemes.map((theme) => {
                const isActive = theme.id === activeDesignId;
                return (
                  <div
                    key={theme.id}
                    onClick={() => {
                      setDesignId(theme.id);
                      setIsOpen(false);
                    }}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isActive
                        ? "bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-400/10 scale-[1.02]"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Number Badge */}
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                          isActive
                            ? "bg-amber-400 text-slate-950 font-black"
                            : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {theme.id < 10 ? `0${theme.id}` : theme.id}
                      </span>

                      {/* Details */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                            {theme.hindiName}
                          </h4>
                          {theme.badge && (
                            <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-slate-800 text-amber-300 border border-slate-700">
                              {theme.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium mt-0.5 line-clamp-1">
                          {theme.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Active Checkmark or Swatch */}
                    <div className="shrink-0 flex items-center gap-1.5">
                      <span
                        className="w-4 h-4 rounded-full border border-white/30"
                        style={{ backgroundColor: theme.colors.accent }}
                        title="Primary Color"
                      />
                      {isActive && (
                        <CheckCircle2 className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer with Sharable URL tip */}
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>डायरेक्ट लिंक: <strong className="text-amber-300">?design={activeDesignId}</strong></span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs"
              >
                वेबसाइट देखें
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
