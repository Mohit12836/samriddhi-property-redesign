"use client";

import React from "react";
import Link from "next/link";
import { sampleProperties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function FeaturedProperties() {
  const { currentTheme } = useTheme();
  const featured = sampleProperties.filter((p) => p.featured).slice(0, 6);

  return (
    <section 
      className="relative py-14 sm:py-20 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.colors.pageBg,
        color: currentTheme.colors.textPrimary
      }}
    >
      {/* 🌊 Waving Ambient Light Aura */}
      <div 
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none ambient-light-blob-1 opacity-35" 
        style={{ backgroundColor: currentTheme.colors.accent }}
      />
      <div 
        className="absolute bottom-10 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none ambient-light-blob-2 opacity-35" 
        style={{ backgroundColor: currentTheme.colors.cardBorder }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black mb-2 border"
              style={{
                backgroundColor: currentTheme.colors.badgeBg,
                color: currentTheme.colors.badgeText,
                borderColor: currentTheme.colors.cardBorder
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>हॉट प्रॉपर्टी डील्स • FEATURED LISTINGS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight">
              खास चुनिंदा प्रॉपर्टीज ({currentTheme.hindiName})
            </h2>
            <p className="text-xs sm:text-sm md:text-base opacity-75 mt-1.5 font-semibold">
              वेरिफाइड टाइटल, चौड़ी सड़कें, और तुरंत कब्जे योग्य प्राइम लोकेशन्स
            </p>
          </div>

          <Link
            href="/properties"
            className={`mt-4 sm:mt-0 px-5 py-3 rounded-xl font-black text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all hover:scale-105 ${currentTheme.colors.secondaryButton}`}
          >
            <span>सभी 90+ लिस्टिंग्स देखें</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Clean Crisp Cards with Sharp Laser Light Border */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
