import { Helmet } from 'react-helmet-async';
import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>Privacy Policy | {siteConfig.name}</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-botanical-200 shadow-soft">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-botanical-100 text-botanical-800 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-botanical-900">
              Privacy & Patient Confidentiality Policy
            </h1>
            <p className="text-xs text-charcoal-500">Effective Date: 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-charcoal-700 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">1. Patient Medical Information Discretion</h2>
            <p>
              At {siteConfig.name}, we treat all case notes, medical diagnoses, diagnostic reports, and personal contact details with absolute doctor-patient confidentiality according to standard medical ethics in India.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">2. Information We Collect</h2>
            <p>
              When requesting an appointment or contacting the clinic, we collect basic contact information (name, phone number, preferred time slot, and health concern) strictly to schedule your consultation and send appointment reminders.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">3. Third-Party Sharing</h2>
            <p>
              We do not sell, rent, or distribute any patient contact details or medical health histories to commercial third parties or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">4. Contact & Inquiries</h2>
            <p>
              For questions regarding our privacy practices, please contact the clinic desk at {siteConfig.contact.address.fullAddress} or phone {siteConfig.contact.phoneDisplay}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
