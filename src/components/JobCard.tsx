import React from 'react';
import { Job } from '../types';
import { useApp } from '../context/AppContext';
import { 
  MapPin, 
  Bookmark, 
  Clock, 
  Users, 
  Landmark, 
  ShieldCheck, 
  Building2, 
  ExternalLink,
  ArrowRight,
  Check
} from 'lucide-react';

interface JobCardProps {
  job: Job;
  variant?: 'grid' | 'list';
}

export const JobCard: React.FC<JobCardProps> = ({ job, variant = 'grid' }) => {
  const { 
    navigateTo, 
    toggleSaveJob, 
    isJobSaved, 
    openApplyModal,
    hasApplied 
  } = useApp();

  const saved = isJobSaved(job.id);
  const applied = hasApplied(job.id);

  const formatSalary = (min: number, max: number, currency: string, period: string) => {
    const symbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$';
    const minFormatted = (min / 1000).toFixed(0) + 'k';
    const maxFormatted = (max / 1000).toFixed(0) + 'k';
    return `${symbol}${minFormatted} - ${symbol}${maxFormatted} / ${period}`;
  };

  const isGov = job.companyType === 'government';

  if (variant === 'list') {
    return (
      <div 
        id={`job-card-${job.id}`}
        className={`group bg-white rounded-xl border p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-blue-300 relative ${
          isGov ? 'border-indigo-100 bg-gradient-to-r from-white via-white to-indigo-50/20' : 'border-slate-200'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {/* Company Avatar / Logo */}
            <div className="relative shrink-0">
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-slate-200 shadow-xs"
              />
              {isGov && (
                <div 
                  className="absolute -top-1.5 -left-1.5 p-0.5 rounded-full bg-indigo-600 text-white shadow-xs" 
                  title="Official Public Sector Posting"
                >
                  <Landmark className="w-3 h-3" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {isGov ? (job.department || 'Civil Service') : job.category}
                </span>

                {isGov && job.payScaleGrade && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-100 text-indigo-800">
                    {job.payScaleGrade}
                  </span>
                )}

                {job.urgent && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                    Urgent Hiring
                  </span>
                )}

                {job.featured && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    Featured
                  </span>
                )}
              </div>

              <h3 
                onClick={() => navigateTo('job-detail', job.id)}
                className="text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer truncate"
              >
                {job.title}
              </h3>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  {job.company}
                </span>

                <span className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {job.location}
                </span>

                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                  {job.workMode}
                </span>

                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
                  {job.employmentType}
                </span>
              </div>
            </div>
          </div>

          {/* Right Action & Metadata */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <div className="text-left sm:text-right">
              <div className="text-base sm:text-lg font-bold text-slate-900">
                {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency, job.salaryPeriod)}
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {job.postedDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {job.applicantsCount} applicants
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleSaveJob(job.id)}
                className={`p-2 rounded-lg border transition-colors ${
                  saved 
                    ? 'bg-blue-50 border-blue-300 text-blue-600' 
                    : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300'
                }`}
                title={saved ? 'Remove Bookmark' : 'Save Job'}
                aria-label="Save Job"
              >
                <Bookmark className={`w-4 h-4 ${saved ? 'fill-blue-600' : ''}`} />
              </button>

              <button
                onClick={() => navigateTo('job-detail', job.id)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Details
              </button>

              {applied ? (
                <span className="px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Applied
                </span>
              ) : (
                <button
                  onClick={() => openApplyModal(job)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                >
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid Variant
  return (
    <div 
      id={`job-card-${job.id}`}
      className={`group bg-white rounded-xl border p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-blue-300 flex flex-col justify-between ${
        isGov ? 'border-indigo-100 bg-gradient-to-b from-white to-indigo-50/20' : 'border-slate-200'
      }`}
    >
      <div>
        {/* Card Top: Category & Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {isGov ? (job.department || 'Civil Service') : job.category}
            </span>

            {isGov && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Landmark className="w-2.5 h-2.5" /> Official
              </span>
            )}
          </div>

          <button
            onClick={() => toggleSaveJob(job.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              saved 
                ? 'bg-blue-50 border-blue-300 text-blue-600' 
                : 'bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300'
            }`}
            title={saved ? 'Remove Bookmark' : 'Save Job'}
            aria-label="Save Job"
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-blue-600' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 
          onClick={() => navigateTo('job-detail', job.id)}
          className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer line-clamp-2 min-h-[3rem] leading-snug"
        >
          {job.title}
        </h3>

        {/* Company & Location Info */}
        <div className="flex items-center gap-3 mt-3">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-slate-800 truncate">
              {job.company}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5 truncate">
              <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
              <span className="truncate">{job.location}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mt-4">
          <span className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">
            {job.workMode}
          </span>
          <span className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">
            {job.employmentType}
          </span>
          {isGov && job.payScaleGrade ? (
            <span className="px-2.5 py-1 rounded text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200">
              {job.payScaleGrade}
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700">
              {job.experienceLevel}
            </span>
          )}
        </div>

        {/* Description Excerpt */}
        <p className="mt-3 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Card Footer: Salary + Actions */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Compensation</span>
            <span className="text-sm sm:text-base font-bold text-slate-900">
              {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency, job.salaryPeriod)}
            </span>
          </div>

          <div className="text-right text-xs text-slate-400">
            <span className="block">{job.postedDate}</span>
            <span className="text-[11px]">{job.applicantsCount} applicants</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            onClick={() => navigateTo('job-detail', job.id)}
            className="w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
          >
            View Details
          </button>

          {applied ? (
            <div className="w-full py-2 px-3 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5" /> Applied
            </div>
          ) : (
            <button
              onClick={() => openApplyModal(job)}
              className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center shadow-xs"
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
