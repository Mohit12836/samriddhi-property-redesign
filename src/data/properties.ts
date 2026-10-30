/**
 * REALISTIC PROPERTY DATA FOR INDIAN LOCAL BROKER
 * बिल्कुल वास्तविक लगने वाले और वेरिफाइड डेमो लिस्टिंग्स
 */

export interface Property {
  id: string;
  slug: string;
  title: string;
  hindiTitle: string;
  transactionType: "buy" | "rent" | "plot";
  propertyType: "house" | "flat" | "plot" | "commercial" | "agricultural";
  price: number;
  displayPrice: string;
  city: string;
  locality: string;
  area: number;
  areaUnit: "Sq. Ft." | "Sq. Yards (गज)" | "Bigha";
  bedrooms?: number;
  bathrooms?: number;
  roadWidth?: string; // e.g. "40 फीट चौड़ा रोड"
  facing?: string; // e.g. "ईस्ट फेसिंग (वास्तु सम्मत)"
  furnishingStatus?: "Semi-Furnished" | "Fully Furnished" | "Unfurnished";
  description: string;
  amenities: string[];
  images: string[];
  locationUrl?: string;
  featured: boolean;
  status: "Available" | "Under Offer" | "Sold" | "Rented";
  updatedAt: string;
  highlightBadge?: string;
}

