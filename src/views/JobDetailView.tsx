import React from 'react';
import { useApp } from '../context/AppContext';
import { JobCard } from '../components/JobCard';
import { 
  ArrowLeft, 
  MapPin, 
  Building2, 
  Calendar, 
  Clock, 
  DollarSign, 
  Share2, 
  Bookmark, 
  Check, 
  ShieldCheck, 
  Globe, 
  Users, 
  CheckCircle2, 
  Landmark, 
  FileText,
  AlertCircle
} from 'lucide-react';

export const JobDetailView: React.FC = () => {
  const { 
    selectedJob, 
    allJobs, 
    navigateTo, 
    toggleSaveJob, 
    isJobSaved, 
    openApplyModal,
    hasApplied,
    showToast 
  } = useApp();

  if (!selectedJob) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">No Job Selected</h2>
        <button
          onClick={() => navigateTo('jobs')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
        >
          Return to Job Listings
        </button>
      </div>
    );
  }

  const saved = isJobSaved(selectedJob.id);
  const applied = hasApplied(selectedJob.id);
  const isGov = selectedJob.companyType === 'government';

  const formatSalary = (min: number, max: number, currency: string, period: string) => {
    const symbol = currency === 'USD' ? '$' : currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$';
    return `${symbol}${(min / 1000).toFixed(0)}k - ${symbol}${(max / 1000).toFixed(0)}k / ${period}`;
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Job listing URL copied to clipboard!', 'info');
  };

  // Recommended similar jobs
  const relatedJobs = allJobs
    .filter(j => j.id !== selectedJob.id && (j.category === selectedJob.category || j.companyType === selectedJob.companyType))
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo(isGov ? 'gov-jobs' : 'jobs')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {isGov ? 'Government Vacancies' : 'Search Results'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 text-slate-500 hover:text-slate-800 bg-white border border-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
            title="Share Job"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={() => toggleSaveJob(selectedJob.id)}
            className={`p-2 rounded-lg border transition-colors flex items-center gap-1.5 text-xs font-semibold ${
              saved 
                ? 'bg-blue-50 border-blue-300 text-blue-600' 
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-blue-600' : ''}`} />
            <span>{saved ? 'Saved' : 'Save Job'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className={`bg-white rounded-2xl border p-6 sm:p-8 shadow-sm relative overflow-hidden ${
        isGov ? 'border-indigo-200 bg-gradient-to-br from-white via-white to-indigo-50/30' : 'border-slate-200'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
            <img
              src={selectedJob.companyLogo}
              alt={selectedJob.company}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shadow-xs shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {isGov ? (selectedJob.department || 'Civil Service') : selectedJob.category}
                </span>

                {isGov && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold bg-indigo-100 text-indigo-800">
                    <Landmark className="w-3 h-3" /> Official Public Notice
                  </span>
                )}

                {selectedJob.payScaleGrade && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-800">
                    {selectedJob.payScaleGrade}
                  </span>
                )}

                {selectedJob.urgent && (
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                    Priority Hiring
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                {selectedJob.title}
              </h1>

              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 mt-3 text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  {selectedJob.company}
                </span>

                <span className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  {selectedJob.location}
                </span>

                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                  {selectedJob.workMode}
                </span>

                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                  {selectedJob.employmentType}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTA Block */}
          <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
            <div className="text-left md:text-right">
              <span className="text-xs text-slate-400 font-medium block">Annual Target Compensation</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900">
                {formatSalary(selectedJob.salaryMin, selectedJob.salaryMax, selectedJob.salaryCurrency, selectedJob.salaryPeriod)}
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {applied ? (
                <div className="px-6 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Application Submitted</span>
                </div>
              ) : (
                <button
                  id="btn-apply-details"
                  onClick={() => openApplyModal(selectedJob)}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Apply for this Role</span>
                </button>
              )}
            </div>

            {selectedJob.deadline && (
              <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Application closes: {selectedJob.deadline}
              </span>
            )}
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block font-medium">Experience Needed</span>
            <span className="text-slate-900 font-semibold">{selectedJob.experienceLevel}</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Date Posted</span>
            <span className="text-slate-900 font-semibold">{selectedJob.postedDate}</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Active Applicants</span>
            <span className="text-slate-900 font-semibold">{selectedJob.applicantsCount} professionals</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Verification Status</span>
            <span className="text-emerald-700 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Direct Employer
            </span>
          </div>
        </div>
      </div>

      {/* Main Details Grid: Left Content + Right Company Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Job Description & Requirements */}
        <div className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          
          {/* Government Eligibility Alert Box (if applicable) */}
          {isGov && selectedJob.eligibilityCriteria && (
            <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-indigo-900 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800">
                <Landmark className="w-4 h-4" />
                <span>Statutory Civil Service Eligibility Criteria</span>
              </div>
              <ul className="text-xs space-y-1 text-indigo-950 pl-5 list-disc leading-relaxed">
                {selectedJob.eligibilityCriteria.map((crit, idx) => (
                  <li key={idx}>{crit}</li>
                ))}
              </ul>
              {selectedJob.gazetteNoticeNo && (
                <div className="text-[11px] text-indigo-700 pt-1 border-t border-indigo-200 font-mono">
                  Official Gazette Reference: {selectedJob.gazetteNoticeNo}
                </div>
              )}
            </div>
          )}

          {/* Section: Overview */}
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Role Overview & Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {selectedJob.description}
            </p>
          </div>

          {/* Section: Responsibilities */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Key Responsibilities
            </h2>
            <ul className="space-y-2.5">
              {selectedJob.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Requirements & Qualifications */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Qualifications & Competencies
            </h2>
            <ul className="space-y-2.5">
              {selectedJob.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Benefits & Compensation */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Perks, Benefits & Equity
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedJob.benefits.map((benefit, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Skills & Technologies */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-lg font-heading font-bold text-slate-900">
              Target Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {selectedJob.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar: About the Company & Application Action */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Company Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
            <h3 className="text-base font-heading font-bold text-slate-900 pb-3 border-b border-slate-100">
              About the Organization
            </h3>

            <div className="flex items-center gap-3">
              <img
                src={selectedJob.companyLogo}
                alt={selectedJob.company}
                className="w-12 h-12 rounded-xl object-cover border border-slate-200"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {selectedJob.company}
                </h4>
                <p className="text-xs text-slate-500">
                  {selectedJob.companyInfo.industry}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedJob.companyInfo.about}
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-600 border-t border-slate-100">
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Company Size:</span>
                <span className="font-semibold text-slate-800">{selectedJob.companyInfo.size}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Founded:</span>
                <span className="font-semibold text-slate-800">{selectedJob.companyInfo.founded}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Headquarters:</span>
                <span className="font-semibold text-slate-800">{selectedJob.companyInfo.hq}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Website:</span>
                <a 
                  href={selectedJob.companyInfo.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Visit site <Globe className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openApplyModal(selectedJob)}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Apply for this Opening</span>
              </button>
            </div>
          </div>

          {/* Related Vacancies Panel */}
          {relatedJobs.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
              <h3 className="text-sm font-heading font-bold text-slate-900 pb-2 border-b border-slate-100">
                Similar Openings You May Like
              </h3>
              <div className="space-y-3">
                {relatedJobs.map(rJob => (
                  <div
                    key={rJob.id}
                    onClick={() => navigateTo('job-detail', rJob.id)}
                    className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-slate-50/50 transition-all cursor-pointer group"
                  >
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {rJob.title}
                    </h4>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                      <span>{rJob.company}</span>
                      <span className="font-semibold text-slate-700">${(rJob.salaryMin / 1000).toFixed(0)}k+</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
