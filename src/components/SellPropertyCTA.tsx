"use client";

import React, { useState } from "react";
import { agencyConfig } from "@/config/agency";
import { getSellPropertyWhatsAppLink } from "@/data/properties";
import { Building, Send, ShieldAlert } from "lucide-react";

export default function SellPropertyCTA() {
  const [ownerName, setOwnerName] = useState("");
  const [propertyType, setPropertyType] = useState("मकान / विला");
  const [locality, setLocality] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getSellPropertyWhatsAppLink(agencyConfig.whatsappNumber, {
      ownerName,
      propertyType,
      locality,
      expectedPrice,
    });
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 -mr-24 w-80 h-80 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold border border-gold-500/30">
              <Building className="w-3.5 h-3.5" />
              <span>प्रॉपर्टी मालिकों के लिए विशेष सेवा</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              क्या आप अपनी प्रॉपर्टी बेचना या किराये पर देना चाहते हैं?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {agencyConfig.city} में हमारे पास हर महीने 500+ वेरिफाइड खरीदार और किरायेदार संपर्क करते हैं। हम आपकी प्रॉपर्टी का सही मूल्य दिलवाने और शीघ्र सौदा कराने में मदद करते हैं।
            </p>

            <div className="p-4 rounded-xl bg-navy-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-gold-400 font-bold">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>गोपनीयता नीति (Privacy Guarantee):</span>
              </div>
              <p>आपका व्यक्तिगत फोन नंबर या पता बिना आपकी सहमति के सार्वजनिक रूप से वेबसाइट पर प्रदर्शित नहीं किया जाता।</p>
            </div>
          </div>

          {/* Right Lead Capture Box with Running Border */}
          <div className="lg:col-span-6">
            <div className="running-light-border shadow-2xl">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 bg-white rounded-2xl text-slate-800 space-y-4">
                <h3 className="font-black text-xl text-navy-900">
                  प्रॉपर्टी विवरण भेजें (सीधे व्हाट्सएप पर)
                </h3>
                <p className="text-xs text-slate-500">
                  नीचे दी गई जानकारी भरें और एक क्लिक में हमारे व्हाट्सएप पर सबमिट करें।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      आपका शुभ नाम
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. अमित शर्मा"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      प्रॉपर्टी प्रकार
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                    >
                      <option value="स्वतंत्र मकान / विला">स्वतंत्र मकान / विला</option>
                      <option value="आवासीय प्लॉट">आवासीय प्लॉट (JDA/सोसायटी)</option>
                      <option value="फ्लैट (2/3 BHK)">फ्लैट (2/3 BHK)</option>
                      <option value="कमर्शियल दुकान/ऑफिस">कमर्शियल दुकान/ऑफिस</option>
                      <option value="कृषि भूमि / फार्महाउस">कृषि भूमि / फार्महाउस</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      इलाका / लोकेशन
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. मालवीय नगर, जगतपुरा"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      अपेक्षित कीमत (₹)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. ₹55 Lakh या ₹15,000 किराया"
                      value={expectedPrice}
                      onChange={(e) => setExpectedPrice(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>व्हाट्सएप पर डिटेल्स भेजें</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
