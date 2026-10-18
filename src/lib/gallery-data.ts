export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "ro-systems" | "ro-service" | "ac-service" | "parts";
  categoryLabel: string;
  image: string;
  aspectRatio?: string;
  features: string[];
  specs?: { [key: string]: string };
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "ro-model-1",
    title: "Aqua Purity Prime RO + UV + UF",
    subtitle: "Advanced Multi-Stage Domestic Water Purifier",
    category: "ro-systems",
    categoryLabel: "RO Purifier Model",
    image: "/images/ro-gallery/ro-model-1.png",
    features: [
      "Multi-stage purification (RO + UV + UF + TDS)",
      "High storage capacity food-grade transparent tank",
      "Automatic water level sensor & auto-flush",
      "Removes 99.9% dissolved impurities & bacteria",
    ],
    specs: {
      "Purification Capacity": "15 LPH",
      "Storage Tank": "10-12 Liters",
      "TDS Reduction": "Up to 2000 ppm input",
    },
  },
  {
    id: "ro-model-2",
    title: "Aqua Purity Grand Copper + Alkaline",
    subtitle: "Active Copper & Alkaline Mineral Infusion System",
    category: "ro-systems",
    categoryLabel: "RO Purifier Model",
    image: "/images/ro-gallery/ro-model-2.png",
    features: [
      "Infused with real copper & natural minerals",
      "Maintains optimal pH 7.5 - 8.5 balance",
      "LED indicators for purification & tank full",
      "Energy-efficient high-pressure booster pump",
    ],
    specs: {
      "Purification Capacity": "15-18 LPH",
      "Storage Tank": "10 Liters",
      "Water Type": "Alkaline + Copper Rich",
    },
  },
  {
    id: "ro-model-3",
    title: "Aqua Purity Compact Countertop / Wall-Mount",
    subtitle: "Sleek Modern Purifier for Modern Kitchens",
    category: "ro-systems",
    categoryLabel: "RO Purifier Model",
    image: "/images/ro-gallery/ro-model-3.png",
    features: [
      "Ultra-compact footprint, wall or shelf mount",
      "Pre-filter with heavy-duty spun cartridge",
      "Quick-change cartridge system for zero hassle",
      "Low wastewater ratio with smart recovery",
    ],
    specs: {
      "Purification Capacity": "12-15 LPH",
      "Storage Tank": "8 Liters",
      "Mounting": "Wall Mount / Countertop",
    },
  },
  {
    id: "ro-model-4",
    title: "Aqua Purity Elegant RO + TDS Controller",
    subtitle: "Pure & Sweet Taste Water Purification Unit",
    category: "ro-systems",
    categoryLabel: "RO Purifier Model",
    image: "/images/ro-gallery/ro-model-4.png",
    features: [
      "Precision digital TDS controller valve",
      "High-rejection 80 GPD RO membrane",
      "Leak-proof push-fit fittings with safety clips",
      "Dual filtration for municipal & borewell water",
    ],
    specs: {
      "Purification Capacity": "15 LPH",
      "Storage Tank": "12 Liters",
      "Warranty": "1 Year Free Service",
    },
  },
  {
    id: "ro-model-5",
    title: "Aqua Purity Royal Alkaline Mineralizer",
    subtitle: "Healthy Hydration with Essential Trace Minerals",
    category: "ro-systems",
    categoryLabel: "RO Purifier Model",
    image: "/images/ro-gallery/ro-model-5.png",
    features: [
      "Post-carbon alkaline filter cartridge",
      "Retains essential Calcium, Magnesium & Potassium",
      "Heavy-duty SMPS power supply with surge protection",
      "Smell & odor elimination with coconut shell carbon",
    ],
    specs: {
      "Purification Capacity": "18 LPH",
      "Storage Tank": "10-12 Liters",
      "Water Taste": "Sweet & Light",
    },
  },
  {
    id: "ro-model-6",
    title: "Aqua Purity Smart Shield RO System",
    subtitle: "Heavy-Duty Residential & Small Office Purifier",
    category: "ro-systems",
    categoryLabel: "RO Purifier Model",
    image: "/images/ro-gallery/ro-model-6.png",
    features: [
      "Designed for high TDS and hard water areas in Mumbai",
      "Long-life 100 GPD membrane with anti-scaling technology",
      "Sturdy anti-bacterial ABS plastic cabinet",
      "Fast dispensing faucet tap for effortless filling",
    ],
    specs: {
      "Purification Capacity": "20 LPH",
      "Storage Tank": "12 Liters",
      "Water Input TDS": "Up to 2500 ppm",
    },
  },
  {
    id: "ro-model-7",
    title: "Aqua Purity Commercial & High-Flow RO",
    subtitle: "High Capacity Water Purifier for Offices & Cafes",
    category: "ro-systems",
    categoryLabel: "Commercial RO",
    image: "/images/ro-gallery/ro-model-7.png",
    features: [
      "Continuous purification for high daily consumption",
      "Dual booster pumps for maximum pressure and flow",
      "Heavy sediment filter and multi-block carbon setup",
      "Ideal for offices, schools, restaurants and clinics",
    ],
    specs: {
      "Purification Capacity": "25-50 LPH",
      "Application": "Offices, Commercial & Large Families",
      "Service Support": "Same-day doorstep visit",
    },
  },
  {
    id: "ro-banner",
    title: "Aqua Purity Water Purification, Sales & Spares",
    subtitle: "Complete Doorstep RO Solutions in Mumbai",
    category: "parts",
    categoryLabel: "Sales & Spare Parts",
    image: "/images/carousel-1.jpg",
    features: [
      "New RO purifiers sales & installation",
      "100% genuine filters, membranes, pumps & adapters",
      "Doorstep technician service within 60-90 minutes",
      "Affordable AMC maintenance plans available",
    ],
  },
  {
    id: "ro-doorstep-service",
    title: "Expert RO Technician Doorstep Service",
    subtitle: "Deep Servicing, TDS Calibration & Filter Change",
    category: "ro-service",
    categoryLabel: "Doorstep Service",
    image: "/images/ro-service.jpg",
    features: [
      "Certified RO technicians with digital TDS meter",
      "Food-grade internal tank sanitisation",
      "Leakage repair & pipe replacement",
      "All brands serviced: Kent, Aquaguard, Pureit, Livpure, etc.",
    ],
  },
  {
    id: "ac-doorstep-service",
    title: "Professional AC Repair & Jet Servicing",
    subtitle: "Split & Window AC Jet Cleaning & Gas Refilling",
    category: "ac-service",
    categoryLabel: "AC Service",
    image: "/images/ac-service.jpg",
    features: [
      "High-pressure foam jet coil cleaning",
      "R32, R410A, R22 genuine gas charging",
      "Cooling issue and sensor diagnostics",
      "Copper piping and bracket installation",
    ],
  },
];
