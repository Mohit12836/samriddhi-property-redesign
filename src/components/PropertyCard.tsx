"use client";

import React from "react";
import Link from "next/link";
import { Property, getWhatsAppLeadLink } from "@/data/properties";
import { agencyConfig } from "@/config/agency";
import { MapPin, BedDouble, Bath, Move, Compass, MessageCircle, ArrowRight, Sparkles, Calculator } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface PropertyCardProps {
  property: Property;
  hasRunningBorder?: boolean;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { currentTheme } = useTheme();
  const whatsappUrl = getWhatsAppLeadLink(property, agencyConfig.whatsappNumber);

  // Accurate Bank EMI calculation (8.5% for 20 years)
  const estimatedEMI = property.price > 50000 
    ? Math.round((property.price * 0.8 * 0.008678) / 1000) * 1000 
    : null;

  return (
    <div 
      className="laser-running-card group"
      style={{
        background: currentTheme.colors.laserGradient
      }}
    >
      <div 
        className="laser-running-card-inner transition-colors duration-300"
        style={{
          backgroundColor: currentTheme.colors.cardBg,
          color: currentTheme.colors.textPrimary
        }}
      >
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
              <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/80 text-amber-400 border border-amber-400/40 shadow-md">
                {property.transactionType === "buy" ? "बिक्री (SALE)" : property.transactionType === "rent" ? "किराया (RENT)" : "JDA पट्टा प्लॉट"}
              </span>
              {property.highlightBadge && (
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-amber-500 text-slate-950 shadow-md flex items-center gap-1">
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

        {/* 📄 Card Body: Ultra Crisp Typography Adapted to Theme */}
        <div className="p-5 flex flex-col flex-grow justify-between gap-4">
          <div>
            {/* Location */}
            <div 
              className="flex items-center gap-1.5 text-xs font-black mb-1"
              style={{ color: currentTheme.colors.accent }}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{property.locality}, {agencyConfig.city}</span>
            </div>

            {/* Title */}
            <Link href={`/properties/${property.slug}`}>
              <h3 className="font-black text-base sm:text-lg line-clamp-1 hover:underline transition-colors leading-tight">
                {property.title}
              </h3>
            </Link>

            {/* Practical Dealer Description Snippet */}
            <p className="text-xs mt-1.5 line-clamp-2 leading-relaxed opacity-80 font-medium">
              {property.description}
            </p>

            {/* Key Practical Specifications Strip */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100/50 text-[11px] font-extrabold opacity-90">
              {property.bedrooms && (
                <div className="flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                  <span>{property.bedrooms} BHK</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-1.5">
                  <Bath className="w-3.5 h-3.5 text-slate-400" />
                  <span>{property.bathrooms} बाथ</span>
                </div>
              )}
              {property.roadWidthFeet && (
                <div className="flex items-center gap-1.5">
                  <Move className="w-3.5 h-3.5 text-slate-400" />
                  <span>{property.roadWidthFeet} Ft रोड</span>
                </div>
              )}
              {property.facing && (
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-slate-400" />
                  <span>{property.facing} मुखी</span>
                </div>
              )}
            </div>

            {/* Bank Loan EMI Calculator Indicator */}
            {estimatedEMI && (
              <div 
                className="mt-3.5 p-2 rounded-lg text-[10px] font-extrabold flex items-center justify-between border"
                style={{
                  backgroundColor: currentTheme.colors.badgeBg,
                  color: currentTheme.colors.badgeText,
                  borderColor: currentTheme.colors.cardBorder
                }}
              >
                <span className="flex items-center gap-1">
                  <Calculator className="w-3 h-3" />
                  <span>अनुमानित बैंक EMI:</span>
                </span>
                <span className="font-black">₹{estimatedEMI.toLocaleString("en-IN")}/माह</span>
              </div>
            )}
          </div>

          {/* Action CTAs: Details + Instant Site Visit WhatsApp */}
          <div className="pt-2 border-t border-slate-100/50 flex gap-2">
            <Link
              href={`/properties/${property.slug}`}
              className="btn-haptic flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-black text-xs text-center flex items-center justify-center gap-1.5 transition-all border border-slate-300"
            >
              <span>विवरण देखें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-haptic flex-1 py-3 px-3 rounded-xl font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-md transition-all hover:scale-102 ${currentTheme.colors.primaryButton}`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>साइट विजिट</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
