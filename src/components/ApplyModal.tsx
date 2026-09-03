import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

export const ApplyModal: React.FC = () => {
  const { 
    activeApplyJob, 
    closeApplyModal, 
    candidate, 
    submitApplication,
    uploadCandidateResume 
  } = useApp();

  if (!activeApplyJob) return null;

  const [fullName, setFullName] = useState(candidate.name);
  const [email, setEmail] = useState(candidate.email);
  const [phone, setPhone] = useState(candidate.phone);
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/in/alex-mercer-tech');
  const [coverLetter, setCoverLetter] = useState(
    `I am writing to express my enthusiastic interest in the ${activeApplyJob.title} position at ${activeApplyJob.company}. With deep background in scalable architectures and distributed systems, I am confident in my ability to deliver immediate value to your mission.`
  );
  const [authorized, setAuthorized] = useState(true);
  const [noticePeriod, setNoticePeriod] = useState('2 weeks');
  const [customResumeName, setCustomResumeName] = useState(candidate.resumeFileName || 'Alexandre_Mercer_Lead_Engineer_CV.pdf');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeStr = `${(file.size / 1024).toFixed(0)} KB`;
      setCustomResumeName(file.name);
      uploadCandidateResume({ name: file.name, size: sizeStr });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please complete all contact details before submitting.');
      return;
    }

    if (!authorized) {
      setErrorMsg('You must confirm work authorization eligibility for this opening.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      submitApplication({
        fullName,
        email,
        phone,
        resumeName: customResumeName,
        coverLetter,
        linkedinUrl
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div 
        id="apply-modal-dialog"
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <img
              src={activeApplyJob.companyLogo}
              alt={activeApplyJob.company}
              className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs"
            />
            <div>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Official Application Portal
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 leading-tight">
                {activeApplyJob.title}
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
                <span className="font-medium text-slate-800">{activeApplyJob.company}</span>
                <span>•</span>
                <span>{activeApplyJob.location}</span>
                <span>•</span>
                <span className="font-semibold text-slate-900">
                  ${(activeApplyJob.salaryMin / 1000).toFixed(0)}k - ${(activeApplyJob.salaryMax / 1000).toFixed(0)}k
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={closeApplyModal}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Section: Candidate Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Candidate Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn / Portfolio URL
                </label>
                <input
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          {/* Section: Resume Attachment */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Resume / Curriculum Vitae *
              </h4>
              <span className="text-[11px] text-slate-500">
                PDF, DOCX up to 10MB
              </span>
            </div>

            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 truncate max-w-[260px] sm:max-w-xs">
                    {customResumeName}
                  </p>
                  <p className="text-xs text-slate-500">
                    Stored on candidate profile • Ready for submission
                  </p>
                </div>
              </div>

              <label className="cursor-pointer px-3.5 py-1.5 text-xs font-semibold text-blue-700 bg-white border border-blue-300 hover:bg-blue-50 rounded-lg transition-colors shrink-0 shadow-2xs">
                <span>Upload New CV</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Section: Cover Note */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              3. Brief Cover Note or Introduction
            </h4>
            <textarea
              rows={3}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
              placeholder="Highlight relevant projects or why you are drawn to this organization..."
            />
          </div>

          {/* Section: Screening & Verification */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              4. Role Verification Questions
            </h4>

            <div className="flex items-start gap-2.5">
              <input
                id="work-auth-checkbox"
                type="checkbox"
                checked={authorized}
                onChange={(e) => setAuthorized(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="work-auth-checkbox" className="text-xs text-slate-700 leading-snug cursor-pointer">
                I confirm that I am legally authorized to work in the specified location without requiring unannounced immigration sponsorship.
              </label>
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <span className="text-xs font-semibold text-slate-700">Available Notice Period:</span>
              <select
                value={noticePeriod}
                onChange={(e) => setNoticePeriod(e.target.value)}
                className="text-xs px-2.5 py-1.5 bg-white border border-slate-300 rounded-md text-slate-700 focus:outline-none focus:border-blue-600"
              >
                <option value="Immediate">Immediate</option>
                <option value="2 weeks">2 weeks standard</option>
                <option value="1 month">1 month</option>
                <option value="2+ months">2+ months (Executive notice)</option>
              </select>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={closeApplyModal}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting to HR Queue...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Submit Verified Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
