import React from "react";
import { agencyConfig } from "@/config/agency";
import MeetBroker from "@/components/MeetBroker";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ShieldCheck, MapPin, Award, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-gold-600">
            हमारा परिचय
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-navy-900">
            {agencyConfig.name} — स्थानीय विश्वास और पारदर्शिता
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {agencyConfig.city} के रियल एस्टेट मार्केट में पिछले {agencyConfig.experienceYears} वर्षों से हम ग्राहकों को उनके सपनों का घर और सुरक्षित निवेश दिलाने के लिए समर्पित हैं।
          </p>
        </div>

        {/* Core Principles */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-xl font-black text-navy-900 pb-3 border-b border-slate-100">
            हमारी कार्यशैली एवं मूल्य (Our Core Values)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="space-y-2">
              <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                ज़ीरो हिडन चार्ज
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                डील होने से पहले ब्रोकरेज और कागजी खर्चों की पूरी स्थिति स्पष्ट की जाती है। कोई अचानक नया खर्च नहीं।
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                विवाद-मुक्त संपत्तियां
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                हम किसी भी विवादित, लिटिगेशन वाली या बिना पट्टे की प्रॉपर्टी में मध्यस्थता नहीं करते।
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-bold text-navy-900 block flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                आजीवन संबंध
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                हमारा उद्देश्य सिर्फ एक बार का कमीशन नहीं, बल्कि हर ग्राहक को अपना पारिवारिक रिश्तेदार मानकर सेवा देना है।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Broker Profile */}
      <MeetBroker />

      {/* Why Choose Us */}
      <div className="mt-12">
        <WhyChooseUs />
      </div>
    </div>
  );
}
