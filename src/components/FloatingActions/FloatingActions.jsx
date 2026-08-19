import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, TEL_URL } from "@/lib/utils";

export function FloatingActions() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center gap-3 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:inset-x-auto sm:right-6 sm:flex-col sm:items-end sm:justify-start sm:pb-6"
    >
      <a
        href={TEL_URL}
        aria-label={`Call HKGN Tours & Travel at ${"6360920705"}`}
        className="focus-ring flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white shadow-navy-lg transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14 sm:flex-none sm:px-0"
      >
        <Phone size={20} strokeWidth={2} />
        <span className="sm:hidden">Call</span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with HKGN Tours & Travel on WhatsApp"
        className="focus-ring flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-white shadow-navy-lg transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14 sm:flex-none sm:px-0"
      >
        <MessageCircle size={20} strokeWidth={2} />
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
