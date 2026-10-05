// ============================================================
// AREAS OF CARE / TREATMENT CATEGORIES
// Structured for Sri Mahima Multispeciality Homoeo Clinic
// ============================================================

export interface TreatmentCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  iconName: string; // Lucide icon name
  badge: string;
  shortDesc: string;
  detailedDesc: string;
  heroImage: string;
  conditions: {
    name: string;
    description: string;
    approach: string;
  }[];
  keyBenefits: string[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: 'chronic-conditions',
    slug: 'chronic-conditions',
    title: 'Chronic Conditions',
    tagline: 'Root-Cause Resolution for Long-Standing Health Concerns',
    iconName: 'Leaf',
    badge: '🌿 Chronic Care',
    shortDesc: 'Personalized holistic management for lifestyle disorders, gastrointestinal inflammation, and recurring respiratory concerns.',
    detailedDesc:
      'Chronic ailments develop gradually and often resist conventional single-symptom approaches. At Sri Mahima Clinic, Dr. Pogula Kumaraiah performs an exhaustive constitutional evaluation to identify underlying metabolic imbalances, immune triggers, and hereditary tendencies.',
    heroImage: '/assets/images/mahima_d2.png',
    conditions: [
      {
        name: 'Digestive & Gastric Conditions',
        description: 'Chronic acidity, GERD, irritable bowel issues, and slow digestion.',
        approach: 'Formulating remedies that normalize digestive secretions and soothe gastrointestinal mucosal lining naturally.',
      },
      {
        name: 'Ulcerative Colitis & IBD Support',
        description: 'Recurrent bowel inflammation, bleeding tendencies, and abdominal spasms.',
        approach: 'Constitutional homoeopathy to calm hyperactive immune response and enhance intestinal tissue repair.',
      },
      {
        name: 'Venous Ulcer & Circulation Care',
        description: 'Chronic lower limb ulcers, varicose venous congestion, and impaired tissue healing.',
        approach: 'Dual protocols of vascular-supportive remedies combined with acupuncture to improve peripheral blood flow.',
      },
      {
        name: 'Respiratory & Allergic Tendencies',
        description: 'Recurrent bronchitis, allergic rhinitis, wheezing, and dust sensitivity.',
        approach: 'Strengthening bronchial immunity and dampening histamine hyper-reactivity without causing drowsiness.',
      },
    ],
    keyBenefits: [
      'Comprehensive constitutional assessment rather than surface suppression',
      'Gentle remedies with zero risk of gastrointestinal irritation',
      'Supportive lifestyle and dietary modifications provided alongside',
      'Continuous progress tracking and dosage fine-tuning',
    ],
    faq: [
      {
        question: 'How long does it take to see results in chronic digestive problems?',
        answer: 'Most patients notice improvements in acute symptoms (bloating, pain, regularity) within 2–4 weeks, while deep cellular healing continues over months.',
      },
      {
        question: 'Can I take homoeopathic medicines alongside my current medications?',
        answer: 'Yes. Homoeopathic dilutions work safely in tandem with conventional medications. Dr. Kumaraiah carefully reviews your current prescriptions during the consultation.',
      },
    ],
  },
  {
    id: 'skin-hair',
    slug: 'skin-hair',
    title: 'Skin & Hair Wellness',
    tagline: 'Clear, Healthy Skin from Within',
    iconName: 'Sparkles',
    badge: '✨ Skin & Hair',
    shortDesc: 'Gentle, internal healing for psoriasis, eczema, vitiligo, lichen planus, and persistent hair fall.',
    detailedDesc:
      'In homoeopathy, skin is understood as a vital reflective organ. Rather than applying harsh topical steroids that only suppress eruptions temporarily, our clinic investigates underlying immune triggers, stress levels, and toxicity.',
    heroImage: '/assets/images/mahima_d3.png',
    conditions: [
      {
        name: 'Psoriasis & Scalp Plaques',
        description: 'Flaking, silvery scaling, itching, and red inflamed patches.',
        approach: 'Regulating autoimmune skin-cell turnover rates and restoring epidermal barrier integrity.',
      },
      {
        name: 'Eczema & Atopic Dermatitis',
        description: 'Intense pruritus, weeping patches, allergic flares, and extreme dryness.',
        approach: 'Detoxifying remedies that soothe allergic inflammation and strengthen sensitive skin resilience.',
      },
      {
        name: 'Vitiligo & Hypopigmentation',
        description: 'Depigmented skin patches and progressive loss of melanin.',
        approach: 'Holistic stimulus to melanocyte reactivation and autoimmune stabilization.',
      },
      {
        name: 'Lichen Planus',
        description: 'Purplish, polygonal, itchy papules on skin, wrists, ankles, or oral mucosa.',
        approach: 'Individualized constitutional remedies chosen specifically for your psychological and physical symptom profile.',
      },
      {
        name: 'Hair Fall & Alopecia Care',
        description: 'Diffuse thinning, patchy hair fall, and scalp dandruff issues.',
        approach: 'Nutritional balance, scalp meridian stimulation, and natural root-strengthening homoeopathic remedies.',
      },
    ],
    keyBenefits: [
      'No dependence on corticosteroid creams or harsh topical agents',
      'Addresses underlying stress and immune system factors',
      'Effective long-term relief with reduced frequency of seasonal flare-ups',
      'Safe for delicate facial skin, children, and seniors',
    ],
    faq: [
      {
        question: 'Will skin conditions get worse before getting better in homoeopathy?',
        answer: 'With precise, individualized potency selection, aggravations are rare. Any mild temporary change is an indicator of deep internal cleansing, guided closely by the doctor.',
      },
    ],
  },
  {
    id: 'womens-health',
    slug: 'womens-health',
    title: 'Women’s Health & Fertility',
    tagline: 'Empowering Natural Hormonal Harmony Across Every Life Stage',
    iconName: 'HeartHandshake',
    badge: '👩 Women’s Health',
    shortDesc: 'Personalized care for PCOS/PCOD, irregular cycles, hormonal imbalances, and supportive fertility care.',
    detailedDesc:
      'Women’s bodies undergo complex hormonal transitions. Sri Mahima Clinic provides a compassionate, confidential environment to address reproductive, hormonal, and emotional health challenges without aggressive synthetic hormones.',
    heroImage: '/assets/images/mahima_d1.png',
    conditions: [
      {
        name: 'PCOS & PCOD Care',
        description: 'Ovarian cysts, irregular or delayed menses, facial hair growth, and metabolic weight changes.',
        approach: 'Restoring ovarian rhythm and insulin sensitivity through targeted constitutional medicine.',
      },
      {
        name: 'Menstrual Disorders & Pain',
        description: 'Dysmenorrhea, heavy bleeding (menorrhagia), severe cramps, and premenstrual syndrome (PMS).',
        approach: 'Balancing pelvic circulation and soothing uterine muscle spasms naturally.',
      },
      {
        name: 'Supportive Fertility Care',
        description: 'Unexplained subfertility, ovulatory issues, and pre-conception wellness.',
        approach: 'Comprehensive mind-body harmonization, follicular optimization, and meridian acupuncture support.',
      },
      {
        name: 'Perimenopause & Mood Support',
        description: 'Hot flashes, sleep disturbances, mood swings, and bone density maintenance.',
        approach: 'Gentle phyto-homoeopathic remedies that ease endocrine transitions smoothly.',
      },
    ],
    keyBenefits: [
      'Non-hormonal, non-invasive therapeutic approaches',
      'Support for emotional equilibrium and stress reduction',
      'Empathetic, unhurried consultations in total privacy',
      'Integration of acupuncture for enhanced pelvic energy flow',
    ],
    faq: [
      {
        question: 'How does homoeopathy help with PCOS cysts?',
        answer: 'Constitutional homoeopathy works on the hypothalamic-pituitary-ovarian axis to encourage regular natural ovulation and gradual regression of follicular cysts.',
      },
    ],
  },
  {
    id: 'pain-lifestyle',
    slug: 'pain-lifestyle',
    title: 'Pain & Lifestyle Management',
    tagline: 'Restore Mobility, Relieve Pain, Reclaim Vitality',
    iconName: 'Activity',
    badge: '🧠 Pain & Lifestyle',
    shortDesc: 'Integrated homoeopathy and clinical acupuncture for migraines, arthritis, sciatica, and chronic fatigue.',
    detailedDesc:
      'Chronic pain limits everyday joy. By integrating Dr. Kumaraiah’s 33+ years of homeopathy with his MD in clinical acupuncture, patients benefit from dual pain modulation that acts locally and systemically.',
    heroImage: '/assets/images/mahima_d2.png',
    conditions: [
      {
        name: 'Migraine & Tension Headaches',
        description: 'Unilateral pulsating headaches, visual auras, nausea, and light sensitivity.',
        approach: 'Vascular stabilization with homoeopathy + immediate trigger-point release through acupuncture.',
      },
      {
        name: 'Joint & Rheumatic Discomfort',
        description: 'Osteoarthritis, knee stiffness, cervical spondylosis, and frozen shoulder.',
        approach: 'Anti-inflammatory natural remedies that reduce joint friction and improve range of motion.',
      },
      {
        name: 'Sciatica & Nerve Compression',
        description: 'Radiating leg pain, lower back stiffness, and numbness.',
        approach: 'Nerve-supportive homoeopathic potencies coupled with precision meridian needle therapy.',
      },
      {
        name: 'Metabolic & Obesity-Related Stress',
        description: 'Sluggish metabolic rate, chronic lethargy, and stress-induced weight gain.',
        approach: 'Metabolic harmonization, appetite regulation, and stress-relief protocols.',
      },
    ],
    keyBenefits: [
      'Dual-action benefit of Homeopathy plus MD-level Acupuncture',
      'Zero gastrointestinal side-effects typical of conventional NSAID painkillers',
      'Long-term reduction in headache and spasm recurrence',
      'Improves sleep quality and daily physical mobility',
    ],
    faq: [
      {
        question: 'Does clinical acupuncture hurt?',
        answer: 'No. Acupuncture utilizes hair-thin, ultra-fine sterile needles. Most patients feel only a gentle warmth or tingling sensation, often falling asleep during treatment.',
      },
    ],
  },
  {
    id: 'family-child-care',
    slug: 'family-child-care',
    title: 'Family & Pediatric Wellness',
    tagline: 'Gentle, Sweet-Tasting Care for Every Family Member',
    iconName: 'Smile',
    badge: '👶 Family & Child Care',
    shortDesc: 'Gentle pediatric care for recurrent coughs, poor appetite, immunity concerns, and elder wellness.',
    detailedDesc:
      'Homeopathy is beloved by parents because the natural sugar globules are easy to administer and free from harsh chemicals. Dr. Kumaraiah treats entire multigenerational families with warmth and patience.',
    heroImage: '/assets/images/mahima_d3.png',
    conditions: [
      {
        name: 'Pediatric Immunity & Recurrent Colds',
        description: 'Frequent throat infections, tonsillitis, seasonal allergies, and earaches in children.',
        approach: 'Building strong baseline immunity naturally without frequent antibiotic courses.',
      },
      {
        name: 'Childhood Digestive Complaints',
        description: 'Colic, constipation, poor appetite, and intestinal worm infestations.',
        approach: 'Sweet, natural remedies that soothe infant and child digestion effortlessly.',
      },
      {
        name: 'Elderly Wellness & Vitality',
        description: 'Age-related weakness, sleep irregularities, mild memory lapses, and digestive sluggishness.',
        approach: 'Gentle tonic remedies that support longevity, vitality, and emotional serenity in seniors.',
      },
    ],
    keyBenefits: [
      '100% natural, sweet globules loved by toddlers and children',
      'No chemical drowsiness, grogginess, or gastrointestinal upset',
      'Safe for infants, nursing mothers, and senior family members',
      'Affordable consultation fee of just ₹100 for family accessibility',
    ],
    faq: [
      {
        question: 'Are homoeopathic remedies safe for infants and toddlers?',
        answer: 'Yes, homoeopathic remedies are exceptionally gentle, non-toxic, and safe for babies from the earliest months of life.',
      },
    ],
  },
  {
    id: 'holistic-therapies',
    slug: 'holistic-therapies',
    title: 'Holistic Homoeopathy & Acupuncture',
    tagline: 'Synergistic Healing Modalities under One Roof',
    iconName: 'Feather',
    badge: '🌱 Holistic Therapies',
    shortDesc: 'Synergizing classical constitutional homoeopathy with clinical acupuncture for deep systemic equilibrium.',
    detailedDesc:
      'Sri Mahima Clinic is one of the few clinics in Anantapur where classical Hahnemannian homoeopathy is combined with authentic acupuncture practice, offering patients an unparalleled holistic healing framework.',
    heroImage: '/assets/images/mahima_d1.png',
    conditions: [
      {
        name: 'Classical Constitutional Homoeopathy',
        description: 'Selecting a single, profound constitutional remedy that matches your total mind-body makeup.',
        approach: 'Detailed 45–60 minute initial case history analysis conducted personally by Dr. Kumaraiah.',
      },
      {
        name: 'MD-Level Clinical Acupuncture',
        description: 'Stimulation of specific anatomical bio-meridians to release endorphins and restore Chi energy.',
        approach: 'Sterile single-use micro-needles applied in a calm, therapeutic clinic setting.',
      },
      {
        name: 'Mind-Body Stress Relief',
        description: 'Chronic anxiety, insomnia, burnout, and psychosomatic bodily symptoms.',
        approach: 'Harmonizing autonomic nervous system tone to promote restful sleep and emotional equilibrium.',
      },
    ],
    keyBenefits: [
      'Led personally by Dr. Pogula Kumaraiah (BHMS, MD - Acupuncture)',
      'Time-tested combination of internal remedies and bio-meridian stimulation',
      'No dependency-forming medications',
      'Focus on long-term preventive health and vitality',
    ],
    faq: [
      {
        question: 'Do I have to do acupuncture if I only want homoeopathic medicines?',
        answer: 'No. Acupuncture is recommended only when clinically beneficial and upon patient comfort. You can choose purely homoeopathic treatment if preferred.',
      },
    ],
  },
];
