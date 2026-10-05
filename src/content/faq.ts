// ============================================================
// FREQUENTLY ASKED QUESTIONS (FAQ)
// Sri Mahima Multispeciality Homoeo Clinic
// ============================================================

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = ['All Questions', 'Consultation & Fees', 'Homeopathy & Safety', 'Acupuncture Care', 'Clinic Visit'];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Consultation & Fees',
    question: 'What is the consultation fee at Sri Mahima Homoeo Clinic?',
    answer:
      'The clinic maintains highly accessible, nominal consultation charges for doctor evaluations. Our commitment is to ensure trusted, high-quality healthcare remains affordable for all families.',
  },
  {
    id: 'faq-2',
    category: 'Consultation & Fees',
    question: 'Do I need to take an appointment before visiting the clinic?',
    answer:
      'While walk-in patients are warmly accommodated during clinic hours, we recommend calling ahead (+91 85542 24899) or booking an appointment online to check availability and minimize your waiting time.',
  },
  {
    id: 'faq-3',
    category: 'Clinic Visit',
    question: 'What are the clinic working hours and location?',
    answer:
      'The clinic operates Monday to Saturday with both Morning (approx. 9:00 AM – 1:30 PM) and Evening (approx. 4:00 PM – 8:30 PM) consultation sessions. We are conveniently situated at 12/4/75, Vidyuth Nagar Circle, Anantapur (near Anantapur–Bangalore Road area).',
  },
  {
    id: 'faq-4',
    category: 'Homeopathy & Safety',
    question: 'Are homeopathic remedies safe and free from harsh side effects?',
    answer:
      'Yes. Homeopathic medicines are prepared from highly diluted natural substances according to strict pharmacopoeial standards. They are non-toxic, non-habit forming, and gentle on the stomach, making them exceptionally safe for infants, pregnant women, and elderly patients.',
  },
  {
    id: 'faq-5',
    category: 'Homeopathy & Safety',
    question: 'Can I continue my regular allopathic medicines while taking homeopathic remedies?',
    answer:
      'In most cases, yes. Homeopathic constitutional remedies do not chemically interact with allopathic drugs. Dr. Kumaraiah will review your complete medical prescription and guide you on spacing the medicines safely.',
  },
  {
    id: 'faq-6',
    category: 'Acupuncture Care',
    question: 'What conditions benefit from clinical acupuncture at the clinic?',
    answer:
      'Dr. Pogula Kumaraiah holds an MD in Acupuncture. Clinical acupuncture is combined with homeopathy for conditions like chronic migraine, cervical & lumbar pain, sciatica, osteoarthritis stiffness, stress relief, and peripheral circulatory issues like venous ulcers.',
  },
  {
    id: 'faq-7',
    category: 'Homeopathy & Safety',
    question: 'How long does a typical course of homeopathic treatment take?',
    answer:
      'The duration depends on whether the condition is acute or chronic. Acute conditions (such as cold, flu, digestive upset) often respond in a few days. Deep chronic conditions (psoriasis, PCOS, colitis) typically show steady progressive improvement over 2 to 6 months.',
  },
  {
    id: 'faq-8',
    category: 'Clinic Visit',
    question: 'Is parking available at the Vidyuth Nagar Circle location?',
    answer:
      'Yes, convenient street-level two-wheeler and vehicle parking is accessible near the Vidyuth Nagar Circle clinic entrance.',
  },
];
