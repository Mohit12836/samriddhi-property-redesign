import React from "react";
import SellPropertyCTA from "@/components/SellPropertyCTA";
import { agencyConfig } from "@/config/agency";
import { CheckCircle2, ShieldCheck, Clock, Users, ArrowRight } from "lucide-react";

export default function SellPage() {
  return (
    <div className="py-10 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-gold-600">
            ओनर स्पेशल पोर्टल
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-900">
            {agencyConfig.city} में अपनी प्रॉपर्टी जल्द और सही कीमत पर बेचें
          </h1>
          <p className="text-sm text-slate-600">
            हम सीधे वास्तविक खरीदारों से आपकी मीटिंग कराते हैं ताकि आपको बार-बार अनचाहे कॉल्स से परेशानी न हो।
          </p>
        </div>

        {/* 4 Step Selling Process */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-black text-sm flex items-center justify-center mb-3">
              1
            </span>
            <h3 className="font-bold text-sm text-navy-900 mb-1">विवरण शेयर करें</h3>
            <p className="text-xs text-slate-500">व्हाट्सएप पर अपनी प्रॉपर्टी का साइज, लोकेशन और अपेक्षित कीमत बताएं।</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-black text-sm flex items-center justify-center mb-3">
              2
            </span>
            <h3 className="font-bold text-sm text-navy-900 mb-1">मौके का मुआयना</h3>
            <p className="text-xs text-slate-500">हमारी टीम आकर प्रॉपर्टी की स्थिति और दस्तावेज जांचती है।</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-black text-sm flex items-center justify-center mb-3">
              3
            </span>
            <h3 className="font-bold text-sm text-navy-900 mb-1">वेरिफाइड खरीदार</h3>
            <p className="text-xs text-slate-500">हमारे एक्टिव खरीदारों के नेटवर्क में शेयर करके गंभीर ग्राहकों को विजिट कराते हैं।</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <span className="w-8 h-8 rounded-full bg-gold-100 text-gold-800 font-black text-sm flex items-center justify-center mb-3">
              4
            </span>
            <h3 className="font-bold text-sm text-navy-900 mb-1">सफल रजिस्ट्री</h3>
            <p className="text-xs text-slate-500">पेमेंट क्लीयरेंस और सब-रजिस्ट्रार ऑफिस में रजिस्ट्री का पूरा सहयोग।</p>
          </div>
        </div>
      </div>

      {/* Embedded WhatsApp Form */}
      <SellPropertyCTA />
    </div>
  );
}
