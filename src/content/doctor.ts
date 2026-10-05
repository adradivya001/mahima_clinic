// ============================================================
// DOCTOR PROFILES DATA: Sri Mahima Multispeciality Homoeo Clinic
// ============================================================
import mahimaD1 from '@/assets/images/mahima_d1.png';
import mahimaD2 from '@/assets/images/mahima_d2.png';

export interface DoctorProfile {
  id: string;
  name: string;
  salutation: string;
  qualifications: string[];
  role: string;
  academicRole: string;
  academicInstitution: string;
  experienceText: string;
  consultationFee: string;
  image: string;
  specialities: string[];
  summary: string;
  bioParagraphs: string[];
  philosophy: string;
  clinicalFocus: {
    title: string;
    description: string;
    points: string[];
  }[];
  achievements: string[];
}

export const doctorsList: DoctorProfile[] = [
  {
    id: 'dr-pogula-nagendra-babu',
    name: 'Dr. Pogula Nagendra Babu',
    salutation: 'Dr.',
    qualifications: ['B.H.M.S.', 'M.D. (Hom)', 'M.B.A. (H.M.)'],
    role: 'Chief Homoeopathy Consultant',
    academicRole: 'Professor, Dept. of Organon of Medicine',
    academicInstitution: 'Anuradha Homoeopathic Medical College & Hospital, Bengaluru',
    experienceText: 'Senior Consultant & Professor',
    consultationFee: '₹100 (OPD Fee)',
    image: mahimaD1,
    specialities: [
      'Constitutional Case Taking',
      'Chronic Skin & Allergy Care',
      'Digestive & Gastric Disorders',
      'Long-standing Chronic Conditions',
    ],
    summary:
      'Chief Consultant at Sri Mahima Clinic and Professor of Organon of Medicine at Anuradha Homoeopathic Medical College, Bengaluru, specializing in constitutional classical homeopathy.',
    bioParagraphs: [
      'Dr. Pogula Nagendra Babu holds B.H.M.S., M.D. (Homoeopathy), and M.B.A. in Hospital Management. He serves as Chief Consultant at Sri Mahima Clinic and Professor at Anuradha Homoeopathic Medical College, Bengaluru.',
      'He specializes in classical constitutional homeopathy, root-cause diagnosis, and gentle personalized treatment for chronic health conditions.',
    ],
    philosophy:
      'Treating the individual as a whole to restore long-term health safely and naturally.',
    clinicalFocus: [
      {
        title: 'Constitutional Care',
        description: 'Classical Hahnemannian homeopathy for long-standing conditions.',
        points: ['Chronic Skin Conditions', 'Digestive Health', 'Allergies & Immunity', 'Chronic Illness'],
      },
    ],
    achievements: [
      'Chief Consultant at Sri Mahima Clinic, Anantapur',
      'Professor in Organon of Medicine, Bengaluru',
      'M.D. (Homoeopathy) & M.B.A. (Hospital Management)',
    ],
  },
  {
    id: 'dr-premajyothi-fraser',
    name: 'Dr. Premajyothi Fraser',
    salutation: 'Dr.',
    qualifications: ['B.H.M.S.', 'M.D. (Hom)', 'F.H.P.C.'],
    role: 'Homoeopathy & Wellness Physician',
    academicRole: 'Associate Professor, Dept. of Organon & Philosophy',
    academicInstitution: 'Anuradha Homoeopathic Medical College & Hospital, Bengaluru',
    experienceText: 'Wellness Physician & Associate Professor',
    consultationFee: '₹100 (OPD Fee)',
    image: mahimaD2,
    specialities: [
      'Women’s Health & Hormonal Balance',
      'PCOS & Menstrual Wellness',
      'Child & Family Healthcare',
      'Lifestyle & Palliative Care',
    ],
    summary:
      'Homoeopathy and wellness physician at Sri Mahima Clinic and Associate Professor at Anuradha Homoeopathic Medical College, Bengaluru, specializing in women’s and family health.',
    bioParagraphs: [
      'Dr. Premajyothi Fraser holds B.H.M.S., M.D. (Homoeopathy), and a Fellowship in Homoeopathic Palliative Care (F.H.P.C.).',
      'She combines academic expertise with compassionate clinical care for women’s hormonal health, pediatric wellness, and holistic lifestyle support.',
    ],
    philosophy:
      'Gentle, restorative care that supports the body’s natural vitality and emotional well-being.',
    clinicalFocus: [
      {
        title: 'Women & Family Wellness',
        description: 'Gentle, natural care for hormonal balance and family health.',
        points: ['PCOS & Hormonal Care', 'Pediatric Health', 'Stress & Vitality Support', 'Preventive Wellness'],
      },
    ],
    achievements: [
      'Homoeopathy & Wellness Physician at Sri Mahima Clinic',
      'Associate Professor in Organon & Philosophy, Bengaluru',
      'Fellowship in Homoeopathic Palliative Care (F.H.P.C.)',
    ],
  },
];

// Backward-compatible primary doctor shortcut for sections that need a lead
export const primaryDoctor = doctorsList[0];
