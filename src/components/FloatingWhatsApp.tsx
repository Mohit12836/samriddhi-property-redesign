"use client";

import React, { useState } from "react";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { MessageCircle, Phone, X, CheckCircle2, ArrowRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappUrl = getGeneralWhatsAppLink(
    agencyConfig.whatsappNumber,
    "नमस्ते, मुझे प्रॉपर्टी के बारे में तुरंत जानकारी चाहिए।"
  );

  // Mohit P Jain WhatsApp Link
  const mohitWhatsAppMessage = "नमस्ते मोहित जी, मुझे अपनी रियल एस्टेट एजेंसी / प्रॉपर्टी बिज़नेस के लिए ऐसी ही शानदार वेबसाइट बनवानी है। कृपया आगे की प्रक्रिया बताएं।";
  const mohitWhatsAppUrl = `https://wa.me/916263879076?text=${encodeURIComponent(mohitWhatsAppMessage)}`;

  return (
    <>
      <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-40 md:bottom-5 md:right-5 md:left-auto md:w-auto p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t md:border border-slate-200 md:rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center gap-2 max-w-md mx-auto md:max-w-none">
          
          {/* 1. CALL & WHATSAPP BUTTONS BAR (MOBILE & PC BOTH) */}
          <div className="flex items-center gap-2 w-full">
            {/* Call Button for Mobile & PC */}
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-102 active:scale-95 shrink-0"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>कॉल करें</span>
            </a>

            {/* WhatsApp Button for Mobile & PC */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-102 active:scale-95 group whitespace-nowrap"
            >
              <div className="relative">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </div>
              <span>व्हाट्सएप पर तुरंत संपर्क करें</span>
            </a>
          </div>

          {/* 🟡 2. CALL/WHATSAPP BUTTON KE THEEK NICHE: CHHOTA PILA ROUND BOX */}
          <div
            onClick={() => setModalOpen(true)}
            className="w-full text-center py-1.5 px-3 rounded-full bg-[#FACC15] hover:bg-[#EAB308] text-slate-950 font-black text-[11px] sm:text-xs border border-[#CA8A04] shadow-sm cursor-pointer transition-transform hover:scale-102 active:scale-95 flex items-center justify-center gap-1.5"
          >
            <span>Website design Mohit P Jain</span>
            <span className="underline decoration-slate-950 underline-offset-2">click here</span>
            <span>aaj hi apni esi website banvaye</span>
          </div>

        </div>
      </aside>

      {/* 🪟 POPUP MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#090D1A] rounded-2xl border-2 border-amber-400 shadow-2xl p-6 text-white">
            
            {/* Close Button */}
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-amber-400" />
            </button>

            {/* Title */}
            <div className="text-center pb-3 border-b border-slate-800">
              <h4 className="text-xl font-black text-white">
                Mohit P Jain
              </h4>
              <p className="text-xs text-amber-300 font-bold mt-0.5">
                फ़ोन / व्हाट्सएप: 6263879076
              </p>
            </div>

            {/* Details List */}
            <div className="my-4 p-3.5 rounded-xl bg-slate-900 border border-slate-700">
              <span className="text-xs font-black text-amber-300 uppercase block mb-2">
                📋 वेबसाइट बनाने के लिए यह जानकारी भेजें:
              </span>
              <ul className="space-y-2 text-xs font-bold text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1. आपकी एजेंसी / फर्म का नाम व लोगो</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>2. ओनर का नाम व व्हाट्सएप नंबर</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>3. शहर व प्रमुख सर्विस एरियाज</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>4. 4 से 6 प्रॉपर्टीज की तस्वीरें, साइज व रेट्स</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <a
                href={mohitWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>व्हाट्सएप करें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:6263879076"
                className="py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center justify-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950" />
                <span>कॉल</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
