import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Airr Cold Services",
  description: "Privacy Policy and data protection terms for Airr Cold Services customers and website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] py-16">
      <div className="container-site max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-extrabold text-[#071B2D] mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-8">Last Updated: October 2025</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">1. Overview</h2>
            <p>
              Airr Cold Services (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), founded by Iqbal Sanghe and located at A-22,
              Shop No. 2, New Hiralal Chawl, Gilbert Hill Road, Near Bhavans College, Andheri West,
              Mumbai - 400058, is committed to safeguarding the privacy and confidentiality of our
              customers&apos; personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">2. Information We Collect</h2>
            <p>
              When you book a service, request an AMC plan, or reach out to us via our contact forms,
              we collect personal details including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full Name and Contact Phone Number</li>
              <li>Service Address and Mumbai Postal PIN Code</li>
              <li>Appliance Specifications (AC/RO brand, model type, issue description)</li>
              <li>UPI / Payment Transaction Reference Numbers (for verification of booking tokens)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">3. Payment & Banking Privacy</h2>
            <p>
              We <strong>NEVER</strong> store, ask for, or process your credit/debit card numbers, CVVs,
              UPI PINs, or bank passwords. All payments made through UPI QR codes are executed within your
              own secure banking apps. We only record your UTR / transaction ID strictly for matching and
              confirming token deposits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">4. How We Use Your Information</h2>
            <p>
              Your data is solely used to schedule technician visits, deliver repair/maintenance services,
              provide service invoices and warranty records, and update you on AMC renewals. We do not sell,
              rent, or share your contact information with any third-party marketing companies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#071B2D] mb-2">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or wish to delete your records from our system, please contact Iqbal Sanghe directly at:
              <br />
              <strong>Phone:</strong> +91 97685 91807 / +91 93245 18765
              <br />
              <strong>Address:</strong> Gilbert Hill Rd, Near Bhavans College, Andheri West, Mumbai, MH 400058
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
