import React from "react";
import Link from "next/link";
import { sampleProperties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedProperties() {
  const featured = sampleProperties.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black mb-2 border border-amber-300">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>हॉट प्रॉपर्टी डील्स • FEATURED LISTINGS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
              खास चुनिंदा प्रॉपर्टीज (Featured Properties)
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1.5 font-semibold">
              वेरिफाइड टाइटल, चौड़ी सड़कें, और तुरंत कब्जे योग्य प्राइम लोकेशन्स
            </p>
          </div>

          <Link
            href="/properties"
            className="mt-4 sm:mt-0 px-5 py-3 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-black text-xs sm:text-sm inline-flex items-center gap-2 shadow-md transition-all hover:scale-105"
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
