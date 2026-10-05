import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, Calendar, Star, GraduationCap, ArrowRight, Phone, BookOpen, Sparkles, Clock, MapPin, Building2, User } from 'lucide-react';
import { doctorsList, type DoctorProfile } from '@/content/doctor';
import { siteConfig } from '@/content/site.config';
import { trackEvent } from '@/lib/analytics';

interface DoctorHighlightProps {
  onOpenAppointment: (doctorName?: string) => void;
}

export function DoctorHighlight({ onOpenAppointment }: DoctorHighlightProps) {
  return (
    <section id="doctor" className="py-20 lg:py-28 relative bg-[#FCFBF8] border-b border-botanical-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-botanical-600" />
            Our Medical Faculty &amp; Consultants
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-botanical-900 tracking-tight">
            Meet Our Doctors
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Distinguished homoeopathic clinicians combining advanced academic expertise in the Department of Organon of Medicine with compassionate clinical care at Sri Mahima Clinic.
          </p>
        </div>

        {/* 2 Doctor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {doctorsList.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-botanical-200/90 shadow-soft flex flex-col justify-between hover:border-botanical-300 transition-all"
            >
              <div>
                {/* Doctor Portrait and Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start mb-4">
                  
                  {/* Portrait (5 cols) */}
                  <div className="sm:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden bg-botanical-100 border border-botanical-200 aspect-[4/5] shadow-xs">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/70 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-2 left-2 right-2 bg-botanical-900/90 backdrop-blur-md px-2 py-0.5 rounded-lg text-center">
                        <span className="text-[10px] font-bold text-herbal-300">OPD Fee: ₹100</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Qualifications (7 cols) */}
                  <div className="sm:col-span-7 space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {doc.qualifications.map((q, qIdx) => (
                        <span
                          key={qIdx}
                          className="px-2 py-0.5 rounded-md bg-herbal-100 text-herbal-900 font-bold text-[10px] border border-herbal-200"
                        >
                          {q}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-botanical-900">
                      {doc.name}
                    </h3>
                    
                    <p className="text-xs font-bold text-botanical-700">
                      {doc.role}
                    </p>

                    <div className="p-2.5 rounded-xl bg-botanical-50 border border-botanical-100 text-[11px] text-charcoal-700">
                      <div className="flex items-center gap-1 font-bold text-botanical-800 text-[11px] mb-0.5">
                        <GraduationCap className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
                        <span>{doc.academicRole}</span>
                      </div>
                      <p className="text-[10px] text-charcoal-500">
                        {doc.academicInstitution}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Short Description */}
                <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                  {doc.summary}
                </p>

                {/* Clinical Focus Points */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-botanical-100">
                  <div className="flex flex-wrap gap-1.5">
                    {doc.specialities.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] text-charcoal-700 bg-botanical-50 px-2.5 py-1 rounded-lg border border-botanical-100 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-3 border-t border-botanical-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    trackEvent('doctor_card_book_click', { doctor: doc.name });
                    onOpenAppointment(`Consultation with ${doc.name}`);
                  }}
                  className="px-4 py-2 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-herbal-300" />
                  <span>Book Slot (₹100)</span>
                </button>

                <Link
                  to="/doctor"
                  className="text-xs font-bold text-botanical-700 hover:text-botanical-900 underline"
                >
                  Full Bio →
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
