import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Calendar, Sparkles, MapPin, Award } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';
import mahimaLogo from '@/assets/logo/mahima_logo.png';

interface NavbarProps {
  onOpenAppointment: (treatment?: string) => void;
}

type NavItem = { label: string; href: string; sectionId?: string };

const navLinks: NavItem[] = [
  { label: 'Home', href: '/', sectionId: 'home' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Areas of Care', href: '/#areas-of-care', sectionId: 'areas-of-care' },
  { label: 'Doctors', href: '/#doctor', sectionId: 'doctor' },
  { label: 'Why Us', href: '/#why-us', sectionId: 'why-us' },
  { label: 'Reviews', href: '/#reviews', sectionId: 'reviews' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function Navbar({ onOpenAppointment }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname === '/') {
        const sectionIds = navLinks.map((n) => n.sectionId).filter(Boolean) as string[];
        for (const id of [...sectionIds].reverse()) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) {
            setActiveSection(id);
            return;
          }
        }
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = useCallback(
    (item: NavItem) => {
      setMobileOpen(false);
      if (item.sectionId) {
        if (location.pathname === '/') {
          scrollTo(item.sectionId);
        } else {
          navigate(`/#${item.sectionId}`);
          setTimeout(() => scrollTo(item.sectionId!), 150);
        }
      }
    },
    [location.pathname, navigate]
  );

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FCFBF8]/95 backdrop-blur-md shadow-md border-b border-botanical-200/80 py-2'
            : 'bg-[#F7F5EE]/90 backdrop-blur-sm border-b border-botanical-100/60 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo & Clinic Branding */}
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') scrollTo('home');
              }}
              className="flex items-center gap-3 group text-decoration-none"
            >
              {/* Aligned Official Clinic Logo */}
              <div className="flex items-center justify-center p-1 rounded-2xl bg-white border border-botanical-200/80 shadow-sm group-hover:scale-105 transition-transform duration-200">
                <img
                  src={mahimaLogo}
                  alt="Sri Mahima Multispeciality Homoeo Clinic Logo"
                  className="h-10 sm:h-12 w-auto object-contain block"
                  loading="eager"
                />
              </div>

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-botanical-900 group-hover:text-botanical-700 transition-colors">
                    Sri Mahima
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-herbal-100 text-herbal-800 border border-herbal-200 hidden sm:inline-block">
                    Homoeo
                  </span>
                </div>
                <span className="text-[11px] font-medium text-charcoal-500 tracking-wide uppercase">
                  Multispeciality Clinic · Anantapur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => {
                const isActive =
                  location.pathname === '/'
                    ? activeSection === item.sectionId
                    : location.pathname === item.href;

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-botanical-800 bg-botanical-100/80 font-bold'
                        : 'text-charcoal-700 hover:text-botanical-700 hover:bg-white/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Phone CTA */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackEvent('navbar_phone_click')}
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/80 border border-botanical-200 text-botanical-800 text-xs font-bold hover:bg-botanical-50 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-botanical-600" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              {/* Book Appointment CTA */}
              <button
                onClick={() => {
                  trackEvent('navbar_book_click');
                  onOpenAppointment();
                }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-botanical hover:shadow-lg inline-flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-herbal-300 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-10 h-10 rounded-xl bg-white border border-botanical-200 flex items-center justify-center text-charcoal-800 hover:text-botanical-700 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[62px] bottom-0 z-30 bg-[#FCFBF8] border-b border-botanical-200 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white border border-botanical-200/80 mb-4 flex items-center gap-3 shadow-sm">
                <img
                  src={mahimaLogo}
                  alt="Sri Mahima Clinic"
                  className="h-11 w-auto object-contain"
                />
                <div>
                  <div className="text-xs font-bold text-botanical-900">Dr. Nagendra Babu &amp; Dr. Premajyothi Fraser</div>
                  <div className="text-[11px] text-charcoal-600">Chief Homoeopathy Consultants · 4.9★ Rated</div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="text-left px-4 py-3 rounded-xl font-medium text-base text-charcoal-800 hover:bg-botanical-100 hover:text-botanical-900 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-botanical-200 space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full py-3 rounded-2xl bg-white border border-botanical-200 text-botanical-800 font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-botanical-600" />
                <span>Call Clinic: {siteConfig.contact.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3.5 rounded-2xl bg-botanical-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-botanical"
              >
                <Calendar className="w-4 h-4 text-herbal-300" />
                <span>Book Doctor Appointment (₹100)</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
