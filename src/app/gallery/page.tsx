import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, ShieldCheck, Phone, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "RO Water Purifier & Service Gallery – Aqua Purity Services Mumbai",
  description:
    "Explore our complete collection of real RO water purifiers, copper & alkaline systems, spare parts, and technician doorstep servicing in Mumbai. Call +91 76666 97586.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Header */}
      <section
        className="pt-32 pb-16 relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #071B2D 0%, #06344d 50%, #086b96 100%)" }}
        aria-label="Gallery Header"
      >
        <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Droplets size={14} className="text-cyan-400" />
            Aqua Purity Services Showcase
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-[1.2] mb-5">
            Real RO Products &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Work Gallery
            </span>
          </h1>

          <p className="text-blue-100/90 text-base md:text-lg leading-relaxed mb-8">
            Browse our range of domestic and commercial RO water purifiers, alkaline systems, genuine spare parts, and actual doorstep service work delivered across Mumbai.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-blue-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <CheckCircle2 size={15} className="text-cyan-400" /> 100% Real Product Photos
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck size={15} className="text-cyan-400" /> Genuine Certified Spares
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Sparkles size={15} className="text-cyan-400" /> Same-Day Doorstep Installation
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 bg-[#F6F9FC]">
        <div className="container-site">
          <GalleryClient />
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#071B2D] py-14 text-white border-t border-cyan-500/20">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Looking for a New RO Purifier or Doorstep Repair?
          </h2>
          <p className="text-blue-200 text-sm md:text-base mb-8">
            Get expert guidance on selecting the best RO purifier for your area's water TDS, or book a fast technician visit at your doorstep in Mumbai.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
                "Hi Aqua Purity Services, I checked your RO gallery and need help choosing a water purifier / booking a service."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg font-bold shadow-lg"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
              className="btn btn-primary btn-lg font-bold shadow-lg"
            >
              <Phone size={18} /> Call {BUSINESS.primaryPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
