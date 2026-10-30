export interface DesignTheme {
  id: number;
  slug: string;
  name: string;
  hindiName: string;
  tagline: string;
  badge: string;
  layoutType: 
    | "classic"      // 1. Classic Local Rajasthan Trust
    | "split"        // 2. Modern Split Screen App Portal
    | "matrix"       // 3. Investment & Comparison Grid
    | "heritage"     // 4. Jaipur Heritage Sandstone
    | "cyber"        // 5. Cyber Neo 360° Laser
    | "minimal"      // 6. Scandinavian Minimal Architecture
    | "villa"        // 7. Luxury Villa & Farmhouse Showcase
    | "plots"        // 8. Prime JDA Plots & Land Specialist
    | "spatial"      // 9. Apple Spatial 3D Frosted Glass
    | "vip";         // 10. VIP HNI Private Estate

  colors: {
    pageBg: string;
    headerBg: string;
    headerText: string;
    cardBg: string;
    cardBorder: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    accentHover: string;
    badgeBg: string;
    badgeText: string;
    laserGradient: string;
    heroGradient: string;
    primaryButton: string;
    secondaryButton: string;
    footerBg: string;
  };
}

export const DESIGN_THEMES: DesignTheme[] = [
  {
    id: 1,
    slug: "classic-rajasthan-trust",
    name: "Classic Rajasthan Trust",
    hindiName: "क्लासिक राजस्थान ट्रस्ट",
    tagline: "संस्थापक प्रोफाइल + 4-टैब लेज़र सर्च + 3-कॉलम ग्रिड",
    badge: "⭐ मोस्ट पॉपुलर",
    layoutType: "classic",
    colors: {
      pageBg: "#FAF9F6",
      headerBg: "#0F172A",
      headerText: "#FFFFFF",
      cardBg: "#FFFFFF",
      cardBorder: "#FDE68A",
      textPrimary: "#0F172A",
      textSecondary: "#475569",
      accent: "#D97706",
      accentHover: "#B45309",
      badgeBg: "#FEF3C7",
      badgeText: "#92400E",
      laserGradient: "linear-gradient(90deg, #F59E0B, #06B6D4, #EC4899, #10B981, #F59E0B)",
      heroGradient: "linear-gradient(to bottom, rgba(254, 243, 199, 0.7), #FFFFFF, #F8FAFC)",
      primaryButton: "bg-emerald-600 hover:bg-emerald-700 text-white",
      secondaryButton: "bg-slate-900 hover:bg-slate-800 text-white",
      footerBg: "#0A0F1D"
    }
  },
  {
    id: 2,
    slug: "modern-split-screen",
    name: "Modern Split-Screen Portal",
    hindiName: "मॉडर्न स्प्लिट-स्क्रीन पोर्टल",
    tagline: "स्प्लिट हीरो + 1-क्लिक लीड मशीन + टेक पोर्टल लुक",
    badge: "🚀 हाई कन्वर्शन",
    layoutType: "split",
    colors: {
      pageBg: "#F0FDF4",
      headerBg: "#064E3B",
      headerText: "#FFFFFF",
      cardBg: "#FFFFFF",
      cardBorder: "#A7F3D0",
      textPrimary: "#064E3B",
      textSecondary: "#047857",
      accent: "#059669",
      accentHover: "#047857",
      badgeBg: "#D1FAE5",
      badgeText: "#065F46",
      laserGradient: "linear-gradient(90deg, #10B981, #059669, #34D399, #047857, #10B981)",
      heroGradient: "linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 50%, #E6FFFA 100%)",
      primaryButton: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30",
      secondaryButton: "bg-[#064E3B] hover:bg-[#022c22] text-white",
      footerBg: "#022C22"
    }
  },
  {
    id: 3,
    slug: "corporate-wealth-matrix",
    name: "Corporate Wealth Matrix",
    hindiName: "इन्वेस्टमेंट & वेल्थ मैट्रिक्स",
    tagline: "पैनोरमिक हीरो + ROI कंपैरिजन ग्रिड + बैंक अप्रूव्ड",
    badge: "💼 कॉर्पोरेट HNI",
    layoutType: "matrix",
    colors: {
      pageBg: "#F8FAFC",
      headerBg: "#0B192C",
      headerText: "#FFFFFF",
      cardBg: "#FFFFFF",
      cardBorder: "#CBD5E1",
      textPrimary: "#0B192C",
      textSecondary: "#334155",
      accent: "#1E3E62",
      accentHover: "#000000",
      badgeBg: "#E2E8F0",
      badgeText: "#0B192C",
      laserGradient: "linear-gradient(90deg, #1E3E62, #00ADB5, #393E46, #00FFF5, #1E3E62)",
      heroGradient: "linear-gradient(to bottom, #E2E8F0, #FFFFFF, #F1F5F9)",
      primaryButton: "bg-[#1E3E62] hover:bg-[#0B192C] text-white",
      secondaryButton: "bg-slate-800 hover:bg-slate-900 text-white",
      footerBg: "#0B192C"
    }
  },
  {
    id: 4,
    slug: "jaipur-heritage-sandstone",
    name: "Jaipur Heritage Sandstone",
    hindiName: "जयपुर हेरिटेज सैंडस्टोन",
    tagline: "आर्च स्टाइल कार्ड्स + इलाका-फर्स्ट नेविगेशन + गुलाबी नगरी",
    badge: "🏛️ हेरिटेज जयपुर",
    layoutType: "heritage",
    colors: {
      pageBg: "#FFFBEB",
      headerBg: "#78350F",
      headerText: "#FEF3C7",
      cardBg: "#FFFFFF",
      cardBorder: "#FDE68A",
      textPrimary: "#451A03",
      textSecondary: "#78350F",
      accent: "#B45309",
      accentHover: "#92400E",
      badgeBg: "#FEF3C7",
      badgeText: "#78350F",
      laserGradient: "linear-gradient(90deg, #D97706, #B45309, #F59E0B, #92400E, #D97706)",
      heroGradient: "linear-gradient(to bottom, #FEF3C7, #FFFBEB, #FDF4E3)",
      primaryButton: "bg-[#B45309] hover:bg-[#92400E] text-white",
      secondaryButton: "bg-[#78350F] hover:bg-[#451A03] text-white",
      footerBg: "#451A03"
    }
  },
  {
    id: 5,
    slug: "cyber-neo-laser",
    name: "Cyber Neo 360° Laser",
    hindiName: "साइबर नियो 360° लेज़र",
    tagline: "डार्क नाइट मोड + मूविंग लेज़र बीम्स + नियॉन प्राइस",
    badge: "⚡ फ्यूचरिस्टिक",
    layoutType: "cyber",
    colors: {
      pageBg: "#030712",
      headerBg: "#0F172A",
      headerText: "#F8FAFC",
      cardBg: "#111827",
      cardBorder: "#1E293B",
      textPrimary: "#F8FAFC",
      textSecondary: "#94A3B8",
      accent: "#06B6D4",
      accentHover: "#0891B2",
      badgeBg: "#164E63",
      badgeText: "#67E8F9",
      laserGradient: "linear-gradient(90deg, #06B6D4, #EC4899, #8B5CF6, #10B981, #06B6D4)",
      heroGradient: "linear-gradient(to bottom, #030712, #0B0F19, #030712)",
      primaryButton: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black",
      secondaryButton: "bg-slate-800 hover:bg-slate-700 text-white",
      footerBg: "#020617"
    }
  },
  {
    id: 6,
    slug: "scandinavian-minimal",
    name: "Scandinavian Minimal Architecture",
    hindiName: "स्कैंडिनेवियन मिनिमल",
    tagline: "शुद्ध स्नो व्हाइट + फाइन चारकोल लाइन्स + फोटो फर्स्ट",
    badge: "📐 आर्किटेक्चरल",
    layoutType: "minimal",
    colors: {
      pageBg: "#FFFFFF",
      headerBg: "#FFFFFF",
      headerText: "#000000",
      cardBg: "#FFFFFF",
      cardBorder: "#E5E5E5",
      textPrimary: "#171717",
      textSecondary: "#737373",
      accent: "#000000",
      accentHover: "#262626",
      badgeBg: "#F5F5F5",
      badgeText: "#171717",
      laserGradient: "linear-gradient(90deg, #000000, #525252, #A3A3A3, #525252, #000000)",
      heroGradient: "linear-gradient(to bottom, #FAFAFA, #FFFFFF, #FAFAFA)",
      primaryButton: "bg-black hover:bg-neutral-800 text-white",
      secondaryButton: "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300",
      footerBg: "#171717"
    }
  },
  {
    id: 7,
    slug: "luxury-villa-resort",
    name: "Luxury Villa & Farmhouse",
    hindiName: "लक्ज़री विला & फार्महाउस",
    tagline: "2-कॉलम वाइड पैनोरमा + प्राइवेट गार्डन/पूल एमिनिटीज",
    badge: "🏰 विला स्पेशल",
    layoutType: "villa",
    colors: {
      pageBg: "#FFF1F2",
      headerBg: "#881337",
      headerText: "#FFE4E6",
      cardBg: "#FFFFFF",
      cardBorder: "#FECDD3",
      textPrimary: "#4C0519",
      textSecondary: "#9F1239",
      accent: "#E11D48",
      accentHover: "#BE123C",
      badgeBg: "#FFE4E6",
      badgeText: "#9F1239",
      laserGradient: "linear-gradient(90deg, #F43F5E, #FB7185, #FDA4AF, #E11D48, #F43F5E)",
      heroGradient: "linear-gradient(to bottom, #FFE4E6, #FFF1F2, #FFFFFF)",
      primaryButton: "bg-rose-600 hover:bg-rose-700 text-white",
      secondaryButton: "bg-[#881337] hover:bg-[#4C0519] text-white",
      footerBg: "#4C0519"
    }
  },
  {
    id: 8,
    slug: "prime-jda-plots",
    name: "Prime JDA Plots & Commercial",
    hindiName: "प्राइम जेडीए प्लॉट्स & कमर्शियल",
    tagline: "गज/बीघा रेट्स + 40ft/60ft रोड साइज + 90B पट्टा",
    badge: "📐 प्लॉट स्पेशलिस्ट",
    layoutType: "plots",
    colors: {
      pageBg: "#F8FAFC",
      headerBg: "#0F172A",
      headerText: "#FACC15",
      cardBg: "#FFFFFF",
      cardBorder: "#FDE047",
      textPrimary: "#0F172A",
      textSecondary: "#475569",
      accent: "#CA8A04",
      accentHover: "#A16207",
      badgeBg: "#FEF08A",
      badgeText: "#854D0E",
      laserGradient: "linear-gradient(90deg, #EAB308, #CA8A04, #FACC15, #854D0E, #EAB308)",
      heroGradient: "linear-gradient(to bottom, #FEF9C3, #FFFFFF, #F8FAFC)",
      primaryButton: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black",
      secondaryButton: "bg-slate-900 hover:bg-slate-800 text-white",
      footerBg: "#020617"
    }
  },
  {
    id: 9,
    slug: "apple-spatial-glass",
    name: "Apple Spatial 3D Frosted Glass",
    hindiName: "Apple Spatial 3D ग्लास",
    tagline: "अल्ट्रा-ब्लर फ्रॉस्टेड ग्लास + हवा में तैरते 3D आइलैंड्स",
    badge: "👓 Vision 3D",
    layoutType: "spatial",
    colors: {
      pageBg: "#F1F5F9",
      headerBg: "rgba(255, 255, 255, 0.75)",
      headerText: "#0F172A",
      cardBg: "rgba(255, 255, 255, 0.65)",
      cardBorder: "rgba(255, 255, 255, 0.9)",
      textPrimary: "#0F172A",
      textSecondary: "#475569",
      accent: "#3B82F6",
      accentHover: "#2563EB",
      badgeBg: "rgba(59, 130, 246, 0.15)",
      badgeText: "#1D4ED8",
      laserGradient: "linear-gradient(90deg, #60A5FA, #3B82F6, #93C5FD, #1D4ED8, #60A5FA)",
      heroGradient: "radial-gradient(ellipse at top, #E0F2FE 0%, #F1F5F9 70%)",
      primaryButton: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30",
      secondaryButton: "bg-white/80 hover:bg-white text-slate-900 border border-slate-300",
      footerBg: "#0F172A"
    }
  },
  {
    id: 10,
    slug: "vip-hni-black-gold",
    name: "VIP HNI Private Estate",
    hindiName: "VIP HNI प्राइवेट एस्टेट",
    tagline: "जेट ब्लैक + 24K गोल्ड फॉयल + प्राइवेट ब्रोकर मीटिंग",
    badge: "👑 एक्सक्लूसिव VIP",
    layoutType: "vip",
    colors: {
      pageBg: "#0A0A0A",
      headerBg: "#000000",
      headerText: "#F59E0B",
      cardBg: "#171717",
      cardBorder: "#78350F",
      textPrimary: "#FDF8F6",
      textSecondary: "#D4D4D8",
      accent: "#F59E0B",
      accentHover: "#D97706",
      badgeBg: "#451A03",
      badgeText: "#FDE68A",
      laserGradient: "linear-gradient(90deg, #F59E0B, #D97706, #FDE68A, #B45309, #F59E0B)",
      heroGradient: "radial-gradient(ellipse at center, #1C1917 0%, #0A0A0A 80%)",
      primaryButton: "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black shadow-amber-500/40",
      secondaryButton: "bg-neutral-800 hover:bg-neutral-700 text-amber-300 border border-amber-500/40",
      footerBg: "#000000"
    }
  }
];
