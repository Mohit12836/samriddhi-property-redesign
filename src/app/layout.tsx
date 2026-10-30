import type { Metadata, Viewport } from "next";
import "./globals.css";
import { agencyConfig } from "@/config/agency";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  title: `${agencyConfig.name} — 10 मास्टर डिज़ाइन सिस्टम्स`,
  description: `${agencyConfig.city} में मकान, दुकान, JDA प्लॉट और फ्लैट्स के लिए 10 संपूर्ण डिज़ाइन सिस्टम्स। डायरेक्ट ओनर डील्स और 100% लीगल पेपरवर्क।`,
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
      <body className="min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-white">
        <ThemeProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
