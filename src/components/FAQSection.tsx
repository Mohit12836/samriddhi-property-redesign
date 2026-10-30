"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "प्रॉपर्टी खरीद या बिक्री पर आपकी ब्रोकरेज (कमीशन) दर क्या है?",
      a: "हम राजस्थान रियल एस्टेट मानक नियमों के अनुसार पूरी तरह पारदर्शी ब्रोकरेज लेते हैं। सामान्यतः सेल/परचेज पर 1% से 2% (डील के आकार के आधार पर) और किराये की प्रॉपर्टी पर 1 महीने का किराया (15 दिन से 1 माह) लिया जाता है। सौदे से पहले सब कुछ लिखित में तय होता है।"
    },
    {
      q: "क्या साइट विजिट (प्रॉपर्टी देखने) का कोई शुल्क लिया जाता है?",
      a: "बिल्कुल नहीं! हमारे साथ प्रॉपर्टी देखने या साइट विजिट का कोई भी चार्ज नहीं है। आप अपनी सुविधानुसार समय तय करके प्रॉपर्टी देख सकते हैं।"
    },
    {
      q: "प्लॉट या मकान खरीदने से पहले दस्तावेजों की जांच कैसे होती है?",
      a: "हम हर प्रॉपर्टी का JDA पट्टा/नगर निगम पट्टा, रजिस्ट्री, पिछले 30 सालों का सर्च रिपोर्ट, नामांतरण (Mutation), और RERA स्थिति खुद वेरीफाई करते हैं। आप अपने निजी वकील से भी फाइल चेक करवा सकते हैं।"
    },
    {
      q: "क्या हमें बैंक से होम लोन कराने में मदद मिलेगी?",
      a: "हाँ, हम SBI, HDFC, ICICI, Bank of Baroda और LIC हाउसिंग फाइनेंस के अधिकृत डायरेक्ट सेलिंग एजेंट्स (DSA) के साथ जुड़े हैं। आपकी सैलरी या ITR के अनुसार 80% से 90% तक लोन पास कराने में हमारी टीम सहायता करती है।"
    },
    {
      q: "किराये के मकान या दुकान के लिए क्या औपचारिकताएं होती हैं?",
      a: "किरायेदार का पुलिस वेरिफिकेशन, आधार कार्ड, पैन कार्ड और 11 महीने का लीगल रेंट एग्रीमेंट (नोटरी / स्टाम्प) तैयार करवाने का सारा काम हमारे कार्यालय द्वारा कराया जाता है।"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>अक्सर पूछे जाने वाले सवाल</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900">
            प्रॉपर्टी डीलिंग से जुड़े आपके सामान्य सवाल
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            स्पष्ट और सटीक जानकारी ताकि आपके मन में कोई संशय न रहे
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="font-extrabold text-sm sm:text-base text-navy-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-gold-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-[#FAF9F6]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
