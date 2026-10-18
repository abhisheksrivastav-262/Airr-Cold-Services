import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench, Settings, Thermometer, Wind, Award, Zap,
  ArrowRight, Check, HelpCircle, Star, Phone, MessageCircle, ShieldCheck, CheckCircle2
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AC Repair, Installation & Maintenance Services in Mumbai – Airr Cold Services",
  description:
    "Complete AC repair, installation, uninstallation, gas refilling, and maintenance services in Mumbai. Daikin, Voltas, LG, Samsung & all brands. Call +91 76666 97586.",
};

const allAcServices = [
  {
    icon: Wrench,
    title: "AC Repair & Fault Troubleshooting",
    desc: "Complete diagnosis and rapid on-site repair for all AC models. We resolve cooling failure, abnormal noises, circuit malfunctions, and sensor faults with genuine parts.",
    highlights: ["No cooling / less cooling diagnosis", "Water leakage fix from indoor unit", "Compressor & capacitor repair", "PCB circuit board troubleshooting", "Thermostat and sensor replacement", "Remote control & display repair"],
    tag: "Most Popular",
  },
  {
    icon: Settings,
    title: "AC Installation & Uninstallation",
    desc: "Professional installation and safe relocation of Split, Window, Inverter, and Cassette air conditioners. Includes high-grade copper piping and precision vacuuming.",
    highlights: ["Split AC bracket mounting & fitting", "Window AC wood/iron frame fitting", "Cassette & ducted unit installation", "Safe uninstallation without gas loss", "Copper piping with insulation", "Drain pipe testing and fitting"],
    tag: "Standard & Inverter",
  },
  {
    icon: Thermometer,
    title: "Deep Cleaning & Preventive Servicing",
    desc: "Foam wash and jet-pump servicing to clear stubborn dust, algae, and grime from indoor cooling coils, blower fans, outdoor condensing coils, and drain trays.",
    highlights: ["Jet-pump pressure cleaning", "Antimicrobial blower wash", "Air filter deep sterilization", "Condenser coil cleaning", "Drain tray unclogging", "Amperage & voltage test"],
    tag: "Pre-Summer Essential",
  },
  {
    icon: Wind,
    title: "AC Gas Leak Detection & Refilling",
    desc: "Precision refrigerant top-up and full refilling strictly adhering to manufacturer specs for R32, R410A, and R22 refrigerants with nitrogen pressure leak tests.",
    highlights: ["Nitrogen pressure leak detection", "Brazing & leak sealing on copper pipes", "High-vacuum moisture removal", "Digital weighing scale refrigerant charge", "R32 / R410A / R22 gas refilling", "Operating pressure optimization"],
    tag: "100% Pure Refrigerant",
  },
  {
    icon: Settings,
    title: "Commercial AC & Multi-Split Solutions",
    desc: "Specialized HVAC repair, duct cleaning, and preventive maintenance for offices, showrooms, server rooms, restaurants, and commercial complexes.",
    highlights: ["Cassette AC servicing", "VRV / VRF system maintenance", "Tower and ductable AC maintenance", "Priority emergency breakdown response", "Customized corporate service contracts", "Detailed technical report & GST invoice"],
    tag: "For Businesses",
  },
  {
    icon: Award,
    title: "AC Relocation & Safe Shifting",
    desc: "Hassle-free moving of your AC within Mumbai. Safe refrigerant pump-down, careful dismantling, safe packaging, and reinstallation at your new premises.",
    highlights: ["Gas pump-down (zero refrigerant loss)", "Careful bracket & unit dismantling", "Transit packaging for outdoor unit", "Fresh installation at new home/office", "New copper piping if needed", "Post-setup cooling verification"],
    tag: "All Mumbai MMR",
  },
];

const acTypes = [
  "Split AC", "Window AC", "Inverter AC", "Cassette AC",
  "Tower AC", "Ducted / Central HVAC", "Multi-Split",
];

const brands = [
  "Daikin", "Voltas", "LG", "Samsung", "Hitachi",
  "Blue Star", "Carrier", "Whirlpool", "Lloyd", "O General",
  "Mitsubishi", "Godrej", "Panasonic", "Haier",
];

