import type { LucideIcon } from "lucide-react";
import {
  Server,
  Cloud,
  Network,
  ShieldCheck,
  Wrench,
  Headphones,
  Boxes,
  HardDrive,
  Router,
  MonitorSmartphone,
  AppWindow,
  Lock,
  Rocket,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Factory,
  Building2,
  ShieldHalf,
  Lightbulb,
  Users,
  Award,
  Layers,
  BadgeIndianRupee,
  Search,
  PencilRuler,
  Rocket as RocketLaunch,
  LifeBuoy,
} from "lucide-react";

export const COMPANY = {
  name: "Sri Kandan Solutions",
  shortName: "Sri Kandan",
  tagline: "Empowering Businesses with Advanced IT Solutions",
  phonePrimary: "+91 94450 48855",
  phonePrimaryHref: "tel:+919445048855",
  phoneSecondary: "+91 98400 61032",
  phoneSecondaryHref: "tel:+919840061032",
  email: "sales@srikandan.in",
  website: "www.srikandan.in",
  websiteHref: "https://www.srikandan.in",
  whatsapp: "https://wa.me/919445048855",
  whatsappChat:
    "https://wa.me/919445048855?text=Hi%20Sri%20Kandan%20Solutions%2C%20I%27m%20interested%20in%20your%20IT%20services.",
  address:
    "New No.64, Kothaval Chavadi Street, Saidapet, Chennai, Tamil Nadu, India",
  mapsEmbed:
    "https://www.google.com/maps?q=Saidapet,+Chennai,+Tamil+Nadu&output=embed",
} as const;

export const SITE_URL = "https://www.srikandan.in";

export interface NavLink {
  label: string;
  href: string;
}

/**
 * "/#id" links resolve to a homepage section (client-scrolls when already home,
 * otherwise navigates home then scrolls). Bare "/path" links are dedicated pages.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const HERO_STATS: Stat[] = [
  { label: "Clients Served", value: 500, suffix: "+" },
  { label: "Industries", value: 6, suffix: "+" },
  { label: "Support", value: 24, suffix: "/7" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

export const ROTATING_TAGLINES: string[] = [
  "System Integration",
  "Cloud Solutions",
  "Cybersecurity",
  "Managed IT Services",
];

/** Hero credibility strip — plain wordmarks, not real logos. */
export const PARTNER_WORDMARKS: string[] = [
  "Dell",
  "HP",
  "Cisco",
  "Microsoft",
  "Lenovo",
  "Sophos",
];

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We act with honesty and transparency in every client relationship and every commitment we make.",
    icon: ShieldHalf,
  },
  {
    title: "Innovation",
    description:
      "We continuously adopt emerging technology to keep our clients ahead of the curve.",
    icon: Lightbulb,
  },
  {
    title: "Customer Focus",
    description:
      "Your business goals shape our solutions. We listen first, then engineer with purpose.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We hold our work to the highest standard, from initial design to long-term support.",
    icon: Award,
  },
];

export const ABOUT = {
  paragraph:
    "Sri Kandan Solutions is a premier IT system integration company based in Chennai, Tamil Nadu. We deliver reliable IT products and comprehensive services that help organisations run efficiently, adopt new technology with confidence, and scale without friction. From hardware procurement to cloud, networking, security and managed services, we act as a single accountable partner for your entire IT landscape.",
  vision:
    "To empower businesses through innovative, reliable, and scalable IT solutions, enabling them to achieve operational excellence and sustainable growth.",
  mission:
    "To deliver cutting-edge IT products and services that simplify technology adoption, enhance productivity, and provide measurable business value.",
};

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceTab {
  id: string;
  label: string;
  blurb: string;
  badge?: string;
  items: ServiceItem[];
}

