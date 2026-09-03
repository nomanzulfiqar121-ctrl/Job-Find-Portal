import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { JobCard } from '../components/JobCard';
import { JOB_CATEGORIES, TRUSTED_COMPANIES } from '../data/mockJobs';
import { BLOG_POSTS } from '../data/mockBlogs';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Landmark, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Users, 
  Stethoscope, 
  Palette, 
  Megaphone, 
  Truck, 
  Building2, 
  Sparkles,
  Award,
  ChevronRight,
  Clock,
  BookOpen
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6" />,
  Landmark: <Landmark className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Megaphone: <Megaphone className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />
};

export const HomeView: React.FC = () => {
  const { 
    allJobs, 
    navigateTo, 
    updateFilter, 
    setPostJobModalOpen 
  } = useApp();

  const [keywordInput, setKeywordInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('All');
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'finance' | 'urgent'>('all');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keywordInput.trim()) updateFilter('keyword', keywordInput.trim());
    if (locationInput.trim()) updateFilter('location', locationInput.trim());
    if (categoryInput !== 'All') updateFilter('category', categoryInput);
    navigateTo('jobs');
  };

  const handlePopularSearchClick = (term: string) => {
    updateFilter('keyword', term);
    navigateTo('jobs');
  };

  const handleCategoryCardClick = (catName: string) => {
    if (catName === 'Government & Public Sector') {
      navigateTo('gov-jobs');
    } else {
      updateFilter('category', catName);
      navigateTo('jobs');
    }
  };

  // Filter featured jobs based on tab
  const featuredJobs = allJobs.filter(job => {
    if (activeTab === 'tech') return job.category.includes('Software') || job.category.includes('Technology');
    if (activeTab === 'finance') return job.category.includes('Finance') || job.category.includes('Banking');
    if (activeTab === 'urgent') return job.urgent;
    return true;
  }).slice(0, 6);

  // Government spotlight jobs
  const govSpotlight = allJobs.filter(j => j.companyType === 'government').slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-100/60 via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Text & Search bar */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Over 14,200+ Verified Senior Openings Live Today</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Find the <span className="text-blue-600">Perfect Career</span> Opportunity For Your Skills.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                The premier verified recruitment platform connecting elite corporate professionals and civil service talent with top enterprises and government agencies worldwide.
              </p>

              {/* Comprehensive Search Bar inspired by reference layout */}
              <form 
                onSubmit={handleHeroSearch}
                className="bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-300/80 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-stretch gap-2.5"
              >
                {/* Keyword Field */}
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    placeholder="Job title, skills, or company"
                    className="w-full text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
                  />
                </div>

                {/* Location Field */}
                <div className="flex-1 flex items-center gap-2.5 px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    placeholder="City, country or Remote"
                    className="w-full text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Jobs</span>
                </button>
              </form>

              {/* Popular Searches Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
                <span className="font-semibold text-slate-500">Popular:</span>
                {[
                  'Cloud Engineer', 
                  'Design Systems', 
                  'Quantitative Analyst', 
                  'Public Healthcare', 
                  'CISA Defense', 
                  'Remote'
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handlePopularSearchClick(tag)}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Realistic Corporate Imagery & Floating Trust Badges */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Primary High-Resolution Real Workplace Photography */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                    alt="Senior professional leading executive team"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-slate-900/70 backdrop-blur-md border border-white/20">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                      Verified Career Network
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      "Found my Lead Architect appointment within 14 days."
                    </p>
                  </div>
                </div>

                {/* Floating Trust Badge 1: Top Right (Reference inspiration) */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base border border-blue-200">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      340+ Jobs Posted Daily
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Direct employer verification
                    </span>
                  </div>
                </div>

                {/* Floating Trust Badge 2: Bottom Left */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base border border-emerald-200">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      98.4% Placement Rate
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Vetted talent pool
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-200/80">
            <div className="p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                142,500+
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1 block">
                Active Verified Jobs
              </span>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-blue-600">
                18,400+
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1 block">
                Hiring Organizations
              </span>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-indigo-700">
                3,200+
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1 block">
                Civil Service Openings
              </span>
            </div>

            <div className="p-4 bg-white/70 backdrop-blur-xs rounded-xl border border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                $174,000
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 mt-1 block">
                Average Senior Comp
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUSTED EMPLOYERS TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
          Trusted by Fortune 500 Leaders & Central Government Departments
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all">
          {TRUSTED_COMPANIES.map(org => (
            <div 
              key={org.name}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-2xs text-slate-700 font-heading font-bold text-sm tracking-wide"
            >
              <Building2 className="w-4 h-4 text-slate-400" />
              <span>{org.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. JOB CATEGORIES SECTION (Reference 2 Inspiration) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Browse Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
              Explore by Industry Category
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Discover opportunities across commercial technologies and civil service agencies.
            </p>
          </div>

          <button
            onClick={() => navigateTo('jobs')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {JOB_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryCardClick(cat.name)}
              className="group p-5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.color} group-hover:scale-105 transition-transform`}>
                  {CATEGORY_ICONS[cat.icon] || <Briefcase className="w-6 h-6" />}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {cat.count.toLocaleString()}+ positions open
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED JOBS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Curated Openings
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
              Featured & Urgent Opportunities
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Verified corporate openings offering competitive compensation and rapid review.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Openings
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'tech' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tech & Cloud
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'finance' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Finance
            </button>
            <button
              onClick={() => setActiveTab('urgent')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'urgent' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Urgent
            </button>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredJobs.map(job => (
            <JobCard key={job.id} job={job} variant="grid" />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigateTo('jobs')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Explore All 2,300+ Positions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. DEDICATED GOVERNMENT JOBS BANNER (Mandatory Core Feature) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-2xl p-8 sm:p-10 border border-indigo-800/60 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-xs font-semibold">
                <Landmark className="w-3.5 h-3.5 text-indigo-300" />
                <span>Public Sector & Civil Service Gateway</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
                Serve the Nation. Explore Verified Government & Defense Vacancies.
              </h2>

              <p className="text-sm sm:text-base text-indigo-100 leading-relaxed max-w-xl">
                Direct access to federal civil service, national cybersecurity (CISA), healthcare systems (NHS/CDC), energy commissions, and state infrastructure boards.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => navigateTo('gov-jobs')}
                  className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Landmark className="w-4 h-4" />
                  <span>Access Government Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs text-indigo-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Official Gazette Notice Numbers Tracked</span>
                </div>
              </div>
            </div>

            {/* Right: 2 Snapshot Cards */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-1">
                Recent Public Sector Notices
              </div>
              {govSpotlight.map(j => (
                <div 
                  key={j.id}
                  onClick={() => navigateTo('job-detail', j.id)}
                  className="p-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-indigo-200 mb-1">
                    <span className="font-semibold">{j.department || j.company}</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-100 font-bold">
                      {j.payScaleGrade}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {j.title}
                  </h4>
                  <div className="flex items-center justify-between mt-2 text-xs text-indigo-200">
                    <span>{j.location}</span>
                    <span className="text-amber-300 font-medium">Closes {j.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAREER INSIGHTS PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Career Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
              Executive Career Advice & Playbooks
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Evidence-based strategies on salary negotiation, ATS-optimized CVs, and civil service exams.
            </p>
          </div>

          <button
            onClick={() => navigateTo('blog')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map(post => (
            <div
              key={post.id}
              onClick={() => navigateTo('blog-post', post.id)}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 backdrop-blur-xs text-slate-900 shadow-2xs">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-semibold text-slate-800">{post.author.name}</span>
                </div>

                <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. EMPLOYER CALLOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              For Employers & Hiring Committees
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
              Need to hire exceptional technical and managerial talent?
            </h3>
            <p className="text-sm text-slate-600">
              Publish to over 240,000 qualified candidates with automated skills verification, pre-screening rubrics, and direct candidate messaging.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => setPostJobModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm text-center"
            >
              Post an Opening Today
            </button>
            <button
              onClick={() => navigateTo('jobs')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-sm transition-colors text-center"
            >
              Browse Talent Bench
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
