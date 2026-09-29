export type ColorThemeId = 'rose-champagne' | 'evergreen-sand' | 'sapphire-alabaster' | 'cashmere-amber';

export interface ColorTheme {
  id: ColorThemeId;
  name: string;
  tagline: string;
  primary: string;
  primaryHover: string;
  primaryLight: string;
  accent: string;
  accentLight: string;
  bgLight: string;
  surface: string;
  textDark: string;
  textMuted: string;
  border: string;
  badgeBg: string;
  badgeText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  canadianKeyPoints: string[];
  ctaText: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export interface WhyPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  category: string;
  avatarUrl: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Investments' | 'Insurance' | 'Consultations';
}
