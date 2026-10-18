import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Wrench, Thermometer, Droplets, ShieldCheck, Star, ChevronRight,
  Phone, MessageCircle, Clock, MapPin, Users, Award, Zap, Check,
  Wind, Settings, ArrowRight, HelpCircle, CheckCircle
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import QuickBookWidget from "@/components/home/QuickBookWidget";

export const metadata: Metadata = {
  title: "AC Repair, Installation & RO Water Purifier Services in Mumbai",
  description:
    "Airr Cold Services offers expert AC repair, installation, maintenance, gas refilling, AMC plans, and RO water purifier services across Mumbai. 5,000+ happy customers. 10+ years experience. Call +91 84335 50882.",
};

const acServices = [
  { icon: Wrench, title: "AC Repair", desc: "Fast, professional repair for all AC brands and models.", href: "/ac-services" },
  { icon: Settings, title: "AC Installation", desc: "Expert split, window, and cassette AC installation.", href: "/ac-services" },
  { icon: ShieldCheck, title: "AC Maintenance", desc: "Preventive servicing to maximize AC lifespan.", href: "/ac-services" },
  { icon: Wind, title: "Gas Refilling", desc: "R22, R32, and R410A refrigerant refilling by certified technicians.", href: "/ac-services" },
  { icon: Award, title: "AMC Plans", desc: "Annual maintenance contracts for worry-free cooling.", href: "/amc-plans" },
  { icon: Zap, title: "Emergency Repair", desc: "Priority service for urgent AC breakdowns.", href: "/ac-services" },
];

