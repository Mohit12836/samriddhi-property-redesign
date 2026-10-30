import React from "react";
import HeroSection from "@/components/HeroSection";
import PropertyCategories from "@/components/PropertyCategories";
import FeaturedProperties from "@/components/FeaturedProperties";
import BudgetBrowsing from "@/components/BudgetBrowsing";
import PopularLocations from "@/components/PopularLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetBroker from "@/components/MeetBroker";
import SellPropertyCTA from "@/components/SellPropertyCTA";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Search & Running Light */}
      <HeroSection />

      {/* 2. Property Categories */}
      <PropertyCategories />

      {/* 3. Featured 6 Properties Grid */}
      <FeaturedProperties />

      {/* 4. Budget-Based Browsing */}
      <BudgetBrowsing />

      {/* 5. Popular Operating Service Localities */}
      <PopularLocations />

      {/* 6. Why Choose Us (Practical Dealer Guarantees) */}
      <WhyChooseUs />

      {/* 7. Meet Your Broker Profile & Direct Contact */}
      <MeetBroker />

      {/* 8. Sell Your Property (Owner Lead Capture to WhatsApp) */}
      <SellPropertyCTA />

      {/* 9. Genuine FAQ Section */}
      <FAQSection />
    </>
  );
}
