import {
  Award,
  BadgeCheck,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  Factory,
  Flame,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Recycle,
  Scale,
  Shield,
  ShieldCheck,
  Target,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

export const navigation = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Core Values", href: "/about#values" },
      { label: "Our Experts", href: "/about#experts" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    mega: true,
    children: [
      {
        label: "Fire Safety Engineering",
        href: "/services/fire-safety-engineering",
        description: "Audits, NOC, design, installation & AMC",
      },
      {
        label: "EHS Engineering & Consulting",
        href: "/services/ehs-engineering",
        description: "Compliance, HAZOP, HIRA, ESG & more",
      },
      {
        label: "Professional EHS Training",
        href: "/services/ehs-training",
        description: "Fire fighting, LOTO, BBS & leadership",
      },
      {
        label: "Digital Automation & AI",
        href: "/services/digital-ai",
        description: "AI monitoring, e-PTW, dashboards",
      },
      {
        label: "Safety Consultancy & Audits",
        href: "/services/safety-consultancy",
        description: "ISO, electrical, contractor safety",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/#projects" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Downloads", href: "/downloads" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const heroSlides = [
  {
    title: "Oil & Gas",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Power Plants",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Metro & Railway",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71427f3?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: "Fire Protection",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
  },
];

export const aboutPoints = [
  "Fire Protection Engineering",
  "Environment",
  "Health & Safety",
  "ESG Consulting",
  "Digital Safety",
  "AI Safety Monitoring",
  "Safety Trainings",
  "Compliance Consulting",
];

export const industriesServed = [
  "Manufacturing",
  "Oil & Gas",
  "Power Plants",
  "Solar",
  "Metro",
  "Railway",
  "Airports",
  "Warehouses",
  "Cement",
  "Steel",
  "Pharma",
  "Healthcare",
  "Mining",
  "Construction",
  "Infrastructure",
  "Automation",
  "Coal",
];

export const coreValues = [
  { title: "Integrity", icon: Scale, description: "Transparent, accountable advice in every engagement." },
  { title: "Innovation", icon: Lightbulb, description: "Technology-led solutions for modern industrial risks." },
  { title: "Sustainability", icon: Leaf, description: "Safer operations that support long-term ESG goals." },
  { title: "Quality", icon: BadgeCheck, description: "Standards-aligned delivery across audits and systems." },
  { title: "Customer Satisfaction", icon: HeartHandshake, description: "Outcomes measured by client trust and results." },
  { title: "Ethical Practices", icon: Shield, description: "Compliance-first decisions without compromise." },
  { title: "Collaboration", icon: Handshake, description: "Partnering with plant teams, OEMs, and leadership." },
  { title: "Adaptability", icon: Recycle, description: "Flexible methods for evolving sites and regulations." },
  { title: "Teamwork", icon: Users, description: "Cross-disciplinary experts working as one unit." },
  { title: "Excellence", icon: Award, description: "Precision engineering and disciplined execution." },
];

export const whyChooseUs = [
  { title: "Industry Expertise", icon: Factory, description: "Deep domain experience across high-risk sectors." },
  { title: "Certified Experts", icon: ShieldCheck, description: "Qualified consultants and subject-matter specialists." },
  { title: "Customized Solutions", icon: Target, description: "Site-specific designs, not one-size-fit templates." },
  { title: "Affordable Services", icon: Wallet, description: "Enterprise-grade quality with practical pricing." },
  { title: "End-to-End Support", icon: Workflow, description: "From assessment and design to AMC and training." },
  { title: "Timely Delivery", icon: Clock, description: "Project discipline that respects shutdown windows." },
  { title: "Digital Innovation", icon: Zap, description: "AI, IoT, and software for proactive risk control." },
  { title: "One Stop Partner", icon: CheckCircle2, description: "Fire, EHS, ESG, training, and digital under one roof." },
];

export const services = [
  {
    slug: "fire-safety-engineering",
    title: "Fire Safety Engineering",
    short:
      "End-to-end fire protection engineering, systems, NOC support, and lifecycle maintenance.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Fire Safety Audits",
      "Fire Risk Assessment",
      "Fire Load Calculation",
      "Fire NOC",
      "Fire Hydrant Systems",
      "Sprinkler Systems",
      "Fire Alarm Systems",
      "VESDA",
      "Foam Systems",
      "CO₂ Flooding",
      "Water Mist Systems",
      "Fire Extinguishers",
      "Fire AMC",
      "Fire System Design",
      "Installation",
      "Testing",
      "Commissioning",
    ],
  },
  {
    slug: "ehs-engineering",
    title: "EHS Engineering & Consulting",
    short:
      "Integrated environment, health, and safety consulting aligned to national and global standards.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Environmental Compliance",
      "EIA",
      "HAZOP",
      "COSHH",
      "ESG",
      "Safety Audits",
      "Fire Audits",
      "LOTO",
      "Machine Guarding",
      "Emergency Planning",
      "Chemical Safety",
      "Accident Investigation",
      "HIRA",
      "JSA",
    ],
  },
  {
    slug: "ehs-training",
    title: "Professional EHS Training",
    short:
      "Practical, industry-aligned training programs that build workforce competence and culture.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Fire Fighting",
      "First Aid",
      "CPR",
      "Working at Height",
      "Electrical Safety",
      "LOTO",
      "HIRA",
      "Crane Safety",
      "Rigging",
      "Scaffold",
      "Chemical Safety",
      "Confined Space",
      "Leadership",
      "BBS",
      "Warehouse Safety",
      "Road Safety",
    ],
  },
  {
    slug: "digital-ai",
    title: "Digital Automation & AI",
    short:
      "Digital permit systems, AI monitoring, IoT detection, and ESG intelligence platforms.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    items: [
      "AI Safety Monitoring",
      "IoT Safety",
      "Digital Permit to Work",
      "Digital LOTO",
      "Mobile Apps",
      "Safety Dashboards",
      "Safety Software",
      "AI Cameras",
      "Digital Signage",
      "ESG Intelligence",
    ],
  },
  {
    slug: "safety-consultancy",
    title: "Safety Consultancy & Audits",
    short:
      "Independent audits, ISO consulting, documentation, and emergency readiness programs.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Fire Audit",
      "Electrical Audit",
      "Machine Guarding Audit",
      "ISO Consulting",
      "Carbon Footprint",
      "Contractor Safety",
      "Safety Documentation",
      "Emergency Planning",
      "General Safety Audit",
    ],
  },
];

