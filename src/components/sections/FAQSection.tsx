import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Plus, Minus, MessageCircle } from 'lucide-react';
import { faqs, faqCategories } from '@/content/faq';
import { siteConfig } from '@/content/site.config';

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs =
    activeCategory === 'All Questions'
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#FCFBF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-botanical-600" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-botanical-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Quick answers about consultations, timings, and clinic visits.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-botanical-200/90 shadow-soft overflow-hidden transition-colors hover:border-botanical-400/80"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-botanical-900 pr-2">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-botanical-700 text-white' : 'bg-botanical-50 text-botanical-700'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-700 leading-relaxed border-t border-botanical-100/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-3xl bg-botanical-50 border border-botanical-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-botanical-900">Have a specific condition or query?</h4>
            <p className="text-xs text-charcoal-600">Our clinic team is available to assist your family over phone or WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Hello Sri Mahima Clinic, I have a query regarding homeopathic consultation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
