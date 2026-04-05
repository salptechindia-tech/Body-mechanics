import { GymConfig } from "./types";

export const gymConfig: GymConfig = {
  brand: {
    name: "Body Mechanics",
    logo: "/logo.png",
    tagline: "LIFESTYLE AND FITNESS STUDIO",
    description: "At Body Mechanics, we believe fitness is a science. Our modern facilities and expert trainers are designed to help you optimize your physical potential.",
  },
  colors: {
    primary: "#EAB308", // Yellow-500
    secondary: "#171717", // Neutral-900
    accent: "#FFFFFF",
    background: "#0A0A0A",
    text: "#F5F5F5",
  },
  hero: {
    title: "Forge Your Ultimate Self",
    subtitle: "Join Tamil Nadu's premier fitness destination and transform your life with science-backed training.",
    ctaText: "Join Now",
    ctaLink: "#membership",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
  about: {
    title: "Why Body Mechanics?",
    content: "Established in 2015, Body Mechanics has been at the forefront of the fitness revolution in Tamil Nadu. We combine state-of-the-art training with scientific recovery methods. Our community is built on respect, perseverance, and the relentless pursuit of excellence.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    stats: [
      { label: "Members", value: "2,500+" },
      { label: "Trainers", value: "30+" },
      { label: "Programs", value: "20+" },
      { label: "Success Stories", value: "10,000+" },
    ],
  },
  services: [
    {
      id: "1",
      title: "Personal Training",
      description: "Customized sessions tailored to your specific goals, whether it's weight loss, muscle gain, or athletic performance.",
      icon: "User",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Group Fitness",
      description: "High-energy classes including HIIT, Yoga, and Strength Circuits led by our top-tier instructors.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutritional guidance to fuel your body and optimize your results.",
      icon: "Apple",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "Recovery Zone",
      description: "Access to sauna and massage therapy to help your muscles recover faster and perform better.",
      icon: "Activity",
      image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=2070&auto=format&fit=crop",
    },
  ],
  plans: [
    {
      id: "basic",
      name: "Basic",
      price: "₹1,499",
      period: "per month",
      features: ["Gym Access", "Locker Room", "Free Orientation", "1 Group Class/mo"],
      ctaText: "Join Now",
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹2,999",
      period: "per month",
      features: ["Unlimited Gym Access", "All Group Classes", "Nutrition Guide", "2 Personal Training/mo", "Sauna Access"],
      isPopular: true,
      ctaText: "Go Pro",
    },
    {
      id: "elite",
      name: "Elite",
      price: "₹4,999",
      period: "per month",
      features: ["24/7 Access", "Personal Coach", "Weekly Body Scan", "Unlimited PT", "VIP Recovery Lounge"],
      ctaText: "Go Elite",
    },
  ],
  trainers: [
    {
      id: "t1",
      name: "Karthik Raja",
      specialty: "Strength & Conditioning",
      bio: "Former athlete with 10+ years of experience in powerlifting and functional movement.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
      socials: { instagram: "#", twitter: "#" },
    },
    {
      id: "t2",
      name: "Priya Raman",
      specialty: "Yoga & Mindfulness",
      bio: "Certified yoga instructor focusing on mobility, flexibility, and mental well-being.",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop",
      socials: { instagram: "#", linkedin: "#" },
    },
    {
      id: "t3",
      name: "Vijay Sethu",
      specialty: "HIIT & Weight Loss",
      bio: "Expert in high-intensity interval training and sustainable weight management.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?q=80&w=2074&auto=format&fit=crop",
      socials: { instagram: "#" },
    },
  ],
  testimonials: [
    {
      id: "test1",
      name: "Arun Kumar",
      role: "Member for 2 years",
      content: "Body Mechanics changed my life. The trainers are incredibly knowledgeable and the community is so supportive.",
      avatar: "https://i.pravatar.cc/150?u=arun",
      rating: 5,
    },
    {
      id: "test2",
      name: "Kavitha Selvam",
      role: "Pro Member",
      content: "The group classes are so motivating. I love the variety of programs they offer. Best gym in Chennai!",
      avatar: "https://i.pravatar.cc/150?u=kavitha",
      rating: 5,
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
  ],
  faqs: [
    {
      question: "What are the gym opening hours?",
      answer: "We are open Monday to Friday from 5:00 AM to 11:00 PM, and Saturday & Sunday from 7:00 AM to 8:00 PM.",
    },
    {
      question: "Is there a free trial class?",
      answer: "Yes! We offer a one-day free trial for new members. Contact us to schedule yours.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have dedicated parking space for our members right in front of the gym.",
    },
  ],
  contact: {
    email: "info@Body Mechanics.in",
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    address: "123 Anna Salai, Chennai, Tamil Nadu 600002",
    googleMapsLink: "https://goo.gl/maps/example",
  },
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
  locations: [
    {
      name: "Chennai Branch",
      address: "123 Anna Salai, Chennai",
      hours: "5 AM - 11 PM",
    },

  ],
  ui: {
    nav: {
      about: "About",
      programs: "Programs",
      plans: "Plans",
      trainers: "Trainers",
      gallery: "Gallery",
      contact: "Contact",
      joinNow: "Join Now",
    },
    footer: {
      quickLinks: "Quick Links",
      locations: "Our Locations",
      newsletter: "Newsletter",
      newsletterSub: "Subscribe for fitness tips and exclusive offers.",
      emailPlaceholder: "Email Address",
      subscribe: "Subscribe",
    },
    contactForm: {
      heading: "Contact Form",
      infoHeading: "Contact Information",
      emailLabel: "Email Us",
      callLabel: "Call Us",
      visitLabel: "Visit Us",
      hoursHeading: "Opening Hours",
      nameLabel: "Full Name",
      emailFieldLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      sendButton: "Send Message",
      placeholders: {
        name: "Your Name",
        email: "Your Email",
        message: "How can we help you?",
      },
    },
    sections: {
      programs: {
        learnMore: "Learn More",
      },
      pricing: {
        mostPopular: "Most Popular",
      },
      faq: {
        subtitle: "Got questions? We've got answers. Everything you need to know about joining Body Mechanics.",
      },
    },
  },
};
