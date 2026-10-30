/**
 * SINGLE EDITABLE CONFIGURATION FOR PROPERTY BROKER
 * इस फाइल में ब्रोकर की सारी जानकारी आसानी से अपडेट की जा सकती है।
 */

export interface AgencyConfig {
  name: string;
  tagline: string;
  brokerName: string;
  experienceYears: number;
  phone: string;
  whatsappNumber: string; // International format without + e.g. "919876543210"
  displayPhone: string;
  email: string;
  officeAddress: string;
  city: string;
  state: string;
  googleMapsUrl: string;
  reraNumber?: string; // Optional - leave undefined if not applicable
  operatingHours: string;
  serviceAreas: string[];
  propertyCategories: {
    id: string;
    label: string;
    hindiLabel: string;
    icon: string;
    count: number;
  }[];
  budgetRanges: {
    id: string;
    label: string;
    min: number;
    max: number;
  }[];
  branding: {
    primaryColor: string;
    accentColor: string;
    lightBackground: string;
    badge: string;
  };
}

export const agencyConfig: AgencyConfig = {
  name: "समृद्धि प्रॉपर्टीज & रियलिटी",
  tagline: "आपके बजट में आपकी पसंद की प्रॉपर्टी — 100% वेरिफाइड डील्स",
  brokerName: "राजेश शर्मा (सीनियर प्रॉपर्टी कंसल्टेंट)",
  experienceYears: 12,
  phone: "+91 98290 12345",
  whatsappNumber: "919829012345",
  displayPhone: "+91 98290 12345",
  email: "contact@samriddhiproperties.in",
  officeAddress: "शॉप नं. 14, फर्स्ट फ्लोर, रॉयल प्लाजा, मुख्य चौराहा, मालवीय नगर, जयपुर, राजस्थान - 302017",
  city: "जयपुर",
  state: "राजस्थान",
  googleMapsUrl: "https://maps.google.com/?q=Malviya+Nagar+Jaipur",
  reraNumber: "RAJ/RERA/AGENT/2021/489 (Registered)",
  operatingHours: "सुबह 9:30 AM से शाम 8:00 PM (सातों दिन उपलब्ध)",
  serviceAreas: [
    "मालवीय नगर",
    "जगतपुरा",
    "वैशाली नगर",
    "मानसरोवर",
    "टोंक रोड",
    "सी-स्कीम",
    "अजमेर रोड",
    "सांगानेर"
  ],
  propertyCategories: [
    { id: "house", label: "Independent House", hindiLabel: "स्वतंत्र मकान / विला", icon: "Home", count: 18 },
    { id: "flat", label: "Flat / Apartment", hindiLabel: "फ्लैट्स (2/3/4 BHK)", icon: "Building2", count: 32 },
    { id: "plot", label: "Residential Plot", hindiLabel: "आवासीय भूखंड (प्लॉट)", icon: "MapPin", count: 24 },
    { id: "commercial", label: "Commercial Shop/Office", hindiLabel: "दुकान / शोरूम / ऑफिस", icon: "Briefcase", count: 12 },
    { id: "agricultural", label: "Agricultural Land", hindiLabel: "कृषि भूमि / फार्महाउस", icon: "Trees", count: 6 }
  ],
  budgetRanges: [
    { id: "under-15l", label: "Under ₹15 Lakh", min: 0, max: 1500000 },
    { id: "15l-30l", label: "₹15 Lakh - ₹30 Lakh", min: 1500000, max: 3000000 },
    { id: "30l-50l", label: "₹30 Lakh - ₹50 Lakh", min: 3000000, max: 5000000 },
    { id: "50l-1cr", label: "₹50 Lakh - ₹1 Crore", min: 5000000, max: 10000000 },
    { id: "above-1cr", label: "₹1 Crore +", min: 10000000, max: 999999999 }
  ],
  branding: {
    primaryColor: "#0F172A", // Deep Navy Charcoal
    accentColor: "#D97706",  // Warm Royal Gold
    lightBackground: "#FAF9F6", // Off-white Ivory
    badge: "Verified Local Broker"
  }
};
