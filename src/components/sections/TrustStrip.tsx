import { motion } from 'framer-motion';
import { Award, Star, Users, ShieldCheck, HeartHandshake, IndianRupee } from 'lucide-react';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';
import { siteConfig } from '@/content/site.config';

export function TrustStrip() {
  const trustMetrics = [
    {
      icon: Award,
      value: '33+',
      label: 'Years Experience',
      desc: 'Practicing since 1990s in Anantapur',
      accent: 'text-botanical-700 bg-botanical-100',
    },
    {
      icon: Star,
      value: '4.9★',
      label: 'Patient Rating',
      desc: 'Top-rated clinic across Rayalaseema',
      accent: 'text-herbal-700 bg-herbal-100',
    },
    {
      icon: Users,
      value: '920+',
      label: 'Verified Reviews',
      desc: 'Google & Justdial public ratings',
      accent: 'text-sage-800 bg-sage-100',
    },
    {
      icon: HeartHandshake,
      value: '45K+',
      label: 'Patients Restored',
      desc: 'Accessible family healthcare for all',
      accent: 'text-botanical-800 bg-botanical-100',
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-premium border border-botanical-200/80">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-botanical-100">
          {trustMetrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-botanical-900 tracking-tight">
                    <AnimatedCounter value={item.value} />
                  </span>
                </div>
                <h2 className="text-sm font-bold text-charcoal-800 tracking-tight">
                  {item.label}
                </h2>
                <p className="text-xs text-charcoal-500 mt-0.5">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