export const SERVICE_TABS: ServiceTab[] = [
  {
    id: "products",
    label: "IT Products",
    blurb: "Enterprise-grade hardware, sourced, configured and delivered.",
    items: [
      {
        title: "Servers & Endpoints",
        description:
          "Servers, workstations, laptops and desktops configured for your workloads and budget.",
        icon: Server,
      },
      {
        title: "Networking Equipment",
        description:
          "Routers, switches and access points from leading OEMs, ready for deployment.",
        icon: Router,
      },
      {
        title: "Storage Solutions",
        description:
          "NAS, SAN and cloud storage designed for capacity, resilience and fast recovery.",
        icon: HardDrive,
      },
    ],
  },
  {
    id: "services",
    label: "IT Services",
    blurb: "End-to-end services that design, deploy and run your infrastructure.",
    badge: "Most Requested",
    items: [
      {
        title: "System Integration",
        description:
          "Seamless integration of hardware and software for optimised performance.",
        icon: Boxes,
      },
      {
        title: "Cloud Solutions",
        description:
          "Deployment and management of cloud platforms across IaaS, PaaS and SaaS.",
        icon: Cloud,
      },
      {
        title: "Networking Solutions",
        description:
          "Design, installation and maintenance of robust and scalable networks.",
        icon: Network,
      },
      {
        title: "Managed IT Services",
        description:
          "Proactive monitoring and management of your IT infrastructure around the clock.",
        icon: Wrench,
      },
      {
        title: "IT Support & Maintenance",
        description:
          "24/7 support to ensure uninterrupted business operations.",
        icon: Headphones,
      },
      {
        title: "Cybersecurity Services",
        description:
          "Comprehensive protection against cyber threats with advanced security measures.",
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: "software",
    label: "Software Solutions",
    blurb: "Licensing and rollout of the software that runs your business.",
    items: [
      {
        title: "OS & Productivity Suites",
        description:
          "Operating systems and productivity suites, licensed and deployed correctly.",
        icon: MonitorSmartphone,
      },
      {
        title: "Business Applications",
        description:
          "ERP, CRM and HRMS platforms selected and implemented for your processes.",
        icon: AppWindow,
      },
      {
        title: "Security Software",
        description:
          "Antivirus, firewalls and endpoint protection managed as one policy.",
        icon: Lock,
      },
    ],
  },
];

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const UNSPLASH = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format`;

export const INDUSTRIES: Industry[] = [
  {
    name: "Startups",
    description: "Tailored IT packages for emerging businesses.",
    icon: Rocket,
    image: UNSPLASH("1559136555-9303baea8ebd"),
  },
  {
    name: "Retail",
    description:
      "Point-of-sale systems, inventory management and e-commerce platforms.",
    icon: ShoppingCart,
    image: UNSPLASH("1556742049-0cfed4f6a45d"),
  },
  {
    name: "Education",
    description:
      "Smart classrooms, learning management systems and campus networks.",
    icon: GraduationCap,
    image: UNSPLASH("1523580494863-6f3031224c94"),
  },
  {
    name: "Healthcare",
    description: "IT solutions for hospitals, clinics and diagnostic centres.",
    icon: HeartPulse,
    image: UNSPLASH("1519494026892-80bbd2d6fd0d"),
  },
  {
    name: "Manufacturing",
    description: "ERP, production monitoring and supply chain solutions.",
    icon: Factory,
    image: UNSPLASH("1565043666747-69f6646db940"),
  },
  {
    name: "Corporate Offices",
    description: "End-to-end IT infrastructure and support.",
    icon: Building2,
    image: UNSPLASH("1497366216548-37526070297c"),
  },
];

/** Extra depth for the dedicated /industries page. */
export const INDUSTRY_SOLUTIONS: Record<string, string[]> = {
  Startups: [
    "Right-sized hardware and cloud packages that scale with headcount",
    "Google Workspace / Microsoft 365 setup and identity management",
    "Secure remote-work and VPN configuration",
    "Predictable monthly IT support without a full-time hire",
  ],
  Retail: [
    "POS terminals, barcode and payment device integration",
    "Inventory and stock-management system rollout",
    "E-commerce platform hosting and store-network connectivity",
    "CCTV, Wi-Fi and in-store device management",
  ],
  Education: [
    "Smart classroom AV, interactive panels and projectors",
    "Learning Management System deployment and hosting",
    "Campus-wide structured cabling and managed Wi-Fi",
    "Student lab imaging, content filtering and device control",
  ],
  Healthcare: [
    "HIS / EMR server infrastructure and backups",
    "Segmented networks for medical devices and diagnostics",
    "Endpoint security and data-protection controls",
    "24/7 monitoring for uninterrupted clinical operations",
  ],
  Manufacturing: [
    "ERP implementation across production and inventory",
    "Shop-floor connectivity and production monitoring dashboards",
    "Supply-chain and vendor-portal integration",
    "Industrial network hardening and redundancy",
  ],
  "Corporate Offices": [
    "End-to-end office IT setup — from cabling to workstations",
    "Server, storage and virtualisation infrastructure",
    "Unified communication, email and collaboration platforms",
    "Managed services with on-site and remote support",
  ],
};

export interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
  stat: {
    prefix?: string;
    value: number;
    suffix: string;
    label: string;
  };
}

export const WHY_US: Reason[] = [
  {
    title: "Tailored Solutions",
    description:
      "We customise our offerings to meet your unique business needs.",
    icon: Layers,
    stat: { value: 98, suffix: "%", label: "Client Satisfaction" },
  },
  {
    title: "Expert Team",
    description:
      "Our professionals bring deep expertise and industry experience.",
    icon: Users,
    stat: { value: 50, suffix: "+", label: "Certified Professionals" },
  },
  {
    title: "Comprehensive Offerings",
    description:
      "From products to services, we provide end-to-end solutions.",
    icon: Boxes,
    stat: { value: 200, suffix: "+", label: "Projects Delivered" },
  },
  {
    title: "Customer Support",
    description: "Dedicated support team ensuring timely assistance.",
    icon: Headphones,
    stat: { prefix: "< ", value: 2, suffix: "hr", label: "Response Time" },
  },
  {
    title: "Competitive Pricing",
    description:
      "Affordable and transparent pricing for all our solutions.",
    icon: BadgeIndianRupee,
    stat: { value: 30, suffix: "%", label: "Average Cost Saving" },
  },
];

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery & Assessment",
    description:
      "We analyze your current IT infrastructure, understand your business goals, and identify gaps and opportunities.",
    icon: Search,
  },
  {
    title: "Solution Design",
    description:
      "Our experts architect a customized IT solution — selecting the right products, services, and configurations for your needs.",
    icon: PencilRuler,
  },
  {
    title: "Implementation & Integration",
    description:
      "We deploy, configure, and integrate everything seamlessly with minimal disruption to your operations.",
    icon: RocketLaunch,
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Post-deployment, we provide continuous monitoring, maintenance, and optimization to keep your systems running at peak performance.",
    icon: LifeBuoy,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sri Kandan Solutions transformed our entire office IT setup. Their team handled everything from server installation to network configuration seamlessly.",
    name: "Operations Manager",
    role: "Retail Chain, Chennai",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "We switched to Sri Kandan for our managed IT services and haven't looked back. Their 24/7 support has been a game-changer for our hospital's IT systems.",
    name: "IT Head",
    role: "Multi-Specialty Hospital, Chennai",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "As a startup, we needed an IT partner who understood our budget constraints. Sri Kandan delivered enterprise-grade solutions at competitive prices.",
    name: "Founder",
    role: "EdTech Startup, Chennai",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80&auto=format&fit=crop",
  },
];

export const CLIENTS_INTRO =
  "From startups in T. Nagar to manufacturing units in Ambattur, we've been the IT backbone for businesses across Chennai and Tamil Nadu.";

export const BRAND_MARQUEE_ROW_1: string[] = [
  "Dell Technologies",
  "HP Enterprise",
  "Cisco",
  "Microsoft",
  "VMware",
  "Fortinet",
  "Sophos",
  "Lenovo",
];

export const BRAND_MARQUEE_ROW_2: string[] = [
  "Adobe",
  "Tally",
  "Zoho",
  "Synology",
  "APC",
  "D-Link",
  "TP-Link",
  "Seagate",
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "What types of businesses do you serve?",
    answer:
      "We serve businesses of all sizes — from startups and small businesses to large enterprises across industries including retail, healthcare, education, manufacturing, and corporate offices. Whether you need a single workstation or a complete IT infrastructure overhaul, we have solutions for you.",
  },
  {
    question: "Do you provide on-site support in Chennai?",
    answer:
      "Yes, we provide on-site IT support across Chennai and surrounding areas. Our team can be at your location for installations, troubleshooting, maintenance, and emergency support. We also offer remote support for quick issue resolution.",
  },
  {
    question: "Can you help migrate our business to the cloud?",
    answer:
      "Absolutely. We specialize in cloud migration services including assessment, planning, and execution. We work with major cloud platforms including AWS, Azure, and Google Cloud to find the best fit for your business needs and budget.",
  },
  {
    question: "What is your response time for IT support requests?",
    answer:
      "For our managed IT services clients, we guarantee a response within 2 hours for critical issues and within 4 hours for standard requests. Our 24/7 support team monitors your systems proactively to prevent issues before they impact your business.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes, we offer flexible AMC plans covering hardware maintenance, software updates, network monitoring, and on-site support. Our AMC plans are customized based on your infrastructure size and requirements, ensuring you get the best value.",
  },
  {
    question: "How do you ensure data security for your clients?",
    answer:
      "We implement multi-layered security solutions including enterprise-grade firewalls, endpoint protection, email security, data backup solutions, and regular security audits. We partner with leading cybersecurity brands like Sophos and Fortinet to provide comprehensive protection.",
  },
];

export interface BlogPost {
  title: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "5 Signs Your Business Needs a Network Upgrade",
    category: "Networking",
    categoryColor: "teal",
    excerpt:
      "Is your network slowing down your team? Here are the warning signs that it's time for an upgrade...",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
    imageAlt: "Network infrastructure and cabling",
  },
  {
    title: "Cloud vs On-Premise: Which is Right for Your Business?",
    category: "Cloud Solutions",
    categoryColor: "navy",
    excerpt:
      "The cloud debate continues. We break down the costs, benefits, and risks of each approach...",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format",
    imageAlt: "Cloud data centre",
  },
  {
    title: "Cybersecurity Checklist for Small Businesses in 2024",
    category: "Security",
    categoryColor: "gold",
    excerpt:
      "Small businesses are the #1 target for cyberattacks. Here's your essential security checklist...",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format",
    imageAlt: "Circuit board — cybersecurity and infrastructure",
  },
];

export interface Milestone {
  title: string;
}

export const JOURNEY: Milestone[] = [
  { title: "Founded in Chennai with a vision to simplify IT for businesses" },
  { title: "Expanded services to include cloud and cybersecurity" },
  { title: "Grew to serve 150+ businesses across Tamil Nadu" },
  { title: "Continuing to innovate and grow" },
];

export interface TeamMember {
  name: string;
  role: string;
}

export const TEAM: TeamMember[] = [
  { name: "Technical Director", role: "Infrastructure & Integration" },
  { name: "Solutions Architect", role: "Cloud & Networking" },
  { name: "Support Lead", role: "Managed Services & AMC" },
  { name: "Sales Manager", role: "Consulting & Accounts" },
];

export const FOOTER_SERVICES: string[] = [
  "System Integration",
  "Cloud Solutions",
  "Networking Solutions",
  "Managed IT Services",
  "Cybersecurity Services",
  "IT Support & Maintenance",
];
