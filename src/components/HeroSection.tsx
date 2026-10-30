"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { agencyConfig } from "@/config/agency";
import { 
  Search, MapPin, Home, IndianRupee, ShieldCheck, CheckCircle2, Sparkles, 
  Phone, MessageCircle, ArrowRight, Award, Compass, Calculator, Star, Building2, Trees 
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { getGeneralWhatsAppLink, sampleProperties } from "@/data/properties";

export default function HeroSection() {
  const router = useRouter();
  const { currentTheme } = useTheme();
  const [transactionType, setTransactionType] = useState<"all" | "buy" | "rent" | "plot">("all");
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (transactionType !== "all") params.append("transaction", transactionType);
    if (selectedLocality) params.append("locality", selectedLocality);
    if (selectedBudget) params.append("budget", selectedBudget);
    router.push(`/properties?${params.toString()}`);
  };

  const whatsappGeneralUrl = getGeneralWhatsAppLink(
    agencyConfig.whatsappNumber,
    "नमस्ते, मुझे जयपुर में प्रॉपर्टी देखनी है। कृपया उपयुक्त विकल्प बताएं।"
  );

  const featuredVilla = sampleProperties[0];

  return (
    <section 
      className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden transition-all duration-300"
      style={{
        background: currentTheme.colors.heroGradient,
        color: currentTheme.colors.textPrimary
      }}
    >
      {/* 🌊 Floating Ambient Waves */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ambient-light-blob-1 opacity-40" style={{ backgroundColor: currentTheme.colors.accent }} />
      <div className="absolute top-1/2 left-5 w-80 h-80 rounded-full blur-3xl pointer-events-none ambient-light-blob-2 opacity-30" style={{ backgroundColor: currentTheme.colors.cardBorder }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            LAYOUT 2: MODERN SPLIT-SCREEN APP PORTAL (स्प्लिट स्क्रीन लीड मशीन)
           ========================================================================= */}
        {currentTheme.layoutType === "split" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Lead Machine Form & Headline */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black border"
                style={{ backgroundColor: currentTheme.colors.badgeBg, color: currentTheme.colors.badgeText, borderColor: currentTheme.colors.cardBorder }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>डिजिटल प्रॉपर्टी ब्रोकर पोर्टल • डायरेक्ट ओनर डील्स</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                जयपुर में बिना किसी ब्रोकरेज भ्रम के पाएं अपना{" "}
                <span className="underline decoration-emerald-500">सपनों का आशियाना</span>
              </h1>

              <p className="text-sm sm:text-base opacity-80 font-medium">
                100% सत्यापित JDA पट्टा प्लॉट्स, लग्जरी विला और रेडी-टू-मूव फ्लैट्स। सीधे ओनर से बात करें।
              </p>

              {/* Fast Search Card */}
              <div 
                className="p-5 rounded-2xl border shadow-xl"
                style={{ backgroundColor: currentTheme.colors.cardBg, borderColor: currentTheme.colors.cardBorder }}
              >
                <form onSubmit={handleSearch} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <select
                      value={selectedLocality}
                      onChange={(e) => setSelectedLocality(e.target.value)}
                      className="p-2.5 rounded-xl border text-xs font-bold bg-slate-50 text-slate-800"
                    >
                      <option value="">सभी इलाके (Locality)</option>
                      {agencyConfig.serviceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>

                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="p-2.5 rounded-xl border text-xs font-bold bg-slate-50 text-slate-800"
                    >
                      <option value="">बजट चुनें (Budget)</option>
                      {agencyConfig.budgetRanges.map((b) => (
                        <option key={b.id} value={b.id}>{b.label}</option>
                      ))}
                    </select>

                    <button
                      type="submit"
                      className={`p-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-2 shadow-md ${currentTheme.colors.primaryButton}`}
                    >
                      <Search className="w-4 h-4" />
                      <span>प्रॉपर्टी खोजें</span>
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold opacity-80 pt-1">
                <span>✓ ₹0 हिडन चार्ज</span>
                <span>✓ 100% लीगल टाइटल</span>
                <span>✓ फ्री साइट विजिट</span>
              </div>
            </div>

            {/* Right Col: Interactive Hot Deal Showcase */}
            <div className="lg:col-span-5">
              <div 
                className="p-3 rounded-2xl border shadow-2xl relative overflow-hidden group"
                style={{ backgroundColor: currentTheme.colors.cardBg, borderColor: currentTheme.colors.cardBorder }}
              >
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <img
                    src={featuredVilla.images[0]}
                    alt={featuredVilla.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-emerald-600 text-white font-black text-[10px] shadow-md uppercase">
                    आज की हॉट डील
                  </span>
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/80 backdrop-blur-md text-white flex justify-between items-center">
                    <div>
                      <div className="text-xs font-bold text-emerald-400">{featuredVilla.locality}</div>
                      <div className="text-lg font-black">{featuredVilla.displayPrice}</div>
                    </div>
                    <a
                      href={whatsappGeneralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-1"
                    >
                      <span>व्हाट्सएप</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 3: CORPORATE INVESTMENT & DATA MATRIX (कॉर्पोरेट वेल्थ)
           ========================================================================= */}
        {currentTheme.layoutType === "matrix" && (
          <div className="space-y-6 text-center max-w-5xl mx-auto">
            {/* Top Corporate Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1E3E62] text-cyan-300 text-xs font-black tracking-wider uppercase">
              <Award className="w-4 h-4" />
              <span>Institutional Grade Property Brokerage • Jaipur Capital</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              सुरक्षित रियल एस्टेट निवेश और{" "}
              <span className="text-cyan-600 underline decoration-cyan-400">उच्च रिटर्न (High ROI)</span> संपत्तियां
            </h1>

            {/* 3 Metric Counters */}
            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-300 shadow-lg text-slate-900">
              <div>
                <div className="text-xl sm:text-3xl font-black text-[#1E3E62]">₹150+ Cr</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500">ट्रांजैक्शन वॉल्यूम</div>
              </div>
              <div className="border-x border-slate-200">
                <div className="text-xl sm:text-3xl font-black text-emerald-600">100%</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500">लीगल टाइटल क्लियर</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-black text-[#1E3E62]">1200+</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500">संतुष्ट निवेशक परिवार</div>
              </div>
            </div>

            {/* Matrix Search Form */}
            <div className="max-w-4xl mx-auto p-4 rounded-xl bg-white border-2 border-[#1E3E62] shadow-xl text-left">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <select
                  value={transactionType}
                  onChange={(e: any) => setTransactionType(e.target.value)}
                  className="p-2.5 rounded-lg border text-xs font-bold text-slate-900 bg-slate-50"
                >
                  <option value="all">सभी एसेट क्लास</option>
                  <option value="buy">रेजिडेंशियल मकान</option>
                  <option value="plot">JDA पट्टा प्लॉट</option>
                  <option value="rent">कमर्शियल लीज</option>
                </select>

                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="p-2.5 rounded-lg border text-xs font-bold text-slate-900 bg-slate-50"
                >
                  <option value="">इलाका चुनें</option>
                  {agencyConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="p-2.5 rounded-lg border text-xs font-bold text-slate-900 bg-slate-50"
                >
                  <option value="">निवेश बजट</option>
                  {agencyConfig.budgetRanges.map((b) => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="p-2.5 rounded-lg font-black text-xs bg-[#1E3E62] hover:bg-[#0B192C] text-white flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Search className="w-4 h-4" />
                  <span>इन्वेस्टमेंट खोजें</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 4: JAIPUR HERITAGE SANDSTONE (हेरिटेज गुलाबी नगरी)
           ========================================================================= */}
        {currentTheme.layoutType === "heritage" && (
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#78350F] text-xs font-black shadow-xs">
              <span>🚩</span>
              <span>गुलाबी नगरी जयपुर की सबसे पुरानी व विश्वसनीय प्रॉपर्टी ब्रोकरेज</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#451A03] tracking-tight leading-tight font-serif">
              जयपुर की पावन धरा पर अपना{" "}
              <span className="text-[#B45309] underline decoration-[#D97706]">शुभ गृह व JDA भूखंड</span>
            </h1>

            <p className="text-sm sm:text-base text-[#78350F] font-bold max-w-2xl mx-auto">
              जगतपुरा, मानसरोवर, वैशाली नगर एवं टोंक रोड पर विवाद-मुक्त पुश्तैनी एवं रजिस्टर्ड प्रॉपर्टीज।
            </p>

            {/* Heritage Locality Quick Matrix */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {agencyConfig.serviceAreas.slice(0, 6).map((locality) => (
                <button
                  key={locality}
                  type="button"
                  onClick={() => {
                    setSelectedLocality(locality);
                    router.push(`/properties?locality=${encodeURIComponent(locality)}`);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#FDE68A] text-[#78350F] font-bold text-xs hover:bg-[#FEF3C7] transition-all shadow-xs"
                >
                  📍 {locality}
                </button>
              ))}
            </div>

            {/* Heritage Search Box */}
            <div className="mt-6 max-w-3xl mx-auto p-4 rounded-2xl bg-white border-2 border-[#B45309] shadow-xl text-left">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="p-2.5 rounded-xl border text-xs font-bold text-[#451A03] bg-[#FFFBEB]"
                >
                  <option value="">प्रमुख इलाका चुनें</option>
                  {agencyConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="p-2.5 rounded-xl border text-xs font-bold text-[#451A03] bg-[#FFFBEB]"
                >
                  <option value="">बजट सीमा</option>
                  {agencyConfig.budgetRanges.map((b) => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white font-black text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Search className="w-4 h-4" />
                  <span>प्रॉपर्टीज देखें</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 5: CYBER NEO 360° LASER (फ्यूचरिस्टिक डार्क लेज़र)
           ========================================================================= */}
        {currentTheme.layoutType === "cyber" && (
          <div className="text-center max-w-4xl mx-auto space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/60 text-cyan-300 text-xs font-black shadow-lg shadow-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>AI & LASER POWERED REAL ESTATE RADAR 2.0</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400">
                100% VERIFIED
              </span>{" "}
              DEALS IN JAIPUR
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-400 font-bold max-w-2xl mx-auto">
              जीरो फ्रॉड, डायरेक्ट सैटेलाइट जिओ-टैग्ड JDA प्लॉट्स और लक्ज़री विला।
            </p>

            {/* Glowing Cyber Laser Box */}
            <div className="laser-running-card max-w-4xl mx-auto shadow-2xl">
              <div className="laser-running-card-inner p-4 sm:p-6 bg-[#0B0F19] text-white">
                <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <select
                    value={transactionType}
                    onChange={(e: any) => setTransactionType(e.target.value)}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-black"
                  >
                    <option value="all">ALL CATEGORIES</option>
                    <option value="buy">BUY HOUSE/VILLA</option>
                    <option value="plot">JDA PLOTS</option>
                    <option value="rent">RENTALS</option>
                  </select>

                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold"
                  >
                    <option value="">SELECT LOCALITY</option>
                    {agencyConfig.serviceAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>

                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold"
                  >
                    <option value="">BUDGET LIMIT</option>
                    {agencyConfig.budgetRanges.map((b) => (
                      <option key={b.id} value={b.id}>{b.label}</option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    className="p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/30"
                  >
                    <Search className="w-4 h-4" />
                    <span>RADAR SEARCH</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 6: SCANDINAVIAN MINIMAL ARCHITECTURE (अल्ट्रा-क्लीन मिनिमल)
           ========================================================================= */}
        {currentTheme.layoutType === "minimal" && (
          <div className="text-left max-w-4xl mx-auto space-y-4 text-black">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block">
              Curated Property Brokerage • Jaipur
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-900 leading-none">
              Simplicity in <strong className="font-black">Living & Land</strong>.
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 max-w-xl font-normal leading-relaxed">
              No noise. No exaggerated claims. Only genuine, verified houses and JDA plots with direct owner transparency.
            </p>

            {/* Minimal Strip Search */}
            <div className="pt-4">
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2 border-b-2 border-black pb-3">
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="w-full sm:w-auto p-2 bg-transparent text-sm font-bold text-black border-none focus:outline-none"
                >
                  <option value="">सभी इलाके (All Localities)</option>
                  {agencyConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full sm:w-auto p-2 bg-transparent text-sm font-bold text-black border-none focus:outline-none"
                >
                  <option value="">बजट (All Budgets)</option>
                  {agencyConfig.budgetRanges.map((b) => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded-none"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 7: LUXURY VILLA & FARMHOUSE SHOWCASE (विला रिज़ॉर्ट लिविंग)
           ========================================================================= */}
        {currentTheme.layoutType === "villa" && (
          <div className="text-center max-w-5xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-black">
              <Trees className="w-4 h-4 text-rose-600" />
              <span>प्राइवेट स्विमिंग पूल, क्लब व गार्डन युक्त विला और फार्महाउस</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-rose-950 tracking-tight leading-tight">
              सपनों का लक्ज़री विला —{" "}
              <span className="text-rose-600 underline decoration-rose-400">प्रकृति के संग</span>
            </h1>

            <p className="text-sm sm:text-base text-rose-800 font-semibold max-w-2xl mx-auto">
              जयपुर के प्राइम ग्रीन बेल्ट्स में 3 & 4 BHK स्वतंत्र डुप्लेक्स विला और 1 बीघा फार्महाउस लैंड्स।
            </p>

            {/* Villa Amenities Highlight Strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black text-rose-900 pt-1">
              <span className="flex items-center gap-1">🏊‍♂️ स्विमिंग पूल</span>
              <span className="flex items-center gap-1">🌳 प्राइवेट गार्डन</span>
              <span className="flex items-center gap-1">🚗 3 कार पार्किंग</span>
              <span className="flex items-center gap-1">🛡️ 24/7 गेटेड सिक्योरिटी</span>
            </div>

            {/* Search Box */}
            <div className="mt-4 max-w-3xl mx-auto p-4 rounded-2xl bg-white border-2 border-rose-300 shadow-xl">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="p-2.5 rounded-xl border border-rose-200 text-xs font-bold text-rose-900 bg-rose-50"
                >
                  <option value="">इलाका चुनें</option>
                  {agencyConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="p-2.5 rounded-xl border border-rose-200 text-xs font-bold text-rose-900 bg-rose-50"
                >
                  <option value="">बजट सीमा</option>
                  {agencyConfig.budgetRanges.map((b) => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Search className="w-4 h-4" />
                  <span>विला खोजें</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 8: PRIME JDA PLOTS & COMMERCIAL SPECIALIST (प्लॉट स्पेशलिस्ट)
           ========================================================================= */}
        {currentTheme.layoutType === "plots" && (
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm">
              <span>📐 100 गज से 5 बीघा तक • डायरेक्ट ओनर रेट्स</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              जयपुर में JDA पट्टा प्लॉट एवं{" "}
              <span className="text-amber-600 underline decoration-amber-400">कमर्शियल जमीन</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-extrabold max-w-2xl mx-auto">
              30ft, 40ft, 60ft और 100ft चौड़ी सड़कों पर कॉर्नर एवं पार्क फेसिंग भूखंड। बैंक लोन व तुरंत पट्टा।
            </p>

            {/* Road Size Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-black">
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white">🛣️ 40 Ft रोड</span>
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white">🛣️ 60 Ft रोड</span>
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white">🛣️ 100 Ft मुख्य मार्ग</span>
              <span className="px-3 py-1 rounded-md bg-amber-400 text-slate-950">✓ कॉर्नर प्लॉट</span>
            </div>

            {/* Plots Search Box */}
            <div className="mt-4 max-w-3xl mx-auto p-4 rounded-2xl bg-white border-2 border-amber-400 shadow-xl">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="p-2.5 rounded-xl border text-xs font-bold text-slate-900 bg-amber-50/50"
                >
                  <option value="">कॉलोनी / इलाका</option>
                  {agencyConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="p-2.5 rounded-xl border text-xs font-bold text-slate-900 bg-amber-50/50"
                >
                  <option value="">बजट (लाख/करोड़)</option>
                  {agencyConfig.budgetRanges.map((b) => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Search className="w-4 h-4" />
                  <span>प्लॉट लिस्ट देखें</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 9: APPLE SPATIAL 3D FROSTED GLASS (विजन 3D ग्लास)
           ========================================================================= */}
        {currentTheme.layoutType === "spatial" && (
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white text-blue-700 text-xs font-black shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>VisionOS Spatial Property Experience</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              आधुनिक जीवनशैली के लिए{" "}
              <span className="text-blue-600 underline decoration-blue-300">प्रीमियम संपत्तियां</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-semibold max-w-2xl mx-auto">
              पारदर्शी, तकनीकी और सहज प्रॉपर्टी सर्च। अपने मोबाइल से सीधे एक्सप्लोर करें।
            </p>

            {/* Spatial Frosted Glass Search Card */}
            <div className="mt-6 max-w-3xl mx-auto p-5 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl">
              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="p-3 rounded-2xl bg-white/90 border border-slate-200 text-xs font-bold text-slate-900 shadow-xs"
                >
                  <option value="">स्थान चुनें</option>
                  {agencyConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="p-3 rounded-2xl bg-white/90 border border-slate-200 text-xs font-bold text-slate-900 shadow-xs"
                >
                  <option value="">बजट ब्रैकेट</option>
                  {agencyConfig.budgetRanges.map((b) => (
                    <option key={b.id} value={b.id}>{b.label}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
                >
                  <Search className="w-4 h-4" />
                  <span>सर्च करें</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 10: VIP HNI PRIVATE ESTATE (एक्सक्लूसिव ब्लैक & 24K गोल्ड)
           ========================================================================= */}
        {currentTheme.layoutType === "vip" && (
          <div className="text-center max-w-4xl mx-auto space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 text-xs font-black tracking-widest uppercase">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>By Invitation Only • VIP Real Estate Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white font-serif">
              अति-विशिष्ट वर्ग के लिए{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-200">
                शाही संपत्तियां
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-400 font-medium max-w-2xl mx-auto">
              जयपुर के सबसे प्रतिष्ठित पतों (सी-स्कीम, सिविल लाइन्स, वैशाली नगर) पर चुनिंदा प्राइवेट विला एवं बंगले।
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>प्राइवेट ओनर मीटिंग शेड्यूल करें</span>
              </a>

              <a
                href={`tel:${agencyConfig.whatsappNumber}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 border border-amber-500/40 text-amber-300 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>डायरेक्ट डायरेक्टर कॉल</span>
              </a>
            </div>
          </div>
        )}

        {/* =========================================================================
            LAYOUT 1: CLASSIC RAJASTHAN TRUST (DEFAULT FOUNDER SUITE + LASER SEARCH)
           ========================================================================= */}
        {currentTheme.layoutType === "classic" && (
          <div className="text-center max-w-4xl mx-auto space-y-4">
            
            {/* 🏛️ EXECUTIVE MANAGING DIRECTOR & FOUNDER PROFILE SUITE */}
            <div className="max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200/90 shadow-md p-3 sm:p-4 text-left transition-all hover:border-amber-400/80">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4">
                
                {/* Executive Photo with Solid Brass/Navy Frame */}
                <div className="relative shrink-0">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-amber-500/70 shadow-sm bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                      alt={agencyConfig.brokerName}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#0F172A] text-amber-300 text-[9px] font-black uppercase tracking-wider whitespace-nowrap shadow-xs border border-amber-400/30">
                    संस्थापक
                  </span>
                </div>

                {/* Founder Identity & Executive Brand Details */}
                <div className="flex-1 text-center sm:text-left space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="flex items-center justify-center sm:justify-start gap-1.5">
                        <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight">
                          {agencyConfig.brokerName}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" /> RERA/JDA वेरिफाइड
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs font-bold text-amber-800">
                        प्रबंध निदेशक (MD) • {agencyConfig.name}, {agencyConfig.city}
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-600 font-semibold leading-relaxed">
                    "पारदर्शी सौदे, 100% लीगल टाइटल चेक्ड रजिस्ट्री और आपके परिवार की जीवनभर की गाढ़ी कमाई की पूर्ण सुरक्षा।"
                  </p>

                  {/* 3 Executive Credentials */}
                  <div className="pt-0.5 flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[10px] font-extrabold text-slate-700">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                      🏛️ 12+ वर्ष निष्पक्ष अनुभव
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                      📜 100% लीगल पेपरवर्क
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">
                      🤝 ₹150+ करोड़ सफल डील्स
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* High-Contrast Bold Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
              आपके बजट में{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 underline decoration-amber-400">
                आपकी पसंद की
              </span>{" "}
              प्रॉपर्टी
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-semibold">
              {agencyConfig.serviceAreas.slice(0, 5).join(", ")} में 100% वेरिफाइड JDA पट्टा प्लॉट, स्वतंत्र मकान, और फ्लैट्स। सीधा सौदा, बिना किसी भ्रम के।
            </p>

            {/* 💥 Search Box with Bright Laser Running Border */}
            <div className="mt-8 sm:mt-10 max-w-4xl mx-auto laser-running-card shadow-2xl">
              <div className="laser-running-card-inner p-4 sm:p-7">
                {/* Quick Filter Tabs */}
                <div className="flex items-center gap-2 border-b border-slate-200 pb-4 mb-4 overflow-x-auto no-scrollbar">
                  <button
                    type="button"
                    onClick={() => setTransactionType("all")}
                    className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                      transactionType === "all"
                        ? "bg-[#0F172A] text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    सभी प्रॉपर्टीज
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransactionType("buy")}
                    className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                      transactionType === "buy"
                        ? "bg-[#0F172A] text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    मकान / विला खरीदें
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransactionType("plot")}
                    className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                      transactionType === "plot"
                        ? "bg-[#0F172A] text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    JDA पट्टा प्लॉट्स
                  </button>
                  <button
                    type="button"
                    onClick={() => setTransactionType("rent")}
                    className={`px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${
                      transactionType === "rent"
                        ? "bg-[#0F172A] text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    किराया (Rent)
                  </button>
                </div>

                {/* Form Controls */}
                <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <label className="block text-[11px] font-black text-slate-700 mb-1">
                      इलाका (Locality)
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-amber-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={selectedLocality}
                        onChange={(e) => setSelectedLocality(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
                      >
                        <option value="">सभी प्रमुख इलाके</option>
                        {agencyConfig.serviceAreas.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-[11px] font-black text-slate-700 mb-1">
                      बजट (Budget)
                    </label>
                    <div className="relative">
                      <IndianRupee className="w-4 h-4 text-emerald-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
                      >
                        <option value="">कोई भी बजट</option>
                        {agencyConfig.budgetRanges.map((range) => (
                          <option key={range.id} value={range.id}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-amber-400 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102 active:scale-95"
                    >
                      <Search className="w-4 h-4" />
                      <span>प्रॉपर्टी खोजें</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
