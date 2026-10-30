import React from "react";
import { ShieldCheck, FileCheck, Users, Banknote } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
      title: "100% वेरिफाइड दस्तावेज",
      desc: "JDA पट्टा, रजिस्ट्री, 90A, नामांतरण और टैक्स रसीद की पूरी कानूनी जांच के बाद ही हम प्रॉपर्टी लिस्ट करते हैं।"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "सीधा ओनर-बायर संवाद",
      desc: "कोई बीच का घालमेल नहीं। मालिक और खरीदार की आमने-सामने पारदर्शी मीटिंग और वास्तविक बातचीत।"
    },
    {
      icon: <Banknote className="w-6 h-6 text-gold-600" />,
      title: "बैंक होम लोन में पूर्ण सहायता",
      desc: "SBI, HDFC, ICICI, PNB सहित सभी प्रमुख सरकारी और प्राइवेट बैंकों से 80% से 90% तक लोन में कागजी मदद।"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: "सटीक लोकल मार्केट रेट्स",
      desc: "इलाके के असली जमीनी भाव की सही जानकारी ताकि आपका पैसा सुरक्षित रहे और घाटे का कोई सवाल न हो।"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-gold-600">
            हमारा संकल्प
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mt-1">
            ग्राहकों का भरोसा ही हमारी असली पहचान है
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            कोई झूठे वादे या बढ़ा-चढ़ाकर कही गई बातें नहीं — केवल व्यावहारिक और ईमानदार काम
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 hover:border-gold-500/50 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/60 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-extrabold text-base text-navy-900 mb-2">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
