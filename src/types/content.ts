export interface SocialLink {
  label: string;
  url: string;
  username?: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  points: string[];
  repoUrl: string;
  liveUrl?: string;
  image: string;
}

export interface StackCategory {
  title: string;
  key: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
  tech?: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  year?: string;
  badge?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
}

export interface CodingProfileItem {
  platform: string;
  stats: string;
  url: string;
  iconName: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    url: string;
    author: string;
    keywords: string[];
  };
  personal: {
    name: string;
    role: string;
    location: string;
    statusBadge: string;
    resumeUrl: string;
    email: string;
    phone?: string;
    coordinates: string;
  };
  hero: {
    tagline: string;
    rotatingLines: string[];
    headlinePrefix: string;
    headlineHighlight: string;
    headlineSuffix: string;
    ctaPrimary: { text: string; href: string };
    ctaSecondary: { text: string; href: string };
  };
  about: {
    sectionNumber: string;
    sectionTitle: string;
    bioParagraph: string;
    learningFocus: string[];
    philosophyQuote: {
      regular: string;
      italic: string;
      author: string;
    };
    image: string;
  };
  projects: {
    sectionNumber: string;
    sectionTitle: string;
    items: ProjectItem[];
  };
  stack: {
    sectionNumber: string;
    sectionTitle: string;
    categories: StackCategory[];
  };
  experience: {
    sectionNumber: string;
    sectionTitle: string;
    items: ExperienceItem[];
  };
  credentials: {
    sectionNumber: string;
    sectionTitle: string;
    achievements: AchievementItem[];
    certifications: CertificationItem[];
    codingProfiles: CodingProfileItem[];
  };
  contact: {
    sectionNumber: string;
    sectionTitle: string;
    headlineRegular: string;
    headlineItalic: string;
    subtext: string;
    socials: SocialLink[];
  };
}
