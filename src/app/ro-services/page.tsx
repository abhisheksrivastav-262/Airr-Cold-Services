import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Droplets, Wrench, Settings, ShieldCheck, ArrowRight,
  Check, Phone, MessageCircle, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "RO Water Purifier Services in Mumbai – Airr Cold Services",
  description:
    "Complete RO water purifier installation, filter replacement, membrane change, leakage repair, and deep sanitisation in Mumbai. Kent, Aquaguard, Pureit & all brands. Call +91 76666 97586.",
};

const allRoServices = [
  {
    icon: Droplets,
    title: "RO Installation & Re-Installation",
    desc: "Complete wall-mounted or under-the-sink RO water purifier installation. Proper inlet water diverter valve fitting, drain tube routing, and initial tank flush.",
    highlights: ["Wall bracket alignment & secure drilling", "Under-sink kitchen purifier plumbing", "Food-grade high-pressure tubing setup", "Inlet water pressure valve calibration", "Pre-filter outer housing installation", "First cycle flush and TDS calibration"],
    tag: "Installation",
  },
  {
    icon: Wrench,
    title: "RO Repair & Fault Troubleshooting",
    desc: "Fast diagnosis of machine not starting, auto-shutoff failure, booster pump humming noise, continuous drain water discharge, and electrical PCB issues.",
    highlights: ["SMPS power adapter & PCB repair", "Booster pump repair & pressure testing", "Low pressure switch (LPS) replacement", "Solenoid valve (SV) failure replacement", "Auto cut-off float switch repair", "Vibration & noise reduction"],
    tag: "Breakdown Repair",
  },
  {
    icon: Settings,
    title: "RO Filter & Membrane Replacement",
    desc: "Replacement of blocked sediment pre-filters, activated carbon blocks, UV germicidal lamps, and high-rejection RO semi-permeable membranes.",
    highlights: ["5-Micron spun sediment pre-filter", "Granular & block activated carbon", "Original high-TDS RO membrane (75/100 GPD)", "UV chamber quartz tube & lamp service", "UF hollow-fiber membrane check", "Mineralizer & alkaline cartridge upgrade"],
    tag: "Water Quality",
  },
  {
    icon: ShieldCheck,
    title: "RO Deep Servicing & Tank Sanitisation",
    desc: "Complete dismantling and chemical sanitization of the water storage tank, pipe descaling, UV lamp inspection, and total dissolved solids (TDS) optimization.",
    highlights: ["Food-grade tank antibacterial wash", "Membrane housing flushing & descaling", "TDS level testing before & after", "TDS controller fine tuning", "All tubing joints pressure leak check", "Water taste & purity verification"],
    tag: "Hygiene Care",
  },
  {
    icon: AlertTriangle,
    title: "Water Leakage & Low Flow Repair",
    desc: "Immediate rectification of dripping purifier taps, leaking elbows, cracked filter bowls, or sudden drops in pure water dispensing speed.",
    highlights: ["Push-fit quick-connect elbow replacement", "Cracked bowl / housing replacement", "Storage tank bladder pressure recharge", "Dispensing tap drip repair", "Clogged flow restrictor (FR) replacement", "Full pressure test under municipal flow"],
    tag: "Immediate Fix",
  },
  {
    icon: Sparkles,
    title: "Commercial RO Plants & Office Purifiers",
    desc: "High-capacity water purification servicing (25 LPH, 50 LPH, 100 LPH to industrial setups) for corporate offices, gyms, cafeterias, and clinics.",
    highlights: ["Commercial dual-membrane testing", "Raw water multi-parameter testing", "Heavy-duty booster pump maintenance", "Sand & carbon media replacement", "Scheduled periodic servicing visits", "GST billing & corporate maintenance"],
    tag: "Commercial & Office",
  },
];

