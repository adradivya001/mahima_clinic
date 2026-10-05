// ============================================================
// DOCTOR PROFILES DATA: Sri Mahima Multispeciality Homoeo Clinic
// ============================================================
import mahimaD1 from '@/assets/images/mahima_d1.png';
import mahimaD2 from '@/assets/images/mahima_d2.png';
import mahimaD3 from '@/assets/images/mahima_d3.png';

export interface DoctorProfile {
  id: string;
  name: string;
  salutation: string;
  qualifications: string[];
  role: string;
  academicRole?: string;
  academicInstitution?: string;
  leadershipRoles?: string[];
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
    id: 'dr-p-kumaraiah',
    name: 'Dr. P. Kumaraiah',
    salutation: 'Dr.',
    qualifications: ['B.H.M.S.', 'M.D. (Acup.)'],
    role: 'M.D. – Sri Mahima Group of Homoeo Clinics',
    leadershipRoles: [
      'Ex-Rot Medical Officer',
      'State General Secretary – N.A.M.A.',
      'State Joint Secretary – I.M.P.',
    ],
    experienceText: '33+ Years of Experience in Homoeopathy',
    consultationFee: '₹100 (OPD Fee)',
    image: mahimaD1,
    specialities: [
      'Constitutional Classical Homoeopathy',
      'Clinical Acupuncture Treatment',
      'Chronic Disease Management',
      'Holistic Mind-Body Wellness',
    ],
    summary:
      'Managing Director of Sri Mahima Group of Homoeo Clinics, Ex-Rot Medical Officer, State General Secretary of N.A.M.A., and State Joint Secretary of I.M.P., with 33+ years of dedicated clinical experience in Homoeopathy.',
    bioParagraphs: [
      'Dr. P. Kumaraiah holds qualifications in B.H.M.S. and M.D. in Acupuncture. He is the Managing Director (M.D.) of Sri Mahima Group of Homoeo Clinics, providing healthcare excellence in Anantapur for over 33+ years.',
      'He has served as an Ex-Rot Medical Officer, State General Secretary of N.A.M.A. (National Ayush Medical Association), and State Joint Secretary of I.M.P., playing a leadership role in advancing homeopathic medical standards.',
      'His clinical practice blends in-depth constitutional homeopathy with targeted therapeutic acupuncture for long-standing chronic conditions and family wellness.',
    ],
    philosophy:
      'Providing gentle, holistic, root-cause healing that restores natural vitality and long-term health for every family.',
    clinicalFocus: [
      {
        title: 'Homoeopathy & Acupuncture',
        description: '33+ years of proven clinical mastery in constitutional care and acupuncture.',
        points: ['Chronic Illness Management', 'Acupuncture Pain Relief', 'Skin & Allergic Disorders', 'Digestive & Lifestyle Wellness'],
      },
    ],
    achievements: [
      'Managing Director (M.D.) – Sri Mahima Group of Homoeo Clinics',
      'State General Secretary – N.A.M.A.',
      'State Joint Secretary – I.M.P.',
      'Ex-Rot Medical Officer',
      '33+ Years of Dedicated Clinical Practice in Homoeopathy',
    ],
  },
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
    image: mahimaD3,
    specialities: [
      'Constitutional Case Taking',
      'Chronic Skin & Allergy Care',
      'Digestive & Gastric Disorders',
      'Long-standing Chronic Conditions',
    ],
    summary:
      'Chief Consultant at Sri Mahima Clinic and Professor of Organon of Medicine at Anuradha Homoeopathic Medical College, Bengaluru, specializing in constitutional classical homeopathy.',
    bioParagraphs: [
      'Dr. Pogula Nagendra Babu holds B.H.M.S., M.D. in Homoeopathy, and an M.B.A. in Hospital Management. He serves as Chief Consultant at Sri Mahima Clinic and Professor at Anuradha Homoeopathic Medical College, Bengaluru.',
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
      'Dr. Premajyothi Fraser holds B.H.M.S., M.D. in Homoeopathy, and a Fellowship in Homoeopathic Palliative Care (F.H.P.C.).',
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

// Primary doctor reference
export const primaryDoctor = doctorsList[0];

