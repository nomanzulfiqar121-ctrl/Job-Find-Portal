export type Screen = 
  | 'home' 
  | 'jobs' 
  | 'job-detail' 
  | 'gov-jobs' 
  | 'blog' 
  | 'blog-post' 
  | 'profile';

export type WorkMode = 'Remote' | 'Hybrid' | 'On-Site';
export type EmploymentType = 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship';
export type ExperienceLevel = 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Lead / Principal' | 'Executive';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  companyType: 'private' | 'government';
  department?: string; // e.g. "Department of Homeland Security", "NHS Digital", "Ministry of Transportation"
  gazetteNoticeNo?: string; // For government jobs
  payScaleGrade?: string; // e.g. "GS-14", "Band 8b", "Level 5 Executive"
  location: string;
  country: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  salaryMin: number;
  salaryMax: number;
  salaryCurrency: string;
  salaryPeriod: 'yr' | 'mo';
  experienceLevel: ExperienceLevel;
  category: string;
  governmentCategory?: 'Federal & National' | 'State & Provincial' | 'Public Healthcare' | 'Defense & Security' | 'Public Tech & Cyber' | 'Education & Research';
  postedDate: string; // ISO or relative
  deadline?: string;
  urgent?: boolean;
  featured?: boolean;
  applicantsCount: number;
  eligibilityCriteria?: string[]; // e.g. ["Citizen of USA/EU", "Security Clearance: Secret eligible", "Bachelors in STEM"]
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  skills: string[];
  companyInfo: {
    about: string;
    size: string;
    founded: number;
    industry: string;
    website: string;
    hq: string;
  };
}

export interface JobFilters {
  keyword: string;
  location: string;
  category: string;
  workMode: string[];
  employmentType: string[];
  experienceLevel: string[];
  salaryRange: [number, number]; // e.g. [0, 250000]
  datePosted: string; // 'all' | '24h' | 'week' | 'month'
  sortBy: 'relevant' | 'newest' | 'salary-high' | 'applicants-low';
  governmentCategory?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Career Advice' | 'Resume & CV' | 'Interviews' | 'Public Sector' | 'Negotiation' | 'Workplace Trends';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  readTime: string;
  publishedDate: string;
  tags: string[];
  keyTakeaways: string[];
}

export interface AppliedJobRecord {
  jobId: string;
  appliedDate: string;
  status: 'Application Submitted' | 'Under Review' | 'Shortlisted' | 'Interview Scheduled' | 'Offer Extended';
  fullName: string;
  email: string;
  phone: string;
  resumeName: string;
  coverLetter?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  location: string;
  bio: string;
  targetSalary: string;
  preferredWorkMode: string;
  experienceYears: number;
  avatarUrl: string;
  resumeFileName?: string;
  resumeFileSize?: string;
  resumeLastUpdated?: string;
  skills: string[];
  savedJobIds: string[];
  appliedJobs: AppliedJobRecord[];
  emailAlerts: {
    weeklyDigest: boolean;
    instantMatches: boolean;
    governmentNotices: boolean;
  };
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title?: string;
  message: string;
}
