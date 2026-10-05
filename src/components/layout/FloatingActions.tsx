import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Calendar, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

interface FloatingActionsProps {
  onOpenAppointment: () => void;
}

export function FloatingActions({ onOpenAppointment }: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Disappear in hero section; appear once user scrolls down
      const heroThreshold = window.innerHeight * 0.55;
      setIsVisible(window.scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    {
      id: 'whatsapp',
      label: 'Chat on WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello Sri Mahima Clinic, I would like to inquire about homeopathic consultation / treatment timings.')}`,
      target: '_blank',
      rel: 'noopener noreferrer',
      action: () => trackEvent('fab_tab_whatsapp_click'),
      bgClass: 'bg-[#00A884] hover:bg-[#008f70] shadow-[#00A884]/40',
      iconFill: true,
    },
    {
      id: 'appointment',
      label: 'Book Consultation',
      icon: Calendar,
      action: () => {
        trackEvent('fab_tab_book_click');
        onOpenAppointment();
      },
      bgClass: 'bg-[#182C3D] hover:bg-[#122332] shadow-[#182C3D]/40',
      iconFill: false,
    },
    {
      id: 'call',
      label: `Call: ${siteConfig.contact.phoneDisplay}`,
      icon: Phone,
      href: `tel:${siteConfig.contact.phone}`,
      action: () => trackEvent('fab_tab_call_click'),
      bgClass: 'bg-[#D81B43] hover:bg-[#bf1538] shadow-[#D81B43]/40',
      iconFill: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <aside
          aria-label="Quick action sidebar tabs"
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2.5 pointer-events-none"
        >
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isButton = !tab.href;

            const buttonInner = (
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`pointer-events-auto relative group flex items-center justify-end pl-3.5 pr-2 py-2.5 sm:py-3 rounded-l-full ${tab.bgClass} shadow-lg transition-transform duration-300 hover:-translate-x-1.5 cursor-pointer`}
              >
                {/* Expandable Hover Label (Desktop) */}
                <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-botanical-950/95 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-white/15 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
                  {tab.label}
                </span>

                {/* Frosted Glass Circle Enclosure */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <Icon
                    className={`w-5 h-5 sm:w-5.5 sm:h-5.5 text-white ${
                      tab.iconFill ? 'fill-white' : ''
                    }`}
                  />
                </div>
              </motion.div>
            );

            if (isButton) {
              return (
                <button
                  key={tab.id}
                  onClick={tab.action}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-l-full"
                  aria-label={tab.label}
                >
                  {buttonInner}
                </button>
              );
            }

            return (
              <a
                key={tab.id}
                href={tab.href}
                target={tab.target}
                rel={tab.rel}
                onClick={tab.action}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-l-full"
                aria-label={tab.label}
              >
                {buttonInner}
              </a>
            );
          })}
        </aside>
      )}
    </AnimatePresence>
  );
}
