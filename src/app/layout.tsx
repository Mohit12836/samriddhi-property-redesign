import type { Metadata, Viewport } from "next";
import "./globals.css";
import { agencyConfig } from "@/config/agency";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  title: `${agencyConfig.name} — ${agencyConfig.tagline}`,
  description: `${agencyConfig.city} में मकान, दुकान, JDA प्लॉट और फ्लैट्स के लिए सबसे विश्वसनीय प्रॉपर्टी ब्रोकर। डायरेक्ट ओनर डील्स और 100% लीगल पेपरवर्क सहायता।`,
  keywords: [
    `${agencyConfig.city} property dealer`,
    "plot in jaipur",
    "house for sale",
    "real estate broker",
    "jda approved plots",
    agencyConfig.name,
    ...agencyConfig.serviceAreas,
  ],
  openGraph: {
    title: `${agencyConfig.name} | Property Consultant ${agencyConfig.city}`,
    description: agencyConfig.tagline,
    siteName: agencyConfig.name,
    locale: "hi_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-navy-800 antialiased selection:bg-gold-500 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
