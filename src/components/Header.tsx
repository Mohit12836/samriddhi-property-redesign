"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme } = useTheme();

  const navLinks = [
    { label: "होम", href: "/" },
    { label: "सभी प्रॉपर्टीज", href: "/properties" },
    { label: "विला & मकान", href: "/properties?type=residential" },
    { label: "JDA प्लॉट्स", href: "/properties?type=plot" },
    { label: "प्रॉपर्टी बेचें", href: "/sell" },
    { label: "ब्रोकर परिचय", href: "/about" },
    { label: "संपर्क", href: "/contact" },
  ];

  return (
    <header 
      className="sticky top-0 z-50 transition-colors duration-300 shadow-md"
      style={{
        backgroundColor: currentTheme.colors.headerBg,
        color: currentTheme.colors.headerText,
        borderBottom: `1.5px solid ${currentTheme.colors.cardBorder}`
      }}
    >
      {/* 🔹 Top Announcement Bar */}
      <div className="text-xs py-2 px-4 sm:px-8 border-b border-white/10 opacity-95">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold">
              {agencyConfig.city} के प्रमुख इलाकों में 100% सत्यापित प्रॉपर्टी डील्स
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:flex items-center gap-1 opacity-80">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> {agencyConfig.city}, {agencyConfig.state}
            </span>
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="flex items-center gap-1 font-black tracking-wide text-amber-300 hover:text-amber-200"
            >
              <Phone className="w-3.5 h-3.5" /> {agencyConfig.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo with Dynamic Theme Accent */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-black text-lg sm:text-2xl shadow-md border-2 shrink-0 group-hover:scale-105 transition-transform"
              style={{
                backgroundColor: currentTheme.colors.accent,
                color: "#FFFFFF",
                borderColor: currentTheme.colors.cardBorder
              }}
            >
              <span>स</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-base sm:text-xl md:text-2xl tracking-tight leading-tight">
                  {agencyConfig.name}
                </span>
                <span 
                  className="hidden md:inline-flex text-[9px] font-black uppercase px-2 py-0.5 rounded-md border shadow-xs"
                  style={{
                    backgroundColor: currentTheme.colors.badgeBg,
                    color: currentTheme.colors.badgeText,
                    borderColor: currentTheme.colors.cardBorder
                  }}
                >
                  डिज़ाइन {currentTheme.id}: {currentTheme.hindiName}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs opacity-80 font-bold leading-tight">
                {agencyConfig.brokerName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-black opacity-90 hover:opacity-100 transition-opacity py-1 relative hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right WhatsApp & Call CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getGeneralWhatsAppLink(agencyConfig.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-haptic inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 ${currentTheme.colors.primaryButton}`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>व्हाट्सएप</span>
            </a>

            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="btn-haptic hidden sm:flex items-center justify-center p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-current border border-white/20"
              title="कॉल करें"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-current"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t px-4 pt-3 pb-6 space-y-3"
          style={{
            backgroundColor: currentTheme.colors.headerBg,
            borderColor: currentTheme.colors.cardBorder
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-black py-2 px-3 rounded-lg hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="flex-1 text-center py-2.5 rounded-xl bg-white/10 font-bold text-xs"
            >
              कॉल करें
            </a>
            <a
              href={getGeneralWhatsAppLink(agencyConfig.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center py-2.5 rounded-xl font-bold text-xs ${currentTheme.colors.primaryButton}`}
            >
              व्हाट्सएप
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
