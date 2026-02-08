import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] flex items-center justify-center shadow-dental-elevated transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
        <span className="absolute right-16 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>

      {/* Call Button (more visible on mobile) */}
      <a
        href="tel:+918012345678"
        className="w-14 h-14 rounded-full gradient-dental flex items-center justify-center shadow-dental-elevated transition-all duration-300 hover:scale-110 group md:hidden"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
