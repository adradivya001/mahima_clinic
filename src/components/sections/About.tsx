import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Award, Clock, ArrowRight, MapPin } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import mahimaBuilding from '@/assets/images/mahima_building.png';

interface AboutProps {
  onOpenAppointment: () => void;
}

export function About({ onOpenAppointment }: AboutProps) {
  const pillars = [
    {
      title: 'Constitutional Case Taking',
      desc: 'In-depth assessment of physical symptoms, lifestyle, and hereditary root causes.',
    },
    {
      title: 'Organon & Philosophy',
      desc: 'Classical homoeopathic principles led by academic medical faculty.',
    },
    {
      title: 'Gentle & Natural Care',
      desc: 'Pure, safe remedies free from harsh pharmaceutical side effects.',
    },
    {
      title: '₹100 Accessible OPD',
      desc: 'Nominal consultation fee ensuring trusted care for every family in Anantapur.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative bg-[#FCFBF8] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual: Hospital Building (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium border border-botanical-200 bg-botanical-50">
              <img
                src={mahimaBuilding}
                alt="Sri Mahima Multispeciality Homoeo Clinic Entrance"
                className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/85 via-botanical-950/20 to-transparent pointer-events-none" />

              {/* Location Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-botanical-200 shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-botanical-700" />
                <span className="text-xs font-bold text-botanical-900">Vidyuth Nagar Circle, Anantapur</span>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-sm font-serif font-bold text-white">
                  Sri Mahima Multispeciality Homoeo Clinic
                </p>
                <p className="text-xs text-sage-200">
                  Trusted Homoeopathic Healthcare for over 33+ Years
                </p>
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
                Holistic Healthcare Rooted in Personalized Care
              </h2>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              Located at Vidyuth Nagar Circle in Anantapur, <strong className="text-botanical-900 font-semibold">{siteConfig.name}</strong> provides comprehensive constitutional homeopathic care led by senior academic faculty consultants. We treat the whole person to achieve lasting well-being.
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
                <span>Book a Consultation (₹100)</span>
                <ArrowRight className="w-4 h-4 text-herbal-300" />
              </button>

              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-botanical-700 hover:text-botanical-900 underline"
              >
                Locate Clinic in Google Maps ↗
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