export const projects = [
  { name: "Bridgestone", sector: "Manufacturing" },
  { name: "Tata", sector: "Industrial Group" },
  { name: "Nubeno", sector: "Industrial" },
  { name: "URC", sector: "Manufacturing" },
  { name: "Tata Agrico", sector: "Tools & Manufacturing" },
  { name: "Tata Autocomp", sector: "Automotive" },
  { name: "Tata EV", sector: "Electric Mobility" },
];

export const experts = [
  {
    role: "Fire Consultant",
    focus: "Fire engineering, NOC, protection systems",
    certifications: ["NBC / IS / NFPA aligned practice", "Fire Risk Assessment"],
  },
  {
    role: "ESG Expert",
    focus: "ESG strategy, reporting & carbon programs",
    certifications: ["ESG Assessment", "GHG / Carbon Footprint"],
  },
  {
    role: "Safety Expert",
    focus: "Occupational safety systems & culture",
    certifications: ["ISO 45001", "HIRA / JSA / BBS"],
  },
  {
    role: "Electrical Expert",
    focus: "Electrical safety, LOTO & audits",
    certifications: ["Electrical Safety Audit", "LOTO Implementation"],
  },
  {
    role: "Digital Safety Expert",
    focus: "AI monitoring, e-PTW & dashboards",
    certifications: ["Digital PTW / LOTO", "IoT Safety Systems"],
  },
  {
    role: "Environment Advisor",
    focus: "Environmental compliance & EIA support",
    certifications: ["Environmental Compliance", "EIA / COSHH"],
  },
];

