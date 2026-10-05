import { motion } from 'framer-motion';
import { Calendar, Phone, Star, MapPin, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { BotanicalParticles } from '@/components/effects/BotanicalParticles';
import { trackEvent } from '@/lib/analytics';
import mahimaLogo from '@/assets/logo/mahima_logo.png';
import mahimaClinicImg from '@/assets/images/mahima_clinic.png';

interface HeroProps {
  onOpenAppointment: () => void;
}

export function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-14 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F7F5EE] via-[#F4EFE6] to-[#F7F5EE]">
      {/* Floating Botanical Background Leaves */}
      <BotanicalParticles />

      {/* Decorative Subtle Blur Backgrounds */}
      <div className="absolute top-12 left-10 w-80 h-80 bg-sage-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-herbal-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-botanical-200 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-botanical-700 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-botanical-900">
                ESTABLISHED 1990S · VIDYUTH NAGAR, ANANTAPUR
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-botanical-950 tracking-tight leading-[1.18]">
                Holistic Healthcare, Rooted in{' '}
                <span className="text-botanical-700 italic font-serif font-normal block sm:inline">
                  Personalized Clinical Care.
                </span>
              </h1>
            </div>

            {/* Mission Statement & Descriptive Paragraph */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-medium">
                "{siteConfig.mission}"
              </p>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Personalized homeopathic care led by senior medical faculty at Vidyuth Nagar Circle, Anantapur &amp; Jayanagar, Bengaluru.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-botanical-100/80 border border-botanical-200 text-xs font-semibold text-botanical-900">
                33+ Yrs Experience
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-50/90 border border-amber-200 text-xs font-semibold text-amber-900 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.9★ (920+ Reviews)
              </span>
              <span className="px-3 py-1 rounded-lg bg-botanical-100/80 border border-botanical-200 text-xs font-semibold text-botanical-900">
                Accessible OPD Care
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  trackEvent('hero_book_click');
                  onOpenAppointment();
                }}
                className="px-7 py-3.5 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-sm shadow-botanical hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-herbal-300" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-herbal-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('hero_call_click')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-botanical-50 text-botanical-800 border border-botanical-200 font-bold text-sm shadow-soft transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-botanical-600" />
                <span>Call Clinic</span>
              </a>
            </div>

            {/* Location & Timings Snip */}
            <div className="pt-3 border-t border-botanical-200/60 flex flex-wrap items-center gap-5 text-xs text-charcoal-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
                <span>Vidyuth Nagar Circle, Anantapur</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-herbal-600 shrink-0" />
                <span>Mon – Sat: 9:00 AM–1:30 PM | 4:00 PM–8:30 PM</span>
              </div>
            </div>

          </motion.div>

          {/* Right Visual Column (5 cols): Authentic Clinic Photo & Roster Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Information Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-botanical-200/90 flex flex-col">
                
                {/* 1. Authentic Clinic Image - Fully Visible */}
                <div className="relative bg-[#1A382B] overflow-hidden group">
                  <div className="relative aspect-square sm:aspect-[4/4.2] w-full overflow-hidden bg-botanical-950 flex items-center justify-center">
                    <img
                      src={mahimaClinicImg}
                      alt="Sri Mahima Multispeciality Homoeo Clinic Facility & Signboard"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Top Floating Pill Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-botanical-900 font-bold text-[11px] shadow-md flex items-center gap-1.5 border border-white/60">
                      <MapPin className="w-3 h-3 text-botanical-600" />
                      Anantapur Branch
                    </span>
                    <span className="px-3 py-1 rounded-full bg-botanical-900/90 backdrop-blur-md text-white font-bold text-[11px] shadow-md flex items-center gap-1.5 border border-white/20">
                      <ShieldCheck className="w-3 h-3 text-herbal-300" />
                      Verified Clinic
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Rating Badge Overlay on Corner */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute -bottom-3 -left-3 sm:-left-4 bg-white/95 backdrop-blur-md border border-botanical-200 rounded-2xl p-2.5 shadow-lg flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-botanical-700 flex items-center justify-center text-amber-400 shadow-xs">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs sm:text-sm text-botanical-900">4.9 ★</span>
                    <span className="text-[10px] text-charcoal-500 font-medium">Google Rating</span>
                  </div>
                  <p className="text-[10px] font-semibold text-botanical-700">
                    920+ Patient Reviews
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