const commonIssues = [
  {
    issue: "Water Tastes Bitter or Foul",
    cause: "Expired carbon filter or failing RO membrane accumulating organics.",
    solution: "Carbon filter & RO membrane replacement with complete tank sterilisation.",
  },
  {
    issue: "Purifier Makes Loud Vibrating Noise",
    cause: "Air trapped in booster pump or worn-out pump bearing bearings.",
    solution: "Pump de-aeration, mounting pad dampening or pump head repair.",
  },
  {
    issue: "Pure Water Flow Has Drastically Slowed",
    cause: "Choked sediment pre-filter or lost tank air bladder pressure.",
    solution: "Pre-filter cartridge change and storage bladder pressure recalibration.",
  },
  {
    issue: "Continuous Water Draining From Rejection Pipe",
    cause: "Faulty Solenoid Valve (SV) or stuck auto-shutoff valve.",
    solution: "Replacement with genuine automated cut-off valve to stop water wastage.",
  },
  {
    issue: "Water Leaking From Body or Base",
    cause: "Loose connector collar, burst plastic tubing or cracked filter casing.",
    solution: "Replacement of connectors with high-grade leak-proof push fittings.",
  },
  {
    issue: "Purifier Not Turning On / No Power",
    cause: "Burned SMPS power adapter, faulty fuse, or tripped internal switch.",
    solution: "Electrical diagnosis and genuine brand-compatible adapter installation.",
  },
];

const roBrands = [
  "Kent RO", "Aquaguard (Eureka Forbes)", "Pureit (HUL)", "Livpure",
  "LG Water Purifiers", "AO Smith", "Havells", "Blue Star",
  "Nasaka", "Tata Swach", "ZeroB", "Customized RO Systems",
];

const faqs = [
  {
    q: "How frequently should RO water purifier filters be replaced?",
    a: "In Mumbai, the external spun sediment pre-filter should be changed every 3 to 6 months. Carbon filters and the main RO membrane usually require replacement every 12 to 18 months depending on incoming water TDS and daily usage."
  },
  {
    q: "Do your technicians measure TDS on site?",
    a: "Yes! Every technician carries a calibrated digital TDS meter to show you the input raw water TDS and the output purified drinking water TDS before and after servicing."
  },
  {
    q: "Can you service under-the-sink kitchen purifiers?",
    a: "Absolutely. We service both wall-mounted domestic purifiers and under-sink models with dedicated pressure storage tanks and separate faucets."
  },
  {
    q: "Do you use brand-compatible genuine filters?",
    a: "Yes, we only install certified food-grade replacement cartridges and high-rejection membranes (Vontron, Dow Filmtec, Kent/Aquaguard compatible specifications)."
  },
  {
    q: "What areas of Mumbai do you cover for RO servicing?",
    a: "We service homes and commercial spaces across Andheri West, Andheri East, Juhu, Bandra, Goregaon, Malad, Kandivali, Borivali, Powai, and the entire Mumbai MMR."
  },
];

