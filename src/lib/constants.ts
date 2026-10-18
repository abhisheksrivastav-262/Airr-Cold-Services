export const BUSINESS = {
  name: "Airr Cold Services",
  tagline: "Cooling Experts You Trust",
  founder: "Iqbal Sanghe",
  address: "A-22, Shah Industrial Area, Andheri West, Mumbai, Maharashtra 400053, India",
  addressShort: "Andheri West, Mumbai 400053",
  phones: ["+91 84335 50882", "+91 76669 7586"],
  primaryPhone: "+91 84335 50882",
  whatsappNumber: "918433550882",
  emails: ["airrcoldservices@gmail.com", "iqbal@airrcold.com"],
  primaryEmail: "airrcoldservices@gmail.com",
  upiId: "airrcoldservices@okhdfcbank",
  bookingFee: "₹199",
  hours: {
    weekdays: "Monday to Saturday: 9:00 AM – 7:00 PM",
    weekend: "Sunday: Emergency calls accepted",
  },
  serviceAreas: [
    "Andheri West", "Andheri East", "Bandra", "Juhu", "Goregaon",
    "Malad", "Kandivali", "Borivali", "Dahisar", "Mira Road",
    "Thane", "Navi Mumbai", "Powai", "Versova", "Jogeshwari",
  ],
  acBrands: [
    "Daikin", "Voltas", "LG", "Samsung", "Hitachi",
    "Blue Star", "Carrier", "Whirlpool", "Lloyd", "O General",
    "Mitsubishi", "Godrej",
  ],
  stats: {
    customers: "5,000+",
    experience: "10+ Years",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3162537095!2d72.8293!3d19.1207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzE0LjUiTiA3MsKwNDknNDUuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;

export const AC_SERVICE_TYPES = [
  "AC Repair",
  "AC Installation",
  "AC Maintenance / Servicing",
  "AC Gas Refilling",
  "AMC Plan",
  "AC Relocation",
  "Commercial AC Service",
  "Emergency AC Repair",
] as const;

export const AC_TYPES = [
  "Split AC",
  "Window AC",
  "Cassette AC",
  "Tower AC",
  "Ducted / Central AC",
  "Inverter AC",
  "Commercial AC",
] as const;

export const RO_SERVICE_TYPES = [
  "RO Installation",
  "RO Repair & Troubleshooting",
  "RO Servicing & Deep Cleaning",
  "Sediment Filter Replacement",
  "Carbon Filter Replacement",
  "RO Membrane Replacement",
  "Water Leakage Repair",
  "Low Water Flow Diagnosis",
  "RO AMC Plan",
  "Commercial Water Purification",
] as const;

export const TIME_SLOTS = [
  "09:00 AM – 11:00 AM",
  "11:00 AM – 01:00 PM",
  "01:00 PM – 03:00 PM",
  "03:00 PM – 05:00 PM",
  "05:00 PM – 07:00 PM",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AC Services", href: "/ac-services" },
  { label: "RO Services", href: "/ro-services" },
  { label: "AMC Plans", href: "/amc-plans" },
  { label: "Contact", href: "/contact" },
] as const;
