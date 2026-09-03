import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { JobCard } from '../components/JobCard';
import { 
  Landmark, 
  ShieldCheck, 
  Search, 
  FileText, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  Filter, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const GovJobsView: React.FC = () => {
  const { allJobs, navigateTo, openApplyModal } = useApp();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedGovCategory, setSelectedGovCategory] = useState<string>('All');
  const [clearanceOnly, setClearanceOnly] = useState(false);

  // All government jobs
  const govJobs = useMemo(() => {
    return allJobs.filter(j => j.companyType === 'government');
  }, [allJobs]);

  const filteredGovJobs = useMemo(() => {
    return govJobs.filter(job => {
      if (searchKeyword.trim()) {
        const query = searchKeyword.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(query);
        const matchDept = (job.department || '').toLowerCase().includes(query);
        const matchCompany = job.company.toLowerCase().includes(query);
        const matchSkills = job.skills.some(s => s.toLowerCase().includes(query));
        if (!matchTitle && !matchDept && !matchCompany && !matchSkills) return false;
      }

      if (selectedGovCategory !== 'All') {
        if (job.governmentCategory !== selectedGovCategory) return false;
      }

      if (clearanceOnly) {
        const hasClearance = job.eligibilityCriteria?.some(c => 
          c.toLowerCase().includes('clearance') || c.toLowerCase().includes('security')
        );
        if (!hasClearance) return false;
      }

      return true;
    });
  }, [govJobs, searchKeyword, selectedGovCategory, clearanceOnly]);

  const GOV_CATEGORIES = [
    'All',
    'Defense & Security',
    'Public Healthcare',
    'Public Tech & Cyber',
    'Federal & National',
    'State & Provincial'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Official Government Gateway Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-indigo-900 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-semibold">
            <Landmark className="w-3.5 h-3.5 text-indigo-400" />
            <span>Official Civil Service & Public Administration Registry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Government & Public Sector Appointments
          </h1>

          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
            Directly access verified vacancies across national intelligence, civil aviation, NHS healthcare boards, critical infrastructure agencies, and central government directorates.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-indigo-200">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Merit-based statutory evaluation</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Gazette notices tracked</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Public Service Pension eligible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gazette Notice / News Bulletin Banner */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-semibold">
            Notice to Applicants (Q3/Q4 Cycle):
          </span>
          <span className="text-amber-800">
            CISA and NHS Digital direct fast-stream competitions are accepting candidate filings until October 30.
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-amber-200/70 text-amber-900 font-bold shrink-0">
          Official Gazette #2026-B
        </span>
      </div>

      {/* Government Specific Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search query */}
          <div className="md:col-span-6 flex items-center gap-2.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search government department, agency or GS grade..."
              className="w-full text-xs sm:text-sm bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Sector Category */}
          <div className="md:col-span-4 flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
            <Landmark className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedGovCategory}
              onChange={(e) => setSelectedGovCategory(e.target.value)}
              className="w-full text-xs sm:text-sm bg-transparent text-slate-800 font-medium focus:outline-none cursor-pointer"
            >
              {GOV_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat} Sector</option>
              ))}
            </select>
          </div>

          {/* Clearance Toggle */}
          <div className="md:col-span-2 flex items-center justify-center p-2 bg-slate-50 border border-slate-200 rounded-xl">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={clearanceOnly}
                onChange={(e) => setClearanceOnly(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
              />
              <span>Vetting Req.</span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-heading font-bold text-slate-900">
            Active Public Sector Listings ({filteredGovJobs.length})
          </h2>
          <span className="text-xs text-slate-500">
            All positions carry official statutory pension and leave entitlements
          </span>
        </div>

        {filteredGovJobs.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
            <p className="text-sm font-semibold text-slate-700">
              No government vacancies matched your filters.
            </p>
            <button
              onClick={() => { setSearchKeyword(''); setSelectedGovCategory('All'); setClearanceOnly(false); }}
              className="text-xs text-blue-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredGovJobs.map(job => (
              <JobCard key={job.id} job={job} variant="grid" />
            ))}
          </div>
        )}
      </div>

      {/* Important Notice & Guidance Card */}
      <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-base font-heading font-bold text-slate-900">
            First Time Applying for Federal or Civil Service Appointments?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Review our verified guide on structuring CCAR competency statements, understanding GS Grade bands, and navigating security clearance timelines.
          </p>
        </div>

        <button
          onClick={() => navigateTo('blog-post', 'post-2')}
          className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs rounded-xl shadow-2xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Read Civil Service Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
