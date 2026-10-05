import { Helmet } from 'react-helmet-async';
import { LocationContact } from '@/components/sections/LocationContact';
import { FAQSection } from '@/components/sections/FAQSection';
import { siteConfig } from '@/content/site.config';

interface ContactPageProps {
  onOpenAppointment: (treatment?: string) => void;
}

export function ContactPage({ onOpenAppointment }: ContactPageProps) {
  return (
    <div className="pt-24 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>Contact &amp; Clinic Locations | Anantapur &amp; Bengaluru | Sri Mahima Clinic</title>
        <meta
          name="description"
          content="Visit Sri Mahima Multispeciality Homoeo Clinic at Vidyuth Nagar Circle, Anantapur and Marathahalli, Bengaluru. Call +91 85542 24899 for appointments & OPD consultations."
        />
      </Helmet>

      <LocationContact onOpenAppointment={() => onOpenAppointment('Contact Page')} />
      <FAQSection />
    </div>
  );
}
