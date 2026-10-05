import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

interface FloatingActionsProps {
  onOpenAppointment: () => void;
}

export function FloatingActions({ onOpenAppointment }: FloatingActionsProps) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Floating quick contact" className="fixed bottom-6 right-6 z-30 hidden sm:flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-white/95 border border-botanical-200 text-botanical-800 shadow-soft hover:bg-botanical-50 flex items-center justify-center transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp CTA */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello Sri Mahima Clinic, I would like to inquire about homeopathic consultation / treatment timings.')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('floating_whatsapp_click')}
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Chat with Clinic
        </span>
      </a>

      {/* Floating Appointment Button */}
      <button
        onClick={() => {
          trackEvent('floating_book_click');
          onOpenAppointment();
        }}
        className="pointer-events-auto flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-botanical-700 text-white font-bold text-xs shadow-botanical hover:bg-botanical-800 transition-all hover:scale-105"
      >
        <Calendar className="w-4 h-4 text-herbal-300" />
        <span>Book Consultation (₹100)</span>
      </button>

    </aside>
  );
}
