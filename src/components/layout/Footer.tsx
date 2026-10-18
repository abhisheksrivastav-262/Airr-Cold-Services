import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "AC Services", href: "/ac-services" },
  { label: "RO Services", href: "/ro-services" },
  { label: "AMC Plans", href: "/amc-plans" },
  { label: "Contact Us", href: "/contact" },
  { label: "Book Service", href: "/book-service" },
];

const acServices = [
  { label: "AC Repair & Troubleshooting", href: "/ac-services" },
  { label: "AC Installation & Uninstallation", href: "/ac-services" },
  { label: "AC Maintenance & Servicing", href: "/ac-services" },
  { label: "Gas Refilling (R32, R410A, R22)", href: "/ac-services" },
  { label: "Commercial AC & HVAC", href: "/ac-services" },
  { label: "AC Relocation & Shifting", href: "/ac-services" },
];

const roServices = [
  { label: "RO Purifier Installation", href: "/ro-services" },
  { label: "RO Repair & Fault Fixing", href: "/ro-services" },
  { label: "RO Deep Cleaning & Servicing", href: "/ro-services" },
  { label: "Filter & Membrane Replacement", href: "/ro-services" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
];

export default function Footer() {
  const year = 2025;

  return (
    <footer
      className="bg-[#071B2D] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main Footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="relative w-[130px] h-[50px] mb-5">
              <Image
                src="/images/logo-white.png"
                alt="Airr Cold Services white logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-blue-200 text-sm mb-1 font-600">{BUSINESS.tagline}</p>
            <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-6">
              Professional AC repair, installation, maintenance, and RO water
              purifier services across Mumbai and Maharashtra.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-blue-400 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <div>Mon–Sat: 9 AM – 7 PM</div>
                  <div>Sunday: Emergency Only</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  label: "Facebook",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-700 text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-700 text-white uppercase tracking-wider mb-5">AC Services</h3>
            <ul className="flex flex-col gap-2.5 mb-5">
              {acServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-700 text-white uppercase tracking-wider mb-3 mt-5">RO Services</h3>
            <ul className="flex flex-col gap-2.5">
              {roServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-700 text-white uppercase tracking-wider mb-5">Contact Us</h3>
            <div className="flex flex-col gap-4">
              {BUSINESS.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Phone size={15} className="text-blue-400 flex-shrink-0" />
                  {phone}
                </a>
              ))}
              {BUSINESS.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                >
                  <Mail size={15} className="text-blue-400 flex-shrink-0" />
                  {email}
                </a>
              ))}
              <a
                href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hi! I need AC/RO service.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <MessageCircle size={15} className="text-green-400 flex-shrink-0" />
                WhatsApp Us
              </a>
            </div>

            {/* Payment */}
            <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs font-600 text-slate-400 uppercase tracking-wider mb-2">We Accept</p>
              <div className="flex flex-wrap gap-1.5">
                {["UPI", "PhonePe", "Google Pay", "Cash"].map((m) => (
                  <span
                    key={m}
                    className="text-xs bg-blue-900/50 text-blue-300 border border-blue-800 px-2 py-0.5 rounded"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">UPI: {BUSINESS.upiId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-white/10">
        <div className="container-site py-4">
          <p className="text-xs text-slate-500 text-center">
            <span className="text-slate-400 font-500">Service Areas: </span>
            {BUSINESS.serviceAreas.join(" • ")}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm">
              © {year} Airr Cold Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
