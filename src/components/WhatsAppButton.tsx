import { MessageCircle } from "lucide-react";

const href = `https://wa.me/917395981362?text=${encodeURIComponent(
  "Hi Chennai Coder, I'd like to know more about your services and courses."
)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Chennai Coder on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden rounded-lg bg-text px-3 py-2 text-xs font-medium text-white opacity-0 shadow-card-hover transition-opacity group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover transition-transform group-hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <MessageCircle size={26} className="relative" />
      </span>
    </a>
  );
}
