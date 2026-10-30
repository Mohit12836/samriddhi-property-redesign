"use client";

import React, { useState } from "react";
import Link from "next/link";
import { agencyConfig } from "@/config/agency";
import { getGeneralWhatsAppLink } from "@/data/properties";
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 clean-nav-header">
      {/* 🔹 Top Clear Bar: High Contrast Navy & White */}
      <div className="bg-[#0F172A] text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-slate-100">
              {agencyConfig.city} के प्रमुख इलाकों में 100% सत्यापित प्रॉपर्टी डील्स
            </span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> {agencyConfig.city}, {agencyConfig.state}
            </span>
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-black tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" /> {agencyConfig.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main White Clear Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Bold Gold Accent */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#0F172A] flex items-center justify-center text-amber-400 font-black text-2xl shadow-md border-2 border-amber-400 shrink-0 group-hover:scale-105 transition-transform">
              <span>स</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-[#0F172A]">
                  {agencyConfig.name}
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-300">
                  RERA Approved
                </span>
              </div>
              <span className="text-xs text-slate-600 font-bold">
                {agencyConfig.brokerName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Dark Grey on White */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-black text-slate-700 hover:text-amber-600 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
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
              className="btn-haptic inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>व्हाट्सएप</span>
            </a>

            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="btn-haptic hidden sm:flex items-center justify-center p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F172A] border border-slate-300"
              title="कॉल करें"
            >
              <Phone className="w-4 h-4 text-[#0F172A]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0F172A]" /> : <Menu className="w-6 h-6 text-[#0F172A]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-slate-200 bg-white px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-black text-slate-800 hover:bg-amber-50 hover:text-amber-700 flex justify-between items-center transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-amber-600">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={`tel:${agencyConfig.whatsappNumber}`}
              className="w-full py-3.5 rounded-xl bg-[#0F172A] text-white font-black text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>सीधे कॉल करें: {agencyConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
