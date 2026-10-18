"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wind, Droplets, ChevronRight } from "lucide-react";
import { AC_SERVICE_TYPES, RO_SERVICE_TYPES } from "@/lib/constants";

export default function QuickBookWidget() {
  const router = useRouter();
  const [category, setCategory] = useState<"AC" | "RO">("AC");
  const [serviceType, setServiceType] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const serviceTypes = category === "AC" ? AC_SERVICE_TYPES : RO_SERVICE_TYPES;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType || !pinCode || !phone) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    const params = new URLSearchParams({ category, serviceType, pinCode, phone });
    router.push(`/book-service?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-5">
      <p className="font-700 text-sm mb-4" style={{ color: "var(--color-navy)" }}>
        Quick Book a Service
      </p>

      {/* Category Toggle */}
      <div className="flex rounded-xl bg-slate-100 p-1 mb-4 gap-1">
        {(["AC", "RO"] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => { setCategory(cat); setServiceType(""); }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-600 transition-all ${
              category === cat
                ? "bg-white shadow-sm text-blue-600"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {cat === "AC" ? <Wind size={14} /> : <Droplets size={14} />}
            {cat === "AC" ? "AC Services" : "RO Services"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="form-input text-sm"
          required
          aria-label="Select service type"
        >
          <option value="">Select service type *</option>
          {serviceTypes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
            placeholder="PIN Code *"
            className="form-input text-sm"
            maxLength={6}
            required
            aria-label="PIN code"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            placeholder="Mobile number *"
            className="form-input text-sm"
            maxLength={10}
            required
            aria-label="Mobile number"
          />
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <button type="submit" className="btn btn-primary w-full justify-center">
          Continue to Booking <ChevronRight size={16} />
        </button>
      </form>
    </div>
  );
}
