import React from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { Home, Building2, MapPin, Briefcase, Trees, ArrowRight } from "lucide-react";

export default function PropertyCategories() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="w-6 h-6 text-gold-600" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-emerald-600" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-blue-600" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-purple-600" />;
      case "Trees":
        return <Trees className="w-6 h-6 text-green-600" />;
      default:
        return <Home className="w-6 h-6 text-gold-600" />;
    }
  };

  return (
    <section className="py-12 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-gold-600">
              प्रॉपर्टी श्रेणियां
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mt-1">
              आप किस प्रकार की प्रॉपर्टी तलाश रहे हैं?
            </h2>
          </div>
          <Link
            href="/properties"
            className="mt-2 sm:mt-0 text-xs sm:text-sm font-bold text-slate-700 hover:text-gold-600 inline-flex items-center gap-1 group"
          >
            <span>सभी 90+ लिस्टिंग्स देखें</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {agencyConfig.propertyCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/properties?category=${cat.id}`}
              className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-gold-500/50 hover:shadow-md transition-all text-center flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getIcon(cat.icon)}
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-navy-900 group-hover:text-gold-600 transition-colors">
                {cat.hindiLabel}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">{cat.label}</p>
              <span className="mt-2 text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 text-slate-700">
                {cat.count}+ उपलब्ध
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
