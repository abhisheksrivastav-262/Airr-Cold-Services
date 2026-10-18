"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ACServices = [
  { label: "AC Repair", href: "/services/ac-repair" },
  { label: "AC Installation", href: "/services/ac-installation" },
  { label: "AC Maintenance", href: "/services/ac-maintenance" },
  { label: "Gas Refilling", href: "/services/ac-gas-refilling" },
  { label: "Commercial AC", href: "/services/commercial-ac" },
  { label: "AC Relocation", href: "/services/ac-relocation" },
];

const ROServices = [
  { label: "RO Installation", href: "/services/ro-installation" },
  { label: "RO Repair", href: "/services/ro-repair" },
  { label: "RO Maintenance", href: "/services/ro-maintenance" },
  { label: "Filter Replacement", href: "/services/ro-filter-replacement" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [acOpen, setAcOpen] = useState(false);
  const [roOpen, setRoOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAcOpen(false);
    setRoOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const navClass = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    scrolled || mobileOpen
      ? "bg-white shadow-lg border-b border-gray-100"
      : "bg-[#071B2D] border-b border-white/10 shadow-md"
  );

  const linkClass = (href: string) =>
    cn(
      "text-sm font-600 transition-colors",
      scrolled || mobileOpen ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-cyan-400",
      isActive(href) && (scrolled || mobileOpen ? "text-blue-600 font-700" : "text-white font-700")
    );

  return (
    <nav className={navClass} role="navigation" aria-label="Main navigation">
      <div className="container-site w-full">
        <div className="flex items-center justify-between h-[72px] sm:h-[80px]">
          {/* Logo & Business Name */}
          <Link href="/" className="flex items-center gap-3" aria-label="Aqua Purity Services home">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Aqua Purity Services logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-extrabold text-base sm:text-lg tracking-tight leading-none",
                scrolled || mobileOpen ? "text-[#071B2D]" : "text-white"
              )}>
                Aqua Purity Services
              </span>
              <span className={cn(
                "text-[10px] sm:text-[11px] font-medium tracking-wide mt-0.5 leading-none",
                scrolled || mobileOpen ? "text-blue-600" : "text-cyan-300"
              )}>
                Pure Water Pure Life
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={cn(linkClass("/"), "px-3 py-2 rounded-lg")}>
              Home
            </Link>
            <Link href="/about" className={cn(linkClass("/about"), "px-3 py-2 rounded-lg")}>
              About
            </Link>

            <Link href="/ac-services" className={cn(linkClass("/ac-services"), "px-3 py-2 rounded-lg")}>
              AC Services
            </Link>
            <Link href="/ro-services" className={cn(linkClass("/ro-services"), "px-3 py-2 rounded-lg")}>
              RO Services
            </Link>
            <Link href="/amc-plans" className={cn(linkClass("/amc-plans"), "px-3 py-2 rounded-lg")}>
              AMC Plans
            </Link>
            <Link href="/contact" className={cn(linkClass("/contact"), "px-3 py-2 rounded-lg")}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
              className={cn(
                "flex items-center gap-1.5 text-sm font-600 transition-colors",
                scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
              )}
            >
              <Phone size={14} />
              {BUSINESS.primaryPhone}
            </a>
            <Link href="/book-service" className="btn btn-primary btn-sm">
              Book Service
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled || mobileOpen ? "text-slate-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl py-4 animate-fade-in w-full">
          <div className="container-site flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between",
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                )}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="w-2 h-2 rounded-full bg-blue-600" />}
              </Link>
            ))}
            <div className="border-t border-slate-100 my-2" />
            <div className="flex flex-col gap-2.5 pt-1">
              <a
                href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
                className="btn btn-outline w-full justify-center text-sm py-2.5 font-bold"
              >
                <Phone size={15} /> {BUSINESS.primaryPhone}
              </a>
              <Link href="/book-service" className="btn btn-primary w-full justify-center text-sm py-2.5 font-bold">
                Book Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
