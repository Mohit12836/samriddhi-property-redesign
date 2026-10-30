"use client";

import React from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { IndianRupee, ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function BudgetBrowsing() {
  const { currentTheme } = useTheme();

  return (
    <section 
      className="py-16 sm:py-20 border-y transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.colors.cardBg,
        borderColor: currentTheme.colors.cardBorder,
        color: currentTheme.colors.textPrimary
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black mb-2 border shadow-xs"
            style={{
              backgroundColor: currentTheme.colors.badgeBg,
              color: currentTheme.colors.badgeText,
              borderColor: currentTheme.colors.cardBorder
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>स्मार्ट बजट सर्च</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            अपने तय बजट के अनुसार प्रॉपर्टी चुनें
          </h2>
          <p className="text-xs sm:text-sm opacity-75 mt-2 font-medium">
            सस्ते प्लॉट्स से लेकर लग्जरी विला तक — हर वर्ग के लिए वेरिफाइड ऑप्शंस
          </p>
        </div>

        {/* 5 Dynamic Cards with Vibrant Shimmer & 3D Lift */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {agencyConfig.budgetRanges.map((range, idx) => (
            <Link
              key={range.id}
              href={`/properties?budget=${range.id}`}
              className="p-5 rounded-2xl border text-center flex flex-col items-center justify-between group cursor-pointer transition-all hover:scale-105 hover:shadow-xl"
              style={{
                backgroundColor: currentTheme.colors.pageBg,
                borderColor: currentTheme.colors.cardBorder
              }}
            >
              <div 
                className="w-12 h-12 rounded-2xl text-white flex items-center justify-center font-black mb-3 shadow-md group-hover:scale-110 transition-transform"
                style={{ backgroundColor: currentTheme.colors.accent }}
              >
                <IndianRupee className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-black text-base sm:text-lg transition-colors">
                {range.label}
              </h3>
              <p className="text-xs opacity-75 mt-1 font-medium">
                {idx === 0 ? "सस्ते प्लॉट व मकान" : idx === 4 ? "प्रीमियम विला व कोठियां" : "फ्लैट व इंडिपेंडेंट होम"}
              </p>
              <span 
                className="mt-4 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 shadow-xs border group-hover:opacity-100 transition-all"
                style={{
                  backgroundColor: currentTheme.colors.cardBg,
                  borderColor: currentTheme.colors.cardBorder,
                  color: currentTheme.colors.accent
                }}
              >
                <span>देखें</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
