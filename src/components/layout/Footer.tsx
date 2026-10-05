import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ShieldCheck, Award, ArrowUp, Star, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { treatmentCategories } from '@/content/treatments';
import { doctorsList } from '@/content/doctor';
import mahimaLogo from '@/assets/logo/mahima_logo.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#1C4534] to-[#122D22] text-white pt-12 pb-20 sm:pb-12 border-t border-botanical-700/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-sage-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Clinic Overview & Rating */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src={mahimaLogo}
                  alt="Sri Mahima Clinic Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white leading-tight">
                  Sri Mahima Clinic
                </h3>
                <p className="text-[11px] text-sage-300">Multispeciality Homeo Care</p>
              </div>
            </div>

            <p className="text-xs text-sage-200/90 leading-relaxed">
              Classical homoeopathic healthcare with 33+ years of clinical trust in Anantapur &amp; Bengaluru.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold text-white text-xs">4.9 / 5</span>
              </div>
              <span className="text-sage-300 text-[11px]">· 920+ Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Key Areas of Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-herbal-300 mb-3.5 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Treatments &amp; Care
            </h4>
            <ul className="space-y-2 text-xs">
              {treatmentCategories.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/treatments/${item.slug}`}
                    className="text-sage-200 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-sage-400 group-hover:text-herbal-300 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Medical Team & Timings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-herbal-300 mb-3.5 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" /> Doctors &amp; OPD
            </h4>
            <div className="space-y-2.5 text-xs text-sage-200">
              <div className="space-y-1.5 pb-2 border-b border-white/10">
                {doctorsList.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-white truncate">{doc.name}</span>
                    <span className="text-[10px] text-sage-300 shrink-0 ml-1">
                      {doc.qualifications[0]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-1 text-[11px] text-sage-300">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Clock className="w-3 h-3 text-herbal-400 shrink-0" />
                  <span>Mon – Sat OPD Consultations</span>
                </div>
                <p className="pl-4.5 text-[10px] text-sage-300">
                  9:00 AM – 1:30 PM &amp; 4:00 PM – 8:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Locations & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-herbal-300 mb-3.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Locations &amp; Contact
            </h4>
            <div className="space-y-3 text-xs text-sage-200">
              <div>
                <p className="text-white font-semibold text-[11px]">Anantapur Branch</p>
                <p className="text-sage-300 text-[10px] leading-tight mt-0.5">
                  D. No. 12-4-75, Vidyuth Nagar, Anantapur – 515001
                </p>
                <a
                  href={`tel:${siteConfig.branches[0].phoneTel}`}
                  className="text-herbal-300 font-bold text-[11px] hover:text-white transition-colors inline-block mt-0.5"
                >
                  📞 {siteConfig.branches[0].phone}
                </a>
              </div>

              <div>
                <p className="text-white font-semibold text-[11px]">Bengaluru Branch</p>
                <p className="text-sage-300 text-[10px] leading-tight mt-0.5">
                  230, Fortune Regency, 37th Cross, 7th Main Rd, Jayanagar 4th T Block – 560041
                </p>
                <a
                  href={`tel:${siteConfig.branches[1].phoneTel}`}
                  className="text-herbal-300 font-bold text-[11px] hover:text-white transition-colors inline-block mt-0.5"
                >
                  📞 {siteConfig.branches[1].phone}
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-300 hover:text-white transition-colors"
                >
                  Instagram: @{siteConfig.social.instagram}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Links & Scroll Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-sage-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Care</Link>
            <span>·</span>
            <Link to="/doctor" className="hover:text-white transition-colors">Doctor Profiles</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[11px] text-sage-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
