"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Wind, Droplets, ChevronRight, CheckCircle, AlertCircle,
  Upload, Info, Copy, ArrowRight
} from "lucide-react";
import {
  AC_SERVICE_TYPES, RO_SERVICE_TYPES, AC_TYPES, TIME_SLOTS, BUSINESS
} from "@/lib/constants";

type Step = 1 | 2 | 3;

interface FormData {
  category: "AC" | "RO";
  fullName: string;
  phone: string;
  email: string;
  fullAddress: string;
  pinCode: string;
  serviceType: string;
  acType: string;
  acBrand: string;
  roBrand: string;
  roType: string;
  problemDesc: string;
  preferredDate: string;
  preferredSlot: string;
  transactionId: string;
}

const defaultForm: FormData = {
  category: "AC",
  fullName: "",
  phone: "",
  email: "",
  fullAddress: "",
  pinCode: "",
  serviceType: "",
  acType: "",
  acBrand: "",
  roBrand: "",
  roType: "",
  problemDesc: "",
  preferredDate: "",
  preferredSlot: "",
  transactionId: "",
};

const RO_BRANDS = ["Kent", "Aquaguard", "Pureit", "LG", "Havells", "AO Smith", "Livpure", "Other"];
const RO_TYPES = ["Wall-mounted", "Under-sink", "Table-top", "Commercial", "Other"];

function BookServiceForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({
    ...defaultForm,
    category: (searchParams.get("category") as "AC" | "RO") || "AC",
    serviceType: searchParams.get("serviceType") || "",
    pinCode: searchParams.get("pinCode") || "",
    phone: searchParams.get("phone") || "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ referenceNumber: string } | null>(null);
  const [submitError, setSubmitError] = useState("");
  const [copied, setCopied] = useState(false);

  const set = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
  };

  const validateStep1 = () => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.phone.trim()) e.phone = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.fullAddress.trim()) e.fullAddress = "Full address is required";
    if (!form.pinCode.trim()) e.pinCode = "PIN code is required";
    else if (!/^\d{6}$/.test(form.pinCode)) e.pinCode = "Enter a valid 6-digit PIN code";
    return e;
  };

  const validateStep2 = () => {
    const e: Partial<FormData> = {};
    if (!form.serviceType) e.serviceType = "Please select a service type";
    if (!form.problemDesc.trim()) e.problemDesc = "Please describe the issue";
    else if (form.problemDesc.trim().length < 10) e.problemDesc = "Please provide more detail";
    if (!form.preferredDate) e.preferredDate = "Please select a preferred date";
    return e;
  };

  const goToStep2 = () => {
    const e = validateStep1();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToStep3 = () => {
    const e = validateStep2();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!form.transactionId.trim()) {
      setErrors({ transactionId: "Please enter the UPI transaction / reference ID" } as Partial<FormData>);
      return;
    }
    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ referenceNumber: data.referenceNumber });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(data.error || "Submission failed. Please call us.");
      }
    } catch {
      setSubmitError("Network error. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const copyUPI = () => {
    navigator.clipboard.writeText(BUSINESS.upiId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  // ── SUCCESS ───────────────────────────────────────────────────────────────
  if (result) {
    return (
      <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center py-24">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-10 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-800 mb-2" style={{ color: "var(--color-navy)" }}>
            Booking Submitted!
          </h1>
          <p className="text-slate-500 mb-6">
            Thank you! Your booking has been received. We'll confirm your appointment shortly.
          </p>
          <div className="bg-blue-50 rounded-2xl p-5 mb-6 text-left">
            <p className="text-xs font-600 text-slate-400 uppercase tracking-wider mb-1">Booking Reference</p>
            <p className="text-2xl font-800 text-blue-600">{result.referenceNumber}</p>
            <p className="text-xs text-slate-500 mt-2">Save this reference number to track your booking status.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
            <div className="flex items-start gap-2">
              <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-800 text-sm font-600 mb-1">Payment Verification Pending</p>
                <p className="text-amber-700 text-xs leading-relaxed">
                  Your UPI transaction ID has been recorded. Payment remains in <strong>Pending Verification</strong> status
                  until confirmed by our team. Your appointment is not yet confirmed until payment is verified.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/" className="btn btn-primary w-full justify-center">
              Return to Home
            </Link>
            <a
              href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(`Hi! I just booked a service. My reference number is ${result.referenceNumber}. Please confirm my appointment.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full justify-center"
            >
              Confirm via WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero */}
      <section className="gradient-primary pt-28 pb-12">
        <div className="container-site">
          <h1 className="text-white text-3xl md:text-4xl font-800 mb-3">Book a Service</h1>
          <p className="text-blue-200/80">Professional AC and RO service across Mumbai.</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container-site max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {(["1", "2", "3"] as const).map((s, i) => {
              const n = parseInt(s) as Step;
              const active = step === n;
              const done = step > n;
              return (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-700 flex-shrink-0 transition-all ${done ? "bg-green-500 text-white" : active ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-400"}`}>
                    {done ? <CheckCircle size={16} /> : n}
                  </div>
                  <span className={`text-xs font-600 hidden sm:block ${active ? "text-blue-600" : done ? "text-green-600" : "text-slate-400"}`}>
                    {n === 1 ? "Your Details" : n === 2 ? "Service Info" : "Payment"}
                  </span>
                  {i < 2 && <div className={`flex-1 h-0.5 ${step > n ? "bg-green-400" : "bg-slate-200"}`} />}
                </div>
              );
            })}
          </div>

          {/* Category toggle */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-blue-100 p-6 mb-5">
              <p className="font-700 text-sm mb-4" style={{ color: "var(--color-navy)" }}>Select Service Category</p>
              <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
                {(["AC", "RO"] as const).map((cat) => (
                  <button key={cat} type="button" onClick={() => set("category", cat)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-600 transition-all ${form.category === cat ? "bg-white shadow text-blue-600" : "text-slate-500 hover:text-slate-700"}`}>
                    {cat === "AC" ? <Wind size={16} /> : <Droplets size={16} />}
                    {cat} Services
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 1: Customer Details ─────────────────────────────────── */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-blue-100 p-6">
              <h2 className="font-800 text-lg mb-5" style={{ color: "var(--color-navy)" }}>Your Details</h2>
              <div className="flex flex-col gap-4">
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
                      value={form.phone} onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="10-digit mobile" />
                    {errors.phone && <span className="form-error"><AlertCircle size={12} />{errors.phone}</span>}
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email Address (optional)</label>
                  <input id="email" type="email" className={`form-input ${errors.email ? "error" : ""}`}
                    value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="For booking confirmation (optional)" />
                  {errors.email && <span className="form-error"><AlertCircle size={12} />{errors.email}</span>}
                </div>
                <div className="form-field">
                  <label className="form-label required" htmlFor="fullAddress">Full Service Address</label>
                  <textarea id="fullAddress" rows={3} className={`form-input resize-none ${errors.fullAddress ? "error" : ""}`}
                    value={form.fullAddress} onChange={(e) => set("fullAddress", e.target.value)} placeholder="Flat/house number, building name, street, area..." />
                  {errors.fullAddress && <span className="form-error"><AlertCircle size={12} />{errors.fullAddress}</span>}
                </div>
                <div className="form-field w-40">
                  <label className="form-label required" htmlFor="pinCode">PIN Code</label>
                  <input id="pinCode" type="text" className={`form-input ${errors.pinCode ? "error" : ""}`}
                    value={form.pinCode} onChange={(e) => set("pinCode", e.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="400053" maxLength={6} />
                  {errors.pinCode && <span className="form-error"><AlertCircle size={12} />{errors.pinCode}</span>}
                </div>
                <button type="button" onClick={goToStep2} className="btn btn-primary mt-2">
                  Continue <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 2: Service Details ───────────────────────────────────── */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-blue-100 p-6">
              <h2 className="font-800 text-lg mb-5" style={{ color: "var(--color-navy)" }}>Service Details</h2>
              <div className="flex flex-col gap-4">
                <div className="form-field">
                  <label className="form-label required" htmlFor="serviceType">Service Type</label>
                  <select id="serviceType" className={`form-input ${errors.serviceType ? "error" : ""}`}
                    value={form.serviceType} onChange={(e) => set("serviceType", e.target.value)}>
                    <option value="">Select service type *</option>
                    {(form.category === "AC" ? AC_SERVICE_TYPES : RO_SERVICE_TYPES).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.serviceType && <span className="form-error"><AlertCircle size={12} />{errors.serviceType}</span>}
                </div>

                {form.category === "AC" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-field">
                      <label className="form-label" htmlFor="acType">AC Type</label>
                      <select id="acType" className="form-input" value={form.acType} onChange={(e) => set("acType", e.target.value)}>
                        <option value="">Select AC type</option>
                        {AC_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="acBrand">AC Brand</label>
                      <select id="acBrand" className="form-input" value={form.acBrand} onChange={(e) => set("acBrand", e.target.value)}>
                        <option value="">Select brand</option>
                        {BUSINESS.acBrands.map((b) => <option key={b} value={b}>{b}</option>)}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {form.category === "RO" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-field">
                      <label className="form-label" htmlFor="roBrand">Purifier Brand</label>
                      <select id="roBrand" className="form-input" value={form.roBrand} onChange={(e) => set("roBrand", e.target.value)}>
                        <option value="">Select brand</option>
                        {RO_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label" htmlFor="roType">Purifier Type</label>
                      <select id="roType" className="form-input" value={form.roType} onChange={(e) => set("roType", e.target.value)}>
                        <option value="">Select type</option>
                        {RO_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                )}

                <div className="form-field">
                  <label className="form-label required" htmlFor="problemDesc">Problem Description</label>
                  <textarea id="problemDesc" rows={4} className={`form-input resize-none ${errors.problemDesc ? "error" : ""}`}
                    value={form.problemDesc} onChange={(e) => set("problemDesc", e.target.value)}
                    placeholder="Describe the issue in detail so our technician can be prepared..." />
                  {errors.problemDesc && <span className="form-error"><AlertCircle size={12} />{errors.problemDesc}</span>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="form-label required" htmlFor="preferredDate">Preferred Date</label>
                    <input id="preferredDate" type="date" className={`form-input ${errors.preferredDate ? "error" : ""}`}
                      min={minDateStr} value={form.preferredDate} onChange={(e) => set("preferredDate", e.target.value)} />
                    {errors.preferredDate && <span className="form-error"><AlertCircle size={12} />{errors.preferredDate}</span>}
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="preferredSlot">Preferred Time Slot</label>
                    <select id="preferredSlot" className="form-input" value={form.preferredSlot} onChange={(e) => set("preferredSlot", e.target.value)}>
                      <option value="">Any available slot</option>
                      {TIME_SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 flex items-start gap-2">
                  <Info size={16} className="flex-shrink-0 mt-0.5 text-amber-600" />
                  Time slots are subject to availability. Our team will confirm the exact time when we call you.
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="btn" style={{ border: "1.5px solid #e0eaf4", color: "#4a6278" }}>
                    Back
                  </button>
                  <button type="button" onClick={goToStep3} className="btn btn-primary flex-1">
                    Continue to Payment <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3: Payment ───────────────────────────────────────────── */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              {/* Booking fee info */}
              <div className="bg-white rounded-2xl border border-blue-100 p-6">
                <h2 className="font-800 text-lg mb-4" style={{ color: "var(--color-navy)" }}>Booking Fee Payment</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                  <div className="flex items-start gap-3">
                    <Info size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-700 mb-1">₹199 Booking Fee</p>
                      <p>A nominal booking fee of <strong>₹199</strong> is required to confirm your appointment.
                        This amount will be <strong>adjusted against your final service bill</strong>.
                        The booking fee is non-refundable if you cancel with less than 24 hours' notice.
                        Please see our <Link href="/cancellation-refund-policy" className="underline">Cancellation & Refund Policy</Link>.</p>
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="bg-white border-2 border-blue-100 rounded-2xl p-3 shadow-sm w-44 h-44 relative">
                      <Image src="/images/qr.jpeg" alt="Airr Cold Services UPI QR code for payment" fill className="object-contain rounded-xl p-1" />
                    </div>
                    <p className="text-center text-xs text-slate-500 mt-1">Scan to Pay</p>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-700 text-lg mb-1" style={{ color: "var(--color-navy)" }}>Pay ₹199 via UPI</p>
                    <p className="text-slate-500 text-sm mb-3">Use any UPI app — PhonePe, Google Pay, Paytm, or bank UPI</p>
                    <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 text-sm font-600 text-slate-700 w-fit mx-auto sm:mx-0">
                      <span>{BUSINESS.upiId}</span>
                      <button type="button" onClick={copyUPI} className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Copy UPI ID">
                        {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Tap to copy UPI ID</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["PhonePe", "Google Pay", "Paytm", "BHIM"].map((m) => (
                        <span key={m} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Transaction ID */}
                <div className="form-field">
                  <label className="form-label required" htmlFor="transactionId">
                    UPI Transaction / Reference ID
                  </label>
                  <input
                    id="transactionId"
                    type="text"
                    className={`form-input ${(errors as Record<string, string>).transactionId ? "error" : ""}`}
                    value={form.transactionId}
                    onChange={(e) => set("transactionId", e.target.value)}
                    placeholder="Enter the 12-digit UTR or transaction reference"
                  />
                  {(errors as Record<string, string>).transactionId && (
                    <span className="form-error">
                      <AlertCircle size={12} />
                      {(errors as Record<string, string>).transactionId}
                    </span>
                  )}
                  <p className="text-xs text-slate-400 mt-1">
                    Find the transaction ID / UTR in your UPI app after payment.
                  </p>
                </div>

                {/* Security notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-xs text-amber-800 flex items-start gap-2">
                  <AlertCircle size={14} className="flex-shrink-0 mt-0.5 text-amber-600" />
                  <div>
                    <strong>Payment Security:</strong> Your transaction ID is recorded but payment verification
                    is performed by our admin team. Payment status will show <strong>Pending Verification</strong>
                    until manually confirmed. We will never ask for your UPI PIN, OTP, or banking password.
                  </div>
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4 text-sm text-red-800 flex items-start gap-2">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    {submitError}
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="bg-white rounded-2xl border border-blue-100 p-6">
                <h3 className="font-700 text-sm mb-4" style={{ color: "var(--color-navy)" }}>Booking Summary</h3>
                <div className="flex flex-col gap-2 text-sm">
                  {[
                    ["Name", form.fullName],
                    ["Mobile", form.phone],
                    ["Category", `${form.category} Services`],
                    ["Service", form.serviceType],
                    form.acBrand ? ["AC Brand", form.acBrand] : null,
                    form.roBrand ? ["RO Brand", form.roBrand] : null,
                    ["PIN Code", form.pinCode],
                    ["Preferred Date", form.preferredDate],
                    form.preferredSlot ? ["Preferred Slot", form.preferredSlot] : null,
                  ].filter(Boolean).map((item) => (
                    <div key={item![0]} className="flex justify-between">
                      <span className="text-slate-400">{item![0]}</span>
                      <span className="font-600 text-slate-700 text-right max-w-[60%] truncate">{item![1]}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-100 pt-2 mt-1 flex justify-between">
                    <span className="text-slate-400">Booking Fee</span>
                    <span className="font-800 text-blue-600">₹199</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="btn" style={{ border: "1.5px solid #e0eaf4", color: "#4a6278" }}>
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn btn-primary flex-1 justify-center"
                >
                  {loading ? "Submitting..." : <><CheckCircle size={16} /> Confirm Booking</>}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function BookServicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center"><p className="text-slate-500">Loading...</p></div>}>
      <BookServiceForm />
    </Suspense>
  );
}
