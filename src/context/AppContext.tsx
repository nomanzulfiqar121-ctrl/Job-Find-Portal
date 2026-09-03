import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Screen, 
  Job, 
  JobFilters, 
  CandidateProfile, 
  ToastMessage, 
  AppliedJobRecord 
} from '../types';
import { INITIAL_JOBS } from '../data/mockJobs';
import { BLOG_POSTS } from '../data/mockBlogs';

interface AppContextType {
  screen: Screen;
  currentView: Screen;
  navigateTo: (targetScreen: Screen, id?: string) => void;
  selectedJobId: string | null;
  selectedJob: Job | null;
  selectedBlogId: string | null;
  allJobs: Job[];
  filters: JobFilters;
  setFilters: React.Dispatch<React.SetStateAction<JobFilters>>;
  updateFilter: <K extends keyof JobFilters>(key: K, value: JobFilters[K]) => void;
  resetFilters: () => void;
  candidate: CandidateProfile;
  toggleSaveJob: (jobId: string) => void;
  isJobSaved: (jobId: string) => boolean;
  activeApplyJob: Job | null;
  openApplyModal: (job: Job) => void;
  closeApplyModal: () => void;
  submitApplication: (appData: {
    fullName: string;
    email: string;
    phone: string;
    resumeName: string;
    coverLetter?: string;
    linkedinUrl?: string;
  }) => void;
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error', title?: string) => void;
  removeToast: (id: string) => void;
  authModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  postJobModalOpen: boolean;
  setPostJobModalOpen: (open: boolean) => void;
  updateCandidateProfile: (updated: Partial<CandidateProfile>) => void;
  uploadCandidateResume: (fileData: { name: string; size: string }) => void;
  addNewJob: (jobData: Partial<Job>) => void;
  hasApplied: (jobId: string) => boolean;
}

const DEFAULT_FILTERS: JobFilters = {
  keyword: '',
  location: '',
  category: 'All',
  workMode: [],
  employmentType: [],
  experienceLevel: [],
  salaryRange: [0, 300000],
  datePosted: 'all',
  sortBy: 'relevant',
};

