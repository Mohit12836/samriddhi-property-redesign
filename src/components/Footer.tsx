"use client";

import React from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] text-slate-300 pt-16 pb-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🏢 MAIN AGENCY FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
                स
              </div>
              <span className="font-extrabold text-xl text-white">
                {agencyConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              {agencyConfig.city} के प्रमुख क्षेत्रों में 12+ वर्षों का भरोसेमंद अनुभव। पारदर्शी सौदे, प्रत्यक्ष मालिक से बातचीत और कानूनी रजिस्ट्री में पूर्ण सहयोग।
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>प्रमुख सेवा क्षेत्र ({agencyConfig.city})</span>
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {agencyConfig.serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/properties?locality=${encodeURIComponent(area)}`}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                    <span>{area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/properties?type=house" className="hover:text-amber-400 transition-colors">
                  विला व स्वतंत्र मकान
                </Link>
              </li>
              <li>
                <Link href="/properties?type=plot" className="hover:text-amber-400 transition-colors">
                  JDA अप्रूव्ड प्लॉट्स
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-amber-400 transition-colors text-amber-400">
                  अपनी प्रॉपर्टी फ्री में लिस्ट करें →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base mb-4">कार्यालय संपर्क</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-slate-300">{agencyConfig.officeAddress}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${agencyConfig.whatsappNumber}`} className="hover:text-amber-400 font-bold text-white">
                {agencyConfig.displayPhone}
              </a>
            </div>
          </div>
        </div>

        {/* 🏢 COPYRIGHT BAR */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {agencyConfig.name}. All rights reserved.</p>
          <p>Verified Property Dealer Portal Jaipur</p>
        </div>

      </div>
    </footer>
  );
}
