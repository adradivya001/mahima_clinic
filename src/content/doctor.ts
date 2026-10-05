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
    qualifications: ['B.H.M.S.', 'M.D. (Acu.)'],
    role: 'M.D. of Sri Mahima Group of Homoeo Clinics',
    leadershipRoles: [
      'M.D. of Sri Mahima Group of Homoeo Clinics',
      'Ex-RDT Medical Officer',
      'State General Secretary, N.A.M.A.',
      'State Joint Secretary, L.I.M.P.',
      '33 Years of Experience in Homoeopathy',
    ],
    experienceText: '33 Years of Experience in Homoeopathy',
    consultationFee: 'Affordable OPD',
    image: mahimaD3,
    specialities: [
      'Constitutional Classical Homoeopathy',
      'Clinical Acupuncture (M.D. Acu.)',
      'Chronic Disease Management',
      'Holistic Mind-Body Wellness',
    ],
    summary:
      'M.D. of Sri Mahima Group of Homoeo Clinics, Ex-RDT Medical Officer, State General Secretary of N.A.M.A., and State Joint Secretary of L.I.M.P., with 33 Years of Experience in Homoeopathy.',
    bioParagraphs: [
      'Dr. P. Kumaraiah holds qualifications in B.H.M.S. and M.D. (Acu.). He is the Managing Director (M.D.) of Sri Mahima Group of Homoeo Clinics, providing healthcare excellence for 33 years.',
      'He has served as an Ex-RDT Medical Officer, State General Secretary of N.A.M.A., and State Joint Secretary of L.I.M.P., holding esteemed leadership roles across state medical associations.',
      'His clinical practice blends in-depth constitutional homeopathy with therapeutic acupuncture for chronic health conditions and family wellness.',
    ],
    philosophy:
      'Providing gentle, holistic, root-cause healing that restores natural vitality and long-term health for every family.',
    clinicalFocus: [
      {
        title: 'Homoeopathy & Acupuncture',
        description: '33 years of proven clinical mastery in constitutional care and acupuncture therapy.',
        points: ['Chronic Illness Management', 'Acupuncture Pain Relief', 'Skin & Allergic Disorders', 'Digestive & Lifestyle Wellness'],
      },
    ],
    achievements: [
      'M.D. of Sri Mahima Group of Homoeo Clinics',
      'Ex-RDT Medical Officer',
      'State General Secretary, N.A.M.A.',
      'State Joint Secretary, L.I.M.P.',
      '33 Years of Experience in Homoeopathy',
    ],
  },
  {
    id: 'dr-pogula-nagendra-babu',
    name: 'Dr. Pogula Nagendra Babu',
    salutation: 'Dr.',
    qualifications: ['B.H.M.S.', 'M.D. (Hom.)', 'M.B.A. (H.M.)'],
    role: 'Chief Homoeopathy Consultant',
    academicRole: 'Professor – Department of Community Medicine',
    academicInstitution: 'Anuradha Homoeopathic Medical College & Hospital, Bengaluru',
    experienceText: 'Chief Consultant & Professor',
    consultationFee: 'Affordable OPD',
    image: mahimaD1,
    specialities: [
      'Constitutional Case Taking',
      'Chronic Skin & Allergy Care',
      'Digestive & Gastric Disorders',
      'Preventive & Community Healthcare',
    ],
    summary:
      'Chief Homoeopathy Consultant at Sri Mahima Multispeciality Homoeo Clinic and Professor in the Department of Community Medicine at Anuradha Homoeopathic Medical College & Hospital, Bengaluru.',
    bioParagraphs: [
      'Dr. Pogula Nagendra Babu holds qualifications in B.H.M.S., M.D. (Hom.), and M.B.A. (H.M.). He serves as Chief Homoeopathy Consultant at Sri Mahima Multispeciality Homoeo Clinic.',
      'He is a distinguished Professor in the Department of Community Medicine at Anuradha Homoeopathic Medical College & Hospital, Bengaluru, bridging clinical expertise with medical pedagogy.',
      'He specializes in constitutional classical homoeopathy, community healthcare, preventative wellness, and long-standing chronic illness management.',
    ],
    philosophy:
      'Treating the individual as a whole to restore long-term health safely and naturally through classical constitutional homeopathy.',
    clinicalFocus: [
      {
        title: 'Constitutional & Community Medicine',
        description: 'Classical Hahnemannian homeopathy and community wellness for chronic health conditions.',
        points: ['Chronic Skin Conditions', 'Digestive & Gastric Health', 'Allergies & Immunity', 'Preventive Wellness'],
      },
    ],
    achievements: [
      'Chief Homoeopathy Consultant – Sri Mahima Multispeciality Homoeo Clinic',
      'Professor – Department of Community Medicine, Anuradha Homoeopathic Medical College & Hospital, Bengaluru',
      'B.H.M.S., M.D. (Hom.), M.B.A. (H.M.)',
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
    consultationFee: 'Affordable OPD',
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

