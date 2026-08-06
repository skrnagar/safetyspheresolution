import {
  Award,
  BadgeCheck,
  Brain,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Factory,
  Flame,
  Handshake,
  HardHat,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Recycle,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Target,
  Users,
  Wallet,
  Workflow,
  Zap,
  Bolt,
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
      { label: "How We Work", href: "/#process" },
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
        description: "NOC, detection, suppression, design & AMC",
      },
      {
        label: "Electrical & Fire Compliance Audits",
        href: "/services/electrical-fire-compliance-audits",
        description: "Electrical, fire, thermography & arc flash",
      },
      {
        label: "EHS Engineering & Consulting",
        href: "/services/ehs-engineering",
        description: "Compliance, HAZOP, HIRA, ESG & more",
      },
      {
        label: "Construction HSE Management",
        href: "/services/construction-hse",
        description: "Site HSE plans, contractor control & audits",
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
        description: "ISO, TVRA-aligned, life safety audits",
      },
      {
        label: "Physical Security & Life Safety",
        href: "/services/physical-security-life-safety",
        description: "Access, CCTV, fire-life safety & BCP",
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
    id: "overview",
    label: "Overview",
    eyebrow: "India · Fire · EHS · Digital Safety",
    title: "360° Fire, EHS & Digital Safety Solutions",
    description:
      "Empowering industries with safer, smarter and sustainable workplaces—from fire engineering and compliance audits to ESG and AI safety monitoring.",
    primaryCta: { label: "Get Free Consultation", href: "/contact" },
    secondaryCta: { label: "Explore Services", href: "/services" },
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "fire-safety",
    label: "Fire Safety",
    eyebrow: "Fire Safety Engineering",
    title: "Fire protection engineered for industrial risk",
    description:
      "Fire risk assessment, hydrant & alarm systems, aspirating smoke detection, and Fire NOC support aligned to NBC and local authority requirements.",
    primaryCta: { label: "Request Fire Audit", href: "/contact" },
    secondaryCta: {
      label: "Fire Safety Services",
      href: "/services/fire-safety-engineering",
    },
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "electrical-audits",
    label: "Compliance",
    eyebrow: "Electrical & Fire Compliance",
    title: "Audits that prevent downtime and fire loss",
    description:
      "Thermography, electrical safety audits, arc flash studies, and fire compliance reviews that close gaps before they become incidents.",
    primaryCta: { label: "Book a Compliance Audit", href: "/contact" },
    secondaryCta: {
      label: "Audit Services",
      href: "/services/electrical-fire-compliance-audits",
    },
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "construction-hse",
    label: "Construction",
    eyebrow: "Construction HSE",
    title: "Site safety that keeps projects moving",
    description:
      "HSE planning, induction, inspections, and contractor control for metro, infrastructure, and industrial construction sites across India.",
    primaryCta: { label: "Talk to an HSE Expert", href: "/contact" },
    secondaryCta: {
      label: "Construction HSE",
      href: "/services/construction-hse",
    },
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "digital-ai",
    label: "Digital Safety",
    eyebrow: "Digital & AI Safety",
    title: "Smarter monitoring for safer operations",
    description:
      "Digital safety systems and AI-assisted monitoring that help manufacturing, power, and logistics teams spot hazards earlier and act faster.",
    primaryCta: { label: "See Digital Solutions", href: "/contact" },
    secondaryCta: {
      label: "Digital & AI Safety",
      href: "/services/digital-ai",
    },
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2000&q=80",
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
      "End-to-end fire protection engineering—detection, suppression, NOC support, compliance audits, and lifecycle AMC.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Fire Safety Compliance Audit",
      "Fire Risk Assessment",
      "Fire Load Calculation",
      "Fire NOC Support",
      "Addressable Fire Alarm Systems",
      "Conventional Fire Alarm Systems",
      "Aspirating Smoke Detection (VESDA/ASD)",
      "Smoke, Heat & Multi-Criteria Sensors",
      "Fire Hydrant & Hose Reel Systems",
      "Sprinkler Systems",
      "Foam Systems",
      "CO₂ & Clean Agent Flooding",
      "Water Mist Systems",
      "Public Address & Notification Appliances",
      "Fire Extinguishers Supply & Refilling",
      "Fire System Design (NBC / IS / NFPA)",
      "Installation, Testing & Commissioning",
      "Fire AMC & Breakdown Support",
      "System Upgrades & Expansions",
      "Remote Monitoring Ready Architecture",
    ],
  },
  {
    slug: "electrical-fire-compliance-audits",
    title: "Electrical & Fire Compliance Audits",
    short:
      "Detailed electrical and fire safety compliance audits with thermography, arc flash, power quality, and actionable rectification guidance.",
    icon: Bolt,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Electrical Safety Audit",
      "Fire Safety Compliance Audit",
      "Thermography / Infrared Audit",
      "Arc Flash Study",
      "Power Quality Study",
      "Electrical Load Study",
      "Lightning Protection Study",
      "Fire Load Study",
      "Panel & Cable Condition Assessment",
      "Earthing System Verification",
      "CEA / IS Compliance Review",
      "Live-Line Assessment Approach",
      "Risk Prioritization & Heat Maps",
      "Post-Audit Rectification BOQ",
      "Vendor Coordination Support",
      "Re-Audit & Closure Verification",
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
      "Environment Impact Assessment (EIA)",
      "HAZOP Studies",
      "COSHH Assessment",
      "ESG Assessment & Reporting Support",
      "Safety Audits",
      "Fire Audits",
      "LOTO Assessment & Implementation",
      "Machine Guarding Solutions",
      "Emergency Preparedness Plans",
      "Chemical Safety Management",
      "Accident Investigation & RCA",
      "HIRA",
      "JSA",
      "Onsite / Offsite Emergency Plans",
      "Evacuation Layouts",
      "Hazardous Substances Register",
      "Waste & Water Management Guidance",
    ],
  },
  {
    slug: "construction-hse",
    title: "Construction HSE Management",
    short:
      "Construction-site HSE systems, documentation, contractor control, and continuous compliance support through project lifecycle.",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Construction HSE Plan & Manual",
      "Site HSE Team Setup Support",
      "Legal Compliance Tracking",
      "Contractor Pre-Qualification",
      "Contractor HSE Audits",
      "Permit to Work Systems",
      "Scaffold & Crane Coordination Support",
      "Working at Height Controls",
      "Fire Prevention Concepts for Sites",
      "Inspection & Toolbox Talk Schedules",
      "Training & Induction Documents",
      "Incident Reporting Systems",
      "Hazardous Materials Controls",
      "Environmental Site Controls",
      "Permit & Approval Coordination",
      "Post-Project HSE Documentation",
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
      "Fire Fighting & Mock Drills",
      "First Aid & CPR",
      "Working at Height",
      "Electrical Safety Training",
      "LOTO Training",
      "HIRA Training",
      "Crane Safety",
      "Rigging & Lifting",
      "Scaffold Safety",
      "Chemical Handling & MSDS",
      "Confined Space",
      "Leadership Safety Programs",
      "Behavior-Based Safety (BBS)",
      "Warehouse Safety",
      "Road Safety & Driving Behavior",
      "Construction Site Safety",
      "Maintenance & PPM Safety",
      "Emergency Response & Rescue",
    ],
  },
  {
    slug: "digital-ai",
    title: "Digital Automation & AI",
    short:
      "Digital permit systems, AI monitoring, IoT detection, remote dashboards, and ESG intelligence platforms.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    items: [
      "AI Safety Monitoring",
      "AI Camera Analytics",
      "IoT / VESDA Detection Integration",
      "Digital Permit to Work (e-PTW)",
      "Digital LOTO",
      "Mobile Safety Apps",
      "Safety Dashboards",
      "Safety Management Software",
      "Remote Alarm Monitoring Readiness",
      "Digital Signage & Safety Boards",
      "ESG Data Intelligence",
      "AR/VR Safety Simulation Support",
      "Custom Safety Videos",
      "Control Room Integration Support",
    ],
  },
  {
    slug: "safety-consultancy",
    title: "Safety Consultancy & Audits",
    short:
      "Independent audits, ISO consulting, documentation, TVRA-aligned assessments, and emergency readiness programs.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Fire Safety Compliance Audit",
      "Electrical Safety Audit",
      "Machine Guarding Audit",
      "General Safety Audit",
      "ISO 45001 / 14001 Consulting",
      "Carbon Footprint Assessment",
      "Contractor Safety Management",
      "Safety Documentation & SOPs",
      "Emergency Action Planning",
      "Threat Vulnerability Risk Assessment Support",
      "Hotel / Campus / Facility Safety Audit",
      "Data Centre Safety Review",
      "Business Continuity Planning Support",
      "Crisis Management Tabletop Drills",
    ],
  },
  {
    slug: "physical-security-life-safety",
    title: "Physical Security & Life Safety",
    short:
      "Integrated physical security and fire-life safety assessments covering access control, surveillance, evacuation, and crisis readiness.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Physical Security Risk Assessment",
      "Access Control Gap Analysis",
      "CCTV & Surveillance Blind Spot Review",
      "Fire & Life Safety Gap Assessment",
      "Evacuation Readiness Review",
      "Emergency Preparedness Audit",
      "Site Security Plan Support",
      "SOP Development for Security Operations",
      "Intrusion Detection Design Inputs",
      "Control Room Process Review",
      "Event & Mass Gathering Safety Support",
      "Business Continuity Framework Support",
      "Crisis Simulation Drills",
      "Leadership Security Debrief Reports",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover & Scope",
    description:
      "Understand your facility, risk profile, compliance goals, and operational constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Assess On Ground",
    description:
      "Conduct structured audits, walkdowns, instrument checks, and stakeholder interviews.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Prioritize Risks",
    description:
      "Rate findings by likelihood and business impact with clear heat maps and action order.",
    icon: Target,
  },
  {
    step: "04",
    title: "Design & Implement",
    description:
      "Deliver engineering designs, system upgrades, training, digital tools, and documentation.",
    icon: Workflow,
  },
  {
    step: "05",
    title: "Verify & Sustain",
    description:
      "Support commissioning, AMC, re-audits, and continuous improvement for lasting compliance.",
    icon: CheckCircle2,
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
    question: "What is included in a Fire Safety Compliance Audit?",
    answer:
      "We assess detection and suppression readiness, evacuation arrangements, documentation gaps, code compliance (NBC/IS/NFPA aligned), and provide a prioritized action plan with rectification guidance.",
  },
  {
    question: "Is shutdown required for electrical or fire audits?",
    answer:
      "Wherever feasible, we plan assessments to minimize operational disruption. Many checks can be performed with controlled live-line methods; critical interventions are scheduled around your production windows.",
  },
  {
    question: "Can you deliver end-to-end fire protection systems?",
    answer:
      "We cover design, engineering, supply, installation, testing, commissioning, and AMC for hydrant, sprinkler, alarm, aspirating detection, foam, CO₂, water mist, and related systems.",
  },
  {
    question: "Do you provide construction site HSE management?",
    answer:
      "Yes. We support HSE plans, contractor controls, site induction documents, permits, inspections, fire prevention concepts, and continuous compliance through the construction lifecycle.",
  },
  {
    question: "Do you offer physical security and life-safety assessments?",
    answer:
      "Yes. We review access control, CCTV blind spots, fire-life safety gaps, emergency preparedness, and crisis readiness—then deliver prioritized recommendations for leadership.",
  },
  {
    question: "Do you provide on-site industrial safety training?",
    answer:
      "Yes. Our programs include fire fighting, first aid/CPR, working at height, LOTO, confined space, chemical safety, BBS, leadership, and sector-specific modules.",
  },
  {
    question: "What digital safety solutions do you offer?",
    answer:
      "We implement AI safety monitoring, IoT detection, digital permit-to-work, digital LOTO, mobile apps, dashboards, remote monitoring readiness, and ESG intelligence tools.",
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
    slug: "fire-safety-compliance-audit-guide",
    title: "Fire Safety Compliance Audit: What Industrial Sites Must Check",
    excerpt:
      "How a structured compliance audit reduces fire risk, closes documentation gaps, and prepares facilities for inspections.",
    category: "Fire Safety",
    date: "2026-04-02",
    readTime: "7 min",
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
    slug: "electrical-thermography-audit-plants",
    title: "Why Thermography Should Be Part of Every Electrical Safety Audit",
    excerpt:
      "Infrared scanning helps catch hotspots early—before failures become fires, downtime, or compliance findings.",
    category: "Electrical Safety",
    date: "2026-03-28",
    readTime: "5 min",
  },
  {
    slug: "construction-hse-management-essentials",
    title: "Construction HSE Management Essentials for Safer Sites",
    excerpt:
      "HSE plans, contractor controls, and inspection rhythms that keep projects safe without slowing delivery.",
    category: "Construction HSE",
    date: "2026-02-05",
    readTime: "6 min",
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
    title: "Electrical Safety Auditor",
    location: "Nagpur / Pan-India",
    type: "Full-time",
    summary: "Execute electrical audits, thermography reviews, and compliance reporting.",
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
    description:
      "Fire, electrical audits, EHS, construction HSE, training, ESG, and digital safety summary.",
    file: "/downloads/service-brochure.pdf",
  },
];

export const vision =
  "To become India's most trusted provider of Fire, Safety, ESG and Digital Industrial Solutions while helping organizations build sustainable workplaces.";

export const mission =
  "Empower industries with knowledge, technology, engineering expertise and integrated services to create safer workplaces.";

export const aboutIntro =
  "Safety Sphere Solution is a trusted industrial safety consulting company delivering innovation-led, integrated solutions across Fire Protection Engineering, Electrical & Fire Compliance Audits, Environment, Health & Safety, Construction HSE, ESG Consulting, Physical Security & Life Safety, Digital Safety, AI Safety Monitoring, Safety Trainings, and Compliance Consulting.";
