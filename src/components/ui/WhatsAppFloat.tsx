import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function WhatsAppFloat() {
  const msg = encodeURIComponent(
    "Hi Airr Cold Services! I'd like to enquire about your AC/RO services."
  );
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsappNumber}?text=${msg}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
