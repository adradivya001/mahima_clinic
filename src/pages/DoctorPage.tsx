import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Calendar, Star, GraduationCap, ArrowRight, HeartPulse, BookOpen, Clock, MapPin, Sparkles, Phone, Building2 } from 'lucide-react';
import { doctorsList, type DoctorProfile } from '@/content/doctor';
import { siteConfig } from '@/content/site.config';
import { AnimatedCounter } from '@/components/effects/AnimatedCounter';

interface DoctorPageProps {
  onOpenAppointment: (treatment?: string) => void;
}

export function DoctorPage({ onOpenAppointment }: DoctorPageProps) {
  const [selectedDocId, setSelectedDocId] = useState<string>(doctorsList[0].id);

  const activeDoc = doctorsList.find((d) => d.id === selectedDocId) || doctorsList[0];

  return (
    <div className="pt-28 pb-20 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>Our Doctors | Dr. P. Kumaraiah, Dr. Nagendra Babu & Dr. Premajyothi | Sri Mahima Clinic</title>
        <meta
          name="description"
          content="Meet Dr. P. Kumaraiah (B.H.M.S, M.D. Acu. - 33 Years Exp), Dr. Pogula Nagendra Babu (B.H.M.S, M.D. Hom., M.B.A. H.M.), and Dr. Premajyothi Fraser (B.H.M.S, M.D., F.H.P.C.) at Sri Mahima Multispeciality Homoeo Clinic."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-botanical-600" />
            Medical Faculty &amp; Leadership
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-botanical-900 tracking-tight">
            Our Medical Team
          </h1>
          <p className="text-base text-charcoal-600 font-medium">
            Distinguished homeopathic physicians combining 33+ years of clinical leadership and academic expertise in the Department of Organon of Medicine with individualized patient care.
          </p>
        </div>

        {/* Doctor Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {doctorsList.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setSelectedDocId(doc.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                selectedDocId === doc.id
                  ? 'bg-botanical-700 text-white shadow-botanical scale-102'
                  : 'bg-white text-charcoal-700 hover:bg-botanical-50 border border-botanical-200'
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <span className="block">{doc.name}</span>
                <span className={`text-[10px] block ${selectedDocId === doc.id ? 'text-herbal-300' : 'text-charcoal-500'}`}>
                  {doc.role}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Doctor Deep-Dive Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-botanical-200 shadow-premium mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Portrait (4 cols) */}
            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden bg-botanical-100 border border-botanical-200 shadow-md aspect-[4/5]">
                <img
                  src={activeDoc.image}
                  alt={activeDoc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Quick Details (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap gap-2">
                {activeDoc.qualifications.map((q, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-herbal-100 text-herbal-900 font-bold text-xs border border-herbal-300">
                    {q}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-full bg-botanical-100 text-botanical-800 font-semibold text-xs border border-botanical-200">
                  {activeDoc.experienceText}
                </span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-botanical-900">
                  {activeDoc.name}
                </h2>
                <p className="text-sm sm:text-base font-bold text-botanical-700 mt-1">
                  {activeDoc.role}
                </p>
              </div>

              {/* Role & Leadership / Academic Banner */}
              {activeDoc.leadershipRoles ? (
                <div className="p-4 rounded-2xl bg-botanical-50 border border-botanical-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-xs text-botanical-900">
                    <Award className="w-4 h-4 text-botanical-700" />
                    <span>Key Professional Leadership &amp; Roles</span>
                  </div>
                  <div className="space-y-1 text-xs text-charcoal-800">
                    {activeDoc.leadershipRoles.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-botanical-50 border border-botanical-200 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs text-botanical-900">
                    <GraduationCap className="w-4 h-4 text-botanical-700" />
                    <span>Academic Role &amp; Faculty Affiliation</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal-900">
                    {activeDoc.academicRole}
                  </p>
                  <p className="text-xs text-charcoal-600">
                    {activeDoc.academicInstitution}
                  </p>
                </div>
              )}

              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {activeDoc.summary}
              </p>

              {/* Consultation CTA */}
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenAppointment(`Consultation with ${activeDoc.name}`)}
                  className="px-8 py-3.5 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-sm shadow-botanical transition-all inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-herbal-300" />
                  <span>Book Consultation with {activeDoc.name}</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-botanical-50 text-botanical-800 border border-botanical-200 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-botanical-600" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Bio & Academic Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bio (7 cols) */}
          <div className="lg:col-span-7 bg-[#FCFBF8] rounded-3xl p-6 sm:p-8 border border-botanical-200 shadow-soft space-y-4">
            <h3 className="text-xl font-serif font-bold text-botanical-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-botanical-700" /> Professional Background
            </h3>
            {activeDoc.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-sm text-charcoal-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Philosophy & Specialities (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-botanical-800 to-botanical-700 text-white rounded-3xl p-6 sm:p-8 shadow-botanical space-y-2">
              <div className="flex items-center gap-2 text-herbal-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Philosophy of Care
              </div>
              <p className="font-serif italic text-sm text-sage-100 leading-relaxed">
                "{activeDoc.philosophy}"
              </p>
            </div>

            <div className="bg-[#FCFBF8] rounded-3xl p-6 border border-botanical-200 shadow-soft space-y-3">
              <h4 className="text-sm font-bold text-botanical-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-botanical-700" /> Clinical Focus Areas
              </h4>
              <div className="space-y-2 text-xs text-charcoal-700">
                {activeDoc.specialities.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white border border-botanical-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-botanical-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
