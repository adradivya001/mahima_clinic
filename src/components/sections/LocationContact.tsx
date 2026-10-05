import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Navigation, Calendar, Mail, CheckCircle2, Sparkles, Building2, User } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

interface LocationContactProps {
  onOpenAppointment: () => void;
}

export function LocationContact({ onOpenAppointment }: LocationContactProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<'anantapur' | 'bengaluru'>('anantapur');

  const activeBranch =
    siteConfig.branches.find((b) => b.id === selectedBranchId) || siteConfig.branches[0];

  return (
    <section id="contact" className="py-16 lg:py-24 relative bg-[#F7F5EE] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-botanical-600" />
            Clinic Locations &amp; Timings
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-botanical-900 tracking-tight">
            Visit Sri Mahima Clinic
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Convenient consultation centers in Anantapur (Andhra Pradesh) and Marathahalli (Bengaluru).
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {siteConfig.branches.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                setSelectedBranchId(b.id as 'anantapur' | 'bengaluru');
                trackEvent('switch_branch_tab', { branch: b.name });
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedBranchId === b.id
                  ? 'bg-botanical-700 text-white shadow-botanical'
                  : 'bg-white text-charcoal-700 hover:bg-botanical-50 border border-botanical-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{b.name}</span>
              {b.isMain && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-herbal-400 text-botanical-950 font-bold ml-1">
                  Main Clinic
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Location & Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Clinic Card + Address (5 cols) */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            {/* Clinic Info Card */}
            <div className="bg-[#FCFBF8] rounded-3xl p-5 sm:p-6 border border-botanical-200 shadow-soft space-y-4">
              <div className="p-4 rounded-2xl bg-botanical-50 border border-botanical-200 space-y-1.5">
                <div className="flex items-center gap-2 text-botanical-900 font-bold text-xs">
                  <Building2 className="w-4 h-4 text-botanical-700" />
                  <span>{activeBranch.city}</span>
                </div>
                {selectedBranchId === 'bengaluru' ? (
                  <p className="text-xs text-charcoal-700">
                    Associated with <strong>Dr. Nagendra Babu Pogula</strong> (Professor, Anuradha Homoeopathic Medical College &amp; Hospital, Bengaluru).
                  </p>
                ) : (
                  <p className="text-xs text-charcoal-700">
                    Main Consultation Center with Dr. P. Kumaraiah, Dr. Pogula Nagendra Babu &amp; Dr. Premajyothi Fraser.
                  </p>
                )}
              </div>

              <div className="px-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-base text-botanical-900">
                    {activeBranch.name}
                  </h3>
                </div>
                <p className="text-xs text-charcoal-700 font-medium">
                  {activeBranch.address}
                </p>
                {activeBranch.landmark && (
                  <p className="text-[11px] text-charcoal-500">
                    <strong>Landmark:</strong> {activeBranch.landmark}
                  </p>
                )}
              </div>

              <div className="pt-2 border-t border-botanical-100 flex flex-wrap gap-2">
                <a
                  href={activeBranch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('get_directions_click', { branch: activeBranch.id })}
                  className="px-4 py-2 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-herbal-300" />
                  <span>Open in Google Maps ↗</span>
                </a>
              </div>
            </div>

            {/* Timings & Fee Card */}
            <div className="bg-[#FCFBF8] rounded-3xl p-5 border border-botanical-200 shadow-soft space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-herbal-100 text-herbal-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-botanical-900">
                    Consultation Timings
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-0.5">
                    {activeBranch.timings}
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-botanical-50 border border-botanical-100 flex items-center justify-between text-xs">
                <span className="text-charcoal-600 font-medium">OPD Consultation Fee:</span>
                <span className="font-bold text-botanical-900 bg-white px-2 py-0.5 rounded-lg border border-botanical-200">
                  {activeBranch.fee}
                </span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${activeBranch.phoneTel}`}
                onClick={() => trackEvent('contact_section_call')}
                className="p-3 rounded-2xl bg-white border border-botanical-200 hover:border-botanical-400 text-botanical-900 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-botanical-700" />
                <span>Call Clinic</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Sri Mahima Clinic, I would like to check doctor availability for the ${activeBranch.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('contact_section_whatsapp')}
                className="p-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Direct Appointment Booking (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-botanical-200 shadow-premium flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-botanical-700">
                    Interactive Map
                  </span>
                  <h3 className="text-xl font-serif font-bold text-botanical-900">
                    {activeBranch.city}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-botanical-50 flex items-center justify-center text-botanical-700">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="relative rounded-2xl overflow-hidden border border-botanical-200 aspect-[16/9] bg-botanical-50">
                <iframe
                  key={activeBranch.id}
                  title={`${activeBranch.name} Location Map`}
                  src={activeBranch.embedMapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-charcoal-700 pt-1">
                <div className="p-2.5 rounded-xl bg-botanical-50/70 border border-botanical-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
                  <span className="line-clamp-1">{activeBranch.landmark || activeBranch.city}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-botanical-50/70 border border-botanical-100 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
                  <span>Two-wheeler &amp; vehicle access</span>
                </div>
              </div>
            </div>

            {/* Bottom Book Slot CTA */}
            <div className="pt-5 mt-5 border-t border-botanical-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-botanical-900">Book at {activeBranch.name}</p>
                <p className="text-xs text-charcoal-500">Pick preferred date &amp; time slot</p>
              </div>
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-xs sm:text-sm shadow-botanical transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-herbal-300" />
                <span>Book Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
