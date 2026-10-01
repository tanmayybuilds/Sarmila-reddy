import { ServiceItem, TargetAudience, WhyPillar, Testimonial, FAQItem, ColorTheme } from '../types';

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: 'rose-champagne',
    name: 'Champagne Gold & Editorial Espresso',
    tagline: 'Quiet luxury, warm alabaster linen, and rich champagne gold inspired by premier wealth advisory firms',
    primary: '#1F1B18', // Deep tailored espresso obsidian
    primaryHover: '#332E29',
    primaryLight: '#F5F2EB', // Soft warm ivory linen
    accent: '#A87D38', // Polished warm champagne gold
    accentLight: '#FAF6EE',
    bgLight: '#FAF8F5', // Luminous alabaster
    surface: '#FFFFFF',
    textDark: '#1A1816',
    textMuted: '#635B53',
    border: '#E7E2D8',
    badgeBg: '#F3EFE7',
    badgeText: '#7A5B27',
  },
  {
    id: 'evergreen-sand',
    name: 'Canadian Forest Pine & Harvest Brass',
    tagline: 'Grounded in Canadian stability, security, and tranquil wealth compounding',
    primary: '#1A3B2F', // Deep Canadian pine
    primaryHover: '#132C23',
    primaryLight: '#F0F5F2',
    accent: '#B38E36', // Harvest brass / gold
    accentLight: '#FAF7EE',
    bgLight: '#F7F9F7',
    surface: '#FFFFFF',
    textDark: '#13211A',
    textMuted: '#4E6156',
    border: '#DAE3DC',
    badgeBg: '#EAF2ED',
    badgeText: '#1A3B2F',
  },
  {
    id: 'sapphire-alabaster',
    name: 'Sovereign Navy & Classic Brass',
    tagline: 'Crisp, timeless institutional prestige with warm fiduciary undertones',
    primary: '#14253D', // Deep sovereign navy
    primaryHover: '#0E1B2D',
    primaryLight: '#EFF4FA',
    accent: '#C2953C', // Classic brass gold
    accentLight: '#FAF6EC',
    bgLight: '#F8FAFC',
    surface: '#FFFFFF',
    textDark: '#0F1A2B',
    textMuted: '#4E5F78',
    border: '#D8E2ED',
    badgeBg: '#E7EFF8',
    badgeText: '#14253D',
  },
  {
    id: 'cashmere-amber',
    name: 'Rich Cognac & Cashmere Linen',
    tagline: 'Warm, radiant, and empowering: tailored executive warmth and luxury',
    primary: '#854E18', // Warm cognac bronze
    primaryHover: '#6B3E12',
    primaryLight: '#FAF2E8',
    accent: '#694C35', // Truffle bronze
    accentLight: '#F7F2EB',
    bgLight: '#FAF7F2',
    surface: '#FFFFFF',
    textDark: '#241B13',
    textMuted: '#695B4E',
    border: '#E8DFD3',
    badgeBg: '#F3E9DA',
    badgeText: '#854E18',
  }
];

export const ADVISOR_PROFILE = {
  name: 'Sarmila Reddy',
  credentialsTitle: 'Licensed Financial Advisor & Entrepreneur',
  license: 'LLQP Certified • Life Insurance & Living Benefits Licensed in Canada',
  territory: 'Proudly serving individuals and families coast-to-coast across Canada',
  tagline: 'Guiding you today for a stronger tomorrow.',
  subTagline: 'Plan Smart. Live Confident. Build Your Legacy.',
  calendlyUrl: 'https://calendly.com/sarmilareddy13',
  calendlyHandle: 'sarmilareddy13',
  website: 'sarmilareddy.ca',
  instagram: '@sarmilareddy.ca',
  phone: '+1 (604) 555-0192', // Canadian formatted placeholder
  email: 'sarmila@sarmilareddy.ca',
  location: 'British Columbia & Across Canada',
  consultationFee: '100% Free / No Consultation Fees',
  images: {
    logo: `${import.meta.env.BASE_URL}images/logo.png`,
    hero: `${import.meta.env.BASE_URL}images/sarmila-desk-executive.jpg`,
    about: `${import.meta.env.BASE_URL}images/sarmila-standing-suit.jpg`,
    whyAvatar: `${import.meta.env.BASE_URL}images/sarmila-portrait-warm.jpg`,
    workingDesk: `${import.meta.env.BASE_URL}images/sarmila-desk-laptop.jpg`,
  },
};