const roServices = [
  { icon: Droplets, title: "RO Installation", desc: "Professional installation of RO water purifiers at home or office.", href: "/ro-services" },
  { icon: Wrench, title: "RO Repair", desc: "Troubleshooting and repair for all RO purifier brands.", href: "/ro-services" },
  { icon: Settings, title: "RO Servicing", desc: "Deep cleaning and comprehensive RO system servicing.", href: "/ro-services" },
  { icon: ShieldCheck, title: "Filter Replacement", desc: "Sediment, carbon, and RO membrane filter replacement.", href: "/ro-services" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Transparent Pricing", desc: "No hidden charges. Clear estimates before work begins." },
  { icon: Award, title: "Genuine Spare Parts", desc: "We use only certified, original spare parts for all repairs." },
  { icon: Users, title: "Experienced Technicians", desc: "10+ years of skilled technicians serving Mumbai." },
  { icon: Clock, title: "Convenient Booking", desc: "Easy online booking with same-day appointment slots." },
  { icon: MapPin, title: "Wide Service Area", desc: "Covering Mumbai, Thane, Navi Mumbai, and beyond." },
  { icon: Star, title: "Customer-First Support", desc: "We stay until the job is done right and you're satisfied." },
];

const faqs = [
  {
    q: "What AC brands do you service?",
    a: "We service all major brands including Daikin, Voltas, LG, Samsung, Hitachi, Blue Star, Carrier, Whirlpool, Lloyd, O General, Mitsubishi, and Godrej."
  },
  {
    q: "What is the ₹199 booking fee?",
    a: "A nominal ₹199 booking fee is collected to confirm your appointment and is adjusted against the final service bill. This helps us allocate a technician for your specific time slot."
  },
  {
    q: "How quickly can a technician arrive?",
    a: "We offer flexible appointment slots Monday to Saturday, 9 AM to 7 PM. Emergency service is available on Sundays. Availability depends on your location and slot selection."
  },
  {
    q: "Do you provide service for both homes and offices?",
    a: "Yes, we serve residential and commercial clients. We handle everything from single-unit home AC servicing to multi-unit commercial HVAC installations."
  },
  {
    q: "Do you service RO water purifiers?",
    a: "Yes. We provide RO installation, repair, servicing, and filter replacement for all leading purifier brands across Mumbai."
  },
  {
    q: "Which areas do you cover?",
    a: "We cover Andheri, Bandra, Juhu, Goregaon, Malad, Kandivali, Borivali, Thane, Navi Mumbai, and most of Mumbai and the surrounding region."
  }
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-section min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-80px)] mt-[72px] sm:mt-[80px] flex items-center relative overflow-hidden" aria-label="Hero section">
        <div className="container-site w-full relative z-10 pt-8 sm:pt-12 lg:pt-16 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Copy & Actions */}
            <div className="lg:col-span-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-cyan-300 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
                <Star size={13} className="text-cyan-400 fill-cyan-400 flex-shrink-0" />
                <span>Mumbai&apos;s #1 AC & RO Water Purifier Specialists</span>
              </div>

              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.2] sm:leading-[1.15] mb-4">
                Reliable Cooling.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Pure Water.
                </span>{" "}
                Delivered at Your Doorstep.
              </h1>

              <p className="text-blue-100/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                Certified split & window AC repair, installation, gas refilling, and RO water purifier servicing across Mumbai, Thane & MMR. Trusted by <strong className="text-white font-bold">5,000+ satisfied customers</strong>.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 mb-7">
                {[
                  { icon: CheckCircle, label: "5,000+ Happy Customers" },
                  { icon: Award, label: "10+ Years Experience" },
                  { icon: ShieldCheck, label: "Original OEM Parts" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-blue-100 text-xs font-semibold border border-white/10">
                    <Icon size={14} className="text-cyan-400 flex-shrink-0" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-service" className="btn btn-primary btn-lg justify-center shadow-lg shadow-blue-500/30 font-bold">
                  Book a Service (₹199 Token) <ArrowRight size={18} />
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hi Airr Cold Services! I need AC/RO service.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg justify-center shadow-lg font-bold"
                >
                  <MessageCircle size={18} />
                  WhatsApp Direct
                </a>
              </div>

              {/* Direct Calling strip */}
              <div className="flex flex-wrap items-center gap-3 mt-7 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <Phone size={15} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200/80 font-medium leading-none">Emergency Helpline</p>
                    <a
                      href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
                      className="font-extrabold text-sm sm:text-base text-white hover:text-cyan-300 transition-colors"
                    >
                      {BUSINESS.primaryPhone}
                    </a>
                  </div>
                </div>
                <span className="text-white/20">|</span>
                <span className="text-xs text-blue-200 font-medium">Doorstep arrival in 60-90 minutes</span>
              </div>
            </div>

            {/* Right: Quick Booking Form + Visual */}
            <div className="lg:col-span-5 animate-fade-in-up animate-delay-200">
              <div className="relative">
                {/* Hero preview banner */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 border border-white/10">
                  <div className="relative h-[180px] sm:h-[220px]">
                    <Image
                      src="/images/carousel-1.jpg"
                      alt="Airr Cold Services technician servicing AC in Mumbai"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B2D]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-bold flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                        <CheckCircle size={13} className="text-cyan-400" /> 100% Quality Guaranteed
                      </span>
                      <span className="bg-blue-600/90 px-2 py-0.5 rounded font-semibold text-[11px]">
                        Same-Day Slots
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick book widget */}
                <QuickBookWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" style={{ display: "block" }}>
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="rgb(246,249,252)"
            />
          </svg>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F6F9FC] py-12" aria-label="Company statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5,000+", label: "Happy Customers", icon: Users },
              { value: "10+", label: "Years Experience", icon: Award },
              { value: "12+", label: "AC Brands Serviced", icon: Wind },
              { value: "Mumbai", label: "& Surrounding Areas", icon: MapPin },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-blue-50">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <p className="text-2xl font-800 text-navy-900" style={{ color: "var(--color-navy)" }}>{value}</p>
                <p className="text-sm text-slate-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AC SERVICES ──────────────────────────────────────────────────── */}
      <section className="section-py bg-white" id="ac-services" aria-label="AC services">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">
              <Wind size={12} />
              AC Services
            </div>
            <h2 className="section-title">
              Complete <span>AC Service Solutions</span>
            </h2>
            <p className="section-desc mx-auto text-center">
              From emergency repairs to annual maintenance plans — we have every air conditioning need covered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {acServices.map(({ icon: Icon, title, desc, href }) => (
              <Link key={title} href={href} className="service-card group">
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-700 text-navy-900 text-lg mb-1" style={{ color: "var(--color-navy)" }}>{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-600 mt-auto">
                  Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/ac-services" className="btn btn-primary">
              View All AC Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURE BANNER ───────────────────────────────────────────────── */}
      <section className="section-py bg-[#F6F9FC]" aria-label="About Airr Cold Services">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-[420px]">
                  <Image
                    src="/images/about.jpg"
                    alt="Airr Cold Services professional team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
                </div>
              </div>
              {/* Feature images row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {["/images/feature-1.jpg", "/images/feature-2.jpg", "/images/feature-3.jpg"].map((src, i) => (
                  <div key={i} className="relative h-24 rounded-xl overflow-hidden shadow-sm">
                    <Image src={src} alt={`AC service feature ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-tag">
                <Star size={12} />
                About Us
              </div>
              <h2 className="section-title">
                Mumbai's Most Trusted <span>Cooling Experts</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded by <strong>Iqbal Sanghe</strong> and based in Andheri West,
                Airr Cold Services has been serving residential and commercial clients
                across Mumbai and Maharashtra for over 10 years.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We believe in transparent pricing, genuine spare parts, and putting the customer first.
                Our technicians are trained and experienced across all major AC and water purifier brands.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Transparent Pricing",
                  "Genuine Spare Parts",
                  "Experienced Technicians",
                  "Punctual Service",
                  "Customer-First Approach",
                  "Wide Service Area",
                ].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-slate-700 text-sm">
                    <Check size={15} className="text-blue-600 flex-shrink-0" />
                    {v}
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RO SERVICES ──────────────────────────────────────────────────── */}
      <section className="section-py bg-white" id="ro-services" aria-label="RO water purifier services">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag" style={{ color: "var(--color-cyan)", background: "rgba(39,196,232,0.1)", borderColor: "rgba(39,196,232,0.3)" }}>
                <Droplets size={12} />
                RO Water Purifier
              </div>
              <h2 className="section-title">
                Pure Water Starts With <span>Professional Care</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Reliable water purifier installation, repair, servicing, and filter
                replacement for homes and businesses across Mumbai.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {roServices.map(({ icon: Icon, title, desc, href }) => (
                  <Link key={title} href={href} className="flex gap-3 p-4 rounded-xl border border-blue-100 hover:border-cyan-300 hover:shadow-md transition-all group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{ background: "rgba(39,196,232,0.1)", color: "var(--color-cyan)" }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-700 text-sm" style={{ color: "var(--color-navy)" }}>{title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/ro-services" className="btn btn-primary">
                Explore RO Services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[460px]">
                <Image
                  src="/images/carousel-2.jpg"
                  alt="RO water purifier service and installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4 text-white">
                    <p className="font-700 text-lg">RO Water Purifier Services</p>
                    <p className="text-white/80 text-sm mt-1">Installation, repair, servicing & filter replacement for all brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="section-py gradient-primary" aria-label="Why choose Airr Cold Services">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag bg-blue-900/50 text-blue-300 border-blue-700/40 mx-auto">
              <ShieldCheck size={12} />
              Why Choose Us
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-800 mb-4">
              The Airr Cold Services Difference
            </h2>
            <p className="text-blue-200/80 max-w-xl mx-auto">
              We don't just fix AC units. We build trust through quality, transparency,
              and genuine customer care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-blue-300" />
                </div>
                <h3 className="text-white font-700 text-lg mb-2">{title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AC BRANDS ────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#F6F9FC]" aria-label="AC brands we service">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="section-tag mx-auto">
              <Wind size={12} />
              AC Brands
            </div>
            <h2 className="section-title">
              We Service <span>All Major Brands</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS.acBrands.map((brand) => (
              <div
                key={brand}
                className="bg-white border border-blue-100 rounded-xl px-5 py-3 text-sm font-600 text-slate-700 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ────────────────────────────────────────────────── */}
      <section className="section-py bg-white" aria-label="Service areas">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="section-tag mx-auto">
              <MapPin size={12} />
              Service Areas
            </div>
            <h2 className="section-title">
              Serving <span>Mumbai & Beyond</span>
            </h2>
            <p className="section-desc mx-auto text-center">
              We cover a wide range of locations across Mumbai, Thane, and Navi Mumbai.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {BUSINESS.serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-4 py-2 text-sm font-500"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-py bg-[#F6F9FC]" aria-label="Frequently asked questions">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-tag mx-auto">
                <HelpCircle size={12} />
                FAQs
              </div>
              <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="bg-white border border-blue-100 rounded-xl group"
                >
                  <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer font-600 text-navy-900 select-none" style={{ color: "var(--color-navy)" }}>
                    <span className="text-sm leading-relaxed">{q}</span>
                    <ChevronRight size={18} className="flex-shrink-0 text-blue-400 group-open:rotate-90 transition-transform mt-0.5" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-blue-50 pt-4">
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-py bg-white" aria-label="Call to action">
        <div className="container-site">
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #071B2D 0%, #0a2e52 50%, #0878F9 100%)" }}
          >
            <div className="relative z-10">
              <div className="section-tag bg-blue-900/50 text-blue-300 border-blue-700/40 mx-auto mb-6">
                <Zap size={12} />
                Get Started Today
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-800 mb-4">
                Ready for Professional AC or RO Service?
              </h2>
              <p className="text-blue-200/80 mb-8 max-w-lg mx-auto">
                Book an appointment online or call us directly. Our team is ready
                to serve you across Mumbai and surrounding areas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book-service" className="btn btn-white btn-lg">
                  Book Service Online <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
                  className="btn btn-lg"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.30)" }}
                >
                  <Phone size={18} />
                  {BUSINESS.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
