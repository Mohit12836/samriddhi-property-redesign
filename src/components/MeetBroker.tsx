import React from "react";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { Award, MapPin, Phone, MessageCircle, CheckCircle } from "lucide-react";

export default function MeetBroker() {
  const whatsappUrl = getGeneralWhatsAppLink(
    agencyConfig.whatsappNumber,
    `नमस्ते ${agencyConfig.brokerName.split(" ")[0]} जी, मुझे आपसे प्रॉपर्टी के संबंध में व्यक्तिगत सलाह लेनी है।`
  );

  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Real Broker Photo Card with Gold Ring */}
          <div className="relative shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-gold-500/40 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                alt={agencyConfig.brokerName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-navy-900 text-gold-400 text-[11px] font-black uppercase tracking-wider whitespace-nowrap shadow-md border border-gold-500/30">
              {agencyConfig.experienceYears}+ वर्ष अनुभव
            </div>
          </div>

          {/* Details & Direct Connect */}
          <div className="space-y-4 text-center md:text-left flex-grow">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <Award className="w-3.5 h-3.5" />
              <span>प्रमाणित स्थानीय प्रॉपर्टी सलाहकार</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-navy-900">
              {agencyConfig.brokerName}
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              "मेरा मानना है कि प्रॉपर्टी सिर्फ ईंट-पत्थर का सौदा नहीं, बल्कि परिवार के जीवनभर की गाढ़ी कमाई का फैसला है। हम सुनिश्चित करते हैं कि आपको बिना किसी हिडन चार्ज और विवाद-मुक्त संपत्ति मिले।"
            </p>

            <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> पारदर्शी ब्रोकरेज
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> लीगल पेपरवर्क सहायता
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-gold-600" /> {agencyConfig.city}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>सीधे राजेश जी से बात करें</span>
              </a>
              <a
                href={`tel:${agencyConfig.whatsappNumber}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 font-extrabold text-sm flex items-center justify-center gap-2 border border-slate-300"
              >
                <Phone className="w-4 h-4 text-navy-800" />
                <span>कॉल: {agencyConfig.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
