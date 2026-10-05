import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

export function TermsPage() {
  return (
    <div className="pt-32 pb-20 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>Terms of Care & Advisory | {siteConfig.name}</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-botanical-200 shadow-soft">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-botanical-100 text-botanical-800 flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-botanical-900">
              Terms of Care & Medical Advisory
            </h1>
            <p className="text-xs text-charcoal-500">Effective Date: 2026</p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-charcoal-700 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">1. Informational Purpose</h2>
            <p>
              Information presented on this website is for educational and appointment coordination purposes. It does not substitute for an in-person clinical diagnosis or examination by a registered medical practitioner.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">2. Consultation & Prescriptions</h2>
            <p>
              Homeopathic constitutional remedies and acupuncture treatments are administered following direct physical case-taking with Dr. Pogula Kumaraiah (BHMS, MD Acupuncture) at our Vidyuth Nagar clinic.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-botanical-900 mb-2">3. Emergency Situations</h2>
            <p>
              For life-threatening acute medical emergencies (severe chest trauma, acute poisoning, severe stroke), patients must immediately access acute critical care facilities or call 108.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
