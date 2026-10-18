"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  Phone,
  MessageCircle,
  CheckCircle2,
  Filter,
  Maximize2,
  X,
  Sparkles,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/gallery-data";

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: "all", label: "All Photos & Products" },
    { key: "ro-systems", label: "RO Purifier Models" },
    { key: "ro-service", label: "RO Doorstep Service" },
    { key: "parts", label: "Sales & Spares" },
    { key: "ac-service", label: "AC Servicing" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat.key
                ? "bg-[#071B2D] text-cyan-300 shadow-md border border-cyan-400/40"
                : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid - Designed specifically to display full images without any cropping */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col"
          >
            {/* Image Container: Clean light neutral backdrop with object-contain so image is 100% visible and NEVER cropped */}
            <div
              className="relative w-full bg-gradient-to-b from-slate-50 to-slate-100/80 p-4 flex items-center justify-center border-b border-slate-100 cursor-pointer overflow-hidden"
              style={{ minHeight: "340px", maxHeight: "420px" }}
              onClick={() => setActiveModalItem(item)}
            >
              <div className="relative w-full h-[320px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  priority={item.id.includes("model-1") || item.id.includes("banner")}
                />
              </div>

              {/* Tag overlay */}
              <div className="absolute top-3 left-3 bg-[#071B2D]/85 backdrop-blur-md text-cyan-300 text-[11px] font-bold px-2.5 py-1 rounded-md border border-cyan-400/30">
                {item.categoryLabel}
              </div>

              {/* Zoom hint on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-slate-700 p-1.5 rounded-full shadow-md">
                <Maximize2 size={15} />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-cyan-700 font-semibold mt-0.5 mb-3">
                  {item.subtitle}
                </p>

                {/* Features checklist */}
                <ul className="space-y-1.5 mb-4">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 size={13} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Specifications if available */}
                {item.specs && (
                  <div className="bg-slate-50 rounded-lg p-2.5 mb-4 text-[11px] space-y-1 border border-slate-100">
                    {Object.entries(item.specs).map(([label, val]) => (
                      <div key={label} className="flex justify-between text-slate-600">
                        <span className="font-medium text-slate-500">{label}:</span>
                        <span className="font-bold text-slate-800">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Aqua Purity Services, I am interested in ${item.title}. Please share price, availability and installation details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm flex-1 font-bold text-xs shadow-sm py-2"
                >
                  <MessageCircle size={14} /> Price &amp; Info
                </a>
                <a
                  href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
                  className="btn btn-primary btn-sm flex-1 font-bold text-xs shadow-sm py-2"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen Uncropped Image Preview */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-white/20 p-5 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Full Image: never cut, full resolution */}
              <div className="md:col-span-7 bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-100">
                <div className="relative w-full h-[400px] sm:h-[480px]">
                  <Image
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Details Column */}
              <div className="md:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-cyan-100 text-cyan-800 text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                    {activeModalItem.categoryLabel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-sm text-cyan-600 font-semibold mt-1 mb-4">
                    {activeModalItem.subtitle}
                  </p>

                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2 mb-5">
                    {activeModalItem.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {activeModalItem.specs && (
                    <div className="bg-slate-50 rounded-xl p-3 mb-5 border border-slate-100 space-y-1.5 text-xs">
                      {Object.entries(activeModalItem.specs).map(([label, val]) => (
                        <div key={label} className="flex justify-between text-slate-700">
                          <span className="font-semibold text-slate-500">{label}:</span>
                          <span className="font-bold text-slate-900">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Aqua Purity Services, I want to inquire about ${activeModalItem.title}. Please provide pricing and booking.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp w-full justify-center font-bold text-sm shadow-md"
                  >
                    <MessageCircle size={16} /> WhatsApp Inquiry
                  </a>
                  <a
                    href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
                    className="btn btn-primary w-full justify-center font-bold text-sm shadow-md"
                  >
                    <Phone size={16} /> Call {BUSINESS.primaryPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