export const testimonials = [
  {
    quote: "Professional, knowledgeable and highly responsive.",
    author: "Plant Head",
    company: "Manufacturing Client",
    rating: 5,
  },
  {
    quote: "Excellent Fire Safety Consulting Team.",
    author: "EHS Manager",
    company: "Infrastructure Project",
    rating: 5,
  },
  {
    quote: "Highly recommended for Industrial EHS.",
    author: "Operations Lead",
    company: "Process Industry",
    rating: 5,
  },
];

export const stats = [
  { value: 360, suffix: "°", label: "Integrated Safety Coverage" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "+", label: "Projects & Engagements" },
  { value: 24, suffix: "/7", label: "Support Commitment" },
];

export const faqs = [
  {
    question: "Do you help obtain Fire NOC from local authorities?",
    answer:
      "Yes. We support Fire NOC documentation, system readiness, liaison, and compliance alignment with applicable codes and authority requirements.",
  },
  {
    question: "Can you deliver end-to-end fire protection systems?",
    answer:
      "We cover design, engineering, supply, installation, testing, commissioning, and AMC for hydrant, sprinkler, alarm, foam, CO₂, water mist, and related systems.",
  },
  {
    question: "Do you provide on-site industrial safety training?",
    answer:
      "Yes. Our programs include fire fighting, first aid/CPR, working at height, LOTO, confined space, chemical safety, BBS, leadership, and sector-specific modules.",
  },
  {
    question: "What digital safety solutions do you offer?",
    answer:
      "We implement AI safety monitoring, IoT detection, digital permit-to-work, digital LOTO, mobile apps, dashboards, and ESG intelligence tools.",
  },
  {
    question: "Which locations do you operate from?",
    answer:
      "We operate from Nagpur (Maharashtra) and Raipur (Chhattisgarh), supporting projects across India.",
  },
];

export const blogPosts = [
  {
    slug: "fire-noc-checklist-india",
    title: "Fire NOC Checklist for Industrial Facilities in India",
    excerpt:
      "A practical readiness checklist covering documentation, system design, and authority expectations.",
    category: "Fire Safety",
    date: "2026-03-12",
    readTime: "6 min",
  },
  {
    slug: "loto-implementation-best-practices",
    title: "LOTO Implementation Best Practices for Process Plants",
    excerpt:
      "How to build a lockout/tagout program that works on the shop floor—not just on paper.",
    category: "EHS",
    date: "2026-02-20",
    readTime: "7 min",
  },
  {
    slug: "ai-safety-monitoring-factories",
    title: "How AI Safety Monitoring Improves Factory Risk Control",
    excerpt:
      "Cameras, analytics, and dashboards that help teams detect unsafe acts before incidents escalate.",
    category: "Digital Safety",
    date: "2026-01-18",
    readTime: "5 min",
  },
];

export const careers = [
  {
    title: "Fire Safety Engineer",
    location: "Nagpur / Project Sites",
    type: "Full-time",
    summary: "Lead fire audits, system design reviews, and commissioning support.",
  },
  {
    title: "EHS Consultant",
    location: "Raipur / Pan-India",
    type: "Full-time",
    summary: "Deliver safety audits, HIRA/JSA programs, and compliance consulting.",
  },
  {
    title: "Digital Safety Specialist",
    location: "Hybrid",
    type: "Full-time",
    summary: "Configure e-PTW, digital LOTO, and AI monitoring deployments.",
  },
];

export const downloads = [
  {
    title: "Company Profile",
    description: "Overview of Safety Sphere Solution capabilities and sectors.",
    file: "/downloads/company-profile.pdf",
  },
  {
    title: "Service Brochure",
    description: "Fire, EHS, training, ESG, and digital safety service summary.",
    file: "/downloads/service-brochure.pdf",
  },
];

export const vision =
  "To become India's most trusted provider of Fire, Safety, ESG and Digital Industrial Solutions while helping organizations build sustainable workplaces.";

export const mission =
  "Empower industries with knowledge, technology, engineering expertise and integrated services to create safer workplaces.";

export const aboutIntro =
  "Safety Sphere Solution is a trusted industrial safety consulting company delivering innovation-led, integrated solutions across Fire Protection Engineering, Environment, Health & Safety, ESG Consulting, Digital Safety, AI Safety Monitoring, Safety Trainings, and Compliance Consulting.";
