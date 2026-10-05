import { motion } from 'framer-motion';
import { Award, UserCheck, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export function WhyChooseMahima() {
  const reasons = [
    {
      num: '01',
      title: '33+ Years Experience',
      desc: 'Proven clinical diagnosis and accurate constitutional remedy selection.',
      icon: Award,
    },
    {
      num: '02',
      title: 'Detailed Case Taking',
      desc: 'Dedicated unhurried evaluations identifying root triggers and health history.',
      icon: UserCheck,
    },
    {
      num: '03',
      title: 'Family-Centered Care',
      desc: 'Safe, sweet-pill homeopathic remedies suitable from toddlers to elders.',
      icon: HeartHandshake,
    },
    {
      num: '04',
      title: '₹100 Accessible OPD',
      desc: 'Transparent, nominal consultation charges at Vidyuth Nagar Circle.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-20 relative bg-[#F7F5EE] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-botanical-600" />
            The Sri Mahima Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-botanical-900 tracking-tight">
            Why Patients Choose Sri Mahima
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            A healthcare sanctuary built on trust, clinical integrity, and personalized attention.
          </p>
        </div>

        {/* 4 Crisp Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FCFBF8] rounded-2xl p-5 border border-botanical-200 shadow-soft hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-2xl font-bold text-botanical-600/30">
                    {item.num}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-botanical-100 text-botanical-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-botanical-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
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