export const WHY_PILLARS: WhyPillar[] = [
  {
    number: '01',
    title: 'The Problem I Solve',
    subtitle: 'Relieving Financial Anxiety',
    description: 'I help hard-working individuals and Canadian families stop worrying about money and start building a secure, predictable future with clear action steps.',
    icon: 'Target',
  },
  {
    number: '02',
    title: 'Why I Chose This Mission',
    subtitle: 'Creating True Life Freedom',
    description: 'To create time freedom, generational financial impact, and build a trusted practice that empowers people to thrive every single day without sacrificing what matters most.',
    icon: 'Sparkles',
  },
  {
    number: '03',
    title: 'What I Refuse to Compromise',
    subtitle: 'Unwavering Client-First Ethics',
    description: 'Trust, absolute transparency, and always placing my client’s best interests first. No hidden agendas, no pressure, and zero fine-print confusion.',
    icon: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'What Stuck With Me',
    subtitle: 'The Real Client Feedback',
    description: '“You made something so confusing... finally make sense.” That feedback fuels everything I do. Financial clarity isn’t just numbers—it is peace of mind.',
    icon: 'MessageSquareHeart',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'investments-wealth',
    title: 'Investments',
    subtitle: 'TFSA, RRSP, RESP & FHSA',
    description: 'Maximize Canadian tax incentives through strategic account allocation. We structure your savings into high-efficiency vehicles that compound tax-advantaged wealth.',
    iconName: 'TrendingUp',
    features: [
      'TFSA (Tax-Free Savings Account) tax-exempt compounding and tax-free withdrawals',
      'RRSP (Registered Retirement Savings Plan) for immediate CRA tax deductions and deferred growth',
      'RESP for children’s post-secondary education with up to 20% Canada Education Savings Grant (CESG) government match',
      'FHSA (First Home Savings Account) tax-free contribution & tax-free withdrawal up to $40,000 for Canadian homebuyers',
    ],
    canadianKeyPoints: [
      'CRA annual contribution room tracking',
      'Risk-adjusted portfolio balancing',
      'Automated dollar-cost averaging plans',
    ],
    ctaText: 'Design Investment Plan',
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    subtitle: 'Term, Whole Life & Universal Life',
    description: 'Protect your loved ones against life’s unforeseen events. We evaluate Term coverage for temporary liabilities (mortgages, income replacement) and Permanent solutions for lifelong legacy transfer.',
    iconName: 'Shield',
    features: [
      'Term Life Insurance: Cost-effective family mortgage protection and income replacement during peak earning years',
      'Permanent & Whole Life: Guaranteed cash value growth, permanent death benefit, and tax-sheltered wealth transfer',
      'Universal Life: Flexible premium structure combining life insurance protection with tax-advantaged investment accounts',
      'Estate liquidity planning ensuring Canadian probate and capital gains taxes do not burden your beneficiaries',
    ],
    canadianKeyPoints: [
      'Tax-free death benefit payout in Canada',
      'Customized coverage amount calculator',
      'Policy review of existing employer group plans',
    ],
    ctaText: 'Calculate Life Protection',
  },
  {
    id: 'living-benefits',
    title: 'Critical Illness & Disability',
    subtitle: 'Living Benefits & Income Security',
    description: 'A comprehensive financial plan protects your health as vigilantly as your wealth. If illness or accident strikes, living benefits provide immediate tax-free lump-sum capital to protect your household.',
    iconName: 'HeartPulse',
    features: [
      'Critical Illness Insurance: Lump-sum tax-free cash payout upon diagnosis of covered conditions (cancer, stroke, heart attack, etc.)',
      'Disability Insurance: Replaces up to 60-70% of your monthly income when injury or illness prevents you from working',
      'Return of Premium (ROP) options: Get up to 100% of your premiums back if no claim is made over the policy duration',
      'Allows you to access private specialized treatments and cover mortgage payments without liquidating retirement savings',
    ],
    canadianKeyPoints: [
      'Preserves Canadian families from debt during medical recovery',
      'Independent from employer-tied benefits',
      'Customized waiting periods and benefit durations',
    ],
    ctaText: 'Explore Living Benefits',
  },
  {
    id: 'business-solutions',
    title: 'Business & Corporate',
    subtitle: 'Corporate Wealth & Group Protection',
    description: 'Helping Canadian small business owners, professionals, and incorporated entrepreneurs extract passive wealth tax-efficiently and protect essential key employees.',
    iconName: 'Briefcase',
    features: [
      'Corporate-Owned Life Insurance: Moving retained earnings out of high corporate tax brackets into tax-sheltered accounts',
      'Key Person Insurance: Safeguarding business operations and banking covenants if a pivotal partner is incapacitated',
      'Buy-Sell Agreement Funding: Ensuring fair, smooth transition of ownership without financial chaos',
      'Group Health & Retirement Plans: Retaining top talent with competitive small business benefits packages',
    ],
    canadianKeyPoints: [
      'Capital Dividend Account (CDA) tax-free distributions',
      'Shields business credit lines from partner emergencies',
      'Tailored for Canadian incorporated entrepreneurs',
    ],
    ctaText: 'Review Business Structure',
  },
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'immigrants',
    title: 'New Immigrants & PRs',
    subtitle: 'Building a Secure Future in Canada',
    description: 'Relocating to Canada is an incredible milestone, but the Canadian tax, banking, and insurance system can feel confusing. I guide you step-by-step so you build credit, save on taxes, and protect your family from day one.',
    bulletPoints: [
      'Understanding how CRA registered accounts (TFSA & RRSP) operate',
      'Establishing strong Canadian credit and emergency funds',
      'Protecting your Canadian residency and family without employer dependence',
      'Clear, patient guidance in multiple languages with zero confusing jargon',
    ],
    icon: 'PlaneLanding',
  },
  {
    id: 'professionals',
    title: 'Young Professionals',
    subtitle: 'Smart Financial Moves for Your Dreams',
    description: 'You work hard for your income; now let’s make that income work hard for your future. We transition you from random saving to structured compounding, homeownership plans, and tax minimization.',
    bulletPoints: [
      'Maximizing the new Canadian First Home Savings Account (FHSA)',
      'Optimizing employer match programs with external personal wealth plans',
      'Early compound growth strategies before lifestyle inflation kicks in',
      'Securing low-cost locked-in insurance while young and healthy',
    ],
    icon: 'BriefcaseBusiness',
  },
  {
    id: 'families',
    title: 'Growing Canadian Families',
    subtitle: 'Protecting Loved Ones and What Matters',
    description: 'From your first home to welcoming new children, your responsibilities grow exponentially. We construct a multi-layered financial shield so your children are protected, their education is funded, and your home is secure.',
    bulletPoints: [
      'Maximizing the 20% Canada Education Savings Grant ($7,200 lifetime government money)',
      'Family income replacement and mortgage-protecting term/whole life policies',
      'Living benefits ensuring medical emergencies never deplete your children’s fund',
      'Clear legacy transition planning without probate delays',
    ],
    icon: 'Users',
  },
  {
    id: 'entrepreneurs',
    title: 'Business Owners & Self-Employed',
    subtitle: 'Strategic Solutions to Help You Grow',
    description: 'Entrepreneurs take big risks and deserve big rewards. We help you retain more profit, navigate Canadian corporate taxes, build succession plans, and create personal wealth insulated from company liabilities.',
    bulletPoints: [
      'Tax-advantaged extraction of corporate retained earnings',
      'Key Person & Buy-Sell protection for operating companies',
      'Individual Pension Plans (IPP) and corporate life solutions',
      'Custom group benefits packages designed for small agile teams',
    ],
    icon: 'Building2',
  },
];