export default function ROServicesPage() {
  return (
    <>
      {/* Hero Section with Dedicated RO Photo */}
      <section
        className="pt-32 pb-20 relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #071B2D 0%, #06344d 50%, #086b96 100%)" }}
        aria-label="RO Water Purifier Services Overview"
      >
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                <Droplets size={14} className="text-cyan-400" />
                Pure Water Solutions • Mumbai
              </div>

              <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-[1.15] mb-5">
                All-in-One <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">RO Water Purifier</span> Repair, Servicing & Installation
              </h1>

              <p className="text-blue-100/90 text-base md:text-lg leading-relaxed mb-6">
                From filter and membrane replacements to pump repairs, leak fixing, and complete tank sanitisation.
                Keep your family drinking 100% pure, healthy water with prompt doorstep technician visits.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-blue-200 mb-8">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 size={15} className="text-cyan-400" /> Digital TDS Verification
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <ShieldCheck size={15} className="text-cyan-400" /> Food-Grade Certified Parts
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Sparkles size={15} className="text-cyan-400" /> Same-Day Doorstep Service
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/book-service?category=RO" className="btn btn-primary btn-lg shadow-lg">
                  Book RO Service Online <ArrowRight size={18} />
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
                    src="/images/ro-service.jpg"
                    alt="Professional technician inspecting and servicing modern RO water purifier under kitchen counter"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 text-slate-800 shadow-xl border border-white/50">
                    <p className="font-bold text-sm text-[#071B2D]">Multi-Brand RO Purifier Specialists</p>
                    <p className="text-xs text-slate-600 mt-0.5">Kent, Aquaguard, Pureit, Livpure, AO Smith & more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Serviced Bar */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Brands We Service:</span>
            <div className="flex flex-wrap gap-2">
              {roBrands.map((b) => (
                <span key={b} className="bg-cyan-50 text-cyan-900 border border-cyan-100 rounded-full px-3.5 py-1 text-xs font-semibold">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All RO Services Grid */}
      <section className="py-20 bg-[#F6F9FC]">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full">
              Full Service Suite
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#071B2D] mt-3">
              All RO Water Purifier Services In Detail
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Every servicing includes digital TDS testing, hygienic food-grade tubing checks, and authentic membrane replacements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRoServices.map(({ icon: Icon, title, desc, highlights, tag }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-300 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200/60 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071B2D] mb-2">{title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">{desc}</p>

                  <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">What&apos;s Included:</p>
                    {highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={14} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/book-service?category=RO&serviceType=${encodeURIComponent(title)}`}
                  className="btn btn-primary w-full justify-center text-xs py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                >
                  Book This RO Service <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real RO Purifier Models Showcase */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full">
                Product Catalog
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#071B2D] mt-2">
                Explore Our Real RO Purifier Models
              </h2>
              <p className="text-slate-600 text-xs md:text-sm mt-1">
                From compact domestic ROs to copper + alkaline mineral systems and high-flow office purifiers.
              </p>
            </div>
            <Link href="/gallery" className="btn btn-primary text-xs font-bold shadow-md flex-shrink-0">
              View Full Gallery &amp; All Models <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Aqua Purity Prime RO+UV+UF",
                desc: "High capacity domestic purifier with auto-flush",
                img: "/images/ro-gallery/ro-model-1.png",
                badge: "Best Seller",
              },
              {
                title: "Aqua Purity Grand Copper",
                desc: "Copper & alkaline mineral enriched water",
                img: "/images/ro-gallery/ro-model-2.png",
                badge: "Copper Rich",
              },
              {
                title: "Aqua Purity Elegant RO",
                desc: "Equipped with digital TDS controller valve",
                img: "/images/ro-gallery/ro-model-4.png",
                badge: "TDS Control",
              },
              {
                title: "Aqua Purity Royal Alkaline",
                desc: "Essential trace mineralizer for sweet taste",
                img: "/images/ro-gallery/ro-model-5.png",
                badge: "Alkaline",
              },
            ].map((prod, i) => (
              <div
                key={i}
                className="bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full h-60 bg-gradient-to-b from-white to-slate-100/60 p-4 flex items-center justify-center border-b border-slate-100">
                  <Image
                    src={prod.img}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#071B2D] text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {prod.badge}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{prod.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                    <a
                      href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
                        `Hi, I want to inquire about purchasing / servicing ${prod.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                    >
                      <MessageCircle size={13} /> Inquire
                    </a>
                    <Link
                      href="/gallery"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5"
                    >
                      Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems & Fixes Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Troubleshooting Guide
            </span>
            <h2 className="text-3xl font-extrabold text-[#071B2D] mt-3">
              Common RO Issues & How Our Technicians Fix Them
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              If your purifier is experiencing any of these signs, book an inspection before drinking quality is impacted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map(({ issue, cause, solution }) => (
              <div key={issue} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
                <div className="flex items-center gap-2 text-amber-600 mb-3">
                  <ShieldAlert size={18} />
                  <h3 className="font-bold text-slate-900 text-sm">{issue}</h3>
                </div>
                <div className="text-xs text-slate-600 space-y-2">
                  <p><strong>Cause:</strong> {cause}</p>
                  <p className="text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200">
                    <strong>Solution:</strong> {solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F6F9FC]">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest bg-cyan-100 px-3 py-1 rounded-full">
              Questions & Answers
            </span>
            <h2 className="text-3xl font-extrabold text-[#071B2D] mt-3">
              Frequently Asked Questions About RO Water Purifier Service
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="bg-white rounded-2xl border border-slate-200 p-5 group transition">
                <summary className="font-bold text-slate-900 cursor-pointer text-sm flex items-center justify-between select-none">
                  <span>{q}</span>
                  <span className="text-cyan-600 group-open:rotate-180 transition-transform">▼</span>
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
      <section className="py-16 bg-gradient-to-r from-[#071B2D] via-[#083b54] to-[#0d789e] text-white">
        <div className="container-site text-center max-w-3xl">
          <Droplets size={36} className="mx-auto mb-3 text-cyan-300" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ensure Safe & Pure Water for Your Family</h2>
          <p className="text-blue-100 text-sm md:text-base mb-8">
            Book a doorstep RO visit. Our technician brings genuine spare filters, membranes, and digital TDS meters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-service?category=RO" className="btn btn-white btn-lg font-bold">
              Book RO Purifier Service (₹199 Token) <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hi Airr Cold Services! I need RO water purifier service.")}`}
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
