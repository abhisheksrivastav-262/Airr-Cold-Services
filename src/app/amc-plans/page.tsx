import type { Metadata } from "next";
import Link from "next/link";
import { Award, Check, Info, Wind, Droplets, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "AC & RO Annual Maintenance Plans (AMC) – Mumbai",
  description:
    "Annual Maintenance Contract (AMC) plans for AC and RO water purifiers in Mumbai. Scheduled servicing, priority booking, and peace of mind. Contact Airr Cold Services for a quote.",
};

const acPlans = [
  {
    name: "AC Basic AMC",
    category: "AC",
    visits: "2 Visits / Year",
    desc: "Ideal for households with a single or double AC unit requiring routine maintenance.",
    inclusions: [
      "Filter cleaning (both visits)",
      "Coil cleaning",
      "Drainage pipe check",
      "Refrigerant level inspection",
      "Electrical connection check",
      "Performance testing",
    ],
    exclusions: [
      "Gas refilling (charged separately)",
      "Spare parts and components",
      "Emergency or breakdown calls",
    ],
    cta: "Request AC AMC Quote",
    featured: false,
  },
  {
    name: "AC Comprehensive AMC",
    category: "AC",
    visits: "4 Visits / Year",
    desc: "Best for families or offices with multiple AC units wanting priority access and quarterly servicing.",
    inclusions: [
      "Quarterly scheduled service visits",
      "Filter and coil deep cleaning",
      "Drainage and condensate check",
      "Refrigerant level inspection",
      "Gas top-up (one time if needed)",
      "Priority booking on request",
      "Electrical and PCB inspection",
      "Performance report each visit",
    ],
    exclusions: [
      "Spare parts replacement (charged at actuals)",
      "Major component overhaul",
    ],
    cta: "Request Comprehensive AMC Quote",
    featured: true,
  },
];

const roPlans = [
  {
    name: "RO Basic AMC",
    category: "RO",
    visits: "1 Visit / Year",
    desc: "Annual maintenance for your RO water purifier with filter and membrane inspection.",
    inclusions: [
      "Filter inspection (sediment and carbon)",
      "Membrane flush test",
      "Tank cleaning",
      "Leak and connection check",
      "Flow rate verification",
    ],
    exclusions: [
      "Filter replacement (at actuals if needed)",
      "Membrane replacement",
      "Emergency repair calls",
    ],
    cta: "Request RO AMC Quote",
    featured: false,
  },
  {
    name: "RO Comprehensive AMC",
    category: "RO",
    visits: "2 Visits / Year",
    desc: "Complete bi-annual care with filter replacement coverage and priority service.",
    inclusions: [
      "2 scheduled service visits",
      "Sediment filter replacement (1 set)",
      "Carbon filter replacement (1 set)",
      "Membrane inspection and flush",
      "Tank deep clean and sanitisation",
      "Priority service booking",
      "Leak and connection checks",
    ],
    exclusions: [
      "RO membrane replacement (at actuals if needed)",
      "Major component or pump replacement",
    ],
    cta: "Request Comprehensive RO AMC Quote",
    featured: true,
  },
];