const faqs = [
  {
    q: "How often should an air conditioner be serviced in Mumbai?",
    a: "Due to Mumbai's humid climate and dust levels, we recommend servicing your AC at least twice a year — once before the peak summer season and once after the monsoon to keep coils clean and prevent corrosion."
  },
  {
    q: "What is included in the ₹199 booking token?",
    a: "The ₹199 booking fee confirms technician dispatch to your doorstep at your selected time slot. It is completely adjusted against the final service invoice upon job completion."
  },
  {
    q: "How do you detect gas leaks before refilling?",
    a: "We do not just top up gas blindly. Our technicians run nitrogen pressure testing to locate microscopic leak points in the copper coil and joints, braze/seal them permanently, vacuum the lines, and then charge refrigerant to factory-specified PSI."
  },
  {
    q: "Do you supply genuine spare parts?",
    a: "Yes. We source original manufacturer-approved spare parts including capacitors, fan motors, PCB motherboards, contactors, and copper piping with guaranteed warranties."
  },
  {
    q: "Which Mumbai locations do you cover for AC repairs?",
    a: "We provide same-day service across Andheri West, Andheri East, Bandra, Juhu, Goregaon, Malad, Kandivali, Borivali, Powai, Versova, and all surrounding western and central suburbs."
  },
];

export default function ACServicesPage() {
  return (
    <>
      {/* Hero Section with Dedicated AC Image */}
      <section
        className="pt-32 pb-20 relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #071B2D 0%, #0a2f52 50%, #0d4677 100%)" }}
        aria-label="AC Services Overview"
      >
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                <Wind size={14} className="text-cyan-400" />
                Air Conditioning Service Center • Mumbai
              </div>

              <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-[1.15] mb-5">
                All-in-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AC Repair, Installation</span> & Maintenance
              </h1>

              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed mb-6">
                From emergency breakdowns and jet-pump foam wash to gas refilling and multi-unit commercial HVAC servicing.
                Everything for your AC handled under one roof by certified cooling experts.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-200 mb-8">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 size={15} className="text-cyan-400" /> 60-90 Mins Doorstep Arrival
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <ShieldCheck size={15} className="text-cyan-400" /> 30-Day Service Warranty
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Star size={15} className="text-cyan-400" /> 5,000+ ACs Serviced
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/book-service?category=AC" className="btn btn-primary btn-lg shadow-lg">
                  Book AC Service Online <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
                  className="btn btn-lg bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  <Phone size={18} /> Call {BUSINESS.primaryPhone}
                </a>
              </div>
            </div>

            {/* Right Column: Hero Real Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <div className="relative h-[320px] md:h-[400px] w-full">
                  <Image
                    src="/images/ac-service.jpg"
                    alt="Professional technician inspecting split air conditioner indoor unit"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-slate-800 shadow-xl border border-white/50">
                    <p className="font-bold text-sm text-[#071B2D]">Certified Multi-Brand AC Technicians</p>
                    <p className="text-xs text-slate-600 mt-0.5">Daikin, Voltas, LG, Hitachi, Samsung, Blue Star & more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AC Types Covered Bar */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unit Types Covered:</span>
            <div className="flex flex-wrap gap-2">
              {acTypes.map((t) => (
                <span key={t} className="bg-blue-50 text-blue-800 border border-blue-100 rounded-full px-3.5 py-1 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive AC Services Grid */}
      <section className="py-20 bg-[#F6F9FC]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Complete Catalogue
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#071B2D] mt-3">
              All AC Services Mentioned In Detail
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Every job is performed using modern diagnostic gauges, genuine replacement spares, and manufacturer-recommended techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAcServices.map(({ icon: Icon, title, desc, highlights, tag }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071B2D] mb-2">{title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{desc}</p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What We Inspect & Fix:</p>
                    {highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/book-service?category=AC&serviceType=${encodeURIComponent(title)}`}
                  className="btn btn-primary w-full justify-center text-xs py-2.5"
                >
                  Book This AC Service <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Serviced */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container-site text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Multi-Brand Capability</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#071B2D] mb-8">
            Expert Servicing for Every Major AC Brand in India
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {brands.map((b) => (
              <div
                key={b}
                className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm hover:border-blue-400 hover:bg-blue-50 transition"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F6F9FC]">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
              Customer Queries
            </span>
            <h2 className="text-3xl font-extrabold text-[#071B2D] mt-3">
              Frequently Asked Questions About AC Service
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-white rounded-2xl border border-slate-200 p-5 group transition">
                <summary className="font-bold text-slate-900 cursor-pointer text-sm flex items-center justify-between select-none">
                  <span>{q}</span>
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-600 text-sm mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-16 bg-gradient-to-r from-[#071B2D] via-[#092B4C] to-[#0878F9] text-white">
        <div className="container-site text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need Quick AC Repair or Servicing in Mumbai?</h2>
          <p className="text-blue-100 text-sm md:text-base mb-8">
            Select your preferred date & time slot. Our technician arrives on time with genuine spares and diagnostic equipment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-service?category=AC" className="btn btn-white btn-lg font-bold">
              Book AC Appointment (₹199 Token) <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hi Airr Cold Services! I need AC service.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg font-bold"
            >
              <MessageCircle size={18} /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
