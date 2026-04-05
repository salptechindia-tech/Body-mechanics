export interface BrandInfo {
  name: string;
  logo?: string;
  tagline: string;
  description: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  googleMapsLink: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
}

export interface Location {
  name: string;
  address: string;
  hours: string;
}

export interface GymConfig {
  brand: BrandInfo;
  colors: ColorPalette;
  hero: HeroContent;
  about: {
    title: string;
    content: string;
    image: string;
    stats: { label: string; value: string }[];
  };
  services: Service[];
  plans: Plan[];
  trainers: Trainer[];
  testimonials: Testimonial[];
  gallery: string[];
  faqs: FAQItem[];
  contact: ContactDetails;
  socials: SocialLinks;
  locations: Location[];
  ui: {
    nav: {
      about: string;
      programs: string;
      plans: string;
      trainers: string;
      gallery: string;
      contact: string;
      joinNow: string;
    };
    footer: {
      quickLinks: string;
      locations: string;
      newsletter: string;
      newsletterSub: string;
      emailPlaceholder: string;
      subscribe: string;
    };
    contactForm: {
      heading: string;
      infoHeading: string;
      emailLabel: string;
      callLabel: string;
      visitLabel: string;
      hoursHeading: string;
      nameLabel: string;
      emailFieldLabel: string;
      subjectLabel: string;
      messageLabel: string;
      sendButton: string;
      placeholders: {
        name: string;
        email: string;
        message: string;
      };
    };
    sections: {
      programs: {
        learnMore: string;
      };
      pricing: {
        mostPopular: string;
      };
      faq: {
        subtitle: string;
      };
    };
  };
}
