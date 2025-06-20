
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  tagline: string;
  statistics: {
    accuracy: string;
    savings: string;
    fasterRCA: string;
  };
}

export interface ProblemContent {
  title: string;
  subtitle: string;
  description: string;
  problems: {
    title: string;
    description: string;
    impact: string;
  }[];
}

export interface PlatformContent {
  title: string;
  subtitle: string;
  description: string;
  coreCapabilities: {
    title: string;
    description: string;
  }[];
  differentiators: {
    title: string;
    description: string;
  }[];
}

export interface ScienceContent {
  title: string;
  subtitle: string;
  technicalEdge: {
    title: string;
    description: string;
  }[];
  marketPosition: {
    title: string;
    description: string;
  }[];
  stats: {
    icon: string;
    value: string;
    label: string;
    description: string;
  }[];
}

export interface ImpactContent {
  title: string;
  subtitle: string;
  description: string;
  capabilities: {
    title: string;
    description?: string;
    icon: string;
  }[];
  outcomes: {
    title: string;
    description: string;
  }[];
}

export interface PrivacyContent {
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
  }[];
  deploymentOptions: {
    title: string;
    description: string;
  }[];
}

export interface AdvantagesContent {
  title: string;
  ourAdvantages: {
    title: string;
    description: string;
  }[];
  yourReality: {
    title: string;
    description: string;
  }[];
}

export interface PilotContent {
  title: string;
  subtitle: string;
  question: string;
  steps: {
    title: string;
    description: string;
    icon: string;
  }[];
  whatYouGet: {
    title: string;
    description: string;
  }[];
}

export interface MarketContent {
  title: string;
  subtitle: string;
  marketSize: string;
  growthRate: string;
  keyMetrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface AboutContent {
  title: string;
  founders: {
    name: string;
    email: string;
    role: string;
    bio: string;
  }[];
}

export interface FooterContent {
  company: {
    name: string;
    description: string;
  };
  navigation: {
    title: string;
    items: {
      label: string;
      sectionId: string;
    }[];
  };
  solutions: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    items: {
      label: string;
      action: string;
      target?: string;
    }[];
  };
  legal: {
    copyright: string;
    links: {
      label: string;
      path: string;
    }[];
  };
}

export interface SiteContent {
  hero: HeroContent;
  problem: ProblemContent;
  platform: PlatformContent;
  science: ScienceContent;
  impact: ImpactContent;
  privacy: PrivacyContent;
  advantages: AdvantagesContent;
  pilot: PilotContent;
  market: MarketContent;
  about: AboutContent;
  footer: FooterContent;
}
