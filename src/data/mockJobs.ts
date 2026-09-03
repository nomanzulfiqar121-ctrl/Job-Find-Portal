import { Job } from '../types';

export const INITIAL_JOBS: Job[] = [
  // --- Corporate / Private Sector Jobs ---
  {
    id: 'job-1',
    title: 'Senior Full-Stack Cloud Engineer',
    company: 'Stripe',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'San Francisco, CA',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 175000,
    salaryMax: 220000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Software & Technology',
    postedDate: '1 day ago',
    urgent: true,
    featured: true,
    applicantsCount: 34,
    description: 'Stripe is building the economic infrastructure for the internet. As a Senior Full-Stack Cloud Engineer, you will architect resilient distributed payment orchestration services, high-throughput webhooks, and developer dashboard interfaces processing billions in volume daily.',
    responsibilities: [
      'Design, implement, and scale fault-tolerant microservices handling global payment settlements',
      'Collaborate with product designers and frontend teams to deliver frictionless merchant dashboard experiences',
      'Optimize database query execution and caching strategies using PostgreSQL, Redis, and Kafka',
      'Mentor mid-level engineers and conduct rigorous architectural design reviews',
      'Ensure strict adherence to PCI-DSS compliance and financial data security protocols'
    ],
    requirements: [
      '6+ years of production experience building high-scale distributed systems',
      'Demonstrated fluency in TypeScript/React, Go, or Ruby/Java on AWS or GCP infrastructure',
      'Deep understanding of transactional integrity, idempotent API design, and asynchronous message queues',
      'Solid experience with Docker, Kubernetes, and automated CI/CD pipelines',
      'B.S. or M.S. in Computer Science or equivalent practical industry engineering experience'
    ],
    benefits: [
      'Comprehensive medical, dental, and vision insurance coverage with 100% employer contribution',
      'Annual equity grants (RSUs) with competitive vesting schedule',
      '$3,500 annual home-office equipment and continuous professional education stipend',
      'Generous 25 days paid vacation plus 12 company holidays and flexible parental leave',
      '401(k) matching dollar-for-dollar up to 6%'
    ],
    skills: ['TypeScript', 'Go', 'Kubernetes', 'PostgreSQL', 'Distributed Systems', 'AWS'],
    companyInfo: {
      about: 'Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size use our software to accept payments and manage their businesses online.',
      size: '8,000+ employees',
      founded: 2010,
      industry: 'Financial Technology / Cloud Infrastructure',
      website: 'https://stripe.com',
      hq: 'San Francisco, California'
    }
  },
  {
    id: 'job-2',
    title: 'Lead Product Designer (Design Systems)',
    company: 'Linear Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'New York, NY',
    country: 'United States',
    workMode: 'Remote',
    employmentType: 'Full-Time',
    salaryMin: 160000,
    salaryMax: 195000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Lead / Principal',
    category: 'Design & Creative',
    postedDate: '3 days ago',
    urgent: false,
    featured: true,
    applicantsCount: 22,
    description: 'We are seeking an obsessive craftsman to lead our core design system and foundational UI library. You will define the typography, spatial rhythm, interactive states, and accessibility standards powering high-velocity engineering teams.',
    responsibilities: [
      'Own the cross-platform multi-brand design tokens, component architecture, and interaction guidelines in Figma and React code',
      'Partner closely with frontend architects to ensure 100% token-parity between design specifications and production code',
      'Conduct rigorous accessibility (WCAG 2.1 AAA) evaluations across complex data grids, keyboard shortcuts, and dark mode palettes',
      'Run bi-weekly design clinics and author best-practice documentation for product designers across multiple product pillars'
    ],
    requirements: [
      '7+ years designing world-class digital products and multi-platform enterprise design systems',
      'Exceptional taste in typography, micro-interactions, layout geometry, and motion design',
      'Working fluency in HTML/CSS/Tailwind and modern frontend component libraries',
      'Proven track record of publishing and evolving widely adopted component libraries at scale'
    ],
    benefits: [
      'Competitive base salary + early-stage venture equity',
      'Work from anywhere in the Americas / EU with $4,000 ergonomic desk budget',
      'Unlimited paid time off with mandatory 4 weeks minimum policy',
      'Top-tier health insurance for employee and dependents',
      'Annual in-person design retreats in Lisbon and Tokyo'
    ],
    skills: ['Figma', 'Design Systems', 'Token Architecture', 'WCAG AAA', 'Tailwind CSS', 'Prototyping'],
    companyInfo: {
      about: 'Linear creates purpose-built tools for high-performance software teams, redefining the standard for modern enterprise productivity software.',
      size: '120+ team members',
      founded: 2019,
      industry: 'Software / Productivity Tools',
      website: 'https://linear.app',
      hq: 'San Francisco, CA'
    }
  },
  {
    id: 'job-3',
    title: 'Senior Quantitative Financial Analyst',
    company: 'Morgan Stanley',
    companyLogo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'Boston, MA',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 155000,
    salaryMax: 190000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Finance & Banking',
    postedDate: 'Just now',
    urgent: true,
    featured: true,
    applicantsCount: 15,
    description: 'Join Morgan Stanley Global Wealth Management. In this role, you will synthesize macroeconomic modeling, derivative pricing mechanics, and algorithmic portfolio allocation algorithms to advise institutional asset managers and pension endowments.',
    responsibilities: [
      'Construct quantitative predictive models forecasting sovereign bond yields and equity risk premia',
      'Automate automated variance backtesting pipelines utilizing Python, pandas, and Bloomberg Terminal APIs',
      'Present executive risk evaluations and capital adequacy reports to senior investment committees',
      'Collaborate with portfolio managers to stress-test high-beta holdings against geopolitical volatility'
    ],
    requirements: [
      '5+ years quantitative finance, risk analytics, or actuarial modeling experience',
      'Advanced proficiency in Python (NumPy, SciPy, statsmodels), SQL, and quantitative backtesting engines',
      'CFA charterholder or progress towards Level III strongly preferred',
      'Degree in Financial Engineering, Mathematics, Statistics, or Quantitative Economics'
    ],
    benefits: [
      'Lucrative discretionary performance bonus pool',
      'Comprehensive global healthcare, executive dental, and life assurance package',
      'Tuition reimbursement for executive education and CFA/FRM charter maintenance',
      'Wellness stipend including on-site fitness facilities and mental wellness support'
    ],
    skills: ['Python', 'Quantitative Modeling', 'Risk Management', 'SQL', 'Bloomberg', 'CFA'],
    companyInfo: {
      about: 'Morgan Stanley is a premier global financial services firm providing investment banking, securities, wealth management, and investment management services.',
      size: '80,000+ employees',
      founded: 1935,
      industry: 'Investment Banking & Capital Markets',
      website: 'https://morganstanley.com',
      hq: 'New York, NY'
    }
  },
  {
    id: 'job-4',
    title: 'AI / Machine Learning Infrastructure Architect',
    company: 'Databricks',
    companyLogo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'Seattle, WA',
    country: 'United States',
    workMode: 'Remote',
    employmentType: 'Full-Time',
    salaryMin: 210000,
    salaryMax: 260000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Software & Technology',
    postedDate: '2 days ago',
    urgent: true,
    featured: true,
    applicantsCount: 47,
    description: 'Architect next-generation GPU cluster management and distributed training pipelines powering enterprise large language models and multi-petabyte data lakes.',
    responsibilities: [
      'Engineer fault-tolerant orchestration layers for thousands of NVIDIA H100/A100 accelerators via Kubernetes and Slurm',
      'Optimize tensor parallelism and deep learning model checkpointing latency across multi-cloud topologies',
      'Collaborate with research scientists to benchmark inference serving throughput using vLLM and TensorRT-LLM',
      'Design automated cost-governance dashboards tracking compute utilization across enterprise accounts'
    ],
    requirements: [
      '6+ years architecting cloud infrastructure with at least 3 years focused on ML/deep learning systems',
      'Hands-on mastery of CUDA memory profiling, PyTorch distributed primitives (FSDP, Megatron-LM), and Ray',
      'Deep expertise in Linux kernel tuning, high-bandwidth interconnects (InfiniBand/RoCE), and object storage systems',
      'Strong programming proficiency in Python, C++, and Go'
    ],
    benefits: [
      'Substantial pre-IPO equity valuation and attractive refresher grants',
      'Total remote flexibility with home office buildout budget of $5,000',
      'Comprehensive platinum healthcare plan with zero employee deductible',
      'Annual learning stipend for attending top research conferences (NeurIPS, ICML, OSDI)'
    ],
    skills: ['PyTorch', 'CUDA', 'Distributed ML', 'Kubernetes', 'Ray', 'C++ / Python'],
    companyInfo: {
      about: 'Databricks combines data warehouses and data lakes into a lakehouse architecture, unifying data engineering, data science, and business analytics.',
      size: '6,500+ employees',
      founded: 2013,
      industry: 'Cloud Software & Artificial Intelligence',
      website: 'https://databricks.com',
      hq: 'San Francisco, CA'
    }
  },
  {
    id: 'job-5',
    title: 'Clinical Operations Director - Oncology Trials',
    company: 'AstraZeneca',
    companyLogo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'Cambridge, MA',
    country: 'United States',
    workMode: 'On-Site',
    employmentType: 'Full-Time',
    salaryMin: 185000,
    salaryMax: 230000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Executive',
    category: 'Healthcare & Life Sciences',
    postedDate: '4 days ago',
    urgent: false,
    featured: false,
    applicantsCount: 18,
    description: 'Direct global Phase II/III clinical trial operations for novel antibody-drug conjugates targeting refractory solid tumors. You will lead cross-functional study teams and regulatory agency submissions.',
    responsibilities: [
      'Oversee clinical trial execution across 80+ international clinical study sites across North America and Europe',
      'Ensure strict compliance with GCP/ICH guidelines, FDA 21 CFR Part 312, and EMA regulatory frameworks',
      'Manage contract research organization (CRO) partnerships, budget milestones ($45M+ envelope), and vendor deliverables',
      'Present safety monitoring committee updates and clinical study report summaries to therapeutic area leadership'
    ],
    requirements: [
      '8+ years directing pharmaceutical clinical trials with significant focus in immuno-oncology',
      'Advanced degree (Ph.D., PharmD, M.D., or M.S. in Life Sciences / Clinical Research)',
      'Expertise in electronic data capture (Medidata Rave), trial master files (Veeva eTMF), and CTMS software',
      'Demonstrated experience liaising with FDA, PMDA, or EMA regulatory bodies'
    ],
    benefits: [
      'Executive annual bonus target (25-35%) + Long-Term Incentive Program (LTIP)',
      'Company car allowance / executive transit subsidy',
      'Comprehensive executive medical and sabbatical program every 5 years',
      'Relocation assistance package available for qualified candidates'
    ],
    skills: ['Clinical Trials', 'FDA / GCP', 'Oncology', 'Veeva eTMF', 'CRO Oversight', 'Budget Management'],
    companyInfo: {
      about: 'AstraZeneca is a global, science-led biopharmaceutical company focused on the discovery, development, and commercialization of prescription medicines.',
      size: '89,000+ employees',
      founded: 1999,
      industry: 'Pharmaceuticals & Biotechnology',
      website: 'https://astrazeneca.com',
      hq: 'Cambridge, United Kingdom'
    }
  },
  {
    id: 'job-6',
    title: 'Senior People Operations & Talent Partner',
    company: 'Figma',
    companyLogo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'San Francisco, CA',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 140000,
    salaryMax: 175000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Human Resources',
    postedDate: '2 days ago',
    urgent: false,
    featured: false,
    applicantsCount: 29,
    description: 'Partner with engineering and executive leadership to architect progressive performance frameworks, inclusive hiring pipelines, and global talent retention programs for high-performing product orgs.',
    responsibilities: [
      'Advise VP and Director-level leaders on organizational design, headcount planning, and succession strategies',
      'Analyze employee engagement metrics and compensation leveling across US and international hubs',
      'Design modern onboarding pathways ensuring rapid time-to-productivity for technical new hires',
      'Resolve complex employee relations matters with empathy, legal rigor, and procedural fairness'
    ],
    requirements: [
      '5+ years as an HR Business Partner or People Operations leader in high-growth technology environments',
      'Deep fluency in California and federal labor laws, compensation benchmarking, and equity structures',
      'Superb interpersonal communication and data analysis capabilities (Workday, Lattice, Culture Amp)',
      'Passionate champion for diverse, equitable, and inclusive team environments'
    ],
    benefits: [
      'Equity package in high-growth design technology leader',
      'Catered organic lunches, snacks, and craft beverages at SF headquarters',
      'Annual $3,000 wellness and mental health reimbursement',
      '16 weeks paid parental leave for all new parents regardless of gender'
    ],
    skills: ['People Operations', 'HRBP', 'Org Design', 'Compensation Strategy', 'Workday', 'Talent Analytics'],
    companyInfo: {
      about: 'Figma connects everyone in the design process so teams can build better products, faster. Used by millions of designers and developers worldwide.',
      size: '1,400+ employees',
      founded: 2012,
      industry: 'Design & Collaboration Software',
      website: 'https://figma.com',
      hq: 'San Francisco, CA'
    }
  },
  {
    id: 'job-7',
    title: 'Senior Enterprise Solutions Architect',
    company: 'Amazon Web Services (AWS)',
    companyLogo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'Austin, TX',
    country: 'United States',
    workMode: 'Remote',
    employmentType: 'Full-Time',
    salaryMin: 180000,
    salaryMax: 235000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Lead / Principal',
    category: 'Software & Technology',
    postedDate: '5 days ago',
    urgent: false,
    featured: true,
    applicantsCount: 41,
    description: 'Help Fortune 500 enterprises architect resilient migration blueprints to AWS cloud services, modernizing mission-critical SAP, mainframe, and real-time streaming workloads.',
    responsibilities: [
      'Act as the primary technical advisor to CTOs and VP of Engineering at strategic enterprise customers',
      'Formulate reference architectures using serverless computing, multi-region database failover, and zero-trust security',
      'Author whitepapers and present keynotes at AWS re:Invent and regional cloud summits',
      'Work backwards from customer requirements to unblock complex migration hurdles'
    ],
    requirements: [
      '7+ years customer-facing technical architecture or systems engineering experience',
      'AWS Certified Solutions Architect - Professional or Specialty certifications',
      'Broad knowledge across compute, networking (VPC, Direct Connect), security (IAM, KMS), and storage',
      'Excellent written and verbal executive presentation skills'
    ],
    benefits: [
      'Amazon restricted stock unit (RSU) award plan',
      'Comprehensive medical, dental, prescription, and vision benefits',
      'Adoption assistance and parental leave programs',
      'Extensive career progression paths across AWS worldwide business units'
    ],
    skills: ['AWS Architecture', 'Cloud Migration', 'Enterprise Security', 'Serverless', 'Terraform', 'Executive Consulting'],
    companyInfo: {
      about: 'Amazon Web Services is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.',
      size: '100,000+ employees',
      founded: 2006,
      industry: 'Cloud Infrastructure & Services',
      website: 'https://aws.amazon.com',
      hq: 'Seattle, WA'
    }
  },
  {
    id: 'job-8',
    title: 'Senior Product Marketing Manager (B2B SaaS)',
    company: 'Notion',
    companyLogo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'New York, NY',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 150000,
    salaryMax: 185000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Mid-Level',
    category: 'Marketing & Communications',
    postedDate: '3 days ago',
    urgent: false,
    featured: false,
    applicantsCount: 38,
    description: 'Lead go-to-market strategies for Notion AI and enterprise workspace collaboration tools. You will define positioning, coordinate multi-channel product launches, and empower enterprise sales teams.',
    responsibilities: [
      'Craft compelling value propositions and narrative frameworks that differentiate Notion in the enterprise productivity market',
      'Lead cross-functional launch campaigns across product, sales, customer success, and public relations teams',
      'Produce customer case studies, competitive battlecards, and interactive product demo walkthroughs',
      'Conduct qualitative customer research to uncover adoption friction points and ICP buying motivations'
    ],
    requirements: [
      '4+ years in product marketing or product management within B2B SaaS organizations',
      'Superb storytelling and content creation capabilities with high design sensibility',
      'Analytical mindset with comfort interpreting SQL queries, Amplitude funnels, and Salesforce pipeline metrics',
      'Proven track record of orchestrating major product launches with measurable revenue impact'
    ],
    benefits: [
      'Competitive salary + meaningful company equity package',
      'Full healthcare coverage including medical, dental, and mental health therapy sessions',
      'Commuter benefits, daily catered lunches, and dog-friendly office space in Manhattan',
      'Generous annual educational stipend for books, conferences, and courses'
    ],
    skills: ['Go-To-Market', 'Product Marketing', 'Positioning', 'B2B SaaS', 'Customer Insights', 'Sales Enablement'],
    companyInfo: {
      about: 'Notion is the all-in-one workspace for notes, tasks, wikis, and databases, empowering individuals and companies to organize their work effortlessly.',
      size: '800+ employees',
      founded: 2016,
      industry: 'Productivity Software',
      website: 'https://notion.so',
      hq: 'San Francisco, CA'
    }
  },

  // --- Government & Public Sector Jobs ---
  {
    id: 'gov-1',
    title: 'Lead Cyber Threat Intelligence Analyst',
    company: 'Cybersecurity & Infrastructure Security Agency (CISA)',
    companyLogo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'government',
    department: 'U.S. Department of Homeland Security',
    gazetteNoticeNo: 'CISA-2026-HQ-0482',
    payScaleGrade: 'GS-14 Step 1-10',
    location: 'Arlington, VA (Washington Metro)',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 139000,
    salaryMax: 181000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Government & Public Sector',
    governmentCategory: 'Defense & Security',
    postedDate: '1 day ago',
    deadline: 'October 15, 2026',
    urgent: true,
    featured: true,
    applicantsCount: 27,
    eligibilityCriteria: [
      'United States Citizenship required',
      'Must possess or be eligible to obtain Top Secret / Sensitive Compartmented Information (TS/SCI) clearance',
      'Subject to pre-employment drug screening and counterintelligence polygraph',
      'Selective Service registration required for males born after 12/31/1959'
    ],
    description: 'Serve at the nation’s cyber defense nerve center. You will analyze nation-state threat actor tactics, techniques, and procedures (TTPs) targeting critical infrastructure sectors, issuing emergency directives and threat advisories safeguarding the nation.',
    responsibilities: [
      'Analyze raw telemetry from federal civilian executive branch (FCEB) networks and commercial threat feeds',
      'Produce actionable cyber threat advisories and Joint Cybersecurity Advisories with Five Eyes intelligence partners',
      'Track advanced persistent threat (APT) campaign infrastructure using MITRE ATT&CK and Diamond threat models',
      'Brief federal agency Chief Information Security Officers and critical infrastructure asset operators on emerging zero-day vulnerabilities'
    ],
    requirements: [
      '5+ years experience in cyber intelligence, threat hunting, or security operations center (SOC) environments',
      'Deep technical mastery of network protocols (DNS, BGP, TLS), malware staging mechanisms, and SIEM architectures (Splunk/Elastic)',
      'Recognized industry certifications preferred: CISSP, GCTI, GREM, or CEH',
      'Demonstrated experience authoring classified or public-facing intelligence reports with rigorous analytical tradecraft'
    ],
    benefits: [
      'Federal Employees Retirement System (FERS) defined-benefit pension + Thrift Savings Plan (TSP) with 5% agency match',
      'Federal Employees Health Benefits (FEHB) program with extensive provider network options',
      'Student Loan Repayment Program (SLRP) eligible (up to $10,000/year)',
      '13 to 26 days paid annual leave based on federal service tenure + 13 paid sick days + 11 federal holidays'
    ],
    skills: ['Threat Intelligence', 'MITRE ATT&CK', 'SIEM / Splunk', 'Network Forensics', 'TS/SCI Clearance', 'Advisory Writing'],
    companyInfo: {
      about: 'CISA is the operational lead for federal cybersecurity and the national coordinator for critical infrastructure security and resilience, working with partners across the globe.',
      size: '3,200+ civil servants',
      founded: 2018,
      industry: 'Federal Government / Cyber Defense',
      website: 'https://cisa.gov',
      hq: 'Arlington, VA'
    }
  },
  {
    id: 'gov-2',
    title: 'Senior Clinical Informatics Officer',
    company: 'National Health Service (NHS Digital)',
    companyLogo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'government',
    department: 'Digital Health & Care Directorate',
    gazetteNoticeNo: 'NHS-UK-2026-CLIN-994',
    payScaleGrade: 'NHS Agenda for Change Band 8b',
    location: 'London / Leeds',
    country: 'United Kingdom',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 62000,
    salaryMax: 76000,
    salaryCurrency: 'GBP',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Government & Public Sector',
    governmentCategory: 'Public Healthcare',
    postedDate: '3 days ago',
    deadline: 'September 28, 2026',
    urgent: false,
    featured: true,
    applicantsCount: 19,
    eligibilityCriteria: [
      'UK Right to Work or eligible for Skilled Worker Public Sector Visa',
      'Active professional registration with GMC, NMC, or HCPC',
      'Clearance: Standard / Enhanced DBS check mandatory'
    ],
    description: 'Bridge the clinical frontline and digital architecture. Lead the clinical safety assurance and rollout of unified electronic health records (EHR) and AI-assisted diagnostic triaging algorithms across regional healthcare trusts.',
    responsibilities: [
      'Conduct DCB0160 and DCB0129 clinical risk management assessments for digital healthcare software releases',
      'Provide clinical oversight for patient safety across algorithmic triage tools and telemedicine workflows',
      'Liaise between frontline consultants, nursing leads, software developers, and NHS Trust executive boards',
      'Ensure clinical terminologies (SNOMED CT, ICD-11) and FHIR API standards are correctly deployed across acute trusts'
    ],
    requirements: [
      'Registered healthcare professional with at least 4 years clinical experience and 3 years in healthcare informatics',
      'Thorough knowledge of NHS digital safety standards (DCB 0129 / DCB 0160)',
      'Experience with major EHR systems (Epic, Cerner, or System C)',
      'Exceptional stakeholder engagement skills navigating multidisciplinary clinical teams'
    ],
    benefits: [
      'NHS Pension Scheme — one of the most generous and secure career-average defined benefit schemes in the world',
      '27 days annual leave rising to 33 days with service, plus 8 public bank holidays',
      'Blue Light Card benefits (thousands of high street and travel discounts)',
      'Dedicated funded clinical academic research days'
    ],
    skills: ['Clinical Safety (DCB0129)', 'FHIR / SNOMED CT', 'Electronic Health Records', 'Patient Safety', 'Health Informatics'],
    companyInfo: {
      about: 'NHS Digital designs and delivers digital services and data solutions that support clinicians and improve outcomes for over 60 million patients in the UK.',
      size: '6,000+ team members',
      founded: 2013,
      industry: 'Public Healthcare Technology',
      website: 'https://digital.nhs.uk',
      hq: 'Leeds, UK'
    }
  },
  {
    id: 'gov-3',
    title: 'Clean Energy Grid Integration Specialist',
    company: 'Federal Energy Regulatory Commission (FERC)',
    companyLogo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'government',
    department: 'Office of Energy Policy and Innovation',
    gazetteNoticeNo: 'FERC-26-PUB-102',
    payScaleGrade: 'GS-13 Step 1-8',
    location: 'Washington, DC',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 118000,
    salaryMax: 153000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Mid-Level',
    category: 'Government & Public Sector',
    governmentCategory: 'Federal & National',
    postedDate: '4 days ago',
    deadline: 'October 30, 2026',
    urgent: false,
    featured: false,
    applicantsCount: 21,
    eligibilityCriteria: [
      'U.S. Citizenship required',
      'Public Trust / Secret clearance background investigation',
      'Degree in Electrical Engineering, Energy Systems, or Power Engineering'
    ],
    description: 'Evaluate regional transmission planning, wholesale power market rules, and interconnection queues for utility-scale solar, offshore wind, and long-duration battery storage systems connecting to the national grid.',
    responsibilities: [
      'Evaluate regional transmission organization (RTO/ISO) tariff filings concerning interconnection reforms (Order No. 2023)',
      'Perform steady-state power flow and dynamic stability simulations using PSS/E and PowerWorld software',
      'Draft Commission orders, regulatory rulemaking notices, and technical evaluations for FERC Commissioners',
      'Participate in public technical conferences addressing transmission capacity bottlenecks and extreme weather resilience'
    ],
    requirements: [
      'B.S. or M.S. in Electrical Engineering with concentration in Electric Power Systems',
      '3+ years experience in transmission planning, grid interconnection studies, or utility regulatory compliance',
      'Proficiency with power systems simulation tools (PSS/E, PSLF, or ASPEN)',
      'Clear and persuasive technical writing abilities for legal and administrative dockets'
    ],
    benefits: [
      'Comprehensive Federal Employee Benefits Package (FEHB, FEGLI, FEDVIP)',
      'Transit subsidy covering up to $300/month for public transportation in Washington DC metro',
      'Flexible alternative work schedules (AWS) with every other Friday off',
      'Thrift Savings Plan (TSP) with 5% government matching'
    ],
    skills: ['Power Systems', 'Grid Interconnection', 'PSS/E', 'Regulatory Policy', 'Renewable Energy', 'FERC Compliance'],
    companyInfo: {
      about: 'FERC is an independent federal agency that regulates the interstate transmission of natural gas, oil, and electricity, and reviews proposals to build interstate natural gas pipelines and LNG terminals.',
      size: '1,500+ employees',
      founded: 1977,
      industry: 'Federal Energy Regulation',
      website: 'https://ferc.gov',
      hq: 'Washington, DC'
    }
  },
  {
    id: 'gov-4',
    title: 'Senior Artificial Intelligence Policy Advisor',
    company: 'Department for Science, Innovation and Technology (DSIT)',
    companyLogo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'government',
    department: 'AI Safety & Frontier Model Governance',
    gazetteNoticeNo: 'DSIT-GOV-UK-884',
    payScaleGrade: 'Civil Service Grade 7',
    location: 'London, UK',
    country: 'United Kingdom',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 58000,
    salaryMax: 71000,
    salaryCurrency: 'GBP',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Government & Public Sector',
    governmentCategory: 'Public Tech & Cyber',
    postedDate: '2 days ago',
    deadline: 'October 10, 2026',
    urgent: true,
    featured: true,
    applicantsCount: 31,
    eligibilityCriteria: [
      'UK National, Commonwealth Citizen, or EEA national with settled status',
      'Security Clearance: Security Check (SC) or willing to undergo vetting',
      'Relevant postgraduate degree or equivalent policy/technical experience'
    ],
    description: 'Advise Cabinet ministers on international frontier AI safety evaluations, sovereign compute capabilities, and cross-sector statutory guidance governing autonomous agent deployments.',
    responsibilities: [
      'Draft primary and secondary legislation frameworks balancing public safety and high-velocity technology innovation',
      'Represent the UK at international governance bodies including the OECD AI Observatory and UN High-Level Advisory Body on AI',
      'Work alongside the AI Safety Institute to translate empirical model red-teaming results into policy interventions',
      'Engage with civil society organizations, leading industry labs, and parliamentary select committees'
    ],
    requirements: [
      'Demonstrated experience formulating policy in technology, telecommunications, or regulated algorithmic systems',
      'Understanding of frontier AI architecture (foundation models, reinforcement learning from human feedback, biosecurity risks)',
      'Exceptional briefing skills with ability to distill complex technical research into executive ministerial submissions',
      'Political awareness and experience working within or alongside government departments'
    ],
    benefits: [
      'Civil Service Alpha Defined Benefit Pension (average employer contribution >27%)',
      '25 days annual leave rising to 30 days after 5 years, plus 1 privilege day and 8 bank holidays',
      'Supportive parental leave and flexible working patterns',
      'Fast-stream and leadership development programmes across the Home Civil Service'
    ],
    skills: ['AI Governance', 'Policy Briefing', 'Legislation Drafting', 'Stakeholder Engagement', 'Frontier AI Safety'],
    companyInfo: {
      about: 'DSIT is the UK ministerial department tasked with positioning the UK at the forefront of global scientific and technological advancement.',
      size: '2,200+ civil servants',
      founded: 2023,
      industry: 'Government Science & Technology Policy',
      website: 'https://gov.uk/dsit',
      hq: 'London, UK'
    }
  },
  {
    id: 'gov-5',
    title: 'Senior Structural Bridge Engineer',
    company: 'State Department of Transportation',
    companyLogo: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'government',
    department: 'Division of Structures & Highways',
    gazetteNoticeNo: 'DOT-STATE-CIVIL-4412',
    payScaleGrade: 'Supervising Transportation Engineer (Grade 28)',
    location: 'Sacramento, CA',
    country: 'United States',
    workMode: 'On-Site',
    employmentType: 'Full-Time',
    salaryMin: 125000,
    salaryMax: 158000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Government & Public Sector',
    governmentCategory: 'State & Provincial',
    postedDate: '5 days ago',
    deadline: 'November 05, 2026',
    urgent: false,
    featured: false,
    applicantsCount: 14,
    eligibilityCriteria: [
      'Valid California Professional Engineer (PE) license in Civil Engineering required',
      'Valid California Class C Driver License',
      'State Civil Service eligibility list qualification'
    ],
    description: 'Direct the seismic retrofitting and structural rehabilitation of major highway spans, overpasses, and cable-stayed bridges ensuring vehicular safety under heavy seismic loads.',
    responsibilities: [
      'Perform finite element structural analysis for complex prestressed concrete and structural steel bridges',
      'Review engineering plans, construction submittals, and contractor change orders on high-budget infrastructure projects ($100M+)',
      'Conduct emergency structural inspections following seismic events and extreme weather occurrences',
      'Mentor junior transportation engineers and represent the department at public transportation board hearings'
    ],
    requirements: [
      'Active Professional Engineer (PE) License in Civil Engineering',
      '6+ years of bridge engineering or structural design experience adhering to AASHTO LRFD specifications',
      'Proficiency in structural modeling software such as SAP2000, CSiBridge, or LARSA 4D',
      'Knowledge of seismic hazard analysis and soil-structure interaction principles'
    ],
    benefits: [
      'CalPERS Defined Benefit Pension Plan (2% at 62 formula)',
      'Comprehensive state healthcare plans with extensive family coverage',
      'State holidays (12 days) plus annual vacation, sick leave, and personal holidays',
      'Deferred compensation 457(b) and 401(k) supplemental retirement programs'
    ],
    skills: ['Civil Engineering', 'AASHTO LRFD', 'Seismic Retrofit', 'CSiBridge / SAP2000', 'PE License', 'Public Works'],
    companyInfo: {
      about: 'The State Department of Transportation manages one of the largest and most complex multi-modal transportation networks in the world.',
      size: '21,000+ public employees',
      founded: 1895,
      industry: 'State Civil Engineering & Transportation',
      website: 'https://dot.ca.gov',
      hq: 'Sacramento, CA'
    }
  },
  {
    id: 'gov-6',
    title: 'Public Health Epidemiologist (Infectious Disease)',
    company: 'Centers for Disease Control and Prevention (CDC)',
    companyLogo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'government',
    department: 'National Center for Emerging and Zoonotic Infectious Diseases',
    gazetteNoticeNo: 'CDC-HHS-2026-EPI-019',
    payScaleGrade: 'GS-13 / GS-14',
    location: 'Atlanta, GA',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 112000,
    salaryMax: 154000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Government & Public Sector',
    governmentCategory: 'Public Healthcare',
    postedDate: '1 week ago',
    deadline: 'October 25, 2026',
    urgent: false,
    featured: false,
    applicantsCount: 26,
    eligibilityCriteria: [
      'United States Citizenship',
      'Master of Public Health (MPH) or Ph.D. in Epidemiology required',
      'Public Trust background check clearance'
    ],
    description: 'Track, model, and investigate outbreaks of emerging zoonotic pathogens, working alongside state health departments and international epidemiological laboratories.',
    responsibilities: [
      'Design and manage nationwide surveillance registries tracking vector-borne and antimicrobial-resistant pathogens',
      'Apply spatial epidemiology and statistical modeling using R and SAS to forecast disease transmission clusters',
      'Deploy rapidly as part of the Epidemic Intelligence Service (EIS) field investigation teams during declared health emergencies',
      'Author peer-reviewed scientific articles and weekly Morbidity and Mortality Weekly Report (MMWR) advisories'
    ],
    requirements: [
      'MPH or Ph.D. in Epidemiology, Biostatistics, or related public health discipline',
      '4+ years practical epidemiological surveillance experience in public health agency or academic research center',
      'Mastery of statistical packages (R, SAS, Python) and spatial GIS mapping tools (ArcGIS/QGIS)',
      'Experience communicating public health guidance under rapid response conditions'
    ],
    benefits: [
      'Federal retirement pension (FERS) + TSP matching up to 5%',
      'Federal health and life insurance plans',
      'On-site state-of-the-art laboratory facilities, gym, and child-care center at Atlanta headquarters',
      'Generous paid annual and sick leave'
    ],
    skills: ['Epidemiology', 'R / SAS', 'Public Health', 'Surveillance Systems', 'ArcGIS', 'Outbreak Investigation'],
    companyInfo: {
      about: 'The CDC is the nation’s premier health protection agency, working 24/7 to save lives and protect people from health threats.',
      size: '14,000+ personnel',
      founded: 1946,
      industry: 'Federal Public Health & Research',
      website: 'https://cdc.gov',
      hq: 'Atlanta, GA'
    }
  },

  // --- Additional High-Demand Corporate Roles ---
  {
    id: 'job-9',
    title: 'Senior DevOps & Site Reliability Engineer',
    company: 'Spotify',
    companyLogo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'Stockholm / Remote EU',
    country: 'Sweden',
    workMode: 'Remote',
    employmentType: 'Full-Time',
    salaryMin: 95000,
    salaryMax: 125000,
    salaryCurrency: 'EUR',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Software & Technology',
    postedDate: '3 days ago',
    urgent: false,
    featured: false,
    applicantsCount: 33,
    description: 'Ensure 99.999% global audio streaming availability for over 600 million monthly active users. You will optimize edge caching, Envoy service meshes, and multi-region Kubernetes clusters.',
    responsibilities: [
      'Manage multi-region GCP/AWS infrastructure orchestrating thousands of microservices',
      'Architect automated chaos engineering experiments and disaster recovery drill pipelines',
      'Implement Prometheus/Grafana observability dashboards and automated incident remediation runbooks',
      'Collaborate with streaming media core teams to optimize CDN caching hit rates and reduce audio buffering latencies'
    ],
    requirements: [
      '5+ years experience in Site Reliability Engineering, Cloud DevOps, or Infrastructure',
      'Expertise with Kubernetes, Terraform, Helm, and Linux systems internals',
      'Proficiency in Python or Go for infrastructure automation and custom Kubernetes controllers',
      'Demonstrated experience handling production on-call incidents for high-throughput consumer services'
    ],
    benefits: [
      'Spotify Global Work From Anywhere policy',
      'Comprehensive private health and dental insurance',
      'Flexible public holidays allowing swapping for religious/cultural observances',
      'Free Spotify Premium for employee, family, and close friends'
    ],
    skills: ['Kubernetes', 'Terraform', 'Prometheus', 'GCP', 'Linux', 'Go'],
    companyInfo: {
      about: 'Spotify transformed music listening forever when it launched in 2008. Today, it is the world’s most popular audio streaming subscription service.',
      size: '9,000+ employees',
      founded: 2006,
      industry: 'Audio Streaming & Entertainment Tech',
      website: 'https://spotify.com',
      hq: 'Stockholm, Sweden'
    }
  },
  {
    id: 'job-10',
    title: 'Senior Supply Chain & Logistics Manager',
    company: 'Siemens Industrial Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=120&h=120&q=80',
    companyType: 'private',
    location: 'Chicago, IL',
    country: 'United States',
    workMode: 'Hybrid',
    employmentType: 'Full-Time',
    salaryMin: 135000,
    salaryMax: 165000,
    salaryCurrency: 'USD',
    salaryPeriod: 'yr',
    experienceLevel: 'Senior',
    category: 'Supply Chain & Logistics',
    postedDate: '6 days ago',
    urgent: false,
    featured: false,
    applicantsCount: 16,
    description: 'Lead multi-tiered international procurement and component logistics for industrial automation equipment and smart infrastructure systems across North American manufacturing hubs.',
    responsibilities: [
      'Optimize end-to-end supply chain resiliency for critical semiconductor and copper components',
      'Negotiate master supply agreements and vendor SLAs with tier-1 suppliers across East Asia and Europe',
      'Implement SAP S/4HANA supply chain analytics and automated warehouse inventory tracking systems',
      'Drive Scope 3 carbon emission reduction initiatives across freight and maritime logistics partners'
    ],
    requirements: [
      '6+ years in strategic sourcing, industrial supply chain, or global procurement',
      'Bachelor’s in Supply Chain Management, Industrial Engineering, or Business Administration',
      'Fluency in SAP S/4HANA, Tableau/PowerBI supply chain dashboards',
      'APICS CSCP or CPIM certification preferred'
    ],
    benefits: [
      'Competitive compensation with annual management incentive bonus',
      '401(k) with 6% company match and immediate vesting',
      'Paid volunteer days and sustainability match incentives',
      'Continuous leadership and executive development academies'
    ],
    skills: ['Supply Chain', 'SAP S/4HANA', 'Vendor Negotiation', 'Procurement', 'Inventory Optimization', 'Logistics'],
    companyInfo: {
      about: 'Siemens is a leading technology company focused on industry, infrastructure, transport, and healthcare, creating technology with purpose.',
      size: '311,000+ employees',
      founded: 1847,
      industry: 'Industrial Automation & Infrastructure',
      website: 'https://siemens.com',
      hq: 'Munich, Germany'
    }
  }
];

