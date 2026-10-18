import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, Award, Users, MapPin, Heart, Shield, Zap, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Airr Cold Services – AC & RO Experts in Mumbai",
  description:
    "Learn about Airr Cold Services – founded by Iqbal Sanghe, based in Andheri West, Mumbai. Trusted AC repair, installation, maintenance and RO water purifier service company serving 5,000+ customers for 10+ years.",
};

const values = [
  { icon: Shield, title: "Integrity", desc: "We are honest about pricing, parts, and service scope. No hidden charges, ever." },
  { icon: Zap, title: "Punctuality", desc: "We respect your time. Our technicians arrive on schedule." },
  { icon: Award, title: "Quality", desc: "We use genuine parts and follow manufacturer-approved service procedures." },
  { icon: Heart, title: "Customer First", desc: "Every decision is made with your satisfaction in mind." },
];

const team = [
  {
    name: "Iqbal Sanghe",
    role: "Founder & Lead Technician",
    desc: "With over 10 years of experience in HVAC and water purification systems, Iqbal founded Airr Cold Services with a mission to bring honest, quality service to Mumbai homes and businesses.",
    img: "/images/team-1.jpg",
  },
  {
    name: "Ramesh Patil",
    role: "Senior AC Technician",
    desc: "Ramesh specialises in split and commercial AC installations and has extensive experience servicing all major Indian and international AC brands.",
    img: "/images/team-2.jpg",
  },
  {
    name: "Suresh Yadav",
    role: "RO & Appliance Technician",
    desc: "Suresh handles all water purifier service requests. From basic filter changes to complex RO membrane replacements, his expertise ensures pure water for your family.",
    img: "/images/team-3.jpg",
  },
];

const timeline = [
  { year: "2013", event: "Airr Cold Services founded by Iqbal Sanghe in Andheri West, Mumbai." },
  { year: "2015", event: "Expanded team and began serving commercial clients across Mumbai." },
  { year: "2018", event: "Added RO water purifier services to our portfolio." },
  { year: "2021", event: "Reached 3,000+ happy customers milestone." },
  { year: "2024", event: "Serving 5,000+ customers across Mumbai, Thane, and Navi Mumbai." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-16" aria-label="About hero">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="section-tag bg-blue-900/50 text-blue-300 border-blue-700/40 mb-6">
              <Star size={12} />
              About Airr Cold Services
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-800 leading-tight mb-6">
              Mumbai's Most Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AC & RO Service
              </span>{" "}
              Company
            </h1>
            <p className="text-blue-100/80 text-lg leading-relaxed">
              Founded by Iqbal Sanghe and based in Andheri West, Mumbai — we have been
              delivering honest, quality AC and water purifier services since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-py bg-[#F6F9FC]" aria-label="Company story">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag mb-6">
                <Award size={12} />
                Our Story
              </div>
              <h2 className="section-title">
                From Andheri West to <span>All of Mumbai</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Airr Cold Services began in 2013 with a simple promise: to provide
                honest, professional AC repair and maintenance services to Mumbai households
                at fair prices. Starting from our base in Andheri West, we grew
                steadily through word of mouth and a relentless focus on customer satisfaction.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Over the years, we expanded our team, added RO water purifier services,
                and built a loyal customer base of over 5,000 families and businesses
                across Mumbai, Thane, and Navi Mumbai.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Today, Airr Cold Services is a name synonymous with reliability,
                transparency, and quality workmanship in the cooling and water purification
                service industry in Maharashtra.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5,000+", label: "Happy Customers" },
                  { value: "10+", label: "Years Experience" },
                  { value: "12+", label: "AC Brands Serviced" },
                  { value: "Mumbai", label: "& Surrounding Areas" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="text-2xl font-800 text-blue-600">{value}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[460px]">
                <Image
                  src="/images/about.jpg"
                  alt="Airr Cold Services team and workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-white" aria-label="Mission and values">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">
              <Heart size={12} />
              Our Mission
            </div>
            <h2 className="section-title">
              What We Stand <span>For</span>
            </h2>
            <p className="section-desc mx-auto text-center">
              Our mission is to make professional AC and water purifier service accessible,
              affordable, and trustworthy for every Mumbai household and business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#F6F9FC] rounded-2xl p-6 border border-blue-50 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="font-700 text-lg mb-2" style={{ color: "var(--color-navy)" }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-[#F6F9FC]" aria-label="Company journey">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">
              <Zap size={12} />
              Our Journey
            </div>
            <h2 className="section-title">
              10+ Years of <span>Trusted Service</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />
              <div className="flex flex-col gap-8">
                {timeline.map(({ year, event }) => (
                  <div key={year} className="flex items-start gap-5 pl-2">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-700 shadow-md">
                        {year.slice(2)}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-blue-100 flex-1 shadow-sm">
                      <p className="font-600 text-blue-600 text-xs mb-1">{year}</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-white" aria-label="Our team">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-tag mx-auto">
              <Users size={12} />
              Our Team
            </div>
            <h2 className="section-title">
              The People Behind <span>Your Service</span>
            </h2>
            <p className="section-desc mx-auto text-center text-sm">
              Note: Team photos shown are representative. Authentic portraits will be
              added when supplied by the business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ name, role, desc, img }) => (
              <div key={name} className="bg-[#F6F9FC] rounded-2xl overflow-hidden border border-blue-50 hover:shadow-lg transition-shadow">
                <div className="relative h-52">
                  <Image src={img} alt={`${name} – ${role} at Airr Cold Services`} fill className="object-cover object-top" />
                </div>
                <div className="p-5">
                  <h3 className="font-700 text-lg mb-0.5" style={{ color: "var(--color-navy)" }}>{name}</h3>
                  <p className="text-blue-600 text-sm font-600 mb-3">{role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-py bg-[#F6F9FC]" aria-label="Service coverage area">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag">
                <MapPin size={12} />
                Service Coverage
              </div>
              <h2 className="section-title">
                Serving <span>Mumbai & Maharashtra</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                From our base at A-22, Shah Industrial Area, Andheri West, we serve
                residential and commercial clients across Mumbai, Thane, Navi Mumbai,
                and surrounding regions of Maharashtra.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {BUSINESS.serviceAreas.map((area) => (
                  <span key={area} className="flex items-center gap-1 text-sm text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                    <Check size={12} /> {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-blue-100 p-5 shadow-sm">
              <p className="font-700 text-sm mb-3" style={{ color: "var(--color-navy)" }}>Our Office Location</p>
              <div className="rounded-xl overflow-hidden h-64 bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="font-600">A-22, Shah Industrial Area</p>
                  <p className="text-sm">Andheri West, Mumbai 400053</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-600">
                <p className="font-600" style={{ color: "var(--color-navy)" }}>Address:</p>
                <p>{BUSINESS.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-white" aria-label="Book a service CTA">
        <div className="container-site">
          <div
            className="rounded-3xl p-10 md:p-14 text-center"
            style={{ background: "linear-gradient(135deg, #071B2D 0%, #0a2e52 50%, #0878F9 100%)" }}
          >
            <h2 className="text-white text-3xl md:text-4xl font-800 mb-4">
              Ready to Experience the Airr Cold Difference?
            </h2>
            <p className="text-blue-200/80 mb-8 max-w-lg mx-auto">
              Book a service online or call us directly. Our team is ready to serve you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-service" className="btn btn-white btn-lg">
                Book Service <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-lg" style={{ background: "rgba(255,255,255,0.15)", color: "white", borderColor: "rgba(255,255,255,0.30)" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
