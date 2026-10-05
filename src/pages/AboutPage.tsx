import { Helmet } from 'react-helmet-async';
import { About } from '@/components/sections/About';
import { WhyChooseMahima } from '@/components/sections/WhyChooseMahima';
import { siteConfig } from '@/content/site.config';

interface AboutPageProps {
  onOpenAppointment: (treatment?: string) => void;
}

export function AboutPage({ onOpenAppointment }: AboutPageProps) {
  return (
    <div className="pt-24 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>About Sri Mahima Multispeciality Homoeo Clinic | Anantapur</title>
        <meta name="description" content={siteConfig.aboutSummary} />
      </Helmet>

      <About onOpenAppointment={() => onOpenAppointment('About Page')} />
      <WhyChooseMahima />
    </div>
  );
}