export const JOB_CATEGORIES = [
  { id: 'tech', name: 'Software & Technology', count: 1240, icon: 'Cpu', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { id: 'gov', name: 'Government & Public Sector', count: 860, icon: 'Landmark', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { id: 'finance', name: 'Finance & Banking', count: 950, icon: 'TrendingUp', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { id: 'health', name: 'Healthcare & Life Sciences', count: 720, icon: 'Stethoscope', color: 'bg-rose-50 text-rose-700 border-rose-200' },
  { id: 'design', name: 'Design & Creative', count: 430, icon: 'Palette', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { id: 'hr', name: 'Human Resources', count: 390, icon: 'Users', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { id: 'marketing', name: 'Marketing & Communications', count: 580, icon: 'Megaphone', color: 'bg-violet-50 text-violet-700 border-violet-200' },
  { id: 'supply', name: 'Supply Chain & Logistics', count: 340, icon: 'Truck', color: 'bg-slate-50 text-slate-700 border-slate-200' },
];

export const TRUSTED_COMPANIES = [
  { name: 'Stripe', domain: 'Fintech Infrastructure', logoText: 'STRIPE' },
  { name: 'Microsoft', domain: 'Cloud & AI', logoText: 'MICROSOFT' },
  { name: 'AstraZeneca', domain: 'Biopharmaceuticals', logoText: 'ASTRAZENECA' },
  { name: 'CISA', domain: 'Federal Cyber Defense', logoText: 'CISA GOV' },
  { name: 'Siemens', domain: 'Industrial Automation', logoText: 'SIEMENS' },
  { name: 'Morgan Stanley', domain: 'Investment Banking', logoText: 'MORGAN STANLEY' },
  { name: 'NHS Digital', domain: 'Public Health Care', logoText: 'NHS DIGITAL' },
];
