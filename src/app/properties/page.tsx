"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { sampleProperties, Property } from "@/data/properties";
import { agencyConfig } from "@/config/agency";
import PropertyCard from "@/components/PropertyCard";
import { Search, Filter, RotateCcw, SlidersHorizontal, ArrowUpDown } from "lucide-react";

function PropertiesFilterContent() {
  const searchParams = useSearchParams();

  // URL Query Parameters pre-fill
  const initialTransaction = searchParams.get("transaction") || "all";
  const initialLocality = searchParams.get("locality") || "all";
  const initialBudget = searchParams.get("budget") || "all";
  const initialType = searchParams.get("type") || "all";

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(initialTransaction);
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);
  const [selectedBudget, setSelectedBudget] = useState(initialBudget);
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    initialType === "residential" ? "residential" : initialType === "plot" ? "plot" : "all"
  );
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "newest">("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Client-Side Dynamic Filtering Logic
  const filteredProperties = useMemo(() => {
    return sampleProperties
      .filter((p) => {
        // Search Filter (Title, Locality, ID, Description)
        if (searchTerm.trim() !== "") {
          const term = searchTerm.toLowerCase();
          const match =
            p.title.toLowerCase().includes(term) ||
            p.hindiTitle.toLowerCase().includes(term) ||
            p.locality.toLowerCase().includes(term) ||
            p.id.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term);
          if (!match) return false;
        }

        // Transaction Type Filter
        if (selectedTransaction !== "all") {
          if (selectedTransaction === "plot" && p.propertyType !== "plot") return false;
          if (selectedTransaction !== "plot" && p.transactionType !== selectedTransaction) return false;
        }

        // Locality Filter
        if (selectedLocality !== "all" && p.locality !== selectedLocality) {
          return false;
        }

        // Property Type Filter
        if (selectedPropertyType !== "all") {
          if (selectedPropertyType === "residential" && !(p.propertyType === "house" || p.propertyType === "flat")) {
            return false;
          }
          if (selectedPropertyType === "plot" && p.propertyType !== "plot") {
            return false;
          }
        }

        // Budget Range Filter
        if (selectedBudget !== "all") {
          const budgetDef = agencyConfig.budgetRanges.find((b) => b.id === selectedBudget);
          if (budgetDef) {
            if (p.price < budgetDef.min || p.price > budgetDef.max) {
              return false;
            }
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "newest") return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [searchTerm, selectedTransaction, selectedLocality, selectedBudget, selectedPropertyType, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedTransaction("all");
    setSelectedLocality("all");
    setSelectedBudget("all");
    setSelectedPropertyType("all");
    setSortBy("featured");
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">
            {agencyConfig.city} प्रॉपर्टी कैटलॉग
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-navy-900 mt-1">
            उपलब्ध सभी प्रॉपर्टीज (All Listings)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            कुल {filteredProperties.length} सत्यापित प्रॉपर्टीज आपके चुने गए मापदंडों के अनुसार
          </p>
        </div>

        {/* Search & Top Action Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="प्रॉपर्टी नाम, इलाका या ID खोजें..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-gold-500"
              />
            </div>

            {/* Sort & Mobile Filter Toggle */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between">
              {/* Mobile Filter Button */}
              <button
                type="button"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 text-navy-900 font-bold text-xs"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>फ़िल्टर</span>
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="py-2.5 px-3 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 focus:outline-hidden"
                >
                  <option value="featured">खास पसंदीदा (Featured)</option>
                  <option value="price-low">कीमत: कम से ज्यादा</option>
                  <option value="price-high">कीमत: ज्यादा से कम</option>
                  <option value="newest">नई लिस्टिंग्स (Newest)</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                type="button"
                onClick={resetFilters}
                title="सभी फ़िल्टर हटाएं"
                className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-navy-900 hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Transaction Pills */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setSelectedTransaction("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedTransaction === "all" ? "bg-navy-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              सभी (All)
            </button>
            <button
              onClick={() => setSelectedTransaction("buy")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedTransaction === "buy" ? "bg-navy-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              मकान / फ्लैट बिक्री
            </button>
            <button
              onClick={() => setSelectedTransaction("plot")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedTransaction === "plot" ? "bg-navy-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              आवासीय भूखंड (Plots)
            </button>
            <button
              onClick={() => setSelectedTransaction("rent")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedTransaction === "rent" ? "bg-navy-900 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              किराये पर (Rentals)
            </button>
          </div>
        </div>

        {/* Layout: Sidebar Filters + Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <div className={`lg:block ${mobileFilterOpen ? "block" : "hidden"} space-y-6`}>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-5">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="font-extrabold text-sm text-navy-900 flex items-center gap-1.5">
                  <Filter className="w-4 h-4 text-gold-600" />
                  <span>फ़िल्टर विकल्प</span>
                </span>
                <button
                  onClick={resetFilters}
                  className="text-[11px] font-bold text-gold-600 hover:underline"
                >
                  रीसेट करें
                </button>
              </div>

              {/* Locality Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  लोकेशन / इलाका
                </label>
                <select
                  value={selectedLocality}
                  onChange={(e) => setSelectedLocality(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-hidden"
                >
                  <option value="all">सभी इलाके ({agencyConfig.city})</option>
                  {agencyConfig.serviceAreas.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Filter */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  बजट सीमा
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:outline-hidden"
                >
                  <option value="all">सभी बजट</option>
                  {agencyConfig.budgetRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type Radio */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  प्रॉपर्टी श्रेणी
                </label>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="propType"
                      checked={selectedPropertyType === "all"}
                      onChange={() => setSelectedPropertyType("all")}
                      className="accent-gold-600"
                    />
                    <span>सभी श्रेणियां</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="propType"
                      checked={selectedPropertyType === "residential"}
                      onChange={() => setSelectedPropertyType("residential")}
                      className="accent-gold-600"
                    />
                    <span>स्वतंत्र मकान / विला / फ्लैट्स</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="propType"
                      checked={selectedPropertyType === "plot"}
                      onChange={() => setSelectedPropertyType("plot")}
                      className="accent-gold-600"
                    />
                    <span>आवासीय भूखंड (Plots)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProperties.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-gold-600">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-navy-900">
                  कोई प्रॉपर्टी नहीं मिली
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                  आपके चुने गए बजट या इलाके के लिए इस समय कोई लिस्टिंग उपलब्ध नहीं है। कृपया फ़िल्टर रीसेट करें या हमसे सीधे व्हाट्सएप पर संपर्क करें।
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs"
                >
                  सभी फ़िल्टर रीसेट करें
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertiesDirectoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-bold text-navy-900">प्रॉपर्टीज लोड हो रही हैं...</p>
          </div>
        </div>
      }
    >
      <PropertiesFilterContent />
    </Suspense>
  );
}
