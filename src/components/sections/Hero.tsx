import { motion } from 'framer-motion';
import { Calendar, Phone, Star, MapPin, ArrowRight, Clock, ShieldCheck, CheckCircle2, Award, HeartHandshake, UserCheck } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { doctorsList } from '@/content/doctor';
import { BotanicalParticles } from '@/components/effects/BotanicalParticles';
import { trackEvent } from '@/lib/analytics';
import mahimaLogo from '@/assets/logo/mahima_logo.png';

interface HeroProps {
  onOpenAppointment: () => void;
}

export function Hero({ onOpenAppointment }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F7F5EE] via-[#F3EFE6] to-[#F7F5EE]">
      {/* Floating Botanical Background Leaves */}
      <BotanicalParticles />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-sage-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-herbal-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-botanical-200 shadow-soft">
              <span className="w-2 h-2 rounded-full bg-botanical-600 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-botanical-800">
                {siteConfig.heroLabel}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-botanical-900 tracking-tight leading-[1.18]">
                {siteConfig.heroHeadingLine1}{' '}
                <span className="text-botanical-700 italic font-normal block sm:inline">
                  {siteConfig.heroHeadingLine2}
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Personalized homeopathic care led by senior medical faculty at Vidyuth Nagar Circle, Anantapur.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5">
              <span className="px-3 py-1 rounded-lg bg-botanical-100/80 border border-botanical-200 text-xs font-semibold text-botanical-900">
                33+ Yrs Experience
              </span>
              <span className="px-3 py-1 rounded-lg bg-herbal-100/80 border border-herbal-300 text-xs font-semibold text-herbal-900 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-herbal-600 text-herbal-600" />
                4.9★ (920+ Reviews)
              </span>
              <span className="px-3 py-1 rounded-lg bg-sage-100/90 border border-sage-300 text-xs font-semibold text-sage-900">
                ₹100 OPD Consultation
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => {
                  trackEvent('hero_book_click');
                  onOpenAppointment();
                }}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-sm shadow-botanical hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-herbal-300 group-hover:rotate-12 transition-transform" />
                <span>Book Consultation (₹100)</span>
                <ArrowRight className="w-4 h-4 text-herbal-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('hero_call_click')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-botanical-50 text-botanical-800 border border-botanical-200 font-bold text-sm shadow-soft transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-botanical-600" />
                <span>Call Clinic</span>
              </a>
            </div>

            {/* Location & Timings Snip */}
            <div className="pt-3 border-t border-botanical-200/60 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-charcoal-600">
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

          {/* Right Visual Column (5 cols): Elegant Consultation & Schedule Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Main Information Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-botanical-200/90 space-y-5">
                
                {/* Header Branding Row */}
                <div className="flex items-center justify-between pb-4 border-b border-botanical-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-botanical-200 shadow-xs flex items-center justify-center p-1">
                      <img
                        src={mahimaLogo}
                        alt="Sri Mahima Clinic"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-botanical-900">
                        Sri Mahima Clinic
                      </h3>
                      <p className="text-[11px] text-charcoal-500 font-medium">
                        Multispeciality Homeo Care
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-herbal-100 text-herbal-800 border border-herbal-200">
                    OPD: ₹100
                  </span>
                </div>

                {/* Senior Doctors Roster Preview */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">
                    Our Senior Physicians &amp; Faculty
                  </span>

                  <div className="space-y-2">
                    {doctorsList.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-2.5 rounded-2xl bg-[#FCFBF8] border border-botanical-100 flex items-center justify-between gap-2 hover:border-botanical-300 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-botanical-200 shrink-0 bg-botanical-100">
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-botanical-900 truncate">
                              {doc.name}
                            </h4>
                            <p className="text-[10px] text-charcoal-500 truncate">
                              {doc.qualifications.join(', ')}
                            </p>
                          </div>
                        </div>

                        <span className="text-[10px] font-semibold text-botanical-700 bg-botanical-50 px-2 py-0.5 rounded-md border border-botanical-100 whitespace-nowrap">
                          {doc.id === 'dr-p-kumaraiah' ? '33+ Yrs' : 'Faculty'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Schedule Box */}
                <div className="p-3.5 rounded-2xl bg-botanical-50/80 border border-botanical-100 space-y-1.5 text-xs text-charcoal-700">
                  <div className="flex items-center justify-between font-semibold text-botanical-900">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-botanical-600" />
                      <span>Daily OPD Hours</span>
                    </span>
                    <span className="text-[11px] text-herbal-800 font-bold">Mon – Sat</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 text-charcoal-600">
                    <div className="bg-white p-1.5 rounded-lg border border-botanical-100 text-center">
                      <span className="block text-[10px] text-charcoal-400">Morning</span>
                      <strong className="text-botanical-900">9:00 AM – 1:30 PM</strong>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-botanical-100 text-center">
                      <span className="block text-[10px] text-charcoal-400">Evening</span>
                      <strong className="text-botanical-900">4:00 PM – 8:30 PM</strong>
                    </div>
                  </div>
                </div>

                {/* Book Slot Trigger */}
                <button
                  onClick={onOpenAppointment}
                  className="w-full py-3 rounded-2xl bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-xs shadow-botanical transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-herbal-300" />
                  <span>Request OPD Consultation (₹100)</span>
                </button>

              </div>

              {/* Floating Rating Badge Overlay on Corner */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute -bottom-3 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md border border-botanical-200 rounded-2xl p-2.5 shadow-lg flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-botanical-700 flex items-center justify-center text-herbal-300">
                  <Star className="w-4 h-4 fill-herbal-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-botanical-900">4.9 ★</span>
                    <span className="text-[11px] text-charcoal-500 font-medium">Google Rating</span>
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
