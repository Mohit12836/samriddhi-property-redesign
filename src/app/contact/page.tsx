import React from "react";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const whatsappUrl = getGeneralWhatsAppLink(
    agencyConfig.whatsappNumber,
    "नमस्ते, मुझे आपके ऑफिस में मिलकर प्रॉपर्टी के बारे में चर्चा करनी है। कृपया समय बताएं।"
  );

  return (
    <div className="py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-gold-600">
            कार्यालय संपर्क
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-900 mt-1">
            हमसे संपर्क करें या ऑफिस पधारें
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            चाय पर मिलें और अपनी प्रॉपर्टी की जरूरतों पर खुलकर चर्चा करें
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Office Info Card */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                मुख्य कार्यालय
              </span>
              <h2 className="text-xl font-black text-navy-900">
                {agencyConfig.name}
              </h2>
              <p className="text-xs text-gold-600 font-semibold mt-0.5">
                {agencyConfig.brokerName}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-navy-900 block mb-0.5">पता:</span>
                  <span className="leading-relaxed">{agencyConfig.officeAddress}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span className="font-bold text-navy-900 block mb-0.5">फोन / मोबाइल:</span>
                  <a href={`tel:${agencyConfig.whatsappNumber}`} className="font-semibold text-emerald-700 hover:underline">
                    {agencyConfig.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span className="font-bold text-navy-900 block mb-0.5">ईमेल:</span>
                  <span>{agencyConfig.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <span className="font-bold text-navy-900 block mb-0.5">कार्यालय समय:</span>
                  <span>{agencyConfig.operatingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>व्हाट्सएप पर मीटिंग फिक्स करें</span>
              </a>

              <a
                href={agencyConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <span>Google Maps पर रास्ता देखें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Guidance / Location Map placeholder */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-navy-900 text-white space-y-4">
              <div className="flex items-center gap-2 text-gold-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>विजिट से पहले जरूरी सलाह:</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span>कृपया आने से 1 घंटा पूर्व फोन या व्हाट्सएप पर सूचित कर दें ताकि संबंधित प्रॉपर्टी के दस्तावेज उपलब्ध रहें।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span>यदि आप अपनी प्रॉपर्टी बेचना चाहते हैं, तो पट्टा/रजिस्ट्री की फोटोकॉपी साथ लाएं।</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0" />
                  <span>रविवार को भी ऑफिस खुला रहता है।</span>
                </li>
              </ul>
            </div>

            {/* Service Areas Quick Tags */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-2xs">
              <h3 className="font-bold text-sm text-navy-900 mb-3">
                हमारे सर्विस इलाके:
              </h3>
              <div className="flex flex-wrap gap-2">
                {agencyConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
