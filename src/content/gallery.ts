// ============================================================
// CLINIC GALLERY DATA
// Sri Mahima Multispeciality Homoeo Clinic
// ============================================================
import mahimaBuilding from '@/assets/images/mahima_building.png';
import mahimaD1 from '@/assets/images/mahima_d1.png';
import mahimaD2 from '@/assets/images/mahima_d2.png';
import mahimaD3 from '@/assets/images/mahima_d3.png';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Exterior' | 'Reception' | 'Consultation' | 'Waiting Area';
  image: string;
  caption: string;
}

export const galleryCategories = ['All Areas', 'Clinic Exterior', 'Reception', 'Consultation', 'Waiting Area'] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Clinic Building & Main Entrance',
    category: 'Clinic Exterior',
    image: mahimaBuilding,
    caption: 'Prominent exterior facade and clinic entrance at 12/4/75 Vidyuth Nagar Circle, Anantapur.',
  },
  {
    id: 'gal-2',
    title: 'Dr. Pogula Kumaraiah Consultation Chamber',
    category: 'Consultation',
    image: mahimaD1,
    caption: 'Private consultation desk where Dr. Kumaraiah conducts detailed case evaluations.',
  },
  {
    id: 'gal-3',
    title: 'Clinical Diagnosis Chamber',
    category: 'Consultation',
    image: mahimaD2,
    caption: 'Equipped chamber for physical assessments, diagnostic evaluation, and constitutional checkups.',
  },
  {
    id: 'gal-4',
    title: 'Acupuncture & Holistic Therapy Suite',
    category: 'Consultation',
    image: mahimaD3,
    caption: 'Serene clinical setup designed for meridian acupuncture and pain management therapy.',
  },
  {
    id: 'gal-5',
    title: 'Reception & Patient Registration',
    category: 'Reception',
    image: mahimaD1,
    caption: 'Welcoming front desk for OPD appointment scheduling and guidance.',
  },
  {
    id: 'gal-6',
    title: 'Patient Waiting Lounge & Dispensary',
    category: 'Waiting Area',
    image: mahimaD2,
    caption: 'Comfortable, well-maintained waiting lounge and high-potency remedy dispensary.',
  },
];
