import { MessageCircle, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FloatingActions() {
  const msg = encodeURIComponent(
    "Hi Airr Cold Services! I'd like to enquire about your AC/RO services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Floating Direct Call Button */}
      <a
        href={`tel:${BUSINESS.primaryPhone.replace(/\s/g, "")}`}
        className="floating-call-btn flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Call Airr Cold Services"
      >
        <PhoneCall size={24} className="animate-pulse" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Call {BUSINESS.primaryPhone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${msg}`}
        className="floating-whatsapp-btn flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1db954] text-white shadow-xl transition-all hover:scale-110 active:scale-95 group relative"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2} />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
