import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sampleProperties, getWhatsAppLeadLink } from "@/data/properties";
import { agencyConfig } from "@/config/agency";
import PropertyCard from "@/components/PropertyCard";
import {
  MapPin,
  BedDouble,
  Bath,
  Move,
  Compass,
  CheckCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  Calendar,
  Share2,
  ArrowLeft,
  Building,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for static export
export function generateStaticParams() {
  return sampleProperties.map((p) => ({
    slug: p.slug,
  }));
}

export default function PropertyDetailPage({ params }: Props) {
  const property = sampleProperties.find((p) => p.slug === params.slug);

  if (!property) {
    notFound();
  }

  const whatsappUrl = getWhatsAppLeadLink(property, agencyConfig.whatsappNumber);
  const relatedProperties = sampleProperties
    .filter((p) => p.id !== property.id && p.locality === property.locality)
    .slice(0, 2);

  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Back Link */}
        <div className="mb-6">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>सभी प्रॉपर्टीज़ पर वापस जाएं</span>
          </Link>
        </div>

        {/* Title & Price Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-black uppercase tracking-wider bg-navy-900 text-white">
                {property.transactionType === "buy" ? "बिक्री (Sale)" : property.transactionType === "rent" ? "किराया (Rent)" : "प्लॉट (Plot)"}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-200 text-slate-800">
                ID: {property.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800">
                {property.status}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900">
              {property.hindiTitle || property.title}
            </h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gold-600 font-semibold mt-1.5">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{property.locality}, {property.city}, {agencyConfig.state}</span>
            </div>
          </div>

          <div className="md:text-right">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              कीमत / अपेक्षित दर
            </span>
            <span className="text-3xl sm:text-4xl font-black text-navy-900 text-gold-600">
              {property.displayPrice}
            </span>
            <span className="text-xs text-slate-500 block">
              ({property.area} {property.areaUnit})
            </span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 aspect-16/10 rounded-2xl overflow-hidden shadow-md">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            {property.images.slice(1, 3).map((img, idx) => (
              <div key={idx} className="aspect-16/10 rounded-2xl overflow-hidden shadow-sm">
                <img src={img} alt={`${property.title} - ${idx + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {property.images.length === 1 && (
              <div className="aspect-16/10 rounded-2xl bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-xs text-slate-400 p-4 text-center">
                <span>साइट विजिट पर अतिरिक्त फोटो व वीडियो उपलब्ध</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Layout: Details + Sticky Broker Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quick Specs Highlight Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <h2 className="font-extrabold text-base text-navy-900 mb-4 pb-2 border-b border-slate-100">
                प्रमुख विशिष्टताएं (Property Highlights)
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block mb-0.5">कुल क्षेत्रफल</span>
                  <span className="font-black text-navy-900">{property.area} {property.areaUnit}</span>
                </div>
                {property.bedrooms && (
                  <div>
                    <span className="text-slate-400 block mb-0.5">कमरे (BHK)</span>
                    <span className="font-black text-navy-900">{property.bedrooms} BHK</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div>
                    <span className="text-slate-400 block mb-0.5">बाथरूम</span>
                    <span className="font-black text-navy-900">{property.bathrooms} बाथरूम</span>
                  </div>
                )}
                {property.roadWidth && (
                  <div>
                    <span className="text-slate-400 block mb-0.5">रोड की चौड़ाई</span>
                    <span className="font-black text-navy-900">{property.roadWidth}</span>
                  </div>
                )}
                {property.facing && (
                  <div>
                    <span className="text-slate-400 block mb-0.5">फेसिंग (दिशा)</span>
                    <span className="font-black text-navy-900">{property.facing}</span>
                  </div>
                )}
                {property.furnishingStatus && (
                  <div>
                    <span className="text-slate-400 block mb-0.5">फर्निशिंग</span>
                    <span className="font-black text-navy-900">{property.furnishingStatus}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <h2 className="font-extrabold text-base text-navy-900 mb-3">
                विस्तृत विवरण (Description)
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities & Features */}
            {property.amenities.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <h2 className="font-extrabold text-base text-navy-900 mb-4">
                  सुविधाएं एवं विशेषताएं
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky WhatsApp Enquiry Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <div className="running-light-border shadow-xl">
                <div className="p-6 bg-white rounded-2xl space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-700 flex items-center justify-center font-black text-xl">
                      स
                    </div>
                    <div>
                      <span className="font-bold text-sm text-navy-900 block">
                        {agencyConfig.brokerName}
                      </span>
                      <span className="text-xs text-slate-500">
                        {agencyConfig.experienceYears}+ वर्ष का स्थानीय अनुभव
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    इस प्रॉपर्टी (ID: <strong>{property.id}</strong>) की साइट विजिट या ओनर मीटिंग तय करने के लिए तुरंत संपर्क करें।
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>व्हाट्सएप पर विवरण मांगें</span>
                  </a>

                  <a
                    href={`tel:${agencyConfig.whatsappNumber}`}
                    className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>कॉल करें: {agencyConfig.displayPhone}</span>
                  </a>

                  <div className="pt-2 text-[11px] text-slate-400 space-y-1 text-center">
                    <span className="block">✓ कोई शुल्क नहीं • सीधी बात</span>
                    <span className="block">कार्यालय समय: {agencyConfig.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Local Listings */}
        {relatedProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-black text-navy-900 mb-6">
              {property.locality} में अन्य समान प्रॉपर्टीज़
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
