import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy – Airr Cold Services",
  description: "Clear and transparent cancellation and refund terms for AC and RO repair appointments and token fees.",
};

export default function CancellationRefundPage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] py-16">
      <div className="container-site max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-extrabold text-[#071B2D] mb-4">Cancellation & Refund Policy</h1>
        <p className="text-sm text-slate-400 mb-8">Effective Date: October 2025</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">1. Booking Cancellations & Rescheduling</h2>
            <p>
              We understand plans can change. You may reschedule or cancel your service appointment free of charge
              up to <strong>2 hours prior</strong> to the scheduled time slot by calling our helpline at +91 97685 91807.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">2. Token / Inspection Fee Refunds</h2>
            <p>
              If you cancel your appointment at least 2 hours before the technician leaves for your location,
              any pre-paid booking fee (₹199) will be refunded to your original UPI account within 24 to 48 hours.
            </p>
            <p className="mt-2">
              If cancellation occurs after the technician has arrived at your doorstep, the visiting fee cannot be refunded
              as it compensates for transit and technician time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">3. Service Satisfaction Guarantee</h2>
            <p>
              If a repair fails within the warranty period (30 days on labor / repair), our technician will re-inspect
              and resolve the problem at zero additional labor cost.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
