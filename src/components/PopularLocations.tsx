import React from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { MapPin, Navigation } from "lucide-react";

export default function PopularLocations() {
  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-gold-600">
              क्षेत्रीय विशेषज्ञता
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mt-1">
              {agencyConfig.city} के प्रमुख प्राइम इलाके
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              हर इलाके के सटीक रेट और डायरेक्ट ओनर लिस्टिंग्स
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {agencyConfig.serviceAreas.map((area) => (
            <Link
              key={area}
              href={`/properties?locality=${encodeURIComponent(area)}`}
              className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-gold-500/60 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-50 group-hover:bg-gold-500 text-gold-700 group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-navy-900 group-hover:text-gold-600 transition-colors">
                    {area}
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    प्रॉपर्टीज उपलब्ध
                  </span>
                </div>
              </div>
              <Navigation className="w-4 h-4 text-slate-300 group-hover:text-gold-500 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
