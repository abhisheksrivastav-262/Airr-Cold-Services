"use client";

import { useState, useRef } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const serviceCategories = ["AC Services", "RO Services", "AMC Plans", "General Enquiry"];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "", serviceCategory: "", serviceType: "", pinCode: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Mobile number is required.";
    else if (!/^\+?[\d\s-]{10,14}$/.test(form.phone)) e.phone = "Enter a valid mobile number.";
    if (!form.message.trim()) e.message = "Message is required.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ ok: true, message: "Thank you! We'll be in touch shortly." });
        setForm({ fullName: "", phone: "", email: "", serviceCategory: "", serviceType: "", pinCode: "", message: "" });
      } else {
        setResult({ ok: false, message: data.error || "Submission failed. Please try again." });
      }
    } catch {
      setResult({ ok: false, message: "Network error. Please check your connection and try again." });
    } finally {
      setLoading(false);
    }
  };

  const set = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-primary pt-32 pb-16" aria-label="Contact page hero">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="section-tag bg-blue-900/50 text-blue-300 border-blue-700/40 mb-6">
              <Phone size={12} />
              Contact Us
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-800 mb-5">
              Get in Touch With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Airr Cold Services
              </span>
            </h1>
            <p className="text-blue-100/80 text-lg">
              Have a question or want to book a service? Reach us by phone,
              WhatsApp, email, or the contact form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py bg-[#F6F9FC]" aria-label="Contact information and form">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl font-800 mb-6" style={{ color: "var(--color-navy)" }}>
                Contact Information
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                <div className="bg-white rounded-2xl p-5 border border-blue-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-700 text-sm mb-1" style={{ color: "var(--color-navy)" }}>Office Address</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{BUSINESS.address}</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-blue-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-700 text-sm mb-2" style={{ color: "var(--color-navy)" }}>Phone Numbers</p>
                    {BUSINESS.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-blue-600 hover:text-blue-800 font-600 text-sm mb-0.5 transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-blue-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-700 text-sm mb-2" style={{ color: "var(--color-navy)" }}>Email Addresses</p>
                    {BUSINESS.emails.map((e) => (
                      <a key={e} href={`mailto:${e}`} className="block text-blue-600 hover:text-blue-800 text-sm mb-0.5 transition-colors">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-blue-100 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-700 text-sm mb-2" style={{ color: "var(--color-navy)" }}>Business Hours</p>
                    <p className="text-slate-600 text-sm">{BUSINESS.hours.weekdays}</p>
                    <p className="text-slate-600 text-sm">{BUSINESS.hours.weekend}</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to enquire about your services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp – {BUSINESS.primaryPhone}
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-blue-100 h-52 bg-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400 p-4">
                  <MapPin size={28} className="mx-auto mb-2" />
                  <p className="font-600 text-sm">A-22, Shah Industrial Area</p>
                  <p className="text-xs">Andheri West, Mumbai 400053</p>
                  <a
                    href="https://maps.google.com/?q=Andheri+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs mt-1 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white rounded-2xl border border-blue-100 p-7 shadow-sm">
                <h2 className="text-2xl font-800 mb-2" style={{ color: "var(--color-navy)" }}>
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>

                {result && (
                  <div className={`flex items-start gap-3 p-4 rounded-xl mb-6 text-sm ${result.ok ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}>
                    {result.ok ? <CheckCircle size={18} className="flex-shrink-0 mt-0.5" /> : <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />}
                    {result.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-field">
                      <label className="form-label required" htmlFor="fullName">Full Name</label>
                      <input id="fullName" type="text" className={`form-input ${errors.fullName ? "error" : ""}`}
                        value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Your full name" />
                      {errors.fullName && <span className="form-error"><AlertCircle size={12} />{errors.fullName}</span>}
                    </div>
                    <div className="form-field">
                      <label className="form-label required" htmlFor="phone">Mobile Number</label>
                      <input id="phone" type="tel" className={`form-input ${errors.phone ? "error" : ""}`}
                        value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98765 43210" />
                      {errors.phone && <span className="form-error"><AlertCircle size={12} />{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input id="email" type="email" className={`form-input ${errors.email ? "error" : ""}`}
                      value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="optional@email.com" />
                    {errors.email && <span className="form-error"><AlertCircle size={12} />{errors.email}</span>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-field">
                      <label className="form-label" htmlFor="serviceCategory">Service Category</label>
                      <select id="serviceCategory" className="form-input" value={form.serviceCategory} onChange={(e) => set("serviceCategory", e.target.value)}>
                        <option value="">Select category</option>
                        {serviceCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="pinCode">PIN Code</label>
                      <input id="pinCode" type="text" className="form-input"
                        value={form.pinCode} onChange={(e) => set("pinCode", e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="400053" maxLength={6} />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label required" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      className={`form-input resize-none ${errors.message ? "error" : ""}`}
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Describe your requirement or question..."
                    />
                    {errors.message && <span className="form-error"><AlertCircle size={12} />{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center" disabled={loading}>
                    {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
