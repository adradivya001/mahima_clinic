import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Award, Clock, ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

interface AboutProps {
  onOpenAppointment: () => void;
}

export function About({ onOpenAppointment }: AboutProps) {
  const pillars = [
    {
      title: 'Gentle & Natural Healing',
      desc: 'Pure, safe remedies that stimulate the body’s innate vital force without harsh side effects.',
    },
    {
      title: 'Minimal Medicines Emphasis',
      desc: 'Precision classical homeopathic prescribing focused on minimal dosages for maximum natural response.',
    },
    {
      title: 'Holistic Approach to Health',
      desc: 'Comprehensive constitutional evaluation treating mind, body, and underlying root causes.',
    },
    {
      title: 'Anantapur & Bengaluru Centers',
      desc: 'Convenient consultation centers in Anantapur (Vidyuth Nagar) and Bengaluru (Jayanagar).',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative bg-[#FCFBF8] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual: Clinic Heritage Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-gradient-to-br from-botanical-800 to-botanical-700 text-white rounded-3xl p-6 sm:p-8 shadow-botanical space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-herbal-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Our Mission
                </div>
                <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full text-sage-200">
                  Est. 1990s
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  "{siteConfig.tagline}"
                </h3>
                <p className="text-xs sm:text-sm text-sage-200 leading-relaxed font-serif italic">
                  "{siteConfig.mission}"
                </p>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center">
                  <span className="block text-xl sm:text-2xl font-serif font-bold text-white">33+</span>
                  <span className="text-[10px] text-sage-300">Years Experience</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 text-center">
                  <span className="block text-xl sm:text-2xl font-serif font-bold text-white">2</span>
                  <span className="text-[10px] text-sage-300">Modern Clinics</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-sage-200">
                <MapPin className="w-4 h-4 text-herbal-400 shrink-0" />
                <span>Anantapur (Vidyuth Nagar) &amp; Bengaluru (Jayanagar)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Text Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-botanical-600" />
                About Sri Mahima Clinic
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-botanical-900 tracking-tight leading-tight">
                Multispeciality Homoeopathy for Natural Healing
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              <strong className="text-botanical-900 font-semibold">{siteConfig.name}</strong> is committed to bringing homoeopathic healing to every being through gentle, effective, and minimal medicines. Backed by 33+ years of clinical mastery, we provide individualized care across our Anantapur and Bengaluru clinics.
            </p>

            {/* 4 Crisp Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-botanical-100 shadow-xs"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-botanical-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-botanical-900">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-charcoal-600 leading-snug mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-xs sm:text-sm shadow-botanical transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-herbal-300" />
              </button>

              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-botanical-700 hover:text-botanical-900 underline"
              >
                Follow @{siteConfig.social.instagram} on Instagram ↗
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
