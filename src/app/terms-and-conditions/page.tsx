import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions – Airr Cold Services",
  description: "Terms and conditions of service for AC and RO water purifier repairs, installations, and maintenance.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] py-16">
      <div className="container-site max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-extrabold text-[#071B2D] mb-4">Terms & Conditions</h1>
        <p className="text-sm text-slate-400 mb-8">Effective Date: October 2025</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">1. Service Scope & Booking</h2>
            <p>
              Airr Cold Services provides residential and commercial Air Conditioner (AC) and RO Water Purifier
              inspection, repair, servicing, installation, and AMC services across Mumbai and surrounding MMR locations.
              Bookings scheduled through our portal or phone are subject to technician availability and confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">2. Visiting Charges & Inspection</h2>
            <p>
              A nominal doorstep inspection / visiting charge (₹199 or as communicated) is applicable for technician
              dispatch and complete fault diagnosis. If the customer proceeds with the full repair job recommended
              by our technician, this inspection fee may be adjusted against the total labor charges.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">3. Spare Parts & Warranty</h2>
            <p>
              All replacement spare parts (e.g., capacitors, fan motors, PCB boards, RO membranes, sediment/carbon filters)
              supplied by Airr Cold Services are 100% genuine and carry a 30 to 90-day service warranty depending on the component.
              Warranty does not cover pre-existing damage, external electrical voltage surges, physical tampering, or water damage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">4. Annual Maintenance Contracts (AMC)</h2>
            <p>
              AMC plans cover scheduled routine maintenance and preventive cleaning visits throughout the 1-year contract period.
              Major parts replacement coverage depends on whether Comprehensive or Non-Comprehensive AMC was selected.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
