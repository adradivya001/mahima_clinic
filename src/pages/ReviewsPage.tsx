import { Helmet } from 'react-helmet-async';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { siteConfig } from '@/content/site.config';

export function ReviewsPage() {
  return (
    <div className="pt-24 bg-[#F7F5EE] min-h-screen">
      <Helmet>
        <title>Patient Reviews & Ratings | Sri Mahima Homoeo Clinic Anantapur</title>
        <meta
          name="description"
          content="Read authentic patient reviews for Sri Mahima Multispeciality Homoeo Clinic in Anantapur. 4.9★ rating from 920+ verified Google and Justdial reviews."
        />
      </Helmet>

      <ReviewsSection />
    </div>
  );
}
