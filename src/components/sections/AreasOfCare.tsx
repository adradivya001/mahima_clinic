import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf,
  Sparkles,
  HeartHandshake,
  Activity,
  Smile,
  Feather,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { treatmentCategories } from '@/content/treatments';
import { trackEvent } from '@/lib/analytics';

interface AreasOfCareProps {
  onOpenAppointment: (treatmentName?: string) => void;
}

const iconMap: Record<string, any> = {
  Leaf: Leaf,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  Activity: Activity,
  Smile: Smile,
  Feather: Feather,
};

export function AreasOfCare({ onOpenAppointment }: AreasOfCareProps) {
  return (
    <section id="areas-of-care" className="py-16 lg:py-24 relative bg-[#F7F5EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-botanical-600" />
            Clinical Treatments
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-botanical-900 tracking-tight">
            Our Areas of Care
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Targeted constitutional homoeopathy for long-term health and symptom relief.
          </p>
        </div>

        {/* 6 Clean Care Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {treatmentCategories.map((item, index) => {
            const Icon = iconMap[item.iconName] || Leaf;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-[#FCFBF8] rounded-3xl p-6 border border-botanical-200 shadow-soft hover:shadow-premium hover:border-botanical-400 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-botanical-100 text-botanical-700 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-800 border border-sage-200">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-serif font-bold text-botanical-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  {/* Condition Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.conditions.slice(0, 3).map((cond, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-botanical-100 text-charcoal-700 font-medium"
                      >
                        {cond.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Links */}
                <div className="pt-3 border-t border-botanical-100 flex items-center justify-between gap-2">
                  <Link
                    to={`/treatments/${item.slug}`}
                    className="text-xs font-bold text-botanical-800 hover:text-botanical-600 flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => {
                      trackEvent('care_card_book_click', { category: item.title });
                      onOpenAppointment(item.title);
                    }}
                    className="px-3 py-1 rounded-full bg-botanical-50 hover:bg-botanical-700 hover:text-white text-botanical-800 text-[11px] font-semibold border border-botanical-200 transition-colors"
                  >
                    Book Slot
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
