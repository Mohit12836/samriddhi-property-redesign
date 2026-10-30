import React from "react";
import Link from "next/link";
import { Property, getWhatsAppLeadLink } from "@/data/properties";
import { agencyConfig } from "@/config/agency";
import { MapPin, BedDouble, Bath, Move, Compass, MessageCircle, ArrowRight, Sparkles, Calculator } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  hasRunningBorder?: boolean;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const whatsappUrl = getWhatsAppLeadLink(property, agencyConfig.whatsappNumber);

  // Accurate Bank EMI calculation (8.5% for 20 years)
  const estimatedEMI = property.price > 50000 
    ? Math.round((property.price * 0.8 * 0.008678) / 1000) * 1000 
    : null;

  return (
    <div className="laser-running-card flex flex-col justify-between overflow-hidden">
      {/* 📸 FULL-SIZE SHARP HIGH-RESOLUTION ARCHITECTURE IMAGE */}
      <div className="relative aspect-16/11 w-full overflow-hidden bg-slate-100 rounded-t-2xl">
        <img
          src={property.images[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Clear Bottom Shading for 100% Readable Price */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Top Floating Badges */}
        <div className="absolute top-3 inset-x-3 flex justify-between items-start z-10">
          <div className="flex flex-col gap-1.5 items-start">
            <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#0F172A] text-amber-400 border border-amber-400/40 shadow-md">
              {property.transactionType === "buy" ? "बिक्री (SALE)" : property.transactionType === "rent" ? "किराया (RENT)" : "JDA पट्टा प्लॉट"}
            </span>
            {property.highlightBadge && (
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-amber-500 text-[#0F172A] shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>{property.highlightBadge}</span>
              </span>
            )}
          </div>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-white text-slate-800 shadow-md border border-slate-300">
            ID: {property.id}
          </span>
        </div>

        {/* 💰 Price Pinned on Image with High Visibility */}
        <div className="absolute bottom-3 inset-x-3 flex justify-between items-end z-10">
          <div>
            <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest block drop-shadow-md">
              कीमत / PRICE
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-lg">
              {property.displayPrice}
            </span>
          </div>
          <div>
            <span className="text-xs font-black text-white bg-black/70 border border-white/20 px-3 py-1 rounded-md shadow-md block">
              {property.area} {property.areaUnit}
            </span>
          </div>
        </div>
      </div>

      {/* 📄 Card Body: Ultra Crisp White & Deep Slate Typography */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4 bg-white rounded-b-2xl">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-black text-amber-600 mb-1">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{property.locality}, {property.city}</span>
          </div>

          {/* Hindi Title */}
          <Link href={`/properties/${property.slug}`}>
            <h3 className="font-black text-base sm:text-lg text-[#0F172A] hover:text-amber-600 transition-colors line-clamp-1 leading-snug">
              {property.hindiTitle || property.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed font-medium">
            {property.description}
          </p>

          {/* Key Specs Pills Grid */}
          <div className="mt-3.5 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
            {property.bedrooms && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                <BedDouble className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{property.bedrooms} BHK बेडरूम</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                <Bath className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{property.bathrooms} बाथरूम</span>
              </div>
            )}
            {property.roadWidth && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                <Move className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">{property.roadWidth}</span>
              </div>
            )}
            {property.facing && (
              <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                <Compass className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="truncate">{property.facing}</span>
              </div>
            )}
          </div>

          {/* ⚡ Live Bank EMI Preview on Card */}
          {estimatedEMI && (
            <div className="mt-3 px-3 py-2 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 text-slate-700 font-bold">
                <Calculator className="w-3.5 h-3.5 text-amber-600" /> बैंक EMI:
              </span>
              <span className="font-black text-amber-700">
                ₹{estimatedEMI.toLocaleString("en-IN")}/माह*
              </span>
            </div>
          )}
        </div>

        {/* 🚀 Dual CTAs */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/properties/${property.slug}`}
            className="btn-haptic flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all border border-slate-300"
          >
            <span>विवरण देखें</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-haptic flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all hover:scale-102"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>साइट विजिट</span>
          </a>
        </div>
      </div>
    </div>
  );
}
