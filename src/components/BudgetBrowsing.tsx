import React from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { IndianRupee, ArrowRight, Sparkles } from "lucide-react";

export default function BudgetBrowsing() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-black mb-2 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>स्मार्ट बजट सर्च</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            अपने तय बजट के अनुसार प्रॉपर्टी चुनें
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
            सस्ते प्लॉट्स से लेकर लग्जरी विला तक — हर वर्ग के लिए वेरिफाइड ऑप्शंस
          </p>
        </div>

        {/* 5 Dynamic Cards with Vibrant Shimmer & 3D Lift */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {agencyConfig.budgetRanges.map((range, idx) => (
            <Link
              key={range.id}
              href={`/properties?budget=${range.id}`}
              className="p-5 rounded-2xl bg-gradient-to-b from-white to-amber-50/40 border border-slate-200/90 card-3d-lift text-center flex flex-col items-center justify-between group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center font-black mb-3 shadow-md shadow-amber-500/25 group-hover:scale-110 transition-transform">
                <IndianRupee className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-black text-base sm:text-lg text-navy-900 group-hover:text-gold-600 transition-colors">
                {range.label}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {idx === 0 ? "सस्ते प्लॉट व मकान" : idx === 4 ? "प्रीमियम विला व कोठियां" : "फ्लैट व इंडिपेंडेंट होम"}
              </p>
              <span className="mt-4 px-3 py-1 rounded-full bg-white border border-gold-300 text-xs font-bold text-gold-700 inline-flex items-center gap-1 shadow-2xs group-hover:bg-gold-500 group-hover:text-white transition-all">
                <span>प्रॉपर्टीज देखें</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
