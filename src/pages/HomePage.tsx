import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { About } from '@/components/sections/About';
import { AreasOfCare } from '@/components/sections/AreasOfCare';
import { DoctorHighlight } from '@/components/sections/DoctorHighlight';
import { WhyChooseMahima } from '@/components/sections/WhyChooseMahima';
import { PatientJourney } from '@/components/sections/PatientJourney';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { LocationContact } from '@/components/sections/LocationContact';
import { FAQSection } from '@/components/sections/FAQSection';
import { siteConfig } from '@/content/site.config';
import { primaryDoctor } from '@/content/doctor';

interface HomePageProps {
  onOpenAppointment: (treatment?: string) => void;
}

export function HomePage({ onOpenAppointment }: HomePageProps) {
  return (
    <>
      <Helmet>
        <title>{siteConfig.name} | Vidyuth Nagar Circle, Anantapur</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.seo.siteUrl} />
        <meta property="og:title" content={`${siteConfig.name} | ${siteConfig.tagline}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.seo.ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalClinic',
            name: siteConfig.name,
            alternateName: 'Sri Mahima Clinic Anantapur',
            url: siteConfig.seo.siteUrl,
            telephone: siteConfig.contact.phone,
            priceRange: '₹100',
            address: {
              '@type': 'PostalAddress',
              streetAddress: siteConfig.contact.address.fullAddress,
              addressLocality: siteConfig.contact.address.city,
              addressRegion: siteConfig.contact.address.state,
              postalCode: siteConfig.contact.address.postalCode,
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '14.6819',
              longitude: '77.6006',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '920',
              bestRating: '5',
              worstRating: '1',
            },
            physician: {
              '@type': 'Physician',
              name: primaryDoctor.name,
              jobTitle: primaryDoctor.role,
              medicalSpecialty: ['Homeopathy', 'Acupuncture'],
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '13:30',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '16:00',
                closes: '20:30',
              },
            ],
          })}
        </script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <Hero onOpenAppointment={() => onOpenAppointment('General Consultation')} />

      {/* 2. TRUST METRICS STRIP */}
      <TrustStrip />

      {/* 3. ABOUT THE CLINIC */}
      <About onOpenAppointment={() => onOpenAppointment('General Consultation')} />

      {/* 4. 6 AREAS OF CARE */}
      <AreasOfCare onOpenAppointment={onOpenAppointment} />

      {/* 5. MEET DR. POGULA KUMARAIAH */}
      <DoctorHighlight onOpenAppointment={() => onOpenAppointment('Doctor Consultation')} />

      {/* 6. WHY CHOOSE SRI MAHIMA */}
      <WhyChooseMahima />

      {/* 7. PATIENT JOURNEY (5 STEPS) */}
      <PatientJourney onOpenAppointment={() => onOpenAppointment('General Consultation')} />

      {/* 8. PATIENT REVIEWS & TRUST DASHBOARD */}
      <ReviewsSection />

      {/* 9. LOCATION & CONTACT */}
      <LocationContact onOpenAppointment={() => onOpenAppointment('General Consultation')} />

      {/* 11. FAQ ACCORDION */}
      <FAQSection />
    </>
  );
}