export const sampleProperties: Property[] = [
  {
    id: "SAM-101",
    slug: "3-bhk-luxury-villa-jagatpura",
    title: "3 BHK Luxury Independent Villa in Jagatpura",
    hindiTitle: "3 BHK शानदार विला, प्राइम लोकेशन - जगतपुरा",
    transactionType: "buy",
    propertyType: "house",
    price: 7800000,
    displayPrice: "₹78 Lakh",
    city: "जयपुर",
    locality: "जगतपुरा",
    area: 1650,
    areaUnit: "Sq. Ft.",
    bedrooms: 3,
    bathrooms: 3,
    roadWidth: "40 Feet Road",
    facing: "East Facing (वास्तु अनुसार)",
    furnishingStatus: "Semi-Furnished",
    description: "जगतपुरा के पॉश और विकसित इलाके में स्थित 3 BHK मॉड्यूलर विला। 40 फीट चौड़ी सड़क, सभी कमरों में प्रीमियम फॉल्स सीलिंग, मॉड्यूलर किचन, कवर्ड कार पार्किंग और 24 घंटे बोरवेल + बीसलपुर पानी की सुविधा। बैंक लोन 90% तक स्वीकृत।",
    amenities: ["Modular Kitchen", "Car Parking", "24/7 Water Supply", "Vastu Compliant", "Terrace Garden", "Gated Security"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    status: "Available",
    updatedAt: "2026-10-25",
    highlightBadge: "हॉट डील / लोन उपलब्ध"
  },
  {
    id: "SAM-102",
    slug: "residential-jda-plot-patrakar-colony",
    title: "200 Sq. Yards JDA Approved Residential Plot",
    hindiTitle: "200 गज JDA अप्रूव्ड कॉर्नर प्लॉट - पत्रकार कॉलोनी",
    transactionType: "plot",
    propertyType: "plot",
    price: 4600000,
    displayPrice: "₹46 Lakh",
    city: "जयपुर",
    locality: "मानसरोवर",
    area: 200,
    areaUnit: "Sq. Yards (गज)",
    roadWidth: "60 Feet x 30 Feet Corner",
    facing: "North-East Facing (ईशान कोण)",
    description: "मानसरोवर के समीप पत्रकार कॉलोनी में JDA पट्टा शुदा 200 गज का कॉर्नर प्लॉट। 60 फीट मेन रोड पर स्थित, तुरंत मकान बनाकर रहने योग्य। सीवरेज, बिजली और पानी की लाइन चालू।",
    amenities: ["JDA Approved", "Corner Plot", "Wide 60ft Road", "Clear Registry Title", "Direct Owner Deal"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    status: "Available",
    updatedAt: "2026-10-26",
    highlightBadge: "JDA पट्टा शुदा"
  },
  {
    id: "SAM-103",
    slug: "3-bhk-ready-to-move-flat-malviya-nagar",
    title: "3 BHK Premium Flat near World Trade Park",
    hindiTitle: "3 BHK लग्जरी फ्लैट, WTP के पास - मालवीय नगर",
    transactionType: "buy",
    propertyType: "flat",
    price: 9200000,
    displayPrice: "₹92 Lakh",
    city: "जयपुर",
    locality: "मालवीय नगर",
    area: 1850,
    areaUnit: "Sq. Ft.",
    bedrooms: 3,
    bathrooms: 3,
    roadWidth: "50 Feet Road",
    facing: "North Facing",
    furnishingStatus: "Fully Furnished",
    description: "मालवीय नगर में वर्ल्ड ट्रेड पार्क (WTP) से मात्र 800 मीटर की दूरी पर 3 BHK अल्ट्रा-लक्जरी फ्लैट। इटैलियन मार्बल फ्लोरिंग, 2 बड़ी बालकनी, लिफ्ट, बेसमेंट पार्किंग और 100% पावर बैकअप।",
    amenities: ["High-speed Lift", "Italian Flooring", "Basement Parking", "Gym & Club Access", "CCTV Surveillance", "Gas Pipeline"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    status: "Available",
    updatedAt: "2026-10-27",
    highlightBadge: "प्राइम मालवीय नगर"
  },
  {
    id: "SAM-104",
    slug: "commercial-shop-main-tonk-road",
    title: "Prime Commercial Front Shop on Main Tonk Road",
    hindiTitle: "मेन टोंक रोड पर फ्रंट फेसिंग कमर्शियल शॉप",
    transactionType: "buy",
    propertyType: "commercial",
    price: 3400000,
    displayPrice: "₹34 Lakh",
    city: "जयपुर",
    locality: "टोंक रोड",
    area: 280,
    areaUnit: "Sq. Ft.",
    roadWidth: "160 Feet Main Tonk Road",
    facing: "East Facing",
    description: "मेन टोंक रोड पर भारी ट्रैफिक और फुटफॉल वाली लोकेशन पर ग्राउंड फ्लोर दुकान। शोरूम, क्लिनिक, मोबाइल शॉप या स्टेशनरी के लिए सबसे उत्तम। रेंटल इनकम ₹22,000/माह की तुरंत गारंटी।",
    amenities: ["High Footfall", "Front Glass Glazing", "Ample Customer Parking", "Immediate Rental Yield", "Clear Commercial Registry"],
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    status: "Available",
    updatedAt: "2026-10-28",
    highlightBadge: "हाई रेंटल इनकम"
  },
  {
    id: "SAM-105",
    slug: "2-bhk-furnished-flat-for-rent-vaishali-nagar",
    title: "2 BHK Furnished Family Flat on Rent in Vaishali Nagar",
    hindiTitle: "2 BHK फर्निश्ड फ्लैट किराये पर - वैशाली नगर",
    transactionType: "rent",
    propertyType: "flat",
    price: 18500,
    displayPrice: "₹18,500 / माह",
    city: "जयपुर",
    locality: "वैशाली नगर",
    area: 1100,
    areaUnit: "Sq. Ft.",
    bedrooms: 2,
    bathrooms: 2,
    facing: "East Facing",
    furnishingStatus: "Fully Furnished",
    description: "वैशाली नगर में आम्रपाली सर्कल के पास पूरी तरह से फर्निश्ड 2 BHK फ्लैट। सोफा, बेड, एसी, फ्रिज, आरओ, गीजर और टीवी उपलब्ध। केवल संभ्रांत फैमिली या वर्किंग प्रोफेशनल्स के लिए।",
    amenities: ["AC & Fridge Included", "Covered Bike/Car Parking", "Near Amrapali Circle", "Lift", "Security Guard"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    status: "Available",
    updatedAt: "2026-10-28",
    highlightBadge: "किराये के लिए उपलब्ध"
  },
  {
    id: "SAM-106",
    slug: "affordable-independent-house-sanganer",
    title: "G+1 Independent Duplex House in Sanganer",
    hindiTitle: "शानदार 3 BHK डुप्लेक्स मकान - सांगानेर टाउन",
    transactionType: "buy",
    propertyType: "house",
    price: 2850000,
    displayPrice: "₹28.5 Lakh",
    city: "जयपुर",
    locality: "सांगानेर",
    area: 900,
    areaUnit: "Sq. Ft.",
    bedrooms: 3,
    bathrooms: 2,
    roadWidth: "30 Feet Road",
    facing: "West Facing",
    furnishingStatus: "Semi-Furnished",
    description: "सांगानेर में बजट रेंज के अंदर खुद का नया स्वतंत्र मकान। पक्की छत, मार्बल सीढ़ियां, शानदार फ्रंट एलिवेशन और सामने 30 फीट चौड़ा रोड। सभी प्रमुख सरकारी व प्राइवेट बैंकों से 80-90% तक होम लोन उपलब्ध।",
    amenities: ["Own Water Boring", "Vehicle Parking", "Bank Loan Assistance", "Separate Electricity Meter", "Near Market & Schools"],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: true,
    status: "Available",
    updatedAt: "2026-10-27",
    highlightBadge: "कम बजट में अपना मकान"
  },
  {
    id: "SAM-107",
    slug: "farmhouse-agricultural-land-ajmer-road",
    title: "1 Bigha Farmhouse Land near Ajmer Road Express Highway",
    hindiTitle: "1 बीघा फार्महाउस लैंड - अजमेर रोड एक्सप्रेसवे के पास",
    transactionType: "plot",
    propertyType: "agricultural",
    price: 6500000,
    displayPrice: "₹65 Lakh",
    city: "जयपुर",
    locality: "अजमेर रोड",
    area: 1,
    areaUnit: "Bigha",
    roadWidth: "60 Feet Connected Road",
    description: "अजमेर रोड से मात्र 1.5 किमी अंदर चारदीवारी से घिरा 1 बीघा फार्महाउस लैंड। मीठा पानी, फलदार पेड़, बिजली कनेक्शन और शांत हरा-भरा वातावरण। वीकेंड होम व निवेश के लिए बेहतरीन।",
    amenities: ["Boundary Wall Done", "Sweet Underground Water", "Electricity Transformer", "Clear Land Registry", "Peaceful Greenery"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    status: "Available",
    updatedAt: "2026-10-24"
  },
  {
    id: "SAM-108",
    slug: "budget-plot-diggi-malpura-road",
    title: "100 Sq. Yards Gated Township Plot near Ring Road",
    hindiTitle: "100 गज प्लॉट, रिंग रोड के पास - गेटेड टाउनशिप",
    transactionType: "plot",
    propertyType: "plot",
    price: 1350000,
    displayPrice: "₹13.5 Lakh",
    city: "जयपुर",
    locality: "सांगानेर",
    area: 100,
    areaUnit: "Sq. Yards (गज)",
    roadWidth: "30 Feet Road",
    facing: "North Facing",
    description: "रिंग रोड जंक्शन के पास नव-विकसित गेटेड टाउनशिप में 100 गज का सस्ता प्लॉट। डामर रोड, स्ट्रीट लाइट, पार्क, पानी की टंकी और बाउंड्री वाल युक्त। आसान किस्तों और बैंक लोन पर उपलब्ध।",
    amenities: ["Gated Township", "Street Lights & Park", "Water Pipeline", "Installment Option", "Upcoming Ring Road Corridor"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    status: "Available",
    updatedAt: "2026-10-25"
  }
];

export function getWhatsAppLeadLink(property: Property, whatsappNumber: string): string {
  const message = `नमस्ते, मुझे आपकी वेबसाइट पर Property ID [${property.id}], "${property.hindiTitle || property.title}", Location: ${property.locality}, Price: ${property.displayPrice} के बारे में पूरी जानकारी और साइट विजिट शेड्यूल करनी है। कृपया डिटेल्स भेजें।`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppLink(whatsappNumber: string, customText?: string): string {
  const defaultText = customText || "नमस्ते, मुझे आपके सर्विस एरिया में प्रॉपर्टी खरीदने / बेचने / किराये पर लेने के संबंध में मार्गदर्शन चाहिए। कृपया संपर्क करें।";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
}

export function getSellPropertyWhatsAppLink(whatsappNumber: string, details: {
  ownerName?: string;
  propertyType?: string;
  locality?: string;
  expectedPrice?: string;
}): string {
  const text = `नमस्ते राजेश जी, मैं अपनी प्रॉपर्टी बेचना/किराये पर देना चाहता हूँ:
- प्रॉपर्टी प्रकार: ${details.propertyType || "मकान / प्लॉट / फ्लैट"}
- लोकेशन: ${details.locality || "लोकेशन बताएं"}
- अपेक्षित कीमत/किराया: ${details.expectedPrice || "कीमत"}
- मेरा नाम: ${details.ownerName || "नाम"}
कृपया ग्राहक ढूंढने में मदद करें।`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
