import { motion } from 'framer-motion';
import { Calendar, User, FileText, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';

interface PatientJourneyProps {
  onOpenAppointment: () => void;
}

export function PatientJourney({ onOpenAppointment }: PatientJourneyProps) {
  const steps = [
    {
      step: '01',
      title: 'Book OPD Slot',
      desc: 'Pick a morning or evening time slot online or call the clinic desk.',
      icon: Calendar,
    },
    {
      step: '02',
      title: 'Consultation',
      desc: 'Unhurried case-taking covering health history and symptom chronology.',
      icon: User,
    },
    {
      step: '03',
      title: 'Remedy Protocol',
      desc: 'Receive tailored constitutional potencies for root-cause healing.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Progress Review',
      desc: 'Ongoing dosage monitoring and long-term wellness guidance.',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative bg-[#FCFBF8] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-botanical-600" />
            Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-botanical-900 tracking-tight">
            Your Healthcare Journey
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            A clear, gentle 4-step path to better health and long-term relief.
          </p>
        </div>

        {/* 4 Crisp Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-botanical-200 shadow-soft hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-botanical-700 text-white font-serif font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-botanical-50 text-botanical-700 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-serif font-bold text-botanical-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-botanical-100 text-[10px] font-bold text-herbal-700">
                  Step {idx + 1} of 4
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
