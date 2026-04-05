import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { gymConfig } from '../../gymConfig';

export const StickyCTAs: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* WhatsApp CTA */}
      <a
        href={`https://wa.me/${gymConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="currentColor" />
      </a>

      {/* Call CTA (Mobile only usually, but good for all) */}
      <a
        href={`tel:${gymConfig.contact.phone}`}
        className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
};
