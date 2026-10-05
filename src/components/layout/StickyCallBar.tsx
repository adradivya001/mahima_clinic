import { Phone, Calendar, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

interface StickyCallBarProps {
  onOpenAppointment: () => void;
}

export function StickyCallBar({ onOpenAppointment }: StickyCallBarProps) {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 bg-[#FCFBF8]/95 backdrop-blur-md border-t border-botanical-200/80 px-3 py-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          onClick={() => trackEvent('sticky_call_click')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-botanical-50 text-botanical-800 border border-botanical-200 text-[10px] font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-botanical-700 mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello Sri Mahima Clinic, I would like to inquire about homeopathic consultation / treatment timings.')}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('sticky_whatsapp_click')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#E7F7EE] text-[#1B6D3A] border border-[#BBE5CC] text-[10px] font-bold active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-[#1B6D3A] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={siteConfig.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('sticky_maps_click')}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white text-charcoal-700 border border-charcoal-200 text-[10px] font-semibold active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-botanical-600 mb-0.5" />
          <span>Location</span>
        </a>

        {/* Book */}
        <button
          onClick={() => {
            trackEvent('sticky_book_click');
            onOpenAppointment();
          }}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-botanical-700 text-white text-[10px] font-bold shadow-sm active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-herbal-300 mb-0.5" />
          <span>Book</span>
        </button>

      </div>
    </aside>
  );
}
