export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Perimenopause' | 'Hormone Therapy' | 'Nutrition & Gut' | 'Sleep & Mind' | 'Bone & Heart Health';
  categoryColor: 'mauve' | 'slate' | 'gold' | 'sage';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  medicallyReviewedBy?: string;
  imageUrl: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Navigating Perimenopause Brain Fog: What the Latest Neuro-Endocrine Research Reveals',
    slug: 'perimenopause-brain-fog-neuroscience',
    excerpt: 'Estrogen receptors in the brain play a key role in glucose metabolism and cognitive focus. Learn practical, physician-backed strategies to regain clarity.',
    category: 'Perimenopause',
    categoryColor: 'mauve',
    readTime: '6 min read',
    publishDate: 'August 18, 2026',
    author: {
      name: 'Dr. Elena Vance, MD',
      role: 'Board-Certified OB/GYN & NAMS Certified Specialist',
      avatar: 'https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=240',
    },
    medicallyReviewedBy: 'Dr. Sarah Jenkins, MD, FACOG',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=900',
    featured: true,
  },
  {
    id: '2',
    title: 'Hormone Replacement Therapy (HRT): An Evidence-Based Guide to Risks, Benefits & Timing',
    slug: 'hrt-evidence-based-guide',
    excerpt: 'Separating 2002 WHI study misconceptions from modern transdermal bioidentical estradiol and micronized progesterone therapies.',
    category: 'Hormone Therapy',
    categoryColor: 'slate',
    readTime: '8 min read',
    publishDate: 'August 14, 2026',
    author: {
      name: 'Dr. Miriam Campbell, MD',
      role: 'Endocrinologist & Reproductive Biologist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240',
    },
    medicallyReviewedBy: 'Dr. Elena Vance, MD',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: '3',
    title: 'Cooling the Flare: Non-Hormonal Approaches for Night Sweats and Vasomotor Symptoms',
    slug: 'cooling-hot-flashes-non-hormonal',
    excerpt: 'From neurokinin 3 (NK3) receptor antagonists to lifestyle adjustments, acupuncture, and paced respiration practices that actually work.',
    category: 'Perimenopause',
    categoryColor: 'mauve',
    readTime: '5 min read',
    publishDate: 'August 11, 2026',
    author: {
      name: 'Claire Thornton, MS, RD',
      role: 'Women’s Integrative Health Nutritionist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240',
    },
    imageUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: '4',
    title: 'The Estrobolome & Gut Health: Why Microbiome Balance is Crucial During the Menopause Transition',
    slug: 'estrobolome-gut-microbiome-menopause',
    excerpt: 'How specific bacterial genes modulate circulating estrogens and influence inflammation, mood stability, and abdominal weight retention.',
    category: 'Nutrition & Gut',
    categoryColor: 'sage',
    readTime: '7 min read',
    publishDate: 'August 06, 2026',
    author: {
      name: 'Claire Thornton, MS, RD',
      role: 'Women’s Integrative Health Nutritionist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=240',
    },
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: '5',
    title: 'Protecting Bone Density After 40: DEXA Scans, Resistance Training, and Micronutrient Synergy',
    slug: 'bone-density-dexa-resistance-training',
    excerpt: 'Why calcium alone isn’t enough. Understanding Vitamin K2, Magnesium Glycinate, Vitamin D3, and progressive mechanical loading.',
    category: 'Bone & Heart Health',
    categoryColor: 'gold',
    readTime: '6 min read',
    publishDate: 'August 02, 2026',
    author: {
      name: 'Dr. Miriam Campbell, MD',
      role: 'Endocrinologist & Reproductive Biologist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=240',
    },
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: '6',
    title: 'Sleep Architecture Restoration: Overcoming 3 AM Wakeups in Perimenopause',
    slug: 'sleep-restoration-3am-wakeups',
    excerpt: 'Progesterone drops directly impact GABAergic sleep pathways. Discover sleep hygiene protocols and evidence-based supplementation.',
    category: 'Sleep & Mind',
    categoryColor: 'slate',
    readTime: '5 min read',
    publishDate: 'July 28, 2026',
    author: {
      name: 'Dr. Elena Vance, MD',
      role: 'Board-Certified OB/GYN & NAMS Certified Specialist',
      avatar: 'https://images.unsplash.com/photo-1594824813589-3221b61ecbf5?auto=format&fit=crop&q=80&w=240',
    },
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=900',
  },
];

export const CATEGORIES = [
  { name: 'Perimenopause Symptoms', count: 28, color: 'mauve' },
  { name: 'Hormone Replacement (HRT)', count: 19, color: 'slate' },
  { name: 'Nutrition & Gut Health', count: 24, color: 'sage' },
  { name: 'Sleep & Mood Regulation', count: 17, color: 'slate' },
  { name: 'Bone & Cardiovascular Health', count: 14, color: 'gold' },
  { name: 'Sexual Wellness & Pelvic Care', count: 11, color: 'mauve' },
];

export const POPULAR_POSTS = [
  {
    title: 'Top 7 Perimenopause Symptoms Women Often Miss in Their 30s & 40s',
    readTime: '4 min read',
    url: '#',
    img: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=200',
  },
  {
    title: 'Bioidentical vs Synthetic Hormones: A Clinician’s Direct Comparison',
    readTime: '6 min read',
    url: '#',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200',
  },
  {
    title: 'Magnesium L-Threonate vs Glycinate for Midlife Anxiety & Sleep',
    readTime: '5 min read',
    url: '#',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=200',
  },
];
