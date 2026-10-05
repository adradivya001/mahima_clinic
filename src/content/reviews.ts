// ============================================================
// PATIENT REVIEWS & RATINGS DATA
// Sri Mahima Multispeciality Homoeo Clinic, Anantapur
// 4.9★ Google (920+ reviews) | 4.8★ Justdial (1,029+ ratings)
// ============================================================

export interface PatientReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: 'Google Review' | 'Justdial' | 'Verified Patient';
  condition: string;
  headline: string;
  content: string;
  verified: boolean;
  treatmentCategory: string;
}

export const reviewsSummary = {
  overallRating: 4.9,
  totalReviews: 920,
  justdialRating: 4.8,
  justdialCount: 1029,
  ohoRating: 4.8,
  ohoCount: 272,
  breakdown: [
    { stars: 5, percentage: 94 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 1 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ],
  highlights: [
    'Attentive & Caring Consultation',
    'High Success with Chronic Skin Concerns',
    '33+ Years of Established Experience',
    'Affordable & Transparent Consultation',
    'Comfortable Vidyuth Nagar Location',
  ],
};

export const patientReviews: PatientReview[] = [
  {
    id: 'rev-1',
    author: 'Venkata Narayana Swamy',
    location: 'Anantapur Town',
    rating: 5,
    date: '2 weeks ago',
    source: 'Google Review',
    condition: 'Chronic Gastric & Ulcerative Issue',
    headline: 'Exceptional diagnosis by Dr. Kumaraiah Sir',
    content:
      'Dr. Pogula Kumaraiah listens very patiently to the entire history without rushing. For my gastric complaint and recurring indigestion of 4 years, his medicines worked wonders within 2 months. The clinic is very clean and the affordable consultation fee is a true service to society.',
    verified: true,
    treatmentCategory: 'Chronic Conditions',
  },
  {
    id: 'rev-2',
    author: 'Sravani Reddy M.',
    location: 'Kalyandurg / Anantapur',
    rating: 5,
    date: '1 month ago',
    source: 'Google Review',
    condition: 'PCOS & Hormonal Irregularity',
    headline: 'Holistic care and genuine guidance for PCOS',
    content:
      'I was struggling with irregular cycles and severe acne due to PCOS for almost two years. Dr. Kumaraiah took a very thorough constitutional history. After 4 months of treatment, my cycle is completely regular and ultrasound showed great improvement. Very thankful to Sri Mahima Clinic!',
    verified: true,
    treatmentCategory: 'Women’s Health',
  },
  {
    id: 'rev-3',
    author: 'Rajasekhar Naidu',
    location: 'Vidyuth Nagar, Anantapur',
    rating: 5,
    date: '3 weeks ago',
    source: 'Justdial',
    condition: 'Psoriasis & Scalp Flaking',
    headline: 'Remarkable improvement in stubborn psoriasis',
    content:
      'Had severe skin patches on my elbows and scalp for over 6 years. Allopathy gave only temporary steroid relief. Dr. Kumaraiah explained the root cause patiently. Within three months of homeopathy and diet advice, 80% of scaling has cleared up. Highly recommended homoeopathy doctor in Anantapur.',
    verified: true,
    treatmentCategory: 'Skin & Hair',
  },
  {
    id: 'rev-4',
    author: 'Lakshmi Devi K.',
    location: 'Maruthi Nagar, Anantapur',
    rating: 5,
    date: '1 month ago',
    source: 'Google Review',
    condition: 'Chronic Migraine & Neck Pain',
    headline: 'Acupuncture + Homoeopathy relief for migraine',
    content:
      'Dr. Kumaraiah is both an experienced homoeopath and MD in Acupuncture. His combination treatment for my chronic migraine reduced my headache frequency drastically. The clinic staff is very polite and supportive.',
    verified: true,
    treatmentCategory: 'Pain & Lifestyle',
  },
  {
    id: 'rev-5',
    author: 'Mahesh Babu G.',
    location: 'Guntakal',
    rating: 5,
    date: '2 months ago',
    source: 'Google Review',
    condition: 'Childhood Allergic Wheezing',
    headline: 'Safe and sweet medicines for my 5-year-old child',
    content:
      'My son used to get frequent cold, cough and wheezing every winter. We consulted Dr. Kumaraiah at Sri Mahima Clinic. The sweet homeopathic pills are very easy for kids to take, and his immunity has improved remarkably this year. Thank you Doctor!',
    verified: true,
    treatmentCategory: 'Family & Child Care',
  },
  {
    id: 'rev-6',
    author: 'Prasad Rao B.',
    location: 'Dharmavaram',
    rating: 5,
    date: '2 months ago',
    source: 'Justdial',
    condition: 'Venous Ulcer & Joint Stiffness',
    headline: '33+ Years experience clearly reflects in his practice',
    content:
      'One of the senior-most practitioners in Rayalaseema. Very humble doctor who gives genuine health advice and never prescribes unnecessary medications. Vidyuth Nagar Circle clinic is easy to locate.',
    verified: true,
    treatmentCategory: 'Chronic Conditions',
  },
];