const DEFAULT_PROFILE: CandidateProfile = {
  id: 'cand-01',
  name: 'Alexandre Mercer',
  email: 'alex.mercer@apexcloud.dev',
  phone: '+1 (415) 890-2341',
  title: 'Senior Software Engineer & Distributed Systems Lead',
  location: 'San Francisco, CA',
  bio: 'Systems engineer with 7+ years of experience in distributed cloud infrastructure, microservices in Go & TypeScript, and fault-tolerant financial APIs. Looking for high-impact technical challenges.',
  targetSalary: '$180,000 - $220,000 / yr',
  preferredWorkMode: 'Hybrid or Remote',
  experienceYears: 7,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  resumeFileName: 'Alexandre_Mercer_Lead_Engineer_CV.pdf',
  resumeFileSize: '284 KB',
  resumeLastUpdated: 'September 1, 2026',
  skills: ['TypeScript', 'React', 'Go', 'Kubernetes', 'PostgreSQL', 'Cloud Architecture', 'Distributed Systems'],
  savedJobIds: ['job-1', 'job-4'],
  appliedJobs: [
    {
      jobId: 'job-7',
      appliedDate: 'August 29, 2026',
      status: 'Under Review',
      fullName: 'Alexandre Mercer',
      email: 'alex.mercer@apexcloud.dev',
      phone: '+1 (415) 890-2341',
      resumeName: 'Alexandre_Mercer_Lead_Engineer_CV.pdf',
      coverLetter: 'Excited about scaling enterprise cloud migrations at AWS.'
    }
  ],
  emailAlerts: {
    weeklyDigest: true,
    instantMatches: true,
    governmentNotices: true,
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(BLOG_POSTS[0].id);
  const [allJobs, setAllJobs] = useState<Job[]>(() => {
    const saved = localStorage.getItem('careervantage_jobs');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_JOBS;
  });

  const [filters, setFilters] = useState<JobFilters>(DEFAULT_FILTERS);

  const [candidate, setCandidate] = useState<CandidateProfile>(() => {
    const saved = localStorage.getItem('careervantage_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return DEFAULT_PROFILE;
  });

  const [activeApplyJob, setActiveApplyJob] = useState<Job | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [postJobModalOpen, setPostJobModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('careervantage_profile', JSON.stringify(candidate));
  }, [candidate]);

  useEffect(() => {
    localStorage.setItem('careervantage_jobs', JSON.stringify(allJobs));
  }, [allJobs]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success', title?: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, type, message, title }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const navigateTo = (targetScreen: Screen, id?: string) => {
    if (id) {
      if (targetScreen === 'job-detail') {
        setSelectedJobId(id);
      } else if (targetScreen === 'blog-post') {
        setSelectedBlogId(id);
      }
    }
    setScreen(targetScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFilter = <K extends keyof JobFilters>(key: K, value: JobFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    showToast('Filters cleared', 'info');
  };

  const toggleSaveJob = (jobId: string) => {
    setCandidate(prev => {
      const isSaved = prev.savedJobIds.includes(jobId);
      const updatedSaved = isSaved 
        ? prev.savedJobIds.filter(id => id !== jobId)
        : [...prev.savedJobIds, jobId];
      
      const job = allJobs.find(j => j.id === jobId);
      const title = job ? job.title : 'Job';

      if (isSaved) {
        showToast(`Removed "${title}" from saved jobs`, 'info');
      } else {
        showToast(`Saved "${title}" to your bookmarks`, 'success');
      }

      return {
        ...prev,
        savedJobIds: updatedSaved
      };
    });
  };

  const isJobSaved = (jobId: string) => {
    return candidate.savedJobIds.includes(jobId);
  };

  const hasApplied = (jobId: string) => {
    return candidate.appliedJobs.some(a => a.jobId === jobId);
  };

  const openApplyModal = (job: Job) => {
    setActiveApplyJob(job);
  };

  const closeApplyModal = () => {
    setActiveApplyJob(null);
  };

  const submitApplication = (appData: {
    fullName: string;
    email: string;
    phone: string;
    resumeName: string;
    coverLetter?: string;
    linkedinUrl?: string;
  }) => {
    if (!activeApplyJob) return;

    const newApplication: AppliedJobRecord = {
      jobId: activeApplyJob.id,
      appliedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Application Submitted',
      fullName: appData.fullName,
      email: appData.email,
      phone: appData.phone,
      resumeName: appData.resumeName,
      coverLetter: appData.coverLetter,
      linkedinUrl: appData.linkedinUrl
    };

    setCandidate(prev => ({
      ...prev,
      appliedJobs: [newApplication, ...prev.appliedJobs.filter(a => a.jobId !== activeApplyJob.id)]
    }));

    // Increment applicants count
    setAllJobs(prev => prev.map(j => {
      if (j.id === activeApplyJob.id) {
        return { ...j, applicantsCount: j.applicantsCount + 1 };
      }
      return j;
    }));

    showToast(
      `Your application for ${activeApplyJob.title} at ${activeApplyJob.company} has been received! Tracking reference generated.`,
      'success',
      'Application Submitted'
    );

    closeApplyModal();
  };

  const updateCandidateProfile = (updated: Partial<CandidateProfile>) => {
    setCandidate(prev => ({ ...prev, ...updated }));
    showToast('Profile information updated successfully', 'success');
  };

  const uploadCandidateResume = (fileData: { name: string; size: string }) => {
    setCandidate(prev => ({
      ...prev,
      resumeFileName: fileData.name,
      resumeFileSize: fileData.size,
      resumeLastUpdated: 'Today'
    }));
    showToast(`Resume "${fileData.name}" uploaded and parsed successfully`, 'success');
  };

  const addNewJob = (jobData: Partial<Job>) => {
    const newId = 'user-job-' + Date.now();
    const createdJob: Job = {
      id: newId,
      title: jobData.title || 'Untitled Opening',
      company: jobData.company || 'Enterprise Partner',
      companyLogo: jobData.companyLogo || 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=120&h=120&q=80',
      companyType: jobData.companyType || 'private',
      location: jobData.location || 'Remote',
      country: jobData.country || 'United States',
      workMode: jobData.workMode || 'Remote',
      employmentType: jobData.employmentType || 'Full-Time',
      salaryMin: jobData.salaryMin || 120000,
      salaryMax: jobData.salaryMax || 160000,
      salaryCurrency: jobData.salaryCurrency || 'USD',
      salaryPeriod: 'yr',
      experienceLevel: jobData.experienceLevel || 'Mid-Level',
      category: jobData.category || 'Software & Technology',
      postedDate: 'Just now',
      urgent: false,
      featured: true,
      applicantsCount: 0,
      description: jobData.description || 'Exciting opportunity to build cutting-edge solutions with an industry-leading team.',
      responsibilities: jobData.responsibilities?.length ? jobData.responsibilities : [
        'Lead core architecture and drive high-priority product initiatives',
        'Collaborate cross-functionally across engineering, product and design teams',
        'Maintain high testing and deployment reliability standards'
      ],
      requirements: jobData.requirements?.length ? jobData.requirements : [
        '3+ years relevant industry experience',
        'Strong problem-solving and communication skills',
        'Fluency with modern web frameworks and cloud infrastructure'
      ],
      benefits: [
        'Comprehensive healthcare, dental and vision coverage',
        'Flexible working hours and remote stipend',
        '401(k) matching and annual wellness budget'
      ],
      skills: jobData.skills?.length ? jobData.skills : ['Team Leadership', 'Problem Solving', 'Communication'],
      companyInfo: {
        about: 'Innovative tech organization shaping the future of global enterprise workflows.',
        size: '250-500 employees',
        founded: 2021,
        industry: jobData.category || 'Technology',
        website: 'https://example.com',
        hq: jobData.location || 'San Francisco, CA'
      }
    };

    setAllJobs(prev => [createdJob, ...prev]);
    showToast(`Vacancy "${createdJob.title}" posted successfully!`, 'success');
  };

  const selectedJob = allJobs.find(j => j.id === selectedJobId) || allJobs[0] || null;

  return (
    <AppContext.Provider value={{
      screen,
      currentView: screen,
      navigateTo,
      selectedJobId,
      selectedJob,
      selectedBlogId,
      allJobs,
      filters,
      setFilters,
      updateFilter,
      resetFilters,
      candidate,
      toggleSaveJob,
      isJobSaved,
      activeApplyJob,
      openApplyModal,
      closeApplyModal,
      submitApplication,
      toasts,
      showToast,
      removeToast,
      authModalOpen,
      setAuthModalOpen,
      postJobModalOpen,
      setPostJobModalOpen,
      updateCandidateProfile,
      uploadCandidateResume,
      addNewJob,
      hasApplied,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
