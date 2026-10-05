import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, ShieldCheck, Heart, Award, ArrowUp, Star } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { treatmentCategories } from '@/content/treatments';
import mahimaLogo from '@/assets/logo/mahima_logo.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1E4D3A] to-[#123024] text-white pt-16 pb-24 sm:pb-16 border-t border-botanical-600/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-herbal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Clinic Overview & Aligned Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-2xl bg-white/95 border border-herbal-400/40 shadow-sm flex items-center justify-center">
                <img
                  src={mahimaLogo}
                  alt="Sri Mahima Clinic Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Sri Mahima Clinic
                </h3>
                <p className="text-xs text-sage-300">Multispeciality Homeo Care</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sage-200/90 leading-relaxed">
              Trusted homeopathic healthcare clinic in Anantapur &amp; Bengaluru. Led by senior medical faculty consultants with 33+ years of clinical trust.
            </p>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="flex items-center gap-1 text-herbal-400">
                <Star className="w-4 h-4 fill-herbal-400" />
                <span className="font-bold text-sm text-white">4.9 / 5</span>
              </div>
              <div className="text-xs text-sage-300">
                Over <strong>920+ Patient Reviews</strong> on Google Business
              </div>
            </div>
          </div>

          {/* Col 2: Areas of Care */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-herbal-300 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Areas of Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {treatmentCategories.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/treatments/${item.slug}`}
                    className="text-sage-200 hover:text-herbal-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <span className="text-sage-400 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Doctor & Clinic Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-herbal-300 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" /> Doctor & Hours
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-sage-200">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div>
                  <p className="font-bold text-white text-xs">Dr. P. Kumaraiah</p>
                  <p className="text-[11px] text-sage-300">B.H.M.S., M.D. (Acup.) · M.D. Sri Mahima Group</p>
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Dr. Pogula Nagendra Babu</p>
                  <p className="text-[11px] text-sage-300">B.H.M.S., M.D. (Hom), M.B.A.</p>
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Dr. Premajyothi Fraser</p>
                  <p className="text-[11px] text-sage-300">B.H.M.S., M.D. (Hom), F.H.P.C.</p>
                </div>
                <p className="text-[10px] text-herbal-300 pt-0.5 border-t border-white/10">33+ Years Experience · ₹100 OPD</p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-herbal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Consultation Timings</p>
                  <p className="text-xs text-sage-300">Morning: 9:00 AM – 1:30 PM</p>
                  <p className="text-xs text-sage-300">Evening: 4:00 PM – 8:30 PM</p>
                  <p className="text-[11px] text-sage-400">Monday to Saturday</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Locations & Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-herbal-300 mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Clinic Locations
            </h4>
            <div className="space-y-3.5 text-xs text-sage-200">
              {/* Anantapur Main */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-herbal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Anantapur (Main Clinic)</p>
                  <p className="text-sage-300 text-[11px]">12/4/75, Vidyuth Nagar Circle, Anantapur – 515001</p>
                </div>
              </div>

              {/* Bengaluru Branch */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-herbal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Bengaluru Clinic</p>
                  <p className="text-sage-300 text-[11px]">#69, 5th Cross, Ramanjanaya Layout, Marathahalli, Bengaluru</p>
                  <p className="text-[10px] text-herbal-300 mt-0.5">Associated with Dr. Nagendra Babu</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                <Phone className="w-3.5 h-3.5 text-herbal-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-white font-bold hover:text-herbal-300 transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Care</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-sage-400">
              Information provided for patient awareness. Consult doctor for diagnosis.
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