export default function AMCPlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-16" aria-label="AMC plans hero">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="section-tag bg-blue-900/50 text-blue-300 border-blue-700/40 mb-6">
              <Award size={12} />
              Annual Maintenance Plans
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-800 leading-tight mb-6">
              Worry-Free Cooling &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Pure Water
              </span>
              , All Year Long
            </h1>
            <p className="text-blue-100/80 text-lg leading-relaxed">
              Annual Maintenance Contracts for AC units and RO water purifiers —
              scheduled service visits, priority booking, and significant savings
              compared to individual service calls.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-4" aria-label="Pricing notice">
        <div className="container-site flex items-start gap-3">
          <Info size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm">
            <strong>Pricing Note:</strong> AMC plan prices are tailored based on the number of units,
            AC type, location, and specific inclusions required. Contact us for a personalised quote.
            Pricing will be confirmed before any service commitment.
          </p>
        </div>
      </section>

      {/* AC AMC Plans */}
      <section className="section-py bg-[#F6F9FC]" aria-label="AC AMC plans">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">
              <Wind size={12} />
              AC Plans
            </div>
            <h2 className="section-title">AC Annual Maintenance <span>Plans</span></h2>
            <p className="section-desc mx-auto text-center">
              Keep your AC running efficiently year-round with scheduled professional servicing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {acPlans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                aria-label={`${plan.name} plan`}
              >
                {plan.featured && (
                  <div className="inline-flex items-center gap-1.5 bg-blue-500/30 text-blue-300 text-xs font-600 px-3 py-1 rounded-full mb-4">
                    <Award size={12} />
                    Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-800 mb-1 ${plan.featured ? "text-white" : ""}`} style={!plan.featured ? { color: "var(--color-navy)" } : {}}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-1 ${plan.featured ? "text-blue-300" : "text-blue-600"} font-600`}>{plan.visits}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.featured ? "text-blue-200/70" : "text-slate-500"}`}>{plan.desc}</p>

                <div className="text-left mb-6">
                  <p className={`text-xs font-700 uppercase tracking-wider mb-3 ${plan.featured ? "text-blue-300" : "text-slate-400"}`}>Inclusions</p>
                  <div className="flex flex-col gap-2">
                    {plan.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check size={14} className={`flex-shrink-0 mt-0.5 ${plan.featured ? "text-cyan-400" : "text-blue-500"}`} />
                        <span className={plan.featured ? "text-blue-100" : "text-slate-600"}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-left mb-8">
                  <p className={`text-xs font-700 uppercase tracking-wider mb-3 ${plan.featured ? "text-blue-300" : "text-slate-400"}`}>Exclusions</p>
                  <div className="flex flex-col gap-1.5">
                    {plan.exclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs">
                        <span className={`${plan.featured ? "text-blue-400" : "text-slate-400"}`}>✕</span>
                        <span className={plan.featured ? "text-blue-300/70" : "text-slate-400"}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917666697586?text=${encodeURIComponent(`Hi! I'd like to enquire about the ${plan.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full justify-center ${plan.featured ? "btn-white" : "btn-primary"}`}
                >
                  {plan.cta} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RO AMC Plans */}
      <section className="section-py bg-white" aria-label="RO AMC plans">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto" style={{ background: "rgba(39,196,232,0.1)", color: "var(--color-cyan)", borderColor: "rgba(39,196,232,0.3)" }}>
              <Droplets size={12} />
              RO Plans
            </div>
            <h2 className="section-title">RO Annual Maintenance <span>Plans</span></h2>
            <p className="section-desc mx-auto text-center">
              Ensure your family always has access to clean, purified water with regular professional RO servicing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {roPlans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                aria-label={`${plan.name} plan`}
              >
                {plan.featured && (
                  <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-600 px-3 py-1 rounded-full mb-4">
                    <Award size={12} />
                    Best Value
                  </div>
                )}
                <h3 className={`text-xl font-800 mb-1 ${plan.featured ? "text-white" : ""}`} style={!plan.featured ? { color: "var(--color-navy)" } : {}}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-1 font-600`} style={{ color: plan.featured ? "#27C4E8" : "var(--color-cyan)" }}>{plan.visits}</p>
                <p className={`text-sm leading-relaxed mb-6 ${plan.featured ? "text-blue-200/70" : "text-slate-500"}`}>{plan.desc}</p>

                <div className="text-left mb-6">
                  <p className={`text-xs font-700 uppercase tracking-wider mb-3 ${plan.featured ? "text-blue-300" : "text-slate-400"}`}>Inclusions</p>
                  <div className="flex flex-col gap-2">
                    {plan.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <Check size={14} className={`flex-shrink-0 mt-0.5`} style={{ color: plan.featured ? "#27C4E8" : "var(--color-cyan)" }} />
                        <span className={plan.featured ? "text-blue-100" : "text-slate-600"}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-left mb-8">
                  <p className={`text-xs font-700 uppercase tracking-wider mb-3 ${plan.featured ? "text-blue-300" : "text-slate-400"}`}>Exclusions</p>
                  <div className="flex flex-col gap-1.5">
                    {plan.exclusions.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs">
                        <span className={`${plan.featured ? "text-blue-400" : "text-slate-400"}`}>✕</span>
                        <span className={plan.featured ? "text-blue-300/70" : "text-slate-400"}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917666697586?text=${encodeURIComponent(`Hi! I'd like to enquire about the ${plan.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full justify-center ${plan.featured ? "text-white border-white/30" : "btn-primary"}`}
                  style={plan.featured ? { background: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.30)", color: "white" } : {}}
                >
                  {plan.cta} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-[#F6F9FC]" aria-label="AMC enquiry CTA">
        <div className="container-site">
          <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(135deg, #071B2D 0%, #0a2e52 50%, #0878F9 100%)" }}>
            <h2 className="text-white text-3xl font-800 mb-4">Get a Personalised AMC Quote</h2>
            <p className="text-blue-200/80 mb-8 max-w-lg mx-auto">
              Tell us about your AC units or RO purifier and we'll create a custom maintenance plan for your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/917666697586?text=${encodeURIComponent("Hi! I'd like to get an AMC quote for my AC/RO.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                WhatsApp for AMC Quote
              </a>
              <a href="tel:+917666697586" className="btn btn-lg" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.30)" }}>
                <Phone size={18} />
                Call +91 76666 97586
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
