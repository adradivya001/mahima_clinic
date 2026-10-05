import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { treatmentCategories } from '@/content/treatments';
import { primaryDoctor } from '@/content/doctor';
import { siteConfig } from '@/content/site.config';
import { ArrowLeft, CheckCircle2, Calendar, ShieldCheck, Sparkles, Phone, HelpCircle } from 'lucide-react';

interface TreatmentDetailPageProps {
  onOpenAppointment: (treatment?: string) => void;
}

export function TreatmentDetailPage({ onOpenAppointment }: TreatmentDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const treatment = treatmentCategories.find((t) => t.slug === slug);

  if (!treatment) {
    return (
      <div className="pt-36 pb-20 text-center bg-[#F7F5EE] min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif font-bold text-botanical-900 mb-2">Area of Care Not Found</h2>
        <p className="text-charcoal-600 mb-6 text-sm">The treatment category you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-3 rounded-full bg-botanical-700 text-white font-bold text-xs">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>{treatment.title} | Sri Mahima Multispeciality Homoeo Clinic Anantapur</title>
        <meta name="description" content={treatment.detailedDesc} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/#areas-of-care"
          className="inline-flex items-center gap-2 text-xs font-bold text-botanical-700 hover:text-botanical-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Areas of Care
        </Link>

        {/* Header Hero Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-botanical-200 shadow-premium mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-botanical-100 text-botanical-800 text-xs font-bold uppercase tracking-wider">
                {treatment.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-botanical-900 tracking-tight">
                {treatment.title}
              </h1>
              <p className="text-base font-medium text-herbal-700">
                {treatment.tagline}
              </p>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {treatment.detailedDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenAppointment(treatment.title)}
                  className="px-7 py-3.5 rounded-full bg-botanical-700 hover:bg-botanical-800 text-white font-bold text-sm shadow-botanical transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-herbal-300" />
                  <span>Book Consultation for {treatment.title}</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-botanical-50 text-botanical-800 border border-botanical-200 font-bold text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-botanical-600" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative rounded-3xl overflow-hidden bg-botanical-100 border border-botanical-200 aspect-[4/4] shadow-md">
                <img
                  src={treatment.heroImage}
                  alt={treatment.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Specific Conditions Breakdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-botanical-900 mb-6 text-center sm:text-left">
            Specific Conditions Treated &amp; Our Clinical Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatment.conditions.map((cond, idx) => (
              <div
                key={idx}
                className="bg-[#FCFBF8] rounded-3xl p-6 border border-botanical-200 shadow-soft space-y-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-botanical-100 text-botanical-700 flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-botanical-900">
                    {cond.name}
                  </h3>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  <strong className="text-charcoal-800">Symptom Presentation:</strong> {cond.description}
                </p>

                <div className="p-3 rounded-2xl bg-white border border-botanical-100 text-xs text-botanical-900 leading-relaxed">
                  <span className="font-bold text-botanical-700 block mb-1">Our Homoeopathic / Meridian Approach:</span>
                  {cond.approach}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits Strip */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-botanical-200 shadow-soft mb-12">
          <h3 className="text-lg font-serif font-bold text-botanical-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-botanical-700" /> Why Choose Homeopathy &amp; Acupuncture for {treatment.title}?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {treatment.keyBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700 bg-botanical-50/50 p-3 rounded-2xl border border-botanical-100">
                <CheckCircle2 className="w-4 h-4 text-botanical-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Specific FAQ if available */}
        {treatment.faq.length > 0 && (
          <div className="bg-[#FCFBF8] rounded-3xl p-6 sm:p-8 border border-botanical-200 shadow-soft mb-12">
            <h3 className="text-lg font-serif font-bold text-botanical-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-botanical-700" /> Common Questions on {treatment.title}
            </h3>
            <div className="space-y-4">
              {treatment.faq.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-botanical-100 space-y-1.5">
                  <h4 className="text-sm font-bold text-botanical-900">{item.question}</h4>
                  <p className="text-xs text-charcoal-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