export const CANADIAN_ACCOUNTS_GUIDE = [
  {
    code: 'TFSA',
    fullName: 'Tax-Free Savings Account',
    annualLimit: '$7,000 / year (cumulative)',
    taxTreatment: 'Contributions after-tax; 100% Tax-Free growth and withdrawals at any age',
    bestFor: 'Emergency funds, flexible medium-to-long term wealth, tax-free passive cashflow',
    proTip: 'Unused room carries forward forever! Withdrawals get re-added to your contribution room on January 1 of the following year.',
  },
  {
    code: 'RRSP',
    fullName: 'Registered Retirement Savings Plan',
    annualLimit: '18% of earned income (up to annual CRA max ~$31,560)',
    taxTreatment: 'Contributions are 100% tax-deductible; investments grow tax-deferred',
    bestFor: 'High-income earners reducing current year Canadian income tax bracket & retirement',
    proTip: 'Use your tax refund to fund your TFSA or FHSA for double-compounding efficiency!',
  },
  {
    code: 'FHSA',
    fullName: 'First Home Savings Account',
    annualLimit: '$8,000 / year ($40,000 lifetime limit)',
    taxTreatment: 'Tax-deductible on contribution AND 100% Tax-Free on qualifying home withdrawal',
    bestFor: 'First-time Canadian home buyers looking to buy their primary residence',
    proTip: 'Combines the tax deduction of an RRSP with the tax-free withdrawal of a TFSA!',
  },
  {
    code: 'RESP',
    fullName: 'Registered Education Savings Plan',
    annualLimit: '$50,000 lifetime limit per child',
    taxTreatment: 'Tax-sheltered growth + Government grants (CESG match 20% up to $7,200)',
    bestFor: 'Parents, grandparents, and guardians preparing for college or university tuition',
    proTip: 'The federal government gives you up to $500 free grant money each year on the first $2,500 contributed.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'As a newcomer to Canada, the tax and banking system was like another language. Sarmila sat down with us patiently, explained the TFSA and RRSP in plain terms, and helped us protect our twins. She is genuinely the most trustworthy advisor we have ever met.',
    clientName: 'Priya & Gurpreet K.',
    location: 'Surrey, BC',
    category: 'New Immigrant Family',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '2',
    quote: 'Sarmila made something so confusing finally make total sense! I thought life insurance was just an expense, but she showed me how to use it as a tax-advantaged wealth builder while ensuring my company is insulated from partner risks. Total game changer.',
    clientName: 'Marcus T.',
    location: 'Calgary, AB',
    category: 'Tech Entrepreneur',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Her energy and authenticity are contagious. She never pressured me into buying anything; instead, she did a deep audit of my existing work benefits and revealed critical gaps in my critical illness coverage. I sleep so much better at night now.',
    clientName: 'Elena V.',
    location: 'Toronto, ON',
    category: 'Healthcare Professional & Mom',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '4',
    quote: 'Working with Sarmila helped my partner and I open our FHSA and map out our down payment in under 18 months. She is responsive, warm, and holds you accountable to your own dreams. Cannot recommend her enough!',
    clientName: 'Jordan & Sam R.',
    location: 'Vancouver, BC',
    category: 'First-Time Homebuyers',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does an initial consultation with Sarmila cost?',
    answer: 'Initial strategy sessions and consultations are 100% complimentary. As an independent licensed financial advisor in Canada, I am compensated directly by the established Canadian financial institutions and insurance carriers when a policy or account is placed. There are never any out-of-pocket advisory retainers or hidden surprise fees.',
    category: 'Consultations',
  },
  {
    question: 'What is the difference between a TFSA and an RRSP?',
    answer: 'With an RRSP (Registered Retirement Savings Plan), your contributions reduce your taxable income for that calendar year, providing immediate tax relief or a tax refund; you pay taxes later upon withdrawal in retirement. With a TFSA (Tax-Free Savings Account), you contribute with after-tax dollars, but all investment growth, dividends, capital gains, and subsequent withdrawals are 100% tax-free at any time.',
    category: 'Investments',
  },
  {
    question: 'Why do I need life or critical illness insurance if I have coverage through work?',
    answer: 'Employer group plans typically offer limited coverage (often just 1-2x your annual salary) that disappears immediately if you change jobs, get laid off, or retire. Additionally, group plans rarely provide comprehensive Critical Illness living benefits. Personal policies are locked-in, custom-tailored, portable anywhere in Canada, and guarantee your rates never spike arbitrarily.',
    category: 'Insurance',
  },
  {
    question: 'I recently immigrated to Canada. Can I start investing right away?',
    answer: 'Yes! As soon as you receive your Canadian Social Insurance Number (SIN), you are eligible to open a Tax-Free Savings Account (TFSA) and begin building savings. As you begin reporting Canadian earned income on your tax return, you will also accumulate RRSP room. We specialize in helping new permanent residents and work permit holders avoid costly cross-border and tax compliance mistakes.',
    category: 'General',
  },
  {
    question: 'What is the new First Home Savings Account (FHSA)?',
    answer: 'The FHSA is a premier registered account introduced by the Canadian federal government for first-time home buyers. You can contribute up to $8,000 per year (to a lifetime maximum of $40,000). Contributions are tax-deductible (like an RRSP) and withdrawals for a qualifying home purchase are completely tax-free (like a TFSA).',
    category: 'Investments',
  },
  {
    question: 'How do virtual consultations work across Canadian provinces?',
    answer: 'We meet via secure video conference (Zoom or Google Meet) from the comfort of your home or office. We review your current financial snapshot, discuss your goals, model cash flow and protection options on shared screens, and deliver a clean, customized PDF blueprint. You choose the meeting time directly via Calendly.',
    category: 'Consultations',
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Free Discovery Session',
    time: '30 Minutes',
    description: 'We meet via video or phone to understand your lifestyle, current savings, liabilities, and short- & long-term goals without any judgment or pressure.',
  },
  {
    step: '02',
    title: 'Custom Financial Blueprint',
    time: '3-5 Days',
    description: 'I analyze your tax position, family insurance needs, and investment options to craft a bespoke, transparent financial roadmap.',
  },
  {
    step: '03',
    title: 'Seamless Implementation',
    time: 'Interactive Walkthrough',
    description: 'Together, we review carrier options, locked-in guarantees, and set up your accounts and protection with Canada’s most reputable financial institutions.',
  },
  {
    step: '04',
    title: 'Ongoing Annual Reviews',
    time: 'Every 12 Months',
    description: 'Life evolves—marriages, children, promotions, new homes. We adjust your plan annually so your wealth continuously matches your reality.',
  },
];
