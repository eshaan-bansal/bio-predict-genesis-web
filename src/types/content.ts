
export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
  statistics: {
    accuracy: string;
    savings: string;
    fasterRCA: string;
  };
}

export interface ProblemContent {
  title: string;
  subtitle: string;
  problems: {
    title: string;
    description: string;
    impact: string;
  }[];
}

export interface PlatformContent {
  title: string;
  subtitle: string;
  features: {
    title: string;
    description: string;
    benefits: string[];
  }[];
}

export interface ScienceContent {
  title: string;
  subtitle: string;
  stats: {
    icon: string;
    value: string;
    label: string;
    description: string;
  }[];
  methodology: {
    title: string;
    sections: {
      title: string;
      description: string;
    }[];
  };
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
  subtitle: string;
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
  market: MarketContent;
  about: AboutContent;
  footer: FooterContent;
}
