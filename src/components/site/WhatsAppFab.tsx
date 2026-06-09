import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/+917976774213?text=Hi%20Edicast%2C%20I'd%20like%20to%20learn%20more."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 rounded-full bg-emerald-500 text-white px-4 py-3 shadow-elegant hover:bg-emerald-600 transition-colors">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden md:inline text-sm font-medium pr-1">Chat with us</span>
      </span>
    </a>
  );
}
